---
title: {Platform} {ComponentTitle} Size - {ProductName}
_description: Learn how to apply different size capabilities to the {ComponentTitle} component. You can use a set of compact view options in the {ProductName}.
_keywords:  material size, {Platform}, {ProductName}, Infragistics
_license: commercial
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridSize}
---

# {Platform} {ComponentTitle} Size

The {ProductName} Size feature in {Platform} {ComponentTitle} allows users to control the spacing and layout of data within the `{ComponentName}`. By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content.  They can choose from three size options:
- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## {Platform} {ComponentTitle} Size Example

`sample="/{ComponentSample}/layout-display-density", height="620", alt="{Platform} {ComponentTitle} Size Example"`



## Usage

As you can see in the demo above, the `{ComponentName}` provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

<!-- Angular -->
```html
<{ComponentSelector} #grid class="gridSize" [data]="data">
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Class="gridSize" Data=northwindEmployees @ref=grid>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" class="gridSize">
</{ComponentSelector}>
```
<!-- end: WebComponents -->


```tsx
<{ComponentSelector} className="gridSize"></{ComponentSelector}>
```

And now let's see in details how each option reflects on the `{ComponentName}` component. When you switch between different size options the height of each `{ComponentName}` element and the corresponding paddings will be changed. Also if you want to apply custom column `Width`, please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default `{ComponentName}` size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column `Width` is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column `Width` is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column `Width` is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

```html
<div class="size-chooser">
    <igx-buttongroup [values]="sizes"></igx-buttongroup>
</div>
```

<!-- ComponentStart: Grid -->
```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebGrid"
    IsHorizontal="true"
    IsWrappingEnabled="true"
    Name="PropertyEditor"
    @ref="propertyEditor">
        <IgbPropertyEditorPropertyDescription
        Name="SizeEditor"
        @ref="sizeEditor"
        Label="Grid Size:"
        ValueType="PropertyEditorValueType.EnumValue"
        DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
        DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
        ChangedScript="WebGridSetGridSize">
        </IgbPropertyEditorPropertyDescription>
    </IgbPropertyEditorPanel>
</div>
```

```html
<div class="size-chooser">
    <igc-property-editor-panel
    description-type="WebGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="propertyEditor">
        <igc-property-editor-property-description
        name="SizeEditor"
        id="SizeEditor"
        label="Grid Size:"
        value-type="EnumValue"
        drop-down-names="Small, Medium, Large"
        drop-down-values="Small, Medium, Large">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
```

```tsx
<IgrPropertyEditorPanel
    ref={propertyEditorRef}
    componentRenderer={renderer}
    target={grid}
    descriptionType="WebGrid"
    isHorizontal={true}
    isWrappingEnabled={true}>
    <IgrPropertyEditorPropertyDescription
        name="SizeEditor"
        label="Grid Size:"
        valueType="EnumValue"
        dropDownNames={["Small", "Medium", "Large"]}
        dropDownValues={["Small", "Medium", "Large"]}
        changed={webGridSetGridSize}>
    </IgrPropertyEditorPropertyDescription>
</IgrPropertyEditorPanel>
```
<!-- ComponentEnd: Grid -->

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public size = 'small';
public sizes;

public ngOnInit() {
    this.sizes = [
        {
            label: 'small',
            selected: this.size === 'small',
            togglable: true
        },
        {
            label: 'medium',
            selected: this.sie === 'medium',
            togglable: true
        },
        {
            label: 'large',
            selected: this.size === 'large',
            togglable: true
        }
    ];
}
```

<!-- ComponentStart: TreeGrid -->
```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebTreeGrid"
    IsHorizontal="true"
    IsWrappingEnabled="true"
    Name="PropertyEditor"
    @ref="propertyEditor">
        <IgbPropertyEditorPropertyDescription
        Name="SizeEditor"
        @ref="sizeEditor"
        Label="Grid Size:"
        ValueType="PropertyEditorValueType.EnumValue"
        DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
        DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
        ChangedScript="WebGridSetGridSize">
        </IgbPropertyEditorPropertyDescription>
    </IgbPropertyEditorPanel>
