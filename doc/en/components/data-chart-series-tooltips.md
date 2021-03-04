---
title: $PlatformShort$ Data Chart | Data Visualization Tools | ToolTips | Infragistics
_description: Use Infragistics' $PlatformShort$ chart's tooltips to display important data. View our $ProductName$ graph tutorials!
_keywords: $PlatformShort$ charts, data chart, tooltips, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Tooltips

The $PlatformShort$ data chart component has support for showing tooltips along with a couple of tooltip layers. These tooltips help you to see contextual information about each of the series in your data chart.

## $PlatformShort$ Tooltips Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips" alt="$PlatformShort$ Tooltips Example">
</code-view>


<div class="divider--half"></div>

In order to use tooltips or tooltip layers in the $PlatformShort$ data chart component, you need to import and register the interactivity module. This can be done by using the following code:

```razor
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

```ts
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrDataChartInteractivityModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// tooltip modules
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryToolTipLayerModule } from 'igniteui-webcomponents-charts';
import { IgcItemToolTipLayerModule } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcCategoryToolTipLayerModule,
    IgcItemToolTipLayerModule
);
```

## Default Tooltips

The $PlatformShort$ data chart component provides default tooltips for each type of series. The default tooltips display all of the information relevant to the particular series item that is being hovered, including the series title, data values, axis values, etc. They are also styled to match the series' appearance.

The following code snippet demonstrates how to enable the default tooltips in the $PlatformShort$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value"
        ShowDefaultTooltips="true"
        DataSource="@data" />  
</DataChart>
```

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip={true} />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series name="series1"
        value-member-path="Value"
        show-default-tooltip="true">
    </igc-column-series>

</igc-data-chart>
```

## Category Tooltip Layer

The CategoryToolTipLayer displays grouped tooltips for the series on the $PlatformShort$ data chart component using a category axis. The grouped tooltips currently appear at the top of the $PlatformShort$ data chart component.

The following code snippet demonstrates how to add a category tooltip layer to the $PlatformShort$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value"
        ShowDefaultTooltips="true"
        DataSource="@data" />
    <CategoryToolTipLayer></CategoryToolTipLayer>  
</DataChart>
```

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-category-tooltip-layer></igx-category-tooltip-layer>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip={true} />

    <IgrCategoryToolTipLayer name="CategoryToolTipLayer" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series name="series1"
        value-member-path="Value"
        show-default-tooltip="true">
    </igc-column-series>

    <igc-category-tooltip-layer></igc-category-tooltip-layer>

</igc-data-chart>
```

## Item Tooltip Layer

The item tooltip layer displays tooltips for all the series on the $PlatformShort$ data chart component individually when a pointer hovers over that particular series. The tooltip style is inherited from the series that is displaying the tooltip.

The following code snippet demonstrates how to add an item tooltip layer to the $PlatformShort$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value"
        ShowDefaultTooltips="true"
        DataSource="@data" />
    <ItemToolTipLayer></ItemToolTipLayer>  
</DataChart>
```

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-item-tooltip-layer></igx-item-tooltip-layer>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip={true} />

    <IgrItemToolTipLayer />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series name="series1"
        value-member-path="Value"
        show-default-tooltip="true">
    </igc-column-series>

    <igc-item-tooltip-layer></igc-item-tooltip-layer>

</igc-data-chart>
```
