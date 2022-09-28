---
title: Editing Rows in {Platform} {ComponentTitle} - Infragistics
_description: Want to enable row editing in {Platform} {ComponentTitle}? Need a powerful API for CRUD operations? Try our {ProductName} {ComponentTitle} rows editing component!
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Row Editing

The {ComponentTitle} provides a convenient way to perform data manipulations through inline editing and a powerful API for {Platform} CRUD operations. Click on a row and press **Enter key** or simply double click with the mouse on the row that needs to be modified. 

## {Platform} {ComponentTitle} Row Editing Example

The following sample demonstrates how to enable row editing in the {ComponentTitle}. Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

<code-view style="height:550px" 
            data-demos-base-url="{environment:demosBaseUrl}"
            iframe-src="{environment:demosBaseUrl}/{ComponentSample}-row-editing"
            github-src="{ComponentSample}/row-editing"
            alt="{Platform} {ComponentName} Editing Rows Example">
</code-view>

> [!NOTE]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

## Row Editing Usage


<!-- Angular -->

To get started import the `{ComponentName}Module` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { {ComponentName}Module } from 'igniteui-{Platform}';

@NgModule({
    ...
    imports: [..., {ComponentName}Module],
    ...
})
export class AppModule {}
```

<!-- end: Angular -->

Define a {ComponentTitle} with bound data source and `RowEditable` set to true:
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

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

```razor
 <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=false
             Data=northwindEmployees
             RowEditable=true>
        <IgbGridColumn Field="ID" Editable=false></IgbGridColumn>
        <IgbGridColumn Field="ContactName"></IgbGridColumn>
        <IgbGridColumn Field="ContactTitle"></IgbGridColumn>
        <IgbGridColumn Field="City"></IgbGridColumn>
        <IgbGridColumn Field="CompanyName"></IgbGridColumn>
        <IgbGridColumn Field="Fax"></IgbGridColumn>
        <IgbGridColumn Field="Address"></IgbGridColumn>
        <IgbGridColumn Field="PostalCode"></IgbGridColumn>
        <IgbGridColumn Field="Country"></IgbGridColumn>
        <IgbGridColumn Field="Phone"></IgbGridColumn>
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

> [!NOTE]
> Setting primary key is mandatory for row editing operations.

> [!NOTE]
> It's not needed to enable editing for individual columns. Using the `RowEditable` property in the {ComponentTitle}, will mean that all rows, with defined `Field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the `Editable` column's input to `false`.

```typescript
import { Component, ViewChild } from '@{Platform}/core';
import { data } from './data';
import { {ComponentName}Component } from 'igniteui-{Platform}';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: 'grid-row-editing-sample.component.html'
})
export class {ComponentName}RowEditSampleComponent {
    @ViewChild('gridRowEdit', { read: {ComponentName}Component }) public gridRowEdit: {ComponentName}Component;

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```


> [!NOTE]
> The {ComponentTitle} uses internally a provider `BaseTransactionService` that holds pending cell changes, until row state submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and {ComponentTitle} is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When {ComponentTitle} is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the {ComponentTitle}, the cell will also stay in edit mode.

- When perform *sorting*, *filtering*, *searching* and *hiding* operations, will revert all current changes in the row and row will exit edit mode.

- When perform *paging*, *resizing*, *pinning* and *moving* operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when {ComponentTitle} is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.


## Keyboard Navigation

- `Enter` and `F2` enters row edit mode

- `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.


## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

<!-- ComponentStart: Grid -->

- Expanding and collapsing grouped rows will not terminate editing for the current row.

<!-- ComponentEnd: Grid -->

## Customizing Row Editing Overlay

### Customizing Text



Customizing the text of the row editing overlay is possible using via templating.
The `rowChangesCount` property is exposed and it holds the count of the changed cells.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```


 ```razor
 TODO
 ```

### Customizing Buttons
Customizing the buttons of the row editing overlay also possible via templating.

<!-- Angular -->
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```
 <!-- end: Angular -->

 ```razor
 TODO
 ```

<!-- Angular -->

## Styling

Using the [{ProductName} Theme Library](themes/index.md), we can greatly alter the Row Editing overlay. 
The Row Editing overlay is a composite element - its UI is comprised of a couple of other components:
    - [`igx-banner`](banner.md) in order to render its contents
    - [`igx-button`](button.md)s are rendered in the default template (for the `Done` and `Cancel` buttons).

In the below example, we will make use of those two components' styling options, ([button styling](button.md#styling) & [banner-styling](../banner.md#styling)), to customize the experience of our {ComponentName}'s Row Editing.
We will also style the current cell's editor and background to make it more distinct. You can learn more about cell styling [here](cell-editing.md#styling).

### Import theme

The easiest way to style the Row Editing banner is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the {ProductName} Sass framework:

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
``` 

Once we've imported the themes file, we can create custom themes.

#### Define the theme

We can now define a custom [`banner theme`]({environment:sassApiUrl}/index.html#function-banner-theme) that will affect our Row Editing background and make use of one of the predefined palettes namely `$purple-palette` :

```scss
    $my-light-gray: #e3e3e3;
    $my-banner-palette: $purple-palette;

    $banner-theme: banner-theme( 
        $banner-background: $my-light-gray,
        $banner-message-color: color($my-banner-palette, "secondary", 600)
    );
```

Here we are using `my-banner-palette` in conjunction with `igx-color` (exposed by the theme library) for generating our colors.

### Include the theme

All we have to do now is apply the theme with a Sass `@include` statement. We pass our newly defined `$banner-theme` through the `igx-banner mixin`:

```scss
@include banner($banner-theme); 
```

This will apply our custom banner theme to the Row Editing overlay. However, since we defined these in the global styles file, these styles will also apply to **all** banners in our application.

### Component styles

Since the Row Editing overlay makes use of a lot of other components' themes, styling it via the global styles can affect other parts of our application (e.g. banners, buttons, etc.). The best way to prevent that is to scope our banner theme. We can define our styles (including the [`theme/index` import](#import-theme)) in the component containing our {ComponentSelector}.

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
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

After we've defined our custom buttons, we can make use of the [`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme) to style them. You can learn more about `igx-button` styling [here](../button.md#styling). We can create a custom theme for our `Done` and `Cancel`:

```scss
// custom.component.scss
...

$button-theme: button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
    @include button($button-theme);
  }
```

We scope our `@include` statement in `.custom-buttons` so that it is only applied to the `Done`and `Cancel` buttons.

### Demo

After styling the banner and buttons, we also define a custom style for [the cell in edit mode](cell-editing.md#styling). The result of all the combined styles can be seen below:

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-row-editing-style"
           github-src="{ComponentSample}/row-editing-style"
           alt="{Platform} {ComponentName} Row Editing Styling Example">
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

<!-- end: Angular -->

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
* `{ComponentName}Component`

## Additional Resources

* [Build CRUD operations with igxGrid](/general/how-to/how-to-perform-crud.md)
* [{ComponentTitle} Overview](overview.md)
* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Transactions](batch-editing.md)


Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
