---
title: $PlatformShort$  データ チャート | データ可視化ツール | ナビゲーション | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートをナビゲートするには、マウスまたはタッチを使用して左右にパンし、水平および垂直にズームします。$ProductName$ のグラフ ナビゲーション機能について説明します。
_keywords: $PlatformShort$ charts, data chart, navigation, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ナビゲーション, インフラジスティックス
mentionedTypes: ["XamDataChart", "XamCategoryChart", "XamFinancialChart", "ModifierKeys"]
_language: ja
---
# $PlatformShort$ チャート ナビゲーション

The $PlatformName$ chart component allows for interactive panning and zooming via the mouse, keyboard and touch.  

## $PlatformShort$ チャート ナビゲーションの例

The following example shows all of the available panning and zooming options that are available. You can interact with the example by using the buttons, or select your desired options using the dropdowns or checkboxes.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation"
           alt="$PlatformShort$ ナビゲーションの例"
           github-src="charts/data-chart/chart-navigation">
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか?完全な $PlatformShort$ ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">無料でダウンロードできます。</a>

## ユーザー インタラクションによるチャート ナビゲーション

Zooming is on by default on the chart. In order to disable navigation in the UI, you need to set either the `IsHorizontalZoomEnabled` and/or the `IsVerticalZoomEnabled` properties of the chart to false, depending on the direction that you wish to disable zooming.

またマウスやタッチでズームまたはパンニングできます。チャートの `DefaultInteraction` プロパティは、マウスクリック イベントやタッチ イベントで何が起こるかを決定します。このプロパティはデフォルトで `DragZoom` に設定されており、ズームを有効に設定すると、クリックしてドラッグした際にプロット領域の上に四角形のプレビューが配置され、グラフのズーム領域になります。この `DefaultInteraction` プロパティは、パンニングを許可する場合は `DragPan`、これらの操作を禁止する場合は `None` に設定することもできます。

## タッチ、マウスとキーボードによるチャート ナビゲーション

$PlatformShort$ データ チャートのナビゲーションは、タッチ、マウスまたはキーボードのいずれかを使用して発生します。以下の操作は、デフォルトで以下のタッチ、マウスまたはキーボード操作を使用して呼び出すことができます。

- **Panning**: Using arrow keys on the keyboard or holding the Shift key, clicking and dragging with the mouse or pressing and moving your finger via touch.
- **Zoom In**: Using the PageUp key on the keyboard, rolling the mouse wheel up, or pinching to zoom in via touch.
- **Zoom Out**: Using the PageDown key on the keyboard, rolling the mouse wheel down, or pinching to zoom out via touch.
- **チャート プロット領域に合わせる**: Using the Home key on the keyboard. There is no mouse or touch operation for this. 
- **領域ズーム**: Click and drag the mouse within the plot area with the `DefaultInteraction` property set to its default - `DragZoom`.

ズーム操作とパン操作は、それぞれ `DragModifier` プロパティと `PanModifier` プロパティを設定し、修飾キーを使用して有効にすることもできます。これらのプロパティは以下の修飾キーに設定することができ、押すと対応する操作が実行されます。

- Shift
- Alt
- Control
- Windows キー
- Apple キー
- None

## コードによるチャート ナビゲーション

> NOTE: Code navigation of the chart can only be used for the `XamDataChart` control.

$PlatformShort$ データ チャートは、チャートでズームまたはパン操作が行われるたびに更新されるいくつかのナビゲーション プロパティを提供します。各プロパティは、チャートでズームやパンニングするためにコードで設定できます。以下は、これらのプロパティの一覧です。

- `WindowPositionHorizontal`: コンテンツ ビュー長方形の X 部分を表す数値は、チャートで表示されます。
- `WindowPositionVertical`: 数値は、チャートに表示されるコンテンツビュー四角形のの Y 部分を表します。
- `WindowRect`: 長方形を表す `Rect` オブジェクトは、現在ビューにあるチャート部分を表します。例えば、`WindowRect` の "0, 0, 1, 1" はチャート全体になります。
- `WindowScaleHorizontal`: チャートで表示されるコンテンツ ビュー長方形の幅部分を表す数値。
- `WindowScaleVertical`: チャートで表示されるコンテンツ ビュー長方形の高さ部分を表す数値。

以下のコード スニペットは、$PlatformShort$ データ チャートのビューをプログラムで変更する方法を示しています。以下では、$PlatformShort$ データ チャートを表す変数名 chart があると仮定します。

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
- `XamCategoryChart`
- `XamDataChart`
- `XamFinancialChart`
