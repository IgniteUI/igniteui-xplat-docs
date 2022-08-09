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

このサンプルは、`Toast` コンポーネントの作成方法を示しています:

<code-view style="height: 230px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/toast-overview" alt="$Platform$ Toast の例"
           github-src="notifications/toast/overview">
</code-view>

<div class="divider--half"></div>

### 使用方法

<!-- WebComponents -->

まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する $ProductName$ npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Toast` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrToastModule, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrToastModule.register();
```

<!-- end: React -->

`Toast` を使用する前に、次のように登録する必要があります:

```razor
IgbToastModule.Register(IgniteUIBlazor);
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
        IgbButtonModule.Register(IgniteUIBlazor);
        IgbToastModule.Register(IgniteUIBlazor);
    }

    public void OnToastButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
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

public onToastRef(toast: IgrToast){
    if (!toast) { return; }
    this.toastRef = toast;
}

public onShowButtonClicked() {
    if(this.toastRef){
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
        IgbButtonModule.Register(IgniteUIBlazor);
        IgbToastModule.Register(IgniteUIBlazor);
    }

    public void OnToggleToastButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.Toggle();
        }
    }

    public void OnToggleKeepOpenButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.KeepOpen = !this.ToastRef.KeepOpen;
        }
    }

    public void OnDisplayTimeButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
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

public onToastRef(toast: IgrToast){
    if (!toast) { return; }
    this.toastRef = toast;
}

public onToggleButtonClicked() {
    if(this.toastRef){
        this.toastRef.toggle();
    }
}

public onKeepOpenButtonClicked() {
    if(this.toastRef){
        this.toastRef.keepOpen = !this.toastRef.keepOpen;
    }
}

public onDisplayTimeButtonClicked() {
    if(this.toastRef){
        this.toastRef.displayTime = 8000;
    }
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-properties"
           alt="$Platform$ Toast プロパティの例"
           github-src="notifications/toast/properties">
</code-view>

## スタイル設定

タグ セレクターを直接使用して、Toast のスタイルを設定できます: 

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

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例 (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- React -->

* [Ignite UI for React **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [**GitHub** の Ignite UI for React の例v](https://github.com/IgniteUI/igniteui-react-examples)

<!-- end: React -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

## API メンバー

 - `Calendar`
 - `DisplayTime`
 - `KeepOpen`
 - `Show`
 - `Toast`