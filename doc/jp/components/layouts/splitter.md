---
title: {Platform} スプリッター コンポーネント | レイアウト コントロール | Infragistics
_description: {ProductName} スプリッター コンポーネントを使用して、水平または垂直レイアウトでサイズ変更可能な 2 つのペインを作成し、折りたたみ/展開の動作、キーボード サポート、およびネストされた分割ビューを実現します。
_keywords: スプリッター, 分割ペイン, サイズ変更可能なペイン, Web Components スプリッター, {Platform} スプリッター, {ProductName}
_language: ja
_license: MIT
mentionedTypes: ["Splitter"]
---

# {Platform} スプリッターの概要

{ProductName} スプリッターは、コンテンツを `start` と `end` の 2 つの領域に分割する、サイズ変更可能な分割ペイン レイアウトを提供します。ユーザーはスプリッター バーをドラッグしたり、キーボード ショートカットを使用したり、組み込みコントロールでペインを折りたたんだり展開したりできます。また、スプリッターをネストして複雑なダッシュボード スタイルのレイアウトを構築することもできます。

## {Platform} スプリッターの例

`sample="/layouts/splitter/base", height="520", alt="{Platform} Splitter Example"`

<div class="divider--half"></div>

## 使用方法

まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`Splitter` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcSplitterComponent } from 'igniteui-webcomponents';

defineComponents(IgcSplitterComponent);
```

{ProductName} の概要については、[**作業の開始**](../general-getting-started.md) トピックを参照してください。

`start` スロットと `end` スロットを使用してペイン コンテンツを配置します:

```html
<igc-splitter style="height: 400px;">
  <div slot="start">Start pane content</div>
  <div slot="end">End pane content</div>
</igc-splitter>
```

### 方向

`orientation` プロパティを設定してペインの方向を制御します:

- `horizontal` (デフォルト): start ペインと end ペインが左右に表示されます。
- `vertical`: start ペインと end ペインが上下に表示されます。

```html
<igc-splitter orientation="vertical" style="height: 400px;">
  <div slot="start">Top pane</div>
  <div slot="end">Bottom pane</div>
</igc-splitter>
```

### ペインのサイズと制約

サイズ プロパティを使用して、初期ペイン サイズと制約付きペイン サイズを設定します:

- `start-size`、`end-size`
- `start-min-size`、`end-min-size`
- `start-max-size`、`end-max-size`

値には `px` や `%` などの CSS 長さの値を指定できます。

```html
<igc-splitter
  start-size="35%"
  end-size="65%"
  start-min-size="200px"
  end-min-size="180px"
  style="height: 420px;"
>
  <div slot="start">Navigation</div>
  <div slot="end">Main content</div>
</igc-splitter>
```

### 折りたたみとサイズ変更

以下のプロパティを使用してインタラクションを制御します:

- `disable-resize`: ペインのサイズ変更を無効にします。
- `disable-collapse`: ペインの折りたたみを無効にします。
- `hide-drag-handle`: ドラッグ ハンドルを非表示にします。
- `hide-collapse-buttons`: 折りたたみボタンと展開ボタンを非表示にします。

ペインをプログラムで折りたたんだり展開したりすることもできます:

```ts
const splitter = document.querySelector('igc-splitter') as IgcSplitterComponent;

splitter.toggle('start'); // collapse start pane
splitter.toggle('start'); // expand start pane
```

### ネストされたスプリッター

スプリッターをネストして、複数の領域のレイアウトを作成できます。

`sample="/layouts/splitter/nested", height="520", alt="{Platform} Nested Splitter Example"`

## イベント

スプリッターは、サイズ変更操作中に次のイベントを発行します:

- `igcResizeStart`: サイズ変更の開始時に 1 回発行されます。
- `igcResizing`: サイズ変更中に継続的に発行されます。
- `igcResizeEnd`: サイズ変更の終了時に 1 回発行されます。

イベントの詳細には、進行中のイベントと終了イベントの現在の `startPanelSize`、`endPanelSize`、および `delta` が含まれます。

```ts
const splitter = document.querySelector('igc-splitter');

splitter?.addEventListener('igcResizeEnd', (event: CustomEvent) => {
  console.log(event.detail.startPanelSize, event.detail.endPanelSize, event.detail.delta);
});
```

## キーボード ナビゲーション

スプリッター バーにフォーカスがある場合:

| キー | 説明 |
| ---- | ----------- |
| <kbd>←</kbd> / <kbd>→</kbd> | 水平方向のペインのサイズを変更します |
| <kbd>↑</kbd> / <kbd>↓</kbd> | 垂直方向のペインのサイズを変更します |
| <kbd>Home</kbd> | start ペインを最小サイズにスナップします |
| <kbd>End</kbd> | start ペインを最大サイズにスナップします |
| <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>↑</kbd> | start ペインを折りたたむか展開します |
| <kbd>Ctrl</kbd> + <kbd>→</kbd> / <kbd>↓</kbd> | end ペインを折りたたむか展開します |

## スタイル設定

`Splitter` コンポーネントは、スタイル設定のための CSS パーツを公開しています:

| 名前 | 説明 |
| ---- | ----------- |
| `splitter-bar` | ペイン間のドラッグ可能なセパレーター |
| `drag-handle` | スプリッター バーのドラッグ ハンドル要素 |
| `start-pane` | start ペインのコンテナー |
| `end-pane` | end ペインのコンテナー |
| `start-collapse-btn` | start ペインを折りたたむボタン |
| `end-collapse-btn` | end ペインを折りたたむボタン |
| `start-expand-btn` | start ペインを展開するボタン |
| `end-expand-btn` | end ペインを展開するボタン |

また、次のテーマ CSS 変数もサポートしています:

- `--bar-color`
- `--handle-color`
- `--expander-color`
- `--bar-color-active`
- `--handle-color-active`
- `--expander-color-active`
- `--focus-color`
- `--size`

```css
igc-splitter {
  --bar-color: #011627;
  --handle-color: #ecaa53;
  --expander-color: #ecaa53;
  --bar-color-active: #011627;
  --handle-color-active: #ecaa53;
  --expander-color-active: #ecaa53;
  --focus-color: #ecaa53;
}
```

`sample="/layouts/splitter/styling", height="520", alt="{Platform} Splitter Styling Example"`

## API リファレンス

- `Splitter`
- [`スタイル設定とテーマ`](../themes/overview.md)

## その他のリソース

- [{ProductName} **フォーラム**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
