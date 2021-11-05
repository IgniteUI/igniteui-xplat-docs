---
title: $Platform$ Form | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $Platform$ フォームは、インタラクティブ コントロールからユーザー入力を収集するために使用されるコンポーネントです。Ignite UI for $Platform$ を使用してアプリケーションを改善します。
_keywords: $Platform$ form, $ProductName$, Infragistics, $Platform$ フォーム, インフラジスティックス
mentionedTypes: ['Form']
_language: ja
---
# $Platform$ (フォーム) の概要

[`IgcFormComponent`]({environment:wcApiUrl}/classes/IgcFormComponent.html) は、Ignite UI Web Components フォーム コントロールおよびネイティブ フォーム コントロールからデータを収集します。結果のフォーム データは、単一の FormData オブジェクトに公開されます。

## $Platform$ の例

次の例は、内部にいくつかの入力、ボタン、およびチェックボックスがあるフォームを表しています。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form の例"
           github-src="inputs/form/overview">
</code-view>

## 依存関係

Form コンポーネントを使用するには、Web コンポーネント パッケージをインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

## 使用方法

Form コンポーネントがインポートされたら、それをページに追加してコンテンツを追加できます。

```html
  <igc-form novalidate>
    <div>Subscribe</div>
    <igc-input name="name" type="text" label="Your Name" size="large" dir="ltr"></igc-input>
    <igc-input name="email" type="email" label="Your E-mail" size="large" dir="ltr"></igc-input>
    <igc-checkbox name="agreement" labelPosition="after" dir="ltr">I accept the license agreement</igc-checkbox>
    <br />
    <igc-button type="reset">Reset</igc-button>
    <igc-button type="submit">Submit</igc-button>
  </igc-form>
```

```ts
import 'igniteui-webcomponents';
```

フォーム データは、次のコンポーネントについて収集されます:
- [`igc-checkbox`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html)
- [`igc-input`]({environment:wcApiUrl}/classes/IgcInputComponent.html)
- [`igc-radio`]({environment:wcApiUrl}/classes/IgcRadioComponent.html)
- [`igc-switch`]({environment:wcApiUrl}/classes/IgcSwitchComponent.html)
- checkbox
- input
- radio
- select
- switch
- textarea

フォーム コントロールが無効な場合、フォームは送信されず、エラー メッセージが表示されます。フォームの送信時にフォーム要素を検証しないように指定する場合は、[`novalidate`]({environment:wcApiUrl}/classes/IgcFormComponent.html#novalidate) 属性を `<igc-form>` 要素に追加できます。

### イベント

Form コンポーネントは、次のイベントを発生させます:
- igcSubmit - フォームが送信されたときに発生します。
- igcSubmit - フォームがリセットされたときに発生します。

[`igcSubmit`] イベントのイベント リスナーを追加する方法を示す例を次に示します:

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
|[`submit`]({environment:wcApiUrl}/classes/IgcFormComponent.html#submit)|フォーム データを送信します。|
|[`reset`]({environment:wcApiUrl}/classes/IgcFormComponent.html#reset)|フォーム データをリセットします。|
|[`getFormData`]({environment:wcApiUrl}/classes/IgcFormComponent.html#getFormData)|フォーム データを収集し、単一の FormData オブジェクトを返します。|
|[`reportValidity`]({environment:wcApiUrl}/classes/IgcFormComponent.html#reportValidity)|要素の子コントロールが検証制約を満たしているかどうかを返します。|

## API リファレンス

フォームの API の詳細については、次のリンクを参照してください。
* [`IgcFormComponent API`]({environment:wcApiUrl}/classes/IgcFormComponent.html)

使用したその他のコンポーネントとディレクティブ:
- [`IgcButtonComponent API`]({environment:wcApiUrl}/classes/IgcButtonComponent.html)
- [`IgcCheckboxComponent API`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html)
* [`IgcInputComponent API`]({environment:wcApiUrl}/classes/IgcInputComponent.html)
* [`IgcRadioComponent API`]({environment:wcApiUrl}/classes/IgcRadioComponent.html)
* [`IgcSwitchComponent API`]({environment:wcApiUrl}/classes/IgcSwitchComponent.html)

<div class="divider"></div>
## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [$Platform$ **Forums** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)