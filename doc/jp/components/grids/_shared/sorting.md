---
title: {Platform} {ComponentTitle} ソート - {ProductName}
_description: {ProductName} {ComponentTitle} の {Platform} ソート機能を使用して、ソート可能な列の組み合わせを構成し、データ レコードの表示順序を変更します。
_keywords: {Platform} sort, {Platform}, {ProductName}, Infragistics, {Platform} ソート, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} ソート

{Platform} `{ComponentName}` では、列レベルでのデータ ソートが可能です。つまり、`{ComponentName}` にソート可能な列とソート不可の列の両方を持つことができます。{Platform} でソートを実行すると、指定した条件に基づいてレコードの表示順序を変更できます。

<!-- Angular -->

> 注: これまで、グループ化 / ソートは互いに連携して機能していました。13.2 バージョンでは、gropuing を sorting から切り離す新しい動作が導入されています。たとえば、グループ化をクリアしても、グリッド内のソート式はクリアされません。その逆も同様です。それでも、列がソートおよびグループ化されている場合は、グループ化された式が優先されます。

<!-- end: Angular -->

## {Platform} {ComponentTitle} ソート概要の例

<!-- ComponentStart: HierarchicalGrid -->

以下のデモは、`{ComponentName}` の `ContextMenu` 出力を使用してカスタム コンテキスト メニューを追加しています。

<!-- ComponentEnd: HierarchicalGrid -->

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-sorting-options"
           github-src="{ComponentSample}/column-sorting-options">
</code-view>

以下のように `Sortable` 入力を使用します。`{ComponentName}` のソートで、`SortingIgnoreCase` プロパティを設定して大文字と小文字を区別するソートができます。

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

```razor
<IgbColumn Field="Title" Sortable="true"></IgbColumn>
```

```html
<igc-column field="ProductName" header="Product Name" data-type="String" sortable="true"></igc-column>
```

## ソート インジケーター

ソートされた列数が一定数以上ある場合、ソート順の指定がないと混乱する可能性があります。

`{ComponentName}` は、ソートされた各列のインデックスを示すことにより、この問題の解決策を提供します。

<!-- ComponentStart: Grid -->

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-sorting-indicators"
           github-src="{ComponentSample}/column-sorting-indicators" >
</code-view>

<!-- ComponentEnd: Grid -->

## API でのソート

`{ComponentName}` `Sort` メソッドを使用し、列または複数の列を `{ComponentName}` API でソートできます。

<!-- Angular -->
```typescript
import { SortingDirection } from 'igniteui-angular';
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
import { SortingDirection } from 'igniteui-webcomponents-grids';
```
<!-- end: WebComponents -->

```typescript
// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

```razor
@code {
    this.grid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            {
                FieldName = "CompanyName",
                Dir = SortingDirection.Asc
            },
            new IgbSortingExpression
            {
                FieldName = "Country",
                Dir = SortingDirection.Asc
            }
        });
}
```

> [!NOTE]
> Sorting は、`DefaultSortingStrategy` アルゴリズムを使用して実行されます。`Column` または `ISortingExpression` は、代替アルゴリズムとして `ISortingStrategy` のカスタム実装を使用できます。たとえば複雑なテンプレート列や画像列にユーザー定義のソートを定義する必要がある場合に便利です。

フィルター動作と同様に、ソート状態をクリアするには `ClearSort` メソッドを使用します。

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the {ComponentTitle}
this.grid.clearSort();
```

```razor
@code {
    @*Removes the sorting state from the Title column*@
    this.grid.ClearSortAsync("Title");

    @*Removes the sorting state from every column in the Grid*@
    this.grid.ClearSortAsync("");
}
```

> [!NOTE]
> `{ComponentName}` の `SortStrategy` は `Column` の `SortStrategy` と比較して異なるタイプです。異なるスコープで機能し、異なるパラメーターを公開するためです。

> [!NOTE]
> ソート操作で `{ComponentName}` の基になるデータ ソースは**変更しません**。

## 初期のソート状態

`{ComponentName}` でソート状態を初期設定するには、ソート式の配列を `{ComponentName}` の `SortingExpressions` プロパティに渡します。

<!-- Angular -->
```typescript
public ngOnInit() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: Angular -->

```razor
@code {
    protected override void OnAfterRender(bool first)
    {
        if (first)
        {
            this.grid.SortingExpressions = new IgbSortingExpression[]{
                new IgbSortingExpression()
                {
                    FieldName = "Title",
                    Dir = SortingDirection.Asc
                }};
        }
    }
}
```

<!-- WebComponents -->
```typescript
public connectedCallback() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: WebComponents -->

