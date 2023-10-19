---
title: {Platform} {ComponentTitle} for {ProductName} のフィルタリング
_description: Angular フィルターを使用して、{Platform} {ComponentTitle} で特定のデータを返します。データ型の Excel スタイル フィルタリングを含む高度なフィルタリング オプションをお試しください。
_keywords: filter, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, フィルター, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} フィルタリング

{Platform} `{ComponentName}` コンポーネントは、クイック フィルタリング、[Excel スタイル フィルタリング](excel-style-filtering.md)、および[高度なフィルタリング](advanced-filtering.md)の 3 つの異なるフィルタリング タイプを提供します。それらのフィルタリング タイプは指定された基準を満たすレコードのみを表示できるようにします。{Platform} の `{ComponentName}` コンポーネントは、`{ComponentName}` がバインドされているデータコンテナを介して、フィルター機能と広範なフィルター API を提供します。

## {Platform} {ComponentTitle} フィルタリングの例

以下のサンプルは、`{ComponentName}` の **Excel スタイル フィルタリング** ユーザー エクスペリエンスを示しています。

`sample="/{ComponentSample}/filtering-options", height="500", alt="{Platform} {ComponentTitle} フィルタリングの例"`



## 設定

フィルタリングが有効かどうか、およびどのフィルタリング モードを使用するかを指定するために、{ComponentName} は次のブール プロパティを公開します - `AllowFiltering`、`AllowAdvancedFiltering`、`FilterMode` と `Filterable`。

以下のオプションは、プロパティ `AllowFiltering` で指定できます。
- **false** - 対応するグリッドのフィルタリングが無効になります。これがデフォルト値です。
- **true** - 対応するグリッドのフィルタリングが有効になります。

以下のオプションは、プロパティ `AllowAdvancedFiltering` で指定できます。
- **false** - 対応するグリッドの高度なフィルタリングが無効になります。これがデフォルト値です。
- **true** - 対応するグリッドの高度なフィルタリングが有効になります。

以下のオプションは、プロパティ `FilterMode` で指定できます。
- **QuickFilter** - 簡易なフィルタリング UI。これがデフォルト値です。
- **ExcelStyleFilter** - Excel のようなフィルタリング UI。

以下のオプションは、プロパティ `Filterable` で指定できます。
- **true** - 対応する列のフィルタリングが有効になります。これがデフォルト値です。
- **false** - 対応する列のフィルタリングが無効になります。

<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false"></igx-column>
<{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<IgbGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbGrid>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="ProductName" data-type="string"></igc-column>
    <igc-column field="Price" data-type="number" filterable="false"></igc-column>
<{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} data={this.nwindData} autoGenerate="false" ref={this.gridRef} allowFiltering="true">
    <IgrColumn field="ProductName" dataType="String"></IgrColumn>
    <IgrColumn field="UnitPrice" data-type="Number" filterable="false"></IgrColumn>
</{ComponentSelector}>
```
<!-- end: React -->

[高度なフィルタリング](advanced-filtering.md) を有効にするには、`AllowAdvancedFiltering` 入力プロパティを **true** に設定します。

<!-- Angular -->
```html
<{ComponentSelector}  [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<IgbGrid Data=data AutoGenerate=true AllowAdvancedFiltering=true />
```

<!-- WebComponents -->
```html
<{ComponentSelector}  data="data" auto-generate="true" allow-advanced-filtering="true">
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} data={nwindData} autoGenerate="false" ref={gridRef} allowAdvancedFiltering="true">
</{ComponentSelector}>
```
<!-- end: React -->

> [!Note]
>`{ComponentName}` で `QuickFilter` または `ExcelStyleFilter` と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。`{ComponentName}` の最終的なフィルター結果は、2 つのフィルター結果の共通部分です。

## インタラクション

特定の列のフィルター行を開くには、ヘッダー下のフィルター チップをクリックします。状態を追加するために入力の左側のドロップダウンを使用してフィルター オペランドを選択し、値を入力します。*number* と *date* 列には、Equals がデフォルトで選択されます。*string* には 'Contains'、*boolean* には 'All' が選択されます。'Enter' を押して条件を確定して他の条件を追加できます。条件チップの間にドロップダウンがあり、それらの間の論理演算子を決定します。'AND' がデフォルトで選択されます。条件の削除はチップの X ボタンをクリックします。編集はチップを選択、入力はチップのデータで生成されます。フィルター行が開いているときにフィルター可能な列のヘッダーをクリックして選択し、フィルター条件を追加できます。

列に適用したフィルターがある場合、フィルター行が閉じられるとチップの閉じるボタンをクリックした条件の削除やいずれかのチップを選択してフィルター行を開くことができます。すべての条件を表示するための十分なスペースがない場合、条件数を示すバッジ付きのフィルター アイコンが表示されます。フィルター行を開くためにクリックできます。

## 使用方法

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。`{ComponentName}` には、簡易なフィルター UI と詳細なフィルター オプションがあります。列で設定された `DataType` に基づいて、適切な**フィルタリング処理**のセットがフィルター UI ドロップダウンに読み込まれます。また、`IgnoreCase` と最初の `Condition` プロパティを設定できます。

フィルタリング機能は、`AllowFiltering` 入力を **true** に設定すると `{ComponentName}` コンポーネントで有効になります。デフォルトの `FilterMode` は `QuickFilter` でランタイムでは**変更できません**。特定の列でこの機能を無効にするには、`Filterable` 入力を **false** に設定します。

<!-- ComponentStart: Grid, TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->
<!-- WebComponents -->
```html
<{ComponentSelector} auto-generate="false" allow-filtering="true">
    <igc-column field="ProductName" data-type="string"></igc-column>
    <igc-column field="Price" datdata-typeaType="number"></igc-column>
    <igc-column field="Discontinued" data-type="boolean" filterable="false"></igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} autoGenerate="false" allowFiltering="true">
    <IgrColumn field="ProductName" dataType="String"></IgrColumn>
    <IgrColumn field="Price" dataType="Number"></IgrColumn>
    <IgrColumn field="Discontinued" dataType="Boolean" filterable="false"></IgrColumn>
