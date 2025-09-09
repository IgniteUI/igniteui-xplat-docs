---
title: {Platform} Tooltip | インフラジスティックス
_description: {ProductName} Tooltip コンポーネントを使用すると、ツールチップを簡単に作成し、要素に添付することができます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Tooltip components, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Tooltip コンポーネント
mentionedTypes: ["Tooltip"]
_language: ja
---

# {Platform} Tooltip (ツールチップ)

{ProductName} Tooltip コンポーネントは、特定の要素のツールチップを表示する方法を提供します。ツールチップは、通常、要素がキーボード フォーカスを受け取ったとき、またはマウスを要素の上に置いたときに、要素に関連する情報を表示するポップアップです。 

## {ProductName} Tooltip の例

`sample="/inputs/tooltip/overview", height="140", alt="{Platform} Tooltip の例"`

### 作業の開始

<!-- WebComponents -->

`Tooltip` の使用を開始するには、最初に次のコマンドを実行して Ignite UI for Web Components をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Tooltip` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcTooltipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTooltipComponent);
```

<!-- end: WebComponents -->

<!-- React -->

`Tooltip` の使用を開始するには、最初に次のコマンドを実行して Ignite UI for React をインストールする必要があります。

```cmd
npm install igniteui-react
```

次に、以下のように、`Tooltip` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

<!-- React, WebComponents -->

これで、{Platform} `Tooltip` の基本構成から始めることができます。

<!-- end: React, WebComponents -->

```html
<igc-tooltip anchor="hover-button">
  Congrats you've hovered the button!
</igc-tooltip>

<igc-button id="hover-button">Hover me</igc-button>
```

```tsx
<IgrTooltip anchor="hover-button">
  Congrats you have hovered the button!
</IgrTooltip>

<IgrButton id="hover-button">Hover me</IgrButton>
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

## 使用方法

### ツールチップ ターゲット

目的の要素にツールチップを添付するには、<!-- WebComponents -->**&lt;igc-tooltip&gt;**<!-- end: WebComponents --><!-- React -->**&lt;IgrTooltip&gt;**<!-- end: React --> 要素の `Anchor` プロパティを使用します。このプロパティは、要素 ID または要素への直接参照のいずれかを受け入れます。ID 参照を使用する場合は、`Anchor` プロパティをターゲット要素の ID に設定するだけです。

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button">
  Congrats you've hovered the button!
</igc-tooltip>
```

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button">
  Congrats you have hovered the button!
</IgrTooltip>
```

要素インスタンスを直接渡すことでターゲットを指定することもできます。 

```html
<igc-tooltip id="tooltip">
  Congrats you've hovered the button!
</igc-tooltip>
<igc-button id="hover-button">Hover me</igc-button>
```

```ts
constructor() {
  const anchor = document.querySelector('#hover-button') as IgcButtonComponent;
  const tooltip = document.querySelector('#tooltip') as IgcTooltipComponent;
  tooltip.anchor = anchor;
}
```

```tsx
const anchor = document.querySelector('#hover-button') as IgrButton;
const tooltip = document.querySelector('#tooltip') as IgrTooltip;
tooltip.anchor = anchor;
```

```tsx
<IgrTooltip id="tooltip">
  Congrats you have hovered the button!
</IgrTooltip>
<IgrButton id="hover-button">Hover me</IgrButton>
```

### ツールチップのコンテンツ

ツールチップのコンテンツは、<!-- WebComponents -->**&lt;igc-tooltip&gt;**<!-- end: WebComponents --><!-- React -->**&lt;IgrTooltip&gt;**<!-- end: React --> 要素の開始タグと終了タグの間にカスタム コンテンツを配置することによって定義されます。

```html
<igc-tooltip>
  This is my custom content here.
</igc-tooltip>
```

```tsx
<IgrTooltip>
  Congrats you have hovered the button!
</IgrTooltip>
```

あるいは、単純なテキストを設定するには、`Message` プロパティを使用できます。

```html
<igc-tooltip message="This is my custom content here."></igc-tooltip>
```

```tsx
<IgrTooltip message="This is my custom content here."></IgrTooltip>
```

両方の方法 (スロット化されたコンテンツと `Message` プロパティ) を使用する場合、スロット化されたコンテンツが優先され、`Message` 値は無視されます。

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" message="I will be hidden.">
  I will be shown!
</igc-tooltip>
```

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button" message="I will be hidden.">
  I will be shown!
</IgrTooltip>
```

この例では、スロット化されたコンテンツ 「I will be shown!」 が `Message` プロパティ値の代わりに表示されます。

`Tooltip` のコンテンツは単なるテキスト以上のものになります。ツールチップはマークアップ内の通常の要素であるため、必要な要素を追加し、それに応じてスタイルを設定することで、そのコンテンツを強化できます。

`sample="/inputs/tooltip/rich", height="230", alt="{Platform} Rich Tooltip の例"`

### 設定の表示/非表示

`Tooltip` を表示および非表示にする前の遅延を制御する場合は、`ShowDelay` プロパティと `HideDelay` プロパティを使用できます。どちらのプロパティも、時間をミリ秒単位で表す数値を受け入れます。

```html
<igc-tooltip show-delay="600" hide-delay="800">
  Her name is Madelyn James.
