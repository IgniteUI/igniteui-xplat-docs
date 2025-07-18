---
title: {Platform} {ComponentTitle} 行の編集 - {ProductName}
_description: {Platform} {ComponentTitle}で行編集を有効にし、CRUD 操作のための強力な API が必要な場合、{ProductName} {ComponentTitle} 行編集コンポーネントをお試しください。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridRowEditing}
_language: ja
---

# {Platform} {ComponentTitle} 行の編集

{Platform} {ComponentTitle} の {ProductName} 行編集機能を使用すると、`{ComponentName}` 内でデータを直接編集できます。データを操作するこの便利な方法に加えて、完全な CRUD 操作のための強力な API があります。行をクリックして **Enter キー**を押すと、グリッド行の編集を実行できます。もう 1 つの簡単な方法は、変更する必要がある行をマウスでダブルクリックすることです。

## {Platform} {ComponentTitle} 行編集の例

以下の手順では、`{ComponentName}` で行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も **[完了]** ボタンを使用して確定するまで行値を更新しません。または **[キャンセル]** ボタンを使用して破棄します。

`sample="/{ComponentSample}/row-editing-options", height="550", alt="{Platform} {ComponentTitle} 行編集の例"`



> [!Note]
> 行が編集モードにある場合、他の行のセルをクリックすると [完了] ボタンが押されたように動作し、前の行の変更をすべての変更をサブミットします。新しくフォーカスされたセルが編集可能な場合、新しい行も編集モードになります。ただし、セルが編集可能でない場合は、前の行のみが編集モードを終了します。

## 行編集の使用

<!-- Angular -->

`{ComponentModule}` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

import { {ComponentModule} } from 'igniteui-{Platform}';

@NgModule({
    imports: [{ComponentModule}],
})
export class AppModule {}
```

<!-- end: Angular -->

次に `{ComponentName}` をバインドしたデータソースで定義し、`RowEditable` を true に設定してバインドします。

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="Reorder Level" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="Units In Stock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" width="100%" height="500px" row-editable="true">
    <igc-column field="ProductID" header="Product ID" editable="false"></igc-column>
    <igc-column field="ReorderLevel" header="Reorder Level" data-type="number"></igc-column>
    <igc-column field="ProductName" header="Product Name" data-type="string"></igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" header="Units In Stock" data-type="number"></igc-column>
    <igc-column field="OrderDate" field="Order Date" data-type="date"></igc-column>
    <igc-column field="Discontinued" data-type="boolean"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid  = document.getElementById('grid') as {ComponentName}Component;
    var unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;
    grid.data = this.data;
    unitsInStock.bodyTemplate = this.unitsInStockCellTemplate;
}

public unitsInStockCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<input name="units" value="${ctx.cell.value}" style="color: black" />`;
}
```
<!-- end: WebComponents -->

```tsx
const unitsInStockCellTemplate = (ctx: IgrCellTemplateContext) => {
    return (
        <>
            <input name="units" value={ctx.cell.value} style={{color: "black"}} />;
        </>
    );
}

<{ComponentSelector} primaryKey="ProductID" width="100%" height="500px" rowEditable={true}>
    <IgrColumn field="ProductID" header="Product ID" editable={false}></IgrColumn>
    <IgrColumn field="ReorderLevel" header="ReorderLever" dataType="number"></IgrColumn>
    <IgrColumn field="ProductName" header="ProductName" dataType="string"></IgrColumn>
    <IgrColumn field="UnitsInStock" header="UnitsInStock" dataType="number" bodyTemplate={unitsInStockCellTemplate}></IgrColumn>
    <IgrColumn field="OrderDate" dataType="date"></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean"></IgrColumn>
