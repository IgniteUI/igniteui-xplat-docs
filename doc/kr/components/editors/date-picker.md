---
title: $Platform$ Date Picker | Data Visualization Tools | Infragistics
_description: Infragistics' $Platform$ date picker component helps your users select dates. Improve your graphs and visualization with Ignite UI for  $Platform$!
_keywords: $Platform$ date picker, drop down, $ProductName$, Infragistics
_language: kr
mentionedTypes: ['DatePicker']
---
# $Platform$ Date Picker Overview

The Date Picker component allows users to use a drop-down calendar UI allowing the intuitive selection of a day, month and year. This can be helpful when an application user needs to select specific dates, and multiple editors can be combined to create a date-range UI.

## $Platform$ Date Picker Example


<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-overview"
           alt="$Platform$ Date Picker Example"
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
IgbDatePickerModule.Register(IgniteUIBlazor);
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

The $Platform$ Date Picker editor component consists of three default parts - the text area, a calendar drop-down button, and a clear button. These areas are described below:

- Text Area: This displays the selected date, stored in the `Value` property of the editor.

- Calendar: Clicking the calendar button will open the calendar drop-down of the Date Picker. The calendar will open to show the month of the currently selected `Value`, if there is one. If a `Value` is not specified, the calendar will show the month corresponding to the current date. The month at the top can be clicked to show a list of months, and the same applies for the year. There are also arrow buttons to the left and right of the month and year visualization that will increment and decrement the shown month chronologically.

- Clear Button: The 'x' icon will clear the current value.

Property | Type | Description
---------|------|------------
`IconColor` | string | Changes the color of the calendar button.
`AllowTextInput`  |  bool   |  The date picker's value can be typed-in and modified by toggling this property to true.
`DateFormat` | enum | Defaults to DateShort e.g. 'mm/dd/yyyy'. When set to DateLong, the date displayed in the editor will appear as e.g. Wednesday, April 14, 2021.
`FirstDayOfWeek` | enum | Defaults to Sunday. A given day of the week will be used as the first day in each weekly row of the calendar. e.g. Monday through Sunday.
`FormatString` | string  | When DateShort is used, the date's format can be configured e.g. 'dd/mm/yyyy'. Note, if the `DateFormat`'s DateLong and `FormatString` are set then the `DateFormat` is ignored.
`Label`  |  string | Displays custom text above the date in the top-left corner of the Date Picker.
`MinDate` | DateTime | Restricts earlier dates from being selected or viewed.
`MaxDate` | DateTime | Restricts later dates from being selected or viewed.
`Placeholder` | string  |  A custom string to be displayed when the value within the edit portion of the calendar is cleared.
`ShowClearButton` | bool  |  Defaults to true, the clear button is directly to the left of the calendar button, visualized by an X. When clicked, it will clear the `Value` of the Date Picker. The clear button's visibility can be toggled on and off.
`ShowTodayButton`| bool  |  The today is directly below the dates when the calendar is opened. When clicked, it will select the current date. The today button's visibility can be toggled on and off.
`ShowWeekNumbers` | bool | Week numbers can be displayed as a number, at the left of every row of dates, in the drop down portion of the date picker. The week number's visibility can be toggled on and off.
`FirstWeekOfYear` | enum | Configures the start of the week numbers for the entire year. Can be set to FirstDay, FirstFourDayWeek, FirstFullWeek.
`OpenOnFocus` | bool | By default, the dropdown portion of the Date Picker is opened on single click, forcing the user to click the calendar button to drop down the calendar.
`Value` | date | Sets the value of the Date Picker and selects it in the dropdown calendar.

Users can also customize the Date Picker's font by using the various text properties of the control. They are: `TextColor`, `TextFontFamily`, `TextFontSize`, `TextFontStyle`, and `TextFontWeight`.

### Editing

The following example demonstrates how to enable editing in the `DatePicker`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-editing"
           alt="$Platform$ Date Picker Editing Example"
           github-src="editors/date-picker/editing">
</code-view>

<div class="divider--half"></div>

### Date Limits

The following example demonstrates how to restrict selected dates in the `DatePicker`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-date-limits"
           alt="$Platform$ Date Picker Date Limits Example"
           github-src="editors/date-picker/date-limits">
</code-view>

<div class="divider--half"></div>

### Date Formats

The following example demonstrates how apply a long date in the `DatePicker`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-format"
           alt="$Platform$ Date Picker Format Example"
           github-src="editors/date-picker/format">
</code-view>

<div class="divider--half"></div>

### Date Ranges

The following example demonstrates how combine multiple `DatePicker` controls.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-range"
           alt="$Platform$ Date Picker Date Range Example"
           github-src="editors/date-picker/range">
</code-view>

<div class="divider--half"></div>

## API Members

The following is a list of API members mentioned in the above sections:

- `DatePicker`
- `IconColor`
- `AllowTextInput`
- `DateFormat`
- `FirstDayOfWeek`
- `FormatString`
- `Label`
- `MinDate`
- `MaxDate`
- `Placeholder`
- `ShowClearButton`
- `ShowTodayButton`
- `ShowWeekNumbers`
- `FirstWeekOfYear`
- `OpenOnFocus`
- `Value`
- `TextColor`
- `TextFontFamily`
- `TextFontSize`
- `TextFontStyle`
- `TextFontWeight`
