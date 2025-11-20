---
title: {Platform} Avatar | レイアウト コントロール | インフラジスティックス
_description: インフラジスティックスの {Platform} Avatar コンポーネントを使用して、画像、アイコン、またはイニシャルを表示します。
_keywords: avatar, layout, {ProductName}, Infragistics, アバター, レイアウト, インフラジスティックス
_license: MIT
mentionedTypes: ["Avatar"]
_language: ja
---

# {Platform} Avatar (アバター)

{ProductName} アバターは、アプリケーションでイニシャル、画像、またはアイコンを表示するのに役立ちます。

## {Platform} Icon Avatar の例

`sample="/layouts/avatar/icon", height="80", alt="{Platform} Avatar の例"`

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} npm パッケージをインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Avatar` と必要な CSS をインポートする必要があります:

```tsx
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

`Avatar` を使用する前に、次のように登録する必要があります。


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule));
```
<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Avatar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

`Avatar` は、画像、イニシャル、またはアイコンを含むその他のコンテンツを表示できます。`Avatar` の宣言は次のように簡単です。

```html
<igc-avatar></igc-avatar>
```

```tsx
<IgrAvatar />
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

```tsx
<IgrAvatar>
    <IgrIcon name="home" />
</IgrAvatar>
```

```razor
<IgbAvatar>
  <IgbIcon Name="home" />
</IgbAvatar>
```

### イニシャル

`Initials` 属性が設定されている場合、アバターのすべての子要素は無視され、この属性に渡された文字列が表示されます。

```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```tsx
<IgrAvatar initials="AZ">
    <IgrIcon name="home" />
</IgrAvatar>
```

```razor
<!-- Initials("AZ") will be displayed instead of the icon. -->

<IgbAvatar Initials="AZ">
  <IgbIcon Name="home" />
</IgbAvatar>
```

`sample="/layouts/avatar/initials", height="80", alt="{Platform} Avatar の例"`



### 画像

`Src` 属性に静的アセットに有効な URL が割り当てられている場合、アバターは画像を表示することもできます。その場合、`Initials` 値は無視され、子要素は描画されません。

```html
<igc-avatar
  initials="AZ"
  src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
  alt="A photo of a man.">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```tsx
<IgrAvatar initials="AZ"
           src="https://static.infragistics.com/xplatform/images/people/men/1.jpg"
           alt="A photo of a man.">
    <IgrIcon name="home" />
</IgrAvatar>
```


```razor
<IgbAvatar Initials="AZ"
           Src="https://static.infragistics.com/xplatform/images/people/GUY01.png"
           Alt="A photo of a man.">
  <IgbIcon Name="home" />
</IgbAvatar>
```

`sample="/layouts/avatar/image", height="80", alt="{Platform} Avatar の例"`


### 形状

アバターは、`circle`、`rounded`、`square` の 3 つの形状をサポートしています。アバターの形状は `square` であり、`shape` 属性を介して変更できます。

`sample="/layouts/avatar/shape", height="80", alt="{Platform} Avatar の例"`



### サイズ

形状とは別に、アバターのサイズも `--ig-size` CSS 変数を利用して変更できます。サポートされているサイズは、`small` (デフォルト)、`medium`、`large` です。次のコード スニペットは、異なるコンポーネント サイズを使用する方法を示しています。

```css
igc-avatar {
    --ig-size: var(--ig-size-large);
}
```

`sample="/layouts/avatar/size", height="130", alt="{Platform} Avatar の例"`



### スタイル設定

`Avatar` コンポーネントはいくつかの CSS パーツを公開し、スタイルを完全に制御できるようにします。

|名前|説明|
|--|--|
| `base` | アバターの基本ラッパー。 |
| `initials` | アバターのイニシャル ラッパー。 |
| `image` | アバターの画像ラッパー。 |
| `icon` | アバターのアイコン ラッパー。 |

```css
igc-avatar::part(base) {
  --size: 60px;
  color: var(--ig-success-500-contrast);
  background: var(--ig-success-500);;
  border-radius: 20px;
}
```

`sample="/layouts/avatar/styling", height="150", alt="{Platform} Avatar の例"`

<div class="divider--half"></div>


## API リファレンス

 - `Avatar`
- [スタイル設定 & テーマ](../themes/overview.md)

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})