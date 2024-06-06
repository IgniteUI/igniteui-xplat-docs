---
title: {Platform} {ComponentTitle} Multi-Column Headers - {ProductName}
_description: Start grouping column headers by placing them under a common hierarchical header with the help of {ProductName} grid and combine them into multi headers.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Multi-Column Headers, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Multi-Column Headers Overview

The {ProductName} Multi-Column Headers feature in {Platform} {ComponentTitle} allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the `{ComponentName}` could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## {Platform} {ComponentTitle} Multi-Column Headers Example

`sample="/{ComponentSample}/multi-column-headers-overview", height="550", alt="{Platform} {ComponentTitle} Multi Column Headers Overview Example"`



The declaration of multi-column headers is achieved by wrapping a set of columns into an `ColumnGroup` component with `Header` title information passed.

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AllowFiltering=true>
    <IgbColumnGroup Header="Contact Information">
        <IgbColumn Field="Phone" Sortable=true Resizable=true></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true Resizable=true></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true Resizable=true></IgbColumn>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} allow-filtering="true">
    <igc-column-group header="Contact Information">
        <igc-column sortable="true" resizable="true" field="Phone"></igc-column>
        <igc-column sortable="true" resizable="true" field="Fax"></igc-column>
        <igc-column sortable="true" resizable="true" field="PostalCode"></igc-column>
    </igc-column-group>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} allowFiltering="true">
    <IgrColumnGroup header="Contact Information">
        <IgrColumn sortable="true" resizable="true" field="Phone"></IgrColumn>
        <IgrColumn sortable="true" resizable="true" field="Fax"></IgrColumn>
        <IgrColumn sortable="true" resizable="true" field="PostalCode"></IgrColumn>
    </IgrColumnGroup>
</{ComponentSelector}>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AllowFiltering=true PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumnGroup Header="Contact Information">
        <IgbColumn Field="Phone" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} primaryKey="ID" foreignKey="ParentID">
    <igc-column-group header="Contact Information">
        <igc-column field="Phone" data-type="String" sortable="true" resizable="true"></igc-column>
        <igc-column field="Fax" data-type="String" sortable="true" resizable="true"></igc-column>
        <igc-column field="PostalCode" data-type="String" sortable="true" resizable="true"></igc-column>
    </igc-column-group>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} primaryKey="ID" foreignKey="ParentID">
    <IgrColumnGroup header="Contact Information">
        <IgrColumn sortable="true" resizable="true" field="Phone" dataType={GridColumnDataType.String}></IgrColumn>
        <IgrColumn sortable="true" resizable="true" field="Fax" dataType={GridColumnDataType.String}></IgrColumn>
        <IgrColumn sortable="true" resizable="true" field="PostalCode" dataType={GridColumnDataType.String}></IgrColumn>
    </IgrColumnGroup>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" displayDensity="compact" [moving]="true" [allowFiltering]="true">
    <igx-column field="CustomerID" data-type="string" sortable="true" resizable="true"></igx-column>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address" data-type="string" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" data-type="string" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" data-type="string" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" data-type="string" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" data-type="string" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" data-type="string" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```

```razor
<{ComponentSelector} Data="HierarchicalCustomers" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID" Moving="true" AllowFiltering="true">
    <IgbColumn Field="CustomerID" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumnGroup Header="Address Information">
        <IgbColumnGroup Header="Location">
            <IgbColumn Field="Address" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="City" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="PostalCode" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Country" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
        <IgbColumnGroup Header="Contact Information">
            <IgbColumn Field="Phone" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Fax" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" moving="true" allow-filtering="true">
    <igc-column field="CustomerID" sortable="true" resizable="true"> </igc-column>
    <igc-column-group header="Address Information">
        <igc-column-group header="Location">
            <igc-column field="Address" sortable="true" resizable="true"></igc-column>
            <igc-column field="City" sortable="true" resizable="true"></igc-column>
            <igc-column field="PostalCode" sortable="true" resizable="true"></igc-column>
            <igc-column field="Country" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
        <igc-column-group header="Contact Information">
            <igc-column field="Phone" sortable="true" resizable="true"></igc-column>
            <igc-column field="Fax" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-hierarchical-grid>
