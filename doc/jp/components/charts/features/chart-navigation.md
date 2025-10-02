---
title: {Platform}  データ チャート | データ可視化ツール | ナビゲーション | インフラジスティックス
_description: インフラジスティックスの {Platform} チャートをナビゲートするには、マウスまたはタッチを使用して左右にパンし、水平および垂直にズームします。{ProductName} のグラフ ナビゲーション機能について説明します。
_keywords: {Platform} charts, data chart, navigation, {ProductName}, Infragistics, {Platform} チャート, データ チャート, ナビゲーション, インフラジスティックス
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
_language: ja
---
# {Platform} チャート ナビゲーション

{ProductName} チャートを使用すると、マウス、キーボード、およびタッチを介してインタラクティブなパンやズームが可能になります。

## {Platform} チャート ナビゲーションの例

次の例は、使用可能なすべてのパンやズームのオプションを示しています。ボタンを使用して例を操作したり、ドロップダウンまたはチェックボックスを使用して目的のオプションを選択したりできます。

`sample="/charts/data-chart/chart-navigation", height="600", alt="{Platform} ナビゲーションの例"`



<div class="divider--half"></div>

このサンプルが気に入りましたか?完全な {Platform} ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/{ProductSpinal}/download">無料でダウンロードできます。</a>

## ユーザー インタラクションによるチャート ナビゲーション

ズームがデフォルトでオンになっているかどうかは、使用しているチャートによって異なります。`CategoryChart` を使用している場合、デフォルトでオンになっていますが、`XamDataChart` ではオフです。+UI でナビゲーションを有効または無効にするには、ズームを無効にする方向に応じて、チャートの `IsHorizontalZoomEnabled` プロパティおよび/または `IsVerticalZoomEnabled` プロパティを設定する必要があります。

またマウスやタッチでズームまたはパンニングできます。チャートの `DefaultInteraction` プロパティは、マウスクリック イベントやタッチ イベントで何が起こるかを決定します。このプロパティはデフォルトで `DragZoom` に設定されており、ズームを有効に設定すると、クリックしてドラッグした際にプロット領域の上に四角形のプレビューが配置され、グラフのズーム領域になります。この `DefaultInteraction` プロパティは、パンニングを許可する場合は `DragPan`、これらの操作を禁止する場合は `None` に設定することもできます。

## タッチ、マウスとキーボードによるチャート ナビゲーション

{Platform} データ チャートのナビゲーションは、タッチ、マウスまたはキーボードのいずれかを使用して発生します。以下の操作は、デフォルトで以下のタッチ、マウスまたはキーボード操作を使用して呼び出すことができます。

- **パン**: キーボードの矢印キーを使用するか、Shift キーを押したまま、マウスでクリックしてドラッグするか、タッチで指を押して移動します。
- **ズームイン**: キーボードの <kbd>PAGE UP</kbd> キーを使用するか、マウスホイールを上に回転させるか、ピンチしてタッチでズームインします。
- **ズームアウト**: キーボードの <kbd>PAGE DOWN</kbd> キーを使用するか、マウスホイールを下に回転させるか、ピンチしてタッチでズームアウトします。
- **チャート プロット領域に合わせる**: キーボードのホームキーを使用します。これに対するマウスまたはタッチ操作はありません。
- **領域ズーム**: `DefaultInteraction` プロパティをデフォルトの `DragZoom` に設定して、プロット領域内でマウスをクリックしてドラッグします。

ズーム操作とパン操作は、それぞれ `DragModifier` プロパティと `PanModifier` プロパティを設定し、修飾キーを使用して有効にすることもできます。これらのプロパティは以下の修飾キーに設定することができ、押すと対応する操作が実行されます。

| 修飾値 | 対応するキー |
| ---------------|------------------ |
| `Shift`        | <kbd>SHIFT</kbd> |
| `Control`      | <kbd>CTRL</kbd> |
| `Windows`      | <kbd>WIN</kbd> |
| `Apple`        | <kbd>APPLE</kbd> |
| `None`         | なし |

## スクロールバーを使用したチャート ナビゲーション

チャートは、`VerticalViewScrollbarMode` プロパティと `HorizontalViewScrollbarMode` プロパティを有効にすることでスクロールできます。

これらは、次のオプションに構成できます:

- `Persistent` - チャートがズームインされている限り、スクロールバーは常に表示されたままになり、完全にズームアウトされるとフェードアウトします。
- `Fading` - スクロールバーは使用後に消え、マウスがその位置に近づくと再び表示されます。
- `FadeToLine` - ズームを使用していないときは、スクロールバーが細い線に縮小されます。
- `None` - 既定値で、スクロールバーは表示されません。

次の例は、スクロールバーを有効にする方法を示しています。

`sample="/charts/financial-chart/scrollbars", height="600", alt="{Platform} ナビゲーションの例"`



<div class="divider--half"></div>

## コードによるチャート ナビゲーション

> [!Note]
> チャートのコード ナビゲーションは、`XamDataChart` コントロールにのみ使用できます。

{Platform} データ チャートは、チャートでズームまたはパン操作が行われるたびに更新されるいくつかのナビゲーション プロパティを提供します。各プロパティは、チャートでズームやパンニングするためにコードで設定できます。以下は、これらのプロパティの一覧です。

- `WindowPositionHorizontal`: コンテンツ ビュー長方形の X 部分を表す数値は、チャートで表示されます。
- `WindowPositionVertical`: 数値は、チャートに表示されるコンテンツビュー四角形のの Y 部分を表します。
- `WindowRect`: 長方形を表す `Rect` オブジェクトは、現在ビューにあるチャート部分を表します。例えば、`WindowRect` の "0, 0, 1, 1" はチャート全体になります。
- `WindowScaleHorizontal`: チャートで表示されるコンテンツ ビュー長方形の幅部分を表す数値。
- `WindowScaleVertical`: チャートで表示されるコンテンツ ビュー長方形の高さ部分を表す数値。

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート ツールチップ](chart-tooltips.md)
- [チャート トレンドライン](chart-trendlines.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `DefaultInteraction`
- `DragModifier`
- `IsHorizontalZoomEnabled`
- `IsVerticalZoomEnabled`
- `PanModifier`
- `CategoryChart`
- `XamDataChart`
- `FinancialChart`
