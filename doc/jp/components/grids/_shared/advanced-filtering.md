---
title: {Platform} {ComponentTitle} 高度なフィルタリング - {ProductName} 
_description: {Platform} {ComponentTitle} でデータの高度なフィルターを設定する方法。グリッドの高度なフィルタリングがより使いやすくなりました。
_keywords: Advanced Filtering, {Platform}, {ProductName}, Infragistics, 高度なフィルタリング, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---


# {Platform} {ComponentTitle} 高度なフィルタリング

{Platform} {ComponentTitle} の {ProductName} 高度なフィルタリングを使用すると、`{ComponentName}` のすべての列にわたるフィルタリング条件を使用してさまざまなグループを作成できるダイアログが表示されるため、データを操作できます。

## {Platform} {ComponentTitle} 高度なフィルタリングの例

`sample="/{ComponentSample}/advanced-filtering-options", height="530", alt="{Platform} {ComponentTitle} 高度なフィルタリングの例"`

## インタラクション

高度なフィルタリングダイアログを開くには、グリッドツールバーの **[高度なフィルタリング]** ボタンをクリックする必要があります。高度なフィルターが適用されていない場合、**AND** または **OR** でリンクされたフィルター条件のグループの作成から開始する必要があります。その後、フィルタリング条件またはサブグループを追加できます。

フィルター条件を追加するには、`Filterable` 列のいずれか、`DataType` 列に基づくオペランド、およびオペランドが単項でない場合の値を選択する必要があります。条件が確定すると、条件情報を含むチップが表示されます。チップをホバーまたはクリックすると、チップを変更したり、その直後に別の条件やグループを追加したりできます。

複数のフィルター条件チップを選択すると、グループを作成したりフィルターを削除したりするためのオプションを含むコンテキストメニューが表示されます。選択した条件でグループを作成することを選択した場合、一番上に選択した条件が配置された場所に新しく作成されたグループが表示されます。

グループを選択するために、リンク条件 (**AND** または **OR**) に基づいて色付けされた垂直線をクリックすることもできます。単一のグループが選択されている場合、フィルタリング ロジックを変更、グループ解除、または削除するオプションを含むコンテキスト メニューが表示されます。

フィルタリング条件とグループを作成する準備後にデータをフィルタリングするには、**[適用]** ボタンをクリックします。拡張フィルターを変更後、変更を保存したくない場合は、**[キャンセル]** ボタンをクリックします。**[フィルターのクリア]** ボタンをクリックして、高度なフィルターをクリアすることもできます。

## 使用方法

高度なフィルタリングを有効にするには、`AllowAdvancedFiltering` 入力プロパティを **true** に設定します。

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</{ComponentSelector}>
```
<!-- end: Angular -->
```razor
<{ComponentSelector} Data=data AutoGenerate="true" AllowAdvancedFiltering="true">
    <IgbGridToolbar></IgbGridToolbar>
</{ComponentSelector}>
```

<!-- ComponentStart: TreeGrid -->
```razor
<IgbTreeGrid Data=data AutoGenerate="true" AllowAdvancedFiltering="true">
    <IgbGridToolbar></IgbGridToolbar>
</IgbTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="true" allow-advanced-filtering="true">
    <igc-grid-toolbar></igc-grid-toolbar>
</{ComponentSelector}>
```
```ts
constructor() {
    let grid = (document.getElementById("grid") as IgcGridComponent);
    grid.data = this.data
}
```

<!-- ComponentStart: TreeGrid -->
```html
<igc-tree-grid id="grid" auto-generate="true" allow-advanced-filtering="true">
    <igc-grid-toolbar></igc-grid-toolbar>
</igc-tree-grid>
```


```ts
constructor() {
    let grid = document.getElementById("grid") as IgcTreeGridComponent;
    grid.data = this.data
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- end: WebComponents -->
<!-- React -->
```html
<{ComponentSelector} data={this.nwindData} autoGenerate="false" ref={this.gridRef} allowAdvancedFiltering="true">
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarAdvancedFilering></IgrGridToolbarAdvancedFilering>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</{ComponentSelector}>
```
<!-- end: React -->

<!-- React -->
```tsx
<{ComponentSelector} data={nwindData} autoGenerate="false" ref={gridRef} allowAdvancedFiltering="true">
    <IgrGridToolbar></IgrGridToolbar>
</{ComponentSelector}>
```
<!-- end: React -->

高度なフィルタリングは、`AdvancedFilteringExpressionsTree` 入力プロパティに保存される `FilteringExpressionsTree` を生成します。`AdvancedFilteringExpressionsTree` プロパティを使用して、高度なフィルタリングの初期状態を設定できます。

<!-- Angular -->

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);

    this.@@igObjectRef.advancedFilteringExpressionsTree = tree;
}
```

<!-- end: Angular -->

<!-- WebComponents -->
```typescript
connectedCallback(): void {
    const tree = new IgcFilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('contains'),
        searchVal: 'cha',
        ignoreCase: true
    });
    const subTree = new IgcFilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'Chan',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    grid.advancedFilteringExpressionsTree = tree;
}
```
<!-- end: WebComponents -->

<!-- React -->
<!--```typescript
This code snippet cannot currently be achieved in React
componentDidMount() {
    const tree = new IgrFilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: new IgrStringFilteringOperand.condition('contains'),
        searchVal: 'cha',
        ignoreCase: true
    });
    const subTree = new IgrFilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: new IgrStringFilteringOperand.condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: new IgrStringFilteringOperand.condition('startsWith'),
        searchVal: 'Chan',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    gridRef.current.advancedFilteringExpressionsTree = tree;
}
```-->
<!-- end: React -->

`{ComponentName}` ツールバーを表示したくない場合は、`OpenAdvancedFilteringDialog` および `CloseAdvancedFilteringDialog` メソッドを使用して、高度なフィルタリング ダイアログをコーディングを使用して開いたり閉じたりできます。

> [!Note]
>`{ComponentName}` で **QuickFilter**/**ExcelStyleFilter** と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。`{ComponentName}` の最終的なフィルター結果は、2 つのフィルター結果の共通部分です。

<!-- Angular -->
## 外部の高度なフィルタリング

上記デモで示されるように、高度なフィルタリング ダイアログは、`{ComponentName}` の上にあるオーバーレイでホストされます。ダイアログのセットアップの準備ができたときに、適用または閉じる操作によってダイアログが非表示になります。ダイアログはスタンドアロン コンポーネントとして使用した場合、常に表示になります。以下のデモでは、高度なフィルタリングダイアログが `{ComponentName}` とは別に宣言されます。

### デモ

`sample="/{ComponentSample}/external-advanced-filtering", height="750", alt="{Platform} {ComponentTitle} 外部の高度なフィルタリング"`


### 使用方法

`{ComponentName}` の外部で動作するように高度なフィルタリングを構成する方法は簡単です。ダイアログを作成して、その **grid** プロパティを設定するだけです。

```html
<igx-advanced-filtering-dialog [grid]="grid1">
</igx-advanced-filtering-dialog>
```

```razor
<IgbAdvancedFilteringDialog Grid=grid1>
</IgbAdvancedFilteringDialog>
```

```html
<igc-advanced-filtering-dialog grid="grid1">
</igc-advanced-filtering-dialog>
```

<!-- end: Angular -->
<!-- Angular -->

## スタイル設定

高度なフィルタリング ダイアログのスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する **index** ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Excel スタイルのフィルタリング ダイアログは、**filtering-row-background** パラメーターを使用して、グリッドのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);
```

