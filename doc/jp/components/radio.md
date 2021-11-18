---
title: Radio と Radio Group
_description: $ProductName$ Radio Button と Radio Group コントロールを使用すると、開発者はユーザーが選択できるオプションのリストをシームレスに表示して、テンプレート駆動型のリアクティブ フォームでより優れた UI を実現できます。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Radio Button components, $Platform$ Radio Button controls, $Platform$ Radio Group component, $Platform$ Radio Group control, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Radio Button コンポーネント, $Platform$ Radio Button コントロール
_language: ja
---

# $Platform$ Radio & Radio Group (ラジオとラジオ グループ)

<p class="highlight">$ProductName$ Radio Button コンポーネントを使用すると、ユーザーは、並べて表示される利用可能なオプションのセットから 1 つのオプションを選択できます。</p>

## $ProductName$ Radio の例

<code-view style="height: 205px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/inputs/radio-group" alt="$Platform$ Radio & Radio Group の例"
           github-src="inputs/radio/group">
</code-view>

<div class="divider--half"></div>

### 使用方法

ラジオ ウェブ コンポーネントの使用を開始するには、最初に次のコマンドを入力して $ProductName $をインストールする必要があります。

```cmd
npm install igniteui-webcomponents
```

次の手順は、[IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioComponent.html) と [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioGroupComponent.html) を typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録することです。

```ts
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);
```

ラジオの使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

> [!WARNING]
> ラジオ コンポーネントは標準の `<form>` 要素では機能しません。代わりに `<igc-form>` を使用してください。

## 例

### ラベル

ラジオに意味のあるラベルを付けるには、開始タグと終了タグの間にテキストを配置するだけです。

```html
<igc-radio>Apple</igc-radio>
```

`label-position` 属性を設定することにより、ラジオ ボタンの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。


```html
<igc-radio label-position="before">Apple</igc-radio>
```

ラジオには、ラジオの外部の要素でラベルを付けることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```html
<span id="radio-label">Label</span>
<igc-radio aria-labelledby="switch-label"></igc-radio>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-label"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/label">
</code-view>

### チェック済み

ラジオをオンに切り替えるには、`checked` 属性を使用します。

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio checked>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-group"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/group">
</code-view>

### 無効

`invalid` 属性を使用して、ラジオを無効としてマークします。

```html
<igc-radio invalid></igc-radio>
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-invalid"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/invalid">
</code-view>

### オフ

ラジオをオフにするには、`disabled` 属性を使用します。

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio disabled>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-disabled"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/disabled">
</code-view>

### グループの配置

ラジオ グループを使用すると、[`alignment`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioGroupComponent.html#alignment) 属性を使用して、含まれているラジオ ボタンの配置方向を簡単に変更できます。許可される値は、`vertical` (デフォルト) と `horizontal` です。

```html
<igc-radio-group alignment="horizontal">
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-alignment"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/alignment">
</code-view>

### フォーム

`<igc-form>` で無線を使用する場合は、`name` 属性と `value` 属性を使用してください。

```html
<igc-radio-group>
  <igc-radio name="option1" value="apple">Apple</igc-radio>
  <igc-radio name="option2" value="banana">Banana</igc-radio>
  <igc-radio name="option4" value="mango">Mango</igc-radio>
  <igc-radio name="option3" value="banana">Orange</igc-radio>
</igc-radio-group>
```

## スタイル設定

ラジオ コンポーネントは、いくつかの CSS パーツ (`base`、`control`、および `label`) を公開して、スタイルを完全に制御できるようにします。

```scss
igc-radio::part(control checked) {
  &::before {
    background: olive;
  }

  &::after {
    border-color: olive;
  }
}
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-styling"
           alt="$Platform$ Radio スタイル設定"
           github-src="inputs/radio/styling">
</code-view>

## その他のリソース

<div class="divider--half"></div>

- [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

## API リファレンス

* [IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioComponent.html)
* [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioGroupComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)
