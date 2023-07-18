---
title: {Platform} Form コンポーネント | {ProductName}
_description: {Platform} Form コンポーネントを使用すると、次のアプリの新しい連絡フォームまたは登録ページをすばやく簡単に作成できます。詳細については、こちらをご覧ください。
_keywords: {Platform} form, {ProductName}, Infragistics, {Platform} フォーム, インフラジスティックス
mentionedTypes: ['Form', 'Checkbox', 'Input', 'Radio', 'Switch']
_language: ja
---

# {Platform} (フォーム) の概要

{Platform} の Form コンポーネントは、アプリケーションの要件に適合するお問い合わせフォームや登録ページを設定するために使用されます。{Platform} フォーム検証を簡単に提供し、フォームの向きを定義し、必要なレイアウトを構成またはカスタマイズすることもできます。{Platform} フォーム コンポーネントは、ユーザー アクションに応答する機会を与えるイベントも公開します。

## {Platform} の例

次の例は、内部にいくつかの入力、ボタン、およびチェックボックスがある `Form` を表しています。

`sample="/inputs/form/overview", height="300", alt="{Platform} Form の例"`



## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

`Form` を使用する前に、次のように登録する必要があります:

```ts
import {defineComponents, IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Form` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrFormModule, IgrForm } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrFormModule.register();
```
<!-- end: React -->

<!-- Blazor -->
`Form` を使用する前に、次のように登録する必要があります。


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbFormModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Form` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

`Form` の使用を開始する最も簡単な方法は次のとおりです:

`sample="/inputs/form/overview", height="300", alt="{Platform} Form の例"`



フォーム データは、次のコンポーネントについて収集されます:
- `Checkbox`
- `Input`
- `Radio`
- `Switch`

フォーム コントロールが無効な場合、フォームは送信されず、エラー メッセージが表示されます。フォームの送信時にフォーム要素を検証しないように指定する場合は、`novalidate` 属性を `Form` 要素に追加できます。

```tsx
<IgrForm novalidate="true"></IgrForm>
```

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
- Submit - フォームが送信されたときに発生します。
- Reset - フォームがリセットされたときに発生します。

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
| `Submit` |フォーム データを送信します。|
| `Reset` | フォーム データをリセットします。|
| `GetFormData` | フォーム データを収集し、単一の FormData オブジェクトを返します。|
| `ReportValidity` | 要素の子コントロールが検証制約を満たしているかどうかを返します。|

<div class="divider"></div>


## API リファレンス

 - `Button`
 - `Checkbox`
 - `Form`
 - `Input`
 - `Radio`
 - `Submit`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})