</{ComponentSelector}>
```

```razor
 <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate="false"
             Data="northwindEmployees"
             RowEditable="true">
        <IgbColumn Field="ID" Editable="false"></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City"></IgbColumn>
        <IgbColumn Field="CompanyName"></IgbColumn>
        <IgbColumn Field="Fax"></IgbColumn>
        <IgbColumn Field="Address"></IgbColumn>
        <IgbColumn Field="PostalCode"></IgbColumn>
        <IgbColumn Field="Country"></IgbColumn>
        <IgbColumn Field="Phone"></IgbColumn>
    </{ComponentSelector}>

    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;

        }
    }
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="Name" header="Name" [dataType]="'string'"></igx-column>
    <igx-column field="Age" header="Reorder Level" [dataType]="'number'"></igx-column>
    <igx-column field="Title" header="Title" [dataType]="'string'">
    <igx-column field="HireDate" header="Hire Date" [dataType]="'date'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ID" width="100%" height="500px" row-editable="true">
    <igc-column field="Name" header="Name" data-type="string"></igc-column>
    <igc-column field="Age" header="Age" data-type="number"></igc-column>
    <igc-column field="Title" header="Title" data-type="string"></igc-column>
    <igc-column field="HireDate" field="Hire Date" data-type="date"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid  = document.getElementById('grid') as {ComponentName}Component;
    grid.data = this.data;
}
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} primaryKey="ID" width="100%" height="500px" rowEditable={true}>
    <IgrColumn field="Name" header="Name" dataType="string"></IgrColumn>
    <IgrColumn field="Age" header="Age" dataType="number"></IgrColumn>
    <IgrColumn field="Title" header="Title" dataType="string"></IgrColumn>
    <IgrColumn field="HireDate" header="Hire Date" dataType="date"></IgrColumn>
</{ComponentSelector}>
```

```razor
 <{ComponentSelector} Width="100%" Height="100%" PrimaryKey="ID" AutoGenerate="false" Data="data" RowEditable="true">
        <IgbColumn Field="Name" Header="Name" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="Age" Header="Age" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="Title" Header="Title" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date"></IgbColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="Reorder Level" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="Units In Stock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" row-editable="true">
    <igc-column field="Artist" header="Artist" data-type="string"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image" editable="false"> </igc-column>
    <igc-column field="Debut" header="Debut" data-type="number"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number"> </igc-column>
        
    <igc-row-island child-data-key="Albums" auto-generate="false" primary-key="Album" row-editable="true">
        <igc-column field="Album" header="Album" data-type="string"> </igc-column>
        <igc-column field="LaunchDate" header="Launch Date" data-type="date"> </igc-column>
        <igc-column field="BillboardReview" header="Billboard Review" data-type="string"> </igc-column>
        <igc-column field="USBillboard200" header="US Billboard 200" data-type="string"> </igc-column>
        <igc-row-island child-data-key="Songs" auto-generate="false" primary-key="Number" row-editable="true">
            <igc-column field="Number" header="No." data-type="string"> </igc-column>
            <igc-column field="Title" header="Title" data-type="string"> </igc-column>
            <igc-column field="Released" header="Released" data-type="date"> </igc-column>
            <igc-column field="Genre" header="Genre" data-type="string"> </igc-column>
        </igc-row-island>
    </igc-row-island>

    <igc-row-island child-data-key="Tours" auto-generate="false" primary-key="Tour" row-editable="true">
        <igc-column field="Tour" header="Tour" data-type="string"> </igc-column>
        <igc-column field="StartedOn" header="Started on" data-type="string"> </igc-column>
        <igc-column field="Location" header="Location" data-type="string"> </igc-column>
        <igc-column field="Headliner" header="Headliner" data-type="string"> </igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var grid  = document.getElementById('hierarchicalGrid') as {ComponentName}Component;
    grid.data = this.data;
}
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<IgrHierarchicalGrid autoGenerate={false} data={singersData} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" rowEditable={true}>
    <IgrColumn field="Artist" header="Artist" dataType="string" />
    <IgrColumn field="Photo" header="Photo" dataType="image" editable={false} />
    <IgrColumn field="Debut" header="Debut" dataType="number" />
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" />
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" />

    <IgrRowIsland childDataKey="Albums" autoGenerate={false} primaryKey="Album" rowEditable={true}>
        <IgrColumn field="Album" header="Album" dataType="string" />
        <IgrColumn field="LaunchDate" header="Launch Date" dataType="date" />
        <IgrColumn field="BillboardReview" header="Billboard Review" dataType="string" />
        <IgrColumn field="USBillboard200" header="US Billboard 200" dataType="string" />

        <IgrRowIsland childDataKey="Songs" autoGenerate={false} primaryKey="Number" rowEditable={true}>
            <IgrColumn field="Number" header="No." dataType="string" />
            <IgrColumn field="Title" header="Title" dataType="string" />
            <IgrColumn field="Released" header="Released" dataType="date" />
            <IgrColumn field="Genre" header="Genre" dataType="string" />
        </IgrRowIsland>
    </IgrRowIsland>

    <IgrRowIsland childDataKey="Tours" autoGenerate={false} primaryKey="Tour" rowEditable={true}>
        <IgrColumn field="Tour" header="Tour" dataType="string" />
        <IgrColumn field="StartedOn" header="Started on" dataType="string" />
        <IgrColumn field="Location" header="Location" dataType="string" />
        <IgrColumn field="Headliner" header="Headliner" dataType="string" />
    </IgrRowIsland>
