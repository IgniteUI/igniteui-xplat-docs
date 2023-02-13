---
title: {Platform} ピボット グリッドとテーブル – {ProductName}
_description: {ProductName} を使用して、高速でレスポンシブな {Platform} ピボット グリッドとテーブルを作成します。複雑な分析を実行し、データのソート、グループ化、またはフィルター処理を適用します。
_keywords: {Platform} pivot grid, {Platform} material pivot table, Infragistics, {Platform} ピボット グリッド, {Platform} マテリアル ピボット テーブル, {ProductName}, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.PivotGrid']
_language: ja
---

# {Platform} ピボット グリッドの概要

{ProductName} ピボット グリッドは、クロス集計形式で大量の多次元データを合計して表すために使用されます。データの概要は、簡単かつ迅速にソート、グループ化、またはフィルタリングできます。このようなデータには、合計、平均、およびその他の統計が含まれる場合があります。エンドユーザーは、必要に応じて、ドラッグアンドドロップ操作でピボット テーブルのレイアウトを変更できます。


## {Platform} ピボット グリッドとは

{Platform} {PivotGridName} は、ピボット テーブルにデータを表示し、提供されたデータ セットで複雑な分析を実行するのに役立ちます。この洗練されたピボット グリッド コントロールは、後でクロス集計形式で表示される大量のデータを整理、集計、およびフィルタリングするために使用されます。{Platform} ピボット グリッドの主な機能は、行のディメンション、列のディメンション、集計、およびフィルターです。

`PivotGrid` を使用すると、ユーザーはデータを多次元のピボット テーブル構造で構成および表示できます。行と列は個別のデータ グループを表し、データ セルの値は集計を表します。これにより、単純なフラット データセットに基づく複雑なデータ分析が可能になります。`PivotGrid` は機能豊富なピボット テーブルで、さまざまなディメンションと値を簡単に構成できるだけでなく、フィルタリングやソートなどの追加のデータ操作も提供します。

## {Platform} ピボット グリッドの例

以下は、{Platform} ピボット データ セレクター コンポーネントと組み合わせた {Platform} ピボット グリッドの例です。このようにして、より柔軟なランタイム構成オプションを使用できます。

<code-view style="height: 750px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{PivotGridSample}-data-selector"
           github-src="{PivotGridSample}/data-selector"
           alt="{Platform} ピボット セレクターを使用したピボット グリッドの例">
</code-view>

## {Platform} ピボット グリッドを使用した作業の開始

{Platform} {PivotGridName} は、`PivotConfiguration` プロパティを介して構成できます。

<!--Angular -->
```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```
<!-- end: Angular -->

<!--WebComponents -->
```html
<igc-pivot-grid #grid1 data="data" pivot-configuration="pivotConfigHierarchy">
</igc-pivot-grid>
```
<!-- end: WebComponents -->

```razor
<IgbPivotGrid PivotConfiguration="PivotConfiguration" Data="PivotData">
</IgbPivotGrid>
```

これは、**rows** (行)、**columns** (列)、**values** (値) の 3 つの主要なディメンションによって定義されます。**rows** と **columns** は、グリッドの行と列に表示されるグループ化された構造を定義します。**values** は、グループの関連する値を計算および表示するために使用される集計フィールドと集計を**定義します。

フィルターは、**filters** 構成プロパティを介して定義することもできます。ディメンションまたは値として追加したくないが、UI を介して関連するメンバー値をフィルタリングしたいフィールドに使用できます。

### ディメンション構成

各基本ディメンション構成には、提供された**データ**のフィールドに一致する `MemberName` が必要です。
<!-- Angular -->
または、複雑なオブジェクトやその他のカスタム シナリオの場合にレコードから値を抽出する `MemberFunction`。
<!-- Angular -->

複数の兄弟ディメンションを定義できます。これにより、関連する行または列のディメンション領域に、より複雑なネストされたグループが作成されます。

ディメンションは、ドラッグアンドドロップを使用して、対応するチップを介して、ある領域から別の領域に並べ替えたり移動したりできます。

