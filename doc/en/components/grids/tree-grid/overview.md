---
title: {Platform} Tree Grid | Fastest {Platform} Tree Table | Infragistics
_description: The {ProductName} Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# {Platform} Tree Grid Overview and Configuration

{ProductName} Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. Displaying of tabular data has never been easier and beautiful thanks to the Material Table-based UI Tree Grid.

## {Platform} Tree Grid Example

In this example, you can see how users can manipulate hierarchical or flat data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv.

### Example

`sample="/{TreeGridSample}/overview", height="700", alt="{Platform} Tree Grid example"`


## Getting Started with {ProductName} Tree Grid

### Dependencies

To get started with the {Platform} tree grid, first you need to install the {ProductName} <!-- React, WebComponents -->grids<!-- end: React, WebComponents --> package.

<!-- Blazor -->

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](../../general-getting-started-blazor-client.md)
- [Adding Nuget Package](../../general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the tree grid:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->

```cmd
npm install --save {PackageGrids}
```

<!-- WebComponents -->

You also need to include the following import to use the tree grid:

```typescript
import 'igniteui-webcomponents-grids/grids/combined';
```

The corresponding styles should also be referenced. You can choose light or dark option for one of the [themes](../../themes/overview.md) and based on your project configuration to import it:

```typescript
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

Or to link it:
```typescript
<link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css'>
```

For more details on how to customize the appearance of the tree grid, you may have a look at the [styling](overview.md#web-components-tree-grid-styling-configuration) section.
<!-- end: WebComponents -->

<!-- end: Angular, React, WebComponents -->

<!-- Angular, Blazor -->
### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTreeGridModule));
```

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';
// import { IgxTreeGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        // ...
        IgxTreeGridModule,
        // ...
    ]
})
export class AppModule {}
```

<!-- end: Angular, Blazor -->

## Usage

The tree grid shares a lot of features with the grid, but it also adds the ability to display its data hierarchically.
In order to achieve this, the tree grid provides us with a couple of ways to define the relations among our data objects - by using a [child collection](overview.md#child-collection) for every data object or by using [primary and foreign keys](overview.md#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- `GridCell` - Ordinary cell that contains a value.
- `TreeGridCell` - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the `level` property of its inner `treeRow`.

> [!Note]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the `ExpansionDepth` property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection

When we are using the child collection option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in the  tree grid will have a direct reference to any of its children. In this case the data property of our tree grid that contains the original data source will be a hierarchically defined collection.

For this sample, let's use the following collection structure:

```typescript
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
            // ...
        ]
    },
    // ...
]
```

```razor
public class EmployeesNestedDataItem
{
    public double ID { get; set; }
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public List<EmployeesItem> Employees { get; set; }
}
public class EmployeesItem
{
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
}
```

Now let's start by importing our `Data` collection and binding it to our tree grid.


```razor
 <IgbTreeGrid
    AutoGenerate="false"
    ChildDataKey="Employees"
    Data="EmployeesNestedData"
    Name="treeGrid"
    @ref="treeGrid">
        <IgbColumn Field="Name" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="Age" DataType="GridColumnDataType.Number"> </IgbColumn>
</IgbTreeGrid>
```

```html
<igc-tree-grid auto-generate="false" id="treeGrid" name="treeGrid">
    <igc-column field="name" header="Name" data-type="string"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="date"></igc-column>
    <igc-column field="age" header="Age" data-type="number"></igc-column>
</igc-tree-grid>
```

```ts
    constructor() {
        var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
        treeGrid.childDataKey = "Employees";
        treeGrid.data = this.employeesNestedData;
    }
```

In order for the tree grid to build the hierarchy, we will have to set its `ChildDataKey` property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we can disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

We can now enable the row selection and paging features of the tree grid by using the `rowSelection` and the `paging` properties.
We can also enable the summaries, the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<igc-tree-grid auto-generate="false" id="treeGrid" child-data-key="Employees" row-selection="multiple" allow-filtering="true" moving="true">
    <igc-column field="name" header="Name" data-type="string" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="date" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-column field="age" header="Age" data-type="number" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-paginator></igc-paginator>
</igc-tree-grid>
```

```razor
<IgbTreeGrid AutoGenerate="false"
             ChildDataKey="Employees"
             Data="EmployeesNestedData"
             RowSelection="GridSelectionMode.Multiple"
             AllowFiltering=true
             Moving=true
            Name="treeGrid"
            @ref="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true HasSummary=true></IgbColumn>
    <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true Editable=true Resizable=true HasSummary=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true Editable=true Resizable=true HasSummary=true> </IgbColumn>
    <IgbPaginator></IgbPaginator>
</IgbTreeGrid>
```

Finally, we can enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the `GridToolbar`, `GridToolbarHiding`, `GridToolbarPinning` and `GridToolbarExporter` respectively.

