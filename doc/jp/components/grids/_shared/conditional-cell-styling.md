---
title: {Platform} {ComponentTitle} 条件付きセルのスタイル設定 - {ProductName} 
_description: ユーザーが異なるセルをすばやく識別できるようにします。さまざまなセルのスタイル設定を定義します。{Platform} {ComponentTitle} の条件付きセル スタイル設定を使用してセルを目立たせます。
_keywords: conditional styling, {Platform}, {ProductName}, Infragistics, 条件付きスタイル設定, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridConditionalCellStyling}
_language: ja
---

# {Platform} {ComponentTitle} の条件付きセルのスタイル設定

{Platform} {ComponentTitle} の {ProductName} コンポーネントを使用すると、行またはセル レベルでカスタム スタイルを設定できます。`{ComponentName}` 条件付きセルのスタイル設定機能は、特定の基準を満たすデータを視覚的に強調またはハイライト表示するために使用され、ユーザーがグリッド内の重要な情報や傾向を簡単に識別できるようにします。

## {ComponentTitle} 条件付き行のスタイル設定

{ProductName} の `{ComponentName}` コンポーネントは、カスタム ルールに基づいて**行の条件付きスタイル設定**を作成する次の 2 つの方法を提供します:

- `{ComponentName}` コンポーネントで `RowClasses` 入力を設定する方法。
- `{ComponentName}` コンポーネントで `RowStyles` 入力を設定する方法。

さらにこのトピックでは、両方について詳しく説明します。

### RowClasses の使用

`{ComponentName}` 行の条件付きスタイル設定は、`RowClasses` 入力を設定してカスタム条件を定義するころによりスタイル設定できます。

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowClassesScript="RowClassesHandler" @ref="grid">
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" height="600px" width="100%">
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as {ComponentName};
    grid.rowClasses = this.rowClasses;
}
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} id="grid" height="600px" width="100%" rowClasses={rowClasses}>
</{ComponentSelector}>
```

`RowClasses` 入力は、キーと値のペアを含むオブジェクト リテラルを受け取ります。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。

<!-- Angular -->
```typescript
public rowClasses = {
    activeRow: this.activeRowCondition
};

public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
```

```scss
// sample.component.scss

