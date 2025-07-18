---
title: {Platform} {ComponentTitle} Editing Rows - {ProductName}
_description: Want to enable row editing in {Platform} {ComponentTitle}? Need a powerful API for CRUD operations? Try our {ProductName} {ComponentTitle} rows editing component!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridRowEditing}
---

# {Platform} {ComponentTitle} Row Editing

The {ProductName} Row Editing feature in {Platform} {ComponentTitle} allows editing data directly within the `{ComponentName}`. On top of this convenient way to manipulate data, there’s a powerful API for full CRUD operations. You can perform grid row editing by clicking on a row and pressing **Enter key**. Another quick way is to double click with the mouse on the row that needs to be modified.

## {Platform} {ComponentTitle} Row Editing Example

The following sample demonstrates how to enable row editing in the `{ComponentName}`. Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

`sample="/{ComponentSample}/row-editing-options", height="550", alt="{Platform} {ComponentTitle} Editing Rows Example"`



> [!Note]
> When a row is in edit mode, clicking on a cell in another row will act like the "Done" button is pressed, submitting all changes made in the previous row. If the newly focused cell is editable, the new row enters edit mode as well. However, if the cell is not editable, only the previous row exits edit mode.

## Row Editing Usage

<!-- Angular -->

To get started import the `{ComponentModule}` in the **app.module.ts** file:

```typescript
// app.module.ts

import { {ComponentModule} } from 'igniteui-{Platform}';

@NgModule({
    imports: [{ComponentModule}],
})
export class AppModule {}
```

<!-- end: Angular -->

Define a `{ComponentName}` with bound data source and `RowEditable` set to true:

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="Reorder Level" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="Units In Stock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" width="100%" height="500px" row-editable="true">
    <igc-column field="ProductID" header="Product ID" editable="false"></igc-column>
    <igc-column field="ReorderLevel" header="Reorder Level" data-type="number"></igc-column>
    <igc-column field="ProductName" header="Product Name" data-type="string"></igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" header="Units In Stock" data-type="number"></igc-column>
    <igc-column field="OrderDate" field="Order Date" data-type="date"></igc-column>
    <igc-column field="Discontinued" data-type="boolean"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid  = document.getElementById('grid') as {ComponentName}Component;
    var unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;
    grid.data = this.data;
    unitsInStock.bodyTemplate = this.unitsInStockCellTemplate;
}

public unitsInStockCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<input name="units" value="${ctx.cell.value}" style="color: black" />`;
}
```
<!-- end: WebComponents -->

```tsx
const unitsInStockCellTemplate = (ctx: IgrCellTemplateContext) => {
    return (
        <>
            <input name="units" value={ctx.cell.value} style={{color: "black"}} />;
        </>
    );
}

<{ComponentSelector} primaryKey="ProductID" width="100%" height="500px" rowEditable={true}>
    <IgrColumn field="ProductID" header="Product ID" editable={false}></IgrColumn>
    <IgrColumn field="ReorderLevel" header="ReorderLever" dataType="number"></IgrColumn>
    <IgrColumn field="ProductName" header="ProductName" dataType="string"></IgrColumn>
    <IgrColumn field="UnitsInStock" header="UnitsInStock" dataType="number" bodyTemplate={unitsInStockCellTemplate}></IgrColumn>
    <IgrColumn field="OrderDate" dataType="date"></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean"></IgrColumn>
</{ComponentSelector}>
```

