---
title: $Platform$ チャート パフォーマンス | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $Platform$ チャート パフォーマンス
_keywords: $Platform$ Charts, Performance, Infragistics, $Platform$ チャート, パフォーマンス, インフラジスティックス
mentionedTypes: ["CategoryChart", "FinancialChart", "XamDataChart"]
_language: ja
---

# $Platform$ チャート パフォーマンス

$Platform$ チャートは、数百万のデータ ポイントを描画し、それらを数ミリ秒ごとに更新する高性能のために最適化されています。ただし、チャートのパフォーマンスに影響を与えるいくつかのチャート機能があり、アプリケーションのパフォーマンスを最適化するときにそれらを考慮する必要があります。このトピックでは、$Platform$ チャートをアプリケーションで可能な限り高速に機能させる方法について説明します。

## $Platform$ チャート パフォーマンスの例

次の例は、$Platform$ チャートの 2 つの高性能シナリオを示しています。

## 高頻度 $Platform$ チャート

高頻度シナリオでは、$Platform$ チャートは、リアルタイムまたは指定されたミリ秒間隔で更新されるデータ項目を描画できます。タッチ デバイスでチャートを操作しているときでも、ラグ、画面のちらつき、表示の遅れは発生しません。次のサンプルは、高頻度シナリオでの `CategoryChart` を示しています。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="高頻度 $Platform$ チャート" >
</code-view>

<div class="divider--half"></div>

## 大量のデータの $Platform$ チャート

大量データのシナリオでは、$Platform$ チャートは 100 万のデータ ポイントを描画できますが、エンドユーザーがチャートのコンテンツをズームイン/ズームアウトまたはナビゲートしようとしたときにチャートはスムーズなパフォーマンスを提供し続けます。次のサンプルは、大量データのシナリオでの `CategoryChart` を示しています。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-volume"
           alt="大量のデータの $Platform$ チャート" >
</code-view>

<div class="divider--half"></div>

## 一般的なパフォーマンス ガイドライン

このセクションでは、$Platform$ チャートのオーバーヘッドと処理の更新に追加されるガイドラインとチャート機能を一覧表示します。

### データ サイズ

多数のデータ ポイント (10,000 以上など) を含むデータ ソースをプロットする必要がある場合は、その目的のために特別にデザインされた次のタイプのシリーズのいずれかで $Platform$ `XamDataChart` を使用することをお勧めします。

