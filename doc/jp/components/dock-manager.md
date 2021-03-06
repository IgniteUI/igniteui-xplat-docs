---
title: $Platform$ ドック マネージャー | レイアウト コントロール | インフラジスティックス
_description: インフラジスティックスの $Platform$ ドック マネージャー コンポーネントを使用して、ペインでレイアウトを管理し、ペインのピン固定、サイズ変更、移動、非表示をカスタマイズします。$ProductName$ ドック マネージャー チュートリアルを是非お試しください!
_keywords: dock manager, layout, $ProductName$, Infragistics, ドック マネージャー, レイアウト, インフラジスティックス
_language: ja
---
# $Platform$ ドック マネージャーの概要

Infragistics $Platform$ Dock Manager コンポーネントは、ペインでアプリケーションのレイアウトを管理する方法を提供する WebComponent です。エンド ユーザーはペインをピン固定、サイズ変更、移動、最大化、非表示にすることでカスタマイズできます。

<!-- Blazor -->
> [!NOTE]
> <b>追加予定</b>

Blazor ドック マネージャーは現在開発中で、間もなく完成します。Blazor ドック マネージャー コンポーネントの完成後、このトピックとサンプルが更新される予定です。この間にドック マネージャーコ ンポーネントが必要な場合、Blazor アプリケーションで Ignite UI for Web Components ドック マネージャーを使用できます。

以下のブログ (英語) に記載されている手順に従ってください。

 <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/using-the-igniteui-for-web-components-dock-manager-in-blazor">"Using the Ignite UI for Web Components Dock Manager in Blazor"  </a>
<!-- end: Blazor -->

## $Platform$ ドック マネージャーの例

この例は、$Platform$ ドック マネージャのほとんどの機能とドッキング オプションを示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-overview"
           alt="$Platform$ ドック マネージャーの例"
           github-src="layouts/dock-manager/overview">
</code-view>

<div class="divider--half"></div>


<!-- Angular, React, WebComponents -->
ドック マネージャー パッケージをインストールするには、以下のコマンドを実行します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageDockManager}
</pre>

次に `defineCustomElements()` 関数をインポートして呼び出します。

```ts
import { defineCustomElements } from 'igniteui-dockmanager/loader';

defineCustomElements();
```
<div class="divider--half"></div>

<!-- end: Angular, React, WebComponents -->

## 使用方法

ドック マネージャーをインポートした後、ページに追加できます。

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

> [!NOTE]
> ドック マネージャー コンポーネントは ShadowDOM とスロットを使用するため、Internet Explorer 11 および Edge 18 以前 (Chromium 以外のバージョン) などの古いブラウザーではサポートされません。

ドック マネージャーにはペインのレイアウトを説明する [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) プロパティがあります。レイアウトの定義するには、[`rootPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#rootpane) プロパティを設定し、子ペインを追加します。以下は、単一のコンテンツ ペインでレイアウトを定義する方法です。

```ts
import { IgcDockManagerPaneType, IgcSplitPaneOrientation, IgcDockManagerComponent } from 'igniteui-dockmanager';

// ...

this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
this.dockManager.layout = {
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content1',
                header: 'Pane 1'
            }
        ]
    }
};
```

ペインのコンテンツをロードするために、ドック マネージャーは[スロット](https://developer.mozilla.org/ja-JP/docs/Web/HTML/Element/slot)を使用します。コンテンツ要素の [`slot`](https://developer.mozilla.org/ja-JP/docs/Web/HTML/Global_attributes/slot) 属性はレイアウト構成のコンテンツ ペインの [`contentId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#contentid) と一致する必要があります。エンドユーザーがペインのサイズを変更する場合は、予測可能な応答のために、コンテンツ要素の幅と高さを `100%` に設定することを強くお勧めします。

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
```

ドック マネージャーは複数の[ペイン タイプ](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/enums/igcdockmanagerpanetype.html)を定義します。
* [Content pane](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
* [Split pane](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html)
* [Tab group pane](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html)
* [Document host](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html)

各タイプのペインには [`size`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#size) プロパティがあります。親の方向に応じて、サイズはペインの幅または高さに影響します。ペインのサイズはその兄弟ペインのサイズに相対し、デフォルトは 100 です。サイズが 200 と 100 に設定された 2 つの兄弟ペインがある場合、最初のペインは 2 番目のペインのサイズの 2 倍になります。親の絶対サイズが 900px の場合、それぞれ 600px と 300px にサイズ設定されます。

エンドユーザーは、ランタイムにレイアウトをカスタマイズするために以下のアクションを実行できます。
* ペインをピン設定 / ピン解除します。
* ペインをサイズ変更します。
* ペインを閉じます。
* ペインをフロートさせるためにドラッグします。
* フローティング ペインを移動します。
* フローティング ペインをドックします。
* ペインを最大化します。

これらはすべてドック マネージャーの [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) プロパティに反映されます。

### コンテンツ ペイン

[Content pane](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html) ヘッダーとコンテンツを含むペインを表します。スプリットされたペインまたはタブ グループ ペイン内でホストできます。以下はコンテンツ ペインの定義方法です。

```ts
const contentPane: IgcContentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1'
}
```

[`header`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#header) プロパティはコンテンツ ペインのテキスト ヘッダーを提供するために使用されます。このテキストは複数の場所で描画されます。トップコンテンツペインヘッダー、ペインがタブグループにある場合はタブヘッダー、ペインが固定解除されている場合は固定解除ヘッダーです。[`headerId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#headerid)、[`tabHeaderId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#tabheaderid) および [`unpinnedHeaderId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedheaderid) プロパティを使用してそれぞれこれらの場所にカスタム スロット コンテンツを提供できます。これらのプロパティのいずれかが設定されていない場合、[`header`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#header) テキストが使用されます。以下は、タブ ヘッダー スロット コンテンツを提供する方法です。

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
    <span slot="tabHeader1">Pane 1 Tab</span>
