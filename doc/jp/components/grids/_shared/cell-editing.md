---
title: {Platform} {ComponentTitle} でのセル編集 - インフラジスティックス
_description: {ComponentTitle} はセル内編集を使用しています。デフォルトのセル編集テンプレートがありますが、データ更新操作のカスタム テンプレートを定義することもできます。今すぐお試しください。
_keywords: data manipulation, excel editing, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, データの変更, excel 編集, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} セル編集

{ProductName} `{ComponentName}` コンポーネントは、{Platform} CRUD 操作のための優れたデータ操作機能と強力な API を提供します。デフォルトで `{ComponentName}` は**セル内編集**を使用し、**デフォルトのセル編集テンプレート**によって、列のデータ型に基づいてさまざまなエディターが表示されます。

さらに、データ更新アクション用の独自のカスタム テンプレートを定義したり、変更をコミット/破棄したりするためのデフォルトの動作をオーバーライドすることもできます。

## {Platform} {ComponentTitle} セル編集と編集テンプレートの例

`sample="/{ComponentSample}/editing-columns", height="700", alt="{Platform} {ComponentTitle} セル編集と編集テンプレートの例"`

<!-- Angular -->

> [!Note]
>任意のタイプのエディター コンポーネントで `CellEditor` を使用すると、キーボード ナビゲーション フローが中断されます。同じことが、編集モードに入るカスタム セルの直接編集にも当てはまります。これは、追加したエディター コンポーネントではなく、**セル要素**に**フォーカス**が残るためです。これが、`Focus` ディレクティブを利用する必要がある理由です。これにより、フォーカスがセル内コンポーネントに直接移動し、セル/行の**流暢な編集フロー**が維持されます。

<!-- end:Angular -->

## セルの編集

### UI を介した編集

編集可能なセルがフォーカスされたときに以下のいずれかの方法で特定のセルを編集モードにすることができます。
 - ダブル クリック
 - シングル クリック - 以前選択したセルが編集モードで現在選択したセルが編集可能な場合のみ、シングル クリックで編集モードに入ります。以前選択したセルが編集モードではない場合、編集モードに入らずにシングル クリックでセルを選択します。
 - <kbd>Enter</kbd> キーの押下
 - <kbd>F2</kbd> キーの押下

**変更をコミットしない場合**も以下の方法で編集モードを終了できます。
 - <kbd>Escape</kbd> キーの押下;
 - **ソート、フィルターリング、検索、非表示**操作の実行時。

変更を**コミット**しない場合も以下の方法で編集モードを終了できます。
 - <kbd>Enter</kbd> キーの押下
 - <kbd>F2</kbd> キーの押下
 - <kbd>Tab</kbd> キーの押下
 - 他のセルをシングル クリック - `{ComponentName}` で他のセルをクリックしたときに変更がサブミットされます。
 - その他の操作 (ページング、サイズ変更、ピン固定、移動など) は、編集モードを終了して変更を送信します。

> [!Note]
> セルは、垂直/水平方向へのスクロールや `{ComponentName}` 以外をクリックした場合も編集モードのままです。セル編集と行編集両方で有効です。

### API を介した編集

プライマリキーが定義されている場合のみ `{ComponentName}` API でもセル値を変更することができます。

<!-- ComponentStart: Grid -->
```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```

```razor
this.grid.UpdateCell(newValue, rowID, 'ReorderLevel')
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```

```razor
this.treeGrid.UpdateCell(newValue, rowID, 'ReorderLevel')
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```

```razor
this.hierarchicalGrid.UpdateCell(newValue, rowID, 'ReorderLevel')
```
<!-- ComponentEnd: HierarchicalGrid -->

セルを更新するその他の方法として `GridCell` の `Update` メソッドで直接更新する方法があります。

<!-- ComponentStart: Grid -->
```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```

```razor
private UpdateCell() {
    IgbCell cell = this.grid1.GetCellByColumn(rowIndex, "ReorderLevel");
    cell.Update(70);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public updateCell() {
    const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
    // You can also get cell by rowID if primary key is defined
    // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
    cell.update(9999);
}
```

```razor
private UpdateCell() {
    IgbCell cell = this.treeGrid.GetCellByColumn(rowIndex, "Age");
    cell.Update(9999);
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public updateCell() {
    const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```

