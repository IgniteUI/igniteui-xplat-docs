---
title: Card コンポーネント
_description: Ignite UI for Web Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: $ProductName$, UI controls, Web widgets, web widgets, UI widgets, Native Web Components Suite, Native Web Controls, Native Web Components Library, Web Card component, Web Card controls, UI コントロール, Web ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ Web コンポーネント スイート, ネイティブ Web コントロール, ネイティブ Web コンポーネント ライブラリ, Web Card コンポーネント, Web Card コントロール
mentionedTypes: ['Card', 'CardActions', 'CardContent', 'CardHeader', 'CardMedia', 'Avatar', 'Button', 'Icon', 'IconButton', 'Ripple']
_language: ja
---

# $Platform$ Card (カード) の概要

$ProductName$ Card は、テキスト、画像、アイコン、およびボタンを視覚的にリッチなプレゼンテーションで表示し、より詳細な情報へのエントリ ポイントとして機能します。Card を使用してマルチメディア ダッシュボードを作成できます。


## $Platform$ Card の例

<code-view style="height: 640px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-overview"
           alt="$Platform$ Card の例"
           github-src="layouts/card/overview">
</code-view>

<div class="divider--half"></div>

## 使用方法

Card コンポーネントは、様々なオブジェクト タイプ、サイズやサポートされるアクションが異なる同様のオブジェクトから成るコンテンツを表示できます。

### 作業の開始


<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Card` を使用する前に、次のように登録する必要があります:

```razor
IgbCardModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcCardComponent, IgcCardHeaderComponent, IgcCardContentComponent, IgcCardMediaComponent, IgcCardActionsComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent, IgcCardHeaderComponent, IgcCardContentComponent, IgcCardMediaComponent, IgcCardActionsComponent);
```

次に、デモのカード テンプレートを表すために、以下のコードを追加します:

```html
<igc-card>
    <igc-card-media>
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igc-card-media>

    <igc-card-header>
        <h3 slot="title">New York</h3>
        <h5 slot="subtitle">City in New York</h5>
    </igc-card-header>

    <igc-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igc-card-content>

    <igc-card-actions>
        <igc-button slot="start">
            <igc-ripple></igc-ripple>
            Read more
        </igc-button>
        <div slot="end">
            <igc-icon-button name="twitter" style="margin-right: 10px;">
                <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button name="facebook">
                <igc-ripple></igc-ripple>
            </igc-icon-button>
        </div>
    </igc-card-actions>
</igc-card>
```

```razor
<IgbCard>
    <IgbCardMedia>
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </IgbCardMedia>
    <IgbCardHeader>
        <h3 slot="title">New York City</h3>
        <h5 slot="subtitle">City in New York</h5>
    </IgbCardHeader>

    <IgbCardContent>
       <p>New York City comprises 5 boroughs sitting where the
           Hudson River meets the Atlantic Ocean. At its core is Manhattan,
           a densely populated borough that's among the world's major commercial,
           financial and cultural centers.</p>
    </IgbCardContent>
    <IgbCardActions>
        <IgbButton slot="start">
            <IgbRipple />
            Read more
        </IgbButton>
        <div slot="end">
            <IgbIconButton name="twitter" >
                <IgbRipple />
            </IgbIconButton>
            <IgbIconButton name="facebook" >
                <IgbRipple />
            </IgbIconButton>
        </div>
    </IgbCardActions>
</IgbCard>
```

上記を確認することができます。まず、`h3` 見出しのように、要素をヘッダー タイトルとしてタグ付けする場合は、要素を `CardHeader` タグの間に配置し、そのスロット名を `title` に設定します。逆に、別の見出し要素を `subtitle` にしたい場合は、そのスロットに `subtitle` という名前を付けます。

カードに表示する画像や動画は、`CardMedia` タグで囲みます。`CardMedia` を使用すると、内部に配置されたコンテンツのサイズを変更して、要素のコンテンツ ボックス全体を埋めながらアスペクト比を維持できます。オブジェクトのアスペクト比がボックスのアスペクト比と一致しない場合、オブジェクトは収まるようにクリップされます。

`CardContent` タグ内には何でも配置できます。通常テキストが配置されます。

最後に、`CardActions` は、ボタンなどのアクション可能な項目を配置する場所です。

### メディア、サムネイル、アバター
タイトルとサブタイトルの横のカード ヘッダーに画像またはアイコンを表示する場合は、要素のスロット プロパティを `thumbnail` に割り当てることで実行できます。

上記のカードを例にとると、`CardHeader` の内容を編集し、`slot="thumbnail"` でアバターを追加できます。

```html
<igc-card-header>
    <igc-avatar slot="thumbnail" src="path/to/image" initials="TS"></igc-avatar>

    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</igc-card-header>
