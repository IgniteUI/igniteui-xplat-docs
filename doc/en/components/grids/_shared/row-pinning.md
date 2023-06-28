---
title: Row Pinning in {Platform} {ComponentTitle} - Infragistics
_description: Use the {Platform} Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Row Pinning

In the {Platform} `{ComponentName}`, you can pin one or multiple rows to the top or bottom of grid. **Row Pinning** allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the `{ComponentName}` vertically. The Material UI Grid has a built-in row pinning UI, which is enabled by initializing an `ActionStrip` component in the context of `{ComponentName}`. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## {Platform} {ComponentTitle} Row Pinning Example

`sample="/{ComponentSample}/row-pinning-options", height="600", alt="{Platform} {ComponentTitle} Row Pinning Example"`

## Row Pinning UI

The built-in row pinning UI is enabled by adding an `ActionStrip` component with the `GridPinningActions` component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="false">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
    <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=true
             Data=northwindEmployees
             RowEditable=true>
        <IgbColumn Field="ID" Editable=false></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City" Sortable=true></IgbColumn>
        <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true></IgbColumn>
        <IgbColumn Field="Address" Sortable=true></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
        <IgbColumn Field="Country" Sortable=true></IgbColumn>
        <IgbColumn Field="Phone" Sortable=true></IgbColumn>
        <IgbActionStrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridEditingActions></IgbGridEditingActions>
        </IgbActionStrip>
    </{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} auto-generate="false">
    <igc-column field="Name" header="Full Name"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

## Row Pinning API

Row pinning is controlled through the `Pinned` input of the `Row`. Pinned rows are rendered at the top of the `{ComponentName}` by default and stay fixed through vertical scrolling of the unpinned rows in the `{ComponentName}` body.

```typescript
this.grid.getRowByIndex(0).pinned = true;
```

```razor
this.Grid.GetRowByIndex(0).Pinned = true;
```

You may also use the `{ComponentName}`'s `PinRow` or `UnpinRow` methods of the to pin or unpin records by their ID:

```typescript
this.grid.pinRow('ALFKI');
this.grid.unpinRow('ALFKI');
```

```razor
this.Grid.PinRowAsync("ALFKI", 0);
this.Grid.UnpinRowAsync("ALFKI");
```

Note that the row ID is the primary key value, defined by the `PrimaryKey` of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the `RowPinning` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="true" (rowPinning)="rowPinning($event)">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="true">
</{ComponentSelector}>
```

```typescript
constructor() {
    var grid1 = document.getElementById('grid1') as {ComponentName};
    grid1.data = this.data;
    grid1.addEventListener("rowPinning", this.rowPinning);
}
```
<!-- end: WebComponents -->

```typescript
public rowPinning(event) {
    event.detail.insertAtIndex = 0;
}
```

```razor
<{ComponentSelector} Width="100%"
             Id="grid"
             RowPinningScript='rowPinningHandler'
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=true
             Data=northwindEmployees>
</{ComponentSelector}>
```

```razor
function rowPinningHandler(event) {
    event.detail.insertAtIndex = 0;
}

igRegisterScript("rowPinningHandler", rowPinningHandler, false);
```
<!-- Angular, WebComponents  -->

## Pinning Position

You can change the row pinning position via the `Pinning` configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></{ComponentSelector}>
```

```typescript
public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Bottom };
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="dataGrid" auto-generate="true"></{ComponentSelector}>
```

```typescript
var grid = document.getElementById('dataGrid') as {ComponentName};
grid.pinning = { rows: RowPinningPosition.Bottom };
```
<!-- end: WebComponents -->

```razor
    <{ComponentSelector} Id="grid"
            Width="100%"
            Height="100%"
            Pinning=PinningConfig
            PrimaryKey="Key"
            AutoGenerate=true
            Data=northwindEmployees>
    </{ComponentSelector}>
    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        public IgbPinningConfig PinningConfig = new IgbPinningConfig()
        {
            Rows = RowPinningPosition.Bottom
        };
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;
        }
    }
```
<!-- end: Angular, WebComponents -->

## Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

### Via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.

```razor
<IgbColumn Width="70px" BodyTemplateScript="WebGridRowPinCellTemplate"/>

// In Javascript

igRegisterScript("WebGridRowPinCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleRowPin = function toggleRowPin(index) {
        var grid = document.getElementsByTagName("igc-grid")[0];
        grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
    }
    const index = ctx.cell.id.rowIndex;
    return html`<div>
    <span onpointerdown='toggleRowPin("${index}")'>📌</span>
</div>`;
}, false);
```

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ID'" [autoGenerate]="false">
    <igx-column width="70px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
</{ComponentSelector}>
```

On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```typescript
public togglePinning(row: IgxGridRow, event) {
    event.preventDefault();
    if (row.pinned) {
        row.unpin();
    } else {
        row.pin();
    }
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key]="ID" auto-generate="false">
    <igc-column id="column1" name="column1">
    </igc-column>
