---
title: {Platform} Dialog | インフラジスティックス
_description: {ProductName} Dialog コンポーネントを使用すると、開発者はアプリ コンテンツの上にダイアログ ウィンドウを簡単に統合できます。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} ダイアログ コンポーネント
_language: ja
mentionedTypes: ['Dialog']
---

# {Platform} (ダイアログ) の概要

{ProductName} Dialog コンポーネントは、情報を表示したり、ユーザーにアクションや確認を促すために使用されます。これはモーダル ウィンドウに表示されます。つまり、ダイアログを閉じる特定のアクションが実行されるまで、ユーザーはメイン アプリを操作できません。

## {ProductName} Dialog の例

このサンプルでは、{Platform} で Dialog コンポーネントを作成する方法を示します。

`sample="/notifications/dialog/overview", height="400", alt="{Platform} Dialog の例"`


<div class="divider--half"></div>

### 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

```ts
import { defineComponents, IgcDialogComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent);
```

<!-- Blazor -->
{Platform} `Dialog` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDialogModule));
```
<!-- end: Blazor -->

Dialog コンポーネントを表示する最も簡単な方法は、`Show` メソッドを使用して、ボタン クリックで呼び出すことです。

```razor
<div class="container vertical">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>Show Dialog</IgbButton>
    <IgbDialog @ref="DialogRef" Title="Confirmation">
        <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>Cancel</IgbButton>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>OK</IgbButton>
    </IgbDialog>
</div>

@code {
    public IgbDialog DialogRef;

    public void OnDialogShow()
    {
        if (this.DialogRef != null)
        {
            this.DialogRef.Show();
        }
    }

    public void OnDialogHide()
    {
        if (this.DialogRef != null)
        {
            this.DialogRef.Hide();
        }
    }
}
```

```html
<igc-button onclick="dialog.show()" variant="contained">Show Dialog</igc-button>

<igc-dialog id="dialog" title="Confirmation">
    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">Cancel</igc-button>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">OK</igc-button>
</igc-dialog>
```

Dialog コンポーネントは `Open` プロパティを提供します。これにより、アプリケーション シナリオに従ってその状態を構成できます。

Dialog のタイトルを設定するには、`Title` プロパティを使用します。ただし、`title` スロットにコンテンツが指定されている場合は、プロパティよりも優先されます。

アクション ボタンまたは追加情報は、`footer` スロットを介してダイアログの下部に配置できます。そこにコンテンツが追加されていない場合、デフォルトの `[OK]` ボタンが表示され、クリックするとダイアログが閉じます。このボタンを表示したくない場合は、`HideDefaultAction` プロパティを **true** に設定できます。デフォルト値は **false** です。

### 閉じる (Closing)

デフォルトでは、ユーザーが `ESC` キーを押すと、ダイアログは自動的に閉じられます。`KeepOpenOnEscape` プロパティを使用して、この動作を防ぐことができます。デフォルト値は **false** です。ダイアログに開いているドロップダウン (または `ESC` を内部で処理する必要があるその他の要素) がある場合、`ESC` を 1 回押すとドロップダウンが閉じ、もう一度押すとダイアログが閉じます。

`CloseOnOutsideClick` プロパティを使用して、ダイアログの外側をクリックしたときにダイアログを閉じるかどうかを構成します。デフォルト値は **false** です。

<!-- Angular, WebComponents -->

`sample="/notifications/dialog/closing-variations", height="400", alt="{Platform} Dialog Closing のバリエーション"`

<!-- end: Angular, WebComponents -->

### (フォーム)

属性 `method="dialog"` がある場合、フォーム要素はダイアログを閉じることができます。フォームを送信すると、ダイアログが閉じられます。

`sample="/notifications/dialog/form", height="500", alt="{Platform} Dialog Form の例"`


## スタイル設定

Dialog コンポーネントは、いくつかの CSS パーツ (`base`、`title`、`content` および `footer`) を公開して、そのスタイルを完全に制御できるようにします。

```css
igc-dialog::part(content) {
    background: #011627;
    color: white;
}

igc-dialog::part(title),
igc-dialog::part(footer) {
    background: #011627;
    color: #ECAA53;
}
```

`sample="/notifications/dialog/styling", height="400", alt="{Platform} Dialog スタイル設定の例"`


<div class="divider--half"></div>

## API リファレンス

- `KeepOpenOnEscape`
- `CloseOnOutsideClick`
- `Hide`
- `HideDefaultAction`
- `Open`
- `Title`
- `Dialog`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})