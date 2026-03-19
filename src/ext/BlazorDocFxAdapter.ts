/**
 * Blazor DocFX JSON adapter.
 *
 * This file provides parsing and URL-building logic for Blazor's DocFX-style
 * API JSON (which uses `kindString`/`uid` instead of TypeDoc's numeric `kind`).
 *
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  TEMPORARY — remove this file (and its references in               ║
 * ║  TypeDocApiResolver.ts) once Blazor ships a real TypeDoc JSON.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import type { TypeDocTypeInfo, TypeDocMemberInfo } from './TypeDocApiResolver';

type TypeCategory = 'enum' | 'class' | 'interface' | 'type';
type MemberCategory = 'property' | 'method' | 'accessor' | 'event' | 'enum-member';

/**
 * Returns true if the parsed JSON looks like a Blazor DocFX export
 * (has `kindString` or `uid` at the root) rather than a TypeDoc JSON.
 */
export function isBlazorDocFxJson(root: any): boolean {
    return typeof root?.kindString === 'string' || typeof root?.uid === 'string';
}

/**
 * Parses a Blazor DocFX JSON root node into TypeDocTypeInfo entries.
 * The caller is responsible for indexing the returned entries into
 * the lookup maps.
 */
export function parseBlazorDocFxJson(
    root: any,
    stripPlatformAffixes: (name: string) => string,
): TypeDocTypeInfo[] {
    const rootNamespace: string = root.uid ?? root.fullName ?? 'IgniteUI.Blazor.Controls';
    const results: TypeDocTypeInfo[] = [];

    for (const child of root.children ?? []) {
        const typeCategory = classifyType(child.kindString);
        if (!typeCategory) continue;

        const members = new Map<string, TypeDocMemberInfo>();
        for (const member of child.children ?? []) {
            const memberKind = classifyMember(member.kindString);
            if (!memberKind) continue;
            // Strip parameter signature: "SaveLayout()" → "SaveLayout", "LoadLayout(String)" → "LoadLayout"
            const memberName = member.name.replace(/\(.*\)$/, '');
            if (!members.has(memberName)) {
                members.set(memberName, {
                    name: memberName,
                    kind: memberKind,
                    uid: member.uid,
                });
            }
        }

        const namespace: string = child.uid
            ? child.uid.substring(0, child.uid.lastIndexOf('.')) || rootNamespace
            : rootNamespace;

        const genericName = stripPlatformAffixes(child.name);

        // Collect base class names from inheritance metadata
        const inheritance: string[] = [];
        if (Array.isArray(child.inheritance)) {
            for (const base of child.inheritance) {
                const baseName = base.name;
                if (baseName && baseName !== 'Object') {
                    inheritance.push(baseName);
                }
            }
        }

        results.push({
            name: child.name,
            genericName,
            kind: typeCategory,
            module: 'igniteui-blazor',
            namespace,
            members,
            ...(inheritance.length > 0 ? { inheritance } : {}),
        });
    }

    return results;
}

/**
 * Builds a Blazor API docs URL for a type.
 * Format: `{apiRoot}{namespace}.{TypeName}.html`
 */
export function buildBlazorUrl(apiRoot: string, typeInfo: TypeDocTypeInfo): string {
    const ns = typeInfo.namespace ?? 'IgniteUI.Blazor.Controls';
    return `${apiRoot}${ns}.${typeInfo.name}.html`;
}

/**
 * Builds a Blazor member anchor hash.
 * Uses the member uid if available (handles parameterized methods correctly),
 * otherwise falls back to constructing from namespace + type + member name.
 * Format: `{uid_with_dots_parens_replaced_by_underscores}`
 */
export function buildBlazorMemberHash(typeInfo: TypeDocTypeInfo, memberName: string, memberUid?: string): string {
    if (memberUid) {
        return memberUid.replace(/[.()]/g, '_');
    }
    // Fallback: construct from namespace + type + member
    const ns = typeInfo.namespace ?? 'IgniteUI.Blazor.Controls';
    const prefix = ns.split('.').join('_') + '_';
    return prefix + typeInfo.name + '_' + memberName;
}

// ── Private helpers ──────────────────────────────────────────

function classifyType(kindString: string | undefined): TypeCategory | null {
    if (!kindString) return null;
    switch (kindString) {
        case 'class': return 'class';
        case 'interface': return 'interface';
        case 'enum': return 'enum';
        case 'type': return 'type';
        default: return null;
    }
}

function classifyMember(kindString: string | undefined): MemberCategory | null {
    if (!kindString) return null;
    switch (kindString) {
        case 'property': return 'property';
        case 'method': return 'method';
        case 'accessor': return 'accessor';
        case 'event': return 'event';
        case 'enum-member': return 'enum-member';
        default: return null;
    }
}
