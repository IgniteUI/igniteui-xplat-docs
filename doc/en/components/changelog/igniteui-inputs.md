---
title: {Platform} Inputs | Changelog | Infragistics 
_description: Learn about new features and bug fixes for the {ProductName} Input components
_keywords: {Platform} Inputs, Infragistics, DatePicker, MultiColumnComboBox, Changelog
mentionedTypes: ["DatePicker", "MultiColumnComboBox"]
---

# {Platform} Inputs Changelog

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->
## **{PackageVerChanges-25-2-NOV}**

### Bug Fixes

<!-- React -->
| Bug Number | Control | Description |
|------------|---------|-------------|
|40490|IgrDatePicker|Inputs by Autofill won't give any effects for a date picker|
<!-- end: React -->

<!-- WebComponents -->
| Bug Number | Control | Description |
|------------|---------|-------------|
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker|
<!-- end: WebComponents -->

## **{PackageVerChanges-22-2-AUG}**

### {PackageInputs}

<!-- WebComponents -->
- `IgcDateTimeInput`, the StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) is now trimmed down to DatePart instead of DateTimeInputDatePart
- `IgcRadio` and `IgcRadioGroup`, added component validation along with styles for invalid state
- `IgcMask`, added the capability to escape mask pattern literals.
- `IgcBadge` added a `Shape` property that controls the shape of the badge and can be either `Square` or `Rounded`. The default shape of the badge is rounded.
- `IgcAvatar`, the `RoundShape` property has been deprecated and will be removed in a future version. Users can control the shape of the avatar by the newly added `Shape` attribute that can be `Square`, `Rounded` or `Circle`. The default shape of the avatar is `Square`.
<!-- end: WebComponents -->

## **{PackageVerChanges-21-2.1}**

### {PackageInputs} (Inputs)

#### Date Picker
- Changed ValueChanged event to `SelectedValueChanged`.

#### Multi-Column ComboBox
- Changed `TextChanged` event to `TextValueChanged`.
- Changed `ValueChanged` event to `SelectedValueChanged`.

## **{PackageVerChanges-20-2}**

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
