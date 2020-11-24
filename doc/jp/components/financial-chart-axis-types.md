---
title: $PlatformShort$ ファイナンシャル チャート | 軸のタイプ | インフラジスティックス
_description: 軸間隔、軸ラベル、軸モード、軸範囲、軸スケール、軸目盛、軸タイトルなどのインフラジスティックス  $PlatformShort$ チャート コントロールの軸を設定する方法を説明します。$ProductName$ ファイナンシャル グラフのサンプルを是非お試しください!
_keywords: $PlatformShort$ charts, financial chart, stock chart, financial axis, $ProductName$, Axis type, Infragistics, チャート, ファイナンシャル チャート, 株価チャート, 財務軸, 軸タイプ, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---
# $PlatformShort$ チャート軸タイプ

$PlatformShort$ Financial Chart コンポーネントでは、軸は軸線、目盛、タイトル、や軸のラベルの外観を設定する基本プロパティを提供します。

## $PlatformShort$ チャート軸タイプの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-axis-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ チャート軸タイプの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-axis-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/financial-chart/axis-types"></sample-button>

</div>

<div class="divider--half"></div>

デフォルトでは、ラベルを明示的に設定する必要はありません。Financial Chart コンポネントは、データ内で最初の適切なプロパティを使用し、ラベルに使用します。

## 軸間隔
Financial Chart コントロールで、`YAxisInterval` プロパティは主グリッド線および軸ラベルが軸に描画される頻度を指定します。同様に、`YAxisMinorInterval` プロパティは副グリッド線が軸に描画される頻度を指定します。

以下のコード スニペットは、Y 軸の間隔を設定する方法を示します。

```html
 <igx-financial-chart
    yAxisInterval="200"
    yAxisMinorInterval="50"
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness="0.5"
    yAxisMajorStrokeThickness="0.5" >
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    yAxisInterval={200}
    yAxisMinorInterval={50}
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness={0.5}
    yAxisMajorStrokeThickness={0.5} />
```

```html
 <igc-financial-chart
    y-axis-interval="200"
    y-axis-minor-interval="50"
    y-axis-major-stroke="Black"
    y-axis-minor-stroke="Gray"
    y-axis-minor-stroke-thickness="0.5"
    y-axis-major-stroke-thickness="0.5" >
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    YAxisInterval="200"
    YAxisMinorInterval="50"
    YAxisMajorStroke="Black"
    YAxisMinorStroke="Gray"
    YAxisMinorStrokeThickness="0.5"
    YAxisMajorStrokeThickness="0.5" /> 
```

<div class="divider--half"></div>

## 軸ラベル
$PlatformShort$ Financial Chart コンポーネントは、チャートで表示されるラベルの構成および書式設定を制御することが可能です。回転角度、マージン、水平方向/垂直方向の配置、不透明度、パディング、および表示状態を変更できます。

以下のコード例は、スタイル プロパティを使用して x 軸のラベルをスタイル設定します。

```html
<igx-financial-chart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin="5"
    xAxisLabelAngle="0"
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin="5"
    yAxisLabelAngle="0"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin={5}
    xAxisLabelAngle={0}
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin={5}
    yAxisLabelAngle={0} />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    x-axis-label-text-style="8pt Verdana"
    x-axis-label-text-color="Gray"
    x-axis-label-top-margin="5"
    x-axis-label-angle="0"
    y-axis-label-text-style="8pt Verdana"
    y-axis-label-text-color="Gray"
    y-axis-label-left-margin="5"
    y-axis-label-angle="0">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    XAxisLabelTextStyle="8pt Verdana"
    XAxisLabelTextColor="Gray"
    XAxisLabelTopMargin="5"
    XAxisLabelAngle="0"
    YAxisLabelTextStyle="8pt Verdana"
    YAxisLabelTextColor="Gray"
    YAxisLabelLeftMargin="5"
    YAxisLabelAngle="0" />      
```

<div class="divider--half"></div>

## 軸モード
$PlatformShort$ Financial Chart コンポーネントで X 軸および Y 軸に別のモードを設定できます。
X 軸で以下のモードを選択できます。
- Time - このモードはデータのギャップを X 軸にスペースを用いて描画します。つまり、週末または休日に株取引がないことを示します。
- Ordinal - このモードはデータがない日付領域を縮小します。これがデフォルト値です。

Y 軸で以下のモードを選択できます。
- Numeric - このモードはデータの値を描画します。これがデフォルト値です。
- PercentChange - このモードは最初のデータ ポイントに相対するパーセンテージ変更としてデータを表示します。

以下のコード例では、軸のモードを設定する方法を示します。

```html
<igx-financial-chart
    xAxisMode="time"
    yAxisMode="percentChange"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisMode="time"
    yAxisMode="percentChange" />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    x-axis-mode="time"
    y-axis-mode="percentChange">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    XAxisMode="FinancialChartXAxisMode.Time"
    YAxisMode="FinancialChartYAxisMode.PercentChange" />
```

