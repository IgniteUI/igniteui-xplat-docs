import { beforeEach, describe, expect, test } from 'vitest';
import { transformCodeRefs } from './MarkdownTransformer.simple';
import { TypeDocApiResolver } from './TypeDocApiResolver';

function makeTypeDocJson(modules: any[]) {
    return {
        id: 0,
        name: 'Test Project',
        variant: 'project',
        kind: 1,
        flags: {},
        children: modules,
    };
}

function makeModule(name: string, children: any[]) {
    return {
        id: 1,
        name,
        variant: 'declaration',
        kind: 2,
        flags: {},
        children,
    };
}

function makeClass(id: number, name: string, children: any[] = []) {
    return { id, name, variant: 'declaration', kind: 128, flags: {}, children };
}

function makeProperty(id: number, name: string, typeName = 'string') {
    return { id, name, variant: 'declaration', kind: 1024, flags: {}, type: { type: 'intrinsic', name: typeName } };
}

function makeMethod(id: number, name: string) {
    return { id, name, variant: 'declaration', kind: 2048, flags: {}, signatures: [] };
}

function runTransform(tree: any, resolver: TypeDocApiResolver, options: any = {}) {
    const plugin = transformCodeRefs({
        typeDocResolver: resolver,
        mentionedTypes: options.mentionedTypes ?? [],
        typeName: options.typeName,
    });

    plugin(tree);
    return tree;
}

const sampleTypeDoc = makeTypeDocJson([
    makeModule('igniteui-react', [
        makeClass(100, 'IgrAvatar', [
            makeProperty(101, 'shape'),
            makeProperty(102, 'initials'),
        ]),
        makeClass(150, 'IgrSelect'),
        makeClass(175, 'IgrDateRangePicker', [
            makeMethod(176, 'select'),
            makeMethod(177, 'clear'),
        ]),
        makeClass(200, 'IgrTreeItem', [
            makeProperty(201, 'label'),
            makeProperty(202, 'active'),
        ]),
    ]),
]);

