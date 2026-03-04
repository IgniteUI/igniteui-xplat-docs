---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
---
# {ProductName} Core Package Changelog

The {PackageCore} package is a peer dependency for visualization and data components. This page documents when core package updates are required based on features and breaking changes in other packages.

> [!Note]
> Core package changes are documented in the component-specific changelog topics where they are applicable. This page serves as a reference for version compatibility and peer dependency requirements.

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

## Core Package Version Requirements

The following table shows when to update the core package based on features and changes in component packages:

| Version | Update Core For | Reason |
|---------|-----------------|--------|
| **{PackageVerChanges-24-1-SEP}** | WebComponents, React | New event argument base types (`CheckboxChangeEventArgs`, `RadioChangeEventArgs`, `ComponentValueChangedEventArgs`). |
| **{PackageVerChanges-21-1}** | Charts, Gauges, Maps, Excel, Spreadsheet | **Breaking Change**: Simplified import paths. Update your imports to use package names instead of full paths. |
| **{PackageVerChanges-4.0.0}** | All Components | **Breaking Change**: Theme infrastructure migration. New CSS variable system for sizing and spacing. |

## Shared Types and Enums

The core package provides shared types and enums used across multiple component packages:

### Common Enums
- `SweepDirection` - Used by Gauges and Charts for arc direction
- `GridSelectionMode` - Used by Grid components for row/cell selection
- `WorkbookFormat` - Used by Excel Library and Spreadsheet
- `DataSourceSummaryOperand` - Used by Data Grid for summary operations

### Common Base Classes
- Module registration infrastructure (`ModuleManager`)
- Base component classes and interfaces
- Event argument base types
- Theme configuration types

## Version Compatibility Notes

<!-- React -->
> [!Important]
> When updating any {ProductName} package, ensure the `{PackageCore}` peer dependency version matches or exceeds the version specified in the component package's `package.json`.

**Import Path Changes (v21-1 and later):**
```typescript
// New simplified imports (v21-1+)
import { SweepDirection } from 'igniteui-react-core';

// Old full path imports (pre-v21-1)
import { SweepDirection } from 'igniteui-react-core/ES5/SweepDirection';
```
<!-- end: React -->

<!-- WebComponents -->
> [!Important]
> When updating any {ProductName} package, ensure the `{PackageCore}` peer dependency version matches or exceeds the version specified in the component package's `package.json`.

**Module Registration:**
```typescript
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(IgcDataChartCoreModule);
```
<!-- end: WebComponents -->

## Theming Infrastructure Changes

### **{PackageVerChanges-4.0.0}**

Major theming infrastructure updates introduced in the core package:

- **Build** - Integrated [Ignite UI Theming](https://github.com/IgniteUI/igniteui-theming) package for theme generation
- **Sizing** - Introduced `--ig-size` CSS variable for runtime size configuration
- **Spacing** - Introduced `--ig-spacing` CSS variables for runtime spacing (padding/margin) configuration
- **Scrollbars** - Added `ig-scrollbar` CSS class for application-level scrollbar styling

These changes affect all component packages and themes.
