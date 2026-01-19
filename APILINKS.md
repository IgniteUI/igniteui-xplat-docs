# Simple API Link Resolution System

## Overview

This system provides a clean, convention-based approach to linking API documentation across multiple platforms (Angular, React, WebComponents, and Blazor) without maintaining hundreds of JSON mapping files.

## Key Features

- ✅ **Convention-based**: Automatically applies platform-specific prefixes and suffixes
- ✅ **Package-aware**: Routes components to correct API documentation sites
- ✅ **Platform fallbacks**: Handles components unavailable on specific platforms
- ✅ **Type-smart**: Distinguishes between components, enums, interfaces, and other types
- ✅ **Minimal configuration**: Single JSON config file instead of 300+ mapping files

## Quick Start

### 1. Installation

The system is already integrated. No additional installation needed.

### 2. Using API Links in Markdown

Use the `@api:` prefix in inline code blocks to create API links:

```markdown
## Basic Component Reference
The `@api:Grid` component provides powerful data visualization.

## Component with Member
Use the `@api:Grid.data` property to bind your data.

## Enums
Set filtering with `@api:enum:FilteringLogic`.

## Interfaces
Configure options with `@api:interface:GridStateOptions`.

## Event Args
Handle the `@api:CellClickEventArgs` event.
```

### 3. Syntax Reference

| Pattern | Description | Example |
|---------|-------------|---------|
| `@api:ComponentName` | Basic component | `@api:Grid` |
| `@api:ComponentName.member` | Component member | `@api:Grid.primaryKey` |
| `@api:enum:EnumName` | Enum type | `@api:enum:FilteringLogic` |
| `@api:interface:InterfaceName` | Interface type | `@api:interface:IGridState` |
| `@api:type:TypeName` | Type alias | `@api:type:GridColumnDataType` |

## How It Works

### Platform-Specific Transformations

The system automatically transforms generic API references into platform-specific links:

#### Angular
```markdown
`@api:Grid` → https://.../classes/igxgridcomponent.html
`@api:Grid.data` → https://.../classes/igxgridcomponent.html#data
`@api:enum:FilteringLogic` → https://.../enums/filteringlogic.html
```

#### React
```markdown
`@api:Grid` → https://.../classes/igrgrid.html
`@api:CheckboxList` → https://.../classes/igrcheckboxlist.html
`@api:enum:FilteringLogic` → https://.../enums/filteringlogic.html
```

#### WebComponents
```markdown
`@api:Grid` → https://.../classes/igcgridcomponent.html
`@api:DockManager` → https://.../classes/igcdockmanagercomponent.html
`@api:enum:FilteringLogic` → https://.../enums/filteringlogic.html
```

#### Blazor
```markdown
`@api:Grid` → https://.../classes/igbgrid.html
`@api:CategoryChart` → https://.../classes/igbcategorychart.html
`@api:enum:FilteringLogic` → https://.../enums/filteringlogic.html
```

### Naming Convention Rules

| Type | Prefix | Suffix (Angular/WC) | Suffix (React/Blazor) | Example |
|------|--------|--------------------|-----------------------|---------|
| Component | ✅ Igx/Igr/Igc/Igb | ✅ Component | ❌ None | `IgxGridComponent` / `IgrGrid` |
| EventArgs | ✅ Igx/Igr/Igc/Igb | ❌ None | ❌ None | `IgxCellClickEventArgs` |
| Options | ✅ Igx/Igr/Igc/Igb | ❌ None | ❌ None | `IgxFilterOptions` |
| Interface | ✅ Igx/Igr/Igc/Igb | ❌ None | ❌ None | `IgxIGridState` |
| **Enum** | ❌ **None** | ❌ None | ❌ None | `FilteringLogic` |
| Service | ✅ Igx/Igr/Igc/Igb | ❌ None | ❌ None | `IgxGridService` |

### Platform-Specific Components

Some components aren't available on all platforms. The system handles this automatically:

```markdown
<!-- In Angular docs -->
`@api:DockManager` → Links to IgcDockManagerComponent (WebComponents fallback)

<!-- In React docs -->
`@api:DockManager` → Links to IgrDockManager (available directly)
```

## Configuration

### Main Config File: `api-config.json`

