---
title: {Platform} Chip | インフラジスティックス
_description: インフラジスティックスの {Platform} Chip コンポーネントを使用すると、コンテンツを事前定義されたスタイルで表示して、アプリケーション内の任意の場所にある他のコンポーネントを装飾できます。
_keywords: {Platform}, UI コントロール, web ウィジェット, UI ウィジェット, Web Components, {Platform} Chip コンポーネント, インフラジスティックス
mentionedTypes: ["Chip"]
_language: ja
---

# {Platform} Chip (チップ) の概要

{ProductName} Chip は、ユーザーが情報を入力したり、選択したり、コンテンツをフィルタリングしたり、アクションをトリガーしたりするのに役立ちます。

## {Platform} Chip の例

`sample="/inputs/chip/overview", height="80", alt="{Platform} Chip の例"`

<div class="divider"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Chip` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcChipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChipComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Chip` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrChipModule, IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrChipModule.register();
```
<!-- end: React -->

<!-- Blazor -->

`Chip` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbChipModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Chip` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Chip` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-chip></igc-chip>
```

```razor
<div class="container sample vertical">
    <IgbChip>Chip</IgbChip>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override void OnInitialized()
    {
    }
}
```

```tsx
<IgrChip></IgrChip>
```

選択可能な Chip を表示するには、Chip の `Selectable` プロパティを使用できます。

```tsx
<IgrChip selectable="true"></IgrChip>
```

```html
<igc-chip selectable></igc-chip>
```

```razor
<IgbChip Selectable="true"></IgbChip>
```

削除可能可能な Chip を表示するには、Chip の `Removable` プロパティを使用できます。

```tsx
<IgrChip removable="true"></IgrChip>
```

```html
<igc-chip removable></igc-chip>
```

```razor
<IgbChip Removable="true"></IgbChip>
```

## コード例

### バリアント

{ProductName} Chip は、いくつかの事前定義されたスタイルのバリエーションをサポートします。サポートされている値の 1 つ (`Primary`、`Info`、`Success`、`Warning`、または `Danger`) を `Variant` プロパティに割り当てることにより、バリアントを変更できます。

```tsx
<IgrChip variant="success"></IgrChip>
```

```html
<igc-chip variant="success"></igc-chip>
```

```razor
<IgbChip Variant="ChipVariant.Success"></IgbChip>
```

`sample="/inputs/chip/variants", height="80", alt="{Platform} Chip バリアントの例"`



### 無効

{ProductName} Chip は、`Disabled` プロパティを使用して無効にできます。

```tsx
<IgrChip disabled="true"></IgrChip>
```

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

`sample="/inputs/chip/multiple", height="80", alt="{Platform} Chip Multiple Example"`



## Size (サイズ)

ユーザーが `--ig-size` CSS 変数を利用して `Chip` のサイズを選択できるようにします。

```tsx
<IgrChip size="small" selectable="true" removable="true">
    <span>Chip</span>
</IgrChip>
<IgrChip size="medium" selectable="true" removable="true">
    <span>Chip</span>
</IgrChip>
<IgrChip size="large" selectable="true" removable="true">
    <span>Chip</span>
</IgrChip>
```

```css
igc-chip {
    --ig-size: var(--ig-size-large);
}
```

`sample="/inputs/chip/size", height="80", alt="{Platform} Chip Size の例"`


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

`sample="/inputs/chip/styling", height="80", alt="{Platform} Chip スタイル設定の例"`

<div class="divider--half"></div>

## API リファレンス

 - `Chip`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
