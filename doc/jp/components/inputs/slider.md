---
title: {Platform} スライダーと範囲スライダー コンポーネント | {ProductName}
_description: {ProductName} の {Platform} スライダーと範囲スライダーでつまみトラックを使用して、特定の範囲で選択を構成する方法を学びます。単一スライダーと範囲スライダーのどちらかを選択できます。
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Slider Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} スライダー コンポーネント, インフラジスティックス
mentionedTypes: ['Slider', 'SliderLabel', 'RangeSlider']
_language: ja
---

# {Platform} Slider & Range Slider (スライダーと範囲スライダー) の概要

{Platform} スライダーと範囲スライダー コンポーネントを使用すると、つまみをトラックに沿って動かすことで、特定の範囲を選択できます。トラックを連続またはステップに定義でき、単一または範囲スライダーのどちらかを選択できます。

## {Platform} スライダーと範囲スライダーの例

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-overview"
           alt="{Platform} Slider の例"
           github-src="inputs/slider/overview">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`Slider` と `RangeSlider` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcSliderComponent, IgcRangeSliderComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSliderComponent, IgcRangeSliderComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Slider` および `RangeSlider` とそれぞれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrSliderModule, IgrSlider, IgrRangeSlider, IgrRangeSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrSliderModule.register();
IgrRangeSliderModule.register();
```
<!-- end: React -->

<!-- Blazor -->
`Slider` と `RangeSlider` を使用する前に、次のように登録する必要があります:

```razor
IgbSliderModule.Register(IgniteUIBlazor);
IgbRangeSliderModule.Register(IgniteUIBlazor);
```
<!-- end: Blazor -->

`Slider` と `RangeSlider` の使用を開始する最も簡単な方法は次のとおりです:

```tsx
 <IgrSlider value="40" />
    <span className="slider-label"></span>
<IgrRangeSlider lower="20" upper="70"></IgrRangeSlider>
```

```html
<igc-slider value="40"></igc-slider>
<igc-range-slider lower="20" upper="70"></igc-range-slider>
```

```razor
<IgbSlider Value="40" />
<IgbRangeSlider Lower="20" Upper="70" />
```

### Value (値)

スライダーと範囲スライダー コンポーネントの主な違いは、スライダー コンポーネントには単一のつまみがあり、範囲スライダー コンポーネントには 2 つのつまみがあることです。スライダー コンポーネントの単一のつまみで、その `Value` プロパティが表示されます。範囲スライダー コンポーネントの 2 つのつまみは、`Lower` 値と `Upper` 値のプロパティを表示します。

いずれかの値が変更されると、両方のスライダーが 2 つのイベントを発行します。`igcInput` イベントは、キーボードまたはドラッグ操作を使用して値が変更されるたびに発行され、`igcChange` イベントは、値の変更がドラッグエンドまたはキーボード操作でコミットされたときに発行されます。

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-value"
           alt="{Platform} Slider Value の例"
           github-src="inputs/slider/value">
</code-view>

スライダーつまみをドラッグしている間、ツールチップにその値が表示されます。`HideTooltip` プロパティを使用して、このツールチップを非表示にすることができます。

### Disabled (無効)

スライダーの `Disabled` プロパティを使用して、ユーザーの操作を無効にすることができます。

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-disabled"
           alt="{Platform} Slider Disabled の例"
           github-src="inputs/slider/disabled">
</code-view>

### 制約

スライダーのトラックには、最小値と最大値があり、`Min` と `Max` プロパティを使用して構成されます。さらに、`LowerBound` プロパティと `UpperBound` プロパティを使用して、つまみのドラッグを制限できます。

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-constraints"
           alt="{Platform} Slider 制約の例"
           github-src="inputs/slider/constraints">
</code-view>

### Step (ステップ)

`Step` プロパティは、値が順守するスライダーの精度を指定します。デフォルトでは、スライダー トラックは連続して見えます。スライダーの `DiscreteTrack` プロパティを **true** に設定すると、トラックのステップが表示されます。

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-discrete"
           alt="{Platform} Slider Discrete Track の例"
           github-src="inputs/slider/discrete">
</code-view>

`Step` プロパティが `0` に設定されている場合、ステッピングは暗黙指定されず、スライダー範囲内の任意の値が許可されます。この場合、`DiscreteTrack` が **true** に設定されていても、スライダーは連続して見えます。

### Tick Marks (目盛り)

