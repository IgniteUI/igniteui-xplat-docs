---
title: {Platform} Linear Progress | Linear Progress | インフラジスティックス
_description: プログレス バーを表示し、Linear Progress Indicator コンポーネントを使用して、無限の色とストライプ オプションで外観をカスタマイズします。
_keywords: {Platform} Linear Progress, {ProductName}, インフラジスティックス
mentionedTypes: ["LinearProgress"]
_language: ja
---

# {Platform} Linear Progress (リニア プログレス) の概要
{ProductName} Linear Progress Indicator コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。`LinearProgress` インジケーターは状態変更で外観を更新します。また、このコンポーネントがストライプまたは実線色でスタイル設定できます。

## {Platform} Linear Progress の例

`sample="/inputs/linear-progress-indicator/simple", height="80", alt="{Platform} Linear Progress の例"`

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`LinearProgress` を使用する前に、次のように登録する必要があります:

```ts
import {defineComponents, IgcLinearProgressComponent} from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcLinearProgressComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`LinearProgress` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrLinearProgressModule, IgrLinearProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrLinearProgressModule.register();
```
<!-- end: React -->

<!-- Blazor -->
`LinearProgress` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbLinearProgressModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Calendar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->


`LinearProgress` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-linear-progress value="100"></igc-linear-progress>
```

```tsx
<IgrLinearProgress value="100"></IgrLinearProgress>
```

```razor
<IgbLinearProgress Value=100 />
```

### 進行状況タイプ

`variant` 属性を使用して、インジケーターのタイプを設定できます。リニア プログレス インジケーターには、**primary** (デフォルト)、**error**、**success**、**info**、および **warning** の 5 種類があります。

```tsx
<IgrLinearProgress value="100" variant="success"></IgrLinearProgress>
```

```html
<igc-linear-progress value="100" variant="success"></igc-linear-progress>
```

```razor
<IgbLinearProgress Value=100 Variant=@ProgressBaseVariant.Success />
```

### ストライプ プログレス

`striped` プロパティを使用して、インジケーターをストライプにすることができます:

`sample="/inputs/linear-progress-indicator/types", height="200", alt="{Platform} Linear Progress Striped の例"`



<div class="divider--half"></div>

### 不確定のプログレス

正確に決定されていないプロセスをトラックしたい場合、`indeterminate` プロパティを設定できます。

### アニメーション期間

`animationDuration` プロパティは、アニメーション サイクルにかかる時間を指定するために使用されます。値として、アニメーションの継続時間をミリ秒単位で表す数値を取ります。

```tsx
<IgrLinearProgress animationDuration="5000" indeterminate="true"></IgrLinearProgress>
```

```html
<igc-linear-progress animation-duration="5000" indeterminate></igc-linear-progress>
```

```razor
<IgbLinearProgress AnimationDuration=5000 Indeterminate=true />
```

### Text プロパティ

`labelAlign` プロパティを使用して、デフォルト値を調整できます。許可される値は、**top**、**bottom**、**top-start**、**top-end**、**bottom-start**、および **bottom-end** です。

進行状況インジケーターのデフォルトのラベルを非表示にするには、`hideLabel` 属性を使用します。

`labelFormat` プロパティを使用して、`LinearProgress` のデフォルト ラベルをカスタマイズできます。

次のサンプルは、上記の構成を示しています:

`sample="/inputs/linear-progress-indicator/striped", height="200", alt="{Platform} Linear Progress Text の例"`



<div class="divider--half"></div>

### ダイナミック プログレス

ボタンなどの外部コントロールを使用して進行状況インジケーターの値を動的に変更できます。これを実現するには、値をクラス プロパティにバインドします。

`sample="/inputs/linear-progress-indicator/dynamic", height="200", alt="{Platform} Linear Progress Dynamic の例"`



<div class="divider--half"></div>

## スタイル設定

`LinearProgress` コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。

|名前|説明|
|--|--|
| `track`         | プログレス リングのトラック領域。 |
| `fill`          | 進行状況インジケーター領域。|
| `striped`       | 進行状況のストライプ インジケーター。 |
| `label`         | 進行状況インジケーター ラベル。 |
| `value`         | 進行状況ラベルの値。 |
| `indeterminate` | 進行状況の indeterminate 状態。 |
| `primary`       | 進行状況インジケーターの primary 状態。 |
| `danger`        | 進行状況インジケーターの error 状態。 |
| `warning`       | 進行状況インジケーターの warning 状態。 |
| `info`          | 進行状況インジケーターの info の状態。|
| `success`       | 進行状況インジケーターの success 状態。 |

この CSS パーツを使用すると、Linear Progress のスタイルをほぼ完全に制御できます。

`sample="/inputs/linear-progress-indicator/styling", height="80", alt="{Platform} Linear Progress のスタイル設定"`

```css
igc-linear-progress::part(track){
  background-color: var(--ig-gray-300)
}

igc-linear-progress::part(fill){
  background-color: var(--ig-primary-300)
}

igc-linear-progress::part(label){
  color: var(--ig-primary-300)
}
```

<div class="divider"></div>


## API リファレンス

 - `Button`
 - `Calendar`
 - `LinearProgress`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})