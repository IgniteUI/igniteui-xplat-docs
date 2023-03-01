---
title: {Platform} ラジアル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} ラジアル チャート
_keywords: {Platform} Charts, Radial Chart, Infragistics, {Platform} チャート, ラジアル チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "RadialLineSeries", 'Series']
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} ラジアル チャート

{ProductName} ラジアル チャートは、データを取得し、円の周囲でラップされるデータ ポイントのコレクションとしてデータを描画するチャートのグループです (水平方向の線に沿って拡大するのではなく)。ラジアル チャートはチャートの範囲の最小から最大までのカテゴリのリストもマッピングし、カテゴリ グループ化メカニズムをサポートします。

## {Platform} ラジアル エリア チャート

{ProductName} ラジアル エリア チャートは、データ ポイントを結ぶ直線のコレクションによってバインドされた塗りつぶされた多角形の形をしています。このチャートは、[エリア チャート](area-chart.md)と同じデータ プロットの概念を使用しますが、データ ポイントを水平方向に引き伸ばすのではなく、円形の軸の周りにラップします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialAreaSeries` にバインドします。

`sample="/charts/data-chart/radial-area-chart", height="600", alt="{Platform} ラジアル エリア チャート"`



<div class="divider--half"></div>

## {Platform} ラジアル縦棒チャート

ラジアル縦棒チャートは、チャートの中心からデータ ポイントの位置に向けて広がる矩形のコレクションを使用して表示されます。これは[縦棒チャート](column-chart.md)と同じデータ プロットの概念を使用していますが、データ ポイントを水平方向に引き伸ばすのではなく、データ ポイントを円でラップします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialColumnSeries` にバインドします:

`sample="/charts/data-chart/radial-column-chart", height="600", alt="{Platform} ラジアル縦棒チャート"`



<div class="divider--half"></div>

## {Platform} ラジアル折れ線チャート

{ProductName} ラジアル折れ線チャートは、データ ポイントを結ぶ直線のコレクションとして描画されます。このチャートは、[折れ線チャート](line-chart.md)と同じデータ プロットの概念を使用しますが、データ ポイントを水平方向に引き伸ばすのではなく、円形の軸の周りにラップします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialLineSeries` にバインドします:

`sample="/charts/data-chart/radial-line-chart", height="600", alt="{Platform} ラジアル折れ線チャート"`



<div class="divider--half"></div>

## {Platform} ラジアル円チャート

ラジアル円チャートは、チャートの中心からデータ ポイントの位置に向けて広がる円スライスを使用します。このチャート タイプは、複数の一連のデータ ポイントを分類するという概念を採用しており、データ ポイントを水平線に沿って引き伸ばすのではなく、円形の軸に沿ってラップします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialPieSeries` にバインドします:

`sample="/charts/data-chart/radial-pie-chart", height="600", alt="{Platform} ラジアル円チャート"`



<div class="divider--half"></div>

## {Platform} ラジアル チャートのスタイル設定

ラジアル チャートを作成したら、線の色、マーカーの種類、またはそれらのマーカーのアウトライン色の変更など、スタイルをさらにカスタマイズしたい場合があります。

この例は、`XamDataChart` コントロールのスタイルをカスタマイズする方法を示しています。

`sample="/charts/data-chart/radial-area-chart-styling", height="600", alt="{Platform} ラジアル エリア チャートのスタイル設定"`



<div class="divider--half"></div>


## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [縦棒チャート](column-chart.md)
- [ドーナツ チャート](donut-chart.md)
- [折れ線チャート](line-chart.md)
- [円チャート](pie-chart.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamDataChart`
- `RadialAreaSeries`
- `RadialColumnSeries`
- `RadialLineSeries`
- `RadialPieSeries`
- `ItemsSource`
- `AngleAxisName`
- `ValueAxisName`
- `ValueMemberPath`
- `CategoryAngleAxis`
- `NumericRadiusAxis`

