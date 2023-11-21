---
title: {Platform} {ComponentTitle} 選択 - {ProductName}
_description: {ProductName} グリッドでデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 選択の概要

{Platform} {ComponentTitle} の {ProductName} 選択機能を使用すると、単純なマウス操作を使用してデータを簡単に操作および操作できます。使用可能な選択モードは 3 つあります。

- 行の選択
- セルの選択
- 列の選択 

`RowSelection` プロパティを使用すると、以下を指定できます。

- None (なし)
- Single (単一)  
- Multiple Select (複数選択) 

## {Platform} {ComponentTitle} 選択の例

以下のサンプルは、`{ComponentName}` の 3 種類の**セル選択**動作を示しています。以下のボタンを使用して、利用可能な各選択モードを有効にします。

<!-- Angular -->
スナックバーのメッセージ ボックスを介して、各ボタンの操作に関する簡単な説明が提供されます。
<!-- end: Angular -->

`sample="/{ComponentSample}/cell-selection-mode", height="650", alt="{Platform} {ComponentTitle} 選択の例"`



## {Platform} {ComponentTitle} 選択のオプション

<!-- ComponentStart:  Grid -->
{ProductName} `{ComponentName}` コンポーネントは、[行選択](row-selection.md)、[セル選択](cell-selection.md)、[列選択](column-selection.md)の 3 つの選択モードを提供します。デフォルトでは、`{ComponentName}` で**複数セル選択**モードのみが有効になっています。選択モードの変更または有効化は、`RowSelection`、`CellSelection` または `Selectable` プロパティを使用します。
<!-- ComponentEnd:  Grid -->

### {Platform} {ComponentTitle} 行選択

プロパティ `RowSelection` を使用すると、次のオプションを指定できます。

- `None` - `{ComponentName}` の行選択が無効になります。
- `Single` - `{ComponentName}` 内の 1 行のみの選択が利用可能になります。
- `Multiple` - 複数行の選択は、<kbd>Ctrl</kbd> + <kbd>クリック</kbd>、<kbd>Space キー</kbd> を押して行セレクターを使用することにより、複数行の選択が可能になります。

<!-- ComponentStart: TreeGrid -->

- `MultipleCascade` -  これはカスケード選択のモードであり、ユーザーがユーザーの操作で選択したレコードの下のツリー内のすべての子が選択されます。このモードでは、親の選択状態はその子の選択状態に完全に依存します。

<!-- ComponentEnd: TreeGrid -->

> 詳細については、[行選択トピック](row-selection.md)を参照してください。

### {Platform} {ComponentTitle} セル選択

以下のオプションは、プロパティ `CellSelection` で指定できます。

- `None` - `{ComponentName}` のセル選択が無効になります。
- `Single` - `{ComponentName}` 内の 1 セルのみの選択が利用可能になります。
- `Multiple` - `{ComponentName}` の選択のデフォルト状態です。複数セルの選択は、マウスの左ボタンを連続してクリックした後、マウスをセル上にドラッグすることで利用できます。

<!-- ComponentStart:  Grid -->
> 詳細については、[セル選択トピック](cell-selection.md)を参照してください。
<!-- ComponentEnd:  Grid -->

### {Platform} {ComponentTitle} 列選択

`Selectable` プロパティを使用して、`Column` ごとに以下のオプションを指定できます。このプロパティが true または false に設定されている場合、対応する列の選択がそれぞれ有効または無効になります。

以下の 3 つのバリエーションがあります。

- Single selection (単一選択) - 列セルを<kbd>マウス クリックします</kbd>。
- Multi column selection (複数列の選択) - <kbd>Ctrl</kbd> キーを押しながら列セルを<kbd>マウス クリックします</kbd>。
- Range column selection (列の範囲選択) - <kbd>Shift</kbd> キーを押しながら + <kbd>マウス クリック</kbd>、その間のすべての列が選択されます。

<!-- ComponentStart:  Grid -->
> 詳細については、[列選択トピック](column-selection.md)を参照してください。
<!-- ComponentEnd:  Grid -->

<!-- ComponentStart: Grid -->

## {Platform} {ComponentTitle} コンテキスト メニュー

`ContextMenu` イベントは、カスタム コンテキスト メニューを追加して、`{ComponentName}` での作業をアシストします。グリッドの本体を**右クリック**すると、イベントはトリガーされたセルを放出します。**コンテキスト メニュー**は、放出されたセルで動作します。

**複数セルの選択**がある場合、選択したセルが複数セルの選択領域にあるかどうかをチェックするロジックを配置します。その場合、選択したセルの値も出力します。

基本的に、メイン関数は次のようになります。

<!-- Angular -->

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

<!-- end: Angular -->

<!-- WebComponents -->