</{ComponentSelector}>
```

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as {ComponentName};
    var column = this.column = document.getElementById('column1') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        column.bodyTemplate = this.pinCellTemplate;
    }
    this._bind();
}

public pinCellTemplate = (ctx: IgcCellTemplateContext) => {
   const index = ctx.cell.id.rowIndex;
    return html`<span @pointerdown=${(e: any) => this.togglePinning(index)}>??</span>`;
}
```

On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```typescript
public togglePinning(index: number) {
    var grid = document.getElementsByTagName("{ComponentSelector}")[0] as {ComponentName};
    grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
}
```
<!-- end: WebComponents -->

#### Demo

`sample="/{ComponentSample}/row-pinning-extra-column", height="600", alt="{Platform} {ComponentTitle} Row Pinning Extra Column Example"`

<!-- ComponentStart: Grid -->

<!-- Angular -->

### Via Row Drag

Let's say that you want to be able to directly drag and drop a row between the pinned and unpinned rows to change its pin state.
This can be achieved by enabling the row drag feature and pinning/unpinning the rows via the API on drop.

First, the grid should be marked as a drop area using the `igxDrop` directive and the row drag functionality should be enabled via the `rowDraggable` option.

```html
<igx-grid [data]="data" [autoGenerate]="true" [rowDraggable]="true"
    [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
</igx-grid>
```

Then the `dropped` event can be used to handle the reorder and pin/unpin logic.

```typescript
public onDropAllowed(args) {
    const event = args.originalEvent;
    let currRowPinnedIndex;
    const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });
    if (currRowIndex === -1) { return; }

    const currRowID = this.getCurrentRowID(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });

    const currentRow = this.grid.rowList.toArray().find((r) => r.rowID === currRowID);
    if (currentRow.pinned) {
        currRowPinnedIndex = this.grid.pinnedRows.indexOf(this.grid.pinnedRows.find((r) => r.rowID === currRowID));
    }
    // remove the row that was dragged and place it onto its new location
    this.grid.deleteRow(args.dragData.key);
    this.data.splice(currRowIndex, 0, args.dragData.data);
    if (currentRow.pinned && !args.dragData.pinned) {
        this.grid.pinRow(args.dragData.key, currRowPinnedIndex);
    } else if (!currentRow.pinned && args.dragData.pinned) {
        this.grid.unpinRow(args.dragData.key);
    } else if (currentRow.pinned && args.dragData.pinned) {
        this.grid.unpinRow(args.dragData.key);
        this.grid.pinRow(args.dragData.key, currRowPinnedIndex);
    }
}
```

This would allow reordering the rows and moving them between the pinned and unpinned row collections.

#### Demo

`sample="/{ComponentSample}/row-pinning-drag", height="510", alt="{Platform} {ComponentTitle} Row Pinning Drag Example"`

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## Row Pinning Limitations

* Only records that exist in the data source can be pinned.
* The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
* The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
* As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vice versa). Additionally, range selection (e.g. using Shift + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.

<!-- Angular -->
* Because of how pinned rows are stored internally so that they may appear both in the pinned and unpinned areas of the grid, row pinning is not supported when records in the grid are fetched from a remote endpoint on demand (remote virtualization).
* When the grid has no `PrimaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
    * Row Selection
    * Row Expand/collapse
    * Row Editing
    * Row Pinning

<!-- end: Angular -->

<!-- WebComponents, Blazor -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} Class="grid"></>
```

Then set the related CSS properties for that class:

```css
.grid {
    --igx-grid-pinned-border-width: 5px;
    --igx-grid-pinned-border-style: double;
    --igx-grid-pinned-border-color: #FFCD0F;
    --igx-grid-cell-active-border-color: #FFCD0F;
}
```

### Demo

`sample="/{ComponentSample}/row-pinning-style", height="540", alt="{Platform} {ComponentTitle} Row Pinning Styling Example"`


<!-- end: WebComponents, Blazor -->

<!-- Angular -->

## Styling

The `{ComponentName}` allows styling through the [{ProductName} Theme Library](../themes/styles.md). The {ComponentTitle}'s [theme]({environment:sassApiUrl}/index.html#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the {ComponentTitle}.

Below, we are going through the steps of customizing the {ComponentTitle}'s row pinning styling.

### Importing the Styling Library

To begin the customization of the row pinning feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### Defining a Theme

Next, create a new theme, that extends the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the parameters, required to customize the row pinning feature as desired.

```scss
$custom-grid-theme: grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```

### Using CSS Variables

The last step is to pass the custom grid theme:

```scss
@include css-vars($custom-grid-theme);
```

### Using Mixins

In order to style components for Internet Explorer 11, you have to use different approach, since it doesn't support CSS variables.

If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. However, in order to prevent the custom theme to leak to other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom grid theme to the `igx-grid` mixin
        @include grid($custom-grid-theme);
    }
}
```

### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-pinning-style", height="540", alt="{Platform} {ComponentTitle} Row Pinning Styling Example"`



> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

## API References
* `{ComponentName}`
* `{ComponentName}Row`
* `RowType`

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