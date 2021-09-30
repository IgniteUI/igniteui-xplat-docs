---
title: $Platform$ データ グリッド | 列集計 | インフラジスティックス
_description: Infragistics のグリッド コンポーネントの列集計機能を使用して、件数、最大値、最小値などの集計データを表示します。$ProductName$ テーブルのサンプルを是非お試しください!
_keywords: $Platform$ Table, Data Grid, column, summaries, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 列, 集計, インフラジスティックス
mentionedTypes: ['Grid', 'SummaryScope', 'GroupSummaryDisplayMode']
_language: ja
---

# $Platform$ 列集計

$ProductName$ Data Table / Data Grid は、列集計をサポートしています。エンドユーザーは、グリッドに表示されるデータ量が多い場合などでデータ集計の表示を必要とすることがあります。エンドユーザーは、特定の列のデータから追加情報を取得することもできます。これを実現するには集計が役立ちます。集計を有効にするには、`SummaryScope` プロパティを設定します。

## $Platform$ 列集計の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-summaries"
           alt="$Platform$ 列集計の例"
           github-src="grids/data-grid/column-summaries">
</code-view>

<div class="divider--half"></div>

## SummaryScope プロパティ

グリッドでは、`SummaryScope` プロパティを使用して、構成できる４つの集計設定をサポートします。集計設定は以下のとおりです。

- `Root`: 集計が適用される列にグリッド全体の行の総計を表示します。
- `Groups`: これはグループ化された行に対して有効です。特定のグループ内の行の総計を表示します。
- `Both`: `Groups` と `Root` オプションを同時に使用します。
- `None`: グリッドの集計を無効にします。

## GroupSummaryDisplayMode プロパティ

グリッドは、集計が表示される場所の構成をサポートします。これを構成するには、`GroupSummaryDisplayMode` プロパティを使用します。このプロパティのオプションは以下のとおりです。

- `List`: グループ集計をスパン グループ ヘッダーのフラット リストにレンダリングします。
- `Cells`: グループ ヘッダーをセルとしてレンダリングし、集計値を対応する列に揃えてセル内にレンダリングします。グリッドは、このオプションを使用して列ごとに 1 つの集計のみを表示します。
- `RowTop`: グループ集計をグループの上部に集計行としてレンダリングします。
- `RowBottom`: グループ集計をグループの下部に集計行としてレンダリングします。
- `None`: グループ集計のレンダリングを無効にします。

## コード スニペット

```tsx
<IgrDataGrid
    summaryScope = "Groups"
    groupSummaryDisplayMode = "RowTop"
    height="calc(100% - 40px)"
    width="100%"
    autoGenerateColumns="false"
    dataSource={this.data}>
        <IgrTextColumn field="ProductName" headerText="Product"/>
        <IgrNumericColumn positivePrefix="$" field="BundlePrice" showGroupingSeparator="true" headerText="Price" />
        <IgrNumericColumn field="OrderItems" headerText="Order Items"/>
        <IgrNumericColumn field="OrderValue" showGroupingSeparator="true" headerText="Order Totals"
        positivePrefix="$"  />
        <IgrTextColumn field="Countries" headerText="Ship Country"/>
</IgrDataGrid>
```

```html
<igc-data-grid
    summary-scope="Root"
    group-summary-display-mode="RowTop"
    auto-generate-columns="false"
    is-group-collapsable="true"
    group-header-display-mode="combined"
    default-column-min-width="100"
    >
        <igc-text-column field="ProductName" header-text="Product"></igc-text-column>
        <igc-numeric-column positive-prefix="$" field="BundlePrice" show-grouping-separator="true" header-text="Price" ></igc-numeric-column>
        <igc-numeric-column field="OrderItems" header-text="Order Items"></igc-numeric-column>
        <igc-numeric-column field="OrderValue" show-grouping-separator="true" header-text="Order Totals" positive-prefix="$"></igc-numeric-column>
        <igc-text-column field="Countries" header-text="Ship Country"></igc-text-column>
</igc-data-grid>
```