```razor
private UpdateCell() {
    IgbCell cell = this.hierarchicalGrid.GetCellByColumn(rowIndex, "ReorderLevel");
    cell.Update(70);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- Angular -->

### セル編集テンプレート

デフォルトのセル編集テンプレートの詳細については、[編集トピック](editing.md#テンプレートの編集)を参照してください。

セルが編集モードのときに適用されるカスタム テンプレートを提供する場合は、`CellTemplateDirective` を使用できます。これを行うには、`CellEditor` ディレクティブでマークされた **ng-template** を渡し、カスタムコントロールをセルの `EditValue` に適切にバインドする必要があります。

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```
```html
<igc-column id="class" field="class" header="Class" editable="true">
</igc-column>
```
```ts
constructor() {
    var class = this.class = document.getElementById('class') as IgcColumnComponent;

    this._bind = () => {
        class.inlineEditorTemplateRef = this.classEditTemplate;
    }
    this._bind();
}

public classEditTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <igc-select class="cell-select" value="${ctx.cell.value}" >
        </igc-select>
    `;
}
```

このコードは、`Race`、`Class`、および `Alignment` 列のセルに [SelectComponent](../select.md) を実装する以下のサンプルで使用されています。

`sample="/{ComponentSample}/cell-selection-style", height="625", alt="{Platform} {ComponentTitle} Select の例"`

> [!Note]
> 編集モードでセルの `EditValue` に加えられた変更は、終了時に適切な[編集イベント](editing.md#イベントの引数とシーケンス)をトリガーし、トランザクションが有効な場合はトランザクション状態に適用されます。

> [!Note]
> セルテンプレート `Cell` は、編集モード外での列のセルの表示方法を制御します。
> `CellEditor` セル編集テンプレート ディレクティブは、編集モードでの列のセルの表示方法を処理し、編集されたセルの編集値を制御します。

> [!Note]
>任意のタイプのエディター コンポーネントで `CellEditor` を使用すると、キーボード ナビゲーション フローが中断されます。同じことが、編集モードに入るカスタム セルの直接編集にも当てはまります。これは、追加したエディター コンポーネントではなく、**セル要素**に**フォーカス**が残るためです。これが、`Focus` ディレクティブを利用する必要がある理由です。これにより、フォーカスがセル内コンポーネントに直接移動し、セル/行の**流暢な編集フロー**が維持されます。

<!-- end: Angular -->

<!-- Angular -->

<!-- 列とそのテンプレートの構成方法の詳細については、[グリッド列構成](../grid/grid.md#angular-grid-列の構成)のドキュメントを参照してください。 -->

<!-- end: Angular -->

<!-- ComponentStart: Grid -->

### {ComponentTitle} Excel スタイル編集


Excel スタイル編集を使用すると、Excel を使用する場合と同じようにセルをナビゲートし、すばやく編集できます。

このカスタム機能を実装するには、`{ComponentName}` のイベントを使用します。最初にグリッドの keydown イベントにフックし、そこから 2 つの機能を実装できます。

* 常時編集モード

```typescript
public keydownHandler(event) {
  const key = event.keyCode;
  const grid = this.grid;
  const activeElem = grid.navigation.activeNode;

  if ((key >= 48 && key <= 57) ||
      (key >= 65 && key <= 90) ||
      (key >= 97 && key <= 122)) {
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !grid.crudService.cellInEditMode) {
            grid.crudService.enterEditMode(cell);
            cell.editValue = event.key;
        }
    }
}
```

* <kbd>Enter</kbd>/<kbd>Shift+Enter</kbd> ナビゲーション

```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eligible cell, we will use a custom method that will check the next suitable index
    let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
    });
}
```

次の適格なインデックスを見つけるための重要な部分は以下のようになります。

```typescript
//first we check if the currently selected cell is the first or the last
if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
return currentRowIndex;
}
// in case using shift + enter combination, we look for the first suitable cell going up the field
if (previous) {
return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
}
// or for the next one down the field
return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
```

詳細については、サンプルを参照してください。

##### {Platform} Grid Excel スタイル編集のサンプル

`sample="/{ComponentSample}/editing-excel-style", height="550", alt="{Platform} {ComponentTitle} Excel Style スタイル編集の例"`

上記のアプローチの主な利点は次のとおりです:

- 常時編集モード: セルが選択されているときに入力すると、編集モードに入り、入力された値が既存の値を置き換えます。
- <kbd>Enter</kbd>/<kbd>Shift+Enter</kbd> で移動する場合、データ以外の行はスキップされます。これにより、ユーザーは値をすばやく切り替えることができます。

<!-- ComponentEnd: Grid -->

## CRUD 操作

> [!Note]
> **CRUD 操作**を実行した場合、**filtering**、**sorting**、**grouping** などのパイプが再適用されるため、ビューが自動的に更新されることに注意してください。

`{ComponentName}` は基本的な CRUD 操作のための簡易な API を提供します。

### 新しいレコードの追加

`{ComponentName}` コンポーネントは、提供したデータをデータ ソースに追加する `AddRow` メソッドを公開します。

<!-- ComponentStart: Grid -->
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```

