---
title: {Platform} Carousel | インフラジスティックス
_description: {ProductName} Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。今すぐお試しください。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Carousel component, {Platform} Carousel control, {ProductName}, UI コントロール, {Platform} ウィジェット, Web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Carousel コンポーネント, {Platform} Carousel コントロール
_license: MIT
mentionedTypes: ["Carousel"]
_language: ja
---

# {Platform} Carousel (カルーセル) の概要
{ProductName} カルーセルは、レスポンシブで軽量なコンポーネントであり、テキスト スライド、リンク、およびその他の html 要素を含む画像のコレクションを前後に移動するユーザーに、スライドショーのような Web エクスペリエンスを作成する最も柔軟な方法を提供します。 

{Platform} カルーセル コンポーネントを使用すると、アニメーション、スライド トランジション、およびカスタマイズを使用できるため、インターフェイスを簡単に微調整して {Platform} カスタム カルーセルを構築できます。

## {Platform} Carousel の例
以下に示す {Platform} カルーセルのデモは、画像のみを含むスライドを示しています。

`sample="/layouts/carousel/overview", height="500", alt="{Platform} Carousel 概要の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Carousel` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcCarouselComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCarouselComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Carousel` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->
`Carousel` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCarouselModule));
```

スタイルを `Carousel` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

{ProductName} カルーセルがインポートされたので、`Carousel` とそのボタンの基本構成を開始できます。

`Carousel` セレクターを使用してスライドをラップします。スライドに有効な HTML コンテンツ、その他のコンポーネントなども含めることができます。

```html
<igc-carousel>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-indigo-design.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/slider-image-chart.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-charts.png"/>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png"/>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png"/>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png"/>
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png" />
    </IgbCarouselSlide>
</IgbCarousel>
```

スライドをデフォルトでアクティブにしたい場合は、`Active` 属性を使用します。

```html
<igc-carousel>
    ...
    <igc-carousel-slide>
        ...
    </igc-carousel-slide>
    <igc-carousel-slide active>
        ...
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
    ...
    <IgrCarouselSlide>
        ...
    </IgrCarouselSlide>
    <IgrCarouselSlide active={true}>
        ...
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    ...
    <IgbCarouselSlide>
        ...
    </IgbCarouselSlide>
    <IgbCarouselSlide Active="true">
        ...
    </IgbCarouselSlide>
</IgbCarousel>
```

>[!NOTE]
>アクティブなスライドが設定されていない場合は、最初のスライドがデフォルトで設定されます。最初のレンダリングまたは後続の更新時にアクティブなスライドが複数ある場合は、最後のスライドだけが考慮されます。

## 例

### カルーセルの構成

デフォルトでは、`Carousel` の `DisableLoop` プロパティは **false** に設定されています (ループは、Next 動作でナビゲートするときに最初のスライドが最後のスライドの後に来るか、Previous 動作を使用して最後のスライドが最初のスライドの後に来るときに起こります)。ループ動作を無効にするには、`DisableLoop` プロパティの値を **true** に設定します。

```html
<igc-carousel disable-loop="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel disableLoop={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel DisableLoop="true">
    ...
</IgbCarousel>
```

各スライド インデックスを追跡するために、カルーセルには、デフォルトでカルーセルの `end` に配置されるインジケーターがあります。この動作を変更するには、`IndicatorsOrientation` プロパティを使用して、`start` に割り当てる必要があります。

```html
<igc-carousel indicators-orientation="start">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel indicatorsOrientation={CarouselIndicatorsOrientation.Start}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel IndicatorsOrientation="@CarouselIndicatorsOrientation.Start">
    ...
</IgbCarousel>
```

デフォルトでは、`Carousel` にはナビゲーション ボタンとインジケーターが表示されます。インジケーターを非表示にするには `HideIndicators` プロパティを使用し、ナビゲーション ボタンを非表示にするには `HideNavigation` プロパティを使用します。

```html
<igc-carousel hide-navigation="true" hide-indicators="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel hideNavigation={true} hideIndicators={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel HideNavigation="true" HideIndicators="true">
    ...
</IgbCarousel>
```

`Carousel` は垂直モードをサポートしています。これを有効にするには、`Vertical` プロパティを使用します。

