---
title: $PlatformShort$ データ グリッド | リアルタイム データ グリッドとテーブル | アクティブ化 | インフラジスティックス
_description: インフラジスティックスの $ProductName$ Data Table / Data Grid を使用して、グリッドのセルを介したキーボードナビゲーションを可能にするセルのアクティブ化機能をサポートします。$ProductName$ テーブル チュートリアルを是非お試しください!
_keywords: $PlatformShort$ Table, Data Grid, cell activation, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, セルのアクティブ化, インフラジスティックス
mentionedTypes: ['Grid', 'GridActivationMode']
_language: ja
---

# $PlatformShort$ グリッド セルのアクティブ化

$ProductName$ Data Table / Data Grid は、グリッドのセルを介したキーボードナビゲーションを可能にするセルアクティベーション機能をサポートします。これは、グリッドの `ActivationMode` プロパティを `Cell` に設定することによってアクティブになります。

## サンプル

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/cell-activation"></sample-button>

<div class="divider--half"></div>

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

## コード スニペット

以下は、$PlatformShort$ データ グリッドでセルのアクティブ化を実装する方法を示しています。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    activationMode="Cell" />
```

```html
<igc-data-grid id="grid"
     height="100%"
     width="100%"
     activation-mode="Cell">
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"
    DataSource="DataSource"          
    ActivationMode="GridActivationMode.Cell" />
```