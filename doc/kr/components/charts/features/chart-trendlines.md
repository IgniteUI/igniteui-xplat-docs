---
title: {Platform} Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Trendlines
_keywords: {Platform} Charts, Trendlines, Infragistics
_language: kr
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
---

# {Platform} Chart Trendlines

In {ProductName} charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the `CategoryChart`, `FinancialChart`, and `XamDataChart` (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the `TrendLineType` property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

# {Platform} Chart Trendlines Example

The following sample depicts a `FinancialChart` showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

`sample="/charts/financial-chart/trendlines", height="500", alt="{Platform} Trendlines Example"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- `CategoryChart`
- `XamDataChart`
- `FinancialChart`
- `TrendLineType`