</div>
```

```html
<div class="size-chooser">
    <igc-property-editor-panel
    description-type="WebTreeGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="propertyEditor">
        <igc-property-editor-property-description
        name="SizeEditor"
        id="SizeEditor"
        label="Grid Size:"
        value-type="EnumValue"
        drop-down-names="Small, Medium, Large"
        drop-down-values="Small, Medium, Large">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
```

```tsx
<IgrPropertyEditorPanel
    ref={propertyEditorRef}
    componentRenderer={renderer}
    target={grid}
    descriptionType="WebTreeGrid"
    isHorizontal={true}
    isWrappingEnabled={true}>
    <IgrPropertyEditorPropertyDescription
        name="SizeEditor"
        label="Grid Size:"
        valueType="EnumValue"
        dropDownNames={["Small", "Medium", "Large"]}
        dropDownValues={["Small", "Medium", "Large"]}
        changed={webGridSetGridSize}>
    </IgrPropertyEditorPropertyDescription>
</IgrPropertyEditorPanel>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebHierarchicalGrid"
    IsHorizontal="true"
    IsWrappingEnabled="true"
    Name="PropertyEditor"
    @ref="propertyEditor">
        <IgbPropertyEditorPropertyDescription
        Name="SizeEditor"
        @ref="sizeEditor"
        Label="Grid Size:"
        ValueType="PropertyEditorValueType.EnumValue"
        DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
        DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
        ChangedScript="WebGridSetGridSize">
        </IgbPropertyEditorPropertyDescription>
    </IgbPropertyEditorPanel>
</div>
```

```html
<div class="size-chooser">
    <igc-property-editor-panel
    description-type="WebHierarchicalGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="propertyEditor">
        <igc-property-editor-property-description
        name="SizeEditor"
        id="SizeEditor"
        label="Grid Size:"
        value-type="EnumValue"
        drop-down-names="Small, Medium, Large"
        drop-down-values="Small, Medium, Large">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
```

```tsx
<IgrPropertyEditorPanel
    ref={propertyEditorRef}
    componentRenderer={renderer}
    target={grid}
    descriptionType="WebHierarchicalGrid"
    isHorizontal={true}
    isWrappingEnabled={true}>
    <IgrPropertyEditorPropertyDescription
        name="SizeEditor"
        label="Grid Size:"
        valueType="EnumValue"
        dropDownNames={["Small", "Medium", "Large"]}
        dropDownValues={["Small", "Medium", "Large"]}
        changed={webGridSetGridSize}>
    </IgrPropertyEditorPropertyDescription>
</IgrPropertyEditorPanel>
```
<!-- ComponentEnd: HierarchicalGrid -->

Now we can add the markup.

<!-- ComponentStart: Grid -->
```html
<div class="size-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" width="100%" height="550px" [allowFiltering]="true">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name"  [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date"  [dataType]="'date'" [sortable]="true" [hasSummary]="true">
        <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
        </ng-template>
    </igx-column>
    <igx-column-group  header="Product Details">
        <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

```razor
<div class="container vertical">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        AllowFiltering="true"
        Id="grid"
        Name="grid"
        @ref="grid">
            <IgbColumn Field="CustomerName" Header="Customer Name" Sortable="true" HasSummary="true" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Country" Header="Country" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="City" Header="City" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="Address" Header="Address" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="PostalCode" Header="Postal Code" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="Salesperson" Header="Sales Person" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipperName" Header="Shipper Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ProductID" Header="ID" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ProductName" Header="Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="UnitPrice" Header="Unit Price" DataType="GridColumnDataType.Number" Sortable="true" HasSummary="true" Filterable="false"></IgbColumn>
            <IgbColumn Field="Quantity" Header="Quantity" DataType="GridColumnDataType.Number" Sortable="true" HasSummary="true" Filterable="false"></IgbColumn>
            <IgbColumn Field="Discontinued" Header="Discontinued" DataType="GridColumnDataType.Boolean" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="Discontinued" Header="Discontinued" DataType="GridColumnDataType.Boolean" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipName" Header="Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipCountry" Header="Country" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"> </IgbColumn>
            <IgbColumn Field="ShipCity" Header="City" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipPostalCode" Header="Postal Code" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
        </IgbGrid>
    </div>
</div>
```

