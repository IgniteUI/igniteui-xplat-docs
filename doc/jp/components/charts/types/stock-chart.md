---
title: $PlatformShort$ 株価/ファイナンシャル チャート | $ProductName$
_description: The $ProductName$ Stock Chart is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Try for FREE.
_keywords: $PlatformShort$ Charts, Stock Chart, Infragistics, $PlatformShort$ チャート, 株価チャート, インフラジスティックス
mentionedTypes: ["XamFinancialChart"]
_language: ja
---
# $PlatformShort$ 株価チャート

$PlatformShort$ 株価チャート ($PlatformShort$ ローソク足チャートと呼ばれることもあります) は、インタラクティブな時系列表示で株価ティッカー データまたは価格データを描画する複合視覚化です。株式ティッカーは、分析している会社のデータ (ティッカー シンボル、通常は 1〜5 文字) を表します。株価チャートは、時系列 X 軸の時間の経過に伴うティッカーの株価を示します。株価チャートには、各期間の始値、高値、安値、終値 (OHLC) などの企業のティッカー データの情報も表示されます。$PlatformShort$ 株価チャートは、価格とボリュームの表示モードや多数の財務指標など、データを視覚化して解釈するための複数の方法を提供します。

典型的な株価チャートは、価格帯のテクニカル分析に使用されるローソク足チャートのティッカー データで表されます。ローソク足チャートは、1 日の高値と安値を、ティッカー シンボルの始値と終値と比較します。

- ローソク足チャートの本文には、始値と終値 (O/C) が表示されます。
- ローソク足チャートには、始値と終値 (O/C) が表示されます。
- ティッカー値の上限と下限の間の距離は、ティッカー価格の日の範囲です。
- ローソク足チャートのティッカー値は、資産が開いたよりも高く閉じたときに中空になります。
- ローソク足チャートのティッカー値は、資産が開いたよりも低く閉じたときに塗りつぶされます。
- 黒または赤のローソク足は、前のローソク足の終値よりも低い終値の価格を表します。
- 白または緑のローソク足は、前のローソク足の終値よりも高い終値を表します。

株価チャートは、ユーザーがデータ分析機能を実行できるようにすることを目的としているため、次のようなインタラクティブな要素が含まれています:

- 時間ベースのフィルター
- 価格ペイン
- ボリューム ペイン
- インジケーター ペイン
- トレンドライン
- ナビゲーション/ズームバー ペイン

株価チャートは、次のいずれかを表示するように設定できます:

- ローソク足チャート
- 棒チャート
- 縦棒チャート
- 折れ線チャート

データ構造:

- データ ソースはデータ項目の配列またはリストである必要があります。
- データ ソースに少なくとも 1 つのデータ項目を含む必要があります。
- すべてのデータ項目には、ティッカー データの日付を表す日時 (または文字列) 列が少なくとも 1 つ含まれている必要があります。
- すべてのデータ項目には、棒チャート、折れ線チャート、および縦棒チャートの 1 つの数値列が含まれている必要があります。
- すべてのデータ項目には、ローソク足チャートの始値、高値、安値、終値 (OHLC) の 4 つの数値列が含まれている必要があります。
- すべてのデータ項目には、ローソク足チャートの始値、高値、安値、終値、ボリュームの 5 つの数値列が含まれている必要があります。

## 複数シリーズの $PlatformShort$ 株価チャート


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data"
           alt="$PlatformShort$ 株価指数チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャート

この例では、株価チャートは 1 年間の S&P 500を表しています。投資家に役立ち、テクニカル解析を実施し、将来の価格/レポートを予測します。


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart"
           alt="$PlatformShort$ 株価指数チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えた株価チャートが必要な場合は、以下に示すように、厚さ、アウトライン、ブラシ、負のアウトライン、負のブラシを構成できます。この例では、株価チャートは Amazon、Microsoft、Tesla の収益を比較しています。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-styling"
           alt="$PlatformShort$ 株価指数チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ チャートの注釈

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-annotations"
           alt="$PlatformShort$ チャートの注釈" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ チャートのペイン

以下のペインを使用できます:

- 価格ペイン - 折れ線、ローソク足、棒 (OHLC)、トレンドライン、および財務オーバーレイを使用して価格を描画します。
- インジケーター ペイン - すべての財務指標を別のチャートに描画し、BollingerBands および PriceChannel オーバーレイが Y 軸と同じ値範囲を使用するために価格ペインに描画されます。
- ボリューム ペイン - 縦棒、折れ線、およびエリアのチャート タイプを使用して出来高を上記のペインの下に描画します。
- ズーム ペイン - すべてのペインのズームを制御します。常にチャートの下側に描画されます。

### インジケーター ペイン
財務指標は、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのインジケーターは、同じ Y 軸を共有しないため価格ペインの下に表示されます。

デフォルトでインジケーター ペインは表示されません。ユーザーは、ツールバーを使用してランタイムで表示するインジケーターを選択できます。
初期でインジケーター ペインを表示するには、以下のコードのように `indicatorTypes` プロパティをインジケーターのタイプを 1 つ以上に設定する必要があります:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    indicatorTypes="AverageTrueRange,ForceIndex" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    indicator-types="AverageTrueRange,ForceIndex">
 </igc-financial-chart>
```

```razor
this.Chart.IndicatorTypes.Add(FinancialIndicatorType.AverageTrueRange);
this.Chart.IndicatorTypes.Add(FinancialIndicatorType.ForceIndex);
```

### ボリューム ペイン
ボリューム ペインは指定した期間に取引された株式数を表します。出来高の低さは関心が低いことを示し、出来高の多さは取引が多く、関心が高いことを示します。縦棒、折れ線、またはエリア チャート タイプを使用して表示できます。ツールバーでチャート タイプを選択すると、ランタイムにデータを表示するボリューム ペインが表示されます。ペインを表示するには、以下のコードのようにボリューム タイプを設定する必要があります:

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-panes"
           alt="$PlatformShort$ チャートのペイン" >
</code-view>

<div class="divider--half"></div>
