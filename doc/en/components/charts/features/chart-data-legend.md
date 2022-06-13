---
title: $Platform$ Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics $ProductName$ chart with the data legend!
_keywords: $Platform$ charts, chart legend, legend, legend types, $ProductName$, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series"]
namespace: Infragistics.Controls.Charts
---

# $Platform$ Data Legend

In $ProductName$, the `XamDataLegend` is a component that works much like the `Legend`, but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the `XamDataChart` and has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows and four types of columns.

## $Platform$ Data Legend Rows

The rows of the `XamDataLegend` include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the `HeaderText` property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the `SummaryTitleText` property of the legend. Also, you can use the `SummaryType` property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

The following example demonstrates the `XamDataLegend` with a summary applied:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend"
           alt="$Platform$ Category Chart Data Legend Example"
           github-src="charts/category-chart/data-legend">
</code-view>

## $Platform$ Data Legend Columns

The columns of the `XamDataLegend` include the title, label, value, and units columns. Each series in the chart can have multiple columns for label, value, and units depending on the `IncludedColumns` or `ExcludedColumns` collections of the legend.

The title column displays legend badges and series titles, which come from the `Title` property of the different `Series` plotted in the chart.

The label column displays the name or abbreviation of the different property paths in the `IncludedColumns` or `ExcludedColumns` collections of the legend.

The value column displays series values as abbreviated text which can be formatted using the `ValueFormatAbbreviation` property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the `ValueFormatMinFractions` and `ValueFormatMaxFractions` for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the `XamDataLegend` by setting the `UnitText` for all columns or using the the following properties on each series in the chart:

- Category Series (e.g. ColumnSeries)
    - ValueMemberAsLegendUnit="K"
- Financial Price Series:
    - OpenMemberAsLegendUnit="K"
    - LowMemberAsLegendUnit="K"
    - HighMemberAsLegendUnit="K"
    - CloseMemberAsLegendUnit="K"
- Range Series:
    - LowMemberAsLegendUnit="K"
    - HighMemberAsLegendUnit="K"
- Radial Series:
    - ValueMemberAsLegendUnit="km"    
- Polar Series:
    - RadiusMemberAsLegendUnit="km"
    - AngleMemberAsLegendUnit="degrees"

For each of the above-listed properties, there is a corresponding `MemberAsLegendLabel` property as well to determine the text in the label columns mentioned previously.

The columns included in the `IncludedColumns` and `ExcludedColumns` collections generally correspond to the value paths of your underlying data items, but the financial series has the option to include some special ones in addition to the `High`, `Low`, `Open`, and `Close` paths that are required for the financial series to plot correctly. You have the ability to show `TypicalPrice`, `Change`, and `Volume` options within the legend.

The following example demonstrates a `XamDataLegend` with added columns of Open, High, Low, Close, and Change:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend"
           alt="$Platform$ Financial Chart Data Legend Example"
           github-src="charts/financial-chart/data-legend">
</code-view>

## $Platform$ Data Legend Styling

The `XamDataLegend` provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the `TitleTextColor`, `LabelTextColor`, `ValueTextColor`, and `UnitsTextColor` properties.

The following example demonstrates a utilization of the styling properties mentioned above:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-styling-props"
           alt="$Platform$ Data Legend Styling Example"
           github-src="charts/financial-chart/data-legend-styling-props">
</code-view>

## $Platform$ Data Legend Value Formatting

The `XamDataLegend` provides automatic abbreviation of large numbers using its `ValueFormatAbbreviation` property. This adds a multiplier in the units column such as kilo, million, billion, etc.

You can customize the number of fractional digits that are displayed by setting the `ValueFormatMinFractions` and `ValueFormatMaxFractions`. This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

The following example demonstrates a `XamDataLegend` with the `ValueFormatMinFractions` and `ValueFormatMaxFractions` set:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend-formatting-decimals"
           alt="$Platform$ Data Legend Formatting Decimals Example"
           github-src="charts/category-chart/data-legend-formatting-decimals">
</code-view>

## $Platform$ Data Legend Value Mode

You have the ability to change the default decimal display of values within the `XamDataLegend` to be currency by changing the `ValueFormatMode` property of the control. The `XamDataLegend` also exposes the ability to modify the culture of the displayed currency symbol by using its `ValueFormatCulture` property and setting it to its corresponding culture tag.

For example, the following example demonstrates a chart with the `ValueFormatCulture` set to "en-GB":

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-formatting-currency"
           alt="$Platform$ Formatting Currency Example"
           github-src="charts/financial-chart/data-legend-formatting-currency">
</code-view>

## $Platform$ Data Legend Styling Events

The `XamDataLegend` has three events that fire when rendering their corresponding row. These events are listed below with a description of what they are designed to be used for:

- `StyleHeaderRow`: This event fires once when rendering the header row.
- `StyleSeriesRow`: This event fires once for each series row, which allows conditional styling of the values of the series.
- `StyleSeriesColumn`: This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
- `StyleSummaryRow`: This event fires once when rendering the summary row.
- `StyleSummaryColumn`: This event fires once when rendering the summary column.

Each of the above events exposes a `DataLegendStylingRowEventArgs` parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the `StyleSeriesRow` event fires for each series, the event arguments will return the series index and series title for the row that represents the series.
