---
title: {Platform} Linear Progress | Linear Progress | インフラジスティックス
_description: プログレス バーを表示し、Linear Progress Indicator コンポーネントを使用して、無限の色とストライプ オプションで外観をカスタマイズします。
_keywords: {Platform} Linear Progress, {ProductName}, インフラジスティックス
mentionedTypes: ['LinearProgress']
_language: ja
---

# {Platform} Linear Progress (リニア プログレス) の概要
{ProductName} Linear Progress Indicator コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。`LinearProgress` インジケーターは状態変更で外観を更新します。また、このコンポーネントがストライプまたは実線色でスタイル設定できます。

## {Platform} Linear Progress の例

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-simple"
           alt="{Platform}  Linear Progress の例"
           github-src="inputs/linear-progress-indicator/simple">
</code-view>

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
IgbLinearProgressModule.Register(IgniteUIBlazor);
```
また、追加の CSS ファイルをリンクして、スタイルを `Calendar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->


`LinearProgress` の使用を開始する最も簡単な方法は次のとおりです:

```tsx
<IgrLinearProgress value="100"></IgrLinearProgress>
```

```html
<igc-linear-progress value="100"></igc-linear-progress>
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

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-types"
           alt="{Platform}  Linear Progress Striped の例"
           github-src="inputs/linear-progress-indicator/types">
</code-view>

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

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-striped"
           alt="{Platform} Linear Progress Text の例"
           github-src="inputs/linear-progress-indicator/striped">
</code-view>

<div class="divider--half"></div>

### ダイナミック プログレス

ボタンなどの外部コントロールを使用して進行状況インジケーターの値を動的に変更できます。これを実現するには、値をクラス プロパティにバインドします。

<code-view style="height:200px"
            data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-dynamic"
           alt="{Platform} Linear Progress Dynamic の例"
           github-src="inputs/linear-progress-indicator/dynamic">
</code-view>

<div class="divider--half"></div>

## スタイル設定

Linear Progress Indicator コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-styling"
           alt="{Platform} Linear Progress のスタイル設定"
           github-src="inputs/linear-progress-indicator/styling">
</code-view>

次の表に、Linear Progress によって公開されるすべての CSS パーツを示します:

|名前|説明|
|--|--|
| track         | プログレス リングのトラック領域。 |
| fill          | 進行状況インジケーター領域。|
| striped       | 進行状況のストライプ インジケーター。 |
| label         | 進行状況インジケーター ラベル。 |
| value         | 進行状況ラベルの値。 |
| indeterminate | 進行状況の indeterminate 状態。 |
| primary       | 進行状況インジケーターの primary 状態。 |
| danger        | 進行状況インジケーターの error 状態。 |
| warning       | 進行状況インジケーターの warning 状態。 |
| info          | 進行状況インジケーターの info の状態。|
| success       | 進行状況インジケーターの success 状態。 |
| top           | 進行状況ラベルの配置。 |
| top-start     | 進行状況ラベルの配置。 |
| top-end       | 進行状況ラベルの配置。 |
| bottom        | 進行状況ラベルの配置。 |
| bottom-start  | 進行状況ラベルの配置。 |
| bottom-end    | 進行状況ラベルの配置。 |

<!-- WebComponents -->

## API リファレンス

Linear Progress Indicator の API の詳細については、次のリンクを参照してください:
* `LinearProgress`

使用したその他のコンポーネントとディレクティブ:
* `Button`

<!-- end: WebComponents -->

<div class="divider"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例 (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->


<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

<!-- React -->
* [Ignite UI for React **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [Ignite UI for React **GitHub** (英語)](https://github.com/IgniteUI/igniteui-react)
<!-- end: React -->

## API メンバー

 - `Button`
 - `Calendar`
 - `LinearProgress`