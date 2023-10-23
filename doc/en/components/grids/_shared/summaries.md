---
title: {Platform} {ComponentTitle} Summaries - {ProductName}
_description: Configure {Platform} {ComponentTitle} summaries in the group footer of the column and use the option to set custom {Platform} template in the {ProductName} Material table
_keywords: {Platform} {ComponentTitle} summaries, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Summaries

The {ProductName} Summaries feature in {Platform} {ComponentTitle} functions on a per-column level as group footer. {Platform} {ComponentName} summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the `{ComponentName}`.

## {Platform} {ComponentTitle} Summaries Overview Example

`sample="/{ComponentSample}/data-summary-options", height="650", alt="{Platform} {ComponentTitle} data summary options"`


> [!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

`{ComponentName}` summaries can also be enabled on a per-column level in {ProductName}, which means that you can activate it only for columns that you need. `{ComponentName}` summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:


For `string` and `boolean` `DataType`, the following function is available:
 - Count

For `number`, `currency` and `percent` data types, the following functions are available:

 - Count
 - Min
 - Max
 - Average
 - Sum

For `date` data type, the following functions are available:
 - Count
 - Earliest
 - Latest

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

`{ComponentName}` summaries are enabled per-column by setting `HasSummary` property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the `{ComponentName}` the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the `DataType` property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid `Locale` and column `PipeArgs`.

<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector}>
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" HasSummary="true"></IgbColumn>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px"  sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} autoGenerate="false" height="800px" width="800px">
    <IgrColumn field="ProductID" header="Product ID" width="200px"  sortable="true">
    </IgrColumn>
    <IgrColumnn field="ProductName" header="Product Name" width="200px" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ReorderLevel" width="200px" editable="true" dataType="number" hasSummary="true">
    </IgrColumn>
</{ComponentSelector}>
```

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method `EnableSummaries`/`DisableSummaries` of the `{ComponentName}`.

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</{ComponentSelector}>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px" sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="false">
    </igc-column>
</{ComponentSelector}>
<button id="enableBtn">Enable Summary</button>
<button id="disableBtn">Disable Summary </button>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var enableBtn = this.enableBtn = document.getElementById('enableBtn') as HTMLButtonElement;
    var disableBtn = this.disableBtn = document.getElementById('disableBtn') as HTMLButtonElement;
    grid.data = this.data;
    enableBtn.addEventListener("click", this.enableSummary);
    disableBtn.addEventListener("click", this.disableSummary);
}
```
<!-- end: WebComponents -->

<!-- Angular, WebComponents -->
```typescript
public enableSummary() {
    this.grid.enableSummaries([
        {fieldName: 'ReorderLevel'},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid.disableSummaries(['ProductID']);
}
```
<!-- end: Angular, WebComponents -->

<!-- TODO: EnableSummariesAsync not working so please add it to the code snippet when it got fixed. -->

```razor
 <{ComponentSelector} @ref=grid Id="grid" AutoGenerate="false">
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" Sortable="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" Sortable="false" DisablePinning="true" DisableHiding="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
</{ComponentSelector}>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "EmployeeID" };
        await this.grid.DisableSummariesAsync(disabledSummaries);
    }
}
```

```tsx
function enableSummary() {
    gridRef.current.enableSummaries([
        {fieldName: 'ReorderLevel'},
        {fieldName: 'ProductID'}
    ]);
}
function disableSummary() {
    gridRef.current.disableSummaries(['ProductID']);
}

<{ComponentSelector} ref={gridRef} auto-generate="false" height="800px" width="800px">
    <IgrColumn field="ProductID" header="Product ID" width="200px" sortable="true">
    </IgrColumn>
    <IgrColumn field="ProductName" header="Product Name" width="200px" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ReorderLevel" width="200px" editable="true" dataType="number" hasSummary="false">
    </IgrColumn>
</{ComponentSelector}>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```

<!-- Angular, WebComponents, Blazor -->
## Custom {ComponentTitle} Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. 


<!-- WebComponents -->
In order to achieve this you have to override one of the base classes `SummaryOperand`, `NumberSummaryOperand` or `DateSummaryOperand` according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. `SummaryOperand` class provides the default implementation only for the `Count` method. `NumberSummaryOperand` extends `SummaryOperand` and provides implementation for the `Min`, `Max`, `Sum` and `Average`. `DateSummaryOperand` extends `SummaryOperand` and additionally gives you `Earliest` and `Latest`.

<!-- end: WebComponents -->

<!-- Angular -->
```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular';

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
<!-- end: Angular -->


```typescript
import { IgcSummaryResult, IgcSummaryOperand, IgcNumberSummaryOperand, IgcDateSummaryOperand } from 'igniteui-webcomponents-grids';

class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgcSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```

```razor

//In JavaScript
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: data.length ? data.reduce((a, b) => +a + +b) : 0
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```

As seen in the examples, the base classes expose the `Operate` method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of `SummaryResult`.

```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