</igc-dockmanager>
```

```ts
const contentPane: IgcContentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    tabHeaderId: 'tabHeader1'
}
```

ペインのピン固定が解除されると、ドック マネージャーのいずれかの端にタブ ヘッダーとして表示されます。エンドユーザーに選択されると、そのコンテンツはドッキングされたピン固定ペインの上に表示されます。コンテンツ ペインのピン固定を解除するには、[`isPinned`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) プロパティを `false` に設定します。

```ts
const contentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    isPinned: false
}
```

[`isPinned`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) プロパティはドキュメント ホストの外部にドッキングされているコンテンツ ペインのみに影響します。また、フローティング ペインでホストされているコンテンツ ペインのピン固定を解除することはできません。

デフォルトでは、コンテンツ ペインのピン固定解除先は、ドキュメント ホストに対するペインの相対的な位置に基づいて自動的に計算されます。複数のドキュメント ホストが定義されている場合、ピン固定されていないコンテンツ ペインの親階層で最も近いホストが使用されます。ドキュメント ホストが定義されていない場合、デフォルトの場所 [`left`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/enums/igcunpinnedlocation.html#left) が使用されます。[`unpinnedLocation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedlocation) プロパティを使用してピン固定が解除されたペインの行き先を設定することも可能です。

[`allowClose`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowclose)、[`allowPinning`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowpinning)、[`allowDocking`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowdocking) および [`allowFloating`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowfloating) プロパティを使用して、コンテンツ ペインで許可されるエンドユーザー操作を設定できます。

