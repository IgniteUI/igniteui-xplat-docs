---
title: {Platform} データ グリッド | リモート データ | インフラジスティックス
_description: インフラジスティックスの {Platform} グリッド コンポーネントの仮想データ ソースを使用してリモート データをバインドします。{ProductName} テーブル チュートリアルを是非お試しください!
_keywords: {Platform} Table, Data Grid, virtual data, {ProductName}, Infragistics, data binding, {Platform} テーブル, データ グリッド, 仮想データ, データ バインディング, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド仮想データのバインディン

{ProductName} Data Table / Data Grid は、1 行のコードでリモート データ ソースへのデータ バインドをサポートします。{Platform} データ テーブルの仮想データ ソースを使用すると、リモート URI と返される Odata エンティティで {Platform} グリッドを設定するだけで、残りの作業は {Platform} グリッドが行います。

## {Platform} グリッド仮想データのバインディンの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-binding-remote-data"
           alt="{Platform} グリッド仮想データのバインディンの例"
           github-src="grids/data-grid/binding-remote-data">
</code-view>

<div class="divider--half"></div>



<!-- Angular, React, WebComponents -->
コア パッケージと {Platform} データ グリッド パッケージに加えて、データ ソース パッケージもインストールする必要があります。

- **npm install --save {PackageCore}**
- **npm install --save {PackageGrids}**
- **npm install --save {PackageInputs}**
- **npm install --save {PackageDataSources}**

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

`Grid` を作成するには、以下のモジュールが必要です。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDataGridModule));
```

```ts
import './odatajs-4.0.0';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { ODataVirtualDataSource } from 'igniteui-react-datasources';

IgrDataGridModule.register();
```

```ts
import './odatajs-4.0.0';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
import { ODataVirtualDataSource } from 'igniteui-webcomponents-dataSource';

ModuleManager.register(
    IgcDataGridModule
    )

```

<div class="divider--half"></div>

## コード スニペット

グリッド モジュールがインポートされました。以下のステップはリモート データにバインドするグリッドの基本的な設定です。仮想データ ソースを作成します。データが取得される URL を `baseUri` プロパティに割り当てます。`entitySet` プロパティを設定すると、仮想データ ソースから取得するテーブルがわかります。

```tsx
<IgrDataGrid
    width="100%"
    height="100%"
    defaultColumnMinWidth={120}
    dataSource={this.virtualData}/>
```

```html
<igc-data-grid id="grid"
    width="100%"
    height="100%"
    default-column-min-width=200>
</igc-data-grid>
```

データ ソースをグリッドに割り当てます。

```ts
private virtualData: ODataVirtualDataSource;
// ...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```

```ts
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = vds;
```

## API リファレンス

 - `Grid`