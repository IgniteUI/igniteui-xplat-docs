---
title: {Platform} {ComponentTitle} 列のピン固定 - {ProductName}
_description: アプリの開発時に {ProductName} のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 列ピン固定

{ProductName} の**列ピン固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、`{ComponentName}` での水平スクロール時にロックされた列が常に表示されます。{Platform} {ComponentTitle} には組み込みの列ピン固定 UI があり、`{ComponentName}` のツールバーで列の表示状態を変更できます。その他、カスタム UI を定義し、Column Pinning 機能を介して列のピン固定状態を変更できます。

## {Platform} {ComponentTitle} 列ピン固定の例

以下の例は、1 つまたは複数の列を `{ComponentName}` の左側または右側にピン固定する方法を示しています。

<code-view style="height:510px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-pinning-options"
           alt="{Platform} {ComponentTitle} 列ピン固定の例">
</code-view>

## Column Pinning API

列のピン固定は `Column` の `Pinned` プロパティによって制御されます。デフォルトでピン固定列は `{ComponentName}` の左側に固定して描画され、`{ComponentName}` 本体のピン固定されていない列は水平スクロールされます。

<!-- ComponentStart: Grid -->
```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```

```razor
<IgbGrid Data=data AutoGenerate=false>
    <IgbColumn Field="Name" Pinned=true></IgbColumn>
    <IgbColumn Field="AthleteNumber"></IgbColumn>
    <IgbColumn Field="TrackProgress"></IgbColumn>
</IgbGrid>
```