デフォルトでは、ペインを閉じると、[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) オブジェクトから削除されます。ただし、場合によってはペインを一時的に非表示にして後で表示することもできます。[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) オブジェクトを変更せずにそれを行うには、コンテンツペインの [`hidden`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#hidden) プロパティを使用できます。プロパティを `true` に設定すると UI から非表示になりますが、[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) オブジェクトに残ります。デフォルトの閉じる動作をオーバーライドするには、このように [`paneClose`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#paneclose) イベントにサブスクライブできます。


```ts
this.dockManager.addEventListener('paneClose', ev => {
    for (const pane of ev.detail.panes) {
        pane.hidden = true;
    }
    ev.preventDefault();
});
```

### 分割ペイン

[Split pane](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html) は、[`orientation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#orientation) プロパティに基づいてすべての子[`ペイン`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#panes) を水平または垂直に積み重ねるコンテナー ペインです。以下は、2 つの子コンテンツ ペインを持つ水平の分割ペインの定義方法です。

```ts
const splitPane: IgcSplitPane = {
    type: IgcDockManagerPaneType.splitPane,
    orientation: IgcSplitPaneOrientation.horizontal,
    panes: [
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1'
        },
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2'
        }
    ]
}
```

分割ペインは、他のスプリットされたペインを含むすべてのペイン タイプの子ペインを含むことができます。

### タブ グループ ペイン

[Tab group pane](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html) は、その子コンテンツ [`ペイン`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html#panes)をタブ コンポーネントのタブとして表示します。以下は、2 つのタブそれぞれにコンテンツ ペインを持つタブ グループ ペインの定義方法です。

```ts
const tabGroupPane: IgcTabGroupPane = {
    type: IgcDockManagerPaneType.tabGroupPane,
    panes: [
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1'
        },
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2'
        }
    ]
}
```

すべてのタブ ヘッダーを表示する十分なスペースがない場合、タブ グループは非表示タブを含む **[その他のタブ]** メニューを表示します。そのメニューのタブ項目をクリックすると、タブが選択され、最初の位置に移動します。

タブは、それらが配置されているタブ グループから切り離さずに並べ替えることもできます。タブをクリックして、希望の位置まで左または右にドラッグできます。選択したタブをタブ領域の外にドラッグすると、フローティング ペインにデタッチされます。

### ドキュメント ホスト

[Document host](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html) コード編集やデザイン ビュー用の Visual Studio のタブと同様のドキュメント タブ領域です。以下は、2 つのドキュメント タブを持つドキュメント ホストを定義する方法です。

```ts
const docHost: IgcDocumentHost = {
    type: IgcDockManagerPaneType.documentHost,
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.tabGroupPane,
                panes: [
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content1',
                        header: 'Grid'
                    },
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content4',
                        header: 'List'
                    }
                ]
            }
        ]
    }
}
```

### フローティング ペイン

フローティング ペインは、フローティング ウィンドウで他のペインの上に描画される分割ペインです。フローティング ペインの定義は、[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) の [`floatingPanes`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingpanes) プロパティに保存されます。以下は、単一のコンテンツ ペインを含むフローティング ペインを追加する方法です。

```ts
const layout: IgcDockManagerLayout = {
    rootPane: {
        // ...
    },
    floatingPanes: [
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingLocation: { x: 80, y: 80 },
            floatingWidth: 200,
            floatingHeight: 150,
            floatingResizable: true,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content1',
                    header: 'Floating Pane 1'
                }
            ]
        }
    ]
};
```

[`floatingLocation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatinglocation)、[`floatingWidth`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingwidth) と [`floatingHeight`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingheight) プロパティは絶対寸法をピクセル単位で表します。これらのプロパティは、[`floatingPanes`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingpanes) 配列の分割ペインにのみ適用されることに注意してください。