```json
{
  "platforms": {
    "Angular": {
      "prefix": "Igx",
      "suffix": "Component",
      "apiRoot": "https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/",
      "packageOverrides": {
        "igniteui-dockmanager": {
          "apiRoot": "https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/"
        }
      }
    }
    // ... other platforms
  },
  "componentPackageMap": {
    "DockManager": "igniteui-dockmanager",
    "Grid": "igniteui-webgrids"
    // ... other components
  },
  "componentPlatformAvailability": {
    "DockManager": {
      "availableOn": ["React", "WebComponents", "Blazor"],
      "fallbackByPlatform": {
        "Angular": "WebComponents"
      }
    }
  }
}
```

### Adding a New Component

1. **If component uses a special package**, add to `componentPackageMap`:
```json
"componentPackageMap": {
  "MyNewComponent": "igniteui-my-package"
}
```

2. **If component has package-specific API root**, add to platform's `packageOverrides`:
```json
"Angular": {
  "packageOverrides": {
    "igniteui-my-package": {
      "apiRoot": "https://custom-api-site.com/docs/"
    }
  }
}
```

3. **If component isn't available on all platforms**, add to `componentPlatformAvailability`:
```json
"componentPlatformAvailability": {
  "MyNewComponent": {
    "availableOn": ["React", "WebComponents"],
    "fallbackByPlatform": {
      "Angular": "WebComponents",
      "Blazor": "React"
    }
  }
}
```

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run API resolver tests specifically
npm run test:api-resolver

# Run tests in watch mode
npm run test:watch
```

## Examples

### Grid Component Documentation

```markdown
# Grid

The `@api:Grid` component is a powerful data grid with features like:

- Sorting via `@api:Grid.sortingOptions`
- Filtering using `@api:enum:FilteringLogic`
- Pagination with `@api:Grid.paginatorOptions`

## Events

- `@api:CellClickEventArgs` - Fired when a cell is clicked
- `@api:RowSelectionEventArgs` - Fired when rows are selected

## Configuration

Use `@api:interface:IGridState` to save/restore grid state.
```

### Category Chart Documentation

```markdown
# Category Chart

The `@api:CategoryChart` provides easy data visualization.

## Chart Types

Use `@api:enum:ChartType` to set the visualization:
- Bar
- Line  
- Area
- Column

## Properties

- `@api:CategoryChart.dataSource` - Bind your data
- `@api:CategoryChart.chartType` - Set the chart type
```

## Migration from Old System

The new system can run alongside the existing API mapping system. To migrate:

1. **Keep existing system running** - No immediate changes needed
2. **Start using `@api:` syntax in new topics**
3. **Gradually update existing topics** as they're revised
4. **Once migration complete**, remove old API mapping files and code

## Troubleshooting

### Link not generated correctly

1. Check if component name is spelled correctly
2. Verify component exists on target platform (check `componentPlatformAvailability`)
3. Check browser console for warnings

### Component shows wrong prefix/suffix

1. Verify platform configuration in `api-config.json`
2. Check if component name ends with a non-component suffix (EventArgs, Options, etc.)
3. Run tests to verify expected behavior

### Package routing not working

1. Ensure component is listed in `componentPackageMap`
2. Verify package override exists in platform configuration
3. Check that `apiRoot` URLs are correct

## Benefits Over Old System

| Old System | New System |
|------------|------------|
| 300+ JSON mapping files | 1 configuration file |
| Manual mapping for each type | Convention-based with overrides |
| Requires C# project build | Self-contained |
| Hard to maintain | Easy configuration updates |
| Complex transformation logic | Clean, testable resolver |

## API Reference

### SimpleApiResolver

```typescript
const resolver = new SimpleApiResolver('Angular');
const url = resolver.resolveApiLink('@api:Grid.data', 'Grid');
```

**Methods:**
- `resolveApiLink(apiRef: string, componentContext?: string): string | null`
  - Resolves API reference to platform-specific URL
  - Returns null if component unavailable and no fallback exists

**Constructor:**
- `constructor(platform: 'Angular' | 'React' | 'WebComponents' | 'Blazor')`

## Support

For issues or questions:
1. Check this README
2. Review test cases in `SimpleApiResolver.test.ts`
3. Examine configuration in `api-config.json`
4. Contact the documentation team