```ts
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-grids'
import { SummaryOperand, SummaryCalculator, DefaultSummaryResult, IDataSource, ISummaryResult } from 'igniteui-react-core';

public componentDidMount() {
    window.addEventListener('load', this.onLoad);
}

public onLoad() {

    //Count Operand
    const productCount = new IgrColumnSummaryDescription();
    productCount.field = "ProductName";
    productCount.operand = SummaryOperand.Count;
    this.grid.summaryDescriptions.add(productCount);

    //Min Operand with formatting
    const priceMin = new IgrColumnSummaryDescription();
    priceMin.field = "BundlePrice";
    priceMin.operand = SummaryOperand.Min;
    priceMin.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(priceMin);

    //Max Operand and formatting
    const priceMax = new IgrColumnSummaryDescription();
    priceMax.field = "BundlePrice";
    priceMax.operand = SummaryOperand.Max;
    priceMax.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(priceMax);

    //Sum Operand
    const orderSum = new IgrColumnSummaryDescription();
    orderSum.field = "OrderItems";
    orderSum.operand = SummaryOperand.Sum;
    this.grid.summaryDescriptions.add(orderSum);

    //Average Operand and formatting
    const orderValueAvg = new IgrColumnSummaryDescription();
    orderValueAvg.field = "OrderValue";
    orderValueAvg.operand = SummaryOperand.Average;
    orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(orderValueAvg);
}
```

```ts
import { IgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
import { IgcColumnSummaryDescription } from 'igniteui-webcomponents-grids'
import { SummaryOperand, SummaryCalculator, DefaultSummaryResult, IDataSource, ISummaryResult } from 'igniteui-webcomponents-core';

connectedCallback() {

    //Count Operand
    const productCount = new IgcColumnSummaryDescription();
    productCount.field = "ProductName";
    productCount.operand = SummaryOperand.Count;
    this.grid.summaryDescriptions.add(productCount);

    //Min Operand with formatting
    const priceMin = new IgcColumnSummaryDescription();
    priceMin.field = "BundlePrice";
    priceMin.operand = SummaryOperand.Min;
    priceMin.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(priceMin);

    //Max Operand and formatting
    const priceMax = new IgcColumnSummaryDescription();
    priceMax.field = "BundlePrice";
    priceMax.operand = SummaryOperand.Max;
    priceMax.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(priceMax);

    //Sum Operand
    const orderSum = new IgcColumnSummaryDescription();
    orderSum.field = "OrderItems";
    orderSum.operand = SummaryOperand.Sum;
    this.grid.summaryDescriptions.add(orderSum);

    //Average Operand and formatting
    const orderValueAvg = new IgcColumnSummaryDescription();
    orderValueAvg.field = "OrderValue";
    orderValueAvg.operand = SummaryOperand.Average;
    orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(orderValueAvg);
}

```