describe('MarkdownTransformer.simple', () => {
    let resolver: TypeDocApiResolver;

    beforeEach(() => {
        resolver = new TypeDocApiResolver('React');
        resolver.loadFromObject(sampleTypeDoc as any);
    });

    test('keeps slot names as inline code but still links component names in slot prose', () => {
        const avatarNode = { type: 'inlineCode', value: 'Avatar' };
        const prefixNode = { type: 'inlineCode', value: 'prefix' };
        const suffixNode = { type: 'inlineCode', value: 'suffix' };

        const tree = {
            type: 'root',
            children: [{
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'With ' },
                    prefixNode,
                    { type: 'text', value: ' and ' },
                    suffixNode,
                    { type: 'text', value: ' slots we can add content to the ' },
                    avatarNode,
                    { type: 'text', value: ' component.' },
                ],
            }],
        };

        runTransform(tree, resolver, { mentionedTypes: ['Avatar'] });

        const paragraphChildren = tree.children[0].children;
        expect(paragraphChildren[1].type).toBe('inlineCode');
        expect(paragraphChildren[3].type).toBe('inlineCode');
        expect(paragraphChildren[5].type).toBe('link');
        expect(paragraphChildren[5].url).toContain('igniteui-react.igravatar.html');
    });

    test('keeps CSS part names as inline code in styling paragraphs', () => {
        const avatarNode = { type: 'inlineCode', value: 'Avatar' };
        const shapeNode = { type: 'inlineCode', value: 'shape' };
        const initialsNode = { type: 'inlineCode', value: 'initials' };

        const tree = {
            type: 'root',
            children: [{
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'The ' },
                    avatarNode,
                    { type: 'text', value: ' component exposes several CSS parts, including ' },
                    shapeNode,
                    { type: 'text', value: ' and ' },
                    initialsNode,
                    { type: 'text', value: '.' },
                ],
            }],
        };

        runTransform(tree, resolver, { mentionedTypes: ['Avatar'] });

        const paragraphChildren = tree.children[0].children;
        expect(paragraphChildren[1].type).toBe('link');
        expect(paragraphChildren[3].type).toBe('inlineCode');
        expect(paragraphChildren[5].type).toBe('inlineCode');
    });

    test('keeps CSS part names as inline code inside raw markdown styling tables inferred from preceding prose', () => {
        const initialsNode = { type: 'inlineCode', value: 'initials' };

        const tree = {
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        { type: 'text', value: 'The ' },
                        { type: 'inlineCode', value: 'Avatar' },
                        { type: 'text', value: ' component exposes several CSS parts, giving you full control over its style:' },
                    ],
                },
                {
                    type: 'paragraph',
                    children: [
                        { type: 'text', value: '|Name|Description|\n|--|--|\n| ' },
                        initialsNode,
                        { type: 'text', value: ' | The initials wrapper of the avatar. |' },
                    ],
                },
            ],
        };

        runTransform(tree, resolver, { mentionedTypes: ['Avatar'] });

        expect(tree.children[1].children[1].type).toBe('inlineCode');
    });

    test('still links regular member references outside slot/CSS-part context', () => {
        const shapeNode = { type: 'inlineCode', value: 'shape' };

        const tree = {
            type: 'root',
            children: [{
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'The ' },
                    shapeNode,
                    { type: 'text', value: ' property controls the avatar appearance.' },
                ],
            }],
        };

        runTransform(tree, resolver, { mentionedTypes: ['Avatar'] });

        expect(tree.children[0].children[1].type).toBe('link');
        expect(tree.children[0].children[1].url).toContain('igniteui-react.igravatar.html#shape');
    });

    test('prefers contextual members over colliding type names for bare refs', () => {
        const selectNode = { type: 'inlineCode', value: 'Select' };

        const tree = {
            type: 'root',
            children: [{
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'Call ' },
                    selectNode,
                    { type: 'text', value: ' to choose a range.' },
                ],
            }],
        };

        runTransform(tree, resolver, { mentionedTypes: ['DateRangePicker'] });

        expect(tree.children[0].children[1].type).toBe('link');
        expect(tree.children[0].children[1].url).toContain('igniteui-react.igrdaterangepicker.html#select');
        expect(tree.children[0].children[1].url).not.toContain('igniteui-react.igrselect.html');
    });

    test('links known types in API References section', () => {
        const selectNode = { type: 'inlineCode', value: 'Select' };
        const avatarNode = { type: 'inlineCode', value: 'Avatar' };

        const tree = {
            type: 'root',
            children: [
                {
                    type: 'heading',
                    depth: 2,
                    children: [{ type: 'text', value: 'API References' }],
                },
                {
                    type: 'list',
                    ordered: false,
                    children: [
                        {
                            type: 'listItem',
                            children: [{ type: 'paragraph', children: [selectNode] }],
                        },
                        {
                            type: 'listItem',
                            children: [{ type: 'paragraph', children: [avatarNode] }],
                        },
                    ],
                },
            ],
        };

        runTransform(tree, resolver, { mentionedTypes: ['Avatar'] });

        expect(tree.children[1].children[0].children[0].children[0].type).toBe('link');
        expect(tree.children[1].children[0].children[0].children[0].url).toContain('igrselect.html');
        expect(tree.children[1].children[1].children[0].children[0].type).toBe('link');
        expect(tree.children[1].children[1].children[0].children[0].url).toContain('igravatar.html');
    });

    test('links known types in prose even when not in mentionedTypes', () => {
        // Select is a known type but NOT in mentionedTypes — should still link
        // because the member lookup found no match on context types.
        const selectNode = { type: 'inlineCode', value: 'Select' };

        const tree = {
            type: 'root',
            children: [{
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'The ' },
                    selectNode,
                    { type: 'text', value: ' component is useful.' },
                ],
            }],
        };

        // typeName is Avatar (no 'select' member), mentionedTypes does NOT include Select
        runTransform(tree, resolver, { mentionedTypes: ['Avatar'], typeName: 'Avatar' });

        // Select should be linked — it's a known type and not a member of context types
        expect(tree.children[0].children[1].type).toBe('link');
        expect(tree.children[0].children[1].url).toContain('igrselect.html');
    });
});