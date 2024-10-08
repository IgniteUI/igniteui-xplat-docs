---
title: {Platform} 積層型チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} 積層型チャート
_keywords: {Platform} Charts, Stacked Chart, Stacked 100% Chart, Infragistics, {Platform} チャート, 積層型チャート, 積層型 100% チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "StackedAreaSeries", "Stacked100AreaSeries", "StackedBarSeries", "Stacked100BarSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "StackedLineSeries", "Stacked100LineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "StackedSplineAreaSeries", "Stacked100SplineAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} 積層型チャート

{ProductName} 積層型チャートは、データ項目の複数の値を積層エリア/ポリゴン、棒、縦棒、折れ線、またはスプラインとして描画するチャートの特別なグループに属しています。。標準の積層型チャートはデータ項目の実際の値を描画しますが、積層型 100% チャートは値を合計値のパーセンテージとして描画します。

## {Platform} 積層型チャート タイプ

次の例では、ドロップダウンを使用して、{Platform} `XamDataChart` コントロールで使用可能なさまざまなタイプの積層型チャートをすべて切り替えることができます。

`sample="/charts/data-chart/stacked-chart-types", height="600", alt="{Platform} 積層型チャートのタイプ"`



<div class="divider--half"></div>

以下のセクションは {ProductName} 積層型チャートの個々のタイプを示します。

## {Platform} 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、[エリア チャート](area-chart.md)とすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedAreaSeries` にバインドします。

`sample="/charts/data-chart/stacked-area-chart", height="600", alt="{Platform} 積層型エリア チャート"`



<div class="divider--half"></div>


## {Platform} 積層型 100 エリア チャート

このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合積層されたすべての要素を均等に表すことをお勧めします。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100AreaSeries` にバインドします。

`sample="/charts/data-chart/stacked-100-area-chart", height="600", alt="{Platform} 積層型 100 エリア チャート"`



<div class="divider--half"></div>


## {Platform} 積層型棒チャート

積層型棒チャート、または積層型棒グラフは、チャートの横棒にさまざまなサイズのフラグメントを表示することにより、さまざまなカテゴリのデータの構成を比較するために使用されるカテゴリ チャートの一種です。各棒または積層フラグメントの長さは、その全体的な値に比例します。

積層型棒チャートは、データを表すデータ ポイントが水平方向に隣り合って積み重ねられ、データを視覚的にグループ化するという点で、[棒チャート](bar-chart.md)とは異なります。各積層は正の値と負の値の両方を含みます。すべての正の値は X 軸の正の側にグループ化され、すべての負の値は X 軸の負の側にグループ化されます。

積層型棒チャートのこの例では、数値の X 軸 (チャートの下部のラベル) とカテゴリの Y 軸 (チャートの左側のラベル) があります。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedBarSeries` にバインドします:

`sample="/charts/data-chart/stacked-bar-chart", height="600", alt="{Platform} 積層型 棒チャート"`



<div class="divider--half"></div>


## {Platform} 積層型 100% 棒チャート

{Platform} 積層型 100% 棒チャートは、X 軸 (チャートの下のラベル) の値の処理を除いて、すべての点で {Platform} 積層型棒チャートと同じです。データを直接表現するのでなく、積層型棒チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。

積層型 100% 棒チャートのこの例では、Energy Product (エネルギー積) の値は、水平棒のフラグメント内のすべてのデータの 100% 値として表示されます。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100BarSeries` にバインドします:

`sample="/charts/data-chart/stacked-100-bar-chart", height="600", alt="{Platform} 積層型 100 棒チャート"`



<div class="divider--half"></div>


## {Platform} 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で[縦棒チャート](column-chart.md)と同じです。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも Y 軸の正の側にグループ化され、負の値は Y 軸の負の側にグループ化されます。積層型縦棒チャートは積層型棒チャートと同じデータプロットの概念を使用していますが、データ ポイントは横の線 (X 軸) に沿ってではなく、縦の線 (Y 軸) に沿って積層されます。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedColumnSeries` にバインドします:

`sample="/charts/data-chart/stacked-column-chart", height="600", alt="{Platform} 積層型縦棒チャート"`



<div class="divider--half"></div>


## {Platform} 積層型 100% 縦棒チャート