```ts
    public rightClick(event: any) {
        const eventArgs = event.detail;
        eventArgs.event.preventDefault();
        this.multiCellArgs = {};
        if (this.multiCellSelection) {
          const node = eventArgs.cell.selectionNode;
          const isCellWithinRange = this.grid.getSelectedRanges().some((range) => {
            if (
              node.column >= range.columnStart &&
              node.column <= range.columnEnd &&
              node.row >= range.rowStart &&
              node.row <= range.rowEnd
            ) {
              return true;
            }
            return false;
          });
          if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
          }
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.toggleContextMenu();
      }
```
<!-- end: WebComponents -->

```tsx
function rightClick(grid: IgrGridBaseDirective, event: IgrGridCellEventArgs) {
    const eventArgs = event.detail;
    eventArgs.event.preventDefault();
    const node = eventArgs.cell.id;
    const isCellWithinRange = grid.getSelectedRanges().some((range: any) => {
        if (node.columnID >= range.columnStart &&
            node.columnID <= range.columnEnd &&
            node.rowIndex >= range.rowStart &&
            node.rowIndex <= range.rowEnd
            ) {
                return true;
            }
        return false;
    });
    setIsCellWithinRange(isCellWithinRange);
    setClickedCell(eventArgs.cell);
    openContextMenu(eventArgs.event.clientX, eventArgs.event.clientY)
}
```

```razor
    public void RightClick(MouseEventArgs e)
    {
        this.MenuX = e.ClientX + "px";
        this.MenuY = e.ClientY + "px";
    }


    public void onMenuShow(IgbGridCellEventArgs e)
    {
        IgbGridCellEventArgsDetail detail = e.Detail;
        this.ShowMenu = true;
        this.ClickedCell = detail.Cell;
    }
```

以下はコンテキストメニューの機能です。

- 選択したセルの *value* のコピー。
- 選択したセルの *dataRow* のコピー。
- 選択したセルが**複数セルの選択範囲**内にある場合、選択したすべてのデータをコピーします。

<!-- Angular -->

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

<!-- end: Angular -->

<!-- WebComponents -->

```ts
    public copySelectedRowData() {
        const selectedData = this.grid.getRowData(this.clickedCell.id.rowID);
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        this.toggleContextMenu();
    }

    public copySelectedCellData() {
        const selectedData = this.clickedCell.value;
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        this.toggleContextMenu();
    }


    public copySelectedData() {
        const selectedData = this.grid.getSelectedData();
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        
        this.toggleContextMenu();
    }

    private copyData(data: any[]) {
        const tempElement = document.createElement('input');
        document.body.appendChild(tempElement);
        tempElement.setAttribute('id', 'temp_id');
        (document.getElementById('temp_id') as HTMLInputElement).value = JSON.stringify(data);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }
```

<!-- end: WebComponents -->

```tsx
function copySelectedRowData() {
    const selectedData = gridRef.current.getRowData(clickedCell.id.rowID);
    copyData(selectedData);
    closeContextMenu();
}

function copySelectedCellData() {
    const selectedData = clickedCell.value;
    copyData(selectedData);
    closeContextMenu();
}

function copySelectedData() {
    const selectedData = gridRef.current.getSelectedData(null,null);
    copyData(selectedData);
    closeContextMenu();
}

function copyData(data: any[]) {
    const tempElement = document.createElement('input');
    document.body.appendChild(tempElement);
    tempElement.setAttribute('id', 'temp_id');
    (document.getElementById('temp_id') as HTMLInputElement).value = JSON.stringify(data);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    setSelectedData(JSON.stringify(data));
}
```

```razor
    public void CopyCellData()
    {
        this.ShowMenu = false;
        this.SelectedData = this.ClickedCell.Value.ToString();
        StateHasChanged();
    }


    public async void CopyRowData()
    {
        this.ShowMenu = false;
        NwindDataItem rowData = this.NwindData.ElementAt(this.ClickedCell.Id.RowIndex);
        this.SelectedData = JsonConvert.SerializeObject(rowData);
        StateHasChanged();
}

    public async void CopyCellsData()
    {
        this.ShowMenu = false;
        var selectedData = await this.grid.GetSelectedDataAsync(true, false);
        this.SelectedData = JsonConvert.SerializeObject(selectedData);
        StateHasChanged();
    }
```

`{ComponentName}` はコピーされたデータを取得し、コンテナ要素に貼り付けます。

グリッドとコンテキスト メニューを組み合わせるために使用するテンプレート:

<!-- Angular -->
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
<!-- end: Angular -->

<!-- WebComponents -->
```html
    <div class="container sample">
      <div class="wrapper">
        <igc-grid auto-generate="false" width="50%" height="100%" name="grid" id="grid">
          <igc-column field="ProductID" header="Product ID">
          </igc-column>
          <igc-column field="ProductName" header="Product Name">
          </igc-column>
          <igc-column field="UnitsInStock" header="Units In Stock" data-type="number">
          </igc-column>
          <igc-column field="UnitPrice" header="Units Price" data-type="number">
          </igc-column>
          <igc-column field="Discontinued" data-type="boolean">
          </igc-column>
          <igc-column field="OrderDate" header="Order Date" data-type="date">
          </igc-column>
        </igc-grid>
        <div id="selectedArea" class="selected-data-area">
        </div>
      </div>
    </div>
    <div id="menu" style="display: none;" class="contextmenu">
      <span id="copySingleCell" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Cell Data
      </span>
      <span id="copyRow" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Row Data
      </span>
      <span id="copyMultiCells" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Cells Data
      </span>
    </div>
  </div>
```
<!-- end: WebComponents -->

