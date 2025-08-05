---
title: {Platform} Date Range Picker Component - {ProductName}
_description: Infragistics' {Platform} Date Range Picker allows the user to select a range of two dates from a calendar and set it in an input element.
_keywords: {Platform} Date Range Picker, {ProductName}, Infragistics
mentionedTypes: ["DateRangePicker"]
---

# {Platform} Date Range Picker Overview
The {ProductName} Date Range Picker is a lightweight component that includes a text input and a calendar pop-up, allowing users to easily select start and end dates.  It is highly customizable to fit various application requirements, offering features such as date range restrictions, configurable date formats, and more.

## Date Range Picker Example

Below is a sample demonstrating the `DateRangePicker` component in action, where a calendar pop-up allows users to select start and end dates.

`sample="/scheduling/date-range-picker/overview", height="440", alt="{Platform} Date Range Picker Overview Example"`

### Getting Started

<!-- WebComponents -->

To start using the `DateRangePicker`, you first need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install {PackageWebComponents}
```

After that, you need to import the `DateRangePicker`, its necessary CSS, and register its module, as follows:

```ts
import { defineComponents, IgcDateRangePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDateRangePickerComponent);
```

<!-- end: WebComponents -->

<!-- React -->

To start using the `DateRangePicker`, you first need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

After that, you need to import the `DateRangePicker` and its necessary CSS, as follows:

```tsx
import { IgrDateRangePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

Now you can start with a basic configuration of the {Platform} `DateRangePicker`.

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

## Usage

The `DateRangePicker` allows users to select a start and end date either by choosing a date range from a dropdown/calendar pop-up or by typing directly into the input fields - one for the start date and one for the end date.

The picker offers two modes for displaying date values: single input and two inputs. In single input mode, the field is non-editable, and the date range cannot be edited by typing. In two inputs mode, however, users can edit the start and end dates by typing in separate input fields.

When the calendar is visible, a date range can be selected by choosing both a start and end date. Selecting a date will set both the start and end date, and once a second date is chosen, it will set the end date. If a range is already selected, clicking any other date on the calendar will start a new range selection.

### Display Date Range Picker

To instantiate a `DateRangePicker` in its default single input mode, use the following code:

```html
<igc-date-range-picker>
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker/>
```

To switch the `DateRangePicker` to use two inputs, set the `UseTwoInputs` property to `true`.

```html
<igc-date-range-picker use-two-inputs="true">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker useTwoInputs/>
```

### Value

In addition to being selected or typed by the user, the range value of the `DateRangePicker` can also be set using the `Value` property. It's important to note that the value must follow the format: **{ start: startDate, end: endDate }**, where `startDate` and `endDate` are `Date` objects representing the selected range.

```ts
let dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;
let startDate = new Date(2025, 4, 6);
let endDate = new Date(2025, 4, 8);
dateRange.value = { start: startDate, end: endDate }
```

```tsx
const dateRangeRef = useRef<IgrDateRangePicker>();
let startDate = new Date(2025, 4, 6);
let endDate = new Date(2025, 4, 8);
useEffect (() => {
  dateRangeRef.current.value = { start: startDate, end: endDate }	
}, [])

return (
  <IgrDateRangePicker ref={dateRangeRef} />
);
```

In addition, the value can be set as attribute. In this case it should represent an object that can be parsed correctly as JSON, where the `start` and `end` fields should have date values in the ISO 8601 format:

```html
<igc-date-range-picker value='{"start":"2025-01-01","end":"2025-01-02"}'>
<igc-date-range-picker/>
```

```tsx
<IgrDateRangePicker value={{start: new Date('2025-01-01'), end: new Date('2025-01-02')}}/>
```

### Read-only & Non-editable

You can also make the `DateRangePicker` read-only, which disables changing the range value through both typing and calendar selection, disables keyboard navigation, and makes the calendar and clear icons appear visually disabled. This is useful when the range is assigned via the value attribute and is intended to be display-only. To enable this behavior, simply set the `ReadOnly` property.

```html
<igc-date-range-picker use-two-inputs="true" readonly>
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker useTwoInputs readOnly/>
```

Alternatively, you can use the `NonEditable` property, which, unlike `ReadOnly`, only prevents editing the input(s) via typing, while still allowing selection through the calendar and clearing via the clear icon.

```html
<igc-date-range-picker use-two-inputs="true" non-editable="true">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker useTwoInputs nonEditable/>
```

### Popup modes 

By default, when clicked, the `DateRangePicker` opens its calendar pop-up in `dropdown` mode. Alternatively, the calendar can be opened in `dialog` mode by setting the `Mode` property to `dialog`.

```html
<igc-date-range-picker mode="dialog">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker mode='dialog'/>
```

### Keyboard Navigation

The `DateRangePicker` features intuitive keyboard navigation, allowing users to easily increment, decrement, or jump between different component parts, all without needing to use a mouse.

The available keyboard navigation options vary depending on whether the component is in single input or two inputs mode.

**Two Inputs Mode:** 

|Keys|Description|
|----|-----------|
| <kbd>&larr;</kbd> | Moves the caret one character to the left |
| <kbd>&rarr;</kbd> | Moves the caret one character to the right |
| <kbd>Ctrl + ArrowLeft</kbd> | Moves the caret to the beginning of the current input mask section or to the start of the previous one if it's already at the beginning |
| <kbd>Ctrl + ArrowRight</kbd> | Moves the caret to the end of the current input mask section or to the end of the next one if it's already at the end |
| <kbd>ArrowUp</kbd> | Increments the currently "focused" part of the input mask by one step |
| <kbd>ArrowDown</kbd> | Decrements the currently "focused" part of the input mask by one step |
| <kbd>Home</kbd> | Moves the caret to the beginning of the input mask |
| <kbd>End</kbd> | Moves the caret to the end of the input mask |
| <kbd>Ctrl + ;</kbd> | Sets the current date as the value of the component |

**Both Single and Two Inputs Modes:**

|Keys|Description|
|----|-----------|
| <kbd>Alt + ArrowDown</kbd> | Opens the calendar dropdown |
| <kbd>Alt + ArrowUp</kbd> | Closes the calendar dropdown |

You can also navigate within the calendar pop-up using the keyboard. The navigation is the same as in the `Calendar` component.

|Keys|Description|
|----|-----------|
| <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> / <kbd>&larr;</kbd> / <kbd>&rarr;</kbd>| Navigates through the days in the month |
| <kbd>ENTER</kbd> | Selects the currently focused day |
| <kbd>PageUp</kbd> | Moves to the previous month's view |
| <kbd>PageDown</kbd> | Moves to the next month's view |
| <kbd>SHIFT + PageUp</kbd> | Moves to the previous year |
| <kbd>SHIFT + PageDown</kbd> | Moves to the next year |
| <kbd>Home</kbd> | Focuses the first day of the current month that is in view (or earliest month when more than one month view is displayed) |
| <kbd>End</kbd> | Focuses the last day of the current month that is in view. (or latest month when more than one month view is displayed) |
| <kbd>Escape</kbd> | Closes the calender pop-up |

## Layout

### Label

You can define a label for the `DateRangePicker` component using the `Label` property when it is in single input mode. In two inputs mode, you can use the `LabelStart` and `LabelEnd` properties to define labels for the start and end date input fields, respectively.

```html
<igc-date-range-picker label="Date Range">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker label='Date Range'/>
```

```html
<igc-date-range-picker use-two-inputs="true" label-start="Start Date" label-end="End Date">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker useTwoInputs labelStart='Start Date' labelEnd='End Date'/>
```

### Format

You also have the option to customize the date format displayed in the input fields. There are three properties available for this purpose: `Locale`, `InputFormat`, and `DisplayFormat`.

The `Locale` property allows you to set the desired locale identifier, which determines how the date is formatted based on regional conventions.
For example, to display the date in a Japanese format, you can set the locale property like this:

```html
<igc-date-range-picker locale="ja-JP">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker locale='ja-JP'/>
```

If you want to manually define the date format, you can use the `InputFormat` property by passing a custom format string:

```html
<igc-date-range-picker input-format="dd/MM/yy">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker inputFormat='dd/MM/yy'/>
```

The `DisplayFormat` property also accepts a custom format string, but it only applies when the input field is idle (i.e., not focused). When the field is focused, the format reverts to the default or to the one defined by `InputFormat`, if both properties are used together:

```html
<igc-date-range-picker input-format="dd/MM/yy" display-format="yy/MM/dd">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker inputFormat='dd/MM/yy' displayFormat='yy/MM/dd'/>
```

### Calendar Layout and Formatting

You can further customize the pop-up calendar using various properties:

|Name|Type|Description|
|--|--|--|
| `Orientation` | 'vertical' or 'horizontal' | Allows you to set whether the calendar should be displayed vertically or horizontally. |
| `VisibleMonths` | string | Controls how many months are visible at a time, with a value of either 1 or 2. |
| `ShowWeekNumbers` | string | Enables or disables the week number column in the calendar. |
| `Open` | boolean | Determines whether the calendar picker is open. |
| `KeepOpenOnSelect` | boolean | Keeps the calendar picker open after a date selection. |
| `KeepOpenOnOutsideClick` | boolean | Keeps the calendar picker open when clicking outside of it. |
| `WeekStart` | string | Sets the start day of the week. |
| `HideOutsideDays` | boolean | Hides days that fall outside the current month view. |
| `HideHeader` | boolean | Hides the calendar header (applicable only in dialog mode). |
| `HeaderOrientation` | 'vertical' or 'horizontal' | Aligns the calendar header vertically or horizontally (dialog mode only). |
| `ActiveDate` | Date | Sets the date that is initially highlighted in the calendar. If not set, the current date becomes the active date. |

```html
<igc-date-range-picker orientation="vertical" visible-months="1" show-week-numbers="true">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker orientation='vertical' visibleMonths={1} showWeekNumbers/>
```

### Min & Max

You can also set the `Min` and `Max` properties to restrict user input by disabling calendar dates outside the defined range. These properties act as validators, so even if the user manually types a date outside the range, the `DateRangePicker` will become invalid.

```html
<igc-date-range-picker min="2025-05-06" max="2025-05-10">
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker min={new Date('2025-05-06')} max={new Date('2025-05-10')}/>
```

### Custom & Predefined Date Ranges 

You can also add custom date range chips to the calendar pop-up for faster range selection using the `CustomRanges` property. For example, you can create a custom date range chip to quickly select the range for the upcoming 7 days, ending with the current date. In addition, by setting the `UsePredefinedRanges` property, a set of predefined ranges chips will be displayed along with the custom ones.

```ts
const today = new Date();

const nextSeven = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7 
);
const nextWeek: CustomDateRange[] = [
  {
    label: 'Next 7 days',
    dateRange: {
      start: today,
      end: nextSeven
    }
  }
]

const dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;
dateRange.customRanges = nextWeek;
dateRange.usePredefinedRanges = true;
```

```tsx
const today = new Date();
const nextSeven = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7
);
const nextWeek: CustomDateRange[] = [
  {
    label: "Next 7 days",
    dateRange: {
      start: today,
      end: nextSeven
    }
  }
];

return (
  <IgrDateRangePicker usePredefinedRanges customRanges={nextWeek} />
);
```

Now, when you click the newly created `"Next 7 days"` chip in the calendar pop-up, the range will automatically be selected, from today through the next 7 days.

`sample="/scheduling/date-range-picker/custom-ranges", height="500", alt="{Platform} Date Range Picker Custom Ranges Example"`

### Disabled & Special dates

You also have the ability to set disabled dates in the calendar to narrow the range of dates the user can choose from. To set the disabled dates, you can use the `DisabledDates` property.

```ts
let dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;

const minDate = new Date(2025, 4, 1);
const maxDate = new Date(2025, 4, 31);

dateRange.disabledDates = [
  {
    type: DateRangeType.Between,
    dateRange: [minDate, maxDate]
  }
] as DateRangeDescriptor[];
```

```tsx
const dateRangeRef = useRef<IgrDateRangePicker>();
const minDate = new Date(2025, 4, 5);
const maxDate = new Date(2025, 4, 15);
useEffect (() => {
  dateRangeRef.current.disabledDates = [
    {
      type: DateRangeType.Between,
      dateRange: [minDate, maxDate]
    }
  ] as DateRangeDescriptor[];
}, [])

return (
  <IgrDateRangePicker ref={dateRangeRef} />
);
```

<!-- WebComponents -->

You can see more information about all the possibilities that the `DisabledDates` property offers here: [Disabled dates](./calendar.md#disabled-dates)

You can also do the same if you want to set one or more special dates in the calendar; the only difference is that you need to use the `SpecialDates` property instead. [Special dates](./calendar.md#special-dates)

<!-- end: WebComponents -->

### Forms

The `DateRangePicker` component can also be used seamlessly with the HTML form element. The `Min`, `Max`, and `Required` properties act as form validators.

`sample="/scheduling/date-range-picker/form", height="500", alt="{Platform} Date Range Picker Form Example"`

## Additional configuration

### Properties

In addition to the properties we've already covered, the `DateRangePicker` component offers a variety of additional properties that allow you to further configure its behavior.

|Name|Type|Description|
|--|--|--|
| `Disabled` | boolean | Disables the component. |
| `NonEditable` | boolean |	Disables typing in the input field(s). |
| `Placeholder` | string | Placeholder text for the single input mode. |
| `PlaceholderStart` | string | Placeholder text for the start date input (two inputs mode). |
| `PlaceholderEnd` | string | Placeholder text for the end date input (two inputs mode). |
| `Outlined` | boolean | Determines whether the input part will have outline appearance in the [Material theme](../themes/overview.md). |
| `Prompt` | string | The prompt character used for unfilled parts of the input(s) mask. |
| `ResourceStrings` | IgcDateRangePickerResourceStrings | Resource strings for localization of the date-range picker and the calendar. |

### Slots

You also have the ability to add custom content and modify the appearance of the `DateRangePicker` component using the available slots. 

The `prefix` and `suffix` slots allow you to insert custom content before or after the input field (only available in single input mode):

```html
<igc-date-range-picker>
  <igc-icon slot="prefix" name="down_arrow_icon"></igc-icon>
  <igc-icon slot="suffix" name="upload_icon"></igc-icon>
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker>
  <IgrIcon slot='prefix' name='down_arrow_icon'></IgrIcon>
  <IgrIcon slot='suffix' name='upload_icon'></IgrIcon>
</IgrDateRangePicker>
```

In two inputs mode, you can use the `prefix-start`, `prefix-end`, `suffix-start`, and `suffix-end` slots instead to target the individual inputs.

Another set of useful slots are `clear-icon` and `calendar-icon`, which allow you to customize the icons for the clear and calendar buttons in the input fields:

```html
<igc-date-range-picker>
  <igc-icon slot="clear-icon" name="apps_icon"></igc-icon>
  <igc-icon slot="calendar-icon" name="bin_icon"></igc-icon>
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker>
  <IgrIcon slot="clear-icon" name="apps_icon"></IgrIcon>
  <IgrIcon slot="calendar-icon" name="bin_icon"></IgrIcon>
</IgrDateRangePicker>
```

In two inputs mode, you can also customize the default “to” text between the fields by using the `separator` slot:

```html
<igc-date-range-picker use-two-inputs="true">
  <span slot="separator">till</span>
</igc-date-range-picker>
```

```tsx
<IgrDateRangePicker useTwoInputs>
  <span slot='separator'>till</span>
</IgrDateRangePicker>
```

The `actions` slot allows you to insert a custom action button with your own logic. For example, the button below toggles week numbers column in the calendar:

```html
<igc-date-range-picker id="DateRange">
  <igc-button slot="actions" onclick="DateRange.showWeekNumbers = true">Toggle Week Numbers</igc-button>
</igc-date-range-picker>
```

```tsx
const dateRangeRef = useRef<IgrDateRangePicker>();
const toggleWeekNumbers = () => {
  dateRangeRef.current.showWeekNumbers = !dateRangeRef.current.showWeekNumbers;
};

return (
  <IgrDateRangePicker ref={dateRangeRef}>
    <IgrButton slot="actions" onClick={toggleWeekNumbers}>Toggle Week Numbers</IgrButton>
  </IgrDateRangePicker>
);
```

In addition to the slots we've already covered, the following slots are also available in the `DateRangePicker` component:

|Name|Description|
|--|--|
| `title` | Renders content for the calendar title. Applicable only in dialog mode. |
| `helper-text` | Renders content below the input field(s). |
| `header-date` | Replaces the default current date/range text in the calendar header. Applicable only in dialog mode. |
| `clear-icon-start` | Custom clear icon for the start input (two inputs mode). |
| `clear-icon-end` | Custom clear icon for the end input (two inputs mode). |
| `calendar-icon-start` | Custom calendar icon for the start input (two inputs mode). |
| `calendar-icon-end` | Custom calendar icon for the end input (two inputs mode). |
| `calendar-icon-open` | Icon or content shown when the picker is open (applies to both inputs in two inputs mode). |
| `calendar-icon-open-start` | Icon or content for the open state of the start input (two inputs mode).|
| `calendar-icon-open-end` | Icon or content for the open state of the end input (two inputs mode). |

`sample="/scheduling/date-range-picker/slots", height="500", alt="{Platform} Date Range Picker Slots Example"`

### Methods

In addition to the properties and slots, the `DateRangePicker` also exposes few methods that you can use:

|Name|Description|
|--|--|
| `Show` | Displays the calendar picker component. |
| `Hide` | Hides the calendar picker component. |
| `Toggle` | Toggles the calendar picker between the shown and hidden states. |
| `Clear` | Clears the input fields, removing any user input. |
| `Select` | Selects a date range value in the picker. |
| `SetCustomValidity` | Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid. |

## Styling

Since the `DateRangePicker` component uses the `Calendar` component, it also inherits the Calendar's CSS parts, allowing you to style both components seamlessly. You can find the full list of exposed Calendar CSS parts here: [Calendar Styling](calendar.md#styling). In addition to the Calendar's CSS parts, the `DateRangePicker` also exposes some unique CSS parts that you can use to customize its appearance:

|Name|Description|
|--|--|
| `separator` | The separator element between the two inputs. |
| `ranges` | The wrapper that renders the custom and predefined ranges. |
| `label` | The label wrapper that renders content above the target input. |
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `calendar-icon` | The calendar icon wrapper for the closed state. |
| `calendar-icon-start` | The calendar icon wrapper for the closed state of the start input (two inputs). |
| `calendar-icon-end` | The calendar icon wrapper for the closed state of the end input (two inputs). |
| `calendar-icon-open` | The calendar icon wrapper for the open state. |
| `calendar-icon-open-start` | The calendar icon wrapper for the open state of the start input (two inputs). |
| `calendar-icon-open-end` | The calendar icon wrapper for the open state of the end input (two inputs). |
| `clear-icon` | The clear icon wrapper (single input). |
| `clear-icon-start` | The clear icon wrapper for the start input (two inputs). |
| `clear-icon-end` | The clear icon wrapper for the end input (two inputs). |
| `actions` | The actions wrapper. |
| `helper-text` | The helper-text wrapper that renders content below the target input. |

```css
igc-date-range-picker::part(label) {
  color: var(--ig-gray-600);
}

igc-date-range-picker::part(calendar-icon-start),
igc-date-range-picker::part(calendar-icon-end) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-date-range-picker::part(calendar-icon-open-start),
igc-date-range-picker::part(calendar-icon-open-end) {
  background-color: var(--ig-primary-700);
  color: var(--ig-primary-700-contrast);
}

igc-date-range-picker::part(clear-icon-start),
igc-date-range-picker::part(clear-icon-end) {
  background-color: var(--ig-error-500);
  color: var(--ig-error-500-contrast);
}
```

`sample="/scheduling/date-range-picker/styling", height="500", alt="{Platform} Date Range Picker Styling Example"`

## API References

 - `Input`
 - `Calendar`
 - `DatePicker`
 - `DateTimeInput`
 - `Dialog`
 - [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})