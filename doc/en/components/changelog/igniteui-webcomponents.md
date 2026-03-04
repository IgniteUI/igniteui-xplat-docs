---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
---
# {ProductName} Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of {ProductName} are documented on this page.

## {PackageCommon}

## **{PackageCommonVerChanges-6.3.6}**

### New Components

- Added `IgcChat` component

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)| List |removed duplicated CSS variables across list components and themes|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)| Card |Consume colors from themes|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)| Card |Avatar size in card header|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)| Chat |Message actions not rendered after last message|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)| Date Picker |Change event not emitted for non-editable input configuration|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)| Date Picker | Issues when clearing the value and notch border in Material theme|

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
