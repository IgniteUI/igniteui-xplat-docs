---
title: $PlatformShort$ データ グリッド | 列ピン固定 | インフラジスティックス
_description: インフラジスティックスの $ProductName$ グリッド コンポーネントは列のピン固定をサポートし、列の位置を柔軟に選択できます。詳細については、$ProductName$ テーブル サンプルを参照してください。
_keywords: $PlatformShort$ Table, Data Grid, column pinning, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 列ピン固定, インフラジスティックス
mentionedTypes: ['Grid', 'PinnedPositions', 'PinColumn', 'Pinned', 'ColumnPinning', 'DataGridToolbar', 'Column']
_language: ja
---

# $PlatformShort$ Grid 列ピン固定の概要

$ProductName$ Data Grid は列をピン固定する機能をサポートし、エンド ユーザーが特定の列順序で列をロックできます。

単一または複数の列をデータ グリッドの左側または右側にピン固定できます。その他、`PinColumn` 関数を介して列のピン固定状態を変更できます。

## $PlatformShort$ Grid 列ピン固定の例

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-pinning-picker' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Grid 列ピン固定の例"></iframe>
</div>
<sample-button src="grids/data-grid/column-pinning-picker"></sample-button>

<div class="divider--half"></div>

データグリッドの列ピン固定 API は、列の `Pinned` プロパティまたはグリッドの `PinColumn` 関数を設定することで有効にできます。

`Pinned` プロパティに 3 つのオプションがあります。

- Left - `Left` を有効にすると、ピン固定した列がグリッドの左側に配置されます。
- Right - `Right` を有効にすると、ピン固定した列がグリッドの右側に配置されます。
- None - `None` を有効にすると、列のピン固定を解除し、グリッド内のデフォルトの配置を再配置します。

ピン固定された列に近接するピン固定されていない列は、水平スクロールを維持します。

`PinColumn` 関数に 2 つのパラメーターがあります。最初のパラメーターはピン固定する列で、2 番目は `PinnedPositions` 列挙体設定です。


## コード スニペット

以下のコードは、`Pinned` プロパティと `PinColumn` 関数で列のピン固定を使用して、データ グリッドで列のピン固定を実装する方法を示します。

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

## ツールバーの列ピン固定 UI

列ピン固定 UI は、グリッドとは別に `DataGridToolbar` コンポーネント内でアクセスできます。 このため、ツールバーの `columnPinning` プロパティを true に設定します。ツールバーは `Button` を表示し、クリックすると列ピン固定 UI を表示します。このボタンは、左側にピン固定された列の合計も表示します。ツールバーが作成されていない場合、`columnPinning` プロパティを有効にしても効果はなく、ボタンを非表示にします。

`DataGridToolbar` は、`toolbarTitle` プロパティを使用してツールバーにタイトルを追加、 `columnPinningText` プロパティを設定して `Button` にテキストを配置、`columnPinningTitle` を設定して、タイトル ヘッダーを列非表示 UI に追加などの追加プロパティを提供します。

## サンプル

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-pinning-toolbar' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/column-pinning-toolbar"></sample-button>

## コード スニペット

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
import { IgcToolbar } from 'igniteui-webcomponents-grids';

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