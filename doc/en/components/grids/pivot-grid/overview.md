---
title: {Platform} Pivot Grid Component - {ProductName} by Infragistics
_description: Create fast, responsive {Platform} pivot grids and tables with {ProductName}. Perform complex analysis and apply data sorting, grouping, or filtering.
_keywords: {Platform} pivot grid, {Platform} material pivot table, {ProductName}, Infragistics
_license: commercial
mentionedTypes: ["PivotGrid", "PivotDimension", "PivotValue"]
namespace: Infragistics.Controls
---

# {Platform} Pivot Grid Overview

The {Platform} Pivot Grid is used for summing up and representing voluminous multidimensional data in a cross-tabular format. The data summery can be easily and quickly sorted, grouped, or filtered. Such data can include sums, averages, and other statistics. End-users are enabled to modify the pivot table layout through drag-and-drop operations, according to their needs.

The {Platform} Pivot Grid presents data in a pivot table and helps users performing complex analysis on the supplied data set. This sophisticated Pivot Grid control is used for organizing, summarizing, and filtering large volumes of data which is later displayed in a cross-table format. Key features of an {Platform} Pivot Grid are row dimensions, column dimensions, aggregations, and filters.

The `PivotGrid` gives the ability to users to configure and display their data in a multi-dimensional pivot table structure.
The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows complex data analysis based on a simple flat data set. The `PivotGrid` is a feature-rich pivot table that provides easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

## {Platform} Pivot Grid Example

The following is an {Platform} Pivot Grid example in combination with the {Platform} Pivot Data Selector Component. This way you can have more flexible runtime configuration options.

`sample="/{PivotGridSample}/data-selector", height="700", alt="{Platform} Pivot Grid with Pivot Selector Example"`



## Getting Started With {Platform} Pivot Grid

The {Platform} {PivotGridName} can be configured via the `PivotConfiguration` property.

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

<!--React -->
```tsx
<IgrPivotGrid data={pivotData} pivotConfiguration={pivotConfiguration}>
</IgrPivotGrid>
```
<!-- end: React -->

It is defined by three main dimensions: **rows**, **columns** and **values**. The **rows** and **columns** define the grouped structure that is displayed in the rows and columns of the grid. The **values** define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the **filters** configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member values via the UI.

### Dimensions Configuration

Each basic dimension configuration requires a `MemberName` that matches a field from the provided **data**.


Multiple sibling dimensions can be defined, which creates a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips using drag & drop.

A dimension can also describe an expandable hierarchy via the `ChildLevel` property, for example:


<!-- React -->

```tsx
const dimension: IgrPivotDimension = {
    memberName: "AllProducts",
    enabled: true,
    childLevel: {
        memberName: "ProductCategory",
        enabled: true
    }
};

```
<!-- end: React -->

<!-- WebComponents -->
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
<!-- end: WebComponents -->

<!-- Blazor -->
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
<!-- end: Blazor -->

In this case the dimension renders an expander in the related section of the grid (row or column) and allows the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded. This behavior can be controlled with the `DefaultExpandState` property of the Pivot Grid.

### Predefined Dimensions

As part of the Pivot Grid some additional predefined dimensions are exposed for easier configuration:
- `PivotDateDimension`
    Can be used for date fields. Describes the following hierarchy by default:
  - All Periods
  - Years
  - Quarters
  - Months
  - Full Date

It can be set for rows or columns, for example:

<!-- React -->
```ts

const pivotConfiguration: IgrPivotConfiguration = {
    columns: [
        new IgrPivotDateDimension({
            enabled: true,
            memberName: "Date",
        })
    ]
};
```
<!-- end: React -->

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

It also allows for further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

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


<!-- React -->
```tsx
 new IgrPivotDateDimension({
    enabled: true,
    memberName: "Date",
}, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```
<!-- end: React -->

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


### Values Configuration

A value configuration requires a **member** that matches a field from the provided **data**, or it can define a custom **aggregator** function for more complex custom scenarios. Out of the box, there are 4 predefined aggregations that can be used depending on the data type of the data field:

- `PivotNumericAggregate` - for numeric fields.
    Contains the following aggregation functions: `SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `PivotDateAggregate` - for date fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `PivotTimeAggregate` - for time fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `PivotAggregate` - for any other data types. This is the base aggregation.
    Contains the following aggregation functions: `COUNT`.

The current aggregation function can be changed at runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the `AggregateList` property, for example:

<!-- React -->
```typescript
const totalSale = (members: any, data: any) => data.reduce((accumulator:any, value: any) => accumulator + value.UnitPrice * value.UnitsSold, 0);

const totalMin = (members: any, data: any) => {
    return data.map((x:any) => x.UnitPrice * x.UnitsSold).reduce((a:number, b:number) => Math.min(a, b));
};

const totalMax = (members: any, data: any) => {
    return data.map((x:any) => x.UnitPrice * x.UnitsSold).reduce((a:number, b:number) => Math.max(a,b));
};

