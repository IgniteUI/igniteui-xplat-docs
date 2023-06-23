---
title: {Platform} Toolbar コンポーネント | {ProductName}
_description: {Platform} ツールバー コンポーネントを簡単に始める方法をご覧ください。データ チャートと互換性があります。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} ツールバー コンポーネント, {Platform} ツールバー コントロール
mentionedTypes: ["Toolbar", "DomainChart", "CategoryChart", "XamDataChart"]
_language: ja
---

# {Platform} Toolbar (ツールバー) の概要

{Platform} ツールバー コンポーネントは、スタンドアロンまたは {Platform} データ チャートおよび `CategoryChart` コンポーネントの両方と対話するための UI 操作のコンパニオン コンテナです。これにより、事前に定義された SVG アイコンを持つ `XamDataChart` などのプロパティのプリセットから簡単に選択できるようになりますが、プロジェクト固有のカスタム ツールを作成する機能も提供されます。多数の属性を利用して、使用中のアイコンを定義または変更したり、アイコンにさまざまなアクションを適用したりできます。`Toolbar` には独自の SVG アイコンが表示されます。

## {Platform} ツールバーの例

`sample="/charts/toolbar/actions-built-in-data-chart", height="600", alt="{Platform} ツールバーの例"`

## 依存関係

<!-- Angular, WebComponents, React -->
{ProductName} のレイアウト、入力、チャート、コア パッケージをインストールします。

```cmd
npm install {PackageLayouts}
npm install {PackageInputs}
npm install {PackageCharts}
npm install {PackageCore}
```

`Toolbar` とその機能を、`XamDataChart` コンポーネントとともに使用する場合、次のモジュールが必要です。

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
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// spreadsheet's modules
import { IgcToolbarModule } from 'igniteui-webcomponents-layouts';
import { IgcDataChartToolbarModule, IgcDataChartCoreModule, IgcDataChartCategoryModule, IgcDataChartAnnotationModule, IgcDataChartInteractivityModule, IgcDataChartCategoryTrendLineModule } from 'igniteui-webcomponents-charts';

// register the modules
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

`XamDataChart` コンポーネントとその機能の両方で `Toolbar` とその機能をを使用する場合、次のモジュールが必要です。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbToolbarModule),
    // these modules are required when using `Toolbar` with the `DataChart` component:
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

### {Platform} データ チャートの統合

{Platform} ツールバーには、`Target` プロパティが含まれています。これは、DataChart などの別のコンポーネントをリンクするために使用されます。 

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

チャートが ツールバー にリンクされると、いくつかの既存の `ToolAction` 項目とメニューが使用可能になります。次の名前は、ツールの追加、編集、表示 / 非表示の切り替えなどのさらなるカスタマイズに必要な Tool/Tool `OverlayId` 名のリストです。これらの名前は、`OverlayId`、`BeforeId`、`AfterId` に割り当てることができます。

以下は、提供されている {Platform} `XamDataChart` ツール アクションとそれに関連付けられた `OverlayId` のリストです。

ズーム アクション

- `ZoomReset`: `ToolActionLabel` は、チャート上で `ResetZoom` を実行して、ズーム レベルをデフォルトの位置にリセットします。
- `ZoomMenu`: `ToolActionIconMenu` は、チャートのズーム レベルを増減するためにチャート上で `ZoomIn` および `ZoomOut` を実行する 2 つの `ToolActionLabel` 項目を公開します。 

トレンド アクション  

