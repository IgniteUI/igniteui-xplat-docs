---
title: {Platform} データ グリッド | リアルタイム データ グリッドとテーブル | アクティブ化 | インフラジスティックス
_description: インフラジスティックスの {ProductName} Data Table / Data Grid を使用して、グリッドのセルを介したキーボードナビゲーションを可能にするセルのアクティブ化機能をサポートします。{ProductName} テーブル チュートリアルを是非お試しください!
_keywords: {Platform} Table, Data Grid, cell activation, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, セルのアクティブ化, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.GridActivationMode']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド セルのアクティブ化

{ProductName} Data Table / Data Grid は、グリッドのセルを介したキーボードナビゲーションを可能にするセルアクティベーション機能をサポートします。これは、グリッドの `ActivationMode` プロパティを `Cell` に設定することによってアクティブになります。

## {Platform} グリッド セルのアクティブ化の例


`sample="/grids/data-grid/cell-activation", height="600", alt="{Platform} グリッド セルのアクティブ化の例"`



<div class="divider--half"></div>

## Excel スタイルのナビゲーション

`EnterBehaviorAfterEdit` プロパティは、編集モードで Enter キーが押された後、上、下、左、または右の次のセルに移動するようにグリッドを構成します。それ以外の場合は、グリッドの `EnterBehavior` プロパティを使用して、編集モードではなく、上、下、左、または右に他のセルに移動できます。

## キーボード ナビゲーション

グリッドの `ActivationMode` プロパティを `Cell` に設定すると、データ グリッド内のさまざまなキーボードナビゲーションオプションが有効になります。以下は、現在押下されているセルに対する各キーの押下/組み合わせとそれらが持つ効果についての説明です。

- <kbd>↑</kbd>: 1 つ上のセルに移動します。
- <kbd>↓</kbd>: 1 つ下のセルに移動します。
- <kbd>←</kbd>: 現在の行でセルを 1 つ左に移動します。
- <kbd>→</kbd> 現在の行でセルを 1 つ右に移動します。
- <kbd>Page Up</kbd>: グリッドを 1 ビューポート ページ上にスクロールします。
- <kbd>Page Down</kbd>: グリッドを 1 ビューポート ページ下にスクロールします。
- <kbd>Tab</kbd>: アクティブ セルを右の以下のセルに移動するか、その行の最後のセルに達した場合、以下の行の一番左のセルに移動します。
- <kbd>Shift</kbd> + <kbd>Tab</kbd>: アクティブセルを左の以下のセルに移動するか、またはその行の最初のセルに達した場合、前の行の一番右のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>↑</kbd>: 列の一番上のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>↓</kbd>: 列の一番下のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>←</kbd>: 列の一番左のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>→</kbd>: 列の一番右のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Home</kbd>: グリッド内の左上のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>End</kbd>: グリッド内の右下のセルに移動します。

## API リファレンス

 - `ActivationMode`
 - `Cell`