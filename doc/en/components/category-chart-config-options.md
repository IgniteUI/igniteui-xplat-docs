---
title: $PlatformShort$ Charts and Graphs | Data Visualization Tools | Configuration Options | Infragistics
_description: Learn how to use Infragistics' $PlatformShort$ charts control features such as setting markers, titles, subtitles and animations.  View our $ProductName$ graph demos!
_keywords: $PlatformShort$ charts, category chart, annotations, $ProductName$, Infragistics
mentionedTypes: ['CategoryChart','CategoryTransitionInMode']
---
# $PlatformShort$ Configuration Options

There are many areas of the $ProductName$ category chart component that can be customized, such as the markers, chart titles and subtitles, and the chart types.

## $PlatformShort$ Configuration Options Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options" 
           alt="$PlatformShort$ Configuration Options Example" 
           github-src="charts/category-chart/marker-options">
</code-view>

## Configuring Chart Visuals

As shown in the above demo, the brushes for the chart types can be configured. The following code example sets the chart type to waterfall and changes the default color of the brushes.

```razor
 <CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    ChartType="CategoryChartType.Waterfall"
    Brushes="blue, green"
    NegativeBrushes="red, yellow"
    Outlines="black"
    Thickness="5"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartType="waterfall"
	brushes="blue, green"
	negativeBrushes="red, yellow"
	outlines="black"
	thickness="5">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    chartType="waterfall"
    brushes="blue, green"
    negativeBrushes="red, yellow"
    outlines="black"
    thickness={5} />
```

```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    chart-type="waterfall"
    brushes="blue, green"
    negative-brushes="red, yellow"
    outlines="black"
    thickness="5" >
</igc-category-chart>
```
## Configuring Chart Markers

Markers are visual elements that display the values of data points in the category chart component's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

The appearance of chart markers is managed through the `MarkerType`, `MarkerBrushes`, `MarkerOutlines` properties of the category chart, as demonstrated in the following code example.

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
    markerType="diamondMarker"
    markerBrushes="red"
    markerOutlines="yellow">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    markerType="diamondMarker"
    markerBrushes="red"
    markerOutlines="yellow" />
```
```html
<igc-category-chart
    id="chart"
    width="700px"
    height="700px"
    marker-type="diamondMarker"
    marker-brushes="red"
    marker-outlines="yellow">
</igc-category-chart>
```
## Configuring Chart Titles and Subtitles

The title and subtitle feature of the category chart component allows you to add information to the top section of the chart.
When adding a title or subtitle to the chart, the content of the chart automatically resizes allowing for the title and subtitle information.

You can customize the look and feel of the category chart’s subtitle and title in many different ways such as applying different font styles, margins, and alignment as demonstrated in the following code example.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    ChartTitle="Energy Use Per Country"
    TitleTextColor="Red"
    TitleTextStyle="20pt Verdana"
    Subtitle="Results over a two year periods"
    SubtitleTextColor="Blue"
    SubtitleTextStyle="10pt Verdana"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartTitle="Energy Use Per Country"
    titleTextColor = "Red"
    titleTextStyle="20pt Verdana"
    subtitle="Results over a two year periods"
    subtitleTextColor = "Blue"
    subtitleTextStyle = "10pt Verdana">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    chartTitle="Energy Use Per Country"
    titleTextColor = "Red"
    titleTextStyle="20pt Verdana"
    subtitle="Results over a two year periods"
    subtitleTextColor = "Blue"
    subtitleTextStyle = "10pt Verdana" />
```

```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    chart-title="Energy Use Per Country"
    title-text-color = "Red"
    title-text-style="20pt Verdana"
    subtitle="Results over a two year periods"
    subtitle-text-color = "Blue"
    subtitle-text-style = "10pt Verdana">
</igc-category-chart>
```
## Transition In Animations

This feature allows you to animate the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the y-axis.

The chart resizes allowing for the title and subtitle information.

By default, transition in animations are disabled and you can enable transition-in animations by setting the `IsTransitionInEnabled` option to “true”.

Transition in animations can be configured in terms of transition type, speed of the individual data points relative to each other, and the easing transition (managed by an easing function).

The transition type is configured by setting the transitionInMode option to the desired transition name. Automatic selection of the transition type based on the series type is possible, too, by setting the property to `Auto` (default).

The following code example demonstrates how to enable transition in animations and have the chart accordion in from the right.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    IsTransitionInEnabled="true"
    TransitionInDuration="5000"
    TransitionInMode="CategoryTransitionInMode.AccordionFromRight"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="5000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    isTransitionInEnabled={true}
    transitionInDuration={5000}
    transitionInMode="AccordionFromRight" />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    is-transition-in-enabled="true"
    transition-in-duration="5000"
    transition-in-mode="AccordionFromRight">
</igc-category-chart>
```