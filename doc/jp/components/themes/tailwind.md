---
title: {Platform} の Tailwind 統合
_description: Ignite UI のテーマ エンジンのカスタム ユーティリティ クラスと Tailwind CSS を統合する方法について説明します。このガイドでは、セットアップの手順を説明し、ユーティリティ ファーストのアプローチでカラー、タイポグラフィ、シャドウのデザイン トークンを使用する方法について説明します。
_keywords: {ProductName}, Infragistics, Themes, Styling, Tailwind CSS, custom CSS, utility classes, theming engine, typography, shadows, colors, スタイル, テーマ設定, カスタム CSS, ユーティリティ クラス, テーマ設定エンジン, タイポグラフィ, シャドウ, カラー, インフラジスティックス
mentionedTypes: ["ConfigureTheme"]
_language: ja
---

# Tailwind CSS と Ignite UI for WebComponents の統合
Ignite UI for WebComponents は、CSS 変数を通じて完全なテーマ カスタマイズを提供します。このガイドでは、Tailwind CSS をプロジェクトに統合し、`igniteui-theming` パッケージが提供するカスタム ユーティリティ クラスを活用する方法を紹介します。これらのクラスは Ignite UI のデザイン トークンをユーティリティとして公開し、カラー・シャドウ・タイポグラフィの一貫したスタイリングを可能にします。
<br>

## 概要

このガイドでは、**Ignite UI Theming** がすでにインストールされていることを前提としています。そうでない場合は、次を実行します。

```cmd
npm install igniteui-theming
```

## Tailwind のセットアップ

まず、[公式の Tailwind インストール ガイド](https://tailwindcss.com/docs/installation)に従って、選択したビルド ツールまたはフレームワークに応じて Tailwind CSS をインストールします。

Tailwind をセットアップしたら、Tailwind と Ignite UI テーマ設定の両方をグローバル スタイルシートにインポートします。

```css
@import 'tailwindcss';
@import 'igniteui-theming/tailwind/theme';
```

プロジェクトでスタイル設定に `sass` を使用している場合:

```scss
@import "tailwindcss";
@use "igniteui-theming/tailwind/theme";
```

## Ignite UI カスタム ユーティリティ クラスの使用
`igniteui-theming` パッケージには、Ignite UI のデザイン トークンをユーティリティ クラスとして公開する Tailwind のカスタム設定が含まれています。これには以下が含まれます:

- カラーとコントラスト カラー

- エレベーション (シャドウ)

- タイポグラフィ スタイル

それぞれの使い方を見ていきましょう。

### カラー ユーティリティ クラス
当社のカラー ユーティリティ クラスは、各 Ignite UI テーマのトークンを活用しています。これらを HTML に直接適用できます。

<!-- WebComponents -->
```html
<h1 class="bg-primary-500 text-primary-500-contrast">This is a title</h1>
```
<!-- end: WebComponents -->

Tailwind の完全なカラー システムは[こちら](https://tailwindcss.com/docs/color)で確認でき、Ignite UI が提供するクラス名を使って適用できます。
<br>

### シャドウ ユーティリティ クラス

定義済みの[エレベーション レベル](https://jp.infragistics.com/products/ignite-ui-web-components/web-components/components/themes/elevations) (0 ～ 24) のいずれかを使用して深度を追加できます。

<!-- WebComponents -->
```html
<div class="shadow-elevation-8">Elevated container</div>
```
<!-- end: WebComponents -->

Tailwind が提供するすべてのシャドウ関連のユーティリティ クラスは、[こちら](https://tailwindcss.com/docs/box-shadow)で見つけることができます。
<br>

### タイポグラフィ カスタム ユーティリティ スタイル
フォントを適用するには、トップ レベルの要素に `font-ig` クラスを追加します。`text-base` ユーティリティ クラスを使用して基本フォント サイズを定義することもできます。
各タイポグラフィ レベル (例: h1、h2、body-1) ごとにカスタム ユーティリティ クラスを提供しています。以下のように使用してください。

<!-- WebComponents -->
```html
<p class="type-style-h3">This paragraph gets the h3 styles</p>
```
<!-- end: WebComponents -->

各クラスは、[Ignite UI のタイプ スケール](https://jp.infragistics.com/products/ignite-ui-web-components/web-components/components/themes/typography)に応じて、必要なすべてのフォント設定、間隔、サイズを適用します。

## サンプル

以下のサンプルでは、`shadows`、`colors`、`typography` 用のカスタム ユーティリティを含む、Tailwind ユーティリティ クラスのみを使用して構築された 404 ページが表示されます。

`sample="/layouts/tailwind/styling", height="400", alt="{Platform} Tailwind の統合"`

>[!NOTE]
>このサンプルは架空の完全カスタム例であり、Ignite UI コンポーネント ライブラリの一部ではありません。

## まとめ
わずか数ステップの設定で、Tailwind のユーティリティ ファースト アプローチと Ignite UI の堅牢なデザイン システムを組み合わせることができます。この統合により、カラー・エレベーション・タイポグラフィのトークンを直接 HTML で活用し、一貫性のあるテーマ付き UI コンポーネントを迅速に構築できます。