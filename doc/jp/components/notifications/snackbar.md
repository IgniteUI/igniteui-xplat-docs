---
title: $Platform$ Snackbar | インフラジスティックス
_description: $ProductName$ Snackbar コンポーネントを使用すると、開発者はモバイルおよびデスクトップ アプリケーション内に簡潔な 1 行のメッセージを簡単に統合できます。
_keywords: $ProductName$, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, $Platform$, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Snackbar コンポーネント
mentionedTypes: ['Snackbar']
_language: ja
---

# $Platform$ Snackbar (スナックバー)

$ProductName$ Snackbar コンポーネントは、画面の下部に簡潔なメッセージを表示することにより、操作に関するフィードバックを提供するために使用されます。

## $ProductName$ Snackbar の例

<code-view style="height: 230px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-overview" alt="$Platform$ Snackbar の例"
           github-src="notifications/snackbar/overview">
</code-view>

<div class="divider--half"></div>

### 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Snackbar` を使用する前に、次のように登録する必要があります:

```razor
IgbSnackbarModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Snackbar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcSnackbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcSnackbarComponent);
```

Snackbar コンポーネントを表示する最も簡単な方法は、`Show` メソッドを使用して、ボタン クリックで呼び出すことです。

```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar">Snackbar Message</igc-snackbar>
```

```razor
<div class="container vertical">
    <IgbButton onclick="snackbar.show()">Show Snackbar</IgbButton>
    <IgbSnackbar id="snackbar"> Snackbar Message </IgbSnackbar>
</div>

@code {

    protected override void OnInitialized()
    {
        IgbSnackbarModule.Register(IgniteUIBlazor);
        IgbButtonModule.Register(IgniteUIBlazor);
    }
}
```

## コード例

### 表示時間

`DisplayTime` プロパティを使用して、Snackbar コンポーネントが表示される期間を構成します。デフォルトでは、4000 ミリ秒に設定されています。

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-display-time"
           alt="$Platform$ Snackbar 表示時間の例"
           github-src="notifications/snackbar/display-time">
</code-view>

### Action Text (アクション テキスト)

デフォルトでは、Snackbar コンポーネントは、`DisplayTime` で指定された期間が経過すると自動的に非表示になります。`KeepOpen` プロパティを使用して、この動作を変更できます。この場合、Snackbar は非表示になりません。Snackbar の `ActionText` を使用すると、コンポーネント内にアクション ボタンを表示できます。

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-action-text"
           alt="$Platform$ Sanckbar アクション テキストの例"
           github-src="notifications/snackbar/action-text">
</code-view>

## スタイル設定

Snackbar コンポーネントは、いくつかの CSS パーツ (`base`、`message`、および `action`) を公開して、そのスタイルを完全に制御できるようにします。

```css
igc-snackbar::part(base) {
    background: #0d6efd;
    border-color: #0d6efd;
    color: white;
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-styling"
           alt="$Platform$ Sanckbar スタイル設定の例"
           github-src="notifications/snackbar/styling">
</code-view>

## API リファレンス

* `Snackbar`

<div class="divider--half"></div>

## その他のリソース

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
