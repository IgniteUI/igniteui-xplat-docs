---
title: {Platform} {ComponentTitle} 編集 - {ProductName}
_description: 強力なパブリック API を使用し、レコードの作成、更新、削除などのデータ操作を簡単に実行できます。{Platform} {ComponentTitle} 編集オプションをお試しください。
_keywords: data manipulation, {Platform}, {ProductName}, Infragistics, データの変更, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 編集

{Platform} {ComponentTitle} の {ProductName} セル編集機能を使用すると、レコードの作成、更新、削除などのデータ操作を簡単に実行できます。`{ComponentName}` は、これらの操作をカスタマイズできる強力なパブリック API を提供します。データ操作のフェーズは次のとおりです。
- [セル編集](cell-editing.md)
- [行編集](row-editing.md)
- 一括編集 (追加予定)

<!-- Angular -->

さらに、**セル編集**は、[CellEditor ディレクティブ](cell-editing.md#セル編集テンプレート)または [Row ディレクティブ](row-editing.md#行編集オーバーレイのカスタマイズ)を介して簡単にカスタマイズできる、列のデータ型に基づくいくつかのデフォルト エディターを公開します。

<!-- end: Angular -->

## 設定

有効にする編集モードを指定するために、`{ComponentName}` は `Editable` および `RowEditable` ブール値プロパティを公開します。

以下のオプションは、プロパティ `Editable` で指定できます。

- **false** - 対応する列の編集が無効になります 。これがデフォルト値です。
- **true** - 対応する列の編集が有効になります。

>列が編集できない場合でも、`{ComponentName}` によって公開されるパブリック API を介して値を変更できます。

以下のオプションは、プロパティ `RowEditable` で指定できます。

- **false** - 対応するグリッドの行編集は無効になります。これがデフォルト値です。
- **true** - 対応するグリッドで行編集が有効になります。

`{ComponentName}` で `RowEditable` プロパティを true に設定し、`Editable` プロパティがどの列にも明示的に定義されていない場合、編集は*主キー*以外のすべての列で有効になります。

<!--
グリッドの[一括編集](batch-editing.md)は、[セル編集](cell-editing.md)モードと[行編集](row-editing.md)モードの両方で有効にできます。一括編集を設定するには、グリッドに **TransactionService** を提供する必要があります。
-->

- **セルおよび一括編集** - このシナリオでは、各セルの変更は個別に保持され、元に戻す/やり直し操作はセル レベルで使用できます。
- **行および一括編集** - このシナリオでは、変更は行レベルで保持されるため、元に戻す/やり直し操作は変更された各セルではなく、各行のセル全体に対して動作します。

### テンプレートの編集

 データ型固有の**編集テンプレート**を使用する場合、列 `DataType` プロパティを指定する必要があります。次に各型のデフォルト テンプレートについて説明します。

 - `string` データ型の場合、デフォルトのテンプレートは `Input` を使用します。
 - `number` データ型のデフォルト テンプレートは `Input` type="number" を使用します。数値に解析できない値にセルを更新した場合、変更は無視されてセルの値が 0 に設定されます。
 - `date` データ型ではデフォルトのテンプレートは `DatePicker` を使用します。
 - `dateTime` データ型ではデフォルトのテンプレートは `DateTimeEditor` を使用します。このエディターは、DateTime オブジェクトの入力要素部分のマスクを提供します。
 - `time` データ型ではデフォルトのテンプレートは `TimePicker` を使用します。
 - `boolean` データ型ではデフォルトのテンプレートは `Checkbox` を使用します。
 - `currency` データ型の場合、デフォルトのテンプレートは、アプリケーションまたはグリッドのロケール設定に基づいたプレフィックス/サフィックス構成の `InputGroup` を使用します。
 - `percent` パーセントデータ型の場合、デフォルトのテンプレートは、編集された値のプレビューをパーセントで表示するサフィックス要素を持つ `InputGroup` を使用します。
 <!-- ComponentStart:  Grid -->
 - カスタム テンプレートについては、[セル編集トピック](cell-editing.md#セル編集テンプレート)を参照してください。
 <!-- ComponentEnd:  Grid -->

<!-- ComponentStart:  Grid, HierarchicalGrid -->
すべての利用可能な列データ型は、公式の[列タイプトピック](column-types.md#デフォルトのテンプレート)にあります。
<!-- ComponentEnd:  Grid, HierarchicalGrid -->

### イベントの引数とシーケンス
<!-- ComponentStart:  Grid, HierarchicalGrid -->
グリッドは、編集エクスペリエンスをより詳細に制御できる広範なイベントを公開します。これらのイベントは、[**行の編集**](row-editing.md)および[**セルの編集**](cell-editing.md)のライフサイクル - 編集の開始、コミット、またはキャンセル時に発生します。
<!-- ComponentEnd:  Grid, HierarchicalGrid -->

 | イベント           | 説明                                                                                                                                               | 引数                  | キャンセル可能 |
 | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
 | `RowEditEnter`  |  `RowEditing` が有効な場合、行が編集モードに入るときに発生します。                                                                                             | `GridEditEventArgs`     | **true**    |
 | `CellEditEnter` |セルが**編集モードに入る**ときに発生します。 (`RowEditEnter` の後)                                                                                             | `GridEditEventArgs`     | **true**    |
 | `CellEdit`      | 値が変更された場合、セルの値が**コミットされた前に**発生します。 (`Enter` の押下など)                                                     | `GridEditEventArgs`     | **true**    |
 | `CellEditDone`  | 値が変更された場合、セルが編集され、セルの値が**コミットされた後に**発生します。                                                             | `GridEditDoneEventArgs` | **false**   |
 | `CellEditExit`  | セルが**編集モードを終了した**ときに発生します。|                                                                            `GridEditDoneEventArgs` | **false**   |
 | `RowEdit`       | が有効な場合、編集モードの値の行が**コミットされた前に**発生します (行編集オーバーレイの [完了] ボタンをクリックなど)。 | `GridEditEventArgs`     | **true**    |
 | `RowEditDone`   | が有効な場合、行が編集され、新しい行の値が**コミットされた後に**発生します。                                             | `GridEditDoneEventArgs` | **false**   |
 | `RowEditExit`   | が有効な場合、行が**編集モードを終了した**ときに発生します。                                                                                          | `GridEditDoneEventArgs` | **false**   |

### イベントのキャンセル

 - `RowEditEnter` - `Row` も `Cell` も編集モードに入りません。
 - `CellEditEnter` - セル編集に入ることを防止します。`RowEditable` が有効な場合、セルの編集は禁止されたままですが、行の編集がトリガーされます。
 - `CellEdit` - `Cell`/`Row` の編集を許可し、**[完了]** ボタンまたは **[Enter]** を押しても値または行のトランザクションはコミットされません。**[キャンセル]** ボタンをクリックするまで、セル編集と行編集は閉じません。
 - `RowEdit` - 行全体ではなくセルのコミットは可能です。行は編集モードのままになり、行トランザクションは開いていると見なされます。**[完了]** を押しても、行をコミットまたは閉じません。**[キャンセル]** ボタンは、変更をコミットせずに編集プロセスとトランザクションを閉じます。

以下のサンプルは、実行中の編集実行シーケンスを示しています。

`sample="/{ComponentSample}/editing-lifecycle", height="620", alt="{Platform} {ComponentTitle} 編集のライフサイクル"`


### 機能の統合
セル/行が編集モードの場合、ユーザーはさまざまな方法でグリッドを操作できます。以下のテーブルは、特定の操作が現在の編集にどのように影響するかを示しています。

| {ComponentTitle} | フィルタリング  | ソート | ページング | 移動 | ピン固定 | 非表示 | グループ化 | サイズ変更 | Escape | Enter | F2 | Tab | セル クリック | 新しい行の追加/削除/編集 |
| ---------------- | :-------: | :-----: | :----: | :----: | :-----: | :----: | :-----: | :------: | :----: | :---: | :---: | :---: | :--------: | :---------------------: |
| 編集モードを保持   |           |         |        |        |         |        |         |    ✔     |        |       |       |       |            |                         |
| 編集モードを終了   |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| コミット           |           |         |        |        |         |        |         |          |        |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| 破棄          |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |       |       |       |            |                         |

テーブルからわかるように、列のサイズ変更を除くすべての操作は編集を終了し、新しい値を破棄します。新しい値がコミットされる場合、対応する機能の 「-ing」 イベントで開発者が実行できます。

たとえば、ユーザーがセル/行が編集モードのときに列をソートしようとする場合に、新しい値をコミットする方法を示します:

<!-- ComponentStart: Grid, TreeGrid -->
<!-- Angular -->

```html
<igx-grid #grid [data]="localData" [primaryKey]="'ProductID'" (sorting)="onSorting($event)">
</igx-grid>
```

<!-- end: Angular -->

```html
<{ComponentSelector} id="grid" primary-key="ProductID" >
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = document.getElementById('grid') as {ComponentName}Component;
    grid.data = this.data;
    grid.addEventListener("sorting", this.onSorting);

}
```

<!-- Angular -->

```typescript
public onSorting(event: ISortingEventArgs) {
    this.grid.endEdit(true);
}
```

<!-- end: Angular -->

<!-- WebComponents -->

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.addEventListener("sorting", this.onSorting);
}

public onSorting(event: IgcSortingEventArgs) {
    var grid = document.getElementById('grid') as {ComponentName}Component;
    grid.endEdit(true);
}
```
<!-- end: WebComponents -->

```razor
<{ComponentSelector}
    Id="grid"
    SortingScript="SortingHandler"
    RowEditable="true">
</{ComponentSelector}>

//In JavaScript
function SortingHandler() {
    grid.endEdit(true);
}
igRegisterScript("SortingHandler", SortingHandler, false);
```

```tsx
function onSorting(grid: IgrGridBaseDirective, event: IgrSortingEventArgs) {
    grid.endEdit(true);
}

<IgrGrid data={localData} primaryKey="ProductID" sorting={onSorting}>
</IgrGrid>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular -->
```html
<igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'ProductID'" (sorting)="onSorting($event)">
</igx-hierarchical-grid>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="hierarchicalGrid" primary-key="ProductID" >
</{ComponentSelector}>
```

```ts
constructor() {
    var hierarchicalGrid = document.getElementById('hierarchicalGrid') as {ComponentName}Component;
    hierarchicalGrid.data = this.data;
    hierarchicalGrid.addEventListener("sorting", this.onSorting);
}

public onSorting(event: IgcSortingEventArgs) {
    var hierarchicalGrid = document.getElementById('hierarchicalGrid') as {ComponentName}Component;
    hierarchicalGrid.endEdit(true);
}
```
<!-- end: WebComponents -->

<!-- Angular -->
```typescript
public onSorting(event: ISortingEventArgs) {
    this.hierarchicalGrid.endEdit(true);
}
```
<!-- end: Angular -->

```razor
<{ComponentSelector}
    Id="hierarchicalGrid"
    SortingScript="SortingHandler"
    RowEditable="true">
</{ComponentSelector}>

//In JavaScript
function SortingHandler() {
    hierarchicalGrid.endEdit(true);
}
igRegisterScript("SortingHandler", SortingHandler, false);
```

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid data={localData} primaryKey="ProductID" sorting={onSorting}>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->
<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
public onSorting(grid: IgrGridBaseDirective, event: IgrSortingEventArgs) {
    hierarchicalGrid.endEdit(true);
}
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->
<!-- ComponentEnd: HierarchicalGrid -->

## API リファレンス

* `{ComponentName}`

<!-- Angular -->
* `DatePicker`
* `Checkbox`
* `Overlay`
<!-- end: Angular -->

## その他のリソース

<!-- Angular, WebComponents, React -->

* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<!-- ComponentStart: HierarchicalGrid -->
<!-- * [検索](search.md) -->
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular, WebComponents, React -->

<!-- Blazor -->

<!-- ComponentStart:  Grid -->
* [列のデータ型](column-types.md#デフォルトのテンプレート)
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

<!-- ComponentStart: HierarchicalGrid -->
<!-- * [Searching](search.md) -->
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Blazor -->
