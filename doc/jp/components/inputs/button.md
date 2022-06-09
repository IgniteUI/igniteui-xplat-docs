---
title: $Platform$ Button コンポーネント | $ProductName$
_description: $Platform$ Button コンポーネントの使用を開始します。$Platform$ Button OnClick イベントを通じて、ボタンのバリアントを選択し、サイズを構成し、スタイルを定義し、柔軟性を獲得します。
_keywords: $Platform$, UI controls, web widgets, UI widgets, $Platform$ Button Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, $Platform$ Button コンポーネント, インフラジスティックス
mentionedTypes: ['Button', 'ButtonBase']
_language: ja
---

# $Platform$ Button (ボタン) の概要

$Platform$ Button コンポーネントを使用すると、$Platform$ アプリでアクションをトリガーするクリック可能な要素を有効にできます。ボタンのバリアントの設定方法、ラップされた要素のスタイルの構成方法、およびサイズの定義方法を完全に制御できます。Button コンポーネントは、$Platform$ Button OnClick イベント、$Platform$ ボタンの切り替え、$Platform$ ボタンの無効化などを通じて柔軟性を提供します。

## $Platform$ Button の例

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-overview"
           alt="$Platform$ Button の例"
           github-src="inputs/button/overview">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Button` を使用する前に、次のように登録する必要があります。

```razor
IgbButtonModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Button` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcButtonComponent } from "igniteui-webcomponents";

defineComponents(IgcButtonComponent);
```

`Button` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-button>Click me</igc-button>
```

```razor
<IgbButton />
```

## Prefix / Suffix

`Button` コンポーネントの `prefix` スロットと `suffix` スロットを使用すると、ボタンのメイン コンテンツの前後に異なるコンテンツを追加できます。

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</IgbButton>
```

## タイプ

`Href` 属性が設定されている場合、ボタン コンポーネントはその内部構造を [`<button>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button) から [`<a>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a) タイプの要素に変更します。その場合、ボタンは通常のリンクと考えることができます。`Href` 属性を設定すると、`Rel`、`Target` および `Download` 属性も設定できます。
ボタン コンポーネントが実際の [`<button>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button) 要素を内部で使用する場合、プロパティを次のいずれかの値に設定することで、その `DisplayType` を指定できます。

- `submit` -フォーム データを送信する場合
- `reset` - フォーム データを初期値にリセットする場合
- `button` - ウェブページのどこかにカスタム機能を備えたボタンを追加する場合

## Button のバリアント

### Contained ボタン

`variant` を使用して、コンポーネント テンプレートにシンプルなフラット ボタンを追加します。バリアントを設定しない場合、デフォルトではフラットに設定されることに注意してください。

```html
<igc-button variant="contained">Contained</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained" />
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-contained">
</iframe></div>

### Outlined ボタン

`outlined` ボタンを作成するために必要なのは、`variant` プロパティの値を変更することだけです。

```html
<igc-button variant="outlined">Outlined</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Outlined" />
```

<div class="sample-container loading" style="height: 80px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-outlined">
</iframe></div>

### Flat ボタン

同様に、`flat` バリアントに切り替えることができます。

```html
<igc-button variant="flat">Flat</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Flat" />
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-flat">
</iframe></div>

### Floating Action ボタン

`variant` プロパティを `fab` に設定することで、フローティング アクション ボタンを作成できます。

```html
<igc-button variant="fab">Fab</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Fab" />
```

<div class="sample-container loading" style="height: 75px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-fab">
</iframe></div>

## ボタンのサイズ設定

`size` プロパティを使用して、ユーザーが `button` のサイズを選択できるようにすることができます。これを行うには、すべてのサイズ値を表示するためのラジオ ボタンをいくつか追加します。このようにして、選択されるたびにボタンの size プロパティを変更します。

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

```razor
<IgbRadioGroup id="radioGroup" Alignment="RadioGroupAlignment.Horizontal" >
    <IgbRadio Value="small" LabelPosition="RadioLabelPosition.After" @onclick="OnSmallClick">Small</IgbRadio>
    <IgbRadio Value="medium" LabelPosition="RadioLabelPosition.After" @onclick="OnMediumClick">Medium</IgbRadio>
    <IgbRadio Value="large" LabelPosition="RadioLabelPosition.After" Checked="true" @onclick="OnLargeClick">Large</IgbRadio>
</IgbRadioGroup>

@code {
    private SizableComponentSize SizableComponentSize = SizableComponentSize.Large;

    protected override void OnInitialized()
    {
        IgbButtonModule.Register(IgniteUIBlazor);
        IgbRadioModule.Register(IgniteUIBlazor);
        IgbRadioGroupModule.Register(IgniteUIBlazor);
    }

    public void OnSmallClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Small;
    }

    public void OnMediumClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Medium;
    }

    public void OnLargeClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Large;
    }
}
```

上記のコードを実装した結果は、次のようになります:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-size"
           alt="$Platform$ Button のサイズ設定"
           github-src="inputs/button/size">
</code-view>

### ダウンロード

`download` プロパティを設定すると、リンクされた URL に移動する代わりに、保存するように求められます。

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained" Download="Url" Href="https://www.infragistics.com/" Target="@ButtonBaseTarget._blank">
    Download
</IgbButton>
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

<!-- WebComponents -->

## API リファレンス

* `Button`

使用したその他の Web Components:

* `RadioGroup`
* `Radio`

<!-- end: WebComponents -->

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub** (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->