---
title: {Platform} {ComponentTitle} 複数列ヘッダー - {ProductName}
_description: {ProductName} グリッドを使用して列ヘッダーを共通の階層ヘッダーの下に配置し、それらを複数のヘッダーに結合することで、列ヘッダーのグループ化を開始します。
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Multi-Column Headers, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, 複数列ヘッダー, インフラジスティックス
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMultiColumnHeaders}
_language: ja
---

# {Platform} {ComponentTitle} 複数列ヘッダーの概要

{Platform} {ComponentTitle} の {ProductName} 複数列ヘッダー機能は、共通の複数ヘッダーの下に配置することで列をグループ化できます。`{ComponentName}` の各複数ヘッダー グループは、その他のグループや列を組み合わせて表示できます。この機能は、水平方向のスクロールが面倒な大規模なデータセットを扱う場合に特に役立ちます。

## {Platform} {ComponentTitle} 複数列ヘッダーの例

`sample="/{ComponentSample}/multi-column-headers-overview", height="550", alt="{Platform} {ComponentTitle} 複数列ヘッダー概要の例"`



複数列ヘッダーの宣言は、一連の列を `ColumnGroup` コンポーネントにラップし、`Header` タイトル情報を渡すことによって実現されます。

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
        <IgrColumn sortable={true} resizable={true} field="Phone"></IgrColumn>
        <IgrColumn sortable={true} resizable={true} field="Fax"></IgrColumn>
        <IgrColumn sortable={true} resizable={true} field="PostalCode"></IgrColumn>
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
        <IgrColumn sortable={true} resizable={true} field="Phone" dataType="string"></IgrColumn>
        <IgrColumn sortable={true} resizable={true} field="Fax" dataType="string"></IgrColumn>
        <IgrColumn sortable={true} resizable={true} field="PostalCode" dataType="string"></IgrColumn>
    </IgrColumnGroup>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" [moving]="true" [allowFiltering]="true">
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
<IgrHierarchicalGrid autoGenerate={false} data={hierarchicalCustomers} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving={true} allowFiltering={true}>
    <IgrColumn sortable={true} resizable={true} field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumnGroup header="Address Information">
        <IgrColumnGroup header="Location">
            <IgrColumn sortable={true} resizable={true} field="Address" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="City" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="PostalCode" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="Country" dataType="string"></IgrColumn>
        </IgrColumnGroup>
        <IgrColumnGroup header="Contact Information">
            <IgrColumn sortable={true} resizable={true} field="Phone" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="Fax" dataType="string"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

ネストしたヘッダーの `n-th` レベルは、上記の宣言に従います。したがって、`ColumnGroup` をネストすることで、望ましい結果が得られます。

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
<{ComponentSelector} height="600px" allowFiltering={true}>
    <IgrColumnGroup header="General Information">
        <IgrColumn movable={true} sortable={true} resizable={true} field="CompanyName"></IgrColumn>
        <IgrColumnGroup movable={true} header="Person Details">
            <IgrColumn movable={true} pinned={false} sortable={true} resizable={true} field="ContactName"></IgrColumn>
            <IgrColumn movable={true} sortable={true} resizable={true} field="ContactTitle"></IgrColumn>
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
<{ComponentSelector} primaryKey="ID" foreignKey="ParentID" moving={true}>
    <IgrColumnGroup pinned={false} header="General Information">
        <IgrColumn field="HireDate" sortable={true} resizable={true} dataType="date"></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn field="ID" resizable={true} filterable={true} dataType="number"></IgrColumn>
            <IgrColumn field="Title" sortable={true} resizable={true} dataType="string"></IgrColumn>
            <IgrColumn field="Age" sortable={true} resizable={true} dataType="number"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
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
<IgrHierarchicalGrid autoGenerate={false} data={hierarchicalCustomers} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving={true} allowFiltering={true}>
    <IgrColumn sortable={true} resizable={true} field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumnGroup header="General Information">
        <IgrColumn sortable={true} resizable={true} field="CompanyName" dataType="string"></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn sortable={true} resizable={true} field="ContactName" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="ContactTitle" dataType="string"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

