---
title: {Platform} Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: グループを設定して {Platform} Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: {Platform}, Grid, {ProductName}, group by, Infragistics, グリッド, グループ化, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} Grid グループ化

{Platform} {GridName} の {ProductName} グループ化動作は、列の値に基づいてグループ化されたデータ行を作成します。`Grid` の グループ化では、グループを階層構造で視覚化できます。グループデータ行は展開または縮小でき、グループの順序は UI または API で変更できます。行選択を有効にすると、グループ化行セレクターがグループ行の一番左の領域に描画されます。`RowSelection` プロパティが単一に設定されている場合、チェックボックスは無効になり、選択が行われるグループの表示としてのみ機能します。`RowSelection` プロパティが複数に設定されている場合、グループ化行セレクターをクリックすると、このグループに属するすべてのレコードが選択されます。

## {Platform} Grid グループ化の例
この例は、大量のデータのグループ化が可能であることを示しています。列ヘッダーを一番上 (グループ化領域) にドラッグすると、ユーザーは選択した列のデータを階層構造で表示できます。さらに列ヘッダーを一番上にドラッグすることで、複数のフィールドでグループ化できます。これらのグループ化オプションは、ユーザーが多数の行と列を持つテーブルがあり、はるかに高速で視覚的に受け入れられる方法でデータを表示ようとする場合に役立ちます。


`sample="/{GridSample}/groupby-expressions", height="605", alt="{Platform} {GridTitle} グループ化の例"`

## 初期のグループ化状態

グリッドの `GroupingExpressions` プロパティに式の配列を割り当てることによって、グリッドの初期グループ化を定義することができます。

<!-- Angular -->
```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
constructor() {
    var grid = document.getElementById("grid") as IgcGridComponent;
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
const expressions = [
    { fieldName: 'ProductName', dir: SortingDirection.Desc },
    { fieldName: 'Released', dir: SortingDirection.Desc }
];

function App() {
    const grid1Ref = useRef();
    return (
    <>
        <IgrGrid
            autoGenerate="true"
            groupingExpressions={expressions}
            ref={grid1Ref}>
        </IgrGrid>
    </>
    )
}
```
<!-- end: React -->

<!-- Blazor -->

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" @ref="grid" Id="grid" GroupingExpressions="GroupingExpression1"></IgbGrid>

@code {
    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };
}
```

<!-- end: Blazor -->


グループ式は、`ISortingExpression` インターフェイスを実装します。

## Group By API

### グループ化 API

グループ化は、UI およびグリッド コンポーネントで公開された API で実行できます。各列の `Groupable` プロパティを **true** に設定してエンドユーザーは特定の列でグリッド データをグループ化できます。

```html
<igc-grid auto-generate="false" id="grid">
    <igc-column field="OrderID" hidden="true"></igc-column>
    <igc-column field="ShipCountry" header="Ship Country" width="200px" groupable="true"> </igc-column>
    <igc-column field="OrderDate" header="Order Date" data-type="date" width="200px" groupable="true"> </igc-column>
    <igc-column field="PostalCode" header="Postal Code" width="200px" groupable="true"> </igc-column>
    <igc-column field="Discontinued" width="200px" data-type="boolean" groupable="true" name="column1" id="column1"> </igc-column>
    <igc-column field="ShipName" header="Ship Name" width="200px" groupable="true"> </igc-column>
    <igc-column field="ShipCity" header="Ship City" width="200px" groupable="true"> </igc-column>
    <igc-column field="ShipperName" header="Shipper Name" width="200px" groupable="true"> </igc-column>
    <igc-column field="Salesperson" header="Sales Person" width="200px" groupable="true"> </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" width="200px" groupable="true"> </igc-column>
    <igc-column field="Quantity" width="200px" groupable="true"> </igc-column>