::ng-deep {
 .activeRow {
    border: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
 }
}
```
<!-- end: Angular -->


```razor
igRegisterScript("RowClassesHandler", () => {
    return {
        activeRow: (row) => row.index === 0
    };
}, true);
```
<!-- WebComponents -->
```ts
public rowClasses = {
    activeRow: (row: IgcRowType) => row.index === 0
}
```
<!-- end: WebComponents -->

```tsx
const rowClasses = {
    activeRow: (row: IgrRowType) => row.index === 0
}
```

```css
.activeRow {
    border: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
```

<!-- Angular -->
**::ng-deep** または **ViewEncapsulation.None** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。
<!-- end: Angular -->

### デモ

`sample="/{ComponentSample}/row-classes", height="600", alt="{Platform} {ComponentTitle} row classes"`


### RowStyles の使用

`{ComponentName}` コントロールは、データ行の条件付きスタイル設定を可能にする `RowStyles` プロパティを公開します。`RowClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイル設定 (条件なし) を適用することもできます。

> `RowStyles` と `RowClasses` の両方のコールバック署名は以下のとおりです。

<!-- Angular -->
```ts
(row: RowType) => boolean
```
<!-- end: Angular -->

<!-- WebComponents -->
```ts
(row: IgcRowType) => boolean
```
<!-- end: WebComponents -->

```tsx
(row: IgrRowType) => boolean
```

```razor
(row) => boolean
```

次にスタイルを定義します。

<!-- ComponentStart: Grid -->

```typescript
public rowStyles = {
    'background': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
    'border': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```tsx
const rowStyles = {
    'background': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
    'border': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```razor
igRegisterScript("WebGridRowStylesHandler", () => {
    return {
        'background': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };
}, true);
```

```html
<igx-grid #grid1 [data]="data | async" [height]="'500px'" width="100%"
        [autoGenerate]="false" [allowFiltering]="true" [rowStyles]="rowStyles">
</igx-grid>
```

```razor
<IgbGrid AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowStylesScript="WebGridRowStylesHandler" @ref="grid">
</IgbGrid>
```

```tsx
<IgrGrid id="grid" height="600px" width="100%" rowStyles={rowStyles}>
<IgrGrid>
```

```html
<igc-grid id="grid1" height="500px" width="100%"
        auto-generate="false" allow-filtering="true">
</igc-grid>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    grid1.rowStyles = this.rowStyles;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```typescript
public background = (row: RowType) => row.data.data['Title'] === 'CEO' ? '#6c757d' :
    row.data.data['Title'].includes('President') ? '#adb5bd' : row.data.data['Title'].includes('Director') ?  '#ced4da' :
    row.data.data['Title'].includes('Manager') ? '#dee2e6' :
    row.data.data['Title'].includes('Lead') ? '#e9ecef' :
    row.data.data['Title'].includes('Senior') ? '#f8f9fa' : null;

public rowStyles = {
    background: this.background,
    'border-left': (row: RowType) => row.data.data['Title'] === 'CEO' || row.data.data['Title'].includes('President') ?
        '2px solid' : null,
    'border-color': (row: RowType) => row.data.data['Title'] === 'CEO' ? '#495057' : null,
    color: (row: RowType) => row.data.data['Title'] === 'CEO' ? '#fff' : null
};
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
public rowStyles = {
    'background': (row: IgcRowType) => row.data['Title'] === 'CEO' ? '#6c757d' :
        row.data['Title'].includes('President') ? '#adb5bd' :
        row.data['Title'].includes('Director') ? '#ced4da' :
        row.data['Title'].includes('Manager') ? '#dee2e6' :
        row.data['Title'].includes('Lead') ? '#e9ecef' :
        row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
    'border-left': (row: IgcRowType) => row.data.data['Title'] === 'CEO' || row.data.data['Title'].includes('President') ?
        '2px solid' : null,
    'border-color': (row: IgcRowType) => row.data.data['Title'] === 'CEO' ? '#495057' : null,
    color: (row: IgcRowType) => row.data.data['Title'] === 'CEO' ? '#fff' : null
};
```
<!-- end: WebComponents -->

```razor
igRegisterScript("WebTreeGridRowStylesHandler", () => {
    return {
        'background': (row) => row.data['Title'] === 'CEO' ? '#6c757d' :
            row.data['Title'].includes('President') ? '#adb5bd' :
            row.data['Title'].includes('Director') ? '#ced4da' :
            row.data['Title'].includes('Manager') ? '#dee2e6' :
            row.data['Title'].includes('Lead') ? '#e9ecef' :
            row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
        'border-left': (row) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ? '2px solid' : null,
        'border-color': (row) => row.data['Title'] === 'CEO' ? '#495057' : null,
        'color': (row) => row.data['Title'] === 'CEO' ? '#fff' : null
    };
}, true);
```

```tsx
const rowStyles = {
    'background': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#6c757d' :
        row.data['Title'].includes('President') ?'#adb5bd' :
        row.data['Title'].includes('Director') ? '#ced4da' :
        row.data['Title'].includes('Manager') ? '#dee2e6' :
        row.data['Title'].includes('Lead') ? '#e9ecef' :
        row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
    'border-left': (row: IgrRowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ? '2px solid' : null,
    'border-color': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
    'color': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#fff' : null
};
```

<!-- Angular -->
```html
<!-- sample.component.html -->
<igx-tree-grid #treeGrid [data]="data" [moving]="true" primaryKey="ID" foreignKey="ParentID"
        width="100%" height="550px" [rowStyles]="rowStyles">
</igx-tree-grid>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-tree-grid id="treeGrid" moving="true" primary-key="ID" foreign-key="ParentID"
        width="100%" height="550px">
</igc-tree-grid>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    treeGrid.rowStyles = this.rowStyles;
}
```
<!-- end: WebComponents -->

```razor
<IgbTreeGrid AutoGenerate="true" PrimaryKey="ID" ForeignKey="ParentID" Data="Data" RowStylesScript="WebTreeGridRowStylesHandler">
</IgbTreeGrid>
```

```tsx
<IgrTreeGrid autoGenerate="true" primaryKey="ID" foreignKey="ParentID" data={data} rowStyles={rowStyles}>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->
```typescript
public rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
};

public childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
};
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
const rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
};

const childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
};
```
<!-- end: React -->

```razor
igRegisterScript("WebGridRowStylesHandler", () => {
    return {
        background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
        'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
    };
}, true);

igRegisterScript("WebGridChildRowStylesHandler", () => {
    return {
        'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
    };
}, true);
```

```html
<igx-hierarchical-grid  #hierarchicalGrid [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [rowStyles]="childRowStyles">
        </igx-row-island>
</igx-hierarchical-grid>
```

```razor
<IgbHierarchicalGrid AutoGenerate="true" RowStylesScript="WebGridRowStylesHandler"
        Height="580px" Width="100%">
        <IgbRowIsland ChildDataKey="Albums" AutoGenerate="true" RowStylesScript="WebGridChildRowStylesHandler">
        </IgbRowIsland>
</IgbHierarchicalGrid>
```

```html
<igc-hierarchical-grid id="hierarchicalGrid" auto-generate="true"
        height="580px" width="100%">
        <igc-row-island id="rowIsland1" child-data-key="Albums" auto-generate="true" >
        </igc-row-island>>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    var rowIsland1 = this.rowIsland1 = document.getElementById('rowIsland1') as IgcRowIslandComponent;
    hierarchicalGrid.rowStyles = this.rowStyles;
    rowIsland1.rowStyles = this.childRowStyles;
}
```

```tsx
<IgrHierarchicalGrid autoGenerate={true} rowStyles={rowStyles}
        height="580px" width="100%">
        <IgrRowIsland childDataKey="Albums" autoGenerate={true} rowStyles={childRowStyles}>
        </IgrRowIsland>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->


### デモ

`sample="/{ComponentSample}/row-styles", height="620", alt="{Platform} {ComponentTitle} 行のスタイル設定"`


## {ComponentTitle} 条件付きセルのスタイル設定

## 概要

{ProductName} の `{ComponentName}` コンポーネントは、カスタム ルールに基づいて**セルの条件付きスタイル設定**を作成する次の 2 つの方法を提供します:

- `Column` 入力 `CellClasses` をキーと値のペアを含むオブジェクト リテラルに設定します。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。その結果、セルのマテリアル スタイル設定が簡単にできます。

### CellClasses の使用
`Column` `CellClasses` 入力を設定してカスタム条件を定義することにより、`{ComponentName}` の条件付きセルのスタイルを設定できます。

<!-- ComponentStart: Grid -->

```html
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```

```html
<igc-column id="beatsPerMin" field="BeatsPerMinute" data-type="Number"></igc-column>
```
```ts
constructor() {
    var beatsPerMin = this.beatsPerMin = document.getElementById('beatsPerMin') as IgcColumnComponent;
    beatsPerMin.cellClasses = this.beatsPerMinuteClasses;
}
```

```razor
<IgbColumn Field="BeatsPerMinute" CellClassesScript="CellClassesHandler">
```

```tsx
<IgrColumn field="BeatsPerMinute" dataType="number" cellClasses={beatsPerMinuteClasses}></IgrColumn>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-column id="grammyNominations" field="GrammyNominations" data-type="Number"></igc-column>
```
```ts
constructor() {
    var grammyNominations = document.getElementById('grammyNominations') as IgcColumnComponent;
    grammyNominations.cellClasses = this.grammyNominationsCellClassesHandler;
}
```

```razor
<IgbColumn Field="BeatsPerMinute" CellClassesScript="GrammyNominationsCellClassesHandler">
```

```tsx
<IgrColumn field="BeatsPerMinute" dataType="number" cellClasses={grammyNominationsCellClassesHandler}></IgrColumn>
```
<!-- ComponentEnd: HierarchicalGrid -->


<!-- ComponentStart: TreeGrid -->

<!-- Angular -->
```html
<igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [cellClasses] = "priceClasses">
    <ng-template igxCell let-cell="cell" let-val>
        <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
        <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
    </ng-template>
</igx-column>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-column id="unitPrice" field="UnitPrice" header="Unit Price" data-type="currency"></igc-column>
```
```ts
constructor() {
    var unitPrice = this.UnitPrice = document.getElementById('unitPrice') as IgcColumnComponent;
    unitPrice.cellClasses = this.unitPriceCellClasses;
}
```
<!-- end: WebComponents -->

```razor
<IgbColumn Field="UnitPrice" Header="Unit Price" DataType="GridColumnDataType.Currency" CellClassesScript="UnitPriceCellClassesHandler">
</IgbColumn>
```

```tsx
<IgrColumn field="UnitPrice" header="Unit Price" dataType="currency" cellClasses={unitPriceCellClasses}>
</IgrColumn>
```

<!-- ComponentEnd: TreeGrid -->


`CellClasses` 入力は、キーと値のペアを含むオブジェクト リテラルを受け取ります。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。

<!-- ComponentStart: Grid -->
<!-- Angular, WebComponents -->
```typescript

private upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
```
<!-- end: Angular, WebComponents -->

```tsx
const upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

const downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

const beatsPerMinuteClasses = {
    downFont: downFontCondition,
    upFont: upFontCondition
};
```

```razor
igRegisterScript("CellClassesHandler", () => {
    return {
        downFont: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] <= 95,
        upFont: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] > 95
    };
}, true);
```

<!-- Angular -->
```scss
// sample.component.scss

