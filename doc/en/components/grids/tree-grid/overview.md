---
title: {Platform} Tree Grid | Fastest {Platform} Tree Table | Infragistics
_description: The {ProductName} Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics
mentionedTypes: ['TreeGrid']
---

# {Platform} Tree Grid Overview and Configuration

{ProductName} `TreeGrid` is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. Displaying of tabular data has never been easier and beautiful thanks to the Material Table-based UI Tree Grid.

## {Platform} Tree Grid Example

In this example, you can see how users can manipulate hierarchical or flat data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv.

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{TreeGridSample}-overview"
           alt="grid example">
</code-view>

<div class="divider--half"></div>

## Getting Started with {ProductName} Tree Grid

### Dependencies

To get started with the {Platform} tree grid, first you need to install the {ProductName} package.

<!-- Blazor -->

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](../../general-getting-started-blazor-client.md)
- [Adding Nuget Package](../../general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the tree grid:

```html
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls
</pre>

<!-- end: Blazor -->

<!-- WebComponents -->

When installing the {Platform} tree grid package, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
</pre>

You also need to include the following imports to include the tree grid and the necessary styles:

```ts
import 'igniteui-webcomponents-grids/grids/combined';
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
import { IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
```

<!-- end: WebComponents -->

<!-- Angular, React, Blazor -->
### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTreeGridModule));
```

<!-- end: Angular, React, Blazor -->

## Usage

The tree grid shares a lot of features with the grid, but it also adds the ability to display its data hierarchically.
In order to achieve this, the tree grid provides us with a couple of ways to define the relations among our data objects - by using a [child collection](overview.md#child-collection) for every data object or by using [primary and foreign keys](overview.md#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- `GridCell` - Ordinary cell that contains a value.
- `TreeGridCell` - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the `level` property of its inner `treeRow`.

> [!NOTE]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the `expansionDepth` property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection
When we are using the **child collection** option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in our tree grid will have a direct reference to any of its children. In this case the `data` property of our tree grid that contains the original data source will be a hierarchically defined collection.

```ts
const EMPLOYEE_DATA = [
    {
        Name: "Johnathan Winchester",
        ID: 1,
        HireDate: new Date(2008, 3, 20),
        Age: 55,
        Employees: [
            {
                Name: "Michael Burke",
                ID: 3,
                HireDate: new Date(2011, 6, 3),
                Age: 43,
                Employees: []
            },
            {
                Name: "Thomas Anderson"
                ID: 2,
                HireDate: new Date(2009, 6, 19),
                Age: 29,
                Employees: []
            },
            ...
        ]
    },
    ...
]
```

In order for the tree grid to build the hierarchy, we will have to set its `childDataKey` property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we can disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

We can now enable the row selection and paging features of the tree grid by using the `rowSelection` and the `paging` properties.
We can also enable the summaries, the filtering, sorting, editing, moving and resizing features for each of our columns.

Finally, we can enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the `GridToolbarComponent`, `GridToolbarHidingComponent`, `GridToolbarPinningComponent` and `GridToolbarExporterComponent` respectively.

### Primary and Foreign keys
When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the `data` property of our tree grid that contains the original data source will be a flat collection.

<!-- Angular, WebComponents -->

```ts
const data = [
    { ID: 1, ParentID: -1, Name: "Casey Houston", JobTitle: "Vice President", Age: 32 },
    { ID: 2, ParentID: 1, Name: "Gilberto Todd", JobTitle: "Director", Age: 41 },
    { ID: 3, ParentID: 2, Name: "Tanya Bennett", JobTitle: "Director", Age: 29 },
    { ID: 4, ParentID: 2, Name: "Jack Simon", JobTitle: "Software Developer", Age: 33 },
    { ID: 5, ParentID: 8, Name: "Celia Martinez", JobTitle: "Senior Software Developer", Age: 44 },
    { ID: 6, ParentID: -1, Name: "Erma Walsh", JobTitle: "CEO", Age: 52 },
    { ID: 7, ParentID: 2, Name: "Debra Morton", JobTitle: "Associate Software Developer", Age: 35 },
    { ID: 8, ParentID: 10, Name: "Erika Wells", JobTitle: "Software Development Team Lead", Age: 50 },
    { ID: 9, ParentID: 8, Name: "Leslie Hansen", JobTitle: "Associate Software Developer", Age: 28 },
    { ID: 10, ParentID: -1, Name: "Eduardo Ramirez", JobTitle: "Development Manager", Age: 53 }
];
```

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique as it will be our `primaryKey`. The ParentID contains the ID of the parent node and could be set as a `foreignKey`. If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

<!-- end: Angular, WebComponents -->

## Persistence and Integration

The indentation of the **tree cells** persists across other tree grid features like filtering, sorting and paging.

- When **sorting** is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a `visibleIndex` of 0) is always the tree column.
- The column that ends up with a `visibleIndex` of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})