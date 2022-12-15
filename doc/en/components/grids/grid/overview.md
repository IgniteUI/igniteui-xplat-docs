---
title: {Platform} Grid | Build Fast {Platform} Tables | Infragistics
_description: Create super fast, responsive {Platform} grids and tables with {ProductName}. Supports editing, filtering, data binding and many more. Try it now!
_keywords: {Platform}, {ProductName}, Infragistics, Getting Started, Grid
mentionedTypes: ['Infragistics.Controls.Grid']
---

# {Platform} Grid Overview and Configuration

The {Platform} `{GridName}` is used as a feature-rich control for displaying data in a tabular format quickly and easily. Modern grids are complex and are usually packed with a set of features like data selection, excel style filtering, sorting, paging, templating, column moving, exporting to Excel and CSV, and more.

<div class="sample-content">
    <img class="b-lazy responsive-img"
        src="../../../images/general/landing-grid-page.png"
        data-src="../../../images/general/landing-grid-page.png"
        data-srcset="../../../images/general/landing-grid-page.png 480w, ../../../images/general/landing-grid-page.png 768w, ../../../images/general/landing-grid-page.png 1100w"
        alt="Grid"
        title="Grid">
</div>

## {Platform} Grid Example

In this grid example, you can see how users can do both basic and excel-style filtering, live-data sorting, as well as the use of grid summaries and cell templating. The demo also includes paging set to display 10 items per page.

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-overview"
           alt="grid example">
</code-view>

<div class="divider--half"></div>

## Getting Started with {Platform} Grid

### Dependencies

To get started with the {Platform} grid, first you need to install the {ProductName} package.

<!-- Blazor -->

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](../../general-getting-started-blazor-client.md)
- [Adding Nuget Package](../../general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the grid:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```
<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->
When installing the {Platform} grid package, the core, inputs and layout packages must also be installed.

```cmd
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
npm install --save {PackageLayouts}
```

<!-- WebComponents -->

You also need to include the following import to use the grid:

```typescript
import 'igniteui-webcomponents-grids/grids/combined.js';
```

The corresponding styles should also be referenced. You can choose light or dark option for one of the [themes](../../themes/overview.md) and based on your project configuration to import it:

```typescript
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

Or to link it:
```typescript
<link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css'>
```

For more details on how to customize the appearance of the grid, you may have a look at the [styling](overview.md#web-components-grid-styling-configuration) section.

<!-- end: WebComponents -->

<!-- end: Angular, React, WebComponents -->

<!-- Angular, React, Blazor -->

### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbGridModule));
```

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-angular';
// import { IgxGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxGridModule,
        ...
    ]
})
export class AppModule {}
```

<!-- end: Angular, React, Blazor -->


## Usage

Now that we have the grid packages imported, let’s get started with the basic configuration and bind to local data:

```razor
<IgbGrid Id="grid1" Data="data" AutoGenerate="true"></IgbGrid>
```

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

```html
<igc-grid id="grid1" auto-generate="true"></igc-grid>
```

```typescript
constructor() {
    let grid1 = document.getElementById("grid1") as IgcGridComponent;
    grid1.data = data;
}
```

The `Id` property is a string value and is the unique identifier of the grid which will be auto-generated if not provided, while `data` binds the grid, in this case to local data.

The `AutoGenerate` property tells the grid to auto generate the grid's `Column` components based on the data source fields. It will also try to deduce the appropriate data type for the column if possible. Otherwise, the developer needs to explicitly define the columns and the mapping to the data source fields.

## Bootstrap Grid Definition

{ProductName} includes a powerful bootstrap grid like flex-based layout system. Any modern application today is expected to follow a responsive web design approach, meaning it can gracefully adjust layout of HTML elements based on the device size, or from simply resizing the browser. A bootstrap grid layout was the most used approach in the past, but a flex-based layout system like CSS grid has become more popular, as it works in any browser. The {ProductName} Layout Directive allows vertical and horizontal flow, including content / text wrapping, justification, and alignment. The {ProductName} grid supports a responsive layout using CSS, giving you the ultimate flexibility in how the grid behaves on resize.

## Editable {Platform} Grid

Each operation for grid editing includes batch operations, meaning the API gives you the option to group edits into a single server call, or you can perform grid edit / update operations as they occur with grid interactions. Along with a great developer experience as an editable grid with CRUD operations, the grid includes Excel-like keyboard navigation. Common default grid navigation is included, plus the option to override any navigation option to meet the needs of your customers. An editable grid in with a great navigation scheme is critical to any modern line of business application, with the Ignite UI grid we make it easy.

Following this topic you will learn more about [cell template](overview.md#cell-template) and [cell editing template](overview.md#cell-editing-template) and editing.

## Grid Column Configuration

`Column` is used to define the grid's columns collection and to enable features per column like **sorting** and **filtering**. Cell, header, and footer templates are also available.

### Defining Columns

Let's turn the `AutoGenerate` property off and define the columns collection in the markup:

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)" [allowFiltering]="true">
    <igx-column field="Name" [sortable]="true" header=" "></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" header="Track progress" [filterable]="false">
        <ng-template igxCell let-value>
            <igx-linear-bar [stripped]="false" [value]="value" [max]="100"></igx-linear-bar>
        </ng-template>
    </igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-grid>
```

```html
<igc-grid id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="Name" sortable="true" header=" "></igc-column>
    <igc-column field="AthleteNumber" sortable="true" header="Athlete number" filterable="false"></igc-column>
    <igc-column id="trackProgress" field="TrackProgress" header="Track progress" filterable="false"></igc-column>    
</igc-grid>
```

```typescript
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;   

    this._bind = () => {
        grid1.data = this.data;        
    }

    this._bind();
}
```

```razor
<IgbGrid AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="Name" Sortable=true />
    <IgbColumn Field="AthleteNumber" Sortable=true Header="Athlete Number" Filterable=false/>
    <IgbColumn Field="TrackProgress" Header="Track Progress" Filterable=false />
</IgbGrid>
```

<!-- Angular -->

Each of the columns of the grid can be templated separately. The column expects `ng-template` Angular grid module directives.

It also expose `AdditionalTemplateContext` input that can be used for custom properties and any type of data context that you want to pass to the column itself:

```html
<igx-column [additionalTemplateContext]="contextObject">
    <ng-template igxCell let-cell="cell" let-props="additionalTemplateContext">
        {{ props.firstProperty }}
    </ng-template>
</igx-column>
```

```typescript
public contextObject = { firstProperty: 'testValue', secondProperty: 'testValue1'};
```

<!-- end: Angular -->

### Header Template

The header template can be set to modify the column headers. The snippets below show you how to format the header text to upper case.

```html
<igx-column field="Name">
    <ng-template igxHeader let-column>
        {{ column.field | uppercase }}
    </ng-template>
</igx-column>
```

```html
<igc-column id="name" field="Name"></igc-column>
```

```typescript
constructor() {
    var name = this.name = document.getElementById('name') as IgcColumnComponent;

    this._bind = () => {
        name.headerTemplate = this.nameHeaderTemplate;
    }

    this._bind();
}

public nameHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        ${this.formatUppercase(ctx.column.field)}
    `;
}

public formatUppercase(value: string) {
    return value.toUpperCase();
}
```

```razor
<IgbColumn Field="Name" HeaderTemplateScript="UpperCaseTemplate" /> 

//In JavaScript:
igRegisterScript("UpperCaseTemplate", (ctx) => {

    var html = window.igTemplating.html;

    return html`${this.formatUppercase(ctx.column.field)}`;

}, false)

function formatUppercase(value) {
    return value.toUpperCase();
}
```

>[!NOTE]
>Whenever a header template is used along with grouping/moving functionality the column header area becomes draggable and you cannot access the custom elements part of the header template until you mark them as not draggable. Example below.

```html
<igx-column #col field="ProductName" header="Product Name"
    [groupable]="true" [hasSummary]="true">
    <ng-template igxHeader let-col>
        <div class="text">{{col.field}}</div>
        <igx-icon (click)="toggleSummary(col)" [attr.draggable]="false">functions
        </igx-icon>
    </ng-template>
</igx-column>
```

```html
<igc-column id="productName" field="ProductName" header="Product Name" groupable="true" has-summary="true"></igc-column>
```

```typescript
constructor() {
    var productName = this.productName = document.getElementById('productName') as IgcColumnComponent;

    this._bind = () => {
        productName.headerTemplate = this.productNameHeaderTemplate;
    }

    this._bind();
}

public productNameHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="text">${ctx.cell.column.field}</div>
        <igc-icon click="${toggleSummary(ctx.cell.column)}" [attr.draggable]="false">functions</igc-icon>
    `;
}