</IgrHierarchicalGrid>

```
<!-- end: React -->

<!-- Blazor -->
```razor
<IgbHierarchicalGrid
AutoGenerate="false"
Data="SingersData"
Name="hierarchicalGrid"
@ref="hierarchicalGrid"
Id="hierarchicalGrid"
PrimaryKey="ID"
RowEditable="true">
    <IgbColumn
    Field="Artist"
    Header="Artist"
    DataType="GridColumnDataType.String">
    </IgbColumn>
    <IgbColumn
    Field="Photo"
    Header="Photo"
    DataType="GridColumnDataType.Image"
    Editable="false">
    </IgbColumn>
    <IgbColumn
    Field="Debut"
    Header="Debut"
    DataType="GridColumnDataType.Number">
    </IgbColumn>
    <IgbColumn
    Field="GrammyNominations"
    Header="Grammy Nominations"
    DataType="GridColumnDataType.Number">
    </IgbColumn>
    <IgbColumn
    Field="GrammyAwards"
    Header="Grammy Awards"
    DataType="GridColumnDataType.Number">
    </IgbColumn>
    
    <IgbRowIsland
    ChildDataKey="Albums"
    AutoGenerate="false"
    PrimaryKey="Album"
    RowEditable="true">
        <IgbColumn
        Field="Album"
        Header="Album"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="LaunchDate"
        Header="Launch Date"
        DataType="GridColumnDataType.Date">
        </IgbColumn>
        <IgbColumn
        Field="BillboardReview"
        Header="Billboard Review"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="USBillboard200"
        Header="US Billboard 200"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        
        <IgbRowIsland
        ChildDataKey="Songs"
        AutoGenerate="false"
        PrimaryKey="Number"
        RowEditable="true">
            <IgbColumn
            Field="Number"
            Header="No."
            DataType="GridColumnDataType.String">
            </IgbColumn>
            <IgbColumn
            Field="Title"
            Header="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>
            <IgbColumn
            Field="Released"
            Header="Released"
            DataType="GridColumnDataType.Date">
            </IgbColumn>
            <IgbColumn
            Field="Genre"
            Header="Genre"
            DataType="GridColumnDataType.String">
            </IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>
    
    <IgbRowIsland
    ChildDataKey="Tours"
    AutoGenerate="false"
    PrimaryKey="Tour"
    RowEditable="true">
        <IgbColumn
        Field="Tour"
        Header="Tour"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="StartedOn"
        Header="Started on"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="Location"
        Header="Location"
        DataType="GridColumnDataType.String">
        </IgbColumn>
        <IgbColumn
        Field="Headliner"
        Header="Headliner"
        DataType="GridColumnDataType.String">
        </IgbColumn>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```
<!-- end: Blazor -->
<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> プライマリキーは行編集操作で必須です。

> [!Note]
> 個々の列の編集を有効にする必要はありません。`{ComponentName}` の `RowEditable` プロパティを使用すると、定義された `Field` プロパティを持つすべての行 (主行を除く) が編集可能になります。特定の列の編集を無効にしたい場合は、その列の `Editable` 入力を **false** に設定するだけです。

<!-- Angular -->
```typescript
import { Component, ViewChild } from '@{Platform}/core';
import { data } from './data';
import { {ComponentName} } from 'igniteui-{Platform}';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [app-grid-row-edit.component.css],
    templateUrl: 'app-grid-row-edit.component.html'
})
export class {ComponentName}RowEditSampleComponent {
    @ViewChild('gridRowEdit', { read: {ComponentName} }) public gridRowEdit: {ComponentName};

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
<!-- end: Angular -->


> [!Note]
> `{ComponentName}` は、行の状態が送信されるかキャンセルされるまで保留中のセルの変更を保持する内部プロバイダーである `BaseTransactionService` を利用します。

## 位置

- オーバーレイのデフォルトの位置は編集モードで行の下にあります。

- 行の下にスペースがない場合、オーバーレイが行の上に表示されます。

- 一番上または下に表示されると、オーバーレイは閉じられるまでスクロール時にこの位置を保持します。

## 動作

- 行が編集モードの場合、編集が継続します。同じ行のセルがクリックされたかどうか。

- [完了] ボタンをクリックすると行編集を完了し、変更をデータソースまたはトランザクションへサブミットします。更に行が編集モードを完了します。

- [キャンセル] ボタンがをクリックすると現在の行のすべての変更を元に戻し、行編集モードを終了します。

- 行が編集モードにある場合、他の行のセルをクリックすると現在の行編集を終了し、行の新規の変更をサブミット ([完了] ボタンをクリックした場合と同じ) します。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、`{ComponentName}` は編集モードのままです。`{ComponentName}` をスクロールすると編集行は再度表示されますが編集行が編集モードのままになります。`{ComponentName}` 以外をクリックしたときにセルも編集モードに残ります。

- **ソート**、**フィルタリング**、**検索**、および**非表示**操作を実行すると、現在の行のすべての変更が元に戻され、行の編集モードを終了します。

- **ページング**、**サイズ変更**、**ピン固定**、**移動**操作を実行すると、編集モードを終了して最新の値を送信します。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。`{ComponentName}` がトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


## キーボード ナビゲーション

- <kbd>Enter</kbd> と <kbd>F2</kbd> で行編集モードに入ります

- <kbd>Esc</kbd> で行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません

- <kbd>Tab</kbd> - 行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから [キャンセル] と [完了] ボタンへ移動します。[完了] ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


## 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。ソート、グループの変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様にソートやフィルタリングなどの他の機能が有効になります。

<!-- ComponentStart: Grid -->

- グループ行の展開と縮小は現在の行の編集を終了しません。

<!-- ComponentEnd: Grid -->

## 行編集オーバーレイのカスタマイズ

### テキストのカスタマイズ

テンプレート化を使用した行編集オーバーレイのテキストのカスタマイズが可能です。

`RowChangesCount` プロパティが公開されて変更されたセルのカウントを保持します。

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

```razor
igRegisterScript("RowEditTextTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
   Changes: ${ctx.implicit}
</div>`;
}, false);
```

```ts
public rowEditTextTemplate = (ctx: IgcGridRowEditTextTemplateContext) => {
    return html`Changes: ${ctx.implicit}`;
}
```

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
const rowEditTextTemplate = (ctx: IgrGridRowEditTextTemplateContext) =>{
    return (
        <>
            Changes: {ctx.implicit}
        </>
    );
}
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

### ボタンのカスタマイズ

テンプレート化を使用した行編集オーバーレイのボタンのカスタマイズも可能です。

<!-- Angular -->
キーボード ナビゲーションにボタンを含める場合、各ボタンに `RowEditTabStopDirective` が必要です。
<!-- end:Angular -->

```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
```

```razor
 igRegisterScript("RowEditActionsTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.endRowEdit = ctx.implicit;
    return html`<div>
  	<button @click="(event) => endRowEdit(false, event)">Cancel</button>
	<button @click="(event) => endRowEdit(true, event)">Apply</button>
</div>`;
}, false);
```

```ts
public rowEditActionsTemplate = (ctx: IgcGridRowEditActionsTemplateContext) => {
    const endRowEdit = ctx.implicit;
    return html`
        <button @click="${(event) => endRowEdit(false, event)}">Cancel</button>
        <button @click="${(event) => endRowEdit(true, event)}">Apply</button>
    `;
}
```

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
const rowEditActionsTemplate =(ctx: IgrGridRowEditActionsTemplateContext) => {
    const endRowEdit = ctx.implicit;
    return (
        <>
            <button onClick={(event) => endRowEdit(false, event)}>Cancel</button>
            <button onClick={(event) => endRowEdit(true, event)}>Apply</button>
        </>
    );
}
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- Angular -->

## スタイル設定

[{ProductName} テーマ ライブラリ](themes/index.md)を使用して、行編集オーバーレイを大幅に変更できます。

行編集オーバーレイは複合要素です。UI は、他の 2 つのコンポーネントで構成されています。

    - コンテンツをレンダリングするための [igx-banner](banner.md)
    - [igx-button](button.md) はデフォルトのテンプレートでレンダリングされます (`Done` ボタンと `Cancel` ボタンの場合)。

以下の例では、これら 2 つのコンポーネントのスタイル設定オプション ([ボタン スタイル](button.md#スタイル設定) & [バナー スタイル](../banner.md#スタイル設定)) を使用して、`{ComponentName}` の行編集のエクスペリエンスをカスタマイズします。

次に、現在のセルのエディターと背景をより明確にするためにスタイルを設定します。セル スタイリングの詳細については、[こちら](cell-editing.md#スタイル設定)をご覧ください。

### テーマのインポート

行編集バナーのスタイルを設定する最も簡単な方法は、`app` のグローバル スタイル ファイル (通常 `styles.scss`) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、{ProductName} Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

テーマ ファイルをインポートしたら、カスタム テーマを作成できます。

#### テーマの定義

行編集の背景にカスタムの [banner theme]({environment:sassApiUrl}/index.html#function-banner-theme) を定義して、定義済みのパレットの 1 つである `$purple-palette` を使用することができます。

```scss
    $my-light-gray: #e3e3e3;
    $my-banner-palette: $purple-palette;

    $banner-theme: banner-theme(
        $banner-background: $my-light-gray,
        $banner-message-color: color($my-banner-palette, "secondary", 600)
    );
