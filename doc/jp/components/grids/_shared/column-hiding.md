---
title: {Platform} {ComponentTitle} 列の非表示 - {ProductName}
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} の列非表示

<!-- Angular -->
{ProductName} `{ComponentName}` は、`ColumnHidingDirective` のある `ColumnActionsComponent` を提供し、ユーザーが UI を介して、または {Platform} コンポーネントを使用して列の非表示を実行できるようにします。
<!-- end: Angular -->

{ProductName} には組み込み列非表示 UI があり、これを {Platform} {ComponentTitle} のツールバーから使用して列の表示状態を変更できます。開発者は、必要に応じてページ内の任意の場所に列非表示 UI を柔軟に定義できます。{Platform} {ComponentTitle} 列の非表示機能は、グリッドのサイズを小さくし、冗長なフィールドをタブで移動する必要をなくしたい場合に特に便利です。

## {Platform} {ComponentTitle} 列非表示の例

`sample="/{ComponentSample}/column-hiding-toolbar", height="600", alt="{Platform} {ComponentTitle} 列非表示の例"`



## {ComponentTitle} のセットアップ

`{ComponentName}` を作成してからデータをバインドします。列でフィルタリングとソートも有効にします。

<!-- ComponentStart: Grid, TreeGrid -->
```html
<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-grid>
```

```razor
<{ComponentSelector} Data=northwindEmployees AutoGenerate=false Width="100%" Height="100%" AllowFiltering=true>
    <IgbColumn Field="ID" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactName" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true></IgbColumn>
    <IgbColumn Field="City"  Sortable=true></IgbColumn>
    <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
    <IgbColumn Field="Fax" Sortable=true></IgbColumn>
    <IgbColumn Field="Address" Sortable=true></IgbColumn>
    <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
    <IgbColumn Field="Country" Sortable=true></IgbColumn>
    <IgbColumn Field="Phone" Sortable=true></IgbColumn>
</{ComponentSelector}>
```

```html
<igc-grid id="grid" auto-generate="false" width="100%" height="560px" allow-filtering="true">
    <igc-column field="ID" data-type="String" sortable="true" hidden="true"></igc-column>
    <igc-column field="ContactName" data-type="String" sortable="true" hidden="true"></igc-column>
    <igc-column field="ContactTitle" data-type="String" sortable="true"></igc-column>
    <igc-column field="City" data-type="String" sortable="true"></igc-column>
    <igc-column field="CompanyName" data-type="String" sortable="true"></igc-column>
    <igc-column field="Fax" data-type="String" sortable="true"></igc-column>
    <igc-column field="Address" data-type="String" sortable="true"></igc-column>
    <igc-column field="PostalCode" data-type="String" sortable="true"></igc-column>
    <igc-column field="Country" data-type="String" sortable="true"></igc-column>
    <igc-column field="Phone" data-type="String" sortable="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid autoGenerate="false" width="100%" height="560px" allowFiltering="true">
    <IgrColumn field="ID" dataType="string" sortable="true" hidden="true"></IgrColumn>
    <IgrColumn field="ContactName" dataType="String" sortable="true" hidden="true"></IgrColumn>
    <IgrColumn field="ContactTitle" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="City" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="CompanyName" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Fax" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Address" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="PostalCode" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Country" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Phone" dataType="string" sortable="true"></IgrColumn>
</IgrGrid>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [allowFiltering]="true">
    <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Photo"></igx-column>
    <igx-column field="Debut" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Nominations" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Awards" [sortable]="true"></igx-column>
</igx-hierarchical-grid>
```

```html
<igc-hierarchical-grid auto-generate="false" primary-key="ID" allow-filtering="true" name="hierarchicalGrid1" id="hierarchicalGrid1">
    <igc-column field="Artist" header="Artist" data-type="string" sortable="true"></igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"></igc-column>
    <igc-column field="Debut" header="Debut" data-type="number" hidden="true"></igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" sortable="true" hidden="true"></igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" sortable="true"> </igc-column>
</igc-hierarchical-grid>
```

