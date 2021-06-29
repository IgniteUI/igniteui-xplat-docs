---
title: $Platform$ Data Grid | Real-Time Data Grid and Tables | Infragistics
_description: Infragistics' $Platform$ grid component helps you create a fast, real-time react data grid. Learn how $ProductName$ can help you better display your data!
_keywords: $Platform$ Table, Data Grid, overview, $ProductName$, data binding, Infragistics
mentionedTypes: ['Grid']
---
# $Platform$ Data Grid Component| Infragistics

The $ProductName$ Data Table / Data Grid is a real-time tabular $Platform$ grid component that allows you to quickly bind and display your data with little coding or configuration. Features of the $Platform$ data grid include filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.  The $Platform$ tables are optimized for live, streaming data, with the ability to handle unlimited data set size in number of rows or columns.

## $Platform$ Data Grid Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-overview"
           alt="$Platform$ Data Grid Example"
           github-src="grids/data-grid/overview">
</code-view>

<div class="divider--half"></div>

This demo implements some of the features that are available in the Grid:

- Filtering
- Grouping
- Pin/Unpin columns
- Reposition columns
- Sorting
- Summaries

## Getting Started

### Dependencies

<!-- Blazor -->
Please refer to these topics on adding the IgniteUI.Blazor package.
- [Getting Started](general-getting-started.md)
- [Adding Nuget Package](nuget-feed.md)

Afterwards, you may start implementing the control by adding the following namespaces:
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor
</pre>
<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->
When installing the $Platform$ grid package, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
</pre>
<!-- end: Angular, React, WebComponents -->

### Required Modules

The `Grid` requires the following modules:

```razor
DataGridModule.Register(IgniteUIBlazor);
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

### Optional Modules

The optional `Grid` features, seen above, requires the following modules:

```razor
GridColumnOptionsModule.Register(IgniteUIBlazor);
DataGridToolbarModule.Register(IgniteUIBlazor);
SparklineModule.Register(IgniteUIBlazor);
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

### Sample Data Source
Now that the $Platform$ data grid module is imported, next is the basic configuration of the $Platform$ grid that binds to local data.

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

### Auto-Generate Columns
The following code demonstrates how to bind the $Platform$ data grid to the above local data.

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
 <DataGrid Height="100%"
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

### Manually Define Columns

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
<DataGrid Height="100%"
    Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <NumericColumn Field="ProductID" HeaderText="Product ID" />
    <TextColumn Field="ProductName" HeaderText="Product Name" />
    <TextColumn Field="QuantityPerUnit" HeaderText="Quantity Per Unit" />
    <NumericColumn Field="UnitsInStock" HeaderText="Units In Stock" />
    <DateTimeColumn Field="OrderDate" HeaderText="Order Date" />
</DataGrid>
```

### Styling Columns
The following code demonstrates how to style specific columns using the provided column's properties.

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
<TextColumn    
    Background="SkyBlue"
    FontStyle="italic" 
    FontWeight="bold" 
    FontFamily="Times New Roman" 
    FontSize="16"  
/>
```

### Additional Resources

- [Accessibility Compliance](data-grid-accessibility.md)
- [Cell Activation](data-grid-cell-activation.md)
- [Grid Editing](data-grid-cell-editing.md)
- [Cell Selection](data-grid-cell-selection.md)
- [Column Animation](data-grid-column-animation.md)
- [Column Chooser](data-grid-column-chooser.md)
- [Column Filtering](data-grid-column-filtering.md)
- [Column Moving](data-grid-column-moving.md)
- [Column Options](data-grid-column-options.md)
- [Column Resizing](data-grid-column-resizing.md)
- [Column Sorting](data-grid-column-sorting.md)
- [Column Types](data-grid-column-types.md)
<!-- Angular, React, WebComponents -->
- [Row Paging](data-grid-row-paging.md)
<!-- end: Angular, React, WebComponents -->
- [Row Pinning](data-grid-row-pinning.md)
- [Row Grouping](data-grid-row-grouping.md)
- [Row Highlighting](data-grid-row-highlighting.md)
- [Performance](data-grid-performance.md)