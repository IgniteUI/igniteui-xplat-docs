---
title: {Platform} {ComponentTitle} Column Data Types - {ProductName}
_description: Handle cell and editing templates in {Platform} by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Column Types Overview

The {Platform} {ComponentTitle} provides a default handling of *number*, *string*, *date*, *boolean*, *currency* and *percent* column data types, based on which the appearance of the default and editing templates will be present.

<!-- ComponentStart: Grid, TreeGrid -->

## {Platform} {ComponentTitle} Column Types Example

`sample="/{ComponentSample}/column-data-types", height="550", alt="{Platform} {ComponentTitle} column data types"`


<!-- ComponentEnd: Grid, TreeGrid -->

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
<igc-column id="column" data-type="number">
</igc-column>
```

```ts
public get formatOptions(): any {
  return {
    digitsInfo: "1.4-4"
  };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.digitsInfo = "1.4-4";

<IgrColumn pipeArgs={formatOptions} dataType="number"></IgrColumn>
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
<igc-column id="column" data-type="date">
</igc-column>
```

```ts
public get formatDateOptions(): any {
    return {
        format: "long",
        timezone: "UTC+0"
    };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatDateOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.format = "long";
formatOptions.timezone = "UTC+0";

<IgrColumn pipeArgs={formatOptions} dataType="date"></IgrColumn>
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

<!-- Angular, WebComponents -->

```ts
// Time format with equivalent example
public timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
```
<!-- end: Angular, WebComponents -->

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

```tsx
const timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
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
<igc-column data-type="boolean">
</igc-column>
```

```tsx
<IgrColumn dataType="boolean"></IgrColumn>
```

### Image

Default template is using the value coming from the data as an image source to a default image template. The default image template will extract the name of the image file and set it as `alt` attribute of the image to meet the accessibility requirement. The displayed cell size is adjusted to the sizes of the images rendered, so keep in mind that large images will still be rendered and the grid rows will become as large as the images in the image column. Filtering, sorting and grouping will be turned off by default for image type columns. If you want to enable them, you need to provide custom strategies which perform the data operations.

<!-- Angular -->
```html
<igx-grid>
    <igx-column [dataType]="'image'">
    </igx-column>
<igx-grid>
```
<!-- end: Angular -->

```razor
<IgbColumn DataType="GridColumnDataType.Image"></IgbColumn>
```

```html
<igc-column field="Image" data-type="image">
</igc-column>
```

```tsx
<IgrColumn field="Image" dataType="image"></IgrColumn>
```

When `AutoGenerate` is used for the columns, the grid analyses the values in the first data record. If a value is of type string and matches the pattern of a url ending in an image extension (gif, jpg, jpeg, tiff, png, webp, bmp) then the column will automatically be marked as `dataType === GridColumnDataType.Image` and a default image template will be rendered.

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

*By using Grid's locale*

```html
<{ComponentSelector} [locale]="'fr-FR'" [data]="data">
</{ComponentSelector}>
```

<!-- end: Angular -->

<!-- Blazor, WebComponents, React -->

The default template will show a numeric value with currency symbol that would be either prefixed or suffixed.

<!-- end: Blazor, WebComponents, React -->

By using the `PipeArgs` input the end-user can customize the number format by *decimal point*, *currencyCode* and *display*.

<!-- Angular -->

```ts
public options = {
  digitsInfo: '3.4-4',
  display: 'symbol-narrow'
};
public formatOptions = this.options;
```

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatOptions"
    [dataType]="'currency'">
</igx-column>
```

<!-- end: Angular -->

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Currency" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs()
    {
        DigitsInfo = "3.4-4",
        Display = "symbol-narrow"
    };
}
```

```html
<igc-column id="column" field="UnitsInStock" data-type="currency">
</igc-column>
```

```ts
public get formatOptions(): any {
    return {
        digitsInfo: '3.4-4',
        display: 'symbol-narrow'
    };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.digitsInfo = "1.4-4";
formatOptions.display = "symbol-narrow";

<IgrColumn pipeArgs={formatOptions} dataType="currency" field="UnitsInStock"></IgrColumn>
```

| Parameter                 | Description                                                |
|---------------------------| -------------------------                                  |
| digitsInfo                | Represents Decimal representation of currency value        |
| display*                  | Displays the value by narrow or wide symbol                |
<!-- Angular -->
| currencyCode              | ISO 4217 currency code                                     |
<!-- end: Angular -->

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
<igc-column id="column" field="UnitsInStock" data-type="percent">
</igc-column>
```

```ts
public get formatPercentOptions(): any {
    return {
        /**
        * Decimal representation options, specified by a string in the following format:
        * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
        * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
        * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
        * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
        */
        digitsInfo: '2.2-3'
    };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatPercentOptions;
}
```

```tsx
/**
* Decimal representation options, specified by a string in the following format:
* `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
* `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
* `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
* `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
*/
const formatOptions = new IgrColumnPipeArgs();
formatOptions.digitsInfo = "2.2-3";

<IgrColumn pipeArgs={formatOptions} dataType="percent"></IgrColumn>
```

> [!Note]
> When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

## Default Editing Template

See the editing templates part of [{ComponentTitle} Editing topic](editing.md#editing-templates)

## Custom Editing Template and Formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom Template
<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data | async" [autoGenerate]="false">
    <igx-column [field]="'UnitsInStock'" [dataType]="'currency'" [pipeArgs]="formatOptions" [editable]="true">
        <ng-template igxCellEditor let-value>
            {{ value | currency:'USD':'symbol':'1.0-0'}}
        </ng-template>
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```html
<{ComponentSelector} id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="currency" editable="true">
    </igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;
    unitsInStock.inlineEditorTemplate = this.editCellTemplate;
}

public editCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<input></input>`;
}
```

```tsx
function editCellTemplate(ctx: { dataContext: IgrCellTemplateContext }) {
    return (
        <>
            <input></input>
        </>
    );
}

<{ComponentSelector} autoGenerate="false">
    <IgrColumn inlineEditorTemplate={editCellTemplate}></IgrColumn>
</{ComponentSelector}>
```

```razor
<{ComponentSelector}>
 <IgbColumn InlineEditorTemplate="EditTemplate"></IgbColumn>
</{ComponentSelector}>
@code {
    public RenderFragment<IgbCellTemplateContext> EditTemplate = (ctx) =>
    {
        var value = ctx.Cell.Value;
        return@<input value="@value" />;
    };
}
```

### Column Formatter

```html
<{ComponentSelector} id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="currency">
    </igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var unitsInStock = this.unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;
    unitsInStock.formatter = this.formatCurrency;
}

public formatCurrency(value: number) {
    return `$ ${value.toFixed(0)}`;
}
```

```tsx
function formatCurrency(value: number) {
    return `$ ${value.toFixed(0)}`;
}

<{ComponentSelector} autoGenerate="false">
    <IgrColumn formatter={formatCurrency} field="UnitsInStock"></IgrColumn>
</{ComponentSelector}>
```

```razor
<{ComponentSelector}>
 <IgbColumn FormatterScript="CurrencyFormatter"></IgbColumn>
</{ComponentSelector}>

//In Javascript
igRegisterScript("CurrencyFormatter", (value) => {
    return `$ ${value.toFixed(0)}`;
}, false);
```

<!-- Angular -->
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


## API References

* `Cell`
* `Column`
* `PipeArgs`
* `{ComponentName}`
* `Locale`
* `DataType`

## Additional Resources

* For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
* [Editing](editing.md)
* [Summaries](summaries.md)
