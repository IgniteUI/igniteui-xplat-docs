---
title: $PlatformShort$ Charts and Graphs | Data Visualization Tools | Axis Options | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to plot data using different axis types such as numeric, category and date time axis. Learn about our $ProductName$ graph axis!
_keywords: $PlatformShort$ charts, category chart, Axis Labels, Axis Range, $ProductName$, Infragistics
mentionedTypes: ['CategoryChart']
---
# $PlatformShort$ Axis Options

In the $ProductName$ category chart component, an Axis provides base properties for specifying appearance of axis main lines, tickmarks, titles, and axis labels.

## $PlatformShort$ Axis Options Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-axis-options-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-axis-options' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Axis Options Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-axis-options-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/category-chart/axis-options"></sample-button>

</div>

<div class="divider--half"></div>

By default, you do not need to explicitly set the labels. The category chart component will use the first appropriate string property that it finds within the data you provided and will explicitly set which property to use for the labels.

## Axis Labels
The $ProductName$ category chart component allows you full control over configuring, formatting and styling the font of the labels displayed on your chart. You can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility.

The following code example shows how to style labels on the x-axis using style properties:

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    XAxisTitleTextColor="gray"
    XAxisTitleTextStyle="10pt Verdana"
    XAxisLabelTopMargin="5"
    YAxisTitleTextColor="gray"
    YAxisTitleTextStyle="10pt Verdana"
    YAxisTitleRightMargin="5"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisLabelTextStyle="10pt Verdana"
    xAxisLabelTopMargin="5"
    xAxisLabelTextColor="gray"
    yAxisLabelTextStyle="10pt Verdana"
    yAxisLabelRightMargin="5"
    yAxisLabelTextColor="gray">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   xAxisLabelTextStyle="10pt Verdana"
                   xAxisLabelTopMargin={5}
                   xAxisLabelTextColor="gray"
                   yAxisLabelTextStyle="10pt Verdana"
                   yAxisLabelRightMargin={5}
                   yAxisLabelTextColor="gray" />
```
```html
<igc-category-chart
    id="chart"
    width="700px"
    height="500px"
    x-axis-label-text-style="10pt Verdana"
    x-axis-label-top-margin="5"
    x-axis-label-text-color="gray"
    y-axis-label-text-style="10pt Verdana"
    y-axis-label-right-margin="5"
    y-axis-label-text-color="gray">
</igc-category-chart>
```

<div class="divider--half"></div>

## Axis Titles
The axis title feature of the $ProductName$ category chart allows you to add contextual information to the x and y axes of the chart. You can customize the look and feel of the category chart's x-axis and y-axis titles in many different ways such as applying different font styles, margins, and alignment.

The following code example shows how to set and customize the titles on the x-axis and y-axis:

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    XAxisTitle="Countries"
    XAxisTitleTextColor="gray"
    XAxisTitleTextStyle="12pt Verdana"
    XAxisTitleAngle="0"
    YAxisTitle="Trillions of Watt-hours (Twh)"
    YAxisTitleTextColor="gray"
    YAxisTitleTextStyle="12pt Verdana"
    YAxisTitleAngle="90"
    YAxisTitleLeftMargin="5"/>
```

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTitle="Countries"
      xAxisTitleTextColor="gray"
      xAxisTitleTextStyle="12pt Verdana"
      xAxisTitleAngle="0"
      yAxisTitle="Trillions of Watt-hours (TWh)"
      yAxisTitleTextStyle="12pt Verdana"
      yAxisTitleTextColor="gray"
      yAxisTitleAngle="90"
      yAxisTitleLeftMargin="5">
 </igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   xAxisTitle="Countries"
                   xAxisTitleTextColor="gray"
                   xAxisTitleTextStyle="12pt Verdana"
                   xAxisTitleAngle={0}
                   yAxisTitle="Trillions of Watt-hours (TWh)"
                   yAxisTitleTextStyle="12pt Verdana"
                   yAxisTitleTextColor="gray"
                   yAxisTitleAngle={90}
                   yAxisTitleLeftMargin={5} />
```

```html
<igc-category-chart
     id="chart"
     width="700px"
     height="500px"
     x-axis-title="Countries"
     x-axis-title-text-color="gray"
     x-axis-title-text-style="12pt Verdana"
     x-axis-title-angle="0"
     y-axis-title="Trillions of Watt-hours (TWh)"
     y-axis-title-text-style="12pt Verdana"
     y-axis-title-text-color="gray"
     y-axis-title-angle="90"
     y-axis-title-left-margin="5">
