---
title: $PlatformShort$ Data Grid | Column Pinning | Infragistics
_description: See how Infragistics' $ProductName$ grid component supports the ability to pin columns and gives you the flexibility over how you wish to position your columns. View $ProductName$ table demos for more information!
_keywords: $PlatformShort$ Table, Data Grid, column pinning, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'PinnedPositions', 'PinColumn', 'Pinned', 'ColumnPinning', 'DataGridToolbar', 'Column']
---

# $PlatformShort$ Grid Column Pinning Overview

The $ProductName$ Data Grid supports the ability to pin columns, allowing the end users to lock a column in a particular column order.

A column or multiple columns can be pinned to the left-hand or right-hand side of the Data Grid. In addition, you can change the pin state of the columns by utilizing the `PinColumn` function.

## $PlatformShort$ Grid Column Pinning Overview Example


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-pinning-picker" 
           alt="$PlatformShort$ Grid Column Pinning Overview Example" 
           github-src="grids/data-grid/column-pinning-picker">
</code-view>

<div class="divider--half"></div>

The Column Pinning API in the Data Grid can be enabled by setting either a column's `Pinned` property, or when setting it by utilizing the `PinColumn` function of the grid.

The `Pinned` property has three options:

- Left - enabling `Left` will position pinned columns to the left-hand side of the grid.
- Right - enabling `Right` will position pinned columns to the right side of the grid.
- None - enabling `None` will unpin a column and reposition its default placement within the grid.

Unpinned columns that are adjacent to pinned columns will still maintain horizontal scrolling.

The `PinColumn` function contains two required parameters. The first parameter is the column to be pinned, and the second is with the `PinnedPositions` enumeration setting.


## Code Snippet

The following code demonstrates how to implement column pinning in the $PlatformShort$ Data Grid with column pinning by using the `Pinned` property and `PinColumn` function:

<!--React-->
```tsx
<IgrDataGrid
ref={this.onGridRef}
height="calc(100% - 40px)"
width="100%"
autoGenerateColumns="false"
defaultColumnMinWidth={120}
scrollbarStyle = "thin"
dataSource={this.data}>

    {/*Columns pinned left*/}
    <IgrTextColumn pinned="left" field="ID" headerText="Employee ID" width="100"  horizontalAlignment="center"/>
    <IgrTextColumn pinned="left" field="FirstName" headerText="First Name" width="170"/>
    <IgrTextColumn pinned="left" field="LastName" headerText="Last Name" width="170"/>

    {/*Columns unpinned*/}
    <IgrDateTimeColumn pinned="none" field="Birthday" headerText="Date of Birth" width="150" horizontalAlignment="center"/>
    <IgrNumericColumn pinned="none" field="Age" width="100" horizontalAlignment="center"/>
    <IgrImageColumn pinned="none" field="CountryFlag" headerText="Country"
    width="140" contentOpacity="1" horizontalAlignment="center"/>

    {/*Columns pinned right*/}
    <IgrTextColumn field="Street" headerText="Address" width="240"/>
    <IgrTextColumn field="City"  width="150" />
    <IgrTextColumn field="Country"  width="150" />
</IgrDataGrid>
```

<!--React-->
```ts
import { PinnedPositions } from 'igniteui-react-grids';

public onButtonPinLeft = (e: any) => {

    let idColumn = this.grid.actualColumns.item(0);
    let firstNameColumn = this.grid.actualColumns.item(1);
    let lastNameColumn = this.grid.actualColumns.item(2);

    //pinned property
    idColumn.pinned = PinnedPositions.Left;
    firstNameColumn.pinned = PinnedPositions.Left;
    lastNameColumn.pinned = PinnedPositions.Left;

    // pinColumn Function
    this.grid.pinColumn(idColumn, PinnedPositions.Left);
    this.grid.pinColumn(firstNameColumn, PinnedPositions.Left);
    this.grid.pinColumn(lastNameColumn, PinnedPositions.Left);
}

public onButtonPinRight = (e: any) => {

    let streetColumn = this.grid.actualColumns.item(6);
    let cityColumn = this.grid.actualColumns.item(7);
    let countryColumn = this.grid.actualColumns.item(8);

    //pinned property
    streetColumn.pinned = PinnedPositions.Right;
    cityColumn.pinned = PinnedPositions.Right;
    countryColumn.pinned = PinnedPositions.Right;

    //pinColumn function
    this.grid.pinColumn(streetColumn, PinnedPositions.Right);
    this.grid.pinColumn(cityColumn, PinnedPositions.Right);
    this.grid.pinColumn(countryColumn, PinnedPositions.Right);
}

public onButtonUnPin = (e: any) => {

    let idColumn = this.grid.actualColumns.item(0);
    let firstNameColumn = this.grid.actualColumns.item(1);
    let lastNameColumn = this.grid.actualColumns.item(2);

    //pinned property
    idColumn.pinned = PinnedPositions.Left;
    firstNameColumn.pinned = PinnedPositions.Left;
    lastNameColumn.pinned = PinnedPositions.Left;

    //pinColumn function
    this.grid.pinColumn(idColumn, PinnedPositions.None);
    this.grid.pinColumn(firstNameColumn, PinnedPositions.None);
    this.grid.pinColumn(lastNameColumn, PinnedPositions.None);

    let streetColumn = this.grid.actualColumns.item(6);
    let cityColumn = this.grid.actualColumns.item(7);
    let countryColumn = this.grid.actualColumns.item(8);

    //pinned property
    streetColumn.pinned = PinnedPositions.None;
    cityColumn.pinned = PinnedPositions.None;
    countryColumn.pinned = PinnedPositions.None;

    //pinColumn function
    this.grid.pinColumn(streetColumn, PinnedPositions.None);
    this.grid.pinColumn(cityColumn, PinnedPositions.None);
    this.grid.pinColumn(countryColumn, PinnedPositions.None);
}
```

