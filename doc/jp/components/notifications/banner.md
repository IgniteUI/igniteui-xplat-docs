---
title: {Platform} Banner | インフラジスティックス
_description: {ProductName} Banner コンポーネントを使用すると、開発者は、モバイル アプリケーションやデスクトップ アプリケーション内に、短くて邪魔にならないメッセージ (およびオプションのアクション) を簡単に統合できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Banner components, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Banner コンポーネント
mentionedTypes: ['Banner']
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

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

### Banner の表示

Banner コンポーネントを表示するには、ボタン クリックで `Show` メソッドを呼び出します。バナーは、要素がページ テンプレートに挿入された場所にその他すべてのコンテンツを移動して表示されます。通常、閉じるためのユーザー操作をほとんど必要としない非侵入型コンテンツを表示します。

```html
<igc-button onclick="banner.show()">Show Banner</igc-button>

<igc-banner id="banner">
    You are currently offline.
</igc-banner>
```

> [!NOTE]
> `Banner` には、バナーを閉じるデフォルトの `OK` アクション ボタンが含まれています。


## 例

`Banner` コンポーネントは、マテリアル デザイン バナー ガイドラインにできるかぎり準拠しながらコンテンツをテンプレート化します。

### バナー メッセージの変更

`igc-banner` タグに渡されるコンテンツを変更することによりバナーに表示されるメッセージを設定できます。指定したバナー領域にテキストが表示され、表示時にバナーはデフォルト テンプレートを使用します。以下は、サンプル バナーのコンテンツを変更してより多くの情報を提供します。

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

### アイコンの追加

バナーの `prefix` スロットを使用して、[`igc-icon`](../layouts/icon.md) をバナーに表示できます。Icon は常にバナー メッセージの最初に配置されます。

> [!NOTE]
> 複数の `igc-icon` 要素が挿入される場合、バナーはそれらすべてを最初に配置しようとします。`igc-icon` は 1 つのみ、直接渡すことに注意してください。

`igc-icon` をバナーに渡すには、`prefix` スロットを使用します。

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

バナー メッセージで `igc-icon` を使用する場合は、バナーのコンテンツに挿入するだけです。

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
    <igc-icon name="signal_wifi_off"></igc-icon>
</igc-banner>
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

`sample="/notifications/banner/banner-sample-2", height="530", alt="{Platform} Banner の例"`

### イベントにバインド

バナー コンポーネントは、閉じられるときに `igcClosing` イベントと `igcClosed` イベントを発行します。`igcClosing` イベントはキャンセル可能です。[`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) インターフェイスを使用し、発行されたオブジェクトの `cancelable` プロパティは **true** に設定されています。`igcClosing` イベントをキャンセルすると、対応する終了アクションとイベントはトリガーされません。バナーは閉じられず、`igcClosed` イベントも発行されません。

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



> Google の[マテリアル デザイン ガイドライン](https://material.io/design/components/banners.html#anatomy)では、バナーはに表示するボタンは 2 つまでです。`Banner` は、`actions` スロットの要素数を明示的に制限しませんが、マテリアル デザイン ガイドに従う場合は、最大 2 つの要素を使用することを強くお勧めします。


閉じるオプション (`'Continue Offline'`) は詳細なロジックを必要としないため、`Hide` のみの呼び出しが可能です。しかし、確認アクション (`'Turn On Wifi'`) は追加のロジックを必要とするため、コンポーネントで定義する必要があります。次に、`click` イベントのイベント リスナーを追加します。最後に、変更するたびに `refreshBanner()` メソッドを呼び出します。これにより、`wifiState` に基づいてバナーを切り替えます。

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

最後に、WiFi の状態に関するメッセージを表示する `Toast` を追加します。以下はテンプレート化したバナーのデモです。

`sample="/notifications/banner/banner-advanced-sample", height="530", alt="{Platform} Banner の例"`

## スタイル設定

Banner コンポーネントは、いくつかの CSS パーツ (`base`、`spacer`、`message`、`illustration`、`content` および `actions`) を公開して、そのスタイルを完全に制御できるようにします。

```css
igc-banner::part(spacer) {
    background: #dedede;
}

igc-banner::part(illustration) {
    color: #666666;
}

igc-banner::part(content) {
    color: #151515;
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

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})