```
<!-- end: WebComponents -->

```tsx
<IgrHierarchicalGrid autoGenerate="false" data={this.hierarchicalCustomers} ref={this.hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving="true" allowFiltering="true">
    <IgrColumn sortable="true" resizable="true" field="CustomerID" dataType={GridColumnDataType.String}></IgrColumn>
    <IgrColumnGroup header="Address Information">
        <IgrColumnGroup header="Location">
            <IgrColumn sortable="true" resizable="true" field="Address" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn sortable="true" resizable="true" field="City" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn sortable="true" resizable="true" field="PostalCode" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn sortable="true" resizable="true" field="Country" dataType={GridColumnDataType.String}></IgrColumn>
        </IgrColumnGroup>
        <IgrColumnGroup header="Contact Information">
            <IgrColumn sortable="true" resizable="true" field="Phone" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn sortable="true" resizable="true" field="Fax" dataType={GridColumnDataType.String}></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting `ColumnGroup` leads to the desired result.

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AllowFiltering=true>
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true Movable=true></IgbColumn>
        <IgbColumnGroup Header="Person Details" Movable=true>
            <IgbColumn Field="ContactName" Sortable=true Resizable=true Movable=true></IgbColumn>
            <IgbColumn Field="ContactTitle" Sortable=true Resizable=true Movable=true></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} height="600px" allow-filtering="true">
    <igc-column-group header="General Information">
        <igc-column movable="true" sortable="true" resizable="true" field="CompanyName"></igc-column>
        <igc-column-group movable="true" header="Person Details">
            <igc-column movable="true" pinned="false" sortable="true" resizable="true" field="ContactName"></igc-column>
            <igc-column movable="true" sortable="true" resizable="true" field="ContactTitle"></igc-column>
        </igc-column-group>
    </igc-column-group>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} height="600px" allowFiltering="true">
    <IgrColumnGroup header="General Information">
        <IgrColumn movable="true" sortable="true" resizable="true" field="CompanyName"></IgrColumn>
        <IgrColumnGroup movable="true" header="Person Details">
            <IgrColumn movable="true" pinned="false" sortable="true" resizable="true" field="ContactName"></IgrColumn>
            <IgrColumn movable="true" sortable="true" resizable="true" field="ContactTitle"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" primaryKey="ID" foreignKey="ParentID" [moving]="true">
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [resizable]="true" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AllowFiltering=true PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="HireDate" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumnGroup Header="Person Details" Movable=true>
            <IgbColumn Field="ID" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="Title" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Age" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.Number"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} primary-key="ID" foreign-key="ParentID" moving="true">
    <igc-column-group pinned="false" header="General Information">
        <igc-column field="HireDate" data-type="date" sortable="true" resizable="true"></igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ID" data-type="number" resizable="true" filterable="false"></igc-column>
            <igc-column field="Title" data-type="string" sortable="true" resizable="true"></igc-column>
            <igc-column field="Age" data-type="number" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} primaryKey="ID" foreignKey="ParentID" moving="true">
    <IgrColumnGroup pinned="false" header="General Information">
        <IgrColumn field="HireDate" sortable="true" resizable="true" dataType={GridColumnDataType.Date}></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn field="ID" resizable="true" filterable="true" dataType={GridColumnDataType.Number}></IgrColumn>
            <IgrColumn field="Title" sortable="true" resizable="true" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn field="Age" sortable="true" resizable="true" dataType={GridColumnDataType.Number}></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" displayDensity="compact" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```