::ng-deep {
    .upFont {
        color: green;
    }

    .downFont {
        color: red;
    }
}
```
<!-- end: Angular -->

```css
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular, WebComponents -->
```typescript
public grammyNominationsCellClassesHandler = {
    downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5,
    upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] >= 6
};
```
<!-- end: Angular, WebComponents -->

```tsx
const grammyNominationsCellClassesHandler = {
    downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5,
    upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] >= 6
};
```

```razor
igRegisterScript("GrammyNominationsCellClassesHandler", () => {
    return {
        downFont: (rowData, columnKey) => rowData[columnKey] < 5,
        upFont: (rowData, columnKey) => rowData[columnKey] >= 6
    };
}, true);
```
```css
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
```
<!-- ComponentEnd: HierarchicalGrid -->


<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```typescript
private downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 5;
}

private upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 5;
}

public unitPriceCellClasses = {
    downPrice: this.downPriceCondition,
    upPrice: this.upPriceCondition
};
```
<!-- end: WebComponents -->

```razor
igRegisterScript("UnitPriceCellClassesHandler", () => {
    return {
        downPrice: (rowData, columnKey) => rowData[columnKey] <= 5,
        upPrice: (rowData, columnKey) => rowData[columnKey] > 5,
    };
}, true);
```

```tsx
const upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 5;
}

const downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 5;
}

const unitPriceCellClasses = {
    downPrice: downPriceCondition,
    upPrice: upPriceCondition
};
```