スライダー コンポーネントは、目盛りとラベルを表示できます。スライダー コンポーネントは、プライマリとセカンダリの 2 種類の目盛りをサポートしています。プライマリ目盛りを表示するには、`PrimaryTicks` プロパティを `1` より大きい値に設定する必要があります。プライマリ目盛りの数は、トラック上で均等に分散されます。セカンダリ目盛りを表示するには、`SecondaryTicks` プロパティを 0 より大きい値に設定する必要があります。`SecondaryTicks` の値は、2 つのプライマリ目盛りごとのセカンダリ目盛りの数を指定します。

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-ticks"
           alt="{Platform} Slider Tick Marks の例"
           github-src="inputs/slider/ticks">
</code-view>

さらに、`TickOrientation` プロパティを使用して、目盛りの方向を構成できます。デフォルトでは、`TickOrientation` 値は `end` で、スライダー トラックの下に目盛りが表示されます。トラックの上に表示する `start` と、トラックの上下の目盛りをミラーする `mirror` に設定できます。

デフォルトでは、目盛りはラベルとその値を表示します。`TickLabelRotation` プロパティを使用して、目盛りラベルの回転を変更できます。さらに、`HidePrimaryLabels` プロパティと `HideSecondaryLabels` プロパティを使用して、プライマリ目盛りとセカンダリ目盛りのラベルを非表示にすることができます。

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-tick-labels"
           alt="{Platform} Slider Tick Mark Labels の例"
           github-src="inputs/slider/tick-labels">
</code-view>

### Value Format (値の形式)

つまみと目盛りのラベル値をを書式設定する場合、スライダーは `ValueFormat`、`ValueFormatOptions`、および `Locale` プロパティを提供します。`ValueFormatOptions` を使用すると、指定された `Locale` を考慮して、小数部と有効桁数、スタイル (10 進数、通貨、パーセント、単位)、表記などを指定できます。`ValueFormat` は、書式設定オプションが適用された値に置き換えられる `{0}` 識別子を含む可能性のある文字列です。

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-value-format"
           alt="{Platform} Slider Value Format の例"
           github-src="inputs/slider/value-format">
</code-view>

### ラベル

場合によっては、スライダーの値を文字列値として書式設定する必要があります。つまり、値 **[0, 1, 2]** を **['Low', 'Medium', 'High']** にマップします。このシナリオでは、スライダーを使用して、スライダー内に `SliderLabel` 要素を定義できます。スライダー ラベルのテキスト コンテンツは、つまみラベルと目盛りラベルに使用されます。スライダー ラベルが提供されている場合、`Min`、`Max`、および `Step` プロパティが自動的に計算されるため、提供されたラベルにマップされない値は許可されないことに注意してください。'Low'、'Medium'、および 'High' ラベルの場合、`Min` は `0` に設定され、`Max` は `2` に設定され、`Step` は `1` に設定されます。

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-labels"
           alt="{Platform} Slider Labels の例"
           github-src="inputs/slider/labels">
</code-view>

## スタイル設定

スライダー コンポーネントは、内部要素の CSS パーツを公開します。次の表に、すべての CSS パーツを示します:

|名|説明|
|--|--|
| base | スライダーの基本ラッパー。|
| ticks | 目盛りのコンテナー。|
| tick-group | 目盛りグループ コンテナー。|
| tick | 目盛りの要素。|
| tick-label | 目盛りラベルの要素。|
| tick-label-inner | 目盛りラベルの内側の要素。|
| thumbs | つまみのコンテナー。|
| thumb | つまみの要素。|
| thumb-label | つまみツールチップのラベル コンテナー。|
| thumb-label-inner | つまみツールチップのラベル要素。|
| track | トラックのコンテナー。|
| steps | トラック ステップの要素。|
| inactive | トラックの非アクティブな要素。|
| fill | トラックの塗りつぶし部分。|

次のサンプルは、トラックの塗りつぶしとつまみのパーツのスタイルを設定する方法を示しています。

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-styling"
           alt="{Platform} Slider スタイル設定の例"
           github-src="inputs/slider/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

* `Slider`
* `RangeSlider`

<!-- end: WebComponents -->

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

 - `HidePrimaryLabels`
 - `HideSecondaryLabels`
 - `HideTooltip`
 - `PrimaryTicks`
 - `RangeSlider`
 - `SecondaryTicks`
 - `SliderLabel`
 - `Slider`
 - `TickLabelRotation`
 - `TickOrientation`
 - `UpperBound`
 - `ValueFormatOptions`
 - `ValueFormat`