</{ComponentSelector}>
```
<!-- end: React -->

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]="true"></igx-column>
    <igx-column field="Photo" [filterable]="false"></igx-column>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid auto-generate="false" allow-filtering="true">
    <igc-column field="Artist" filterable="true"></igc-column>
    <igc-column field="Photo" filterable="false"></igc-column>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

```razor
<IgbGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbGrid>
```

> [!Note]
> *string* 型の値が *date* データ型の列で使用される場合、`{ComponentName}` は値を *date* オブジェクトに解析しないためフィルター条件は使用できません。*string* オブジェクトを使用する場合、値を *date* オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

<!-- Angular, WebComponents -->

列または複数の列は `{ComponentName}` API でフィルターできます。`{ComponentName}` は、このタスクに複数のメソッドを公開します (`Filter`、`FilterGlobal`、`ClearFilter`.)。

*   `Filter` - 単一の列または複数の列をフィルターします。

以下の 5 つのフィルタリング オペランド クラスが公開されます。
   - `FilteringOperand`: カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
   - `BooleanFilteringOperand` は、*boolean* 型のすべてのデフォルト フィルタリング条件を定義します。
   - `NumberFilteringOperand` は、*numeric* 型のすべてのデフォルト フィルタリング条件を定義します。
   - `StringFilteringOperand` は、*string* 型のすべてのデフォルト フィルタリング条件を定義します。
   - `DateFilteringOperand` は、*date* 型のすべてのデフォルト フィルタリング条件を定義します。

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', IgcStringFilteringOperand.instance().condition('contains'), true);
```

必要なパラメーターは列フィールド キーとフィルター用語のみです。条件および大文字と小文字の区別を設定しない場合、列プロパティで推測されます。フィルターが複数ある場合、このメソッドはフィルター式の配列を受け取ります。

> [!Note]
> フィルタリング操作で `{ComponentName}` にバインドされているデータ ソースは**変更されません**。


<!-- Angular -->

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```

<!-- end: Angular -->

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgcStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgcNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
```

* `FilterGlobal` - 既存フィルターをクリアして新しいフィルター条件をすべての {ComponentTitle} 列に適用します。

```typescript
// Filter all cells for a value which contains `myproduct`
this.@@igObjectRef.filteringLogic = FilteringLogic.Or;
this.@@igObjectRef.filterGlobal('myproduct', IgxStringFilteringOperand.instance().condition('contains'), false);
```
```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal('myproduct', IgcStringFilteringOperand.instance().condition('contains'), false);
```

* `ClearFilter` - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。

<!-- Angular -->
```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```
<!-- end: WebComponents -->

## 初期のフィルター状態

`{ComponentName}` の初期フィルタリング状態の設定は、`{ComponentName}` `FilteringExpressionsTree` プロパティを `FilteringExpressionsTree` の配列に設定して各列をフィルターします。

```typescript
constructor(private cdr: ChangeDetectorRef) { }

public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'ProductName',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```

