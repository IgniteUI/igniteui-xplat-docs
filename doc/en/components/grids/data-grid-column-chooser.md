---
title: {Platform} Data Grid | Column Chooser | Infragistics
_description: Learn how Infragistics' {ProductName} grid component supports the ability to show and hide columns directly through the UI or by using the {Platform} control. View {ProductName} table demos for more information!
_keywords: {Platform} Table, Data Grid, column chooser, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.DataGridToolbar', 'Infragistics.Controls.Grid.Implementation.Button', 'Infragistics.Controls.Grid.Implementation.ColumnChooser', 'Infragistics.Controls.Grid.Implementation.ColumnHidingAnimationMode', 'ColumnShowingAnimationMode', 'ColumnChooserTitle', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
---

# {Platform} Grid Column Chooser Overview

The {ProductName} Data Grid supports the ability show and hide columns with the UI through the `DataGridToolbar` component or by the `ColumnChooser` component that provides flexibility to place it anywhere on the page. The `IsHidden` property on the columns can also be used to quickly hide or show a single column programmatically for manual column generation, and the value of `IsHidden` will reflect in the `ColumnChooser` component. Each approach can be used interchangeably to change the visible state of the columns.

## {Platform} Grid Column Chooser Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-chooser-toolbar"
           alt="{Platform} Grid Column Chooser Example"
           github-src="grids/data-grid/column-chooser-toolbar">
</code-view>

<div class="divider--half"></div>


## Toolbar's Column Chooser UI

The Column Chooser UI is accessible within the `DataGridToolbar` component separate from the grid. For this purpose all we have to do is set the toolbar's `ColumnChooser` property to true. The toolbar will then display a `Button`, when clicked, will display the column chooser UI. This button also displays the total of hidden columns. If the toolbar is not created, enabling the `ColumnChooser` property will have no effect and hide the button.

The `DataGridToolbar` provides additional properties such as adding a title to the toolbar by using the `toolbarTitle` property, placing text in the `Button` by setting the `ColumnChooserText` property, and adding a title header to the column chooser UI by setting `ColumnChooserTitle`.

The Column Chooser can be configured with animations by setting the grid's `ColumnHidingAnimationMode` and `ColumnShowingAnimationMode` properties.

## Code Snippet

The following demonstrates how to implement the Column Chooser Toolbar UI for the {Platform} Data Grid:

```tsx
<IgrDataGridToolbar ref={this.onToolbarRef}
    toolbarTitle="Grid Title"
    columnChooser="true"
    columnChooserText="Columns"
    columnChooserTitle="Column Chooser">
</IgrDataGridToolbar>
<IgrDataGrid
    ref={this.onGridRef}
    height="calc(100% - 40px)"
    dataSource={this.data}
    autoGenerateColumns="true"
    columnHidingAnimationMode="SlideOver">
</IgrDataGrid>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridToolbar } from 'igniteui-react-grids';

public grid : IgrDataGrid;
public toolbar: IgrDataGridToolbar;

this.onGridRef = this.onGridRef.bind(this);
this.onToolbarRef = this.onToolbarRef.bind(this);


public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    if (this.toolbar != null) {
        this.toolbar.targetGrid = this.grid;
        this.grid.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;

        let productNameColumn = document.getElementById("productname") as IgrTextColumnComponent;
        productNameColumn.isHidden = true;
    }
}

public onToolbarRef(toolbar: IgrDataGridToolbar) {
    this.toolbar = toolbar;
    if (this.grid != null) {
    this.toolbar.targetGrid = this.grid;
    this.toolbar.columnChooser = "true";
    this.toolbar.toolbarTitle = "Grid Title";
    this.toolbar.columnChooserText = "Column Chooser";
    this.toolbar.columnChooserTitle = "Column Chooser";
    }
}

```

```html
<igc-dataGrid-toolbar
    toolbar-title="Grid Title"
    column-chooser="true"
    column-chooser-text="Columns"
    column-chooser-title="Column Chooser">
</igc-dataGrid-toolbar>
<igc-data-grid
    id="grid"
    height="calc(100% - 40px)"
    width="100%"
    auto-generate-columns="false"
    default-column-min-width="120px"
    scrollbar-style = "thin"
    column-hiding-animation-mode="SlideOver">
</igc-data-grid>
```

