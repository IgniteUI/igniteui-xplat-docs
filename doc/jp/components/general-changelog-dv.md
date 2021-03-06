---
title: $Platform$ 新機能 | $ProductName$ | インフラジスティックス
_description: $ProductName$ の新機能について学んでください。
_keywords: Changelog, What's New, $ProductName$, Infragistics, 変更ログ, 新機能, インフラジスティックス
_language: ja
---
# $ProductName$ 変更ログ (データ可視化)

<div class="divider--half"></div>

<!-- Angular -->

> [!NOTE]
> このファイルは、igniteui-angular-\* パッケージ (例: igniteui-angular-charts) のみに固有です。

> 追加の変更については、[Ignite UI Angular 変更](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md)を参照してください。

<!-- end: Angular -->

<div class="divider--half"></div>

このプロジェクトの各バージョンのすべての注目すべき変更は、このファイルに文書化されます。

## **{PackageVerChangedCharts}**

### チャート

このリリースでは、すべてのチャート コンポーネント、例えば、データ チャート、カテゴリ チャート、およびファイナンシャル チャートに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。

チャート デフォルト値のデザイン更新:

* すべてのチャートのシリーズ/マーカーの新しい色パレット。すべてのタイプのチャート/シリーズには、ブラシ/塗りつぶしとアウトラインの新しい色があります。

古いシリーズのブラシのアウトライン  | 新シリーズのブラシのアウトライン
------------- | -------------
`Color_001=#7446B9`  | `Color_001=#8bdc5c`
`Color_002=#9FB328`  | `Color_002=#8b5bb1`
`Color_003=#F96232`  | `Color_003=#6db1ff`
`Color_004=#2E9CA6`  | `Color_004=#f8a15f`
`Color_005=#DC3F76`  | `Color_005=#ee5879`
`Color_006=#FF9800`  | `Color_006=#735656`
`Color_007=#3F51B5`  | `Color_007=#f7d262`
`Color_008=#439C47`  | `Color_008=#8ce7d9`
`Color_009=#795548`  | `Color_009=#e051a9`
`Color_010=#9A9A9A`  | `Color_010=#a8a8b7`

例

<img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" />
------------- | -------------
<img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" />

<div class="divider--half"></div>

* 棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
* 散布高密度シリーズの最小/最大ヒート プロパティの色を変更しました。

    古いヒート最小色  | 新しいヒート最小色
    ------------- | -------------
    `#FF7446B9` | `#ff8b5bb1`

    古いヒート最大色  | 新しいヒート最大色
    ------------- | -------------
    `#FFC62828`  | `#ffee5879`

* ファイナンシャル/ウォーターフォール シリーズのビジュアルの負の塗りつぶしの色を変更しました。

    古いマイナス値のブラシ | 新しいマイナス値のブラシ
    ------------- | -------------
    `#FFC62828`  | `#ffee5879`

* マーカーの厚さを 1px から 2px に変更しました。
* PointSeries、BubbleSeries、ScatterSeries、PolarScatterSeries のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。
    - `MarkerFillMode` プロパティを Normal に設定すると、この変更を元に戻すことができます。
* TimeXAxis および OrdinalTimeXAxis のラベリングを圧縮しました。
* 新しいマーカー プロパティ:
    - `MarkerFillMode` - マーカーがアウトラインに依存するように、'MatchMarkerOutline' に設定できます。
    - `MarkerFillOpacity` - 0〜1 の値に設定できます。
    - `MarkerOutlineMode` - マーカーのアウトラインが塗りブラシの色に依存するように、'MatchMarkerBrush' に設定できます。
* 新シリーズ `OutlineMode` プロパティ:
    - シリーズ アウトラインの表示を切り替えるように設定できます。データ チャートの場合、プロパティはシリーズ上にあることに注意してください。
* 新しいプロット エリア マージン プロパティ:
    - `PlotAreaMarginLeft`
    - `PlotAreaMarginTop`
    - `PlotAreaMarginRight`
    - `PlotAreaMarginBottom`
    - `ComputedPlotAreaMarginMode`
    - プロット領域のマージン プロパティは、チャートがデフォルト ズーム レベルにある場合、ビューポートのブリード オーバー領域を定義します。一般的な使用例では、軸と最初/最後のデータ ポイントの間にスペースを提供します。以下にリストされている `ComputedPlotAreaMarginMode` は、マーカーが有効になっているときに自動的にマージンを設定することに注意してください。その他は、厚さを表す `Double` を指定するように設計されており、PlotAreaMarginLeft などがチャートの 4 辺すべてにスペースを調整します。
* 新しい強調表示プロパティ:
    - `HighlightingMode` - ホバーされたシリーズとホバーされていないシリーズをフェードまたは明るくするかを設定します。
    - `HighlightingBehavior` - 真上または最も近い項目など、マウスの位置に応じてシリーズを強調表示するかどうかを設定します。
    - 以前のリリースでは、強調表示はホバー時にフェードするように制限されていたことに注意してください。
* 次のシリーズの強調表示を追加しました:
    - 積層型
    - 散布図
    - 極座標
    - ラジアル
    - 図形
* 次のシリーズに注釈レイヤーを追加しました:
    - 積層型
    - 散布図
    - 極座標
    - ラジアル
    - 図形
* 積層型シリーズ内の個々の積層フラグメントのデータ ソースをオーバーライドするためのサポートが追加されました。
* 積層型、散布、範囲、極座標、ラジアル、シェイプ シリーズにカスタム スタイルのイベントを追加しました。
* 垂直ズームをシリーズ コンテンツに自動的に同期するサポートが追加されました。
* 表示された最初のラベルに基づいてチャートの水平マージンを自動的に拡張するサポートが追加されました。

