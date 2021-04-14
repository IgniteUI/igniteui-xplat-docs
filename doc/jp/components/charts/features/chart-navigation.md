---
title: $PlatformShort$  データ チャート | データ可視化ツール | ナビゲーション | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートをナビゲートするには、マウスまたはタッチを使用して左右にパンし、水平および垂直にズームします。$ProductName$ のグラフ ナビゲーション機能について説明します。
_keywords: $PlatformShort$ charts, data chart, navigation, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ナビゲーション, インフラジスティックス
mentionedTypes: ["XamDataChart", "XamCategoryChart", "XamFinancialChart", "ModifierKeys"]
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

同じ API が `CategoryChart` および `FinancialChart` コンポーネントにも適用されることに注意してください。

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

以下のコード スニペットは、チャートで UI ナビゲーションを有効にする方法を示しています。以下の例では、**Shift** キーを押しながらズーム、**Alt** キーを押しながらパンのみ可能です:

同じ API が `CategoryChart` および `FinancialChart` コンポーネントにも適用されることに注意してください。

```razor
<DataChart Width="100%" Height="400px"
    DefaultInteraction="InteractionState.None"
    DragModifier="ModifierKeys.Shift"
    PanModifier="ModifierKeys.Alt"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true">
</DataChart>
```

```html
<igx-data-chart width="100%" height="400px"
    defaultInteraction="None"
    dragModifier="Shift"
    panModifier="Alt"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="true">
</igx-data-chart>
```

```tsx
<IgrDataChart width="100%" height="400px"
    defaultInteraction="None"
    dragModifier="Shift"
    panModifier="Alt"
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}/>
```

```html
<igc-data-chart width="100%" height="400px"
    default-interaction="None"
    drag-modifier="Shift"
    pan-modifier="Alt"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
</igc-data-chart>
```

<!-- ## Chart Navigation with Overview Plus Detail Pane

In the `XamDataChart` control, there is an overlaid control that allows navigation. This control supports a preview of most supported series types as well as all navigation methods described above. This overlay is the overview plus detail pane, and it can be enabled by setting the `overviewPlusDetailPaneVisibility` property.

The following is a summary of the operations a user can carry out with the overview plus detail pane:

- `Zoom a chart incrementally`: Use the mouse wheel or the zoom in/out buttons of the overview plus detail pane.
- `Zoom a chart to a specific level`: Use the zoom slider of the overview plus detail pane.
- `Reset a chart to 100% zoom level`: Use the zoom reset button of the overview plus detail pane.
- `Pan chart in all directions`: Click and drag the window rectangle inside of the preview plot area on the overview plus detail pane.
- `Pan to a specific region of the chart`: Clicking outside of the window rectangle inside of the preview area will move the window rectangle to that area.
- `Change mouse drag interaction in the chart`: Use the cursor button on the overview plus detail pane. This will switch between panning and drag zooming with the mouse.

The following code snippet demonstrates how to enable the overview plus detail pane:

```html
// TODO
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px"
    overviewPlusDetailPaneVisibility="Visible">
</IgrDataChart>
``` -->

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
