---
title: Column Data Types in {Platform} for {ProductName}
_description: Handle cell and editing templates in {Platform} by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Column Types Overview

{ProductName} `{ComponentName}` provides a default handling of *number*, *string*, *date*, *boolean*, *currency* and *percent* column data types, based on which the appearance of the default and editing templates will be present.

<!-- ComponentStart: Grid -->

## {Platform} {ComponentTitle} Column Types Example

`sample="/{ComponentSample}/column-data-types", height="550", alt="{Platform} {ComponentTitle} column data types"`


<!-- ComponentEnd: Grid -->

## {Platform} {ComponentTitle} Default Template

If you want to enable a data type-specific template, you should set the column `DataType` input, otherwise the column will be treated as a string column since that is the default value for column `DataType`.

The following sections describe the default templates for each `DataType`.

### String

This column `DataType` is not changing the appearance or format of the cell value.

### Number

If the `DataType` is set to *number*, the cell value will be formatted based on application or grid's `Locale` settings, as well as when `PipeArgs` property is specified. Then the number format will be changed based on them, for example it might change the:

 - Number of digits after the decimal point
 - Decimal separator with `,` or `.`

<!-- Angular -->

```ts
public options = {
  digitsInfo: '1.4-4',
};
public formatOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column [pipeArgs]="formatOptions" [dataType]="'number'">
</igx-column>
```

```razor
<IgbColumn Field="Sales" DataType="GridColumnDataType.Number" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs() { DigitsInfo = "1.4-4" };
}
```

```html
<igc-column id="column" data-type="Number">
</igc-column>
```

```ts
private _formatOptions: any | null = null;
    public get formatOptions(): any {
        if (this._formatOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "1.4-4";
            this._formatOptions = columnPipeArgs;
        }
        return this._formatOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;

    this._bind = () => {
        column.pipeArgs = this.formatOptions;
    }
    this._bind();
}
```

### DateTime, Date and Time

The appearance of the date portions will be set (e.g. day, month, year) based on `Locale` format or `PipeArgs` input. The pipe arguments can be used to specify a custom date format or timezone:
 - **format** - The default value for formatting the date is `'mediumDate'`. Other available options are `'short'`, `'long'`, `'shortDate'`, `'fullDate'`, `'longTime'`, `'fullTime'` and etc.
 - **timezone** - The user's local system timezone is the default value. The timezone offset or standard GMT/UTC or continental US timezone abbreviation can also be passed. Different timezone examples which will display the corresponding time of the location anywhere in the world:

<!-- Angular -->

```ts
public formatDateOptions = {
    /** The date/time components that a date column will display, using predefined options or a custom format string. */
    /** e.g 'dd/mm/yyyy' or 'shortDate' **/
    format: 'longDate',
    /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
    timezone: 'GMT'
};
public formatOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column [pipeArgs]="formatDateOptions" [dataType]="'date'">
</igx-column>
```

```razor
<IgbColumn Field="Date" DataType="GridColumnDataType.Date" PipeArgs=formatDateOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatDateOptions = new IgbColumnPipeArgs()
    {
        /** The date/time components that a date column will display, using predefined options or a custom format string. */
        /** e.g 'dd/mm/yyyy' or 'shortDate' **/
        Format = "longDate",
        /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
        Timezone = "GMT"
    };
}
```

```html
<igc-column id="column" data-type="Date">
</igc-column>
```

```ts
private _formatDateOptions: any | null = null;
    public get formatDateOptions(): any {
        if (this._formatDateOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "1.4-4";
            columnPipeArgs.format: 'longDate';
            columnPipeArgs.timezone: 'GMT';
            this._formatDateOptions = columnPipeArgs;
        }
        return this._formatDateOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;

    this._bind = () => {
        column.pipeArgs = this.formatDateOptions;
    }
    this._bind();
}
```

Available timezones:

| Timezone                  | Value                     |
|---------------------------| ------------------------- |
| Alpha Time Zone           |‘UTC+1’                    |
| Australian Central Time   |‘UTC+9:30/ +10:30’         |
| Arabia Standard Time      |‘UTC+3’                    |
| Central Standard Time     |‘UTC-6’                    |
| China Standard Time       |‘UTC+8’                    |
| Delta Time Zone           |‘UTC+4’                    |
| Greenwich Mean Time       |‘UTC+0’                    |
| Gulf Standard Time        |‘UTC+4’                    |
| Hawaii Standard Time      |‘UTC-10’                   |
| India Standard Time       |‘UTC+4’                    |