</igc-tooltip>
```

```tsx
<IgrTooltip show-delay="600" hide-delay="800">
  Her name is Madelyn James.
</IgrTooltip>
```

> [!NOTE]
> Tooltip API メソッド (`Show`、`Hide`、`Toggle`) では、`ShowDelay` プロパティと `HideDelay` プロパティが考慮されないことに注意することが重要です。呼び出されるとすぐに動作します。

### 配置

`Tooltip` は、ターゲット要素を基準にして簡単に配置することもできます。必要なのは、`Placement` プロパティを、`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end `、`right`、`right-start`、`right-end`、`left`、`left-start`、`left-end` のいずれかの位置オプションとともに使用するだけです。

`Placement` プロパティが設定されていない場合、デフォルト値は `bottom` となり、`Tooltip` はターゲット要素の下に配置されます。

さらに、`Sticky` プロパティを使用して `Tooltip` を固定することができます。これにより、閉じるボタンが追加され、ユーザーが閉じるボタンをクリックするか、`Esc` キーを押して手動で閉じるまで、`Tooltip` が表示されたままになります。この動作はデフォルトのホバー動作をオーバーライドし、ユーザーがターゲット要素上でホバーを停止したときに `Tooltip` が消えないようにします。

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" placement="top-start" sticky>
  Congrats you've hovered the button!
</igc-tooltip>
```

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button" placement="top-start" sticky>
  Congrats you have hovered the button!
</IgrTooltip>
```

次の例では、すべての位置オプションと `Sticky` プロパティの動作のデモを見ることができます。

`sample="/inputs/tooltip/placement", height="220", alt="{Platform} Tooltip 配置の例"`

### トリガー

デフォルトでは、`Tooltip` はターゲット要素の上にマウスを移動したときにのみトリガーされます。ただし、`ShowTriggers` プロパティと `HideTriggers` プロパティを使用してこの動作を変更し、`Tooltip` が表示されるタイミングと消えるタイミングを制御できます。これらのプロパティは、`click`、`focus`、`keypress` などのイベント名を値として受け入れ、さまざまなシナリオで `Tooltip` をトリガーできるようにします。

`sample="/inputs/tooltip/triggers", height="600", alt="{Platform} Tooltip トリガーの例"`

### 高度な例

`Tooltip` は他のコンポーネントとシームレスに統合され、内部にコンポーネントを含む高度なツールチップを作成できます。
次の例では、`List`、`Avatar`、`Icon`、`Badge`、`Button`、`Card`、および `CategoryChart` コンポーネントを使用して説明的なツールチップを作成する方法を示しています。

`sample="/inputs/tooltip/advanced", height="640", alt="{Platform} Tooltip 高度な例"`

### 追加のプロパティ

これまでに説明したプロパティの他に、`Tooltip` コンポーネントには、動作、位置、外観をさらに構成できるさまざまな追加プロパティが用意されています。

|名前|タイプ|説明|
|--|--|--|
| `Open` | boolean | ツールチップの表示/非表示を決定します。 |
| `WithArrow` | boolean | **true** に設定すると、ツールチップの矢印インジケーターが有効になります。 |
| `Offset` | number | ツールチップとその `Anchor` 間のピクセル距離を設定します。 |

### メソッド

構成可能なプロパティに加えて、`Tooltip` では次の 3 つのメソッドも使用できます。

|名前|説明|
|--|--|
| `Show` | ツールチップが表示されていない場合は表示します。ターゲットが指定されている場合は、ターゲットを一時的な `Anchor` として設定します。 |
| `Hide` | ツールチップがまだ非表示になっていない場合は非表示にします。 |
| `Toggle` | ツールチップの表示状態と非表示状態を切り替えます。 |

## アクセシビリティと ARIA サポート

`Tooltip` はアクセシビリティを考慮して構築されており、次の ARIA 属性が含まれています。

* `role` - ツールチップがデフォルトの動作になっている場合、`role="tooltip"` が適用されます。`Sticky` プロパティが有効な場合、ロールは `status` に変更されます。
* `inert` - 可視性に基づいて動的に切り替えられます。ツールチップが非表示になると、ツールチップは非アクティブになります。
* `aria-atomic` - true に設定すると、ツールチップのコンテンツ全体が変更時に通知されるようになります。
* `aria-live` - polite に設定して、ユーザーがアイドル状態のときにのみ更新を通知することをスクリーン リーダーに示します。

## スタイル設定

`Tooltip` コンポーネントは、スタイル設定に使用できる 2 つの CSS パーツを公開します。

|名前|説明|
|--|--|
| `base` | ツールチップ コンポーネントの基本ラッパー。 |
| `top, right, bottom, left ...` | ツールチップ矢印を含む領域。パーツ名はツールチップ配置プロパティの値と一致します。 |

```css
igc-tooltip::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-tooltip::part(bottom) {
  border-bottom-color: var(--ig-primary-500);
}
```

`sample="/inputs/tooltip/styling", height="140", alt="{Platform} Tooltip スタイル設定の例"`

<div class="divider--half"></div>


## API リファレンス

- `Tooltip`
- `Avatar`
- `Button`
- `Icon`
- `Card`
- `Input`
- `Badge`
- `List`
- `CategoryChart`
 - [スタイル設定およびテーマ](../themes/overview.md)

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})