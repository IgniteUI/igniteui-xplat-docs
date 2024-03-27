---
title: {Platform} Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Annotations
_keywords: {Platform} Charts, Annotations, Infragistics
_language: kr
mentionedTypes: ["CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
---

# {Platform} Chart Annotations

The {Platform} chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## {Platform} Annotations Example

The following example demonstrates the annotation layers that are available on the {Platform} chart. Click on the dropdowns to turn each layer on and off.

`sample="/charts/category-chart/line-chart-with-annotations", height="600", alt="{Platform} Annotations Example"`



<div class="divider--half"></div>

Like this sample? Get access to our complete {Platform} toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/{ProductSpinal}/download">Download it for free.</a>

## {Platform} Crosshair Layer

The `CrosshairLayer` renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

Crosshair types include:
- Horizontal
- Vertical
- Both

The chart's crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series in the chart control. To achieve this, set the `TargetSeries` property.

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the `Brush` property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.

`sample="/charts/data-chart/crosshair-layer-styling", height="500", alt="{Platform} Crosshair Layer Styling"`



<div class="divider--half"></div>

## {Platform} Final Value Layer

The `FinalValueLayer` of the `XamDataChart` control provides a quick view along the axis of the ending value displayed in a series.

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the `TargetSeries` property.

You can also customize this annotation by setting the following properties:

- `AxisAnnotationBackground`: This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- `AxisAnnotationTextColor`: This property is used to choose the brush for the annotation's text color.
- `AxisAnnotationOutline`: This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

`sample="/charts/data-chart/final-value-layer-styling", height="500", alt="{Platform} Final Value Layer Styling"`



<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    finalValueAnnotationsVisible={true} />
```
```html
<igc-category-chart
     id="chart"
     final-value-annotations-visible="true">
</igc-category-chart>
```


## {Platform} Callout Layer

The `CalloutLayer` displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the `TargetSeries` property.

You can also customize this annotation by setting the following properties:

- `CalloutLeaderBrush`: This property is used to choose the brush for the leader lines for the callouts for the layer.
- `CalloutOutline`: This property is used to choose the brush for the annotation's outline color.
- `CalloutBackground`: This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- `CalloutTextColor`: This property is used to choose the brush for the annotation's text color.
- `CalloutStrokeThickness`: This property is used to choose the thickness for the callout backing.

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

`sample="/charts/data-chart/callout-layer-styling", height="500", alt="{Platform} Callout Layer Styling"`



<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    calloutsVisible={true}
    calloutsDataSource={this.state.calloutData}
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info" />
```

```html
<igc-category-chart
     id="chart"
     width="800px"
     height="400px"
     callouts-visible="true">
</igc-category-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcCategoryChartComponent);

chart.dataSource = data;
chart.calloutsDataSource = categoryData;
chart.calloutsXMemberPath = "index";
chart.calloutsYMemberPath = "value";
chart.calloutsLabelMemberPath = "info";
```

## API References

The following is a list of API members mentioned in the above sections:

- `CrosshairsSnapToData`
- `CategoryChart`

