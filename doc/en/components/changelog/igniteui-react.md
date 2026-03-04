---
title: {Platform} React Components | Changelog | Infragistics 
_description: Learn about new features, breaking changes, and deprecations for React-specific components in {ProductName}
_keywords: {Platform} React, Infragistics, React Components, Changelog
mentionedTypes: []
---

# Changelog for igniteui-{PlatformLower}-react

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

This changelog covers React-specific component changes, new React components, breaking changes, and package updates.

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

## **{PackageVerChanges-25-1-OCT_2}**

### New Components

- Added `IgrChat` component - A new chat interface component for building conversational UI

### Bug Fixes

| Issue | Component | Description |
|-------|-----------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)|List|removed duplicated CSS variables across list components and themes|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)|Card|Consume colors from themes|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)|Card|Avatar size in card header|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)|Chat|Message actions not rendered after last message|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)|DatePicker|Change event not emitted for non-editable input configuration|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)|DatePicker|Issues when clearing the value and notch border in Material theme|

## **{PackageVerChanges-24-2-APR}**

### New Components

- TileManager - A new layout manager component for organizing tiles

### Enhancements

#### List
- Added new property on `ListItem` called `Selected`

#### Accordion
- Added new events `Open` and `Close`

### Deprecations

- The `clicked` event of the `Button` is deprecated. Use the native `onClick` handler.

### Removed Components

- `CheckboxChangeEventArgs` removed, use `IgrCheckboxChangeEventArgs` instead.
- `RadioChangeEventArgs` removed, use `IgrRadioChangeEventArgs` instead.
- `IgrRangeSliderValue` removed, use `IgrRangeSliderValueEventArgs` instead.
- `IgrActiveStepChangingArgs` removed, use `IgrActiveStepChangingEventArgs` instead.
- `IgrActiveStepChangedArgs` removed, use `IgrActiveStepChangedEventArgs` instead.

#### Stepper
Stepper Step's `titlePosition` now defaults to `auto`, instead of being undefined, which has the same behavior.

#### Tabs
- `igr-tab` `panel` property is removed.
- `igr-tab-panel` component is removed. The `igr-tab` now encompasses both the tab header and the tab content in a single component.

## **{PackageVerChanges-24-2-NOV}**

### New Components

- New [Carousel](../layouts/carousel.md) component - A slideshow component for cycling through elements

### Component Changes

- `Input`
  - Changed `change` event argument type from `ComponentDataValueChangedEventArgs` to `ComponentValueChangedEventArgs`

## **{PackageVerChanges-24-1-SEP}**

### New Components

- New [Banner](../notifications/banner.md) component
- New [DatePicker](../scheduling/date-picker.md) component
- New `Divider` component

### Enhancements

- Added support for native events to all components.

#### Icon
- Added `setIconRef` method. This allows to register and replace icons by SVG files.
- All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.

#### Component Toggle Methods
- `Combo`, `DatePicker`, `Dialog`, `Dropdown`, `ExpansionPanel`, `NavDrawer`, `Toast`, `Snackbar`, **IgrSelectComponent**
  - Toggle methods `show`, `hide`, `toggle` methods return **true** now on success, otherwise **false**.

#### Event Deprecations
- **IgrButtonComponent**, `IconButton`, `Checkbox`, `Switch`, `Combo`, `DateTimeInput`, `Input`, `MaskInput`, `Radio`, **IgrSelectComponent**, `Textarea`
  - Deprecated custom `focus` and `blur` events. Use the native `onFocus` and `onBlur` events instead

#### RadioGroup
- Added `Name` and `Value` properties.

### Breaking Changes

#### Component Renames
- Renamed old **IgrDatePicker** to **IgrXDatePicker**.

#### Removed Components and Properties
- Removed `Form` component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - `Avatar`, **IgrButtonComponent**, `IconButton`, `Calendar`, `Chip`, `Dropdown`, `Icon`, `Input`, `List`, `Rating`, `Snackbar`, `Tabs`, `Tree`

#### Property Type Changes
- `Badge`, `Chip`, `LinearProgress`, `CircularProgress`
  - Renamed `Variant` property type to `StyleVariant`.
- `Calendar`
  - Renamed `WeekStart` property type to `WeekDays`.
- `Checkbox`, `Switch`
  - Changed `change` event argument type from `ComponentBoolValueChangedEventArgs` to `CheckboxChangeEventArgs`.
- `Radio`
  - Changed `change` event argument type from `ComponentBoolValueChangedEventArgs` to `RadioChangeEventArgs`.

#### Property Removals
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
- `RangeSlider`
  - Removed `ariaThumbLower` and `ariaThumbUpper` properties. Use `thumbLabelLower` and `thumbLabelUpper` instead.
- `Rating`
  - Renamed `readonly` property to `readOnly`.
