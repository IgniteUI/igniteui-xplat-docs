---
title: $Platform$ データ グリッド | リアルタイム データ グリッドとテーブル | アクティブ化 | インフラジスティックス
_description: インフラジスティックスの $ProductName$ Data Table / Data Grid を使用して、グリッドのセルを介したキーボードナビゲーションを可能にするセルのアクティブ化機能をサポートします。$ProductName$ テーブル チュートリアルを是非お試しください!
_keywords: $Platform$ Table, Data Grid, cell activation, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, セルのアクティブ化, インフラジスティックス
mentionedTypes: ['Grid', 'GridActivationMode']
namespace: Infragistics.Controls
_language: ja
---

# $Platform$ グリッド セルのアクティブ化

$ProductName$ Data Table / Data Grid は、グリッドのセルを介したキーボードナビゲーションを可能にするセルアクティベーション機能をサポートします。これは、グリッドの `ActivationMode` プロパティを `Cell` に設定することによってアクティブになります。

## $Platform$ グリッド セルのアクティブ化の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-activation"
           alt="$Platform$ グリッド セルのアクティブ化の例"
           github-src="grids/data-grid/cell-activation">
</code-view>

<div class="divider--half"></div>

## Excel スタイルのナビゲーション

`EnterBehaviorAfterEdit` プロパティは、編集モードで Enter キーが押された後、上、下、左、または右の次のセルに移動するようにグリッドを構成します。それ以外の場合は、グリッドの `EnterBehavior` プロパティを使用して、編集モードではなく、上、下、左、または右に他のセルに移動できます。

## キーボード ナビゲーション

グリッドの `ActivationMode` プロパティを `Cell` に設定すると、データ グリッド内のさまざまなキーボードナビゲーションオプションが有効になります。以下は、現在押下されているセルに対する各キーの押下/組み合わせとそれらが持つ効果についての説明です。

- <b>上矢印キー</b>: 1 つ上のセルに移動します。
- <b>下矢印キー</b>: 1 つ下のセルに移動します。
- <b>左矢印キー</b>: 現在の行でセルを 1 つ左に移動します。
- <b>右矢印キー</b> 現在の行でセルを 1 つ右に移動します。
- <b>Page Up</b>: グリッドを 1 ビューポート ページ上にスクロールします。
- <b>Page Down</b>: グリッドを 1 ビューポート ページ下にスクロールします。
- <b>Tab</b>: アクティブ セルを右の以下のセルに移動するか、その行の最後のセルに達した場合、以下の行の一番左のセルに移動します。
- <b>Shift + Tab</b>: アクティブセルを左の以下のセルに移動するか、またはその行の最初のセルに達した場合、前の行の一番右のセルに移動します。
- <b>Ctrl + 上矢印キー</b>: 列の一番上のセルに移動します。
- <b>Ctrl + 下矢印キー</b>: 列の一番下のセルに移動します。
- <b>Ctrl + 左矢印キー</b>: 列の一番左のセルに移動します。
- <b>Ctrl + 右矢印キー</b>: 列の一番右のセルに移動します。
- <b>Ctrl + Home</b>: グリッド内の左上のセルに移動します。
- <b>Ctrl + End</b>: グリッド内の右下のセルに移動します。
