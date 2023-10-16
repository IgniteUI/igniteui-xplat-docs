---
title: {Platform} {ComponentTitle} Display Density - {ProductName}
_description: Learn how to apply display density capabilities to the {ComponentTitle} component. You can use a set of compact view options in the {ProductName}.
_keywords:  material density, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Display Density

In {ProductName}, the {ComponentTitle} Display Density in {ProductName} allows users to control the spacing and layout of data within the {ComponentTitle}. By changing [density](https://material.io/design/layout/applying-density.html), you can significantly improve the user experience when interacting with large amounts of content.  They can choose from three display density options:
- Cozy
- Comfortable
- Compact

## {Platform} {ComponentTitle} Display Density Example

`sample="/{ComponentSample}/layout-display-density", height="620", alt="{Platform} {ComponentTitle} Display Density Example"`



## Usage

As you can see in the demo above, the `{ComponentName}` provides three density options:  **compact**, **cosy** and **comfortable**. The code snippet below shows how to set `DisplayDensity`:

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [displayDensity]="'cosy'" >
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} DisplayDensity="DisplayDensity.Cosy" Data=northwindEmployees @ref=grid>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" display-density="cosy" >
</{ComponentSelector}>
```
<!-- end: WebComponents -->


```tsx
<{ComponentSelector} id="grid" displayDensity="cosy" >
</{ComponentSelector}>
```


or

<!-- WebComponents -->
```typescript
this.grid.displayDensity = 'cosy';
```
<!-- end: WebComponents -->

```tsx
gridRef.current.displayDensity = 'cosy';
```

```razor
@code {
    this.grid.DisplayDensity = DisplayDensity.Cosy;
}
```

And now let's see in details how each option reflects on the `{ComponentName}` component. When you switch between different density options the height of each `{ComponentName}` element and the corresponding paddings will be changed. Also if you want to apply custom column `Width`, please consider the fact that it must be bigger than the sum of left and right padding.
 - **comfortable** - this is the default `{ComponentName}` display density with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column `Width` is `80px`;
 - **cosy** - this is the middle intense density with `40px` row height. Left and Right paddings are `16px`; Minimal column `Width` is `64px`;
 - **compact** - this is the density with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column `Width` is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `DisplayDensity` is applied. Let's first add a button which will help us to switch between each density:

```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities"></igx-buttongroup>
</div>
```

```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebGrid"
    IsHorizontal="true"
    IsWrappingEnabled="true"
    Name="PropertyEditor"
    @ref="propertyEditor">
        <IgbPropertyEditorPropertyDescription
        PropertyPath="DisplayDensity"
        Name="DisplayDensityEditor"
        @ref="displayDensityEditor">
        </IgbPropertyEditorPropertyDescription>
    </IgbPropertyEditorPanel>
</div>
```

```html
<div class="density-chooser">
    <igc-property-editor-panel
    description-type="WebGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="propertyEditor">
        <igc-property-editor-property-description
        property-path="DisplayDensity"
        name="DisplayDensityEditor"
        id="displayDensityEditor">
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
    isHorizontal="true"
    isWrappingEnabled="true">
    <IgrPropertyEditorPropertyDescription
        propertyPath="DisplayDensity"
        name="DisplayDensityEditor">
    </IgrPropertyEditorPropertyDescription>
</IgrPropertyEditorPanel>
```

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public density = 'compact';
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        {
            label: 'compact',
            selected: this.density === 'compact',
            togglable: true
        },
        {
            label: 'cosy',
            selected: this.density === 'cosy',
            togglable: true
        },
        {
            label: 'comfortable',
            selected: this.density === 'comfortable',
            togglable: true
        }
    ];
}
```

Now we can add the markup.

<!-- ComponentStart: Grid -->
```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" [displayDensity]="density" width="100%" height="550px" [allowFiltering]="true">
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
    <div class="options vertical">
        <IgbPropertyEditorPanel
        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="PropertyEditor"
        @ref="propertyEditor">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="DisplayDensity"
            Name="DisplayDensityEditor"
            @ref="displayDensityEditor">
            </IgbPropertyEditorPropertyDescription>
        </IgbPropertyEditorPanel>
    </div>

    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        AllowFiltering="true"
        Name="grid"
        @ref="grid">
            <IgbColumn
            Field="CustomerName"
            Header="Customer Name"
            Sortable="true"
            HasSummary="true"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Salesperson"
            Header="Sales Person"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipperName"
            Header="Shipper Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ProductID"
            Header="ID"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Filterable="false">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Header="Quantity"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Filterable="false">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipName"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCountry"
            Header="Country"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="City"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipPostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

        </IgbGrid>
    </div>
</div>
```

