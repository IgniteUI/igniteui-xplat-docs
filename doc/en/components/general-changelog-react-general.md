---
title: {Platform} General Components Changelog | {ProductName} | Infragistics
_description: {Platform} General Components changelog.
_keywords: Changelog, {ProductName}, Infragistics, General Components
---

# {Platform} General Components Changelog

All notable changes for each version of {ProductName} General Components are documented on this page.

## **{PackageVerLatest}**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|2251|igniteui-react-layouts|Skip resolving property editor props containing @constantValues |
## **{PackageVerChanges-25-2-NOV}**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40490|IgrDatePicker|Inputs by Autofill won't give any effects for a date picker|
## **{PackageVerChanges-25-1-OCT_2}**

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
## **{PackageVerChanges-25-1-OCT}**

### Enhancements

#### IgrBulletGraph

- <label>PREVIEW</label> Added new `LabelsVisible` property
## **{PackageVerChanges-25-1-SEP}**

### Enhancements

- Added enhancement DatePicker should update calendar view on typing, as Date Range Picker [1818](https://github.com/IgniteUI/igniteui-webcomponents/issues/1818)
### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1831](https://github.com/IgniteUI/igniteui-webcomponents/pull/1831)| Calendar |Navigation styling|
|[1833](https://github.com/IgniteUI/igniteui-webcomponents/pull/1833)|Card| Slotted igc-avatar size styles in supported themes|
|[1826](https://github.com/IgniteUI/igniteui-webcomponents/pull/1826)|Combo|Dropdown initial height|
|[1827](https://github.com/IgniteUI/igniteui-webcomponents/pull/1827)|Combo|Icon sizes styles for Indigo theme|
|[1834](https://github.com/IgniteUI/igniteui-webcomponents/pull/1834)|DatePicker, DateRangePicker|Disabled styles|
|[1820](https://github.com/IgniteUI/igniteui-webcomponents/pull/1820)|Input|Prefix and suffix slot styles for Bootstrap theme|
|[1824](https://github.com/IgniteUI/igniteui-webcomponents/pull/1824)|Input|Label and border styles for Material theme|
|[1836](https://github.com/IgniteUI/igniteui-webcomponents/pull/1836)|Input|Removed overridden tabindex property|
|[1827](https://github.com/IgniteUI/igniteui-webcomponents/pull/1827)|Select|Icon sizes styles for Indigo theme|
|[1809](https://github.com/IgniteUI/igniteui-webcomponents/pull/1809)|Switch|Use the new thumb hover property|
|[1837](https://github.com/IgniteUI/igniteui-webcomponents/pull/1837)|TileManager|Incorrect escape of internal regex|
## **{PackageVerChanges-25-1-AUG}**

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
|[1772](https://github.com/IgniteUI/igniteui-webcomponents/issues/1772)|Carousel|Ensure `onSlideChanged` event is emitted when a slide is changed|
|[1765](https://github.com/IgniteUI/igniteui-webcomponents/pull/1765)|Date picker|Styling issues|
|[1764](https://github.com/IgniteUI/igniteui-webcomponents/pull/1764)|Date range picker|CSS borders and elevation|
|[1747](https://github.com/IgniteUI/igniteui-webcomponents/pull/1747)|File input|Bootstrap invalid box-shadow styles|
|[1672](https://github.com/IgniteUI/igniteui-webcomponents/pull/1672)|Stepper|Error when setting linear property in deferred rendering scenarios|
|[1768](https://github.com/IgniteUI/igniteui-webcomponents/pull/1768)|Textarea|Readonly state styles|
|[1755](https://github.com/IgniteUI/igniteui-webcomponents/pull/1755)|Dropdown|Icon size in Bootstrap theme|
|[1739](https://github.com/IgniteUI/igniteui-webcomponents/pull/1739)|Inputs|Label positioning and transition logic in Material theme|
## **{PackageVerChanges-25-1-JUL2}**

### Breaking Changes

#### File Input

- `onChange` & `onCancel` events detail now returns the underlying component `files` property.
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
|[1710](https://github.com/IgniteUI/igniteui-webcomponents/issues/1710)|Calendar and Date Picker|Incorrect date rollover for in certain scenarios|
|[1728](https://github.com/IgniteUI/igniteui-webcomponents/pull/1728)|Combo|Case insensitive icon styles in themes|
|[1726](https://github.com/IgniteUI/igniteui-webcomponents/pull/1726)|Input|Replace border in fluent theme with a box-shadow|
|[1732](https://github.com/IgniteUI/igniteui-webcomponents/pull/1732)|Input|Focused state background color in Indigo theme|
|[1715](https://github.com/IgniteUI/igniteui-webcomponents/pull/1715)|Text Area|Label height and component height override|
## **{PackageVerChanges-24-2-APR2}**

### Removed

- `CheckboxChangeEventArgs` removed, use `IgrCheckboxChangeEventArgs` instead.
- `RadioChangeEventArgs` removed, use `IgrRadioChangeEventArgs` instead.
- `IgrRangeSliderValue` removed, use `IgrRangeSliderValueEventArgs` instead.
- `IgrActiveStepChangingArgs` removed, use `IgrActiveStepChangingEventArgs` instead.
- `IgrActiveStepChangedArgs` removed, use `IgrActiveStepChangedEventArgs` instead.
### Enhancements

#### Stepper

Stepper Step's `titlePosition` now defaults to `auto`, instead of being undefined, which has the same behavior.
#### Tabs

igr-tab `panel` property is removed.

igr-tab-panel component is removed. The igr-tab now encompasses both the tab header and the tab content in a single component.
## **{PackageVerChanges-24-2-APR2}**

### Removed

- `CheckboxChangeEventArgs` removed, use `IgrCheckboxChangeEventArgs` instead.
- `RadioChangeEventArgs` removed, use `IgrRadioChangeEventArgs` instead.
- `IgrRangeSliderValue` removed, use `IgrRangeSliderValueEventArgs` instead.
- `IgrActiveStepChangingArgs` removed, use `IgrActiveStepChangingEventArgs` instead.
- `IgrActiveStepChangedArgs` removed, use `IgrActiveStepChangedEventArgs` instead.
### Enhancements

#### Stepper

Stepper Step's `titlePosition` now defaults to `auto`, instead of being undefined, which has the same behavior.
#### Tabs

igr-tab `panel` property is removed.

igr-tab-panel component is removed. The igr-tab now encompasses both the tab header and the tab content in a single component.
## **{PackageVerChanges-24-2-APR}**

### New Components

- TileManager
### Enhancements

#### List

- Added new property on `ListItem` called `Selected`
#### Accordion

- Added new events `Open` and `Close`
### Deprecations

- The `clicked` event of the `Button` is deprecated. Use the native `onClick` handler.
## **{PackageVerChanges-24-2-FEB}**

### {PackageCommon}

- Added new `allowSplitterDock` property for `Dockmanager` that allows docking directly in a split.
- Added new `useFixedSize` property for the `SplitPane` of `Dockmanager` that allows new resize behavior.
### Enhancements

#### Toolbar

- Added new `groupHeaderTextStyle` property to `Toolbar` and `ToolPanel`. If set, it will apply to all `ToolActionGroupHeader` actions.
- Added new property on `ToolAction` called `TitleHorizontalAlignment` which controls the horizontal alignment of the title text.
- Added new property on `ToolActionSubPanel` called `itemSpacing` which controls the spacing between items inside the panel.
## **{PackageVerChanges-24-2-NOV}**

### General

- New [Carousel](layouts/carousel.md) component.
- `Input`
  - Changed `change` event argument type from `ComponentDataValueChangedEventArgs` to `ComponentValueChangedEventArgs`
## **{PackageVerChanges-24-1-SEP}**

### {PackageCommon}

- New [Banner](notifications/banner.md) component.
- New [DatePicker](scheduling/date-picker.md) component.
- New `Divider` component.
- Added support for native events to all components.
- `Icon`
  - Added `setIconRef` method. This allows to register and replace icons by SVG files.
  - All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.
- `Combo`, `DatePicker`, `Dialog`, `Dropdown`,  `ExpansionPanel`, `NavDrawer`, `Toast`, `Snackbar`, **IgrSelectComponent**
  - Toggle methods `show`, `hide`, `toggle` methods return **true** now on success, otherwise **false**.
- **IgrButtonComponent**, `IconButton`, `Checkbox`, `Switch`, `Combo`, `DateTimeInput`, `Input`, `MaskInput`, `Radio`, **IgrSelectComponent**, `Textarea`
  - Deprecated custom `focus` and `blur` events. Use the native `onFocus` and `onBlur` events instead
- `RadioGroup`
  - Added `Name` and `Value` properties.

**Breaking Changes**

- Renamed old **IgrDatePicker** to **IgrXDatePicker**.
- Removed `Form` component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - `Avatar`,  **IgrButtonComponent**, `IconButton`, `Calendar`, `Chip`, `Dropdown`, `Icon`, `Input`, `List`, `Rating`, `Snackbar`, `Tabs`, `Tree`
- `Badge`, `Chip`, `LinearProgress`, `CircularProgress`
  - Renamed `Variant` property type to `StyleVariant`.
- `Calendar`
  - Renamed `WeekStart` property type to `WeekDays`.
- `Checkbox`, `Switch`
  - Changed `change` event argument type from `ComponentBoolValueChangedEventArgs` to `CheckboxChangeEventArgs`.
- `Combo`, **IgrSelectComponent**
  - Removed `positionStrategy`, `flip`, `sameWidth` properties.
- `DateTimeInput`
  - Removed `maxValue` and `minValue` properties. Use `max` and `min` instead.
- `Dropdown`
  - Removed `positionStrategy` property.
- `Input`
  - Removed old named `maxlength` and `minlength` properties. Use `maxLength` and `minLength`.
  - Removed old named `readonly` and `inputmode` properties. Use `readOnly` and `inputMode`.
  - Changed `inputMode` type also to `string`.
- `Radio`
  - Changed `change` event argument type from `ComponentBoolValueChangedEventArgs` to `RadioChangeEventArgs`.
- `RangeSlider`
  - Removed `ariaThumbLower` and `ariaThumbUpper` properties. Use `thumbLabelLower` and `thumbLabelUpper` instead.
- `Rating`
  - Renamed `readonly` property to `readOnly`.
## **{PackageVerChanges-24-1-JUN}**

### {PackageCommon}

- `Input`, `Textarea` - exposed `ValidateOnly` to enable validation rules being enforced without restricting user input.
- `Dropdown` - `PositionStrategy` property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- `DockManager` - `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.
## **{PackageVerChanges-23-2-MAR}**

### {PackageCommon}

- New `Textarea` component
- New `ButtonGroup` component
- `DockManager`
  - New `ProximityDock` property. If enabled, docking indicators are not visible and the end user can dock the dragged pane by dragging it close to the target pane edges.
  - New `ContainedInBoundaries` property. Determines whether the floating panes are kept inside the Dock Manager boundaries. Defaults to `false`.
  - New `ShowPaneHeaders` property. Determines whether pane headers are only shown on hover or always visible. Defaults to `always`.
- `Input`, `MaskInput`, `DateTimeInput`, `Rating`
  - `Readonly` has been renamed to `ReadOnly`
- `Input`
  - `Maxlength` has been renamed to `MaxLength`
  - `Minlength` has been renamed to `MinLength`
- `Tree`
  - Added `toggleNodeOnClick` property that determines whether clicking over a node will change its expanded state or not. Defaults to `false`.
- `Rating`
  - `allowReset` added. When enabled selecting the same value will reset the component. **Behavioral change** - In previous releases this was the default behavior of the rating component. Make sure to set `allowReset` if you need to keep this behavior in your application.
- `Select`, `Dropdown`
  - exposed `selectedItem`, `items` and `groups` getters

#### Deprecations

- The `Form` component has been deprecated. Please, use the native form element instead.
- The `size` property and attribute have been deprecated for all components. Use the `--ig-size` CSS custom property instead. The following example sets the size of the avatar component to small:
    ```css
    .avatar {
        --ig-size: var(--ig-size-small);
    }
    ```
- `DateTimeInput`
  - `MinValue` and `MaxValue` properties have been deprecated. Please, use `Min` and `Max` instead.
- `RangeSlider`
  - `AriaLabelLower` and `AriaLabelUpper` properties have been deprecated. Please, use `ThumbLabelLower` and `ThumbLabelUpper` instead.

#### Removed

- Removed our own `dir` attribute which shadowed the default one. This is a non-breaking change.
- `Slider` - `ariaLabel` shadowed property. This is a non-breaking change.
- `Checkbox` - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- `Switch` - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- `Radio` - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
## **{PackageVerChanges-23-2}**

### Deprecated Components

> [DataGrid](grids/data-grid/overview.md) - The DataGrid is deprecated, please use [Grid](grids/data-grid.md)
## **{PackageVerChanges-23-1}**

### New Components

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our `XamDataChart` or `CategoryChart` components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.