<!-- Angular -->
```scss
::ng-deep {
    .upPrice {
        color: red;
    }

    .downPrice {
        color: green;
    }
}
```
<!-- end: Angular -->

```css
.upPrice {
    color: red !important;
}

.downPrice {
    color: green !important;
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- Angular -->
**::ng-deep** または **ViewEncapsulation.None** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。
<!-- end: Angular -->

### デモ

`sample="/{ComponentSample}/conditional-cell-style-1", height="600", alt="{Platform} {ComponentTitle} conditional cell style 1"`


- `Column` 入力を使用して、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取る `CellStyles`。

> `cellStyles` と `cellClasses` の両方のコールバック シグネチャが次のように変更されました。

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

```razor
(rowData, columnKey, cellValue, rowIndex) => boolean
```

### CellStyles の使用

列の `CellStyles` プロパティを公開。列セルの条件付きスタイリングが可能になりました。`CellClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイリングを簡単に適用できます (条件なし)。


次にスタイルを定義します。


<!-- Angular -->

```typescript
public oddColStyles = {
    background: 'linear-gradient(to right, #b993d6, #8ca6db)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
    animation: '0.75s popin'
};

public evenColStyles = {
    background: 'linear-gradient(to right, #8ca6db, #b993d6)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
    animation: '0.75s popin'
};
```