### チャート凡例

* ItemLegend に水平方向を追加しました。
   - 次のチャート タイプでは、ItemLegend を水平方向で使用できます:
        - バブル
        - ドーナツ
        - 円
* `LegendHighlightingMode` - 凡例項目にカーソルを合わせると、シリーズの強調表示が有効になります。

### 地理マップ

> [!NOTE]
> これらの機能は CTP です。

* マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
* 座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
* シェイプ シリーズの強調表示のサポートが追加されました。
* シェイプ シリーズの一部の注釈レイヤーのサポートが追加されました。

<div class="divider--half"></div>

<!-- Blazor, React, WebComponents -->

### データ グリッド

* `EditOnKeyPress`、(別名: Excel スタイルの編集) を追加し、入力するとすぐに編集を開始します。

* `EditModeClickAction` プロパティを追加しました - デフォルトでは、編集モードに入るにはダブル クリックが必要です。これを `SingleClick` に設定して、新しいセルを選択するときに編集モードを実行できるようにすることができます。

* `EnterKeyBehaviors` プロパティ (別名 Excel スタイルのナビゲーション (Enter 動作)) を追加して、Enter キーの動作を制御します。例えば、オプションは (なし、編集、上、下、左、右に移動) です。

* `EnterKeyBehaviorAfterEdit` プロパティを追加しました - 編集モードでは、このプロパティは Enter キーが押されたときを制御します。例えば、オプションは (下、上、右、左のセルに移動) です。

* `SelectAllRows` メソッドを追加しました。

* 行範囲の選択を追加しました - `GridSelectionMode` プロパティを MultipleRow に設定すると、次の新しい機能が含まれるようになりました:
    - クリックしてドラッグし、行を選択します。
    - Shift キーを押しながらクリックして、複数の行を選択します。
    - Shift キーを押しながら上下の矢印キーを押して、複数の行を選択します。

* スペース バーを押すと、MultipleRow または SingleRow に設定された `GridSelectionMode` プロパティを介してアクティブな行の選択が切り替わります。

* 列オプション ダイアログに列集計を追加しました。

### 日付ピッカー

* `ShowTodayButton` - 現在の日付のボタンの表示を切り替えます。
* `Label` - 日付値の上にラベルを追加します。
* `Placeholder` プロパティ - 値が選択されていない場合にカスタム テキストを追加します。
* `FormatString` - 入力日付文字列をカスタマイズします。(例: yyyy-MM-dd)
* `DateFormat` - 選択した日付を LongDate または ShortDate のどちらとして表示するかを指定します。
* `FirstDayOfWeek` - 週の最初の曜日を指定します。
* `FirstWeekOfYear` - 年の最初の週をいつ表示するかを指定します。例えば、最初の 1 週間、最初の 4 日間の週です。
* `ShowWeekNumbers` - 週番号の表示を切り替えます。
* `MinDate` & `MaxDate` - 使用可能の選択できる日付の範囲を指定する日付制限。
* アクセシビリティの追加

<!-- end: Blazor, React, WebComponents -->

<div class="divider--half"></div>

<!-- React, WebComponents -->
## **{PackageVerChangedFields}**

> [!NOTE]
> これらの重大な変更は、グリッド パッケージで導入されました。

### データ グリッド

- PropertyPath の名称変更

データ グリッド コンポーネントの `propertyPath` プロパティ名が `field` に変更されました。これは、すべての Column タイプ、GroupDescription、SortDescription および SummaryDescription に適用します。

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
## **{PackageVerRenamedGrid}**

### データ グリッド

- Live Grid の名称変更

Data Grid コンポーネントおよび対応するモジュールの名前が LiveGrid から DataGrid に変更されました。

> [!NOTE]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

グリッドとそれに対応するモジュールをインポートする新しいコードは以下のとおりです。

```ts
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridModule } from 'igniteui-react-grids';
```

```ts
import { IgcDataGrid } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
```

- Data Grid の必須ピア依存関係

Data Grid コンポーネントには 「inputs」 パッケージが必要です。

```ts
**npm install --save {PackageInputs}**
```
<!-- end: React, WebComponents -->

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## **{PackageVerChangedImports}**

- import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!NOTE]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

| 影響されるパッケージ | 影響されるコンポーネント |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel ライブラリ](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [スプレッドシート](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [マップ](geo-map.md)、[ツリーマップ](charts/types/treemap-chart.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [ブレット グラフ](bullet-graph.md)、[リニア ゲージ](linear-gauge.md)、[ラジアル ゲージ](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| カテゴリ チャート、データ チャート、ドーナツ チャート、ファイナンシャル チャート、円チャート、[ズーム スライダー](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageGrids}/v/{PackageVerChangedImports}" target="_blank">{PackageGrids}</a>             | [データ グリッド](data-grid.md)       |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | すべてのクラスと列挙型  |


- 変更後のコード

API クラスと列挙型へのフル パスの代わりにパッケージ名のみを使用できます。

注: Data Grid コンポーネントとそれに対応するモジュールの名前も変更されました

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

- 変更前のコード

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
import { IgcLiveGridModule } from 'igniteui-webcomponents-grids/ES5/igc-live-grid-module';
import { IgcLiveGridComponent } from 'igniteui-webcomponents-grids/ES5/igc-live-grid-component';
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
import { IgrLiveGrid } from "igniteui-react-grids/ES5/igr-live-grid";
import { IgrLiveGridModule } from 'igniteui-react-grids/ES5/igr-live-grid-module';
```
<!-- end: Angular, React, WebComponents -->