---
title: $PlatformShort$ Chart Markers | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Markers
_keywords: $PlatformShort$ Charts, Markers, Infragistics
mentionedTypes: ['XamCategoryChart']
---

# $PlatformShort$ Chart Markers

There are many areas of the $ProductName$ charts that can be customized, such as the markers, chart titles and subtitles, and the chart types.

# $PlatformShort$ Chart Marker Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options"
           alt="$PlatformShort$ Configuration Options Example"
           github-src="charts/category-chart/marker-options">
</code-view>

<div class="divider--half"></div>

## Configuring Chart Markers

Markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

The appearance of chart markers is managed through the `MarkerType`, `MarkerBrushes`, `MarkerOutlines` properties of the chart, as demonstrated in the following code example.

```razor
 <CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    MarkerType="MarkerType.Diamond"
    MarkerBrushes="red"
    MarkerOutlines="yellow"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    markerType="Diamond"
    markerBrushes="red"
    markerOutlines="yellow">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    markerType="Diamond"
    markerBrushes="red"
    markerOutlines="yellow" />
```
```html
<igc-category-chart
    id="chart"
    width="700px"
    height="700px"
    marker-type="Diamond"
    marker-brushes="red"
    marker-outlines="yellow">
</igc-category-chart>
```