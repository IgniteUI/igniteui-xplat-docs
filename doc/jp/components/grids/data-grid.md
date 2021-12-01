---
title: $Platform$ データ グリッド コンポーネント | リアルタイム $Platform$ テーブル | インフラジスティックス
_description: インフラジスティックスの $Platform$ グリッド コンポーネントは、高速でリアルタイムの React データ グリッドを作成します。$ProductName$ を使用したデータの表示方法について説明します。
_keywords: $Platform$ Table, Data Grid, overview, $ProductName$, data binding, Infragistics, $Platform$ テーブル, データ グリッド, 概要, データ バインディング, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---
# $Platform$ Data Grid 概要

$ProductName$ Data Table / Data Grid は、表形式の $Platform$ コンポーネントでコーディングや設定をほとんど行わずにデータをすばやくバインドして表示できます。$Platform$ の機能には、フィルタリング、ソート、テンプレート、行選択、行のグループ化、行の固定、および列移動があります。$Platform$ データ テーブルは、ライブ ストリーミング データ用に最適化されており、無制限のデータセットサイズを行数または列数で処理することができます。

## $Platform$ Data Grid の例

このデモは、グリッドで利用可能な機能のいくつかを実装しています:
フィルタリング、グループ化、列のピン固定/ピン固定解除、列の再配置、ソート、および集計。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-overview"
           alt="$Platform$ Data Grid の例"
           github-src="grids/data-grid/overview">
</code-view>

<div class="divider--half"></div>

## 作業の開始

### 依存関係

<!-- Blazor -->
IgniteUI.Blazor パッケージの追加については、以下のトピックを参照してください。
- [作業の開始](..\general-getting-started.md)
- [NuGet パッケージの追加](..\nuget-feed.md)

以下の名前空間を追加してコントロールの実装を開始できます。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor
</pre>
<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->
$Platform$ Grid のパッケージをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
</pre>
<!-- end: Angular, React, WebComponents -->

### モジュールの要件

`Grid` を作成するには、以下のモジュールが必要です。

```razor
IgbDataGridModule.Register(IgniteUIBlazor);
```
<!-- end: Blazor -->

```ts
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';

IgrDataGridModule.register();
```

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';

ModuleManager.register(
    IgcDataGridModule
);
```

<div class="divider--half"></div>

### オプションのモジュール

上記のオプションの `Grid` 機能を使用するには、以下のモジュールが必要です。

```razor
IgbGridColumnOptionsModule.Register(IgniteUIBlazor);
IgbDataGridToolbarModule.Register(IgniteUIBlazor);
IgbSparklineModule.Register(IgniteUIBlazor);
```

```ts
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrDataGridToolbarModule } from "igniteui-react-grids";
import { IgrSparklineModule } from 'igniteui-react-charts';

IgrGridColumnOptionsModule.register();
IgrDataGridToolbarModule.register();
IgrSparklineModule.register();
```

```ts
import { IgcGridColumnOptionsModule } from 'igniteui-webcomponents-grids';
import { IgcGridColumnOptionsComponent } from 'igniteui-webcomponents-grids';
import { IgcDataGridToolbarModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridToolbarComponent } from 'igniteui-webcomponents-grids';
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcGridColumnOptionsModule,
    IgcDataGridToolbarModule,
    IgcSparklineModule
);
```


<div class="divider--half"></div>

### サンプル データ ソース
$Platform$ グリッド モジュールがインポートされました。以下のステップはローカル データにバインドするグリッドの基本的な設定です。

```ts
    this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
    }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
    }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
    }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antony Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
    }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antony Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
    }];