The `{ComponentName}` accepts date values of type *Date object*, *Number (milliseconds)*, *An ISO date-time string*. This section shows [how to configure a custom display format](../data-grid.md#custom-display-format).

As you can see in the sample, we specify a different format options in order to showcase the available formats for the specific column type. For example, below you can find the format options for the *time* portion of the date object:

```ts
// Time format with equivalent example
public timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
```

```razor
// Time format with equivalent example
@code {
    public Dictionary<string, string> timeFormats = new() {
        { "shortTime", "h:mm a" },
        { "mediumTime", "h:mm:ss a" },
        { "longTime", "h:mm:ss a z" },
        { "fullTime", "h:mm:ss a zzzz" },
    };
}
```

#### Cell Editing

When it comes to cell editing based on the column type a different editor will appear:
- `DateTime` - `DateTimeEditor` will be used. This editor will give you a mask directions for the input elements part of the `DateTime` object.
- `Date` - `DatePicker` will be used.
- `Time` - `TimePicker` will be used.

#### Filtering

The same editors listed above will be used when it comes to Quick Filtering/Excel-style Filtering. These are the following filtering operands that each type exposes:
- `DateTime` and `Date` - Equals, Does Not Equal, Before, After, Today, Yesterday, This Month, Last Month, Next Month, This Year, Last Year, Next Year, Empty, Not Empty, Null, Not Null;
- `Time` - At, Not At, Before, After, At or Before, At or After, Empty, Not Empty, Null, Not Null;

#### Summaries

The available Summary operands will be **Count**, **Earliest** (date/time) and **Latest** (date/time).

#### Sorting

- `Time`: Column sorts based on the time portion of the object, ms will be disregarded.
- `Date`: Column sorts based on the date portion, disregards the time portion.
- `DateTime`: Column sorts based on the full date.

### Boolean

The default template is using material icons for visualization of boolean values - 'clear' icon for *false* values and 'check' icon for *true* values. As for the editing template, it is using `Checkbox` component.

```html
<igx-column [dataType]="'boolean'">
</igx-column>
```

```razor
<IgbColumn DataType="GridColumnDataType.Boolean"></IgbColumn>
```

```html
<igc-column data-type="Boolean">
</igc-column>
```

<!-- Blazor -->

### Image

While there does not exist a built-in template for an image column in the `{ComponentName}` at this time, this can be simply implemented by providing a `BodyTemplateScript` to one of your `Column`s. This property points at a JavaScript function that can be defined like so:

```razor
<IgbColumn Field="ImageSource" BodyTemplateScript="ImageCellTemplate" />

//In JavaScript
igRegisterScript("ImageCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
        <img src="${ctx.cell.value}"/>
    </div>`;
}, false);
```

Alternatively, you can do this in a more "Blazor" way by providing a template in your .razor file to the `BodyTemplate` property of the `Column`. Please note though, that this will not be as performant as using the JavaScript `BodyTemplateScript` mentioned above. The code to do this in .razor can be found below:

```razor
<IgbColumn Field="ImageSource" BodyTemplate="ImageCellTemplate" />

@code {
    public RenderFragment<IgbCellTemplateContext> ImageCellTemplate = (ctx) => {
        return @<img src=@ctx.Cell.Value style="height: 30px; width: 60px"/>;
    };
}
```

<!-- end: Blazor -->

### Currency

#### Default template

<!-- Angular -->

The default template will show a numeric value with currency symbol that would be either prefixed or suffixed. Both currency symbol location and number value formatting is based on the provided Application [LOCALE_ID](https://angular.io/api/core/LOCALE_ID) or {ComponentTitle} `Locale`.

*By using LOCALE_ID*
```ts
import { LOCALE_ID } from '@angular/core';
// ...

@Component({
    selector: 'app-component.sample',
    templateUrl: 'grid-component.sample.html',
    providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]
})
```
<!-- end: Angular -->

<!-- Blazor -->

The default template will show a numeric value with currency symbol that would be either prefixed or suffixed. Both currency symbol location and number value formatting is based on the provided {ComponentTitle} `Locale`.

<!-- end: Blazor -->

*By using Grid's locale*
<!-- Angular -->
```html
<{ComponentSelector} [locale]="'fr-FR'" [data]="data">
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Locale="'fr-FR'" Data=data>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} locale="'fr-FR'">
</{ComponentSelector}>
```
<!-- end: WebComponents -->

By using the `PipeArgs` input the end-user can customize the number format by *decimal point*, *currencyCode* and *display*.

<!-- Angular -->

```ts
public options = {
  digitsInfo: '3.4-4',
  currencyCode: 'USD',
  display: 'symbol-narrow'
};
public formatOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatOptions"
    [dataType]="'currency'">
</igx-column>
```

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Currency" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs()
    {
        DigitsInfo = "3.4-4",
        CurrencyCode = "USD",
        Display = "symbol-narrow"
    };
}
```

```html
<igc-column id="column" field="UnitsInStock"
    data-type="Currency">
</igc-column>
```