```razor
 <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate="false"
             Data="northwindEmployees"
             RowEditable="true">
        <IgbColumn Field="ID" Editable="false"></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City"></IgbColumn>
        <IgbColumn Field="CompanyName"></IgbColumn>
        <IgbColumn Field="Fax"></IgbColumn>
        <IgbColumn Field="Address"></IgbColumn>
        <IgbColumn Field="PostalCode"></IgbColumn>
        <IgbColumn Field="Country"></IgbColumn>
        <IgbColumn Field="Phone"></IgbColumn>
    </{ComponentSelector}>

    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;

        }
    }
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="Name" header="Name" [dataType]="'string'"></igx-column>
    <igx-column field="Age" header="Reorder Level" [dataType]="'number'"></igx-column>
    <igx-column field="Title" header="Title" [dataType]="'string'">
    <igx-column field="HireDate" header="Hire Date" [dataType]="'date'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ID" width="100%" height="500px" row-editable="true">
    <igc-column field="Name" header="Name" data-type="string"></igc-column>
    <igc-column field="Age" header="Age" data-type="number"></igc-column>
    <igc-column field="Title" header="Title" data-type="string"></igc-column>
    <igc-column field="HireDate" field="Hire Date" data-type="date"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid  = document.getElementById('grid') as {ComponentName}Component;
    grid.data = this.data;
}
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} primaryKey="ID" width="100%" height="500px" rowEditable={true}>
    <IgrColumn field="Name" header="Name" dataType="string"></IgrColumn>
    <IgrColumn field="Age" header="Age" dataType="number"></IgrColumn>
    <IgrColumn field="Title" header="Title" dataType="string"></IgrColumn>
    <IgrColumn field="HireDate" header="Hire Date" dataType="date"></IgrColumn>
</{ComponentSelector}>
```

```razor
 <{ComponentSelector} Width="100%" Height="100%" PrimaryKey="ID" AutoGenerate="false" Data="data" RowEditable="true">
        <IgbColumn Field="Name" Header="Name" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="Age" Header="Age" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="Title" Header="Title" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date"></IgbColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="Reorder Level" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="Units In Stock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" row-editable="true">
    <igc-column field="Artist" header="Artist" data-type="string"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image" editable="false"> </igc-column>
    <igc-column field="Debut" header="Debut" data-type="number"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number"> </igc-column>
        
    <igc-row-island child-data-key="Albums" auto-generate="false" primary-key="Album" row-editable="true">
        <igc-column field="Album" header="Album" data-type="string"> </igc-column>
        <igc-column field="LaunchDate" header="Launch Date" data-type="date"> </igc-column>
        <igc-column field="BillboardReview" header="Billboard Review" data-type="string"> </igc-column>
        <igc-column field="USBillboard200" header="US Billboard 200" data-type="string"> </igc-column>
        <igc-row-island child-data-key="Songs" auto-generate="false" primary-key="Number" row-editable="true">
            <igc-column field="Number" header="No." data-type="string"> </igc-column>
            <igc-column field="Title" header="Title" data-type="string"> </igc-column>
            <igc-column field="Released" header="Released" data-type="date"> </igc-column>
            <igc-column field="Genre" header="Genre" data-type="string"> </igc-column>
        </igc-row-island>
    </igc-row-island>

    <igc-row-island child-data-key="Tours" auto-generate="false" primary-key="Tour" row-editable="true">
        <igc-column field="Tour" header="Tour" data-type="string"> </igc-column>
        <igc-column field="StartedOn" header="Started on" data-type="string"> </igc-column>
        <igc-column field="Location" header="Location" data-type="string"> </igc-column>
        <igc-column field="Headliner" header="Headliner" data-type="string"> </igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var grid  = document.getElementById('hierarchicalGrid') as {ComponentName}Component;
    grid.data = this.data;
}
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<IgrHierarchicalGrid autoGenerate={false} data={singersData} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" rowEditable={true}>
    <IgrColumn field="Artist" header="Artist" dataType="string" />
    <IgrColumn field="Photo" header="Photo" dataType="image" editable={false} />
    <IgrColumn field="Debut" header="Debut" dataType="number" />
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" />
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" />

    <IgrRowIsland childDataKey="Albums" autoGenerate={false} primaryKey="Album" rowEditable={true}>
        <IgrColumn field="Album" header="Album" dataType="string" />
        <IgrColumn field="LaunchDate" header="Launch Date" dataType="date" />
        <IgrColumn field="BillboardReview" header="Billboard Review" dataType="string" />
        <IgrColumn field="USBillboard200" header="US Billboard 200" dataType="string" />

        <IgrRowIsland childDataKey="Songs" autoGenerate={false} primaryKey="Number" rowEditable={true}>
            <IgrColumn field="Number" header="No." dataType="string" />
            <IgrColumn field="Title" header="Title" dataType="string" />
            <IgrColumn field="Released" header="Released" dataType="date" />
            <IgrColumn field="Genre" header="Genre" dataType="string" />
        </IgrRowIsland>
    </IgrRowIsland>

    <IgrRowIsland childDataKey="Tours" autoGenerate={false} primaryKey="Tour" rowEditable={true}>
        <IgrColumn field="Tour" header="Tour" dataType="string" />
        <IgrColumn field="StartedOn" header="Started on" dataType="string" />
        <IgrColumn field="Location" header="Location" dataType="string" />
        <IgrColumn field="Headliner" header="Headliner" dataType="string" />
    </IgrRowIsland>
</IgrHierarchicalGrid>

```
<!-- end: React -->

