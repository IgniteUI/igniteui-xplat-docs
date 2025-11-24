---
title: {Platform} Divider | レイアウト コントロール | インフラジスティックス
_description: Infragistics の {Platform} Divider コンポーネントを使用すると、コンテンツ間の区切りとして水平線または垂直線を簡単に作成でき、ページ上の情報をより整理して表示できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, Web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} DIvider components, {Platform} Divider controls, UI コントロール, {Platform} ウィジェット, Web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Divider コンポーネント, {Platform} Divider コントロール
_license: MIT
mentionedTypes: ["Divider"]
_language: ja
---

# {Platform} Divider (デバイダー)

{ProductName} Divider を使用すると、コンテンツ作成者はコンテンツ間の区切りとして水平/垂直の罫線を簡単に作成し、ページ上の情報を整理しやすくなります。

## {Platform} Divider の例

`sample="/layouts/divider/overview", height="220", alt="{Platform} Divider の例"`

<div class="divider--half"></div>

## 依存関係

<!-- WebComponents -->
まず、次のコマンドを実行して、{ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Divider` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();
```

<!-- end: React -->

`Divider` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDividerModule));
```
<!-- Blazor -->

スタイルを `Divider` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcDividerComponent } from 'igniteui-webcomponents';

defineComponents(IgcDividerComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

`Divider` は、画像、イニシャル、またはアイコンを含むその他のコンテンツを表示できます。`Divider` の宣言は次のように簡単です:

```html
<igc-divider></igc-divider>
```

```tsx
<IgrDivider></IgrDivider>
```

```razor
<IgbDivider></IgbDivider>
```
## 使用方法
### 垂直デバイダー

`Vertical` 属性が設定されている場合、デバイダーの方向は水平から垂直に変更されます。

```html
<igc-divider vertical></igc-divider>
```

```tsx
<IgrDivider vertical></IgrDivider>
```

```razor
<igrDivider Vertical></igrDivider>
```

`sample="/layouts/divider/vertical", height="330", alt="{Platform} Divider Vertical の例"`

### タイプ

`Type` 属性は、`solid` のデバイダー線を描画するか、`dashed` のデバイダー線を描画するかを決定します。デフォルト値は `solid` です。

```html
<igc-divider type="dashed"></igc-divider>
```

```tsx
<IgrDivider type="dashed"></IgrDivider>
```

```razor
<IgbDivider Type="dashed"></igrDivider>
```

`sample="/layouts/divider/dashed", height="220", alt="{Platform} Divider Dashed の例"`

### デバイダーのインセット

`Divider` は両側に設定できます。デバイダーをインセットする (`inset`) には、`--inset` css 変数と組み合わせて `Middle` 属性を true に設定します。これにより、両側のデバイダーが縮小されます。`Middle` 属性のデフォルト値は false です。

```css
/* DividerStyles.css */
.withInset{
    --inset: 100px;
    --color:red;
}
```

```html
// Both side
<igc-divider middle="true" class="withInset"></igc-divider>
// Left side only
<igc-divider></igc-divider>
```


```tsx
// Both side
<IgrDivider middle="true" className="withInset"></IgrDivider>
// Left side only
<IgrDivider  className="withInset"></IgrDivider>
```

```razor
// Both side
<IgbDivider Middle="True" class="withInset"</igrDivider>
// Left side only
<IgbDivider class="withInset"</igrDivider>
```


`sample="/layouts/divider/middle", height="220", alt="{Platform} Divider Middle Inset の例"`

### Select コンポーネント内での Divider の使用

次のサンプルは、2 つの項目グループを区別するために、`Select` 内に `Divider` を統合する方法を示しています。

```html
<igc-select>
  <igc-select-item>Item 1</igc-select-item>
  <igc-select-item>Item 2</igc-select-item>
  <igc-divider></igc-divider>
  <igc-select-item>Item 3</igc-select-item>
</igc-select>
```

```tsx
<IgrSelect>
  <IgrSelectItem><span>Item 1</span></IgrSelectItem>
  <IgrSelectItem><span>Item 2</span></IgrSelectItem>
  <IgrDivider></IgrDivider>
  <IgrSelectItem><span>Item 2</span></IgrSelectItem>
</IgrSelect>

```

```razor
<IgbSelect>
 <IgbSelectItem>Item 1</IgbSelectItem>
 <IgbSelectItem>Item 2</IgbSelectItem>
 <IgbDivider></IgbDivider>
 <IgbSelectItem>Item 2</IgbSelectItem>
</IgbSelect>
```

`sample="/layouts/divider/select", height="330", alt="{Platform} Divider Select の例"`

## CSS 変数
### Inset
`--inset` css 変数は、開始から指定された量だけデバイダーを縮小します。middle が設定されている場合は、両側から縮小されます。

### Color
`--color` css 変数はデバイダーの色を設定します。

<div class="divider--half"></div>


## API リファレンス

- `Divider`

## その他のリソース

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})