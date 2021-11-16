---
title: $Platform$ Badge | インフラジスティックス
_description: インフラジスティックスの $Platform$ Badge コンポーネントを使用すると、事前定義されたスタイルでコンテンツを表示して、アプリケーション内の任意の場所で他のコンポーネントを装飾できます。
_keywords: $Platform$, UI controls, web widgets, UI widgets, Web Components, $Platform$ Badge Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, ウェブ コンポーネント, $Platform$ バッジ コンポーネント, インフラジスティックス
_language: ja
---

# $Platform$ Badge (バッジ)

$ProductName$ Badge は、視覚的な通知が必要な場合に、アバター、ナビゲーション メニュー、またはアプリケーション内の他のコンポーネントと組み合わせて使用されるコンポーネントです。バッジは通常、情報、成功、警告、またはエラーを伝達するために事前定義されたスタイルでデザインされています。

## 使用方法

バッジ ウェブ コンポーネントの使用を開始するには、最初に次のコマンドを入力して $ProductName$ をインストールする必要があります。

```cmd
npm install igniteui-webcomponents
```

次の手順は、[IgcBadgeComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcBadgeComponent.html) を使用する typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録することです。

```ts
import { defineComponents, IgcBadgeComponent } from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent);
```

バッジの使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-badge></igc-badge>
```

## 例

### バリアント

$ProductName$ バッジは、いくつかの事前定義されたスタイルのバリアントをサポートします。サポートされている値 `primary` (デフォルト)、`info`、`success`、`warning`、または `danger` のいずれかを [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcBadgeComponent.html#variant) 属性に割り当てることにより、バリアントを変更できます。

```html
<igc-badge variant="success"></igc-badge>
```

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-variants"
           alt="$Platform$ Badge の例"
           github-src="inputs/badge/variants">
</code-view>

### 形状

バッジ コンポーネントは、`rounded` (default) 形状と `square` をサポートします。これらの値は、[`shape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcBadgeComponent.html#shape) 属性に割り当てることができます。

```html
<igc-badge shape="square"></igc-badge>
```

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-shape"
           alt="$Platform$ Badge の例"
           github-src="inputs/badge/shape">
</code-view>

### アウトライン

バッジの周囲に微妙な境界線を表示するには、バッジの [`outlined`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcBadgeComponent.html#outlined) 属性を設定します。

```html
<igc-badge outlined></igc-badge>
```

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-outlined"
           alt="$Platform$ Badge の例"
           github-src="inputs/badge/outlined">
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

## API リファレンス

* [IgcBadgeComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcBadgeComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)