```html
<igc-grid id="grid" width="100%" height="550px" allow-filtering="true">
    <igc-column-group  header="Customer Information">
    <igc-column field="CustomerName" header="Customer Name" data-type="String" sortable="true" has-summary="true">
    </igc-column>
    <igc-column-group  header="Customer Address">
        <igc-column field="Country" header="Country" data-type="String" sortable="true" has-summary="true">
        </igc-column>
        <igc-column field="City" header="City" data-type="String" sortable="true" has-summary="true">
        </igc-column>
        <igc-column field="Address" header="Address" data-type="String" sortable="true" has-summary="true">
        </igc-column>
        <igc-column field="PostalCode" header="Postal Code" data-type="String" sortable="true" has-summary="true">
        </igc-column>
    </igc-column-group>
    </igc-column-group>
    <igc-column field="Salesperson" header="Sales Person" data-type="String" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ShipperName" header="Shipper Name"  data-type="String" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="OrderDate" header="Order Date"  data-type="Date" sortable="true" has-summary="true">
    </igc-column>
    <igc-column-group  header="Product Details">
        <igc-column field="ProductID" header="ID" data-type="String" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="ProductName" header="Name" data-type="String" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="UnitPrice" header="Unit Price" data-type="Number" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="Quantity" header="Quantity" data-type="Number" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="Discontinued" header="Discontinued" data-type="Boolean" sortable="true" has-summary="true" >
        </igc-column>
    </igc-column-group>
    <igc-column-group  header="Shipping Information">
        <igc-column field="ShipName" header="Name" data-type="String" sortable="true" has-summary="true" >
        </igc-column>
        <igc-column-group  header="Shipping Address">
            <igc-column field="ShipCountry" header="Country" data-type="String" sortable="true" has-summary="true" >
            </igc-column>
            <igc-column field="ShipCity" header="City" data-type="String" sortable="true" has-summary="true" >
            </igc-column>
            <igc-column field="ShipPostalCode" header="Postal Code" data-type="String" sortable="true" has-summary="true" >
            </igc-column>
        </igc-column-group>
    </igx-column-group>
</igx-grid>
```

```tsx
<IgrGrid autoGenerate={false} ref={gridRef} data={invoicesData} allowFiltering={true}>
    <IgrColumn field="CustomerName" header="Customer Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="Country" header="Country" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="City" header="City" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="Address" header="Address" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="PostalCode" header="Postal Code" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="Salesperson" header="Sales Person" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="OrderDate" header="Order Date" dataType="date" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ProductID" header="ID" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ProductName" header="Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" sortable={true} hasSummary={true} filterable={false}></IgrColumn>
    <IgrColumn field="Quantity" header="Quantity" dataType="number" sortable={true} hasSummary={true} filterable={false}></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipName" header="Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipCountry" header="Country" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipCity" header="City" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipPostalCode" header="Postal Code" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
</IgrGrid>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<div class="size-chooser">
    <igx-buttongroup [values]="sizes"></igx-buttongroup>
</div>
<igx-tree-grid #grid id="grid" [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
    height="550px" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [hasSummary]="true" width="200px"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [hasSummary]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [hasSummary]="true"
                [summaries]="numberSummaries" [filterable]="false"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-tree-grid>
```

```razor
<IgbTreeGrid AutoGenerate="false" Name="treeGrid" @ref="treeGrid" Id="grid" Data="EmployeesFlatDetails" PrimaryKey="ID"
 ForeignKey="ParentID" AllowFiltering="true">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true" Width="200">
    </IgbColumn>
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable="true" HasSummary="true">
        </IgbColumn>
        <IgbColumnGroup Header="Personal Details">
            <IgbColumn Field="ID" DataType="GridColumnDataType.Number" Filterable="false">
            </IgbColumn>
            <IgbColumn Field="Title" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable="true" HasSummary="true" Filterable="false">
            </IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
    <IgbColumnGroup Header="Address Information">
        <IgbColumnGroup Header="Location">
            <IgbColumn Field="Country" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="City" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="Address" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
        </IgbColumnGroup>
        <IgbColumnGroup Header="Contact Information">
            <IgbColumn Field="Phone" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="Fax" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="PostalCode" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbTreeGrid>
```

