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

### Enhancements

## **{PackageVerChanges-25-2-NOV}**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker


## **{PackageCommonVerChanges-6.3.6}**

### New Components

- Added `IgrChat` component

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)| List |removed duplicated CSS variables across list components and themes|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)| Card |Consume colors from themes|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)| Card |Avatar size in card header|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)| Chat |Message actions not rendered after last message|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)| Date Picker |Change event not emitted for non-editable input configuration|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)| Date Picker | Issues when clearing the value and notch border in Material theme|
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **{PackageVerChanges-25-1-SEP}**

### Enhancements

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

## **{PackageVerChanges-25-1-JUN}**

### Enhancements

## **{PackageVerChanges-24-2-APR}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
| 28480 | `IgcCombo` | Undefined reference error is thrown when a datasource is replaced|
| 36374 | `IgcInput` | A previous value was bound when a form was submitted on any touch device|

## **{PackageVerChanges-24-2-FEB}**

### Enhancements

## **{PackageVerChanges-24-2-JAN}**

- Bug Fixes

## **{PackageVerChanges-24-2-DEC}**

## **{PackageVerChanges-24-1-SEP}**

## **{PackageVerChanges-24-1-JUN}**

### {PackageCommon}
- `Input`, `Textarea` - exposed `ValidateOnly` to enable validation rules being enforced without restricting user input.
- `Dropdown` - `PositionStrategy` property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- `DockManager` - `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.

## **{PackageVerChanges-23-2-MAR}**


## **{PackageVerChanges-23-2-JAN}**

## **{PackageVerChanges-23-2-DEC}**

## **{PackageVerChanges-23-2}**

### {PackageLayouts}

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md)
  - Save tool action has been added to save the chart to an image via the clipboard.
  - Vertical orientation has been added via the toolbar's `Orientation` property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
  - Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.


## **{PackageVerChanges-23-1}**

### {PackageLayouts}

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our `XamDataChart` or `CategoryChart` components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## **{PackageVerChanges-22-2.2}**


### {PackageInputs}

- `IgcDateTimeInput`, the StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) is now trimmed down to DatePart instead of DateTimeInputDatePart
- `IgcRadio` and `IgcRadioGroup`, added component validation along with styles for invalid state
- `IgcMask`, added the capability to escape mask pattern literals.
- `IgcBadge` added a `Shape` property that controls the shape of the badge and can be either `Square` or `Rounded`. The default shape of the badge is rounded.
- `IgcAvatar`, the `RoundShape` property has been deprecated and will be removed in a future version. Users can control the shape of the avatar by the newly added `Shape` attribute that can be `Square`, `Rounded` or `Circle`. The default shape of the avatar is `Square`.


## **{PackageVerChanges-22-2.1}**

## **{PackageVerChanges-22-2}**

## **{PackageVerChanges-22-1}**

## **{PackageVerChanges-21-2.1}**

### {PackageInputs}

- Date Picker:
  - Changed ValueChanged event to `SelectedValueChanged`.
- Multi-Column ComboBox:
  - Changed `TextChanged` event to `TextValueChanged`.
  - Changed `ValueChanged` event to `SelectedValueChanged`.

## **{PackageVerChanges-21-2}**

## **{PackageVerChanges-21-1}**

## **{PackageVerChangedFields}**

## **{PackageVerRenamedGrid}**

