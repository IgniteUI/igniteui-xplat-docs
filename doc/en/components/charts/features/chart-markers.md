---
title: {Platform} Chart Markers | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Markers
_keywords: {Platform} Charts, Markers, Infragistics
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Markers

In {ProductName}, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

# {Platform} Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the `MarkerType` property to "Circle."

The colors of the markers are also managed by setting the `MarkerBrushes` and `MarkerOutlines` properties in the sample below. The markers and `ChartType` is configurable in this sample by using the drop-downs as well.

`sample="/charts/category-chart/marker-options", height="500", alt="{Platform} Configuration Options Example"`



<div class="divider--half"></div>

# {Platform} Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  `MarkerTemplate` property of a series rendered in the `CategoryChart` control as it is demonstrated in example below.

`sample="/charts/category-chart/marker-templates", height="600", alt="{Platform} Chart Marker Templates"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerType`
- `CategoryChart`