```

```razor
@code {
    public void GenerateData()
    {
        string[] names = new string[] {
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "Nvidia Motherboard",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" };

        string[] countries = new string[] {
            "USA", "UK", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain", };
        string[] status = new string[] { "Packing", "Shipped", "Delivered" };

        var sales = new List<SaleInfo>();

        for (var i = 0; i < 200; i++)
        {
            var price = GetRandomNumber(10000, 90000) / 100;
            var items = GetRandomNumber(4, 30);
            var value = Math.Round(price * items);
            var margin = GetRandomNumber(2, 5);
            var profit = Math.Round((price * margin / 100) * items);
            var country = GetRandomItem(countries);

            var item = new SaleInfo()
            {
                Country = country,
                CountryFlag = GetCountryFlag(country),
                Margin = margin,
                OrderDate = GetRandomDate(),
                OrderItems = items,
                OrderValue = value,
                ProductID = 1001 + i,
                ProductName = GetRandomItem(names),
                ProductPrice = price,
                Profit = Math.Round(profit),
                Status = GetRandomItem(status)
            };
            sales.Add(item);
        }

        this.DataSource = sales;
    }

    public double GetRandomNumber(double min, double max)
    {
        return Math.Round(min + (Rand.NextDouble() * (max - min)));
    }

    public string GetRandomItem(string[] array)
    {
        var index = (int)Math.Round(GetRandomNumber(0, array.Length - 1));
        return array[index];
    }

    public DateTime GetRandomDate() {
        var today = new DateTime();
        var year = today.Year;
        var month = this.GetRandomNumber(1, 9);
        var day = this.GetRandomNumber(10, 27);
        return new DateTime(year, (int)month, (int)day);
    }

    public string GetCountryFlag(string country)
    {
        var flag = "https://static.infragistics.com/xplatform/images/flags/" + country + ".png";
        return flag;
    }

    public class SaleInfo
    {
        public string Status { get; set; }
        public string ProductName { get; set; }
        public string CountryFlag { get; set; }
        public string Country { get; set; }
        public DateTime OrderDate { get; set; }
        public double Profit { get; set; }
        public double ProductPrice { get; set; }
        public double ProductID { get; set; }
        public double OrderValue { get; set; }
        public double OrderItems { get; set; }
        public double Margin { get; set; }
    }
}
```

### 列の自動生成
以下のコードは、$Platform$ データ グリッドを上記のローカルデータにバインドする方法を示しています。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    autoGenerateColumns="true"
    defaultColumnMinWidth="100"
    summaryScope="Root"
    isColumnOptionsEnabled="true"
    isGroupCollapsable="true"
    groupSummaryDisplayMode="RowBottom"
    columnMovingMode="Deferred"
    columnMovingAnimationMode="SlideOver"
    columnMovingSeparatorWidth="2"
    columnShowingAnimationMode="slideFromRightAndFadeIn"
    columnHidingAnimationMode="slideToRightAndFadeOut"
    selectionMode="SingleRow"
    cornerRadiusTopLeft="0"
    cornerRadiusTopRight="0"
    />
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      auto-generate-columns="true"
      default-column-min-width="100"
      summary-scope="Root"
      is-column-options-enabled="true"
      is-group-collapsable="true"
      group-summary-display-mode="RowBottom"
      column-moving-mode="Deferred"
      column-moving-animation-mode="SlideOver"
      column-moving-separator-width="2"
      column-showing-animation-mode="slideFromRightAndFadeIn"
      column-hiding-animation-mode="slideToRightAndFadeOut"
      selection-mode="SingleRow"
      corner-radius-top-left="0"
      corner-radius-top-right="0">
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

```razor
 <IgbDataGrid Height="100%"
    Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="true"
    DefaultColumnMinWidth="100"
    SummaryScope="DataSourceSummaryScope.Root"
    IsColumnOptionsEnabled="true"
    IsGroupCollapsable="true"
    GroupSummaryDisplayMode="GroupSummaryDisplayMode.RowBottom"
    ColumnMovingMode="ColumnMovingMode.Deferred"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnMovingSeparatorWidth="2"
    ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromRightAndFadeIn"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToRightAndFadeOut"
    SelectionMode="GridSelectionMode.SingleRow"
    CornerRadiusTopLeft="0"
    CornerRadiusTopRight="0" />
```

### 列の手動定義

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    autoGenerateColumns="false">
    <IgrNumericColumn field="ProductID" headerText="Product ID"/>
    <IgrTextColumn field="ProductName" headerText="Product Name"/>
    <IgrTextColumn field="QuantityPerUnit" headerText="Quantity Per Unit"/>
    <IgrNumericColumn field="UnitsInStock" headerText="Units In Stock"/>
    <IgrDateTimeColumn field="OrderDate" headerText="Order Date"/>
</IgrDataGrid>
```

```html
<igc-data-grid id="grid"
    width="100%"
    height="500px"
    auto-generate-columns="false">
        <igc-numeric-column field="ProductID" header-text="Product ID"></igc-numeric-column>
        <igc-text-column field="ProductName" header-text="Product Name"></igc-text-column>
        <igc-text-column field="QuantityPerUnit" header-text="Quantity Per Unit"></igc-text-column>
        <igc-numeric-column field="UnitsInStock" header-text="Units In Stock"></igc-numeric-column>
        <igc-date-time-column field="OrderDate" header-text="Order Date"></igc-date-time-column>
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

```razor
<IgbDataGrid Height="100%"
    Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <IgbNumericColumn Field="ProductID" HeaderText="Product ID" />
    <IgbTextColumn Field="ProductName" HeaderText="Product Name" />
    <IgbTextColumn Field="QuantityPerUnit" HeaderText="Quantity Per Unit" />
    <IgbNumericColumn Field="UnitsInStock" HeaderText="Units In Stock" />
    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" />
</IgbDataGrid>
```

### 列のスタイル設定
次のコードは、提供された列のプロパティを使用して特定の列のスタイルを設定する方法を示しています。

```tsx
<IgrTextColumn
    background="SkyBlue"
    textStyle="Italic Bold 16pt Times New Roman"
/>
```

```html
<igc-text-column
    background="SkyBlue"
    text-style="Italic Bold 16pt Times New Roman"
></igc-text-column>
```

```razor
<IgbTextColumn
    Background="SkyBlue"
    FontStyle="italic"
    FontWeight="bold"
    FontFamily="Times New Roman"
    FontSize="16"
/>
```

### その他のリソース

- [アクセシビリティの遵守](data-grid-accessibility.md)
- [セルのアクティブ化](data-grid-cell-activation.md)
- [グリッド編集](data-grid-cell-editing.md)
- [セル選択](data-grid-cell-selection.md)
- [列アニメーション](data-grid-column-animation.md)
- [列の選択](data-grid-column-chooser.md)
- [列フィルタリング](data-grid-column-filtering.md)
- [列移動](data-grid-column-moving.md)
- [列のオプション](data-grid-column-options.md)
- [列サイズの変更](data-grid-column-resizing.md)
- [列の並ソート](data-grid-column-sorting.md)
- [列タイプ](data-grid-column-types.md)
- [パフォーマンス](data-grid-performance.md)
- [行のピン固定](data-grid-row-pinning.md)
- [行グループ](data-grid-row-grouping.md)
- [行の強調表示](data-grid-row-highlighting.md)
<!-- React -->
- [行のページング](data-grid-row-paging.md)
<!-- end: React -->
