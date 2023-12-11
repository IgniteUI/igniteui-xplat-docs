---
title: {Platform} 展開パネル | 展開パネル | インフラジスティックス
_description: 展開パネル コンポーネントは、縮小と展開の 2 つの状態を持つ簡単に構成可能な展開可能なコンポーネントを提供します。
_keywords: {Platform} Expansion Panel, Infragistics, {Platform} 展開パネル, {ProductName}, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Layouts.Implementation.ExpansionPanel']
namespace: Infragistics.Controls
_language: ja
---

# {Platform} 展開パネルの概要
{ProductName} 展開パネルは、縮小または展開の 2 つの状態で描画できる軽量のアコーディオン コンポーネントです。展開パネルは、マウス クリックまたはキーボード操作によって切り替えることができます。

## {Platform} 展開パネルの例

`sample="/layouts/expansion-panel/usage", height="320", alt="{Platform} 展開パネルの例"`

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`ExpansionPanel` を使用する前に、次のように登録する必要があります:

```ts
import {defineComponents, IgcExpansionPanelComponent} from 'igniteui-webcomponents';

defineComponents(IgcExpansionPanelComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`ExpansionPanel` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrExpansionPanel, IgrExpansionPanelModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrExpansionPanelModule.register();
```

<!-- end: React -->

`ExpansionPanel` の使用を開始する最も簡単な方法は次のとおりです:

<!-- WebComponents -->
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
<!-- end: WebComponents -->

```tsx
<IgrExpansionPanel>
    <h1 slot="title">Golden Retriever</h1>
    <h3 slot="subtitle">Medium-large gun dog</h3>
    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
        are easy to train to basic or advanced obedience standards.</span>
</IgrExpansionPanel>
```

## イベントにバインド

展開パネル コンポーネントは、次のイベントを発生させます:

<!-- WebComponents -->

- igcClosed - 展開パネルが縮小されたときに発生します。
- igcOpened - 展開パネルが展開されたときに発生します。
- igcClosing - 展開パネルが縮小を開始たときに発生します。
- igcOpening - 展開パネルが展開を開始したときに発生します。

<!-- end: WebComponents -->

<!-- React -->

- Closed - 展開パネルが縮小されたときに発生します。
- Opened - 展開パネルが展開されたときに発生します。
- Closing - 展開パネルが縮小を開始たときに発生します。
- Opening - 展開パネルが展開を開始したときに発生します。

<!-- end: React -->

次のサンプルは、コンポーネントにロジックを追加して、パネルの現在の状態に応じて `subtitle` を表示 / 非表示にする方法を示しています。

<!-- WebComponents -->

これを行うには、`igcOpened` および `igcClosed` イベント エミッターにバインドします。

<!-- end: WebComponents -->

<!-- React -->

これを行うには、`Opened` および `Closed` イベントにバインドします:

<!-- end: React -->

`sample="/layouts/expansion-panel/properties-and-events", height="320", alt="{Platform} 展開パネル"`



<div class="divider--half"></div>

## コンポーネントのカスタマイズ
`ExpansionPanel` コントロールを使用すると、あらゆる種類のコンテンツを本体内に追加できます。[Input](../inputs/input.md)、チャート、さらには他の展開パネルを描画できます!

`ExpansionPanel` を使用すると、公開された *title*、*subTitle*、および *indicator* スロット全体でヘッダーを簡単にカスタマイズできます。

展開インジケーターの位置の構成は、展開パネルの `indicatorAlignment` プロパティを使用して行うことができます。可能なオプションは、**start**、**end**、または **none** です。

次のコードサンプルは、コンポーネントのボタンが右側に移動するように構成する方法を示しています。

`sample="/layouts/expansion-panel/component-customization", height="460", alt="{Platform} 展開パネルのカスタマイズ"`



<div class="divider--half"></div>

## キーボード ナビゲーション

{ProductName} 展開パネルのキーボード ナビゲーションは、W3C アクセシビリティ標準に準拠しており、使いやすくなっています。

**キーの組み合わせ**

 - <kbd>Alt + ↓</kbd> - フォーカスされたパネルを展開します。
 - <kbd>Alt + ↑</kbd> - フォーカスされたパネルを縮小します。
 - <kbd>Space</kbd> / <kbd>Enter</kbd> - フォーカスされたパネルの展開状態を切り替えます。


## スタイル設定

{ProductName} 展開パネル コンポーネントは、いくつかの CSS パーツ (`header`、`indicator`、`title`、`subtitle` および `content`) を公開して、スタイルを完全に制御できるようにします。

`sample="/layouts/expansion-panel/styling", height="480", alt="{Platform} 展開パネルのスタイル設定"`

<div class="divider"></div>


## API リファレンス

 - `ExpansionPanel`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})