```

ここでは、色を生成するために `my-banner-palette` を `igx-color` (テーマ ライブラリによって公開) と共に使用しています。

### テーマを含む

次に Sass `@include` ステートメントを使用してテーマを適用します。新しく定義された `$banner-theme` を **igx-banner mixin** で渡します。

```scss
@include banner($banner-theme);
```

これにより、カスタム バナー テーマが行編集オーバーレイに適用されます。ただし、グローバル スタイル ファイルで定義したため、これらのスタイルはアプリケーションの**すべて**のバナーにも適用されます。

### コンポーネント スタイル

行編集オーバーレイは他の多くのコンポーネントのテーマを利用するため、グローバル スタイルでスタイル設定するとアプリケーションの他の部分 (バナー、ボタンなど) に影響を与える可能性があります。回避策としては、バナー テーマのスコープがあります。`{ComponentName}` を含むコンポーネントでスタイル ([theme インポート](#テーマのインポート)を含む) を定義できます。

> [!Note]
>コンポーネントが [Emulated](themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
>ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
// custom.component.scss

:host {
    ::ng-deep {
        @include banner($banner-theme);
    }
}
```

上記の構文で、カスタム バナー テーマはグリッドの行編集オーバーレイに適切に適用されます。

### カスタム テンプレート

行編集オーバーレイをさらにカスタマイズするには、`Done` ボタンと `Cancel` ボタンを別々にスタイル設定できるようにカスタム テンプレートを渡します。