```html
<igc-grid id="grid1" width="700px" auto-generate="false">
    <igc-column field="Name" pinned="true"></igc-column>
    <igc-column field="AthleteNumber"></igc-column>
    <igc-column field="TrackProgress"></igxc-column>
    <igc-paginator per-page="10">
    </igc-paginator>
</igc-grid>
```
```ts
constructor() {
        var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
        this.initColumns = this.initColumns.bind(this);
        this.selectCell = this.selectCell.bind(this);

        this._bind = () => {
            grid.data = this.data;
            grid.columnInit = this.initColumns;
            grid.selected = this.selectCell;
        }
        this._bind();
    }
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```
```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="false">
    <igc-column field="Name" pinned="true"></igc-column>
    <igc-column field="Title"></igc-column>
    <igc-column field="ID"></igc-column>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid id="hierarchicalGrid" class="hgrid" auto-generate="false"
        height="600px" width="800px" >
    <igc-column field="Artist" width="200px" pinned="true"></igc-column>
    <igc-column field="Debut" width="200px"></igc-column>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

`{ComponentName}` の `PinColumn` または `UnpinColumn` メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。

<!-- ComponentStart: Grid -->
```typescript
this.grid.pinColumn('AthleteNumber');
this.grid.unpinColumn('Name');
```

```razor
@code {
    grid.PinColumn("AthleteNumber", 0);
    grid.UnpinColumn("Name", 0);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
this.hierarchicalGrid.pinColumn('Artist');
this.hierarchicalGrid.unpinColumn('Debut');
```
<!-- ComponentEnd: HierarchicalGrid -->

両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因に列がすでにその状態になっていることがあります。

<!-- Angular, React, WebComponents -->

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、`ColumnPin` イベントでイベント引数の `InsertAtIndex` プロパティを適切な位置インデックスに変更します。

<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPinnedScript` event and providing a JavaScript function for changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Blazor -->

```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" (columnPin)="columnPinning($event)"></{ComponentSelector}>
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```

```razor
<{ComponentSelector} Data=data AutoGenerate=true ColumnPinnedScript="onColumnPin"/>


//In JavaScript
function onColumnPinned(e) {
    if (e.detail.column.field == "Country") {
        e.detail.insertAtIndex = 0;
    }
}

igRegisterScript("onColumnPinned", onColumnPinned, false);
```




## ピン固定の位置

`Pinning` 設定オプションを使用して、列のピン固定の位置を変更できます。列の位置を [Start] または [End] のいずれかに設定できます。
[End] に設定すると、列がピン固定されていない列の後に、グリッドの最後にレンダリングされます。ピン固定されていない列は水平にスクロールできますが、ピン固定された列は右側に固定されます。

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AutoGenerate=true Pinning="pinningConfig"></IgbGrid>
```

<!-- WebComponents -->
```html
<{ComponentSelector} auto-generate="true">
    <igc-pinning-config columns="End">
    </igc-pinning-config>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```

```razor
@code {
    private IgbPinningConfig pinningConfig = new() {
        Columns = ColumnPinningPosition.End
    };
}
```

### デモ

<code-view style="height:510px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-pinning-right-side" >
</code-view>

<!-- Angular -->

## カスタム列ピン固定 UI

カスタム UI を定義し、関連する API を介して列のピン状態を変更できます。

ツールバーの代わりに、エンドユーザーが特定の列のピンの状態を変更するためにクリックできる列ヘッダーにピンアイコンを定義するとします。

これは、カスタムアイコンを使用して列のヘッダーテンプレートを作成することで実行できます。

<!-- ComponentStart: Grid -->
```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
</igx-grid>
```
```html
<igc-grid id="grid1" width="100%" height="500px" auto-generate="false">
        <igc-column id="Name" field="Name" data-type="String" width="250px"></igc-column>
        <igc-column id="Title" field="Title" data-type="String" width="300px"></igc-column>
        <igc-column id="ID" field="ID" data-type="Number" width="200px"></igc-column>
        <igc-column id="HireDate" field="HireDate" header="Hire Date" data-type="Date" width="200px"></igc-column>
        <igc-column id="Age" field="Age" data-type="Number" width="200px"></igc-column>
        <igc-column id="Address" field="Address" data-type="String" width="200px"></igc-column>
        <igc-column id="City" field="City" data-type="String" width="200px"></igc-column>
        <igc-column id="Country" field="Country" data-type="String" width="200px"></igc-column>
        <igc-column id="Fax" field="Fax" data-type="String" width="200px"></igc-column>
        <igc-column id="PostalCode" field="PostalCode" header="Postal Code" data-type="String" width="200px"></igc-column>
        <igc-column id="Phone" field="Phone" data-type="String" width="200px"></igc-column>
</igc-grid>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var Name = this.Name = document.getElementById('Name') as IgcColumnComponent;
    var Title = this.Title = document.getElementById('Title') as IgcColumnComponent;
    var ID = this.ID = document.getElementById('ID') as IgcColumnComponent;
    var HireDate = this.HireDate = document.getElementById('HireDate') as IgcColumnComponent;
    var Age = this.Age = document.getElementById('Age') as IgcColumnComponent;
    var Address = this.Address = document.getElementById('Address') as IgcColumnComponent;
    var City = this.City = document.getElementById('City') as IgcColumnComponent;
    var Country = this.Country = document.getElementById('Country') as IgcColumnComponent;
    var Fax = this.Fax = document.getElementById('Fax') as IgcColumnComponent;
    var PostalCode = this.PostalCode = document.getElementById('PostalCode') as IgcColumnComponent;
    var Phone = this.Phone = document.getElementById('Phone') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        Name.headerTemplate = this.pinHeaderTemplate;
        Title.headerTemplate = this.pinHeaderTemplate;
        ID.headerTemplate = this.pinHeaderTemplate;
        HireDate.headerTemplate = this.pinHeaderTemplate;
        Age.headerTemplate = this.pinHeaderTemplate;
        Address.headerTemplate = this.pinHeaderTemplate;
        City.headerTemplate = this.pinHeaderTemplate;
        Country.headerTemplate = this.pinHeaderTemplate;
        Fax.headerTemplate = this.pinHeaderTemplate;
        PostalCode.headerTemplate = this.pinHeaderTemplate;
        Phone.headerTemplate = this.pinHeaderTemplate;
    }
    this._bind();
}
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" click="${toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>   
    `;
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="false"
    width="100%" height="620px">
    <igc-column id="Name" field="Name" data-type="String" width="250px"></igc-column>
    <igc-column id="Title" field="Title" data-type="String" width="300px"></igc-column>
    <igc-column id="ID" field="ID" data-type="Number" width="200px"></igc-column>
    <igc-column id="HireDate" field="HireDate" header="Hire Date" data-type="Date" width="200px"></igc-column>
    <igc-column id="Age" field="Age" data-type="Number" width="200px"></igc-column>
    <igc-column id="Address" field="Address" data-type="String" width="200px"></igc-column>
    <igc-column id="City" field="City" data-type="String" width="200px"></igc-column>
    <igc-column id="Country" field="Country" data-type="String" width="200px"></igc-column>
    <igc-column id="Fax" field="Fax" data-type="string" width="200px"></igc-column>
    <igc-column id="PostalCode" field="PostalCode" header="Postal Code" data-type="String" width="200px"></igc-column>
    <igc-column id="Phone" field="Phone" data-type="String" width="200px"></igc-column>
</igc-tree-grid>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    var Name = this.Name = document.getElementById('Name') as IgcColumnComponent;
    var Title = this.Title = document.getElementById('Title') as IgcColumnComponent;
    var ID = this.ID = document.getElementById('ID') as IgcColumnComponent;
    var HireDate = this.HireDate = document.getElementById('HireDate') as IgcColumnComponent;
    var Age = this.Age = document.getElementById('Age') as IgcColumnComponent;
    var Address = this.Address = document.getElementById('Address') as IgcColumnComponent;
    var City = this.City = document.getElementById('City') as IgcColumnComponent;
    var Country = this.Country = document.getElementById('Country') as IgcColumnComponent;
    var Fax = this.Fax = document.getElementById('Fax') as IgcColumnComponent;
    var PostalCode = this.PostalCode = document.getElementById('PostalCode') as IgcColumnComponent;
    var Phone = this.Phone = document.getElementById('Phone') as IgcColumnComponent;

    this._bind = () => {
        treeGrid.data = this.data;
        Name.headerTemplate = this.pinHeaderTemplate;
        Title.headerTemplate = this.pinHeaderTemplate;
        ID.headerTemplate = this.pinHeaderTemplate;
        HireDate.headerTemplate = this.pinHeaderTemplate;
        Age.headerTemplate = this.pinHeaderTemplate;
        Address.headerTemplate = this.pinHeaderTemplate;
        City.headerTemplate = this.pinHeaderTemplate;
        Country.headerTemplate = this.pinHeaderTemplate;
        Fax.headerTemplate = this.pinHeaderTemplate;
        PostalCode.headerTemplate = this.pinHeaderTemplate;
        Phone.headerTemplate = this.pinHeaderTemplate;
    }
    this._bind();
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" click="${toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>   
    `;
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
        <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
            <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
            <igx-column field="Quantity" width="150px"></igx-column>
            <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid id="hGrid" class="hierarchicalGrid" auto-generate="false"
    height="500px" width="100%">
    <igc-column id="CompanyName" field="CompanyName" header="Company Name" width="200px" pinned="true"></igx-column>
    <igc-column id="ContactName" field="ContactName" header="Contact Name" width="150px"></igx-column>
    <igc-column id="ContactTitle" field="ContactTitle" header="Contact Title" width="200px"></igx-column>
    <igc-row-island key="Orders" auto-generate="false">
        <igc-column id="OrderDate" field="OrderDate" header="Order Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="RequiredDate" field="RequiredDate" header="Required Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="ShippedDate" field="ShippedDate" header="Shipped Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="ShipVia" field="ShipVia" header="Ship Via" width="150px"></igx-column>
        <igc-row-island key="OrderDetails" auto-generate="false">
            <igc-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
            <igc-column field="Quantity" width="150px"></igx-column>
            <igc-column field="Discount" width="150px"></igx-column>
        </igc-row-island>
    </igxc-row-island>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var hGrid = this.hGrid = document.getElementById('hGrid') as IgcHierarchicalGridComponent;
    var CompanyName = this.CompanyName = document.getElementById('CompanyName') as IgcColumnComponent;
    var ContactName = this.ContactName = document.getElementById('ContactName') as IgcColumnComponent;
    var ContactTitle = this.ContactTitle = document.getElementById('ContactTitle') as IgcColumnComponent;

    var OrderDate = this.OrderDate = document.getElementById('OrderDate') as IgcColumnComponent;
    var RequiredDate = this.RequiredDate = document.getElementById('RequiredDate') as IgcColumnComponent;
    var ShippedDate = this.ShippedDate = document.getElementById('ShippedDate') as IgcColumnComponent;
    var ShipVia = this.ShipVia = document.getElementById('ShipVia') as IgcColumnComponent;


    this._bind = () => {
        hGrid.data = this.data;
        CompanyName.headerTemplate = this.pinHeaderTemplate;
        ContactName.headerTemplate = this.pinHeaderTemplate;
        ContactTitle.headerTemplate = this.pinHeaderTemplate;

        OrderDate.headerTemplate = this.pinHeaderTemplate;
        RequiredDate.headerTemplate = this.pinHeaderTemplate;
        ShippedDate.headerTemplate = this.pinHeaderTemplate;
        ShipVia.headerTemplate = this.pinHeaderTemplate;
    }
    this._bind();
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" click="${toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>   
    `;
}
```
<!-- ComponentEnd: HierarchicalGrid -->

カスタムアイコンをクリックすると、関連する列のピン状態は、列の API メソッドを使用して変更できます。

```typescript
public toggleColumn(col: IgxColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```
```typescript
public toggleColumn(col: IgcColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

### デモ

<code-view style="height:510px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-pinning-options" >
</code-view>

<!-- end: Angular -->

## ピン固定の制限

*   列幅をパーセンテージ (%) で設定した場合にピン固定列があると `{ComponentName}` 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、`{ComponentName}` によって自動的に割り当てる必要があります。

<!-- Angular -->
<!-- ComponentStart: Grid -->

## スタイル設定

{ComponentName} を使用すると、[{ProductName} テーマ ライブラリ](../themes/sass/component-themes.md)を介してスタイルを設定できます。[テーマ]({environment:sassApiUrl}/index.html#function-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下の手順では、グリッドのピン固定スタイルをカスタマイズする手順を実行しています。

### グローバル テーマのインポート
グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### カスタム テーマの定義
次に、[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張し、必要に応じてピン固定をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-theme: grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```

### カスタム カラー パレットの定義
上記で説明したアプローチでは、色の値がハード コーディングされていました。または、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、柔軟性を高めることができます。
`igx-palette` generates a color palette, based on provided primary and secondary colors.

 ```scss
$primary-color: #292826;
$secondary-color: #ffcd0f;

$custom-palette: palette(
  $primary: $primary-color,
  $secondary: $secondary-color
);
```

カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。


```scss
$custom-theme: grid-theme(
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: color($custom-palette, "secondary", 500),
    $cell-active-border-color: color($custom-palette, "secondary", 500)
);
```

`$custom-theme` には前のセクションと同じプロパティが含まれていますが、今回は色がハードコードされていません。代わりに、カスタム `igx-palette` パレットが使用され、特定のカラーバリアントを使用して、プライマリ カラーとセカンダリ カラーから色が取得されました。

### カスタム スキーマの定義
[**スキーマ**](../themes/sass/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ** はテーマを作成させるための方法です。
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマのいずれかを拡張します。この場合、`$_light_grid` を使用します。
```scss
$custom-grid-schema: extend($_light-grid,(
    pinned-border-width: 5px,
    pinned-border-style: double,
    pinned-border-color: color:("secondary", 500),
    cell-active-border-color: color:("secondary", 500)
));
```
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。
```scss
$my-custom-schema: extend($light-schema, (
    igx-grid: $custom-grid-schema
));
$custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。
```scss
@include grid($custom-theme);
```

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。
 >[!NOTE]
 >コンポーネントが [Emulated](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```
### デモ

<!-- NOTE this sample is differed -->

<code-view style="height:506px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-pinning-styles" >
</code-view>

>[!NOTE]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## API リファレンス
* `{ComponentName}`
* `ColumnComponent`

## その他のリソース
* [{ComponentTitle} 概要](overview.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