```razor
//Assuming we have a `GetNewRecord` method returning the new row data.
const record = this.GetNewRecord();
this.GridRef.AddRow(record);
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
}
```

```razor
//Assuming we have a `GetNewRecord` method returning the new row data.
const record = this.GetNewRecord();
this.TreeGridRef.AddRow(record);
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

### データを {ComponentTitle} で更新

{ComponentTitle} のデータ更新は、**グリッドで PrimaryKey が定義されている場合のみ** `UpdateRow` と `UpdateCell` メソッドで行うことができます。セルと行の値またはそのいずれかを各 **update** メソッドで直接更新できます。

<!-- ComponentStart: Grid -->
```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```
<!-- ComponentEnd: HierarchicalGrid -->

### {ComponentTitle} からデータを削除

`DeleteRow` メソッドは、`PrimaryKey` が定義されている場合に指定した行のみを削除することに注意してください。

<!-- ComponentStart: Grid -->
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
<!-- ComponentEnd: HierarchicalGrid -->

`{ComponentName}` に関係なく、ボタンのクリックなどのユーザー インタラクションに関連付けできます。

```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

### 編集イベントでのセル検証

`{ComponentName}` の編集イベントを使用して、ユーザーが `{ComponentName}` を操作する方法を変更できます。

この例では、`CellEdit` イベントにバインドすることにより、入力されたデータに基づいてセルを検証します。セルの新しい値が事前定義された基準を満たしていない場合、イベントをキャンセルすることでデータソースに到達しないようにします。

<!-- Angular -->

また、[Toast](../../notifications/toast.md) を使用してカスタム エラーメッセージを表示します。

<!-- end: Angular -->

最初に必要なことは、グリッドのイベントにバインドすることです。

```html
<{ComponentSelector} (cellEdit)="handleCellEdit($event)">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} CellEditScript="HandleCellEdit" />
```

<!-- ComponentStart: Grid -->
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.cellEdit = this.handleCellEdit;
    }
    this._bind();
}
```

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;

    this._bind = () => {
        treeGrid.cellEdit = this.handleCellEdit;
    }
    this._bind();
}
```
<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->
```ts
constructor() {
    var hGrid = this.hGrid = document.getElementById('hGrid') as IgcHierarchicalGridComponent;

    this._bind = () => {
        hGrid.cellEdit = this.handleCellEdit;
    }
    this._bind();
}
```
<!-- ComponentEnd: HierarchicalGrid -->
`CellEdit` は、セルの**値**がコミットされる直前に発生します。**CellEdit** の定義では、アクションを実行する前に特定の列を確認する必要があります。

<!-- ComponentStart: Grid -->
```typescript
export class MyGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'UnitsOnOrder') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
```

```razor
*** In JavaScript ***
igRegisterScript("HandleCellEdit", (ev) => {
    var d = ev.detail;

    if (d.column != null && d.column.field == "UnitsOnOrder") {
        if (d.newValue > d.rowData.UnitsInStock) {
            d.cancel = true;
            alert("You cannot order more than the units in stock!")
        }
    }
}, false);
```

**Units on Order (注文済み)** 列の下のセルに入力された値が使用可能量 (**Units in Stock、在庫数** の値) よりも大きい場合、編集はキャンセルされ、ユーザーにキャンセルの警告が表示されます。
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```typescript
export class MyTreeGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Age') {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = 'Employees must be at least 18 years old!';
                this.toast.open();
            }
        } else if (column.field === 'HireDate') {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = 'The employee hire date must be in the past!';
                this.toast.open();
            }
        }
    }
}
```

```razor
*** In JavaScript ***
igRegisterScript("HandleCellEdit", (ev) => {
    var d = ev.detail;

    if (d.column != null && d.column.field == "UnitsOnOrder") {
        if (d.newValue > d.rowData.UnitsInStock) {
            d.cancel = true;
            alert("You cannot order more than the units in stock!")
        }
    }
}, false);
```

