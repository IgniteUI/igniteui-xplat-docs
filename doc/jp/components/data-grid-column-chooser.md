---
title: $PlatformShort$ データ グリッド | 列選択 | インフラジスティックス
_description: インフラジスティックスの $ProductName$ グリッド コンポーネントで UI から直接、または $PlatformShort$ コントロールを使用して列の表示/非表示機能をサポートする方法について説明します。詳細については、$ProductName$ テーブル サンプルを参照してください。
_keywords: $PlatformShort$ Table, Data Grid, column chooser, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 列選択, インフラジスティックス
mentionedTypes: ['Grid', 'DataGridToolbar', 'Button', 'ColumnChooser', 'IsHidden', 'ColumnHidingAnimationMode', 'ColumnShowingAnimationMode', 'ColumnChooserTitle', 'Column']
_language: ja
---

# $PlatformShort$ Grid 列選択の概要

$ProductName$ Data Grid は、`DataGridToolbar` コンポーネントまたはページのどこにでも配置できる `ColumnChooser` コンポーネントによって UI から列の表示/非表示を行う機能をサポートしています。列の `IsHidden` プロパティにより、手動生成の列に対してプログラムによって列の表示/非表示を設定することができます。`IsHidden` の値は `ColumnChooser` コンポーネントに反映されます。各方法は列の表示状態を変更するために使用できます。

## $PlatformShort$ Grid 列選択の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-chooser-toolbar"
           alt="$PlatformShort$ Grid 列選択の例" 
           github-src="grids/data-grid/column-chooser-toolbar">
</code-view>

<div class="divider--half"></div>


## ツールバーの列選択 UI

列選択 UI は、グリッドとは別に `DataGridToolbar` コンポーネント内でアクセスできます。このため、ツールバーの `ColumnChooser` プロパティを true に設定します。
ツールバーは `Button` を表示し、クリックすると列選択 UI を表示します。このボタンは、非表示列の合計も表示します。ツールバーが作成されていない場合、`ColumnChooser` プロパティを有効にしても効果はなく、ボタンを非表示にします。

`DataGridToolbar` は、` toolbarTitle` プロパティを使用してツールバーにタイトルを追加、`ColumnChooserText` プロパティを設定して `Button` にテキストを配置、`ColumnChooserTitle` を設定して、タイトル ヘッダーを列選択 UI に追加などの追加プロパティを提供します。

列選択は、グリッドの `ColumnHidingAnimationMode` および `ColumnShowingAnimationMode` プロパティを設定することでアニメーションで構成できます。

## コード スニペット

以下は、データ グリッドの列選択ツールバー UI の実装方法を示します。

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
<DataGridToolbar ToolbarTitle="Grid Title"
    ColumnChooser="true"
    ColumnChooserText="Columns"
    ColumnChooserTitle="Column Chooser"
    TargetGrid="DataGridRef" />
<DataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DefaultColumnMinWidth="120"
    DataSource="@DataSource"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToLeft">
</DataGrid>

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

## シンプルな列選択

ツールバーなしで `ColumnChooser` UIを手動で表示し、ページの任意の場所に配置するとします。マークアップでコンポーネントのインスタンスを作成して簡単に行うことができます。

## サンプル


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-chooser-picker"
           github-src="grids/data-grid/column-chooser-picker">
</code-view>

<div class="divider--half"></div>

## コード スニペット

以下は、データ グリッドの列選択 UI の実装方法を示します。

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
<ColumnChooser Height="100%" Width="200px"
    Title="Column Chooser"
    TargetGrid="DataGridRef" />
<DataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToLeft" />

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

