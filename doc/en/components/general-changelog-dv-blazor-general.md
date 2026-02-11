---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "Infragistics.Controls.DataGridCellEventArgs", "Infragistics.Controls.GridBaseDirective", "MaskInput", "Shape", "RoundShape", "XamRadialGauge, XamLinearGauge, XamBulletGraph, XamTreemap", "XamRadialChart", "Toolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls.Charts
---

# {ProductName} Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of {ProductName} are documented on this page.

## **{PackageVerLatest}**

### Enhancements

## **{PackageVerChanges-25-2-NOV}**

**Breaking Changes**

As of the 2025.2 release, we no longer support .NET 6. This corresponds with the [Microsoft .NET Lifecycle, here](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9/overview).

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40490|IgbDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **{PackageVerChanges-25-1-SEP}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|37307 | `IgbCheckBox` | JS Heap, Nodes, and Listeners leakage on IgbCheckBox|

### Enhancements

## **{PackageVerChanges-25-1-AUG}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|26952 | `IgbTabs` | e.Detail is null in Change event in Razor/JS|
|26953 | `IgbTabs` | Marking a tab selected won't apply on subsequent attempts|
|31910 | `IgbXDatePicker` | An error will happen when I bind a value using the "@bind-Value" syntax and click the clear button|
|38903 | `IgbTabs` | Dropdown list is not displaying in the correct location for components inside the tab|
|[139](https://github.com/IgniteUI/igniteui-blazor/issues/139) | `IgbDatePicker`, `IgbDateTimeInput` | Date picker and data time input do not support nullable values|

### General
The following properties of these components are now nullable:
- `Button`: `Form`
- `Calendar`: `SpecialDates`, `DisabledDates`
- `Combo`: `ValueKey`, `DisplayKey`, `GroupKey`
- `DatePicker`: `Value`, `Min`, `Max`
- `DateTimePicker`: `Value`, `Min`, `Max`
- `Dropdown`: `SelectedItem`
- `Input`: `Pattern`, `MinLength`, `MaxLength`, `Min`, `Max`, `Step`
- `Select`: `Value`, `SelectedItem`
- `Tile`: `ColStart`, `RowStart`
- `TileManager`: `MinColumnWidth`, `MinRowHeight`, `Gap`

## **{PackageVerChanges-25-1-JULY}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|37718 | `IgbTab` | Unexpected scrolling occurred when a new row was added to a grid that is in a tab panel|

## **{PackageVerChanges-25-1-JUNE}**

### Enhancements

## **{PackageVerChanges-24-2-MAY}**

## **{PackageVerChanges-24-2-APR}**

### New Components

- IgbTileManager

### Enhancements

#### List
- Added new property on `ListItem` called `Selected`

#### Accordion
- Added new events `Open` and `Close`

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|28480 | `IgbCombo` | Undefined reference error is thrown when a datasource is replaced|
|36374 | `IgbInput` | A previous value was bound when a form was submitted on any touch device|
|37214|General|Intermittent error in Blazor's WebCallback.Register()

## **{PackageVerChanges-24-2-MAR}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|35497 | `IgbDialog` | When ShowAsync and HideAsync Are Called, the Subsequent Code Is Not Executed|

## **{PackageVerChanges-24-2-FEB}**

### Enhancements

### Bug Fixes

The following table lists the bug fixes made for the {ProductName} toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|29998 | `IgbCombo` | The Change event callback was fired multiple times in .NET 8|


## **{PackageVerChanges-24-2-JAN}**

- Bug Fixes

## **{PackageVerChanges-24-2-DEC}**

## **{PackageVerChanges-24-2-NOV}**

### General
- New [Carousel](layouts/carousel.md) component.
- `Input`
  - Changed `change` event argument type from `ComponentDataValueChangedEventArgs` to `ComponentValueChangedEventArgs`

## **{PackageVerChanges-24-1-SEP}**

## **{PackageVerChanges-24-1-JUN}**

### General
- `Input`, `Textarea` - exposed `ValidateOnly` to enable validation rules being enforced without restricting user input.
- `Dropdown` - `PositionStrategy` property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- `DockManager` - `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.

## **{PackageVerChanges-23-2-APR2}**

## **{PackageVerChanges-23-2-APR}**

- Bug Fixes

## **{PackageVerChanges-23-2-JAN}**

### .NET 8.0 support

- 2023.2 release now support .NET 8. For more information on .NET 8 please refer to [this article on Microsoft's site](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8) .

## **{PackageVerChanges-23-2}**

## **{PackageVerChanges-22-2.65}**
### New Components

- [Stepper](layouts/stepper.md)

### New Components

- [Dialog](notifications/dialog.md)
- [Select](inputs/select.md)

### {PackageInputs} (Inputs)

- `IgbDateTimeInput`, the StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) is now trimmed down to DatePart instead of DateTimeInputDatePart
- `IgbRadio` and `IgbRadioGroup`, added component validation along with styles for invalid state
- `IgbMask`, added the capability to escape mask pattern literals.
- `IgbBadge` added a `Shape` property that controls the shape of the badge and can be either `Square` or `Rounded`. The default shape of the badge is rounded.
- `IgbAvatar`, the `RoundShape` property has been deprecated and will be removed in a future version. Users can control the shape of the avatar by the newly added `Shape` attribute that can be `Square`, `Rounded` or `Circle`. The default shape of the avatar is `Square`.

### {PackageDockManager} (DockManager)

- [Dock Manager's](layouts/dock-manager.md) Panes collection now has a protected setter; requires you to call Add rather than set panes in a nested structure when creating them.

## **{PackageVerChanges-22-1}**

### {PackageDockManager} (Dock Manager)

- The {Platform} Dock Manager is now in <label>PREVIEW</label> state, that provides a way to manage a complex layout using different type of panes with various sizes, positions, and behaviors, and that can be docked to various locations within an app. The [Dock Manager](layouts/dock-manager.md) allows your end-users to customize it further by pinning, resizing, moving, floating, and hiding panes.

### New Components

- [Chip](inputs/chip.md)
- [Circular Progress](inputs/circular-progress.md)
- [Linear Progress](inputs/linear-progress.md)
- [Drop Down](inputs/dropdown.md)
- [Slider & Range Slider](inputs/slider.md)
- [Snackbar](notifications/snackbar.md)
- [Toast](notifications/toast.md)

## **{PackageVerChanges-21-2.1}**

> [!Note]
> The following breaking changes were introduced

### {PackageInputs} (Inputs)

- A new `ValueChanged` event supports 2-way binding and should only be handled if you have not bound the `Value` property. In order to read the Value field from the control without data binding the `ValueChanged` event should be handled, otherwise if your data is not bound you should use GetCurrentValueAsync to read the controls Value.

#### Date Picker
- Changed `ValueChanged` event to `SelectedValueChanged`.

#### Multi-Column ComboBox
- Changed `TextChanged` event to `TextValueChanged`.
- Changed `ValueChanged` event to `SelectedValueChanged`.

## **{PackageVerChanges-21-1}**
### {PackageInputs} (Inputs)

#### Date Picker

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