ディメンションは、`ChildLevel` プロパティを介して拡張可能な階層を記述することもできます。例えば:
```typescript
   {
            memberFunction: () => 'All',
            memberName: 'AllProducts',
            enabled: true,
            childLevel: {
                memberFunction: (data) => data.ProductCategory,
                memberName: 'ProductCategory',
                enabled: true
            }
    }
```

```razor
@code {
    var pivotConfiguration = new IgbPivotConfiguration();
    pivotConfiguration.Rows.Add(new IgbPivotDimension()
        {
            MemberName = "Product",
            Enabled = true,
            Name = "pivotDimension1",
            ChildLevel = new IgbPivotDimension() { MemberName = "Country", Enabled = true, Name = "pivotDimension2" }
        });
}
```
この場合、ディメンションはグリッドの関連セクション (行または列) にエキスパンダーを描画し、階層の一部として子を展開または縮小ことができます。デフォルトでは、行のディメンションは最初に展開されます。この動作は、ピボット グリッドの `DefaultExpandState` プロパティで制御できます。

### 事前定義されたディメンション

ピボット グリッドの一部として、構成を容易にするために、いくつかの追加の事前定義されたディメンションが公開されています:
- `PivotDateDimension`
    日付フィールドに使用できます。デフォルトで次の階層を記述します:
    - すべての期間
    - 年
    - 四半期
    - 月
    - 完全な日付

次のように、行または列に設定できます:

<!-- Angular -->
```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        new IgxPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
public pivotConfigHierarchy: IgcPivotConfiguration = {
    rows: [
        new IgcPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```
<!-- end: WebComponents -->

```razor
@code {
    IgbPivotDateDimension dateDim = new IgbPivotDateDimension();
    dateDim.BaseDimension = new IgbPivotDimension()
        {
            MemberName = "Date",
            Enabled = true
        };
    _config.Rows.Add(dateDim);
}
```

また、階層の特定の部分を有効または無効にするために、2 番目のオプション パラメーターを介してさらにカスタマイズすることもできます。例えば:

<!-- Angular -->
```typescript
 new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
 new IgcPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```
<!-- end: WebComponents -->

```razor
@code {
    IgbPivotDateDimension dateDim = new IgbPivotDateDimension();
    dateDim.BaseDimension = new IgbPivotDimension()
        {
            MemberName = "Date",
            Enabled = true
        };
    dateDim.Options = new IgbPivotDateDimensionOptions()
        {
            Years = true,
            Months = true,
            FullDate = true,
            Quarters = true
        };
    _config.Rows.Add(dateDim);
}
```


### 値の構成

値の構成には、提供された**データ**のフィールドに一致する**メンバー**が必要です。または、より複雑なカスタム シナリオ用にカスタム **aggregator** 関数を定義できます。データ フィールドのデータ型に応じて使用できる 4 つの事前定義された集計があります:

- `PivotNumericAggregate` - 数値フィールド用。
    次の集計関数が含まれています: `SUM`、`AVG`、`MIN`、`MAX`、`COUNT`。
- `PivotDateAggregate` - 日付フィールド用。
    次の集計関数が含まれています: `LATEST`、`EARLIEST`、`COUNT`。
- `PivotTimeAggregate` - 時間フィールド用。
    次の集計関数が含まれています: `LATEST`、`EARLIEST`、`COUNT`。
- `PivotAggregate` - その他のデータ型用。これが基本集計です。
    次の集計関数が含まれています: `COUNT`。

現在の集計関数は、バリューチップのドロップダウンを使用して実行時に変更できます。デフォルトでは、フィールドのデータ型に基づいて使用可能な集計のリストが表示されます。集計のカスタム リストは、`AggregateList` プロパティを介して設定することもできます。例えば:

