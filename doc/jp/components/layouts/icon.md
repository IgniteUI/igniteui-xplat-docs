---
title: {Platform} Icon コンポーネント | {ProductName}
_description: {Platform} Icon コンポーネントを簡単に使い始める方法をご覧ください。アイコンを選択し、さまざまなスタイル設定オプションから選択して、さらにカスタマイズします。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Icon components, {Platform} Icon controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Switch コンポーネント, {Platform} Icon コントロール
mentionedTypes: ['Icon']
_language: ja
---

# {Platform} Icon (アイコン) の概要

{Platform} Icon コンポーネントを使用すると、フォントを簡単に表示したり、事前定義された SVG アイコンの大規模なセットから選択したりできます。プロジェクトのカスタム フォント アイコンを作成することもできます。多数の属性を利用して、使用中のアイコンのサイズを定義または変更したり、さまざまなスタイルをアイコンに適用したりできます。

## {Platform} Icon の例

`sample="/layouts/icon/sizing", height="60", alt="{Platform} Icon の例"`


<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

```ts
import { defineComponents, IgcIconComponent } from "igniteui-webcomponents";

defineComponents(IgcIconComponent);
```

<!-- end: WebComponents -->

`Icon` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbIconModule));
```

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Icon` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrIcon, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrIconModule.register();
```

<!-- end: React -->

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Icon` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Icon` には、それ自体にアイコンは含まれていません。これは、登録された SVG 画像を表示するためのコンジットです。

### アイコンの追加

<!-- WebComponents -->

画像をアイコンとして登録するには、アイコンをアイコン コレクションに追加できるアイコン レジストリ サービスから 2 つのユーティリティ関数のいずれかをインポートするだけです。

```ts
import {
  registerIcon,
  registerIconFromText,
} from "igniteui-webcomponents";
```

`registerIcon` 関数を使用すると、SVG 画像を外部ファイルからアイコンとして登録できます。

```ts
registerIcon(
  "search",
  "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg",
  "material"
);
```

<!-- end: WebComponents -->

<!-- Blazor -->

画像をアイコンとして登録するには、単一の `Icon` 要素で 2 つの「register」メソッドの 1 つを呼び出すだけで、アイコンをページ上のアイコン コレクションに追加できます。

`RegisterIcon` メソッドを使用すると、SVG 画像を外部ファイルからアイコンとして登録できます。

```razor
<IgbIcon @ref="@IconRef" />

@code {
  private IgbIcon IconRef { get; set; }

  protected override void OnAfterRender(bool firstRender)
  {
     base.OnAfterRender(firstRender);
     if (this.IconRef != null && firstRender)
     {
       this.IconRef.RegisterIcon("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
     }
  }
}
```

<!-- end: Blazor -->

<!-- React -->

画像をアイコンとして登録するには、1 つの `Icon` 要素で 2 つの「登録」メソッドのいずれかを呼び出すだけで、ページ上のアイコン コレクションにアイコンを追加できます。

`RegisterIcon` メソッドを使用すると、外部ファイルから SVG 画像をアイコンとして登録できます。

```tsx

<IgrIcon ref={this.iconRef} iconName="search" collection="material" />

public iconRef(icon: IgrIcon) {
    if (!icon) {
        return;
    }

    icon.registerIcon("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
}
```

<!-- end: React -->

上記の方法では、`search` という名前のアイコンが `material` という名前のコレクションに追加されます。

次に、新しく登録されたアイコンを使用するには、名前とコレクションを `Icon` 要素に渡すだけです。

```html
<igc-icon name="search" collection="material"></igc-icon>
```

```razor
IgbIcon IconName="search" Collection="material" />
```

```tsx
<IgrIcon iconName="search" collection="material" />
```

アイコンを登録する 2 番目の方法は、SVG 文字列を `RegisterIconFromText` メソッドに渡すことです。

```ts
const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

registerIconFromText("search", searchIcon, "material");
```

```razor
<IgbIcon @ref="@IconRef" />

@code {
  private IgbIcon IconRef { get; set; }

  protected override void OnAfterRender(bool firstRender)
  {
     base.OnAfterRender(firstRender);
     if (this.IconRef != null && firstRender)
     {
       const string searchIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
       this.IconRef.RegisterIconFromText("search", searchIcon, "material");
     }
  }
}
```

```tsx

<IgrIcon ref={this.iconRef} iconName="search" collection="material" />

public iconRef(icon: IgrIcon) {
    if (!icon) {
        return;
    }

    const searchIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

    icon.registerIconFromText("search", searchIcon, "material");
}
```

次に、上記のコンポーネント サンプルで説明したのと同じ方法で使用します。

### サイズ

アイコン コンポーネントは、`small`、`medium` (デフォルト)、`large` の 3 つのアイコン サイズをサポートしています。アイコンのサイズを変更するには、次のように `--ig-size` CSS 変数を利用できます。

```css
igc-icon {
  --ig-size: var(--ig-size-large);
}
```

```razor
<IgbIcon Size="@SizableComponentSize.Large">
```

```tsx
<IgrIcon size="large" />
```

`sample="/layouts/icon/sizing", height="60", alt="{Platform} Icon のサイズ変更"`


### Mirrored (ミラー化済み)

一部のアイコンは、右から左 (RTL) モードで使用する場合、少し異なって見える必要があります。そのため、設定するとアイコンを水平方向に反転させる `mirrored` 属性を提供します。

```html
<igc-icon name="search" mirrored></igc-icon>
```

```razor
IgbIcon IconName="search" Collection="material" Mirrored="true" />
```

```tsx
<IgrIcon iconName="search" collection="material" mirrored={true} />
```

## スタイル設定

アイコン コンポーネントは、`Icon` 要素に直接スタイルを適用することでスタイルを設定できます。

```css
igc-icon {
  --size: 48px;
  color: olive;
}
```

`sample="/layouts/icon/styling", height="70", alt="{Platform} Icon のサイズ変更"`

## API リファレンス

 - `Icon`
 - `RegisterIcon`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})