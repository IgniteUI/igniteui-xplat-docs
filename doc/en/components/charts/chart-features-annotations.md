---
title: $PlatformShort$ Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Annotations
_keywords: $PlatformShort$ Charts, Annotations, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Chart Annotations

This topic provides conceptual information about the annotations and overlay interactions available on the $ProductName$ category chart component.

## $PlatformShort$ Annotations Example

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-annotations"
           alt="$PlatformShort$ Annotations Example"
           github-src="charts/category-chart/line-chart-with-annotations">
</code-view>

<div class="divider--half"></div>

## Crosshair Layer

The Crosshair Layer of the category chart provides crossing lines that meet at the actual value of every targeted series.  Crosshair types include: Horizontal, Vertical, and Both.  The Crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points.  Annotations can also be enabled to display the crosshair's value along the axis.

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    CrosshairsDisplayMode="CrosshairsDisplayMode.Horizontal"
    CrosshairsAnnotationEnabled="true"
    CrosshairsSnapToData="true"/>
```

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

## Final Value Layer
The Final Value Layer of the category chart component provides a quick view along the axis of the ending value displayed in a series.

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    FinalValueAnnotationsVisible="true"
    YAxisLabelLocation=AxisLabelsLocation.OutsideRight/>
```

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


## Callout Layer
The Callout Layer of the category chart component displays a text callout at X/Y positions given in the data.

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    CalloutsVisible="true"
    CalloutsXMemberPath="index"
    CalloutsYMemberPath="value"
    CalloutsLabelMemberPath="info"/>
```

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