<!-- end:Angular -->

<!-- ComponentStart: Grid -->
```razor
igRegisterScript("WebGridCellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "Position") {
                switch (cellValue) {
                    case "up": return "#28a745";
                    case "down": return "#dc3545";
                    case "current": return "#17a2b8"
                }
            }
        }
    };
}, true);
```

<!-- WebComponents -->
```ts
public webGridCellStylesHandler = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Position") {
            switch (cellValue) {
                case "up": return "#28a745";
                case "down": return "#dc3545";
                case "current": return "#17a2b8"
            }
        }
    }
}
```
<!-- end:WebComponents -->

```tsx
const webGridCellStyles = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Position") {
            switch (cellValue) {
                case "up": return "#28a745";
                case "down": return "#dc3545";
                case "current": return "#17a2b8"
            }
        }
    }
}
```

<!-- Angular -->
`ngOnInit` で、`{ComponentName}` 列を動的に作成するために使用される事前定義 `Columns` コレクションの各列に `CellStyles` 構成を追加します。

```ts
public ngOnInit() {
    this.data = athletesData;
    this.columns = [
        { field: 'Id' },
        { field: 'Position' },
        { field: 'Name' },
        { field: 'AthleteNumber' },
        { field: 'CountryName' }
    ];

    this.applyCSS();
}

public applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });
}

public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();
}
```

```html
<igx-grid
    #grid1 [data]="data"
    primaryKey="ID"
    width="80%"
    height="300px">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.field"
        [cellStyles]="c.cellStyles">
    </igx-column>
</igx-grid>
```

`popin` アニメーションの定義:

```scss
// component.scss
@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }
}
```
<!-- end: Angular -->


```razor
<IgbColumn CellStylesScript="WebGridCellStylesHandler">
</IgbColumn>
```
<!-- WebComponents -->
```html
<igc-column id="col1">
</igc-column>
```

```ts
constructor() {
    var col1 = document.getElementById('col1') as IgcColumnComponent;
    col1.cellStyles = this.webGridCellStylesHandler;
}
```
<!-- end:WebComponents -->

```tsx
<IgrColumn cellStyles={webGridCellStyles}></IgrColumn>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```ts
public webTreeGridCellStylesHandler = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "UnitPrice") {
            if (cellValue > 10) return "#dc3545";
            if (cellValue < 5) return "#28a745";
            if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
        }
    }
}
```
```html
<igc-column id="col1">
</igc-column>
```
```ts
constructor() {
    var col1 = document.getElementById('col1') as IgcColumnComponent;
    col1.cellStyles = this.webTreeGridCellStylesHandler;
}
```
<!-- end: WebComponents -->

```razor
igRegisterScript("WebTreeGridCellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "UnitPrice") {
                if (cellValue > 10) return "#dc3545";
                if (cellValue < 5) return "#28a745";
                if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
            }
        }
    };
}, true);
```
```razor
<IgbColumn CellStylesScript="WebTreeGridCellStylesHandler">
</IgbColumn>
```

```tsx
const webTreeGridCellStyles = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "UnitPrice") {
            if (cellValue > 10) return "#dc3545";
            if (cellValue < 5) return "#28a745";
            if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
        }
    }
}
```
```tsx
<IgrColumn cellStyles={webTreeGridCellStyles}></IgrColumn>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```razor
igRegisterScript("CellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "Debut") {
                return cellValue > 2000 ? "#28a745" : "#dc3545";
            }
            return undefined;
        }
    };
}, true);
```

<!-- WebComponents -->
```ts
public cellStylesHandler = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Debut") {
            return cellValue > 2000 ? "#28a745" : "#dc3545";
        }
        return undefined;
    }
}
```
<!-- end:WebComponents -->

```tsx
const cellStylesHandler = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Debut") {
            return cellValue > 2000 ? "#28a745" : "#dc3545";
        }
        return undefined;
    }
}
```

<!-- Angular -->
`ngOnInit` で、`{ComponentName}` 列を動的に作成するために使用される事前定義 `Columns` コレクションの各列に `CellStyles` 構成を追加します。

