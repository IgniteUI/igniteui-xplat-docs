---
title: {Platform} Toolbar コンポーネント | {ProductName}
_description: {Platform} ツールバー コンポーネントを簡単に始める方法をご覧ください。データ チャートと互換性があります。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} ツールバー コンポーネント, {Platform} ツールバー コントロール
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart"]
_language: ja
---

# {Platform} Toolbar (ツールバー) の概要

{Platform} ツールバー コンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、`XamDataChart` または `CategoryChart` コンポーネントにリンクされると、プロパティとツール項目のプリセットで動的に更新されます。プロジェクト用のカスタム ツールを作成して、エンド ユーザーが変更を提供できるようになり、無限のカスタマイズが可能になります。

## {Platform} ツールバーの例

`sample="/charts/toolbar/actions-built-in-category-chart", height="600", alt="{Platform} ツールバーの例"`

## 依存関係

<!-- Angular, WebComponents, React -->
{ProductName} のレイアウト、入力、チャート、コア パッケージをインストールします。

```cmd
npm install {PackageLayouts}
npm install {PackageInputs}
npm install {PackageCharts}
npm install {PackageCore}
```

`XamDataChart` コンポーネントとその機能とともに `Toolbar` を使用する場合、次のモジュールが必要です。

```ts
import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule  } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxToolbarModule,
        IgxDataChartToolbarModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartAnnotationModule,
        IgxDataChartInteractivityModule,
        IgxDataChartCategoryTrendLineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgxToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule  } from 'igniteui-react-charts';

IgxToolbarModule.register();
IgrDataChartToolbarModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();
```

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcToolbarModule } from 'igniteui-webcomponents-layouts';
import { IgcDataChartToolbarModule, IgcDataChartCoreModule, IgcDataChartCategoryModule, IgcDataChartAnnotationModule, IgcDataChartInteractivityModule, IgcDataChartCategoryTrendLineModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcToolbarModule,
    IgcToolActionLabelModule,
    IgcDataChartToolbarModule,
    IgcDataChartCategoryModule,
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartAnnotationModule,
    IgcDataChartCategoryTrendLineModule
);
```

<!-- end:Angular, WebComponents, React -->

<!-- Blazor -->

**IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

`XamDataChart` コンポーネントとその機能とともに `Toolbar` を使用する場合、次のモジュールが必要です。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbToolbarModule),
    typeof(IgbDataChartToolbarModule),
    typeof(IgbDataChartCoreModule),
    typeof(IgbDataChartCategoryModule),
    typeof(IgbDataChartAnnotationModule),
    typeof(IgbDataChartInteractivityModule),
    typeof(IgbDataChartCategoryTrendLineModule)
);
```

スタイルを `Toolbar` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります。

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

## 使用方法

### ツール操作

以下は、ツールバーに追加できるさまざまな `ToolAction` 項目のリストです。

- `ToolActionButton`
- `ToolActionCheckbox`
- `ToolActionIconButton`
- `ToolActionIconMenu`
- `ToolActionLabel`
- `ToolActionNumberInput`
- `ToolActionRadio`

これらのツールはそれぞれ、マウスのクリックによってトリガーされる `OnCommand` イベントを公開します。

`ToolAction` オブジェクトの `OverlayId`、`BeforeId`、および `AfterId` プロパティを使用して、新規および既存のツールの位置を変更したり、非表示にマークしたりすることができます。ToolActions は `Visibility` プロパティも公開します。

次の例は、組み込みの **ZoomReset** と **AnalyzeMenu** メニュー ツール アクションの両方を非表示にする方法を示しています。**ZoomReset** ツール操作の新しいインスタンスが追加され、`AfterId` プロパティを使用して **ZoomMenu** 内に配置され、それを **ZoomOut** に割り当てます。これにより、新しいリセット ツールが **ZoomMenu** の下部に表示されます。

`sample="/charts/toolbar/layout-actions-for-data-chart", height="600", alt="{Platform} Toolbar の例"`

### {Platform} データ チャートの統合

{Platform} ツールバーには、`Target` プロパティが含まれています。これは、以下のコードに示すように、`XamDataChart` などのコンポーネントをリンクするために使用されます。

```razor
  <IgbToolbar
    Name="Toolbar"
    @ref="toolbar"
    Target="@chart">
  <IgbToolbar>

  <IgbDataChart
    Name="chart"
    @ref="chart">
  </IgbDataChart>
```

```html
  <div class="legend">
    <igx-toolbar
      name="toolbar"
      [target]="chart"
      #toolbar>
    </igx-toolbar>
  </div>
  <div class="container fill">
    <igx-data-chart
    name="chart"
    #chart>
  </igx-data-chart>
```

```html
  <div>
      <igc-toolbar
      name="Toolbar"
      id="Toolbar">
      </igc-toolbar>
  </div>

  <div class="container fill">
      <igc-data-chart
      is-horizontal-zoom-enabled="true"
      name="chart"
      id="chart">
      </igc-data-chart>
  </div>
```