- [カテゴリ ポイント チャート](../types/point-chart.md)や[散布マーカー チャート](../types/scatter-chart.md#$Platform$-散布マーカー-チャート)の代わりに[散布高密度チャート](../types/scatter-chart.md#$Platform$-散布高密度チャート)
- [カテゴリ折れ線チャート](../types/line-chart.md#$Platform$-折れ線チャートの例)や[散布折れ線チャート](../types/scatter-chart.md#$Platform$-散布折れ線チャート)の代わりに[散布ポリライン チャート](../types/shape-chart.md#$Platform$-散布ポリライン-チャート)
- [カテゴリ エリア チャート](../types/area-chart.md#$Platform$-エリア-チャートの例)や[縦棒チャート](../types/column-chart.md#$Platform$-縦棒チャートの例)の代わりに[散布ポリゴン チャート](../types/shape-chart.md#$Platform$-散布ポリゴン-チャート)

### データ構造

$Platform$ チャートは、データ ポイントの配列の配列を `DataSource` プロパティにバインドすることにより、複数のデータ ソースの描画をサポートします。複数のデータ ソースが単一のデータ ソースにフラット化され、各データ項目に 1 つのデータ列だけでなく複数のデータ列が含まれる場合、チャートははるかに高速になります。例えば:

```razor
this.CategoryChart.DataSource = FlattenDataSource.Create();
this.FinancialChart.DataSource = FlattenDataSource.Create();

public static class FlattenDataSource
{
    public static List<FlattenDataItem> Create() {
        var data = new List<FlattenDataItem>() {
            new FlattenDataItem { Year = "1996", USA = 148, CHN = 110 },
            new FlattenDataItem { Year = "2000", USA = 142, CHN = 115 },
        };
        return data;
    }
    public class FlattenDataItem
    {
        public int USA { get; set; }
        public int CHN { get; set; }
        public int Year { get; set; }
    }
}
// instead of this data structure:
public static class MultiDataSources
{
    public static List<MultiDataItem> Create() {
        var dataSource1 = new List<MultiDataItem>() {
            new MultiDataItem { Year = "1996", Value = 148 },
            new MultiDataItem { Year = "2000", Value = 142 },
        };
        var dataSource2 = new List<MultiDataItem>() {
            new MultiDataItem { Year = "1996", Value = 110 },
            new MultiDataItem { Year = "2000", Value = 115 },
        };
        var multipleSources = new List<List<MultiDataItem>>();
        multipleSources.Add(dataSource1);
        multipleSources.Add(dataSource2);
        return multipleSources;
    }
    public class MultiDataItem
    {
        public int Value { get; set; }
        public int Year { get; set; }
    }
}
```

```ts
this.CategoryChart.dataSource = FlattenDataSource.create();
this.FinancialChart.dataSource = FlattenDataSource.create();

export class FlattenDataSource {
    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "1996", "USA": 148, "CHN": 110 });
        data.push({ "Year": "2000", "USA": 142, "CHN": 115 });
        return data;
    }
}
// instead of this data structure:
export class MultiDataSources {
    public static create(): any[] {
        const dataSource1: any[] = [];
        dataSource1.push({ "Year": "1996", "Value": 148 });
        dataSource1.push({ "Year": "2000", "Value": 142 });

        const dataSource2: any[] = [];
        dataSource2.push({ "Year": "1996", "Value": 110 });
        dataSource2.push({ "Year": "2000", "Value": 115 });

        const multipleSources: any[] = [dataSource1, dataSource2];
        return multipleSources;
    }
}
```

### データ フィルタリング

$Platform$ `CategoryChart` および `FinancialChart` コントロールには、データを分析して一連のチャートを生成するデータ アダプターが組み込まれています。ただし、`IncludedProperties` と `ExcludedProperties` を使用して、実際に描画するデータ列のみをフィルタリングすると、より高速に動作します。例:


```razor
this.Chart.IncludedProperties = new string[] { "Year", "USA", "RUS" };
this.Chart.ExcludedProperties = new string[] { "CHN",  "FRN", "GER" };
```

<!-- Angular, React, WebComponents -->
```ts
this.Chart.includedProperties = [ "Year", "USA", "RUS" ];
this.Chart.excludedProperties = [ "CHN",  "FRN", "GER" ];
```

## チャート パフォーマンス ガイドライン

### チャート タイプ

[折れ線チャート](../types/line-chart.md)などの単純なチャート タイプは、データ ポイント間のスプライン線の補間が複雑であるため、[スプライン チャート](../types/spline-chart.md)を使用するよりもパフォーマンスが速くなります。したがって、$Platform$ `XamCategoryChart` の `ChartType` プロパティまたは `XamFinancialChart` コントロールを使用して、描画が高速なチャートのタイプを選択する必要があります。または、$Platform$ `XamDataChart` コントロールで、シリーズのタイプをより高速なシリーズに変更することもできます。

次の表に、チャートの各グループで、パフォーマンスが速いものから遅いものの順にチャートのタイプを示します。

チャート グループ     | チャート タイプ
----------------|---------------------------------
円チャート       | - [円チャート](../types/pie-chart.md) <br> - [ドーナツ チャート](../types/donut-chart.md) <br> - [ラジアル円チャート](../types/radial-chart.md#$Platform$-ラジアル円チャート) <br>
折れ線チャート      | - [カテゴリ折れ線チャート](../types/line-chart.md#$Platform$-カテゴリ折れ線チャート) <br> - [カテゴリ スプライン チャート](../types/spline-chart.md#$Platform$-カテゴリ-スプライン-チャート) <br> - [ステップ折れ線チャート](../types/step-chart.md#$Platform$-ステップ折れ線チャート) <br> - [ラジアル折れ線チャート](../types/radial-chart.md#$Platform$-ラジアル折れ線チャート) <br> - [極座標折れ線チャート](../types/polar-chart.md#$Platform$-極座標型折れ線チャート) <br> - [散布折れ線チャート](../types/scatter-chart.md#$Platform$-散布折れ線チャート) <br> - [散布ポリライン チャート](../types/shape-chart.md#$Platform$-散布ポリライン-チャート) (\*)  <br> - [散布等高線チャート](../types/scatter-chart.md#$Platform$-散布等高線チャート) <br> - [積層型折れ線チャート](../types/stacked-chart.md#$Platform$-積層型折れ線チャート) <br> - [積層型 100% 折れ線チャート](../types/stacked-chart.md#$Platform$-積層型-100-折れ線チャート) <br>
エリア チャート      | - [カテゴリ エリア チャート](../types/area-chart.md#$Platform$-エリア-チャートの例) <br> - [ステップ エリア チャート](../types/step-chart.md#$Platform$-ステップ-エリア-チャート) <br> - [範囲エリア チャート](../types/area-chart.md#$Platform$-範囲エリア-チャート) <br> - [ラジアル エリア チャート](../types/radial-chart.md#$Platform$-ラジアル-エリア-チャート) <br> - [極座標エリア チャート](../types/polar-chart.md#$Platform$-極座標エリア-チャート) <br> - [散布ポリゴン チャート](../types/shape-chart.md#$Platform$-散布ポリゴン-チャート) (\*) <br> - [散布エリア チャート](../types/scatter-chart.md#$Platform$-散布エリア-チャート) <br> - [積層型エリア チャート](../types/stacked-chart.md#$Platform$-積層型エリア-チャート) <br> - [積層型 100% エリア チャート](../types/stacked-chart.md#$Platform$-積層型-100-エリア-チャート) <br>
縦棒チャート    | - [縦棒チャート](../types/column-chart.md#$Platform$-縦棒チャートの例) <br> - [棒チャート](../types/bar-chart.md#$Platform$-棒チャートの例) <br> - [ウォーターフォール チャート](../types/column-chart.md#$Platform$-ウォーターフォール-チャート) <br> - [範囲縦棒チャート](../types/column-chart.md#$Platform$-範囲縦棒チャート) <br> - [ラジアル縦棒チャート](../types/radial-chart.md#$Platform$-ラジアル縦棒チャート) <br> - [積層型縦棒チャート](../types/stacked-chart.md#$Platform$-積層型縦棒チャート) <br> - [積層型棒チャート](../types/stacked-chart.md#$Platform$-積層型棒チャート) <br> - [積層型 100% 縦棒チャート](../types/stacked-chart.md#$Platform$-積層型-100-縦棒チャート) <br> - [積層型 100% 棒チャート](../types/stacked-chart.md#$Platform$-積層型-100-棒チャート)
スプライン チャート    | - [カテゴリ スプライン チャート](../types/spline-chart.md#$Platform$-スプライン-チャートの例) <br> - [極座標スプライン チャート](../types/polar-chart.md#$Platform$-極座標スプラインーチャート) <br> - [散布スプライン チャート](../types/scatter-chart.md#$Platform$-散布スプライン-チャート) <br> - [積層型スプライン チャート](../types/stacked-chart.md#$Platform$-積層型スプライン-チャート) <br> - [積層型 100% スプライン チャート](../types/stacked-chart.md#$Platform$-積層型-100-スプライン-チャート) <br>
ポイント チャート     | - [カテゴリ ポイント チャート](../types/point-chart.md) <br> - [散布高密度チャート](../types/scatter-chart.md#$Platform$-散布高密度チャート)  <br> - [散布マーカー チャート](../types/scatter-chart.md#$Platform$-散布マーカー-チャート) <br> - [散布バブル チャート](../types/bubble-chart.md) <br> - [極座標型マーカーチャート](../types/polar-chart.md#$Platform$-極座標型マーカー-チャート) <br>
ファイナンシャル チャート | - [折れ線モードの株価チャート](../types/stock-chart.md) <br> - [縦棒モードの株価チャート](../types/stock-chart.md) <br> - [棒モードの株価チャート](../types/stock-chart.md) <br> - [ローソク足モードの株価チャート](../types/stock-chart.md) <br> - [オーバーレイ付き株価チャート](../types/stock-chart.md) <br> - [ズーム ペイン付き株価チャート](../types/stock-chart.md#ズーム-ペイン) <br> - [ボリューム ペイン付き株価チャート](../types/stock-chart.md#ボリューム-ペイン) <br> - [インジケーター ペイン付き株価チャート](../types/stock-chart.md#インジケーター-ペイン) <br>
散布図   | - [散布高密度チャート](../types/scatter-chart.md#$Platform$-散布高密度チャート) <br> - [散布マーカー チャート](../types/scatter-chart.md#$Platform$-散布マーカー-チャート) <br> - [散布折れ線チャート](../types/scatter-chart.md#$Platform$-散布折れ線チャート) <br> - [散布バブル チャート](../types/bubble-chart.md) <br> - [散布スプライン チャート](../types/scatter-chart.md#$Platform$-散布スプライン-チャート) <br> - [散布エリア チャート](../types/scatter-chart.md#$Platform$-散布エリア-チャート) <br> - [散布等高線チャート](../types/scatter-chart.md#$Platform$-散布等高線チャート) <br> - [散布ポリライン チャート](../types/shape-chart.md#$Platform$-散布ポリライン-チャート) (\*) <br> - [散布ポリゴン チャート](../types/shape-chart.md#$Platform$-散布ポリゴン-チャート) (\*) <br>
ラジアル チャート    | - [ラジアル折れ線チャート](../types/radial-chart.md#$Platform$-ラジアル折れ線チャート) <br> - [ラジアル エリア チャート](../types/radial-chart.md#$Platform$-ラジアル-エリア-チャート) <br> - [ラジアル円チャート](../types/radial-chart.md#$Platform$-ラジアル円チャート) <br> - [ラジアル縦棒チャート](../types/radial-chart.md#$Platform$-ラジアル縦棒チャート) <br>
極座標チャート     | - [極座標型マーカー チャート](../types/polar-chart.md#$Platform$-極座標型マーカー-チャート) <br> - [極座標型折れ線チャート](../types/polar-chart.md#$Platform$-極座標型折れ線チャート) <br> - [極座標エリア チャート](../types/polar-chart.md#$Platform$-極座標エリア-チャート) <br> - [極座標スプライン チャート](../types/polar-chart.md#$Platform$-極座標スプライン-チャート) <br> - [極座標スプライン エリア チャート](../types/polar-chart.md#$Platform$-極座標スプライン-エリア-チャート) <br>
積層型チャート   | - [積層型折れ線チャート](../types/stacked-chart.md#$Platform$-積層型折れ線チャート) <br> - [積層型エリア チャート](../types/stacked-chart.md#$Platform$-積層型エリア-チャート) <br> - [積層型縦棒チャート](../types/stacked-chart.md#$Platform$-積層型縦棒チャート) <br> - [積層型棒チャート](../types/stacked-chart.md#$Platform$-積層型棒チャート) <br> - [積層型スプライン チャート](../types/stacked-chart.md#$Platform$-積層型スプライン-チャート) <br> - [積層型 100% 折れ線チャート](../types/stacked-chart.md#$Platform$-積層型-100-折れ線チャート) <br> - [積層型 100% エリア チャート](../types/stacked-chart.md#$Platform$-積層型-100-エリア-チャート) <br> - [積層型 100% 縦棒チャート](../types/stacked-chart.md#$Platform$-積層型-100-縦棒チャート) <br> - [積層型 100% 棒チャート](../types/stacked-chart.md#$Platform$-積層型-100-棒チャート) <br> - [積層型 100% スプライン チャート](../types/stacked-chart.md#$Platform$-積層型-100-スプライン-チャート) <br>


\* チャートに多数のデータ ソースがバインドされている場合、[散布ポリゴン チャート](../types/shape-chart.md)と[散布ポリライン チャート](../types/shape-chart.md)のパフォーマンスは他のチャートよりも優れていることに注意してください。詳細については、[シリーズ コレクション](#シリーズ-コレクション)セクションを参照してください。それ以外の場合は、他のチャートのタイプの方が高速です。

### チャート アニメーション

[チャート アニメーション](chart-animations.md)を有効にすると、トランジションイン アニメーションを再生している間、$ProductShort$ チャートの最終描画シリーズがわずかに遅れます

### チャート注釈

コールアウト注釈、十字線注釈、最終値注釈などの[チャート注釈](chart-annotations.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### チャートの強調表示

[チャートの強調表示](chart-highlighting.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### チャート凡例

凡例を $ProductShort$ チャートに追加すると、凡例にマップされたシリーズまたはデータ項目のタイトルが実行時に頻繁に変更される場合、パフォーマンスが低下する可能性があります。

### チャート マーカー

$ProductShort$ チャートでは、[チャート マーカー](chart-markers.md)はチャートのレイアウトの複雑さを増し、特定の情報を取得するためにデータ バインディングを実行するため、チャートのパフォーマンスに関しては特に手間がかかります。また、データ ポイントが多い場合、またはバインドされているデータ ソースが多い場合、マーカーはパフォーマンスを低下させます。したがって、マーカーが不要な場合は、チャートから削除する必要があります。

以下のコード例は、$ProductShort$ チャートからマーカーを削除する方法を示します。

```razor
// on CategoryChart or FinancialChart
this.Chart.MarkerTypes.Clear();
this.Chart.MarkerTypes.Add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.MarkerType = MarkerType.None;
```

<!-- Angular, React, WebComponents -->
```ts
// on CategoryChart or FinancialChart
this.Chart.markerTypes.clear();
this.Chart.markerTypes.add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.markerType = MarkerType.None;
```

### チャートの解像度

`Resolution` プロパティをより大きな値に設定するとパフォーマンスは向上しますが、プロットされた系列の線のグラフィカルな忠実度は低下します。このようなわけで、忠実度が受け入れられなくなるまで値を大きくする可能性があります。

このコード スニペットは、$ProductShort$ チャートの解像度を下げる方法を示しています。

```razor
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

<!-- Angular, React, WebComponents -->
```ts
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

### チャート オーバーレイ

[チャート オーバーレイ](chart-overlays.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### チャート トレンドライン

[チャート トレンドライン](chart-trendlines.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### 軸のタイプ

データ ポイント間の時間間隔に基づくスペースが重要でない場合は、DateTime をサポートする x 軸の使用はお勧めしません。代わりに、順序/カテゴリ軸を使用する必要があります。これは、データを結合する方法がより効率的であるためです。また、順序/カテゴリ軸は、時間ベースの x 軸のようにデータのソートを実行しません。

> 注: `CategoryChart` はすでに順序/カテゴリ軸を使用しているため、そのプロパティを変更する必要はありません。

このコード スニペットは、`FinancialChart` および `XamDataChart` コントロールで x 軸を順序付け/カテゴリ化する方法を示しています。

```razor
<FinancialChart XAxisMode="FinancialChartXAxisMode.Ordinal"/>

<DataChart >
    <CategoryXAxis Label="Time" />
</DataChart>
```

<!-- Angular, React, WebComponents -->
```ts
<Ig$FinancialChart xAxisMode="Ordinal"/>

<Ig$DataChart>
    <Ig$CategoryXAxis label="Time" />
</Ig$DataChart>
```

### 軸の間隔

デフォルトでは、$ProductShort$ チャートは、データの範囲に基づいて `YAxisInterval` を自動的に計算します。したがって、軸のグリッド線と軸のラベルが多すぎないように、軸の間隔を特に小さい値に設定することは避けてください。  また、多くの軸グリッド線または軸ラベルが必要ない場合は、`YAxisInterval` プロパティを自動的に計算された軸間隔よりも大きい値に増やすことを検討することをお勧めします。

> チャートのパフォーマンスが低下するため、軸の副間隔を設定することはお勧めしません。

このコード スニペットは、$ProductShort$ チャートで軸の主間隔を設定する方法を示しています。

```razor
<CategoryChart  XAxisInterval="5" YAxisInterval="50"/>

<FinancialChart XAxisInterval="5" YAxisInterval="50"/>

<DataChart >
    <CategoryXAxis Name="xAxis" Interval="5" />
    <NumericYAxis  Name="yAxis" Interval="50" />
</DataChart>
```

<!-- Angular, React, WebComponents -->
```ts
<Ig$CategoryChart  xAxisInterval="5" yAxisInterval="50"/>

<Ig$FinancialChart xAxisInterval="5" yAxisInterval="50"/>

<Ig$DataChart>
    <Ig$CategoryXAxis name="xAxis" interval="5" />
    <Ig$NumericYAxis  name="yAxis" interval="50"/>
</Ig$DataChart>
```

### 軸スケール

`YAxisIsLogarithmic` プロパティを false に設定すると、パフォーマンスを向上させるために推奨されます。対数目盛で軸範囲と軸ラベルの値を計算するよりも操作が少なくて済むためです。

### 軸ラベルの表示状態

マーカーと同じように、軸ラベルはテンプレートとバインドを使用し、データ コンテキストが頻繁に変更されるために、軸ラベルも負荷がかかります。ラベルを使用しない場合は、非表示にするか、間隔を長くして軸ラベルの数を減らす必要があります。

このコード スニペットは、$ProductShort$ チャートで軸ラベルを非表示にする方法を示しています。

```razor
<CategoryChart
    XAxisLabelVisibility="Visibility.Collapsed"
    YAxisLabelVisibility="Visibility.Collapsed">
</CategoryChart>

<FinancialChart
    XAxisLabelVisibility="Visibility.Collapsed"
    YAxisLabelVisibility="Visibility.Collapsed">
</FinancialChart>

<DataChart>
    <CategoryXAxis Name="xAxis" LabelVisibility="Visibility.Collapsed" />
    <NumericYAxis  Name="yAxis" LabelVisibility="Visibility.Collapsed" />
</DataChart>
```

<!-- Angular, React, WebComponents -->
```ts
<Ig$CategoryChart
    xAxisLabelVisibility="Collapsed"
    yAxisLabelVisibility="Collapsed" >
</Ig$CategoryChart>

<Ig$FinancialChart
    xAxisLabelVisibility="Collapsed"
    yAxisLabelVisibility="Collapsed" >
</Ig$FinancialChart>

<Ig$DataChart>
    <Ig$CategoryXAxis name="xAxis" LabelVisibility="Collapsed" />
    <Ig$NumericYAxis  name="yAxis" LabelVisibility="Collapsed" />
</Ig$DataChart>
```

### 軸ラベルの省略形

ただし、$ProductShort$ チャートは、`YAxisAbbreviateLargeNumbers` が true に設定されている場合に、軸ラベルに表示される大きな数値 (10,000 以上など) の省略形をサポートします。代わりに、データ 項目の大きな値を公約数で除算して前処理し、`YAxisTitle` をデータ値の省略形に使用される約数を表す文字列に設定することをお勧めします。

このコード スニペットは、$ProductShort$ チャートで軸のタイトルを設定する方法を示しています。

```razor
<CategoryChart  YAxisTitle="In millions of Dollars"/>

<FinancialChart YAxisTitle="In millions of Dollars"/>

<DataChart >
    <NumericYAxis Title="In millions of Dollars" />
</DataChart>
```

<!-- Angular, React, WebComponents -->
```ts
<Ig$CategoryChart  yAxisTitle="In millions of Dollars" />

<Ig$FinancialChart yAxisTitle="In millions of Dollars" />

<Ig$DataChart>
    <Ig$NumericYAxis title="In millions of Dollars" />
</Ig$DataChart>
```

### 軸ラベルの範囲

実行時に、$ProductShort$ チャートは、最も長い値を持つラベルに基づいて、y 軸上のラベルの範囲を調整します。これにより、データの範囲やラベルを頻繁に更新する必要がある場合に、チャートのパフォーマンスが低下する可能性があります。そのため、チャート パフォーマンスを向上させるためにデザイン時にラベル範囲を設定することをお勧めします。

次のコード スニペットは、$ProductShort$ チャートの y 軸のラベルに固定されたラベル範囲を設定する方法を示します。

```razor
<CategoryChart  XAxisLabelExtent="50" YAxisLabelExtent="50"/>

<FinancialChart XAxisLabelExtent="50" YAxisLabelExtent="50"/>

<DataChart>
    <CategoryXAxis Name="xAxis" LabelExtent="50" />
    <NumericYAxis  Name="yAxis" LabelExtent="50" />
</DataChart>
```

<!-- Angular, React, WebComponents -->
```ts
<Ig$CategoryChart  xAxisLabelExtent="50" yAxisLabelExtent="50"/>

<Ig$FinancialChart xAxisLabelExtent="50" yAxisLabelExtent="50"/>

<Ig$DataChart>
    <Ig$CategoryXAxis name="xAxis" labelExtent="50" />
    <Ig$NumericYAxis  name="yAxis" labelExtent="50"/>
</Ig$DataChart>
```

### 軸その他のビジュアル

追加の軸ビジュアル (軸タイトルなど) を有効にしたり、デフォルト値を変更したりすると、$ProductShort$ チャートのパフォーマンスが低下する可能性があります。

たとえば、`CategoryChart` または `FinancialChart` コントロールでこれらのプロパティを変更します。

軸ビジュアル          | X 軸プロパティ | Y 軸プロパティ
---------------------|-------------------|-------------------
すべての軸ビジュアル      | `XAxisInterval`<br>  `XAxisMinorInterval` | `YAxisInterval`<br>  `YAxisMinorInterval`
軸目盛       | `XAxisTickStroke` <br>  `XAxisTickStrokeThickness`<br>  `XAxisTickLength`<br>  | `YAxisTickStroke` <br>  `YAxisTickStrokeThickness`<br>  `YAxisTickLength`<br>
軸主グリッド線 | `XAxisMajorStroke`<br>  `XAxisMajorStrokeThickness`<br>   | `YAxisMajorStroke`<br>  `YAxisMajorStrokeThickness`<br>
軸の副グリッド線 | `XAxisMinorStroke`<br>  `XAxisMinorStrokeThickness`<br>   | `YAxisMinorStroke`<br>  `YAxisMinorStrokeThickness`<br>
軸主線       | `XAxisStroke`<br>  `XAxisStrokeThickness`<br>   | `YAxisStroke`<br>  `YAxisStrokeThickness`<br>
軸タイトル          | `XAxisTitle`<br>  `XAxisTitleAngle`<br>    | `YAxisTitle`<br>  `YAxisTitleAngle`<br>
軸ストリップ          | `XAxisStrip`<br>   | `YAxisStrip`<br>


または、`XamDataChart` コントロールの `Axis` のプロパティを変更します。

軸ビジュアル          | 軸プロパティ
---------------------|-------------------
すべての軸ビジュアル     | `Interval`, `MinorInterval`
軸目盛       | `TickStroke` , `TickStrokeThickness`, `TickLength`
軸主グリッド線 | `MajorStroke`, `MajorStrokeThickness`
軸の副グリッド線 | `MinorStroke`, `MinorStrokeThickness`
軸主線       | `Stroke`, `StrokeThickness`
軸タイトル          | `Title`, `TitleAngle`
軸ストリップ         | `Strip`

## ファイナンシャル チャートのパフォーマンス

上記のパフォーマンスガイドラインに加えて、$ProductShort$ `FinancialChart` コントロールには、パフォーマンスに影響を与える次の独自の機能があります。

### Y 軸モード

`PercentChange` モードを使用するよりも必要な操作が少ないため、パフォーマンスを向上させるには、`YAxisMode` オプションを `Numeric` に設定することをお勧めします。

### チャート ペイン

`IndicatorTypes` および `OverlayTypes` オプションを使用して複数のペインを設定した場合、パフォーマンスが低下する可能性があり、少数の財務指標および単一の財務オーバーレイを使用することをお勧めします。

### ズーム スライダー

`ZoomSliderType` オプションを `None` に設定すると、チャート パフォーマンスを向上し、その他のインジケーターおよびボリューム ペインのために垂直スペースを利用可能になります。

### ボリューム タイプ

`VolumeType` プロパティの設定はチャート パフォーマンスに次の影響を与える可能性があります:

* `None` - ボリューム ペインが表示されないため、最も簡易です。
* `Line` - 描画するのにより手間がかかるボリューム タイプです。データ ポイントの大量を描画するか、複数のデータ ソースをプロットする場合に使用することをお勧めします。
* `Area` - `Line` ボリューム タイプより描画に手間がかかります。
* `Column` - `Area` ボリューム タイプより描画に手間がかかります。1 つ ～ 3 つの株のボリューム データを描画する場合にお勧めします。

## データ チャートのパフォーマンス

一般的なパフォーマンス ガイドラインに加えて、$ProductShort$ `XamDataChart` コントロールには、パフォーマンスに影響を与える次の固有の機能があります。

### 軸コレクション

`XamDataChart` コントロールの `Axes` コレクションに追加する軸が多すぎると、チャートのパフォーマンスが低下するため、シリーズ間で[軸の共有](chart-axis-layouts.md#軸共有の例)をお勧めします。

### シリーズ コレクション

また、$Platform$ `XamDataChart` コントロールの `Series` コレクションに多くのシリーズを追加すると、各シリーズに独自の描画キャンバスがあるため、描画にオーバーヘッドが追加されます。これは、データ チャートに 10 を超えるシリーズがある場合に特に重要です。複数のデータ ソースを組み合わせてフラット化したデータ ソースにし ([データ構造](#データ構造)セクションを参照)、次のシリーズの条件付き書式設定機能を使用することをお勧めします。

パフォーマンスが低下するシナリオ | 条件付き書式設定を使用したより高速なシナリオ
----------------------------|----------------------------------------
`LineSeries` の 10 以上        | 単一の `ScatterLineSeries`
`LineSeries` の 20 以上           | 単一の `ScatterPolylineSeries`
`ScatterLineSeries` の 10 以上  | 単一の `ScatterPolylineSeries`
`PointSeries` の 10 以上       | 単一の `ScatterSeries`
`PointSeries` の 20 以上       | 単一の `HighDensityScatterSeries`
`ScatterSeries` の 20 以上     | 単一の `HighDensityScatterSeries`
`AreaSeries` の 10 以上        | 単一の `ScatterPolygonSeries`
`ColumnSeries` の 10 以上      | 単一の `ScatterPolygonSeries`


## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](../types/area-chart.md)
- [棒チャート](../types/bar-chart.md)
- [バブル チャート](../types/bubble-chart.md)
- [縦棒チャート](../types/column-chart.md)
- [ドーナツ チャート](../types/donut-chart.md)
- [円チャート](../types/pie-chart.md)
- [ポイント チャート](../types/point-chart.md)
- [極座標チャート](../types/polar-chart.md)
- [ラジアル チャート](../types/radial-chart.md)
- [シェープ チャート](../types/shape-chart.md)
- [スプライン チャート](../types/spline-chart.md)
- [散布図](../types/scatter-chart.md)
- [積層型チャート](../types/stacked-chart.md)
- [ステップ チャート](../types/step-chart.md)
- [株価チャート](../types/stock-chart.md)
- [チャート アニメーション](chart-animations.md)
- [チャート注釈](chart-annotations.md)
- [チャート強調表示](chart-highlighting.md)
- [チャート マーカー](chart-markers.md)
- [チャート オーバーレイ](chart-overlays.md)
- [チャート トレンドライン](chart-trendlines.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `Resolution`
- `IndicatorTypes`
- `OverlayTypes`
- `VolumeType`
- `ZoomSliderType`
- `XAxisMode`
- `YAxisMode`
- `XAxisInterval`
- `YAxisInterval`
- `XAxisMinorInterval`
- `YAxisMinorInterval`
- `XAxisLabelVisibility`
- `YAxisLabelVisibility`
- `YAxisIsLogarithmic`