```ts
private _formatOptions: any | null = null;
    public get formatOptions(): any {
        if (this._formatOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "3.4-4";
            columnPipeArgs.currencyCode = "USD";
            columnPipeArgs.display = "symbol-narrow";
            this._formatOptions = columnPipeArgs;
        }
        return this._formatOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;

    this._bind = () => {
        column.pipeArgs = this.formatOptions;
    }
    this._bind();
}
```

| Parameter                 | Description                                                |
|---------------------------| -------------------------                                  |
| digitsInfo                | Represents Decimal representation of currency value        |
| currencyCode              | ISO 4217 currency code                                     |
| display*                  | Displays the value by narrow or wide symbol                |

*display - for the default en-US locale, the code USD can be represented by the narrow symbol $ or the wide symbol US$.

<!-- ComponentStart:  Grid -->
Upon editing of cell's value the *currency symbol* will be visible as suffix or prefix. More about that could be found in the official [Cell editing topic](cell-editing.md#{PlatformLower}-grid-cell-editing-and-edit-templates-example).
<!-- ComponentEnd:  Grid -->

> When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)


### Percent

Default template is showing the percent equivalent of the underlying numeric value. The displayed cell value is a multiplied result by display factor of '100' - for example, as the default factor is 100 and the "value" passed to the cell is 0.123, then the displayed cell value will be "12.3%".

When it comes to cell editing, the value will be the same as the data source value - the display factor is '1'. Upon editing of the cell a preview of the percent value will be shown as a suffix element.For example, while editing '0.0547' the preview element will show '5.47%'.

<!-- Angular -->

```ts
public options = {
    /**
    * Decimal representation options, specified by a string in the following format:
    * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
    * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
    * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
    * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
    */
    digitsInfo: '2.2-3'
};
public formatPercentOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatPercentOptions"
    [dataType]="'percent'">
</igx-column>
```

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Percent" PipeArgs=formatPercentOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatPercentOptions = new IgbColumnPipeArgs()
    {
        /**
        * Decimal representation options, specified by a string in the following format:
        * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
        * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
        * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
        * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
        */
        DigitsInfo = "2.2-3"
    };
}
```

```html
<igc-column id="column" field="UnitsInStock"
    data-type="Percent">
</igc-column>
```

```ts
private _formatPercentOptions: any | null = null;
    public get formatPercentOptions(): any {
        if (this._formatPercentOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "2.2-3";
            this._formatPercentOptions = columnPipeArgs;
        }
        return this._formatPercentOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;

    this._bind = () => {
        column.pipeArgs = this.formatPercentOptions;
    }
    this._bind();
}
```

> [!Note]
> When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

## Default Editing Template

<!-- ComponentStart:  Grid -->
See the editing templates part of [{ComponentTitle} Editing topic](editing.md#editing-templates)
<!-- ComponentEnd:  Grid -->

<!-- Angular -->
## Custom Editing Template and Formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom Template

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false">
    <igx-column [field]="'UnitsInStock'" [dataType]="'currency'" [pipeArgs]="formatOptions" [editable]="true">
        <ng-template igxCellEditor let-value>
            {{ value | currency:'USD':'symbol':'1.0-0'}}
        </ng-template>
    </igx-column>
</igx-grid>
```

### Column Formatter

```ts
 // Through column formatter property
public formatCurrency(value: number) {
    return `Dollar sign ${value.toFixed(0)}`;
}

public init(column: IgxColumnComponent) {
    switch (column.field) {
        case 'UnitsInStock':
            column.formatter = this.formatCurrency;
            break;
        default:
            return;
}
```

<!-- end: Angular -->

<!-- ```html
<igc-grid id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="Currency" editable="true">
    </igc-column>
</igc-grid>
```

```ts
constructor() {
    var unitsInStock = this.unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;

    this._bind = () => {
        unitsInStock.pipeArgs = this.formatOptions;
        unitsInStock.inlineEditorTemplate = this.editCellTemplate;
    }
    this._bind();
}

 // Through column formatter property
public formatCurrency(value: number) {
    return `Dollar sign ${value.toFixed(0)}`;
}

public init(column: IgcColumnComponent) {
    switch (column.field) {
        case 'UnitsInStock':
            column.formatter = this.formatCurrency;
            break;
        default:
            return;
}

public editCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`${ this.formatCurrency(ctx.cell.value)}`;
}

public formatCurrency(value: number) {

}
``` -->

<!-- ```razor
TO DO!
``` -->

## API References

* `GridCell`
* `Column`
* `PipeArgs`
* `{ComponentName}`
* `Locale`
* `DataType`

## Additional Resources
<!-- ComponentStart:  Grid -->
For custom templates you can see [cell editing topic](cell-editing.md#{PlatformLower}-grid-cell-editing-and-edit-templates-example)


* [Editing](editing.md)
* [Summaries](summaries.md)
<!-- ComponentEnd:  Grid -->
