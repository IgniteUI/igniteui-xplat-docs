---
title: $PlatformShort$ 極座標チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 極座標チャート
_keywords: $PlatformShort$ Charts, Polar Chart, Infragistics, $PlatformShort$ チャート, 極座標チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "PolarAreaSeries", "PolarLineSeries", "PolarSplineSeries"]
_language: ja
---
# $PlatformShort$ 極座標チャート

$PlatformShort$ 極座標チャートは、デカルト (x、y) 座標系の代わりに極座標 (角度、半径) 座標系を使用してチャートにデータをプロットするシリーズのグループです。言い換えれば、極座標チャートは[散布図シリーズ](scatter-chart.md)の概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。このシリーズのグループは、極座標系を使用して複数の異なるデータのシリーズ内の項目間の関係を示すために使用されます。

極座標チャートでは、データの不均等な散らばりやデータの塊に注意が向けられます。これらは、科学データのプロットによく用いられ（たとえば風向きや風速、地場の方向と強さ、ソーラー システムの機材の場所など)、予測結果からの収集データの偏差を強調表示できます。

## $PlatformShort$ 極座標型折れ線チャート

極座標折れ線チャートは極座標チャートのグループに属し、極座標 (角度/半径) のデータ ポイントを結ぶ直線のコレクションを使用して描画されます。極座標チャートは、[散布折れ線チャート](scatter-chart.md)と同じデータ プロットの概念を使用しますが、視覚化によってデータ ポイントが水平線に沿って引き伸ばされるのではなく、円の周りにラップされる点が異なります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarLineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-line-series"
           alt="$PlatformShort$ 極座標型折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標スプライン チャート

極座標スプライン チャートは極座標チャートのグループに属し、極座標 (角度、半径) でデータ ポイントを接続する曲線スプラインのコレクションを使用して描画されます。
極座標スプライン チャートは、[散布スプライン チャート](scatter-chart.md)と同じデータ プロットの概念を使用しますが、視覚化によってデータ ポイントが水平線に沿って引き伸ばされるのではなく、円の周りにラップされる点が異なります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarSplineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-spline-series"
           alt="$PlatformShort$ 極座標スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標チャートのスタイル設定

極座標チャートを作成したら、線の色、マーカーの種類、またはそれらのマーカーのアウトライン色の変更など、スタイルをさらにカスタマイズしたい場合があります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarAreaSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart-styling"
           alt="$PlatformShort$ 極座標チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [折れ線チャート](line-chart.md)
- [ラジアル チャート](radial-chart.md)
- [散布図](scatter-chart.md)
- [スプライン チャート](spline-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ       | コントロール名   | API メンバー
-----------------|----------------|---------------------
極座標エリア       | `XamDataChart` | `PolarAreaSeries`
極座標折れ線       | `XamDataChart` | `PolarLineSeries`
極座標スプライン     | `XamDataChart` | `PolarSplineSeries`
