---
title: {Platform} Chart Data Filtering | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Data Filtering
_keywords: {Platform} Charts, Filtering, Infragistics
_language: kr
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Data Filtering

Data Filtering allows you to query large data in order to analyze and plot small subset of data entries via filter expressions, all without having to manually modify the datasource bound to the chart.

A complete list of valid expressions and keywords to form a query string can be found here:

[Filter expressions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris)

> NOTE: Any incorrect filter applied will result with an empty chart.

## {Platform} Chart Data Filter Example

The following example depicts a [Column Chart](../types/column-chart.md) of annual birth rates across several decades. The drop-down allows you to select a decade, which inserts an expression via the `InitialFilter` property, to update the chart visual and thus filtering out the other decades out.

`sample="/charts/category-chart/data-filter", height="500", alt="{Platform} Data Filter Example"`

<div class="divider--half"></div>

The `InitialFilter` property is a string that requires the following syntax in order to filter properly. The value requires sets of parenthesesthat include both the filter expression definition, column and value associated with the record(s) filtering in. 

eg. To show all countries that start with the letter B:

"(startswith(Country, 'B'))"

eg. Concatenating more than one expression:

"(startswith(Country, 'B') and endswith(Country, 'L') and contains(Product, 'Royal Oak') and contains(Date, '3/1/20'))"


## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- `CategoryChart`
- `IsTransitionInEnabled`
- `TransitionInDuration`
- `TransitionInMode`