```tsx
<IgrHierarchicalGrid autoGenerate="false" data={this.singersData} primaryKey="ID" allowFiltering="true"ref={this.hierarchicalGrid1Ref}>
    <IgrColumn field="Artist" header="Artist" dataType="String" sortable="true"></IgrColumn>
    <IgrColumn field="Photo" header="Photo" dataType="Image"></IgrColumn>
    <IgrColumn field="Debut" header="Debut" dataType="Number" hidden="true"></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="Number" sortable="true" hidden="true"></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="Number" sortable="true"></IgrColumn>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
<{ComponentSelector} AutoGenerate="false" Data="SingersData" PrimaryKey="ID" AllowFiltering="true" Name="hierarchicalGrid1" @ref="hierarchicalGrid1">
    <IgbColumn Field="Artist" Header="Artist" DataType="GridColumnDataType.String" Sortable="true"></IgbColumn>
    <IgbColumn Field="Photo" Header="Photo" DataType="GridColumnDataType.Image"></IgbColumn>
    <IgbColumn Field="Debut" Header="Debut" DataType="GridColumnDataType.Number" Hidden="true"></IgbColumn>
    <IgbColumn Field="GrammyNominations" Header="Grammy Nominations" DataType="GridColumnDataType.Number" Sortable="true" Hidden="true"></IgbColumn>
    <IgbColumn Field="GrammyAwards" Header="Grammy Awards" DataType="GridColumnDataType.Number" Sortable="true"></IgbColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

## ツールバーの列非表示 UI

定義済みの列非表示 UI は、`{ComponentName}` のツールバーの `DropDown` 内に配置されます。列非表示の UI をこのドロップダウンを使用して表示/非表示にできます。

これには、`{ComponentName}` 内に `GridToolbarActions` と `GridToolbarHiding` の両方を設定することだけです。ツールバーにタイトルを追加するには、`GridToolbarTitle` を設定し、{ComponentTitle} のラッパーにカスタム スタイルを設定します。

<!-- ComponentStart: Grid, TreeGrid -->
```html
<igx-grid [data]="localdata">
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```

```razor
<{ComponentSelector} Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```

```html
<igc-grid>
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarHiding key="toolbarHiding"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- Angular -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="localdata">
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Angular -->

<!-- Web Components -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid id="hierarchicalGrid1">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Web Components -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
<{ComponentSelector} Data="SingersData">
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding>
            </IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid data={this.singersData}>
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

`{ComponentName}` にはツールバーの列非表示 UI に便利なプロパティがあります。

`Title` プロパティを使用して、ツールバーのドロップダウン ボタンに表示されるタイトルを設定します。

<!-- ComponentStart: Grid, TreeGrid -->
```html
<igx-grid [data]="localdata">
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```

```razor
<{ComponentSelector} Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding @ref=HidingAction Title="Column Hiding"></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```

