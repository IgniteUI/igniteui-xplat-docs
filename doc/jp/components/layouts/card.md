---
title: Card コンポーネント
_description: Ignite UI for Web Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: {ProductName}, UI controls, Web widgets, web widgets, UI widgets, Native Web Components Suite, Native Web Controls, Native Web Components Library, Web Card component, Web Card controls, UI コントロール, Web ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ Web コンポーネント スイート, ネイティブ Web コントロール, ネイティブ Web コンポーネント ライブラリ, Web Card コンポーネント, Web Card コントロール
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
_language: ja
---

# {Platform} Card (カード) の概要

{ProductName} Card は、テキスト、画像、アイコン、およびボタンを視覚的にリッチなプレゼンテーションで表示し、より詳細な情報へのエントリ ポイントとして機能します。Card を使用してマルチメディア ダッシュボードを作成できます。


## {Platform} Card の例

`sample="/layouts/card/overview", height="640", alt="{Platform} Card の例"`



<div class="divider--half"></div>

## 使用方法

Card コンポーネントは、様々なオブジェクト タイプ、サイズやサポートされるアクションが異なる同様のオブジェクトから成るコンテンツを表示できます。

### 作業の開始


<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Card` と必要な CSS をインポートする必要があります:

```tsx
import { IgrCard, IgrCardHeader, IgrCardContent, IgrCardMedia, IgrCardActions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

`Card` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCardModule));
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Card` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcCardComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent );
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

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

```tsx
<IgrCard>
    <IgrCardMedia>
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"></img>
    </IgrCardMedia>
    <IgrCardHeader>
        <h3 slot="title">New York City</h3>
        <h5 slot="subtitle">City in New York</h5>
    </IgrCardHeader>
    <IgrCardContent>
        <p>New York City comprises 5 boroughs sitting where the
            Hudson River meets the Atlantic Ocean. At its core is Manhattan,
            a densely populated borough that’s among the world’s major commercial,
            financial and cultural centers.</p>
    </IgrCardContent>
    <IgrCardActions>
        <IgrButton>
            <span>Read more</span>
            <IgrRipple />
        </IgrButton>
        <div slot="end">
            <IgrIconButton name="twitter" collection="material">
                <IgrRipple />
            </IgrIconButton>
            <IgrIconButton name="facebook" collection="material">
                <IgrRipple />
            </IgrIconButton>
        </div>
    </IgrCardActions>
</IgrCard>
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

```tsx
<IgrCardHeader>
    <div slot="thumbnail">
        <IgrAvatar src="path/to/image" initials="TS" />
    </div>
    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</IgrCardHeader>
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

```tsx
<IgrCard>
    <div className="card-horizontal">
        <div>
            <IgrCardHeader>
                <img src="https://static.infragistics.com/xplatform/images/music/rozes.jpg" slot="thumbnail"></img>
                <h5 slot="title">Rozes</h5>
                <h5 slot="subtitle">Under the Grave (2016)</h5>
            </IgrCardHeader>
            <IgrCardContent>
                <p>As I have always said: I write what’s real and what’s true,
                    even if it means throwing myself under the bus.</p>
            </IgrCardContent>
        </div>
        <div className="divider"></div>
        <IgrCardActions>
            <span className="material-icons">skip_previous</span>
            <span className="material-icons">play_arrow</span>
            <span className="material-icons">skip_next</span>
        </IgrCardActions>
    </div>
</IgrCard>
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

`sample="/layouts/card/horizontal", height="270", alt="{Platform} Card の例"`



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

```tsx
<IgrCard>
    <div className="semi-horizontal">
        <div>
            <IgrCardHeader>
                <IgrAvatar src="https://static.infragistics.com/xplatform/images/music/singer_with_mic.jpg" slot="thumbnail" />
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
            </IgrCardHeader>
            <IgrCardContent>
                <p>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
            </IgrCardContent>
            <IgrCardActions>
                <IgrButton><span>Play Album</span></IgrButton>
            </IgrCardActions>
        </div>

        <IgrCardMedia className='card-media'>
            <img src="https://static.infragistics.com/xplatform/images/music/singer_female.jpg"></img>
        </IgrCardMedia>
    </div>
</IgrCard>
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

`sample="/layouts/card/semi-horizontal", height="340", alt="{Platform} Semi Horizontal Card の例"`

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
    <div slot="start">
        <IgbIconButton name="twitter">
            <IgbRipple />
        </IgbIconButton>
        <IgbIconButton name="facebook" >
            <IgbRipple />
        </IgbIconButton>
    </div>
</IgbCardActions>
```

```tsx
<IgrCardActions>
    <IgrButton>
        <span>Read more</span>
        <IgrRipple />
    </IgrButton>
    <div slot="start">
        <IgrIconButton className="marginIcon" name="twitter" collection="material">
            <IgrRipple />
        </IgrIconButton>
        <IgrIconButton name="facebook" collection="material">
            <IgrRipple />
        </IgrIconButton>
    </div>
</IgrCardActions>
```

これで、アイコン ボタンがフラット スタイル テキスト ボタンの前に表示されます。

また、slot プロパティを省略して要素をデフォルトのスロットに移動するだけで、間にコンテンツを追加することもできます。

## スタイル設定

カードはさまざまな要素をラップするコンテナであるため、スタイル設定は、その基本要素 (`CardHeader`、`CardContent`、`CardMedia`、および `CardActions` のサブコンポーネント) をスタイル設定することによって行われます。 

```css
igc-card {
  background-color: var(--ig-secondary-900);
}

igc-card-content,
igc-card-header::part(title) { 
  color: var(--ig-primary-500-contrast);
}

igc-card-header > *[slot="subtitle"] {
  color: var(--ig-warn-500);
  opacity: 0.9;
}

igc-icon-button::part(base) {
  background-color: var(--ig-primary-300);
}
```

`sample="/layouts/card/styling", height="640", alt="{Platform} Card スタイル設定の例"`

### まとめ
このトピックでは Card コンポーネントの詳細について説明しました。シンプルなカードを作成し、画像をいくつか追加して、もう少し魅力的にしました。カード内にアバター、ボタン、アイコンなどの追加の {Platform} を使用して、エクスペリエンスを充実させ、いくつかの機能を追加しました。そして最後に、基本要素の原色を変更することでカードの外観を変更しました。


<div class="divider"></div>


## API リファレンス

 - `Avatar`
 - `Button`
 - `CardActions`
 - `CardContent`
 - `CardHeader`
 - `CardMedia`
 - `Card`
 - `IconButton`
 - `Icon`
- [スタイル設定 & テーマ](../themes/overview.md)

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})