<!-- Blazor -->
```razor
<IgbHierarchicalGrid
AutoGenerate="false"
Data="SingersData"
Name="hierarchicalGrid"
@ref="hierarchicalGrid"
Id="hierarchicalGrid"
PrimaryKey="ID"
RowEditable="true">
    <IgbColumn
    Field="Artist"
    Header="Artist"
    DataType="GridColumnDataType.String">
    </IgbColumn>
    <IgbColumn
    Field="Photo"
    Header="Photo"
    DataType="GridColumnDataType.Image"
    Editable="false">
    </IgbColumn>
    <IgbColumn
    Field="Debut"
    Header="Debut"
    DataType="GridColumnDataType.Number">
    </IgbColumn>
    <IgbColumn
    Field="GrammyNominations"
    Header="Grammy Nominations"
    DataType="GridColumnDataType.Number">
    </IgbColumn>
    <IgbColumn
    Field="GrammyAwards"
    Header="Grammy Awards"
    DataType="GridColumnDataType.Number">
    </IgbColumn>
    
    <IgbRowIsland
    ChildDataKey="Albums"
    AutoGenerate="false"
    PrimaryKey="Album"
    RowEditable="true">
        <IgbColumn
        Field="Album"
        Header="Album"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="LaunchDate"
        Header="Launch Date"
        DataType="GridColumnDataType.Date">
        </IgbColumn>
        <IgbColumn
        Field="BillboardReview"
        Header="Billboard Review"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="USBillboard200"
        Header="US Billboard 200"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        
        <IgbRowIsland
        ChildDataKey="Songs"
        AutoGenerate="false"
        PrimaryKey="Number"
        RowEditable="true">
            <IgbColumn
            Field="Number"
            Header="No."
            DataType="GridColumnDataType.String">
            </IgbColumn>
            <IgbColumn
            Field="Title"
            Header="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>
            <IgbColumn
            Field="Released"
            Header="Released"
            DataType="GridColumnDataType.Date">
            </IgbColumn>
            <IgbColumn
            Field="Genre"
            Header="Genre"
            DataType="GridColumnDataType.String">
            </IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>
    
    <IgbRowIsland
    ChildDataKey="Tours"
    AutoGenerate="false"
    PrimaryKey="Tour"
    RowEditable="true">
        <IgbColumn
        Field="Tour"
        Header="Tour"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="StartedOn"
        Header="Started on"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="Location"
        Header="Location"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="Headliner"
        Header="Headliner"
        DataType="GridColumnDataType.String">
        </IgbColumn>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```
<!-- end: Blazor -->
<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> Setting primary key is mandatory for row editing operations.

> [!Note]
> Enabling editing for individual columns is not necessary. Using the `RowEditable` property in the `{ComponentName}`, all rows, with defined `Field` property (excluding the primary row) will be editable. If you want to disable editing for a specific column, simply set the `Editable` input of that column to `false`.

