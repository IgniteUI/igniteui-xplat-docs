---
title: $Platform$ Form コンポーネント | $ProductName$
_description: $Platform$ Form コンポーネントを使用すると、次のアプリの新しい連絡フォームまたは登録ページをすばやく簡単に作成できます。詳細については、こちらをご覧ください。
_keywords: $Platform$ form, $ProductName$, Infragistics, $Platform$ フォーム, インフラジスティックス
mentionedTypes: ['Form']
_language: ja
---

# $Platform$ (フォーム) の概要

$Platform$ の Form コンポーネントは、アプリケーションの要件に適合するお問い合わせフォームや登録ページを設定するために使用されます。$Platform$ フォーム検証を簡単に提供し、フォームの向きを定義し、必要なレイアウトを構成またはカスタマイズすることもできます。$Platform$ フォーム コンポーネントは、ユーザー アクションに応答する機会を与えるイベントも公開します。

## $Platform$ の例

次の例は、内部にいくつかの入力、ボタン、およびチェックボックスがある `Form` を表しています。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form の例"
           github-src="inputs/form/overview">
</code-view>

## 使用方法


<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Form` を使用する前に、次のように登録する必要があります。

```razor
IgbFormModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Form` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import {defineComponents, IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);
```

`Form` の使用を開始する最も簡単な方法は次のとおりです:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form の例"
           github-src="inputs/form/overview">
</code-view>

フォーム データは、次のコンポーネントについて収集されます:
- `Checkbox`
- `Input`
- `Radio`
- `Switch`

フォーム コントロールが無効な場合、フォームは送信されず、エラー メッセージが表示されます。フォームの送信時にフォーム要素を検証しないように指定する場合は、`novalidate` 属性を `Form` 要素に追加できます。


```html
  <igc-form novalidate>
    <!-- Form content -->
  </igc-form>
```

```razor
<IgbForm NoValidate="true" />
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

<!-- WebComponents -->

## API リファレンス

フォームの API の詳細については、次のリンクを参照してください。
* `Form`

使用したその他のコンポーネントとディレクティブ:
- `Button`
- `Checkbox`
* `Input`
* `Radio`
* `Switch`

<!-- end: WebComponents -->

<div class="divider"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub** (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->