---
title: $Platform$ Badge | インフラジスティックス
_description: インフラジスティックスの $Platform$ Badge コンポーネントを使用すると、事前定義されたスタイルでコンテンツを表示して、アプリケーション内の任意の場所で他のコンポーネントを装飾できます。
_keywords: $Platform$, UI controls, web widgets, UI widgets, Web Components, $Platform$ Badge Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, ウェブ コンポーネント, $Platform$ バッジ コンポーネント, インフラジスティックス
mentionedTypes: ['Badge']
_language: ja
---

# $Platform$ Badge (バッジ) の概要

$ProductName$ Badge は、視覚的な通知が必要な場合に、アバター、ナビゲーション メニュー、またはアプリケーション内の他のコンポーネントと組み合わせて使用されるコンポーネントです。バッジは通常、情報、成功、警告、またはエラーを伝達するために事前定義されたスタイルでデザインされています。

## $Platform$ Badge の例

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-outlined"
           alt="$Platform$ Badge の例"
           github-src="inputs/badge/outlined">
</code-view>

<div class="divider"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Badge` を使用する前に、次のように登録する必要があります。

```razor
IgbBadgeModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Badge` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";

defineComponents(IgcBadgeComponent);
```

`Badge` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-badge></igc-badge>
```

```razor
<IgbBadge />
```

バッジの周囲に微妙な境界線を表示するには、バッジの `outlined` 属性を設定できます。

```html
<igc-badge outlined></igc-badge>
```

```razor
<IgbBadge Outlined="true" />
```

## 例

### バリアント

$ProductName$ バッジは、いくつかの事前定義されたスタイルのバリアントをサポートします。サポートされている値 `primary` (デフォルト)、`info`、`success`、`warning`、または `danger` のいずれかを `variant` 属性に割り当てることにより、バリアントを変更できます。

```html
<igc-badge variant="success"></igc-badge>
```

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-variants"
           alt="$Platform$ Badge の例"
           github-src="inputs/badge/variants">
</code-view>

### 形状

バッジ コンポーネントは、`rounded` (デフォルト) 形状と `square` をサポートします。これらの値は、`shape` 属性に割り当てることができます。

```html
<igc-badge shape="square"></igc-badge>
```

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-shape"
           alt="$Platform$ Badge の例"
           github-src="inputs/badge/shape">
</code-view>

## スタイル設定

バッジ コンポーネントは、すべてのスタイル プロパティを変更するために使用できる `base` パーツを公開します。

```css
igc-badge::part(base) {
  color: olive;
  background: beige;
  border-radius: 2px;
}
```

<!-- WebComponents -->

## API リファレンス

* `Badge`

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

## API メンバー

 - `Badge`