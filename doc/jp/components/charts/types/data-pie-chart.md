---
title: {Platform} 円チャートとグラフ | {ProductName}
_description: {ProductName} データ円チャートは、セクションに分割された円形の領域で構成される、円チャートを表示するための UI コントロールです。無料でお試しください。
_keywords: {Platform} charts, pie chart, {ProductName}, Infragistics, data binding, slice selection, animation, highlighting, legend, {Platform} チャート, 円チャート, インフラジスティックス, データ バインディング, スライスの選択, アニメーション, ハイライト表示, 凡例
mentionedTypes: ["DataPieChart", "XamDataChart", "OthersCategoryType", "SeriesSelectionMode", "SeriesSelectionBehavior", "SeriesHighlightingBehavior"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} Data Pie Chart (データ円チャート)

{ProductName} データ円チャートは、データ セットのカテゴリ (部分) がどのように合計 (全体) 値に構成されるかを示す部分対全体のチャートです。カテゴリは、円形または円グラフのセクションとして表示されます。各セクションまたは円スライスには、基本データ値に比例する円弧の長さがあります。カテゴリは、分析されている合計値に対する値のパーセンテージ (100 または 100% の一部) に基づいて、他のカテゴリに比例して表示されます。

## {Platform} データ円チャートの例

データ項目を文字列と数値データでバインドすることで、`DataPieChart` の {Platform} 円チャートが作成できます。これらのデータ値を足すと可視化率 100% になります。

`sample="/charts/data-pie-chart/overview", height="600", alt="{Platform} データ円チャートの概要"`

<div class="divider--half"></div>

## {Platform} データ円チャートの推奨事項

円チャートは小さなデータ セットに適しており、一目で読みやすいです。円チャートは、ドーナツ (リング) チャート、ファンネル チャート、積層型エリア チャート、積層型棒チャート、ツリーマップなど、部分から全体への視覚化の 1 つのタイプです。

{Platform} データ円チャートには、次のようなデータを分析するためのビューア ツールを提供するインタラクティブ機能が含まれています。

- 凡例
- スライスの選択
- スライスのハイライト表示
- チャート アニメーション

円チャートのベスト プラクティス:

- スライスまたはセグメントを、合計値または全体に比例するパーセンテージ値として比較します。
- カテゴリのグループがどのように小さなセグメントに分割されるかを示します。
- 小規模で階層化されていないデータ セット (6 ～ 8 セグメント未満のデータ) を提示します。
- データ セグメントの合計が 100% になるようにします。
- データの順序を最大 (最高) から最小 (最低) に並べます。
- 12 時の位置から始めて時計回りに続けるなどの標準的なプレゼンテーション手法を使用します。
- パーツのセグメント/スライスでカラー パレットを区別できるようにします。
- 読みやすさを考慮して、セグメント内のデータ ラベルと凡例を比較します。
- 理解しやすさに基づいて、円チャートの代わりに棒やリング などのチャートを選択します。
- 比較分析のために複数の円チャートを隣り合わせに配置することは避けます。

以下の場合に円チャートを使用しないでください。

- 時間の経過に伴う変化を比較する場合は、棒、折れ線、またはエリア チャートを使用します。
- 正確なデータ比較が必要な場合は、棒、折れ線、またはエリア チャートを使用します。
- 6 つまたは 8 つを超えるセグメント (大量のデータ) がある場合 — データ ストーリーに適している場合は、棒、折れ線、またはエリア チャートを検討してください。
- 棒チャートで、ビューアが値の違いを認識しやすくなります。

## {Platform} データ円チャートの凡例

凡例は、各ポイントに関する情報を表示し、合計に対する各ポイントの貢献度を知るために使用されます。

円チャートの隣に凡例を表示するには、ItemLegend を作成し、`Legend` プロパティに割り当てます。ItemLegend はデフォルトでは項目を縦方向に表示しますが、これは `Orientation` プロパティを設定することで変更できます。

凡例に表示されるラベルには、デフォルトで `DataPieChart` の各スライスに表示されるラベルと同じ内容が表示されますが、チャートの `LegendSliceLabelContentMode` プロパティを使用してこれを変更できます。これにより、ラベル、値、パーセンテージ、またはそれらの任意の組み合わせをチャート内の各スライスの凡例のコンテンツとして表示できる列挙が公開されます。

ItemLegend バッジを変更することもできます。デフォルトでは、関連付けられているチャートのスライスの色に対応する塗りつぶされた円として表示されます。これを設定するには、チャートの `LegendItemBadgeShape` プロパティを使用し、円、折れ線、棒、縦棒などに設定できます。

