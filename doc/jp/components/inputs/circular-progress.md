---
title: {Platform} Circular Progress | Circular Progress | インフラジスティックス
_description: Circular Progress Indicator コンポーネントを使用すると、開発者は無限のカスタマイズ オプションを使用して進行状況を円で表示できます。
_keywords: {Platform} Circular Progress, {ProductName}, インフラジスティックス
mentionedTypes: ["CircularProgress", "CircularGradient"]
_language: ja
---

# {Platform} Circular Progress (円形プログレス) の概要
{ProductName} Circular Progress Indicator コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。丸形インジケーターは状態変更で外観を更新します。

## {Platform} Circular Progress の例

`sample="/inputs/circular-progress-indicator/simple", height="150", alt="{Platform} Circular Progress の例"`

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`CircularProgress` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import {defineComponents, IgcCircularProgressComponent} from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCircularProgressComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`CircularProgress` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrCircularProgressModule, IgrCircularProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrCircularProgressModule.register();
```
<!-- end: React -->

<!-- Blazor -->

`CircularProgress` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCircularProgressModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Calendar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

`CircularProgress` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-circular-progress value="100"></igc-circular-progress>
```

```tsx
<IgrCircularProgress value="100"></IgrCircularProgress>
```

```razor
<IgbCircularProgress Value=100/>
```

### 進行状況タイプ

`variant` 属性を使用して、インジケーターのタイプを設定できます。Circular Progress インジケーターには、**primary** (デフォルト)、**error**、**success**、**info**、および **warning** の 5 種類があります。

```tsx
<IgrCircularProgress value="100" variant="success"></IgrCircularProgress>
```

```html
<igc-circular-progress value="100" variant="success"></igc-circular-progress>
```

```razor
<IgbCircularProgress Value=100 Variant=@ProgressBaseVariant.Success  />
 ```

### 不確定のプログレス

正確に決定されていないプロセスをトラックしたい場合、`indeterminate` プロパティを設定できます。また、`hideLabel` プロパティを設定することで、{ProductName} `CircularProgress` のデフォルトのラベルを非表示にし、公開された `labelFormat` プロパティを介して進行状況インジケーターのデフォルトのラベルをカスタマイズできます。

```tsx
<IgrCircularProgress value="100" indeterminate="true"></IgrCircularProgress>
```

```html
<igc-circular-progress value="100" indeterminate="true"></igc-circular-progress>
```

```razor
<IgbCircularProgress Value=100 Indeterminate=true/>
```

次のサンプルは、上記の構成を示しています:

`sample="/inputs/circular-progress-indicator/indeterminate", height="150", alt="{Platform} Circular Progress Indeterminate の例"`



<div class="divider--half"></div>

### アニメーション期間

`CircularProgress` コンポーネントの `animationDuration` プロパティを使用して、アニメーション サイクルにかかる時間をミリ秒単位で指定できます。

```tsx
<IgrCircularProgress animationDuration="5000" indeterminate="true"></IgrCircularProgress>
```

```html
<igc-circular-progress animation-duration="5000" indeterminate></igc-circular-progress>
```

```razor
<IgbCircularProgress AnimationDuration=5000 Indeterminate=true />
```

### グラデーション プログレス

単色の代わりにカラー グラデーションを使用するためにプログレス バーをカスタマイズするには、公開された `gradient` スロットとグラデーション境界を定義する `CircularGradient` を使用します。

`sample="/inputs/circular-progress-indicator/dynamic", height="200", alt="{Platform} Circular Progress Dynamic の例"`



> [!Note]
>{ProductName} `CircularProgress` のグラデーション スロットとして定義された `CircularGradient` ごとに、[SVG stop](https://developer.mozilla.org/ja/docs/Web/SVG/Element/stop) 要素が作成されます。`color`、`offset`、および `opacity` として渡された値は、それ以上の検証なしで、SVG 要素の stop-color、offset、および stop-opacity として設定されます。

```tsx
<IgrCircularProgress >
    <IgrCircularGradient slot="gradient" offset="0%" color="#ff9a40">
    </IgrCircularGradient>
    <IgrCircularGradient slot="gradient" offset="50%" color="#1eccd4">
    </IgrCircularGradient>
    <IgrCircularGradient slot="gradient" offset="100%" color="#ff0079">
    </IgrCircularGradient>
</IgrCircularProgress>
```

```html
<igc-circular-progress>
    <igc-circular-gradient slot="gradient" offset="0%" color="#ff9a40"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="50%" color="#1eccd4"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="100%" color="#ff0079"></igc-circular-gradient>
</igc-circular-progress>
```

```razor
<IgbCircularProgress>
    <IgbCircularGradient slot="gradient" Offset="0%"   Color="#ff9a40"/>
    <IgbCircularGradient slot="gradient" Offset="50%"  Color="#1eccd4"/>
    <IgbCircularGradient slot="gradient" Offset="100%" Color="#ff0079"/>
</IgbCircularProgress>
```

<div class="divider--half"></div>

## スタイル設定

`CircularProgress` コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。

|名前|説明|
|--|--|
| `svg`                | 進行状況 SVG 要素。                |
| `gradient_start`     | 進行線形グラデーションの開始色。 |
| `gradient_end`       | 進行線形グラデーションの終了色。   |
| `track`              | プログレス リングのトラック領域。          |
| `fill`               | 進行状況インジケーター領域。              |
| `label`              | 進行状況ラベル。                       |
| `value`              | 進行状況ラベルの値。                |
| `indeterminate`      | 進行状況の indeterminate 状態。         |
| `primary`            | 進行状況インジケーターの primary 状態。     |
| `danger`             | 進行状況インジケーターの error 状態。       |
| `warning`            | 進行状況インジケーターの warning 状態。     |
| `info`               | 進行状況インジケーターの info の状態。       |
| `success`            | 進行状況インジケーターの success 状態。  |

この CSS パーツを使用すると、Circular Progress のスタイルをほぼ完全に制御できます。

```css

igc-circular-progress {
  margin: 20px;
  --diameter: 50px;
}

igc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start) {
  stop-color: var(--ig-success-200);
}

igc-circular-progress::part(track) {
  stroke: var(--ig-gray-400);
}

```

`sample="/inputs/circular-progress-indicator/styling", height="150", alt="{Platform} Circular Progress のスタイル設定"`

## API リファレンス

 - `Button`
 - `Calendar`
 - `CircularGradient`
 - `CircularProgress`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
