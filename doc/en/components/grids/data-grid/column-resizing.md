---
title: {Platform} Data Grid | Column Resizing | Infragistics
_description: Start using Infragistics' {Platform} grid component to resize columns, giving you flexibility over how you wish to display your columns with respect to the width of each. View {ProductName} table demos for more information!
_keywords: {Platform} Table, Data Grid, column resizing, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.ColumnResizingMode', 'Infragistics.Controls.Grid.Implementation.ColumnResizingAnimationMode']
namespace: Infragistics.Controls
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Column Resizing

The {ProductName} Data Grid supports the ability to resize columns, giving you flexibility over how you wish to display your columns with respect to the width of each.

## {Platform} Grid Column Resizing Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-resizing"
           alt="{Platform} Grid Column Resizing Example"
           github-src="grids/data-grid/column-resizing">
</code-view>

<div class="divider--half"></div>

Column resizing in the {ProductName} DataGrid is on by default, and can be controlled by using the `ColumnResizingMode` property of the grid. This property has three options. Each option is explained below:

- `Deferred`: The default option. When resizing, a separator will appear showing how large or small the column will become when resized.
- `Immediate`: When resizing, there will be no separator. The column's width will follow the pointer as you drag the edge of the column and resize accordingly.
- `None`: Columns cannot be resized.

When column resizing is set to `Deferred`, the separator that shows up can be modified in color and width by using the `ColumnResizingSeparatorBackground` and `ColumnResizingSeparatorWidth` properties of the grid, respectively.

You can also animate the columns as they resize when the resizing mode is set to `Deferred` only. This is done by setting the `ColumnResizingAnimationMode` property to `Interpolate`.

Each column in the grid can be determined whether or not it can resize individually. If you want to enable or disable resizing on a particular column, you can set the <b>IsResizingEnabled</b> property of that column.

When resizing a star-width column, it will change that column to a fixed column.

## Code Snippet

The following code snippet demonstrates how to implement column resizing in the {Platform} data grid, where the <b>Street</b> column in this case will not be resizable. In this case, the column resizing separator will be 5 pixels wide and the columns that are resizable would animate when resized as well:

<!--React-->
```ts
import { ColumnResizingMode } from 'igniteui-react-grids';
import { ColumnResizingAnimationMode } from 'igniteui-react-grids';
```

<!--WebComponents-->
```ts
import { ColumnResizingMode } from 'igniteui-webcomponents-grids';
import { ColumnResizingAnimationMode } from 'igniteui-webcomponents-grids';
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
<igc-data-grid id="grid"
    auto-generate-columns="false"
    height="500px"
    width="500px"
    column-resizing-mode="Deferred"
    column-resizing-animation-mode="Interpolate"
    column-moving-separator-width="5" >
    <igc-text-column field="FirstName"></igc-text-column>
    <igc-text-column field="LastName"></igc-text-column>
    <igc-text-column field="Street" is-resizing-enabled=false></igc-text-column>
    <igc-text-column field="City"></igc-text-column>
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    AutoGenerateColumns="false"
    DataSource="DataSource"
    ColumnResizingMode="ColumnResizingMode.Deferred"
    ColumnResizingAnimationMode="ColumnResizingAnimationMode.Interpolate"
    ColumnResizingSeparatorWidth="5">
    <IgbTextColumn Field="FirstName" />
    <IgbTextColumn Field="LastName" />
    <IgbTextColumn Field="Street" IsResizingEnabled="false" />
    <IgbTextColumn Field="City" />
</IgbDataGrid>
```

## API References

 - `ColumnResizingAnimationMode`
 - `ColumnResizingMode`
 - `ColumnResizingSeparatorBackground`
 - `ColumnResizingSeparatorWidth`
 - `Deferred`
 - `Interpolate`