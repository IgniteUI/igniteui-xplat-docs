---
title: $PlatformShort$ スプライン チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スプライン チャート
_keywords: $PlatformShort$ Charts, Spline Chart, Infragistics, $PlatformShort$ チャート, スプライン チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "XamDataChart", "SplineSeries", "StackedSplineSeries", "Stacked100SplineSeries"]
_language: ja
---
# $PlatformShort$ スプライン チャート

$ProductName$ スプライン チャートは、スプラインのスムーズなカーブに接続された点のコレクションとして描画されるカテゴリ チャートのグループに属しています。値は y 軸に表示され、カテゴリは x 軸に表示されます。スプライン チャートは時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。スプライン チャートは、データ ポイントを接続する線がデータの表示を改善するためのスプライン補間とスムージング機能を持つこと以外のすべての面で[折れ線チャート](line-chart.md)と同じです。

## $PlatformShort$ スプライン チャートの例

次の例は、データをバインドし、`ChartType` プロパティを Spline 列挙型に設定することにより、`CategoryChart` コントロールで $PlatformShort$ スプライン チャートを作成する方法を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           alt="$PlatformShort$ 複数ソースのスプライン チャート" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの $PlatformShort$ スプライン チャート

以下の例に示すように、スプライン チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `Spline` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-single-source"
           alt="単一シリーズの $PlatformShort$ スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ スプライン チャート

スプライン チャートを使用すると、複数のシリーズを組み合わせて、時間の経過とともにどのように変化するかを比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、チャートは追加データに合わせて自動的に更新されます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `Spline` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           alt="複数シリーズの $PlatformShort$ スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ スプライン チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたスプライン チャートが必要な場合は、以下に示すように、マーカー、マーカー ブラシ、マーカー アウトライン、シリーズ ブラシ、シリーズ アウトラインを構成できます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `Spline` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-styling"
           alt="$PlatformShort$ スプライン チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## 高度なタイプのスプライン チャート

次のセクションでは、簡略化された API を使用した `CategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して作成できる、より高度なタイプの $PlatformShort$ スプライン チャートについて説明します。

## $PlatformShort$ 積層型スプライン チャート

以下の例に示すように、積層型スプライン チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           alt="$PlatformShort$ 積層型スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100% スプライン チャート

積層型 100 スプライン チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型スプライン チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100SplineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           alt="$PlatformShort$ 積層型 100 スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [折れ線チャート](spline-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)
- [積層型チャート](stacked-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ          | コントロール名       | API メンバー
--------------------|--------------------|--------------------------
スプライン              | `CategoryChart` | `ChartType` = `Spline`
積層型スプライン      | `XamDataChart`     | `StackedSplineSeries`
積層型 100% スプライン | `XamDataChart`     | `Stacked100SplineSeries`
