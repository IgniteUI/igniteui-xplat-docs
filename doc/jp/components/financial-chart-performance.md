---
title: $Platform$ ファイナンシャル チャート | パフォーマンス | インフラジスティックス
_description: インフラジスティックスの $Platform$ ファイナンシャル チャート コントロールを使用して数百万の財務データ ポイントを高速に描画します。$ProductName$ チャートの高いパフォーマンスを是非お試しください。
_keywords: $Platform$ charts, financial chart, stock chart, performance, $ProductName$, Infragistics, data binding, $Platform$ チャート, ファイナンシャル チャート, 株価チャート, パフォーマンス, インフラジスティックス、データ バインディング
mentionedTypes: ['FinancialChart', 'FinancialChartType', 'FinancialOverlayType', 'FinancialChartVolumeType', 'MarkerType', 'FinancialChartXAxisMode', 'FinancialChartZoomSliderType', 'FinancialChartYAxisMode', 'DomainChart' ]
_language: ja
---
# $Platform$ チャートのパフォーマンス

$Platform$ Financial Chart  コンポーネントは大量のデータ ポイントの描画で高いパフォーマンスを実現します。以下のデモは 20 年間のデータをバインドし、ローソク足チャートで 1 日間隔の在庫価格を示します。

## $Platform$ チャートのパフォーマンスの例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-performance"
           alt="$Platform$ チャートのパフォーマンスの例"
           github-src="charts/financial-chart/performance">
</code-view>

<div class="divider--half"></div>


以下のコードはファイナンシャル チャートを大量のデータにバインドします。

```ts
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    width="850px"
    height="600px"
    dataSource={this.data} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px">
 </igc-financial-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcFinancialChartComponent);
chart.dataSource = data;
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource" />
```

チャートのパフォーマンスに影響を及ぼす $Platform$ 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

> [!NOTE]
> For Angular:
>
> * コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。$Platform$ の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。
> * チャートに $Platform$ が自動でデータ変更を通知する代わりに、バインドされたデータが変更された方法をコンポーネントに通知できます。デルタ通知の処理は、$Platform$ が変更検出を実行する際に 100 万のレコードを含む配列のすべての変更を比較するより効果的に実行できます。バインドしたデータの変更をチャートに通知する方法の詳細については、チャートの `notify*` メソッドを参照してください。
> * $Platform$ がデバッグ モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合、`--prod` 版を使用して serve または build してください。

<!-- -->
> [!NOTE]
> For React:
>
> * $Platform$ が開発モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合は必ず製品ビルドを使用してください。

また、アプリケーションのパフォーマンスを最適化する場合、ファイナンシャル チャートの以下の機能に注意してください。

## チャート タイプ
`ChartType` オプションの設定はチャート パフォーマンスに影響します。

* `Line` - 簡単に描画できるチャート タイプです。大量のデータ ポイントの描画や複数のデータ ソースをプロットする場合に使用することをお勧めします。
* `Column` - `Line` チャート タイプより描画が複雑です。単一の数値を持つデータ項目を描画する場合の使用することをお勧めします。
* `Bar` - `Column` チャート タイプより描画が複雑です。OHLC 数値を持つデータ項目を描画する場合に使用することをお勧めします。
* `Candle` - `Bar` チャート タイプより描画が複雑です。OHLC 数値を持つデータ項目を描画する場合にも推薦されます。

## ボリューム タイプ
`VolumeType` オプションの設定はチャート パフォーマンスに影響します。

* `Line` - 描画する一番安いボリューム タイプです。データ ポイントの大量を描画するか、複数のデータ ソースをプロットする場合に使用することをお勧めします。
* `Area` - `Line` ボリューム タイプより描画に手間がかかります。
* `Column` - `Area` ボリューム タイプより描画に手間がかかります。1 つ ～ 3 つの在庫の出来高データを描画する場合に使用することをお勧めします。
* `None` - ボリューム ペインは表示しません。

## マーカー タイプ
`MarkerType` オプションを `none` に設定すると他のタイプより描画する項目の量が少なくなります。

## 凡例の表示
`IsLegendVisible` オプションを `false` に設定すると凡例が描画されないためパフォーマンスが向上します。

## ズーム スライダー タイプ
`ZoomSliderType` オプションを `none` に設定すると、チャート パフォーマンスを向上し、その他のインジケーターおよびボリューム ペインのために垂直スペースを利用可能になります。

## チャート ペイン
`FinancialIndicatorType` および `FinancialOverlayType` オプションを使用して複数のペインを設定した場合、パフォーマンスが低下する可能性があり、少数の財務指標および単一の財務オーバーレイを使用することをお勧めします。

## X 軸モード
`XAxisMode` オプションの設定はチャート パフォーマンスに影響します。

* `Ordinal` - ファイナンシャル チャートで使用できる最も簡易な X 軸です。データ範囲のギャップ (週末または休日など) の描画が必要ない場合に使用することをお勧めします。
* `Time`  - ファイナンシャル チャートで `Ordinal` より手間がかかります。データ範囲のギャップ (週末または休日など) の描画が必要な場合に使用することをお勧めします。

## Y 軸モード
パフォーマンスを向上させるには、`PercentChange` モードよりオプションが少ない `YAxisMode`  オプションの `numeric` に設定してください。

## 注釈
Callout Annotations (`CalloutsVisible`) または Final Value Annotations (`FinalValueAnnotationsVisible`) はファイナンシャル チャートのパフォーマンスを低下させます。

## 軸ビジュアル

デフォルトで、ファイナンシャル チャートのパフォーマンスが最適化されています。ただし、以下のオプションの追加などチャート ビジュアルを有効化することによりパフォーマンスが低下する場合があります。

* `XAxisTitle`
* `YAxisTitle`
* `XAxisTickStroke`
* `YAxisTickStroke`
* `XAxisMajorStroke`
* `YAxisMajorStroke`
* `XAxisMinorStroke`
* `YAxisMinorStroke`
* `XAxisLabel`
* `YAxisLabel`
* `XAxisStroke`
* `YAxisStroke`
* `XAxisStrip`
* `YAxisStrip`
* `YAxisInterval`


<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

* [大規模データのバインド](financial-chart-high-volume.md)
* [リアルタイムにデータをバインド](financial-chart-high-frequency.md)
* [複数データ ソースのバインド](financial-chart-multiple-data.md)
