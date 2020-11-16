---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Annotations | Infragistics
_description: Infragistics' $PlatformShort$ charts control allows you to add annotations to your chart series, such as Callout layer, crosshair layer and final value layer. Improve your graphs and visualizations with $ProductName$
_keywords: $PlatformShort$ charts, data chart, annotations, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Series Annotations

The $PlatformShort$ data chart component supports layers that allow you to display contextual information about the points plotted in your data chart as annotations. This can help to show more information to your end-users that cannot be seen by simply looking at the series.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/series-annotations"></sample-button>

</div>

<div class="divider--half"></div>

 ## Callout Layer

The callout layer displays annotations from existing or new data on the $PlatformShort$ data chart component. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callouts layers present with different configurations. This can be done be setting the `TargetSeries` property.

The following code snippet demonstrates how to add a callout layer to the $PlatformShort$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value1" />

    <ColumnSeries name="series2"
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value2" />
    
    <CalloutLayer Name="callout" 
        XMemberPath="Index"
        YMemberPath="Value"
        LabelMemberPath="Label" />
</DataChart>
```

 ```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">

    <igx-category-x-axis name="xAxis"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-column-series name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value1">
    </igx-column-series>
    <igx-column-series name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2">
    </igx-column-series>

    <igx-callout-layer name="callout"
        xMemberPath="Index"
        yMemberPath="Value"
        labelMemberPath="Label">
    </igx-callout-layer>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis  name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value1"/>
    <IgrColumnSeries name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2"/>
    <IgrCalloutLayer name="callout"
        xMemberPath="Index"
        yMemberPath="Value"
        labelMemberPath="Label" />
</IgrDataChart>
```

 ```html
<igc-data-chart id="chart" width="100%" height="400px">

    <igc-category-x-axis name="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis  name="yAxis"></igc-numeric-y-axis>

    <igc-column-series id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="Value1">
    </igc-column-series>
    <igc-column-series id="series2"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="Value2">
    </igc-column-series>

    <igc-callout-layer id="callout"
        x-member-path="Index"
        y-member-path="Value"
        label-member-path="Label">
    </igc-callout-layer>
</igc-data-chart>
```

 ## Crosshair Layer

The crosshair layer renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

You can configure the crosshair layer so that the layer will only display one specific series as by default they target all series on the $PlatformShort$ data chart component. To achieve this, set the `TargetSeries` property.

By default, the color of the crosshair lines is the color of the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the `Brush` property.

The following code snippet shows how to add a crosshair layer to the $PlatformShort$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value1"
        DataSource="@data" />
    <ColumnSeries name="series2"
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value2"
        DataSource="@data" />    
    <CrosshairLayer Name="crosshair" />
</DataChart>
```

 ```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">
    <igx-category-x-axis name="xAxis"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-column-series name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value1">
    </igx-column-series>
    <igx-column-series name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2">
    </igx-column-series>

    <igx-crosshair-layer name="crosshair"></igx-crosshair-layer>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px" >
    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis  name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value1" />
    <IgrColumnSeries name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2" />
    <IgrCrosshairLayer name="crosshair" />
</IgrDataChart>
```

 ```html
<igc-data-chart id="chart" width="100%" height="400px">
    <igc-category-x-axis name="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis  name="yAxis"></igc-numeric-y-axis>

    <igc-column-series id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="Value1">
    </igc-column-series>
    <igc-column-series id="series2"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="Value2">
    </igc-column-series>

    <igc-crosshair-layer id="crosshair">
    </igc-crosshair-layer>
</igc-data-chart>
```

 ## Final Value Layer

The final value layer displays annotations along the data chart’s axes that represent the final value of a series on the $PlatformShort$ data chart component.

You can configure the annotations to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the `TargetSeries` property.

The following code snippet demonstrates how to add a final value layer to the $PlatformShort$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value1"
        DataSource="@data" />
    <ColumnSeries name="series2"
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value2" />    
    <FinalValueLayer Name="finalValue" />
</DataChart>
```

 ```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">
    <igx-category-x-axis name="xAxis"></igx-category-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>

    <igx-column-series name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value1">
    </igx-column-series>
    <igx-column-series name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2">
    </igx-column-series>

    <igx-final-value-layer name="finalValue"></igx-final-value-layer>
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
        valueMemberPath="Value1"/>
    <IgrColumnSeries name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2"/>

    <IgrFinalValueLayer name="finalValue" />
</IgrDataChart>
```

 ```html
<igc-data-chart id="chart" width="100%" height="400px">
    <igc-category-x-axis name="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis"></igc-numeric-y-axis>

    <igc-column-series id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="Value1">
    </igc-column-series>
    <igc-column-series id="series2"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="Value2">
    </igc-column-series>

    <igc-final-value-layer id="finalValue">
    </igc-final-value-layer>
</igc-data-chart>
```
