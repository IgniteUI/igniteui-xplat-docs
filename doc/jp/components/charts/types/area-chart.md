---
title: {Platform} エリア チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} エリア チャート
_keywords: {Platform} Charts, Area Chart, Infragistics, {Platform} チャート, エリア チャート, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} エリア チャート

{ProductName} エリア チャートは、線の下の領域が塗りつぶされた直線セグメントで接続されたポイントのコレクションを使用して描画されます。値は y 軸 (左側のラベル) に表示され、カテゴリは x 軸 (下部のラベル) に表示されます。これらのチャートは、プロットされた値の合計を表示することにより、一定期間の変化量を強調したり、複数の項目や全体の一部の関係を比較したりします。そのため、時系列で量の変化を示します。たとえば、商品の経時的な蓄積などです。

## {Platform} エリア チャートの例

`CategoryChart` コントロールでエリア チャートを作成するには、以下の例のように、データを `ItemsSource` プロパティにバインドし、`CategoryChart.ChartType` プロパティを **Area** 列挙型に設定します。

`sample="/charts/category-chart/area-chart-multiple-sources", height="600", alt="{Platform} 複数ソースのエリア チャート"`



<div class="divider--half"></div>

## エリア チャートの推奨事項

### エリア チャートのユースケース

エリア チャートを選択するための一般的なユースケースはいくつかあります:

- パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合。
- データの経時的なトレンドを比較する必要がある場合。
- 2 つ以上のデータ シリーズの違いを表示したい場合。
- 個別のカテゴリの部分対全体の累積比較を表示したい場合。
- 比較解析のために 1 つ以上のカテゴリのデータ トレンドを表示する必要がある場合。
- 時系列データの詳細を視覚化する必要がある場合。

### エリア チャートのベスト プラクティス

- データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する。
- 時系列データを左から右へ並べ替える。
- 透明色を使用して、別の系列の背後にプロットされているデータがブロックされないようにする。

### 以下の場合にエリア チャートを使用しないでください:

- 多くの (7 または 10 以上) シリーズのデータがある場合。チャートが読みやすいことを確認する必要があります。
- 時系列データの値は類似している場合 (同じ期間のデータ)。これにより、重なり合った網掛け領域を区別できなくなります。

### エリア チャートのデータ構造

- データ ソースはデータ項目の配列またはリスト (単一シリーズの場合) である必要があります。
- データ ソースは、配列の配列またはリストのリスト (複数シリーズの場合) である必要があります。
- データ ソースはデータ項目間に線を描画するために少なくともデータ項目を 2 つ以上含む必要があります。
- すべてのデータ項目には、少なくとも 1 つのデータ列 (文字列または日時) が含まれている必要があります。
- すべてのデータ項目には少なくとも 1 つの数値データ列が含まれている必要があります。

## 単一シリーズの {Platform} エリア チャート

{Platform} エリア チャートは、生産される再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`CategoryChart.ChartType` プロパティを `Area` 値に設定します。

`sample="/charts/category-chart/area-chart-single-source", height="600", alt="単一シリーズの {Platform} エリア チャート"`



<div class="divider--half"></div>

## 複数シリーズの {Platform} エリア チャート

複数の[折れ線チャート](line-chart.md)および[スプライン チャート](spline-chart.md)を表示する方法と同様に、複数のエリア チャートを同じコントロールに結合することもできます。これは、複数のデータ ソースを `CategoryChart` コントロールの `ItemsSource` プロパティにバインドすることによって実現されます。

`sample="/charts/category-chart/area-chart-multiple-sources", height="600", alt="複数シリーズの {Platform} エリア チャート"`



<div class="divider--half"></div>

## {Platform} エリア チャートのスタイル設定

エリア チャートには、多くの場合、その領域が半透明で塗りつぶされており、通常より太い線とわずかに大きいマーカーがあります。以下は、それに応じて以前のエリア チャートのスタイルを設定する方法を示す例です。

`sample="/charts/category-chart/area-chart-styling", height="600", alt="{Platform} エリア チャートのスタイル設定"`



<div class="divider--half"></div>

## 高度なタイプのエリア チャート

次のセクションでは、簡略化された API を使用した `CategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して作成できる、より高度なタイプの {Platform} エリア チャートについて説明します。

## {Platform} ステップ エリア チャート

{ProductName} ステップ エリア チャートはカテゴリ チャートのグループに属し、連続する垂直線と水平線で接続されたポイントのコレクションを使用して描画され、線の下の領域は塗りつぶされます。値は y 軸に表示され、カテゴリが表示されます x 軸上。ステップ エリア チャートは、一定期間の変化量を強調するか、複数の項目を比較します。`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`CategoryChart.ChartType` プロパティを `StepArea` 値に設定します。


`sample="/charts/category-chart/step-area-multiple-sources", height="600", alt="{Platform} ステップ エリア チャート"`


<div class="divider--half"></div>

## 高度なタイプのエリア チャート

次のセクションでは、簡略化された API を使用した `CategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して作成できる、より高度なタイプの {Platform} エリア チャートについて説明します。

## {Platform} 範囲エリア チャート

{ProductName} 範囲エリア チャートは、時間の経過とともに 2 つの値の範囲としてエリアを表示します。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RangeAreaSeries` にバインドします。

`sample="/charts/data-chart/range-area-chart", height="600", alt="{Platform} 範囲エリア チャート"`



<div class="divider--half"></div>

## {Platform} 積層型エリア チャート