```html
<igc-tree-grid id="grid" primary-key="ID" foreign-key="ParentID" width="100%"
    height="550px" allow-filtering="true">
    <igc-column field="Name" data-type="String" sortable="true" has-summary="true" width="200px"></igc-column>
    <igc-column-group pinned="false" header="General Information">
        <igc-column field="HireDate" data-type="Date" sortable="true" has-summary="true">
        </igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ID" data-type="Number" filterable="false"></igc-column>
            <igc-column field="Title" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="Age" data-type="Number" sortable="true" has-summary="true" filterable="false"></igc-column>
        </igc-column-group>
    </igc-column-group>
    <igc-column-group header="Address Information">
        <igc-column-group header="Location">
            <igc-column field="Country" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="City" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="Address" data-type="String" sortable="true" has-summary="true"></igc-column>
        </igc-column-group>
        <igc-column-group header="Contact Information">
            <igc-column field="Phone" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="Fax" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="PostalCode" data-type="String" sortable="true" has-summary="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
    <igc-column-group header="Address Information">
        <igc-column-group header="Location">
            <igc-column field="Country" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="City" data-type="String" sortable="true" has-summary="true"></igc-column>
            <igc-column field="Address" data-type="String" sortable="true" has-summary="true"></igc-column>
        </igc-column-group>
        <igc-column-group header="Contact Information">
            <igc-column field="Phone" data-type="String" sortable="true" resizable="true"></igc-column>
            <igc-column field="Fax" data-type="String" sortable="true" resizable="true"></igc-column>
            <igc-column field="PostalCode" data-type="String" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-tree-grid>
```

```tsx
<IgrTreeGrid autoGenerate={false} ref={treeGridRef} data={employeesFlatDetails} primaryKey="ID" foreignKey="ParentID" allowFiltering={true}>
    <IgrColumn field="Name" dataType="string" sortable={true} hasSummary={true} width="200"></IgrColumn>
    <IgrColumnGroup header="General Information">
        <IgrColumn field="HireDate" dataType="date" sortable={true} hasSummary={true}></IgrColumn>
        <IgrColumnGroup header="Personal Details">
            <IgrColumn field="ID" dataType="number" filterable={false}></IgrColumn>
            <IgrColumn field="Title" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
            <IgrColumn field="Age" dataType="number" sortable={true} hasSummary={true} filterable={false}></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
    <IgrColumnGroup header="Address Information">
        <IgrColumnGroup header="Location">
            <IgrColumn field="Country" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
            <IgrColumn field="City" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
            <IgrColumn field="Address" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
        </IgrColumnGroup>
        <IgrColumnGroup header="Contact Information">
            <IgrColumn field="Phone" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
            <IgrColumn field="Fax" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
            <IgrColumn field="PostalCode" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<div class="size-chooser">
    <igx-buttongroup [values]="sizes"></igx-buttongroup>
</div>
<igx-hierarchical-grid #grid id="grid" [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [key]="'Orders'" [autoGenerate]="false" #layout1 >
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate"></igx-column>
            <igx-column field="RequiredDate"></igx-column>
            <igx-column field="ShippedDate"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>

        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
```

