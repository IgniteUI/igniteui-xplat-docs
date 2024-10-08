---
title: {Platform} スプライン チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} スプライン チャート
_keywords: {Platform} Charts, Spline Chart, Infragistics, {Platform} チャート, スプライン チャート, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "SplineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "Series", "CategoryChartType"]
_language: ja
---
# {Platform} スプライン チャート

{ProductName} スプライン チャートは、スプラインのスムーズなカーブに接続された点のコレクションとして描画されるカテゴリ チャートのグループに属しています。値は y 軸に表示され、カテゴリは x 軸に表示されます。スプライン チャートは時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。スプライン チャートは、データ ポイントを接続する線がデータの表示を改善するためのスプライン補間とスムージング機能を持つこと以外のすべての面で[折れ線チャート](line-chart.md)と同じです。

## {Platform} スプライン チャートの例

次の例は、データをバインドし、`CategoryChart.ChartType` プロパティを `Spline` 列挙型に設定することにより、`CategoryChart` コントロールで {Platform} スプライン チャートを作成する方法を示しています。

`sample="/charts/category-chart/spline-multiple-sources", height="600", alt="{Platform} 複数ソースのスプライン チャート"`



<div class="divider--half"></div>

## 単一シリーズの {Platform} スプライン チャート

以下の例に示すように、スプライン チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`CategoryChart.ChartType` プロパティを `Spline` に設定します:

`sample="/charts/category-chart/spline-single-source", height="600", alt="単一シリーズの {Platform} スプライン チャート"`



<div class="divider--half"></div>

## 複数シリーズの {Platform} スプライン チャート

スプライン チャートを使用すると、複数のシリーズを組み合わせて、時間の経過とともにどのように変化するかを比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、チャートは追加データに合わせて自動的に更新されます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`CategoryChart.ChartType` プロパティを `Spline` に設定します:

`sample="/charts/category-chart/spline-multiple-sources", height="600", alt="複数シリーズの {Platform} スプライン チャート"`



<div class="divider--half"></div>

## {Platform} スプライン チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたスプライン チャートが必要な場合は、以下に示すように、マーカー、マーカー ブラシ、マーカー アウトライン、シリーズ ブラシ、シリーズ アウトラインを構成できます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`CategoryChart.ChartType` プロパティを `Spline` に設定します:

`sample="/charts/category-chart/spline-styling", height="600", alt="{Platform} スプライン チャートのスタイル設定"`



<div class="divider--half"></div>

## 高度なタイプのスプライン チャート

次のセクションでは、簡略化された API を使用した `CategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して作成できる、より高度なタイプの {Platform} スプライン チャートについて説明します。

## {Platform} 積層型スプライン チャート

以下の例に示すように、積層型スプライン チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedSplineSeries` にバインドします:

`sample="/charts/data-chart/stacked-spline-chart", height="600", alt="{Platform} 積層型スプライン チャート"`



<div class="divider--half"></div>

## {Platform} 積層型 100% スプライン チャート

積層型 100 スプライン チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型スプライン チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100SplineSeries` にバインドします:

`sample="/charts/data-chart/stacked-100-spline-chart", height="600", alt="{Platform} 積層型 100 スプライン チャート"`



<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [折れ線チャート](spline-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)
- [積層型チャート](stacked-chart.md)

## API リファレンス

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ          | コントロール名       | API メンバー |
| --------------------|--------------------|-------------------------- |
| スプライン              | `CategoryChart` | `CategoryChart.ChartType` = `Spline` |
| 積層型スプライン      | `XamDataChart`     | `StackedSplineSeries` |
| 積層型 100% スプライン | `XamDataChart`     | `Stacked100SplineSeries` |
