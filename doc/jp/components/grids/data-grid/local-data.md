---
title: {Platform} データ グリッド | ローカル データ ソースのバインディング | インフラジスティックス
_description: Infragistics のグリッド コントロールを使用してデータの配列にバインドします。{ProductName} を使用したデータの表示方法について説明します。
_keywords: {Platform} Table, Data Grid, binding to data, {ProductName}, Infragistics, data binding, {Platform} テーブル, データ グリッド, データへのバインド, データ バインディング, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.Column"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} ローカル データのバインディング

次のサンプルは、データの配列への {ProductName} Data Table / Data Grid データ バインディングを示します。

## {Platform} ローカル データのバインディングの例


`sample="/grids/data-grid/binding-local-data", height="600", alt="{Platform} ローカル データのバインディングの例"`



## コード スニペット

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    rowHeight="45"
    autoGenerateColumns="false"
    dataSource={this.data}>
        <IgrTextColumn field="ProductID" headerText="Order ID" width="*>70" horizontalAlignment="center"/>
        <IgrTextColumn field="ProductName" headerText="Product Name"   />
        <IgrNumericColumn field="ProductPrice" headerText="Price" width="*>90"
        positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>
        <IgrNumericColumn field="OrderItems" headerText="Orders" width="*>70"/>
        <IgrNumericColumn field="OrderValue" headerText="Order Value" width="*>100"
        positivePrefix="$" showGroupingSeparator="true" />
        <IgrDateTimeColumn field="OrderDate" headerText="Order Date" width="*>100"
        horizontalAlignment="right" dateTimeFormat="DateShort" />
        <IgrImageColumn field="CountryFlag" headerText="Country" width="*>100"
        contentOpacity="1" horizontalAlignment="center"/>
        <IgrNumericColumn field="Margin" headerText="Margin" width="90"
        positiveSuffix="%" horizontalAlignment="center" />
        <IgrNumericColumn field="Profit" headerText="Profit" width="70"
        positivePrefix="$" showGroupingSeparator="true" />
        <IgrTextColumn field="Status" headerText="Status" width="110"
        horizontalAlignment="center"   />
</IgrDataGrid>
```

```ts
public data: any[];
public initData() {
        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "Nvidia Motherboard",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];

        const countries: string[] = ["USA", "UK", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain",];
        const status: string[] = [ "Packing", "Shipped", "Delivered"]
        const sales: any[] = [];

        for (let i = 0; i < 200; i++) {
            const price = this.getRandomNumber(10000, 90000) / 100;
            const items = this.getRandomNumber(4, 30);
            const value = Math.round(price * items);
            const margin = this.getRandomNumber(2, 5);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                Country: country,
                CountryFlag: this.getCountryFlag(country),
                Margin: margin,
                OrderDate: this.getRandomDate(),
                OrderItems: items,
                OrderValue: value,
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                ProductPrice: price,
                Profit: Math.round(profit),
                Status: this.getRandomItem(status),
            });
        }

        this.data = sales;
    }
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <IgbTextColumn Field="ProductID" Width="110" HeaderText="ID" HorizontalAlignment="CellContentHorizontalAlignment.Center" />
    <IgbTextColumn Field="ProductName" HeaderText="Product" Width="120" />
    <IgbImageColumn Field="CountryFlag" HeaderText="Country" Width="130"/>
    <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="110" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="140" PositivePrefix ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="160" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="150" DateTimeFormat="DateTimeFormats.DateShort" />
    <IgbNumericColumn Field="Margin" Width="140" PositivePrefix="$"/>
    <IgbNumericColumn Field="Profit" Width="140" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbTextColumn Field="Status" Width="140" />
</IgbDataGrid>

@code {

    private List<SaleInfo> DataSource;
    private Random Rand = new Random();

    protected override void OnInitialized()
    {
        base.OnInitialized();

        GenerateData();
    }

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

<!-- TODO ADD WC, ETC. -->

## API リファレンス

 - `Grid`