```razor
<IgbHierarchicalGrid AutoGenerate="false" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="grid" AllowFiltering="true">
    <IgbColumn Field="CustomerID" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="CompanyName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="ContactName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Address" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="City" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="PostalCode" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Country" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Phone" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Fax" DataType="GridColumnDataType.String"></IgbColumn>
   
    <IgbRowIsland ChildDataKey="Orders" AutoGenerate="false">
        <IgbColumn Field="OrderID" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="OrderDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="RequiredDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="ShippedDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="ShipVia" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="Freight" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="ShipName" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipAddress" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipCity" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipPostalCode" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipCountry" DataType="GridColumnDataType.String"></IgbColumn>
       
        <IgbRowIsland ChildDataKey="OrderDetails" AutoGenerate="false">
            <IgbColumn Field="ProductID" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="UnitPrice" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="Quantity" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="Discount" DataType="GridColumnDataType.Number"></IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

```html
<igc-hierarchical-grid id="grid" height="600px" width="100%" allow-filtering="true">
    <igc-column field="CustomerID"></igc-column>
    <igc-column field="CompanyName"></igc-column>
    <igc-column field="ContactName"></igc-column>
    <igc-column field="ContactTitle"></igc-column>
    <igc-column field="Address"></igc-column>
    <igc-column field="City"></igc-column>
    <igc-column field="PostalCode"></igc-column>
    <igc-column field="Country"></igc-column>
    <igc-column field="Phone"></igc-column>
    <igc-column field="Fax"></igc-column>

    <igc-row-island key="Orders" auto-generate="false" >
            <igc-column field="OrderID"></igc-column>
            <igc-column field="EmployeeID"></igc-column>
            <igc-column field="OrderDate"></igc-column>
            <igc-column field="RequiredDate"></igc-column>
            <igc-column field="ShippedDate"></igc-column>
            <igc-column field="ShipVia"></igc-column>
            <igc-column field="Freight"></igc-column>
            <igc-column field="ShipName"></igc-column>
            <igc-column field="ShipAddress"></igc-column>
            <igc-column field="ShipCity"></igc-column>
            <igc-column field="ShipPostalCode"></igc-column>
            <igc-column field="ShipCountry"></igc-column>

        <igc-row-island key="OrderDetails" auto-generate="false">
                <igc-column field="ProductID"></igc-column>
                <igc-column field="UnitPrice"></igc-column>
                <igc-column field="Quantity"></igc-column>
                <igc-column field="Discount"></igc-column>
        </igc-row-island>
    </igc-row-island>

</igc-hierarchical-grid>
```

```tsx
<IgrHierarchicalGrid
    autoGenerate={false}
    ref={grid}
    allowFiltering={true}>
    <IgrColumn field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumn field="CompanyName" dataType="string"></IgrColumn>
    <IgrColumn field="ContactName" dataType="string"></IgrColumn>
    <IgrColumn field="Address" dataType="string"></IgrColumn>
    <IgrColumn field="City" dataType="string"></IgrColumn>
    <IgrColumn field="PostalCode" dataType="string"></IgrColumn>
    <IgrColumn field="Country" dataType="string"></IgrColumn>
    <IgrColumn field="Phone" dataType="string"></IgrColumn>
    <IgrColumn field="Fax" dataType="string"></IgrColumn>

    <IgrRowIsland childDataKey="Orders" autoGenerate={false}>
        <IgrColumn field="OrderID" dataType="number"></IgrColumn>
        <IgrColumn field="EmployeeID" dataType="number"></IgrColumn>
        <IgrColumn field="OrderDate" dataType="date"></IgrColumn>
        <IgrColumn field="RequiredDate" dataType="date"></IgrColumn>
        <IgrColumn field="ShippedDate" dataType="date"></IgrColumn>
        <IgrColumn field="ShipVia" dataType="number"></IgrColumn>
        <IgrColumn field="Freight" dataType="number"></IgrColumn>
        <IgrColumn field="ShipName" dataType="string"></IgrColumn>
        <IgrColumn field="ShipAddress" dataType="string"></IgrColumn>
        <IgrColumn field="ShipCity" dataType="string"></IgrColumn>
        <IgrColumn field="ShipPostalCode" dataType="string"></IgrColumn>
        <IgrColumn field="ShipCountry" dataType="string"></IgrColumn>
       
        <IgrRowIsland childDataKey="OrderDetails" autoGenerate={false}>
            <IgrColumn field="ProductID" dataType="number"></IgrColumn>
            <IgrColumn field="UnitPrice" dataType="number"></IgrColumn>
            <IgrColumn field="Quantity" dataType="number"></IgrColumn>
            <IgrColumn field="Discount" dataType="number"></IgrColumn>
        </IgrRowIsland>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
