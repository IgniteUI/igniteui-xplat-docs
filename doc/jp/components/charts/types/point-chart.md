---
title: $PlatformShort$ ポイント チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ポイント チャート
_keywords: $PlatformShort$ Charts, Point Chart, Infragistics, $PlatformShort$ チャート, ポイント チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "ChartType", "Legend"]
_language: ja
---
# $PlatformShort$ ポイント チャート

$ProductName$ ポイント チャートは、ポイントのコレクションを描画します。値は Y 軸 (左側のラベル) に表示され、カテゴリは X 軸 (下部のラベル) に表示されます。これらのチャートは、プロットされた値の合計を表示することにより、一定期間の変化量を強調したり、複数の項目や全体の一部の関係を比較したりします。
$PlatformShort$ ポイント チャートは、ポイントのコレクションを描画します。値は Y 軸 (左側のラベル) に表示され、カテゴリは X 軸 (下部のラベル) に表示されます。これらのチャートは、プロットされた値の合計を表示することにより、一定期間の変化量を強調したり、複数の項目や全体の一部の関係を比較したりします。

複数シリーズの場合、$PlatformShort$ ポイント チャートでは、表示されるデータをエンド ユーザーが簡単に認識できるよう、より視覚的なインジケーターが必要です。エクスペリエンスを向上させるには、複数シリーズの凡例を追加する必要があります。最初に凡例オブジェクトをアプリケーションに追加し、それを $PlatformShort$ `CategoryChart` コントロールの `Legend` プロパティに設定します。これにより、ユーザーは各ポイントがどのデータセットに対応するかを分かりやすく表示します。

## $PlatformShort$ ポイント チャートの例

`CategoryChart` コントロールで $PlatformShort$  ポイント チャートを作成するには、以下の例のように、データを `ItemsSource` プロパティにバインドし、`ChartType` プロパティを `Point` 値に設定します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           alt="$PlatformShort$ ポイント チャートの例" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの $PlatformShort$ ポイント チャート

次の例では、$PlatformShort$ ポイント チャートは、2009 年 から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。Y 軸 (チャートの左側のラベル) には、更新された電力のテラワット時 (Twh) 値が表示され、X 軸 (チャートの下部のラベル) には、年が表示されます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-single-source"
           alt="単一シリーズの $PlatformShort$ ポイント チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ ポイント チャート

$PlatformShort$ ポイント チャートを使用すると、複数のシリーズを組み合わせて時間の経過に伴う変化を比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、ポイント チャートは追加データに合わせて自動的に更新されます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           alt="複数シリーズの $PlatformShort$ ポイント チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ポイント チャートのスタイル設定

$PlatformShort$ ポイント チャートを設定したら、マーカーとそのアウトライン、ブラシ、太さを変更するなど、スタイルをさらにカスタマイズします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-styling"
           alt="ポイント チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## 高度なタイプのポイント チャート

次のトピックに従って、`XamCategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して、より高度なタイプの $PlatformShort$ ポイント チャートを作成できます。

- [散布バブル チャート](bubble-chart.md)
- [散布マーカー チャート](scatter-chart.md#$PlatformShort$-散布マーカー-チャート)
- [散布高密度チャート](scatter-chart.md#$PlatformShort$-散布高密度チャート)
- [極座標型マーカー チャート](polar-chart.md#$PlatformShort$-極座標型マーカー-チャート)

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャートのパフォーマンス](../features/chart-performance.md)
- [チャート マーカー](../features/chart-markers.md)

## API メンバー
- `CategoryChart`
- `ChartType`
- `MarkerTypes`
- `MarkerOutlines`
- `MarkerBrushes`
- `MarkerThickness`

