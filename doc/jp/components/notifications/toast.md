---
title: {Platform} Toast Notifications | {ProductName}
_description: {ProductName} Toast コンポーネントを使用すると、開発者はモバイルおよびデスクトップ アプリケーション内に簡潔な 1 行のメッセージを簡単に統合できます。今すぐお試しください。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Toast コンポーネント
mentionedTypes: ['Toast']
_language: ja
---

# {Platform} Toast (トースト) の概要

{Platform} Toast (トースト) は、変更されたレコードの状態をエンド ユーザーに通知するメッセージ コンテンツを表示するために使用される超軽量で小さなポップアップ コンポーネントです。{Platform} トースト通知を画面の下部またはその他の指定された領域に簡単に配置して表示できます。または、シンプルで簡単な方法でそれらを却下することもできます。

{Platform} Toast コンポーネントは、主にシステム メッセージング、プッシュ通知、警告メッセージ、および情報に使用されます。ユーザーが却下することはできません。このコントロールには、アニメーション効果、トースト コンポーネントが表示される時間を構成するための表示時間プロパティ、スタイル設定などのさまざまな機能があります。

## {Platform} Toast の例

以下の単純な Ignite UI for {Platform} Toast の例を見てください。ボタンをクリックすると、アニメーションの通知メッセージがポップアップ表示されます。

`sample="/notifications/toast/overview", height="230", alt="{Platform} Toast の例"`


<div class="divider--half"></div>

### {ProductName} のToast Notification (トースト通知) の使用方法

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

次に、以下のように、{Platform} `Toast` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrToastModule, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrToastModule.register();
```

<!-- end: React -->

{Platform} `Toast` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbToastModule));
```

```ts
import { defineComponents, IgcToastComponent } from 'igniteui-webcomponents';

defineComponents(IgcToastComponent);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Calendar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

Toast コンポーネントを表示する最も簡単な方法は、`Show` メソッドを使用して、ボタン クリックで呼び出すことです。

```html
<igc-button onclick="toast.show()" variant="contained">Show Toast</igc-button>
<igc-toast id="toast">Toast Message</igc-toast>
```

```razor
<IgbButton @onclick=@OnToastButtonClick Variant=@ButtonVariant.Contained>Show Toast</IgbButton>
<IgbToast @ref="ToastRef">Toast Message</IgbToast>

@code {
    public IgbToast ToastRef { get; set; }

    protected override void OnInitialized()
    {
    }

    public void OnToastButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.Show();
        }
    }
}
```

```tsx
<IgrButton variant="contained" clicked={this.onShowButtonClicked}>
    <span>Show Toast</span>
</IgrButton>

<IgrToast ref={this.onToastRef}>
    <span>Toast Message</span>
</IgrToast>

public onToastRef(toast: IgrToast) {
    if (!toast) { return; }
    this.toastRef = toast;
}

public onShowButtonClicked() {
    if (this.toastRef) {
        this.toastRef.show();
    }
}
```

## コード例

### プロパティ

`DisplayTime` プロパティを使用して、Toast コンポーネントが表示される期間を構成します。デフォルトでは、4000 ミリ秒に設定されています。

デフォルトでは、Toast コンポーネントは、`DisplayTime` で指定された期間が経過すると自動的に非表示になります。`KeepOpen` プロパティを使用して、この動作を変更できます。このようにして、Toast は表示されたままになります。

```html
<igc-button onclick="toast.toggle()" variant="contained">Toggle Toast</igc-button>
<igc-button onclick="toast.keepOpen = !toast.keepOpen" variant="contained">Toggle keepOpen property</igc-button>
<igc-button onclick="toast.displayTime = 8000" variant="contained">Set DisplayTime to 8000</igc-button>

<igc-toast id="toast">Toast Message</igc-toast>
```

```razor
<IgbButton @onclick=@OnToggleToastButtonClick Variant="ButtonVariant.Contained">Toggle Toast</IgbButton>
<IgbButton @onclick=@OnToggleKeepOpenButtonClick Variant="ButtonVariant.Contained">Toggle KeepOpen Property</IgbButton>
<IgbButton @onclick=@OnDisplayTimeButtonClick Variant="ButtonVariant.Contained">Set DisplayTime to 8000</IgbButton>

<IgbToast @ref=ToastRef>Toast Message</IgbToast>

@code {
    public IgbToast ToastRef{  get;  set; }

    protected override void OnInitialized()
    {
    }

    public void OnToggleToastButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.Toggle();
        }
    }

    public void OnToggleKeepOpenButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.KeepOpen = !this.ToastRef.KeepOpen;
        }
    }

    public void OnDisplayTimeButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.DisplayTime = 8000;
        }
    }
}
```

```tsx
<div>
    <IgrButton variant="contained" clicked={this.onToggleButtonClicked}>
        <span>Toggle Toast</span>
    </IgrButton>
    <IgrButton variant="contained" clicked={this.onKeepOpenButtonClicked}>
        <span>Toggle keepOpen Property</span>
    </IgrButton>
    <IgrButton variant="contained" clicked={this.onDisplayTimeButtonClicked}>
        <span>Set DisplayTime to 8000</span>
    </IgrButton>
</div>

<IgrToast ref={this.onToastRef}>
    <span>Toast Message</span>
</IgrToast>

public onToastRef(toast: IgrToast) {
    if (!toast) { return; }
    this.toastRef = toast;
}

public onToggleButtonClicked() {
    if (this.toastRef) {
        this.toastRef.toggle();
    }
}

public onKeepOpenButtonClicked() {
    if (this.toastRef) {
        this.toastRef.keepOpen = !this.toastRef.keepOpen;
    }
}

public onDisplayTimeButtonClicked() {
    if (this.toastRef) {
        this.toastRef.displayTime = 8000;
    }
}
```

`sample="/notifications/toast/properties", height="230", alt="{Platform} Toast プロパティの例"`



## スタイル設定

タグ セレクターを使用して {Platform} `Toast` 通知を直接スタイル設定できます。

```css
igc-toast {
    background: #011627;
    color: #ECAA53;
    outline-color: #ECAA53;
}
```

`sample="/notifications/toast/styling", height="230", alt="{Platform} Toast スタイル設定の例"`

<div class="divider--half"></div>


## API リファレンス

 - `Calendar`
 - `DisplayTime`
 - `KeepOpen`
 - `Show`
 - `Toast`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})