---
title: $Platform$ ツリー コンポーネント | インフラジスティックス
_description: インフラジスティックスの $Platform$ ツリー コンポーネントは、ツリービュー構造で階層データを表示し、ノードを簡単にカスタマイズし、オンデマンドでデータを読み込むのに役立ちます。$ProductName$ がデータの表示を改善するのにどのように役立つかをご覧ください。
_keywords: $Platform$ ツリー、項目ツリー、概要、$ProductName$、インフラジスティックス
mentionedTypes: ['Tree', 'TreeItem', 'Icon', 'CircularProgress']
_language: ja
---

# $Platform$ Tree (ツリー) の概要

$ProductName$ ツリー要素を使用すると、ユーザーはツリービュー構造で階層データを表現し、親子関係を維持したり、対応するデータ モデルなしで静的ツリービュー構造を定義したりできます。その主な目的は、エンドユーザーが階層データ構造内を視覚化してナビゲートできるようにすることです。`Tree` コンポーネントは、ロードオンデマンド機能、項目のアクティブ化、組み込みのチェックボックス、組み込みのキーボード ナビゲーションなどによる項目の複数のカスケード選択も提供します。


## $Platform$ ツリーの例

この基本的な $ProductName$ ツリーの例では、項目階層を指定することにより、ツリーとその項目を定義する方法を確認できます。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/tree-basic-example"
           alt="$Platform$ ツリーの例"
           github-src="grids/tree/basic-example">
</code-view>

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- Blazor -->
You will also need to link an additional CSS file to apply the styling to the `Tree` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

`Tree` を使用する前に、次のように登録する必要があります:

```ts
import {defineComponents, IgcTreeComponent, IgcTreeItemComponent, IgcIconComponent} from 'igniteui-webcomponents';

defineComponents(IgcTreeComponent, IgcTreeItemComponent, IgcIconComponent);
```

```razor
IgbTreeModule.Register(IgniteUIBlazor);
IgbTreeItemModule.Register(IgniteUIBlazor);
```

`Tree` の使用を開始する最も簡単な方法は次のとおりです:

### ツリーの宣言
`TreeItem` は、`Tree` に属するすべての項の表現です。項目は、`disabled`、`active`、`selected`、および `expanded` プロパティを提供します。これにより、要件に応じて項目の状態を構成できます。 
`value` プロパティを使用して、項目が表すデータ エントリへの参照を追加できます。

項目は、次のいずれかのアプローチを使用して宣言できます:

- 項目階層を指定し、データ セットを反復処理することにより、ツリーとその項目を宣言します。