```razor
<{ComponentSelector} Data="HierarchicalCustomers" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID" Moving="true" AllowFiltering="true">
    <IgbColumn Field="CustomerID" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumnGroup Header="Person Details">
            <IgbColumn Field="ContactName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="ContactTitle" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" moving="true" allow-filtering="true">
    <igc-column field="CustomerID" dataType="string" sortable="true" resizable="true"> </igc-column>
    <igc-column-group header="General Information">
        <igc-column field="CompanyName" dataType="string" sortable="true" resizable="true"></igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ContactName" dataType="string" sortable="true" resizable="true"></igc-column>
            <igc-column field="ContactTitle" dataType="string" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-hierarchical-grid>
```
<!-- end: WebComponents -->

```tsx
<IgrHierarchicalGrid autoGenerate="false" data={this.hierarchicalCustomers} ref={this.hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving="true" allowFiltering="true">
    <IgrColumn sortable="true" resizable="true" field="CustomerID" dataType={GridColumnDataType.String}></IgrColumn>
    <IgrColumnGroup header="General Information">
        <IgrColumn sortable="true" resizable="true" field="CompanyName" dataType={GridColumnDataType.String}></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn sortable="true" resizable="true" field="ContactName" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn sortable="true" resizable="true" field="ContactTitle" dataType={GridColumnDataType.String}></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

Every `ColumnGroup` supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).
> [!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AllowFiltering=true>
    <IgbColumnGroup Header="General Information" Pinned=true>
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true Movable=true></IgbColumn>
    </IgbColumnGroup>
    <IgbColumn Field="Phone" Sortable=true Resizable=true></IgbColumn>
    <IgbColumn Field="Fax" Sortable=true Resizable=true></IgbColumn>
    <IgbColumn Field="PostalCode" Sortable=true Resizable=true></IgbColumn>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} height="600px" allow-filtering="true">
    <igc-column-group  movable="true" pinned="true" header="General Information">
        <igc-column movable="true" sortable="true" resizable="true" field="CompanyName"></igc-column>
    </igc-column-group>
    <igc-column sortable="true" resizable="true" field="Phone"></igc-column>
    <igc-column sortable="true" resizable="true" field="Fax"></igc-column>
    <igc-column sortable="true" resizable="true" field="PostalCode"></igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} height="600px" allowFiltering="true">
    <IgrColumnGroup movable="true" pinned="true" header="General Information">
        <IgrColumn movable="true" sortable="true" resizable="true" field="CompanyName"></IgrColumn>
    </IgrColumnGroup>
    <IgrColumn sortable="true" resizable="true" field="Phone"></IgrColumn>
    <IgrColumn sortable="true" resizable="true" field="Fax"></IgrColumn>
    <IgrColumn sortable="true" resizable="true" field="PostalCode"></IgrColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" primaryKey="ID" foreignKey="ParentID" [moving]="true">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
    <igx-column field="Name" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=data AllowFiltering=true PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="Phone" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.String"></IgbColumn>
    </IgbColumnGroup>
    <IgbColumn Field="Name" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Title" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Age" Sortable=true Resizable=true DataType="GridColumnDataType.Number"></IgbColumn>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} primary-key="ID" foreign-key="ParentID" moving="true">
    <igc-column-group header="Contact Information">
        <igc-column field="Phone" data-type="String" sortable="true" resizable="true"></igc-column>
    </igc-column-group>
    <igc-column field="Name" data-type="String" sortable="true" resizable="true"></igc-column>
    <igc-column field="Title" data-type="String" sortable="true" resizable="true"></igc-column>
    <igc-column field="Age" data-type="Number" sortable="true" resizable="true"></igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} primaryKey="ID" foreignKey="ParentID" moving="true">
    <IgrColumnGroup header="Contact Information">
        <IgrColumn field="Phone" movable="true" sortable="true" resizable="true" dataType={GridColumnDataType.String}></IgrColumn>
    </IgrColumnGroup>
    <IgrColumn field="Name" sortable="true" resizable="true" dataType={GridColumnDataType.String}></IgrColumn>
    <IgrColumn field="Title" sortable="true" resizable="true" dataType={GridColumnDataType.String}></IgrColumn>
    <IgrColumn field="Age" sortable="true" resizable="true" dataType={GridColumnDataType.Number}></IgrColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" displayDensity="compact" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```

