---
title: {Platform} Calendar Component - {ProductName}
_description: With {Platform} Calendar Component, users can create intuitive calendars for applications to display date information using three different selection modes. Try it Now
_keywords: {Platform} Calendar, {ProductName}, Infragistics
mentionedTypes: ["Calendar", "DateRangeType", "DateRangeDescriptor"]
---

# {Platform} Calendar Overview

The {ProductName} Calendar component is lightweight and easy to configure. It is used for showing dates and weekdays. It is also the best way for providing monthly or yearly views to end-users. The {ProductName} Calendar control lets you restrict the minimum and maximum date ranges that people can navigate through.

The Ignite UI for {ProductName} Calendar provides an easy and intuitive way for displaying date information. It packs different features like single or multiple date selection modes, highlight and select date range, keyboard navigation, enabling week numbers, size and spacing options, and more.

## {Platform} Calendar Example

The following {Platform} `Calendar` component example shows a basic calendar with a single day selection mode. See how it works or inspect the code behind.

<div class="divider--half"></div>

`sample="/scheduling/calendar/overview", height="480", alt="{Platform} Calendar Example"`

## How To Create a Calendar in {Platform} with {ProductNameShort}

<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the {ProductName} `Calendar` and its necessary CSS, like so:

```tsx
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

Before using the `Calendar`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCalendarModule));
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the {ProductName} `Calendar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcCalendarComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

The simplest way to start using the {ProductName} `Calendar` is as follows:

```html
<igc-calendar></igc-calendar>
```

```razor
<IgbCalendar />
```

```tsx
<IgrCalendar />
```

### Selection Modes

Users can choose from three different selection modes - single selection, multiple selection or range selection. By default, the {ProductName} `Calendar` is using single selection mode but you can change it by setting the `Selection` property as shown in this example.

```html
<igc-calendar selection="multiple"></igc-calendar>
```

```razor
<IgbCalendar Selection="@CalendarSelection.Multiple" />
```

```tsx
<IgrCalendar selection="multiple" />
```

`sample="/scheduling/calendar/multiple-selection", height="370", alt="{Platform} Calendar Multiple Selection Example"`



### Range Selection

Following the same approach, we can switch `Selection` to range mode:

```html
<!-- Range selection mode -->
<igc-calendar selection="range"></igc-calendar>
```

```razor
<IgbCalendar Selection="@CalendarSelection.Range" />
```

```tsx
<IgrCalendar selection="range" />
```

`sample="/scheduling/calendar/range-selection", height="480", alt="{Platform} Calendar Range Selection Example"`



### Active View and Date

The {ProductName} Calendar component allows you to switch between three different views: days, months and years. The `ActiveView` property of the component reflects the current view. By default, the Calendar displays the current date when loaded initially. You could modify this by setting the `ActiveDate` property. The `ActiveDate` property also reflects the changes of the currently visible date made by the end user.

<!-- WebComponents -->

### Header Options

By default, the {ProductName} Calendar component renders a header area which contains information about the selected dates. You could hide the header by setting the `HasHeader` property to **false**. You could also configure `vertical` or `horizontal` orientation of the header using the `HeaderOrientation` property.

> [!Note]
> Please note that the {ProductName} Calendar header is not rendered when the `Selection` is set to multiple.

> [!Note]
> Please note that the {ProductName} Calendar DOM properties use `camelCase` naming while their corresponding HTML attributes are using `kebab-case`. For example the `HeaderOrientation` property corresponds to the `header-orientation` attribute.

The {ProductName} Calendar component exposes a `title` slot which allows you to customize the title of the header.

```html
<igc-calendar selection="range" header-orientation="vertical">
    <span slot="title">Trip dates</span>
</igc-calendar>
```

The following sample demonstrates the above configuration:

`sample="/scheduling/calendar/header", height="370", alt="{Platform} Calendar Header Example"`



<!-- end: WebComponents -->

<!-- WebComponents -->

### Localization and Formatting

Due to their very nature, localization and formatting are essential to any calendar. In the {ProductName} `Calendar` those are controlled and customized through the following properties - `Locale`, `FormatOptions`, `WeekStart`.

Let's go ahead and try those along with other customizations. First thing we need to set is the `WeekStart`, which controls the starting day of the week. It defaults to `Sunday`, so we will set it to `Monday`. We will also customize the `FormatOptions` property which specifies the options used to format the months and the weekdays in the Calendar views. Finally, we will set the `Locale` property to a value, based on the user's location choice:

```html
<igc-radio-group alignment="horizontal">
    <igc-radio name="locale" value="en" checked>EN</igc-radio>
    <igc-radio name="locale" value="de">DE</igc-radio>
    <igc-radio name="locale" value="fr">FR</igc-radio>
    <igc-radio name="locale" value="ar">AR</igc-radio>
    <igc-radio name="locale" value="ja">JA</igc-radio>
</igc-radio-group>

<igc-calendar
    id="calendar1"
    week-start="monday"
>
</igc-calendar>
```

```ts
this.calendar = document.getElementById('calendar1') as IgcCalendarComponent;
this.calendar.formatOptions = {
    month: 'short',
    weekday: 'short'
};

this.radios = document.querySelectorAll('igc-radio') as NodeListOf<IgcRadioComponent>;
this.radios.forEach(radio => {
    radio.addEventListener('igcChange', () => {
        if (radio.checked) {
            this.calendar.locale = radio.value;
        }
    });
})
```

If everything went well, we should now have a Calendar with customized display, that also changes the locale representation, based on the user selection. Let's have a look at it:

`sample="/scheduling/calendar/formatting", height="520", alt="{Platform} Calendar Formatting Example"`



<!-- end: WebComponents -->

<!-- WebComponents -->

### Disabled dates

In some cases you would want to have disabled dates in the Calendar which can't be selected by the end user. This functionality is achieved by using the `DisabledDates` property. The `DisabledDates` property is an array of `DateRangeDescriptor` objects. Each descriptor has a `Type` and optionally a `DateRange` which is an array of `Date` objects.

These are the available options for the `Type` property:
*  `After` - disables the dates after the first date in the `DateRange`
*  `Before` - disables the dates before the first date in the `DateRange`
*  `Between` - disables the dates between the first and the second date in the `DateRange`
*  `Specific` - disables the dates specified in the `DateRange` array
*  `Weekdays` - disables all weekdays
*  `Weekends` - disables all weekends

Let's create a sample that is disabling the dates between the 3rd and the 8th of the current month:

```ts
const today = new Date(Date.now());
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: range }];
```

These configurations should have the following result:

`sample="/scheduling/calendar/disabled-dates", height="480", alt="{Platform} Calendar Disabled Dates Example"`



<!-- end: WebComponents -->

<!-- WebComponents -->

### Special dates

The `SpecialDates` property is using almost the same configuration principles as the `DisabledDates`. The special dates have a highlighted look and feel and unlike the disabled ones can be selected.

Let's add some special dates to our Calendar. In order to do this, we will create a `DateRangeDescriptor` and pass the dates between the 3rd and the 8th of the current month:

```ts
const today = new Date();
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.specialDates = [{ type: DateRangeType.Between, dateRange: range }];
```

The following demo illustrates a Calendar with a vacation request option:

`sample="/scheduling/calendar/special-dates", height="480", alt="{Platform} Calendar Special Dates Example"`



<!-- end: WebComponents -->

### Week numbers

You can use the `ShowWeekNumbers` property to show the week numbers of the Calendar component. You can do this by using its corresponding boolean attribute `show-week-numbers` like this:

```html
<igc-calendar show-week-numbers></igc-calendar>
```

```razor
<IgbCalendar ShowWeekNumbers="true" />
```

```tsx
<IgrCalendar showWeekNumbers={true} />
```

The following demo illustrates a Calendar with enabled week numbers:

`sample="/scheduling/calendar/week-numbers", height="480", alt="{Platform} Calendar Week Numbers Example"`



### Multiple Months

Using the `VisibleMonths` property, you can display more than one month when the Calendar is in `days` view. When multiple months are displayed, you can configure whether you want to stack them vertically or horizontally by using the `Orientation` property. By default, the `Orientation` property is set to `horizontal`.

The Calendar displays leading and trailing dates from the previous and the next months. You could hide these dates by setting the `HideOutsideDays` property to **true** or using its corresponding boolean attribute `HideOutsideDays`.

```html
<igc-calendar visible-months="2" hide-outside-days></igc-calendar>
```

```razor
<IgbCalendar VisibleMonths="2" HideOutsideDays="true" />
```

```tsx
<IgrCalendar visibleMonths={2} hideOutsideDays={true} />
```

The following sample demonstrates the multiple months configuration:

`sample="/scheduling/calendar/multiple-months", height="480", alt="{Platform} Calendar Multiple Months Example"`



### Size

You could control the size and spacing of the calendar inner elements using the `--ig-size` CSS variable. The default size of the component is large.

`sample="/scheduling/calendar/size", height="520", alt="{Platform} Calendar Size Example"`



### Events

The Calendar component emits the `Change` event when the selected dates are changed by the end user. You can subscribe to the event like this:

<!-- WebComponents -->

```ts
this.calendar.addEventListener('igcChange', ev => console.log(ev.detail));
```