<!--WebComponents-->
```html
<igc-data-grid
id="grid"
height="calc(100% - 40px)"
width="100%"
auto-generate-columns="false"
default-column-min-width="120px"
scrollbar-style = "thin"
>
    <igc-text-column pinned="left" field="ID" header-text="Employee ID" width="100"  horizontal-alignment="center"></igc-text-column>
    <igc-text-column pinned="left" field="FirstName" header-text="First Name" width="170"></igc-text-column>
    <igc-text-column pinned="left" field="LastName" header-text="Last Name" width="170"></igc-text-column>

    <igc-date-time-column pinned="none" field="Birthday" header-text="Date of Birth" width="150" horizontal-alignment="center"></igc-date-time-column>
    <igc-numeric-column pinned="none" field="Age" width="100" horizontal-alignment="center"></igc-numeric-column>
    <igc-image-column pinned="none" field="CountryFlag" header-text="Country" width="140" content-opacity="1" horizontal-alignment="center"></igc-image-column>

    <igc-text-column pinned="right" field="Street" header-text="Address" width="240"></igc-text-column>
    <igc-text-column pinned="right" field="City"  width="150" ></igc-text-column>
    <igc-text-column pinned="right" field="Country"  width="150" ></igc-text-column>
</igc-data-grid>
```

<!--WebComponents-->
```ts
import { PinnedPositions } from 'igniteui-webcomponents-grids';

onButtonPinLeft () {

    let idColumn = this.grid.actualColumns.item(0);
    let firstNameColumn = this.grid.actualColumns.item(1);
    let lastNameColumn = this.grid.actualColumns.item(2);

    //pinned property
    idColumn.pinned = PinnedPositions.Left;
    firstNameColumn.pinned = PinnedPositions.Left;
    lastNameColumn.pinned = PinnedPositions.Left;

    // pinColumn Function
    this.grid.pinColumn(idColumn, PinnedPositions.Left);
    this.grid.pinColumn(firstNameColumn, PinnedPositions.Left);
    this.grid.pinColumn(lastNameColumn, PinnedPositions.Left);
}

onButtonPinRight () {

    let streetColumn = this.grid.actualColumns.item(6);
    let cityColumn = this.grid.actualColumns.item(7);
    let countryColumn = this.grid.actualColumns.item(8);

    //pinned property
    streetColumn.pinned = PinnedPositions.Right;
    cityColumn.pinned = PinnedPositions.Right;
    countryColumn.pinned = PinnedPositions.Right;

    //pinColumn function
    this.grid.pinColumn(streetColumn, PinnedPositions.Right);
    this.grid.pinColumn(cityColumn, PinnedPositions.Right);
    this.grid.pinColumn(countryColumn, PinnedPositions.Right);
}

onButtonUnPin () {

    let idColumn = this.grid.actualColumns.item(0);
    let firstNameColumn = this.grid.actualColumns.item(1);
    let lastNameColumn = this.grid.actualColumns.item(2);

    //pinned property
    idColumn.pinned = PinnedPositions.Left;
    firstNameColumn.pinned = PinnedPositions.Left;
    lastNameColumn.pinned = PinnedPositions.Left;

    //pinColumn function
    this.grid.pinColumn(idColumn, PinnedPositions.None);
    this.grid.pinColumn(firstNameColumn, PinnedPositions.None);
    this.grid.pinColumn(lastNameColumn, PinnedPositions.None);

    let streetColumn = this.grid.actualColumns.item(6);
    let cityColumn = this.grid.actualColumns.item(7);
    let countryColumn = this.grid.actualColumns.item(8);

    //pinned property
    streetColumn.pinned = PinnedPositions.None;
    cityColumn.pinned = PinnedPositions.None;
    countryColumn.pinned = PinnedPositions.None;

    //pinColumn function
    this.grid.pinColumn(streetColumn, PinnedPositions.None);
    this.grid.pinColumn(cityColumn, PinnedPositions.None);
    this.grid.pinColumn(countryColumn, PinnedPositions.None);
}
```