</igc-grid>
```

<!-- Blazor -->

```razor
<IgbGrid AutoGenerate="false" Data="InvoicesData" @ref="grid" Id="grid" GroupingExpressions="GroupingExpression1" GroupRowTemplateScript="WebGridGroupByRowTemplate">
    <IgbColumn Field="OrderID" Hidden="true"></IgbColumn>
    <IgbColumn Field="ShipCountry" Header="Ship Country" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="PostalCode" Header="Postal Code" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="Discontinued" Width="200px" DataType="GridColumnDataType.Boolean" Groupable="true" BodyTemplateScript="WebGridBooleanCellTemplate" Name="column1" @ref="column1"></IgbColumn>
    <IgbColumn Field="ShipName" Header="Ship Name" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="ShipCity" Header="Ship City" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name"Width="200px"Groupable="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Sales Person" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="UnitPrice" Header="Unit Price" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="Quantity" Width="200px" Groupable="true"></IgbColumn>
</IgbGrid>
```

<!-- end: Blazor -->

<!-- Angular -->
```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```
<!-- end: Angular -->

```tsx
function App() {
    const gridRef = useRef();
    return (
    <>
        <IgrGrid
            autoGenerate="false"
            ref={gridRef}
            >
            <IgrColumn field="OrderID" hidden="true"></IgrColumn>
            <IgrColumn field="ShipCountry" header="Ship Country" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="OrderDate" header="Order Date" dataType="date" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="PostalCode" header="Postal Code" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="Discontinued" width="200px" dataType="boolean" groupable="true"></IgrColumn>
            <IgrColumn field="ShipName" header="Ship Name" width="200px" groupable="false"></IgrColumn>
            <IgrColumn field="ShipCity" header="Ship City" width="200px" groupable="false"></IgrColumn>
            <IgrColumn field="ShipperName" header="Shipper Name" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="Salesperson" header="Sales Person" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="UnitPrice" header="Unit Price" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="Quantity" width="200px" groupable="true"></IgrColumn>
        </IgrGrid>
    </>
  )
}
```

<!-- WebComponents -->
```typescript
    constructor() {
        var column1 = (this.column1 = document.getElementById("column1") as IgcColumnComponent);
        column1.groupable = true;
    }
```
<!-- end: WebComponents -->

ランタイムの式は `groupingExpressions` プロパティの取得または設定できます。既存の式を追加または変更する必要がある場合、単一の式または式の配列で `GroupBy` メソッドを使用してください。


<!-- WebComponents -->
```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
gridRef.groupBy([{ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true }]);
```
<!-- end: React -->

<!-- Blazor -->

```razor
@code {
    public IgbGrid grid;

    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };


    private void GroupGrid()
    {
        this.grid.GroupBy(GroupingExpression1);
    }
}
```

<!-- end: Blazor -->

<!-- Angular -->

> [!Note]
> これまで、グループ化 / ソートは互いに連携して機能していました。13.2 バージョンでは、grouping を sorting から切り離す新しい動作が導入されています。たとえば、グループ化をクリアしても、グリッド内のソート式はクリアされません。その逆も同様です。それでも、列がソートおよびグループ化されている場合は、グループ化された式が優先されます。

<!-- end: Angular -->

### 展開 / 縮小 API

グループ式の他にグループ行の展開も制御できます。これらは、`GroupByExpandState` のコレクションである、`Grid` コンポーネントの別のプロパティ `GroupingExpansionState` に保存されます。各展開状態は、作成されたフィールド名とグループ化の各レベルで表す値によって一意に定義されます。つまり、識別子は `GroupByKey` の階層配列です。

`GroupingExpressions` で `IGroupByExpandState` のリストを直接 `GroupingExpansionState` に設定すると展開が変更されます。また、`Grid` は、グループ レコード インスタンスまたは行の `expanded` プロパティによってグループを切り替えるメソッド `toggleGroup` を公開します。

<!-- WebComponents -->
```typescript
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.toggleGroup(groupRow);
```

```typescript
    const groupRow = this.grid.getRowByIndex(0);
    groupRow.expanded = false;
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
    const groupRow = gridRef.getRowByIndex(0).groupRow;
    gridRef.toggleGroup(groupRow);