const pivotConfiguration: IgrPivotConfiguration = {
      values: [
            {
                enabled: true,
                member: "AmountofSale",
                displayName: "Amount of Sale",
                aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "Sum of Sale",
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: totalSale,
                    label: 'Sum of Sale'
                }, {
                    key: 'MIN',
                    aggregator: totalMin,
                    label: 'Minimum of Sale'
                }, {
                    key: 'MAX',
                    aggregator: totalMax,
                    label: 'Maximum of Sale'
                }]
            }
      ]
};
```
<!-- end: React -->

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
                aggregator: IgcTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            },
            aggregateList: [{
                key: 'SUM',
                aggregator: IgcTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            }, {
                key: 'MIN',
                aggregator: IgcTotalSaleAggregate.totalMin,
                label: 'Minimum of Sale'
            }, {
                key: 'MAX',
                aggregator: IgcTotalSaleAggregate.totalMax,
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

The pivot value also provides a `DisplayName` property. It can be used to display a custom name for this value in the column header.

### Enable Property

`PivotConfiguration` is the interface that describes the current state of the `PivotGrid` component. With it the developer can declare fields of the data as **rows**, **columns**, **filters** or **values**. The configuration allows enabling or disabling each of these elements separately. Only enabled elements are included in the current state of the Pivot Grid. The `PivotDataSelector` component utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there is a checkbox in the appropriate state. End-users can easily tweak the pivot state by toggling the different elements using these checkboxes.
The `Enable` property controls if a given `PivotDimension` or `PivotValue` is active and takes part in the pivot view rendered by the Pivot Grid.

### Full Configuration Code

Let's take a look at a basic pivot configuration:

<!-- React -->

```tsx
const pivotConfiguration1: IgrPivotConfiguration = {
    columns: [
        new IgrPivotDateDimension({
            enabled: true,
            memberName: "Date",
        })
    ],
    rows: [
        {
            enabled: true,
            memberName: "SellerCity"
        },
        {
            enabled: true,
            memberName: "ProductName"
        }
    ],
    filters: [
        {
            enabled: true,
            memberName: "SellerName"
        }
    ],
    values: [
        {
            member: "ProductUnitPrice",
            displayName: "Amount of Sale",
            dataType: "currency",
            enabled: true,
            aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "Sum of Sale",
                }
        }
    ]
};
```

<!-- end: React -->

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

                memberName: 'ProductName',
                memberFunction: (data) => data.ProductName,
                enabled: true
            },
            {

                memberName: 'SellerCity',
                memberFunction: (data) => data.SellerCity,
                enabled: true
            }


        ],
        rows: [
            {
                memberName: 'SellerName',
                memberFunction: (data) => data.SellerName,
                enabled: true,
            }
        ],
        values: [
            {
                member: 'AmountofSale',
                displayName: "Amount of Sale",
                aggregate: {
                    aggregator: IgcPivotNumericAggregate.sum,
                    key: 'SUM',
                    label: 'Sum of Sale'
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
            MemberName = "SellerName",
            Enabled = true,
            Name = "pivotDimension1"
        });
    pivotConfiguration.Columns.Add(new IgbPivotDimension()
        {
            MemberName = "ProductName",
            Enabled = true,
            Name = "pivotDimension2"
        });
    pivotConfiguration.Columns.Add(new IgbPivotDimension()
        {
            MemberName = "SellerCity",
            Enabled = true,
            Name = "pivotDimension2"
        });
    pivotConfiguration.Values.Add(new IgbPivotValue()
        {
            Member = "AmountofSale",
            Name = "pivotValue1",
            Enabled = true,
            Aggregate = new IgbPivotAggregator() { Key = "SUM", AggregatorName = PivotAggregationType.SUM, Label = "Sum" }
        });
}
```

This configuration defines 1 row, 1 column and 1 aggregation that sums the values of each dimension groups.
The members match fields available in the provided data source:

```typescript
public data = [
[
    {
        ProductName: `Clothing`,
        ProductUnitPrice: 12.8,
        SellerName: `Stanley Brooker`,
        SellerCity: `Seattle`,
        Date: `2007-01-01T00:00:00`,
        Value: 94.4,
        NumberOfUnits: 282
    },
];
```

```razor
public PivotDataFlat()
{
    this.Add(new PivotDataFlatItem()
    {
        ProductName = @"Clothing",
            ProductUnitPrice = 12.8,
            SellerName = @"Stanley Brooker",
            SellerCity = @"Seattle",
            Date = @"2007-01-01T00:00:00",
            Value = 94.4,
            NumberOfUnits = 282
    });
```

### Full Configuration Example

Using above code will result in the following example which groups the Date unique columns, Product Name and Seller City in unique rows and displays the related aggregations for the amount of sale in the related cells:

`sample="/{PivotGridSample}/features", height="700", alt="{Platform} Pivot Grid Basic Features Example"`

