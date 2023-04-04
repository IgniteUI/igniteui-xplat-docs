---
title: {Platform} Polar Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Polar Chart
_keywords: {Platform} Charts, Polar Chart, Infragistics
mentionedTypes: ["XamDataChart", "PolarAreaSeries", 'Series']
namespace: Infragistics.Controls.Charts
---
# {Platform} Polar Chart

The {ProductName} Polar Chart uses the polar coordinate system (angle, radius) instead of the Cartesian coordinate system (x, y) to plot data in chart. In other words, Polar Chart takes concepts of [Scatter Series](scatter-chart.md) and wrap them around a circle rather than stretching data points horizontally. It is often used to plot scientific data (e.g. wind direction and speed, direction, and strength of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

## {Platform} Polar Area Chart

The Polar Area Chart renders using a collection of polygons connecting data points and it uses the same concepts of data plotting as the [Category Area Chart](area-chart.md#{Platform}-area-chart-example) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarAreaSeries`, as shown in the example below:

`sample="/charts/data-chart/polar-area-chart", height="600", alt="{Platform} Polar Area Chart"`



<div class="divider--half"></div>

## {Platform} Polar Spline Area Chart

The Polar Spline Area Chart renders also as a collection of polygons but they have curved splines connecting data points instead of straight lines like [Polar Area Chart](polar-chart.md#{Platform}-polar-area-chart) does. You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarAreaSeries`, as shown in the example below:

`sample="/charts/data-chart/polar-spline-area-chart", height="600", alt="{Platform} Polar Area Chart"`



<div class="divider--half"></div>

## {Platform} Polar Marker Chart

The Polar Marker Chart renders using a collection of markers representing data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Marker Chart](scatter-chart.md#{Platform}-Scatter-Marker-Chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarScatterSeries`, as shown in the example below:

`sample="/charts/data-chart/polar-scatter-chart", height="600", alt="{Platform} Polar Marker Chart"`



<div class="divider--half"></div>

## {Platform} Polar Line Chart

The Polar Line Chart renders using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md#{Platform}-Scatter-Line-Chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarLineSeries`, as shown in the example below:

`sample="/charts/data-chart/polar-line-chart", height="600", alt="{Platform} Polar Line Chart"`



<div class="divider--half"></div>

## {Platform} Polar Spline Chart

The Polar Spline Chart renders using a collection of curved splines connecting data points in polar (angle/radius) coordinate system. This Chart uses the same concepts of data plotting as the [Scatter Spline Chart](scatter-chart.md#{Platform}-Scatter-spline-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarSplineSeries`, as shown in the example below:

`sample="/charts/data-chart/polar-spline-chart", height="600", alt="{Platform} Polar Spline Chart"`



<div class="divider--half"></div>

## {Platform} Polar Chart Styling

Once our polar chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers. You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarAreaSeries`, as shown in the example below:

`sample="/charts/data-chart/polar-area-chart-styling", height="600", alt="{Platform} Polar Area Chart Styling"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Donut Chart](Donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](Pie-chart.md)
- [Radial Chart](radial-chart.md)
- [Scatter Chart](scatter-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- `XamDataChart`
- `PolarAreaSeries`
- `PolarLineSeries`
- `PolarSplineSeries`
- `PolarSplineAreaSeries`
- `PolarScatterSeries`
- `Series.ItemsSource`
- `AngleMemberPath`
- `RadiusMemberPath`
- `NumericAngleAxis`
- `NumericRadiusAxis`