Finally, let's provide the necessary logic in order to actually apply the size:
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- Angular -->
```typescript
@ViewChild('grid', { read: IgxGridComponent })
public grid: IgxGridComponent;

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var sizeEditor = this.sizeEditor = document.getElementById('SizeEditor') as IgcPropertyEditorPropertyDescriptionComponent;
    var grid = this.grid = document.getElementById('grid') as {ComponentName};
    propertyEditor.componentRenderer = this.renderer;
    propertyEditor.target = this.grid;
    this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
    sizeEditor.changed = this.webGridSetGridSize;
    grid.data = this.data;
}

private _componentRenderer: ComponentRenderer = null;
public get renderer(): ComponentRenderer {
    if (this._componentRenderer == null) {
        this._componentRenderer = new ComponentRenderer();
        var context = this._componentRenderer.context;
        PropertyEditorPanelDescriptionModule.register(context);
        WebGridDescriptionModule.register(context);
    }
    return this._componentRenderer;
}

public webGridSetGridSize(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var newVal = (args.newValue as string).toLowerCase();
    var grid = document.getElementById("grid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
}
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
@code {
    // In JavaScript
    igRegisterScript("WebGridSetGridSize", (sender, evtArgs) => {
        var newVal = evtArgs.newValue.toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }, false);
}
```
<!-- end: Blazor -->

<!-- React -->
```tsx
private propertyEditor: IgrPropertyEditorPanel
private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
}
private sizeEditor: IgrPropertyEditorPropertyDescription
private grid: {ComponentName}
private gridRef(r: {ComponentName}) {
    this.grid = r;
    this.setState({});
}

constructor(props: any) {
    super(props);

    this.propertyEditorRef = this.propertyEditorRef.bind(this);
    this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
    this.gridRef = this.gridRef.bind(this);
}

private _componentRenderer: ComponentRenderer = null;
  public get renderer(): ComponentRenderer {
    if (this._componentRenderer == null) {
      this._componentRenderer = new ComponentRenderer();
      var context = this._componentRenderer.context;
      PropertyEditorPanelDescriptionModule.register(context);
      WebHierarchicalGridDescriptionModule.register(context);
    }
    return this._componentRenderer;
}

public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var newVal = (args.newValue as string).toLowerCase();
    var grid = document.getElementById("grid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
}
```
<!-- end: React -->

Another option that `{ComponentName}` provides for you, in order to be able to change the height of the rows in the `{ComponentName}`, is the property `RowHeight`. So let's see in action how this property affects the `{ComponentName}` layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is `RowHeight` specified**.
- `--ig-size` will **affect all of the rest elements in the {ComponentTitle}**, as it has been described above.

We can now extend our sample and add `RowHeight` property to the `{ComponentName}`:

<!-- Angular -->
 ```html
 <{ComponentSelector} #grid class="gridSize" width="100%" height="550px" [data]="data" [rowHeight]="'80px'" [allowFiltering]="true">
 </{ComponentSelector}>
 ```
 <!-- end: Angular -->

 ```razor
 <{ComponentSelector}
    @ref="grid"
    Id="grid"
    Class="gridSize"
    Width="100%"
    Height="100%"
    AutoGenerate="true"
    Data="northwindEmployees"
    RowHeight="rowHeight">
</{ComponentSelector}>

@code {
    private string rowHeight = "80px";
}
 ```

 <!-- WebComponents -->
 ```html
 <{ComponentSelector} id="grid" class="gridSize" row-height="80px" width="100%" height="550px" allow-filtering="true">
 </{ComponentSelector}>
 ```
 <!-- end: WebComponents -->

 ```tsx
 <{ComponentSelector} className="gridSize" rowHeight="80px" width="100%" height="550px" allowFiltering={true}></{ComponentSelector}>
 ```

## API References

- `{ComponentName}`
- `Column`

<!-- ComponentStart: Grid -->
## Additional Resources
- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)
<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
