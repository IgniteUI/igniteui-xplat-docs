# $Platform$ Link Button (リンク ボタン) の概要

$Platform$ Link Button は、さまざまなバリエーションとスタイルを提供します。これらは、実現したい外観と機能に合わせて簡単に構成できます。

## $Platform$ Link Button の例

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/link-button-overview"
           alt="$Platform$ Button の例"
           github-src="inputs/link-button/overview">
</code-view>

## 使用方法

Link Button Web コンポーネントの使用を開始するには、typescript ファイルに [`IgcLinkButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcLinkButtonComponent.html) をインポートする必要があります。

```ts
import { IgcLinkButtonComponent } from 'igniteui-webcomponents'; 
```

リンク ボタン コンポーネントをインポートしたら、使用を開始する準備ができたので、最初のリンク ボタンを追加しましょう。

```html
<igc-link-button
    variant="contained"
    href="https://www.infragistics.com/products/ignite-ui-web-components"
    rel="external"
    target="_blank">
    <span slot="prefix">+</span>
     Click Me
    <span slot="suffix">-</span>
</igc-link-button>
```

`prefix` スロットと `suffix` スロットを使用すると、ボタンのメイン コンテンツの前後に異なるコンテンツを追加できます。

`igc-link-button` の内部構造は [`<a>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a) タイプ要素です。そのため、リンク ボタンの `href`、`rel`、`target`、および `download` 属性を設定できます。

## Link Button のバリアント

### Flat ボタン

`flat` [`バリアント`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcLinkButtonComponent.html#variant)を使用して、コンポーネント テンプレートにシンプルなフラット ボタンを追加します。バリアントを設定しない場合、デフォルトではフラットに設定されることに注意してください。

```html
<igc-link-button
    variant="flat"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Flat
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-flat">
</iframe></div>

### Outlined ボタン

`outlined` ボタンを作成するために必要なのは、ボタン バリアント プロパティを変更することだけです。

```html
<igc-link-button
    variant="outlined"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Outlined
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-outlined">
</iframe></div>

### Contained ボタン

同様に、`contained` バリアントに切り替えることができます。

```html
<igc-link-button
    variant="contained"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Contained
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-contained">
</iframe></div>

### Floating Action ボタン

また、フローティング アクション ボタンの場合は、`fab` バリアントに切り替えることができます。 

```html
<igc-link-button
    variant="fab"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Fab
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-fab">
</iframe></div>

### Disable Link の無効化

ボタンを無効にするには、[`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcLinkButtonComponent.html#disabled) プロパティを使用します。

```html
<igc-link-button variant="contained" disabled>Disabled</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-disabled">
</iframe></div>

### ダウンロード

[`download`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcLinkButtonComponent.html#download) プロパティに URL を設定することで、リンク ボタンをクリックしたときにファイルをダウンロードさせることができます。

```html
<igc-link-button
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-download">
</iframe></div>

## サイズ

[`size`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcLinkButtonComponent.html#size) プロパティを使用して、ユーザーが `igc-link-button` のサイズを選択できるようにすることができます。これを示すために、すべてのサイズ値を表示するためのラジオ ボタンをいくつか追加します。このようにして、選択されるたびにボタンの size プロパティを変更します。

```ts
import { IgcRadioGroupComponent, IgcRadioComponent } from 'igniteui-webcomponents';
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after">Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after" checked="true">Large</igc-radio>
</igc-radio-group>
```

```ts
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.outlinedButton = document.getElementById('outlined-btn') as IgcLinkButtonComponent;
this.flatButton = document.getElementById('flat-btn') as IgcLinkButtonComponent;
this.containedButton = document.getElementById('contained-btn') as IgcLinkButtonComponent;
this.fabButton = document.getElementById('fab-btn') as IgcLinkButtonComponent;

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
           iframe-src="{environment:dvDemosBaseUrl}/inputs/link-button-size"
           alt="$Platform$ List の例"
           github-src="/inputs/link-button/size">
</code-view>

## スタイル設定

リンク ボタン コンポーネントは、ラッピング `<a>` 要素のスタイルを設定できる `base` CSS パーツを公開します。

```css
igc-link-button::part(base) {
    background-color: #0099ff;
    color: #3f51b5;
    padding: 12px;
}
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/link-button-styling"
           alt="$Platform$ List の例"
           github-src="/inputs/link-button/styling">
</code-view>

## API リファレンス

* [IgcLinkButtonComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcLinkButtonComponent.html)

使用したその他の WEB コンポーネント:

* [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioGroupComponent.html)
* [IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)