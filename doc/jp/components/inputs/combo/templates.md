---
title: {Platform} コンボボックス コンポーネントのテンプレート – {ProductName}
_description: {ProductName} コンボボックス コンポーネントのテンプレート
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} コンボボックス コンポーネントのテンプレート
mentionedTypes: ['Combo']
_language: ja
---

# {Platform} コンボボックスのテンプレート

{ProductName} コンボボックス コンポーネントを使用すると、項目、グループ ヘッダー、空のリスト、アイコンなど、さまざまな領域のカスタム テンプレートを定義できます。

## コンボボックス テンプレートの例

`sample="/inputs/combo/templates", height="400", alt="{Platform} コンボ テンプレート"`



## テンプレート タイプ

### Item Template (項目テンプレート)

`itemTemplate` はカスタム テンプレートであり、定義されている場合は、オプションのリスト内の項目を描画するときに使用する必要があります。

```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const itemTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`
      <span><b>${item.name}</b> [${item.id}]</span>
  `;
};

combo.itemTempate = itemTemplate;
```

<!-- Blazor -->
To template your items in a Blazor app, you need to define a template in a separate JavaScript file. Let's create a new file under the `wwwroot` directory called `templates.js`.

In this file we can declare a new item template like so:

```js
const html = window.igTemplating.html;

const itemTemplate = ({ item }) => {
    return html`<span><b>${item.Name}</b> [${item.Id}]</span>`;
}

igRegisterScript("ComboItemTemplate", itemTemplate, false);
```

Make sure to include the `templates.js` file in the `index.html` under `wwwroot`.

```html
<body>
    <!-- importing JS used in the razor pages -->
    <script src="templates.js"></script>
</body>
```

Then in our application we can refer to the template we declared via the `ItemTemplateScript` property.

```razor
<IgbCombo ItemTemplateScript="ComboItemTemplate"></IgbCombo>
```

<!-- end: Blazor -->

### Group Header Template (グループ ヘッダー テンプレート)

`groupHeaderTemplate` はカスタム テンプレートであり、定義されている場合は、オプションのリストでグループ ヘッダーを描画するときに使用する必要があります。

```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const groupHeaderTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`<div>Country of ${item.country}</div>`;
};

combo.groupHeaderTemplate = groupHeaderTemplate;
```

<!-- Blazor -->
First define the group header template:

```js
const html = window.igTemplating.html;

const groupHeaderTemplate = ({ item }) => {
    return html`<span>Country of ${item.Country}</span>`;
}

igRegisterScript('ComboGroupHeaderTemplate', groupHeaderTemplate, false)
```

Then in our application we can refer to the template we declared via the `GroupHeaderTemplateScript` property.

```razor
<IgbCombo GroupHeaderTemplateScript="ComboGroupHeaderTemplate"></IgbCombo>
```

<!-- end: Blazor -->

## スロット
カスタム テンプレート以外に、{ProductName} コンボボックス コンポーネントは、ユーザーがカスタム コンテンツをさまざまなコンボ パーツに渡すことを可能にするいくつかのスロットを公開します。

### ヘッダー スロット
オプションのリストの上にカスタム ヘッダーをレンダリングするには、コンテンツを `header` スロットに渡します。

```html
<igc-combo>
  <div slot="header">Custom header content</div>
</igc-combo>
```

```razor
<IgbCombo> 
    <header slot="header">
        Header content goes here
    </header>
</IgbCombo>
```

### フッター スロット
オプションのリストの下にカスタム フッターをレンダリングするには、コンテンツを `footer` スロットに渡します。

```html
<igc-combo>
  <div slot="footer">Custom footer content</div>
</igc-combo>
```

```razor
<IgbCombo> 
    <footer slot="footer">
        Footer content goes here
    </footer>
</IgbCombo>
```

### 空のリスト スロット
フィルタリング操作で結果が返されない場合にカスタム コンテンツをレンダリングするには、`empty` スロットを使用します。

```html
<igc-combo>
  <div slot="empty">¯\_(ツ)_/¯</div>
</igc-combo>
```

```razor
<IgbCombo> 
    <div slot="empty">¯\_(ツ)_/¯</div>
</IgbCombo>
```

### トグル アイコン スロット
コンボ入力のトグル アイコンは、`toggle-icon` スロットを介して変更することもできます。

```html
<igc-combo>
  <igc-icon name="down" slot="toggle-icon"></igc-icon>
</igc-combo>
```

```razor
<IgbCombo> 
    <IgbIcon name="down" slot="toggle-icon"></IgbIcon>
</IgbCombo>
```

### クリア アイコン スロット
クリア アイコンは、`clear-icon` スロットを介して変更できます。

```html
<igc-combo>
  <igc-icon name="clear" slot="clear-icon"></igc-icon>
</igc-combo>
```

```razor
<IgbCombo> 
    <IgbIcon name="clear" slot="clear-icon"></IgbIcon>
</IgbCombo>
```

<!-- WebComponents -->
## API リファレンス

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

<!-- end: WebComponents -->

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