```typescript
constructor() {
    const gridFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And, 'ProductName');
    const productExpression = {
        condition: IgcStringFilteringOperand.instance().condition('contains'),
        fieldName: 'ProductName',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

<!-- end: Angular, WebComponents -->

### フィルター ロジック

`{ComponentName}` コントロールの `FilteringLogic` プロパティは `{ComponentName}` で複数の列のフィルターが解決する方法を制御します。`{ComponentName}` API または `{ComponentName}` の入力プロパティによって変更できます。

```razor
 <IgbGrid FilteringLogic="FilteringLogic.Or"></IgbGrid>
```

<!-- Angular -->
```typescript
import { FilteringLogic } from 'igniteui-angular';

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
import { FilteringLogic } from "igniteui-webcomponents-grids/grids";

this.grid.filteringLogic = FilteringLogic.OR;
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentName} filteringLogic={FilteringLogic.Or}></{ComponentName}>
```
<!-- end: React -->

`AND` のデフォルト値は現在適用されているすべてのフィルター式と一致する行のみを返します。上記の例は、「ProductName」 セル値が 「myproduct」 を含み、「Price」 セル値が 55 より大きい場合に行が返されます。

`OR` に設定される場合、「ProductName」 セル値が 「myproduct」 を含むか、「Price」 セル値が 55 より大きい場合に行が返されます。

<!-- Angular -->
<!-- ComponentStart: Grid, HierarchicalGrid -->
## リモート フィルタリング

`{ComponentName}` はリモート フィルタリングをサポートします。詳細については、[{ComponentTitle} リモート データの操作](remote-data-operations.md)をご確認ください。
<!-- ComponentEnd: Grid, TreeGrid -->
<!-- end: Angular -->

<!-- Angular, WebComponents -->

## カスタム フィルタリング オペランド

フィルタリング メニューは、フィルタリング オペランド削除または変更してカスタマイズします。デフォルトでフィルタリング メニューは列のデータ型 (`BooleanFilteringOperand`、`DateFilteringOperand`、`NumberFilteringOperand`、`StringFilteringOperand`) に基づいて特定のオペランドを含みます。これらのクラスまたは基本クラス `FilteringOperand` を拡張してフィルタリング メニュー項目の動作を変更できます。

以下のサンプルの 「Product Name」 と 「Discontinued」 列フィルタリング メニューを確認してください。「Discontinued」 列フィルターでは、オペランドの数が All に制限されています。「Product Name」 列フィルター - Contains および Does Not Contain オペランド ロジックを変更して大文字と小文字を区別した検索を実行し、Empty と Not Empty を追加します。

これにより、`StringFilteringOperand` と `BooleanFilteringOperand` を拡張し、オペランドとロジックを変更して列 `filters` 入力を新しいオペランドに設定します。

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}

export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```

<!-- end: Angular -->

```typescript

export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}

export class CaseSensitiveFilteringOperand extends IgcStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgcStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgcStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgcStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgcStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgcBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```

<!-- ComponentStart: Grid, TreeGrid -->
<!-- Angular -->
```html
<!-- grid-custom-filtering.component.html -->

<{ComponentSelector} [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->
<!-- WebComponents -->
```html
<!-- grid-custom-filtering.component.html -->

<{ComponentSelector} auto-generate="false" allow-filtering="true">
    <igc-column id="ProductName" field="ProductName" header="Product Name" data-type="string"></igc-column>
    <igc-column id="Discontinued" field="Discontinued" header="Discontinued" data-type="boolean"></igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var productName = this.productName = document.getElementById('ProductName') as IgcColumnComponent;
    var discontinued = this.discontinued = document.getElementById('Discontinued') as IgcColumnComponent;

    this._bind = () => {
        productName.filters = this.caseSensitiveFilteringOperand;
        discontinued.filters = this.booleanFilteringOperand;
    }
    this._bind();
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<!-- hierarchical-grid-custom-filtering.component.html -->