```

```typescript
    const groupRow = gridRef.getRowByIndex(0);
    groupRow.expanded = false;
```
<!-- end: React -->

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" GroupingExpressions="GroupingExpression1" GroupingExpansionState=ExpansionState @ref="grid" Id="grid">
</IgbGrid>

@code {
    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };
    public IgbGroupByExpandState[] state = new IgbGroupByExpandState[1]
    {
        new IgbGroupByExpandState(){ Hierarchy = new IgbGroupByKey[1]{ new IgbGroupByKey() { FieldName="ShipCountry", Value = "USA" } },  Expanded = false }
    };
}
```

グループは展開済み (**デフォルト**) または縮小済みに作成でき、展開状態は一般的にデフォルト動作の反対の状態のみ含みます。グループを作成して展開するかどうか、または `GroupsExpanded` プロパティを介すかどうかを制御できます。

### グループですべての行を選択 / 選択解除 API

グループ内のすべての行の選択/選択解除は、`SelectRowsInGroup` および `DeselectRowsInGroup` API メソッドを介して利用できます。

以下のコードスニペットは、グループ レコード `SelectRowsInGroup` メソッドを使用してグループ内のすべての行を選択するために使用できます。さらに、このメソッドの2番目のパラメーターはブールプロパティです。それを使用して、前の行の選択をクリアするかどうかを選択できます。以前の選択はデフォルトで保存されます。

<!-- WebComponents -->
```typescript
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.selectRowsInGroup(groupRow);
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
    const groupRow = gridRef.getRowByIndex(0).groupRow;
    gridRef.selectRowsInGroup(groupRow);
```
<!-- end: React -->

```razor
var row = await this.grid.GetRowByIndexAsync(0);
this.grid.SelectRowsInGroup(row.GroupRow, true);
```

プログラムでグループ内のすべての行の選択を解除する必要がある場合は、`DeselectRowsInGroup` メソッドを使用できます。

<!-- WebComponents -->
```typescript
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.deselectRowsInGroup(groupRow);
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
    const groupRow = gridRef.getRowByIndex(0).groupRow;
    gridRef.deselectRowsInGroup(groupRow);
```
<!-- end: React -->

```razor
var row = await this.grid.GetRowByIndexAsync(0);
this.grid.DeselectRowsInGroup(row.GroupRow);
```


## テンプレート

### グループ行テンプレート

展開/縮小 UI を除くグループ行は完全にテンプレート化可能です。デフォルトでグループ アイコンを描画し、フィールド名と値を表示します。テンプレートを描画するコンテキストのタイプは `GroupByRecord` です。

たとえば、以下のテンプレートはグループ行集計でより詳細な情報を表示します。

```html
<ng-template GroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

```tsx
function template(ctx: { dataContext: IgrGroupByRowTemplateContext }) {
    const groupRow = ctx.dataContext.implicit;
    return (<>
       <span>Total items with value: { groupRow.value } are { groupRow.records.length }</span>
    </>)
}
```

```ts
    public groupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {
        const groupRow: IgcGroupByRecord = ctx.implicit;
        return html`<span>Total items with value: ${ groupRow.value } are ${ groupRow.records.length }</span>`;
    }
```

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" @ref="grid" Id="grid" GroupRowTemplateScript="WebGridGroupByRowTemplate"></IgbGrid>


//In JavaScript:
igRegisterScript("WebGridGroupByRowTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var groupRow = ctx.implicit;
    return html`<span>Total items with value: ${groupRow.value} are ${groupRow.records.length}</span>`;
}, false);
```


### グループ行セレクター テンプレート

