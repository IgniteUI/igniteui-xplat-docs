---
title: {Platform} Date Picker Component - {ProductName}
_description: Infragistics' {Platform} Date Picker allows the user to select a date from a calendar and set it in an input element.
_keywords: {Platform} Date Picker, {ProductName}, Infragistics
_license: MIT
mentionedTypes: ["DatePicker"]
---

# {Platform} Date Picker Component Overview
The {ProductName} Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the Date Picker lets users navigate to a desired date with several view options – month, year, and decade. It also supports common validation properties such as minimum and maximum date constraints and required fields. 

The {ProductName} Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The {Platform} Date Picker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration. 

> [!NOTE]
> The `DatePicker` is a brand new component from {ProductName} version <!-- WebComponents -->5.0.0<!-- end: WebComponents --><!-- React -->18.7.0<!-- end: React -->. The old `DatePicker` prior to this version has been renamed to `XDatePicker` and its respective documentation page can be found under "Deprecated Components"

## {Platform} Date Picker Example

Below you can see a sample that demonstrates how the Date Picker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it. 

`sample="/scheduling/date-picker/overview", height="500", alt="{Platform} Date Picker Input Overview Example"`

## Getting Started with {Platform} Date Picker

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `DatePicker`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcDatePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDatePickerComponent);
```
<!-- end: WebComponents -->
<!-- React -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `DatePicker`, its necessary CSS, and register its module, like so:

```tsx
import { IgrDatePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->
<!-- Blazor -->
To get started with the `DatePicker` component, first we need to register its module as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDatePickerModule));
```

You will also need to link an additional CSS file to apply the styling to the `DatePicker` component. The following needs to be placed in the wwwroot/index.html file in a Blazor Web Assembly project or the Pages/_Host.cshtml file in a Blazor Server project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

## Using the {Platform} Date Picker Component

### Display Date Picker
To instantiate a `DatePicker` in its default `dropdown` state, use the following code:

```html
<igc-date-picker>
    <p slot="helper-text">Date</p>
</igc-date-picker>
```

```tsx
<IgrDatePicker></IgrDatePicker>
```

```razor
<IgbDatePicker @ref="DatePicker"></IgbDatePicker>
```

### Options
<!-- WebComponents -->
The `DatePicker` can be bound to a `date` or a `string`.
<!-- end: WebComponents -->
<!-- React, Blazor -->
The `DatePicker` can be bound to a `date`.
<!-- end: React, Blazor -->

<!-- WebComponents -->
```typescript
const DatePicker = document.querySelector('igc-date-picker') as IgcDatePickerComponent;
const date = new Date();

DatePicker.value = date;
```

<!-- end:WebComponents -->

```tsx
const date = new Date();

<IgrDatePicker value={date}/>
```
```Razor
<IgbDatePicker @ref="DatePicker" Value="@SelectedDate">
</IgbDatePicker>

@code {

    public DateTime SelectedDate { get; set; }
    public IgbDatePicker DatePicker { get; set; }

    protected override void OnInitialized()
    {
        this.SelectedDate = DateTime.Today;
    }
}
```
<!-- WebComponents -->
If a string is bound to the picker, it needs to be in the **ISO 8601** format:
```html
<igc-date-picker value="2000-01-01"></igc-date-picker>
```
<!-- end: WebComponents -->

### Projecting components
With prefix and suffix slots we can add different content before and after the main content of the Input.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="suffix" name="arrow_upward" collection="material" class="small" onclick="DatePicker.stepUp()"></igc-icon>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrIcon 
        slot="suffix" 
        name="arrow_upward" 
        collection="material" 
        class="small" 
        onClick={() => datePickerRef.current.stepUp(DatePart.Month)}>
    </IgrIcon>
</IgrDatePicker>
```
```razor
<IgbDatePicker @ref="DatePicker">
    <IgbIcon 
        Slot="suffix" 
        IconName="arrow_upward" 
        Collection="bootstrap" 
        Class="small" 
        @onclick="() => DatePicker.StepUp(DatePart.Month)">
    </IgbIcon>
</IgbDatePicker>
```
The above snippet will add an additional icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons
The calendar and clear icon could be templated by using the `calendar` and `clear` slots:

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="calendar" name="calendar" collection="material" class="small"></igc-icon>
    <igc-icon slot="clear" name="delete" collection="material" class="small"></igc-icon>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrIcon slot="calendar" name="calendar" collection="material" class="small"></IgrIcon>
    <IgrIcon slot="clear" name="delete" collection="material" class="small"></IgrIcon>
</IgrDatePicker>
```
```razor
<IgbDatePicker>
    <IgbIcon Slot="calendar" IconName="calendar" Collection="material" Class="small"></IgbIcon>
    <IgbIcon Slot="clear" IconName="delete" Collection="material" Class="small"></IgbIcon>
</IgbDatePicker>
```

#### Custom action buttons
The picker's action buttons can be templated using the `actions` slot:
```html
<igc-date-picker id="DatePicker">
    <igc-button slot="actions" onclick="DatePicker.showWeekNumbers = true">Show Week Numbers</igc-button>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrButton 
        slot='actions' 
        onClick={() => datePickerRef.current.showWeekNumbers = true}>
        <span>Show Week Numbers</span>
    </IgrButton>
</IgrDatePicker>
```
```razor
<IgbDatePicker>
    <IgbButton Slot="actions" @onclick="() => DatePicker.ShowWeekNumbers = true">Show Week Numbers</IgbButton>