public toggleSummary(column: IgxColumnComponent) {
}
```

```razor
<IgbColumn Field="ProductName" Header="Product Name" Groupable=true HasSummary=true HeaderTemplateScript="ProductNameHeaderTemplate" />

//In JavaScript:
igRegisterScript("ProductNameHeaderTemplate", (ctx) => {

    var html = window.igTemplating.html;    

    return html`
        <div class="text">${ctx.cell.column.field}</div>
        <igc-icon [attr.draggable]="false">functions</igc-icon>
    `;
}, false)
```

As you can see, we are adding `Draggable` attribute set to false.

### Cell Template

When cell template is set it changes all the cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself. It can be used to define a template where the cells' text could be formatted e.g. as title case.

```html
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
```

```html
<igc-column id="name" field="Name"></igc-column>
```

```typescript
constructor() {
    var name = this.name = document.getElementById('name') as IgcColumnComponent;

    this._bind = () => {
        name.bodyTemplate = this.nameCellTemplate;
    }

    this._bind();
}

public nameCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${this.formatTitleCase(ctx.cell.value)}
    `;
}

public formatTitleCase(value: string) {
}
```

```razor
<IgbColumn Field="Name" BodyTemplateScript="NameCellTemplate"/>

//In JavaScript:
igRegisterScript("NameCellTemplate", (ctx) => {
    var html = window.igTemplating.html;

    return html`${this.formatTitleCase(ctx.cell.value)}`;
}, false);

function formatTitleCase(value) {
    return value;
}
```

In the snippet above we take a reference to the implicitly provided cell value. This is sufficient if you just want to present some data and maybe apply some custom styling or pipe transforms over the value of the cell. However even more useful is to take the `GridCell` instance itself as shown below:

```html
<igx-grid #grid [data]="data">
    <igx-column dataType="string" field="Name">
        <ng-template igxCell let-cell="cell">
            <!-- Implement row deleting inside the cell template itself -->
            <span tabindex="0" (keydown.delete)="grid.deleteRow(cell.row.index)">{{ cell.value | titlecase }}</span>
        </ng-template>
    </igx-column>
    <igx-column dataType="boolean" field="Subscribtion">
        <ng-template igxCell let-cell="cell">
            <!-- Bind the cell value through the ngModel directive and update the data source when the value is changed in the template -->
            <input type="checkbox" [ngModel]="cell.value" (ngModelChange)="cell.update($event)" />
        </ng-template>
    </igx-column>
<igx-grid>
```

```html
<igc-grid id="grid" auto-generate="false">
    <igc-column id="name" field="Name" data-type="string"></igc-column>
    <igc-column id="subscription" field="Subscription" data-type="boolean"></igc-column>
</igc-grid>
```

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var name = this.name = document.getElementById('name') as IgcColumnComponent;
    var subscription = this.subscription = document.getElementById('subscription') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        name.bodyTemplate = this.nameCellTemplate;
        subscription.bodyTemplate = this.subscriptionCellTemplate;
    }

    this._bind();
}

public nameCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <span tabindex="0" onkeydown="${this.deleteRow(ctx.cell.id)}">${this.formatTitleCase(ctx.cell.value)}</span>
    `;
}

public subscriptionCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <input type="checkbox" value="${ctx.cell.value}" onchange="${this.updateValue(ctx.cell.value)}" />
    `;
}

public updateValue(value: boolean) {
}

public deleteRow(rowId: number) {
}

public formatTitleCase(value: string) {
}
```

```razor
<IgbGrid AutoGenerate=false>
    <IgbColumn Field="Name" BodyTemplateScript="NameCellTemplate" />
    <IgbColumn Field="Subscription" BodyTemplateScript="SubscriptionCellTemplate" />
</IgbGrid>

//In JavaScript:
igRegisterScript("NameCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <span tabindex="0" onkeydown="${this.deleteRow(ctx.cell.id)}">${this.formatTitleCase(ctx.cell.value)}</span>
    `;
}, false);

igRegisterScript("SubscriptionCellTemplate", (ctx) => {    
    var html = window.igTemplating.html;
    return html`
        <input type="checkbox" value="${ctx.cell.value}" onchange="${this.updateValue(ctx.cell.value)}" />
    `;
}, false);

function updateValue(value) {
}

function deleteRow(rowId) {
}

function formatTitleCase(value) {
}
```

<!-- Angular -->

When changing data through the **cell template** using `ngModel`, you need to call the appropriate API methods to make sure the value is correctly updated in the Angular grid's underlying data collection. In the snippet above, the `ngModelChange` call passes through the grid's [editing API](cell-editing.md#editing-through-api) and goes through the grid's editing pipeline, properly triggering [transactions](batch-editing.md)(if applicable) and handling of [summaries](summaries.md), [selection](selection.md), etc. However, this `ngModelChange` will fire every time the value of the cell changes, not just when the user is done editing, resulting in a lot more API calls.

<!-- end: Angular -->

> [!NOTE]
> The grid exposes a default handling for number, string, date and boolean column types. For example, the column will display `check` or `close` icon, instead of true/false by default, for boolean column type.

<!-- Angular -->

If the data in a cell is bound with `[(ngModel)]` and the value change is not handled, the new value will **not** be properly updated in the Angular grid's underlying data source. When dealing with cell editing with a custom template, it is strongly advised to use the cell's **cell editing template**.

<!-- end: Angular -->

When properly implemented, the cell editing template also ensures that the cell's `EditValue` will correctly pass through the grid [editing event cycle](editing.md#event-arguments-and-sequence).

### Cell Editing Template

The column also accepts one last template that will be used when a cell is in edit mode. As with the other column templates, the provided context object is again the cell value and the cell object itself. Of course in order to make the edit-mode template accessible to end users, you need
to set the `Editable` property of the column to true.

```html
<igx-column dataType="number" editable="true" field="Price">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [(ngModel)]="cell.editValue" />
    </ng-template>
</igx-column>
```

```html
<igc-column id="price" field="Price" data-type="number" editable="true"></igc-column>
```

```typescript
constructor() {
    var price = this.price = document.getElementById('price') as IgcColumnComponent;

    this._bind = () => {
        price.inlineEditorTemplate = this.priceCellTemplate;
    }

    this._bind();
}

public priceCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <label>
            Enter the new price tag
        </label>
        <input name="price" type="number" value="${ctx.cell.value}" onchange="${this.updateValue(ctx.cell.value)}"  />
    `;
}

public updateValue(value: number) {
}
```

```razor
<IgbColumn Field="Price" Editable=true DataType="GridColumnDataType.Number" InlineEditorTemplateScript="PriceCellTemplate" />

//In JavaScript:
igRegisterScript("PriceCellTemplate", (ctx) => {
    var html = window.igTemplating.html;

    return html`
        <label>
            Enter the new price tag
        </label>
        <input name="price" type="number" value="${ctx.cell.value}" onchange="${this.updateValue(ctx.cell.value)}"  />
    `;
}, false);

function updateValue(value) {
}
```

Make sure to check the API for the `GridCell` in order to get accustomed with the provided properties you can use in your templates.

### Column Template API

Each of the column templates can be changed programmatically at any point through the `Column` object itself. For example in the code below, we have declared two templates for our user data. In our TypeScript code we'll get references to the templates themselves and then based on some condition we will render the appropriate template for the column in our application.

```html
<igx-grid>
    <!-- Column declarations -->
</igx-grid>

<ng-template #normalView let-value>
    <div class="user-details">{{ val }}</div>
    <user-details-component></user-details-component>
</ng-template>

<ng-template #smallView let-value>
    <div class="user-details-small">{{ val }}</div>
</ng-template>
```
<!-- Angular -->
```typescript
@ViewChild("normalView", { read: TemplateRef })
public normalView: TemplateRef<any>;

@ViewChild("smallView", { read: TemplateRef })
public smallView: TemplateRef<any>;

....

const column = this.grid.getColumnByName("User");
// Return the appropriate template based on some condition.
// For example saved user settings, viewport size, etc.
column.bodyTemplate = this.smallView;
```
<!-- end: Angular -->
```html
<igc-grid>
    <!-- Column declarations -->
</igc-grid>
```
```typescript
var user = this.user = document.getElementById('user') as IgcColumnComponent;
// Return the appropriate template based on some condition.
// For example saved user settings, viewport size, etc.
user.bodyTemplate = this.smallView;

public normalViewTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="user-details">${ ctx.cell.value }</div>
        <user-details-component></user-details-component>
    `;
}

public smallViewTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="user-details-small">${ ctx.cell.value }</div>
    `;
}
```

```razor