<!-- Angular -->
```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    values: [
        {
            member: 'AmountOfSale',
            displayName: 'Amount of Sale',
            aggregate: {
                key: 'SUM',
                aggregator: IgxTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            },
            aggregateList: [{
                key: 'SUM',
                aggregator: IgxTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            }, {
                key: 'MIN',
                aggregator: IgxTotalSaleAggregate.totalMin,
                label: 'Minimum of Sale'
            }, {
                key: 'MAX',
                aggregator: IgxTotalSaleAggregate.totalMax,
                label: 'Maximum of Sale'
            }]
        }
    ]
}

public static totalSale: PivotAggregation = (members, data: any) =>
    data.reduce((accumulator, value) => accumulator + value.UnitPrice * value.UnitsSold, 0);

public static totalMin: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.min(a, b));
};

public static totalMax: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.max(a,b));
};
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
public pivotConfigHierarchy: IgcPivotConfiguration = {
    values: [
        {
            member: 'AmountOfSale',
            displayName: 'Amount of Sale',
            aggregate: {
                key: 'SUM',
                aggregator: IgxTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            },
            aggregateList: [{
                key: 'SUM',
                aggregator: IgxTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            }, {
                key: 'MIN',
                aggregator: IgxTotalSaleAggregate.totalMin,
                label: 'Minimum of Sale'
            }, {
                key: 'MAX',
                aggregator: IgxTotalSaleAggregate.totalMax,
                label: 'Maximum of Sale'
            }]
        }
    ]
}

public static totalSale: PivotAggregation = (members, data: any) =>
    data.reduce((accumulator, value) => accumulator + value.UnitPrice * value.UnitsSold, 0);

public static totalMin: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.min(a, b));
};

public static totalMax: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.max(a,b));
};
```
<!-- end: WebComponents -->

```razor
@code {
    IgbPivotConfiguration pivotConfiguration1 = new IgbPivotConfiguration();
    IgbPivotValue pivotValue = new IgbPivotValue()
        {
            Member = "Sales",
            Name = "pivotValue1",
            DisplayName = "Amount of Sales",
            Enabled = true,
            Aggregate = new IgbPivotAggregator() { Key = "sum", AggregatorName = PivotAggregationType.SUM, Label = "Sum of Sales" }
        };
    pivotValue.AggregateList.Add(new IgbPivotAggregator() { Key = "sum", AggregatorName = PivotAggregationType.SUM, Label = "Sum of Sales" });
    pivotValue.AggregateList.Add(new IgbPivotAggregator() { Key = "min", AggregatorName = PivotAggregationType.MIN, Label = "Minimum of Sales" });
    pivotValue.AggregateList.Add(new IgbPivotAggregator() { Key = "max", AggregatorName = PivotAggregationType.MAX, Label = "Maximum of Sales" });
    pivotConfiguration1.Values.Add(pivotValue);
```

ピボット値は `DisplayName` プロパティも提供します。この値のカスタム名を列ヘッダーに表示するために使用できます。

### プロパティを有効にする

`PivotConfiguration` は、`PivotGrid` コンポーネントの現在の状態を記述するインターフェースです。これを使用すると、開発者はデータのフィールドを **rows**、**columns**、**filters** または **values** (行、列、フィルター、値) として宣言できます。この構成では、これらの各要素を個別に有効または無効にすることができます。ピボット グリッドの現在の状態には、有効な要素のみが含まれます。`PivotDataSelector` コンポーネントは同じ構成を利用し、すべての有効と無効の要素のリストを表示します。それぞれについて、適切な状態のチェックボックスがあります。エンドユーザーは、これらのチェックボックスを使用してさまざまな要素を切り替えることにより、ピボット状態を簡単に調整できます。
`Enable` プロパティは、特定の `PivotDimension` または `PivotValue` がアクティブであり、ピボット グリッドによって描画されるピボット ビューに参加するかどうかを制御します。

### 完全な構成のコード

基本的なピボット構成を見てみましょう:

