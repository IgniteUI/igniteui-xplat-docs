---
title: {Platform} ツリー グリッド | 最速の {Platform} ツリー テーブル | インフラジスティックス
_description: {ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。わずかなコーディングでデータをすばやくバインドできます。無料でお試しください。
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics, {Platform} ツリー グリッド, インフラジスティックス
mentionedTypes: ['TreeGrid']
namespace: Infragistics.Controls
_language: ja
---

# {Platform} ツリー グリッドの概要と構成

{ProductName} `TreeTitle` は、階層データまたはフラット データを簡単に表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。マテリアル テーブルをベースとした UI ツリー グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。

## {Platform} ツリー グリッドの例

この例では、ユーザーが階層データまたはフラット データを操作する方法を確認できます。フィルタリングとソートのオプション、ピン固定と非表示、行の選択、Excel と csv へのエクスポートが含まれています。

`sample="/{TreeGridSample}/overview", height="700", alt="{Platform} グリッドの例"`



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

以下の名前空間を追加してコントロールの実装を開始できます。

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->

{Platform} ツリーグリッドのパッケージをインストールするときは、core パッケージもインストールする必要があります。

```cmd
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
```

<!-- WebComponents -->

ツリーグリッドを使用するには、次のインポートも含める必要があります:

```typescript
import 'igniteui-webcomponents-grids/grids/combined.js';
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

> [!Note]
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

上記のサンプル データでは、すべてのレコードに ID、ParentID、および Name、JobTitle、Age などの追加プロパティがあります。前述のように、レコードの ID は一意である必要があります。これが `primaryKey` になります。ParentID には親ノードの ID が含まれており、`foreignKey` として設定できます。行にツリーグリッドのいずれの行にも一致しない ParentID がある場合、行がルート行であることを意味します。

<!-- end: Angular, WebComponents -->

## パーシステンスとインテグレーション

**ツリー セル**のインデントは、フィルタリング、ソート、ページングなど他のツリーグリッド全体の機能で永続化されます。

- **ソート**が列に適用された際にデータ行がレベルごとにソートされます。ルートレベルの行はそれぞれの子に関係なく個々に並べ替えられます。各子コレクションは個々に並べ替えられます。
- 最初の列 (`visibleIndex` が 0 の列) は常にツリー列です。
- 列のピン固定、列の非表示、列の移動などの処理後に `visibleIndex` が 0 になる列はツリー列になります。
- エクスポートした Excel ワークシートは、ツリー グリッドでグループ化されるときにレコードをグループ化して階層に反映できます。すべてのレコードを展開した状態が保持および反映されます。
- CSV レベルにエクスポートする際に展開した状態は無視されてすべてのデータがフラットでエクスポートされます。

<!-- WebComponents -->
## {Platform} ツリー グリッド スタイル設定の構成

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、ツリー グリッドをさらにカスタマイズできます。ヘッダーの背景とテキストの色を変更したい場合は最初にツリー グリッドのクラスを設定する必要があります:

```typescript
<igc-tree-grid class="tree-grid">
```

次に、そのクラスの `--header-background` および `--header-text-color` CSS プロパティを設定します:

```css
.tree-grid {
    --header-background: #494949;
    --header-text-color: #FFF;
}
```
<!-- end: WebComponents -->


## API リファレンス

* `TreeGrid`
* `Column`
* `GridToolbar`
* `TreeGridRecord`

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})