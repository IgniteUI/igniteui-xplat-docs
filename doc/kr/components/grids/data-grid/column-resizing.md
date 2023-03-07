---
title: {Platform} Data Grid | Table Controls | {ProductName} | Column Types | Infragistics
_description: The {ProductName} Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: grid, table, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid','Infragistics.Controls.Grid.Implementation.CellInfo', 'Infragistics.Controls.Grid.Implementation.TemplateCellInfo', 'Infragistics.Controls.Grid.Implementation.Column']
---

# {Platform} Column Resizing

The {ProductName} Data Grid supports the ability to resize columns, giving you flexibility over how you wish to display your columns with respect to the width of each.

## Demo


`sample="/grids/data-grid/column-resizing", height="600", alt="{Platform} data grid column resizing"`


<div class="divider--half"></div>

Column resizing in the {ProductName} DataGrid is on by default, and can be controlled by using the `ColumnResizingMode` property of the grid. This property has three options. Each option is explained below:

- `Deferred`: The default option. When resizing, a separator will appear showing how large or small the column will become when resized.
- `Immediate`: When resizing, there will be no separator. The column's width will follow the pointer as you drag the edge of the column and resize accordingly.
- `None`: Columns cannot be resized.

When column resizing is set to `Deferred`, the separator that shows up can be modified in color and width by using the `ColumnResizingSeparatorBackground` and `ColumnResizingSeparatorWidth` properties of the grid, respectively.

You can also animate the columns as they resize when the resizing mode is set to `Deferred` only. This is done by setting the `ColumnResizingAnimationMode` property to `Interpolate`.

Each column in the grid can be determined whether or not it can resize individually. If you want to enable or disable resizing on a particular column, you can set the `IsResizingEnabled` property of that column.

When resizing a star-width column, it will change that column to a fixed column.

## Code Snippet

The following code snippet demonstrates how to implement column resizing in the grid, where the `Street` column in this case will not be resizable. In this case, the column resizing separator will be 5 pixels wide and the columns that are resizable would animate when resized as well:

```ts
import { ColumnResizingMode } from 'igniteui-react-grids';
import { ColumnResizingAnimationMode } from 'igniteui-react-grids';
```

```tsx
<IgrDataGrid ref={this.onGridRef}
    height="100%"
    width="100%"
    columnResizingAnimationMode={ColumnResizingAnimationMode.Interpolate}
    columnResizingMode={ColumnResizingMode.Deferred}
    columnResizingSeparatorWidth={5}
    autoGenerateColumns={false}
    dataSource={this.data} >
    <IgrTextColumn field="FirstName" headerText="First Name" />
    <IgrTextColumn field="LastName" headerText="Last Name" />
    <IgrTextColumn field="Street" headerText="Street" isResizingEnabled={false} />
    <IgrTextColumn field="City" headerText="City" />
</IgrDataGrid>
```

```html
<igc-data-grid id="grid">
    <igc-text-column id="FirstName"></igc-text-column>
    <igc-text-column id="LastName"></igc-text-column>
    <igc-text-column id="Street" is-resizing-enabled=false></igc-text-column>
    <igc-text-column id="City"></igc-text-column>
</igc-data-grid>
```

```ts
import { ColumnResizingMode } from 'igniteui-webcomponents-grids';
import { ColumnResizingAnimationMode } from 'igniteui-webcomponents-grids';

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
grid1.autoGenerateColumns = false ;
grid1.height = "500px";
grid1.width = "500px";
grid1.columnResizingMode = ColumnResizingMode.Deferred;
grid1.columnResizingAnimationMode = ColumnResizingAnimationMode.Interpolate;
grid1.columnMovingSeparatorWidth = 5;

let ProductNameTextColumn = (document.getElementById("FirstName") as IgcTextColumnComponent);
ProductNameTextColumn.field = "FirstName";
ProductNameTextColumn.headerText = "FirstName" ;

let ProductNameTextColumn = (document.getElementById("LastName") as IgcTextColumnComponent);
ProductNameTextColumn.field = "LastName";
ProductNameTextColumn.headerText = "Last Name" ;

let ProductNameTextColumn = (document.getElementById("Street") as IgcTextColumnComponent);
ProductNameTextColumn.field = "Street";
ProductNameTextColumn.headerText = "Street" ;

let ProductNameTextColumn = (document.getElementById("City") as IgcTextColumnComponent);
ProductNameTextColumn.field = "City";
ProductNameTextColumn.headerText = "City" ;
```