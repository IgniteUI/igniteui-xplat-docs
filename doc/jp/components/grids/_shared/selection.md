---
title: {Platform} {ComponentTitle} 選択 - {ProductName}
_description: {ProductName} グリッドでデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 選択の概要

{ProductName} `{ComponentName}` グリッドでデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。

## {Platform} {ComponentTitle} 選択の例

以下のサンプルは、`{ComponentName}` の 3 種類の**セル選択**動作を示しています。以下のボタンを使用して、利用可能な各選択モードを有効にします。スナックバーのメッセージ ボックスを介して、各ボタンの操作に関する簡単な説明が提供されます。

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-cell-selection-mode"
           alt="{Platform} {ComponentTitle}  選択の例">
</code-view>

## {Platform} {ComponentTitle} 選択のオプション

{ProductName} `{ComponentName}` コンポーネントは、[行選択](row-selection.md)、[セル選択](cell-selection.md)、[列選択](column-selection.md)の 3 つの選択モードを提供します。デフォルトでは、`{ComponentName}` で**複数セル選択**モードのみが有効になっています。選択モードの変更または有効化は、`RowSelection`、`CellSelection` または `Selectable` プロパティを使用します。

### {Platform} {ComponentTitle} 行選択

プロパティ `RowSelection` を使用すると、次のオプションを指定できます。

- `None` - `{ComponentName}` の行選択が無効になります。
- `Single` - `{ComponentName}` 内の 1 行のみの選択が利用可能になります。
- `Multiple` - 複数行の選択は、<kbd>Ctrl</kbd> + <kbd>クリック</kbd>、<kbd>Space キー</kbd>を押して行セレクターを使用することにより、複数行の選択が可能になります。

<!-- ComponentStart: TreeGrid -->

- `MultipleCascade` -  これはカスケード選択のモードであり、ユーザーがユーザーの操作で選択したレコードの下のツリー内のすべての子が選択されます。このモードでは、親の選択状態はその子の選択状態に完全に依存します。

<!-- ComponentEnd: TreeGrid -->

> 詳細については、[行選択トピック](row-selection.md)を参照してください。

### {Platform} {ComponentTitle} セル選択

以下のオプションは、プロパティ `CellSelection` で指定できます。

- `None` - `{ComponentName}` のセル選択が無効になります。
- `Single` - `{ComponentName}` 内の 1 セルのみの選択が利用可能になります。
- `Multiple` - `{ComponentName}` の選択のデフォルト状態です。複数セルの選択は、マウスの左ボタンを連続してクリックした後、マウスをセル上にドラッグすることで利用できます。

> 詳細については、[セル選択トピック](cell-selection.md)を参照してください。

### {Platform} {ComponentTitle} 列選択

`Selectable` プロパティを使用して、`Column` ごとに以下のオプションを指定できます。このプロパティが true または false に設定されている場合、対応する列の選択がそれぞれ有効または無効になります。

以下の 3 つのバリエーションがあります。

- `Single selection` (単一選択) - 列セルを<kbd>マウス クリック</kbd>します。
- `Multi column selection` (複数列の選択) - <kbd>Ctrl</kbd> キーを押しながら列セルを<kbd>マウス クリック</kbd>します。
- `Range column selection` (列の範囲選択) - <kbd>Shift</kbd> キーを押しながら + <kbd>マウス クリック</kbd>、その間のすべての列が選択されます。

> 詳細については、[列選択トピック](column-selection.md)を参照してください。

<!-- ComponentStart: Grid -->
<!-- Angular -->

## {Platform} {ComponentTitle} コンテキスト メニュー

`ContextMenu` イベントは、カスタム コンテキスト メニューを追加して、`{ComponentName}` での作業をアシストします。グリッドの本体を**右クリック**すると、イベントはトリガーされたセルを放出します。**コンテキスト メニュー**は、放出されたセルで動作します。

