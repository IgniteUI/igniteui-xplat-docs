---
title: {Platform} {ComponentTitle} セルの選択 - {ProductName}
_description: さまざまなイベント、豊富な API、またはマウス操作を使用してセル データ選択を簡単に実行できます。{ComponentTitle} はセル選択で 3 つのモードをサポートします。今すぐお試しください。
_keywords: data select, igniteui for {Platform}, infragistics, データ選択, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} セルの選択

{Platform} {ComponentTitle} の {ProductName} セル選択により、豊富なデータ選択機能が有効になり、グリッド コンポーネントで強力な API が提供されます。 {Platform} {ComponentTitle} は、次の 3 つの選択モードをサポートしています。

- {ComponentTitle} 複数セルの選択
- {ComponentTitle} 単一選択
- {ComponentTitle} 選択なし

<!-- ComponentStart: HierarchicalGrid -->
`{ComponentName}` では、グリッド レベルでセル選択モードを指定できます。たとえば、親グリッドではマルチセル選択を有効にできますが、子グリッドではセル選択モードを単一または無効にすることができます。
<!-- ComponentEnd: HierarchicalGrid -->

これらの各オプションについて詳しく説明します。

## {Platform} セル選択の例

以下のサンプルは、`{ComponentName}` の 3 種類の**セル選択**動作を示しています。以下のボタンを使用して、利用可能な各選択モードを有効にします。スナックバーのメッセージ ボックスを介して、各ボタンの操作に関する簡単な説明が提供されます。

`sample="/{ComponentSample}/cell-selection-mode", height="750", alt="{Platform} {ComponentTitle} セル選択の例"`



## 選択タイプ

### {ComponentTitle} 複数セルの選択

<!-- ComponentStart: HierarchicalGrid -->
これは、親グリッドと子グリッドの両方でのデフォルトのセル選択モードです。セルの選択は一度に 1 つのグリッドで行うことができますが、クロス グリッド範囲の選択を行うことか、複数のグリッドでセルを選択することはできないことに注意してください。範囲選択およびマウス ドラッグ機能に関連する各キーの組み合わせは、同じグリッドでのみ使用できます。
<!-- ComponentEnd: HierarchicalGrid -->

セルの選択方法:
- **マウス ドラッグ** - セルの長方形データ選択。
- <kbd>Ctrl</kbd> キー押下 + **マウス ドラッグ** - 複数の範囲が選択されます。その他の既存のセル選択は保持されます。
- <kbd>Shift</kbd> キーを使用して複数セルの選択をインスタンス化します。<kbd>Shift</kbd> キーを押しながら、単一セルを選択して別の単一セルを選択します。2 つのセル間のセル範囲が選択されます。<kbd>Shift</kbd> キーを押しながら他の 2 番目のセルを選択すると、最初に選択したセルの位置 (開始点) に基づいてセル選択範囲が更新されます。
- <kbd>Shift</kbd> キーを押しながら <kbd>矢印</kbd> キーを使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- <kbd>Ctrl</kbd> キーを押しながら <kbd>Ctrl</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> キーと <kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> を使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- <kbd>Ctrl</kbd> キーを押しながら**左マウス**キーでクリックすると、選択したセルコレクションに単一のセル範囲が追加されます。
- マウスでクリックしてドラッグすることで、連続した複数セルの選択が可能です。

<!-- ComponentStart: Grid, TreeGrid -->
#### デモ

<!-- TODO sample does not load any data in Blazor -->

`sample="/{ComponentSample}/multi-cell-selection-mode", height="700", alt="{Platform} {ComponentTitle} 複数セル選択の例"`



<!-- ComponentEnd: Grid, TreeGrid -->

### {ComponentTitle} 単一選択

`CellSelection` を **single** (単一) に設定すると、一度にグリッド内で選択されたセルを1つだけ持つことができます。また、**マウス ドラッグ** モードは機能せず、セルを選択する代わりに、デフォルトのテキスト選択が行われます。

> **選択モード**が **single** (単一) であるか **multiple** (複数) であるかに関係なく、単一セルが `Selected` イベントが発生したときに発生します。複数セル選択モードでは、セル範囲を選択すると `RangeSelected` イベントが発生します。

