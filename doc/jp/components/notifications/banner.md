---
title: {Platform} Banner | インフラジスティックス
_description: {ProductName} Banner コンポーネントを使用すると、開発者は、モバイル アプリケーションやデスクトップ アプリケーション内に、短くて邪魔にならないメッセージ (およびオプションのアクション) を簡単に統合できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Banner components, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Banner コンポーネント
mentionedTypes: ["Banner"]
_language: ja
---

# {Platform} Banner (バナー) の概要

{ProductName} Banner コンポーネントは、スナックバーより長い時間の表示でダイアログより控えめのメッセージを簡単に表示できます。また、メッセージのコンテキストに基づいて実行するアクションを示すこともできます。

## {ProductName} Banner の例

`sample="/notifications/banner/banner-sample-1", height="530", alt="{Platform} Banner の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Banner` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcBannerComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBannerComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Banner` と必要な CSS をインポートする必要があります:

```tsx
import { IgrBanner } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->
`Banner` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBannerModule));
```

スタイルを `Banner` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

### Banner の表示

Banner コンポーネントを表示するには、ボタン クリックで `Show` メソッドを呼び出します。バナーは、要素がページ テンプレートに挿入された場所にその他すべてのコンテンツを移動して表示されます。通常、閉じるためのユーザー操作をほとんど必要としない非侵入型コンテンツを表示します。

```html
<igc-button onclick="banner.show()">Show Banner</igc-button>

<igc-banner id="banner">
    You are currently offline.
</igc-banner>
```

```tsx
<IgrButton onClick={() => bannerRef.current.show()}>
    <span>Show Banner</span>
</IgrButton>

<IgrBanner ref={bannerRef}>
    <span>You are currently offline.</span>
</IgrBanner>
```

```razor
<IgbButton @onclick="ShowBanner">Show Banner</IgbButton>

<IgbBanner @ref="bannerRef">
    You are currently offline.
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void ShowBanner()
    {
        this.bannerRef.ShowAsync();
    }
}
```

> [!NOTE]
> `Banner` には、バナーを閉じるデフォルトの `OK` アクション ボタンが含まれています。


## 例

`Banner` コンポーネントは、マテリアル デザイン バナー ガイドラインにできるかぎり準拠しながらコンテンツをテンプレート化します。

### バナー メッセージの変更

`{BannerSelector}` タグに渡されるコンテンツを変更することによりバナーに表示されるメッセージを設定できます。指定したバナー領域にテキストが表示され、表示時にバナーはデフォルト テンプレートを使用します。以下は、サンプル バナーのコンテンツを変更してより多くの情報を提供します。

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <span>You have lost connection to the internet. This app is offline.</span>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    You have lost connection to the internet. This app is offline.
</IgbBanner>
```

### アイコンの追加

バナーの `prefix` スロットを使用して、`Icon` をバナーに表示できます。Icon は常にバナー メッセージの最初に配置されます。

> [!NOTE]
> 複数の `Icon` 要素が挿入される場合、バナーはそれらすべてを最初に配置しようとします。`Icon` は 1 つのみ、直接渡すことに注意してください。

`Icon` をバナーに渡すには、`prefix` スロットを使用します。

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon slot="prefix" IconName="signal_wifi_off" Collection="material"></IgbIcon>
    You have lost connection to the internet. This app is offline.
</IgbBanner>
```

バナー メッセージで `Icon` を使用したい場合は、バナーのコンテンツに挿入するだけです。

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
    <igc-icon name="signal_wifi_off"></igc-icon>
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <span>You have lost connection to the internet. This app is offline.</span>
    <IgrIcon name="signal_wifi_off"></IgrIcon>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    You have lost connection to the internet. This app is offline.
    <IgbIcon IconName="signal_wifi_off" Collection="material"></IgbIcon>
</IgbBanner>
```

### バナー ボタンの変更