```razor
<DataGrid Height="100%" Width="100%"
    DefaultColumnMinWidth="120"                      
    DataSource="@DataSource"
    AutoGenerateColumns="false"
    @ref="DataGridRef">

    @*Columns Pinned Left*@
    <TextColumn Field="ID" Pinned="PinnedPositions.Left" />
    <TextColumn Field="FirstName" Pinned="PinnedPositions.Left" />
    <TextColumn Field="LastName" Pinned="PinnedPositions.Left" />

    @*Columns Unpinned*@
    <DateTimeColumn Field="Birthday" Pinned="PinnedPositions.None" />
    <NumericColumn Field="Age" Pinned="PinnedPositions.None" />
    <ImageColumn Field="CountryFlag" Pinned="PinnedPositions.None" />

    @*Columns Pinned Right*@
    <TextColumn Field="Street" Pinned="PinnedPositions.Right" />
    <TextColumn Field="City" Pinned="PinnedPositions.Right" />
    <TextColumn Field="Country" Pinned="PinnedPositions.Right" />                
</DataGrid>
```

## Toolbar's Column Pinning UI

The Column Pinning UI is accessible within the `DataGridToolbar` component separate from the grid. For this purpose all we have to do is set the toolbar's `columnPinning` property to true. The toolbar will then display a `Button`, when clicked, will display the column pinning UI. This button also displays the total of pinned-left columns. If the toolbar is not created, enabling the `columnPinning` property will have no effect and hide the button.

The `DataGridToolbar` provides additional properties such as adding a title to the toolbar by using the `toolbarTitle` property, placing text in the `Button` by setting the `columnPinningText` property, and adding a title header to the column hiding UI by setting `columnPinningTitle`.

## Demo


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-pinning-toolbar"  
           github-src="grids/data-grid/column-pinning-toolbar">
</code-view>

## Code Snippet

<!--React-->
```tsx
<IgrDataGridToolbar ref={this.onToolbarRef}
    toolbarTitle="Grid Title"
    columnPinning="true"
    columnPinningText="Pinning"
    columnPinningTitle="Column Pinning">
</IgrDataGridToolbar>
<IgrDataGrid
    ref={this.onGridRef}
    height="calc(100% - 40px)"
    dataSource={this.data}
    autoGenerateColumns="true">
</IgrDataGrid>
```

<!--React-->
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

        let productNameColumn = this.grid.actualColumns.item(0);
        productNameColumn.pinned = PinnedPositions.Left; 
    }
}

public onToolbarRef(toolbar: IgrDataGridToolbar) {
    this.toolbar = toolbar;
    if (this.grid != null) {
    this.toolbar.targetGrid = this.grid;
    this.toolbar.columnPinning = "true";
    this.toolbar.toolbarTitle = "Grid Title";
    this.toolbar.columnPinningText = "Pinning";
    this.toolbar.columnPinningTitle = "Pinning Title";
    }
}

```

<!--WebComponents-->
```html
<igc-dataGrid-toolbar
    toolbar-title="Grid Title"
    column-pinning="true"
    column-pinning-text="Pinning"
    column-pinning-title="Columns Pinned Left">
</igc-dataGrid-toolbar>
<igc-data-grid
    id="grid"
    height="calc(100% - 40px)"
    width="100%"
    auto-generate-columns="false"
    default-column-min-width="120px"
    scrollbar-style = "thin">
</igc-data-grid>
```

<!--WebComponents-->
```ts
import { IgcDataGrid } from 'igniteui-webcomponents-grids';
import { IgcDataGridToolbar } from 'igniteui-webcomponents-grids';

private grid: IgcDataGridComponent;
private toolbar: IgcToolbarComponent;

connectedCallback() {
    this.toolbar.targetGrid = this.grid;
    let productNameColumn = document.getElementById("productname") as IgcTextColumnComponent;
    productNameColumn.pinned = true;
    this.toolbar.columnPinning = true;
    this.toolbar.toolbarTitle = "Grid Title";
    this.toolbar.columnPinningText = "Pinning Text";
    this.toolbar.columnPinningTitle = "Pinning Title Text";
}
```

```razor
<DataGridToolbar TargetGrid="DataGridRef"
    ToolbarTitle="Grid Toolbar Title"
    ColumnPinning="true"
    ColumnPinningText="Pinning"
    ColumnPinningTitle="Column Pinning" />
<DataGrid Height="100%" Width="100%"
    @ref="DataGridRef" 
    DataSource="DataSource" />

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