---
title: {Platform} Button コンポーネント | {ProductName}
_description: {Platform} Button コンポーネントの使用を開始します。{Platform} Button OnClick イベントを通じて、ボタンのバリアントを選択し、サイズを構成し、スタイルを定義し、柔軟性を獲得します。
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} Button コンポーネント, インフラジスティックス
_license: MIT
mentionedTypes: ["Button", "ButtonBase"]
_language: ja
---

# {Platform} Button (ボタン) の概要

{Platform} Button コンポーネントを使用すると、{Platform} アプリでアクションをトリガーするクリック可能な要素を有効にできます。ボタンのバリアントの設定方法、ラップされた要素のスタイルの構成方法、およびサイズの定義方法を完全に制御できます。Button コンポーネントは、{Platform} Button <!-- WebComponents, Blazor -->OnClick イベント<!-- end: WebComponents, Blazor --><!-- React -->クリックされたコールバック<!-- end: React -->、{Platform} ボタンの切り替え、{Platform} ボタンの無効化などを通じて柔軟性を提供します。

## {Platform} Button の例

`sample="/inputs/button/overview", height="100", alt="{Platform} Button の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Button` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Button` と必要な CSS をインポートする必要があります:

```tsx
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->

`Button` を使用する前に、次のように登録する必要があります。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Button` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Button` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-button>Click me</igc-button>
```

```tsx
<IgrButton />
```

```razor
<IgbButton />
```

## Prefix / Suffix

`Button` コンポーネントの `prefix` スロットと `suffix` スロットを使用すると、ボタンのメイン コンテンツの前後に異なるコンテンツを追加できます。

```tsx
<IgrButton type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</IgrButton>
```

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

- `Submit` - フォーム データを送信する場合
- `reset` - フォーム データを初期値にリセットする場合
- `button` - ウェブページのどこかにカスタム機能を備えたボタンを追加する場合

## Button のバリアント

### Contained ボタン

`Variant` 属性を使用して、コンポーネント テンプレートにシンプルな contained ボタンを追加します。バリアントを設定しない場合、デフォルトでは contained に設定されることに注意してください。

```tsx
<IgrButton variant="contained"><span>Contained</span></IgrButton>
```

```html
<igc-button variant="contained">Contained</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained" />
```

`sample="/inputs/button/contained", height="70", alt="{Platform} button contained"`

### Outlined ボタン

`outlined` ボタンを作成するために必要なのは、`Variant` プロパティの値を変更することだけです。

```tsx
<IgrButton variant="outlined"><span>Outlined</span></IgrButton>
```

```html
<igc-button variant="outlined">Outlined</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Outlined" />
```

`sample="/inputs/button/outlined", height="80", alt="{Platform} button outlined"`

### Flat ボタン

同様に、`flat` バリアントに切り替えることができます。

```tsx
<IgrButton variant="flat"><span>Flat</span></IgrButton>
```

```html
<igc-button variant="flat">Flat</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Flat" />
```

`sample="/inputs/button/flat", height="70", alt="{Platform} button flat"`

### Floating Action ボタン

`Variant` プロパティを `fab` に設定することで、フローティング アクション ボタンを作成できます。

```tsx
<IgrButton variant="fab"><span>Fab</span></IgrButton>
```

```html
<igc-button variant="fab">Fab</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Fab" />
```

`sample="/inputs/button/fab", height="70", alt="{Platform} button fab"`

## ボタンのサイズ設定

ユーザーは、CSS 変数 `--ig-size` を使用して `Button` のサイズを変更できます。次の例では、すべてのサイズ値を表示するためのラジオ ボタンをいくつか追加します。このようにして、選択されるたびにボタンの size プロパティを変更します。

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
    this.outlinedButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
    this.flatButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
    this.containedButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
    this.fabButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
}); 
```

```tsx
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';

const [size, setSize] = useState("small");

const onRadioChange = (e: IgrRadioChangeEventArgs) => {
    setSize(e.detail.value);
};

<IgrRadioGroup alignment="horizontal" style={{ display: "flex", margin: "0 auto", width: "15%" }}>
    <IgrRadio name="size" value="small" labelPosition="after" checked={size === "small"} onChange={onRadioChange}>
        <span>Small</span>
    </IgrRadio>
    <IgrRadio name="size" value="medium" labelPosition="after" onChange={onRadioChange}>
        <span>Medium</span>
    </IgrRadio>
    <IgrRadio name="size" value="large" labelPosition="after" onChange={onRadioChange}>
        <span>Large</span>
    </IgrRadio>
</IgrRadioGroup>

<div className="button-container">
    <IgrButton className={"size-" + size} variant="flat">
        <span>Flat</span>
    </IgrButton>
    <IgrButton className={"size-" + size} variant="contained">
        <span>Contained</span>
    </IgrButton>
    <IgrButton className={"size-" + size} variant="outlined">
        <span>Outlined</span>
    </IgrButton>
    <IgrButton className={"size-" + size} variant="fab">
        <span>Like</span>
    </IgrButton>
</div>
```

```razor
<IgbRadioGroup id="radioGroup" Alignment="ContentOrientation.Horizontal" >
    <IgbRadio Value="small" LabelPosition="RadioLabelPosition.After" @onclick="OnSmallClick">Small</IgbRadio>
    <IgbRadio Value="medium" LabelPosition="RadioLabelPosition.After" @onclick="OnMediumClick">Medium</IgbRadio>
    <IgbRadio Value="large" LabelPosition="RadioLabelPosition.After" Checked="true" @onclick="OnLargeClick">Large</IgbRadio>
</IgbRadioGroup>

@code {
    private SizableComponentSize SizableComponentSize = SizableComponentSize.Large;

    protected override void OnInitialized()
    {
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

`sample="/inputs/button/size", height="200", alt="{Platform} Button のサイズ設定"`



### ダウンロード

`Download` プロパティを設定すると、リンクされた URL に移動する代わりに、保存するように求められます。

```tsx
<IgrButton
    href=""
    variant="contained"
    download="url"
    target="_blank" >
    <span>Download</span>
</IgrButton>
```

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

`sample="/inputs/button/download", height="70", alt="{Platform} button download"`

## スタイル設定

`Button` は、スタイル設定に使用できる 3 つの CSS パーツを公開します。

|名前|説明|
|--|--|
| `base` | igc-button コンポーネントのネイティブ ボタン要素。 |
| `prefix` | igc-button コンポーネントのプレフィックス コンテナー。 |
| `suffix` | igc-button コンポーネントのサフィックス コンテナー。 |

`base` CSS パーツを使用すると、ラップされた要素 (`<button>` または `<a>`) のスタイルを設定できます。

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```

`sample="/inputs/button/styling", height="100", alt="{Platform} Button スタイル設定の例"`



## API リファレンス

- `Button`
- `DisplayType`
- `Download`
- `Href`
- `RadioGroup`
- `Radio`
- [スタイル設定 & テーマ](../themes/overview.md)

## その他のリソース

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})
