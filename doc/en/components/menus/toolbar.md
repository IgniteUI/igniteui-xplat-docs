---
title: {Platform} Toolbar Component | {ProductName}
_description: See how you can easily get started with {Platform} Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Toolbar components, {Platform} Toolbar controls
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
---

# {Platform} Toolbar Overview

The {Platform} Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our `XamDataChart` or `CategoryChart` components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## {Platform} Toolbar Example

`sample="/charts/toolbar/actions-built-in-category-chart", height="600", alt="{Platform} Toolbar Example"`

## Dependencies

<!-- Angular, WebComponents, React -->
Install the {ProductName} layouts, inputs, charts and core packages:

```cmd
npm install {PackageLayouts}
npm install {PackageInputs}
npm install {PackageCharts}
npm install {PackageCore}
```

The following modules are required when using the `Toolbar` with the `XamDataChart` component and it's features.

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
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcToolbarModule } from 'igniteui-webcomponents-layouts';
import { IgcDataChartToolbarModule, IgcDataChartCoreModule, IgcDataChartCategoryModule, IgcDataChartAnnotationModule, IgcDataChartInteractivityModule, IgcDataChartCategoryTrendLineModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcToolbarModule,
    IgcToolActionLabelModule,
    IgcDataChartToolbarModule,
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

The following modules are required when using the `Toolbar` with the `XamDataChart` component and it's features.

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbToolbarModule),
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

### Tool Actions

The following is a list of the different `ToolAction` items that you can add to the Toolbar.

- `ToolActionButton`
- `ToolActionCheckbox`
- `ToolActionIconButton`
- `ToolActionIconMenu`
- `ToolActionLabel`
- `ToolActionNumberInput`
- `ToolActionRadio`

Each of these tools exposes an `OnCommand` event that is triggered by mouse click.

New and existing tools can be repositioned and marked hidden using the `OverlayId`, `BeforeId` and `AfterId` properties on the `ToolAction` object. ToolActions also expose a `Visibility` property.

The following example demonstrates hiding both the built-in **ZoomReset** and **AnalyzeMenu** menu tool actions. A new instance of the **ZoomReset** tool action is added and placed within the **ZoomMenu** by using the the `AfterId` property and assigning that to **ZoomOut**. This will ensure the new Reset tool is displayed at the bottom of the **ZoomMenu**.

`sample="/charts/toolbar/layout-actions-for-data-chart", height="600", alt="{Platform} Toolbar Example"`

### {Platform} Data Chart Integration

The {Platform} Toolbar contains a `Target` property. This is used to link a component, such as the `XamDataChart` as shown in the code below:

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

Several pre-existing `ToolAction` items and menus become available when the `XamDataChart` is linked with the Toolbar. Here is a list of the built-in {Platform} `XamDataChart` Tool Actions and their associated `OverlayId`:

Zooming Actions

- `ZoomReset`: A `ToolActionLabel` that invokes the `ResetZoom` method on the chart to reset the zoom level to it's default position.
- `ZoomMenu`: A `ToolActionIconMenu` that exposes two `ToolActionLabel` items to invoke the `ZoomIn` and `ZoomOut` methods on the chart for increasing/decreasing the chart's zoom level.

Trend Actions

- `AnalyzeMenu`: A `ToolActionIconMenu` that contains several options for configuring different options of the chart.
 - `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
    - `LinesHeader`: A sub menu section header for the following three tools:
      - `MaxValue`: A `ToolActionCheckbox` that displays a dashed horizontal line along the yAxis at the maximum value of the series.
      - `MinValue`: A `ToolActionCheckbox` that displays a dashed horizontal line along the yAxis at the minimum value of the series.
      - `Average`:  A `ToolActionCheckbox` that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the `XamDataChart` plot area.
    - `TrendsHeader`: A sub menu section header for the following three tools:
      - **Exponential**: A `ToolActionRadio` that sets the `TrendLineType` on each series in the chart to **ExponentialFit**.
      - **Linear**: A `ToolActionRadio` that sets the `TrendLineType` on each series in the chart to **LinearFit**.
      - **Logarithmic**: A `ToolActionRadio` that sets the `TrendLineType` on each series in the the chart to **LogarithmicFit**.
 - `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A `ToolActionCheckbox` that adds or removes a `ValueLayer` to the chart's series collection using the `ValueLayerValueMode` of type `Average`.
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the `XamDataChart`'s plot area.
    - `ValueLabelsHeader`: A sub menu section header for the following tools:
      - `ShowValueLabels`: A `ToolActionCheckbox` that toggles data point values by using a `CalloutLayer`.
      - `ShowLastValueLabel`: A `ToolActionCheckbox` that toggles final value axis annotations by using a `FinalValueLayer`.
 - `ShowCrosshairs`: A `ToolActionCheckbox` that toggles mouse-over crosshair annotations via the chart's `CrosshairsDisplayMode` property.
 - `ShowGridlines`: A `ToolActionCheckbox` that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

- `CopyAsImage`: A `ToolActionLabel` that exposes an option to copy the chart to the clipboard.
 - `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three paramters to pass in this method. The first is the icon collection name defined on the tool eg. `IconCollectionName`. The second is the name of the icon defined on the tool eg. `IconName`, followed by adding the SVG string. 

```html
<igx-tool-action-label
    title="Custom Icon"
    iconName="CustomIcon"
    iconCollectionName="CustomCollection">
</igx-tool-action-label>
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';
  
  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

```html
<igc-tool-action-label
    title="Custom Icon"
    icon-name="CustomIcon"
    icon-collection-name="CustomCollection">
</igc-tool-action-label>
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

```razor
<IgbToolActionLabel
    Title="Custom Icon"
    IconName="CustomIcon"
    IconCollectionName="CustomCollection">
</IgbToolActionLabel>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;

        if (firstRender) {
            this.ToolbarCustomIconOnViewInit();
        }
    }

    private IgbToolbar toolbar;

    public void ToolbarCustomIconOnViewInit()
    {
    	this.toolbar.EnsureReady().ContinueWith(new Action<Task>((e) =>
    	{
    		string icon =
    		@"
    			<svg width=""28px"" height=""28px"" stroke=""none"" viewBox=""0 0 3.5 3.5"" xmlns=""http://www.w3.org/2000/svg"" xmlns:xlink=""http://www.w3.org/1999/xlink"" aria-hidden=""true"" role=""img"" class=""iconify iconify--gis"" preserveAspectRatio=""xMidYMid meet""><path d=""M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z"" fill=""#000000"" fill-rule=""evenodd""/></svg>
    		";
    		this.toolbar.RegisterIconFromTextAsync("CustomCollection", "CustomIcon", icon);
    	}));
    }

}
```

```tsx
<IgrToolbar orientation="Vertical" />
```

### Vertical Orientation

By default the {Platform} Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the `Orientation` property.

```html
<igx-toolbar orientation="Vertical" />
```

```html
<igc-toolbar orientation="Vertical" />
```

```razor
<IgbToolbar Orientation="ToolbarOrientation.Vertical" />
```

```tsx
<IgrToolbar orientation="Vertical" />
```
The following example demonstrates the vertical orientation of the {Platform} Toolbar.
`sample="/charts/toolbar/layout-in-vertical-orientation", height="600", alt="{Platform} Verical Orientation"`

<!-- ## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `Toolbar`.

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- The following example demonstrates the various theme options that can be applied.
`sample="/charts/toolbar/theming", height="600", alt="{Platform} Toolbar Styling/Theming"` -->

## API References

 - `Toolbar`
 - `XamDataChart`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
