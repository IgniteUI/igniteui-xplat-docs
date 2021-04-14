---
title: $PlatformShort$ Date Picker | Data Visualization Tools | Infragistics
_description: Infragistics' $PlatformShort$ date picker component helps your users select dates. Improve your graphs and visualization with Ignite UI for  $PlatformShort$!
_keywords: $PlatformShort$ date picker, drop down, $ProductName$, Infragistics
mentionedTypes: ['DatePicker']
---
# $PlatformShort$ Date Picker Overview

The Date Picker component allows users to use a drop-down calendar UI allowing the intuitive selection of a day, month and year. This can be helpful when an application user needs to select specific dates, and multiple editors can be combined to create a date-range UI.

## $PlatformShort$ Date Picker Example


<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-overview"
           alt="$PlatformShort$ Date Picker Example"
           github-src="editors/date-picker/overview">
</code-view>

<!-- React, WebComponents -->
## Dependencies
When installing the Date Picker component, the core and inputs packages must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageInputs}
</pre>
<!-- end: React, WebComponents -->

## Required Modules

The Date Picker component requires the following modules to be registered:

```razor
DatePickerModule.Register(IgniteUIBlazor);
```

```ts
import { IgrDatePickerModule } from 'igniteui-react-inputs';

IgrDatePickerModule.register();
```

```ts
import { IgcDatePickerModule } from 'igniteui-webcomponents-inputs';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcDatePickerModule);
```

<div class="divider--half"></div>

## Usage

The $PlatformShort$ Date Picker editor component consists of three default parts - the text area, a calendar drop-down button, and a clear button. These areas are described below:

- Text Area: This displays the selected date, stored in the `Value` property of the editor.

- Calendar: Clicking the calendar button will open the calendar drop-down of the Date Picker. The calendar will open to show the month of the currently selected `Value`, if there is one. If a `Value` is not specified, the calendar will show the month corresponding to the current date. The month at the top can be clicked to show a list of months, and the same applies for the year. There are also arrow buttons to the left and right of the month and year visualization that will increment and decrement the shown month chronologically.

- Clear Button: The 'x' icon will clear the current value.

Property | Type | Description
---------|------|------------
`IconColor` | string | Changes the color of the calendar button.
`AllowTextInput`  |  bool   |  The date picker's value can be typed-in and modified by toggling this property to true.
`DateFormat` | enum | Defaults to DateShort eg. 'mm/dd/yyyy'. When set to DateLong, the date displayed in the editor will appear as eg. Wednesday, April 14, 2021. 
`FirstDayOfWeek` | enum | Defaults to Sunday. A given day of the week will be used as the first day in each weekly row of the calendar. eg. Monday through Sunday.
`FormatString` | string  | When DateShort is used, the date's format can be configured eg. 'dd/mm/yyyy'. Note, if the `DateFormat`'s DateLong and `FormatString` are set then the `DateFormat` is ignored.
`Label`  |  string | Displays custom text above the date in the top-left corner of the Date Picker.
`MinDate` | DateTime | Restricts earlier dates from being selected or viewed.
`MaxDate` | DateTime | Restricts later dates from being selected or viewed.
`Placeholder` | string  |  A custom string to be displayed when the value within the edit portion of the calendar is cleared.
`ShowClearButton` | bool  |  Defaults to true, the clear button is directly to the left of the calendar button, visualized by an X. When clicked, it will clear the `Value` of the Date Picker. The clear button's visibility can be toggled on and off. 
`ShowTodayButton`| bool  |  The today is directly below the dates when the calendar is opened. When clicked, it will select the current date. The today button's visibility can be toggled on and off.
`ShowWeekNumbers` | bool | Week numbers can be displayed as a number, at the left of every row of dates, in the drop down portion of the date picker. The week number's visibility can be toggled on and off. 
`FirstWeekOfYear` | enum | Configures the start of the week numbers for the entire year. Can be set to FirstDay, FirstFourDayWeek, FirstFullWeek.
`OpenOnFocus` | bool | By default, the dropdown portion of the Date Picker is opened on single click, forcing the user to click the calendar button to drop down the calendar.

Users can also customize the Date Picker's font by using the various text properties of the control. They are: `TextColor`, `TextFontFamily`, `TextFontSize`, `TextFontStyle`, and `TextFontWeight`.

### Setting Initial Value

The following code demonstrates how to add and set the value of the `DatePicker` component:

```tsx
public render(): JSX.Element {
    return (
        <IgrDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
    );
}

public onDatePickerRef(datePicker: IgrDatePicker){
    datePicker.value = new Date(Date.now());
}
```

<!-- WebComponents -->
```html
<igc-date-picker id="datePicker" height="50px" width="220px">
</igc-date-picker>
```

```ts
constructor() {
    let datePicker = document.getElementById("datePicker") as IgcDatePickerComponent;
    this.datePicker.value = new Date(Date.now());
}
```
<!-- end:WebComponents -->

```razor
<DatePicker Height="50px" Width="220px" Value="@SelectedDate" />

@code {
    public DateTime SelectedDate { get; set; }

    protected override void OnInitialized()
    {
        DatePickerModule.Register(IgniteUIBlazor);
        this.SelectedDate = DateTime.Today;
    }
}
```

### Customization

The following code demonstrates how to customize the `DatePicker` component by setting the color of the icon and hiding the clear button:

```tsx
public render(): JSX.Element {
    return (
        <IgrDatePicker height="50px" width="220px" showClearButton={false} iconColor="red" />
    );
}
```

<!-- WebComponents -->
```html
  <igc-date-picker id="datePicker" height="50px" width="220px"
        show-clear-button="false"
        icon-color="red">
  </igc-date-picker>
```

<!-- end:WebComponents -->

```razor
<DatePicker Height="50px" Width="220px" IconColor="Red" ShowClearButton="false" />

@code {

    protected override void OnInitialized()
    {
        DatePickerModule.Register(IgniteUIBlazor);
    }
}
```
