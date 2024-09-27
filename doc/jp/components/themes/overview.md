---
title: {Platform} スタイル設定およびテーマ | {Platform} テーマ化 | テーマの切り替え | インフラジスティックス
_description: インフラジスティックスの {Platform} コンポーネントを使用して、アプリを作成し、世界最速の仮想化されたリアルタイムの {Platform} データ グリッドとストリーミングのファイナンシャルおよびビジネスと チャートを使用して、データの視覚化を改善します。
_keywords: {ProductName}, インフラジスティックス, テーマ, スタイル設定
mentionedTypes: ["ConfigureTheme"]
_language: ja
---

# {ProductName} のテーマ

{ProductName} には、Bootstrap、Material、Fluent、Indigo の 4 つの異なるテーマが付属しています。すべてのコンポーネント テーマはコンポーネントに組み込まれていますが、パレット、タイポグラフィ、およびその他のグローバル構成を機能させるには、グローバル スタイル ファイルが必要です。

## テーマの読み込み

テーマを有効にするには、テーマ ファイルを読み込む必要があります。プロジェクトの構成に応じて、`インポート`または`リンク`することができます。

バンドルされているすべてのテーマとそのパスの完全なリストは次のとおりです:

<!-- React -->
| 名前        | バリアント | 場所                                          |
| ----------- | ------- | ------------------------------------------------- |
| Bootstrap   | ライト   | igniteui-react-grids/grids/themes/light/bootstrap.css |
| Material    | ライト   | igniteui-react-grids/grids/themes/light/material.css  |
| Fluent      | ライト   | igniteui-react-grids/grids/themes/light/fluent.css    |
| Indigo      | ライト   | igniteui-react-grids/grids/themes/light/indigo.css    |
| Bootstrap   | ダーク    | igniteui-react-grids/grids/themes/dark/bootstrap.css  |
| Material    | ダーク    | igniteui-react-grids/grids/themes/dark/material.css   |
| Fluent      | ダーク    | igniteui-react-grids/grids/themes/dark/fluent.css     |
| Indigo      | ダーク    | igniteui-react-grids/grids/themes/dark/indigo.css     |
<!-- end: React -->


<!-- WebComponents -->
| 名前        | バリアント | 場所                                        |
| ----------- | ------- | ------------------------------------------------- |
| Bootstrap   | ライト   | igniteui-webcomponents/themes/light/bootstrap.css |
| Material    | ライト   | igniteui-webcomponents/themes/light/material.css  |
| Fluent      | ライト   | igniteui-webcomponents/themes/light/fluent.css    |
| Indigo      | ライト   | igniteui-webcomponents/themes/light/indigo.css    |
| Bootstrap   | ダーク    | igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material    | ダーク    | igniteui-webcomponents/themes/dark/material.css   |
| Fluent      | ダーク    | igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo      | ダーク    | igniteui-webcomponents/themes/dark/indigo.css     |

## ランタイム テーマの切り替え

> [!Note]
ランタイムにテーマを変更するには、上の表のグローバル スタイルシートも置き換える必要があります。

{ProductName} を使用すると、ライブラリによってエクスポートされた `ConfigureTheme` 関数を使用して、実行時にコンポーネントのテーマを切り替えることができます。

それを呼び出して、4 つの有効なテーマ (bootstrap、material、fluent、または indigo) のいずれかを文字列として渡すと、読み込まれたコンポーネントのスタイルが変更されます。

```ts
import { configureTheme } from "igniteui-webcomponents";

// Sets material as the theme to be used by all components
configureTheme("material");
```

> [!Note]
これは、内部スタイルを目的のテーマに切り替えるようにコンポーネントに指示するだけで、グローバル テーマ ファイルも上記のファイルのいずれかに切り替える必要があります。

<!-- end: WebComponents -->

## API リファレンス

 - `ConfigureTheme`