上記のように、展開/縮小 UI を除くグループ行は完全にテンプレート化可能です。カスタムの GroupBy 行セレクター テンプレートを作成するには、`GroupByRowSelectorTemplate` ディレクティブを使用します。テンプレートから、Group By 行の状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`SelectedCount` プロパティは、現在選択されているグループ レコードの数を示し、`TotalCount` はグループに属するレコードの数を示します。

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    {{ groupByRowContext.selectedCount }} / {{ groupByRowContext.totalCount  }}
</ng-template>
```

```tsx
function template(ctx: { dataContext: IgrGroupByRowSelectorTemplateContext }) {
    return (<>
        { ctx.dataContext.implicit.selectedCount } / { ctx.dataContext.implicit.totalCount }
    </>)
}
```

```ts
    public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateContext) => {
        return html`
            ${ ctx.implicit.selectedCount } / ${ ctx.implicit.totalCount  }
        `;
    }
```

```razor
<IgbGrid GroupByRowSelectorTemplateScript="GroupByRowSelectorTemplate"></IgbGrid>
//In Javascript
igRegisterScript("GroupByRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html` ${ctx.implicit.selectedCount} / ${ctx.implicit.totalCount} `;
}, false);
```

`GroupRow` プロパティは、グループ行への参照を返します。

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    <div (click)="handleGroupByRowSelectorClick($event, groupByRowContext.groupRow)">Handle groupRow</div>
</ng-template>
```

```tsx
function template(ctx: { dataContext: IgrGroupByRowSelectorTemplateContext }) {
    const groupRow = ctx.dataContext.implicit.groupRow;
    return (<>
        <div onClick={(e: any) => handleGroupByRowSelectorClick(e, groupRow)}>Handle groupRow</div> `;
    </>)
}
```

```ts
    public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateContext) => {
        const groupRow = ctx.implicit.groupRow;
        return html` <div @click=${(e: any) => this.handleGroupByRowSelectorClick(e, groupRow)} ">Handle groupRow</div> `;
    };
```

```razor
<IgbGrid GroupByRowSelectorTemplateScript="GroupByRowSelectorTemplate"></IgbGrid>
//In Javascript
igRegisterScript("GroupByRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var groupRow = ctx.implicit.groupRow;
    return html`<div onclick="handleGroupByRowSelectorClick()">Handle groupRow</div> `;
}, false);
```

`SelectedCount` と `TotalCount` プロパティを使用して、Group By 行セレクターをチェックするか不確定にする (部分的に選択する) かを決定できます。

```html
<igx-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template GroupByRowSelector let-context>
        <igx-checkbox
            [checked]=" context.selectedCount > 0 && context.selectedCount === context.totalCount"
            [indeterminate]="context.selectedCount > 0 && context.selectedCount !== context.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```


## {Platform} Grid ページングによるグループ化

グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。展開または折りたたみ操作を行うと、ページングでページ数が再計算され、必要に応じてページ インデックスが調整されます。
複数のページにまたがるグループは、ページ間で分割されます。グループ行は、開始ページでのみ表示され、後続のページでは繰り返されません。グループ行の要約情報はグループ全体に基づいて計算され、ページングの影響を受けません。

### {Platform} ページングによるグループ化の例


`sample="/{GridSample}/groupby-paging", height="605", alt="{Platform} {GridTitle} ページングによるグループ化の例"`

## 集計でグループ化