```

```razor
<IgbCardHeader>
    <IgbAvatar slot="thumbnail" Src="path/to/image" Initials="TS" />

    <h3 slot="title">Title</h5>
    <h5 slot="subtitle">Subtitle</h5>
</IgbCardHeader>
```

上記の例では、カード ヘッダーのタイトルとサブタイトルの横にアバターが表示されます。

### Outlined カード
カードの `outlined` 属性を設定すると、細い境界線と置き換えてカードと背景を区別してカードからすべてのシャドウを削除します。

### 水平レイアウト

デフォルトでは、カードのすべてのセクション (ヘッダー、コンテンツ、メディア、アクション) は縦にレイアウトされています。垂直方向のスペースが多くある場合に便利です。カードのセクションを水平に配置したいとします。このようなレイアウトは、簡単な CSS で実現できます。

以下はアウトラインのある水平カードの例です。

```html
<igc-card outlined>
    <div class="card-horizontal">
        <div>
            <igc-card-header>
                <img src="ROZES-Under-the-Grave.jpg" slot="thumbnail">
                <h5 slot="title">Rozes</h5>
                <h5 slot="subtitle">Under the Grave (2016)</h5>
            </igc-card-header>
            <igc-card-content>
                <p>As I have always said: I write what’s real and what’s true,
                    even if it means throwing myself under the bus.</p>
            </igc-card-content>
        </div>
        <div class="divider"></div>
        <igc-card-actions>
            <igc-icon-button name="previous"></igc-icon-button>
            <igc-icon-button name="play"></igc-icon-button>
            <igc-icon-button name="next"></igc-icon-button>
        </igc-card-actions>
    </div>
</igc-card>
```

```razor
<IgbCard>
    <div class="card-horizontal">
        <div>
            <IgbCardHeader>
                <img slot="thumbnail" src="ROZES-Under-the-Grave.jpg" />
                <h5 slot="title">Rozes</h5>
                <h5 slot="subtitle">Under the Grave (2016)</h5>
            </IgbCardHeader>
            <IgbCardContent>
                <p>
                    As I have always said: I write what's real and what's true,
                    even if it means throwing myself under the bus.
                </p>
            </IgbCardContent>
        </div>
        <div class="divider"></div>
        <IgbCardActions>
            <IgbIconButton Name="previous" />
            <IgbIconButton Name="play" />
            <IgbIconButton Name="next" />
        </IgbCardActions>
    </div>
</IgbCard>
```

追加の `div` 要素を使用して `CardHeader` と `CardContent` をバンドルし、それらを垂直方向に整列させ、`.card-horizontal` クラスをラッピング `div` 要素に適用して、カードの 2 つのセクションを水平方向に整列させます。

`.card-horizontal` クラスが適用されるスタイルは次のとおりです。

```css
.card-horizontal {
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
}

.card-horizontal img {
    width: 64px;
    height: 64px;
}

.card-horizontal igc-card-actions {
    justify-content: center;
}
```

すべて適切に設定できると、結果は以下のようになります。

<code-view style="height: 270px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-horizontal"
           alt="$Platform$ Card の例"
           github-src="layouts/card/horizontal">
</code-view>

### その他のレイアウト

`Card` のレイアウトを使用すると、創造をさらに発展させることもできます。

以下は、半水平カードを作成する方法を示す例です。このカードでは、カードのすべてのセクションが垂直に配置され、`CardMedia` が垂直セクションの横に表示されます。

```html
<igc-card>
    <div class="semi-horizontal">
        <div>
            <igc-card-header>
                <igc-avatar src="mellow_d.jpg" slot="thumbnail">MD</igc-avatar>
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
            </igc-card-header>
            <igc-card-content>
                <p>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
            </igc-card-content>
            <igc-card-actions>
                <igc-button>play album</igc-button>
            </igc-card-actions>
        </div>
        <igc-card-media class="card-media">
            <img src="here_media.jpg">
        </igc-card-media>
    </div>
