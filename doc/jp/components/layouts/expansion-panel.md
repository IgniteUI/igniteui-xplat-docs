---
title: $Platform$ 展開パネル | 展開パネル | インフラジスティックス
_description: 展開パネル コンポーネントは、縮小と展開の 2 つの状態を持つ簡単に構成可能な展開可能なコンポーネントを提供します。
_keywords: $Platform$ Expansion Panel, Infragistics, $Platform$ 展開パネル, $ProductName$, インフラジスティックス
mentionedTypes: ['ExpansionPanel']
_language: ja
---

# $Platform$ 展開パネルの概要
$ProductName$ 展開パネルは、縮小または展開の 2 つの状態で描画できる軽量のアコーディオン コンポーネントです。展開パネルは、マウス クリックまたはキーボード操作によって切り替えることができます。

## $Platform$ 展開パネルの例

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-usage"
           alt="$Platform$ 展開パネルの例"
           github-src="layouts/expansion-panel/usage">
</code-view>

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`ExpansionPanel` を使用する前に、次のように登録する必要があります:

```ts
import {defineComponents, IgcExpansionPanelComponent} from 'igniteui-webcomponents';

defineComponents(IgcExpansionPanelComponent);
```

`ExpansionPanel` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-expansion-panel>
    <div slot="title">Golden Retriever</div>
    <div slot="subTitle">Medium-large gun dog</div>
    <div>
        <p>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
        and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability
        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
        are easy to train to basic or advanced obedience standards.</p>
    </div>
</igc-expansion-panel>
```

## イベントにバインド

展開パネル コンポーネントは、次のイベントを発生させます:
- igcClosed - 展開パネルが縮小されたときに発生します。
- igcOpeneded - 展開パネルが展開パネルされたときに発生します。
- igcClosing - 展開パネルが縮小を開始たときに発生します。
- igcOpening - 展開パネルが展開パネルを開始したときに発生します。

次のサンプルは、コンポーネントにロジックを追加して、パネルの現在の状態に応じて `subtitle` を表示 / 非表示にする方法を示しています。

これを行うには、`igcOpened` および `igcClosed` イベント エミッターにバインドします。

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-properties-and-events"
           alt="$Platform$ 展開パネル"
           github-src="layouts/expansion-panel/properties-and-events">
</code-view>

<div class="divider--half"></div>

## コンポーネントのカスタマイズ
`IgcExpansionPanel` コントロールを使用すると、あらゆる種類のコンテンツを本体内に追加できます。[Input](../inputs/input.md)、チャート、さらには他の展開パネルを描画できます!

`IgcExpansionPanel` を使用すると、公開された *title*、*subTitle*、および *indicator* スロット全体でヘッダーを簡単にカスタマイズできます。

展開インジケーターの位置の構成は、展開パネルの `indicatorAlignment` プロパティを使用して行うことができます。可能なオプションは、**start**、**end**、または **none** です。

次のコードサンプルは、コンポーネントのボタンが右側に移動するように構成する方法を示しています。

<code-view style="height: 460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-component-customization"
           alt="$Platform$ 展開パネルのカスタマイズ"
           github-src="layouts/expansion-panel/component-customization">
</code-view>

<div class="divider--half"></div>

## キーボード ナビゲーション

$ProductName$ 展開パネルのキーボード ナビゲーションは、W3C アクセシビリティ標準に準拠しており、使いやすくなっています。

**キーの組み合わせ**

 - <kbd> Alt + 下矢印</kbd> - フォーカスされたパネルを展開します。
 - <kbd>Alt + 上矢印</kbd> - フォーカスされたパネルを縮小します。
 - <kbd>Space</kbd> / <kbd>Enter</kbd> - フォーカスされたパネルの展開状態を切り替えます。


## スタイル設定

$ProductName$ 展開パネル コンポーネントは、いくつかの CSS パーツ (`header`、`indicator`、`title`、`subtitle` および `content`) を公開して、スタイルを完全に制御できるようにします。

<code-view style="height: 480px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-styling"
           alt="$Platform$ 展開パネルのスタイル設定"
           github-src="layouts/expansion-panel/styling">
</code-view>

<div class="divider--half"></div>

<!-- WebComponents -->

## API リファレンス

展開パネルの API の詳細については、次のリンクを参照してください:
* `ExpansionPanel`


<!-- end: WebComponents -->

<div class="divider"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

 ## API メンバー

 - `ExpansionPanel`