- `AnalyzeMenu`: `ToolActionIconMenu` には、チャートを構成するためのいくつかのオプションが含まれています。
 - `AnalyzeHeader`: サブ セクション ヘッダー `OverlayId`。
  - `LinesMenu`: サブ メニュー `OverlayId`。
    - `LinesHeader`: サブ メニュー セクション ヘッダー `OverlayId`。
      - `MaxValue`: `ToolActionCheckbox` - y 軸に沿って最大値の水平破線を表示します。
      - `MinValue`: `ToolActionCheckbox`- y 軸に沿って最小値の水平破線を表示します。
      - `Average`: `ToolActionCheckbox` - y 軸に沿って平均値の水平破線を表示します。
  - `TrendsMenu`: `ToolActionLabel`
    - `TrendsHeader`: サブ セクション ヘッダー `OverlayId`。
      - `Exponential`: `ToolActionRadio` - チャート上の `TrendLineType` を `ExponentialFit` に設定します。
      - `Linear`: `ToolActionRadio` - チャート上の `TrendLineType` を `LinearFit` に設定します。
      - `Logarithmic`: `ToolActionRadio` - チャート上の `TrendLineType` を `LogarithmicFit` に設定します。
 - `HelpersHeader`: サブ セクション ヘッダー `OverlayId`。
  - `SeriesAvg`: `ToolActionCheckbox` - `Average` タイプの `ValueLayerValueMode` を使用して、`ValueLines` に系列を追加します。
  - `ValueLabelsMenu`:  `ToolActionLabel` 
    - `ValueLabelsHeader`: サブ メニュー セクション ヘッダー `OverlayId`。
      - `ShowValueLabels`: `ToolActionCheckbox` - チャートの `CalloutsVisible` プロパティを介してデータ ポイント値を表示します。
      - `ShowLastValueLabel`: `ToolActionCheckbox` - チャートの `FinalValueAnnotationsVisible` プロパティを介して最終値のコールアウトを表示します。
 - `ShowCrosshairs`: `ToolActionCheckbox` - チャートの `CrosshairsDisplayMode` プロパティによりマウス ホバー時に十字線の注釈を表示します。 
 - `ShowGridlines`: `ToolActionCheckbox` は、`XAxisMajorStroke` プロパティを介して追加のグリッド線を表示するために使用されます。

### ツール アクション

以下は、ツールバーに追加できる `ToolAction` 項目のリストです。

- `ToolActionButton`
- `ToolActionCheckbox`
- `ToolActionIconButton`
- `ToolActionIconMenu`
- `ToolActionLabel`
- `ToolActionNumberInput`
- `ToolActionRadio`

これらの各ツールは、マウスのクリックのような対話操作によって実行される `OnCommand` イベントを公開します。

`ToolAction` オブジェクトの `OverlayId`、`BeforeId`、`AfterId` プロパティを使用して、新規および既存のツールの位置を変更したり、非表示としてマークしたりすることができます。ToolActions は `Visibility` プロパティも公開します。  

次の例は、`ZoomReset` および `Analyze Menu` メニュー ツール アクションの両方を非表示にする方法を示しています。`AfterId` プロパティを使用してそれを `ZoomOut` に割り当てることにより、`ZoomReset` ツール アクションの新しいインスタンスが追加され、`ZoomMenu` 内に配置されます。これにより、新しいリセット ツールが `ZoomMenu` の下部に表示されます。

`sample="/charts/toolbar/layout-actions-for-data-chart", height="600", alt="{Platform} Toolbar の例"`

### 垂直方向

デフォルトでは、{Platform} ツールバーは水平 `Orientation` の位置で表示されますが、垂直方向に表示する機能もあります。

```html
<igc-toolbar orientation="vertical"></igc-icon>
```

```razor
<IgbToolbar Orientation="ToolbarOrientation.Horizontal">
```

```tsx
<IgbToolbar orientation="vertical" />
```

次の例は、{Platform} ツールバーの垂直方向を示しています。

`sample="/charts/toolbar/layout-in-vertical-orientation", height="600", alt="{Platform} 垂直方向"`

## スタイル設定 / テーマ設定

アイコン コンポーネントは、`BaseTheme` プロパティを `Toolbar` に直接使用してスタイルを設定できます。次の例は、適用できるさまざまなテーマ オプションを示しています。

`sample="/charts/toolbar/theming", height="600", alt="{Platform} Toolbar スタイル設定/テーマ設定"`

## API リファレンス

 - `Toolbar`
 - `XamDataChart`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
