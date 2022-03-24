---
title: $Platform$ Toast | インフラジスティックス
_description: $ProductName$ Toast コンポーネントを使用すると、開発者はモバイルおよびデスクトップ アプリケーション内に簡潔な 1 行のメッセージを簡単に統合できます。
_keywords: $ProductName$, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, $Platform$, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Toast コンポーネント
mentionedTypes: ['Toast']
_language: ja
---

# $Platform$ Toast (トースト)

$ProductName$ Toast コンポーネントは、主にシステム メッセージ、プッシュ通知、警告メッセージ、および情報に使用されます。ユーザーが却下することはできません。

## $ProductName$ Toast の例

<code-view style="height: 230px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/toast-overview" alt="$Platform$ Toast の例"
           github-src="notifications/toast/overview">
</code-view>

<div class="divider--half"></div>

### 使用方法

まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`Toast` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcToastComponent } from 'igniteui-webcomponents';

defineComponents(IgcToastComponent);
```

Toast コンポーネントを表示する最も簡単な方法は、`Show` メソッドを使用して、ボタン クリックで呼び出すことです。

```html
<igc-button onclick="toast.show()" variant="contained">Show Toast</igc-button>
<igc-toast id="toast">Toast Message</igc-toast>
```

## コード例

### プロパティ

`DisplayTime` プロパティを使用して、Toast コンポーネントが表示される期間を構成します。デフォルトでは、4000 ミリ秒に設定されています。

デフォルトでは、Toast コンポーネントは、`DisplayTime` で指定された期間が経過すると自動的に非表示になります。`KeepOpen` プロパティを使用して、この動作を変更できます。このようにして、Toast  は表示されたままになります。

```html
<igc-button onclick="toast.toggle()" variant="contained">Toggle Toast</igc-button>
<igc-button onclick="toast.keepOpen = !toast.keepOpen" variant="contained">Toggle keepOpen property</igc-button>
<igc-button onclick="toast.displayTime = 8000" variant="contained">Set DisplayTime to 8000</igc-button>
</div>
<igc-toast id="toast">Toast Message</igc-toast>
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-properties"
           alt="$Platform$ Toast プロパティの例"
           github-src="notifications/toast/properties">
</code-view>

## スタイル設定

タグ セレクターを直接使用して、Toast  のスタイルを設定できます: 

```css
igc-toast {
    background: #011627;
    color: #ECAA53;
    outline-color: #ECAA53;
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-styling"
           alt="$Platform$ Toast スタイル設定の例"
           github-src="notifications/toast/styling">
</code-view>

## API リファレンス

* `Toast`

<div class="divider--half"></div>

## その他のリソース

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
