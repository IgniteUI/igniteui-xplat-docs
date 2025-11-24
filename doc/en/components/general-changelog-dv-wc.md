---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls
---

# {ProductName} Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of {ProductName} are documented on this page.

## **{PackageVerLatest}**

### {PackageCharts} (Charts)

#### <label>PREVIEW</label> User Annotations

In {ProductName}, you can now annotate the `XamDataChart` with slice, strip, and point annotations at runtime using the new user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the `Toolbar`.

<img class="responsive-img" src="../images/charts/data-chart-user-annotation-create.gif"
alt="{Platform} user-annotation-create"/>

#### <label>PREVIEW</label> Collision Detection for Axis Annotations

Ability for axis annotations to automatically detect collisions and truncate to fit better. To enable this feature you must set the following properties:

- `ShouldAvoidAnnotationCollisions`
- `ShouldAutoTruncateAnnotations`


### {PackageMaps} (Geographic Map)

- Azure Map Imagery is now RTM.


### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook
|40262|IgcSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead
|40458|IgcSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker


## **{PackageCommonVerChanges-6.3.6}**

### New Components

- Added `IgrChat` component

### {PackageGrids} (Grids)
- `IgcGrid`, `IgcTreeGrid`, `IgcHierarchicalGrid`
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell.

        It can be enabled on the individual columns:

        ```html
        <igc-column field="field" merge="true"></igc-column>
        ```
        The merging can be configured on the grid level to apply either:
     - `onSort` - only when the column is sorted.
     - `always` - always, regardless of data operations.

        ```html
        <igc-grid cellMergeMode="always">
        </igc-grid>
        ```

        The default `cellMergeMode` is `onSort`.

        The functionality can be modified by setting a custom `mergeStrategy` on the grid, in case some other merge conditions or logic is needed for a custom scenario.

        It's possible also to set a `mergeComparer` on the individual columns, in case some custom handling is needed for a particular data field.

  - Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `pinningPosition` property on the column:

        ```html
        <igc-column field="Col1" pinned="true" pinningPosition="pinningPosition">
        </igc-column>
        ```

        ```ts
        pinningPosition = ColumnPinningPosition.End;
        ```

        Or with the API, via optional parameter:

        ```ts
        grid.pinColumn('Col1', 0, ColumnPinningPosition.End);
        grid.pinColumn('Col2', 0, ColumnPinningPosition.Start);
        ```

        If property `pinningPosition` is not set on a column, the column will default to the position specified on the grid's `pinning` options for `columns`.

  - **Sorting improvements**
     - Improved sorting algorithm efficiency using Schwartzian transformation. This is a technique, also known as decorate-sort-undecorate, which avoids recomputing the sort keys by temporarily associating them with the original data records.
     - Refactored sorting algorithms from recursive to iterative.
  - **Groupby improvements**
     - Refactored grouping algorithm from recursive to iterative.
     - Optimized grouping operations.




### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)| List |removed duplicated CSS variables across list components and themes|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)| Card |Consume colors from themes|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)| Card |Avatar size in card header|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)| Chat |Message actions not rendered after last message|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)| Date Picker |Change event not emitted for non-editable input configuration|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)| Date Picker | Issues when clearing the value and notch border in Material theme|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|
|40262|IgcSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead|
|40458|IgcSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells|
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **{PackageVerChanges-25-1-SEP}**

### {PackageMaps}

#### <label>PREVIEW</label> Azure Map Imagery Support

The `IgcGeographicMap` now supports Azure-based map imagery, allowing developers to display detailed, dynamic maps across multiple application types. You can combine multiple map layers, visualize geographic data, and create interactive mapping experiences with ease.

Note: Support for Bing Maps imagery is being phased out. Existing enterprise keys can still be used to access Bing Maps, ensuring your current applications continue to function while you transition to Azure maps.

