---
title: $Platform$ Form | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $Platform$ フォームは、インタラクティブ コントロールからユーザー入力を収集するために使用されるコンポーネントです。Ignite UI for $Platform$ を使用してアプリケーションを改善します。
_keywords: $Platform$ form, $ProductName$, Infragistics, $Platform$ フォーム, インフラジスティックス
mentionedTypes: ['Form']
_language: ja
---

# $Platform$ (フォーム) の概要

`Form` は、Ignite UI Web Components フォーム コントロールおよびネイティブ フォーム コントロールからデータを収集します。結果のフォーム データは、単一の FormData オブジェクトに公開されます。

## $Platform$ の例

次の例は、内部にいくつかの入力、ボタン、およびチェックボックスがあるフォームを表しています。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form の例"
           github-src="inputs/form/overview">
</code-view>

## 使用方法

<!-- Blazor -->

`Form` コンポーネントの使用を開始するには、最初に `IgbFormModule` を登録する必要があります。

```razor
IgbFormModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

Form コンポーネントを使用するには、Web コンポーネント パッケージをインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

<!-- end: WebComponents -->

Form コンポーネントがインポートされたら、それをページに追加してコンテンツを追加できます。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form Example"
           github-src="inputs/form/overview">
</code-view>

```ts
import {defineComponents, IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);
```

フォーム データは、次のコンポーネントについて収集されます:
- `checkbox`
- `input`
- `radio`
- `switch`

フォーム コントロールが無効な場合、フォームは送信されず、エラー メッセージが表示されます。フォームの送信時にフォーム要素を検証しないように指定する場合は、`novalidate` 属性を `Form` 要素に追加できます。


```html
  <igc-form novalidate>
    <!-- Form content -->
  </igc-form>
```

### イベント

Form コンポーネントは、次のイベントを発生させます:
- igcSubmit - フォームが送信されたときに発生します。
- igcSubmit - フォームがリセットされたときに発生します。

`Submit` イベントのイベント リスナーを追加する方法を示す例を次に示します:

```ts
document.addEventListener('igcSubmit', function (event) {
  const customEvent = event as CustomEvent<FormData>;
  console.log(customEvent.detail);
});
```

### メソッド

Form コンポーネントは、次のメソッドを公開します:

| メソッド			| 説明     			|
| ------------- 	|:-------------:			|
|`submit`|フォーム データを送信します。|
|`reset`|フォーム データをリセットします。|
|`getFormData`|フォーム データを収集し、単一の FormData オブジェクトを返します。|
|`reportValidity`|要素の子コントロールが検証制約を満たしているかどうかを返します。|

## API リファレンス

フォームの API の詳細については、次のリンクを参照してください。
* `Form`

使用したその他のコンポーネントとディレクティブ:
- `Button`
- `Checkbox`
* `Input`
* `Radio`
* `Switch`

<div class="divider"></div>
## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [$Platform$ **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)