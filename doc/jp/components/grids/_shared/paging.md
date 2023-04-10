---
title: {Platform} {ComponentTitle} ページング - インフラジスティックス
_description: {Platform} ページネーションを構成し、Ignite UI によって {Platform} テーブルにカスタム ページを作成し、さまざまなイベントで要求されたページのデータを取得します。
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Paging, {Platform}, {ComponentKeywords}, {ProductName}, ページング, インフラジスティックス
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} ページネーションの概要

ページネーションは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。{Platform} テーブルのページネーションにより、ユーザー エクスペリエンスとデータ操作が向上します。`{ComponentName}` ページネーションは、列の追加と同様に、`Paginator` タグを定義することにより、グリッド ツリーに投影された別のコンポーネントを介して構成できます。他の {Platform} テーブルと同様に、`{ComponentName}` のページネーションはカスタム ページのテンプレートをサポートしています。

## {Platform} {ComponentTitle} ページネーションの例

次の例は `{ComponentName}` のページネーションを表し、ページごとの項目のオプションの使用法とページングを有効にする方法を公開します。ユーザーは、[最後のページに移動] ボタンと [最初のページに移動] ボタンを使用して `{ComponentName}` ページをすばやく移動することもできます。

`sample="/{ComponentSample}/row-paging-basic", height="550", alt="{Platform} {ComponentTitle} ページネーションの例"`



<!-- Angular -->

<!-- [Paginator](../paginator.md) コンポーネントを追加すると、機能が存在するかどうかが制御されます。単純な `*ngIf` とトグル プロパティを使用して有効 / 無効にできます。`perPage` 入力は、ページごとに表示されるレコードを制御します。`{ComponentName}` を更新して、ページングを有効にしましょう: -->

<!-- end: Angular -->

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} @ref=grid Width="100%" Height="500px" Data=marketData DisplayDensity="DisplayDensity.Cosy">
    <IgbPaginator PerPage="10"></IgbPaginator>
</{ComponentSelector}>
```
<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" height="500px" width="100%" display-density="Cosy">
    <igc-paginator per-page="10">
    </igc-paginator>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- Angular -->
```html
<igx-paginator #paginator [totalRecords]="20">
    <igx-paginator-content>
        <div id="numberPager" style="justify-content: center;">
            <button [disabled]="paginator.isFirstPage" (click)="paginator.previousPage()" igxButton="flat">
                PREV
            </button>
            <span>
               Page {{paginator.page}} of {{paginator.totalPages}}
            </span>
            <button [disabled]="paginator.isLastPage" (click)="paginator.nextPage()" igxButton="flat">
                NEXT
            </button>
        </div>
    </igx-paginator-content>
</igx-paginator>
```
<!-- end: Angular -->

<!-- ComponentStart: Grid -->
## グループ化によるページング

グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。

ページングとグループ化の統合については、[グループ化](groupby.md#grid-ページングでグループ化)のトピックで説明しています。

<!-- ComponentEnd: Grid -->

## 使用方法

以下の例では、`Paginator` コンポーネントを `{ComponentName}` コンポーネントと一緒に使用していますが、ページング機能が必要な場合は、他のコンポーネントと一緒に使用できます。

<!-- ComponentStart: Grid, TreeGrid -->

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data">
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="10"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} @ref=grid Data=marketData DisplayDensity="DisplayDensity.Compact">
    <IgbPaginator Page="grid.Page" TotalRecords="grid.TotalRecords" PerPage="10" DisplayDensity="grid.DisplayDensity">
    </IgbPaginator>
</{ComponentSelector}>
```

```html
<{ComponentSelector} id="grid">
    <igc-paginator id="paginator" per-page="10">
    </igc-paginator>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var paginator = this.paginator = document.getElementById('paginator') as IgcPaginatorComponent;

    this._bind = () => {
        grid.data = this.data;
        paginator.page = grid.page;
        paginator.totalRecords = grid.totalRecords;
        paginator.selectOption = selectOptions;
        paginator.displayDensity = grid.displayDensity;
    }
    this._bind();
}
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid>
    <igx-column *ngFor="let c of hColumns" [field]="c.field">
    </igx-column>
    <igx-row-island [key]="'childData'" [autoGenerate]="true">
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>
    <igx-row-island [key]="'childData2'" [autoGenerate]="true">
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>

    <igx-paginator></igx-paginator>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
```

### 子グリッド内のページネーター設定

<!-- Angular -->
`{ComponentName}` の子グリッドの実装方法および DI スコープの動作には一定の制限があるため、`RowIsland` タグ内でページネーターコンポーネントを定義する場合、ページネーター自体で `Paginator` ディレクティブを必ず使用してください。これにより、子グリッドが参照として正しいページネーター インスタンスを持つようになります。
<!-- end:Angular -->