**Units on Order (注文済み)** 列の下のセルに入力された値が使用可能量 (**Units in Stock、在庫数** の値) よりも大きい場合、編集はキャンセルされ、ユーザーにキャンセルの警告が表示されます。

<!-- Angular -->

ここでは、2 つの列を検証しています。ユーザーが従業員の**Age (年齢、18歳未満)** または **Hire Date (雇用日、将来の日付)** に無効な値を設定しようとすると、編集がキャンセルされ (値は送信されません)、エラー メッセージ付きのトースターが表示されます。

<!-- end: Angular -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
export class MyHGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = 'The debut date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                this.toast.message = 'The launch date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        }
    }
}
```

ここでは、2 つの列を検証しています。ユーザーがアーティストの **Debut (デビュー)** 年またはアルバムの **Launch Date (発売日)** を変更しようとした際に、グリッドは今日よりも後の日付を許可しません。

<!-- ComponentEnd: HierarchicalGrid -->

以下は、上記の検証が `{ComponentName}` に適用された結果のデモです。

`sample="/{ComponentSample}/editing-events", height="650", alt="{Platform} {ComponentTitle} 編集イベントの例"`

<!-- Angular -->

## スタイル設定

`{ComponentName}` で [{ProductName} テーマ ライブラリ](../themes/styles.md) を使用してセルのスタイルを設定できます。グリッドの [theme]({environment:sassApiUrl}/index.html#function-grid-theme) は、ユーザーがグリッドのさまざまな側面をスタイル設定できる広範なプロパティを公開します。

以下の手順では、編集モードでグリッドのセルのスタイルを設定する方法と、それらのスタイルの範囲を設定する方法について説明します。

[Ignite UI Theming ライブラリ](../themes/styles.md)を使用するには、まずグローバル スタイルでテーマ `index` ファイルをインポートする必要があります。

### スタイル ライブラリのインポート

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
以上で {ProductName} テーマ エンジンによって公開されているすべての機能を使用できます。

### パレットの定義

インデックス ファイルをインポート後、カスタム パレットを作成します。好きな 2 つの色を定義し、それらを使用して [igx-palette](../themes/palettes.md) でパレットを作成しましょう。

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: palette($primary: $white, $secondary: $blue);
```

### テーマの定義

これで、パレットを使用してテーマを定義できます。セルは [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) によってスタイル設定されているため、それを使用して `{ComponentName}` のテーマを生成できます。

```scss
$custom-grid-theme: grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: color($color-palette, "secondary", 200)
);
```

### テーマの適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
@include grid($custom-grid-theme);
```

これにより、テーマはアプリケーションの**すべて**のグリッドに適用されます。このカスタム スタイルを特定のコンポーネントにのみ適用する場合は、テーマのスコープを設定する必要があります。

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイル ファイルに移動できます (`index` ファイルの[インポート](#スタイル-ライブラリのインポート)を含む)。

このように、{Platform} の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 > [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 > [!Note]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
            @include grid($custom-grid-theme);
        }
    }
}
```

### デモのスタイル設定

上記の手順に加えて、セルの編集テンプレートに使用されるコントロールのスタイルを設定することもできます [igx-input-group](../input-group.md#スタイル設定)、 [igx-datepicker](../date-picker.md#スタイル設定) および [igx-checkbox](../checkbox.md#スタイル設定)。

`sample="/{ComponentSample}/editing-style", height="700", alt="{Platform} {ComponentTitle} 編集スタイルの例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## API リファレンス

<!-- ComponentStart: Grid, HierarchicalGrid -->

* `GridRow`

<!-- ComponentEnd: Grid, HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->

* `TreeGridRow`

<!-- ComponentEnd: TreeGrid -->
* `GridCell`
<!-- Angular -->
* `InputDirective`
<!-- end:Angular -->
* `DatePickerComponent`

## その他のリソース

<!-- Angular -->

* [Grid で CRUD 操作を構築する](../general/how-to/how-to-perform-crud.md)


* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentStart:  HierarchicalGrid -->
<!-- * [検索](search.md) -->
<!-- ComponentEnd:  HierarchicalGrid -->

<!-- end: Angular -->

<!-- Blazor, WebComponents -->

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

<!-- end: Blazor, WebComponents -->