積層型 100% 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型縦棒チャートと同じです。データを直接表現するのでなく、積層型 100% 縦棒チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。

以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100ColumnSeries` にバインドします:

`sample="/charts/data-chart/stacked-100-column-chart", height="600", alt="{Platform} 積層型 100 縦棒チャート"`



<div class="divider--half"></div>


## {Platform} 積層型折れ線チャート

積層型折れ線チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedLineSeries` にバインドします:

`sample="/charts/data-chart/stacked-line-chart", height="600", alt="{Platform} 積層型折れ線チャート"`



<div class="divider--half"></div>


## {Platform} 積層型 100% 折れ線チャート

積層型 100% 折れ線チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型折れ線チャートと同じです。データを直接表現するのでなく、積層型 100% 折れ線チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100LineSeries` にバインドします:

`sample="/charts/data-chart/stacked-100-line-chart", height="600", alt="{Platform} 積層型 100 折れ線チャート"`



<div class="divider--half"></div>


## {Platform} 積層型スプライン エリア チャート

積層型スプライン エリア チャートは、曲線スプライン セグメントで接続されたポイントのコレクションを使用して描画され、曲線スプラインの下の領域が塗りつぶされ、互いに重ねて表示されます。積層型スプライン エリア チャートは、[エリア チャート](area-chart.md)とすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積み重なっていることです。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedSplineAreaSeries` にバインドします。

`sample="/charts/data-chart/stacked-spline-area-chart", height="600", alt="{Platform} 積層型 スプライン エリア チャート"`



<div class="divider--half"></div>


## {Platform} 積層型 100% スプライン エリア チャート

積層型 100% スプライン エリア チャートは、y 軸の値の処理を除いて、すべての点で積層型スプラインエリア チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン エリア チャートは、特定のデータ ポイント内のすべての値の合計の割合でデータを表します。チャートは、時間の経過とともに変化する全体の一部を表す場合があります。たとえば、生産元に関連する国のエネルギー消費量。このような場合、積層されたすべての要素を均等に表すことをお勧めします。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100SplineAreaSeries` にバインドします:

`sample="/charts/data-chart/stacked-100-spline-area-chart", height="600", alt="{Platform} 積層型 100 スプライン エリア チャート"`



<div class="divider--half"></div>


## {Platform} 積層型スプライン チャート

積層型スプライン チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedSplineSeries` にバインドします:

`sample="/charts/data-chart/stacked-spline-chart", height="600", alt="{Platform} 積層型 スプライン チャート"`



<div class="divider--half"></div>


## {Platform} 積層型 100% スプライン チャート

積層型 100% スプライン チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型スプライン チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100SplineSeries` にバインドします:

`sample="/charts/data-chart/stacked-100-spline-chart", height="600", alt="{Platform} 積層型 100 スプライン チャート"`



<div class="divider--half"></div>


## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [棒チャート](bar-chart.md)
- [縦棒チャート](column-chart.md)
- [折れ線チャート](line-chart.md)
- [スプライン チャート](spline-chart.md)

## API リファレンス

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ               | コントロール名   | API メンバー |
| -------------------------|----------------|-------------------------------- |
| 積層型エリア             | `XamDataChart` | `StackedAreaSeries` |
| 積層型棒              | `XamDataChart` | `StackedBarSeries` |
| 積層型縦棒           | `XamDataChart` | `StackedColumnSeries` |
| 積層型折れ線             | `XamDataChart` | `StackedLineSeries` |
| 積層型スプライン           | `XamDataChart` | `StackedSplineSeries` |
| 積層型スプライン エリア    | `XamDataChart` | `StackedSplineAreaSeries` |
| 積層型 100% エリア        | `XamDataChart` | `Stacked100AreaSeries` |
| 積層型 100% 棒         | `XamDataChart` | `Stacked100BarSeries` |
| 積層型 100% 縦棒      | `XamDataChart` | `Stacked100ColumnSeries` |
| 積層型 100% 折れ線        | `XamDataChart` | `Stacked100LineSeries` |
| 積層型 100% スプライン      | `XamDataChart` | `Stacked100SplineSeries` |
| 積層型 100% スプライン エリア | `XamDataChart` | `Stacked100SplineAreaSeries` |