グループ化と要約の統合については、[集計](summaries.md#summaries-with-group-by)トピックで説明しています。

## キーボード ナビゲーション

グループ UI は、以下のキーボード インタラクションをサポートします。

- グループ行 (行または展開/縮小セルにフォーカス)
   - <kbd>ALT</kbd> + <kbd>右矢印</kbd> - グループを展開します。
   - <kbd>ALT</kbd> + <kbd>左矢印</kbd> - グループを縮小します。
   - <kbd>SPACE</kbd> - <kbd>rowSelection</kbd> プロパティが multiple に設定されている場合、グループ内のすべての行を選択します。

- グループ領域の `Chip` コンポーネントのグループ化 (チップにフォーカス)
   - <kbd>SHIFT</kbd> + <kbd>左矢印</kbd> - フォーカスしたチップの左へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SHIFT</kbd> + <kbd>右矢印</kbd> - フォーカスしたチップの右へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SPACE</kbd> - ソートの方向を変更します。
   - <kbd>DELETE</kbd> - フィールドのグループ解除。
   - チップの別の要素をフォーカスでき <kbd>ENTER</kbd> キーでインタラクティブに操作できます。

<!-- WebComponents, Angular, React -->

## {Platform} Grid カスタムグループ化

グリッドでは、列ごとまたはグループ化式ごとにカスタム グループを定義できます。これにより、カスタム条件に基づいてグループ化が提供されます。これは、複雑なオブジェクトごとにグループ化する必要がある場合、または他のアプリケーション固有のシナリオで役立ちます。

<!-- Angular -->

> [!Note]
> カスタム グループ化を実装するには、まずデータを適切にソートする必要があります。このため、ベース `DefaultSortingStrategy` を拡張するカスタムのソート ストラテジを適用する必要がある場合もあります。データがソートされた後、列または特定のグループ化式に `GroupingComparer` を指定することにより、カスタム グループを決定できます。

<!-- end:Angular -->

以下のサンプルは、`Date` によるカスタム グループ化を示しています。日付の値は、ユーザーが選択したグループ化モードに基づいて、日、週、月、または年でソートされおよびグループ化されています。

### {Platform} カスタム グループ化の例


`sample="/{GridSample}/groupby-custom", height="605", alt="{Platform} {GridTitle} カスタム グループ化の例"`

このサンプルでは、さまざまな日付条件のカスタム ソートストラテジを定義しています。
各カスタム ストラテジは `GroupingComparer` メソッドを定義します。値をソートするときに使用されるカスタム比較関数です。さらに、比較に必要な日付から値を抽出します。

<!-- WebComponents -->
```typescript
public groupByMode = "Month";
public getParsedDate(date: any) {
    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
}
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
const groupByMode = "Month";
function getParsedDate(date: any) {
    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
}
```
<!-- end: React -->

`GroupingComparer` 関数がグループ化式に対して定義され、選択されたグループ化モードに基づいて同じグループに属するアイテムを決定します。この関数が 0 を返すソートされた値は、同じグループの一部としてマークされます。

```typescript
grid.groupingExpressions = [
    { fieldName: 'OrderDate', dir: SortingDirection.Desc,
    groupingComparer: (a, b) => {
            const dateA = this.getParsedDate(a);
            const dateB = this.getParsedDate(b);
            if (this.groupByMode === 'Month') {
                return dateA.month === dateB.month ? 0 : -1;
            } else if (this.groupByMode === "Year") {
                return dateA.year === dateB.year ? 0 : -1;
            } else if (this.groupByMode === 'Week') {
                return this.getWeekOfDate(a) === this.getWeekOfDate(b) ? 0 : -1;
            }
            return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
        }
    }
];
```

<!-- end:WebComponents, Angular, React -->

<!-- WebComponents, Blazor, React -->
## スタイル設定


定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming-grid.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

<!-- WebComponents -->
```ts
<igc-grid class="grid">
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
function App() {
     return (
        <IgrGrid className="grid">
        </IgrGrid>
    )
}
```
<!-- end: React -->

```razor
<IgbGrid Class="grid"></IgbGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-group-row-background: #969799;
    --ig-grid-group-row-selected-background: #969799;
    --ig-grid-group-label-column-name-text: #f8f8f8;
    --ig-grid-group-label-text: #f8f8f8;
    --ig-grid-group-count-text-color: #222;
    --ig-grid-expand-icon-color: #f8f8f8;
    --ig-grid-expand-icon-hover-color: #f8f8f8;
}
```

### デモ

`sample="/{GridSample}/groupby-styling", height="605", alt="{Platform} {GridTitle} グループ化のスタイル設定の例"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

[{ProductName} テーマ ライブラリ](../themes/styles.md)でスタイルを設定できます。theme は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下の手順では、グリッドの Group By スタイルをカスタマイズする手順を実行しています。

### グローバル テーマのインポート

グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### カスタム テーマの定義

次に、`grid-theme` を拡張し、必要に応じてピン固定をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。Group By 機能で使用されるため、`chip-theme` を拡張する必要もあります。

```scss

$custom-theme: grid-theme(
    /* Group By properties that affect styling */
    $group-row-background: #494949,
    $group-row-selected-background: #383838,
    $group-label-column-name-text: #f8f8f8,
    $group-label-icon: #FFCD0F,
    $group-label-text: #f8f8f8,
    $group-count-background: #FFCD0F,
    $group-count-text-color: #000,
    $expand-icon-color: #FFCD0F,
    $expand-icon-hover-color: rgb(223, 181, 13),
    $cell-active-border-color: #FFCD0F,
    $row-selected-background: #fff6d3,
    $row-selected-text-color: #000,
    $drop-indicator-color: #FFCD0F
    /* add other features properties here... */
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: chip-theme(
    $background: #494949,
    $text-color: #f8f8f8,
    $hover-text-color: #e7e7e7
);
```

### カスタム カラー パレットの定義

上記で説明したアプローチでは、色の値がハード コーディングされていました。または、`palette` および `color` 関数を使用して、柔軟性を高めることができます。
`palette` generates a color palette, based on provided primary and secondary colors.

```scss
$black-color: #292826;
$yellow-color: #FFCD0F;

$custom-palette: palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
カスタム パレットが生成された後、`color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。

```scss
$custom-theme: grid-theme(
    $group-row-background: color($custom-palette, "primary", 300),
    $group-row-selected-background: color($custom-palette, "primary", 400),
    $group-label-column-name-text:contrast-color($custom-palette, "primary", 500),
    $group-label-icon: color($custom-palette, "secondary", 600),
    $group-label-text:contrast-color($custom-palette, "primary", 500),
    $group-count-background: color($custom-palette, "secondary", 600),
    $group-count-text-color: color($custom-palette, "primary", 400),
    $expand-icon-color: color($custom-palette, "secondary", 600),
    $expand-icon-hover-color: color($custom-palette, "secondary", 300),
    $cell-active-border-color: color($custom-palette, "secondary", 600)
);

$custom-chips-theme: chip-theme(
    $background: color($custom-palette, "primary", 300),
    $text-color:contrast-color($custom-palette, "primary", 500),
    $hover-text-color:contrast-color($custom-palette, "primary", 600)
);
```
### カスタム スキーマの定義
[**スキーマ**](../themes/sass/schemas.md)のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマのいずれかを拡張します。この場合、`$_light_grid` を使用します。
```scss
$custom-grid-schema: extend($_light-grid,(
    group-row-background: (-color:('secondary', 100)),
    group-row-selected-background: (-color:('primary', 400)),
    group-label-column-name-text: (-color:('primary', 600)),
    group-label-icon: (-color:('primary', 600)),
    group-label-text: (-color:('secondary', 700)),
    group-count-background: (-color:('primary', 600)),
    group-count-text-color: (-color:('secondary', 400)),
    expand-icon-color: (-color:('primary', 600)),
    expand-icon-hover-color: (-color:('primary', 400))
));
```
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。
```scss
$my-custom-schema: extend($light-schema, (
    -grid: $custom-grid-schema
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
@include chip($custom-chips-theme);
```

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、{Platform} の [ViewEncapsulation](https://{Platform}.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 > [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 > [!Note]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
        @include chip($custom-chips-theme);
    }
}
```


### デモ

<!-- NOTE this sample is differed -->

`sample="/{GridSample}/groupby-styling", height="570", alt="{Platform} {GridTitle} グループ化のスタイル設定"`


> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end:Angular -->

## 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ列の最大値は 10 です。 | 10 列以上の場合はエラーがスローされます。

## API リファレン

* `Grid`
* `GroupByRow`
* `ISortingExpression`
* `Column`
* `IGroupByExpandState`
* `Chip`

## その他のリソース

* [Grid の概要](../data-grid.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列の移動](column-moving.md)
* [集計](summaries.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})