</igc-category-chart>
```

## Axis Tickmarks
Tick marks display points on the axes. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness and color of the x-axis and y-axis labels.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    XAxisTickLength="15"
    XAxisTickStrokeThickness="2"
    XAxisTickStroke="gray"
    YAxisTickLength="0"/>
```

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTickLength="15"
      xAxisTickStrokeThickness="2"
      xAxisTickStroke="gray"
      yAxisTickLength="0">
 </igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   xAxisTickLength={15}
                   xAxisTickStrokeThickness={2}
                   xAxisTickStroke="gray"
                   yAxisTickLength={0} />
```

```html
<igc-category-chart
     id="chart"
     width="700px"
     height="500px"
     x-axis-tick-length=15
     x-axis-tick-stroke-Thickness="2"
     x-axis-tick-stroke="gray"
     y-axis-tick-length="0">
</igc-category-chart>
```

<div class="divider--half"></div>

## Axis Range
In the category chart component, the range on numeric axes is the difference in numeric values from the beginning of the axis to the end or from the smallest to largest values in the data. The range minimum is the lowest value of the axis. The range maximum is the highest value of the axis. By default, the category chart component will calculate the minimum and maximum values for the y-axis range based on the lowest and highest data points in order to maximize the chart plot area. The automatic calculation of an axis' minimum and maximum values may not be appropriate for your set of data points. For example, if your data has a minimum value of 850, you may want to set the minimum value of the axis using y-axis’s `YAxisMinimumValue` property to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same can be applied to the axis maximum value and the highest value of data points using y-axis’s `YAxisMaximumValue` property.

The following sample code demonstrates how to change the axis range on the y-axis.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    YAxisMinimumValue="0"
    YAxisMaximumValue="1000"/>
```

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      yAxisMinimumValue="0"
      yAxisMaximumValue="1000">
 </igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   yAxisMinimumValue={0}
                   yAxisMaximumValue={1000} />
```
```html
<igc-category-chart
    id="chart"
    width="700px"
    height="500px"
    y-axis-minimum-value="0"
    y-axis-maximum-value="1000">
</igc-category-chart>
```

<div class="divider--half"></div>

## Axis Interval
In the category chart component, the `YAxisInterval` property specifies how frequently major gridlines and axis labels are rendered on an axis. Similarly, the `YAxisMinorInterval` property specifies how frequently minor gridlines are rendered on an axis.

The following code snippet demonstrates how to configure the interval on the y-axis.

```razor
 <CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    YAxisInterval="100"
    YAxisMajorStroke="black"
    YAxisMajorStrokeThickness="1"
    YAxisMinorInterval="20"
    YAxisMinorStroke="gray"
    YAxisMinorStrokeThickness="0.5"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    yAxisInterval="100"
    yAxisMajorStroke="black"
    yAxisMajorStrokeThickness="1"
    yAxisMinorInterval="20"
    yAxisMinorStroke="gray"
    yAxisMinorStrokeThickness="0.5">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   yAxisInterval={100}
                   yAxisMajorStroke="black"
                   yAxisMajorStrokeThickness={1}
                   yAxisMinorInterval={20}
                   yAxisMinorStroke="gray"
                   yAxisMinorStrokeThickness={0.5} />
```
```html
<igc-category-chart
    id="chart"
    width="700px"
    height="500px"
    y-axis-interval="100"
    y-axis-major-stroke="black"
    y-axis-major-stroke-thickness="1"
    y-axis-minor-interval="20"
    y-axis-minor-stroke="gray"
    y-axis-minor-stroke-thickness="0.5">
</igc-category-chart>
```
<div class="divider--half"></div>

## Axis Gap
The Axis Gap feature of the category chart allows setting the gap between series of the chart.

The property accepts a numeric float value between 0 and 1. The value represents a relative width of the gap out of the available number of pixels between series.
   0 - no gap is rendered between series;
   1 - maximum available gap is rendered between series.

To set the category chart with `XAxisGap` of 0.125 the following code can be used:

```razor
 <CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    XAxisGap="0.125"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisGap="0.125">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   xAxisGap={0.125} />
```

```html
<igc-category-chart
     id="chart"
     width="700px"
     height="500px"
     x-axis-gap="0.125">
</igc-category-chart>
```

<div class="divider--half"></div>

## Axis Overlap
The Axis Overlap feature of the category chart component allows setting overlap of rendered categories.

The property accepts a numeric float value between -1 and 1. The value represents a relative overlap out of the available number of pixels dedicated to each series.

* Negative value (up to -1): the categories are pushed away from each other producing a gap between themselves.
* Positive value (up to 1): the categories are overlapping each other. Value of 1 directs the chart to render categories on top of each other.

The following code example sets the `XAxisOverlap` to 0.

```razor
 <CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    XAxisOverlap="0"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisOverlap="0">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
                   width="700px"
                   height="500px"
                   xAxisOverlap={0} />
```

```html
<igc-category-chart
    id="chart"
    width="700px"
    height="500px"
    x-axis-overlap=0>
</igc-category-chart>
```

<div class="divider--half"></div>