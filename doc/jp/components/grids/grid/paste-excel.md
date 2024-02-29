---
title: {Platform} Excel スタイルの {ComponentTitle} - インフラジスティックス
_description: API を使用して最小限のコードで Excel からのデータ貼り付けや選択した {Platform} グリッド データを簡単にエクスポートできます。
_keywords: export selected, igniteui for {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, 選択のエクスポート, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid']
_language: ja
---

# {Platform} Grid Excel から貼り付け

{ProductName} `Grid` は、クリップボードにコピーした Excel データを読み込むことができます。このトピックでは、カスタムコードを使用して実装する方法について説明します。

## {Platform} Excel から貼り付けの例

このサンプルでは、Excel から `Grid` の貼り付けを実装する方法を紹介します。
サンプルは、Excel スプレッドシートを開いて行をコピーし、キーボード (<kbd>Ctrl</kbd> + <kbd>V</kbd>、<kbd>Shift</kbd> + <kbd>Insert</kbd>、<kbd>Command</kbd> + <kbd>V</kbd>) を使用してグリッドに貼り付けます。

上部に2 つのオプションとドロップダウン ボタンがあります。
<ol>
<li>新規行としてデータを貼り付け - このモードでは、Excel からコピーしたデータが新規行としてグリッドに追加されます。</li>
<li>アクティブ セルから開始する貼り付け - このモードではグリッド データが上書きされます。</li>
</ol>

貼り付け後の新しいデータはイタリックで装飾されます。


`sample="/{GridSample}/paste", height="570", alt="{Platform} Excel から貼り付けの例"`



<!-- WebComponents, Blazor, React -->

## 使用方法


最初にグリッドの `rendered` イベントにバインドして、テキスト領域要素を作成して管理します。

```tsx
<IgrGrid autoGenerate="false" data={this.invoicesData} rendered={this.webGridPasteFromExcel} ref={this.gridRef} id="grid" primaryKey="OrderID">
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarExporter exportExcel="true" exportCSV="false">
            </IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
    <IgrColumn field="OrderID" hidden="true"></IgrColumn>
    <IgrColumn field="Salesperson" header="Name" width="200px"></IgrColumn>
    <IgrColumn field="ShipName" header="Ship Name" width="200px"></IgrColumn>
    <IgrColumn field="Country" header="Country" width="200px"></IgrColumn>
    <IgrColumn field="ShipCity" header="Ship City" width="200px"></IgrColumn>
    <IgrColumn field="PostalCode" header="Postal Code" width="200px"> </IgrColumn>
</IgrGrid>
```

```html
<igc-grid auto-generate="false" name="grid" id="grid" primary-key="OrderID">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions >
            <igc-grid-toolbar-exporter export-excel="true" export-csv="false"> </igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
    <igc-column field="OrderID" hidden="true"></igc-column>
    <igc-column field="Salesperson" header="Name" width="200px"></igc-column>
    <igc-column field="ShipName" header="Ship Name" width="200px"></igc-column>
    <igc-column field="Country" header="Country" width="200px"></igc-column>
    <igc-column field="ShipCity" header="Ship City" width="200px"></igc-column>
    <igc-column field="PostalCode" header="Postal Code" width="200px"> </igc-column>
</igc-grid>
```

```ts
public webGridPasteFromExcel() {
    const grid = document.getElementById("grid") as any;
    this.onKeyDown = this.onKeyDown.bind(this);
    grid.addEventListener("keydown", this.onKeyDown);
}
public onKeyDown(eventArgs: any): void {
    const ctrl = eventArgs.ctrlKey;
    const key = eventArgs.keyCode;
    // Ctrl-V || Shift-Ins || Cmd-V
    if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
        this.textArea.focus();
    }
}

private txtArea: any;

public get textArea() {
    if(!this.txtArea) {
            const div = document.createElement("div");
            const divStyle = div.style;
            divStyle.position = "fixed";
            document.body.appendChild(div);
            this.txtArea = document.createElement("textarea");
            const style = this.txtArea.style;
            style.opacity = "0";
            style.height = "0px";
            style.width = "0px";
            style.overflow = "hidden";
            div.appendChild(this.txtArea);

            this.txtArea.addEventListener("paste", (eventArgs: any) => { this.onPaste(eventArgs); });
        }
        return this.txtArea;
    }
```

```razor
<IgbGrid  AutoGenerate="false" Data="InvoicesData" RenderedScript="WebGridPasteFromExcel" @ref="grid" Id="grid" PrimaryKey="OrderID">
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarExporter ExportExcel="true" ExportCSV="false"> </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>

    <IgbColumn Field="OrderID" Hidden="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Name" Width="200px"></IgbColumn>
    <IgbColumn Field="ShipName" Header="Ship Name" Width="200px"></IgbColumn>
    <IgbColumn Field="Country" Header="Country" Width="200px"></IgbColumn>
     <IgbColumn Field="ShipCity" Header="Ship City" Width="200px"></IgbColumn>
    <IgbColumn Field="PostalCode" Header="Postal Code" Width="200px"></IgbColumn>
</IgbGrid>

// In JavaScript
igRegisterScript("WebGridPasteFromExcel", (evtArgs) => {
    const grid = document.getElementById("grid");
    grid.addEventListener("keydown", onWebGridPasteFromExcelKeyDown);
}, false);

function onWebGridPasteFromExcelKeyDown(eventArgs) {
    const ctrl = eventArgs.ctrlKey;
    const key = eventArgs.keyCode;
    // Ctrl-V || Shift-Ins || Cmd-V
    if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
        textArea.focus();
    }
}

var txtArea;
var textArea = getTextArea();
function getTextArea() {
    if(!txtArea) {
        const div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "fixed";
        document.body.appendChild(div);
        txtArea = document.createElement("textarea");
        const style = txtArea.style;
        style.opacity = "0";
        style.height = "0px";
        style.width = "0px";
        style.overflow = "hidden";
        div.appendChild(txtArea);

        txtArea.addEventListener("paste", (eventArgs) => { onPaste(eventArgs); });
    }
    return txtArea;
}

```

このコードはクリップボードから貼り付けられたデータを受け取るための DOM textarea 要素を作成します。コードは textarea に貼り付けられたデータが配列に解析します。

```ts
public onPaste(eventArgs: any) {
    let data;
    const clData: any = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]  as any) {
        (window.event as any).returnValue = false;
            data = (window[clData]  as any).getData("text");
        } else {
            data = eventArgs[clData].getData("text/plain");
        }

        // process the clipboard data
    const processedData = this.processData(data);
    if (this.pasteMode === "Paste data as new records") {
        this.addRecords(processedData);
    } else {
        this.updateRecords(processedData);
    }
}

public processData(data: any) {
    const pasteData = data.split("\n");
    for (let i = 0; i < pasteData.length; i++) {
        pasteData[i] = pasteData[i].split("\t");
        // Check if last row is a dummy row
        if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
            pasteData.pop();
        }
        // remove empty data
        if (pasteData.length === 1 &&
            pasteData[0].length === 1 &&
            (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
            pasteData.pop();
        }
    }
    return pasteData;
}
```

```razor
function onPaste(eventArgs) {
    let data;
    const clData = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]) {
        window.event.returnValue = false;
        data = window[clData].getData("text");
    } else {
        data = eventArgs[clData].getData("text/plain");
    }

    // process the clipboard data
    const processedData = processData(data);
        if (pasteMode === "Paste data as new records") {
            addRecords(processedData);
        } else {
            updateRecords(processedData);
        }
}
function processData(data) {
    const pasteData = data.split("\n");
    for (let i = 0; i < pasteData.length; i++) {
        pasteData[i] = pasteData[i].split("\t");
        // Check if last row is a dummy row
        if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
            pasteData.pop();
        }
        // remove empty data
        if (pasteData.length === 1 &&
            pasteData[0].length === 1 &&
            (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
                pasteData.pop();
        }
    }
    return pasteData;
}
```

貼り付けたデータは、新しいレコードとして追加したり、ユーザーの選択に基づいて既存のレコードを更新するために使用したりすることができます。addRecords と updateRecords メソッドを参照してください。

```ts
public addRecords(processedData: any[]) {
    const grid = this.grid as any;
    const columns = grid.visibleColumns;
    const pk = grid.primaryKey;
    const addedData: any[] = [];
    for (const curentDataRow of processedData) {
        const rowData = {} as any;
        for (const col of columns) {
            const index = columns.indexOf(col);
            rowData[col.field] = curentDataRow[index];
        }
        // generate PK
        rowData[pk] = grid.data.length + 1;
        grid.addRow(rowData);
        addedData.push(rowData);
    }
    // scroll to last added row
    grid.navigateTo(grid.data.length - 1, 0, () => {
        this.clearStyles();
        for (const data of addedData) {
            const row = grid.getRowByKey(data[pk]);
            if (row) {
                const rowNative = this.getNative(row) as any;
                if (rowNative) {
                rowNative.style["font-style"] = "italic";
                rowNative.style.color = "gray";
                }
            }
        }
    });
}

public updateRecords(processedData: any[]) {
    const grid = this.grid as any;
    const cell = grid.selectedCells[0];
    const pk = grid.primaryKey;
    if (!cell) { return; }
    const rowIndex = cell.row.index;
    const columns = grid.visibleColumns;
    const cellIndex = grid.visibleColumns.indexOf(cell.column);
    let index = 0;
    const updatedRecsPK: any[] = [];
    for (const curentDataRow of processedData) {
        const rowData = {} as any;
        const dataRec = grid.data[rowIndex + index];
        const rowPkValue = dataRec ? dataRec[pk] : grid.data.length + 1;
        rowData[pk] = rowPkValue;
        for (let j = 0; j < columns.length; j++) {
            let currentCell;
            if (j >= cellIndex) {
                currentCell = curentDataRow.shift();
            }
            const colKey = columns[j].field;
            rowData[colKey] = currentCell || (dataRec ? dataRec[colKey] : null);
        }
        if (!dataRec) {
            // no rec to update, add instead
            rowData[pk] = rowPkValue;
            grid.addRow(rowData);
            continue;
        }
        grid.updateRow(rowData, rowPkValue);
        updatedRecsPK.push(rowPkValue);
        index++;
    }

    this.clearStyles();
    for (const pkVal of updatedRecsPK) {
        const row = grid.getRowByKey(pkVal);
        if (row) {
            const rowNative = this.getNative(row) as any;
            if (rowNative) {
                rowNative.style["font-style"] = "italic";
                rowNative.style.color = "gray";
            }
        }
    }
}
```

```razor
function addRecords(processedData) {
    const grid = document.getElementById("grid");
    const columns = grid.visibleColumns;
    const pk = grid.primaryKey;
    const addedData = [];
    for (const curentDataRow of processedData) {
        const rowData = {};
        for (const col of columns) {
            const index = columns.indexOf(col);
            rowData[col.field] = curentDataRow[index];
        }
        // generate PK
        rowData[pk] = grid.data.length + 1;
        grid.addRow(rowData);
        addedData.push(rowData);
    }
    // scroll to last added row
    grid.navigateTo(grid.data.length - 1, 0, () => {
        clearStyles();
        for (const data of addedData) {
            const row = grid.getRowByKey(data[pk]);
            if (row) {
                const rowNative = getNative(row);
                if (rowNative) {
                    rowNative.style["font-style"] = "italic";
                    rowNative.style.color = "gray";
                }
            }
    }
    });
}

function updateRecords(processedData) {
    const grid = document.getElementById("grid");
    const cell = grid.selectedCells[0];
    const pk = grid.primaryKey;
    if (!cell) { return; }
    const rowIndex = cell.row.index;
    const columns = grid.visibleColumns;
    const cellIndex = grid.visibleColumns.indexOf(cell.column);
    let index = 0;
    const updatedRecsPK = [];
    for (const curentDataRow of processedData) {
        const rowData = {};
        const dataRec = grid.data[rowIndex + index];
        const rowPkValue = dataRec ? dataRec[pk] : grid.data.length + 1;
        rowData[pk] = rowPkValue;
        for (let j = 0; j < columns.length; j++) {
            let currentCell;
            if (j >= cellIndex) {
                currentCell = curentDataRow.shift();
            }
            const colKey = columns[j].field;
            rowData[colKey] = currentCell || (dataRec ? dataRec[colKey] : null);
        }
        if (!dataRec) {
            // no rec to update, add instead
            rowData[pk] = rowPkValue;
            grid.addRow(rowData);
            continue;
        }
        grid.updateRow(rowData, rowPkValue);
        updatedRecsPK.push(rowPkValue);
        index++;
    }
```

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

## 使用方法

`paste-handler` ディレクティブ (次のセクションにコードがあります) を `Grid` に追加して `onDataProcessed` イベントを処理する必要があります。`onDataProcessed` イベントに配列フォームの Excel データへアクセスを与えるパラメーターがあります。詳細については、`addRecords` と `updateRecords` メソッドを参照してください。

```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'505px'" [autoGenerate]="false" paste-handler (onDataProcessed)="dataPasted($event)" [primaryKey]="'ID'">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
    <igx-column [field]="'Phone'"></igx-column>
    <igx-column [field]="'Country'"></igx-column>
</igx-grid>
```

```typescript
    public dataPasted(processedData) {
        if (this.pasteMode === "Paste data as new records") {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        const addedData = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] = this.grid1.data.length + 1;
            this.grid1.addRow(rowData);
            addedData.push(rowData);
            this.grid1.cdr.detectChanges();
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.scrollTo(this.grid1.data.length);

        this.grid1.verticalScrollContainer.chunkLoad.pipe(take(1)).subscribe(() => {
            this.clearStyles();
            for (const data of addedData) {
                const row = this.grid1.getRowByKey(data[pk]);
                if (row) {
                    row.nativeElement.style["font-style"] = "italic";
                    row.nativeElement.style.color = "gray";
                }
            }
        });
    }
    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) { return; }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.data[pk];
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec ? dataRec[pk] : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] = currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }

        this.clearStyles();
        for (const pkVal of updatedRecsPK) {
            const row = this.grid1.getRowByKey(pkVal);
            if (row) {
            row.nativeElement.style["font-style"] = "italic";
            row.nativeElement.style.color = "gray";
            }
        }
    }

    protected clearStyles() {
        for (const row of this.grid1.rowList.toArray()) {
            row.nativeElement.style["font-style"] = "";
            row.nativeElement.style.color = "";
        }
    }
```

## Paste Handler (貼り付けハンドラー) ディレクディブ

`paste-handler` の実装です。クリップボードから張り付けたデータを受け取るために使用される DOM `textarea` 要素をコードで作成します。データを `textarea` に張り付ける際にディレクティブはそれを配列へ解析し、解析データを渡すカスタム イベント `onDataProcessed` を発生します。

```typescript
import { Directive, EventEmitter, HostListener, Output} from "@{Platform}/core";

@Directive({ selector: "[paste-handler]" })
export class PasteHandler {
    public textArea;

    @Output()
    public onDataProcessed = new EventEmitter<any>();

    public ngOnInit(): void {
        const div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "fixed";
        document.body.appendChild(div);
        this.textArea = document.createElement("textarea");
        const style = this.textArea.style;
        style.opacity = "0";
        style.height = "0px";
        style.width = "0px";
        style.overflow = "hidden";
        div.appendChild(this.textArea);

        this.textArea.addEventListener("paste", (eventArgs) => { this.onPaste(eventArgs); });
    }

    @HostListener("focusin", ["$event"])
    public focusIn(eventArgs) {
    }

    @HostListener("keydown", ["$event"])
    public ControlV(eventArgs) {
        const ctrl = eventArgs.ctrlKey;
        const key = eventArgs.keyCode;
        // Ctrl-V || Shift-Ins || Cmd-V
        if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
            this.textArea.focus();
        }
    }

    public onPaste(eventArgs) {
    let data;
    const clData = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]) {
        window.event.returnValue = false;
        data = window[clData].getData("text");
    } else {
        data = eventArgs[clData].getData("text/plain");
    }

    // process the clipboard data
    const processedData = this.processData(data);

    this.onDataProcessed.emit(processedData);
    }

    public processData(data) {
        const pasteData = data.split("\n");
        for (let i = 0; i < pasteData.length; i++) {
            pasteData[i] = pasteData[i].split("\t");
            // Check if last row is a dummy row
            if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
                pasteData.pop();
            }
            // remove empty data
            if (pasteData.length === 1 &&
                 pasteData[0].length === 1 &&
                  (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
                    pasteData.pop();
            }
        }
        return pasteData;
    }
}
```

<!-- end:Angular -->

## API リファレンス
* `Grid`

## その他のリソース

* [Excel エクスポーター](export-excel.md) - Excel エクスポーター サービスを使用して、グリッドから Excel にデータをエクスポートします。選択したデータのみをグリッドからエクスポートするオプションもあります。エクスポート機能は、ExcelExporterService クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式はフィルタリングやソートなどの機能が使用でき、ExcelExporterService の export メソッドを呼び出して最初の引数として グリッド コンポーネントを渡します。

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})