<IgbGrid ColumnInit=OnColumnInit />

@code {
    public void OnColumnInit(IgbColumnComponentEventArgs args)
    {
        IgbColumn column = args.Detail;
        // Return the appropriate template based on some condition.
        // For example saved user settings, viewport size, etc.
        column.BodyTemplateScript = "NormalViewTemplate";
    }
}

//In JavaScript:
igRegisterScript("NormalViewTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <div class="user-details">${ctx.cell.value}</div>
        <user-details-component></user-details-component>
    `;
}, false);

igRegisterScript("SmallViewTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <div class="user-details-small" style="color: blue">${ctx.cell.value}</div>
    `;
}, false);
```

Column properties can also be set in code in the `ColumnInit` event which is emitted when the columns are initialized in the grid.

```typescript
public initColumns(column: IgxGridColumn) {
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```
```typescript
public initColumns(column: IgcGridColumn) {
    const column: IgcGridComponent = column;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```

```razor
<IgbGrid ColumnInit=OnColumnInit />

@code {
    public void OnColumnInit(IgbColumnComponentEventArgs args)
    {
        IgbColumn column = args.Detail;        
        if(column.Field == "ProductName"){
            column.Sortable = true;
            column.Editable = true;
        }
    }
}
```

The code above will make the **ProductName** column sortable and editable and will instantiate the corresponding features UI (like inputs for editing, etc.).

### Custom Display Format

There are optional parameters for formatting:

- `Format` - determines what date/time parts are displayed, defaults to `'mediumDate'`, equivalent to **'MMM d, y'**
- `Timezone` - the timezone offset for dates. By default uses the end-user's local system timezone
- `DigitsInfo` - decimal representation objects. Default to **1.0-3**

To allow customizing the display format by these parameters, the `PipeArgs` input is exposed. A column will respect only the corresponding properties for its data type, if `PipeArgs` is set. Example:
<!-- Angular -->
```typescript
const pipeArgs: IColumnPipeArgs = {
     format: 'longDate',
     timezone: 'UTC',
     digitsInfo: '1.1-2'
}
```
<!-- end: Angular -->

```html
<igx-column field="OrderDate" dataType="date" [pipeArgs]="pipeArgs"></igx-column>
<igx-column field="UnitPrice" dataType="number" [pipeArgs]="pipeArgs"></igx-column>
```

```html
<igc-column id="orderDate" field="OrderDate" data-type="date"></igc-column>
```

```typescript
private _columnPipeArgs: any | null = null;
    public get columnPipeArgs(): any {
        if (this._columnPipeArgs == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.format = "longDate";
            columnPipeArgs.timezone = "UTC";
            columnPipeArgs.digitsInfo = "1.2-2"
            this._columnPipeArgs = columnPipeArgs;
        }
        return this._columnPipeArgs;
    }

constructor() {
    var orderDate = this.orderDate = document.getElementById('orderDate') as IgcColumnComponent;

    this._bind = () => {
        orderDate.pipeArgs = this.columnPipeArgs;
    }

    this._bind();
}
```

```razor
<IgbColumn Field="OrderDate"
           DataType=GridColumnDataType.Date
           PipeArgs=@(new IgbColumnPipeArgs(){ Timezone="UTC+0", DigitsInfo="1.2-2", Format = "longDate" }) />

<IgbColumn Field="UnitPrice"
           DataType=GridColumnDataType.Date
           PipeArgs=@(new IgbColumnPipeArgs(){ Timezone="UTC+0", DigitsInfo="1.2-2", Format = "longDate" }) />
```

The `OrderDate` column will respect only the `Format` and `Timezone` properties, while the `UnitPrice` will only respect the `DigitsInfo`.

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

<!-- Angular, WebComponents -->

## Grid Data Structure

The `{GridName}` handles **flat data** and nested **POJOs(Plain old Java objects)**. The data structure specific for rendering is in the form:

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    .
    .
    .
  }];

const POJO = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: {
          ObjectKeyN1: value1,
          ObjectKeyN2: value2,
          .
          .
          .
          ObjectKeyNM: valueNM,
        }
    },
    .
    .
    .
  }];

```
>[!WARNING]
>**The key values must not contain arrays**.

>If you use `AutoGenerate` columns **the data keys must be identical.**

<!-- end: Angular, WebComponents -->

<!-- Angular, WebComponents -->
## Grid Data Binding

Before going any further with the grid we want to change the grid to bind to remote data service, which is the common scenario in large-scale applications.

<!-- WebComponents -->
You can do this by fetching the data from a given url receiving a JSON response and assigning it to the `northwindEmployees` property that will be used as the grid's data source:

```typescript
public fetchData(url: string): void {
    fetch(url)
      .then(response => response.json())
      .then(data => this.onDataLoaded(data));
}
public onDataLoaded(jsonData: any[]) {
    this.northwindEmployees = jsonData;
  }

@property()
private northwindEmployees?: any[];
```

And then you can bind the grid to that data:

```html
<igc-grid id="grid1" .data="${this.northwindEmployees}">
```

<!-- end:WebComponents -->

<!-- Angular -->

A good practice is to separate all data fetching related logic in a separate data service, so we are going to create a service which will handle the fetching of data from the server.

Let's implement our service in a separate file

```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```

We're importing the `Injectable` decorator which is an [essential ingredient](https://angular.io/guide/dependency-injection) in every {Platform} service definition. The `HttpClient` will provide us with the functionality to communicate with backend services. It returns an `Observable` of some result to which we will subscribe in our grid component.

**Note**: Before Angular 5 the `HttpClient` was located in `@angular/http` and was named `Http`.

Since we will receive a JSON response containing an array of records, we may as well help ourselves by specifying what kind of data we're expecting to be returned in the observable by defining an interface with the correct shape. Type checking is always recommended and can save you some headaches down the road.

```typescript
// northwind.service.ts

export interface NorthwindRecord {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    CategoryName: string;
}
```

The service itself is pretty simple consisting of one method: `FetchData` that will return an `Observable<NorthwindRecord[]>`. In cases when the request fails for any reason (server unavailable, network error, etc), the `HttpClient` will return an error. We'll leverage the `CatchError` operator which intercepts an Observable that failed and passes the error to an error handler. Our error handler will log the error and return a safe value.

```typescript
// northwind.service.ts

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading Northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```

Make sure to import both the `HttpClientModule` and our service in the application module and register the service as a provider.

```typescript
// app.module.ts

import { HttpClientModule } from '@angular/common/http';
import { NorthwindService } from './northwind.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        NorthwindService
    ]
})
export class AppModule {}
```

After implementing the service we will inject it in our component's constructor and use it to retrieve the data. The `ngOnInit` lifecycle hook is a good place to dispatch the initial request.

**Note**: In the code below, you may wonder why are we setting the _records_ property to an empty array before subscribing to the service. The Http request is asynchronous, and until it completes, the _records_ property will be _undefined_ which will result in an error when the grid tries to bind to it. You should either initialize it with a default value or use a `BehaviorSubject`.

```typescript
// my.component.ts

@Component({

})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];

    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```

and in the template of the component:

```html
    <igx-grid [data]="records">
        <igx-column field="ProductId"></igx-column>
        <!-- rest of the column definitions -->
    </igx-grid>
```
<!-- end: Angular -->

**Note**: The grid `AutoGenerate` property is best to be avoided when binding to remote data for now. It assumes that the data is available in order to inspect it and generate the appropriate columns. This is usually not the case until the remote service responds, and the grid will throw an error. Making `AutoGenerate` available, when binding to remote service, is on our roadmap for future versions.


<!-- end: Angular, WebComponents -->
## Complex Data Binding

The `{GridName}` supports binding to complex objects (including nesting deeper than one level) through a "path" of properties in the data record.

Take a look at the following data model:
```typescript
interface AminoAcid {
    name: string;
    abbreviation: {
        short: string;
        long: string;
    }
    weight: {
        molecular: number;
        residue: number;
    },
    formula: {
        molecular: string;
        residue: string;
    }
}
```

```razor
public class AminoAcid
{
    public string Name { get; set; }
    public AminoAbbreviation Abbreviation { get; set; }
    public AminoWeight Weight { get; set; }
}

public class AminoAbbreviation
{
    public string Short { get; set; }
    public string Long { get; set; }
}

public class AminoWeight
{
    public double Molecular { get; set; }
    public double Residue { get; set; }
}
```

For example, in order to display the weights of a given amino acid in the grid the following snippet will suffice

```html
<igx-column field="weight.molecular"></igx-column>
<igx-column field="weight.residue"></igx-column>
```

```html
<igc-column field="weight.molecular"></igc-column>
<igc-column field="weight.residue"></igc-column>
```

```razor
<IgbColumn Field="Weight.Molecular" />
<IgbColumn Field="Weight.Residue" />
```

<!-- Angular -->

Refer to the sample below for additional information. This type of binding supports all
the default functionality that you would expect from the grid.
That is all sorting and filtering operations work out of the box without any additional
configuration. Same goes for grouping and editing operations with or without transactions as well as the ability to template the cells of the bound column.

>[!WARNING]
>The grids **do not** support this kind of binding for `PrimaryKey`, `ForeignKey` and `ChildKey` properties where applicable.

<!-- NOTE this sample is differed -->

<code-view style="height:460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-binding-nested-data-2" >
</code-view>

<!-- end: Angular -->

An alternative way to bind complex data, or to visualize composite data (from more than one column) in the `{GridName}` is to use a custom body template for the column. Generally, one can:
    - use the `value` of the cell, that contains the nested data
    - use the `cell` object in the template, from which to access the `row.data`, therefore retrieve any value from it, i.e `cell.row.data[field]` and `cell.row.data[field][nestedField]` and interpolate those in the template.

```html
<igx-column field="abbreviation.long" header="Long">
    <ng-template igxCell let-cell="cell">
        <div>
            <div>
                {{ cell.value }}
                {{ cell.row.data['name'] }}
                {{ cell.row.data['weight']['molecular'] }}
            </div>
        </div>
    </ng-template>
</igx-column>
```

```html
<igc-column id="abbreviationLong" field="abbreviation.long"></igc-column>
```

```typescript
constructor() {
    var abbreviationLong = this.abbreviationLong = document.getElementById('abbreviationLong') as IgcColumnComponent;

    this._bind = () => {
        abbreviationLong.bodyTemplate = this.abbreviationLongCellTemplate;
    }

    this._bind();
}

public abbreviationLongCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div>
            <div>
                ${ ctx.cell.value }
                ${ this.getName(ctx.cell.id) }
                ${ this.getWeight(ctx.cell.id) }
            </div>
        </div>
    `;
}

public getName(rowId: number){
    //row.data['name']
}
public getWeight(rowId: number){
    //row.data['weight']['molecular']
}
```

```razor
<IgbColumn Field="Abbreviation.Long" BodyTemplateScript="AbbreviationLongCellTemplate"/>

//In JavaScript:
igRegisterScript("AbbreviationLongCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <div>
            <div>
                ${ctx.cell.value}
                ${this.GetName(ctx.cell)}
                ${this.GetWeight(ctx.cell)}
            </div>
        </div>
    `;
}, false);

function GetName(value) {
    
}

function GetWeight(value) {

}
```

Here is an example on how body template is used to display complex data. Below is the data that we are going to use:

```typescript
export const EMPLOYEE_DATA = [
    {
        Age: 55,
        Employees: [
            {
                Age: 43,
                HireDate: new Date(2011, 6, 3),
                ID: 3,
                Name: "Michael Burke",
                Title: "Senior Software Developer"
            },
            {
                Age: 29,
                HireDate: new Date(2009, 6, 19),
                ID: 2,
                Name: "Thomas Anderson",
                Title: "Senior Software Developer"
            },
            {
                Age: 31,
                HireDate: new Date(2014, 8, 18),
                ID: 11,
                Name: "Monica Reyes",
                Title: "Software Development Team Lead"
            },
            {
                Age: 35,
                HireDate: new Date(2015, 9, 17),
                ID: 6,
                Name: "Roland Mendel",
                Title: "Senior Software Developer"
            }],
        HireDate: new Date(2008, 3, 20),
        ID: 1,
        Name: "John Winchester",
        Title: "Development Manager"
    }
]
```

```razor
public class EmployeesNestedData : List<EmployeesNestedDataItem>
{
    public EmployeesNestedData()
    {
        this.Add(new EmployeesNestedDataItem()
        {            
            Age = 55,
            Employees = new List<EmployeesNestedDataItem_EmployeesItem>()
            {
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 43,
                    Salary = 70000,
                    Productivity = 80,
                    City = @"Hamburg",
                    Country = @"Germany",
                    Phone = @"609-444-555",
                    HireDate = @"2011, 6, 3",
                    ID = 3,
                    Name = @"Michael Burke",
                    Title = @"Senior Software Developer"
                },
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 29,
                    Salary = 60000,
                    Productivity = 80,
                    City = @"Munich",
                    Country = @"Germany",
                    Phone = @"609-333-444",
                    HireDate = @"2009, 6, 19",
                    ID = 2,
                    Name = @"Thomas Anderson",
                    Title = @"Senior Software Developer"
                },
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 31,
                    Salary = 90000,
                    Productivity = 80,
                    City = @"Warasw",
                    Country = @"Poland",
                    Phone = @"609-222-205",
                    HireDate = @"2014, 8, 18",
                    ID = 11,
                    Name = @"Monica Reyes",
                    Title = @"Software Development Team Lead"
                },
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 35,
                    Salary = 70000,
                    Productivity = 70,
                    City = @"Koln",
                    Country = @"Germany",
                    Phone = @"609-502-525",
                    HireDate = @"2015, 9, 17",
                    ID = 6,
                    Name = @"Roland Mendel",
                    Title = @"Senior Software Developer"
                }}            
            });
        }
    }
}
```

The custom template for the column, that will render the nested data:

```html
 <igx-column field="Employees" header="Employees" [cellClasses]="{ expand: true }" width="40%">
        <ng-template #nestedDataTemp igxCell let-people let-cell="cell">
            <div class="employees-container">
                <igx-expansion-panel *ngFor="let person of people">
                    <igx-expansion-panel-header iconPosition="right">
                        <igx-expansion-panel-description>
                            {{ person.Name }}
                        </igx-expansion-panel-description>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        <div class="description">
                            <igx-input-group (keydown)="stop($event)" displayDensity="compact">
                                <label igxLabel for="title">Title</label>
                                <input type="text" name="title" igxInput [(ngModel)]="person.Title" style="text-overflow: ellipsis;" />
                            </igx-input-group>
                            <igx-input-group (keydown)="stop($event)" displayDensity="compact" style="width: 15%;">
                                <label igxLabel for="age">Age</label>
                                <input type="number" name="age" igxInput [(ngModel)]="person.Age" />
                            </igx-input-group>
                        </div>
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
            </div>
        </ng-template>
 </igx-column>
```

```html
<igc-column id="employees" field="Employees" header="Employees" width="40%"></igc-column>
```

```typescript
constructor() {
    var employees = this.employees = document.getElementById('employees') as IgcColumnComponent;

    this._bind = () => {
        employees.bodyTemplate = this.addressCellTemplate;
    }

    this._bind();
}

public addressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="employees-container">
            <igc-expansion-panel >
                <igc-expansion-panel-header iconPosition="right">
                    <igc-expansion-panel-description>
                        ${this.getName(ctx.cell.id.rowIndex)}
                    </igc-expansion-panel-description>
                </igc-expansion-panel-header>
                <igc-expansion-panel-body>
                    <div class="description">
                        <igc-input-group keydown="${this.stop()}" display-density="compact">
                            <label for="title">Title</label>
                            <input type="text" name="title" value="${this.getTitle(ctx.cell.id.rowIndex)}" style="text-overflow: ellipsis;" />
                        </igc-input-group>
                        <igc-input-group keydown="${this.stop()}" display-density="compact" style="width: 15%;">
                            <label for="age">Age</label>
                            <input type="number" name="age" value="${this.getAge(ctx.cell.id.rowIndex)}" />
                        </igc-input-group>
                    </div>
                </igc-expansion-panel-body>
            </igc-expansion-panel>
        </div>
    `;
}

public stop() {
}

public getName(rowId: number) {
}

public getTitle(rowId: number) {
}

public getAge(rowId: number) {
}
```

```razor
<IgbColumn Header="Employees" Field="Employees" BodyTemplateScript="WebGridNestedDataCellTemplate" />

//In JavaScript:
igRegisterScript("WebGridNestedDataCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function () {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }
    const people = ctx.cell.value;
    if (people != null) {
        if (people.length === 0) return html``;
        const person = people[0];
        return html`
    <igc-expansion-panel>
        <h3 slot="title">
        ${person.Name}
        </h3>
        <div class="description">
            <div>
                <label for="title">Title</label>
                <input id='Title' type="text" name="title" value="${person.Title}" style="text-overflow: ellipsis;" />
            </div>
            <div>
                <label for="age">Age</label>
                <input id='Age' type="text" name="title" value="${person.Age}" style="text-overflow: ellipsis;" />
            </div>
        </div>
    </igc-expansion-panel>
        `;
    }
}, false);
```

And the result from this configuration is:


<code-view style="height:460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-binding-nested-data-1" >
</code-view>

### Working with Flat Data Overview

The flat data binding approach is similar to the one that we already described above, but instead of **cell value** we are going to use the `Data` property of the `GridRow`.

Since the {Platform} grid is a component for **rendering**, **manipulating** and **preserving** data records, having access to **every data record** gives you the opportunity to customize the approach of handling it. The `data` property provides you this opportunity.

Below is the data that we are going to use:

```typescript
export const DATA: any[] = [
    {
        Address: "Obere Str. 57",
        City: "Berlin",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        Country: "Germany",
        Fax: "030-0076545",
        ID: "ALFKI",
        Phone: "030-0074321",
        PostalCode: "12209",
        Region: null
    }
]
```

```razor
public class CustomersData : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem()
        {
            ID = "ALFKI",
            CompanyName = "Alfreds Futterkiste",
            ContactName = "Maria Anders",
            ContactTitle = "Sales Representative",
            Address = "Obere Str. 57",
            City = "Berlin",
            Region = "East",
            PostalCode = "12209",
            Country = "Germany",
            Phone = "030-0074321",
            Fax = "030-0076545"
        });
    }
}
```

The custom template:

```html
<igx-column field="Address" header="Address" width="25%" editable="true">
    <ng-template #compositeTemp igxCell let-cell="cell">
        <div class="address-container">
        <!-- In the Address column combine the Country, City and PostCode values of the corresponding data record -->
            <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
            <br/>
            <span><strong>City:</strong> {{cell.row.data.City}}</span>
            <br/>
            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
        </div>
    </ng-template>
