---
title: $Platform$ Breaking Changes | $ProductName$ | Infragistics
_description: Learn about breaking changes in the $ProductName$ and how to update your code to latest API.
_keywords: Breaking Changes,  $ProductName$, Infragistics
---
# Breaking Changes in $ProductName$

This topic provides information about breaking changes in $ProductName$ as well as how to update older code to latest API.

## Redesigned Chart Defaults

> [!NOTE]
> These breaking changes were introduce in version **{PackageVerChangedCharts}** of these packages and components:
	
- All types of charts/series have new colors for brush/fill and outlines 

Old series brushes outlines  | New series outline brushes 
------------- | -------------
`Color_001=#7446B9`  | `Color_001=#8bdc5c`
`Color_002=#9FB328`  | `Color_002=#8b5bb1` 
`Color_003=#F96232`  | `Color_003=#6db1ff` 
`Color_004=#2E9CA6`  | `Color_004=#f8a15f` 
`Color_005=#DC3F76`  | `Color_005=#ee5879` 
`Color_006=#FF9800`  | `Color_006=#735656` 
`Color_007=#3F51B5`  | `Color_007=#f7d262` 
`Color_008=#439C47`  | `Color_008=#8ce7d9` 
`Color_009=#795548`  | `Color_009=#e051a9` 
`Color_010=#9A9A9A`  | `Color_010=#a8a8b7` 

- All types of charts/series have marker outlines with 2px thickness  

- Bar/Column/Waterfall series have outlines with 1px thickness (other series have 2px thickness) 

- Bar/Column/Waterfall series have square corners instead of rounded corners anymore 

- Point/Bubble/ScatterSeries/PolarScatter series have markers with 70% transparent fill 

- Point/Bubble/ScatterSeries/PolarScatter series have markers with fill that matches marker outline. To revert to the previous styling behavior for these series a new property has been added to the series, `MarkerFillMode`, which can be set to normal to mimic the prior behavior. 

- Scatter High Density series has new colors for min/max heat properties 

    Old heat min color  | New heat min color
    ------------- | -------------
    `#FF7446B9` | `#ff8b5bb1`

    Old heat max color  | New heat max color  
    ------------- | -------------
    `#FFC62828`  | `#ffee5879`

- Financial/Waterfall series have new colors for negative fill of their visuals 

    Old negative brush | new negative brush  
    ------------- | -------------
    `#FFC62828`  | `#ffee5879`

<div class="divider--half"></div>

<!-- React, WebComponents -->

## Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

> [!NOTE]
> These breaking changes were introduce in version **{PackageVerChangedFields}** of the grid package.

```tsx
 <IgrTextColumn field="Name"/>
```

```ts
import { IgrColumnSummaryDescription, IgrColumnSortDescription, IgrColumnGroupDescription } from 'igniteui-react-grids'
const productCount = new IgrColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgrColumnGroupDescription();
income.field = "Income";
```

```html
 <igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
income.field = "Income";

```

## Changed Name of Live Grid

The data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

> [!NOTE]
> These breaking changes were introduce in version **{PackageVerRenamedGrid}** of these packages and components:

The new code for importing the grid and it's corresponding module is:

```ts
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridModule } from 'igniteui-react-grids';
```

```ts
import { IgcDataGrid } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
```

## Required Peer Dependency for Data Grid

The data grid component requires the "inputs" package.

```ts
**npm install --save {PackageInputs}**
```
<!-- end: React, WebComponents -->

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> [!NOTE]
> These breaking changes were introduce in version **{PackageVerChangedImports}** of these packages and components:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel Library](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [Spreadsheet](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [Geo Map](geo-map.md), [Treemap](treemap-overview.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageGrids}/v/{PackageVerChangedImports}" target="_blank">{PackageGrids}</a>             | [Data Grid](data-grid.md)       |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | all classes and enums  |


## Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";

import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';

// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";

// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

```ts
// gauges:
import { IgcLinearGaugeComponent } from "igniteui-webcomponents-gauges";
import { IgcLinearGaugeModule } from "igniteui-webcomponents-gauges";
import { IgcLinearGraphRange } from "igniteui-webcomponents-gauges";

import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeRange } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps";

// grids:
import { IgcDataGridComponent } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from "igniteui-webcomponents-grids";
```

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";

import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { SweepDirection } from 'igniteui-react-core';

// charts:
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';

// maps:
import { IgrGeographicMap } from "igniteui-react-maps";
import { IgrGeographicMapModule } from "igniteui-react-maps";

// grids:
import { IgrLiveGrid } from "igniteui-react-grids";
import { IgrLiveGridModule } from 'igniteui-react-grids';
```


## Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-webcomponents-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-module";
```

```ts
// gauges:
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-component';
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-module';
import { IgcLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igc-linear-graph-range';

import { IgcRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-component";
import { IgcRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-module";
import { IgcRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-component";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-module";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts/ES5/igc-data-chart-component";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igc-data-chart-core-module";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-component";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-module";

// grids:
import { IgcLiveGridModule } from 'igniteui-webcomponents-grids/ES5/igc-live-grid-module';
import { IgcLiveGridComponent } from 'igniteui-webcomponents-grids/ES5/igc-live-grid-component';
```

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges/ES5/igr-linear-gauge";
import { IgrLinearGaugeModule } from "igniteui-react-gauges/ES5/igr-linear-gauge-module";
import { IgrLinearGraphRange } from "igniteui-react-gauges/ES5/igr-linear-graph-range";

import { IgrRadialGauge } from "igniteui-react-gauges/ES5/igr-radial-gauge";
import { IgrRadialGaugeModule } from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import { IgrRadialGaugeRange } from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import { SweepDirection } from "igniteui-react-core/ES5/SweepDirection";

// charts:
import { IgrFinancialChart } from "igniteui-react-charts/ES5/igr-financial-chart";
import { IgrFinancialChartModule } from "igniteui-react-charts/ES5/igr-financial-chart-module";
import { IgrDataChart } from "igniteui-react-charts/ES5/igr-data-chart";
import { IgrDataChartCoreModule } from "igniteui-react-charts/ES5/igr-data-chart-core-module";

// maps:
import { IgrGeographicMap } from "igniteui-react-maps/ES5/igr-geographic-map";
import { IgrGeographicMapModule } from "igniteui-react-maps/ES5/igr-geographic-map-module";

// grids:
import { IgrLiveGrid } from "igniteui-react-grids/ES5/igr-live-grid";
import { IgrLiveGridModule } from 'igniteui-react-grids/ES5/igr-live-grid-module';
```
<!-- end: Angular, React, WebComponents -->