```html
<igc-tree>
    ${data.map((x) => html`
        <igc-tree-item .value=${x} .expanded=${x.expanded} .label=${x.label}>
              ${x.children.map((y) => html`
                  <igc-tree-item .value=${y} .expanded=${y.expanded}>
                      <span slot="label">${y.label}</slot>
                  </igc-tree-item>
              `
        </igc-tree-item>
    `
</igc-tree>
```

```razor
<IgbTree>
    @foreach (var student in this.Students)
    {
        <IgbTreeItem Value="@item.Id" Label="@item.Name">
        </IgbTreeItem>
    }
</IgbTree>
```

項目をデータ モデルにバインドして、展開された状態と選択された状態が基になるデータにも反映されるようにすることができます。

- 静的な非バインド項目を作成してツリーを宣言します。

ツリーを描画するために、必ずしもデータ セットは必要ありません。公開された `label` プロパティを使用して、基になるデータ モデルなしで個々の項目を作成したり、`TreeItem` ラベルのカスタム スロット コンテンツを提供したりできます。

```html
<igc-tree>
    <igc-tree-item>
        <div slot="label">
            I am a parent item 1
	        <img src="hard_coded_src.webb" alt="Alt Text">
        </div>
	    <igc-tree-item label="I am a child item 1">    
	    </igc-tree-item>
    </igc-tree-item>
	
    <igc-tree-item>
        <div slot="label">
            I am a parent item 2
	        <img src="hard_coded_src.webb" alt="Alt Text">
        </div>
	    <igc-tree-item label="I am a child item 1">
	    </igc-tree-item>
    </igc-tree-item>
</igc-tree>
```

```razor
<IgbTree>
    <IgbTreeItem Label="North America">
        <IgbTreeItem Label="United States"></IgbTreeItem>
        <IgbTreeItem Label="Canada"></IgbTreeItem>
        <IgbTreeItem Label="Mexico"></IgbTreeItem>
    </IgbTreeItem>
    <IgbTreeItem Label="South America">
        <IgbTreeItem Label="Brazil"></IgbTreeItem>
        <IgbTreeItem Label="Uruguay"></IgbTreeItem>
    </IgbTreeItem>
    <IgbTreeItem Label="Europe">
        <IgbTreeItem Label="United Kingdom"></IgbTreeItem>
        <IgbTreeItem Label="Germany"></IgbTreeItem>
        <IgbTreeItem Label="Bulgaria"></IgbTreeItem>
    </IgbTreeItem>
</IgbTree>
```

> [!NOTE]
> 提供されている `indentation`、`indicator`、および `label` スロットを使用して、`TreeItem` のインデント、拡張、およびラベル領域ごとにカスタム スロット コンテンツを提供できます。

### 項目のインタラクション
`Tree` は、項目のインタラクションのために次の API メソッドを提供します:
- `expand` - すべての項目を展開します。項目配列が渡されると、指定された項目のみが展開されます。
- `collapse` - すべての項目を縮小します。項目配列が渡されると、指定された項目のみが縮小されます。
- `select` - すべての項目を選択します。項目配列が渡された場合、指定された項目のみを選択します。`Selection` イベントを発行しません。
- `deselect` - すべての項目の選択を解除します。項目配列が渡された場合、指定された項目のみの選択を解除します。`Selection` イベントを発行しません。

## $Platform$ ツリーの選択

$ProductName$ ツリーで項目の選択を設定するには、その `selection` プロパティを設定する必要があります。このプロパティは、次の 3 つのモードを受け入れます: **None**、**Multiple** および **Cascade**。以下で、それぞれについて詳しく説明します。

### None
`Tree` では、デフォルトで項目の選択が無効になっています。ユーザーは UI インタラクションを介して項目を選択または選択解除することはできませんが、これらのアクションは提供された API メソッドを介して実行できます。
### Multiple
`Tree` で複数の項目を選択できるようにするには、`selection` プロパティを **multiple** に設定するだけです。これにより、すべての項目のチェックボックスが表示されます。各項目には、選択されているまたは選択されていないの 2 つの状態があります。このモードは複数選択をサポートします。
```html
<igc-tree selection="multiple">
</igc-tree>
```
```razor
<IgbTree Selection=TreeSelection.Multiple>
</IgbTree>
```
### Cascade
`Tree` カスケード項目の選択を有効にするには、selection プロパティを **cascade** に設定するだけです。これにより、すべての項目のチェックボックスが表示されます。 

```html
<igc-tree selection="Cascade">
</igc-tree>
```
```razor
<IgbTree Selection=TreeSelection.Multiple>
</IgbTree>
```
このモードでは、親の選択状態はその子の選択状態に完全に依存します。親に選択された子と選択解除された子がある場合、そのチェックボックスは不確定な状態になります。

## キーボード ナビゲーション
`Tree` のキーボード ナビゲーションは、ユーザーにさまざまなキーボード インタラクションを提供します。この機能はデフォルトで有効になっており、ユーザーは項目間を移動できます。

`Tree` ナビゲーションは、W3C アクセシビリティ標準に準拠しており、使いやすいです。

**キーの組み合わせ**

 - <kbd>下矢印</kbd> - 次に表示されている項目に移動します。項目をアクティブとしてマークします。最後の項目の場合は何もしません。
 - <kbd>Ctrl + 下矢印</kbd> - 次に表示されている項目に移動します。最後の項目の場合は何もしません。
 - <kbd>上矢印</kbd> - 前に表示されていた項目に移動します。項目をアクティブとしてマークします。最初の項目の場合は何もしません。
 - <kbd>Ctrl + 上矢印</kbd> - 前に表示されていた項目に移動します。最初の項目の場合は何もしません。
 - <kbd>左矢印</kbd> - 展開された親項目の場合、項目を縮小します。項目が縮小されているか、子がない場合は、その親項目に移動します。親項目がない場合は何もしません。
 - <kbd>右矢印</kbd> - 展開された親項目の場合、項目の最初の子に移動します。縮小された親項目の場合は、それを展開します。項目に子がない場合は何もしません。
 - <kbd>Home</kbd> - 最初の項目に移動します。
 - <kbd>End</kbd> - 最後に表示された項目に移動します。
 - <kbd>Tab</kbd> - ツリーの外側にあるページ上の次のフォーカス可能な要素に移動します。
 - <kbd>Shift +Tab</kbd> - ツリーの外側で、ページ上の前のフォーカス可能な要素に移動します。
 - <kbd>Space</kbd> - 現在の項目の選択を切り替えます。ノードをアクティブとしてマークします。
 - <kbd>Shift + Space</kbd> - 選択が有効になっている場合、Shift キーを押しながら、アクティブな項目と Space を押した項目の間ですべての項目の選択を切り替えます。
 - <kbd>Enter</kbd> - フォーカスされた項目をアクティブにします。項目にリンクがある場合は、リンクを開きます。
 - <kbd>*</kbd> - 項目とすべての兄弟項目を同じレベルで展開します。

選択が有効になっている場合、エンドユーザーによる項目の選択は、描画されたチェックボックスを介してのみ許可されます。どちらの選択タイプでも複数選択できるため、次のマウスとキーボードの操作を利用できます。

 - <kbd>>クリック</kbd> - 項目のチェックボックスで実行すると、選択が有効になっている場合に項目の選択を切り替えます。それ以外の場合は、項目にフォーカスします。
 - <kbd>Shift + クリック</kbd> - 項目チェックボックスで実行すると、選択が有効になっている場合、Shift キーを押しながらアクティブな項目とクリックした項目の間ですべての項目の選択を切り替えます。

<!-- WebComponents -->
## $Platform$ Tree ロードオンデマンド

$ProductName$ Tree は、サーバーから最小限のデータのみ取得して描画されるため、ユーザーにすばやくデータを表示できます。この動的データ読み込みアプローチでは、ユーザーが項目を展開した後にのみ、その特定の親ノードの子が取得されます。このメカニズムは、ロードオンデマンドであらゆるリモート データとの設定が簡単にできます。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/tree-load-on-demand"
           alt="$Platform$ Tree ロードオンデマンドの例"
           github-src="grids/tree/load-on-demand">
</code-view>

ユーザーが展開アイコンをクリックすると、ロード アイコンに変わります。Loading プロパティが false に解決されると、読み込みインジケーターが消え、子が読み込まれます。

`loadingIndicator` スロットを使用して、読み込み領域にカスタム スロット コンテンツを提供できます。そのようなスロットが定義されていない場合、`CircularProgress` が使用されます。

<!-- end: WebComponents -->
## スタイル設定

以下にリストされている公開された CSS パーツのいくつかを使用して、`TreeItem` の外観を変更できます:

部分名 | 説明
---------|------------
`wrapper` | ツリー項目のラッパー。
`selected`  | 選択された状態を示します。`wrapper` に適用されます。
`focused` | フォーカスされた状態を示します。`wrapper` に適用されます。
`active` | アクティブ状態を示します。`wrapper` に適用されます。
`indicator` | ツリー項目の展開インジケーター。
`label` | ツリー項目のコンテンツ。
`text` | ツリー項目の表示テキスト。
`select` | 選択が有効になっている場合のツリー項目のチェックボックス。

これらの CSS パーツを使用して、次のように `Tree` コンポーネントの外観をカスタマイズできます:

```css
igc-tree-item::part(active) {
    background: #ecaa53;
}

igc-tree-item::part(selected) {
    background: #ffe6cc;
}

igc-tree-item::part(active selected) {
    background: #ff8c1a;
    color: white;
}
```

<!-- WebComponents -->

## API リファレンス

* `Tree`
* `TreeItem`
* `CircularProgress`
* `Icon`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## その他のリソース

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

<!-- Blazor -->
* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
<!-- end: Blazor>

<!-- React -->
* [Ignite UI for React **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
<!-- end: React>
