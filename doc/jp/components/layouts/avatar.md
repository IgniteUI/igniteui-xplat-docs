---
title: $Platform$ Avatar | レイアウト コントロール | インフラジスティックス
_description: インフラジスティックスの $Platform$ Avatar コンポーネントを使用して、画像、アイコン、またはイニシャルを表示します。
_keywords: avatar, layout, $ProductName$, Infragistics, アバター, レイアウト, インフラジスティックス
mentionedTypes: ['Avatar']
_language: ja
---

# $Platform$ Avatar (アバター)

$ProductName$ アバターは、アプリケーションでイニシャル、画像、またはアイコンを表示するのに役立ちます。

## $Platform$ Icon Avatar の例

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-icon"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/icon">
</code-view>

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Avatar` を使用する前に、次のように登録する必要があります。

```razor
IgbAvatarModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Avatar` コンポーネントに適用する必要があります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **BlazorServer** プロジェクトの **Pages/_Host.cshtml**フ ァイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

`Avatar` は、画像、イニシャル、またはアイコンを含むその他のコンテンツを表示できます。`Avatar` の宣言は次のように簡単です。

```html
<igc-avatar></igc-avatar>
```

```razor
<IgbAvatar />
```

アバターには、コンテキストに基づいてさまざまなコンテンツを描画できるようにするいくつかの属性があります。アバターの境界にコンテンツを表示する最も基本的な方法は、開始タグと終了タグの間にコンテンツを提供することです。

```html
<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```razor
<IgbAvatar>
  <IgbIcon Name="home" />
</IgbAvatar>
```

### イニシャル

`initials` 属性が設定されている場合、アバターのすべての子要素は無視され、この属性に渡された文字列が表示されます。

```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```razor
<!-- Initials("AZ") will be displayed instead of the icon. -->

<IgbAvatar Initials="AZ">
  <IgbIcon Name="home" />
</IgbAvatar>
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-initials"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/initials">
</code-view>

### 画像

`src` 属性に静的アセットに有効な URL が割り当てられている場合、アバターは画像を表示することもできます。その場合、`initials` 値は無視され、子要素は描画されません。

```html
<igc-avatar
  initials="AZ"
  src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
  alt="A photo of a man.">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```razor
<IgbAvatar Initials="AZ"
           Src="https://static.infragistics.com/xplatform/images/people/GUY01.png"
           Alt="A photo of a man.">
  <IgbIcon Name="home" />
</IgbAvatar>
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-image"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/image">
</code-view>

アバターは、`circle`、`rounded`、`square` の 3 つの形状をサポートしています。アバターの形状は、`shape` 属性を介して変更できます。

### 形状

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-shape"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/shape">
</code-view>

### サイズ

形状とは別に、`size` 属性を設定することでアバターのサイズを変更することもできます。サポートされているサイズは `small`、`medium`、`large` です。

<code-view style="height: 130px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-size"
           alt="$Platform$ Avatar の例"
           github-src="layouts/avatar/size">
</code-view>

### スタイル設定

アバター コンポーネントは、すべてのスタイル プロパティを変更するために使用できる `base` パーツを公開します。

```css
igc-avatar::part(base) {
  --size: 72px;
  color: olive;
  background: beige;
  border-radius: 20px;
}
```

<!-- WebComponents -->

## API リファレンス

* `Avatar`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub** (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->