```html
<!-- in component.html -->
<{ComponentSelector}>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</{ComponentSelector}>
```

カスタム ボタンを定義した後は、[button-theme]({environment:sassApiUrl}/index.html#function-button-theme) を使用してスタイルを設定できます。[こちら](../button.md#スタイル設定)で `igx-button` のスタイリングについてさらに学ぶことができます。`Done` と `Cancel` のカスタム テーマを作成できます。

```scss
// custom.component.scss
// ...

$button-theme: button-theme(
  $palette: $purple-palette
);

.custom-buttons {
    @include button($button-theme);
}
```

`@include` ステートメントを `.custom-buttons` でスコープ設定して、`Done` ボタンと `Cancel` ボタンにのみ適用されるようにします。

### デモ

バナーとボタンのスタイルを設定後、[編集モードのセル](cell-editing.md#スタイル設定)のカスタム スタイルも定義します。以下は、すべてのスタイルを組み合わせた結果です。

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-editing-style", height="560", alt="{Platform} {ComponentTitle} 行編集のスタイル設定の例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->

## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming-grid.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-banner-banner-background: #e3e3e3;
    --ig-banner-banner-message-color: #423589;
}
```
<!-- ComponentEnd: TreeGrid -->

### デモ

`sample="/{ComponentSample}/row-editing-style", height="560", alt="{Platform} {ComponentTitle} 行編集のスタイルの例"`


<!-- end: WebComponents, Blazor, React -->

## 既知の問題と制限

- グリッドに `PrimaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合）、データ要求が完了すると、行は次の状態を失います:

* 行の選択
* 行の展開/縮小
* 行の編集
* 行のピン固定

## API リファレンス

* `RowEditable`
* `RowEditEnter`
* `RowEdit`
* `RowEditDone`
* `EndEdit`
* `Field`
* `Editable`
* `PrimaryKey`
* `{ComponentName}`

## その他のリソース

<!-- Angular -->

* [igxGrid で CRUD 操作を構築する](/general/how-to/how-to-perform-crud.md)

* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} トランザクション](batch-editing.md)

<!-- end: Angular -->

<!-- Blazor -->

<!-- ComponentStart: Grid -->
* [{ComponentTitle} 編集](editing.md)
<!-- ComponentEnd: Grid -->

<!-- * [{ComponentTitle} Transactions](batch-editing.md) -->

<!-- end: Blazor -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