```tsx
 <>
    <div className="container sample">
        <div className="wrapper" onClick={closeContextMenu}>
            <IgrGrid
                autoGenerate="false"
                data={northWindData}
                primaryKey="ProductID"
                ref={gridRef}
                contextMenu={rightClick}>
            <IgrColumn field="ProductID" header="Product ID">
            </IgrColumn>
            <IgrColumn field="ProductName" header="Product Name">
            </IgrColumn>
            <IgrColumn field="UnitsInStock" header="Units In Stock" dataType="number">
            </IgrColumn>
            <IgrColumn field="UnitPrice" header="Units Price" dataType="number">
            </IgrColumn>
            <IgrColumn field="Discontinued" dataType="boolean">
            </IgrColumn>
            <IgrColumn field="OrderDate" header="Order Date" dataType="date">
            </IgrColumn>
            </IgrGrid>
            <div className="selected-data-area">
                {selectedData}
            </div>
        </div>
    </div>
    <div style={{display: "none"}} className="contextmenu" ref={contextMenuRef}>
        <span className="item" onClick={copySelectedCellData}>
            <IgrIcon ref={iconRef} collection='material' name="content_copy"></IgrIcon>Copy Cell Data
        </span>
        <span className="item" onClick={copySelectedRowData}>
            <IgrIcon collection='material' name="content_copy"></IgrIcon>Copy Row Data
        </span>
        {isCellWithinRange && (
        <span className="item" onClick={copySelectedData}>
            <IgrIcon collection='material' name="content_copy"></IgrIcon>Copy Cells Data
        </span>)}
    </div>
</>
```

```razor
<div class="container vertical">
    <div class="wrapper" oncontextmenu="event.preventDefault()">
        <IgbGrid AutoGenerate="false"
                 CellSelection="GridSelectionMode.Multiple"
                 ContextMenu="onMenuShow"
                 @oncontextmenu="RightClick"
                 Name="grid"
                 @ref="grid"
                 Data="NwindData">
            <IgbColumn Field="ProductID"
                       Header="Product ID">
            </IgbColumn>

            <IgbColumn Field="ProductName"
                       Header="Product Name">
            </IgbColumn>

            <IgbColumn Field="UnitsInStock"
                       Header="Units In Stock"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="UnitPrice"
                       Header="Units Price"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="Discontinued"
                       DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn Field="OrderDate"
                       Header="Order Date"
                       DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>
        <div class="selected-data-area">
            @SelectedData
        </div>
        </div>
        @if (ShowMenu)
        {
            <div id="menu" class="contextmenu" style="left: @MenuX; top: @MenuY">
                <span id="copySingleCell" class="item" @onclick="CopyCellData">
                    <IgbIcon @ref=icon IconName="content_copy" Collection="material"></IgbIcon>Copy Cell Data
                </span>
            <span id="copyRow" class="item" @onclick="CopyRowData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Row Data
                </span>
            <span id="copyMultiCells" class="item" @onclick="CopyCellsData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Cells Data
                </span>
            </div>
        }
</div>
```

 複数のセルを選択し、マウスの右ボタンを押します。コンテキストメニューが表示され、**セル データのコピー** を選択すると、選択したデータが右側の空のボックスに表示されます。

 結果:

`sample="/{ComponentSample}/custom-context-menu", height="600", alt="{Platform} {ComponentTitle} カスタム コンテキスト メニュー"`


<!-- ComponentEnd: Grid -->

## 既知の問題と制限

<!-- Angular -->

- IE11 で選択を有効にした `{ComponentName}` コンポーネントを使用するには、{Platform} の polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。IE11 は、バージョン 13.0.0 でサポートされなくなりました。

```typescript
import 'core-js/es7/array';
```
<!-- end: Angular -->

グリッドに `PrimaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合）、データ要求が完了すると、行は次の状態を失います:

- 行の選択
- 行の展開/縮小
- 行の編集
- 行のピン固定



## API リファレンス

* `{ComponentName}`

<!-- ComponentStart: Grid, HierarchicalGrid, PivotGrid -->

* `GridRow`

<!-- ComponentEnd: Grid, HierarchicalGrid, PivotGrid -->

<!-- ComponentStart: TreeGrid -->

* `TreeGridRow`

<!-- ComponentEnd: TreeGrid -->

* `Cell`

## その他のリソース

<!-- ComponentStart:  Grid -->
* [行の選択](row-selection.md)
* [セルの選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [仮想化とパフォーマンス](virtualization.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
