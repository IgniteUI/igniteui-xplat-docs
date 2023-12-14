---
title: {Platform} {ComponentTitle} 列の並べ替えと移動 - {ProductName}
_description: カスタム列順序を設定し、マウスのドラッグ/ドロップまたはタッチジェスチャ、または {Platform} Column Moving API を使用して列の並べ替えを有効にします。{ProductName} を今すぐお試しください。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {ComponentTitle} の列の並べ替えと移動

{Platform} {ComponentTitle} の {ProductName} 列移動機能を使用すると、列をすばやく簡単に並べ替えることができます。これは、列移動 API を使用するか、マウスまたはタッチ ジェスチャを使用してヘッダーを別の位置にドラッグ アンド ドロップすることによって実行できます。{Platform} {ComponentTitle} では、ピン固定された列とピン固定されていない列、および[複数列ヘッダー](multi-column-headers.md)に対しても列の移動を有効にすることができます。

> [!Note]
> 列と列グループ間の順序変更は、それらが階層の同じレベルにあり、両方が同じグループにある場合にのみ許可されます。列/列グループが最上位の列である場合、列/列グループ間を移動できます。

> [!Note]
> 列ヘッダーがテンプレート化され、対応する列がグループ化可能である場合、テンプレート化された要素は **draggable** 属性を **false** に設定する必要があります。

<!-- Angular -->
これにより、要素によって発行されたすべてのイベントのハンドラーをアタッチできます。それ以外の場合、イベントは `igxDrag` ディレクティブによって消費されます。
<!-- end: Angular -->

> [!Note]
> ピン固定領域が最大幅 (`{ComponentName}` 幅合計の 80%) を超えた場合、ドロップ操作が禁止されていてピン固定ができないことをヒントの表示でエンドユーザーに通知します。つまり、ピン固定領域に列をドロップできません。

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

```razor
    public RenderFragment<IgbColumnTemplateContext> headerTemplate => (context) =>
    {
        return @<IgbIcon Collection="fas" IconName="fa-thumbtack" draggable="false" @onclick="() => onClick()"></IgbIcon>;
    };
```

```ts
public headerTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <igc-icon draggable="false" @click="${() => this.onClick()}"></igc-icon>
    `;
}
```

```tsx
function headerTemplate(ctx: IgrCellTemplateContext) {
    return (
    <>
       <IgrIcon draggable="false" onClick={onClick}></IgrIcon>
    </>
    );
}
```

## {Platform} {ComponentTitle} 列移動概要の例

`sample="/{ComponentSample}/column-moving-options", height="650", alt="{Platform} {ComponentTitle} 列移動概要の例"`



## 概要

**列移動**機能は各列レベルで有効にできます。つまり、`{ComponentName}` に移動可能な列または移動不可の列の両方を含むことができます。`{ComponentName}` の `Moving` 入力によって制御されます。

<!-- Angular -->
```html
<{ComponentSelector} [moving]="true"></{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Moving=true></{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} moving="true"></{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} moving="true"></{ComponentSelector}>
```
<!-- end: React -->

## API

ドラッグアンドドロップ機能に加えて、列の移動機能には、プログラムで列を移動/並べ替えできる API メソッドも用意されています。

`MoveColumn` - 列を別の列 (ターゲット) の前または後に移動します。最初のパラメーターは移動する列で、2 番目のパラメーターはターゲット列です。オプションの 3 番目のパラメーター `Position` (`DropPosition` 値を表す) でターゲット列の前または後に列を配置するかどうかを決定します。


```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        IgbColumn Col2 = await this.grid.GetColumnByVisibleIndexAsync(1);
        this.Grid.MoveColumn(Col1,Col2, DropPosition.AfterDropTarget);
    }
```


`Move` - 列を指定した表示インデックスに移動します。渡されたインデックス パラメーターが無効である場合 (負である/列数を超える場合)、または列がこのインデックスに移動できない場合 (別のグループ内にある場合)、操作は実行されません。

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        this.Col1.Move(3);
    }
```

列移動機能を使用する場合、操作が成功すると、`ColumnMovingEnd` イベントが発生することに注意してください。また、ドラッグアンドドロップ機能と比較して、列移動機能を使用するために `Moving` プロパティを true に設定する必要がないことにも注意してください。

## イベント

列のドラッグアンドドロップ操作を可能にする列移動に関連するイベントが複数あります。`ColumnMovingStart`、`ColumnMoving`、および `ColumnMovingEnd` です。

`{ComponentName}` の `ColumnMovingEnd` イベントを処理し、列が新しい位置にドロップされたときにカスタム ロジックを実装できます。たとえば、以下のスニペットでは、**Change On Year(%)** 列の後に **Category** のドロップをキャンセルできます。

