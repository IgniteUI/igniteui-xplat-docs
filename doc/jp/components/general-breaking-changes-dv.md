---
title: $PlatformShort$ 重大な変更 | $ProductName$ | インフラジスティックス
_description: $ProductName$ の重大な変更とコードを最新の API に更新する方法について説明します。
_keywords: Breaking Changes, $ProductName$, Infragistics, 重大な変更, インフラジスティックス
_language: ja
---
# $ProductName$ の重大な変更

このトピックでは、$ProductName$ の重大な変更に関する情報と、古いコードを最新の API に更新する方法について説明します。

<!-- React, WebComponents -->

## PropertyPath の名称変更

データ グリッド コンポーネントの `propertyPath` プロパティ名が `field` に変更されました。これは、すべての Column タイプ、GroupDescription、SortDescription および SummaryDescription に適用します。

> [!NOTE]
> これらの重大な変更は、グリッド パッケージの **{PackageVerChangedFields}** バージョンで導入されました。

```tsx
 <IgrTextColumn field="Name"/>
```

```ts
import { IgrColumnSummaryDescription, IgrColumnSortDescription, IgrColumnGroupDescription } from 'igniteui-react-grids'
const productCount = new IgrColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgrColumnGroupDescription();
income.field = "Income";
```

```html
 <igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
income.field = "Income";

```

## Live Grid の名称変更

Data Grid コンポーネントおよび対応するモジュールの名前が 「LiveGrid」 から 「DataGrid」 に変更されました。

> [!NOTE]
> これらの重大な変更は、パッケージおよびコンポーネントの **{PackageVerRenamedGrid}** バージョンで導入されました。

グリッドとそれに対応するモジュールをインポートする新しいコードは以下のとおりです。

```ts
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridModule } from 'igniteui-react-grids';
```

```ts
import { IgcDataGrid } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
```

## Data Grid の必須ピア依存関係

Data Grid コンポーネントには 「inputs」 パッケージが必要です。

```ts
**npm install --save {PackageInputs}**
```
<!-- end: React, WebComponents -->

## Import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!NOTE]
> これらの重大な変更は、パッケージおよびコンポーネントの **{PackageVerChangedImports}** バージョン で導入されました。

| 影響されるパッケージ | 影響されるコンポーネント |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel ライブラリ](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [スプレッドシート](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [地理マップ](geo-map.md)、[ツリーマップ](treemap-overview.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [ブレット グラフ](bullet-graph.md)、[リニア ゲージ](linear-gauge.md)、[ラジアル ゲージ](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| カテゴリ チャート、データ チャート、ドーナツ チャート、ファイナンシャル チャート、円チャート、[ズーム スライダー](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageGrids}/v/{PackageVerChangedImports}" target="_blank">{PackageGrids}</a>             | [データ グリッド](data-grid.md)       |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | すべてのクラスと列挙型  |


## 変更後のコード

API クラスと列挙型へのフル パスの代わりにパッケージ名のみを使用できます。

注: Data Grid コンポーネントとそれに対応するモジュールの名前も変更されました。

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";

import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';

// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";

// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

```ts
// gauges:
import { IgcLinearGaugeComponent } from "igniteui-webcomponents-gauges";
import { IgcLinearGaugeModule } from "igniteui-webcomponents-gauges";
import { IgcLinearGraphRange } from "igniteui-webcomponents-gauges";

import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeRange } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps";

// grids:
import { IgcDataGridComponent } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from "igniteui-webcomponents-grids";
```

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";

import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { SweepDirection } from 'igniteui-react-core';

// charts:
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';

// maps:
import { IgrGeographicMap } from "igniteui-react-maps";
import { IgrGeographicMapModule } from "igniteui-react-maps";

// grids:
import { IgrLiveGrid } from "igniteui-react-grids";
import { IgrLiveGridModule } from 'igniteui-react-grids';
```


## 変更前のコード

以前は、API クラスと列挙型への完全なパスを使用してインポートする必要がありました。

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-webcomponents-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-module";
```

```ts
// gauges:
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-component';
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-module';
import { IgcLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igc-linear-graph-range';

import { IgcRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-component";
import { IgcRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-module";
import { IgcRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-component";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-module";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts/ES5/igc-data-chart-component";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igc-data-chart-core-module";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-component";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-module";

// grids:
import { IgcDataGridModule } from 'igniteui-webcomponents-grids/ES5/igc-data-grid-module';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids/ES5/igc-data-grid-component';
```

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges/ES5/igr-linear-gauge";
import { IgrLinearGaugeModule } from "igniteui-react-gauges/ES5/igr-linear-gauge-module";
import { IgrLinearGraphRange } from "igniteui-react-gauges/ES5/igr-linear-graph-range";

import { IgrRadialGauge } from "igniteui-react-gauges/ES5/igr-radial-gauge";
import { IgrRadialGaugeModule } from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import { IgrRadialGaugeRange } from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import { SweepDirection } from "igniteui-react-core/ES5/SweepDirection";

// charts:
import { IgrFinancialChart } from "igniteui-react-charts/ES5/igr-financial-chart";
import { IgrFinancialChartModule } from "igniteui-react-charts/ES5/igr-financial-chart-module";
import { IgrDataChart } from "igniteui-react-charts/ES5/igr-data-chart";
import { IgrDataChartCoreModule } from "igniteui-react-charts/ES5/igr-data-chart-core-module";

// maps:
import { IgrGeographicMap } from "igniteui-react-maps/ES5/igr-geographic-map";
import { IgrGeographicMapModule } from "igniteui-react-maps/ES5/igr-geographic-map-module";

// grids:
import { IgrDataGrid } from "igniteui-react-grids/ES5/igr-data-grid";
import { IgrDataGridModule } from 'igniteui-react-grids/ES5/igr-data-grid-module';
```


