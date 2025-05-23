---
title: {Platform} Data Grid | Table Controls | {ProductName} | Column Types | Infragistics
_description: The {ProductName} Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: grid, table, {ProductName}, Infragistics
_language: kr
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid","Infragistics.Controls.Grid.Implementation.CellInfo", "Infragistics.Controls.Grid.Implementation.TemplateCellInfo", "Infragistics.Controls.Grid.Implementation.Column"]
---

# {Platform} Column Moving

The {ProductName} Data Grid supports the ability to move columns, giving you the flexibility over how you wish to display your columns with respect to the order of the columns shown.

## Demo


`sample="/grids/data-grid/column-moving", height="600", alt="{Platform} data grid column moving"`


<div class="divider--half"></div>

Column moving in the {ProductName} Data Grid is on by default, and can be controlled by setting the `ColumnMovingMode` property of the grid. This property has two options, `Deferred` or `None`. `Deferred` will allow column moving, while `None` will disable column moving for the entire grid.

When column moving is set to `Deferred`, a separator will show up while moving a column. While moving a column, once the mouse pointer is released, the moved column will take the place of the column placed to the right of the separator. This separator can also be customized in width and color by using the `ColumnMovingSeparatorWidth` and `ColumnMovingSeparatorBackground` properties, respectively.

You can also animate the column movements, if you wish. This can be done by setting the `ColumnMovingAnimationMode` property of the grid. Animations are not on by default.

## Code Snippet

The following demonstrates how to implement column moving in the {ProductName} Data Grid with deferred column moving, animations enabled, and a 5px wide separator:

```ts
import { ColumnMovingAnimationMode } from 'igniteui-react-data-grids';
import { ColumnMovingMode } from 'igniteui-react-data-grids';
```

```tsx
<IgrDataGrid
    ref={this.onGridRef}
    height="500px"
    width="100%"
    dataSource={this.data}
    columnMovingMode={ColumnMovingMode.Deferred}
    columnMovingAnimationMode={ColumnMovingAnimationMode.SlideOver}
    columnMovingSeparatorWidth={5} />
```

```html
  <igc-data-grid id="grid"
      height="100%"
      width="100%">
    </igc-data-grid>
```

```ts
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-data-grids';
import { ColumnMovingMode } from 'igniteui-webcomponents-data-grids';

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);

grid1.dataSource = data;
grid1.columnMovingMode = ColumnMovingMode.Deferred;
grid1.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
grid1.columnMovingSeparatorWidth = 5;
```
