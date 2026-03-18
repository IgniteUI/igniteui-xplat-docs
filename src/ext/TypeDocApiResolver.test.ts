import { describe, test, expect, beforeEach } from 'vitest';
import { TypeDocApiResolver } from './TypeDocApiResolver';

// Minimal TypeDoc JSON structure for testing
function makeTypeDocJson(modules: any[]) {
    return {
        id: 0,
        name: "Test Project",
        variant: "project",
        kind: 1,
        flags: {},
        children: modules,
    };
}

function makeModule(name: string, children: any[]) {
    return {
        id: 1,
        name,
        variant: "declaration",
        kind: 2,
        flags: {},
        children,
    };
}

function makeClass(id: number, name: string, children: any[] = []) {
    return { id, name, variant: "declaration", kind: 128, flags: {}, children };
}

function makeEnum(id: number, name: string, members: any[] = []) {
    return { id, name, variant: "declaration", kind: 8, flags: {}, children: members };
}

function makeEnumMember(id: number, name: string, value: string) {
    return { id, name, variant: "declaration", kind: 16, flags: {}, type: { type: "literal", value } };
}

function makeInterface(id: number, name: string, children: any[] = []) {
    return { id, name, variant: "declaration", kind: 256, flags: {}, children };
}

function makeTypeAlias(id: number, name: string) {
    return { id, name, variant: "declaration", kind: 2097152, flags: {}, type: { type: "union", types: [] } };
}

function makeProperty(id: number, name: string, typeName = "string") {
    return { id, name, variant: "declaration", kind: 1024, flags: {}, type: { type: "intrinsic", name: typeName } };
}

function makeMethod(id: number, name: string) {
    return { id, name, variant: "declaration", kind: 2048, flags: {} };
}

function makeAccessor(id: number, name: string) {
    return { id, name, variant: "declaration", kind: 262144, flags: {}, type: { type: "intrinsic", name: "string" } };
}

function makeEvent(id: number, name: string) {
    return { id, name, variant: "declaration", kind: 1048576, flags: {}, type: { type: "reflection" } };
}

const sampleTypeDoc = makeTypeDocJson([
    makeModule("igniteui-react", [
        makeClass(100, "IgrList", [
            makeProperty(101, "size", "string"),
            makeMethod(102, "clear"),
            makeEvent(103, "onItemClick"),
        ]),
        makeClass(200, "IgrAvatar", [
            makeProperty(201, "shape", "string"),
        ]),
        makeEnum(300, "AvatarShape", [
            makeEnumMember(301, "Circle", "circle"),
            makeEnumMember(302, "Rounded", "rounded"),
            makeEnumMember(303, "Square", "square"),
        ]),
        makeInterface(400, "ChatRenderContext", [
            makeProperty(401, "messages"),
        ]),
        makeTypeAlias(500, "ButtonVariant"),
    ]),
    makeModule("igniteui-react-grids", [
        makeClass(600, "IgrGrid", [
            makeProperty(601, "primaryKey"),
            makeProperty(602, "data"),
            makeMethod(603, "selectAllRows"),
            makeAccessor(604, "rowHeight"),
            makeEvent(605, "onCellClick"),
        ]),
        makeEnum(700, "FilteringLogic", [
            makeEnumMember(701, "And", "and"),
            makeEnumMember(702, "Or", "or"),
        ]),
    ]),
]);