```ts
public ngOnInit() {
    this.data = athletesData;
    this.columns = [
        { field: 'Id' },
        { field: 'Position' },
        { field: 'Name' },
        { field: 'AthleteNumber' },
        { field: 'CountryName' }
    ];

    this.applyCSS();
}

public applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });
}

public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();
}
```

```html
<igx-grid
    #grid1 [data]="data"
    primaryKey="ID"
    width="80%"
    height="300px">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.field"
        [cellStyles]="c.cellStyles">
    </igx-column>
</igx-grid>
```

`popin` アニメーションの定義:

```scss
// component.scss
@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }
}
```
<!-- end: Angular -->


```razor
<IgbColumn CellStylesScript="CellStylesHandler">
</IgbColumn>
```
<!-- WebComponents -->
```html
<igc-column id="col1">
</igc-column>
```

```ts
constructor() {
    var col1 = document.getElementById('col1') as IgcColumnComponent;
    col1.cellStyles = this.cellStylesHandler;
}
```
<!-- end:WebComponents -->

```tsx
<IgrColumn cellStyles={cellStylesHandler}></IgrColumn>
```
<!-- ComponentEnd: HierarchicalGrid -->


### デモ

`sample="/{ComponentSample}/conditional-cell-style-2", height="620", alt="{Platform} {ComponentTitle} 条件付きセルのスタイル 2"`


### 既知の問題と制限

- 他の列に同じ条件でバインドされたセルがある場合に、そのうち 1 つのセルが更新された際に条件が満たされている場合も、他のセルが新しい値に基づいて更新されない問題。

<!-- Angular, WebComponents -->

残りのセルに変更を適用するには、チェックを実行する必要があります。以下の例は、チェックを実行する方法を示します。

```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

public editDone(evt) {
    this.Col1.cellClasses = {...this.backgroundClasses};
}
```

```html
<igx-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column>
</igx-grid>
```

```html
<{ComponentSelector} id="grid1" height="500px" width="100%" >
  <igc-column id="Col1" field="Col1" data-type="number"></igx-column>
  <igc-column id="Col2" field="Col2" data-type="number" editable="true"></igx-column>
  <igc-column id="Col3" field="Col3" header="Col3" data-type="string"></igx-column>
<{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid1') as {ComponentName};
    var Col1 = this.Col1 = document.getElementById('Col1') as IgcColumnComponent;
    var Col2 = this.Col2 = document.getElementById('Col2') as IgcColumnComponent;
    var Col3 = this.Col3 = document.getElementById('Col3') as IgcColumnComponent;
    grid.data = this.data;
    grid.onCellEdit = this.editDone;
    Col1.cellClasses = this.backgroundClasses;
    Col2.cellClasses = this.backgroundClasses;
    Col3.cellClasses = this.backgroundClasses;
}
```

<!-- end:Angular, WebComponents -->

<!--ComponentStart: Grid, HierarchicalGrid, TreeGrid-->
```tsx
const backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

const editDone = (event: IgrGridEditEventArgs) => {
    backgroundClasses = {...backgroundClasses};
}

<{ComponentSelector} id="grid1" height="500px" width="100%" onCellEdit={editDone}>
  <IgrColumn id="Col1" field="Col1" dataType="number" cellClasses={backgroundClasses}></IgrColumn>
  <IgrColumn id="Col2" field="Col2" dataType="number" editable={true} cellClasses={backgroundClasses}></IgrColumn>
  <IgrColumn id="Col3" field="Col3" header="Col3" dataType="string" cellClasses={backgroundClasses}></IgrColumn>
</{ComponentSelector}>
```
<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API リファレンス

* `Column`
* `{ComponentName}`

## その他のリソース

<!-- ComponentStart: Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [編集](editing.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [列の非表示](column-hiding.md)
* [選択](selection.md)
* [検索](search.md)
<!-- * [Toolbar](toolbar.md) -->
* [複数列ヘッダー](multi-column-headers.md)
* [サイズ](size.md)
<!-- ComponentEnd: Grid -->


コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})