{ProductName} 積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedAreaSeries` にバインドします。

`sample="/charts/data-chart/stacked-area-chart", height="600", alt="{Platform} 積層型エリア チャート"`



<div class="divider--half"></div>

## {Platform} 積層型 100% エリア チャート

{ProductName} 積層型 100% エリア チャートを使用して、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表します。このような場合、積層されたすべての要素を均等に表すことをお勧めします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100AreaSeries` にバインドします。


`sample="/charts/data-chart/stacked-100-area-chart", height="600", alt="{Platform} 積層型 100% エリア チャート"`


<div class="divider--half"></div>

## {Platform} 積層型スプライン エリア チャート

{ProductName} 積層型スプライン エリア チャートは、曲線スプライン セグメントで接続されたポイントのコレクションを使用して描画され、曲線スプラインの下の領域が塗りつぶされ、互いに重ねて表示されます。積層型スプライン エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積み重なっていることです。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedSplineAreaSeries` にバインドします。


`sample="/charts/data-chart/stacked-spline-area-chart", height="600", alt="{Platform} 積層型スプライン エリア チャート"`


<div class="divider--half"></div>


## {Platform} 積層型 100% スプライン エリア チャート

{ProductName} 積層型 100% スプライン エリア チャートは、y 軸の値の処理を除いて、すべての点で積層型スプラインエリア チャートと同じです。データを直接表現するのでなく、積層型 100 スプライン エリア チャートは、特定のデータ ポイント内のすべての値の合計の割合でデータを表します。チャートは、時間の経過とともに変化する全体の一部を表す場合があります。たとえば、生産元に関連する国のエネルギー消費量。このような場合、積層されたすべての要素を均等に表すことをお勧めします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100SplineAreaSeries` にバインドします。


`sample="/charts/data-chart/stacked-100-spline-area-chart", height="600", alt="{Platform} 積層型 100% スプライン エリア チャート"`


<div class="divider--half"></div>

## {Platform} ラジアル エリア チャート

{ProductName} ラジアル エリア チャートは[ラジアル チャート](radial-chart.md)のグループに属し、データ ポイントを接続する直線のコレクションによってバインドされた塗りつぶされたポリゴンの形状を持っています。このグラフ チャートは、エリア チャートと同じデータ プロットの概念を使用しますが、データ ポイントを水平方向に引き伸ばすのではなく、円形の軸の周りにラップします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialAreaSeries` にバインドします。


`sample="/charts/data-chart/radial-area-chart", height="600", alt="{Platform} ラジアル エリア チャート"`


<div class="divider--half"></div>

## {Platform} 極座標型エリア チャート

{ProductName} 極座標エリア チャートは[極座標チャート](polar-chart.md)のグループに属し、塗りつぶされたポリゴンの形状を持ちます。頂点または角はデータ ポイントの極座標 (角度/半径) に配置され、直線で接続されてから、接続されたポイントによって表された領域を塗りつぶします。極座標エリア チャートは、散布マーカー チャートと同じデータ プロットの概念を使用しますが、水平線に沿って塗りつぶされたポイントと領域を引き伸ばすのではなく、代わりに円の周りにポイントをラップし、描画された領域を塗りつぶします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarAreaSeries` にバインドします。


`sample="/charts/data-chart/polar-area-chart", height="600", alt="{Platform} 極座標型エリア チャート"`


<div class="divider--half"></div>

## {Platform} 極座標型スプライン エリア チャート

{Platform} 極座標スプライン エリア チャートは[極座標チャート](polar-chart.md)のグループに属し、塗りつぶされたポリゴンの形状を持ちます。頂点または角はデータ ポイントの極座標 (角度/半径) に配置され、曲線スプラインで接続されてから接続されたポイントで表された領域を塗りつぶします。極座標スプライン エリア チャートは、散布マーカー チャートと同じデータ プロットの概念を使用しますが、水平線に沿って塗りつぶされたポイントと領域を引き伸ばすのではなく、代わりに円の周りにポイントをラップして、描画された領域を塗りつぶします。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarSplineAreaSeries` にバインドします。

`sample="/charts/data-chart/polar-spline-area-chart", height="600", alt="{Platform} 極座標型スプライン エリア チャート"`



<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [棒チャート](bar-chart.md)
- [縦棒チャート](column-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)
- [スプライン チャート](spline-chart.md)
- [積層型チャート](stacked-chart.md)


## API リファレンス

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ               | コントロール名       | API メンバー |
| -------------------------|--------------------|----------------------- |
| エリア                     | `CategoryChart` | `CategoryChart.ChartType` = `Area` |
| ステップ エリア                | `CategoryChart` | `CategoryChart.ChartType` = `StepArea` |
| 範囲エリア               | `XamDataChart`     | `RangeAreaSeries` |
| ラジアル エリア              | `XamDataChart`     | `RadialAreaSeries` |
| 極座標エリア               | `XamDataChart`     | `PolarAreaSeries` |
| 極座標スプライン エリア        | `XamDataChart`     | `PolarSplineAreaSeries` |
| 積層型エリア             | `XamDataChart`     | `StackedAreaSeries` |
| 積層型スプライン エリア      | `XamDataChart`     | `StackedSplineAreaSeries` |
| 積層型 100% エリア        | `XamDataChart`     | `Stacked100AreaSeries` |
| 積層型 100% スプライン エリア | `XamDataChart`     | `Stacked100SplineAreaSeries` |