```html
<igx-hierarchical-grid>
    <igx-row-island>
        <igx-grid-toolbar *igxPaginator>
        </igx-grid-toolbar>
    </igx-row-island>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
```
<!-- ComponentEnd: HierarchicalGrid -->

### ページネーター コンポーネントのデモ

`sample="/{ComponentSample}/row-paging-options", height="550", alt="{Platform} {ComponentTitle} 再利用可能なページネーターの例"`



<div class="divider--half"></div>

<!-- Angular -->

## リモート ページング

リモート ページングは、データ取得を担当するサービスと、`{ComponentName}` の構築とデータ サブスクリプションを担当するコンポーネントを宣言することで実現できます。詳細については、[リモート データ操作](remote-data-operations.md#リモート-ページング)トピックをご覧ください。

<!-- ComponentStart: Grid -->

## カスタム テンプレートのリモート ページング

独自のページング動作を定義するために、`PaginatorContent` を使用してカスタム ロジックを追加できます。[このセクション](remote-data-operations.md#カスタム-igx-paginator-content-のリモート-ページング)では、上記を実証するために、リモート ページングの例を拡張する方法を説明します。

<!-- ComponentEnd: Grid -->

<!-- end: Angular -->

<!-- Angular -->

## {Platform} の各ページ スタイリング

ページネーターのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、`PaginatorTheme` を拡張する新しいテーマを作成し、`$text-color`、`$background-color`、`$border-color` パラメーターを受け取る方法です。

```scss
$dark-paginator: paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

`PaginatorTheme` はページング コンテナの色の制御のみですが、ページャー UI のボタンには影響しません。これらのボタンにスタイル設定するために、新しいボタン テーマを作成しましょう。

```scss
$dark-button: button-theme(
    $icon-color: #FFCD0F,
    $icon-hover-color: #292826,
    $icon-hover-background: #FFCD0F,
    $icon-focus-color: #292826,
    $icon-focus-background: #FFCD0F,
    $disabled-color: #16130C
);
```

この例では、アイコンの色と背景、ボタンの無効な色のみを変更しましたが、`ButtonTheme` ではボタン スタイルを制御するためのパラメータを増やすことができます。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
@include grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include button($dark-button);
}
```

> [!Note]
>`Button` ミックスインを `.igx-paginator__pager` 内でスコープして、ページネーター ボタンのみにスタイルが設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 > [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include paginator($dark-paginator);
        .igx-paginator__pager {
            @include button($dark-button);
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、`Palette` および `Color` 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`Palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```

また `Color` を使用してパレットから簡単に色を取り出すことができます。

```scss
$dark-paginator: paginator-theme(
    $palette: $dark-palette,
    $text-color: color($dark-palette, "secondary", 400),
    $background-color: color($dark-palette, "primary", 200),
    $border-color: color($dark-palette, "primary", 500)
);

$dark-button: button-theme(
    $palette: $dark-palette,
    $icon-color: color($dark-palette, "secondary", 700),
    $icon-hover-color: color($dark-palette, "primary", 500),
    $icon-hover-background: color($dark-palette, "secondary", 500),
    $icon-focus-color: color($dark-palette, "primary", 500),
    $icon-focus-background: color($dark-palette, "secondary", 500),
    $disabled-color: color($dark-palette, "primary", 700)
);
```

> [!Note]
>`Color` および `Palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

 テーマ エンジンを使用して[スキーマ](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。スキーマはテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (この場合は (`DarkPagination` と `DarkButton` スキーマ) の 1 つを拡張します。

```scss
// Extending the dark paginator schema
$dark-paginator-schema: extend($_dark-pagination,
        (
            text-color:(
               color: ("secondary", 400)
            ),
            background-color:(
               color: ("primary", 200)
            ),
            border-color:(
               color:( "primary", 500)
            )
        )
);
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
        (
            icon-color:(
               color:("secondary", 700)
            ),
            icon-hover-color:(
               color:("primary", 500)
            ),
            icon-hover-background:(
               color:("secondary", 500)
            ),
            icon-focus-color:(
               color:("primary", 500)
            ),
            icon-focus-background:(
               color:("secondary", 500)
            ),
            disabled-color:(
               color:("primary", 700)
            )
        )
);
```

カスタム スキーマを適用するには、グローバル (`Light` または `Dark`) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-paginator: $dark-paginator-schema,
    igx-button: $dark-button-schema
));

// Definingpaginator-theme with the global dark schema
$dark-paginator: paginator-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$dark-button: button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### ページネーション スタイルの例

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-paging-style", height="550", alt="{Platform} {ComponentTitle} ページング スタイルの例"`



<div class="divider--half"></div>

<!-- end: Angular -->

## API リファレンス
* `{ComponentName}`
* `GridPaginator`

## その他のリソース

<!-- * [ページネーター](../paginator.md) -->
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})