```html
<igc-grid id="grid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding id="hidingAction" title="Column Hiding"></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarHiding key="toolbarHiding" title="Column Hiding"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- Angular -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="localdata">
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Angular -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
<{ComponentSelector} Data=SingersData>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding Title="Column Hiding"></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

<!-- Web Components -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid id="hierarchicalGrid1">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding id="hidingAction" title="Column Hiding"></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Web Components -->

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarHiding key="toolbarHiding" title="Column Hiding"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

<!-- Angular -->

`GridToolbarHiding` の `ColumnsAreaMaxHeight` プロパティを使用して、列操作を含む領域の最大の高さを設定できます。このように、多くの操作があり、それらのすべてがコンテナーに収まらない場合は、スクロールバーが表示され、必要な操作にスクロールできます。

```typescript
public ngAfterViewInit() {
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

```razor
@code {
    public IgbGridToolbarHiding HidingAction { get; set; }
    protected override async Task OnInitializedAsync()
    {
        HidingAction.ColumnsAreaMaxHeight = "200px";
    }
}
```

```typescript
constructor() {
    var hidingAction = this.hidingAction = document.getElementById('hidingAction') as IgcGridToolbarHidingComponent;
}

connectedCallback() {
    this.hidingAction.columnsAreaMaxHeight = "200px";
}
```

列非表示 UI の拡張機能セットを使用するために、`ColumnActions` の `ColumnsAreaMaxHeight` プロパティを使用できます。アプリケーションの要件に基づいて使用できます。

<!-- end: Angular -->

このトピックのはじめにあるコードの結果は {Platform} 列非表示の例のセクションで確認できます。

<!-- Angular -->

## カスタム列の非表示 UI

`ColumnActionsComponent` を手動で定義する場合は、`ColumnHidingDirective` をページの任意の場所に追加してその目的がわかるようにします。ただし、最初に、`IgxColumnActionsModule` をインポートする必要があります。

```typescript
// app.module.ts

//...
import {
    //...
    IgxColumnActionsModule
} from 'igniteui-{Platform}';

@NgModule({
    imports: [IgxColumnActionsModule],
})
export class AppModule {}
```

次に `ColumnActionsComponent` を作成します。アプリケーションでグリッドの隣に配置します。これはツールバーの列非表示 UI と異なります。ツールバーの場合、コンポーネントはドロップダウンに含まれます。`{ComponentName}` の `Columns` プロパティをグリッドの列に設定し、更にカスタム スタイルも追加します。

```html
<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="grid.columns">
    </igx-column-actions>
</div>
<div class="gridContainer">
    <{ComponentSelector} #grid [data]="data" [autoGenerate]="true" width="100%" height="500px" columnWidth="200px">
    </{ComponentSelector}>
</div>
```

```css
.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-actions {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
```

### タイトルおよびフィルター プロンプトの追加

列非表示コンポーネント機能を拡張するために `Title` および `FilterColumnsPrompt` プロパティを設定します。`Title` は一番上に表示され、`FilterColumnsPrompt` は列非表示 UI のフィルター入力に表示されるプロンプト テキストです。

```html
<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="grid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions>
</div>
```


### 列の表示順序オプションの追加

列非表示 UI で列の表示順序を選択する機能も追加します。このため、`ColumnDisplayOrder` プロパティを使用します。列挙型のプロパティで、以下のオプションがあります。

- **Alphabetical** (列をアルファベット順で並べ替え)
- **DisplayOrder** (列を {ComponentTitle} で表示される順序によって並べ替え)

このオプションにラジオ ボタンを追加します。[**IgxRadio**](../radio-button.md) モジュールを追加します。

```typescript
import {
    IgxRadioModule
} from 'igniteui-{Platform}';

@NgModule({
    imports: [IgxRadioModule]
})
export class AppModule {}
```

両方のラジオ ボタンの `Checked` プロパティを異なる条件に個々にバインドして、click イベントを処理します。

```html
<div class="columnHidingContainer">
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```
<!-- end: Angular -->

### 列の非表示の無効化
列の `DisableHiding` プロパティを true に設定すると、ユーザーが列非表示 UI によって列を非表示にできません。

<!-- ComponentStart: Grid, TreeGrid -->
```html
<igx-grid>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
</igx-grid>
```

```html
<igc-grid>
    <igc-column field="ContactName" data-type="String" sortable="true" disable-hiding="true"></igc-column>
    <igc-column field="ContactTitle" data-type="String" sortable="true" disable-hiding="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrColumn field="ContactName" dataType="string" sortable="true" disableHiding="true"></IgrColumn>
    <IgrColumn field="ContactTitle" dataType="string" sortable="true" disableHiding="true"></IgrColumn>
</IgrGrid>
```

```razor
<{ComponentSelector} Data=northwindEmployees AutoGenerate=false>
    <IgbColumn Field="ContactName" Sortable=true DisableHiding=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true DisableHiding=true></IgbColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid>
    <igx-column [field]="'Artist'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'GrammyAwards'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>

    <igx-row-island>
        <igx-column [field]="'Album'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

```html
<igc-hierarchical-grid>
    <igc-column field="Artist" data-type="String" sortable="true" disable-hiding="true"></igc-column>
    <igc-column field="GrammyAwards" data-type="String" sortable="true" disable-hiding="true"></igc-column>

    <igc-row-island>
        <igc-column field="Album" data-type="String" sortable="true" disable-hiding="true"></igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

```tsx
<IgrHierarchicalGrid>
    <IgrColumn field="Artist" dataType="string" sortable="true" disableHiding="true"></IgrColumn>
    <IgrColumn field="GrammyAwards" dataType="string" sortable="true" disableHiding="true"></IgrColumn>

    <IgrRowIsland>
        <IgrColumn field="Album" dataType="string" sortable="true" disableHiding="true"></IgrColumn>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```

```razor
<{ComponentSelector}>
    <IgbColumn Field="Artist" Sortable=true DisableHiding=true></IgbColumn>
    <IgbColumn Field="GrammyAwards" Sortable=true DisableHiding=true></IgbColumn>

    <IgbRowIsland>
        <IgbColumn Field="Album" Sortable=true DisableHiding=true></IgbColumn>
    </IgbRowIsland>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- Angular -->
列非表示 UI コンポーネントは以下のようになります。

`sample="/{ComponentSample}/custom-column-hiding", height="600", alt="{Platform} {ComponentTitle} カスタム列非表示の例"`

## スタイル設定

列操作コンポーネントのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント mixins が存在するインデックス ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

最も簡単なアプローチを使用して、`column-actions-theme` を拡張し、`$title-color` および `$background-color` パラメーターを受け取る新しいテーマを作成します。

```scss
$custom-column-actions-theme: column-actions-theme(
    $background-color: steelblue,
    $title-color: gold
);
```

ご覧のように `column-actions-theme` は列操作コンテナーのカラーのみを制御しますが、ボタン、チェックボックス、内部の入力グループには影響しません。ボタンのスタイルも設定したい場合、新しいボタン テーマを作成します。

```scss
$custom-button: button-theme($flat-text-color: gold, $disabled-color: black);
```

この例では、フラット ボタンのテキスト カラーとボタンの無効なカラーのみを変更しましたが、`button-theme` は、ボタンのスタイルを制御するためのより多くのパラメーターを提供します。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
@include column-actions($custom-column-actions-theme);
.igx-column-actions {
    @include button($custom-button);
}
```

> [!Note]
>**igx-button** mixin を `.igx-column-actions` 内にとどめ、列を非表示にするボタンのみがスタイル設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 > [!Note]
 >コンポーネントが `Emulated` ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include column-actions($custom-column-actions-theme);
        .igx-column-actions {
            @include button($custom-button);
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、`igx-palette` および `igx-color` 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: gold;
$blue-color: steelblue;

$custom-palette: palette($primary: $blue-color, $secondary: $yellow-color);
```

また `igx-color` を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-column-actions-theme: column-actions-theme(
    $palette: $custom-palette,
    $title-color: color($custom-palette, "secondary", 400),
    $background-color: color($custom-palette, "primary", 200)
);

$custom-button: button-theme(
    $palette: $custom-palette,
    $flat-text-color: color($custom-palette, "secondary", 400),
    $disabled-color: black
);
```

> [!Note]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

```scss
// Extending the dark column actions schema
$custom-column-actions-schema: extend($_dark-column-actions,
    (
        title-color:(
           color: ("secondary", 400)
        ),
        background-color:(
           color: ("primary", 200)
        )
    )
);
// Extending the dark button schema
$custom-button-schema: extend($_dark-button,
    (
        flat-text-color:(
           color: ("secondary", 500)
        ),
        disabled-color:(
           color: ("primary", 700)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル (`light` または `dark`) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-column-actions: $custom-column-actions-schema,
    igx-button: $custom-button-schema
));

// Defining column-actions-theme with the global dark schema
$custom-column-actions-theme: column-actions-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$custom-button: button-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

`sample="/{ComponentSample}/column-hiding-style", height="600", alt="{Platform} {ComponentTitle} 列非表示のスタイル設定の例"`

<!-- end: Angular -->

<!-- Blazor, WebComponents, React -->
## スタイル設定

グリッドは、利用可能な [CSS 変数](../theming.md)の一部を設定することでさらにカスタマイズできます。
これを実現するために、最初にグリッドに割り当てるクラスを使用します。

<!-- ComponentStart: Grid, TreeGrid -->
```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<{ComponentSelector} class="hierarchical-grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="hierarchical-grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="hierarchical-grid"></{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->

次に、関連するコンポーネントに関連する CSS 変数を設定します。スタイルも `igx-column-actions` にのみ適用するので、グリッドの残りの部分は影響を受けません。

<!-- ComponentStart: Grid, TreeGrid -->
```css
.grid  igx-column-actions {
    /* Main Column Actions styles */
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;

    /* Checkbox styles */
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;

    /* Input styles */
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;

    /* Buttons styles */
    --ig-button-foreground: #292826;
    --ig-button-background: #ffcd0f;
    --ig-button-hover-background: #404040;
    --ig-button-hover-foreground: #ffcd0f;
    --ig-button-focus-background: #ffcd0f;
    --ig-button-focus-foreground: black;
    --ig-button-focus-visible-background: #ffcd0f;
    --ig-button-focus-visible-foreground: black;
    --ig-button-disabled-foreground: #ffcd0f;
}
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```css
#hierarchicalGrid {
    /* Main Column Actions styles */
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;

    /* Checkbox styles */
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;

    /* Input styles */
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;

    /* Buttons styles */
    --ig-button-foreground: #292826;
    --ig-button-background: #ffcd0f;
    --ig-button-hover-background: #404040;
    --ig-button-hover-foreground: #ffcd0f;
    --ig-button-focus-background: #ffcd0f;
    --ig-button-focus-foreground: black;
    --ig-button-focus-visible-background: #ffcd0f;
    --ig-button-focus-visible-foreground: black;
    --ig-button-disabled-foreground: #ffcd0f;
}
```
<!-- ComponentEnd: HierarchicalGrid -->

### デモ

`sample="/{ComponentSample}/column-hiding-toolbar-style", height="570", alt="{Platform} {ComponentTitle} 列非表示ツールバーのスタイル"`

<!-- end: Blazor, WebComponents, React -->

## API リファレンス

<!-- Angular -->
このトピックでは、`{ComponentName}` のツールバーの定義済みの列非表示 UI の使用方法や別のコンポーネントとして定義する方法について説明しました。その他の列順序から選択する機能を提供する UI を実装し、カスタム タイトルおよびフィルター プロンプト テキストを設定しました。[**IgxRadio**](../radio-button.md) ボタンなどその他の {ProductName} コンポーネントも使用しています。

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* `ColumnActionsComponent`
<!-- end: Angular -->

<!-- Blazor, WebComponents, React -->
このトピックでは、`{ComponentName}` のツールバーの定義済みの列非表示 UI の使用方法について学びました。以下は、列非表示 UI のその他の API です。

* `ColumnActionsComponent`

その他のコンポーネント (またはそのいずれか) で使用した API:

<!-- end: Blazor, WebComponents, React -->

`Column` プロパティ:
* `DisableHiding`

`GridToolbar` プロパティ:
* `showProgress`

<!-- Angular -->
`GridToolbar` ディレクティブ:
* `TitleDirective`
* `ActionsDirective`
<!-- end: Angular -->

`GridToolbar` メソッド:
* `GridToolbarHiding`
* `GridToolbarActions`
* `GridToolbarTitle`

`{ComponentName}` イベント:
* `ColumnVisibilityChanged`

<!-- Angular -->
スタイル:
* `{ComponentName}`
* `Radio`
<!-- end: Angular -->

## その他のリソース
<!-- ComponentStart:  Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
