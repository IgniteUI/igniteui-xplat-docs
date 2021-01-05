---
title: $PlatformShort$ Date Picker | Data Visualization Tools | Infragistics
_description: Infragistics' $PlatformShort$ date picker component helps your users select dates. Improve your graphs and visualization with Ignite UI for  $PlatformShort$!
_keywords: $PlatformShort$ date picker, drop down, $ProductName$, Infragistics
mentionedTypes: ['DatePicker']
---
# $PlatformShort$ Date Picker Overview

The Date Picker component allows users to use a drop-down calendar UI allowing the intuitive selection of a day, month and year. This can be helpful when an application user needs to select specific dates, and multiple editors can be combined to create a date-range UI.

## $PlatformShort$ Date Picker Overview Example

<div class="sample-container loading" style="height: 250px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/date-picker-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Date Picker Overview Example"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="editors/date-picker/overview"></sample-button>

</div>

## Usage

The $PlatformShort$ Date Picker editor component consists of three default parts - the text area, a calendar drop-down button, and a clear button. These areas are described below:

- Text Area: This displays the selected date, stored in the `Value` property of the editor.

- Calendar: Clicking the calendar button will open the calendar drop-down of the Date Picker. The calendar will open to show the month of the currently selected `Value`, if there is one. If a `Value` is not specified, the calendar will show the month corresponding to the current date. The month at the top can be clicked to show a list of months, and the same applies for the year. There are also arrow buttons to the left and right of the month and year visualization that will increment and decrement the shown month chronologically. You can change the color of the calendar button by setting the `IconColor` property of the control.

- Clear Button: The clear button is directly to the left of the calendar button, visualized by an X. When clicked, it will clear the `Value` of the Date Picker. The clear button's visibility can be toggled on and off by setting the `ShowClearButton` property of the Date Picker.

Users can also customize the Date Picker's font by using the various text properties of the control. They are: `TextColor`, `TextFontFamily`, `TextFontSize`, `TextFontStyle`, and `TextFontWeight`.

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

## Code Snippet

The following code demonstrates how add and set the value of the `DatePicker` component:

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

