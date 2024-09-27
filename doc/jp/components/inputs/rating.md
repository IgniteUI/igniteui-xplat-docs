---
title: {Platform} Rating
_description: {ProductName} Rating を使用すると、ユーザーは Unicode シンボル、SVG、またはアイコンを使用してフィードバックを表示および提供できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Rating components, {Platform} Rating controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Rating コンポーネント, {Platform} Rating コントロール
mentionedTypes: ["Rating"]
_language: ja
---

# {Platform} Rating (評価) の概要

{ProductName} 評価コンポーネントを使用すると、ユーザーはフィードバックを表示して提供できます。

`sample="/inputs/rating/basic", height="150", alt="{Platform} Rating の基本的な例"`


<!-- WebComponents -->

まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

<!-- end: React -->

`Rating` を使用する前に、次のように登録する必要があります:

<!-- Blazor -->
```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRatingModule));
```

また、`Rating` コンポーネントにスタイルを適用するために、追加の CSS ファイルをリンクする必要があります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

<!-- WebComponents -->
```ts
import { defineComponents, IgcRatingComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRatingComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
```tsx
import { IgrRatingModule, IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrRatingModule.register();
```
<!-- end: React -->

`Rating` の使用を開始する最も簡単な方法は次のとおりです:

<!-- WebComponents -->
```html
<igc-rating></igc-rating>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRating></IgbRating>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
  <IgrRating></IgrRating>
```
<!-- end: React -->

これにより、データの入力と読み取りに使用できる 5 つ星の評価コンポーネントが作成されます。

## カスタム シンボルの使用

`Rating` コンポーネントを使用すると、デフォルトの星シンボルの代わりにカスタム シンボルを使用できます。SVG、アイコン、または別の Unicode シンボルなどの別のシンボルを使用する場合は、`Rating` の開く括弧と閉じる括弧の間に `RatingSymbol` コンポーネントを配置する必要があります。

<!-- WebComponents -->
```html
<igc-rating>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
</igc-rating>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRating>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
</IgbRating>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
  <IgrRating label="Rate Experience" step=".5" size="large" hoverPreview="true">
    <IgrRatingSymbol key="0">
        <IgrIcon ref={this.iconRef} name='heart' collection="material" key="heart0"></IgrIcon>
    </IgrRatingSymbol>
    <IgrRatingSymbol key="1">
        <IgrIcon  name='heart' collection="material" key="heart1"></IgrIcon>                           
    </IgrRatingSymbol>
    <IgrRatingSymbol key="2">
      	<IgrIcon  name='heart' collection="material" key="heart2"></IgrIcon>                           
    </IgrRatingSymbol>
    <IgrRatingSymbol key="3">
       	<IgrIcon  name='heart' collection="material" key="heart3"></IgrIcon>                           
    </IgrRatingSymbol>
    <IgrRatingSymbol key="4">
       	<IgrIcon  name='heart' collection="material" key="heart4"></IgrIcon>                           
    </IgrRatingSymbol>                        
</IgrRating> 
```
<!-- end: React -->

`sample="/inputs/rating/custom", height="150", alt="{Platform} Rating カスタム シンボルの例"`


> 評価コンポーネントの開く括弧と閉じる括弧間の評価記号の数によって、最大値が決まります。

## 単一選択
{ProductName} 評価コンポーネントには、ユーザーがさまざまな評価値に対してさまざまなアイコン / 要素を提供できる単一選択モードがあります。この場合、アイコン / 要素の 1 つだけを選択して、ユーザーからのフィードバックを反映させることができます。

<!-- WebComponents -->
```html
<igc-rating single>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
</igc-rating>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRating>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
</IgbRating>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
  <IgrRating single="true">
    <IgrRatingSymbol key="0">                           
	<div key="div0">😣</div>	
	<div key="empty-div0" slot="empty">😣</div>
    </IgrRatingSymbol>
    <IgrRatingSymbol key="1">                           
 	<div key="div1">😣</div>
        <div key="empty-div1" slot="empty">😣</div>
    </IgrRatingSymbol>
    <IgrRatingSymbol key="2">                           
        <div key="div2">😣</div>
        <div key="empty-div2" slot="empty">😣</div>
    </IgrRatingSymbol>
    <IgrRatingSymbol key="3">                           
        <div key="div3">😣</div>
        <div key="empty-div3" slot="empty">😣</div>
    </IgrRatingSymbol>
    <IgrRatingSymbol key="4">                           
        <div key="div4">😣</div>
        <div key="empty-div4" slot="empty">😣</div>
    </IgrRatingSymbol>                         
</IgrRating>
```
<!-- end: React -->

`sample="/inputs/rating/single-selection", height="150", alt="{Platform} 単一選択による {Platform} Rating"`


> `step` 属性は単一選択モードでは機能しないことに注意してください。

## 空および選択済み
{ProductName} 評価コンポーネントを使用すると、ユーザーは単一の評価値の空の状態と選択された状態に異なるアイコン / 要素を使用できます。シンボルを宣言するときは、たとえ同じであっても、スロットごとに 2 つのアイコン (空とフル) を提供することが必須です。次に例を示します。

<!-- WebComponents -->
```html
<igc-rating-symbol>
  <igc-icon collection="default" name="bandage"></igc-icon>
  <igc-icon collection="default" name="bacteria" slot="empty"></igc-icon>
</igc-rating-symbol>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRatingSymbol>
  <IgbIcon Collection="material" IconName="bandage"></IgbIcon>
  <IgbIcon Collection="material" IconName="bacteria" slot="empty"></IgbIcon>
</IgbRatingSymbol>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
<IgrRatingSymbol key="0">
    <div key="div0"><IgrIcon name='bandage' collection="material" key="default0"></IgrIcon></div>
    <div key="empty-div0" slot='empty'><IgrIcon name='bacteria' collection="material" key="empty0"></IgrIcon></div> 
</IgrRatingSymbol> 
```
<!-- end: React -->

`sample="/inputs/rating/empty", height="150", alt="{Platform} 空および選択状態の {Platform} Rating"`


## 構成

#### Single (単一)

評価の `Single` ビジュアル モードをオンにします。フィードバック絵文字の顔など、固有の値を伝える記号を使用する場合に便利です。

#### Value (値)

`Value` 属性は、コンポーネントの現在の値を設定します。

#### Label (ラベル)

`Label` 属性を使用すると、評価コンポーネントのラベル値を設定できます。

#### 値の形式
[aria-valuetext (英語)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) を設定する書式文字列。そのすべてのインスタンスは、コントロールの現在の値に置き換えられます。スクリーン リーダーにとって重要であり、ローカライズに役立ちます。

#### Max Value (最大値)

`Max` 属性は、評価コンポーネントの最大許容値を設定します。

#### Step (ステップ)

`Step` 属性は、2 つのシンボル間の許容されるステップの割合を設定します。評価記号を半分に分割する場合に便利です。

#### Hover Preview (ホバー プレビュー)

<!-- WebComponents -->
`hover-preview` 属性により、ホバー時にユーザー選択の可能な結果がコンポーネントに表示されます。選択した値が何であるかについて即座にフィードバックしたい場合に便利です。
<!-- end: WebComponents -->

<!-- Blazor -->
`HoverPreview` 属性により、ホバー時にユーザー選択の可能な結果がコンポーネントに表示されます。選択した値が何であるかについて即座にフィードバックしたい場合に便利です。
<!-- end: Blazor -->

<!-- React -->
`hoverPreview` 属性により、ホバー時にユーザー選択の可能な結果がコンポーネントに表示されます。選択した値が何であるかについて即座にフィードバックしたい場合に便利です。
<!-- end: React -->

#### Read-Only (読み取り専用)

`ReadOnly` 属性を使用すると、ユーザーは `Rating` を読み取り専用モードで設定できます。この属性は、コンポーネントを情報提供のみを目的として使用する場合に役立ちます。

#### Disabled (無効)

`Disabled` 属性はコンポーネントを無効にし、マウスやキーボードを使用して値を選択することを不可能にします。

## メソッド

#### Step Up (ステップアップ)

`StepUp` メソッドは、コンポーネントの値を `n` ステップずつ増やします。`step` 係数によって決定されます。

#### Step Down (ステップダウン)

`StepDown` メソッドは、コンポーネントの値を `n` ステップ分減らします。`step` 係数によって決定されます。

## イベント

<!-- WebComponents -->
`Rating` コンポーネントは、`igcHover` と `igcChange` の 2 つの個別のイベントを発行します。
<!-- end: WebComponents -->

<!-- Blazor -->
`Rating` コンポーネントは、`Hover` と `Change` の 2 つの個別のイベントを発行します。
<!-- end: Blazor -->

<!-- React -->
`Rating` コンポーネントは、`hover` と `change` の 2 つの個別のイベントを発行します。
<!-- end: React -->

#### Hover Event (ホバー イベント)

<!-- WebComponents -->
`igcHover` イベントは、シンボルにカーソルを合わせると発生します。マウス カーソルの下にあるシンボルの値を提供します。カスタム値ラベルと読み出しを作成するのに役立ちます。
<!-- end: WebComponents -->

<!-- Blazor -->
`Hover` イベントは、シンボルにカーソルを合わせると発生します。マウス カーソルの下にあるシンボルの値を提供します。カスタム値ラベルと読み出しを作成するのに役立ちます。
<!-- end: Blazor -->

<!-- React -->
`hover` イベントは、シンボルにカーソルを合わせると発生します。マウス カーソルの下にあるシンボルの値を提供します。カスタム値ラベルと読み出しを作成するのに役立ちます。
<!-- end: React -->

#### Change Event (変更イベント)

<!-- WebComponents -->
選択した値が変更されると、`igcChange` イベントが発生します。
<!-- end: WebComponents -->

<!-- Blazor -->
選択した値が変更されると、`Change` イベントが発生します。
<!-- end: Blazor -->

<!-- React -->
選択した値が変更されると、`change` イベントが発生します。
<!-- end: React -->

## スタイル設定

`Rating` コンポーネントは、base、label、value-label、symbol、およびコンポーネント シンボルとそれに含まれるラベルのスタイルを設定できるシンボルを提供します。

`sample="/inputs/rating/styling", height="150", alt="{Platform} Rating スタイル設定の例"`


## API リファレンス

- `Rating`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
