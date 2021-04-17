---
title: $Platform$ Data Grid | Column Summaries | Infragistics
_description: Use Infragistics' $Platform$ grid component's column summaries feature to display summarized data such as count, max, min and many more. Check out $ProductName$ table demos!
_keywords: $Platform$ Table, Data Grid, column, summaries, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'SummaryScope', 'GroupSummaryDisplayMode']
---

# $Platform$ Column Summaries

The $ProductName$ Data Table / Data Grid supports column summaries. In some cases, your end users may be overwhelmed by the amount of data displayed in the grid, and often may be looking for a summary of the data. Your end users may also want to derive additional information from the data of a specific column. Summaries help your end users achieve this, and you can enable them by setting the `SummaryScope` property.

## $Platform$ Column Summaries Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-summaries"
           alt="$Platform$ Column Summaries Example"
           github-src="grids/data-grid/column-summaries">
</code-view>

<div class="divider--half"></div>

## Summary Scope Property

The $Platform$ data grid supports 4 summary settings that you can configure using the `SummaryScope` property. These are listed and described below:

- `Root`: This will display a grand total for all rows in the grid for the column the summary is applied to.
- `Groups`: This is specific to grouped rows and shows the grand total for all rows in a particular group.
- `Both`: This will use the `Groups` and `Root` options simultaneously.
- `None`: This will disable summaries for the grid.

## Group Summary Display Mode Property

The $Platform$ data grid supports configuration of the locations that summaries are displayed. You can configure this by using the `GroupSummaryDisplayMode` property. The different options for this property are listed and described below:

- `List`: This will render the group summaries in a flat list in the spanning group header.
- `Cells`: This will render the group header as cells, and the summary values will be rendered inside the cells, aligned with their corresponding column. The grid will only display a single summary per column using this option.
- `RowTop`: This will render the group summaries as summary rows at the top of the group.
- `RowBottom`: This will render the group summaries as summary rows at the bottom of the group.
- `None`: This will disable group summary rendering.

## Code Snippets

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
## Custom Summaries

In some situations, you may want to expand the default set of summaries. For example, if you were looking to show the number of times a particular value in a column appears, a custom summary would be required for this.

The snippets below demonstrate how to display a Count for number of "USA" values appear in the column.

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
