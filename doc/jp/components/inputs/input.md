---
title: $Platform$ Input | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $Platform$ Input は、ユーザーがデータを入力できるコンポーネントです。Ignite UI for $Platform$ を使用してアプリケーションを改善します。
_keywords: $Platform$ input, $ProductName$, Infragistics, $Platform$ 入力, インフラジスティックス
mentionedTypes: ['Input']
_language: ja
---
# $Platform$ Input の概要

$ProductName$ Input は、ユーザーがデータを入力できるコンポーネントです。

## $Platform$ Input の例

<div class="divider--half"></div>

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-overview"
           alt="$Platform$ Input の例"
           github-src="inputs/input/overview">
</code-view>

## 依存関係

<!-- Blazor -->

Input コンポーネントの使用を開始するには、最初にそのモジュールを登録する必要があります。

```razor
IgbInputModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Input` コンポーネントに適用する必要があります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **BlazorServer** プロジェクトの **Pages/_Host.cshtml**フ ァイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

開始するには、typescript ファイルに `Input` をインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出してコンポーネントを登録する必要があります。

```ts
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);
```

<!-- end: WebComponents -->

`Input` コンポーネントをインポートしたら、使用を開始する準備ができているので、最初の Input を追加しましょう。

```html
<igc-input type="email" label="Subscribe" placeholder="john.doe@mail.com"></igc-input>
```

```razor
<IgbInput DisplayType="@InputType.Email" Label="Subscribe" Placeholder="john.doe@mail.com" />
```

## Prefix と Suffix

`prefix` スロットと `suffix` スロットを使用すると、入力のメイン コンテンツの前後に異なるコンテンツを追加できます。次のサンプルでは、テキスト プレフィックスとアイコン サフィックスを使用して新しい Input フィールドを作成します:

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-prefix-suffix"
           alt="$Platform$ Input Prefix & Suffix の例"
           github-src="inputs/input/prefix-suffix">
</code-view>

## ヘルパー テキスト

`helper-text` スロットは、入力の下に配置されたヒントを提供します。Phone Input にヘルパー テキストを追加しましょう:

<code-view style="height: 140px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-helper-text"
           alt="$Platform$ Input ヘルパー テキストの例"
           github-src="inputs/input/helper-text">
</code-view>

## Input のサイズ設定

`Size` プロパティを使用して、ユーザーが `Input` のサイズを選択できるようにすることができます。これを行うには、すべてのサイズ値を表示するためのラジオ ボタンをいくつか追加します。このようにして、選択されるたびに、Input のサイズを変更します。

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-size"
           alt="$Platform$ Input サイズ設定の例"
           github-src="inputs/input/size">
</code-view>

上記のサンプルでは、次の属性の使用法を示しています:
- `required` - 入力を必須としてマークするために使用されます。
- `disabled` - 入力を無効にするために使用されます。
- `readonly` - 入力を読み取り専用としてマークするために使用されます。
<!-- WebComponents -->

属性の完全なリストは、`Input` API にあります。

<!-- end: WebComponents -->

## スタイル設定

Input コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。次の表に、Input によって公開されるすべての CSS パーツを示します:

|名|説明|
|--|--|
| container | すべての主要な入力要素を保持するメイン ラッパー。 |
| input | ネイティブ入力要素。 |
| label | ネイティブ ラベル要素。 |
| prefix | プレフィックス ラッパー。 |
| suffix | サフィックス ラッパー。 |
| helper-text | ヘルパー テキスト ラッパー。 |

```scss
igc-input::part(input){
    background-color: rgb(169, 214, 229);
    border-color: rgb(42, 111, 151);
}

igc-input::part(label){
    color: rgb(1, 42, 74);
}

igc-input::part(prefix),
igc-input::part(suffix){
    color: white;
    border-color: rgb(42, 111, 151);
    background-color: rgb(70, 143, 175);
}
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-styling"
           alt="$Platform$ Input のスタイル設定"
           github-src="inputs/input/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

Input API の詳細については、次のリンクを参照してください。
* `Input`

使用したその他のコンポーネントとディレクティブ:
* `Icon`
* `Radio`

<!-- end: WebComponents -->

<div class="divider"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**（英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->