`Banner` は、バナー ボタンをテンプレート化するための `actions` スロットを公開します。これにより、デフォルトのバナー ボタン (`OK`) をオーバーライドし、ユーザー定義のカスタム操作を追加します。

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <igc-button onclick="banner.toggle()">
            <igc-ripple></igc-ripple>
            Toggle Banner
        </igc-button>
    </div>
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
    <div slot="actions">
        <IgrButton variant="flat" onClick={() => bannerRef.current.toggle()}>
            <IgrRipple />
            <span>Toggle Banner</span>
        </IgrButton>
    </div>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon slot="prefix" IconName="signal_wifi_off" Collection="material"></IgbIcon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <IgbButton Variant="ButtonVariant.Flat" @onclick="OnButtonClick">
            Toggle Banner
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void OnButtonClick()
    {
        this.bannerRef.ToggleAsync();
    }
}
```

`sample="/notifications/banner/banner-sample-2", height="530", alt="{Platform} Banner の例"`

### イベントにバインド

バナー コンポーネントは、閉じられるときに `Closing` イベントと `Closed` イベントを発行します。`Closing` イベントはキャンセル可能です。[`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) インターフェイスを使用し、発行されたオブジェクトの `cancelable` プロパティは **true** に設定されています。`Closing` イベントをキャンセルすると、対応する終了アクションとイベントはトリガーされません。バナーは閉じられず、`Closed` イベントも発行されません。

終了イベントをキャンセルするには、[`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) メソッドを呼び出します。

```html
<igc-banner id="banner">
    ...
</igc-banner>
```
```ts
const banner = document.getElementById('banner') as IgcBannerComponent;

banner.addEventListener('igcClosing', (event) => {
  event.preventDefault();
});
```

```tsx
<IgrBanner onClosing={(event) => event.preventDefault()}>
    ...
</IgrBanner>
```

```razor
<IgbBanner id="banner">
    ...
</IgbBanner>

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JS.InvokeVoidAsync("handleClosing");
        }
    }
}
```
```razor
//In JavaScript:
function handleClosing() {
    const banner = document.getElementById('banner');

    banner.addEventListener('igcClosing', (event) => {
        event.preventDefault();
    });
}
```

> [!NOTE]
> 上記が適用されると、終了イベントが常にキャンセルされるため、バナーが閉じることはありません。

## 高度な例

2 つのカスタムボタンのバナーを作成しましょう。1 つは通知を閉じるためのボタンで、もう 1 つは接続をオンにするためのボタンです。`actions` スロットを使用してカスタム アクション ハンドラーを渡すことができます。

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <igc-button onclick="banner.hide()">
            <igc-ripple></igc-ripple>
            Continue Offline
        </igc-button>
        <igc-button id="button">
            <igc-ripple></igc-ripple>
            Turn On Wifi
        </igc-button>
    </div>
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
    <div slot="actions">
        <IgrButton variant="flat" onClick={() => bannerRef.current.hide()}>
            <IgrRipple />
            <span>Continue Offline</span>
        </IgrButton>
        <IgrButton variant="flat" onClick={refreshBanner}>
            <IgrRipple />
            <span>Turn On Wifi</span>
        </IgrButton>
    </div>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon IconName="signal_wifi_off" Collection="material" slot="prefix"></IgbIcon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <IgbButton Variant="ButtonVariant.Flat" @onclick="HideBanner">
            Continue Offline
            <IgbRipple />
        </IgbButton>
        <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
            Turn On Wifi
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void HideBanner()
    {
        this.bannerRef.HideAsync();
    }
}
```

