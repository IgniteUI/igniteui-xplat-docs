---
title: {Platform} {ComponentTitle} 列のサイズ変更 - {ProductName}
_description: {Platform} {ComponentTitle} の列サイズ変更を使用して、グリッド列の幅を瞬時に変更できます。{Platform} ドラッグ サイズ変更が大変使いやすくなりました。無料でお試しください。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} 列のサイズ変更の概要

グリッド列のサイズ変更遅延では、{Platform} ドラッグ操作の実行中にサイズ変更インジケーターが一時的に表示されます。`{ComponentName}` では、ドラッグ操作が完了すると、新しいグリッド列幅が適用されます。

## {Platform} {ComponentTitle} 列のサイズ変更の例

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-resizing"
           github-src="{ComponentSample}/column-resizing"
           alt="{Platform} {ComponentTitle} 列のサイズ変更の例">
</code-view>

**列のサイズ変更**は列レベルで有効化にできます。つまり、`{ComponentName}` にサイズ変更可能な列およびサイズ変更不可の列の両方を含むことが可能です。`Column` の `Resizable` 入力によって制御されます。

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```

```razor
<IgbColumn Field="ID" Resizable=true Width="100px"></IgbColumn>
```

```html
<igc-column field="ID" width="100px" resizable="true"></igc-column>
```

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```

```razor
<IgbColumn Field="Artist" Resizable=true></IgbColumn>
```

```html
<igc-column field="Artist" resizable="true"></igc-column>
```

<!-- ComponentEnd: HierarchicalGrid -->

`{ComponentName}` の `ColumnResized` イベントを処理し、列がサイズ変更されたときにカスタム ロジックを実装できます。以前の列幅、新しい列幅、および `Column` オブジェクトがイベント引数で公開されます。

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="false">
    <igc-column field="ID" width="100px" resizable="true"></igc-column>
    <igc-column field="CompanyName" width="100px" resizable="true"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid1.data = this.data;
        grid1.columnResized = this.onResize;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="ID" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="CompanyName" Resizable=true Width="100px"></IgbColumn>
</{ComponentSelector}>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</{ComponentSelector}>
```
<!-- end:Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="treeGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID">
    <igc-column field="Title" width="100px" resizable="true" width="100px"></igc-column>
    <igc-column field="HireDate" width="100px" resizable="true" width="100px"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;

    this._bind = () => {
        treeGrid.data = this.data;
        treeGrid.columnResized = this.onResize;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize" PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumn Field="Title" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="HireDate" Resizable=true Width="100px"></IgbColumn>
</{ComponentSelector}>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="Artist" [resizable]="true"></igx-column>
</igx-hierarchical-grid>
```

```html
<igc-hierarchical-grid id="treeGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID"
    height="600px" width="100%">
    <igc-column field="Artist" resizable="true"></igc-column>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;

    this._bind = () => {
        hierarchicalGrid.data = this.data;
        hierarchicalGrid.columnResized = this.onResize;
    }
    this._bind();
}
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
TO DO!
```

<!-- ComponentEnd: HierarchicalGrid -->

## ピクセル/パーセンテージで列のサイズを変更する

ユーザーのシナリオに応じて、列の幅はピクセル、パーセンテージ、または両方の組み合わせで定義できます。これらのシナリオはすべて、**列のサイズ変更**機能でサポートされています。デフォルトでは、列に幅が設定されていない場合、ピクセルで設定された幅の使用可能なスペースに収まります。

つまり、次の構成が可能です。

<!-- ComponentStart: Grid -->

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="ID" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="CompanyName" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="ContactTitle" Resizable=true></IgbColumn>
</{ComponentSelector}>
```

```html
<igc-grid id="grid" auto-generate="false">
    <igc-column field="ID" width="10%" resizable="true"></igc-column>
    <igc-column field="CompanyName" width="100px" resizable="true"></igc-column>
    <igc-column field="ContactTitle" resizable="true"></igc-column>
</igc-grid>
```

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize" PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumn Field="Title" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="HireDate" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="Age" Resizable=true></IgbColumn>
</{ComponentSelector}>
```

```html
<igc-tree-grid id="data" primary-key="ID" foreign-key="ParentID" auto-generate="false">
    <igc-column field="Title" resizable="true" width="10%"></igc-column>
    <igc-column field="HireDate" resizable="true" width="100px"></igc-column>
    <igc-column field="Age" data-type="Number" resizable="true"></igc-column>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
</igx-hierarchical-grid>
```

```html
<igc-hierarchical-grid id="hierarchicalGrid" class="hgrid" auto-generate="false"
        height="600px" width="100%">
        <igc-column field="Artist" resizable="true" width="10%"></igc-column>
        <igc-column field="GrammyNominations" resizable="true" width="100px"></igc-column>
        <igc-column field="GrammyAwards" resizable="true"></igc-column>
</igc-hierarchical-grid>
```