<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]='true' [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
            <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
        </ng-template>
    </igx-column>
</igx-hierarchical-grid>
```

```html
<!-- grid-custom-filtering.component.html -->

<igc-hierarchical-grid auto-generate="false" allow-filtering="true">
    <igc-column id="Artist" field="Artist" filterable='true' data-type="string" [filters]="caseSensitiveFilteringOperand"></igc-column>
    <igc-column id="HasGrammyAward" field="HasGrammyAward" filterable='true' data-type="boolean" [filters]="booleanFilteringOperand"></igc-column>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var artist = this.artist = document.getElementById('Artist') as IgcColumnComponent;
    var hasGrammyAward = this.hasGrammyAward = document.getElementById('HasGrammyAward') as IgcColumnComponent;

    this._bind = () => {
        artist.bodyTemplate = this.caseSensitiveFilteringOperand;
        hasGrammyAward.bodyTemplate = this.booleanFilteringOperand;
    }
    this._bind();
}
```

<!-- ComponentEnd: HierarchicalGrid -->



`sample="/{ComponentSample}/custom-filtering", height="600", alt="{Platform} {ComponentTitle} カスタム フィルタリングの例"`

<!-- end: Angular, WebComponents -->

<!-- Angular -->

## フィルター セルの再テンプレート化

フィルター セルを再テンプレート化するために、`FilterCellTemplate` とマークされたテンプレートを追加することができます。以下のサンプルでは、​​文字列カラムへの入力と日付列に `DatePicker` が追加されています。ユーザーが値を入力または選択すると、文字列カラムには contains 演算子、日付列には equals 演算子を使用したフィルターが、グリッドのパブリック API を使用して適用されます。

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/filtering-template", height="500", alt="{Platform} {ComponentTitle} フィルタリング テンプレートの例"`



<!-- end: Angular -->

<!-- ComponentStart: TreeGrid -->

## マッチング レコードのみのフィルタリング方式

デフォルトでは、フィルタリングが適用された後、`{ComponentName}` コンポーネントは、設定された基準に一致するレコードとその親をグレー表示されて、追加のコンテキストを提供します。ただし、場合によっては、親のトレースなしで、特定のフィルタリング条件に一致するレコードのみを表示したいことがあります。これは、`TreeGridMatchingRecordsOnlyFilteringStrategy` を使用して実現できます。

```html
<igx-tree-grid [data]="data" [allowFiltering]="true" [filterStrategy]="matchingRecordsOnlyStrategy">
</igx-tree-grid>
```

```typescript
import { TreeGridMatchingRecordsOnlyFilteringStrategy } from "igniteui-angular";

public matchingRecordsOnlyStrategy = new TreeGridMatchingRecordsOnlyFilteringStrategy();
```

<!-- ComponentEnd: TreeGrid -->


<!-- WebComponents, Blazor, React -->

## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

<!-- WebComponents -->
```ts
<igc-grid class="grid">
```
<!-- end: WebComponents -->

```razor
<IgbGrid Class="grid"></IgbGrid>
```

<!-- React -->
```tsx
<IgrGrid className="grid"></IgrGrid>
```
<!-- end: React -->

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
```

### デモ

`sample="/{ComponentSample}/filtering-style", height="500", alt="{Platform} {ComponentTitle} フィルタリング スタイルの例"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

## スタイル設定

フィルター行のスタイル設定は、すべてのテーマ関数とコンポーネント mixin が存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、`grid-theme` を拡張する新しいテーマを作成し、`$filtering-row-text-color`、`$filtering-row-background`、`$filtering-header-text-color` および `$filtering-header-background` パラメーターを受け取る方法です。

```scss
$custom-grid: grid-theme(
    $filtering-row-text-color: #292826,
    $filtering-row-background: #FFCD0F,
    $filtering-header-text-color: #292826,
    $filtering-header-background: #FFCD0F
);
```

以下のように、`grid-theme` は、フィルタリング行とフィルタリングされているそれぞれの列ヘッダーの色のみを制御します。入力グループ、チップ、ボタンなど、フィルタリング行内には明らかに多くのコンポーネントがあります。スタイルの設定は、それぞれに個別のテーマを作成する必要があるため、新しい入力グループのテーマと新しいボタンのテーマを作成します。

```scss
$dark-input-group: input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$dark-button: button-theme(
    $flat-background: #FFCD0F,
    $flat-text-color: #292826,
    $flat-hover-background: #292826,
    $flat-hover-text-color: #FFCD0F
);
```

この例では、Input Group と Button のパラメーターの一部のみを変更しましたが、`input-group-theme` と `button-theme` は、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後のステップは、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。また、入力のプレース ホルダーの色プロパティを設定します。

```scss
@include grid($custom-grid);
.igx-grid__filtering-row {
    @include button($dark-button);
    @include input-group($dark-input-group);

    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

> [!Note]
>`.igx-grid__filtering-row` 内で **igx-button** および **igx-input-group** mixin をスコープし、行フィルター ボタンとその入力グループのみのスタイルを設定します。そうでない場合は、グリッド内の他のボタンと入力グループも影響を受けます。

 > [!Note]
 >コンポーネントが `Emulated` ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
     ::ng-deep {
        @include grid($custom-grid);
        .igx-grid__filtering-row {
            @include button($dark-button);
            @include input-group($dark-input-group);

            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、`igx-palette` および `igx-color` 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```

