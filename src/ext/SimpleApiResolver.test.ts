import { describe, test, expect, beforeEach } from 'vitest';
import { SimpleApiResolver } from './SimpleApiResolver';

describe('SimpleApiResolver', () => {
    describe('Component Suffix Application', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('Angular');
        });

        test('should apply Component suffix to actual components', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('igxgridcomponent.html');
        });

        test('should NOT apply suffix to EventArgs', () => {
            const result = resolver.resolveApiLink('@api:CellClickEventArgs');
            expect(result).toContain('igxcellclickeventargs.html');
            expect(result).not.toContain('eventargscomponent');
        });

        test('should NOT apply suffix to Options', () => {
            const result = resolver.resolveApiLink('@api:FilterOptions');
            expect(result).toContain('igxfilteroptions.html');
            expect(result).not.toContain('optionscomponent');
        });

        test('should NOT apply suffix to Settings', () => {
            const result = resolver.resolveApiLink('@api:GridSettings');
            expect(result).toContain('igxgridsettings.html');
            expect(result).not.toContain('settingscomponent');
        });

        test('should NOT apply suffix to Service classes', () => {
            const result = resolver.resolveApiLink('@api:GridService');
            expect(result).toContain('igxgridservice.html');
            expect(result).not.toContain('servicecomponent');
        });

        test('should NOT apply suffix to Directives', () => {
            const result = resolver.resolveApiLink('@api:GridRowDirective');
            expect(result).toContain('igxgridrowdirective.html');
            expect(result).not.toContain('directivecomponent');
        });

        test('should NOT apply suffix to Pipes', () => {
            const result = resolver.resolveApiLink('@api:DatePipe');
            expect(result).toContain('igxdatepipe.html');
            expect(result).not.toContain('pipecomponent');
        });

        test('should NOT apply suffix to enums', () => {
            const result = resolver.resolveApiLink('@api:enum:FilteringLogic');
            expect(result).toContain('filteringlogic.html');
            expect(result).not.toContain('component');
        });

        test('should NOT apply suffix to interfaces', () => {
            const result = resolver.resolveApiLink('@api:interface:IGridState');
            expect(result).toContain('igxigridstate.html');
            expect(result).not.toContain('component');
        });
    });

    describe('React Platform - No Suffix', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('React');
        });

        test('should not add suffix for React components', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('igrgrid.html');
            expect(result).not.toContain('component');
        });

        test('should not add suffix for React event args', () => {
            const result = resolver.resolveApiLink('@api:CellClickEventArgs');
            expect(result).toContain('igrcellclickeventargs.html');
        });
    });

    describe('WebComponents Platform', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('WebComponents');
        });

        test('should apply Component suffix to actual components', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('igcgridcomponent.html');
        });

        test('should NOT apply suffix to EventArgs', () => {
            const result = resolver.resolveApiLink('@api:RowSelectionEventArgs');
            expect(result).toContain('igcrowselectioneventargs.html');
            expect(result).not.toContain('eventargscomponent');
        });
    });

    describe('Type Inference', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('Angular');
        });

        test('should infer EventArgs as interface', () => {
            const result = resolver.resolveApiLink('@api:CellClickEventArgs');
            expect(result).toContain('/interfaces/');
        });

        test('should infer Options as interface', () => {
            const result = resolver.resolveApiLink('@api:FilterOptions');
            expect(result).toContain('/interfaces/');
        });

        test('should treat components as classes', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('/classes/');
        });
    });

    describe('Angular Platform', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('Angular');
        });

        test('should resolve basic component reference', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html');
        });

        test('should resolve component with member', () => {
            const result = resolver.resolveApiLink('@api:Grid.data');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#data');
        });

        test('should resolve enum', () => {
            const result = resolver.resolveApiLink('@api:enum:FilteringLogic');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html');
        });

        test('should resolve interface', () => {
            const result = resolver.resolveApiLink('@api:interface:GridStateOptions');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxgridstateoptions.html');
        });

        test('should use package override for DockManager', () => {
            const result = resolver.resolveApiLink('@api:DockManager');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html');
        });

        test('should handle type inference for interfaces', () => {
            const result = resolver.resolveApiLink('@api:IColumnResizeEventArgs');
            expect(result).toContain('/interfaces/');
            expect(result).toContain('igxicolumnresizeeventargs.html');
        });
    });

    describe('React Platform', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('React');
        });

        test('should resolve basic component reference', () => {
            const result = resolver.resolveApiLink('@api:CheckboxList');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igrcheckboxlist.html');
        });

        test('should resolve with member', () => {
            const result = resolver.resolveApiLink('@api:CheckboxList.textColor');
            expect(result).toBe('https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igrcheckboxlist.html#textcolor');
        });

        test('should not add suffix for React', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('igrgrid.html');
            expect(result).not.toContain('gridcomponent');
        });

        test('should use package override for data grids', () => {
            const result = resolver.resolveApiLink('@api:CheckboxList');
            expect(result).toContain('ignite-ui-react');
        });
    });

    describe('WebComponents Platform', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('WebComponents');
        });

        test('should resolve with Igc prefix', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('igcgridcomponent.html');
        });

        test('should add Component suffix', () => {
            const result = resolver.resolveApiLink('@api:CategoryChart');
            expect(result).toContain('igccategorychartcomponent.html');
        });
    });

    describe('Blazor Platform', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('Blazor');
        });

        test('should resolve with Igb prefix', () => {
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toBe('https://www.infragistics.com/blazor-apps/blazor-api/api/classes/igbgrid.html');
        });

        test('should not add suffix for Blazor', () => {
            const result = resolver.resolveApiLink('@api:LinearGauge');
            expect(result).toContain('igblineargauge.html');
            expect(result).not.toContain('component');
        });
    });

    describe('Type Inference', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('Angular');
        });

        test('should infer interface from I prefix', () => {
            const result = resolver.resolveApiLink('@api:IRowSelectionEventArgs');
            expect(result).toContain('/interfaces/');
        });

        test('should infer interface from EventArgs suffix', () => {
            const result = resolver.resolveApiLink('@api:CellClickEventArgs');
            expect(result).toContain('/interfaces/');
        });

        test('should infer interface from Options suffix', () => {
            const result = resolver.resolveApiLink('@api:FilterOptions');
            expect(result).toContain('/interfaces/');
        });

        test('should default to class for other types', () => {
            const result = resolver.resolveApiLink('@api:Column');
            expect(result).toContain('/classes/');
        });
    });

    describe('Edge Cases', () => {
        let resolver: SimpleApiResolver;

        beforeEach(() => {
            resolver = new SimpleApiResolver('Angular');
        });

        test('should return original string if not an API reference', () => {
            const result = resolver.resolveApiLink('regular text');
            expect(result).toBe('regular text');
        });

        test('should return original string for empty code block', () => {
            const result = resolver.resolveApiLink('');
            expect(result).toBe('');
        });

        test('should handle component context for package resolution', () => {
            const result = resolver.resolveApiLink('@api:Column', 'Grid');
            expect(result).toContain('igxcolumncomponent.html');
        });

        test('should handle lowercase in URLs', () => {
            const result = resolver.resolveApiLink('@api:DataChart');
            expect(result).toContain('igxdatachartcomponent.html');
            expect(result).not.toContain('DataChart');
        });

        test('should handle member names with mixed case', () => {
            const result = resolver.resolveApiLink('@api:Grid.primaryKey');
            expect(result).toContain('#primarykey');
        });
    });

    describe('Package-based Routing', () => {
        test('should route DockManager to its site', () => {
            const resolver = new SimpleApiResolver('Angular');
            const result = resolver.resolveApiLink('@api:DockManager');
            expect(result).toContain('www.infragistics.com');
        });

        test('should route Grid to main site', () => {
            const resolver = new SimpleApiResolver('Angular');
            const result = resolver.resolveApiLink('@api:Grid');
            expect(result).toContain('www.infragistics.com');
        });

        test('should use component context when type not in package map', () => {
            const resolver = new SimpleApiResolver('React');
            const result = resolver.resolveApiLink('@api:Column', 'Grid');
            expect(result).toContain('ignite-ui-react');
        });
    });
});