</igx-column>
```

```html
<igc-column id="address" field="Address" header="Address" width="25%" editable="true"></igc-column>
```

```typescript
constructor() {
    var address = this.address = document.getElementById('address') as IgcColumnComponent;

    this._bind = () => {
        address.bodyTemplate = this.addressCellTemplate;
    }

    this._bind();
}

public addressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="address-container">
        <!-- In the Address column combine the Country, City and PostCode values of the corresponding data record -->
            <span><strong>Country:</strong> ${this.getName(ctx.cell.id.rowIndex)}</span>
            <br/>
            <span><strong>City:</strong> ${this.getCity(ctx.cell.id.rowIndex)}</span>
            <br/>
            <span><strong>Postal Code:</strong> ${this.getPostalCode(ctx.cell.id.rowIndex)}</span>
        </div>
    `;
}

public getCountry(rowId: number) {
}

public getCity(rowId: number) {
}

public getPostalCode(rowId: number) {
}
```

```razor
<IgbColumn Header="Address" Field="Address"
           Editable="true"
           BodyTemplateScript="AddressCellTemplate" />

//In JavaScript:
igRegisterScript("AddressCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div class="address-container">
    <div class="country-city">
        <span><strong>Country:</strong> ${ctx.cell.row.data.Country}</span>
        <br>
        <span><strong>City:</strong> ${ctx.cell.row.data.City}</span>
    </div>
    <div class="phone-pscode">
        <span><strong>Postal Code:</strong> ${ctx.cell.row.data.PostalCode}</span>
        <br>
        <span><strong>Phone:</strong> ${ctx.cell.row.data.Phone}</span>
    </div>
    <br />
</div>`;
}, false);    
```

Keep in mind that with the above defined template you will not be able to make editing operations, so we need an editor template.

```html
<igx-column>
    <ng-template  igxCellEditor let-cell="cell">
            <div class="address-container">
            <span>
                <strong>Country:</strong> {{cell.row.data.Country}}
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.Country" />
                </igx-input-group>
            </span>
                <br/>
                <span><strong>City:</strong> {{cell.row.data.City}}</span>
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.City" />
                </igx-input-group>
                <br/>
                <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.PostalCode" />
                </igx-input-group>
                <br/>
            </div>
    </ng-template>