```typescript
interface IgcSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> [!Note]
> In order to calculate the summary row height properly, the {ComponentTitle} needs the `Operate` method to always return an array of `SummaryResult` with the proper length even when the data is empty.


And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the Summaries` property to the class we create below.
<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" width="200px" sortable="true">
    </igc-column>
    <igc-column field="ProductName" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" width="200px" data-type="number" has-summary="true" sortable="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var unitsInStock = this.unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;
    grid1.data = this.data;
    unitsInStock.summaries = this.mySummary;
}
```
<!-- end: WebComponents -->

```typescript
export class GridComponent implements OnInit {
    mySummary = MySummary;
}
```

```razor
<{ComponentSelector} 
        AutoGenerate="true"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        ColumnInitScript="WebGridCustomSummary">
</{ComponentSelector}>

// In Javascript
igRegisterScript("WebGridCustomSummary", (event) => {
    if (event.detail.field === "UnitsInStock") {
        event.detail.summaries = WebGridDiscontinuedSummary;
    }
}, false);
```

### Custom summaries, which access all data
 Now you can access all {ComponentTitle} data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand `Operate` method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```

```typescript
class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgcSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```

```razor
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```

<!-- WebComponents -->

`sample="/{ComponentSample}/data-summaries-custom", height="650", alt="{Platform} {ComponentTitle} data summary custom"`

<!-- end: WebComponents -->

<!-- Blazor -->

`sample="/{ComponentSample}/data-summary-options", height="650", alt="{Platform} {ComponentTitle} data summary options"`

<!-- end: Blazor -->

<!-- end: Angular, WebComponents, Blazor -->


### Summary Template
`Summary` targets the column summary providing as a context the column summary results.

```html
<igx-column [hasSummary]="true">
    <ng-template igxSummary let-summaryResults>
        <span> My custom summary template</span>
        <span>{{ summaryResults[0].label }} - {{ summaryResults[0].summaryResult }}</span>
    </ng-template>
</igx-column>
```

```html
<igc-column id="column" has-summary="true">
</igc-column>
```
```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryTemplate = this.summaryTemplate;
}

public summaryTemplate = (ctx: IgcSummaryTemplateContext) => {
    return html`
        <span> My custom summary template</span>
        <span>${ ctx.implicit[0].label } - ${ ctx.implicit[0].summaryResult }</span>
    `;
}
```

```tsx
function summaryTemplate(ctx: IgrSummaryTemplateContext) {
  return (
    <>
      <span>My custom summary template</span>
      <span>{ctx.dataContext.implicit[0].label} - {ctx.dataContext.implicit[0].summaryResult}</span>
    </>
  );
}

<IgrColumn hasSummary="true" summaryTemplate={summaryTemplate}></IgrColumn>
```

