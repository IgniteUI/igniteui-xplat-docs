---
title: {Platform} {ComponentTitle} の複数列ヘッダー - インフラジスティックス
_description: {ProductName} グリッドを使用して列ヘッダーを共通の階層ヘッダーの下に配置し、それらを複数のヘッダーに結合することで、列ヘッダーのグループ化を開始します。
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Multi-Column Headers, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, 複数列ヘッダー, インフラジスティックス
_language: ja
---

# {Platform} {ComponentTitle} 複数列ヘッダーの概要

{Platform} `{ComponentName}` は複数列ヘッダーをサポートしており、共通の複数ヘッダーの下に配置することで列をグループ化できます。各複数-列ヘッダーグループは、マテリアル UI グリッド内でその他複数のグループや列を組み合わせることができます。

## {Platform} {ComponentTitle} 複数列ヘッダーの例

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-multi-column-headers-overview"
           github-src="{ComponentSample}/multi-column-headers"
           alt="{Platform} {ComponentTitle} 複数列ヘッダー概要の例">
</code-view>

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

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" displayDensity="compact" [moving]="true" [allowFiltering]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
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

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid [data]="localdata" displayDensity="compact" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
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
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
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
TO-DO H-GRID CODE SNIPPET
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

```html
<igc-column-group id="General" header="General Information">
</igc-column-group>
```

```ts
constructor() {
    var general = this.general = document.getElementById('General') as IgcColumnComponent;

    this._bind = () => {
        general.headerTemplate = this.generalHeaderTemplate;
    }
    this._bind();
}

public generalHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${this.toUppercase(ctx.cell.column.header)}
    `;
}
```

複数の列グループに対して 1 つのテンプレートを再利用する場合は、列グループの `headerTemplate` プロパティを次のように設定できます:

```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>

<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
</igx-column-group>
```

```html
<igc-column-group id="General" header="General Information">
</igc-column-group>
<igc-column-group id="Address" header="Address Information">
</igc-column-group>
```

```ts
constructor() {
    var general = this.general = document.getElementById('General') as IgcColumnComponent;
    var addresss = this.address = document.getElementById('Address') as IgcColumnComponent;

    this._bind = () => {
        general.headerTemplate = this.columnGroupHeaderTemplate;
        addresss.headerTemplate = this.columnGroupHeaderTemplate;
    }
    this._bind();
}

public columnGroupHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${this.toUppercase(ctx.cell.column.header)}
    `;
}
```
<!-- end: Angular -->

<!-- Blazor -->

グリッドの各列グループは個別のテンプレートを持つことができます。列グループは、`HeaderTemplate` プロパティの `RenderFragment` を想定しています。
式は、列グループ オブジェクトと共にコンテキストとして提供されています。

<!-- end: Blazor -->

<!-- WebComponents -->

グリッドの各列グループは個別のテンプレートを持つことができます。次のコード スニペットは、列グループの `HeaderTemplate` の使用方法を示しています:

<!-- end: WebComponents -->

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

```html
<igc-column-group id="addressInfoGroup" header="Address Information"></igc-column-group>
```

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var columnGroup = this.columnGroup = document.getElementById('addressInfoGroup') as IgcColumnGroupComponent;

    this._bind = () => {
        grid.data = this.customersData
        columnGroup.headerTemplate = this.headerTemplate;
    }
    this._bind();
}

public headerTemplate = (ctx: IgcColumnTemplateContext) => {
    const column = (ctx as any).column;
    return html`<div>
             <span style="float:left">${column.header.toUpperCase()}</span>
            </div>`;
};
```

<!-- Angular -->

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
public columnHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <igc-icon draggable="false" click="${this.onClick()}"></igc-icon>
    `;
}
```

次のサンプルは、ヘッダー テンプレートを使用して折りたたみ可能な列グループを実装する方法を示しています。

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-multi-column-header-template"
           github-src="{ComponentSample}/multi-column-header-template"
           alt="{Platform} {ComponentTitle} 複数列ヘッダーテンプレートの例">
</code-view>


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

<code-view style="height:500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-multi-column-headers-styling"
           github-src="{ComponentSample}/multi-column-headers-styling"
           alt="{Platform} {ComponentTitle} 複数列ヘッダースタイル設定の例">
</code-view>

## 既知の問題と制限

- IE11 で複数列ヘッダーの Grid コンポーネントを使用するには、Angular アプリケーションの polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。

```typescript
import 'core-js/es7/array';
```

<!-- end: Angular -->

## API リファレンス

* `{ComponentName}`
* `ColumnGroup`

## その他のリソース

* [Grid の概要](../data-grid.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [グループ化](groupby.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
