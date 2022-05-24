---
title: $Platform$ Chart Data Tooltip | Data Visualization Tools | Infragistics
_description: Use Infragistics $ProductName$ chart with the data tooltip layer!
_keywords: $Platform$ charts, chart legend, legend, legend types, $ProductName$, Infragistics
mentionedTypes: ["XamDataChart", "Legend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
---

# $Platform$ Chart Data Tooltip

In $ProductName$, the `DataToolTipLayer` is a component that works much like a combination of the `DataLegend`, `ItemToolTipLayer`, and `CategoryToolTipLayer` by showing and tracking values of series in a tooltip while still providing the many configuration properties of the `DataLegend` for filtering series rows and values columns, styling and formatting values. This tooltip type updates and displays while moving the mouse inside of the plot area of the `XamDataChart` and displays its content using a set of three type of rows and four types of columns.

## $Platform$ Data Tooltip Rows

The rows of the `DataToolTipLayer` include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the `HeaderText` property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the `SummaryText` property of the legend. Also, you can use the `SummaryType` property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

## $Platform$ Data Tooltip Columns

The columns of the `DataToolTipLayer` from left to right include the title column, value column, and units column.

The title column displays legend badges and series titles, which come from the `Title` property of the different `Series` plotted in the chart.

The value column displays series values as abbreviated text which can be formatted using the `ValueFormatAbbreviation` property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Procession of abbreviated values is controlled using the `ValueFormatMinFractions` and `ValueFormatMaxFractions` for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the `DataToolTipLayer` by setting the `UnitText` for all columns or using the the following properties on each series in the chart:

* Category Series (e.g. ColumnSeries)
    * ValueMemberAsLegendUnit="K"

* Financial Price Series:
    * OpenMemberAsLegendUnit="K"
    * LowMemberAsLegendUnit="K"
    * HighMemberAsLegendUnit="K"
    * CloseMemberAsLegendUnit="K"
    
* Range Series:
    * LowMemberAsLegendUnit="K"
    * HighMemberAsLegendUnit="K"
        
* Radial Series:
    * ValueMemberAsLegendUnit="K"
    * AngleMemberAsLegendUnit="K"

* Polar Series:
    * RadiusMemberAsLegendUnit="K"
    * AngleMemberAsLegendUnit="K"

## $Platform$ Data Tooltip Styling

The `DataToolTipLayer` provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the `TitleTextColor`, `LabelTextColor`, `ValueTextColor`, and `UnitsTextColor` properties.

## $Platform$ Data Tooltip Grouping & Positioning

The `DataToolTipLayer` exposes a `GroupingMode` property that can be set to either `Grouped` or `Individual`. You will only see a difference if there are multiple series plotted in the chart, but when there are multiple series, the `Grouped` mode will place all of the information for each series in a single tooltip, while the `Individual` mode will show the information in separate tooltips for each series individually.

While in the `Grouped` mode, you can customize where the grouped tooltip is shown by setting the `GroupedPositionModeX` and `GroupedPositionModeY` properties. This essentially allows you to customize the horizontal and vertical alignments of the grouped tooltip and whether or not you want it to track to the closest series points to the mouse position.

## $Platform$ Data Tooltip Value Formatting

The `DataToolTipLayer` provides automatic abbreviation of large numbers using its `ValueFormatAbbreviation` property. This adds a multiplier in the units column such as kilo, million, billion, etc.

You can customize the number of fractional digits that are displayed by setting the `ValueFormatMinFractions` and `ValueFormatMaxFractions`. This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

## $Platform$ Data Tooltip Value Mode

You have the ability to change the default decimal display of values within the `DataToolTipLayer` to be currency by changing the `ValueFormatMode` property of the layer. The `DataToolTipLayer` also exposes the ability to modify the culture of the displayed currency symbol by using its `ValueFormatCulture` property and setting it to its corresponding culture tag. For example, the following sample demonstrates a chart with the `ValueFormatCulture` set to "en-GB":