---
title: $PlatformShort$ Financial Chart | Annotations | Infragistics
_description: Infragistics' $PlatformShort$ financial  chart control allows you to add annotations to your chart axes, such as Crosshair layer, final value layer and callout layer. Improve your graphs and visualizations with $ProductName$
_keywords: $PlatformShort$ charts, financial chart, stock chart, callout layer, final value, crosshair, $ProductName$, Infragistics
mentionedTypes: ['FinancialChart']
---
# $PlatformShort$ Chart Annotations

This topic provides conceptual information about the annotations available on the $PlatformShort$ financial chart component.

## $PlatformShort$ Chart Annotations Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-annotations" 
           alt="$PlatformShort$ Chart Annotations Example" 
           github-src="charts/financial-chart/annotations">
</code-view>

<div class="divider--half"></div>

## Crosshair Layer

The Crosshair Layer provides crossing lines that meet at the actual value of every targeted series.  Crosshair types include: Horizontal, Vertical, and Both.  The Crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points.  Annotations can also be enabled to display the crosshair's value along the axis.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.state.data}
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData={true}
    crosshairsAnnotationEnabled={true} />
```

```html
<igc-financial-chart id="chart"
    width="850px"
    height="600px"
    crosshairs-display-mode="Horizontal"
    crosshairs-snap-to-data="true"
    crosshairs-annotation-enabled="true">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    CrosshairsSnapToData="true"
    CrosshairsDisplayMode="CrosshairsDisplayMode.Horizontal"
    CrosshairsAnnotationEnabled="true" />
```

## Final Value Layer

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.state.data}
    finalValueAnnotationsVisible={true} />
```

```html
<igc-financial-chart id="chart"
    width="850px"
    height="600px"
    final-value-annotations-visible="true">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    FinalValueAnnotationsVisible="true" />
```

## Callout Layer

The Callout Layer displays a callout at X/Y positions.

> Note: When using the ordinal X axis mode, the `CalloutsXMemberPath` should point to the numeric index of the item, otherwise `CalloutsXMemberPath` should point to the time value.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutsContentMemberPath="content">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.state.data}
    calloutsVisible={true}
    calloutsDataSource={this.state.calloutData}
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title" />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    callouts-visible="true"
    callouts-x-member-path="index"
    callouts-y-member-path="yValue"
    callouts-label-member-path="title"
    callouts-content-member-path="content">
</igc-financial-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcFinancialChartComponent);
chart.dataSource = stocksData;
chart.calloutsDataSource = calloutData;
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    CalloutsVisible="true"
    CalloutsXMemberPath="Index"
    CalloutsYMemberPath="Value"
    CalloutsLabelMemberPath="Info"
    CalloutsContentMemberPath="Info" />
```
