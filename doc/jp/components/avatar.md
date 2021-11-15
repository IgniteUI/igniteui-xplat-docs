---
title: $Platform$ Avatar | レイアウト コントロール | インフラジスティックス
_description: インフラジスティックスの $Platform$ Avatar コンポーネントを使用して、画像、アイコン、またはイニシャルを表示します。
_keywords: avatar, layout, $ProductName$, Infragistics, アバター, レイアウト, インフラジスティックス
_language: ja
---

# $Platform$ Avatar (アバター)

<p class="highlight">$ProductName$ アバターは、アプリケーションでイニシャル、画像、またはアイコンを表示するのに役立ちます。</p>
<div class="divider"></div>

## 使用方法

開始するには、typescript ファイルに [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html) をインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出してコンポーネントを登録する必要があります。

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents'; 

defineComponents(IgcAvatarComponent);
```

アバター コンポーネントをインポートしたら、使用を開始する準備ができたので、最初のアバターを追加しましょう。

アバター コンポーネントは、画像、イニシャル、またはアイコンを含むその他のコンテンツを表示できます。
アバターの宣言は次のように簡単です:

```html
<igc-avatar></igc-avatar>
```

アバターには、コンテキストに基づいてさまざまなコンテンツを描画できるようにするいくつかの属性があります。アバターの境界にコンテンツを表示する最も基本的な方法は、開始タグと終了タグの間にコンテンツを提供することです。

```html
<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

[`initials`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html#initials) 属性が設定されている場合、アバターのすべての子要素は無視され、この属性に渡された文字列が表示されます。


```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

[`src`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html#src) 属性に静的アセットに有効な URL が割り当てられている場合、アバターは画像を表示することもできます。その場合、`initials` 値は無視され、子要素は描画されません。

```html
<igc-avatar 
  initials="AZ"
  src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
  alt="A photo of a man.">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

アバターは、`circle`、`circle`、`square`の 3 つの形状をサポートしています。アバターの形状は、[`shape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html#shape) 属性を介して変更できます。

形状とは別に、[`size`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html#size) 属性を設定することでアバターのサイズを変更することもできます。サポートされているサイズは `small`、`medium`、`large` です。

## $Platform$ Avatar の例

### アイコン

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-icon"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/icon">
</code-view>

### イニシャル

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-initials"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/initials">
</code-view>

### 画像

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-image"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/image">
</code-view>

### 形状

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-shape"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/shape">
</code-view>

### サイズ

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-size"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/size">
</code-view>

## スタイル設定

アバター コンポーネントは、すべてのスタイル プロパティを変更するために使用できる `base` パーツを公開します。

```css
igc-avatar::part(base) {
  --size: 72px;
  color: olive;
  background: beige;
  border-radius: 20px;
}
```

## API リファレンス

* [IgcAvatarComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html)


## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)
