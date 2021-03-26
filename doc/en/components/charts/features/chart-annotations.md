---
title: $PlatformShort$ Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Annotations
_keywords: $PlatformShort$ Charts, Annotations, Infragistics
mentionedTypes: ['XamCategoryChart']
---

# $PlatformShort$ Chart Annotations

The $PlatformShort$ chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## $PlatformShort$ Annotations Example

The following example demonstrates the annotation layers that are available on the $PlatformShort$ chart. Click on the checkboxes to turn each layer on and off.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-annotations"
           alt="$PlatformShort$ Annotations Example"
           github-src="charts/category-chart/line-chart-with-annotations">
</code-view>

<div class="divider--half"></div>

Like this sample? Get access to our complete $PlatformShort$ toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">Download it for free.</a>

## $PlatformShort$ Crosshair Layer

The Crosshair Layer renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines. 

Crosshair types include:
- Horizontal
- Vertical
- Both

The chart's crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis. 

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series on the chart component. To achieve this, set the `TargetSeries` property.  

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the `Brush` property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.  

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-crosshair-layer-styling"
           alt="$PlatformShort$ Crosshair Layer Styling"
           github-src="charts/data-chart/crosshair-layer-styling">
</code-view>

<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData={true}
    crosshairsAnnotationEnabled={true} />
```

```html
<igc-category-chart
    id="chart"
    width="400px"
    height="400px"
    crosshairs-display-mode="Horizontal"
    crosshairs-snap-to-data="true"
    crosshairs-annotation-enabled="true">
</igc-category-chart>
```

## $PlatformShort$ Final Value Layer
The Final Value Layer of the category chart component provides a quick view along the axis of the ending value displayed in a series. 

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the `TargetSeries` property.  

You can also customize this annotation by setting the following properties:

- `AxisAnnotationBackground`: This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- `AxisAnnotationTextColor`: This property is used to choose the brush for the annotation's text color.
- `AxisAnnotationOutline`: This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-final-value-layer-styling"
           alt="$PlatformShort$ Final Value Layer Styling"
           github-src="charts/data-chart/final-value-layer-styling">
</code-view>

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


## $PlatformShort$ Callout Layer

The callout layer displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users. 

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the `TargetSeries` property.

You can also customize this annotation by setting the following properties:

- `CalloutLeaderBrush`: This property is used to choose the brush for the leader lines for the callouts for the layer.
- `CalloutOutline`: This property is used to choose the brush for the annotation's outline color.
- `CalloutBackground`: This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- `CalloutTextColor`: This property is used to choose the brush for the annotation's text color.
- `CalloutStrokeThickness`: This property is used to choose the thickness for the callout backing.

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-callout-layer-styling"
           alt="$PlatformShort$ Callout Layer Styling"
           github-src="charts/data-chart/callout-layer-styling">
</code-view>

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

## API Members
- `CrosshairsSnapToData`
- `XamCategoryChart`

