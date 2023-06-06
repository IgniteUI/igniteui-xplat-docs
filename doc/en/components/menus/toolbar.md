---
title: {Platform} Toolbar Component | {ProductName}
_description: See how you can easily get started with {Platform} Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Toolbar components, {Platform} Toolbar controls
mentionedTypes: ["Toolbar", "DomainChart", "CategoryChart", "XamDataChart"]
---

# {Platform} Toolbar Overview

The {Platform} Toolbar component is a companion conainer for UI operations to interact both standalone or with the {Platform} Data Chart & `CategoryChart` components. This allows you to easily choose from a preset of properites on the eg. `XamDataChart` with predefined SVG icons, but it also gives you the ability to create custom tools for your project. Benefiting from a number of attributes, you can define or change the icon in use or apply different actions to it. The `Toolbar` will display it's own SVG icons.

## {Platform} Toolbar Example

`sample="/charts/toolbar/actions-built-in-data-chart", height="60", alt="{Platform} Toolbar Example"`

## Dependencies

<!-- Angular, WebComponents, React -->
Install the {ProductName} layouts, inputs,  charts and core packages:

```cmd
npm install {PackageLayouts}
npm install {PackageInputs}
npm install {PackageCharts}
npm install {PackageCore}
```

The following modules are required when using both the `Toolbar` with the `XamDataChart` component and it's features.

```ts
import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule  } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxToolbarModule,
        IgxDataChartToolbarModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartAnnotationModule,
        IgxDataChartInteractivityModule,
        IgxDataChartCategoryTrendLineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgxToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule  } from 'igniteui-react-charts';

IgxToolbarModule.register();
IgrDataChartToolbarModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// spreadsheet's modules
import { IgcToolbarModule } from 'igniteui-webcomponents-layouts';
import { IgcDataChartToolbarModule, IgcDataChartCoreModule, IgcDataChartCategoryModule, IgcDataChartAnnotationModule, IgcDataChartInteractivityModule, IgcDataChartCategoryTrendLineModule } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcToolbarModule,
    IgcToolActionLabelModule,
    IgcDataChartToolbarModule,
    IgcNumberAbbreviatorModule,
    IgcDataChartCategoryModule,
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartAnnotationModule,
    IgcDataChartCategoryTrendLineModule
);
```

<!-- end:Angular, WebComponents, React -->

<!-- Blazor -->

Add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

The following modules are required when using both the `Toolbar` with the `XamDataChart` component and it's features.

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbToolbarModule),
    // these modules are required when using `Toolbar` with the `DataChart` component:
    typeof(IgbDataChartToolbarModule),
    typeof(IgbDataChartCoreModule),
    typeof(IgbDataChartCategoryModule),
    typeof(IgbDataChartAnnotationModule), 
    typeof(IgbDataChartInteractivityModule),
    typeof(IgbDataChartCategoryTrendLineModule)
);
```

You will also need to link an additional CSS file to apply the styling to the `Toolbar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

## Usage

### {Platform} Data Chart integration

The {Platform} Toolbar contains a `Target` property. This is used to link another component such as the DataChart. 

```razor
  <IgbToolbar
    Name="Toolbar"
    @ref="toolbar"
    Target="@chart">
  <IgbToolbar>

  <IgbDataChart
    Name="chart"
    @ref="chart">
  </IgbDataChart>
```

```html
  <div class="legend">
    <igx-toolbar
      name="toolbar"
      [target]="chart"
      #toolbar>
    </igx-toolbar>
  </div>
  <div class="container fill">
    <igx-data-chart
    name="chart"
    #chart>
  </igx-data-chart>
```

```html
  <div>
      <igc-toolbar
      name="Toolbar"
      id="Toolbar">
      </igc-toolbar>
  </div>

  <div class="container fill">
      <igc-data-chart
      is-horizontal-zoom-enabled="true"
      name="chart"
      id="chart">
      </igc-data-chart>
  </div>
```

```ts
  private _bind: () => void;
  constructor() {
    var toolbar = this.toolbar = document.getElementById('Toolbar') as IgcToolbarComponent;
    var chart = this.chart = document.getElementById('chart') as IgcDataChartComponent;
    
    this._bind = () => {
        toolbar.target = this.chart;           
    }
    this._bind();
  }
```

```tsx
  private toolbar: IgrToolbar
  private toolbarRef(r: IgrToolbar) {
      this.toolbar = r;
      this.setState({});
  }
  private chart: IgrDataChart
  private chartRef(r: IgrDataChart) {
      this.chart = r;
      this.toolbar.target = this.chart;
      this.setState({});
  }
  public render(): JSX.Element {
        return (
      <div>
        <IgrToolbar
          ref={this.toolbarRef}>
        </IgrToolbar>
      </div>

      <div>
        <IgrDataChart
          ref={this.chartRef}>
        </IgrDataChart>
      </div>
    );
  }
```