```razor
TO DO!
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> ピクセルとパーセンテージで設定された場合で列のサイズ変更の動作は少々異なります。

**ピクセル**

幅がピクセルで設定された列のサイズ変更は、マウスの水平移動量を列のサイズに直接足したり引いたりして行なわれます。

**パーセンテージ**

幅がパーセンテージで設定された列のサイズを変更する場合、ピクセル単位のマウスの水平移動量は、ほぼグリッド幅に対するパーセンテージの量に変換されます。列はレスポンシブな状態のまま、その後のグリッドのサイズ変更は列にも反映されます。

## 列のサイズ変更の制限

列の最小幅および最大幅の構成も可能です。`Column` の `MinWidth` および `MaxWidth`入力によって制御されます。この場合、サイズ変更インジケーターのドラッグ操作が制限されます。列が `MinWidth` および `MaxWidth` によって定義される範囲以外にサイズ変更できないことをユーザーに通知します。

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
```html
<igc-column field="ID" width="100px" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

```razor
<IgbColumn Field="ContactTitle" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

列幅の最小値と最大値のタイプ (ピクセルまたはパーセンテージ) を混在させることができます。最小値と最大値がパーセンテージに設定されている場合、それぞれの列サイズはピクセルと同様の正確なサイズに制限されます。

つまり、次の構成が可能です。

```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
```html
<igc-column field="ID" width="10%" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

```razor
<IgbColumn Field="ContactTitle" Resizable=true Width="10%" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

または

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```
```html
<igc-column field="ID" width="100px" resizable="true"
            min-width="5%" max-width="15%"></igc-column>
```

```razor
<IgbColumn Field="ID" Resizable=true Width="100px" MinWidth="5%" MaxWidth="15%"></IgbColumn>
```

## ダブルクリックで列の自動サイズ調整

各列ヘッダーの右側をダブルクリックして列を**自動サイズ**調整することができます。列は、現在表示されているヘッダーを含む一番長いセル値にサイズ設定されます。この動作はデフォルトで有効なため、追加で構成する必要はありません。ただし、`MaxWidth` がその列に設定され、新しい幅が `MaxWidth` 値より大きい場合、列は自動サイズ調整されません。この場合、列が `MaxWidth` 値に設定されます。

また、`Column` の `Autosize` メソッドで列を動的に自動でサイズ変更できます。

<!-- Angular -->
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: {ComponentName};

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```
<!-- end: Angular -->

```typescript
constructor() {
    var id = this.id = document.getElementById('ID') as IgcColumnComponent;

    this._bind = () => {
        id.autosize();
    }
    this._bind();
}
```

```razor
@code {
    private {ComponentName} gridRef;

    protected void OnInitialize()
    {
        IgbColumn column = gridRef.Columns.Where((col) => { return col.Field == "ID"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

## 初期化時に列を自動サイズ調整

`Width` を 'auto' に設定することで、初期化時に各列を自動サイズに設定できます。

```html
<igx-column width='auto'>
```

```html
<igc-column width='auto'>
```

```razor
<IgbColumn Width="auto"></IgbColumn>
```

列がビューで最初に初期化されるとき、その幅は、表示されている最も長いセルまたはヘッダーのサイズに調整されます。表示されている行の外側にあるセルは含まれないことに注意してください。

このアプローチは、初期化後の自動サイズ変更よりもパフォーマンスが最適化されており、特に多数の列のサイズを自動サイズ設定する必要がある場合に推奨されます。

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-auto-sizing"
           github-src="{ComponentSample}/column-auto-sizing"
           alt="{Platform} {ComponentTitle} 列のサイズ変更の例">
</code-view>

<!-- Angular -->

## スタイル設定

`{ComponentName}` 列のサイズ変更行のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在するインデックス ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張し、
`$resize-line-color` パラメーター以外にも多くのパラメータを受け入れます。

``` scss
$custom-grid-theme: grid-theme(
    $resize-line-color: #0288D1
);

```
 > [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include grid($custom-grid-theme);
    }
}
```

### カラー パレットの定義
カラーの値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによってカラーに関してより高い柔軟性を持つことができます。

`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。

```scss
$primary-color: #0288D1;
$secondary-color: #BDBDBD;

$custom-theme-palette: palette($primary: $primary-color, $secondary: $secondary-color);
```

また [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単にカラーを取り出すことができます。

```scss
$custom-grid-theme: grid-theme(
    $palette: $custom-theme-palette,
    $resize-line-color: color($custom-theme-palette, 'secondary', 500)
);
```

> [!Note]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用
テーマ エンジンを使用して [**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている定義済みのスキーマを拡張します。この場合は、[light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid) スキーマです。

```scss
// Extending the light grid schema
$light-grid-schema: extend($_light-grid,
    (
        resize-line-color: (
           color: ('secondary', 500)
            ),
        header-background: (
           color: ("primary", 100)
            ),
        header-text-color: (
           color: ("primary", 600)
            )
    )
);
```

カスタム スキーマを適用するには、グローバル ([light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-light-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$custom-light-grid-schema: extend($light-schema,(
    igx-grid: $light-grid-schema
));

// Specifying the palette and schema of the custom grid theme
$custom-grid-theme: grid-theme(
    $palette: $custom-theme-palette,
    $schema: $custom-light-grid-schema
);
```
上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-resize-styling"
           github-src="{ComponentSample}/column-resize-styling">
</code-view>

> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## API リファレンス

* `Column`
* `{ComponentName}`

## その他のリソース


* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