すべての `ColumnGroup` は、[移動](column-moving.md)、[ピン固定](column-pinning.md)、および[非表示](column-hiding.md)をサポートしています。
> [!Note]
> 列セットと列グループがある場合、ピン固定は列の一番上の親レベルでのみ可能です。具体的には、ネストされた column groups または columns ごとのピン固定は許可されていません。 <br />
> columns と column groups 間の移動は、それらが階層内の同じレベルにあり、両方が同じ `group` にある場合にのみ許可されます。 <br />
> `columns/column-groups` が現在の `group` によってラップされていない場合 (**一番上のレベル** `columns` の場合)、表示されている列全体の間で移動が許可されます。

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
<{ComponentSelector} height="600px" allowFiltering={true}>
    <IgrColumnGroup movable={true} pinned={true} header="General Information">
        <IgrColumn movable={true} sortable={true} resizable={true} field="CompanyName"></IgrColumn>
    </IgrColumnGroup>
    <IgrColumn sortable={true} resizable={true} field="Phone"></IgrColumn>
    <IgrColumn sortable={true} resizable={true} field="Fax"></IgrColumn>
    <IgrColumn sortable={true} resizable={true} field="PostalCode"></IgrColumn>
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
<{ComponentSelector} primaryKey="ID" foreignKey="ParentID" moving={true}>
    <IgrColumnGroup header="Contact Information">
        <IgrColumn field="Phone" movable={true} sortable={true} resizable={true} dataType="string"></IgrColumn>
    </IgrColumnGroup>
    <IgrColumn field="Name" sortable={true} resizable={true} dataType="string"></IgrColumn>
    <IgrColumn field="Title" sortable={true} resizable={true} dataType="string"></IgrColumn>
    <IgrColumn field="Age" sortable={true} resizable={true} dataType="number"></IgrColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
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
<IgrHierarchicalGrid autoGenerate={false} data={hierarchicalCustomers} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving={true} allowFiltering={true}>
    <IgrColumn sortable={true} resizable={true} movable={true} pinned={true} field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumnGroup movable={true} pinned={true} header="General Information">
        <IgrColumn sortable={true} resizable={true} field="CompanyName" dataType="string"></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn sortable={true} resizable={true} field="ContactName" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="ContactTitle" dataType="string"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## 複数列ヘッダー テンプレート

<!-- Angular -->
グリッドの各列グループは個別のテンプレートを持つことができます。列グループは、`igxHeader` ディレクティブで装飾された `ng-template` タグを想定しています。
`ng-template` は、列グループ オブジェクトと共にコンテキストとして提供されています。

```html
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
</igx-column-group>
```

複数の列グループに対して 1 つのテンプレートを再利用する場合は、列グループの `HeaderTemplate` プロパティを次のように設定できます:

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
グリッドの各列グループは個別のテンプレートを持つことができます。列グループは、`HeaderTemplate` プロパティの `RenderFragment` を想定しています。
式は、列グループ オブジェクトと共にコンテキストとして提供されています。

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

複数の列グループに対して 1 つのテンプレートを再利用する場合は、列グループの `HeaderTemplate` プロパティを次のように設定できます:

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
グリッドの各列グループは個別のテンプレートを持つことができます。次のコード スニペットは、列グループの `HeaderTemplate` の使用方法を示しています:

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

複数の列グループに対して 1 つのテンプレートを再利用する場合は、列グループの `HeaderTemplate` プロパティを次のように設定できます:

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
const groupHeaderTemplate = (e: IgrColumnTemplateContext) => {
  const column = e.column as IgrColumnGroup;
    return (
      <div>
        <span style={{ float: "left" }}>{column.header.toUpperCase()}</span>
      </div>
    );
}
```

> [!Note]
> ヘッダーが再テンプレート化され、対応する列グループが移動可能な場合は、テンプレート要素で **draggable** 属性を **false** に設定する必要があり、これにより適用されるイベントをすべて処理できます。

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
const columnHeaderTemplate = (e: IgrColumnTemplateContext ) => {
  const column = e.column as IgrColumnGroup;
    return (
      <span onClick={onClick}>
        <IgrIcon data-draggable="false"></IgrIcon>
      </span>
    );
}
```

次のサンプルは、ヘッダー テンプレートを使用して折りたたみ可能な列グループを実装する方法を示しています。

`sample="/{ComponentSample}/multi-column-headers-template", height="550", alt="{Platform} {ComponentTitle} 複数列ヘッダーテンプレートの例"`

<!-- Angular -->
## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も単純なアプローチに従って、[igx-grid-theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、`$header-background`、`$header-text-color`、`$header-border-width`、`$header-border-style`、および `$header-border-color` パラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-theme: igx-grid-theme(
    $header-background: #e0f3ff,
    $header-text-color: #e41c77,
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: rgba(0, 0, 0, 0.08)
);
```
最後にそれぞれのテーマを持つコンポーネント mixins を**含めます**。

```scss
@include igx-grid($custom-theme);
```

> [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

 ```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、`igx-palette` および `igx-color` 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$light-blue-color: #e0f3ff;
$deep-pink-color: #e41c77;

$custom-palette: igx-palette($primary: $light-blue-color, $deep-pink-color);
```

また `igx-color` を使用してパレットから簡単に色を取り出すことができます。

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
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/palette.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[スキーマ](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。スキーマはテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマのいずれかを拡張します。この場合は `_light-grid`です。

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

カスタム スキーマを適用するには、グローバル (`light` または `dark`) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

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

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/multi-column-headers-styling", height="500", alt="{Platform} {ComponentTitle} 複数列ヘッダースタイル設定の例"`



## 既知の問題と制限

- IE11 で複数列ヘッダーの Grid コンポーネントを使用するには、Angular アプリケーションの polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。

```typescript
import 'core-js/es7/array';
```

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming-grid.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```
### デモ

`sample="/{ComponentSample}/multi-column-headers-styling", height="500", alt="{Platform} {ComponentTitle} 複数列ヘッダーのスタイル サンプル"`


<!-- end: WebComponents, Blazor, React -->

## API リファレンス

* `{ComponentName}`
* `ColumnGroup`

## その他のリソース

<!-- ComponentStart: Grid -->
* [Grid の概要](../data-grid.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [グループ化](groupby.md)
<!-- ComponentEnd: Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