</igx-column>
```

```html
<igc-column id="address" field="Address" data-type="number" width="25%" editable="true"></igc-column>
```

```typescript
constructor() {
    var address = this.address = document.getElementById('address') as IgcColumnComponent;

    this._bind = () => {
        address.inlineEditorTemplate = this.addressEditCellTemplate;
    }

    this._bind();
}

public addressEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="address-container">
            <span>
                <strong>Country:</strong> ${this.getName(ctx.cell.id)}
                <igc-input-group width="100%">
                        <input onchange="${this.updateCountry(ctx.cell.id)}" />
                </igc-input-group>
            </span>
            <br/>
            <span>
                <strong>City:</strong> ${this.getCity(ctx.cell.id)}
                <igc-input-group width="100%">
                        <input onchange="${this.updateCity(ctx.cell.id)}" />
                </igc-input-group>
            </span>
            <br/>
            <span>
                <strong>Postal Code:</strong> ${this.getPostalCode(ctx.cell.id)}
                <igc-input-group width="100%">
                        <input onchange="${this.updatePostalCode(ctx.cell.id)}" />
                </igc-input-group>
            </span>
            <br/>
        </div>
    `;
}

public updateCountry(rowId: number) {
}

public updateCity(rowId: number) {
}

public updatePostalCode(rowId: number) {
}
```