```razor
<{ComponentSelector} Data="HierarchicalCustomers" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID" Moving="true" AllowFiltering="true">
    <IgbColumn Field="CustomerID" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumnGroup Movable=true Pinned="true" Header="General Information">
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumnGroup Movable=true Pinned="true" Header="General Information">
            <IgbColumn Field="ContactName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="ContactTitle" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" moving="true" allow-filtering="true">
    <igc-column field="CustomerID" dataType="string" movable="true" pinned="true" sortable="true" resizable="true"> </igc-column>
    <igc-column-group movable="true" pinned="true" header="General Information">
        <igc-column field="CompanyName" dataType="string" sortable="true" resizable="true"></igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ContactName" dataType="string" sortable="true" resizable="true"></igc-column>
            <igc-column field="ContactTitle" dataType="string" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-hierarchical-grid>
```
<!-- end: WebComponents -->

```tsx
<IgrHierarchicalGrid autoGenerate="false" data={this.hierarchicalCustomers} ref={this.hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving="true" allowFiltering="true">
    <IgrColumn sortable="true" resizable="true" movable="true" pinned="true" field="CustomerID" dataType={GridColumnDataType.String}></IgrColumn>
    <IgrColumnGroup movable="true" pinned="true" header="General Information">
        <IgrColumn sortable="true" resizable="true" field="CompanyName" dataType={GridColumnDataType.String}></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn sortable="true" resizable="true" field="ContactName" dataType={GridColumnDataType.String}></IgrColumn>
            <IgrColumn sortable="true" resizable="true" field="ContactTitle" dataType={GridColumnDataType.String}></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Multi-Column Header Template

<!-- Angular -->
Each of the column groups of the grid can be templated separately. The column group expects `ng-template` tag decorated with the `igxHeader` directive.
The `ng-template` is provided with the column group object as a context.

```html
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
</igx-column-group>
```

If you want to re-use a single template for several column groups, you could set the `HeaderTemplate` property of the column group like this:

```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>

<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
</igx-column-group>
```
<!-- end: Angular -->

<!-- Blazor -->
Each of the column groups of the grid can be templated separately. The column group expects `RenderFragment` for the `HeaderTemplate` property.
The expression is provided with the column group object as a context.

```razor
<IgbColumnGroup Header="Address Information" HeaderTemplate="Template">
</IgbColumnGroup>

@code {
    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        string value = ctx.Column.Header.ToUpper();
        return @<span>@value</span>;
    };
}
```

If you want to re-use a single template for several column groups, you could set the `HeaderTemplate` property of the column group like this:

```razor
<IgbColumnGroup Header="General Information" HeaderTemplate="Template">
</IgbColumnGroup>
<IgbColumnGroup Header="Address Information" HeaderTemplate="Template">
</IgbColumnGroup>

@code {
    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        string value = ctx.Column.Header.ToUpper();
        return @<span>@value</span>;
    };
}
```
<!-- end: Blazor -->

<!-- WebComponents -->
Each of the column groups of the grid can be templated separately. The following code snippet demonstrates how to use the `HeaderTemplate` of a column group:

```html
<igc-column-group id="addressInfo" header="Address Information">
</igc-column-group>
```

```ts
constructor() {
    var addresss = this.addresss = document.getElementById('addressInfo') as IgcColumnGroupComponent;
    addresss.headerTemplate = this.columnGroupHeaderTemplate;
}

public columnGroupHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        ${ctx.column.header.toUpperCase()}
    `;
}
```

If you want to re-use a single template for several column groups, you could set the `HeaderTemplate` property of the column group like this:

```html
<igc-column-group id="generalInfo" header="General Information">
</igc-column-group>
<igc-column-group id="addressInfo" header="Address Information">
</igc-column-group>
```