```html
<div class="density-chooser">
    <igc-property-editor-panel
    description-type="WebGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="PropertyEditor">
        <igc-property-editor-property-description
        property-path="DisplayDensity"
        name="DisplayDensityEditor"
        id="displayDensityEditor">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
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
<IgrGrid autoGenerate="false" ref={gridRef} data={invoicesData} allowFiltering="true">
    <IgrColumn field="CustomerName" header="Customer Name" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="Country" header="Country" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="City" header="City" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="Address" header="Address" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="PostalCode" header="Postal Code" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="Salesperson" header="Sales Person" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="OrderDate" header="Order Date" dataType="Date" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ProductID" header="ID" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ProductName" header="Name" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="UnitPrice" header="Unit Price" dataType="Number" sortable="true" hasSummary="true" filterable="false">
    </IgrColumn>
    <IgrColumn field="Quantity" header="Quantity" dataType="Number" sortable="true" hasSummary="true" filterable="false">
    </IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="Boolean" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="Boolean" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ShipName" header="Name" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ShipCountry" header="Country" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ShipCity" header="City" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
    <IgrColumn field="ShipPostalCode" header="Postal Code" dataType="String" sortable="true" hasSummary="true">
    </IgrColumn>
</IgrGrid>
```

```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    propertyEditor.componentRenderer = this.renderer;
    propertyEditor.target = this.grid;
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
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-tree-grid #grid [data]="data" primaryKey="ID" foreignKey="ParentID" [displayDensity]="density" width="100%"
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
```
```html
<div class="density-chooser">
    <igc-property-editor-panel
    description-type="WebGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="PropertyEditor">
        <igc-property-editor-property-description
        property-path="DisplayDensity"
        name="DisplayDensityEditor"
        id="displayDensityEditor">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
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
```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var grid = this.grid = document.getElementById('grid') as IgcTreeGridComponent;
    propertyEditor.componentRenderer = this.renderer;
    propertyEditor.target = this.grid;
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
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-hierarchical-grid #grid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
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
```

```html
<div class="density-chooser">
    <igc-property-editor-panel
    description-type="WebGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="PropertyEditor">
        <igc-property-editor-property-description
        property-path="DisplayDensity"
        name="DisplayDensityEditor"
        id="displayDensityEditor">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
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
```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    propertyEditor.componentRenderer = this.renderer;
    propertyEditor.target = this.grid;
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
```
<!-- ComponentEnd: HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the density:

<!-- Angular -->
```typescript
@ViewChild('grid', { read: {ComponentName} })
public grid: {ComponentName};

public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```
<!-- end: Angular -->

```razor
@code {
    private Action BindElements { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var displayDensityEditor = this.displayDensityEditor;
        var grid = this.grid;
        propertyEditor.Target = this.grid;
    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription displayDensityEditor;
    private IgbGrid grid;
}
```

Another option that `{ComponentName}` provides for you, in order to be able to change the height of the rows in the `{ComponentName}`, is the property `RowHeight`. So let's see in action how this property affects the `{ComponentName}` layout along with the `DisplayDensity`.

Please keep in mind the following:
 - `DisplayDensity` options will have no impact on row height **if there is `RowHeight` specified**.
 - `DisplayDensity` will **affect all of the rest elements in the {ComponentTitle}**, as it has been described above.

We can now extend our sample and add `RowHeight` property to the `{ComponentName}`:

<!-- Angular -->
 ```html
 <{ComponentSelector} #grid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%"
 height="550px" [allowFiltering]="true">
 </{ComponentSelector}>
 ```
 <!-- end: Angular -->

 ```razor
 <{ComponentSelector} Width="100%" Height="100%"
             @ref="grid"
             AutoGenerate="true"
             Data="northwindEmployees"
             RowHeight="rowHeight"
             DisplayDensity="@density">
</{ComponentSelector}>

@code {
    private string rowHeight = "80px";
}
 ```

 <!-- WebComponents -->
 ```html
 <{ComponentSelector} id="grid" display-density="cosy" row-height="80px" width="100%"
 height="550px" allow-filtering="true">
 </{ComponentSelector}>
 ```
 <!-- end: WebComponents -->

 ```tsx
 <{ComponentSelector} id="grid" displayDensity="cosy" rowHeight="80px" width="100%"
 height="550px" allowFiltering="true">
 </{ComponentSelector}>
 ```

## API References

* `{ComponentName}`
* `Column`

## Additional Resources
<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Editing](editing.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Searching](search.md)
<!-- ComponentEnd:  Grid -->


Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})