> [!NOTE]
> `string` 型の値が `DataType` `Date` の列で使用される場合、`{ComponentName}` が値を `Date` オブジェクトに解析しないため `{ComponentName}` `Sorting` が正しく動作しません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

<!-- ComponentStart: Grid -->
<!-- Angular -->
## リモート ソート

`{ComponentName}` はリモート仮想化をサポートします。詳細については、[{ComponentTitle} リモート データ操作](remote-data-operations.md)で説明されています。

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## ソート インジケーター テンプレート

列ヘッダーのソート インジケーター アイコンは、テンプレートを使用してカスタマイズできます。次のプロパティは、任意のソート状態 (昇順、降順、なし) のソート インジケーターをテンプレート化するために使用できます。

<!-- Angular -->

列ヘッダーのソート インジケーター アイコンは、テンプレートを使用してカスタマイズできます。次のディレクティブは、任意のソート状態 (昇順、降順、なし) のソート インジケーターをテンプレート化するために使用できます。

<!-- end: Angular -->

<!-- Angular -->
- `IgxSortHeaderIconDirective` – ソートが適用されない場合にソート アイコンを再テンプレート化します。

```html
<ng-template igxSortHeaderIcon>
    <igx-icon>unfold_more</igx-icon>
</ng-template>
```
<!-- end: Angular -->
- `SortHeaderIconTemplate` – ソートが適用されない場合にソート アイコンを再テンプレート化します。

```razor
<IgbGrid SortHeaderIconTemplate="SortDefaultTemplate">

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDefaultTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="unfold_more" Collection="material"></IgbIcon>;
    };
}
```

```ts
public sortHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon icon-name="unfold_more></igc-icon>`;
}
```

<!-- Angular -->

- `IgxSortAscendingHeaderIconDirective` – 列が昇順にソートされたときにソート アイコンを再テンプレート化します。

```html
<ng-template igxSortAscendingHeaderIcon>
    <igx-icon>expand_less</igx-icon>
</ng-template>
```

<!-- end: Angular -->

- `SortAscendingHeaderIconTemplate` – 列が昇順にソートされたときにソート アイコンを再テンプレート化します。

```razor
<IgbGrid SortAscendingHeaderIconTemplate="SortAscendingTemplate">

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortAscendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_less" Collection="material"></IgbIcon>;
    };
}
```

<!-- Angular -->

- `IgxSortAscendingHeaderIconDirective` – 列が降順でソートされたときにソート アイコンを再テンプレート化します。

```html
<ng-template igxSortDescendingHeaderIcon>
    <igx-icon>expand_more</igx-icon>
</ng-template>
```

<!-- end: Angular -->

- `SortDescendingHeaderIconTemplate` – 列が降順にソートされたときにソート アイコンを再テンプレート化します。


```razor
<IgbGrid SortDescendingHeaderIconTemplate="SortDescendingTemplate">

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDescendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_more" Collection="material"></IgbIcon>;
    };
}
```

```ts
public sortHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon icon-name="expand_more></igc-icon>`;
}
```

<!-- Angular -->

## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張する新しいテーマを作成し、`$sorted-header-icon-color`、および `sortable-header-icon-hover-color` パラメーターを受け取る方法です。

```scss
$custom-theme: grid-theme(
    $sorted-header-icon-color: #ffb06a,
    $sortable-header-icon-hover-color: black
);
```
最後にそれぞれのテーマを持つコンポーネント mixins を**含めます**。

```scss
 @include grid($custom-theme);
```

>[!NOTE]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

 ```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$black-color: black;
$orange-color: #ffb06a;

$custom-palette: palette($primary: $black-color, $secondary: $orange-color);
```

また [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-theme: grid-theme(
    $sorted-header-icon-color: color($custom-palette, "secondary", 500),
    $sortable-header-icon-hover-color: color($custom-palette, "primary", 500)
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマのいずれかを拡張します。この場合は [_light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid)です。

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        sorted-header-icon-color: (igx-color:('secondary', 500)),
        sortable-header-icon-hover-color: (igx-color:('primary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル [light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-sorting-style"
           github-src="{ComponentSample}/column-sorting-style" >
</code-view>

>[!NOTE]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## API リファレンス

* `SortingExpression`

## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)


コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