<!-- end: WebComponents -->

```razor
<IgbCalendar Change="@OnCalendarChange" />

@code {
    public void OnCalendarChange(IgbComponentDataValueChangedEventArgs args)
    {

    }
}
```

```tsx
<IgrCalendar onChange={this.onCalendarChange} />

public onCalendarChange(e: IgrComponentDataValueChangedEventArgs) {

}
```

## Keyboard navigation

If you traverse the page using the <kbd>Tab</kbd> key you should keep in mind that based on [W3 accessability recommendations](https://www.w3.org/TR/wai-aria-practices/#layoutGrid) the `Calendar` introduces the following tab stops:
- Month selection button
- Year selection button
- Previous button
- Next button
- Active date element

When a **day/month/year** in the `Calendar` component is focused, use:
- <kbd>PageUp</kbd> key to move to the previous month/year/years page.
- <kbd>PageDown</kbd> key to move to the next month/year/years page.
- <kbd>Home</kbd> key to focus the first day of the current month/first month in view/first year in view.
- <kbd>End</kbd> key to focus the last day of the current month/last month in view/last year in view.
- <kbd>Arrow</kbd> keys to navigate through the days/months/years. Navigating before the first item and after the last item will switch the view to the next/previous month/year/years page.

When a **day** inside the `days` view is focused, use:
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> keys to move to the previous year.
- <kbd>Shift</kbd> + <kbd>PageDown</kbd> keys to move to the next year.
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to select the currently focused day.

When a **month** inside the `months` view is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to change the `ActiveDate` to the currently focused month and switch to `days` view.

When an **year** inside the `years` view is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to change the `ActiveDate` to the currently focused year and switch to `months` view.

When the **previous** or the **next** buttons (in the subheader) are focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to switch to the previous/next month/year/years page.

When the **month** button (in the subheader) is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to switch to `months` view.

When the **year** button (in the subheader) is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to switch to `years` view.

## Styling

The `Calendar` component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `header` | The header element. |
| `header-title` | The header title element. |
| `header-date` | The header date element. |
| `content` | The content element which contains the views and navigation elements. |
| `navigation` | The navigation container element. |
| `months-navigation` | The months navigation button element. |
| `years-navigation` | The years navigation button element. |
| `years-range` | The years range element. |
| `navigation-buttons` | The navigation buttons container. |
| `navigation-button` | Previous/next navigation button. |
| `days-view-container` | The days view container element. |
| `days-view` | Days view element. |
| `months-view` | The months view element. |
| `years-view` | The years view element. |
| `days-row` | Days row element. |
| `label` | Week header label element. |
| `week-number` | Week number element. |
| `week-number-inner` | Week number inner element. |
| `date` | Date element. |
| `date-inner` | Date inner element. |
| `first` | The first selected date element. |
| `last` | The last selected date element. |
| `inactive` | Inactive date element. |
| `hidden` | Hidden date element. |
| `weekend` | Weekend date element. |
| `range` | Range selected element. |
| `special` | Special date element. |
| `disabled` | Disabled date element. |
| `single` | Single selected date element. |
| `preview` | Range selection preview date element. |
| `month` | Month element. |
| `month-inner` | Month inner element. |
| `year` | Year element. |
| `year-inner` | Year inner element. |
| `selected` | Indicates selected state. Applies to date, month and year elements. |
| `current` | Indicates current state. Applies to date, month and year elements. |

Using these CSS parts we can customize thе appearance of the `Calendar` component like this:

```css
igc-calendar::part(date-inner selected),
igc-calendar::part(month-inner selected),
igc-calendar::part(year-inner selected),
igc-calendar::part(month-inner selected):focus,
igc-calendar::part(year-inner selected):focus {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
}

igc-calendar::part(date-inner selected):hover,
igc-calendar::part(month-inner selected):hover,
igc-calendar::part(year-inner selected):hover {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
}

igc-calendar::part(label),
igc-calendar::part(navigation-button),
igc-calendar::part(months-navigation):hover,
igc-calendar::part(months-navigation):focus,
igc-calendar::part(years-navigation):hover,
igc-calendar::part(years-navigation):focus {
  color: var(--ig-primary-300);
}

igc-calendar::part(navigation-button):hover,
igc-calendar::part(navigation-button):focus {
  color: var(--ig-primary-800);
}
```

The following sample demonstrates the above CSS configuration:

`sample="/scheduling/calendar/styling", height="480", alt="{Platform} Calendar Styling Example"`

## API References

- `Calendar`
- `Radio`
- `RadioGroup`
- `ActiveDate`
- `ActiveView`
- `DateRangeDescriptor`
- `DateRange`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})