---
title: $PlatformShort$ データ グリッド | リモート データ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ グリッド コンポーネントの仮想データソースを使用してリモート データをバインドします。$ProductName$ テーブル チュートリアルを是非お試しください!
_keywords: $PlatformShort$ Table, Data Grid, virtual data, $ProductName$, Infragistics, data binding, $PlatformShort$ テーブル, データ グリッド, 仮想データ, データ バインディング, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---
# $PlatformShort$ グリッド仮想データのバインド

$ProductName$ Data Table / Data Grid は、1 行のコードでリモート データソースへのデータ バインドをサポートします。$PlatformShort$ データ テーブルの仮想データソースを使用すると、リモート URI と返される Odata エンティティで $PlatformShort$ グリッドを設定するだけで、残りの作業は $PlatformShort$ グリッドが行います。

## サンプル

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-binding-remote-data-iframe" src='{environment:demosBaseUrl}/grids/data-grid-binding-remote-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-binding-remote-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示
    </button>
</div>
<sample-button src="grids/data-grid/binding-remote-data"></sample-button>

<div class="divider--half"></div>


<!-- Angular, React, WebComponents -->
コア パッケージとグリッド パッケージに加えて、データソース パッケージもインストールする必要があります。

- **npm install --save {PackageCore}**
- **npm install --save {PackageGrids}**
- **npm install --save {PackageInputs}**
- **npm install --save {PackageDataSources}**

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

`Grid` を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataGridModule
<!-- end: Blazor -->

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

グリッド モジュールがインポートされました。以下のステップはリモート データにバインドするグリッドの基本的な設定です。仮想データソースを作成します。データが取得される URL を `baseUri` プロパティに割り当てます。`entitySet` プロパティを設定すると、仮想データソースから取得するテーブルがわかります。

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

データソースをグリッドに割り当てます。

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