---
title: {Platform} Text Area (テキスト エリア) | データ可視化ツール | インフラジスティックス
_description: Infragistics の {Platform} テキスト エリアは、ユーザーが大量の自由形式のテキストを入力できるコンポーネントです。
_keywords: {ProductName}, UI controls, {Platform} widgets, Web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Input, {Platform} Textarea components, {Platform} Textarea controls, {ProductName}, UI コントロール, {Platform} ウィジェット, Web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Input, {Platform} Textarea コンポーネント, {Platform} Textarea コントロール
_license: MIT
mentionedTypes: ["Input", "Icon", "Textarea", "Toast"]
_language: ja
---
# {Platform} Text Area (テキスト エリア) の概要

{ProductName} テキスト エリアは、複数行のプレーン テキスト編集コントロールを表します。レビュー フォームやフィードバック フォームへのコメントなど、ユーザーがかなりの量の自由形式のテキストを入力できるようにする場合に便利です。

## {Platform} テキスト エリアの例

<div class="divider--half"></div>

<!-- React, WebComponents, Blazor -->

`sample="/inputs/textarea/overview", height="150", alt="{Platform} テキスト エリアの例"`

<!-- end:React, WebComponents, Blazor -->

## 依存関係

<!-- Blazor -->

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTextareaModule));
```

スタイルを `Textarea` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->
<!-- WebComponents -->

開始するには、typescript ファイルに `Textarea` をインポートし、次のように [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) 関数を呼び出してコンポーネントを登録する必要があります。

```ts
import { defineComponents, IgcTextareaComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTextareaComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Textarea` と必要な CSS をインポートする必要があります:

```tsx
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

`Textarea` コンポーネントをインポートしたら、使用を開始する準備ができているので、最初の Text Area を追加しましょう。

```html
<igc-textarea rows="5" label="Tell us your story:">It was a dark and stormy night...</igc-textarea>
```

```tsx
<IgrTextarea rows="5" label="Tell us your story:"><span>It was a dark and stormy night...</span></IgrTextarea>
```

```razor
<IgbTextarea Rows="5" Label="Tell us your story:">It was a dark and stormy night...</IgbTextarea>
```

## プレフィックス、サフィックス、ヘルパー テキスト

`prefix` スロットと `suffix` スロットを使用すると、テキスト エリアのメイン コンテンツの前後に異なるコンテンツを追加できます。`helper-text` スロットは、テキスト エリアの下に配置されたヒントを提供します。次のサンプルでは、​​テキスト プレフィックス、アイコン サフィックス、およびヒントとしてヘルパー テキストを含む新しいテキスト エリアフィールドを作成します。

`sample="/inputs/textarea/slots", height="160", alt="{Platform} テキスト エリアのプレフィックスとサフィックスの例"`

## テキスト エリアのサイズ変更

`Textarea` には 3 つの異なるサイズ変更オプションがあります。`none` に設定すると、テキスト エリアのサイズは変更されず、スクロール バーを使用してオーバーフロー テキストが表示されます。`vertical` (デフォルトのオプション) に設定すると、テキスト エリアは垂直方向にサイズ変更できます。`auto` に設定すると、テキスト エリアにすべてのユーザー入力が一度に表示されます。オーバーフローしたテキストは新しい行に折り返され、テキスト エリアが自動的に拡張されます。

`sample="/inputs/textarea/resize", height="450", alt="{Platform} テキスト エリアのサイズ変更の例"`

<!-- WebComponents -->

テキスト エリアの属性の完全なリストは `Textarea` API にあります。

<!-- end: WebComponents -->

## フォームの統合

以下のサンプルは、`Textarea` をフォームに統合する方法を示しています。

`sample="/inputs/textarea/form-integration", height="320", alt="{Platform} テキスト エリアのフォームの統合の例"`

## スタイル設定

`Textarea` コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。次の表に、公開されているすべての CSS パーツを示します:

|名前|説明|
|--|--|
| `container` | すべての主要な入力要素を保持するメイン ラッパー。 |
| `input` | ネイティブ input 要素。 |
| `label` | ネイティブ label 要素。 |
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |
| `helper-text` | ヘルパー テキスト ラッパー。 |

```css
igc-textarea::part(input) {
  background-color: var(--ig-info-100);
  border-color: var(--ig-primary-400);
}

igc-textarea::part(label) {
  color: var(--ig-gray-800);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
  color: var(--ig-primary-500-contrast);
  border-color: var(--ig-primary-500);
  background-color: var(--ig-primary-500);
}
```

`sample="/inputs/textarea/styling", height="160", alt="{Platform} テキスト エリアのスタイル設定"`

<div class="divider"></div>

## API リファレンス

- `Icon`
- `Textarea`
- `Toast`
- [スタイル設定 & テーマ](../themes/overview.md)

## その他のリソース

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})