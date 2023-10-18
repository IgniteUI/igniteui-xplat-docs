---
title: {Platform} {ComponentTitle} Editing Rows - {ProductName}
_description: Want to enable row editing in {Platform} {ComponentTitle}? Need a powerful API for CRUD operations? Try our {ProductName} {ComponentTitle} rows editing component!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Row Editing

The {ProductName} Row Editing feature in {Platform} {ComponentTitle} allows editing data directly within the `Grid`. On top of this convenient way to manipulate data, there’s a powerful API for full CRUD operations. You can perform grid row editing by clicking on a row and pressing **Enter key**. Another quick way is to double click with the mouse on the row that needs to be modified.

## {Platform} {ComponentTitle} Row Editing Example

The following sample demonstrates how to enable row editing in the `{ComponentName}`. Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

`sample="/{ComponentSample}/row-editing-options", height="550", alt="{Platform} {ComponentTitle} Editing Rows Example"`



> [!Note]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

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
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" width="100%" height="500px" row-editable="true">
    <igc-column field="ProductID" header="Product ID" editable="false"></igc-column>
    <igc-column field="ReorderLevel" header="ReorderLever" data-type="Number"></igc-column>
    <igc-column field="ProductName" header="ProductName" data-type="String"></igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" header="UnitsInStock" data-type="Number">
    </igc-column>
    <igc-column field="OrderDate" data-type="Date"></igc-column>
    <igc-column field="Discontinued" header="Discontinued" data-type="Boolean"></igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid  = document.getElementById('grid') as IgcGridComponent;
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
function unitsInStockCellTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <input name="units" value={ctx.dataContext.cell.value} style={{color: "black"}} />;
        </>
    );
}

<{ComponentSelector} primaryKey="ProductID" width="100%" height="500px" rowEditable="true"
    bodyTemplate={unitsInStockCellTemplate}>
    <IgrColumn field="ProductID" header="Product ID" editable="false"></IgrColumn>
    <IgrColumn field="ReorderLevel" header="ReorderLever" dataType="number"></IgrColumn>
    <IgrColumn field="ProductName" header="ProductName" dataType="string"></IgrColumn>
    <IgrColumn field="UnitsInStock" header="UnitsInStock" dataType="number"></IgrColumn>
    <IgrColumn field="OrderDate" dataType="date"></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean"></IgrColumn>
</{ComponentSelector}>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

```razor
 <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=false
             Data=northwindEmployees
             RowEditable=true>
        <IgbColumn Field="ID" Editable=false></IgbColumn>
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

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

> [!Note]
> Setting primary key is mandatory for row editing operations.

> [!Note]
> It's not needed to enable editing for individual columns. Using the `RowEditable` property in the `{ComponentName}`, will mean that all rows, with defined `Field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the `Editable` column's input to `false`.

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
> The `{ComponentName}` uses internally a provider `BaseTransactionService` that holds pending cell changes, until row state submitted or cancelled.

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

```tsx
function rowEditTextTemplate(ctx: IgrGridRowEditTextTemplateContext) {
    return (
        <>
            Changes: {ctx.dataContext.implicit}
        </>
    );
}
```

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

```tsx
function rowEditActionsTemplate(ctx: IgrGridRowEditActionsTemplateContext) {
    const endRowEdit = ctx.dataContext.implicit;
    return (
        <>
            <button onClick={(event) => endRowEdit(false, event)}>Cancel</button>
            <button onClick={(event) => endRowEdit(true, event)}>Apply</button>
        </>
    );
}
```

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

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
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

<!-- ComponentStart:  Grid -->
* [{ComponentTitle} Editing](editing.md)
<!-- ComponentEnd:  Grid -->

<!-- * [{ComponentTitle} Transactions](batch-editing.md) -->

<!-- end: Blazor -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