<!-- Angular -->
```html
<{ComponentSelector} #dataGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" ></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="dataGrid" auto-generate="false" moving="true">
    <igc-column field="Category"></igc-column>
    <igc-column field="Change On Year(%)" data-type="Number" ></igc-column>
</{ComponentSelector}>
```
```typescript
constructor() {
    var dataGrid = this.dataGrid = document.getElementById('dataGrid') as IgcGridComponent;
    dataGrid.data = this.data;
    dataGrid.addEventListener("columnMovingEnd", this.onColumnMovingEnd);

}
```
```typescript
public onColumnMovingEnd(event) {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}
```
<!-- end: WebComponents -->

```tsx
function onColumnMovingEnd(grid: IgrGridBaseDirective, event: IgrColumnMovingEventArgs) {
   if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}

<{ComponentSelector} autoGenerate="false" moving="true" data={data} columnMovingEnd={onColumnMovingEnd}>
    <IgrColumn field="Category"></IgrColumn>
    <IgrColumn field="Change On Year(%)" dataType="Number" ></IgrColumn>
</{ComponentSelector}>
```
```razor
    <{ComponentSelector} ShowGroupArea="true" @ref='Grid' Width="100%" Height="100%"
             AllowFiltering=true
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate=true
             Data=northwindEmployees
             DisplayDensity="DisplayDensity.Compact"
             Moving="true"
             ColumnMovingEndScript='onColumnMovingEnd'>
    </{ComponentSelector}>
```

```razor
igRegisterScript("onColumnMovingEnd", (event) => {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}, false);
```

<!-- Angular -->

## スタイル設定

`{ComponentName}` 列移動ヘッダーのスタイル設定は、すべてのテーマ関数とコンポーネント mixins のある `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

最も簡単な方法は、[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張する新しいテーマを作成し、`$ghost-header-background`、`$ghost-header-text-color`、および `$ghost-header-icon-color` パラメーターを受け取る方法です。

```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: grid-theme(
    $ghost-header-text-color: #F4D45C,
    $ghost-header-background: #575757,
    $ghost-header-icon-color: #f4bb5c
);
```

最後のステップは、それぞれのテーマを持つコンポーネント mixin を**含める**ことです。

```scss
@include grid($dark-grid-column-moving-theme);
```

> [!Note]
> コンポーネントの [**View Encapsulation**](/components/themes/sass/component-themes.html#表示のカプセル化) ストラテジに基づいて、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include grid($dark-grid-column-moving-theme);
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。


**igx-palette** は渡された一次色と二次色に基づいてカラーパレットを生成します。
```scss
$yellow-color: #F4D45C;
$black-color: #575757;

$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```

そして [**igx-color**]({environment:sassApiUrl}/index.html#function-igx-color) を使えばパレットから簡単に色を取り出すことができます。

```scss
$dark-grid-column-moving-theme: grid-theme(
    $palette: $dark-palette,
    $ghost-header-text-color: color($dark-palette, "primary", 400),
    $ghost-header-background: color($dark-palette, "secondary", 200),
    $ghost-header-icon-color: color($dark-palette, "primary", 500)
);
```


> [!Note]
> Color および Palette は、カラーを生成および取得するための重要な機能です。使い方の詳細については[パレット](/components/themes/palettes.html)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[スキーマ](/components/themes/sass/schemas.html)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマのいずれかを拡張します。この場合は [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid) です。

```scss
// Extending the dark grid schema
$dark-grid-column-moving-schema: extend($_light-grid,
        (
            ghost-header-text-color:(
               color: ("primary", 400)
            ),
            ghost-header-background:(
               color: ("secondary", 200)
            ),
            ghost-header-icon-color:(
               color: ("primary", 500)
            )
        )
);
```

カスタム スキーマを適用するには、グローバル ([light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $dark-grid-column-moving-schema,
));

// Defining dark-grid-theme with the global dark schema
$dark-grid-column-moving-theme: grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/column-moving-styles", height="650", alt="{Platform} {ComponentTitle} 列移動スタイル設定の例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。

色を変更したい場合は、最初にグリッドのクラスを設定する必要があります:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

次に、関連する CSS プロパティをこのクラスに設定します:

```css
.grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```
### デモ

`sample="/{ComponentSample}/column-moving-styles", height="650", alt="{Platform} {ComponentTitle} Grid 移動のスタイル設定の例"`

<!-- end: WebComponents, Blazor, React -->

## API リファレンス

* `Column`
* `{ComponentName}`

## その他のリソース

<!-- ComponentStart:  Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [検索](search.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})