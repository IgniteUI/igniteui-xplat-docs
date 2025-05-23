---
title: {Platform} Data Grid | Column Moving | Infragistics
_description: See how Infragistics' {ProductName} Data Grid supports the ability to move columns and gives you the flexibility over how you wish to display your columns. View {ProductName} table demos for more information!
_keywords: {Platform} Table, Data Grid, column moving, {ProductName}, Infragistics
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.ColumnMovingMode", "Infragistics.Controls.Grid.Implementation.ColumnMovingAnimationMode"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridColumnMoving}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Column Moving Overview

The {ProductName} Data Grid supports the ability to move columns, giving you the flexibility over how you wish to display your columns with respect to the order of the columns shown.

## {Platform} Grid Column Moving Example


`sample="/grids/data-grid/column-moving", height="600", alt="{Platform} Grid Column Moving Example"`



<div class="divider--half"></div>

Column moving in the {ProductName} Data Grid is on by default, and can be controlled by setting the `ColumnMovingMode` property of the grid. This property has two options, `Deferred` or `None`. `Deferred` will allow column moving, while `None` will disable column moving for the entire grid.

When column moving is set to `Deferred`, a separator will show up while moving a column. While moving a column, once the mouse pointer is released, the moved column will take the place of the column placed to the right of the separator. This separator can also be customized in width and color by using the `ColumnMovingSeparatorWidth` and `ColumnMovingSeparatorBackground` properties, respectively.

You can also animate the column movements, if you wish. This can be done by setting the `ColumnMovingAnimationMode` property of the grid. Animations are not on by default.

## Code Snippet

The following demonstrates how to implement column moving in the {ProductName} Data Grid with deferred column moving, animations enabled, and a 5px wide separator:

<!--React-->
```ts
import { ColumnMovingAnimationMode } from 'igniteui-react-data-grids';
import { ColumnMovingMode } from 'igniteui-react-data-grids';
```

<!--WebComponents-->
```ts
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-data-grids';
import { ColumnMovingMode } from 'igniteui-webcomponents-data-grids';
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
    width="100%"
    column-moving-mode="Deferred"
    column-moving-animation-mode="SlideOver"
    column-moving-separator-width="5">
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    ColumnMovingMode="ColumnMovingMode.Deferred"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnMovingSeparatorWidth="5" />
```

## API References

 - `ColumnMovingAnimationMode`
 - `ColumnMovingMode`
 - `ColumnMovingSeparatorBackground`
 - `ColumnMovingSeparatorWidth`
 - `Deferred`