ボタン、チップ、ドロップダウン、入力など、高度なフィルタリング ダイアログ内に他のコンポーネントがあるため、それぞれに個別のテーマを作成する必要があります。

```scss
$custom-button: button-theme(
    $disabled-color: gray,

);

$custom-button-group: button-group-theme(
    $item-background:  #292826,

);

$custom-input-group: input-group-theme(
    $box-background: #4a4a4a,

);

$custom-chip: chip-theme(
    $background: #FFCD0F,

);

$custom-drop-down: drop-down-theme(
    $background-color: #292826,

);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[button-theme]({environment:sassApiUrl}/index.html#function-button-theme)、[button-group-theme]({environment:sassApiUrl}/index.html#function-button-group-theme)、[chip-theme]({environment:sassApiUrl}/index.html#function-chip-theme)、[drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後のステップは、それぞれのテーマを持つコンポーネント mixin を**含める**ことです。また、高度なフィルタリング ダイアログ内の他の要素のスタイルを追加します。

```scss
@include grid($custom-grid);
igx-advanced-filtering-dialog {
    @include button($custom-button);
    @include button-group($custom-button-group);
    @include input-group($custom-input-group);
    @include chip($custom-chip);
    @include drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-advanced-filter__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

> [!Note]
>カスタム テーマが高度なフィルタリング ダイアログにネストされたコンポーネントのみに影響するように、コンポーネントのほとんどの mixins を `igx-advanced-filtering-dialog` 内にスコープします。そうでない場合、アプリケーション内の他のボタン、チップ、入力、ドロップダウンも影響を受けます。

> [!Note]
>コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include grid($custom-grid);
        igx-advanced-filtering-dialog {
            @include button($custom-button);
            @include button-group($custom-button-group);
            @include input-group($custom-input-group);
            @include chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-advanced-filter__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```
また [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-grid: grid-theme(
    $filtering-row-background: color($dark-palette, "secondary", 400)
);

$custom-button: button-theme(
    $disabled-color: color($dark-palette, "secondary", 100),

);

$custom-button-group: button-group-theme(
    $item-background: color($dark-palette, "secondary", 400),

);

$custom-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 200),

);

$custom-chip: chip-theme(
    $background: color($dark-palette, "primary", 400),

);

$custom-drop-down: drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),

);
```

> [!Note]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネント (この場合は [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid)、[light-button]({environment:sassApiUrl}/index.html#variable-_light-button)、[light-button-group]({environment:sassApiUrl}/index.html#variable-_light-button-group)、[light-chip]({environment:sassApiUrl}/index.html#variable-_light-chip)、[light-input-group]({environment:sassApiUrl}/index.html#variable-_light-input-group) および [light-drop-down]({environment:sassApiUrl}/index.html#variable-_light-drop-down)) に提供されている 2 つの定義済みスキーマのいずれかを拡張します。

```scss
$grid-dark-palette: palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
           color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
           color: ("secondary", 100)
        ),

    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
           color: ("secondary", 400)
        ),

    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 200)
        ),

    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
           color: ("primary", 400)
        ),

    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),

    )
);
```

カスタム スキーマを適用するには、グローバル ([light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-grid: grid-theme(
    $palette: $grid-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/advanced-filtering-style", height="530", alt="{Platform} {ComponentTitle} 高度なフィルタリング スタイル"`


> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```


<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid class="grid"></igc-tree-grid>
```

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-background-or: #d83434;
}
```
### デモ

`sample="/{ComponentSample}/advanced-filtering-style", height="530", alt="{Platform} {ComponentTitle} 高度なフィルタリング スタイル"`

<!-- end: WebComponents, Blazor, React -->

## API リファレンス

* `Column`
* `{ComponentName}`

## その他のリソース

<!-- ComponentStart:  Grid -->
* [フィルタリング](filtering.md)
* [Excel スタイル フィルタリング](excel-style-filtering.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