```razor

<DataGrid Height="500px" Width="100%"
    @ref="DataGridRef"
    SummaryScope="DataSourceSummaryScope.Root"
    GroupSummaryDisplayMode="GroupSummaryDisplayMode.RowTop"
    AutoGenerateColumns="false"
    IsGroupCollapsable="true"
    GroupHeaderDisplayMode="DataSourceSectionHeaderDisplayMode.Combined"
    DataSource="DataSource">
    <TextColumn Field="ProductName" Width="130" HeaderText="Product" />
    <NumericColumn Field="BundlePrice" PositivePrefix="$" Width="120" ShowGroupingSeparator="true" HeaderText="Price" />
    <NumericColumn Field="OrderItems" Width="140" HeaderText="Orders" />
    <NumericColumn Field="OrderValue" Width="160" ShowGroupingSeparator="true" HeaderText="Order Totals" PositivePrefix="$" />
    <TextColumn Field="Country" Width="170" HeaderText="Ship Country" />
</DataGrid>

@code {
    private DataGrid grid;
    private DataGrid DataGridRef
    {
        get { return grid; }
        set
        {
            grid = value;
            this.OnDataGridRef();
            StateHasChanged();
        }
    }

    private void OnDataGridRef()
    {
        var productCount = new ColumnSummaryDescription()
        {
            Field = "ProductName",
            Operand = SummaryOperand.Count
        };

        var priceMin = new ColumnSummaryDescription()
        {
            Field = "BundlePrice",
            Operand = SummaryOperand.Min
        };

        var priceMax = new ColumnSummaryDescription()
        {
            Field = "BundlePrice",
            Operand = SummaryOperand.Max
        };

        var orderSum = new ColumnSummaryDescription()
        {
            Field = "OrderItems",
            Operand = SummaryOperand.Sum
        };

        var orderValueAvg = new ColumnSummaryDescription()
        {
            Field = "OrderValue",
            Operand = SummaryOperand.Average
        };

        this.DataGridRef.SummaryDescriptions.Add(productCount);
        this.DataGridRef.SummaryDescriptions.Add(priceMin);
        this.DataGridRef.SummaryDescriptions.Add(priceMax);
        this.DataGridRef.SummaryDescriptions.Add(orderSum);
        this.DataGridRef.SummaryDescriptions.Add(orderValueAvg);
    }
}
```

<!-- Angular, React, WebComponents -->
## カスタム集計

デフォルトの集計セットを拡張したい場合があります。たとえば、列の特定の値が表示される回数を表示する場合、カスタム集計が必要です。

以下のスニペットは、列に表示される 「USA」 値の数の Count を表示する方法を示します。

```ts
import { IgrProvideCalculatorEventArgs } from 'igniteui-react-core';

public onLoad()
{

    //...
    //Custom Operand with calculator
    const countries = new IgrColumnSummaryDescription();
    countries.field = "Countries";
    countries.operand = SummaryOperand.Custom;
    countries.provideCalculator = this.onProvideCalculator; //refer to class below
    this.grid.summaryDescriptions.add(countries);

}

onProvideCalculator(s: IgrColumnSummaryDescription, e: IgrProvideCalculatorEventArgs) {
    e.calculator = new CustomDomestic();
}

// Custom Calculator - calculates the count for all USA.
class CustomDomestic extends SummaryCalculator
{
    get displayName(): string {
        return "USA";
    }
    public usCountries: number;

    public beginCalculation(a: IDataSource, b: string): void {
        super.beginCalculation(a,b);
        this.usCountries = 0;
    }
    public endCalculation(): ISummaryResult {
        return new DefaultSummaryResult(this.propertyName, SummaryOperand.Custom, this.usCountries)
    }
    public aggregate(a: any): void {
        if(a.Countries === "USA")
        {
            this.usCountries++;
        }
    }
}
```
```ts
import { IgcProvideCalculatorEventArgs } from 'igniteui-webcomponents-core';

onLoad() {

    const countries = new IgcColumnSummaryDescription();
    countries.field = "Countries";
    countries.operand = SummaryOperand.Custom;
    countries.provideCalculator = this.onProvideCalculator; //refer to class below
    this.grid.summaryDescriptions.add(countries);

}

onProvideCalculator(s: IgcColumnSummaryDescription, e: IgcProvideCalculatorEventArgs) {
    e.calculator = new CustomDomestic();
}

// Custom Calculator - calculates the count for all USA.
class CustomDomestic extends SummaryCalculator
{
    get displayName(): string {
        return "USA";
    }
    public usCountries: number;

    public beginCalculation(a: IDataSource, b: string): void {
        super.beginCalculation(a,b);
        this.usCountries = 0;
    }
    public endCalculation(): ISummaryResult {
       return new DefaultSummaryResult(this.propertyName, SummaryOperand.Custom, this.usCountries)
    }
    public aggregate(a: any): void {
       if(a.Countries === "USA")
       {
            this.usCountries++;
       }
    }
}
```
<!--end: Angular, React, WebComponents -->