以下は、`DataPieChart` での ItemLegend の使用例です。

`sample="/charts/data-pie-chart/legend", height="600", alt="{Platform} データ円チャートの凡例"`

<div class="divider--half"></div>

## {Platform} 円チャートのその他カテゴリ

円チャートの基本データに、小さい値を含む多くの項目が含まれる場合があります。この場合、Others カテゴリは、単一スライスへの複数のデータ値の自動集計を許可します。

`DataPieChart` の「その他」カテゴリには、`OthersCategoryType`、`OthersCategoryThreshold`、`OthersCategoryText` という 3 つの主要な構成可能なプロパティがあり、これらを使用して、チャート内の「その他」スライスの表示方法を構成できます。これらについては、それぞれ以下で説明します。

`OthersCategoryType` プロパティは、`DataPieChart` の `OthersCategoryThreshold` プロパティと連動して機能します。`OthersCategoryType` では、`OthersCategoryThreshold` を数値として評価するか、パーセンテージとして評価するかを定義できます。たとえば、数値を選択し、`OthersCategoryThreshold` を 5 に設定すると、5 未満の値を持つスライスはすべて「その他」カテゴリの一部になります。パーセント タイプで同じ値 5 を使用すると、`DataPieChart` の合計値の 5 パーセント未満の値はすべて「その他」カテゴリの一部になります。

チャートの Others スライスに含まれる基礎データ項目を取得するには、チャートの `GetOthersContext` メソッドを利用できます。このメソッドの戻り値のタイプは、`Items` プロパティを公開する `OthersCategoryContext` です。`Items` プロパティは、Others スライス内の項目を含む配列を返します。さらに、Others スライスをクリックすると、`SeriesClick` イベントのイベント引数の `Item` プロパティもこの `OthersCategoryContext` を返します。

デフォルトでは、「その他」スライスは「その他」というラベルで表されます。チャートの `OthersCategoryText` プロパティを変更することでこれを変更できます。

`DataPieChart` に「その他」カテゴリが表示されないようにするには、`OthersCategoryThreshold` を 0 に設定します。

以下のサンプルは、`DataPieChart` 内の Others スライスの使用方法を示しています。

`sample="/charts/data-pie-chart/others", height="600", alt="{Platform} 円チャートのその他"`

<div class="divider--half"></div>

## {Platform} データ円チャートの選択

`DataPieChart` は、チャートにプロットされたスライスをマウスでクリックしてスライスを選択できる機能をサポートしています。これは、以下で説明するチャートの `SelectionBehavior` プロパティと `SelectionMode` プロパティを利用して構成できます。

`SelectionBehavior` の主な 2 つのオプションは `PerDataItemSingleSelect` と `PerDataItemMultiSelect` で、それぞれ単一選択と複数選択を有効にします。

`SelectionMode` プロパティは、円チャートのスライスが選択された場合にどのように反応するかを決定します。以下はその列挙体のオプションとその機能です。

- `Brighten`: 選択したスライスがハイライト表示されます。
- `FadeOthers`: 選択したスライスは同じ色のまま残り、他のスライスは色が薄くなります。
- `FocusColorFill`: 選択したスライスの背景がチャートの FocusBrush に変更されます。
- `FocusColorOutline`: 選択されたスライスには、チャートの FocusBrush によって定義された色のアウトラインが表示されます。
- `FocusColorThickOutline`: 選択されたスライスには、チャートの FocusBrush によって定義された色のアウトラインが表示されます。このアウトラインの太さは、コントロールの Thickness プロパティを使用して設定することもできます。
- `GrayscaleOthers`: 選択されていないスライスにはグレー色のフィルターが適用されます。
- `None`: 選択されたスライスには影響はありません。
- `SelectionColorFill`: 選択されたスライスの背景がチャートの SelectionBrush に変更されます。
- `SelectionColorOutline`: 選択されたスライスには、チャートの SelectionBrush によって定義された色のアウトラインが表示されます。
- `SelectionColorThickOutline`: 選択されたスライスには、チャートの FocusBrush によって定義された色のアウトラインが表示されます。このアウトラインの太さは、コントロールの Thickness プロパティを使用して設定することもできます。
- `ThickOutline`: 選択されたスライスには、チャートの Thickness プロパティに応じて太さが異なるアウトラインが適用されます。

スライスが選択されると、その基になるデータ項目がチャートの SelectedSeriesItems コレクションに追加されます。そのため、XamDataPieChart は SelectedSeriesItemsChanged イベントを公開して、スライスが選択されてこのコレクションが変更されたことを検出します。

