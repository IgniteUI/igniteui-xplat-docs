---
title: {Platform} {ComponentTitle} Column Pinning - {ProductName}
_description: Want to use the Pinning feature of the {ProductName} when you develop your next app? Easily lock column or change column order with rich API.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Column Pinning

Column Pinning in {ProductName} allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the `{ComponentName}`. The {Platform} {ComponentTitle} has a built-in column pinning UI, which can be used through the `{ComponentName}`'s toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning feature.

## {Platform} {ComponentTitle} Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the `{ComponentName}`.

`sample="/{ComponentSample}/column-pinning", height="510", alt="{Platform} {ComponentTitle} Column Pinning Example"`



## Column Pinning API

Column pinning is controlled through the `Pinned` property of the `Column`. Pinned columns are rendered on the left side of the `{ComponentName}` by default and stay fixed through horizontal scrolling of the unpinned columns in the `{ComponentName}` body.

<!-- ComponentStart: Grid -->
```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```

```razor
<IgbGrid Data=data AutoGenerate=false>
    <IgbColumn Field="Name" Pinned=true></IgbColumn>
    <IgbColumn Field="AthleteNumber"></IgbColumn>
    <IgbColumn Field="TrackProgress"></IgbColumn>
</IgbGrid>
```

```html
<igc-grid id="grid1" width="700px" auto-generate="false">
    <igc-column field="Name" pinned="true"></igc-column>
    <igc-column field="AthleteNumber"></igc-column>
    <igc-column field="TrackProgress"></igc-column>
    <igc-paginator per-page="10">
    </igc-paginator>
</igc-grid>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```
```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="false">
    <igc-column field="Name" pinned="true"></igc-column>
    <igc-column field="Title"></igc-column>
    <igc-column field="ID"></igc-column>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid id="hierarchicalGrid" class="hgrid" auto-generate="false"
        height="600px" width="800px" >
    <igc-column field="Artist" width="200px" pinned="true"></igc-column>
    <igc-column field="Debut" width="200px"></igc-column>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

You may also use the `{ComponentName}`'s `PinColumn` or `UnpinColumn` methods of the `{ComponentName}` to pin or unpin columns by their field name:

<!-- ComponentStart: Grid -->
```typescript
this.grid.pinColumn('AthleteNumber');
this.grid.unpinColumn('Name');
```

```razor
@code {
    grid.PinColumn("AthleteNumber", 0);
    grid.UnpinColumn("Name", 0);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
this.hierarchicalGrid.pinColumn('Artist');
this.hierarchicalGrid.unpinColumn('Debut');
```
<!-- ComponentEnd: HierarchicalGrid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPinnedScript` event and providing a JavaScript function for changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Blazor -->

<!-- Angular -->

```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" (columnPin)="columnPinning($event)"></{ComponentSelector}>
```

<!-- end: Angular -->

<!-- WebComponents -->

```html
<{ComponentSelector} id="dataGrid" auto-generate="true"></{ComponentSelector}>
```

```typescript
constructor() {
    var dataGrid = this.dataGrid = document.getElementById('dataGrid') as IgcGridComponent;
    dataGrid.data = this.data;
    dataGrid.addEventListener("columnPin", this.columnPinning);
}
```

<!-- end: WebComponents -->

```typescript
public columnPinning(event) {
    if (event.detail.column.field === 'Name') {
        event.detail.insertAtIndex = 0;
    }
}
```

```razor
<{ComponentSelector} Data=data AutoGenerate=true ColumnPinScript="onColumnPin"/>


//In JavaScript
function onColumnPin(e) {
    if (e.detail.column.field == "Country") {
        e.detail.insertAtIndex = 0;
    }
}

igRegisterScript("onColumnPin", onColumnPin, false);
```

## Pinning Position

You can change the column pinning position via the `Pinning` configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></{ComponentSelector}>
```

```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="dataGrid" auto-generate="true"></{ComponentSelector}>
```

```typescript
var grid = (this.grid = document.getElementById('dataGrid') as any) as IgcGridComponent;
grid.pinning = { columns: ColumnPinningPosition.End };
```
<!-- end: WebComponents -->

```razor
<{ComponentSelector} Data=data AutoGenerate=true Pinning="pinningConfig"></IgbGrid>

@code {
    private IgbPinningConfig pinningConfig = new() {
        Columns = ColumnPinningPosition.End
    };
}
```

### Demo

`sample="/{ComponentSample}/column-pinning-right-side", height="510", alt="{Platform} {ComponentTitle} column pinning right side"`


## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

<!-- ComponentStart: Grid -->
```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderStyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
</igx-grid>
```
```html
<igc-grid id="grid1" width="100%" height="500px" auto-generate="false">
        <igc-column id="Name" field="Name" data-type="String" width="250px"></igc-column>
        <igc-column id="Title" field="Title" data-type="String" width="300px"></igc-column>
        <igc-column id="ID" field="ID" data-type="Number" width="200px"></igc-column>
        <igc-column id="HireDate" field="HireDate" header="Hire Date" data-type="Date" width="200px"></igc-column>
        <igc-column id="Age" field="Age" data-type="Number" width="200px"></igc-column>
        <igc-column id="Address" field="Address" data-type="String" width="200px"></igc-column>
        <igc-column id="City" field="City" data-type="String" width="200px"></igc-column>
        <igc-column id="Country" field="Country" data-type="String" width="200px"></igc-column>
        <igc-column id="Fax" field="Fax" data-type="String" width="200px"></igc-column>
        <igc-column id="PostalCode" field="PostalCode" header="Postal Code" data-type="String" width="200px"></igc-column>
        <igc-column id="Phone" field="Phone" data-type="String" width="200px"></igc-column>
</igc-grid>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var Name = this.Name = document.getElementById('Name') as IgcColumnComponent;
    var Title = this.Title = document.getElementById('Title') as IgcColumnComponent;
    var ID = this.ID = document.getElementById('ID') as IgcColumnComponent;
    var HireDate = this.HireDate = document.getElementById('HireDate') as IgcColumnComponent;
    var Age = this.Age = document.getElementById('Age') as IgcColumnComponent;
    var Address = this.Address = document.getElementById('Address') as IgcColumnComponent;
    var City = this.City = document.getElementById('City') as IgcColumnComponent;
    var Country = this.Country = document.getElementById('Country') as IgcColumnComponent;
    var Fax = this.Fax = document.getElementById('Fax') as IgcColumnComponent;
    var PostalCode = this.PostalCode = document.getElementById('PostalCode') as IgcColumnComponent;
    var Phone = this.Phone = document.getElementById('Phone') as IgcColumnComponent;
    grid.data = this.data;
    Name.headerTemplate = this.pinHeaderTemplate;
    Title.headerTemplate = this.pinHeaderTemplate;
    ID.headerTemplate = this.pinHeaderTemplate;
    HireDate.headerTemplate = this.pinHeaderTemplate;
    Age.headerTemplate = this.pinHeaderTemplate;
    Address.headerTemplate = this.pinHeaderTemplate;
    City.headerTemplate = this.pinHeaderTemplate;
    Country.headerTemplate = this.pinHeaderTemplate;
    Fax.headerTemplate = this.pinHeaderTemplate;
    PostalCode.headerTemplate = this.pinHeaderTemplate;
    Phone.headerTemplate = this.pinHeaderTemplate;
}