```ts
  private _bind: () => void;
  constructor() {
    var toolbar = this.toolbar = document.getElementById('Toolbar') as IgcToolbarComponent;
    var chart = this.chart = document.getElementById('chart') as IgcDataChartComponent;

    this._bind = () => {
        toolbar.target = this.chart;
    }
    this._bind();
  }
```

```tsx
  private toolbar: IgrToolbar
  private toolbarRef(r: IgrToolbar) {
      this.toolbar = r;
      this.setState({});
  }
  private chart: IgrDataChart
  private chartRef(r: IgrDataChart) {
      this.chart = r;
      this.toolbar.target = this.chart;
      this.setState({});
  }
  public render(): JSX.Element {
        return (
      <div>
        <IgrToolbar
          ref={this.toolbarRef}>
        </IgrToolbar>
      </div>

      <div>
        <IgrDataChart
          ref={this.chartRef}>
        </IgrDataChart>
      </div>
    );
  }
```

`XamDataChart` が Toolbar にリンクされると、いくつかの既存の `ToolAction` 項目とメニューが使用可能になります。以下は、組み込みの {Platform} `XamDataChart` ツール操作とそれに関連付けられた `OverlayId` のリストです。

ズーム操作

- `ZoomReset`: チャート上で `ResetZoom` メソッドを呼び出し、ズーム レベルをデフォルトの位置にリセットする `ToolActionLabel`。
- `ZoomMenu`: チャートのズーム レベルを増減するためにチャート上で `ZoomIn` および `ZoomOut` メソッドを呼び出す 2 つの `ToolActionLabel` 項目を公開する `ToolActionIconMenu`。

トレンド操作

- `AnalyzeMenu`: チャートのさまざまなオプションを構成するためのいくつかのオプションを含む `ToolActionIconMenu`。
 - `AnalyzeHeader`: サブ セクションのヘッダー。
  - `LinesMenu`: チャート上で水平破線を表示するためのさまざまなツールが含まれるサブ メニュー。
    - `LinesHeader`: 次の 3 つのツールのサブメニュー セクション ヘッダー:
      - `MaxValue`: シリーズの最大値で yAxis に沿って水平破線を表示する `ToolActionCheckbox`。
      - `MinValue`: シリーズの最小値で yAxis に沿って水平破線を表示する `ToolActionCheckbox`。
      - `Average`:  シリーズの平均値で yAxis に沿って水平破線を表示する `ToolActionCheckbox`。
  - `TrendsMenu`: さまざまな近似曲線を `XamDataChart` プロット領域に適用するためのツールを含むサブ メニュー。
    - `TrendsHeader`: 次の 3 つのツールのサブメニュー セクション ヘッダー:
      - `Exponential`: チャート内の各シリーズの `TrendLineType` を `ExponentialFit` に設定する `ToolActionRadio`。
      - `Linear`: チャート内の各シリーズの `TrendLineType` を `LinearFit` に設定する `ToolActionRadio`。
      - `Logarithmic`: チャート内の各シリーズの `TrendLineType` を `LogarithmicFit` に設定する `ToolActionRadio`。
 - `HelpersHeader`: サブ セクションのヘッダー。
  - `SeriesAvg`: `Average` タイプの `ValueLayerValueMode` を使用して、チャートのシリーズ コレクションに `ValueLayer` を追加または削除する `ToolActionCheckbox`。
  - `ValueLabelsMenu`: `XamDataChart` のプロット領域に注釈を表示するためのさまざまなツールを含むサブ メニュー。
    - `ValueLabelsHeader`: 次のツールのサブ メニュー セクション ヘッダー:
      - `ShowValueLabels`: `CalloutLayer` を使用してデータ ポイント値を切り替える `ToolActionCheckbox`。
      - `ShowLastValueLabel`: `FinalValueLayer` を使用して最終値軸の注釈を切り替える `ToolActionCheckbox`。
 - `ShowCrosshairs`: チャートの `CrosshairsDisplayMode` プロパティを介してマウスオーバー十字線の注釈を切り替える `ToolActionCheckbox`。
 - `ShowGridlines`: X-Axis に `MajorStroke` を適用することで追加のグリッド線を切り替える `ToolActionCheckbox`。

### 垂直方向

デフォルトでは、{Platform} ツールバーは水平に表示されますが、`Orientation` プロパティを設定することで垂直に表示することもできます。

```html
<igx-toolbar orientation="Vertical" />
```

```html
<igc-toolbar orientation="Vertical" />
```

```razor
<IgbToolbar Orientation="ToolbarOrientation.Vertical" />
```

```tsx
<IgrToolbar orientation="Vertical" />
```
<!-- 次の例は、{Platform} ツールバーの垂直方向を示しています。
`sample="/charts/toolbar/layout-in-vertical-orientation", height="600", alt="{Platform} 垂直方向"` -->

<!-- ## スタイル設定 / テーマ設定

アイコン コンポーネントは、`BaseTheme` プロパティを `Toolbar` に直接使用してスタイルを設定できます。

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- 次の例は、適用できるさまざまなテーマ オプションを示しています。
`sample="/charts/toolbar/theming", height="600", alt="{Platform} Toolbar スタイル設定/テーマ設定"` -->

## API リファレンス

 - `Toolbar`
 - `XamDataChart`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
