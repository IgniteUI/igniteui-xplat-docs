---
title: $Platform$ 円チャートとグラフ | $ProductName$
_description: $ProductName$ 円チャートは、セクションに分割された円形領域で構成される円チャートを描画する特殊な UI コントロールです。無料でお試しください。
_keywords: $Platform$ charts, pie chart, $ProductName$, Infragistics, data binding, slice selection, slice explosion, animation, チャート, 円チャート, データ バインディング, スライス選択, スライス切り離し, アニメーション, インフラジスティックス
mentionedTypes: ["XamPieChart", "XamDataChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# $Platform$ 円チャート

$ProductName$ 円チャート (円グラフ) は、データセットのカテゴリ (部分) が合計 (全体) 値になる方法を示す部分対全体チャートです。カテゴリは、円グラフまたは円グラフのセクションとして描画されます。各セクション (円スライス) は基本データ値に比例する円弧の長さを持ちます。カテゴリは、分析中の合計値に対する値の割合に基づいて、100 または 100% の部分として他のカテゴリに比例して表示されます。

## $Platform$ 円チャートの例

データ項目を文字列と数値データでバインドすることで、`XamPieChart` の円チャートが作成できます。これらのデータ値を足すと可視化率 100% になります。この例では部門ごとの予算支出の全体的な内訳を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-overview"
           github-src="charts/pie-chart/overview"
           alt="$Platform$ 円チャートの概要" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 円チャートの推奨事項

円チャートは小さいデータ セットに適していて、一目で読みやすくなります。円チャートは、部分対全体の可視化の一種です。その他:

- 円
- ドーナツ (リング)
- ファンネル
- 積層型エリア
- 積層型 100% エリア (積層型パーセント エリア)
- 積層型棒
- 積層型 100% 棒 (積層型パーセント棒)
- ツリーマップ
- ウォーターフォール

$Platform$ 円チャートは、データを解析するためのビューアー ツールを提供するインタラクティブ機能を含みます。

- 凡例
- スライスの分割
- スライスの選択
- チャート アニメーション

円チャートのベスト プラクティス:

- スライスまたはセグメントを、合計値または全体に対するパーセンテージ値として比較する。
- カテゴリのグループがどのようにより小さなセグメントに分割されるかを表示する。
- 小さい非階層データ セット (6 ～ 8 セグメント未満のデータ) を表示する。
- データ セグメントの合計が 100% になるようにする。
- データの順序を最大 (最高) から最小 (最低) に並べ替える。
- 12 時の位置から始めて時計回りに進む標準的なプレゼンテーション方法を使用する。
- カラー パレットがセグメント/スライスで識別できるようにする。
- データラベルを読みやすくするため、セグメントと凡例のどちらに配置するべきか検討する。
- より分かりやすい表現のために、円の代わりに棒またはリング チャートを選択する。
- 比較分析のために複数の円チャートを並べて配置しないようにする。

以下の場合に円チャートを使用しないでください。

- 経時変化を比較する場合 - 棒チャート、折れ線チャート、またはエリア チャートを使用してください。
- 正確なデータ比較が必要な場合 - 棒チャート、折れ線チャート、またはエリア チャートを使用してください。
- 6 セグメントまたは 8 セグメント (大量のデータ) がある場合 - データ ストーリーに適した棒チャート、折れ線チャート、またはエリア チャートを検討してください。
- 棒チャートで値の違いがわかりやすくなります。

## $Platform$ 円チャートの凡例

凡例は、各ポイントに関する情報を表示し、そのポイントの合計に対する割合を示します 凡例クリックを使用してポイントを縮小できます。

円チャート コンポーネントの隣に凡例を表示するには、ItemLegend を作成し、`Legend` プロパティに割り当てます。`LegendLabelMemberPath` は、各円スライスの凡例項目を表示するために使用するデータ モデルのプロパティを指定します。

また、凡例項目の外観をカスタマイズするために `LegendItemTemplate` および `LegendItemBadgeTemplate`プロパティ、`ItemLegend` の複数のフォント プロパティも使用できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-legend"
           github-src="charts/pie-chart/legend"
           alt="凡例付きの $Platform$ 円チャート" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 円チャートその他の分類項目

円チャート コンポーネントの基本データに、小さい値を含む多くの項目が含まれる場合があります。この場合、Others カテゴリは、単一スライスへの複数のデータ値の自動集計を許可します。

以下のサンプルは、`OthersCategoryThreshold` を 2 に設定、`OthersCategoryType` は Number に設定されています。したがって、2 以下の値を含む項目は、Others カテゴリに割り当てられます。

`OthersCategoryType` を Percent に設定すると、`OthersCategoryThreshold` は値ではなくパーセンテージとして解釈されます。つまり、値がすべての項目の値の合計の 2% 未満である項目は、Others カテゴリに割り当てられます。使用しているアプリケーションに最も適切な `OthersCategoryType` を使用できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-others"
           github-src="charts/pie-chart/others"
           alt="$Platform$ 円チャートその他の分類項目" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 円チャートの展開

円チャート コンポーネントは個々の円スライスの選択と展開だけでなく、選択状態を変更しカスタム ロジックを実装することを可能にする `SliceClick` イベントをコンポーネントサポートします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-explosion"
           github-src="charts/pie-chart/explosion"
           alt="$Platform$ 円チャートの展開" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 円チャートの選択
デフォルトで、円チャートはマウス クリックによるスライス選択をサポートします。選択されたスライスは、`SelectedItems`  プロパティで取得します。選択したスライスがハイライトされます。

円チャートのモードは `SelectionMode` プロパティで設定します。デフォルト値は `Single` です。選択機能を無効化するためにはプロパティを `Manual` に設定します。

円チャート コンポーネントは、選択モードを 3 つコンポーネントサポートします。

* Single - single モードに設定すると、一度に 1 つのスライスのみ選択します。他のスライスを選択すると、最初に選択したスライスは選択解除され、新しいスライスが選択されます。
* Multiple - Multiple モードに設定すると、一度に複数のスライスを選択します。スライスをクリックするとスライスが選択され、他のスライスをクリックすると、最初のスライスも、新しくクリックしたスライスも選択されます。
* 手動 - Manual モードに設定すると、選択は無効化されます。

円チャート コンポーネントには、選択機能に関連する 4 つのイベントがあります。
* SelectedItemChanging
* SelectedItemChanged
* SelectedItemsChanging
* SelectedItemsChanged

「Changing」で終わるイベントはキャンセル可能なイベントです。すなわち、イベント引数プロパティ `Cancel` を true に設定することで、スライスの選択を停止します。True に設定すると、関連付けられたプロパティは更新されず、その結果スライスは選択されません。この設定はたとえば、スライスのデータによって一定のスライスの選択を無効化する場合に使用します。

「その他」スライスをクリックすると、`PieSliceOthersContext` オブジェクトが返されます。オブジェクトは、「その他」スライスに含まれるデータ項目のリストがあります。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-selection"
           github-src="charts/pie-chart/selection"
           alt="$Platform$ 円チャートの選択" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 円チャートのアニメーション

チャートの半径をスケールする `radiusFactor` プロパティを設定して円チャートをすばやくアニメーション化できます。`startAngle` プロパティを設定してチャートが回転する間、チャートの角度が増加し続けるようにします。

以下のコードでは、radiusFactor がチャートをサイズの 0.25% 増加し、startAngle がチャートを 1 度回転しています。radiusFactor と startAngle が最大値に達すると、アニメーション フラグをリセットし、間隔をクリアしてアニメーションを停止します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-animation"
           github-src="charts/pie-chart/animation"
           alt="$Platform$ 円チャートのアニメーション" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 円チャートのスタイル設定

円チャートを作成したら、次に示すように、チャートのスライスの色を変更するなど、スタイルをさらにカスタマイズすることができます。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-styling"
           alt="$Platform$ 円チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## $Platform$ ラジアル円チャート

ラジアル円チャートはラジアル チャートのグループに属し、チャートの中心からデータ ポイントの位置に向かって伸びる円スライスを使用します。このチャート タイプは、複数の一連のデータ ポイントを分類するという概念を採用しており、データ ポイントを水平線に沿って引き伸ばすのではなく、円形の軸に沿ってラップします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart"
           alt="$Platform$ ラジアル円チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース
- [ドーナツ チャート](donut-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)

## API メンバー
以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

- `LegendItemBadgeTemplate`
- `LegendItemTemplate`
- `LegendLabelMemberPath`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`

チャート タイプ       | コントロール名   | API メンバー
-----------------|----------------|------------
円チャート      | `XamPieChart`     | `PieChart`
ラジアル円チャート | `XamDataChart` | `RadialPieSeries`