</IgbDatePicker>
```

### Keyboard Navigation

The `DatePicker` has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Move one character to the beginning |
| <kbd>→</kbd> | Move one character to the end |
| <kbd>HOME</kbd> | Move to the beginning |
| <kbd>END</kbd> | Move to the end |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>←</kbd> | Move to the beginning of the date/time section - current one or left one |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>→</kbd> | Move to the end of the date/time section - current on or right one |
| Focus on a date/time part + <kbd>↓</kbd> | Decrements a date/time part |
| Focus on a date/time part + <kbd>↑</kbd> | Increments a date/time part |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>;</kbd> | Sets the current date/time as the value of the editor |
| <kbd>ESC</kbd> | Closes the calendar pop-up and focuses the input field |

## Examples

### Dialog Mode
The `DatePicker` also supports a `dialog` mode:
```html
<igc-date-picker id="DatePicker" mode="dialog">
</igc-date-picker>
```
```tsx
<IgrDatePicker mode="dialog"></IgrDatePicker>
```
```razor
<IgbDatePicker Mode="PickerMode.Dialog"></IgbDatePicker>
```
`sample="/scheduling/date-picker/dialog-mode", height="500", alt="{Platform} Date Picker Dialog Mode Example"`

### Display and input format
`InputFormat` and `DisplayFormat` are properties which can be set to make the picker's editor follow a specified format. The `InputFormat` is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the Date Picker Component will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

`DisplayFormat` is used to format the picker's input when it is not focused. If no `DisplayFormat` is provided, the picker will use the `InputFormat` as its `DisplayFormat`.

More information about these can be found in the `IgcDateTimeInput` format section.

`sample="/scheduling/date-picker/format", height="500", alt="{Platform} Date Picker Input Format Example"`

### Increment and decrement
The `DatePicker` exposes `StepUp` and `StepDown` methods. Both of which come from the `IgcDateTimeInput` and can be used for incrementing and decrementing a specific `DatePart` of the currently set date.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="prefix" name="arrow_upward" collection="material" onclick="DatePicker.stepUp()"></igc-icon>
    <igc-icon slot="suffix" name="arrow_downward" collection="material" onclick="DatePicker.stepDown()"></igc-icon>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrIcon 
        slot="prefix" 
        name="arrow_upward" 
        collection="material" 
        onClick={() => datePickerRef.current.stepUp(DatePart.Month)}>
    </IgrIcon>
    <IgrIcon 
        slot="suffix" 
        name="arrow_downward" 
        collection="material" 
        onClick={() => datePickerRef.current.stepDown(DatePart.Month)}>
    </IgrIcon>
</IgrDatePicker>
```
```razor
<IgbDatePicker @ref="DatePicker">
    <IgbIcon 
        Slot="prefix"
        IconName="arrow_upward"
        Collection="material"               
        @onclick="() => DatePicker.StepUp(DatePart.Month)">
    </IgbIcon>
    <IgbIcon 
        Slot="suffix"
        IconName="arrow_downward"
        Collection="material"
        @onclick="() => DatePicker.StepDown(DatePart.Month)">
    </IgbIcon>
</IgbDatePicker>
```
### In Forms
The `DatePicker` could be used in a form element, the component's `Min` and `Max` properties act as form validators.

<!-- WebComponents -->
In forms, we can handle the `igcChange` event of the component and update the value of the label.
<!-- end: WebComponents -->
<!-- React -->
In forms, we can handle the `change` event of the component and update the value of the label.
<!-- end: React -->
<!-- Blazor -->
In forms, we can handle the `Change` event of the component and update the value of the label.
<!-- end: Blazor -->

`sample="/scheduling/date-picker/form", height="500", alt="{Platform} Date Picker Input Form Example"`

### Calendar Specific settings
The `DatePicker` can modify some of the calendar's settings via the properties that the Date Picker exposes. Some of these include `VisibleMonths` which allows more than one calendar to be displayed when the picker expands, `WeekStart` which determines the starting day of the week, `ShowWeekNumbers` which shows the number for each week in the year and more.

## Internationalization

The localization of the `DatePicker` can be controlled through its `Locale` input. 

Here is how a `DatePicker` with Japanese locale definition would look like:
```html
<igc-date-picker locale="ja-JP">
</igc-date-picker>
```
```tsx
<IgrDatePicker locale="ja-JP"></IgrDatePicker>
```
```razor
<IgbDatePicker Locale="ja-JP"></IgbDatePicker>
```

## Styling
The `DatePicker` component derives from the `Input` and `Calendar` component, so it exposes all available CSS parts. See [Input Styling](../inputs/input.md#styling) and [Calendar Styling](calendar.md#styling) for reference.

```css
igc-date-picker::part(header) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
igc-date-picker::part(calendar-content) {
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(date-inner current) {
  color: var(--ig-info-300);
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(navigation-button):hover,
igc-date-picker::part(months-navigation):hover,
igc-date-picker::part(years-navigation):hover {
  color: var(--ig-secondary-500);
}
igc-date-picker::part(month-inner current),
igc-date-picker::part(year-inner current),
igc-date-picker::part(navigation-button),
igc-date-picker::part(months-navigation),
igc-date-picker::part(years-navigation) {
  color: var(--ig-info-300);
}
igc-date-picker::part(date-inner selected),
igc-date-picker::part(month-inner selected),
igc-date-picker::part(year-inner selected) {
  color: var(--ig-secondary-500-contrast);
  background-color: var(--ig-secondary-500);
}
```

`sample="/scheduling/date-picker/styling", height="500", alt="{Platform} Date Picker Input Styling Example"`

## API References

 - `Input`
 - `Calendar`
 - `DatePicker`
 - [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})