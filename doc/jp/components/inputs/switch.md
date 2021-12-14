---
title: $Platform$ Switch コンポーネント – $ProductName$
_description: $ProductName$ Switch コンポーネントを使用すると、開発者はアプリケーション内でバイナリのオン/オフまたは true/false のデータ入力関数を使用できます。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Switch components, $Platform$ Switch controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Switch コンポーネント, $Platform$ Switch コントロール
mentionedTypes: ['Switch']
_language: ja
---

# $Platform$ Switch (スイッチ)

$ProductName$ Switch コンポーネントは、iOS のスイッチ コンポーネントと同様に動作するバイナリ選択の選択コンポーネントです。


<div class="divider"></div>

## $Platform$ Switch の例

<code-view style="height:200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/switches-overview" alt="$Platform$ Switch の例"
           github-src="inputs/switches/overview">
</code-view>

<div class="divider--half"></div>

## 使用方法

`Switch` コンポーネントにより、オン/オフ状態を切り替えることができます。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Switch` を使用する前に、次のように登録する必要があります:

```razor
IgbSwitchModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";

defineComponents(IgcSwitchComponent);
```

`Switch` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-switch></igc-switch>
```

```razor
<IgbSwitch />
```

>[!WARNING]
>`Switch` コンポーネントは標準の `<form>` 要素では機能しません。代わりに `Form` を使用してください。

## 例

### ラベル

スイッチに意味のあるラベルを付けるには、開始タグと終了タグの間にテキストを配置するだけです。

```html
<igc-switch>Label</igc-switch>
```

```razor
<IgbSwitch>Label</IgbSwitch>
```

スイッチの `label-position` 属性を設定することにより、スイッチの切り替えの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。

```html
<igc-switch label-position="before">Label</igc-switch>
```

```razor
<IgbSwitch LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbSwitch>
```

スイッチには、スイッチの外部の要素でラベルを付けることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
```

```razor
<span id="switch-label>Label</span>
<IgbSwitch AriaLabelledBy="switch-label" />
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switches-label"
           alt="$Platform$ Avatar の例"
           github-src="inputs/switches/label">
</code-view>

### チェック済み

スイッチをオンに切り替えるには、`checked` 属性を使用します。

```html
<igc-switch checked></igc-switch>
```

```razor
<IgbSwitch Checked="true" />
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switches-checking"
           alt="$Platform$ Avatar の例"
           github-src="inputs/switches/checking">
</code-view>

### 必須

`required` 属性を使用して、スイッチを必須としてマークします。

```html
<igc-switch required></igc-switch>
```

```razor
<IgbSwitch Required="true" />
```

### 無効

`invalid` 属性を使用して、スイッチを無効としてマークします。

```html
<igc-switch invalid></igc-switch>
```

```razor
<IgbSwitch Invalid="true" />
```

### オフ

スイッチをオフにするには、`disabled` 属性を使用します。

```html
<igc-switch disabled></igc-switch>
```

```razor
<IgbSwitch Disabled="true" />
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switches-disabled"
           alt="$Platform$ Avatar の例"
           github-src="inputs/switches/disabled">
</code-view>

### フォーム

`Form` でスイッチを使用する場合は、`name` と `value` の属性を使用します。

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
```

```razor
<IgbSwitch Value="enabled" />
```

## スタイル設定

スイッチ コンポーネントは、いくつかの CSS パーツ (`base`、`control`、`indicator`、および `label`) を公開して、スタイルを完全に制御できるようにします。

```css
igc-switch::part(control) {
  background: beige;
  border-radius: 0;
}

igc-switch::part(thumb) {
  background: olive;
  border-radius: 2px;
  box-shadow: none;
}
```

<!-- WebComponents -->

## API リファレンス

* `Switch`

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
