---
title: {Platform} Grid 表示密度 - {ProductName}
_description: {ComponentTitle} コンポーネントに表示密度機能を適用する方法を説明します。{ProductName} のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, {Platform}, {ProductName}, Infragistics, マテリアル密度, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 表示密度

{Platform} `{ComponentName}` デザインは[マテリアル デザイン ガイドライン](https://material.io/design)に基づきます。現在、cosy、comfortable、compact ビューで表示するための定義済みの[密度](https://material.io/design/layout/applying-density.html)オプションを提供しています。マテリアル UI テーブル/マテリアル UI グリッドに適切な密度を選択することで、量の多いコンテンツを操作する際のユーザー エクスペリエンスを飛躍的に向上させることができます。

## {Platform} {ComponentTitle} 表示密度の例

`sample="/{ComponentSample}/layout-display-density", height="620", alt="{Platform} {ComponentTitle} 表示密度の例"`



## 使用方法

上記デモで示されるように、`{ComponentName}` は 3 つの密度オプション (**compact、cosy、comfortable**) を提供します。以下のコード スニペットは、`DisplayDensity` を設定する方法を示します。

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [displayDensity]="'cosy'" >
</{ComponentSelector}>
```
<!-- Angular -->

```razor
<{ComponentSelector} DisplayDensity="DisplayDensity.Cosy" Data=northwindEmployees @ref=grid>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" display-density="Cosy" >
</{ComponentSelector}>
```
<!-- end: WebComponents -->

または

```typescript
this.grid.displayDensity = 'cosy';
```

```razor
@code {
    this.grid.DisplayDensity = DisplayDensity.Cosy;
}
```

各オプションを `{ComponentName}` に反映する方法を紹介します。表示密度オプション間で切り替える際に各 `{ComponentName}` 要素の高さとそのパディングが変更されます。カスタムの列 `Width` を適用する場合、左右のパディングより大きくする必要があることに注意してください。
 - **comfortable** - これはデフォルトの `{ComponentName}` 表示密度です。密度が最も低く、行の高さが `50px` です。左と右のパディングが `24px` で最小列 `Width` は `80px` です。
 - **cosy** - 中密度で、行の高さは `40px` です。左と右のパディングが `16px` で最小列 `Width` は `64px` です。
 - **compact** - これは最高密度で行の高さは `32px` です。左と右のパディングが `12px` で最小列 `Width` は `56px` です。

> [!Note]
> 現在サイズは**オーバーライドできません**。

引き続きサンプルを使用して `DisplayDensity` の適用方法について説明します。最初に各密度を切り替えるボタンを追加します。

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

マークアップを追加します。

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
```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        propertyEditor.componentRenderer = this.renderer;
        propertyEditor.target = this.grid;
        grid.data = this.data;
    }
    this._bind();

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

    this._bind = () => {
        propertyEditor.componentRenderer = this.renderer;
        propertyEditor.target = this.grid;
        grid.data = this.data;
    }
    this._bind();

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

    this._bind = () => {
        propertyEditor.componentRenderer = this.renderer;
        propertyEditor.target = this.grid;
        grid.data = this.data;
    }
    this._bind();

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

最後に密度を適用するためのロジックを実装します。

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

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();
    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription displayDensityEditor;
    private IgbGrid grid;
}
```

`{ComponentName}` の行の高さを変更するその他のオプションに `RowHeight` プロパティがあります。このプロパティと `DisplayDensity` プションが `{ComponentName}` レイアウトにどのように動作に影響するかを以下で確認できます。

以下を確認してください。
 - **`RowHeight` を指定した場合**、`DisplayDensity` オプションは行の高さに影響しません。
 - `DisplayDensity` は、上記の理由により**残りすべての {ComponentTitle} 要素に影響します**。

サンプル機能を拡張して `RowHeight` プロパティを `{ComponentName}` に追加します。

<!-- Angular -->
 ```html
 <{ComponentSelector} #grid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%"
 height="550px" [allowFiltering]="true">
 </{ComponentSelector}>
 ```
 <!-- end: Angular -->

 ```razor
 <{ComponentSelector} Width="100%" Height="100%"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees
             RowHeight="80"
             DisplayDensity=@density>
</{ComponentSelector}>
 ```

 <!-- WebComponents -->
 ```html
 <{ComponentSelector} id="grid" display-density="Cosy" row-height="80px" width="100%"
 height="550px" allow-filtering="true">
 </{ComponentSelector}>
 ```
 <!-- end: WebComponents -->

## API リファレンス

* `{ComponentName}`
* `Column`

## その他のリソース
<!-- ComponentStart:  Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [編集](editing.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [検索](search.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})