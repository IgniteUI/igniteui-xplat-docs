---
title: {Platform} {ComponentTitle} セルの編集 - {ProductName}
_description: {ComponentTitle} はセル内編集を使用しています。デフォルトのセル編集テンプレートがありますが、データ更新操作のカスタム テンプレートを定義することもできます。今すぐお試しください。
_keywords: data manipulation, excel editing, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, データの変更, excel 編集, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} セル編集

{Platform} {ComponentTitle} の {ProductName} セル編集機能は、{Platform} {ComponentTitle} コンポーネント内の個々のセルのコンテンツの優れたデータ操作機能を提供し、React CRUD 操作用の強力な API を備えています。これはスプレッドシート、データ テーブル、データ グリッドなどのアプリの基本的な機能であり、ユーザーが特定のセル内のデータを追加、編集、更新できるようにします。
デフォルトでは、{ProductName} の Grid がセル編集に使用されます。また、**デフォルトのセル編集テンプレート**により、列のデータ型 「Top of Form」 に基づいて異なるエディターが存在します。

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
<!-- Angular, WebComponents -->
```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```
<!-- end: Angular, WebComponents -->

```razor
this.grid.UpdateCell(newValue, rowID, 'ReorderLevel')
```

<!-- React -->
```typescript
function updateCell() {
    grid1Ref.current.updateCell(newValue, rowID, 'ReorderLevel');
}
```
<!-- end: React -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```

```razor
@code {
    this.treeGrid.UpdateCell(newValue, rowID, 'ReorderLevel');
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```

```razor
@code {
    this.hierarchicalGrid.UpdateCell(newValue, rowID, 'ReorderLevel');
}
```
<!-- ComponentEnd: HierarchicalGrid -->

セルを更新するその他の方法として `Cell` の `Update` メソッドで直接更新する方法があります。

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```
<!-- end: Angular, WebComponents -->

```razor
@code {
    private UpdateCell() {
        IgbCell cell = this.grid1.GetCellByColumn(rowIndex, "ReorderLevel");
        cell.Update(70);
    }
}
```
<!-- React -->
```typescript
function updateCell() {
    const cell = grid1Ref.current.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = grid1Ref.current.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```
<!-- end: React -->

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
@code {
    private UpdateCell() {
        IgbCell cell = this.treeGrid.GetCellByColumn(rowIndex, "Age");
        cell.Update(9999);
    }
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
@code {
    private UpdateCell() {
        IgbCell cell = this.hierarchicalGrid.GetCellByColumn(rowIndex, "ReorderLevel");
        cell.Update(70);
    }
}
```
<!-- ComponentEnd: HierarchicalGrid -->


### セル編集テンプレート

デフォルトのセル編集テンプレートの詳細については、[編集トピック](editing.md#テンプレートの編集)を参照してください。

<!-- Angular -->

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

<!-- Blazor, WebComponents -->

セルに適用されるカスタム テンプレートを提供する場合は、そのテンプレートをセル自体またはそのヘッダーに渡すことができます。まず、通常どおりに列を作成します。

<!-- end: Blazor, WebComponents -->

<!-- Blazor -->

<!-- ComponentStart: Grid -->
```razor
<IgbColumn
    Field="Race"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```razor
<IgbColumn
    Field="Category"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```razor
<IgbColumn
    Field="Age"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```
<!-- ComponentEnd: HierarchicalGrid -->

そしてテンプレートを渡します:

```razor
*** In JavaScript ***

igRegisterScript("WebGridCellEditCellTemplate", (ctx) => {
    let cellValues = [];
    let uniqueValues = [];
    for(const i of ctx.cell.grid.data){
        const field = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`<div>
    <igc-select position-strategy="fixed" @igcChange=${ e => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
</div>`;
}, false);
```
<!-- end: Blazor -->

<!-- WebComponents -->

<!-- ComponentStart: Grid -->

```html
<igc-column
    field="Race"
    data-type="string"
    editable="true"
    id="column1">
</igc-column>
```

そして、テンプレートを index.ts ファイルのこの列に渡します。

```typescript
constructor() {
    var grid1 = document.getElementById('grid1') as {ComponentName}Component;
    var column1 = document.getElementById('column1') as IgcColumnComponent;
    var column2 = document.getElementById('column2') as IgcColumnComponent;
    var column3 = document.getElementById('column3') as IgcColumnComponent;

    grid1.data = this.webGridCellEditSampleRoleplay;
    column1.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column2.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column3.inlineEditorTemplate = this.webGridCellEditCellTemplate;
}


public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    for(const i of (this.webGridCellEditSampleRoleplay as any)){
        const field: string = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`
        <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
            ${cellValues}
        </igc-select>
    `;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igc-column
    field="Category"
    data-type="string"
    editable="true"
    id="column1">
</igc-column>
```

そして、テンプレートを index.ts ファイルのこの列に渡します。

```ts

constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    var column1 = document.getElementById('column1') as IgcColumnComponent;

    treeGrid.data = this.webGridCellEditSampleRoleplay;
    column1.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column2.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column3.inlineEditorTemplate = this.webGridCellEditCellTemplate;
}

public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    for(const i of (this.webGridCellEditSampleRoleplay as any)){
        const field: string = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`
    <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
            ${cellValues}
    </igc-select>
    `;
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-column
    field="Age"
    data-type="string"
    editable="true"
    id="column1">
</igc-column>
```

そして、テンプレートを index.ts ファイルのこの列に渡します。

```ts

constructor() {
    var hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    var column1 = document.getElementById('column1') as IgcColumnComponent;

    hierarchicalGrid.data = this.singersData;
    column1.inlineEditorTemplate = this.webGridCellEditCellTemplate;
}

public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    for(const i of (this.singersData as any)){
        const field: string = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`
    <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
            ${cellValues}
    </igc-select>
    `;
}
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: WebComponents -->

<!-- React -->

セルに適用されるカスタム テンプレートを提供する場合は、そのテンプレートをセル自体またはそのヘッダーに渡すことができます。まず、通常どおりに列を作成します。

```tsx
<IgrColumn
    field="race"
    header="Race"
    dataType="String"
    editable="true"
    name="column1"
    id="column1">
</IgrColumn>
```

そして、テンプレートを index.ts ファイルのこの列に渡します。

```typescript

const webGridCellEditCellTemplate = useCallback((ctx: IgrCellTemplateContext) => {
    const cellValues: any = [];
    const uniqueValues: any = [];
    for(const i of (webGridCellEditSampleRoleplay as any)){
      const field: string = ctx.cell.column.field;
      if(uniqueValues.indexOf(i[field]) === -1 )
      {
        cellValues.push(<IgrSelectItem key={i[field]} value={i[field]}>{i[field]}</IgrSelectItem>);
        uniqueValues.push(i[field]);
      }
    }
    return (
      <IgrSelect style={{width: '100%', height: '100%'}} size="large" change={(e: any) => ctx.cell.editValue = e.detail.value}>
            {cellValues}
      </IgrSelect>
    );
  }, [webGridCellEditSampleRoleplay]);

  useEffect(() => {
    const column1 = grid1Ref.current.getColumnByName('column1');

    grid1Ref.current.data = webGridCellEditSampleRoleplay;
    column1.inlineEditorTemplate = webGridCellEditCellTemplate;
      
    
  }, [webGridCellEditSampleRoleplay, webGridCellEditCellTemplate]);

```
<!-- end: React -->

上記のサンプルは、こちらで参照できます。

`sample="/{ComponentSample}/cell-editing-sample", height="650", alt="{Platform} {ComponentTitle} セル編集テンプレート サンプル"`

<!-- Angular -->

<!-- 列とそのテンプレートの構成方法の詳細については、[グリッド列構成](../grid/grid.md#angular-grid-列の構成)のドキュメントを参照してください。 -->

<!-- end: Angular -->

<!-- ComponentStart: Grid -->

### {ComponentTitle} Excel スタイル編集


Excel スタイル編集を使用すると、Excel を使用する場合と同じようにセルをナビゲートし、すばやく編集できます。

このカスタム機能を実装するには、`{ComponentName}` のイベントを使用します。最初にグリッドの keydown イベントにフックし、そこから 2 つの機能を実装できます。

* 常時編集モード

<!-- Angular, WebComponents -->

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
<!-- end: Angular, WebComponents -->

<!-- React -->

```typescript
function keydownHandler(event) {
  const key = event.keyCode;
  const grid = grid1Ref.current;
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
<!-- end: React -->

* <kbd>Enter</kbd>/<kbd>Shift+Enter</kbd> ナビゲーション

<!-- Angular, WebComponents -->
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
<!-- end: Angular, WebComponents -->

<!-- React -->
```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eligible cell, we will use a custom method that will check the next suitable index
    let nextRow = getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    grid1Ref.current.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        grid1Ref.current.clearCellSelection();
    });
}
```
<!-- end: React -->

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

<!-- Angular, WebComponents -->
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```
<!-- end: Angular, WebComponents -->

```razor
@code {
    //Assuming we have a `GetNewRecord` method returning the new row data.
    const record = this.GetNewRecord();
    this.GridRef.AddRow(record);
}
```

<!-- React -->
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = getNewRecord();
grid1Ref.current.addRow(record);
```
<!-- end: React -->

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
    this.hierarchicalGrid.addRow(record);
}
```
```razor
@code {
    //Assuming we have a `GetNewRecord` method returning the new row data.
    const record = this.GetNewRecord();
    this.HierarchicalGridRef.AddRow(record);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

### データを {ComponentTitle} で更新

{ComponentTitle} のデータ更新は、**グリッドで PrimaryKey が定義されている場合のみ** `UpdateRow` と `UpdateCell` メソッドで行うことができます。セルと行の値またはそのいずれかを各 **update** メソッドで直接更新できます。

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
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
<!-- end: Angular, WebComponents -->

<!-- React -->
```typescript
// Updating the whole row
grid1Ref.current.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
grid1Ref.current.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
selectedCell.update(newData);

// Directly using the row `update` method
const row = grid1Ref.current.getRowByKey(rowID);
row.update(newData);
```
<!-- end: React -->


```razor
@code {
    // Updating the whole row
    this.grid.UpdateRow(newData, this.selectedCell.cellID.rowID);

    // Just a particular cell through the Grid API
    this.grid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

    // Directly using the cell `update` method
    this.selectedCell.Update(newData);

    // Directly using the row `update` method
    IgbRowType row = this.grid.GetRowByKey(rowID);
    row.Update(newData);
}
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

```razor
@code {
    // Updating the whole row
    this.treeGrid.UpdateRow(newData, this.selectedCell.cellID.rowID);

    // Just a particular cell through the Tree Grid API
    this.treeGrid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

    // Directly using the cell `update` method
    this.selectedCell.Update(newData);

    // Directly using the row `update` method
    IgbRowType row = this.treeGrid.GetRowByKey(rowID);
    row.Update(newData);
}
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

```razor
@code {
    // Updating the whole row
    this.hierarchicalGrid.UpdateRow(newData, this.selectedCell.cellID.rowID);

    // Just a particular cell through the Tree Grid API
    this.hierarchicalGrid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

    // Directly using the cell `update` method
    this.selectedCell.Update(newData);

    // Directly using the row `update` method
    IgbRowType row = this.hierarchicalGrid.GetRowByKey(rowID);
    row.Update(newData);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

### {ComponentTitle} からデータを削除

`DeleteRow` メソッドは、`PrimaryKey` が定義されている場合に指定した行のみを削除することに注意してください。

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
<!-- end: Angular, WebComponents -->

<!-- React -->
```typescript
// Delete row through Grid API
grid1Ref.current.deleteRow(selectedCell.cellID.rowID);
// Delete row through row object
const row = grid1Ref.current.getRowByIndex(rowIndex);
row.del();
```
<!-- end: React -->

```razor
@code {
    // Delete row through Grid API
    this.grid.DeleteRow(this.selectedCell.cellID.rowID);
    // Delete row through row object
    IgbRowType row = this.grid.GetRowByIndex(rowIndex);
    row.Del();
}
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

```razor
@code {
    // Delete row through Tree Grid API
    this.treeGrid.DeleteRow(this.selectedCell.cellID.rowID);
    // Delete row through row object
    IgbRowType row = this.treeGrid.GetRowByIndex(rowIndex);
    row.Del();
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- WebComponents -->
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.del();
```
<!-- end: React -->

```razor
@code {
    // Delete row through Grid API
    this.hierarchicalGrid.DeleteRow(this.selectedCell.cellID.rowID);
    // Delete row through row object
    IgbRowType row = this.hierarchicalGrid.GetRowByIndex(rowIndex);
    row.Del();
}
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

<!-- Angular -->
```html
<{ComponentSelector} (cellEdit)="handleCellEdit($event)">
</{ComponentSelector}>
```

<!-- end: Angular -->

<!-- React -->
```tsx
<{ComponentSelector} cellEdit={handleCellEdit}>
</{ComponentSelector}>
```
<!-- end: React -->

<!-- Blazor, WebComponents -->

```razor
<{ComponentSelector} CellEditScript="HandleCellEdit" />
```

<!-- ComponentStart: Grid -->
```typescript
constructor() {
    var grid = document.getElementById('grid') as IgcGridComponent;
    this.webGridCellEdit = this.webGridCellEdit.bind(this);
    grid.addEventListener("cellEdit", this.webGridCellEdit);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    this.webTreeGridCellEdit = this.webTreeGridCellEdit.bind(this);
    treeGrid.addEventListener("cellEdit", this.webTreeGridCellEdit);
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```ts
constructor() {
    var hGrid = document.getElementById('hGrid') as IgcHierarchicalGridComponent;
    this.webHierarchicalGridCellEdit = this.webHierarchicalGridCellEdit.bind(this);
    hGrid.addEventListener("cellEdit", this.webHierarchicalGridCellEdit);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Blazor, WebComponents -->

`CellEdit` は、セルの**値**がコミットされる直前に発生します。**CellEdit** の定義では、アクションを実行する前に特定の列を確認する必要があります。

<!-- ComponentStart: Grid -->

<!-- Angular -->
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
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
public webGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const column = event.detail.column;
    if (column.field === 'UnitsOnOrder') {
            const rowData = event.detail.rowData;
            if (!rowData) {
                return;
            }
            if (event.detail.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                alert("You cannot order more than the units in stock!");
            }
    }
}

```
<!-- end: WebComponents -->

<!-- React -->
```typescript
function handleCellEdit(s: IgrGridBaseDirective, args: IgrGridEditEventArgs): void {
    const column = args.detail.column;

    if (column.field === 'UnitsOnOrder') {
        const rowData = args.detail.rowData;
        if (!rowData) {
            return;
        }
        if (args.detail.newValue > rowData.UnitsInStock) {
            args.detail.cancel = true;
            alert("You cannot order more than the units in stock!");  
        }
    }
}
```
<!-- end: React -->

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
**Units On Order (注文済み)** 列の下のセルに入力された値が使用可能量 (**Units in Stock、在庫数** の値) よりも大きい場合、編集はキャンセルされ、ユーザーにキャンセルの警告が表示されます。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```typescript
public webTreeGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const column = event.detail.column;
    		
    if (column.field === 'Age') {
        if (event.detail.newValue < 18) {
            event.detail.cancel = true;
            alert('Employees must be at least 18 years old!');
        }
    } else if (column.field === 'HireDate') {
        if (event.detail.newValue > new Date().getTime()) {
            event.detail.cancel = true;
            alert('The employee hire date must be in the past!');
        }
    }
}

```

```razor
*** In JavaScript ***
igRegisterScript("HandleCellEdit", (ev) => {
    const column = event.detail.column;

	if (column.field === 'Age') {
		if (event.detail.newValue < 18) {
			event.detail.cancel = true;
			alert('Employees must be at least 18 years old!');
		}
	} else if (column.field === 'HireDate') {
		if (event.detail.newValue > new Date().getTime()) {
			event.detail.cancel = true;
			alert('The employee hire date must be in the past!');
		}
	}
}, false);
```

**Age (年齢)** 列の下のセルに入力された値が 18 未満である場合、または **HireDate (雇用日)** 列の値が将来の場合、編集はキャンセルされ、ユーザーにキャンセルについての警告が表示されます。

<!-- Angular -->

ここでは、2 つの列を検証しています。ユーザーが従業員の **Age (年齢、18 歳未満)** または **Hire Date (雇用日、将来の日付)** に無効な値を設定しようとすると、編集がキャンセルされ (値は送信されません)、エラー メッセージ付きのトースターが表示されます。

<!-- end: Angular -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public webHierarchicalGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const today = new Date();
    const column = event.detail.column;
    if (column.field === 'Debut') {
        if (event.detail.newValue > today.getFullYear()) {
            event.detail.cancel = true;
            alert('The debut date must be in the past!');
        }
    } else if (column.field === 'LaunchDate') {
        if (event.detail.newValue > today) {
            event.detail.cancel = true;
            alert('The launch date must be in the past!');
        }
    }
}
```

```razor
*** In JavaScript ***
igRegisterScript("HandleCellEdit", (ev) => {
    const today = new Date();
    const column = event.detail.column;
	if (column.field === 'Debut') {
		if (event.detail.newValue > today.getFullYear()) {
			event.detail.cancel = true;
			alert('The debut date must be in the past!');
		}
	} else if (column.field === 'LaunchDate') {
		if (event.detail.newValue > today) {
			event.detail.cancel = true;
			alert('The launch date must be in the past!');
		}
	}
}, false);
```

ここでは、2 つの列を検証しています。ユーザーがアーティストの **Debut (デビュー)** 年またはアルバムの **Launch Date (発売日)** を変更しようとした際に、グリッドは今日よりも後の日付を許可しません。

<!-- ComponentEnd: HierarchicalGrid -->

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
public handleCellEdit(sender: IgrHierarchicalGrid, event: IgrGridEditEventArgs): void {
    const today = new Date();
    const column = event.detail.column;
    if (column.field === 'Debut') {
        if (event.detail.newValue > today.getFullYear()) {
            event.detail.cancel = true;
            alert('The debut date must be in the past!');
        }
    } else if (column.field === 'LaunchDate') {
        if (event.detail.newValue > today) {
            event.detail.cancel = true;
            alert('The launch date must be in the past!');
        }
    }
}
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

以下は、上記の検証が `{ComponentName}` に適用された結果のデモです。

`sample="/{ComponentSample}/editing-events", height="650", alt="{Platform} {ComponentTitle} 編集イベントの例"`

## スタイル設定

<!-- WebComponents, Blazor, React -->

事前定義されたテーマに加えて、利用可能な [CSS プロパティ](../theming.md)を設定することでグリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

<!-- ComponentStart: Grid -->
```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid Class="grid"></IgbGrid>
```

```tsx
<IgrGrid className="grid"></IgrGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-edit-mode-color: orange;
    --ig-grid-cell-editing-background: lightblue;
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igc-tree-grid class="treeGrid"></igc-tree-grid>
```

```razor
<IgbTreeGrid Class="treeGrid"></IgbTreeGrid>
```

```tsx
<IgrTreeGrid className="treeGrid"></IgrTreeGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.treeGrid {
    --ig-grid-edit-mode-color: orange;
    --ig-grid-cell-editing-background: lightblue;
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid class="hierarchicalGrid"></igc-hierarchical-grid>
```

```razor
<IgbHierarchicalGrid Class="hierarchicalGrid"></IgbHierarchicalGrid>
```

```tsx
<IgrHierarchicalGrid className="hierarchicalGrid"></IgrHierarchicalGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.hierarchicalGrid {
    --ig-grid-edit-mode-color: orange;
    --ig-grid-cell-editing-background: lightblue;
}
```
<!-- ComponentEnd: HierarchicalGrid -->

### スタイル設定の例

`sample="/{ComponentSample}/cell-editing-styling", height="650", alt="{Platform} {ComponentTitle} セル編集のスタイル設定の例"`

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

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

上記の手順に加えて、セルの編集テンプレートに使用されるコントロールのスタイルを設定することもできます [igx-input-group](../input-group.md#スタイル設定)、[igx-datepicker](../date-picker.md#スタイル設定) および [igx-checkbox](../checkbox.md#スタイル設定)。

`sample="/{ComponentSample}/editing-style", height="700", alt="{Platform} {ComponentTitle} 編集スタイルの例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## API リファレンス

* `{ComponentName}`

<!-- Angular -->
* `InputDirective`
<!-- end:Angular -->

* `DatePicker`

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

<!-- Blazor, WebComponents, React -->

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

<!-- end: Blazor, WebComponents, React -->
