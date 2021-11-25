# $Platform$ Button (ボタン) の概要

Ignite UI for Web Components ボタンは、実現したい外観と機能に一致するように簡単に構成できるさまざまなバリアントとスタイルを提供します。

## $Platform$ Button の例

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-overview"
           alt="$Platform$ Button の例"
           github-src="inputs/button/overview">
</code-view>

## 使用方法

開始するには、typescript ファイルに [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html) をインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出してコンポーネントを登録する必要があります。

```ts
import { defineComponents, IgcButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent);
```

ボタン コンポーネントをインポートしたら、使用を開始する準備ができたので、最初のボタンを追加しましょう。

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>
    Click me
    <span slot="suffix">-</span>
</igc-button>
```

`prefix` スロットと `suffix` スロットを使用すると、ボタンのメイン コンテンツの前後に異なるコンテンツを追加できます。

## タイプ

[`href`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#href) 属性が設定されている場合、ボタン コンポーネントはその内部構造を [`<button>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button) から [`<a>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a) タイプの要素に変更します。その場合、ボタンは通常のリンクと考えることができます。`href` 属性を設定すると、[`rel`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#rel)、[`target`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#target) および [`download`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#download) 属性も設定できます。
ボタン コンポーネントが実際の `button` 要素を内部で使用する場合、プロパティを次のいずれかの値に設定することで、その [`type`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#type) を指定できます。

- `submit` -フォーム データを送信する場合
- `reset` - フォーム データを初期値にリセットする場合
- `button` - ウェブページのどこかにカスタム機能を備えたボタンを追加する場合

## Button のバリアント

### Contained ボタン

[`バリアント`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#variant) を使用して、コンポーネント テンプレートにシンプルなフラット ボタンを追加します。バリアントを設定しない場合、デフォルトではフラットに設定されることに注意してください。

```html
<igc-button variant="contained">Contained</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-contained">
</iframe></div>

### Outlined ボタン

`outlined` ボタンを作成するために必要なのは、`variant` プロパティの値を変更することだけです。

```html
<igc-button variant="outlined">Outlined</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-outlined">
</iframe></div>

### Flat ボタン

同様に、`flat` バリアントに切り替えることができます。

```html
<igc-button variant="flat">Flat</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-flat">
</iframe></div>

### Floating Action ボタン

`variant` プロパティを `fab` に設定することで、フローティング アクション ボタンを作成できます。

```html
<igc-button variant="fab">Fab</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-fab">
</iframe></div>

## ボタンのサイズ設定

[`size`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#size) プロパティを使用して、ユーザーが `igc-button` のサイズを選択できるようにすることができます。これを行うには、すべてのサイズ値を表示するためのラジオ ボタンをいくつか追加します。このようにして、選択されるたびにボタンの size プロパティを変更します。

```ts
import { defineComponents, IgcButtonComponent, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
defineComponents(IgcButtonComponent, IgcRadioComponent, IgcRadioGroupComponent);
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after" checked>Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after">Large</igc-radio>
</igc-radio-group>
```

```ts
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.outlinedButton = document.getElementById('outlined-btn') as IgcButtonComponent;
this.flatButton = document.getElementById('flat-btn') as IgcButtonComponent;
this.containedButton = document.getElementById('contained-btn') as IgcButtonComponent;
this.fabButton = document.getElementById('fab-btn') as IgcButtonComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.outlinedButton.size = radio.target.value;
    this.flatButton.size = radio.target.value;
    this.containedButton.size = radio.target.value;
    this.fabButton.size = radio.target.value;
});
```

結果は以下のようになります。

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-size"
           alt="$Platform$ Button のサイズ設定"
           github-src="inputs/button/size">
</code-view>

### ダウンロード

[`download`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html#download) プロパティを設定すると、リンクされた URL に移動する代わりに、保存するように求められます。

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-download">
</iframe></div>

## スタイル設定

ボタン コンポーネントは、ラッピング要素 (`<button>` または `<a>`) のスタイルを設定できる `base` CSS パーツを公開します。

```css
igc-button::part(base) {
    background-color: #e99221;
    color: #011627;
    padding: 18px;
}
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-styling"
           alt="$Platform$ Button スタイル設定の例"
           github-src="inputs/button/styling">
</code-view>

## API リファレンス

* [IgcButtonComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html)

使用したその他の Web Components:

* [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioGroupComponent.html)
* [IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)
