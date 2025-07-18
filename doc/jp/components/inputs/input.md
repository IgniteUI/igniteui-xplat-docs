---
title: {Platform} Input | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの {Platform} Input は、ユーザーがデータを入力できるコンポーネントです。{ProductName} を使用してアプリケーションを改善します。
_keywords: {Platform} input, {ProductName}, Infragistics, {Platform} 入力, インフラジスティックス
mentionedTypes: ["Input", "Icon", "Radio"]
_language: ja
---
# {Platform} Input (入力) の概要

{ProductName} Input は、ユーザーがデータを入力できるコンポーネントです。

## {Platform} Input の例

<div class="divider--half"></div>

<!-- React, WebComponents -->

`sample="/inputs/input/overview", height="120", alt="{Platform} Input の例"`



<!-- end:React, WebComponents -->

<!-- Blazor -->

`sample="/inputs/input/binding", height="225", alt="{Platform} Input の例"`



## 依存関係

Input コンポーネントの使用を開始するには、最初にそのモジュールを登録する必要があります。

<!-- Blazor -->


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbInputModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Input` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- WebComponents -->

開始するには、typescript ファイルに `Input` をインポートし、次のように [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) 関数を呼び出してコンポーネントを登録する必要があります。

```ts
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcInputComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Input` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

`Input` コンポーネントをインポートしたら、使用を開始する準備ができているので、最初の Input を追加しましょう。

```html
<igc-input type="email" label="Subscribe" placeholder="john.doe@mail.com"></igc-input>
```

```tsx
<IgrInput type="email" label="Subscribe"></IgrInput>
```

```razor
<IgbInput DisplayType="@InputType.Email" Label="Subscribe" Placeholder="john.doe@mail.com" />
```

## Prefix と Suffix

`prefix` スロットと `suffix` スロットを使用すると、入力のメイン コンテンツの前後に異なるコンテンツを追加できます。次のサンプルでは、テキスト プレフィックスとアイコン サフィックスを使用して新しい Input フィールドを作成します:

`sample="/inputs/input/prefix-suffix", height="120", alt="{Platform} Input Prefix & Suffix の例"`



## ヘルパー テキスト

`helper-text` スロットは、入力の下に配置されたヒントを提供します。Phone Input にヘルパー テキストを追加しましょう:

`sample="/inputs/input/helper-text", height="140", alt="{Platform} Input ヘルパー テキストの例"`



## Input のサイズ設定

ユーザーが `--ig-size` CSS 変数を使用して `Input` のサイズを変更できるようにすることができます。これを行うには、すべてのサイズ値を表示するためのラジオ ボタンをいくつか追加します。このようにして、選択されるたびに、Input のサイズを変更します。

`sample="/inputs/input/size", height="320", alt="{Platform} Input サイズ設定の例"`


上記のサンプルでは、次の属性の使用法を示しています:
- `required` - 入力を必須としてマークするために使用されます。
- `disabled` - 入力を無効にするために使用されます。
- `readonly` - 入力を読み取り専用としてマークするために使用されます。

<!-- WebComponents -->

属性の完全なリストは、`Input` API にあります。

<!-- end: WebComponents -->

## スタイル設定

`Input` コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。次の表に、公開されているすべての CSS パーツを示します:

|名|説明|
|--|--|
| `container` | すべての主要な入力要素を保持するメイン ラッパー。 |
| `input` | ネイティブ入力要素。 |
| `label` | ネイティブ ラベル要素。 |
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |
| `helper-text` | ヘルパー テキスト ラッパー。 |

```scss
igc-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-input::part(label) {
  color: var(--ig-gray-700);
}

igc-input::part(prefix),
igc-input::part(suffix) {
  color: var(--ig-primary-600-contrast);
  background-color: var(--ig-primary-600);
  border-color: var(--ig-secondary-600);
}
```

`sample="/inputs/input/styling", height="150", alt="{Platform} Input のスタイル設定"`

<div class="divider"></div>


## API リファレンス

 - `Icon`
 - `Input`
 - `Radio`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})