---
title: $PlatformShort$  データ チャート | データ可視化ツール | ナビゲーション | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートをナビゲートするには、マウスまたはタッチを使用して左右にパンし、水平および垂直にズームします。$ProductName$ のグラフ ナビゲーション機能について説明します。
_keywords: $PlatformShort$ charts, data chart, navigation, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ナビゲーション, インフラジスティックス
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
_language: ja
---
# $PlatformShort$ チャート ナビゲーション

$PlatformName$ チャート コンポーネントを使用すると、マウス、キーボード、およびタッチを介してインタラクティブなパンやズームが可能になります。  

## $PlatformShort$ チャート ナビゲーションの例

次の例は、使用可能なすべてのパンやズームのオプションを示しています。ボタンを使用して例を操作したり、ドロップダウンまたはチェックボックスを使用して目的のオプションを選択したりできます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation"
           alt="$PlatformShort$ ナビゲーションの例"
           github-src="charts/data-chart/chart-navigation">
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか?完全な $PlatformShort$ ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">無料でダウンロードできます。</a>

## ユーザー インタラクションによるチャート ナビゲーション

チャートでは、ズームはデフォルトでオンになっています。UI でナビゲーションを無効にするには、ズームを無効にする方向に応じて、チャートの `IsHorizontalZoomEnabled` プロパティまたは `IsVerticalZoomEnabled` プロパティのいずれかを false に設定する必要があります。

またマウスやタッチでズームまたはパンニングできます。チャートの `DefaultInteraction` プロパティは、マウスクリック イベントやタッチ イベントで何が起こるかを決定します。このプロパティはデフォルトで `DragZoom` に設定されており、ズームを有効に設定すると、クリックしてドラッグした際にプロット領域の上に四角形のプレビューが配置され、グラフのズーム領域になります。この `DefaultInteraction` プロパティは、パンニングを許可する場合は `DragPan`、これらの操作を禁止する場合は `None` に設定することもできます。

## タッチ、マウスとキーボードによるチャート ナビゲーション

$PlatformShort$ データ チャートのナビゲーションは、タッチ、マウスまたはキーボードのいずれかを使用して発生します。以下の操作は、デフォルトで以下のタッチ、マウスまたはキーボード操作を使用して呼び出すことができます。

- **パン**: キーボードの矢印キーを使用するか、Shift キーを押したまま、マウスでクリックしてドラッグするか、タッチで指を押して移動します。
-**ズームイン**: キーボードの PageUp キーを使用するか、マウスホイールを上に回転させるか、ピンチしてタッチでズームインします。
-**ズームアウト**: キーボードの PageDown キーを使用するか、マウスホイールを下に回転させるか、ピンチしてタッチでズームアウトします。 
- **チャート プロット領域に合わせる**: キーボードのホームキーを使用します。これに対するマウスまたはタッチ操作はありません。 
- **領域ズーム**: `DefaultInteraction` プロパティをデフォルトの `DragZoom` に設定して、プロット領域内でマウスをクリックしてドラッグします。

ズーム操作とパン操作は、それぞれ `DragModifier` プロパティと `PanModifier` プロパティを設定し、修飾キーを使用して有効にすることもできます。これらのプロパティは以下の修飾キーに設定することができ、押すと対応する操作が実行されます。

- Shift
- Alt
- Control
- Windows キー
- Apple キー
- None

## コードによるチャート ナビゲーション

> 注: チャートのコード ナビゲーションは、`XamDataChart` コントロールにのみ使用できます。

$PlatformShort$ データ チャートは、チャートでズームまたはパン操作が行われるたびに更新されるいくつかのナビゲーション プロパティを提供します。各プロパティは、チャートでズームやパンニングするためにコードで設定できます。以下は、これらのプロパティの一覧です。

- `WindowPositionHorizontal`: コンテンツ ビュー長方形の X 部分を表す数値は、チャートで表示されます。
- `WindowPositionVertical`: 数値は、チャートに表示されるコンテンツビュー四角形のの Y 部分を表します。
- `WindowRect`: 長方形を表す `Rect` オブジェクトは、現在ビューにあるチャート部分を表します。例えば、`WindowRect` の "0, 0, 1, 1" はチャート全体になります。
- `WindowScaleHorizontal`: チャートで表示されるコンテンツ ビュー長方形の幅部分を表す数値。
- `WindowScaleVertical`: チャートで表示されるコンテンツ ビュー長方形の高さ部分を表す数値。

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート ツールチップ](chart-tooltips.md)
- [チャート トレンドライン](chart-trendlines.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `DefaultInteraction`
- `DragModifier`
- `IsHorizontalZoomEnabled`
- `IsVerticalZoomEnabled`
- `PanModifier`
- `CategoryChart`
- `XamDataChart`
- `FinancialChart`