<!-- Angular -->
```typescript
      public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {

                memberName: 'Product',
                memberFunction: (data) => data.Product.Name,
                enabled: true
            }

        ],
        rows: [
            {
                memberName: 'Seller',
                memberFunction: (data) => data.Seller.Name,
                enabled: true,
            }
        ],
        values: [
            {
                member: 'NumberOfUnits',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true

            }
        ]
    };
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
      public pivotConfigHierarchy: IgcPivotConfiguration = {
        columns: [
            {

                memberName: 'Product',
                memberFunction: (data) => data.Product.Name,
                enabled: true
            }

        ],
        rows: [
            {
                memberName: 'Seller',
                memberFunction: (data) => data.Seller.Name,
                enabled: true,
            }
        ],
        values: [
            {
                member: 'NumberOfUnits',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true

            }
        ]
    };
```
<!-- end: WebComponents -->

```razor
    IgbPivotConfiguration pivotConfiguration = new IgbPivotConfiguration();
    pivotConfiguration.Rows.Add(new IgbPivotDimension()
        {
            MemberName = "Product",
            Enabled = true,
            Name = "pivotDimension1"
        });
    pivotConfiguration.Columns.Add(new IgbPivotDimension()
        {
            MemberName = "Country",
            Enabled = true,
            Name = "pivotDimension2"
        });
    pivotConfiguration.Values.Add(new IgbPivotValue()
        {
            Member = "UnitsSold",
            Name = "pivotValue1",
            Enabled = true,
            Aggregate = new IgbPivotAggregator() { Key = "sum", AggregatorName = PivotAggregationType.SUM, Label = "Sum" }
        });
}
```

この構成では、各ディメンション グループの値を合計する 1 行、1 列、および 1 つの集計が定義されます。
メンバーは、提供されたデータ ソースで使用可能なフィールドと一致します。

```typescript
public data = [
[
    {
        Product: {
            Name: 'Clothing',
            UnitPrice: '12.814860936633712'
        },
        Seller: {
            Name: 'Stanley Brooker',
            City: 'Seattle'
        },
        Date: '2007-01-01T00:00:00',
        Value: '94.2652032683907',
        NumberOfUnits: '282'
    },
];
```

```
public PivotSalesData()
{
    this.Add(new PivotSalesDataItem()
    {
        Country = @"UK",
        Product = @"Vermont",
        UnitsSold = @"501",
        ManufacturingPrice = 15,
        SalePrice = 23,
        GrossSales = 26440,
        Discounts = double.NaN,
        Sales = 26440,
        COGS = 16185,
        Profit = 11255,
        Date = @"1/1/20",
        MonthName = @"January",
        Year = @"2020"
    });
```

### 完全な構成の例

上記のコードを使用すると、Product (製品) カテゴリの一意の列、Sellers Countries (売り手の国) を一意の行にグループ化し、関連するセルのユニット数に関連する集計を表示する次の例が得られます。

<code-view style="height: 700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{PivotGridSample}-features"
           github-src="{PivotGridSample}/features"
           alt="{Platform} ピボット グリッドの例">
</code-view>


## 既知の問題と制限

|制限|説明|
|--- |--- |
| 列を宣言的に設定することはサポートされていません。 | ピボット グリッドは `Columns` (列) の構成に基づいて列を生成するため、ベース グリッドのように宣言的に設定することはサポートされていません。このような列は無視されます。 |
| ディメンション / 値に重複した `MemberName` または `Member` プロパティ値を設定します。 | これらのプロパティは、各ディメンション / 値に対して一意である必要があります。複製すると、最終結果からデータが失われる可能性があります。 |
| 行選択は、**Single** (単一) モードでのみサポートされます。 | 現在、複数選択はサポートされていません。 |
<!--Angular -->
| ディメンション メンバーのマージでは大文字と小文字が区別されます。| ピボット グリッドはグループを作成し、同じ (大文字と小文字を区別する) 値をマージします。ただし、ディメンションは `MemberFunction` を提供し、これはそこで変更できます。`MemberFunction` の結果が比較され、表示値として使用されます。|
<!-- end: Angular -->

## API リファレンス

* `PivotConfiguration`
* `PivotGrid`
* `PivotDataSelector`
* `PivotDateDimension`
* `Column`

<!-- ## その他のリソース

* [{Platform} ピボット グリッドの機能](features.md)
* [{Platform} ピボット グリッド カスタム集計](remote-operations.md) -->

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})


