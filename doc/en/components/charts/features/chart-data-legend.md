---
title: {Platform} Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics {ProductName} chart with the data legend!
_keywords: {Platform} charts, chart legend, legend, legend types, {ProductName}, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series", "DataLegendSummaryType", "DataAbbreviationMode" ]
namespace: Infragistics.Controls.Charts
---

# {Platform} Data Legend

In {ProductName}, the `XamDataLegend` is highly-customizable version of the `Legend`, that shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the `CategoryChart`, `FinancialChart`, and `XamDataChart`. Also, it has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows (header, series, summary) and four types of columns (title, label, value, unit).

## {Platform} Data Legend Rows

The rows of the `XamDataLegend` include the header row, series row(s), and the summary row. The header row displays the axis label of the point that is hovered, and can be changed using the `HeaderText` property.

`sample="/charts/category-chart/data-legend", height="450", alt="{Platform} Category Chart Data Legend Example"`



### Header Row

The header row displays the current label of x-axis when hovering mouse over category series and financial series. You can use `HeaderFormatDate` and `HeaderFormatTime` properties to format date and time in the `XamDataLegend` if the x-axis shows dates. For other types of series, the `XamDataLegend` does not render the header row.

### Series Row

The series row represents each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol or unit of measurement, if specified. You can filter series rows by setting `IncludedSeries` or `ExcludedSeries` properties to a collection of series' indexes (1, 2, 3) or series' titles (Tesla, Microsoft).

### Summary Row

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the `SummaryTitleText` property of the legend. Also, you can use the `SummaryType` property to customize whether you display the `Total`, `Min`, `Max`, or `Average` of series values in the summary row.

## {Platform} Data Legend Columns

The columns of the `XamDataLegend` include the series title, label, value of data column, and optional unit associated with the value. Some series in the chart can have multiple columns for label, value, and units. For example, financial price series has **High**, **Low**, **Open**, and **Close** data columns which can be filtered in the `XamDataLegend` using the `IncludedColumns` or `ExcludedColumns` properties.

`sample="/charts/financial-chart/data-legend", height="450", alt="{Platform} Financial Chart Data Legend Example"`



Setting values on the `IncludedColumns` and `ExcludedColumns` properties, depends on type of series and how many data columns they support. For example, you can set `IncludedColumns` property to a collection of **Open** and **Close** strings and the legend will show only open and close values for stock prices when the chart is plotting financial series. The following table lists all column names that can be use to filter columns in data legend.

|  Type of Series  | Column Names |
| -----------------|-------------- |
| Category Series  | Value |
| Radial Series    | Value |
| Polar Series     | Radius, Angle |
| Bubble Series    | X, Y, Radius |
| Scatter Series   | X, Y |
| Range Series     | High, Low |
| Financial Series | High, Low, Open, Close, Change, TypicalPrice, Volume |

Where the **TypicalPrice** and percentage **Change** of OHLC prices are automatically calculated by financial series so you do not need to include them in your data sources.

### Title Column

The title column displays legend badges and series titles, which come from the `Title` property of the different `Series` plotted in the chart.

### Label Column

The label column displays short name on the left side of value column, e.g. "O" for **Open** stock price. You can toggle visibility of this column using the `LabelDisplayMode` property.

### Value Column

The value column displays values of series as abbreviated text which can be formatted using the `ValueFormatAbbreviation` property to apply the same abbreviation for all numbers by setting this property to `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the `ValueFormatMinFractions` and `ValueFormatMaxFractions` for minimum and maximum digits, respectively.


### Unit Column

The unit column displays an abbreviation symbol on the right side of value column. The unit symbol depends on the `ValueFormatAbbreviation` property, e.g. "M" for the `Million` abbreviation.

### Customizing Columns

You can customize text displayed in the **Label** and **Unit** columns using  properties that end with **MemberAsLegendLabel** and **MemberAsLegendUnit**  on each series. The following table shows some possible customizations of the **Label** and **Unit** columns.

|  Type of Series | Series Properties |
| ------|---- |
| Category Series | ValueMemberAsLegendLabel="$" <br> ValueMemberAsLegendUnit="M" |
| Radial Series | ValueMemberAsLegendLabel="Distance:" <br> ValueMemberAsLegendUnit="KM" |
| Polar Series | RadiusMemberAsLegendLabel="Radius:" <br> RadiusMemberAsLegendUnit="KM" <br> AngleMemberAsLegendLabel="Angle:" <br> AngleMemberAsLegendUnit="°" |
| Range Series | HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" |
| Financial Series | OpenMemberAsLegendLabel="O:" <br> OpenMemberAsLegendUnit="K" <br> HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" <br> CloseMemberAsLegendLabel="C:" <br> CloseMemberAsLegendUnit="K" <br> |

Also, you can use the `UnitText` property on the `XamDataLegend` to change text displayed in all Unit columns.

## {Platform} Data Legend Styling

The `XamDataLegend` provides properties for styling each type of column. Each of these properties begins with **Title**, **Label**, **Value**, or **Units**. You can style the text's color, font, and margin. For example, if you wanted to set the text color of all columns, you would set the `TitleTextColor`, `LabelTextColor`, `ValueTextColor`, and `UnitsTextColor` properties. The following example demonstrates a utilization of the styling properties mentioned above:

`sample="/charts/financial-chart/data-legend-styling-props", height="450", alt="{Platform} Data Legend Styling Example"`



## {Platform} Data Legend Value Formatting

The `XamDataLegend` provides automatic abbreviation of large numbers using its `ValueFormatAbbreviation` property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the `ValueFormatMinFractions` and `ValueFormatMaxFractions`. This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.
The following example demonstrates how to use those properties:

`sample="/charts/category-chart/data-legend-formatting-decimals", height="450", alt="{Platform} Data Legend Formatting Decimals Example"`



## {Platform} Data Legend Value Mode

You have the ability to change the default decimal display of values within the `XamDataLegend` to a currency by changing the `ValueFormatMode` property. Also, you can change the culture of the displayed currency symbol by setting the `ValueFormatCulture` property a culture tag. For example, the following example data legend with the `ValueFormatCulture` set to "en-GB" to display British Pounds (£) symbol:

`sample="/charts/financial-chart/data-legend-formatting-currency", height="450", alt="{Platform} Formatting Currency Example"`

The `XamDataLegend` has several events that fire when rendering their corresponding row, even during mouse interactions where the values are updating. These events are listed below with a description of what they are designed to be used for:

- `StyleSeriesRow`: This event fires once for each series row, which allows conditional styling of the values of the series.
- `StyleSeriesColumn`: This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
- `StyleSummaryRow`: This event fires once when rendering the summary row.
- `StyleSummaryColumn`: This event fires once when rendering the summary column.


## API References

 - `ExcludedColumns`
 - `ExcludedSeries`
 - `HeaderFormatDate`
 - `HeaderFormatTime`
 - `HeaderText`
 - `IncludedColumns`
 - `IncludedSeries`
 - `LabelDisplayMode`
 - `LabelTextColor`
 - `StyleHeaderRow`:
 - `StyleSeriesColumn`:
 - `StyleSeriesRow`
 - `StyleSeriesRow`:
 - `StyleSummaryColumn`:
 - `StyleSummaryRow`:
 - `SummaryTitleText`
 - `SummaryType`
 - `TitleTextColor`
 - `UnitText`
 - `UnitsTextColor`
 - `ValueFormatAbbreviation`
 - `ValueFormatCulture`
 - `ValueFormatMaxFractions`
 - `ValueFormatMaxFractions`
 - `ValueFormatMinFractions`
 - `ValueFormatMode`
 - `ValueTextColor`