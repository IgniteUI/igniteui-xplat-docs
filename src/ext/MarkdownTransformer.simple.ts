import { TypeDocApiResolver } from './TypeDocApiResolver';
const visit = require('unist-util-visit');

function transformCodeRefs(options: any) {
    const typeDocResolver: TypeDocApiResolver | undefined = options.typeDocResolver;
    const skippedNodes = new Set<any>();

    function getNodeText(node: any): string {
        if (!node) return '';

        let text = '';
        if (typeof node.value === 'string') {
            text += node.value;
        }

        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                text += ' ' + getNodeText(child);
            }
        }

        return text.trim();
    }

    function collectInlineCodeNodes(node: any, results: any[] = []): any[] {
        if (!node) return results;

        if (node.type === 'inlineCode') {
            results.push(node);
        }

        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                collectInlineCodeNodes(child, results);
            }
        }

        return results;
    }

    function looksLikeUiPartOrSlotName(value: string): boolean {
        if (!value) return false;
        if (!/^[a-z][a-zA-Z0-9-]*$/.test(value)) return false;
        if (value.indexOf('.') >= 0) return false;
        return true;
    }

    function isSlotOrCssPartContextText(text: string): boolean {
        const normalized = text.toLowerCase();
        return /css\s+parts?|\bslots?\b|slot\s+content|part\s+name|slot\s+name/.test(normalized);
    }

    function isRawMarkdownTableParagraph(node: any): boolean {
        if (!node || node.type !== 'paragraph') return false;
        const text = getNodeText(node);
        return /^\|/.test(text) && /\n\|(?:\s*:?[-]+:?[\s|]*)+\n?/m.test(text);
    }

    function findNearestHeadingText(parent: any, beforeIndex: number): string {
        if (!parent || !Array.isArray(parent.children) || typeof beforeIndex !== 'number') return '';
        for (let i = beforeIndex - 1; i >= 0; i--) {
            const sibling = parent.children[i];
            if (sibling?.type === 'heading') {
                return getNodeText(sibling);
            }
        }
        return '';
    }

    function isSlotOrPartHeading(text: string): boolean {
        const normalized = text.toLowerCase();
        return /\bslots?\b|\bparts?\b|css\s+parts?/.test(normalized);
    }

    function markSkippedInlineCode(tree: any) {
        function walk(node: any, parent?: any, index?: number) {
            if (!node) return;

            const previousSibling = parent && typeof index === 'number' && index > 0 ? parent.children[index - 1] : null;
            const previousSiblingText = getNodeText(previousSibling);

            if (node.type === 'table') {
                const tableText = getNodeText(node);

                if (isSlotOrCssPartContextText(tableText) || isSlotOrCssPartContextText(previousSiblingText)) {
                    for (const inlineNode of collectInlineCodeNodes(node)) {
                        if (looksLikeUiPartOrSlotName(inlineNode.value)) {
                            skippedNodes.add(inlineNode);
                        }
                    }
                }
            } else if (node.type === 'list') {
                // Flag inline code in lists that appear under a Slots or CSS Parts section.
                // Check the previous sibling text first (e.g. an intro paragraph that says "several slots"),
                // then fall back to scanning for the nearest heading in the same parent.
                const inSlotOrPartContext =
                    isSlotOrCssPartContextText(previousSiblingText) ||
                    isSlotOrPartHeading(findNearestHeadingText(parent, index ?? 0));

                if (inSlotOrPartContext) {
                    for (const inlineNode of collectInlineCodeNodes(node)) {
                        if (looksLikeUiPartOrSlotName(inlineNode.value)) {
                            skippedNodes.add(inlineNode);
                        }
                    }
                }
            } else if (node.type === 'paragraph' || node.type === 'blockquote' || node.type === 'listItem') {
                const blockText = getNodeText(node);
                const isContextBlock = isSlotOrCssPartContextText(blockText);
                const isContextualRawTable = isRawMarkdownTableParagraph(node) && isSlotOrCssPartContextText(previousSiblingText);

                if (isContextBlock || isContextualRawTable) {
                    for (const inlineNode of collectInlineCodeNodes(node)) {
                        if (looksLikeUiPartOrSlotName(inlineNode.value)) {
                            skippedNodes.add(inlineNode);
                        }
                    }
                }
            }

            if (Array.isArray(node.children)) {
                for (let childIndex = 0; childIndex < node.children.length; childIndex++) {
                    walk(node.children[childIndex], node, childIndex);
                }
            }
        }

        walk(tree);
    }

    function getContextTypes(): string[] {
        const result: string[] = [];

        if (options.typeName && typeof options.typeName === 'string') {
            result.push(options.typeName);
        }

        if (Array.isArray(options.mentionedTypes)) {
            for (const t of options.mentionedTypes) {
                if (typeof t === 'string' && t.length > 0) {
                    result.push(t);
                }
            }
        }

        return [...new Set(result)];
    }

    function transformRef(node: any, index: number, parent: any) {
        if (node.type !== 'inlineCode') return;
        if (skippedNodes.has(node)) return;

        const value = node.value;
        if (!value || value === '') return;

        // Skip sample viewers, inline code, CSS custom properties
        if (value.indexOf('sample=') >= 0 ||
            value.indexOf('height=') >= 0 ||
            value.indexOf('=') >= 0 ||
            value.indexOf(':') >= 0 ||
            value.indexOf('&') >= 0 ||
            value.indexOf('{') >= 0 ||
            value.indexOf('--') === 0 ||
            value.indexOf(' ') >= 0) {
            return;
        }

        if (!typeDocResolver) return;

        const mentionedTypeNames = Array.isArray(options.mentionedTypes)
            ? options.mentionedTypes.filter((t: any) => typeof t === 'string').map((t: string) => t.toLowerCase())
            : [];

        let result = null;

        // Prefer context type members for bare refs, e.g. `Select` on
        // DateRangePicker should resolve to a member, not IgrSelect type.
        if (value.indexOf('.') < 0) {
            // If a ref is declared as a mentioned type for the topic, treat it as
            // a component/type name first to avoid matching similarly named members
            // on context types (e.g. `Tree` -> TreeItem.tree).
            if (mentionedTypeNames.indexOf(value.toLowerCase()) >= 0 && typeDocResolver.hasType(value)) {
                result = typeDocResolver.resolveApiLink(value);
            }

            const contextTypes = getContextTypes();
            if (!result && contextTypes.length > 0) {
                result = typeDocResolver.resolveMemberLink(value, contextTypes);
            }
        }

        if (!result) {
            result = typeDocResolver.resolveApiLink(value);
        }
        if (!result) return;

        const link = {
            type: "link",
            url: result.url,
            children: [{
                type: "inlineCode",
                value: result.displayText
            }]
        };

        parent.children.splice(index, 1, link);
    }

    return function (tree: any) {
        markSkippedInlineCode(tree);
        visit(tree, 'inlineCode', transformRef);
    }
}

export { transformCodeRefs };