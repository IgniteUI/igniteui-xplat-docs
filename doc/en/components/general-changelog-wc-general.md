---
title: {Platform} General Components Changelog | {ProductName} | Infragistics
_description: {Platform} General Components changelog.
_keywords: Changelog, {ProductName}, Infragistics, General Components
mentionedTypes: ["DatePicker", "Card", "List", "Select", "Combo"]
---

# {Platform} General Components Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of {ProductName} General Components are documented on this page.

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

## **{PackageVerChanges-25-1-JUN}**
### Enhancements

#### Toolbar
- Value layers added from the toolbar now appear on the legend.
- The zoom reset tool has been moved to the zoom drop-down.

#### Data Pie Chart
- The chart now exposes a `GetOthersContext()` method. This will return the contents of the "others" slice.


## **{PackageVerChanges-24-2-APR}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
| 28480 | `IgcCombo` | Undefined reference error is thrown when a datasource is replaced|
| 36374 | `IgcInput` | A previous value was bound when a form was submitted on any touch device|

## **{PackageVerChanges-24-2-FEB}**
### Enhancements

#### Toolbar

- Added new `GroupHeaderTextStyle` property to `Toolbar` and `ToolPanel`. If set, it will apply to all `ToolActionGroupHeader` actions.
- Added new property on `ToolAction` called `TitleHorizontalAlignment` which controls the horizontal alignment of the title text.
- Added new property on `ToolActionSubPanel` called `ItemSpacing` which controls the spacing between items inside the panel.


## **{PackageVerChanges-24-1-JUN}**
### {PackageCommon}
- `Input`, `Textarea` - exposed `ValidateOnly` to enable validation rules being enforced without restricting user input.
- `Dropdown` - `PositionStrategy` property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- `DockManager` - `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.


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



## **{PackageVerChanges-21-2.1}**
### {PackageInputs}

- Date Picker:
  - Changed ValueChanged event to `SelectedValueChanged`.
- Multi-Column ComboBox:
  - Changed `TextChanged` event to `TextValueChanged`.
  - Changed `ValueChanged` event to `SelectedValueChanged`.


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

**Breaking Changes**

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