以下のサンプルは、`DataPieChart` コントロールの選択機能を示しています。

`sample="/charts/data-pie-chart/selection", height="600", alt="{Platform} 円チャートの選択"`

<div class="divider--half"></div>

## {Platform} データ円チャートのハイライト表示

`DataPieChart` は、マウス オーバーによるハイライト表示と、別のデータ ソースを提供することで設定できるハイライト表示オーバーレイをサポートしています。

`HighlightingBehavior` 列挙プロパティは、スライスがどのようにハイライト表示されるかを決定します。以下はそのプロパティのオプションとその機能です。

- `DirectlyOver`: スライスは、マウスがその上に直接置かれている場合にのみハイライト表示されます。
- `NearestItems`: マウスの位置に最も近いスライスがハイライト表示されます。
- `NearestItemsAndSeries`: マウスの位置に最も近いスライスとシリーズがハイライト表示されます。
- `NearestItemsRetainMainShapes`: マウスの位置に最も近い項目がハイライト表示され、シリーズのメイン図形はハイライト表示されなくなります。

`HighlightingMode` 列挙プロパティは、データ円チャートのスライスがハイライト表示されたときにどのように反応するかを決定します。以下はそのプロパティのオプションとその機能です。

- `Brighten`: マウスの位置がそのシリーズ上または近くにあると、そのシリーズの色が明るくなります。
- `BrightenSpecific`: マウスの位置が特定のスライスの上または近くにある場合、そのスライスの色が明るくなります。
- `FadeOthers`: マウスの位置がそのシリーズ上または近くにある場合、そのシリーズは色を保持しますが、他の部分は薄く表示されます。
- `FadeOthersSpecific`: マウスの位置がそのスライスの上または近くにある場合、そのスライスの色は保持されますが、他のスライスの色は薄く表示されます。
- `None`: シリーズとスライスはハイライト表示されません。

以下の例は、`DataPieChart` コンポーネントのマウスハイライト表示の動作を示しています。

`sample="/charts/data-pie-chart/highlighting", height="600", alt="{Platform} データ円チャートのハイライト表示"`

マウスのハイライト表示に加えて、`DataPieChart` はデータのサブセットを表示できるハイライト表示フィルター機能を公開します。これは、コントロールの `HighlightedDataSource` を指定し、`HighlightedValuesDisplayMode` プロパティを `Overlay` に設定することによって適用されます。`HighlightedDataSource` は、`DataPieChart` の `DataSource` プロパティに割り当てられたデータのサブセットを想定しています。

これらの条件が満たされると、サブセットの値がハイライト表示され、データの全セットの残りの部分はフェードアウトされます。これにより、サブセットが効果的にハイライトされ、同じコントロール内でデータのサブセットをより簡単に視覚化できるようになります。

以下の例は、ハイライト表示を示しています。

`sample="/charts/data-pie-chart/highlight-filter", height="600", alt="{Platform} データ円チャートのハイライト表示"`

<div class="divider--half"></div>

## {Platform} データ円チャートのアニメーション

`DataPieChart` は、スライスの表示や値の変更時のアニメーション化をサポートしています。

`IsTransitionInEnabled` プロパティを **true** に設定すると、円チャートがアニメーションで表示されます。実行されるアニメーションのタイプは、`TransitionInMode` 列挙プロパティを表示したいアニメーションのタイプに設定することで構成できます。さらに、`TransitionInSpeedType` プロパティを、インデックス、値、通常、またはランダム化でスケー​​ルするように設定することもできます。このアニメーションの期間は、`TimeSpan` を受け取る `TransitionInDuration` プロパティで制御できます。

データの変更をアニメーション化する場合は、`AnimateSeriesWhenAxisRangeChanges` プロパティを **true** に設定することでも実行できます。この変更の期間は、`TransitionDuration` プロパティを設定することでも構成できます。

以下のは、`DataPieChart` コントロールでのアニメーションを使用する方法を示しています。

`sample="/charts/data-pie-chart/animation-replay", height="600", alt="{Platform} データ円チャートのアニメーション"`

<div class="divider--half"></div>

## その他のリソース

- [ドーナツ チャート](donut-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)

## API リファレンス

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

- `ChartType`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`
- `SelectionBehavior`

 |チャート タイプ       | コントロール名   | API メンバー |
 |-----------------|----------------|------------ |
 |データ円チャート      | `DataPieChart`     | `DataPieChart` |
 |項目凡例 | `ItemLegend` | `ItemLegend` |