```ts
constructor() {
    var general = this.general = document.getElementById('generalInfo') as IgcColumnGroupComponent;
    var addresss = this.address = document.getElementById('addressInfo') as IgcColumnGroupComponent;
    general.headerTemplate = this.columnGroupHeaderTemplate;
    addresss.headerTemplate = this.columnGroupHeaderTemplate;
}

public columnGroupHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        ${ctx.column.header.toUpperCase()}
    `;
}
```
<!-- end: WebComponents -->

```tsx
<IgrColumnGroup header="Contact Information" headerTemplate={groupHeaderTemplate}></IgrColumnGroup>
```

```tsx
function groupHeaderTemplate(e: { dataContext: IgrColumnTemplateContext }) {
    const column = e.dataContext.column as IgrColumnGroup;
    return (
      <div>
        <span style={{ float: "left" }}>{column.header.toUpperCase()}</span>
      </div>
    );
}
```

> [!Note]
> If a header is re-templated and the corresponding column group is movable, you have to set the **draggable** attribute to **false** on the templated elements, so that you can handle any of the events that are applied!

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

```razor
@code {
    public Dictionary<string, object> DraggableAttributes { get; set; } =
        new Dictionary<string, object>()
        {
            { "draggable", "false" }
        };

    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        return @<IgbIcon AdditionalAttributes="DraggableAttributes"  @onclick="onClick"/>;
    };
}
```

```ts
public columnHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        <igc-icon draggable="false" @click="${() => this.onClick()}"></igc-icon>
    `;
}
```

```tsx
function columnHeaderTemplate(e: { dataContext: IgrColumnTemplateContext }) {
    const column = e.dataContext.column as IgrColumnGroup;
    return (
      <span onClick={onClick}>
        <IgrIcon data-draggable="false"></IgrIcon>
      </span>
    );
}
```

The following sample demonstrates how to implement collapsible column groups using header templates.

`sample="/{ComponentSample}/multi-column-headers-template", height="550", alt="{Platform} {ComponentTitle} Multi Column Header Template Sample"`

<!-- Angular -->
## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [igx-grid-theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the `$header-background`, `$header-text-color`, `$header-border-width`, `$header-border-style` and `$header-border-color` parameters.

```scss
$custom-theme: igx-grid-theme(
    $header-background: #e0f3ff,
    $header-text-color: #e41c77,
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: rgba(0, 0, 0, 0.08)
);
```
The last step is to **include** the component mixins:

```scss
@include igx-grid($custom-theme);
```

> [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

### Defining a Color Palette

Instead of hard-coding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `igx-palette` and `igx-color`functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$light-blue-color: #e0f3ff;
$deep-pink-color: #e41c77;

$custom-palette: igx-palette($primary: $light-blue-color, $deep-pink-color);
```

And then with `igx-color` we can easily retrieve color from the palette.

```scss
$custom-theme: igx-grid-theme(
    $header-background: igx-color($custom-palette, "primary", 500),
    $header-text-color: igx-color($custom-palette, "secondary", 500),
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: igx-color($custom-palette, "grays", 200)
);
```

> [!Note]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/palette.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [schemas](../themes/schemas.md). A schema is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - `_light-grid`:

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        header-background: (igx-color:('primary', 500)),
        header-text-color: (igx-color:('secondary', 500)),
        header-border-width: 1px,
        header-border-style: solid,
        header-border-color: (igx-color:('grays', 200))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals `light` or `dark`, which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/multi-column-headers-styling", height="500", alt="{Platform} {ComponentTitle} Multi Column Headers Styling Sample"`



## Known Issues and Limitations

- Using Grid with multi-column headers on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application.

```typescript
import 'core-js/es7/array';
```

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```
### Demo

`sample="/{ComponentSample}/multi-column-headers-styling", height="500", alt="{Platform} {ComponentTitle} Multi Column Headers Styling Sample"`


<!-- end: WebComponents, Blazor, React -->

## API References

* `{ComponentName}`
* `ColumnGroup`

## Additional Resources

<!-- ComponentStart:  Grid -->
* [Grid Overview](../data-grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Group by](groupby.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