<div class="divider--half"></div>

## 軸の範囲
$PlatformShort$ Financial Chart コンポーネントで、数値軸の範囲は軸の始めと終わり、つまりデータの最小値と最大値の数値の差です。範囲の最小値は、軸の最小値です。範囲の最大値は、軸の最大値です。Financial Chart  コンポーネントは、チャート プロット領域を最大化するために、デフォルトで最小データ ポイントおよび最大データ ポイントに基づいて軸の範囲の最小値と最大値を計算します。軸の最大値と最小値の自動計算は、データ ポイントのセットに適切でない場合があります。たとえば、データの最小値が 850 の場合、y 軸の `YAxisMinimumValue` プロパティを使用して軸の最小値を 800 に設定してください。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができます。y 軸の `YAxisMaximumValue` プロパティを使用して軸の最大値とデータ ポイントの最大値にも同様に適用できます。

以下のサンプル コードは、y 軸で軸の範囲を変更する方法を示します。

```html
 <igx-financial-chart
    yAxisMinimumValue="-200"
    yAxisMaximumValue="1000"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    yAxisMinimumValue={-200}
    yAxisMaximumValue={1000} />
```

```html
 <igc-financial-chart
     width="850px"
    height="600px"
    y-axis-minimum-value="-200"
    y-axis-maximum-value="1000">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    YAxisMinimumValue="-200"
    YAxisMaximumValue="1000" />  
```

<div class="divider--half"></div>

## 軸スケール
$PlatformShort$ Financial Chart コンポーネントで、チャートのデータが Y 軸に対数的にマップされるかどうかを制御できます。これは以下の設定で実行されます。
- `YAxisIsLogarithmic` - Y 軸がリニア スケールの代わりに対数目盛を使用するかどうかを指定します。デフォルトでこのプロパティは False に設定されます。
- `YAxisLogarithmBase` - Y 軸にデータ項目の位置をマップするときに log 関数で使用する基本値。
これは yAxisIsLogarithmic が True の場合のみ効果があります。

以下のコード スニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-financial-chart
    yAxisIsLogarithmic="true"
    yAxisLogarithmBase="10"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    yAxisIsLogarithmic={true}
    yAxisLogarithmBase={10} />
```

```html
 <igc-financial-chart
    width="850px"
    height="600px"
    y-axis-is-logarithmic="true"
    y-axis-logarithm-base="10">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    YAxisIsLogarithmic="true"
    YAxisLogarithmBase="10" />
```

<div class="divider--half"></div>

## 軸目盛
目盛りは軸にポイントを表示します。スケールに特定の数値ポイント、またはカテゴリ軸にカテゴリ値を表します。x 軸および y 軸のラベルの長さ、太さ、色を変更できます。

以下のコード スニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-financial-chart
    xAxisTickLength="10"
    xAxisTickStrokeThickness="1"
    xAxisTickStroke="Gray"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisTickLength={10}
    xAxisTickStrokeThickness={1}
    xAxisTickStroke="Gray" />
```

```html
 <igc-financial-chart
    width="850px"
    height="600px"
    x-axis-tick-length="10"
    x-axis-tick-stroke-thickness="1"
    x-axis-tick-stroke="Gray">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    XAxisTickLength="10"
    XAxisTickStrokeThickness="1"
    XAxisTickStroke="Gray" />          
```

<div class="divider--half"></div>

## 軸タイトル
Financial Chart コンポーネントの軸タイトル機能は、チャートの x および y 軸に情報を追加できます。Financial Chart は、x 軸および y 軸のタイトルのフォント スタイル、マージン、配置などを変更してルックアンドフィールをカスタマイズできます。

以下のコード例は、x 軸と y 軸のタイトルを設定してカスタマイズします。

```html
<igx-financial-chart
      xAxisTitle="Data Range"
      xAxisTitleTextColor="Black"
      xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
      xAxisTitleAngle="0"
      yAxisTitle="Stock Prices ($)"
      yAxisTitleTextColor="Black"
      yAxisTitleAngle="90"
      width="850px"
      height="600px"
      [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisTitle="Data Range"
    xAxisTitleTextColor="Black"
    xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
    xAxisTitleAngle={0}
    yAxisTitle="Stock Prices ($)"
    yAxisTitleTextColor="Black"
    yAxisTitleAngle={90} />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    x-axis-title="Data Range"
    x-axis-title-text-color="Black"
    x-axis-title-text-style="15pt Times New Roman|Georgia|Serif"
    x-axis-title-angle="0"
    y-axis-title="Stock Prices ($)"
    y-axis-title-text-color="Black"
    y-axis-title-angle="90">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    XAxisTitle="Data Range"
    XAxisTitleTextColor="Black"
    XAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
    XAxisTitleAngle="0"
    YAxisTitle="Stock Prices ($)"
    YAxisTitleTextColor="Black"
    YAxisTitleAngle="90" />                     
```

<div class="divider--half"></div>


