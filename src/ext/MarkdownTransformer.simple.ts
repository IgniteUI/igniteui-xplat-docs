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

        let result = null;

        // For bare member names (e.g. `Label`, `selection`) prefer resolving against
        // front-matter context (`mentionedTypes`) and current type context before
        // falling back to type names. This avoids collisions such as `Select`
        // linking to the `IgrSelect` component instead of the current type's
        // `select` member.
        if (value.indexOf('.') < 0) {
            const contextTypes = getContextTypes();
            if (contextTypes.length > 0) {
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