public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" click="${toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>
    `;
}
```

```razor
<IgbGrid AutoGenerate="false" Data="CustomersData" Name="grid" @ref="grid">
    <IgbColumn Field="ID" Hidden="true"></IgbColumn>

    <IgbColumn Field="CompanyName" Header="Company" Width="300px" 
    HeaderTemplateScript="WebGridPinHeaderTemplate" Name="column1" @ref="column1"></IgbColumn>

    <IgbColumn Field="ContactName" Header="Name" Width="200px" Pinned="true"
    HeaderTemplateScript="WebGridPinHeaderTemplate" Name="column2" @ref="column2"> </IgbColumn>

    <IgbColumn Field="ContactTitle" Header="Title" Width="200px" Pinned="true"
    HeaderTemplateScript="WebGridPinHeaderTemplate" Name="column3" @ref="column3"> </IgbColumn>
</IgbGrid>

// In JavaScript
igRegisterScript("WebGridPinHeaderTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleColumnPin = function toggleColumnPin(field) {
        var grid = document.getElementsByTagName("igc-grid")[0];
        var col = grid.getColumnByName(field);
        col.pinned = !col.pinned;
        grid.markForCheck();
    }
    return html`<div>
    <span style="float:left">${ctx.column.field}</span>
    <span style="float:right" onpointerdown='toggleColumnPin("${ctx.column.field}")'>📌</span>
</div>`;
}, false);
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="false"
    width="100%" height="620px">
    <igc-column id="Name" field="Name" data-type="String" width="250px"></igc-column>
    <igc-column id="Title" field="Title" data-type="String" width="300px"></igc-column>
    <igc-column id="ID" field="ID" data-type="Number" width="200px"></igc-column>
    <igc-column id="HireDate" field="HireDate" header="Hire Date" data-type="Date" width="200px"></igc-column>
    <igc-column id="Age" field="Age" data-type="Number" width="200px"></igc-column>
    <igc-column id="Address" field="Address" data-type="String" width="200px"></igc-column>
    <igc-column id="City" field="City" data-type="String" width="200px"></igc-column>
    <igc-column id="Country" field="Country" data-type="String" width="200px"></igc-column>
    <igc-column id="Fax" field="Fax" data-type="string" width="200px"></igc-column>
    <igc-column id="PostalCode" field="PostalCode" header="Postal Code" data-type="String" width="200px"></igc-column>
    <igc-column id="Phone" field="Phone" data-type="String" width="200px"></igc-column>
</igc-tree-grid>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    var Name = this.Name = document.getElementById('Name') as IgcColumnComponent;
    var Title = this.Title = document.getElementById('Title') as IgcColumnComponent;
    var ID = this.ID = document.getElementById('ID') as IgcColumnComponent;
    var HireDate = this.HireDate = document.getElementById('HireDate') as IgcColumnComponent;
    var Age = this.Age = document.getElementById('Age') as IgcColumnComponent;
    var Address = this.Address = document.getElementById('Address') as IgcColumnComponent;
    var City = this.City = document.getElementById('City') as IgcColumnComponent;
    var Country = this.Country = document.getElementById('Country') as IgcColumnComponent;
    var Fax = this.Fax = document.getElementById('Fax') as IgcColumnComponent;
    var PostalCode = this.PostalCode = document.getElementById('PostalCode') as IgcColumnComponent;
    var Phone = this.Phone = document.getElementById('Phone') as IgcColumnComponent;
    treeGrid.data = this.data;
    Name.headerTemplate = this.pinHeaderTemplate;
    Title.headerTemplate = this.pinHeaderTemplate;
    ID.headerTemplate = this.pinHeaderTemplate;
    HireDate.headerTemplate = this.pinHeaderTemplate;
    Age.headerTemplate = this.pinHeaderTemplate;
    Address.headerTemplate = this.pinHeaderTemplate;
    City.headerTemplate = this.pinHeaderTemplate;
    Country.headerTemplate = this.pinHeaderTemplate;
    Fax.headerTemplate = this.pinHeaderTemplate;
    PostalCode.headerTemplate = this.pinHeaderTemplate;
    Phone.headerTemplate = this.pinHeaderTemplate;
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" click="${toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>
    `;
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
        <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
            <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
            <igx-column field="Quantity" width="150px"></igx-column>
            <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid id="hGrid" class="hierarchicalGrid" auto-generate="false"
    height="500px" width="100%">
    <igc-column id="CompanyName" field="CompanyName" header="Company Name" width="200px" pinned="true"></igx-column>
    <igc-column id="ContactName" field="ContactName" header="Contact Name" width="150px"></igx-column>
    <igc-column id="ContactTitle" field="ContactTitle" header="Contact Title" width="200px"></igx-column>
    <igc-row-island key="Orders" auto-generate="false">
        <igc-column id="OrderDate" field="OrderDate" header="Order Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="RequiredDate" field="RequiredDate" header="Required Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="ShippedDate" field="ShippedDate" header="Shipped Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="ShipVia" field="ShipVia" header="Ship Via" width="150px"></igx-column>
        <igc-row-island key="OrderDetails" auto-generate="false">
            <igc-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
            <igc-column field="Quantity" width="150px"></igx-column>
            <igc-column field="Discount" width="150px"></igx-column>
        </igc-row-island>
    </igc-row-island>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var hGrid = this.hGrid = document.getElementById('hGrid') as IgcHierarchicalGridComponent;
    var CompanyName = this.CompanyName = document.getElementById('CompanyName') as IgcColumnComponent;
    var ContactName = this.ContactName = document.getElementById('ContactName') as IgcColumnComponent;
    var ContactTitle = this.ContactTitle = document.getElementById('ContactTitle') as IgcColumnComponent;

    var OrderDate = this.OrderDate = document.getElementById('OrderDate') as IgcColumnComponent;
    var RequiredDate = this.RequiredDate = document.getElementById('RequiredDate') as IgcColumnComponent;
    var ShippedDate = this.ShippedDate = document.getElementById('ShippedDate') as IgcColumnComponent;
    var ShipVia = this.ShipVia = document.getElementById('ShipVia') as IgcColumnComponent;

    hGrid.data = this.data;
    CompanyName.headerTemplate = this.pinHeaderTemplate;
    ContactName.headerTemplate = this.pinHeaderTemplate;
    ContactTitle.headerTemplate = this.pinHeaderTemplate;
    OrderDate.headerTemplate = this.pinHeaderTemplate;
    RequiredDate.headerTemplate = this.pinHeaderTemplate;
    ShippedDate.headerTemplate = this.pinHeaderTemplate;
    ShipVia.headerTemplate = this.pinHeaderTemplate;
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" click="${toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>
    `;
}
```
<!-- ComponentEnd: HierarchicalGrid -->

On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: IgcColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

### Demo

`sample="/{ComponentSample}/column-pinning-options", height="510", alt="{Platform} {ComponentTitle} column pinning options"`


## Pinning Limitations

*   Setting column widths in percentage (%) explicitly makes the `{ComponentName}` body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the `{ComponentName}`.

<!-- Angular -->
<!-- ComponentStart: Grid -->

## Styling

The `{ComponentName}` allows styling through the [{ProductName} Theme Library](../themes/styles.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Pinning styling.

### Importing Global Theme
To begin the customization of the Pinning feature, you need to import the `index` file, where all styling functions and mixins are located.
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Defining Custom Theme
Next, create a new theme, that extends the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the parameters, required to customize the Pinning feature as desired.

```scss
$custom-theme: grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```

### Defining a Custom Color Palette
In the approach, that was described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.
`igx-palette` generates a color palette, based on provided primary and secondary colors.

 ```scss
$primary-color: #292826;
$secondary-color: #ffcd0f;

$custom-palette: palette(
  $primary: $primary-color,
  $secondary: $secondary-color
);
```

After a custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors.


```scss
$custom-theme: grid-theme(
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: color($custom-palette, "secondary", 500),
    $cell-active-border-color: color($custom-palette, "secondary", 500)
);
```

The `$custom-theme` contains the same properties as the one in the previous section, but this time the colors are not hardcoded. Instead, the custom `igx-palette` was used and the colors were obtained through its primary and secondary colors, with a given color variant.

### Defining Custom Schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/sass/schemas.md). The **schema** is the recipe of a theme.
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_light_grid`.
```scss
$custom-grid-schema: extend($_light-grid,(
    pinned-border-width: 5px,
    pinned-border-style: double,
    pinned-border-color: color: ("secondary", 500),
    cell-active-border-color: color: ("secondary", 500)
));
```
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.
```scss
$my-custom-schema: extend($light-schema, (
    igx-grid: $custom-grid-schema
));
$custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

### Applying the Custom Theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include grid($custom-theme);
```

### Scoped Component Theme

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.
 > [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 > [!Note]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```
### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/column-pinning-styles", height="506", alt="{Platform} {ComponentTitle} column pinning styles"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

<!-- WebComponents, Blazor -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --igx-grid-pinned-border-width: 5px;
    --igx-grid-pinned-border-color: #FFCD0F;
    --igx-grid-pinned-border-style: double;
    --igx-grid-cell-active-border-color: #FFCD0F;
}
```
### Demo

`sample="/{GridSample}/column-pinning-styles", height="510", alt="{Platform} {ComponentTitle} Pinning Styling Example"`

<!-- end: WebComponents, Blazor -->

## API References
* `{ComponentName}`
* `Column`

## Additional Resources
<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
