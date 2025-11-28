---
title: {Platform} {GridLiteTitle} テーマ設定 | {ProductName} | MIT ライセンス
_description: {ProductName} で {GridLiteTitle} のスタイル設定は、容易かつ迅速に行えます。デモと例をお試しください。オープンソース コンポーネントをお試しになり、次のアプリを構築してください。
_keywords: styling, theming, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, スタイル設定, テーマ設定, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# スタイルとテーマ

{GridLiteTitle} には、Bootstrap、Material、Fluent、Indigo の 4 つのテーマが用意されています。グリッドおよび UI コンポーネントにはテーマが組み込まれていますが、パレット、タイポグラフィ、その他のグローバル設定にはグローバル スタイルシートが必要です。

## 基本テーマの読み込み

プロジェクトのタイプ、セットアップ、ビルド構成に応じて、以下のいずれかのファイルを組み込む方法が異なります。フレームワーク/ビルドツールを使用している場合は、外部スタイルを出力バンドルに追加する方法についてドキュメントを参照してください。

原則として、`themes` フォルダーをアセット ディレクトリにコピーし、index.html からテーマをリンクするだけで構いません。

```html
<link rel="stylesheet" href="./assets/themes/light/bootstrap.css"
```

| テーマ     | バリアント | パス                                                           |
| --------- | ------- | -------------------------------------------------------------- |
| Bootstrap | Light   | node_modules/igniteui-webcomponents/themes/light/bootstrap.css |
| Bootstrap | Dark    | node_modules/igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material  | Light   | node_modules/igniteui-webcomponents/themes/light/material.css  |
| Material  | Dark    | node_modules/igniteui-webcomponents/themes/dark/material.css   |
| Fluent    | Light   | node_modules/igniteui-webcomponents/themes/light/fluent.css    |
| Fluent    | Dark    | node_modules/igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo    | Light   | node_modules/igniteui-webcomponents/themes/light/indigo.css    |
| Indigo    | Dark    | node_modules/igniteui-webcomponents/themes/dark/indigo.css     |

以下のサンプルでは、すべてのデフォルトの基本テーマをプレビューできます。

`sample="/{GridLiteSample}/styling-config-themes", height="600", alt="{Platform} {GridLiteTitle} スタイル設定テーマ"`

## カスタム テーマの作成

{GridLiteTitle} パッケージに付属するデフォルト テーマに加えて、別の CSS カスタム プロパティ セットを使用することで、データ グリッドの外観と操作感をさらにカスタマイズできます。

詳細については、[テーマ設定](../grids/theming-grid.md)のトピックを参照してください。

```css
.grid-sample {
  --header-background: #494949;
  --header-text-color: #f2c43c;
  --cell-active-border-color: #f2c43c;
  --row-hover-background: #707070;
  --row-hover-text-color: #f2c43c;
}
```

```razor
 <IgbGridLite class="grid-lite-sample" />
```

以下は、上記のカスタム テーマの例です。

`sample="/{GridLiteSample}/styling-custom-theme", height="600", alt="{Platform} {GridLiteTitle} スタイル設定のカスタム テーマ"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`
-->

## その他のリソース

- [列の構成](column-configuration.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})