[`floatingResizable`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingresizable) と [`allowFloatingPanesResize`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#allowfloatingpanesresize) を使用して、フローティング ペインのサイズ変更を許可するかどうかを設定できます。`allowFloatingPanesResize` は `IgcDockManagerComponent` プロパティであるため、値が `false` に設定されている場合、フローティング ペインのサイズを変更することはできません。`floatingResizable` プロパティは、`floatPanes` 配列の各分割ペインに個別に適用できます。プロパティ値が設定されていない場合、デフォルトで `allowFloatingPanesResize` プロパティの値になります。`floatingResizable` プロパティが特定のペインに設定されている場合、その値は `allowFloatingPanesResize` プロパティ値に優先されます。

### アクティブ ペイン

ドック マネージャー コンポーネントは、フォーカスを含むコンテンツ ペインを強調表示し、[`activePane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#activepane) プロパティで公開します。プロパティを設定することによってアクティブ ペインをプログラムで変更できます。[`activePaneChanged`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#activepanechanged) イベントにサブスクライブして、[`activePane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#activepane) プロパティの変更をリッスンすることもできます。

```ts
this.dockManager.addEventListener('activePaneChanged', ev => {
    console.log(ev.detail.oldPane);
    console.log(ev.detail.newPane);
});
```

### レイアウトの保存／読み込み

レイアウトを復元または永続化するには、[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) プロパティの値を取得または設定します。以下は、文字列化された JSON としてレイアウトを保存する方法です。

```ts
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

レイアウト オブジェクトのプロパティを変更しても、ドック マネージャーの更新はトリガーされません。それが目的の場合、以下のようにレイアウト オブジェクト全体を置き換える必要があります。

```ts
const layout = this.dockManager.layout;
layout.rootPane.orientation = IgcSplitPaneOrientation.vertical;
this.dockManager.layout = { ...layout };
```

### イベント

ドック マネージャー コンポーネントは、ペインを閉じる、ピン固定、サイズ変更、ドラッグするなど、特定のエンドユーザーの操作が実行されるとイベントを発生させます。ドック マネージャーのイベントの完全なリストは、[こちら](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html)です。[`paneClose`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#paneclose) イベントのイベント リスナーを追加する方法は以下の通りです。

```ts
this.dockManager.addEventListener('paneClose', ev => console.log(ev.detail));
```
<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-hiding-panes"
           alt="$Platform$ ドック マネージャー ペインを閉じる例"
           github-src="layouts/dock-manager/hiding-panes">
</code-view>

## キーボード ナビゲーション

キーボード ナビゲーションは、**ドック マネージャー**のアクセシビリティを強化し、すべてのペインをナビゲートしたり、アクティブなペインをドッキングしてビューを複数の方向に分割したりするなど、エンドユーザーにさまざまな操作を提供します。


ショートカットは以下のとおりです。

### ドッキング

- <kbd>Cmd/Ctrl + Shift + 上矢印</kbd> グローバルの上へのドック。
- <kbd>Cmd/Ctrl + Shift + 下矢印</kbd> グローバルの下へのドック。
- <kbd>Cmd/Ctrl + Shift + 右矢印</kbd> グローバルの右へのドック。
- <kbd>Cmd/Ctrl + Shift + 左矢印</kbd> グローバルのの左へのドック。
- <kbd>Shift + 上矢印</kbd> タブ グループに複数のタブがある場合、ビューが分割され、フォーカスされたタブが上にドッキングされます。
- <kbd>Shift + 下矢印</kbd> タブ グループに複数のタブがある場合、ビューが分割され、フォーカスされたタブが下にドッキングされます。
- <kbd>Shift + 右矢印</kbd> タブ グループに複数のタブがある場合、ビューが分割され、フォーカスされたタブが右にドッキングされます。
- <kbd>Shift + 左矢印</kbd> タブ グループに複数のタブがある場合、ビューが分割され、フォーカスされたタブが左にドッキングされます。

### ナビゲーション
 - <kbd>Cmd/Ctrl + F6</kbd> / <kbd>Cmd/Ctrl + 右矢印</kbd> ドキュメント ホストの次のタブにフォーカスします。
 - <kbd>Cmd/Ctrl + Shift + F6</kbd> / <kbd>Cmd/Ctrl + 左矢印</kbd> ドキュメント ホストの前のタブにフォーカスします。
 - <kbd>Alt + F6</kbd> 次のコンテンツ ペインにフォーカスします。
 - <kbd>Alt + Shift + F6</kbd> 前のコンテンツ ペインにフォーカスします。

### ペイン ナビゲーター

次のキーボード ショートカットは、ペインやドキュメントをを反復できるナビゲーターを示しています。

 - <kbd>Cmd/Ctrl + F7</kbd> / <kbd>Cmd/Ctrl + F8</kbd>  最初のドキュメントから開始します。
 - <kbd>Alt + F7</kbd> / <kbd>Alt + F8</kbd> 最初のペインから開始します。
 - <kbd>Cmd/Ctrl + Shift + F7</kbd> / <kbd>Cmd/Ctrl + Shift + F8</kbd> 最後のドキュメントから逆方向に開始します。
 - <kbd>Alt + Shift + F7</kbd> / <kbd>Alt + Shift + F8</kbd> 最後のペインから逆方向に開始します。

### その他
 - <kbd>Alt + F3</kbd> アクティブなペインを閉じます。

サンプル [`demo`](dock-manager.md#$Platform$-ドック-マネージャーの例) で上記のすべてのアクションを練習しましょう。

## テーマ

ドック マネージャーには、light (明るい) テーマと dark (暗い) テーマがあります。Light テーマがデフォルトです。Dark に変更するには、`igc.themes.css` ファイルを css にインポートし、`dark-theme` クラスをドック マネージャーまたはその親に追加します。

```
@import '~igniteui-dockmanager/dist/collection/styles/igc.themes';
```

```html
<igc-dockmanager class="dark-theme">
```

## ローカライズ

ドック マネージャー コンポーネントは、コンテキスト メニュー、ツールチップ、および aria 属性で使用される文字列のローカライズをサポートします。デフォルトでは、ドック マネージャー はその親の [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 属性を検索してページの言語を検出します。[`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 属性が設定されていないか、ドック マネージャーがサポートしない値に設定されている場合、デフォルトの言語は [英語 (`en`)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsen) です。ドック マネージャーは、[英語 (`en`)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsen)、[日本語 (`jp`)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsjp)、[韓国語 (`ko`)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsko)、[スペイン語 (`es`)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringses) の組み込みローカライズ文字列を提供します。その他の言語のリソース文字列を提供するには、[`addResourceStrings`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#addresourcestrings) メソッドを使用します。

```ts
import { addResourceStrings } from 'igniteui-dockmanager';

const dockManagerStringsFr: IgcDockManagerResourceStrings = {
  close: 'Fermer',
  // ...
};

addResourceStrings('fr', dockManagerStringsFr);
```

ドック マネージャーは、文字列を変更できる [`resourceStrings`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#resourcestrings) プロパティを公開します。[`resourceStrings`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#resourcestrings) プロパティを設定すると、ドック マネージャーはどの [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 属性が設定されていても文字列を使用します。