```razor
<IgbColumn Header="Address" Field="Address"
           Editable="true"           
           InlineEditorTemplateScript="AddressEditCellTemplate" />

//In JavaScript:
igRegisterScript("AddressEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function () {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }

    return html`<div class="address-container--edit">
    <div>
        <span><strong>Country:</strong></span>
        <input id='Country' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.Country}"></input>
        <br>
        <span><strong>City:</strong></span>
        <input id='City' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.City}"></input>
    </div>
    <div>
        <span><strong>Postal Code:</strong></span>
        <input id='PostalCode' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.PostalCode}"></input>
        <br>
        <span><strong>Selected:</strong></span>
        <input id='Phone' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.Phone}"></input>
    </div>
    <br>
</div>`;
}, false);
```

### Working with Flat Data Example

Using code snippets from previous section will result in the following example of `{GridName}`

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-binding-composite-data" >
</code-view>

## Keyboard Navigation

Keyboard navigation of the `{GridName}` provides a rich variety of keyboard interactions for the user. It enhances accessibility and allows intuitive navigation through any type of elements inside (cell, row, column header, toolbar, footer, etc.).

<!-- Angular -->

Check out these resources for more information:

 - [Grid Keyboard Navigation](keyboard-navigation.md)
 - [TreeGrid Keyboard Navigation](../tree-grid/keyboard-navigation.md)
 - [Hierarchical Grid Keyboard Navigation](../hierarchical-grid/keyboard-navigation.md)
 - [Blog post](https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility) - Improving Usability, Accessibility and ARIA Compliance with Grid keyboard navigation

 <!-- end: Angular -->