Explore some of the publicly available [Azure maps here](https://azure.microsoft.com/en-us/products/azure-maps).

### {PackageCharts}

#### <label>PREVIEW</label> New Axis Label Events

The following events have been added to the `IgcDataChart` to allow you to detect different operations on the axis labels:

- `LabelMouseDown`
- `LabelMouseUp`
- `LabelMouseEnter`
- `LabelMouseLeave`
- `LabelMouseMove`
- `LabelMouseClick`

#### <label>PREVIEW</label> Companion Axis

Added `CompanionAxis` properties to the X and Y axis that allow you to quickly create a clone of an existing axis. When enabled using the `CompanionAxisEnabled` property, this will default the cloned axis to the opposite position of the chart and you can then configure that axes' properties.

#### <label>PREVIEW</label> RadialPieSeries Inset Outlines

There is a new property called `UseInsetOutlines` to control how outlines on the `RadialPieSeries` are rendered. Setting this value to **true** will inset the outlines within the slice shape, whereas a **false** (default) value will place the outlines half-in half-out along the edge of the slice shape.

_Breaking Changes_

- A fix was made due to an issue where the `PlotAreaPosition` and `ChartPosition` properties on `ChartMouseEventArgs` class were reversed. This will change the values that `PlotAreaPosition` and `ChartPosition` return.

### {PackageGrids}

#### <label>PREVIEW</label> Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below and is available on the `DataGridColumn` and `CellInfo` class:

- `SuffixText`
- `SuffixTextColor`
- `SuffixTextFont`
- `SuffixIconName`
- `SuffixIconCollectionName`
- `SuffixIconStroke`
- `SuffixIconFill`
- `SuffixIconViewBoxLeft`
- `SuffixIconViewBoxTop`
- `SuffixIconViewBoxWidth`
- `SuffixIconViewBoxHeight`
- `TextDecoration`

Please note that the maximum size available for the icons is 24x24. You can provide an icon that is larger or smaller than this, but you will need to configure the viewbox settings in order to properly scale it to fit in the 24x24 space so it is fully visible.


### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|27304| `IgcDataChart` | Zoom rectangle is not positioned the same as the background rectangle|
|37930| `IgcDataChart` | Data Annotation Overlay Text Color not working|
|30600| `IgcDoughnutChart` | No textStyle property for either the chart or series (pie chart has this)|
|31624| `IgcCategoryChart` | Resizing the containing window of the Category Chart causes the chart to fail to render the series|
|38231| `IgcGrid` | Unpinned column does not return to the original position if hidden columns exist|
|33861| Excel Library | Adding line chart corrupts excel File for German culture|

### Enhancements

#### IgrBulletGraph

- <label>PREVIEW</label> Added new `LabelsVisible` property

#### Charts

- New properties added to the DataToolTipLayer, ItemToolTipLayer, and CategoryToolTipLayer to aid in styling: `ToolTipBackground`, `ToolTipBorderBrush`, and `ToolTipBorderThickness`

- New properties added to the DataLegend to aid in styling: `ContentBackground`, `ContentBorderBrush`, and `ContentBorderThickness`. The `ContentBorderBrush` and `ContentBorderThickness` default to transparent and 0 respectively, so in order to see these borders, you will need to set these properties.

- Added a new property to `ChartMouseEventArgs` called `WorldPosition` that provides the world relative position of the mouse. This position will be a value between 0 and 1 for both the X and Y axis within the axis space.

- Added `HighlightingFadeOpacity` to `SeriesViewer` and `DomainChart`. This allows you to configure the opacity applied to highlighted series.

- Expose `CalloutLabelUpdating` event for domain charts.

#### IgcDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

#### IgcLinearGauge

- <label>PREVIEW</label> Added new `LabelsVisible` property

## **{PackageVerChanges-25-1-AUG}**

### Enhancements
- Form associated custom elements now expose the **ig-invalid** custom state for styling with the `:state()` CSS selector.
  [See here for additional information](https://developer.mozilla.org/en-US/docs/Web/CSS/:state)
- Form associated custom elements validity behavior. Now elements will try to mimic `:user-invalid`, and won't apply invalid
  styles unless interacted through the UI or through a form `requestSubmit()/reset()` invocation.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|Invalid state in **readonly** mode|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|Cannot style **helper-text**|
|[1795](https://github.com/IgniteUI/igniteui-webcomponents/pull/1795)|Card|Slotted igc-avatar in Indigo theme|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Combo|Border overlaps label text in invalid state|
|[1799](https://github.com/IgniteUI/igniteui-webcomponents/pull/1799)|Date Picker|Indigo elevation styles|
|[1783](https://github.com/IgniteUI/igniteui-webcomponents/pull/1783)|Date range picker|Return focus to main input on keyboard interactions|
|[1792](https://github.com/IgniteUI/igniteui-webcomponents/pull/1792)|Input|Placeholder and label alignment in Material theme|
|[1806](https://github.com/IgniteUI/igniteui-webcomponents/pull/1806)|Navigation drawer|Update **relative** positions styles and animation|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Select|Invalid state theming issues|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Material theme interaction issues|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Resizing behavior with suffix part|
|[1775](https://github.com/IgniteUI/igniteui-webcomponents/pull/1775)|Calendar|Vertical mode container paddings|
|[1731](https://github.com/IgniteUI/igniteui-webcomponents/issues/1731)|Carousel|Pause automatic rotation on pointer-initiated focus|
|[1772](https://github.com/IgniteUI/igniteui-webcomponents/issues/1772)|Carousel|Ensure `igcSlideChanged` event is emitted when a slide is changed|
|[1765](https://github.com/IgniteUI/igniteui-webcomponents/pull/1765)|Date picker|Styling issues|
|[1764](https://github.com/IgniteUI/igniteui-webcomponents/pull/1764)|Date range picker|CSS borders and elevation|
|[1747](https://github.com/IgniteUI/igniteui-webcomponents/pull/1747)|File input|Bootstrap invalid box-shadow styles|
|[1672](https://github.com/IgniteUI/igniteui-webcomponents/pull/1672)|Stepper|Error when setting linear property in deferred rendering scenarios|
|[1768](https://github.com/IgniteUI/igniteui-webcomponents/pull/1768)|Textarea|Readonly state styles|
|[1755](https://github.com/IgniteUI/igniteui-webcomponents/pull/1755)|Dropdown|Icon size in Bootstrap theme|
|[1739](https://github.com/IgniteUI/igniteui-webcomponents/pull/1739)|Inputs|Label positioning and transition logic in Material theme|

## **{PackageVerChanges-25-1-JUL-2}**

- <label>NEW</label> Component - Date Range Picker

### Breaking Changes

#### File Input
- `igcChange` & `igcCancel` events detail now returns the underlying component `files` property.

#### Tooltip
- Tooltip events will no longer return its `anchor` target in its `detail` property

### Behavioral Changes

#### Tooltip

- **Behavioral change**: Tooltip default `placement` is 'bottom' now.
- **Behavioral change**: Tooltip will not render an arrow indicator by default unless `with-arrow` is set.

### Enhancements
- Updated the readonly styles of most form associated components across all themes to better signify when a component is in a readonly state.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1710](https://github.com/IgniteUI/igniteui-webcomponents/issues/1710)|Calendar and Date Picker|Incorrect date rollover for in certain scenarios
|[1728](https://github.com/IgniteUI/igniteui-webcomponents/pull/1728)|Combo|Case insensitive icon styles in themes
|[1726](https://github.com/IgniteUI/igniteui-webcomponents/pull/1726)|Input|Replace border in fluent theme with a box-shadow
|[1732](https://github.com/IgniteUI/igniteui-webcomponents/pull/1732)|Input|Focused state background color in Indigo theme
|[1715](https://github.com/IgniteUI/igniteui-webcomponents/pull/1715)|Text Area|Label height and component height override

## **{PackageVerChanges-25-1-JUL}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36448 | `IgcRadialGauge` | Radial label format properties do not work. (eg. Title, SubTitles)|


### {PackageCharts}

- Add <label>NEW</label> `MaximumExtent` and `MaximumExtentPercentage` properties for use with axis labels.

## **{PackageVerChanges-25-1-JUN}**

### {PackageMaps}

> [!Note]
> As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.
> For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### {PackageCharts}

- Added <label>PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) layers:
  - Data Annotation Band Layer
  - Data Annotation Line Layer
  - Data Annotation Rect Layer
  - Data Annotation Slice Layer
  - Data Annotation Strip Layer


- The [Data Tooltip](charts/features/chart-data-tooltip.md) and [Data Legend](charts/features/chart-data-legend.md) expose <label>PREVIEW</label> `LayoutMode` property that you can use to layout the contents of the tooltip or legend in a table or vertical layout structure.

- <label>PREVIEW</label> The `DefaultInteraction` property of the charts has been updated to include a new enumeration - `DragSelect` in which the dragged preview Rect will select the points contained within.

- <label>PREVIEW</label> The [ValueOverlay and ValueLayer](charts/features/chart-overlays.md), in addition to the <label>PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) listed above now expose an `OverlayText` property that can be used to overlay additional annotation text in the plot area. These appearance of these annotations can be configured by using the many OverlayText-prefixed properties. For example, the `OverlayTextBrush` property will configure the color of the overlay text.

- <label>NEW</label> [Trendline Layer](charts/features/chart-trendlines.md) series type that allows you to apply a single trend line per trend line layer to a particular series. This allows the usage of multiple trend lines on a single series since you can have multiple [TrendlineLayer](charts/features/chart-overlays.md) series types in the chart.

### {PackageDashboards}

- The `IgcDashboardTile` now supports propagating the aggregations from its DataGrid view to the chart visualization such as sorting, grouping, filtering and selection. This is currently supported by binding the `DataSource` of the `IgcDashboardTile` to an instance of `IgcLocalDataSource`.

### {PackageGrids}

_Breaking Changes_

- The `IgcDataGrid` & `IgcMultiColumnComboBox` are now part of the igniteui-webcomponents-data-grids package.

### Enhancements

#### Toolbar
- Value layers added from the toolbar now appear on the legend.
- The zoom reset tool has been moved to the zoom drop-down.

#### Data Pie Chart
- The chart now exposes a `GetOthersContext()` method. This will return the contents of the "others" slice.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25997 | `IgcDataGrid` | Summaries are only showing for first grouped child row|
|37023 | `IgcDataChart` | Tooltips are cut-off/offscreen if overflow hidden is set.|
|37685 | `IgcSpreadsheet` | Poor rendering of numbers formatted with Arial font.|
|37244 | Excel Library | Custom Data Validation is not working.|

## **{PackageVerChanges-24-2-APR}**

### {PackageGrids}

- **All Grids**
  - Allow applying initial filtering through `FilteringExpressionsTree` property

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
| 28480 | `IgcCombo` | Undefined reference error is thrown when a datasource is replaced|
| 25602 | `IgcDataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
| 30319 | `IgcDataGrid` | Records are sorted despite no value changed|
| 32598 | `IgcDataGrid` | Multi-selection is not working correctly
| 36374 | `IgcInput` | A previous value was bound when a form was submitted on any touch device|

## **{PackageVerChanges-24-2-FEB}**

### Enhancements

#### Toolbar

- Added new `GroupHeaderTextStyle` property to `Toolbar` and `ToolPanel`. If set, it will apply to all `ToolActionGroupHeader` actions.
- Added new property on `ToolAction` called `TitleHorizontalAlignment` which controls the horizontal alignment of the title text.
- Added new property on `ToolActionSubPanel` called `ItemSpacing` which controls the spacing between items inside the panel.

### Bug Fixes

The following table lists the bug fixes made for the {ProductName} toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
| 30286 | `IgcDataChart` | Bubble Series tooltip content is switched to that of nearby bubble data in clicking a bubble|
| 32906 | `IgcDataChart` | `IgcDataChart` is showing two xAxis on the top|
| 33605 | `IgcDataChart` | ScatterLineSeries is not showing the color of the line correctly in the legend|
| 34776 | `IgcDataChart` | Repeatedly showing and hiding the `IgcDataChart` causes memory leakage in JS Heap|
| 35498 | `IgcDataChart` | Tooltips for the series specified in IncludedSeries are not displayed|
| 34053 | `IgcRadialGauge` | The position of the scale label is shifted|
| 35496 | `IgcSpreadsheet` | Error when setting styles in Excel with images|
| 26218 | Excel Library | Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
| 34083 | Excel Library | TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
| 35495 | Excel Library | Pictures in cells are lost when a template file is loaded|
| 36176 | Excel Library | Exception occurs when loading an Excel workbook that has a LET function|
| 36379 | Excel Library |Colors with any alpha channel in an excel workbook fail to load|

## **{PackageVerChanges-24-2-JAN}**

- Bug Fixes

### {PackageGrids}

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **{PackageVerChanges-24-2-DEC}**

### {PackageCharts}

- <label>PREVIEW</label> [Dashboard Tile](dashboard-tile.md) component is a container control that analyzes and visualizes a bound ItemsSource collection or single point and returns an appropriate data visualization based on the schema and count of the data. This control utilizes a built-in [Toolbar](menus/toolbar.md) component to allow you to make changes to the visualization at runtime, allowing you to see many different visualizations of your data with minimal code.

### {PackageCharts}

- <label>PREVIEW</label> [Color Editor](inputs/color-editor.md) can be used as a standalone color picker and is now integrated into <label>PREVIEW</label> ToolAction of [Toolbar](menus/toolbar.md) component to update visualizations at runtime.

## **{PackageVerChanges-24-1-SEP}**

### {PackageCharts}

- New [Data Pie Chart](charts/types/data-pie-chart.md) - The `DataPieChart` is a new component that renders a pie chart. This component works similarly to the `CategoryChart`, in that it will automatically detect the properties on your underlying data model while allowing selection, highlighting, animation and legend support via the ItemLegend component.

- New [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the `XamDataChart`, to plot slices similar to a pie chart, a type of data visualization where data points are represented as segments within a circular graph.

- `Toolbar`

  - New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.
        Requires IgcCheckboxListModule to be registered.

  - New Filtering Support

  - Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

### {PackageGrids}

- **All Grids**
  - Added new `RowClick` event.
- `PivotGrid`
  - Added `sortable` property for a `PivotDimension`.
  - Added horizontal layout. Can be enabled inside the new `pivotUI` property as `rowLayout` `horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each `PivotDimension` by setting `horizontalSummary` to **true**.
  - Added `horizontalSummariesPosition` property to the `pivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `pivotUI` property as `showHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

_Breaking Changes_:
- **All Grids**
  - `RowIsland`
  - Removed `displayDensity` deprecated property.
  - Renamed `actualColumns`, `contentColumns` properties to `actualColumnList` and `contentColumnList`. Use `column` or `columnList` property to get all columns now.
  - Renamed `rowDelete` and `rowAdd` event argument type to `RowDataCancelableEventArgs`.
  - Renamed `contextMenu` event argument type to `GridContextMenuEventArgs`.
  - Removed `GridEditEventArgs`,  `GridEditDoneEventArgs`, `PinRowEventArgs` events `rowID` and `primaryKey` properties. Use `rowKey` instead.
- `PivotGrid`
  - removed `showPivotConfigurationUI` property. Use `pivotUI` and set inside it the new `showConfiguration` option.
- `Column`
  - Removed `movable` property. Use Grid's `moving` property now.
  - Removed `columnChildren` property. Use `childColumns` instead.
- `ColumnGroup`
  - Removed `children` property. Use `childColumns` instead.
- `Paginator`
  - Removed `isFirstPageDisabled` and `isLastPageDisabled` properties. Use `isFirstPage` and `isLastPage` instead.


## **{PackageVerChanges-24-1-JUN}**

### {PackageCommon}
- `Input`, `Textarea` - exposed `ValidateOnly` to enable validation rules being enforced without restricting user input.
- `Dropdown` - `PositionStrategy` property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- `DockManager` - `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.

### {PackageGrids}
- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](grids/grid/size.md) topic for more regarding the Grid.
### {PackageCharts}

- [Data Legend Grouping](charts/features/chart-data-legend.md#{PlatformLower}-data-legend-grouping) & [Data Tooltip Grouping](charts/features/chart-data-tooltip.md#{PlatformLower}-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the `DataLegendGroup` property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

- [Chart Selection](charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for `CategoryChart` and `XamDataChart`. Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a particular data item. Also  `SelectedSeriesItemsChanged` event and `SelectedSeriesItems` are available for additional help to build out robust business requirements surrounding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

- [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the `XamDataChart`, to enable creating pie charts in the allowing robust visualizations using all the added power of the data chart.

- [Treemap Highlighting](charts/types/treemap-chart.md#{PlatformLower}-treemap-highlighting) - Now exposes a `HighlightingMode` property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the `HighlightingTransitionDuration` property.

- [Treemap Percent-based Highlighting](charts/types/treemap-chart.md#{PlatformLower}-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new `HighlightedItemsSource`. Can be toggled via `HighlightedValuesDisplayMode` and styled via `FillBrushes`.

- `Toolbar` - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### {PackageGauges}

- `XamRadialGauge`
  - New label for the highlight needle. `HighlightLabelText` and `HighlightLabelSnapsToNeedlePivot` and many other styling related properties for the HighlightLabel were added.

## **{PackageVerChanges-23-2-MAR}**


### {PackageGrids}

- New [`HierarchicalGrid`](grids/hierarchical-grid/overview.md) component.


### {PackageCharts}

- New Data Filtering via the `InitialFilter` property. Apply filter expressions to filter the chart data to a subset of records. Can be used for drill down large data.

- `XamRadialChart`
  - New Label Mode
        The `CategoryAngleAxis` for the now exposes a `LabelMode` property that allows you to further configure the location of the labels. This allows you to toggle between the default mode by selecting the `Center` enum, or use the new mode, `ClosestPoint`, which will bring the labels closer to the circular plot area.

### {PackageGauges}

- `XamRadialGauge`
  - New title/subtitle properties. `TitleText`, `SubtitleText` will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and `TitleExtent`. Finally, the new `TitleDisplaysValue` will allow the value to correspond with the needle's position.
  - New `OpticalScalingEnabled` and `OpticalScalingSize` properties for the `XamRadialGauge`. This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature in this [topic](radial-gauge.md#optical-scaling)
  - New highlight needle was added. `HighlightValue` and `HighlightValueDisplayMode` when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- `XamLinearGauge`
  - New highlight needle was added. `HighlightValue` and `HighlightValueDisplayMode` when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- `XamBulletGraph`
  - The Performance bar will now reflect a difference between the value and new `HighlightValue` when the `HighlightValueDisplayMode` is applied to the 'Overlay' setting. The highlight value will show a filtered/subset completed measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.


## **{PackageVerChanges-23-2-JAN}**

### {PackageCharts}

- [Chart Highlight Filter](charts/features/chart-highlight-filter.md) - The `CategoryChart` and `XamDataChart` now expose a way to highlight and animate in and out of a subset of data. The display of this highlight depends on the series type. For column and area series, the subset will be shown on top of the total set of data where the subset will be colored by the actual brush of the series, and the total set will have a reduced opacity. For line series, the subset will be shown as a dotted line.

## **{PackageVerChanges-23-2-DEC}**

### {PackageGrids}

- Added New Features (Grid) - [State Persistence](grids/grid/state-persistence.md).


## **{PackageVerChanges-23-2}**

### {PackageLayouts}

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md)
  - Save tool action has been added to save the chart to an image via the clipboard.
  - Vertical orientation has been added via the toolbar's `Orientation` property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
  - Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.


## **{PackageVerChanges-23-1}**

### {PackageLayouts}

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our `XamDataChart` or `CategoryChart` components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

### {PackageCharts}

- [ValueLayer](charts/features/chart-overlays.md#{PlatformLower}-value-layer) - A new series type named the `ValueLayer` is now exposed which can allow you to render an overlay for different focal points of the plotted data such as Maximum, Minimum, and Average. This is applied to the `CategoryChart` and `FinancialChart` by adding to the new `ValueLines` collection.

- It is now possible to apply a **dash array** to the different parts of the series of the `XamDataChart`. You can apply this to the [series](charts/types/line-chart.md#{PlatformLower}-styling-line-chart) plotted in the chart, the [gridlines](charts/features/chart-axis-gridlines.md#{PlatformLower}-axis-gridlines-properties) of the chart, and the [trendlines](charts/features/chart-trendlines.md#{PlatformLower}-chart-trendlines-dash-array-example) of the series plotted in the chart.


## **{PackageVerChanges-22-2.2}**


### {PackageGrids}

- A new argument `PrimaryKey` has been introduced to `IgcRowDataEventArgs`, and part of the event arguments that are emitted by the `RowAdded` and `RowDeleted` events. When the grid has a primary key attribute added, then the emitted primaryKey event argument represents the row ID, otherwise it defaults to undefined.
- `RowSelectionChanging` event arguments are changed. Now, the `OldSelection`, `NewSelection`, `Added` and `Removed` collections no longer consist of the row keys of the selected elements when the grid has set a primaryKey, but now in any case the row data is emitted.
- When the grid is working with remote data and a primary key has been set, the selected rows that are not currently part of the grid view will be emitted for a partial row data object.
- When selected row is deleted from the grid component `RowSelectionChanging` event will no longer be emitted.
- The `OnGroupingDone` event has been renamed to `GroupingDone` to not violate the no on-prefixed outputs convention.
- The `OnDensityChanged` event has been renamed to `DensityChanged` to not violate the no on-prefixed outputs convention. All components exposing this event are affected.

- `PivotGrid`: The `IgcPivotDateDimension` properties `InBaseDimension` and `InOption` have been deprecated and renamed to `BaseDimension` and `Options` respectively.


### {PackageInputs}

- `IgcDateTimeInput`, the StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) is now trimmed down to DatePart instead of DateTimeInputDatePart
- `IgcRadio` and `IgcRadioGroup`, added component validation along with styles for invalid state
- `IgcMask`, added the capability to escape mask pattern literals.
- `IgcBadge` added a `Shape` property that controls the shape of the badge and can be either `Square` or `Rounded`. The default shape of the badge is rounded.
- `IgcAvatar`, the `RoundShape` property has been deprecated and will be removed in a future version. Users can control the shape of the avatar by the newly added `Shape` attribute that can be `Square`, `Rounded` or `Circle`. The default shape of the avatar is `Square`.


## **{PackageVerChanges-22-2.1}**

### {PackageGrids}

- New [Pivot Grid](grids/pivot-grid/overview.md) component.

## **{PackageVerChanges-22-2}**

### {PackageGrids}

- New [Grid](grids/data-grid.md) component.
- New [Tree Grid](grids/tree-grid/overview.md) component.
- `DataGrid`:
  - Changed **{IgPrefix}Column** to `DataGridColumn`
  - Changed **GridCellEventArgs** to `DataGridCellEventArgs`
  - Changed **GridSelectionMode** to `DataGridSelectionMode`
  - Changed **SummaryOperand** to `DataSourceSummaryOperand`

### {PackageCharts}

- Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use. These new chart improvements include:

- Responsive layouts for horizontal label rotation based on browser / screen size.
- Enhanced rendering for rounded labels on all platforms.
- Added marker properties to StackedFragmentSeries.
- Added `ShouldPanOnMaximumZoom` property.
- New Category Axis Properties:
  - ZoomMaximumCategoryRange
  - ZoomMaximumItemSpan
  - ZoomToCategoryRange
  - ZoomToItemSpan
- New [Chart Aggregation](charts/features/chart-data-aggregations.md) API for Grouping, Sorting and Summarizing Category string and numeric values, eliminating the need to pre-aggregate or calculate chart data:
  - InitialSortDescriptions
  - InitialSorts
  - SortDescriptions
  - InitialGroups
  - InitialGroupDescriptions
  - GroupDescriptions
  - InitialSummaries
  - InitialSummaryDescriptions
  - SummaryDescriptions
  - InitialGroupSortDescriptions
  - GroupSorts
  - GroupSortDescriptions

> [!Note]
[Chart Aggregation](charts/features/chart-data-aggregations.md) will not work when using `IncludedProperties` | `ExcludedProperties`. These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.


## **{PackageVerChanges-22-1}**

### {PackageGrids}

- `DataGrid`:
  - Added New Feature - [Row Paging](grids/data-grid/row-paging.md) which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

### {PackageCharts}

- Added the highly-configurable [DataLegend](charts/features/chart-data-legend.md) component, which works much like the `Legend`, but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
- Added the highly-configurable [DataToolTip](charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
- Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the `IsTransitionInEnabled` property to true. From there, you can set the `TransitionInDuration` property to determine how long your animation should take to complete and the `TransitionInMode` to determine the type of animation that takes place.
- Added `AssigningCategoryStyle` event, is now available to all series in `XamDataChart`. This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
- New `AllowedPositions` enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
- New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
  - `CalloutCornerRadius` for CalloutLayer
  - `AxisAnnotationBackgroundCornerRadius` for FinalValueLayer
  - `XAxisAnnotationBackgroundCornerRadius` and `YAxisAnnotationBackgroundCornerRadius` for CrosshairLayer
- New `HorizontalViewScrollbarMode` and `VerticalViewScrollbarMode` enumeration to enable scrollbars in various ways. When paired with `IsVerticalZoomEnabled` or `IsHorizontalZoomEnabled`, you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
- New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. `NumericXAxis`, `NumericYAxis`, `PercentChangeAxis`).
- New `IsSplineShapePartOfRange` determines whether to include the spline shape in the axis range requested of the axis.
- New `XAxisMaximumGap`, determines the maximum allowed value for the plotted series when using `XAxisGap`. The gap determines the amount of space between columns or bars of plotted series.
- New `XAxisMinimumGapSize`, determines the minimum allowed pixel-based value for the plotted series when using `XAxisGap` to ensure there is always some spacing between each category.

## **{PackageVerChanges-21-2.1}**

### {PackageGrids}

- `DataGrid`:
  - Added `ValueMultiField`, of type string[], in the `ComboBoxColumn` to be used when your items in the drop down contain a key that consists of multiple fields.

> [!Note]
> The following breaking changes were introduced: Changed `ValueField` property from type string[] to string.

### {PackageInputs}

- Date Picker:
  - Changed ValueChanged event to `SelectedValueChanged`.
- Multi-Column ComboBox:
  - Changed `TextChanged` event to `TextValueChanged`.
  - Changed `ValueChanged` event to `SelectedValueChanged`.

## **{PackageVerChanges-21-2}**

### {PackageGrids}

- `DataGrid`:
  - New Features Added:
    - [Filter Row](grids/data-grid/column-filtering.md)
    - [Load/Save Layout Customizations](grids/data-grid/load-save-layout.md)
    - [GroupBy Area for column grouping](grids/data-grid/row-grouping.md)
    - [Cell Merging](grids/data-grid/cell-merging.md)
  - New API:
    - Added `SelectionChanged` event. Used to detect changes on selection interactions, e.g. Multiple row selection.
  - Breaking Changes:
    - Changed grid's SummaryScope property's type to SummaryScope from `DataSourceSummaryScope`
    - Changed GroupHeaderDisplayMode property's type to GroupHeaderDisplayMode from `DataSourceSectionHeaderDisplayMode`


> [!Note]
> Please ensure package "lit-html": "^2.0.0" or newer is added to your project for optimal compatibility.

### {PackageCharts}

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

- Changed `YAxisLabelLocation` property's type to **YAxisLabelLocation** from **AxisLabelLocation** in `FinancialChart` and `CategoryChart`
- Changed `XAxisLabelLocation` property's type to **XAxisLabelLocation** from **AxisLabelLocation** in `FinancialChart`
- Added `XAxisLabelLocation` property to `CategoryChart`
- Added support for representing geographic series of `XamGeographicMap` in a legend
- Added crosshair lines by default in `FinancialChart` and `CategoryChart`
- Added crosshair annotations by default in `FinancialChart` and `CategoryChart`
- Added final value annotation by default in `FinancialChart`
- Added new properties in Category Chart and Financial Chart:
  - `CrosshairsLineThickness` and other properties for customizing crosshairs lines
  - `CrosshairsAnnotationXAxisBackground` and other properties for customizing crosshairs annotations
  - `FinalValueAnnotationsBackground` and other properties for customizing final value annotations
  - `AreaFillOpacity` that allow changing opacity of series fill (e.g. Area chart)
  - `MarkerThickness` that allows changing thickness of markers
- Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
  - `MarkerAutomaticBehavior` that allows which marker type is assigned to multiple series in the same chart
  - `LegendItemBadgeShape` for setting badge shape of all series represented in a legend
  - `LegendItemBadgeMode` for setting badge complexity on all series in a legend
- Added new properties in Series in Data Chart and Geographic Map:
  - `LegendItemBadgeShape` for setting badge shape on specific series represented in a legend
  - `LegendItemBadgeMode` for setting badge complexity on specific series in a legend
- Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
- Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's `MarkerAutomaticBehavior` property to `SmartIndexed` enum value
- Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's `LegendItemBadgeMode` property to `MatchSeries` enum value
- Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |


## **{PackageVerChanges-21-1}**

### {PackageGrids}

- `DataGrid`:
  - Added `EditOnKeyPress` aka Excel-style Editing, instantly begin editing when typing.
  - Added `EditModeClickAction` property - By default double-clicking is required to enter edit mode. This can be set to `SingleClick` to allow for edit mode to occur when selecting a new cell.
  - Added `EnterKeyBehaviors` property - aka Excel-style Navigation (Enter Behavior) – controls the behavior of the enter key, e.g. Options are (none, edit, move up, down, left, right)
  - Added `EnterKeyBehaviorAfterEdit` property - While in edit-mode, this property controls when enter is pressed, e.g. Options are (moves to the cell below, above, right, left)
  - Added `SelectAllRows` - method.
  - Added Row Range Selection - With `GridSelectionMode` property set to MultipleRow the following new functionality is now included:
  - Click and drag to select rows
  - <kbd>SHIFT</kbd> and click to select multiple rows.
  - <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.
  - Pressing space bar toggles selection of active row via `GridSelectionMode` property set to MultipleRow or SingleRow
  - Added Column Summaries to Column Options Dialog.

### {PackageCharts}

- Date Picker:
  - `ShowTodayButton` - Toggles Today button visibility
  - `Label` - Adds a label above the date value
  - `Placeholder` property - adds custom text when no value is selected
  - `FormatString` - Customize input date string e.g. (`yyyy-MM-dd`)
  - `DateFormat` - Specifies whether to display selected dates as LongDate or ShortDate
  - `FirstDayOfWeek` - Specifies first day of week
  - `FirstWeekOfYear` - Specifies when to display first week of the year, e.g. (First Full Week, First Four day Week)
  - `ShowWeekNumbers` - Toggles Week number visibility
  - `MinDate` & `MaxDate` - Date limits, specifying a range of available selectable dates.
  - Added Accessibility


### {PackageMaps}

> [!Note]
> These features are CTP

- Added support for wrap around display of the map (scroll infinitely horizontally)
- Added support for shifting display of some map series while wrapping around the coordinate origin
- Added support for highlighting of the shape series
- Added support for some annotation layers for the shape series


### {PackageCharts}

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. `XamDataChart`, `CategoryChart`, and `FinancialChart`.

- Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
- Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
- Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
- Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
- Changed marker's thickness to 2px from 1px
- Changed marker's fill to match the marker's outline for `PointSeries`, `BubbleSeries`, `ScatterSeries`, `PolarScatterSeries`. You can use set `MarkerFillMode` property to Normal to undo this change
- Compressed labelling for the `TimeXAxis` and `OrdinalTimeXAxis`
- New Marker Properties:
  - series.`MarkerFillMode` - Can be set to `MatchMarkerOutline` so the marker depends on the outline
  - series.`MarkerFillOpacity` - Can be set to a value 0 to 1
  - series.`MarkerOutlineMode` - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
- New Series Property:
  - series.`OutlineMode` - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
- New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the `ComputedPlotAreaMarginMode`, listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
  - chart.`PlotAreaMarginLeft`
  - chart.`PlotAreaMarginTop`
  - chart.`PlotAreaMarginRight`
  - chart.`PlotAreaMarginBottom`
  - chart.`ComputedPlotAreaMarginMode`
- New Highlighting Properties
  - chart.`HighlightingMode` - Sets whether hovered or non-hovered series to fade, brighten
  - chart.`HighlightingBehavior` - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
  - Note, in previous releases the highlighting was limited to fade on hover.
- Added Highlighting Stacked, Scatter, Polar, Radial, and Shape series:
- Added Annotation layers to Stacked, Scatter, Polar, Radial, and Shape series:
- Added support for overriding the data source of individual stack fragments within a stacked series
- Added custom style events to Stacked, Scatter, Range, Polar, Radial, and Shape series
- Added support to automatically sync the vertical zoom to the series content
- Added support to automatically expanding the horizontal margins of the chart based on the initial labels displayed
- Redesigned color palette of series and markers:

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#7446B9">#7446B9</span> <br><span style="color:#9FB328">#9FB328</span> <br><span style="color:#F96232">#F96232</span> <br><span style="color:#2E9CA6">#2E9CA6</span> <br><span style="color:#DC3F76">#DC3F76</span> <br><span style="color:#FF9800">#FF9800</span> <br><span style="color:#3F51B5">#3F51B5</span> <br><span style="color:#439C47">#439C47</span> <br><span style="color:#795548">#795548</span> <br><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br><span style="color:#8b5bb1">#8b5bb1</span> <br><span style="color:#6db1ff">#6db1ff</span> <br><span style="color:#f8a15f">#f8a15f</span> <br><span style="color:#ee5879">#ee5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#f7d262">#f7d262</span> <br><span style="color:#8ce7d9">#8ce7d9</span> <br><span style="color:#e051a9">#e051a9</span> <br><span style="color:#a8a8b7">#a8a8b7</span> <br> |

for example:

|   |   |
|---|---|
| <img class="responsive-img" src="../images/chartDefaults1.png" alt="" /> | <img class="responsive-img" src="../images/chartDefaults2.png" alt="" /> |
| <img class="responsive-img" src="../images/chartDefaults3.png" alt="" /> | <img class="responsive-img" src="../images/chartDefaults4.png" alt="" /> |

#### Chart Legend

- Added horizontal `Orientation` property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
- Added `LegendHighlightingMode` property - Enables series highlighting when hovering over legend items

## **{PackageVerChangedFields}**

### {PackageGrids}

- `DataGrid`:

> [!Note]
> These breaking changes were introduce in the grid package.

- Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

```html
<igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-data-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
income.field = "Income";
```

## **{PackageVerRenamedGrid}**

### {PackageGrids}

- `DataGrid`:

- Changed Name of Live Grid - the data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

> [!Note]
> These breaking changes were introduce in these packages and components only:

The new code for importing the grid and it's corresponding module is:

```ts
import { IgcDataGrid } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';
```

- Required Peer Dependency for `DataGrid`

The data grid component requires the "inputs" package.

```ts
**npm install --save {PackageInputs}**
```

## **{PackageVerChangedImports}**

### All Packages

- Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> [!Note]
> These breaking changes were introduce in these packages and components only:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel Library](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [Spreadsheet](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | all classes and enums  |
| <a href="{PackageWebsite}{PackageGrids}/v/{PackageVerChangedImports}" target="_blank">{PackageGrids}</a> | [Data Grid](grids/data-grid/overview.md) |

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgcLinearGaugeComponent } from "igniteui-webcomponents-gauges";
import { IgcLinearGaugeModule } from "igniteui-webcomponents-gauges";
import { IgcLinearGraphRange } from "igniteui-webcomponents-gauges";
import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeRange } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts";
// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps";
// grids:
import { IgcDataGridComponent } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from "igniteui-webcomponents-data-grids";
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-component';
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-module';
import { IgcLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igc-linear-graph-range';

import { IgcRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-component";
import { IgcRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-module";
import { IgcRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-component";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-module";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts/ES5/igc-data-chart-component";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igc-data-chart-core-module";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-component";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-module";

// grids:
import { IgcLiveGridModule } from 'igniteui-webcomponents-data-grids/ES5/igc-live-grid-module';
import { IgcLiveGridComponent } from 'igniteui-webcomponents-data-grids/ES5/igc-live-grid-component';
```

## {PackageCommon}

### **{PackageCommonVerChanges-5.1.0}**

#### Added
- New [Carousel](layouts/carousel.md) component.

### **{PackageCommonVerChanges-5.0.0}**

- `Icon`
  - Added `setIconRef` method. This allows to register and replace icons by SVG files.
  - All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.
- `RadioGroup`
  - Added `name` and `value` properties.

_Breaking Changes_:

- Removed `Form` component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - `Avatar`, `Button`,`IconButton`, `Calendar`, `Chip`, `Dropdown`, `Icon`, `Input`, `List`, `Rating`, `Snackbar`, `Tabs`, `Tree`
- Removed custom `igcFocus` and `igcBlur` events. Use the native `focus` and `blur` events instead for the following components:
  - `Button`, `IconButton`, `Checkbox`, `Switch`, `Combo`, `DateTimeInput`, `Input`, `MaskInput`, `Radio`, **IgcSelectComponent**, `Textarea`
- `Checkbox`, `Switch` ,`Radio`
  - Changed `igcChange` event arguments from `CustomEvent<boolean>` to `CustomEvent<{ checked: boolean; value: string | undefined }>`
- `Combo`, **IgcSelectComponent**
  - Removed `positionStrategy`, `flip`, `sameWidth` properties.
- `Dialog`
  - Renamed The `closeOnEscape` property to `keepOpenOnEscape`.
- `Dropdown`
  - Removed `positionStrategy` property.
- `Input`
  - Removed `maxlength` and `minlength` properties. Use the native `maxLength` and `minLength` properties or `max` and `min` instead.
  - Renamed `readonly` and `inputmode` properties to `readOnly` and `inputMode`.
- `RangeSlider`
  - Renamed `ariaThumbLower`/`ariaThumbUpper` properties to `thumbLabelLower`/`thumbLabelUpper`.
- `Rating`
  - Renamed `readonly` property to `readOnly`.

### **{PackageCommonVerChanges-4.11.1}**

#### Changed
- `Stepper` - Design changes in vertical mode.

### **{PackageCommonVerChanges-4.11.0}**

#### Changed
- `Toast`, `Rating`, `Stepper` - Styling changes in Indigo Theme.

### **{PackageCommonVerChanges-4.10.0}**

#### Added
- New [Banner](notifications/banner.md) component
- New [Divider](layouts/divider.md) component
- New [DatePicker](scheduling/date-picker.md) component
- `RadioGroup` - Bind underlying radio components name and checked state through the radio group.

#### Deprecated
- `Input` `Inputmode` property. Aligned with the native `inputMode` DOM property instead.

#### Fixed
- `Input`, `Textarea` - passing `undefined` to value sets the underlying input value to undefined.
- `MaskInput` - after a form `reset` call correctly update underlying input value and placeholder state.
- `Tree` - setting `--ig-size` on the item `indicator` CSS Part will now change the size of the icon.
- `DateTimeInput` - double emit of `igcChange` in certain scenarios.
- `NavDrawer` - mini variant is not initially rendered when not in an open state.
- `Combo`:
  - Selecting an entry using the <kbd>ENTER</kbd> key now correctly works in single selection mode.
  - Turning on the `DisableFiltering` option now clears any previously entered search term.
  - Entering a search term in single selection mode that already matches the selected item now works correctly.

### **{PackageCommonVerChanges-4.9.0}**

#### Added
- `ButtonGroup` - now allows resetting the selection state via the `SelectedItems` property.
- `Input`, `Textarea` - exposed `ValidateOnly` to enable validation rules being enforced without restricting user input.

#### Changed
- `Combo`, `Select` and `Dropdown` - now use the native `Popover` API.

#### Deprecated
- `Dropdown` - `PositionStrategy` property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.

#### Fixed
- `DateTimeInput` - Label in Material theme is broken when component is in read-only mode.

### **{PackageCommonVerChanges-4.8.2}**

#### Fixed
- `Textarea` - resize handle position for non-suffixed textarea.
- `Tabs` - error when dynamically creating and adding a tab group and tabs in a single call stack.
- `Checkbox`/`Switch` - participate in form submission when initially checked.
- `Dialog` - `igcClosed` fired before the component was actually closed/hidden.

### **{PackageCommonVerChanges-4.8.1}**

#### Fixed
- `DateTimeInput` - `InputFormat` is not applied to an already set value.
- `Checkbox`, `Radio`, `Switch` - apply form validation synchronously.
- `Select`, `Dropdown` - Unable to select item when clicking on a wrapping element inside the dropdown/select item slot.
- `Tree` - active state is correctly applied to the correct tree node on click.

### **{PackageCommonVerChanges-4.8.0}**

#### Added
- `Combo` can now set `GroupSorting` to none which shows the groups in the order of the provided data.
- `Button`/`IconButton` - updated visual looks across themes, new states.
- `NavBar` - added border in Bootstrap theme.

#### Changed
- Grouping in `Combo` no longer sorts the data. `GroupSorting` property now affects the sorting direction only of the groups. **Behavioral change**: In previous release the sorting directions of the groups sorted the items as well. If you want to achieve this behavior you can pass already sorted data to the `Combo`.

#### Deprecated
- `Slider` - `aria-label-upper` and `aria-label-lower` are deprecated and will be removed in the next major release. Use `thumb-label-upper` and `thumb-label-lower` instead.

#### Fixed
- `Button` - Slotted icon size.
- `ButtonGroup`
  - Updated Fluent theme look.
  - Disabled state in Safari.
- `Combo`/`Select` - Style issues.
- `Slider`
  - Clicks on the slider track now use the track element width as a basis for the calculation.
  - Input events are no longer emitted while continuously dragging the slider thumb and exceeding upper/lower bounds.
  - When setting `upper-bound`/`lower-bound` before `min`/`max`, the slider will no longer overwrite the bound properties with the previous values of `min`/`max`.
  - The `aria-label` bound to the slider thumb is no longer reset on consequent renders.
- `Input`
  - Default validators are run synchronously.
  - Style issues.
- `DateTimeInput` - `setRangeText()` updates underlying value.

### **{PackageCommonVerChanges-4.7.0}**

#### Added
- `Tree` - Added `ToggleNodeOnClick` property that determines whether clicking over a node will change its expanded state or not. Defaults to `false`.

- `Rating` - `AllowReset` added. When enabled selecting the same value will reset the component. **Behavioral change**: In previous releases this was the default behavior of the rating component. Make sure to set `allowReset` if you need to keep this behavior in your application.

#### Changed
- Improved WAI-ARIA compliance for `Avatar`, `Badge` and `Combo`.
#### Fixed
- Active item visual styles for `Dropdown`, `Select` and `Combo`.
- `NavDrawer` - mini variant broken visual style.

### **{PackageCommonVerChanges-4.6.0}**

#### Added
- `action` slot added to `Snackbar`.
- `indicator-expanded` slot added to `ExpansionPanel`.
- `toggle-icon-expanded` slot added to `Select`.
- `Select`, `Dropdown` - exposed `selectedItem`, `items` and `groups` getters.

#### Changed
- Updated the package to Lit v3.
- Components dark variants are now bound to their shadow root.
- Components implement default sizes based on current theme.
- `ButtonGroup` - changed events to non-cancellable.
- Optimized components CSS and reduced bundle size.
- WAI-ARIA improvements for `Icon`, `Select`, `Dropdown` and `List`.

#### Fixed
- `Textarea` missing styling parts.
- `TreeItem` disabled styles.
- `Snackbar` removed unnecessary styles.
- `TreeItem` hover state visual design.
- `Calendar` not keeping focus state when switching views.

### **{PackageCommonVerChanges-4.5.0}**

#### Added

- New [Text Area](inputs/text-area.md) component.
- New [Button Group](inputs/button-group.md) component.
- New `ToggleButton`.
- `NavDrawer` now supports CSS transitions.
- Position attribute for `Toast` and `Snackbar`.

#### Deprecated

The `size` property and attribute have been deprecated for all components. Use the `--ig-size` CSS custom property instead. The following example sets the size of the `Avatar` component to small:

```css
igc-avatar {
  --ig-size: var(--ig-size-small);
}
```

#### Fixed
- Combo items position in Safari.
- Calendar navigation buttons in RTL context.
- Export `IgcComboChangeEventArgs` type.
- Combo value and selection states with lazy data binding.
- Various style and theming fixes and adjustments.

### **{PackageCommonVerChanges-4.4.0}**

#### Added
- The following components are now Form Associated Custom Elements. They are automatically associated with a parent `<form>`
  and behave like a browser-provided control:
  - `Button` & `IconButton`
  - `Checkbox`
  - `Combo`
  - `DateTimeInput`
  - `Input`
  - `MaskInput`
  - `Radio`
  - `Rating`
  - Single `Slider`
  - `Select`
  - `Switch`
- `Stepper` now supports animations.

#### Changed
- `Rating` fluent theme colors.
- `Stepper` indicator styles and color schemas.

#### Deprecated
- `IgcForm` component is deprecated.
- `Input`:
  - `minlength` property is deprecated and will be removed in the next major version. Use `minLength` instead.
  - `maxlength` property is deprecated and will be removed in the next major version. Use `maxLength` instead.
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.
- `MaskInput`:
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.
- `DateTimeInput`:
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.
  - `minValue` property is deprecated and will be removed in the next major version. Use `min` instead.
  - `maxValue` property is deprecated and will be removed in the next major version. Use `max` instead.
- `Rating`:
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.

#### Removed
- Removed our own `dir` attribute which shadowed the default one. This is a **non-breaking change**.
- `Slider` - `ariaLabel` shadowed property. This is a **non-breaking change**.
- `Checkbox` - `ariaLabelledBy` shadowed attribute. This is a **non-breaking change**.
- `Switch` - `ariaLabelledBy` shadowed attribute. This is a **non-breaking change**.
- `Radio` - `ariaLabelledBy` shadowed attribute. This is a **non-breaking change**.

#### Fixed
- `Input` - outlined variant styling issues and indigo theme issues.
- `Select` - outlined variant styling issues
- `DateTimeInput` - `spinUp/spinDown` calls moving the caret when the input is focused.

### **{PackageCommonVerChanges-4.3.1}**

#### Added
- `Tree` - component animations.
- Components border radius is consumed from their schemas.

#### Changed
- `Combo`, `Input`, `Select` - schema colors.
- `Dropdown` - schema colors.
- `Icon` - updated theming styles and size.

#### Fixed
- `Combo` - single selection not working in certain scenarios.
- `Dropdown` - various styling fixes.
- `IconButton` - border radius with ripple.
- `IconButton` - fixed wrong color in Fluent theme.
- `Input` - various styling fixes.
- `TreeItem` - assign closest **igc-tree-item** ancestor as a parent.
- `Tabs` - internal **hidden** styles and custom display property.

### **{PackageCommonVerChanges-4.3.0}**

#### Added
- `Combo`:
  - `matchDiacritics` to the filtering options property. Defaults to **false**. If set to **true** the filter distinguishes between accented letters and their base letters. Otherwise strings are normalized and then matched.
  - `selection` property which returns the current selection as an array of data objects.
- `Card`: Support explicit height
- `Dialog`: Added animations
- `Snackbar`: Added animations
- `Toast`: Added animations

#### Changed
- `Combo`:
  - `value` is no longer readonly and can be explicitly set. The value attribute also supports declarative binding,
  accepting a valid JSON stringified array.
  - `value` type changed from `string[]` to `ComboValue<T>[]` where
  ```ts
  ComboValue<T> = T | T[keyof T]
  ```
  - `igcChange` event object properties are also changed to reflect the new `value` type:
  ```typescript
  interface IgcComboChangeEventArgs<T> {
    newValue: ComboValue<T>[];
    items: T[];
    type: ComboChangeType;
  }
  ```

#### Deprecated
- `Select`: Deprecated `sameWidth`, `positionStrategy` and `flip`. They will be removed in the next major release.

#### Fixed
- `Select`: `prefix`/`suffix`/`helper-text` slots not being rendered.
- `Tabs`: Nested tabs selection.
- `Dialog`: Backdrop doesn't overlay elements.
- `Dropdown`: Listbox position on initial open state.
- `Stepper`: Stretch vertically in parent container.
- `Navbar`: Wrong colors in fluent theme.
- Animation player throws errors when height is unspecified.
- `DateTimeInput`: Intl.DateTimeFormat issues in Chromium based browsers.

### **{PackageCommonVerChanges-4.2.3}**

#### Deprecated
- `Dialog` - Property `closeOnEscape` is deprecated in favor of new property `keepOpenOnEscape`.

#### Fixed
- `Radio`- colors in selected focus state.
- `IconButton` - set icon size to match other design system products.
- `Chip` - removed outline styles for Fluent and Material themes.
- `Calendar` - navigation to date on set value.
- `Tabs` - not taking the full height of their parents.

### **{PackageCommonVerChanges-4.2.2}**

#### Deprecated
- `Button` - The `prefix`/`suffix` slots are no longer needed and will be removed in the next major release.

#### Fixed
- `Button` - UI inconsistencies.
- `Calendar` - Fluent theme inconsistencies.
- `Combo` - Selection via API doesn't work on a searched list.
- `Dialog` - Fluent theme inconsistency.
- `Input` - UI inconsistencies.
- `Toast` - Fluent theme inconsistency.
- Components missing in defineAllComponents.
- Wrong host sizes for `Avatar`, `Badge`, `Button` and `IconButton`.

### **{PackageCommonVerChanges-4.2.1}**

#### Fixed
- `Combo` - Matching item not activated on filtering in single selection mode.

### **{PackageCommonVerChanges-4.2.0}**

#### Added
- `Combo` - Single Selection mode via the `single-select` attribute.

#### Fixed
- `Input` - UI inconsistencies.
- `Badge` - Doesn't correctly render `igc-icon` and font icons.
- `Radio` - UI inconsistencies.
- `NavDrawer` - Can't override item margin.

### **{PackageCommonVerChanges-4.1.1}**

#### Fixed
- `Input`
  - position label based on component size.
  - material themes don't match design.
  - do not cache the underlying input.
- Card - color discrepancy between WC and Angular.
- Theme - update stale `--igc-*` variables to `--ig-*`.
- Removed dangling references after element disconnect.

### **{PackageCommonVerChanges-4.1.0}**

#### Added
- New [Stepper](layouts/stepper.md) component.
- New [Combo](inputs/combo/overview.md) component.
- `MaskInput` - Skip literal positions when deleting symbols in the component

#### Fixed
- `MaskInput` - Validation state on user input.

### **{PackageCommonVerChanges-4.0.0}**

#### Changed
- Themes
  - Build - Utilize [Ignite UI Theming](https://github.com/IgniteUI/igniteui-theming) package when building themes.
  - Sizing - Introduced CSS variables that allow runtime CSS configuration of the size for all or individual components.
  - Spacing - Introduced CSS variables that allow runtime CSS configuration of the internal spacing (padding/margin) of components.
  - Scrollbars - Added the ability to style application-level scrollbars by setting the `ig-scrollbar` CSS class on any element.

### **{PackageCommonVerChanges-3.4.2}**

#### Fixed
- Resolved importing error for `DateRangeType`.

### **{PackageCommonVerChanges-3.4.1}**

#### Changed
- `Slider` - updated theme with the latest fluent spec.
- `Calendar` - updated weekend days color.

#### Fixed
- `Tabs` `selected` attribute breaks content visibility on init.

### **{PackageCommonVerChanges-3.4.0}**

#### Added
- New [Dialog](notifications/dialog.md) component.
- New [Select](inputs/select.md) component.

#### Fixed
- `Calendar` - range selection a11y improvements.
- `RangeSlider` - a11y improvements for choosing range values.
- `Rating` - improved a11y with assistive software now reading the total number of items.
- `Toast` - added `role="alert"` to the message container for assistive software to read it without the need of focusing.
- `Chip` - made remove button accessible with the keyboard.
- `Button` `prefix`/`suffix` does not align icons to the button text.

### **{PackageCommonVerChanges-3.3.1}**

#### Changed
- `Tree` - Removed theme-specified height.

#### Fixed
- `Dropdown` - Dispose of top-level event listeners.
- `LinearProgress` - Indeterminate animation in Safari.
- `RadioGroup` - Child radio components auto-registration.

### **{PackageCommonVerChanges-3.3.0}**

#### Added
- New [DateTimeInput](inputs/date-time-input.md) component.
- New [Tabs](layouts/tabs.md) component.
- New [Accordion](layouts/accordion.md) component.
- Typography styles in themes.

#### Changed
- `Rating` - Added support for single selection and empty symbols.
- `Slider` - Improved slider steps rendering.
- Components will now auto register their dependencies when they are registered in `defineComponents`

```typescript
import { IgcDropdownComponent, defineComponents } from 'igniteui-webcomponents';
// will automatically register the dropdown item & group elements
// as well as their dependencies if any
defineComponents(IgcDropdownComponent);
```

Check the official [documentation](https://www.infragistics.com/products/ignite-ui-web-components/web-components/componentsgeneral-getting-started) for more information.

#### Fixed
- Remove input helper text container when it is empty.
- `Icon` not showing in Safari.
- `Checkbox` not showing in Safari.
- `Button` stretches correctly in flex containers.
- Various theming issues.
- `Dropdown` - bug fixes and improvements.

### **{PackageCommonVerChanges-3.2.0}**

#### Added
- New [MaskInput](inputs/mask-input.md) component.
- New [ExpansionPanel](layouts/expansion-panel.md) component.
- New [Tree](grids/tree.md) component.
- `Rating` - Added `selected` CSS part and exposed CSS variable to control symbol sizes.
- `IconButton` - Allow slotted content.

#### Fixed
- `NavDrawer` - Various styles fixes.
- Buttons - Vertical align and focus management.
- `Input` - Overflow for `suffix`/`prefix`.
- `Switch` - Collapse with small sizes.
- `List` - Overflow behavior.

### **{PackageCommonVerChanges-3.1.0}**

#### Added
- `Chip`: Added `prefix` and `suffix` slots.
- `Snackbar`: Added `toggle` method.

#### Deprecated
- `Chip`: Previously exposed `start` and `end` slots are replaced by `prefix` and `suffix`. They remain active, but are now deprecated and will be removed in a future version.

#### Fixed
- `Chip`:
  - Auto load internal icons.
  - Selected chip is misaligned.
- Package: ESM internal import paths.

### **{PackageCommonVerChanges-3.0.0}**

#### Changed
- **Breaking Change**: All dropdown related classes renamed from `IgcDropDown*` to `IgcDropdown*`

### **{PackageCommonVerChanges-2.2.0}**

#### Added
- New [DropDown](inputs/dropdown.md) component.
- `Calendar`: Active date can be set via an attribute.

### **{PackageCommonVerChanges-2.1.1}**

#### Added
- Control border radius and elevation from `--igc-radius-factor` and `--igc-elevation-factor`:

Example:

```css
/* Make all components square and remove all shadows */
:root {
  --igc-radius-factor: 0;
  --igc-elevation-factor: 0;
}
```

### **{PackageCommonVerChanges-2.1.0}**

#### Added
- New [LinearProgress](inputs/linear-progress.md) component.
- New [CircularProgress](inputs/circular-progress.md) component.
- New [Chip](inputs/chip.md) component.
- New [Snackbar](notifications/snackbar.md) component.
- New [Toast](notifications/toast.md) component.
- New [Rating](inputs/rating.md) component.
- Component themes can be changed at runtime by calling the `configureTheme(theme: Theme)` function

### **{PackageCommonVerChanges-2.0.0}**

#### Added
- Dark Themes
- New [Slider](inputs/slider.md) component.
- New [RangeSlider](inputs/slider.md) component.
- Support `required` property in `Radio` component.

#### Changed
- Fix checkbox/switch validity status
- Split `Calendar`'s `value: Date | Date[]` property into two properties - `value: Date` and `values: Date[]`
- Replaced `Calendar`'s `hasHeader` property & `has-header` attribute with `hideHeader` & `hide-header` respectively.
- Replaced `Card`'s `outlined` property with `elevated`.

#### Removed
- Removed `igcOpening`, `igcOpened`, `igcClosing` and `igcClosed` events from `NavDrawer` component.

### **{PackageCommonVerChanges-1.0.0}**

Initial release of Ignite UI Web Components

#### Added
- [Avatar](layouts/avatar.md) component
- [Badge](inputs/badge.md) component
- [Button](inputs/button.md) component
- [Calendar](scheduling/calendar.md) component
- [Card](layouts/card.md) component
- [Checkbox](inputs/checkbox.md) component
- Form component
- [Icon](layouts/icon.md) component
- [IconButton](inputs/icon-button.md) component
- [Input](inputs/input.md) component
- [List](grids/list.md) component
- [Navigation bar](menus/navbar.md) component
- [Navigation drawer](menus/navigation-drawer.md) component
- [Radio group](inputs/radio.md) component
- [Radio](inputs/radio.md) component
- [Ripple](inputs/ripple.md) component
- [Switch](inputs/switch.md) component




## {PackageDockManager}

### **{PackageDockManagerVerChanges-1.14.4}**

#### Deprecated
- `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.

### **{PackageDockManagerVerChanges-1.14.3}**

#### Fixed
- Dock manager throws errors with Vite-based builds.
- Docking to edge in an empty root split pane throws errors.

### **{PackageDockManagerVerChanges-1.14.2}**

#### Fixed
- Constraining panels inside the dock manager boundaries with quick drags.

### **{PackageDockManagerVerChanges-1.14.1}**

#### Fixed
- Proximity dock rtl check

### **{PackageDockManagerVerChanges-1.14.0}**

#### New features

- Add `showPaneHeaders` property.
- Add `proximityDock` property.
- Add `containedInBoundaries` property.

#### Enhancements
- Add `contentId` of elements as CSS parts.

#### Fixed
- Maximizing and unpinning panes leads to unclickable panes.
- Center dock is possible in a pane that has `AcceptsInnerDock` set to **true** if the `AllowInnerDock` of `DockManager` is set to **false**.

### **{PackageDockManagerVerChanges-1.13.0}**

#### New features
- Add `FocusPane` method.
- Add `AllowInnerDock` and `AcceptsInnerDock` properties.

#### Enhancements
- Save pane maximized state in layout.

#### Fixed
- Tab selection order is not preserved.

#### **{PackageDockManagerVerChanges-1.12.5}**

#### New features
- Add `paneScroll` event.

#### Fixed
- ТabGroupPane: Pinning one of several unpinned panes results in all the panes getting pinned.
- Context menu not positioning correctly in RTL mode.
- Active pane is not retained when docking with keyboard.

### **{PackageDockManagerVerChanges-1.12.4}**

#### Fixed
- Active pane incorrectly set when more than one Tab Group Pane is within a Floating Pane.

### **{PackageDockManagerVerChanges-1.12.3}**

#### Fixed
- Error is thrown when dropping pane in a separate window.

### **{PackageDockManagerVerChanges-1.12.2}**

#### Enhancements
- Add `tabs-more-menu-content` and `tabs-more-menu-item` CSS parts.

#### Fixed
- Docking indicator left/right arrows positions are reversed in RTL mode.
- Context menu not positioning correctly.
- Missing overloads for `addEventListener` and `removeEventListener`.

### **{PackageDockManagerVerChanges-1.12.1}**

#### Enhancements
- Include pane information in `splitterResizeStart` and `splitterResizeEnd` events.
- `DockManager` is now exported as class.

#### Fixed
- Contents in slots with `unpinnedHeaderId` are not updated correctly.

### **{PackageDockManagerVerChanges-1.12.0}**

#### Fixed
- Docking not working with `allowFloating: false`.
- Flyout pane closing while active.
- Focusable elements does not receive focus.
- Navigating with pane navigator does not bring selected floating window on top.
- Event `splitterResizeStart` can't be cancelled.
- Tabs context menu not positioning correctly.

### **{PackageDockManagerVerChanges-1.11.3}**

#### New features
- Add `contextMenuPosition` property
- Add `selected` option for `tab-header-close-button` CSS part

### **{PackageDockManagerVerChanges-1.11.2}**

#### New features
- Add `hovered` option for `tab-header-close-button` CSS part

### **{PackageDockManagerVerChanges-1.11.1}**

#### Fixed
- CSS part fixes for `tab-header`

### **{PackageDockManagerVerChanges-1.11.0}**

#### New features
- Add options for `ShowHeaderIconOnHover` property for different buttons
- Add `horizontal` and `vertical` options for `splitter-handle` CSS part
- Add `header-title` CSS part
- Add `hover` option for `tab-header-close-button` CSS part in active/inactive states
- Add `paneHeaderCloseButton` and `tabHeaderCloseButton` slots

### **{PackageDockManagerVerChanges-1.10.0}**

#### New features
- Add `ShowHeaderIconOnHover` property.

#### Fixed
- Active pane is not retained on float/dock.
- Splitter styles are not applied.
- `click` event on customized header buttons is not working.
- Removed erroneous dock indicators while dragging over splitter.

### **{PackageDockManagerVerChanges-1.9.0}**

#### Fixed
- Styles not applied.
- Resize in RTL mode.

### **{PackageDockManagerVerChanges-1.8.0}**

#### New features
- Customize dock manager buttons.
- `LayoutChange` event which fires when the layout updates.

### **{PackageDockManagerVerChanges-1.7.0}**

#### New features
- Customizable floating pane header.
- `Disabled` property per pane.
- `DocumentOnly` property which allows content pane to be docked only inside a document host.
- `AllowEmpty` property for split and tab group panes which allows displaying empty areas.
- `DisableKeyboardNavigation` property on the dock manager.

#### Fixed
- Docking indicators appear over the currently dragged floating pane.

### **{PackageDockManagerVerChanges-1.6.0}**

#### New features
- Customize dock manager panes and tabs.

#### Fixed
- A floating pane is draggable outside of the page.

### **{PackageDockManagerVerChanges-1.5.0}**

#### New features
- `AllowMaximize` property per pane.

#### Fixed
- Unpinned pane is closing automatically upon clicking on its content.
- Panes selected from the overflow menu are not activated if there is an unpinned pane from the same tab group.

### **{PackageDockManagerVerChanges-1.4.1}**

#### Fixed
- Pane with `allowPinning: false` placed inside tab group can be unpinned.
- Normalize a maximized pane when navigating away from it via the keyboard.

### **{PackageDockManagerVerChanges-1.4.0}**

#### New features
- Reorder tabs without creating floating pane.
- Keyboard navigation.
- Pane navigator.
- Enable/disable floating pane resizing.
- Events for floating pane resizing.

#### Fixed
- Select pane when activated.
- Flyout unpinned pane when activated.
- Error thrown when hosting external popup inside pane.
- Tab selection is lost with nested Dock Manager components.
- Floating pane containing panes with disabled floating and docking cannot be moved.
- Exception thrown when docking floating pane inside empty dock manager.

### **{PackageDockManagerVerChanges-1.3.0}**

#### New features
- More tabs menu appears when there is not enough space to display all tab headers.
- Hide pane without removing it from the layout using its `hidden` property.
- Header slot properties for tab and unpinned pane - `tabHeaderId` and `unpinnedHeaderId`.

### **{PackageDockManagerVerChanges-1.2.0}**

#### New features
- Active pane.
- Localization support.

#### Fixed
- Errors thrown when dragging the last document host tab and there is unpinned pane.
- Tabs content disappears after docking a pane with `allowFloating: false`.
- Exception thrown when quickly switching between docking indicators.

### **{PackageDockManagerVerChanges-1.1.0}**

#### New features
- Maximizing panes.
- Docking preview shadow.
- ARIA support.
- API for external drag/drop support.
- Properties and events for user interactions such as closing, pinning, dragging.
- Support for **ng update** for Angular projects.

### **{PackageDockManagerVerChanges-1.0.3}**

#### Enhancements
- Resize splitter using the keyboard.

### **{PackageDockManagerVerChanges-1.0.2}**

#### Fixed
- Pane goes out of view when resized to its minimum size.

### **{PackageDockManagerVerChanges-1.0.1}**

#### Enhancements
- Add active color css variable.
- Add keyboard support for context menu.

#### Fixed
- Selection is not working on first click when context menu is opened.
- Single tab is not rendered correctly after pinning/unpinning its sibling.

### **{PackageDockManagerVerChanges-1.0.0}**

Initial release of Ignite UI Dock Manager.