describe('TypeDocApiResolver', () => {
    let resolver: TypeDocApiResolver;

    beforeEach(() => {
        resolver = new TypeDocApiResolver('React');
        resolver.loadFromObject(sampleTypeDoc as any);
    });

    describe('Loading', () => {
        test('should load types from TypeDoc JSON', () => {
            expect(resolver.typeCount).toBe(7);
        });

        test('should recognize known types', () => {
            expect(resolver.hasType('IgrList')).toBe(true);
            expect(resolver.hasType('IgrGrid')).toBe(true);
            expect(resolver.hasType('AvatarShape')).toBe(true);
        });

        test('should return false for unknown types', () => {
            expect(resolver.hasType('NonExistent')).toBe(false);
        });
    });

    describe('Generic name lookup', () => {
        test('should find type by generic name (prefix stripped)', () => {
            expect(resolver.hasType('List')).toBe(true);
            expect(resolver.hasType('Avatar')).toBe(true);
            expect(resolver.hasType('Grid')).toBe(true);
        });

        test('should find enum by its own name (no prefix)', () => {
            expect(resolver.hasType('AvatarShape')).toBe(true);
            expect(resolver.hasType('FilteringLogic')).toBe(true);
        });

        test('should find type by prefixed lookup', () => {
            // "List" → tries "IgrList" via prefix
            const info = resolver.getType('List');
            expect(info).not.toBeNull();
            expect(info!.name).toBe('IgrList');
        });
    });

    describe('URL resolution - types', () => {
        test('should resolve class by generic name', () => {
            const result = resolver.resolveApiLink('List');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('/classes/');
            expect(result!.url).toContain('igrlist.html');
            expect(result!.displayText).toBe('IgrList');
        });

        test('should resolve class by platform name', () => {
            const result = resolver.resolveApiLink('IgrGrid');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('/classes/');
            expect(result!.url).toContain('igrgrid.html');
        });

        test('should resolve enum', () => {
            const result = resolver.resolveApiLink('AvatarShape');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('/enums/');
            expect(result!.url).toContain('avatarshape.html');
        });

        test('should resolve interface', () => {
            const result = resolver.resolveApiLink('ChatRenderContext');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('/interfaces/');
            expect(result!.url).toContain('chatrendercontext.html');
        });

        test('should resolve type alias', () => {
            const result = resolver.resolveApiLink('ButtonVariant');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('/types/');
            expect(result!.url).toContain('buttonvariant.html');
        });

        test('should return null for unknown type', () => {
            const result = resolver.resolveApiLink('NonExistent');
            expect(result).toBeNull();
        });
    });

    describe('URL resolution - members', () => {
        test('should resolve type.property', () => {
            const result = resolver.resolveApiLink('List.size');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('igrlist.html#size');
            expect(result!.displayText).toBe('size');
        });

        test('should resolve type.method', () => {
            const result = resolver.resolveApiLink('Grid.selectAllRows');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('igrgrid.html#selectallrows');
        });

        test('should resolve type.event', () => {
            const result = resolver.resolveApiLink('Grid.onCellClick');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('igrgrid.html#oncellclick');
        });

        test('should resolve platform-prefixed type.member', () => {
            const result = resolver.resolveApiLink('IgrGrid.primaryKey');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('igrgrid.html#primarykey');
            expect(result!.displayText).toBe('primaryKey');
        });

        test('should still link when member not found in data (inherited)', () => {
            const result = resolver.resolveApiLink('List.unknownMember');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('igrlist.html#unknownmember');
            expect(result!.displayText).toBe('unknownMember');
        });

        test('should return null when type not found', () => {
            const result = resolver.resolveApiLink('NonExistent.prop');
            expect(result).toBeNull();
        });
    });

    describe('Package prefixes in URL', () => {
        test('core module types should have no package prefix', () => {
            const result = resolver.resolveApiLink('IgrList');
            expect(result).not.toBeNull();
            // Should not have "igniteui_react." in the URL
            expect(result!.url).not.toContain('igniteui_react.');
        });

        test('grids module types should have package prefix', () => {
            const result = resolver.resolveApiLink('IgrGrid');
            expect(result).not.toBeNull();
            expect(result!.url).toContain('igniteui_react_grids.');
        });
    });

    describe('Case insensitive fallback', () => {
        test('should find type with wrong case', () => {
            expect(resolver.hasType('igrlist')).toBe(true);
            expect(resolver.hasType('IGRLIST')).toBe(true);
            expect(resolver.hasType('IgRlIsT')).toBe(true);
        });
    });
});

describe('TypeDocApiResolver - WebComponents', () => {
    let resolver: TypeDocApiResolver;

    beforeEach(() => {
        resolver = new TypeDocApiResolver('WebComponents');
        // WC uses Igc prefix + Component suffix
        const wcTypeDoc = makeTypeDocJson([
            makeModule("igniteui-webcomponents", [
                makeClass(100, "IgcListComponent", [
                    makeProperty(101, "size"),
                ]),
            ]),
        ]);
        resolver.loadFromObject(wcTypeDoc as any);
    });

    test('should resolve by generic name stripping prefix and suffix', () => {
        // "List" → strip to find "IgcListComponent" (strips Igc prefix, Component suffix → "List")
        const result = resolver.resolveApiLink('List');
        expect(result).not.toBeNull();
        expect(result!.url).toContain('igclistcomponent.html');
    });

    test('should resolve by platform name directly', () => {
        const result = resolver.resolveApiLink('IgcListComponent');
        expect(result).not.toBeNull();
        expect(result!.url).toContain('igclistcomponent.html');
    });
});

describe('TypeDocApiResolver - project-root declarations', () => {
    test('should load declarations directly under project root', () => {
        const resolver = new TypeDocApiResolver('WebComponents');
        const wcRootDeclarations = makeTypeDocJson([
            makeClass(100, 'IgcListComponent', [
                makeProperty(101, 'size'),
            ]),
            makeEnum(200, 'DatePart', [
                makeEnumMember(201, 'Year', 'year'),
            ]),
        ]);

        resolver.loadFromObject(wcRootDeclarations as any);

        expect(resolver.typeCount).toBe(2);
        expect(resolver.resolveApiLink('List')?.url).toContain('igclistcomponent.html');
        expect(resolver.resolveApiLink('DatePart')?.url).toContain('/enums/datepart.html');
    });
});