```html
<igc-carousel vertical="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel vertical={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel Vertical="true">
    ...
</IgbCarousel>
```

### カスタム インジケーター

{Platform} カスタム カルーセル インジケーターを追加するには、`CarouselIndicator` を使用します:

```html
<igc-carousel>
    <igc-carousel-indicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </igc-carousel-indicator>

    <igc-carousel-slide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/card/media/yosemite.jpg"/>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
  <IgrCarouselIndicator>
        <span key="empty">🤍</span>
    <span slot="active">
      ❤️
    </span>
    </IgrCarouselIndicator>
  <IgrCarouselIndicator>
        <span key="empty">🤍</span>
    <span slot="active">
      ❤️
    </span>
  </IgrCarouselIndicator
  <IgrCarouselSlide>
    <img
      src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png"
    />
    </IgrCarouselSlide>
    <IgrCarouselSlide key="second">
    <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png"/>
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbCarouselIndicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </IgbCarouselIndicator>

    <IgbCarouselSlide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg"/>
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/card/media/yosemite.jpg"/>
    </IgbCarouselSlide>
</IgbCarousel>
```

{ProductName} カルーセル コンポーネントを使用すると、ユーザーは単一のインジケーターのアクティブ状態と非アクティブ状態に異なる要素を使用できます。インジケーターを宣言するときは、たとえ同じであっても、スロットごとに 2 つの要素 (空とアクティブ) を提供することが必須です。


### カスタム ナビゲーション ボタン

これを実現するには、`previous-button` スロットと `next-button` スロットを使用します。

```html
<igc-carousel>
    <igc-icon slot="previous-button" name="previous" collection="material"></igc-icon>
    <igc-icon slot="next-button" name="next" collection="material"></igc-icon>
    ...
</igc-carousel>
```

```tsx
<IgrCarousel>
    <IgrIcon slot="previous-button" name="previous" collection="material"></IgrIcon>
    <IgrIcon slot="next-button" name="next" collection="material"></IgrIcon>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbIcon slot="previous-button" IconName="previous" Collection="material"></IgbIcon>
    <IgbIcon slot="next-button" IconName="next" Collection="material"></IgbIcon>
    ...
</IgbCarousel>
```

### 他のコンポーネントを含むスライド

このカルーセルには、フォームと画像を含むスライドが含まれます。

```html
<igc-carousel>
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg"/>
            <form>
                <igc-input type="text" placeholder="Username">
                    <igc-icon slot="prefix" name="person"></igc-icon>
                </igc-input>
                <igc-input type="password" placeholder="Password">
                    <igc-icon slot="prefix" name="password"></igc-icon>
                </igc-input>
                <igc-button type="reset">Sign In</igc-button>
            </form>
        </div>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/Route.svg"/>
            <form>
                <igc-input type="text" placeholder="Search">
                    <igc-icon slot="prefix" name="search"></igc-icon>
                </igc-input>
                <igc-button type="reset">Search</igc-button>
            </form>
        </div>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
      <div>
        <img src="assets/images/svg/carousel/SignUp.svg" />
        <form>
          <IgrInput type="text" placeholder="Username">
            <IgrIcon slot="prefix" name="person"></IgrIcon>
          </IgrInput>
          <IgrInput type="password" placeholder="Password">
            <IgrIcon slot="prefix" name="password"></IgrIcon>
          </IgrInput>
          <IgrButton type="reset">
            <span>Sign In</span>
          </IgrButton>
        </form>
      </div>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
      <div>
        <img src="assets/images/svg/carousel/Route.svg" />
        <form>
          <IgrInput type="text" placeholder="Search">
            <IgrIcon slot="prefix" name="search"></IgrIcon>
          </IgrInput>
          <IgrButton type="reset">
            <span>Search</span>
          </IgrButton>
        </form>
      </div>
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg">
            <form>
                <IgbInput DisplayType="@InputType.Text" Placeholder="Username">
                    <IgbIcon slot="prefix" IconName="person" Collection="material" @ref="iconRef"></IgbIcon>
                </IgbInput>
                <IgbInput DisplayType="@InputType.Password" Placeholder="Password">
                    <IgbIcon slot="prefix" IconName="password" Collection="material"></IgbIcon>
                </IgbInput>
                <IgbButton DisplayType="@ButtonBaseType.Reset">Sign In</IgbButton>
            </form>
        </div>
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/Route.svg">
            <form>
                <IgbInput DisplayType="@InputType.Text" Placeholder="Search">
                    <IgbIcon slot="prefix" IconName="search" Collection="material"></IgbIcon>
                </IgbInput>
                <IgbButton DisplayType="@ButtonBaseType.Reset">Search</IgbButton>
            </form>
        </div>
    </IgbCarouselSlide>
</IgbCarousel>
```

