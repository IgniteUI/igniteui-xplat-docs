---
title: {Platform} Badge | インフラジスティックス
_description: インフラジスティックスの {Platform} Badge コンポーネントを使用すると、事前定義されたスタイルでコンテンツを表示して、アプリケーション内の任意の場所で他のコンポーネントを装飾できます。
_keywords: {Platform}, UI controls, web widgets, UI widgets, Web Components, {Platform} Badge Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, ウェブ コンポーネント, {Platform} バッジ コンポーネント, インフラジスティックス
mentionedTypes: ['Badge']
_language: ja
---

# {Platform} Badge (バッジ) の概要

{ProductName} Badge は、視覚的な通知が必要な場合に、アバター、ナビゲーション メニュー、またはアプリケーション内の他のコンポーネントと組み合わせて使用されるコンポーネントです。バッジは通常、情報、成功、警告、またはエラーを伝達するために事前定義されたスタイルでデザインされています。

## {Platform} Badge の例

`sample="/inputs/badge/outlined", height="60", alt="{Platform} Badge の例"`

<div class="divider"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Badge` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBadgeComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Badge` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrBadgeModule, IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrBadgeModule.register();
```
<!-- end: React -->

<!-- Blazor -->

`Badge` を使用する前に、次のように登録する必要があります。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Badge` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Badge` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-badge></igc-badge>
```

```tsx
<IgrBadge />
```

```razor
<IgbBadge />
```

バッジの周囲に微妙な境界線を表示するには、バッジの `outlined` 属性を設定できます。

```tsx
<IgrBadge outlined="true" ></IgrBadge>
```

```html
<igc-badge outlined></igc-badge>
```

```razor
<IgbBadge Outlined="true" />
```

## 例

### バリアント

{ProductName} バッジは、いくつかの事前定義されたスタイルのバリアントをサポートします。サポートされている値 `primary` (デフォルト)、`info`、`success`、`warning`、または `danger` のいずれかを `variant` 属性に割り当てることにより、バリアントを変更できます。

```tsx
<IgrBadge variant="success" ></IgrBadge>
```

```html
<igc-badge variant="success"></igc-badge>
```

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

`sample="/inputs/badge/variants", height="60", alt="{Platform} Badge の例"`



### 形状

バッジ コンポーネントは、`rounded` (デフォルト) 形状と `square` をサポートします。これらの値は、`shape` 属性に割り当てることができます。

```tsx
<IgrBadge shape="square" ></IgrBadge>
```

```html
<igc-badge shape="square"></igc-badge>
```

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

`sample="/inputs/badge/shape", height="60", alt="{Platform} Badge の例"`



## スタイル設定

バッジ コンポーネントは、すべてのスタイル プロパティを変更するために使用できる `base` パーツを公開します。

```css
igc-badge::part(base) {
  color: olive;
  background: beige;
  border-radius: 2px;
}
```


<div class="divider--half"></div>

## API リファレンス

 - `Badge`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