```html
<igc-tree-grid auto-generate="false" id="treeGrid" name="treeGrid" child-data-key="Employees" row-selection="multiple" allow-filtering="true" moving="true">
    <igc-column field="name" header="Name" data-type="string" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="date" sortable="true" resizable="true" editable="true"></igc-column>
    <igc-column field="age" header="Age" data-type="number" sortable="true" resizable="true" editable="true"></igc-column>
    <igc-paginator></igc-paginator>
    <igc-grid-toolbar>
        <igc-grid-toolbar-title> Employees </igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding> </igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning> </igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter export-csv="true" export-excel="true"> </igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```

```razor
<IgbTreeGrid AutoGenerate="false"
             ChildDataKey="Employees"
             Data="EmployeesNestedData"
             RowSelection="GridSelectionMode.Multiple"
             AllowFiltering=true
             Moving=true
            Name="treeGrid"
            @ref="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true HasSummary=true></IgbColumn>
    <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true Editable=true Resizable=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true Editable=true Resizable=true > </IgbColumn>
    <IgbPaginator></IgbPaginator>
    <IgbGridToolbar>
        <IgbGridToolbarTitle> Employees </IgbGridToolbarTitle>
        <IgbGridToolbarActions>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
            <IgbGridToolbarExporter></IgbGridToolbarExporter>
    </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbTreeGrid>
```

You can see the result of the code from above at the beginning of this article in the [Tree Grid Example](./overview.md#example) section.

### Primary and Foreign keys
When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the `data` property of our tree grid that contains the original data source will be a flat collection.


```razor
public class EmployeesFlatDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}
```

```typescript
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

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique as it will be our `PrimaryKey`. The ParentID contains the ID of the parent node and could be set as a `ForeignKey`. If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

The parent-child relation is configured using the tree grid's `PrimaryKey` and `ForeignKey` properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

```html
 <igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID" foreign-key="ParentID" allow-filtering="true" moving="true" row-selection="multiple">
    <igc-column field="Name" data-type="string"></igc-column>
    <igc-column field="JobTitle" header="Job Title"></igc-column>
    <igc-column field="Age" data-type="number"></igc-column>
</igc-tree-grid>
```

```razor
<IgbTreeGrid AutoGenerate="false"
             PrimaryKey="ID"
             ForeignKey="ParentID"
             Data="EmployeesFlatDataItem"
             Name="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="JobTitle" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number"></IgbColumn>
</IgbTreeGrid>
```

In addition we will enable the row selection feature of the tree grid by using the rowSelection property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
 <igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID" foreign-key="ParentID" allow-filtering="true" moving="true" row-selection="multiple">
    <igc-column field="Name" data-type="string" sortable="true" editable="true" resizable="true"> </igc-column>
    <igc-column field="JobTitle" header="Job Title" data-type="string" sortable="true" editable="true" resizable="true"> </igc-column>
    <igc-column field="Age" data-type="number" sortable="true" editable="true" resizable="true"> </igc-column>
</igc-tree-grid>
```

```razor
<IgbTreeGrid AutoGenerate="false"
             PrimaryKey="ID"
             ForeignKey="ParentID"
             Data="EmployeesFlatDataItem"
             RowSelection="GridSelectionMode.Multiple"
             AllowFiltering=true
             Moving=true
             Name="treeGrid"
             @ref="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true></IgbColumn>
    <IgbColumn Field="JobTitle" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true Editable=true Resizable=true> </IgbColumn>
</IgbTreeGrid>
```

And here is the final result:

`sample="/{TreeGridSample}/using-primary-foreign-keys", height="700", alt="{Platform} Tree using Primary and Foreign keys example"`

## Persistence and Integration

The indentation of the tree grid cell persists across other tree grid features like filtering, sorting and paging.

- When `Sorting` is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a `VisibleIndex` of 0) is always the tree column.
- The column that ends up with a `VisibleIndex` of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

<!-- WebComponents, Blazor -->
## {Platform} Tree Grid Styling Configuration


In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```ts
<igc-tree-grid class="tree-grid">
```

```razor
<IgbTreeGrid Class="tree-grid">
```

Then set the related CSS properties for that class:

```css
.tree-grid {
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #FFF;
    --ig-grid-expand-icon-color: #FFCD0F;
    --ig-grid-expand-icon-hover-color: #E0B710;
    --ig-grid-row-hover-background: #F8E495;
}
```

`sample="/{TreeGridSample}/overview-styling", height="700", alt="{Platform} Tree Grid styling"`

<!-- end: WebComponents, Blazor -->


## API References

* `TreeGrid`
* `Column`
* `GridToolbar`
* `TreeGridRecord`

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})