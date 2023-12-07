---
title: {Platform} ツリー グリッド | 最速の {Platform} ツリー テーブル | インフラジスティックス
_description: {ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。わずかなコーディングでデータをすばやくバインドできます。無料でお試しください。
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics, {Platform} ツリー グリッド, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} ツリー グリッドの概要と構成

{ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。マテリアル テーブルをベースとした UI ツリー グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。

## {Platform} ツリー グリッドの例

この例では、ユーザーが階層データまたはフラット データを操作する方法を確認できます。フィルタリングとソートのオプション、ピン固定と非表示、行の選択、Excel と csv へのエクスポートが含まれています。

### 例

`sample="/{TreeGridSample}/overview", height="700", alt="{Platform} ツリー グリッドの例"`


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

以下の名前空間を追加してコントロールの実装を開始できます。

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->

{Platform} ツリー グリッドのパッケージをインストールするときは、core パッケージもインストールする必要があります。

```cmd
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
```

<!-- WebComponents -->

ツリー グリッドを使用するには、次のインポートも含める必要があります:

```typescript
import 'igniteui-webcomponents-grids/grids/combined';
```

対応するスタイルも参照する必要があります。[テーマ](../../themes/overview.md)の 1 つにライトモードのオプションまたはダークモードのオプションを選択し、プロジェクト構成に基づいてインポートできます:

```typescript
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

またはそれをリンクするには:
```typescript
<link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css'>
```

ツリー グリッドの外観をカスタマイズする方法の詳細については、[スタイリング](overview.md#web-components-ツリー-グリッド-スタイルの構成)セクションを参照してください。
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
        // ...
        IgxTreeGridModule,
        // ...
    ]
})
export class AppModule {}
```

<!-- end: Angular, React, Blazor -->

## 使用方法

ツリー グリッドはグリッドと多くの機能を共有していますが、データを階層的に表示する機能も追加されています。
ツリー グリッドは、各データ オブジェクトの[子コレクション](overview.md#子コレクション)または各データ オブジェクトに[プライマリキーまたは外部キー](overview.md#プライマリと外部キー)を使用してデータ オブジェクト内の関係を定義できます。

### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- `GridCell` - 値を含む標準セル。
- `TreeGridCell` - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。行コンポーネントのレベルは、その内部の `treeRow` の `level` プロパティを通じてアクセスできます。

> [!Note]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

### 初期展開時の深さ

初期時のツリー グリッドは、すべてのノード レベルを展開して表示します。この動作は `ExpansionDepth` プロパティを使用して構成できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、**0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

### 子コレクション

child collection オプションを使用して各データ オブジェクトは子コレクションを含み、親データ オブジェクトとして同じタイプの項目で生成します。これによりツリー グリッドの各レコードがその子への直接の参照を持つことができます。元のデータ ソースを含むツリー グリッドの `data` プロパティが階層が定義されたコレクションになります。

このサンプルでは、コレクション ストラクチャを使用します。

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

それでは、`Data` コレクションをインポートし、それをツリー グリッドにバインドすることから始めましょう。


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

ツリー グリッドで階層を構築するには、その `childDataKey` プロパティに、各データ オブジェクトで使用される子コレクションの名前を設定する必要があります。このサンプルでは **Employees** コレクションです。
更に自動列生成を無効にしてデータ オブジェクトの実際のプロパティとの一致を手動で定義できます。**Employees** コレクションが階層で自動的に使用されるため、列定義に含める必要はありません。

`rowSelection` および `paging` プロパティを使用して、ツリー グリッドの行選択およびページング機能を有効にできるようになりました。
最初の列に集計機能、各列にはフィルタリング、ソート、編集、サイズ変更機能を有効にします。

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

最後に、`GridToolbar`、`GridToolbarHiding`、`GridToolbarPinning`、`GridToolbarExporter` をそれぞれ使用して、列の非表示、列のピン固定、エクスポート機能、およびツリー グリッドのツールバーを有効にできます。

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

上記のコードの結果は、この記事の冒頭の[ツリー グリッドの例](./overview.md#example)セクションで確認できます。

### プライマリと外部キー
**プライマリと外部キー**オプションを使用した際に各データ オブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータ ソースを含むツリー グリッドの `data` プロパティがフラット コレクションになります。


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

上記のサンプル データでは、すべてのレコードに ID、ParentID、および Name、JobTitle、Age などの追加プロパティがあります。前述のように、レコードの ID は一意である必要があります。これが `primaryKey` になります。ParentID には親ノードの ID が含まれており、`foreignKey` として設定できます。行にツリー グリッドのいずれの行にも一致しない ParentID がある場合、行がルート行であることを意味します。

親子関係は、ツリー グリッドの `PrimaryKey` プロパティと `ForeignKey` プロパティを使用して構成されます。

上記フラット コレクションで定義されたデータを表示するツリー グリッドを設定する方法を示すコンポーネントのテンプレートです。

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

さらに、rowSelection プロパティを使用してツリー グリッドの行選択機能を有効にし、各列のフィルタリング、ソート、編集、移動、サイズ変更機能も有効にします。

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

以下は結果です:

`sample="/{TreeGridSample}/using-primary-foreign-keys", height="700", alt="{Platform} 主キーと外部キーを使用したツリーの例"`

## パーシステンスとインテグレーション

ツリー グリッド セルのインデントは、フィルタリング、ソート、ページングなど他のツリー グリッド全体の機能で永続化されます。

- `Sorting` が列に適用された際にデータ行がレベルごとにソートされます。ルートレベルの行はそれぞれの子に関係なく個々に並べ替えられます。各子コレクションは個々に並べ替えられます。
- 最初の列 (`VisibleIndex` が 0 の列) は常にツリー列です。
- 列のピン固定、列の非表示、列の移動などの処理後に `VisibleIndex` が 0 になる列はツリー列になります。
- エクスポートした Excel ワークシートは、ツリー グリッドでグループ化されるときにレコードをグループ化して階層に反映できます。すべてのレコードを展開した状態が保持および反映されます。
- CSV レベルにエクスポートする際に展開した状態は無視されてすべてのデータがフラットでエクスポートされます。

<!-- WebComponents, Blazor -->
## {Platform} ツリー グリッド スタイル設定の構成


定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります:

```ts
<igc-tree-grid class="tree-grid">
```

```razor
<IgbTreeGrid Class="tree-grid">
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.tree-grid {
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #FFF;
    --ig-grid-expand-icon-color: #FFCD0F;
    --ig-grid-expand-icon-hover-color: #E0B710;
    --ig-grid-row-hover-background: #F8E495;
}
```

`sample="/{TreeGridSample}/overview-styling", height="700", alt="{Platform} ツリー グリッドのスタイル設定"`

<!-- end: WebComponents, Blazor -->


## API リファレンス

* `TreeGrid`
* `Column`
* `GridToolbar`
* `TreeGridRecord`

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})