**複数セルの選択**がある場合、選択したセルが複数セルの選択領域にあるかどうかをチェックするロジックを配置します。その場合、選択したセルの値も出力します。

基本的に、メイン関数は次のようになります。

```typescript
public rightClick(eventArgs: any) {
     // Prevent the default behavior of the right click
    eventArgs.event.preventDefault();
    this.multiCellArgs = {};
    // If we have multi-cell selection, check if selected cell is within the ranges
    if (this.multiCellSelection) {
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid1.getSelectedRanges().some(range => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        })
        // If the cell is within a multi-cell selection range, bind all the selected cells data
        if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
        }
    }
    // Set the position of the context menu
    this.contextmenuX = eventArgs.event.clientX;
    this.contextmenuY = eventArgs.event.clientY;
    this.clickedCell = eventArgs.cell;
    // Enable the context menu
    this.contextmenu = true;
}
```

```razor
TO DO
```

以下はコンテキストメニューの機能です。

- 選択したセルの値のコピー。
- 選択したセルの *dataRow* のコピー。
- 選択したセルが**複数セルの選択範囲**内にある場合、選択したすべてのデータをコピーします。

```typescript
//contextmenu.component.ts

public copySelectedCellData(event) {
    const selectedData = { [this.cell.column.field]: this.cell.value };
    this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
    this.onCellValueCopy.emit({ data: selectedData });
}

public copyRowData(event) {
    const selectedData = this.cell.row.data ;
    this.copyData(JSON.stringify(this.cell.row.data));
    this.onCellValueCopy.emit({ data: selectedData });
}

public copySelectedCells(event) {
    const selectedData = this.selectedCells.data;
    this.copyData(JSON.stringify(selectedData));
    this.onCellValueCopy.emit({ data: selectedData });
}
```

```razor
TO DO
```

`{ComponentName}` はコピーされたデータを取得し、コンテナ要素に貼り付けます。

グリッドとコンテキスト メニューを組み合わせるために使用するテンプレート:
```html
<div class="wrapper">
    <div class="grid__wrapper" (window:click)="disableContextMenu()">
        <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
            (contextMenu)="rightClick($event)" (rangeSelected)="getCells($event)"
            (selected)="cellSelection($event)">
        <!-- Columns area -->
        </igx-grid>
        <div *ngIf="contextmenu==true">
            <contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell" [selectedCells]="multiCellArgs" (onCellValueCopy)="copy($event)">
            </contextmenu>
        </div>
    </div>
    <div class="selected-data-area">
        <div>
           <pre>{{copiedData}}</pre>
        </div>
    </div>
</div>
```

```razor
TO DO
```

 複数のセルを選択し、`マウスの右`ボタンを押します。コンテキストメニューが表示され、`セル データのコピー`を選択すると、選択したデータが右側の空のボックスに表示されます。

 結果:

<!-- NOTE this sample is differed -->

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-custom-context-menu" >
</code-view>

<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## 既知の問題と制限

<!-- Angular -->

- IE11 で選択を有効にした `{ComponentName}` コンポーネントを使用するには、{Platform} の polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。IE11 は、バージョン 13.0.0 でサポートされなくなりました。

```typescript
import 'core-js/es7/array';
```

グリッドに `PrimaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合）、データ要求が完了すると、行は次の状態を失います:

- 行の選択
- 行の展開/縮小
- 行の編集
- 行のピン固定

<!-- end: Angular -->

## API リファレンス

* `{ComponentName}`

<!-- ComponentStart: Grid, HierarchicalGrid, PivotGrid -->

* `GridRow`

<!-- ComponentEnd: Grid, HierarchicalGrid, PivotGrid -->

<!-- ComponentStart: TreeGrid -->

* `TreeGridRow`

<!-- ComponentEnd: TreeGrid -->

* `GridCell`

## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [行の選択](row-selection.md)
* [セルの選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [仮想化とパフォーマンス](virtualization.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})