```ts
import { IgcDataGrid } from 'igniteui-webcomponents-grids';
import { IgcDataGridToolbar } from 'igniteui-webcomponents-grids';
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-grids';

private grid: IgcDataGridComponent;
private toolbar: IgcDataGridToolbarComponent;

connectedCallback() {
    this.toolbar.targetGrid = this.grid;
    let productNameColumn = document.getElementById("productname") as IgcTextColumnComponent;
    productNameColumn.isHidden = true;
    this.toolbar.columnChooser = true;
    this.toolbar.toolbarTitle = "Grid Title";
    this.toolbar.columnChooserText = "Choose Text";
    this.toolbar.columnChooserTitle = "Choose Title Text";
    this.grid.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
}
```

```razor
<IgbDataGridToolbar ToolbarTitle="Grid Title"
    ColumnChooser="true"
    ColumnChooserText="Columns"
    ColumnChooserTitle="Column Chooser"
    TargetGrid="DataGridRef" />
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DefaultColumnMinWidth="120"
    DataSource="@DataSource"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToLeft">
</IgbDataGrid>

@code {
    private DataGrid grid;
    public DataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }
}
```

## Simple Column Chooser

Let's say we want to manually display the `ColumnChooser` UI without the toolbar and put it anywhere we want on our page. This can be easily done by simply creating an instance of the component in our markup.

## Demo


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-chooser-picker"
           github-src="grids/data-grid/column-chooser-picker">
</code-view>

<div class="divider--half"></div>

## Code Snippet

The following demonstrates how to implement the Column Chooser UI for the Data Grid:

```tsx
<IgrColumnChooser
    ref={this.onColumnChooserRef}
    height="100%"
    width="250px"
    title="Column Chooser"
    showAllText="Show All"
    hideAllText="Hide All">
</IgrColumnChooser>
<IgrDataGrid
    ref={this.onGridRef}
    height="100%"
    width="100%"
    dataSource={this.data}
    autoGenerateColumns="false"
    columnHidingAnimationMode="SlideOver">
    <IgrTextColumn isHidden="true" field="ProductPrice" headerText="Product Price"/>
</IgrDataGrid>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrColumnChooser } from 'igniteui-react-grids';
import { ColumnMovingAnimationMode } from 'igniteui-react-grids';

public grid : IgrDataGrid;
public columnChooser: IgrColumnChooser;

public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    if (this.columnChooser) {
        this.columnChooser.targetGrid = this.grid;
        this.grid.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
    }
}

public onColumnChooserRef(columnChooser: IgrColumnChooser) {
    this.columnChooser = columnChooser;
    if (this.grid) {
        this.columnChooser.targetGrid = this.grid;
        this.columnChooser.showAllText = "Show All";
        this.columnChooser.hideAllText = "Hide All";
    }
}
```

```html
<igc-column-chooser
    id="columnUI"
    height="100%"
    width="250px"
    title="Column Chooser"
    show-all-text="Show All"
    hide-all-text="Hide All">
</igc-column-chooser>
<igc-data-grid
    id="grid"
    height="100%"
    width="100%"
    data-source={this.data}
    auto-generate-columns="false"
    column-hiding-animation-mode="SlideOver">
    <igx-text-column is-hidden="true" field="ProductPrice" header-text="Product Price"><igc-text-column>
</igc-data-grid>
```

```ts
import { IgcDataGrid } from 'igniteui-webcomponents-grids';
import { IgcColumnChooser } from 'igniteui-webcomponents-grids';
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-grids';

private grid: IgcDataGridComponent;
private columnChooser: IgcColumnChooserComponent;

connectedCallback() {
    this.columnChooser.targetGrid = this.grid;
    this.columnChooser.showAllText = "Show All";
    this.columnChooser.hideAllText = "Hide All";
    this.grid.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
}
```

```razor
<IgbColumnChooser Height="100%" Width="200px"
    Title="Column Chooser"
    TargetGrid="DataGridRef" />
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToLeft" />

@code {
    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }
}
```

## API Members

 - `Button`
 - `ColumnChooserText`
 - `ColumnChooserTitle`
 - `ColumnChooser`
 - `ColumnHidingAnimationMode`
 - `ColumnShowingAnimationMode`
 - `DataGridToolbar`