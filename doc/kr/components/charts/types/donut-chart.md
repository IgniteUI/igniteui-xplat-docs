---
title: {Platform} Donut Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Donut Chart
_keywords: {Platform} Charts, Donut Chart, Donut Chart, Infragistics
_language: kr
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
---
# {Platform} Donut Chart

The {ProductName} Donut Chart is similar to the [Pie Chart](pie-chart.md), proportionally illustrating the occurrences of a variable. The donut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data. The rings are capable of being bound to a different data item, or they can share a common data source.

## {Platform} Donut Chart Example

You can create this type of chart with the `XamDoughnutChart` control by binding your data as shown in the example below.

`sample="/charts/doughnut-chart/legend", height="600", alt="{Platform} Doughnut Legend"`



<div class="divider--half"></div>

## {Platform} Donut Chart Recommendations

### Are {Platform} Donut Charts right for your project?

Donut Charts are appropriate for small data sets and are easy to read at a glance. Donut charts are just one type of part-to-whole visualization. Others include:

- [Pie](pie-chart.md)
<!-- - Funnel  -->
- [Stacked Area](area-chart.md)
- [Stacked 100% Area (Stacked Percentage Area)](area-chart.md)
- [Stacked Bar](bar-chart.md)
- [Stacked 100% Bar (Stacked Percentage Bar)](bar-chart.md)
- [Treemap](treemap-chart.md)
- [Waterfall](column-chart.md)

The {Platform} Donut Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

### Best Practices for Donut Charts

- Using multiple data sets to display your data in a ring display.
- Placing the information such as values or labels, within the hole of the donut for quick explanation of data.
- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Ensuring data segments add up to 100%.
- Ensuring the color palette is distinguishable for segments/slices of the parts.

### When not to use a Donut Chart

- Comparing change over time —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- Requiring precise data comparison —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- You have more than 6 or 8 segments (high data volume) — consider a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a [Bar](bar-chart.md) chart.
- You have negative data, as this can not be represented in a donut chart.

## {Platform} Donut Chart - Slice Selection

The {Platform} Donut Chart has the ability to select slices on click. Optionally, you may apply a single custom visual style to the selected slices. The `SliceClick` event is raised when the user clicks on a slice. Enabling slice selection allows you to modify the slice's selection upon click. The following sample demonstrates how to enable slice selection and set the selected slice color to gray.

`sample="/charts/doughnut-chart/selection", height="600", alt="{Platform} Donut Slice Selection"`



<div class="divider--half"></div>

## {Platform} Donut Chart - Multiple Rings

It is possible to have a multiple ring display in the {Platform} Donut Chart, with each of the rings capable of being bound to a different data item, or they can share a common data source. This can be helpful if you need to display your data as tiers that have an underlying common category, such as the season to month data display below:

`sample="/charts/doughnut-chart/rings", height="600", alt="{Platform} Doughnut Multiple Rings"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Pie Chart](pie-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type       | Control Name   | API Members |
| -----------------|----------------|------------ |
| Donut Chart      | `XamDoughnutChart`     | `DoughnutChart` |