また `igx-color` を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-grid: grid-theme(
    $filtering-row-text-color: color($dark-palette, "primary", 400),
    $filtering-row-background: color($dark-palette, "secondary", 400),
    $filtering-header-text-color: color($dark-palette, "primary", 400),
    $filtering-header-background: color($dark-palette, "secondary", 400)
);

$dark-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 400),
    $idle-text-color: color($dark-palette, "primary", 400),
    $focused-text-color: color($dark-palette, "primary", 400),
    $filled-text-color: color($dark-palette, "primary", 400)
);

$dark-button: button-theme(
    $flat-background: color($dark-palette, "secondary", 400),
    $flat-text-color: color($dark-palette, "primary", 400),
    $flat-hover-background: color($dark-palette, "primary", 400),
    $flat-hover-text-color: color($dark-palette, "secondary", 400)
);
```

> [!Note]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[スキーマ](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている定義済みスキーマ (この場合は (`light-grid`、`light-input-group` および `light-button` スキーマ) の 1 つを拡張します。

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-text-color:(
           color: ("primary", 400)
        ),
        filtering-row-background:(
           color: ("secondary", 400)
        ),
        filtering-header-text-color:(
           color: ("primary", 400)
        ),
        filtering-header-background:(
           color: ("secondary", 400)
        )
    )
);

// Extending the light input group schema
$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 400)
        ),
        idle-text-color:(
           color: ("primary", 400)
        ),
        focused-text-color:(
           color: ("primary", 400)
        ),
        filled-text-color:(
           color: ("primary", 400)
        )
    )
);

// Extending the light button schema
$custom-button-schema: extend($_light-button,
    (
        flat-background:(
           color: ("secondary", 400)
        ),
        flat-text-color:(
           color: ("primary", 400)
        ),
        flat-hover-background:(
           color: ("primary", 400)
        ),
        flat-hover-text-color:(
           color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル (`light` または `dark`) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-input-group: $custom-input-group-schema,
    igx-button: $custom-button-schema
));

// Defining grid-theme with the global light schema
$custom-grid: grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);

// Defining button-theme with the global light schema
$custom-button: button-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);

// Defining input-group-theme with the global light schema
$custom-input-group: input-group-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

`sample="/{ComponentSample}/filtering-style", height="500", alt="{Platform} {ComponentTitle} フィルタリング スタイルの例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## 既知の問題と制限

> [!Note]
> Firefox などの一部のブラウザーは、地域固有の小数点区切り文字をグループ化区切りと見なすため解析できず、無効になります。数値列フィルター値にそのような値を入力すると、数値の有効な部分のみがフィルター式に適用されます。詳細については、Firefox [問題](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665)を参照してください。

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid -->

### 6.1.0 Volume 0 の重大な変更
* `{ComponentName}` `filteringExpressions` プロパティは削除されます。代わりに `FilteringExpressionsTree` を使用してください。
* `filter_multiple` メソッドは削除されました。`Filter` メソッドおよび `FilteringExpressionsTree` プロパティを代わりに使用してください。
* `Filter` メソッドに新しいシグネチャがあります。以下のパラメーターを受け付けます。
  * `Name` - フィルターする列の名前。
  * `Value` - フィルタリングに使用する値。
  * `ConditionOrExpressionTree` (オプション) - このパラメーターは、`FilteringOperation` または `FilteringExpressionsTree` 型のオブジェクトを受け付けます。簡単なフィルタリングが必要な場合、フィルタリング処理を引数として渡すことができます。高度なフィルタリングの場合、複雑なフィルタリング ロジックを含む式ツリーが引数として渡すことができます。
  * `IgnoreCase` (オプション) - フィルタリングで大文字と小文字を区別するかどうか。
* `FilteringDone` イベントは、フィルター列のフィルタリング状態を含む型 `FilteringExpressionsTree` の 1 パラメーターのみになりました。
* フィルター オペランド: `FilteringExpression` 条件プロパティは、フィルタリング状態メソッドに直接参照せずに `FilteringOperation` を参照するようになりました。
* `ColumnComponent` は、`Filters` プロパティを公開し、`FilteringOperand` クラス参照を取得します。
* カスタム フィルターは、`FilteringOperation` 型の処理で `FilteringOperand` の `Operations` プロパティを生成して {ComponentTitle} の列で使用できます。

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- end: Angular -->

## API リファレンス

* `{ComponentName}`
* `Column`

## その他のリソース

<!-- ComponentStart:  Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName}  **GitHub (英語)**]({GithubLink})