#### サンプル

`sample="/layouts/carousel/components", height="600", alt="コンポーネント付き {Platform} Carousel の例"`


## アニメーション

アニメーション化されたスライド遷移により、エンドユーザーはカルーセルを操作しているときに高いエクスペリエンスを得ることができます。

デフォルトでカルーセルは `slide` アニメーションを使用するように設定されていますが、代替アニメーションとして `fade` もサポートしています。

アニメーションを変更するには、`AnimationType` プロパティを使用します。

```html
<igc-carousel animation-type="fade">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel animationType="fade">
    ...
</IgrCarousel>
```

```razor
<IgbCarousel AnimationType="@CarouselAnimationType.Fade">
    ...
</IgbCarousel>
```

`AnimationType` プロパティに `none` を設定すると、アニメーションが無効になります。

### サンプル

以下のデモは、カルーセルがサポートするさまざまなタイプのアニメーションを示しています。

`sample="/layouts/carousel/animations", height="650", alt="{Platform} Carousel アニメーションの例"`


## ナビゲーション

トランジションとナビゲーションは、最も重要なカルーセル機能です。

カルーセル内のナビゲーションは、モバイル デバイスでのナビゲーション ボタン、キーボード ナビゲーション、パン操作を通じてユーザーが処理できます。

### タッチ ジェスチャー

デフォルトでカルーセルはあらゆるタッチ対応デバイスに使用できます。