<!-- Angular -->
```typescript
import { Component, ViewChild } from '@{Platform}/core';
import { data } from './data';
import { {ComponentName} } from 'igniteui-{Platform}';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [app-grid-row-edit.component.css],
    templateUrl: 'app-grid-row-edit.component.html'
})
export class {ComponentName}RowEditSampleComponent {
    @ViewChild('gridRowEdit', { read: {ComponentName} }) public gridRowEdit: {ComponentName};

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
<!-- end: Angular -->


> [!Note]
> The `{ComponentName}` utilizes `BaseTransactionService` - an internal provider that holds pending cell changes until the row state is either submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and `{ComponentName}` is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When `{ComponentName}` is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the `{ComponentName}`, the cell will also stay in edit mode.

- When perform *sorting*, *filtering*, *searching* and *hiding* operations, will revert all current changes in the row and row will exit edit mode.

- When perform *paging*, *resizing*, *pinning* and *moving* operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when `{ComponentName}` is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.


## Keyboard Navigation

- <kbd>Enter</kbd> and <kbd>F2</kbd> enters row edit mode

- <kbd>Esc</kbd> exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- <kbd>Tab</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.


## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

<!-- ComponentStart: Grid -->

- Expanding and collapsing grouped rows will not terminate editing for the current row.

<!-- ComponentEnd: Grid -->

## Customizing Row Editing Overlay

### Customizing Text

Customizing the text of the row editing overlay is possible using via templating.

The `RowChangesCount` property is exposed and it holds the count of the changed cells.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

```razor
igRegisterScript("RowEditTextTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
   Changes: ${ctx.implicit}
</div>`;
}, false);
```

```ts
public rowEditTextTemplate = (ctx: IgcGridRowEditTextTemplateContext) => {
    return html`Changes: ${ctx.implicit}`;
}
```

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
const rowEditTextTemplate = (ctx: IgrGridRowEditTextTemplateContext) =>{
    return (
        <>
            Changes: {ctx.implicit}
        </>
    );
}
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

### Customizing Buttons

Customizing the buttons of the row editing overlay also possible via templating.

<!-- Angular -->
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `RowEditTabStopDirective`.
<!-- end:Angular -->

```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
```

```razor
 igRegisterScript("RowEditActionsTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.endRowEdit = ctx.implicit;
    return html`<div>
  	<button @click="(event) => endRowEdit(false, event)">Cancel</button>
	<button @click="(event) => endRowEdit(true, event)">Apply</button>
</div>`;
}, false);
```

```ts
public rowEditActionsTemplate = (ctx: IgcGridRowEditActionsTemplateContext) => {
    const endRowEdit = ctx.implicit;
    return html`
        <button @click="${(event) => endRowEdit(false, event)}">Cancel</button>
        <button @click="${(event) => endRowEdit(true, event)}">Apply</button>
    `;
}
```

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
const rowEditActionsTemplate =(ctx: IgrGridRowEditActionsTemplateContext) => {
    const endRowEdit = ctx.implicit;
    return (
        <>
            <button onClick={(event) => endRowEdit(false, event)}>Cancel</button>
            <button onClick={(event) => endRowEdit(true, event)}>Apply</button>
        </>
    );
}
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- Angular -->

## Styling

Using the [{ProductName} Theme Library](themes/index.md), we can greatly alter the Row Editing overlay.

The Row Editing overlay is a composite element - its UI is comprised of a couple of other components:

    - [igx-banner](banner.md) in order to render its contents
    - [igx-button](button.md)s are rendered in the default template (for the `Done` and `Cancel` buttons).

In the below example, we will make use of those two components' styling options, ([button styling](button.md#styling) & [banner-styling](../banner.md#styling)), to customize the experience of our `{ComponentName}`'s Row Editing.

We will also style the current cell's editor and background to make it more distinct. You can learn more about cell styling [here](cell-editing.md#styling).

### Import Theme

The easiest way to style the Row Editing banner is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the {ProductName} Sass framework:

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

Once we've imported the themes file, we can create custom themes.

#### Define the Theme

We can now define a custom [banner theme]({environment:sassApiUrl}/index.html#function-banner-theme) that will affect our Row Editing background and make use of one of the predefined palettes namely `$purple-palette` :

```scss
    $my-light-gray: #e3e3e3;
    $my-banner-palette: $purple-palette;

    $banner-theme: banner-theme(
        $banner-background: $my-light-gray,
        $banner-message-color: color($my-banner-palette, "secondary", 600)
    );
```

Here we are using `my-banner-palette` in conjunction with `igx-color` (exposed by the theme library) for generating our colors.

### Include the Theme

All we have to do now is apply the theme with a Sass `@include` statement. We pass our newly defined `$banner-theme` through the **igx-banner mixin**:

```scss
@include banner($banner-theme);
```

This will apply our custom banner theme to the Row Editing overlay. However, since we defined these in the global styles file, these styles will also apply to **all** banners in our application.

### Component Styles

Since the Row Editing overlay makes use of a lot of other components' themes, styling it via the global styles can affect other parts of our application (e.g. banners, buttons, etc.). The best way to prevent that is to scope our banner theme. We can define our styles (including the [theme import](#import-theme)) in the component containing our `{ComponentName}`.

> [!Note]
>If the component is using an [Emulated](themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
>We wrap the statement inside of a `:host` selector to prevent our styles from affecting elements *outside of* our component:

```scss
// custom.component.scss

:host {
    ::ng-deep {
        @include banner($banner-theme);
    }
}
```

With the above syntax, our custom banner theme properly applies to the grid's Row Editing overlay.

### Custom Templates

To further customize our Row Editing overlay, we can pass a custom template so we can style the `Done` and `Cancel` buttons separately:

```html
<!-- in component.html -->
<{ComponentSelector}>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</{ComponentSelector}>
```

After we've defined our custom buttons, we can make use of the [button-theme]({environment:sassApiUrl}/index.html#function-button-theme) to style them. You can learn more about `igx-button` styling [here](../button.md#styling). We can create a custom theme for our `Done` and `Cancel`:

```scss
// custom.component.scss
// ...

$button-theme: button-theme(
  $palette: $purple-palette
);

.custom-buttons {
    @include button($button-theme);
}
```

We scope our `@include` statement in `.custom-buttons` so that it is only applied to the `Done`and `Cancel` buttons.

### Demo

After styling the banner and buttons, we also define a custom style for [the cell in edit mode](cell-editing.md#styling). The result of all the combined styles can be seen below:

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-editing-style", height="560", alt="{Platform} {ComponentTitle} Row Editing Styling Example"`



> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-banner-banner-background: #e3e3e3;
    --ig-banner-banner-message-color: #423589;
}
```
<!-- ComponentEnd: TreeGrid -->

### Demo

`sample="/{ComponentSample}/row-editing-style", height="560", alt="{Platform} {ComponentTitle} Row Editing Styling Example"`


<!-- end: WebComponents, Blazor, React -->

## Known Issues and Limitations

- When the grid has no `PrimaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

* Row Selection
* Row Expand/collapse
* Row Editing
* Row Pinning

## API References

* `RowEditable`
* `RowEditEnter`
* `RowEdit`
* `RowEditDone`
* `EndEdit`
* `Field`
* `Editable`
* `PrimaryKey`
* `{ComponentName}`

## Additional Resources

<!-- Angular -->

* [Build CRUD operations with igxGrid](/general/how-to/how-to-perform-crud.md)

* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Transactions](batch-editing.md)

<!-- end: Angular -->

<!-- Blazor -->

<!-- ComponentStart: Grid -->
* [{ComponentTitle} Editing](editing.md)
<!-- ComponentEnd: Grid -->

<!-- * [{ComponentTitle} Transactions](batch-editing.md) -->

<!-- end: Blazor -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
