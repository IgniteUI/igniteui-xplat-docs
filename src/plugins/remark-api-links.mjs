/**
 * Remark plugin that transforms inline-code API type names inside
 * "## API References" sections into hyperlinks pointing to the
 * Infragistics API documentation.
 *
 * Reads apiDocRoot / apiDocOverrideRoot / apiDocOverrideComponents from
 * docConfig.json, resolves {environment:...} tokens against the generated
 * environment.json, then walks the top-level AST children to find the
 * ## API References heading and the list that follows it.
 */

import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

/** @type {{ apiDocRoot: string, apiDocOverrideRoot: string, overrideComponents: Set<string> } | null} */
let _cfg = null;

function resolvePlatformAndLang() {
    const platform = process.env.PLATFORM;
    const lang     = process.env.LANG_CODE;
    if (platform && lang) return { platform, lang };

    try {
        const cfgPath = path.resolve(process.cwd(), '.platform.json');
        if (existsSync(cfgPath)) {
            const cfg = JSON.parse(readFileSync(cfgPath, 'utf-8'));
            return {
                platform: platform || cfg.platform || 'React',
                lang:     lang     || cfg.lang     || 'en',
            };
        }
    } catch { /* ignore */ }

    return { platform: platform || 'React', lang: lang || 'en' };
}

function loadConfig() {
    if (_cfg !== null) return _cfg;

    try {
        const root                   = process.cwd();
        const { platform, lang }     = resolvePlatformAndLang();
        const nodeEnv                = process.env.NODE_ENV || 'development';

        const docConfig      = JSON.parse(readFileSync(path.join(root, 'docConfig.json'), 'utf-8'));
        const platformConfig = docConfig[platform];
        if (!platformConfig) { _cfg = null; return null; }

        const envPath = path.join(root, 'generated', platform, lang, 'environment.json');
        const envData = existsSync(envPath)
            ? JSON.parse(readFileSync(envPath, 'utf-8'))
            : {};
        const env = envData[nodeEnv] ?? envData.development ?? {};

        const resolve = (str) => (str || '').replace(
            /\{environment:(\w+)\}/g,
            (_, key) => env[key] ?? '',
        );

        _cfg = {
            apiDocRoot:          resolve(platformConfig.apiDocRoot     || ''),
            apiDocOverrideRoot:  resolve(platformConfig.apiDocOverrideRoot || ''),
            overrideComponents:  new Set(platformConfig.apiDocOverrideComponents || []),
        };
    } catch {
        _cfg = null;
    }

    return _cfg;
}

/**
 * Build the full API URL for a type name.
 * Override components use apiDocOverrideRoot; everything else uses apiDocRoot.
 *
 * @param {string} typeName
 * @param {{ apiDocRoot: string, apiDocOverrideRoot: string, overrideComponents: Set<string> }} cfg
 * @returns {string | null}
 */
function typeToUrl(typeName, cfg) {
    const base = cfg.overrideComponents.has(typeName)
        ? cfg.apiDocOverrideRoot
        : cfg.apiDocRoot;

    if (!base) return null;

    return base.replace(/\/?$/, '/') + 'classes/' + typeName.toLowerCase() + '.html';
}

/**
 * Remark plugin — call with no arguments, e.g. `remarkPlugins: [remarkApiLinks]`.
 */
export function remarkApiLinks() {
    return (tree) => {
        const cfg = loadConfig();
        if (!cfg?.apiDocRoot) return;

        const nodes = tree.children;
        if (!Array.isArray(nodes)) return;

        let inApiSection = false;

        for (const node of nodes) {
            // Track whether we're inside the API References section.
            if (node.type === 'heading') {
                if (node.depth <= 2) {
                    const text = (node.children || [])
                        .map((c) => c.value || '')
                        .join('')
                        .toLowerCase()
                        .trim();
                    inApiSection = node.depth === 2 && text.startsWith('api reference');
                }
                continue;
            }

            if (!inApiSection) continue;

            // Transform list items whose only content is a single inline code span.
            if (node.type === 'list') {
                for (const item of node.children || []) {
                    const para = (item.children || [])[0];
                    if (para?.type !== 'paragraph') continue;

                    const pChildren = para.children || [];
                    if (pChildren.length === 1 && pChildren[0].type === 'inlineCode') {
                        const typeName = pChildren[0].value;
                        const url      = typeToUrl(typeName, cfg);
                        if (url) {
                            para.children = [{
                                type:     'link',
                                url,
                                title:    null,
                                children: [{ type: 'inlineCode', value: typeName }],
                            }];
                        }
                    }
                }
            }
        }
    };
}
