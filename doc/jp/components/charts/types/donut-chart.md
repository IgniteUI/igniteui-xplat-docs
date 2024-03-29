---
title: {Platform} ドーナツ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} ドーナツ チャート
_keywords: {Platform} Charts, Donut Chart, Infragistics, {Platform} チャート, ドーナツ チャート, インフラジスティックス
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} ドーナツ チャート

The {ProductName} ドーナツ チャートは[円チャート](pie-chart.md)と同様、変数の発生を比例的に表示します。ドーナツ型チャートは、複数の変数をコンセントリック リングで表示でき、階層データの可視化を組み込みでサポートします。リングは、異なるデータ項目にバインドすることも、共通のデータ ソースを共有することもできます。

## {Platform} ドーナツ チャートの例

`XamDoughnutChart` コントロールでドーナツ チャートを作成するには、以下の例のように、データをバインドします。

`sample="/charts/doughnut-chart/legend", height="600", alt="{Platform} ドーナツ チャートの凡例"`

<div class="divider--half"></div>

## {Platform} ドーナツ チャートの推奨事項

### {Platform} ドーナツ チャートはプロジェクトに適していますか?

ドーナツ チャートは小さなデータ セットに適しており、一目で読みやすいです。ドーナツ チャートは、部分から全体への視覚化の 1 つのタイプにすぎません。その他は次のとおりです。

- [円](pie-chart.md)
<!-- - Funnel  -->
- [積層型エリア](area-chart.md)
- [積層型 100% エリア (積層型パーセンテージ エリア)](area-chart.md)
- [積層型棒](bar-chart.md)
- [積層型 100% 棒 (積層型パーセンテージ棒)](bar-chart.md)
- [ツリーマップ](treemap-chart.md)
- [ウォーターフォール](column-chart.md)

{Platform} ドーナツ チャートには、次のようなデータを分析するためのビューア ツールを提供するインタラクティブ機能が含まれています。

- 凡例
- スライスの分割
- スライスの選択
- チャート アニメーション

### ドーナツ チャートのベスト プラクティス:

- 複数のデータ セットを使用して、データを輪に表示します。
- データをすばやく説明するために、ドーナツの穴の中に値やラベルなどの情報を配置します。
- スライスまたはセグメントを、合計値または全体に比例するパーセンテージ値として比較します。
- カテゴリのグループがどのように小さなセグメントに分割されるかを示します。
- データ セグメントの合計が 100% になるようにします。
- パーツのセグメント/スライスでカラー パレットを区別できるようにします。

### 以下の場合にドーナツ チャートを使用しないでください:

- 時間の経過に伴う変化の比較の場合 - [棒](bar-chart.md)、[折れ線](line-chart.md)、または[エリア](area-chart.md)チャートを使用します。
- 正確なデータ比較が必要である場合 - [棒](bar-chart.md)、[折れ線](line-chart.md)、または[エリア](area-chart.md)チャートを使用します。
- 6 つまたは 8 つを超えるセグメント (大量のデータ) がある場合 — データ ストーリーに適している場合は、[棒](bar-chart.md)、[折れ線](line-chart.md)、または[エリア](area-chart.md)チャートを検討してください。
- [棒](bar-chart.md)チャートで、ビューアが値の違いを認識しやすくなります。
- 負のデータがある場合、これはドーナツ チャートで表すことができません。

##  ドーナツ チャート - スライスの選択

{Platform} ドーナツ チャートには、クリック時にスライスを選択する機能があります。任意で、単一のカスタム ビジュアル スタイルを選択済みスライスに適用できます。`SliceClick` イベントは、ユーザーがスライスをクリックすると発生します。スライス選択を有効にすると、クリック時にスライスの選択を変更できます。次のサンプルは、スライスの選択を有効にし、選択したスライスの色を灰色に設定する方法を示しています。

`sample="/charts/doughnut-chart/selection", height="600", alt="{Platform} ドーナツ スライスの選択"`



<div class="divider--half"></div>

## {Platform} ドーナツ チャート - 複数のリング

{Platform} ドーナツ チャートに複数の輪を表示して、各輪を異なるデータ 項目にバインドしたり、共通のデータ ソースを共有したりすることができます。これは、以下の季節ごとのデータ表示など、基礎となる共通のカテゴリを持つ層としてデータを表示する必要がある場合に役立ちます:

`sample="/charts/doughnut-chart/rings", height="600", alt="{Platform} ドーナツ チャート複数のリング"`



<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [円チャート](pie-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)

## API リファレンス

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

- `XamDoughnutChart`
- `AllowSliceExplosion`
- `AllowSliceSelection`
- `InnerExtent`
- `SliceClick`