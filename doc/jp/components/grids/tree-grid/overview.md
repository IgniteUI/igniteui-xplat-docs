---
title: {Platform} ツリー グリッド | 最速の {Platform} ツリー テーブル | インフラジスティックス
_description: {ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。わずかなコーディングでデータをすばやくバインドできます。無料でお試しください。
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics, {Platform} ツリー グリッド, インフラジスティックス
mentionedTypes: ['TreeGrid']
_language: ja
---

# {Platform} ツリー グリッドの概要と構成

{ProductName} `TreeGrid` は、階層データまたはフラット データを簡単に表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。マテリアル テーブルをベースとした UI ツリー グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。

## {Platform} ツリー グリッドの例

この例では、ユーザーが階層データまたはフラット データを操作する方法を確認できます。フィルタリングとソートのオプション、ピン固定と非表示、行の選択、Excel と csv へのエクスポートが含まれています。

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{TreeGridSample}-overview"
           alt="グリッドの例">
</code-view>

<div class="divider--half"></div>

## {ProductName} Tree Grid で作業を開始

### 依存関係

{Platform} ツリー グリッドを初期化するには、{ProductName} パッケージをインストールする必要があります。

<!-- Blazor -->

IgniteUI.Blazor パッケージの追加については、以下のトピックを参照してください。

- [作業の開始](../../general-getting-started-blazor-client.md)
- [NuGet パッケージの追加](../../general-nuget-feed.md)

また、ツリー グリッドに必要なスタイルを提供するために、アプリケーションの index.html ファイルに次の CSS リンクを含める必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->

When installing the {Platform} tree grid package, the core package must also be installed.

```cmd
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
```

<!-- WebComponents -->

You also need to include the following import to use the tree grid:

```typescript
import 'igniteui-webcomponents-grids/grids/combined.js';
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

<!-- Angular, React, Blazor -->
### コンポーネント モジュール

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
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

<!-- end: Angular, React, Blazor -->

## 使用方法

ツリー グリッドはグリッドと多くの機能を共有していますが、データを階層的に表示する機能も追加されています。
ツリー グリッドは、各データ オブジェクトの[子コレクション](overview.md#子コレクション)または各データ オブジェクトに[プライマリキーまたは外部キー](overview.md#プライマリと外部キー)を使用してデータ オブジェクト内の関係を定義できます。

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
    <igc-column field="name" header="Name" data-type="String"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="Date"></igc-column>
    <igc-column field="age" header="Age" data-type="Number"></igc-column>
</igc-tree-grid>
```

```ts
    private _bind: () => void;

    constructor() {
        var treeGrid = (this.treeGrid = document.getElementById('treeGrid') as any) as IgcTreeGridComponent;
        this._bind = () => {
            treeGrid.childDataKey = "Employees";
            treeGrid.data = this.employeesNestedData;
        }
        this._bind();
    }
```



### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- `GridCell` - 値を含む標準セル。
- `TreeGridCell` - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。行コンポーネントのレベルは、その内部の `treeRow` の `level` プロパティを通じてアクセスできます。

> [!NOTE]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

### 初期展開時の深さ

初期時のツリーグリッドは、すべてのノード レベルを展開して表示します。この動作は `expansionDepth` プロパティを使用して構成できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、**0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

### 子コレクション
**child collection** オプションを使用して各データ オブジェクトは子コレクションを含み、親データ オブジェクトとして同じタイプの項目で生成します。これによりツリー グリッドの各レコードがその子への直接の参照を持つことができます。元のデータ ソースを含むツリー グリッドの `data` プロパティが階層が定義されたコレクションになります。

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
            ...
        ]
    },
    ...
]
```

ツリー グリッドで階層を構築するには、その `childDataKey` プロパティに、各データ オブジェクトで使用される子コレクションの名前を設定する必要があります。このサンプルでは **Employees** コレクションです。
更に自動列生成を無効にしてデータ オブジェクトの実際のプロパティとの一致を手動で定義できます。**Employees** コレクションが階層で自動的に使用されるため、列定義に含める必要はありません。

`rowSelection` および `paging` プロパティを使用して、ツリー グリッドの行選択およびページング機能を有効にできるようになりました。
最初の列に集計機能、各列にはフィルタリング、ソート、編集、サイズ変更機能を有効にします。

最後に、`GridToolbar`、`GridToolbarHiding`、`GridToolbarPinning`、`GridToolbarExporter` をそれぞれ使用して、列の非表示、列のピン固定、エクスポート機能、およびツリー グリッドのツールバーを有効にできます。

### プライマリと外部キー
**プライマリと外部キー**オプションを使用した際に各データ オブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータ ソースを含むツリー グリッドの `data` プロパティがフラット コレクションになります。

<!-- Angular, WebComponents -->

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

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique as it will be our `primaryKey`. The ParentID contains the ID of the parent node and could be set as a `foreignKey`. If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

<!-- end: Angular, WebComponents -->

## Persistence and Integration

The indentation of the **tree cells** persists across other tree grid features like filtering, sorting and paging.

- When **sorting** is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a `visibleIndex` of 0) is always the tree column.
- The column that ends up with a `visibleIndex` of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

<!-- WebComponents -->
## {Platform} Tree Grid Styling Configuration

In addition to the predefined themes, the tree grid could be further customized by setting some of the available [CSS properties](../theming.md). In case you would like to change the header background and text color you need to set a class for the tree grid first:

```typescript
<igc-tree-grid class="tree-grid">
```

Then set the `--header-background` and `--header-text-color` CSS properties for that class:

```css
.tree-grid {
    --header-background: #494949;
    --header-text-color: #FFF;
}
```
<!-- end: WebComponents -->


## API References

* `{TreeGridName}`
* `Column`
* `GridToolbar`
* `TreeGridRecord`

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})