</igc-card>
```

```razor
<IgbCard>
    <div class="semi-horizontal">
        <div>
            <IgbCardHeader>
                <IgbAvatar slot="thumbnail" src/>
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
            </IgbCardHeader>
            <IgbCardContent>
              <p>Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.</p>
            </IgbCardContent>
            <IgbCardActions>
                <IgbButton>Play Album</IgbButton>
            </IgbCardActions>
        </div>
        <IgbCardMedia class="card-media">
            <img src="here_media.jpg" />
        </IgbCardMedia>
    </div>
</IgbCard>
```

```css
.semi-horizontal {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

.card-media {
    width: 96px;
    min-width: 96px;
}
```

<code-view style="height: 340px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-semi-horizontal"
           alt="$Platform$ Semi Horizontal Card の例"
           github-src="layouts/card/semi-horizontal">
</code-view>


### カード アクション

カードのアクション領域では、すでに説明したコンテンツに追加の設定を加えることができます。

テキスト ボタンとアイコン ボタンのスロット名を切り替えることで、それらの順序を逆にすることができます。

```html
<igc-card-actions>
    <igc-button slot="end">
        <igc-ripple></igc-ripple>
        Read more
    </igc-button>
    <div slot="start">
        <igc-icon-button name="twitter">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button name="facebook">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
    </div>
</igc-card-actions>
```

```razor
<IgbCardActions>
    <IgbButton slot="start">
        <IgbRipple />
        Read more
    </IgbButton>
    <div slot="end">
        <IgbIconButton name="twitter">
            <IgbRipple />
        </IgbIconButton>
        <IgbIconButton name="facebook" >
            <IgbRipple />
        </IgbIconButton>
    </div>
</IgbCardActions>
```

これで、アイコン ボタンがフラット スタイル テキスト ボタンの前に表示されます。

また、slot プロパティを省略して要素をデフォルトのスロットに移動するだけで、間にコンテンツを追加することもできます。

## スタイル設定

カードはさまざまな要素をラップするコンテナであるため、スタイル設定は、その基本要素 (ヘッダー、コンテンツ、メディア、およびアクションのサブコンポーネント) をスタイル設定することによって行われます。さらに、`header` コンポーネント (`CardHeader`) は、3 つの CSS パーツ (`header`、`title`、`subtitle`) を公開します。これにより、ラッピング要素と 2 つのタイトル要素のスタイルを設定できます。

```css
igc-card {
    background-color: #011627;
}

igc-card-content,
igc-card-header::part(title) {
    color: #FEFEFE;
}

igc-card-header::part(subtitle) {
    color: #ECAA53;
    opacity: 0.9;
}

igc-icon-button+igc-icon-button {
    margin-left: 10px;
}
```

<code-view style="height: 640px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-styling"
           alt="$Platform$ Card スタイル設定の例"
           github-src="layouts/card/styling">
</code-view>


### まとめ
このトピックでは Card コンポーネントの詳細について説明しました。シンプルなカードを作成し、画像をいくつか追加して、もう少し魅力的にしました。カード内にアバター、ボタン、アイコンなどの追加の $Platform$ を使用して、エクスペリエンスを充実させ、いくつかの機能を追加しました。そして最後に、基本要素の原色を変更することでカードの外観を変更しました。

<!-- Web Components -->

## API リファレンス

カード API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* `Card`
* `CardHeader`
* `CardContent`
* `CardMedia`
* `CardActions`


使用したその他のコンポーネントとディレクティブ:

* `Avatar`
* `Icon`
* `Button`
* `IconButton`
* `Ripple`

<!-- end: WebComponents -->

<div class="divider"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub** (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