カルーセル [アニメーション](carousel.md#アニメーション)はタッチ デバイスで完全にサポートされているため、プラットホームに合わせてプログレッシブ Web アプリケーション ([PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps)) を構築するための完璧なツールです。

### キーボード ナビゲーション

- ナビゲーション ボタン
    * <kbd>SPACE</kbd>/<kbd>ENTER</kbd> キー - 次のスライド/前のスライドに移動します。
- インジケーター
    * <kbd>🡐</kbd> キー - 前のスライド (右から左モードでは次) に移動します。
    * <kbd>🡒</kbd> キー - 次のスライド  (右から左モードでは前へ) に移動します。
    * <kbd>HOME</kbd> キー - 最初のスライド (右から左モードでは最後) に移動します。
    * <kbd>End</kbd> キー - 最後のスライド (右から左モードでは最初) に移動します。

### 自動的なトランジション

`Carousel` は、ユーザーの操作なしでスライドを自動的に変更するように簡単に構成できます。この方法では、トランジション間隔 を `Interval` プロパティに設定するだけで、スライドショーを作成できます。このプロパティは、スライド トランジション間の間隔 (ミリ秒)を決定します。

>[!NOTE]
>カルーセル コンテンツの上にマウスを移動するか、キーボード フォーカスをいずれかのカルーセル コンテンツに移動すると、自動トランジションが一時停止されます。マウスがカルーセルから離れるか、キーボード フォーカスがカルーセル コンテンツから移動すると、自動トランジションが再開されます。
この動作は、`DisablePauseOnInteraction` プロパティを **true** に設定することでこれを防ぐことができます。

```html
<igc-carousel interval="2000" disable-pause-on-interaction="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel interval={2000} disablePauseOnInteraction={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel Interval="2000" DisablePauseOnInteraction="true">
    ...
</IgbCarousel>
```

## 高度な例

ループを有効にして完全に自動化されたカルーセルを作成しましょう。各スライドのサムネイル表示になるようにインジケーターを設定します。


これを実現するには、カルーセルを以下のように構成する必要があります。
- `DisablePauseOnInteraction` プロパティを有効にします。
- `HideNavigation` プロパティを有効にします。
- `Vertical` プロパティを有効にします。
- トランジション `Interval` を追加します。
- 各スライドにカスタム `CarouselIndicator` を追加します。

カルーセル テンプレートは以下のようになります。

```html
<igc-carousel
    disable-pause-on-interaction="true"
    hide-navigation="true"
    vertical="true"
    interval="2000"
    animation-type="fade"
>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
        
    <igc-carousel-slide>
        <img src="assets/images/carousel/WonderfulCoast.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/CulturalDip.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/GoldenBeaches.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/IslandOfHistory.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/AmazingBridge.png"/>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
const images = [
    {
        src: "assets/images/carousel/WonderfulCoast.png",
        alt: "Wonderful Coast",
    },
    {
        src: "assets/images/carousel/CulturalDip.png",
        alt: "Cultural Dip",
    },
    {
        src: "assets/images/carousel/GoldenBeaches.png",
        alt: "Golden Beaches",
    },
    {
        src: "assets/images/carousel/IslandOfHistory.png",
        alt: "Island Of History",
    },
    {
        src: "assets/images/carousel/AmazingBridge.png",
        alt: "Amazing Bridge",
    },
];

<IgrCarousel
    disablePauseOnInteraction={true}
    hideNavigation={true}
    interval={2000}
    vertical={true}
  animationType="fade"
>
    {images.map((image, index) => {
        return (
            <React.Fragment key={index}>
        <IgrCarouselSlide>
          <img src={image.src} alt={image.alt} />
                </IgrCarouselSlide>
        <IgrCarouselIndicator>
                    <img
                        className="blurred"
                        src={image.src.replace(".png", "Thumb.png")}
                        alt={`${image.alt} Thumb`}
                        width="50"
                        height="60"
                    />
                    <img
                        slot="active"
                        src={image.src.replace(".png", "Thumb.png")}
                        alt={`${image.alt} Thumb Active`}
                        width="50"
                        height="60"
                    />
                </IgrCarouselIndicator>
            </React.Fragment>
        );
    })}
</IgrCarousel>
```

```razor
<IgbCarousel DisablePauseOnInteraction="true"
             HideNavigation="true"
             Interval="2000"
             Vertical="true"
             AnimationType="@CarouselAnimationType.Fade">
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>

    <IgbCarouselSlide>
        <img src="assets/images/carousel/WonderfulCoast.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/CulturalDip.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/GoldenBeaches.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/IslandOfHistory.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/AmazingBridge.png" />
    </IgbCarouselSlide>
</IgbCarousel>
```

これらの構成の結果は以下のようになります。

`sample="/layouts/carousel/thumbnail", height="600", alt="{Platform} Carousel サムネイルの例"`


## ユーザー補助

### WAI-ARIA の役割、状態、およびプロパティ
 * カルーセルの基本要素の役割は [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) です。これは、ユーザーが簡単にナビゲートできるようにしたい特定の目的に関連するコンテンツを含むセクションです。
 * カルーセル インジケーターの役割は [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) です。これは、ユーザーに描画されるタブ コンテンツを選択するためのメカニズムを提供するグループ化ラベルです。
 * タブのセット (カルーセル インジケーター) 役割のコンテナーとして機能する要素は、[`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist) に設定されます。
 * 各スライド要素には、[`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) の役割が設定されています。

### ARIA のサポート
#### Carousel コンポーネント
- **属性**
    * [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) を 「carousel」 に設定します。
    * [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - スクリーン リーダーがライブ リージョンの更新を処理する優先度を設定するために使用されます。可能な設定は **off** おとび **polite** です。デフォルト設定は **polite** であり、スライド セットのコンテナーとして機能する要素に設定されています。`Interval` オプションが設定され、カルーセルが再生状態の場合、**aria-live** 属性は **off** に設定されます。
    * [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label) (ナビゲーション ボタン) - 「前のスライド」/「次のスライド」。

#### Slide コンポーネント
- **属性**
    * id - 「igc-carousel-slide-${incremented_number}」 のパターンに従います。
    * [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) を 「slide」 に設定します。
    * [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) は 「${index + 1} of ${total}」 のパターンに従います。

#### Indicator コンポーネント
- **属性**
    * [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) は 「Slide ${index + 1}」 のパターンに従います。
    * [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) - アクティブなスライドに基づいて **true** または **false** に設定します。


## API リファレンス

- `Carousel`
- `CarouselSlide`
- `CarouselIndicator`
- `Icon`
- `Input`
- `Button`

## その他のリソース

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})