### {ComponentTitle} 選択なし

セルの選択を無効にする場合は、`CellSelection` を **none (なし)** に設定するだけです。このモードでは、セルをクリックするかキーボードでナビゲートしようとすると、セルは**選択されず**、**アクティブ化のスタイル**のみが適用され、ページ上の他の要素をスクロールまたはクリックすると失われます。選択を定義する唯一の方法は、以下で説明する API メソッドを使用することです。

## キーボード ナビゲーションのインタラクション

### Shift キーが押されている間

- <kbd>Shift</kbd> + <kbd>↑</kbd> - 現在の選択範囲に上のセルを追加します。
- <kbd>Shift</kbd> + <kbd>↓</kbd> - 現在の選択範囲に下のセルを追加します。
- <kbd>Shift</kbd> + <kbd>←</kbd> - 現在の選択に左のセルを追加します。
- <kbd>Shift</kbd> + <kbd>→</kbd> - 現在の選択範囲に右のセルを追加します。

### Ctrl + Shift キーが押されている間

- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> - 列内のフォーカスのあるセルの上にあるすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd> - 列内のフォーカスのあるセルの下にあるすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd> - 行の先頭まですべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd> - 行末まですべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> - フォーカスされているセルからグリッド内の最初のセルまでのすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> - フォーカスされているセルからグリッド内の最後のセルまでのすべてのセルを選択します。

> [!Note]
> 連続スクロールは、グリッド本体でのみ可能です。

## API の使用

以下は、範囲の選択、選択の解除、または選択したセル データを取得する方法です。


<!-- Angular, WebComponents, React -->

### 範囲の選択

`SelectRange` - API を使用してセル範囲を選択します。rowStart と rowEnd は行インデックスを使用する必要があり、columnStart と columnEnd は列インデックスまたは列データ フィールド値を使用することができます。

<!-- WebComponents -->
```ts
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid.selectRange(range);
```
<!-- end: WebComponents -->

```tsx
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
gridRef.current.selectRange(range);
```

<!-- end: Angular, WebComponents, React -->

### セル選択のクリア

`ClearCellSelection` は現在のセル選択をクリアします。

<!-- WebComponents -->
```ts
this.grid.clearCellSelection();
```
<!-- end: WebComponents -->

```tsx
gridRef.current.clearCellSelection();
```



```razor
@code {
    private async void ClearSelection()
    {
        await this.grid.ClearCellSelectionAsync();
    }
}
```

### 選択したデータの取得

<!-- Blazor -->
`GetSelectedData` は、選択されたデータの配列をディクショナリで返します。以下は例です。

```razor
<IgbGrid @ref=grid  CellSelection="GridSelectionMode.Multiple" AutoGenerate=true></IgbGrid>

@code {
    private IgbGrid grid;

    private async void GetSelectedData()
    {
        object[] data = await this.grid.GetSelectedDataAsync(true, true);
    }
}
```
<!-- end: Blazor -->

<!-- Angular, WebComponents, React -->
`GetSelectedData` は、選択したデータの配列を選択内容に応じた形式で返します。例:

- 3 つの異なる単一セルが選択されている場合:

```typescript
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

- 1 列から 3 つのセルが選択されている場合:

```typescript
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

- 1 行 3 列から 3 つのセルをマウスドラッグで選択した場合:

```typescript
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

- 2 行 3 列から 3 つのセルをマウスドラッグで選択した場合:

```typescript
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

- 2 つの異なる範囲が選択されている場合:

```typescript
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

- 2 つの重複範囲が選択されている場合、形式は次のようになります。

```typescript
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```

<!-- end: Angular, WebComponents, React -->

<!-- Angular -->
> [!Note]
> `SelectedCells` は、セルがグリッド ビュー ポートに表示されていない場合でも、正しい結果を返します。`GetSelectedData` も選択されたセル データを返します。
> `GetSelectedRanges` は、キーボードとポインタの両方の操作からグリッドで現在選択されている範囲を返します。タイプは **GridSelectionRange[]** です。
<!-- end: Angular -->

## 機能の統合

マルチセル選択はインデックス ベースです (DOM 要素選択)。

- `Sorting` - ソートが実行されると、選択は解除されません。昇順または降順でソートしている間、現在選択されているセルはそのままになります。昇順または降順でソートしている間、現在選択されているセルはそのままになります。
- `Paging` - ページング時に選択されたセルはクリアされます。選択はページを超えては持続されません。選択はページを超えては持続されません。
- `Filtering` - フィルタリングが実行されると、選択は解除されません。フィルタリングがクリアされている場合は、最初に選択されたセルが返されます。
- `Resizing` - 列のサイズを変更すると、選択したセルはクリアされません。
- `Hiding` - 選択したセルはクリアされません。列が非表示の場合は、次に表示されている列のセルが選択されます。
- `Pinning` - 選択したセルはクリアされません。非表示と同じです。
- `GroupBy` - 列をグループ化すると、選択したセルはクリアされません。

<!-- ComponentEnd: Grid, TreeGrid -->


<!-- WebComponents, Blazor, React -->

## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

<!-- ComponentStart: Grid -->

<!-- WebComponents -->
```ts
<igc-grid class="grid">
```
<!-- end: WebComponents -->

```tsx
<IgrGrid className="grid"></IgrGrid>
```

```razor
<IgbGrid Class="grid"></IgbGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-cell-selected-text-color: #FFFFFF;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062A3;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```ts
<igc-tree-grid class="treeGrid"></igc-tree-grid>
```

```razor
<IgbTreeGrid Class="treeGrid"></IgbTreeGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.treeGrid {
    --ig-grid-cell-selected-text-color: #fff;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062a3;
    --ig-grid-cell-editing-background: #0062a3;
}
```

<!-- ComponentEnd: TreeGrid -->

### デモ

`sample="/{ComponentSample}/cell-selection-style", height="620", alt="{Platform} {ComponentTitle} セル選択のスタイル設定の例"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->
## スタイリングのガイドライン

テーマ エンジンは、**選択したセルの範囲**をスタイルできるプロパティを公開します。

### テーマのインポート

選択のスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### カラーの定義

完了後、[igx-contrast-color]({environment:sassApiUrl}/index.html#function-igx-contrast-color) と [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用できます。これらの関数を使用して、選択範囲に使用する色を定義します。
```scss
    $text-color:contrast-color($default-palette, 'primary', 900);
    $background-color: color($default-palette, "primary", 900);
    $border-yellow: #f2c43c;
```

### カスタム テーマの作成

次に、`text-color`、`background-color`、`border-yellow` 変数をそれぞれ `$cell-selected-text-color`、`$cell-selected-background`、`$cell-active-border-color` として渡して、[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張する新しいテーマを作成します。

```scss
$custom-grid-theme: grid-theme(
    $cell-selected-text-color: $text-color,
    $cell-active-border-color: $border-yellow,
    $cell-selected-background: $background-color
);
```

### テーマの適用

次にコンポーネントのスタイルに mixin を含め (アプリ スタイルにすることも可能)、@@igSelector がデフォルトのテーマの代わりに新しく作成されたテーマを使用するようになります。

```scss
    @include grid($custom-grid-theme);
```

 > [!Note]
 >コンポーネントが [Emulated ViewEncapsulation](../themes/styles.md#表示のカプセル化) を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 > アプリケーション内に存在する可能性のある他のグリッドに影響を与えないように、スタイルを `:host` セレクターの下で範囲指定します。

 ```scss
    :host {
        ::ng-deep {
            @include grid($custom-grid-theme);
        }
    }
```


カスタム テーマを適用すると、選択したグリッドセルが選択した色で強調表示されます。

### デモ
`sample="/{ComponentSample}/multi-cell-selection-style", height="620", alt="{Platform} {ComponentTitle} 複数セル選択の例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end:Angular -->

## API リファレンス

* `{ComponentName}`
* `Cell`
<!-- ComponentStart: Grid, HierarchicalGrid -->
* `GridRow`
<!-- ComponentEnd: Grid, HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
* `TreeGridRow`
<!-- ComponentEnd: TreeGrid -->

## その他のリソース

<!-- ComponentStart:  Grid -->
* [選択](selection.md)
* [行選択](row-selection.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [仮想化とパフォーマンス](virtualization.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