<!-- Angular -->

## State Persistence

Achieving a state persistence framework is easier than ever by using the new built-in [GridState](state-persistence.md) directive.

<!-- end: Angular -->

<!-- The sizing topic is still not available thus the Sizing section is commented out. -->
<!-- ## Sizing

See the [Grid Sizing](sizing.md) topic. -->


<!-- Angular -->

## Performance (Experimental)

Design of the `{GridName}` allows it to take advantage of the Event Coalescing feature that has Angular introduced. This feature allows for improved performance with roughly around **20%** in terms of interactions and responsiveness. This feature can be enabled on application level by simply setting the `ngZoneEventCoalescing ` and `ngZoneRunCoalescing` properties to **true** in the `bootstrapModule` method:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> This is still in experimental feature for the `IgxGridComponent`. This means that there might be some unexpected behaviors in the Grid. In case of encountering any such behavior, please contact us on our [Github](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen}/discussions) page.

>[!NOTE]
> Enabling it can affects other parts of an Angular application that the `IgxGridComponent` is not related to.

<!-- end: Angular -->

## Styling {Platform} Grid
> [!NOTE]
> The grid uses **css grid layout**, which is **not supported in IE without prefixing**, consequently it will not render properly.

<!-- WebComponents -->
In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md). In case you would like to change the header background and text color, you need to set a class for the grid first:

```typescript
<igc-grid class="grid">
```

Then set the `--header-background` and `--header-text-color` CSS properties for that class:

```css
.grid {
    --header-background: #494949;
    --header-text-color: #FFF;
}
```
<!-- end: WebComponents -->

<!--  Angular -->
In [**Angular**](https://angular.io/) most of the styles are prefixed implicitly thanks to the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) plugin.

For prefixing **grid layouts** however, you need to enable the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) **grid property** with the comment `/* autoprefixer grid:on */`.

To facilitate your work, apply the comment in the `src/styles.scss` file.

 ```scss
// src/styles.scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
/* autoprefixer grid:on */
@include theme($default-palette);
 ```
<!-- end: Angular -->

## Known Limitations

|Limitation|Description|
|--- |--- |
|Column widths set in `percentage` and `px`|Currently we do not support mixing of column widths with `%` and `px`.|
|When trying to filter a column of type `number`|If a value different than `number` is entered into the filtering input, `NaN` is returned due to an incorrect cast.|
|Grid `width` does not depend on the column widths | The `width` of all columns does not determine the spanning of the grid itself. It is determined by the parent container dimensions or the defined grid's `width`.|
|Grid nested in parent container | When grid's `width` is not set and it is placed in a parent container with defined dimensions, the grid spans to this container.|
|Grid `OnPush` ChangeDetectionStrategy |The grid operates with `ChangeDetectionStrategy.OnPush` so whenever some customization appears make sure that the grid is notified about the changes that happens.|
| Columns have a minimum allowed column width. Depending on the `displayDensity` option, they are as follows: <br/>"compact": 56px <br/> "cosy": 64px <br/> "comfortable ": 80px | If width less than the minimum allowed is set it will not affect the rendered elements. They will render with the minimum allowed width for the corresponding `displayDensity`. This may lead to an unexpected behavior with horizontal virtualization and is therefore not supported.
| Row height is not affected by the height of cells that are not currently rendered in view. | Because of virtualization a column with a custom template (that changes the cell height) that is not in the view will not affect the row height. The row height will be affected only while the related column is scrolled in the view.

## API References

* `{GridName}`
* `Column`
* `Cell`
* `CellTemplateContext`
* `GridRow`
* `GridToolbar`
* `Paginator`

<!-- Angular -->

## Theming Dependencies

* **Icon Theme**
* **InputGroup Theme**
* **Chip Theme**
* **Ripple Theme**
* **Button Theme**
* **Overlay Theme**
* **DropDown Theme**
* **Calendar Theme**
* **SnackBar Theme**
* **Badge Theme**

## Tutorial video

Learn more about creating a {Platform} `{GridName}` in our short tutorial video:

> [!Video https://www.youtube.com/embed/Xv_fQVQ8fmM]

<!-- end: Angular -->

## Additional Resources

<!-- Angular -->

* [Grid Sizing](sizing.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Column Data Types](column-types.md#default-template)
* [Build CRUD operations with Grid](../general/how-to/how-to-perform-crud.md)

<!-- end: Angular -->

<!-- Blazor -->

* [Grid Sizing](sizing.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Column Data Types](column-types.md#default-template)

<!-- end: Blazor -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