```razor
<IgbColumn HasSummary="true" SummaryTemplateScript="SummaryTemplate">
</IgbColumn>

igRegisterScript("SummaryTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
    <span> ${ctx.implicit[0].label} - ${ctx.implicit[0].summaryResult} </span>
</div>`
}, false);
```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the display density of the grid. Use the `SummaryRowHeight` input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

<!-- Angular -->

> [!Note]
> Column summary template could be defined through API by setting the column `SummaryTemplate` property to the required TemplateRef.

<!-- end: Angular -->

<!-- Angular, WebComponents, React -->

`sample="/{ComponentSample}/data-summary-template", height="650", alt="{Platform} {ComponentTitle} data summary template"`

<!-- end: Angular, WebComponents, React -->

<!-- Angular, WebComponents -->

## Formatting summaries
By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid `Locale` and column `PipeArgs`. When using custom operands, the `Locale` and `PipeArgs` are not applied. If you want to change the default appearance of the summary results, you may format them using the `SummaryFormatter` property.

```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if (summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```

```typescript
    public dateSummaryFormat(summary: IgcSummaryResult, summaryOperand: IgcSummaryOperand): string {
        const result = summary.summaryResult;
        if (summaryOperand instanceof IgcDateSummaryOperand && summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }
```

```html
<igx-column [summaryFormatter]="dateSummaryFormat"></igx-column>
```

```html
<igc-column id="column"></igx-column>
```
```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryFormatter = this.dateSummaryFormat;
}
```

<!-- TODO -- update blazor snippet when the sample is ready -->

```razor
<IgbColumn HasSummary="true" SummaryFormatterScript="SummaryFormatter"/>

igRegisterScript("SummaryFormatter", (summary, summaryOperand) => {
    return summary.summaryResult + " rows";
}, false);
```

`sample="/{ComponentSample}/data-summary-formatter", height="650", alt="{Platform} {ComponentTitle} data summary formatter"`


<!-- end: Angular, WebComponents -->


<!-- ComponentStart: Grid -->

## Summaries with Group By

When you have grouped by columns, the `{ComponentName}` allows you to change the summary position and calculation mode using the `SummaryCalculationMode` and `SummaryPosition` properties. Along with these two properties the `{ComponentName}` exposes and `ShowSummaryOnCollapse` property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.

The available values of the `SummaryCalculationMode` property are:

 - `RootLevelOnly` - Summaries are calculated only for the root level.
 - `ChildLevelsOnly` - Summaries are calculated only for the child levels.
 - `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the `SummaryPosition` property are:

 - `Top` - The summary row appears before the group by row children.
 - `Bottom` - The summary row appears after the group by row children. This is the default value.

The `ShowSummaryOnCollapse` property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.


> [!Note]
> The `SummaryPosition` property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the `{ComponentName}`.

### Demo

`sample="/{ComponentSample}/groupby-summary-options", height="650", alt="{Platform} {ComponentTitle} groupby summary options"`


<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

## Child Summaries

The `{ComponentName}` supports separate summaries for the root nodes and for each nested child node level. Which summaries are shown is configurable using the `SummaryCalculationMode` property. The child level summaries can be shown before or after the child nodes using the `SummaryPosition` property. Along with these two properties the `{ComponentName}` exposes and `ShowSummaryOnCollapse` property which allows you to determine whether the summary row stays visible when the parent node that refers to is collapsed.


The available values of the `SummaryCalculationMode` property are:

 - `RootLevelOnly` - Summaries are calculated only for the root level nodes.
 - `ChildLevelsOnly` - Summaries are calculated only for the child levels.
 - `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the `SummaryPosition` property are:

 - `Top` - The summary row appears before the list of child rows.
 - `Bottom` - The summary row appears after the list of child rows. This is the default value.

The `ShowSummaryOnCollapse` property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the parent row is collapsed. If the property is set to **true** the summary row stays visible when parent row is collapsed.

> [!Note]
> The `SummaryPosition` property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the `{ComponentName}`.

`sample="/{ComponentSample}/data-summary-children", height="720", alt="{Platform} {ComponentTitle} data summary children"`


<!-- ComponentEnd: TreeGrid -->


## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.


<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid">
</{ComponentSelector}>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### Demo

`sample="/{ComponentSample}/groupby-summary-styling", height="710", alt="{Platform} {ComponentTitle} groupby summary styling"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->
## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [grid-summary-theme]({environment:sassApiUrl}/index.html#function-grid-summary-theme) and accepts the `$background-color`, `$focus-background-color`, `$label-color`, `$result-color`, `$pinned-border-width`, `$pinned-border-style` and `$pinned-border-color` parameters.

```scss
$custom-theme: grid-summary-theme(
    $background-color: #e0f3ff,
    $focus-background-color: rgba( #94d1f7, .3 ),
    $label-color: #e41c77,
    $result-color: black,
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: #e41c77
);
```
The last step is to **include** the component mixins:

```scss
@include grid-summary($custom-theme);
```

> [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include grid-summary($custom-theme);
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$blue-color: #7793b1;
$green-color: #00ff2d;

$my-custom-palette: palette($primary: $blue-color, $secondary: $green-color);
```

And then with [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: grid-summary-theme(
    $background-color: color($my-custom-palette, "primary", 700),
    $focus-background-color: color($my-custom-palette, "primary", 800),
    $label-color: color($my-custom-palette, "secondary", 500),
    $result-color: color($my-custom-palette, "grays", 900),
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: color($my-custom-palette, "secondary", 500)
);
```

> [!Note]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [_light-grid-summary]({environment:sassApiUrl}/index.html#variable-_light-grid-summary):

```scss
// Extending the light grid summary schema
$my-summary-schema: extend($_light-grid-summary,
    (
        background-color: (igx-color: ('primary', 700)),
        focus-background-color: (igx-color: ('primary', 800)),
        label-color: (igx-color: ('secondary', 500)),
        result-color: (igx-color: ('grays', 900)),
        pinned-border-width: 2px,
        pinned-border-style: dotted,
        pinned-border-color: (igx-color: ('secondary', 500))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid-summary: $my-summary-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: grid-summary-theme(
    $palette: $my-custom-palette,
    $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

`sample="/{ComponentSample}/groupby-summary-styling", height="710", alt="{Platform} {ComponentTitle} groupby summary styling"`


<!-- end: Angular -->

## API References

* `SummaryOperand`
* `NumberSummaryOperand`
* `DateSummaryOperand`
* `ColumnGroup`
* `Column`

## Additional Resources

<!-- Angular -->


* [Column Data Types](column-types.md#default-template)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<!-- ComponentStart: Grid -->

* [Selection-based Aggregates](selection-based-aggregates.md)

<!-- ComponentEnd: Grid -->

<!-- end: Angular -->

<!-- Blazor -->

<!-- ComponentStart:  Grid -->
* [Column Data Types](column-types.md#default-template)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

<!-- end: Blazor -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
