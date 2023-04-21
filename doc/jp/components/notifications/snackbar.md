---
title: {Platform} Snackbar | インフラジスティックス
_description: {ProductName} Snackbar コンポーネントを使用すると、開発者はモバイルおよびデスクトップ アプリケーション内に簡潔な 1 行のメッセージを簡単に統合できます。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Snackbar コンポーネント
mentionedTypes: ['Snackbar']
_language: ja
---

# {Platform} Snackbar (スナックバー)

{ProductName} Snackbar コンポーネントは、画面の下部に簡潔なメッセージを表示することにより、操作に関するフィードバックを提供するために使用されます。

## {ProductName} Snackbar の例

このサンプルは、`Snackbar` コンポーネントを作成する方法を示しています。

`sample="/notifications/snackbar/overview", height="230", alt="{Platform} Snackbar の例"`


<div class="divider--half"></div>

### 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Snackbar` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrSnackbarModule, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSnackbarModule.register();
```

<!-- end: React -->

`Snackbar` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSnackbarModule));
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Snackbar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

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
```

```tsx
<IgrButton variant="contained" clicked={this.onShowButtonClicked}>
    <span>Show Snackbar</span>
</IgrButton>
<IgrSnackbar ref={this.onSnackbarRef}>
    <span>Snackbar Message</span>
</IgrSnackbar>

public onSnackbarRef(snackbar: IgrSnackbar) {
    if (!snackbar) { return; }
    this.snackbarRef = snackbar;
}
public onShowButtonClicked() {
    if (this.snackbarRef) {
        this.snackbarRef.show();
    }
}
```

## コード例

### 表示時間

`DisplayTime` プロパティを使用して、Snackbar コンポーネントが表示される期間を構成します。デフォルトでは、4000 ミリ秒に設定されています。

`sample="/notifications/snackbar/display-time", height="230", alt="{Platform} Snackbar 表示時間の例"`



### Action Text (アクション テキスト)

デフォルトでは、Snackbar コンポーネントは、`DisplayTime` で指定された期間が経過すると自動的に非表示になります。`KeepOpen` プロパティを使用して、この動作を変更できます。この場合、Snackbar は非表示になりません。Snackbar の `ActionText` を使用すると、コンポーネント内にアクション ボタンを表示できます。

`sample="/notifications/snackbar/action-text", height="230", alt="{Platform} Sanckbar アクション テキストの例"`



## スタイル設定

Snackbar コンポーネントは、いくつかの CSS パーツ (`base`、`message`、および `action`) を公開して、そのスタイルを完全に制御できるようにします。

```css
igc-snackbar::part(base) {
    background: #0d6efd;
    border-color: #0d6efd;
    color: white;
}
```

`sample="/notifications/snackbar/styling", height="230", alt="{Platform} SnackBar スタイル設定の例"`

<div class="divider--half"></div>


## API リファレンス

 - `ActionText`
 - `DisplayTime`
 - `KeepOpen`
 - `Show`
 - `Snackbar`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})