### Auto generate configuration
The `AutoGenerateConfig` property automatically generates dimensions and values based on the data source fields:

- Numeric Fields:
  - Created as `PivotValue` using `PivotNumericAggregate.sum` aggregator.
  - Added to the values collection and enabled by default.

- Non-Numeric Fields:
  - Created as `PivotDimension`.
  - Disabled by default.
  - Added to the columns collection.

- Date Fields(only the first `date` field is enabled, the other `date` fields apply non-numeric fields rule):
  - Created as `PivotDateDimension`
  - Enabled by default
  - added to the rows collection.

This feature allows developers to quickly create a pivot view without manually specifying dimensions and values. With a pivot selector next to the pivot grid, users can enable and reorder dimensions and values as needed.

### Pivot Value Calculation Keys

The Pivot grid provides a customization to the object keys fields it uses to do its pivot calculations.
A more detailed view of how they are used can be seen bellow in example data, where you can see already aggregated values:

```json
[
    {
        ProductCategory: 'All', AllProducts: 'All Products', All: 1000, 'All-Bulgaria': 774, 'All-USA': 829, 'All-Uruguay': 524,
        AllProducts_records: [
            { ProductCategory: 'Clothing', 'All-Bulgaria': 774, 'All-USA': 296, 'All-Uruguay': 456 },
            { ProductCategory: 'Bikes', 'All-Uruguay': 68 },
            { ProductCategory: 'Accessories', 'All-USA': 293 },
            { ProductCategory: 'Components', 'All-USA': 240 }
        ]
    }
];
```

All of these are stored in the **pivotKeys** property which is part of the `PivotConfiguration` and can be used to change the default pivot keys.
- **children** - Field that stores children for hierarchy building. It represents a map from grouped values and all the pivotGridRecords that are based on that value. It can be utilized in very specific scenarios, where there is a need to do something while creating the hierarchies. No need to change this for common usage.
- **records** - Field that stores reference to the original data records. Can be seen in the example from above - **AllProducts_records**. Avoid setting fields in the data with the same name as this property. If your data records has **records** property, you can specify different and unique value for it using the **pivotKeys**.
- **aggregations** - Field that stores aggregation values. It's applied while creating the hierarchies and also it should not be changed for common scenarios.
- **level** - Field that stores dimension level based on its hierarchy. Avoid setting fields in the data with the same name as this property. If your data records has **level** property, you can specify different and unique value for it using the **pivotKeys**.
- **columnDimensionSeparator** - Separator used when generating the unique column field values. It is the dash(**-**) from example value - **All-Bulgaria**.
- **rowDimensionSeparator** - Separator used when generating the unique row field values. It's used when creating the **records** and **level** field.

The default values are:

```typescript
{
    aggregations: 'aggregations',
    records: 'records',
    children: 'children',
    level: 'level',
    rowDimensionSeparator: '_',
    columnDimensionSeparator: '-'
};
```

```razor
@code {
    {
        aggregations: 'aggregations',
        records: 'records',
        children: 'children',
        level: 'level',
        rowDimensionSeparator: '_',
        columnDimensionSeparator: '-'
    };
}
```

> [!Note]
> If you have data field values that contain the default keys, make sure to change the separators that match to any other symbols that you are not currently using. Otherwise could lead to unexpected behavior in calculating and showing the aggregated values.

<!-- Blazor -->
When overriding the `PivotKeys` in Blazor, currently you will need to define all other keys, since assigning a new PivotKeys object, it replaces completely the default ones:

```razor
@code {
    var pivotConfiguration = new IgbPivotConfiguration();
    pivotConfiguration.PivotKeys = new IgbPivotKeys()
    {
        Aggregations = "aggregations",
        Records = "records",
        Children = "children",
        Level = "level",
        RowDimensionSeparator = "_",
        ColumnDimensionSeparator = "^"
    };
}
```
<!-- end: Blazor -->

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generates its columns based on the `Columns` configuration, so setting them declaratively, like in the base grid, is not supported. Such columns are disregarded. |
| Setting duplicate `MemberName` or `Member` property values for dimensions/values. | These properties should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in **Single** mode. | Multiple selection is currently not supported. |
<!--Angular -->
| Merging the dimension members is case sensitive| The Pivot Grid creates groups and merges the same (case sensitive) values. But the dimensions provide `MemberFunction` and this can be changed there, the result of the `MemberFunction` are compared and used as display value.|
<!-- end: Angular -->

## API References

- `PivotConfiguration`
- `PivotGrid`
- `PivotDataSelector`
- `PivotDateDimension`
- `Column`

<!-- ## Additional Resources -->

<!-- TODO write these topics: -->
<!-- * [{Platform} Pivot Grid Features](features.md) -->
<!-- * [{Platform} Pivot Grid Custom Aggregations](remote-operations.md) -->

## Additional Resources

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})


