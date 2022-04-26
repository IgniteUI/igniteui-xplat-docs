---
title: $Platform$ Chip | インフラジスティックス
_description: インフラジスティックスの $Platform$ Chip コンポーネントを使用すると、コンテンツを事前定義されたスタイルで表示して、アプリケーション内の任意の場所にある他のコンポーネントを装飾できます。
_keywords: $Platform$, UI コントロール, web ウィジェット, UI ウィジェット, Web Components, $Platform$ Chip コンポーネント, インフラジスティックス
mentionedTypes: ['Chip']
_language: ja
---

# $Platform$ Chip (チップ) の概要

$ProductName$ Chip は、ユーザーが情報を入力したり、選択したり、コンテンツをフィルタリングしたり、アクションをトリガーしたりするのに役立ちます。

## $Platform$ Chip の例

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-overview"
           alt="$Platform$ Chip の例"
           github-src="inputs/chip/overview">
</code-view>

<div class="divider"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Chip` を使用する前に、次のように登録する必要があります:

```razor
IgbChipModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Chip` component. 以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **BlazorServer** プロジェクトの **Pages/_Host.cshtml**フ ァイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcChipComponent } from 'igniteui-webcomponents';
defineComponents(IgcChipComponent);
```

`Chip` の使用を開始する最も簡単な方法は次のとおりです:

```razor
<div class="container sample vertical">
    <IgbChip>Chip</IgbChip>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override void OnInitialized()
    {
        IgbChipModule.Register(IgniteUIBlazor);
    }
}
```

```html
<igc-chip></igc-chip>
```

選択可能な Chip を表示するには、Chip の `Selectable` プロパティを使用できます。

```html
<igc-chip selectable></igc-chip>
```

```razor
<IgbChip Selectable="true"></IgbChip>
```

削除可能可能な Chip を表示するには、Chip の `Removable` プロパティを使用できます。

```html
<igc-chip removable></igc-chip>
```

```razor
<IgbChip Removable="true"></IgbChip>
```

## コード例

### バリアント

$ProductName$ Chip は、いくつかの事前定義されたスタイルのバリエーションをサポートします。サポートされている値の 1 つ (`Primary`、`Info`、`Success`、`Warning`、または `Danger`) を `Variant` プロパティに割り当てることにより、バリアントを変更できます。

```html
<igc-chip variant="success"></igc-chip>
```

```razor
<IgbChip Variant="ChipVariant.Success"></IgbChip>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-variants"
           alt="$Platform$ Chip バリアントの例"
           github-src="inputs/chip/variants">
</code-view>

### 無効

$ProductName$ Chip は、`Disabled` プロパティを使用して無効にできます。

```html
<igc-chip disabled></igc-chip>
```

### Prefix / Suffix (プレフィックス / サフィックス)

`Chip` コンポーネントの `Prefix` と `Suffix` の部分とそれらのスロットを使用して、Chip のメイン コンテンツの前後に異なるコンテンツを追加できます。デフォルトの選択アイコンと削除アイコンが用意されていますが、`Select` スロットと `Remove` スロットを使用してカスタマイズできます。`Start` スロットと `End` スロットを使用して、メイン コンテンツの前後にコンテンツを追加できます。

```html
<igc-chip selectable removable>
  <span slot="select"><igc-icon name="verified-account"></igc-icon></span>
  <span slot="start"><igc-icon name="brush"></igc-icon></span>
    Chip
  <span slot="end"><igc-icon name="blood"></igc-icon></span>
  <span slot="remove"><igc-icon name="pacifier"></igc-icon></span>
</igc-chip>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-multiple"
           alt="$Platform$ Chip Multiple Example"
           github-src="inputs/chip/multiple">
</code-view>

## Size (サイズ)

`Size` プロパティを使用して、ユーザーが `Chip` のサイズを選択できるようにします。

```html
<igc-chip size="small" selectable removable>Chip</igc-chip>
<igc-chip size="medium" selectable removable>Chip</igc-chip>
<igc-chip size="large" selectable removable>Chip</igc-chip>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-size"
           alt="$Platform$ Chip Size Example"
           github-src="inputs/chip/size">
</code-view>

## スタイル設定

Chip コンポーネントは、`Base`、`Prefix`、`Sufix` 部分、およびすべてのスタイル プロパティを変更するために使用できるいくつかのスロットを公開します。

```css
igc-chip::part(base) {
    background: #011627;
    color: #ECAA53;
}

igc-chip::part(suffix) {
    color: #B7B6C2;
}
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-styling"
           alt="$Platform$ Chip スタイル設定の例"
           github-src="inputs/chip/styling">
</code-view>


## API リファレンス

* `Chip`


<div class="divider--half"></div>

## その他のリソース

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