Several pre-existing `ToolAction` items and menus become available when the chart is linked with the Toolbar. The following names are a list of Tool/Tool `OverlayId` names necessary for further customization such as adding, editing, toggling visibility of tools. These names can be assinged to the `OverlayId`, `BeforeId` and `AfterId`.

Here is a list of the provided {Platform} `XamDataChart` Tool Actions and their associated `OverlayId`:

Zooming Actions

- `ZoomReset`: `ToolActionLabel` performs `ResetZoom` on the chart for resetting the zoom level to it's default position.
- `ZoomMenu`: `ToolActionIconMenu` exposes two `ToolActionLabel` items to perform  `ZoomIn` and `ZoomOut` on the chart for increasing/decreasing the chart's zoom level. 

Trend Actions  

- `AnalyzeMenu`: `ToolActionIconMenu` contains several options for configuring the chart.
 - `AnalyzeHeader`: sub section header `OverlayId`
  - `LinesMenu`: sub menu `OverlayId`
    - `LinesHeader`: sub menu section header `OverlayId`
      - `MaxValue`: `ToolActionCheckbox` - displays a dashed horizontal line along the yAxis at the maximum value.
      - `MinValue`: `ToolActionCheckbox`- displays a dashed horizontal line along the yAxis at the minimum value.
      - `Average`: `ToolActionCheckbox` - displays a dashed horizontal line along the yAxis at the average value.
  - `TrendsMenu`: `ToolActionLabel`
    - `TrendsHeader`: sub section header `OverlayId`
      - `Exponential`: `ToolActionRadio` - sets the `TrendLineType` on the chart to `ExponentialFit`.
      - `Linear`: `ToolActionRadio` - sets the `TrendLineType` on the chart to `LinearFit`.
      - `Logarithmic`: `ToolActionRadio` - sets the `TrendLineType` on the chart to `LogarithmicFit`.
 - `HelpersHeader`: sub section header `OverlayId`
  - `SeriesAvg`: `ToolActionCheckbox` - adds a series to the `ValueLines` using the `ValueLayerValueMode` of type `Average`.
  - `ValueLabelsMenu`:  `ToolActionLabel` 
    - `ValueLabelsHeader`: sub menu section header `OverlayId`
      - `ShowValueLabels`: `ToolActionCheckbox` - displays data point values via the chart's `CalloutsVisible` property.
      - `ShowLastValueLabel`: `ToolActionCheckbox` - displays final value callouts via the chart's `FinalValueAnnotationsVisible` property.
 - `ShowCrosshairs`: `ToolActionCheckbox` - displays the crosshair annotation via the chart's `CrosshairsDisplayMode` property triggered on mouse hover. 
 - `ShowGridlines`: `ToolActionCheckbox` used to display extra gridlines via the `XAxisMajorStroke` property.

### Tool Actions

The following is a list of `ToolAction` items you can add to the Toolbar.

- `ToolActionButton`
- `ToolActionCheckbox`
- `ToolActionIconButton`
- `ToolActionIconMenu`
- `ToolActionLabel`
- `ToolActionNumberInput`
- `ToolActionRadio`

Each of these tools exposes an `OnCommand` event that can be triggered upon interacting with them as a mouse click.

New and existing tools can be repositioned and marked hidden using the `OverlayId`, `BeforeId` and `AfterId` properties on the `ToolAction` object. ToolActions also expose a `Visibility` property.  

The following example demonstrates hiding both the `ZoomReset` and `Analyze Menu` menu tool actions. A new instance of the `ZoomReset` tool action is added and placed within the `ZoomMenu` by using the the `AfterId` property and assinging that to `ZoomOut`. This will ensure the new Reset tool is displayed at the bottom of the `ZoomMenu`.

`sample="/charts/toolbar/layout-actions-for-data-chart", height="60", alt="{Platform} Toolbar Example"`

### Vertical Orientation

By default the {Platform} Toolbar is shown in the horizontal `Orientation` position but also has the ability to shown vertically. 

```html
<igc-toolbar orientation="vertical"></igc-icon>
```

```razor
<IgbToolbar Orientation="ToolbarOrientation.Horizontal">
```

```tsx
<IgbToolbar orientation="vertical" />
```

The following example demonstrates the vertical orientation of the {Platform} Toolbar.

`sample="/charts/toolbar/layout-in-vertical-orientation", height="60", alt="{Platform} Verical Orientation"`

## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `Toolbar`. The following example demonstrates the various theme options that can be applied.

`sample="/charts/toolbar/theming", height="70", alt="{Platform} Toolbar Styling/Theming"`

## API References

 - `Toolbar`
 - `XamDataChart`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
