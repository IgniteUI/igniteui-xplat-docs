---
title: $Platform$ Radial Chart | Data Visualization | Infragistics
_description: Infragistics' $Platform$ Radial Chart
_keywords: $Platform$ Charts, Radial Chart, Infragistics
mentionedTypes: ["XamDataChart", "RadialLineSeries", 'Series']
namespace: Infragistics.Controls.Charts
---
# $Platform$ Radial Chart

The $ProductName$ Radial Chart takes data and render it as collection of data points wrapped around a circle (rather than stretching along a horizontal line). Radial Chart is also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the category grouping mechanisms.

## $Platform$ Radial Area Chart

The $Platform$ Radial Area Chart has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Area Chart](area-chart.md), but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in `XamDataChart` control by binding your data to `RadialAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart"
           github-src="charts/data-chart/radial-area-chart"
           alt="$Platform$ Radial Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Radial Column Chart

The Radial Column Chart is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Column Chart](column-chart.md), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           github-src="charts/data-chart/radial-column-chart"
           alt="$Platform$ Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Radial Line Chart

The $Platform$ Radial Line Chart has renders as a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Line Chart](line-chart.md), but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in the `XamDataChart` control by binding your data to `RadialLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           github-src="charts/data-chart/radial-line-chart"
           alt="$Platform$ Radial Line Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Radial Pie Chart

The Radial Pie Chart uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialPieSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart"
           github-src="charts/data-chart/radial-pie-chart"
           alt="$Platform$ Radial Pie Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Radial Chart Styling

Once our radial chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers.

This example demonstrates how to customize $Platform$ Radial Chart.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart-styling"
           github-src="charts/data-chart/radial-area-chart-styling"
           alt="$Platform$ Radial Area Chart Styling" >
</code-view>

<div class="divider--half"></div>


## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Donut Chart](donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](pie-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

- `XamDataChart`
- `RadialAreaSeries`
- `RadialColumnSeries`
- `RadialLineSeries`
- `RadialPieSeries`
- `ItemsSource`
- `AngleAxisName`
- `ValueAxisName`
- `ValueMemberPath`
- `CategoryAngleAxis`
- `NumericRadiusAxis`