> Google の[マテリアル デザイン ガイドライン](https://material.io/design/components/banners.html#anatomy)では、バナーはに表示するボタンは 2 つまでです。`Banner` は、`actions` スロットの要素数を明示的に制限しませんが、マテリアル デザイン ガイドに従う場合は、最大 2 つの要素を使用することを強くお勧めします。


閉じるオプション (**Continue Offline**) は詳細なロジックを必要としないため、`Hide` のみの呼び出しが可能です。しかし、確認アクション (**Turn On Wifi**) は追加のロジックを必要とするため、コンポーネントで定義する必要があります。次に、`click` イベントのイベント リスナーを追加します。最後に、変更するたびに `refreshBanner()` メソッドを呼び出します。これにより、`wifiState` に基づいてバナーを切り替えます。

ナビゲーション バーには Wi-Fi アイコンが表示され、その `click` イベントのイベント リスナーも追加されます。変更ごとに `refreshBanner()` メソッドが呼び出されるため、アイコンはバナーを切り替えるだけでなく、接続の状態に応じて変化します。

```html
<igc-navbar>
  <h1>Gallery</h1>
  <igc-icon id="icon" slot="end" name="signal_wifi_off"></igc-icon>
</igc-navbar>

<igc-banner id="banner">
    ...
    <div slot="actions">
        ...
        <igc-button id="button">
            <igc-ripple></igc-ripple>
            Turn On Wifi
        </igc-button>
    </div>
</igc-banner>
```

```ts
private banner: IgcBannerComponent;
private icon: IgcIconComponent;
private button: IgcButtonComponent;

private wifiState: boolean = false;

constructor() {
    this.banner = document.getElementById('banner') as IgcBannerComponent;
    this.icon = document.getElementById('icon') as IgcIconComponent;
    this.button = document.getElementById('button') as IgcButtonComponent;

    this.icon.addEventListener('click', () => this.refreshBanner());
    this.button.addEventListener('click', () => this.refreshBanner());
}

public refreshBanner() {
    if (!this.wifiState) {
        this.icon.name = 'signal_wifi_4_bar';
        this.banner.hide();
    } else {
        this.icon.name = 'signal_wifi_off';
        this.banner.show();
    }
    this.wifiState = !this.wifiState;
}
```

```tsx
const bannerRef = useRef<IgrBanner>(null);
const iconRef = useRef<IgrIcon>(null);

const [wifiState, setWifiState] = useState(false);
const [iconName, setIconName] = useState("signal_wifi_off");

const refreshBanner = () => {
    const nextWifiState = !wifiState;
    setWifiState(nextWifiState);
    setIconName(nextWifiState ? "signal_wifi_4_bar" : "signal_wifi_off");

    if (nextWifiState) {
        bannerRef.current.hide();
    } else {
        bannerRef.current.show();
    }
}

return(
    <>
        <IgrNavbar>
            <h1>Gallery</h1>
            <IgrIcon ref={iconRef} name={iconName} slot="end" onClick={refreshBanner}></IgrIcon>
        </IgrNavbar>

        <IgrBanner ref={bannerRef}>
            ...
            <div slot="actions">
                ...
                <IgrButton variant="flat" onClick={refreshBanner}>
                    <IgrRipple />
                    <span>Turn On Wifi</span>
                </IgrButton>
            </div>
        </IgrBanner>
    </>
);
```

```razor
<IgbNavbar>
    <h1>Gallery</h1>
    <IgbIcon @ref="iconRef" IconName="@iconName" Collection="material" slot="end" @onclick="RefreshBanner"></IgbIcon>
</IgbNavbar>

<IgbBanner @ref="bannerRef">
    ...
    <div slot="actions">
        ...
        <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
            Turn On Wifi
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;
    private string iconName = "signal_wifi_off";
    private bool wifiState = false;
    
    private void RefreshBanner()
    {
        if (!this.wifiState)
        {
            this.iconName = "signal_wifi_4_bar";
            this.bannerRef.HideAsync();
        }
        else
        {
            this.iconName = "signal_wifi_off";
            this.bannerRef.ShowAsync();
        }
        this.wifiState = !this.wifiState;
    }
}
```

最後に、WiFi の状態に関するメッセージを表示する `Toast` を追加します。以下はテンプレート化したバナーのデモです。

`sample="/notifications/banner/banner-advanced-sample", height="530", alt="{Platform} Banner の例"`

## スタイル設定

`Banner` コンポーネントはいくつかの CSS パーツを公開し、スタイルを完全に制御できるようにします。

|名前|説明|
|--|--|
| `base` | バナー コンポーネントの基本ラッパー。 |
| `spacer` | バナーの周囲にスペースを設定する内側のラッパー。 |
| `message` | テキストとイラストを保持するパーツ。 |
| `illustration` | バナーのアイコン/イラストを保持するパーツ。 |
| `content` | バナーのテキスト コンテンツを保持するパーツ。 |
| `actions` | バナーのアクション ボタンを保持するパーツ。 |

```css
igc-banner::part(spacer) {
  background: var(--ig-surface-600);
}

igc-banner::part(illustration) {
  color: var(--ig-surface-600-contrast);
}

igc-banner::part(content) {
  color: var(--ig-gray-900);
}
```

`sample="/notifications/banner/banner-styling", height="530", alt="{Platform} Banner の例"`

## API リファレンス

- `Banner`
- `Card`
- `Icon`
- `Navbar`
- `Toast`
- `Ripple`
- [スタイル設定 & テーマ](../themes/overview.md)

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})