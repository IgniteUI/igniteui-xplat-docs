---
title: {Platform} Datepicker Component - {ProductName}
_description: Infragistics' {Platform} Datepicker allows the user to select a date from a calendar and set it in an input element.
_keywords: {Platform} Datepicker, {ProductName}, Infragistics
mentionedTypes: ['Datepicker']
---

# {Platform} Datepicker Component Overview
The {ProductName} DatePicker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the DatePicker lets users to navigate to a desired date with several view options – month, year, decade. There are the usual min, max, and required properties to add validation. 

The {ProductName} DatePicker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The Angular DatePicker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration. 

## {Platform} Datepicker Example

Below you can see a sample that demonstrates how the DatePicker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it. 

`sample="/scheduling/date-picker/overview", height="150", alt="{Platform} Date Picker Input Overview Example"`

## Getting Started with {Platform} Datepicker

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `DatePicker`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcDatePicker } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDatePicker);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

## Using the {Platform} Datepicker Component

### Display Datepicker
To instantiate a Datepicker in its default `dropdown` state, use the following code:

```html
<igc-date-picker>
    <p slot="helper-text">Date</p>
</igc-date-picker>
```

### Options
The `IgcDatePickerComponent` can be bound to a `date` or a `string`.

```typescript
const datepicker = document.querySelector('igc-date-picker') as IgcDatepickerComponent;
const date = new Date();

datepicker.value = date;
```
If a string is bound to the picker, it needs to be in the `ISO 8601` format:
```html
<igc-date-picker [value]="'2000-01-01'"></igc-date-picker>
```

### Projecting components
With prefix and suffix slots we can add different content before and after the main content of the Input.

```html
<igc-date-picker id="datePicker">
    <igc-icon slot="suffix" name="arrow-up" collection="material" class="small" onclick="datePicker.stepUp()"></igc-icon>
</igc-date-picker>
```
The above snippet will add an additional icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons
The calendar and clear icon could be templated by using the `calendar-icon` and `clear-icon` slots:

```html
<igc-date-picker id="datePicker">
    <igc-icon slot="calendar-icon" name="calendar" collection="material" class="small"></igc-icon>
    <igc-icon slot="clear-icon" name="delete" collection="material" class="small"></igc-icon>
</igc-date-picker>
```

#### Custom action buttons
The picker's action buttons can be templated using the `actions` slot:
```html
<igc-date-picker id="datePicker">
    <igc-button slot="actions" onclick="datePicker.showWeekNumbers = true">Show Week Numbers</igc-button>
</igc-date-picker>
```

### Keyboard Navigation

The `IgcDatePickerComponent` has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

|Keys|Description|
|----|-----------|
| <kbd>&larr;</kbd> | Move one character to the beginning |
| <kbd>&rarr;</kbd> | Move one character to the end |
| <kbd>Home</kbd> | Move to the beginning |
| <kbd>End</kbd> | Move to the end |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>&larr;</kbd> | Move to the beginning of the date/time section - current one or left one |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>&rarr;</kbd> | Move to the end of the date/time section - current on or right one |
| Focus on a date/time part + <kbd>&darr;</kbd> | Decrements a date/time part |
| Focus on a date/time part + <kbd>&uarr;</kbd> | Increments a date/time part |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>;</kbd> | Sets the current date/time as the value of the editor |
| <kbd>Esc</kbd> | Closes the calendar pop-up and focuses the input field |

## Examples

### Dialog Mode
The `IgcDatePickerComponent` also supports a `dialog` mode:
```html
<igc-date-picker id="datePicker" mode="dialog">
</igc-date-picker>
```
`sample="/scheduling/date-picker/dialog_mode", height="150", alt="{Platform} Date Picker Dialog Mode Example"`

### Display and input format
`inputFormat` and `displayFormat` are properties which can be set to make the picker's editor follow a specified format. The `inputFormat` is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the DatePicker Component will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

`displayFormat` is used to format the picker's input when it is not focused. If no `displayFormat` is provided, the picker will use the `inputFormat` as its `displayFormat`.

More information about these can be found in the `IgcDateTimeInput` format section.

`sample="/scheduling/date-picker/format", height="150", alt="{Platform} Date Picker Input Fromat Example"`

### Increment and decrement
The `IgcDatePickerComponent` exposes `stepUp` and `stepDown` methods. Both of which come from the `IgcDateTimeInput` and can be used for incrementing and decrementing a specific `DatePart` of the currently set date.

```html
<igc-date-picker id="datePicker">
    <igc-icon slot="prefix" name="arrow-up" collection="material" onclick="datePicker.stepUp()"></igc-icon>
    <igc-icon slot="suffix" name="arrow-down" collection="material" onclick="datePicker.stepDown()"></igc-icon>
</igc-date-picker>
```

### In Forms
The `IgcDatePickerComponent` could be used in a form element, the component's `minValue` and `maxValue` properties act as form validators.

In forms, we can handle the `igcChange` event of the component and update the value of the label.

`sample="/scheduling/date-picker/form", height="150", alt="{Platform} Date Picker Input Form Example"`

### Calendar Specific settings
The `IgcDatePickerComponent` can modify some of the calendar's settings via the properties that the date picker exposes. Some of these include `visibleMonths` which allows more than one calendar to be displayed when the picker expands, `weekStart` which determines the starting day of the week, `showWeekNumbers` which shows the number for each week in the year and more.

## Internationalization

The localization of the `IgcDatePickerComponent` can be controlled through its `locale` input. 

Here is how a DatePicker with Japanese locale definition would look like:
```html
<igc-date-picker locale="ja-JP">
</igc-date-picker>
```

## Styling
The `DatePicker` component derives from the `Input` and `Calendar` component, so it exposes all available CSS parts. See [Input Styling](../inputs/input.md#styling) and [Calendar Styling](calendar.md#styling) for reference.


`sample="/scheduling/date-picker/styling", height="150", alt="{Platform} Date Picker Input Styling Example"`

## API References

 - `Input`
 - `Calendar`
 - `DateParts`
 - `DatePicker`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})