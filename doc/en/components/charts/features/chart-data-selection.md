---
title: {Platform} Chart Data Selection | Data Visualization Tools | Infragistics
_description: Use Infragistics {ProductName} chart with the data selection!
_keywords: {Platform} charts, chart data, selection, data selection, {ProductName}, Infragistics
_license: commercial
_language: en
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Selection

The {ProductName} selection feature in {Platform} {ComponentTitle} allows users to interactively select, highlight, outline and vice-versa deselect single or multiple series within a chart. This provides many different possibilities with how users interact with the data presented in more meaningful ways.

## Configuring Selection

The default behavior `SelectionMode` turned off and requires opting into one of the following options. There are several selection modes available in the `{ComponentName}`:

- **Auto** 
- **None**
- **Brighten**
- **FadeOthers**
- **GrayscaleOthers**
- **FocusColorThickOutline**
- **FocusColorOutline**
- **SelectionColorThickOutline**
- **SelectionColorOutline**
- **FocusColorFill**
- **SelectionColorFill**
- **ThickOutline**

`Brighten` will fade the selected item while `FadeOthers` will cause the opposite effect occur.
`GrayscaleOthers` will behave similarily to `FadeOthers` but instead show a gray color to the rest of the series. Note this will override any `SelectionBrush` setting.
`SelectionColorOutline` and `SelectionColorThickOutline` will draw a border around the series.

In conjuction, a `SelectionBehavior` is available to provide greater control on which items get selected. The default behavior for Auto is `PerSeriesAndDataItemMultiSelect`.

- **Auto** 
- **PerDataItemMultiSelect**
- **PerDataItemSingleSelect**
- **PerSeriesAndDataItemMultiSelect**
- **PerSeriesAndDataItemSingleSelect**
- **PerSeriesAndDataItemGlobalSingleSelect**
- **PerSeriesMultiSelect**
- **PerSeriesSingleSelect**

## Configuring Selection via Color Fill

The following example shows the combination of both `SelectionColorFill` and `Auto` selection behavior aka `PerSeriesAndDataItemMultiSelect`. Color Fills provide a useful visual cue as it changes the entire series item's back color. By clicking each item you'll see the item change from green to purple. 


`sample="/charts/category-chart/selection-modes", height="450", alt="{Platform} Category Chart Selection Modes Example"`

## Configuring Multiple Selection

Other selection modes offer various methods of selection. For example using `SelectionBehavior` with `PerDataItemMultiSelect` will effect all series in entire category when multiple series are present while allowing selection across categories. Compared to `PerDataItemSingleSelect`, only a single category of items can be selected at a time. This is useful if mutliple series are bound to different datasources and provides greater control of selection between categories.
`PerSeriesAndDataItemGlobalSingleSelect` allows single series selection across all categories at a time.

`sample="/charts/category-chart/selection-multiple-modes", height="450", alt="{Platform} Category Chart Selection Multiple Modes Example"`

## Configuring Outline Selection

When `FocusBrush` is applied, selected series will appear with a border when the `SelectionMode` property is set to one of the focus options.

## Radial Series Selection

This example demonstrates another series type via the `XamDataChart` where each radial series can be selected with different colors.

`sample="/charts/data-chart/radial-column-chart-selection", height="450", alt="{Platform} Radial Column Chart Selection Multiple Modes Example"`

## Programmatic Selection
Chart Selection can also be configured in code where selected items in the chart can be seen on startup or runtime. This can be achieved by adding items to the `SelectedSeriesCollection` of the `CategoryChart`. The `Matcher` property of the `ChartSelection` object allows for selecting a series based on a "matcher", ideal when you do not have access to the actual series from the chart. If you know the properties that your datasource contains, you can use the `ValueMemberPath` that the series would be. 

The matcher is ideal for using in charts, such as the `CategoryChart` when you do not have access to the actual series, like the `XamDataChart`. In this case you if you know the properties that your datasource contained you can surmise the ValueMemberPaths that the series would have. For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to highlight the series bound to Solar values, you can add a ChartSelection object to the `SelectedSeriesItems` collection using a matcher with the following properties set
   
For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to select the series bound to Solar values, you can add a ChartSelection object to the SelectedSeriesItems collection using a matcher with the following properties set.

 `sample="/charts/category-chart/selection-matcher", height="500", alt="{Platform} Selection Matcher"`

## API References

The following is a list of API members mentioned in the above sections:

| `CategoryChart` Properties                    | `XamDataChart` Properties | 
| ----------------------------------------------|---------------------------|
|                                               |                           |
