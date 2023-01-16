---
title: {Platform} Dialog | インフラジスティックス
_description: {ProductName} Dialog コンポーネントを使用すると、開発者はアプリ コンテンツの上にダイアログ ウィンドウを簡単に統合できます。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} ダイアログ コンポーネント
_language: ja
mentionedTypes: ['Dialog']
---

# {Platform} (ダイアログ)

{ProductName} Dialog コンポーネントは、情報を表示したり、ユーザーにアクションや確認を促すために使用されます。これはモーダル ウィンドウに表示されます。つまり、ダイアログを閉じる特定のアクションが実行されるまで、ユーザーはメイン アプリを操作できません。

## {ProductName} Dialog の例

このサンプルでは、Dialog コンポーネントを作成する方法を示します。

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-overview" alt="{Platform} Dialog の例"
           github-src="notifications/dialog/overview">
</code-view>

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

Dialog コンポーネントを表示する最も簡単な方法は、`show` メソッドを使用して、ボタン クリックで呼び出すことです。

```html
<igc-button onclick="dialog.show()" variant="contained">Show Dialog</igc-button>

<igc-dialog id="dialog" title="Confirmation">
    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">Cancel</igc-button>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">OK</igc-button>
</igc-dialog>
```

Dialog コンポーネントは `open` プロパティを提供します。これにより、アプリケーション シナリオに従ってその状態を構成できます。

Dialog のタイトルを設定するには、`title` プロパティを使用します。ただし、`title` スロットにコンテンツが指定されている場合は、プロパティよりも優先されます。

アクション ボタンまたは追加情報は、`footer` スロットを介してダイアログの下部に配置できます。そこにコンテンツが追加されていない場合、デフォルトの `[OK]` ボタンが表示され、クリックするとダイアログが閉じます。このボタンを表示したくない場合は、`hideDefaultAction` プロパティを **true** に設定できます。デフォルト値は **false** です。

### 閉じる (Closing)

デフォルトでは、ユーザーが `ESC` キーを押すと、ダイアログは自動的に閉じられます。`closeOnEscape` プロパティを使用して、この動作を防ぐことができます。デフォルト値は **true** です。ダイアログに開いているドロップダウン (または `ESC` を内部で処理する必要があるその他の要素) がある場合、`ESC` を 1 回押すとドロップダウンが閉じ、もう一度押すとダイアログが閉じます。

`closeOnOutsideClick` プロパティを使用して、ダイアログの外側をクリックしたときにダイアログを閉じるかどうかを構成します。デフォルト値は **false** です。

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-closing-variations" alt="{Platform} Dialog Closing のバリエーション"
           github-src="notifications/dialog/closing-variations">
</code-view>

### (フォーム)

属性 `method="dialog"` がある場合、フォーム要素はダイアログを閉じることができます。フォームを送信すると、ダイアログが閉じられます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-form" alt="{Platform} Dialog Form の例"
           github-src="notifications/dialog/form">
</code-view>

## スタイル設定

Dialog コンポーネントは、いくつかの CSS パーツ (`base`、`title`、`content` および `footer`) を公開して、そのスタイルを完全に制御できるようにします。

```css
igc-dialog::part(content) {
    background: #011627;
    color:white;
}

igc-dialog::part(title),
igc-dialog::part(footer) {
    background: #011627;
    color:#ECAA53;
}
```

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-styling" alt="{Platform} Dialog スタイル設定の例"
           github-src="notifications/dialog/styling">
</code-view>


<div class="divider--half"></div>

## API リファレンス

- `closeOnEscape`
- `closeOnOutsideClick`
- `hide`
- `hideDefaultAction`
- `open`
- `title`
- `Dialog`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})