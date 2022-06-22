---
title: $Platform$ Area Chart | Data Visualization | Infragistics
_description: Infragistics' $Platform$ Area Chart
_keywords: $Platform$ Charts, Area Chart, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "CategoryChartType", 'Series']
namespace: Infragistics.Controls.Charts
---
# $Platform$ Area Chart

The $ProductName$ Area Chart renders as a collection of points connected by straight line segments with the area below the line filled in. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). This chart emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

Area Chart is based on [Line Chart](line-chart.md) or [Spline Chart](spline-chart.md). Therefore, they are often chronological, showing a change of quantity e.g. accumulation of a commodity over time.

## $Platform$ Area Chart Example

You can create $Platform$ Category Area Chart in the `CategoryChart` control by binding your data to `ItemsSource` property and setting `ChartType` property to `Area` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources"
           github-src="charts/category-chart/area-chart-multiple-sources"
           alt="$Platform$ Area Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Area Chart Recommendations

### Area Chart Use Cases

There are several common use cases for choosing an Area Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.
- Need to compare the trends of your data over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize details time-series data.

### Area Chart Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use transparent colors to ensure that data that is plotted behind another series is not blocked.

### When Not to Use Area Charts

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period). This makes overlapped shaded areas impossible to differentiate.

### Area Chart Data Structure

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source should contain two or more data items in order to render a line between them.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## $Platform$ Area Chart with Single Series

$Platform$ Area Chart is often used to show the change of value over time such as the amount of renewable electricity produced. You can create this type of chart in `CategoryChart` control by binding your data and setting `ChartType` property to `Area` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-single-source"
           github-src="charts/category-chart/area-chart-single-source"
           alt="$Platform$ Area Chart with Single Series" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Area Chart with Multiple Series

Similarly to how you can show multiple [Line Chart](line-chart.md) and [Spline Chart](spline-chart.md), you may also combine multiple Area Charts in the same control. This is accomplished by binding multiple data source to `ItemsSource` property of the `CategoryChart` control.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources"
           github-src="charts/category-chart/area-chart-multiple-sources"
           alt="$Platform$ Area Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Area Chart Styling

Area charts often have semi-transparent fill for their areas, thicker lines and slightly larger markers than usual. Below is an example showing how you can style the Area Chart from earlier accordingly. 

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-styling"
           github-src="charts/category-chart/area-chart-styling"
           alt="$Platform$ Area Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Advanced Types of Area Charts

The following sections explain more advanced types of $Platform$ Area Charts that can be created using the `XamDataChart` control instead of `CategoryChart` control with simplified API.

## $Platform$ Step Area Chart

The $Platform$ Step Area Chart belongs to a group of category charts and it is rendered using a collection of points connected by continuous vertical and horizontal lines with the area below lines filled in. Values are represented on the y-axis and categories are displayed on the x-axis. The step area chart emphasizes the amount of change over a period of time or compares multiple items. You can create this type of chart in `CategoryChart` control by binding your data and setting `ChartType` property to `StepArea` value, as shown in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="$Platform$ Step Area Chart" >
</code-view>

<div class="divider--half"></div>

## Advanced Types of Area Charts

The following sections explain more advanced types of $Platform$ Area Charts that can be created using the `XamDataChart` control instead of `CategoryChart` control with simplified API.

## $Platform$ Range Area Chart

The $Platform$ Range Area Chart allows you show the area as a range between two values over time. You can create this type of chart in `XamDataChart` control by binding your data to `RangeAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-area-chart"
           github-src="charts/data-chart/range-area-chart"
           alt="$Platform$ Range Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Stacked Area Chart

The $Platform$ Stacked Area Chars is rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as Area Charts, with the only difference being that visually, the shaded areas are stacked on top of each other. You can create this type of chart in `XamDataChart` control by binding your data to `StackedAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart"
           github-src="charts/data-chart/stacked-area-chart"
           alt="$Platform$ Stacked Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Stacked 100% Area Chart

The $Platform$ Stacked 100% Area Chart allows you represent your data as part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea. You can create this type of chart in `XamDataChart` control by binding your data to `Stacked100AreaSeries`, as shown in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart"
           alt="$Platform$ Stacked 100% Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Stacked Spline Area Chart

The $Platform$ Stacked Spline Area Chart is rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Chart follows all of the same requirements as area charts, with the only difference being that the visually shaded areas are stacked on top of each other. You can create this type of chart in `XamDataChart` control by binding your data to `StackedSplineAreaSeries`, as shown in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart"
           alt="$Platform$ Stacked Spline Area Chart" >
</code-view>

<div class="divider--half"></div>


## $Platform$ Stacked 100% Spline Area Chart

The $Platform$ Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea. You can create this type of chart in `XamDataChart` control by binding your data to `Stacked100SplineAreaSeries`, as shown in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart"
           alt="$Platform$ Stacked 100% Spline Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Radial Area Chart

The $Platform$ Radial Area Chart belongs to a group of [Radial Chart](radial-chart.md) and has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Area Chart, but wraps the data points around a circular axis rather than stretching them horizontally. You can create this type of chart in `XamDataChart` control by binding your data to `RadialAreaSeries`, as shown in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart"
           alt="$Platform$ Radial Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Polar Area Chart

The $Platform$ Polar Area Chart belongs to a group of [Polar Chart](polar-chart.md) and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a straight line and then filling the area represented by the connected points. The Polar Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line. You can create this type of chart in `XamDataChart` control by binding your data to `PolarAreaSeries`, as shown in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart"
           alt="$Platform$ Polar Area Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Polar Spline Area Chart

The $Platform$ Polar Spline Area Chart belongs to a group of [Polar Chart](polar-chart.md) and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a curved spline and then filling the area represented by the connected points. The Polar Spline Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line. You can create this type of chart in `XamDataChart` control by binding your data to `PolarSplineAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-spline-area-chart"
           github-src="charts/data-chart/polar-spline-area-chart"
           alt="$Platform$ Polar Spline Area Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)


## API Members

The following table lists API members mentioned in above sections:

Chart Type               | Control Name       | API Members
-------------------------|--------------------|-----------------------
Area                     | `CategoryChart` | `ChartType` = `Area`
Step Area                | `CategoryChart` | `ChartType` = `StepArea`
Range Area               | `XamDataChart`     | `RangeAreaSeries`
Radial Area              | `XamDataChart`     | `RadialAreaSeries`
Polar Area               | `XamDataChart`     | `PolarAreaSeries`
Polar Spline Area        | `XamDataChart`     | `PolarSplineAreaSeries`
Stacked Area             | `XamDataChart`     | `StackedAreaSeries`
Stacked Spline Area      | `XamDataChart`     | `StackedSplineAreaSeries`
Stacked 100% Area        | `XamDataChart`     | `Stacked100AreaSeries`
Stacked 100% Spline Area | `XamDataChart`     | `Stacked100SplineAreaSeries`
