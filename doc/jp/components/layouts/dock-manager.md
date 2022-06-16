---
title: $Platform$ ドック マネージャー | レイアウト コントロール | インフラジスティックス
_description: インフラジスティックスの $Platform$ ドック マネージャー コンポーネントを使用して、ペインでレイアウトを管理し、ペインのピン固定、サイズ変更、移動、非表示をカスタマイズします。$ProductName$ ドック マネージャー チュートリアルを是非お試しください!
_keywords: dock manager, layout, $ProductName$, Infragistics, ドック マネージャー, レイアウト, インフラジスティックス
_language: ja
mentionedTypes: ['DockManager']
---
# $Platform$ ドック マネージャーの概要

Infragistics $Platform$ Dock Manager は、ペインでアプリケーションのレイアウトを管理する方法を提供します。エンド ユーザーはペインをピン固定、サイズ変更、移動、最大化、非表示にすることでカスタマイズできます。

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

次に **defineCustomElements()** 関数をインポートして呼び出します。

```ts
import { defineCustomElements } from 'igniteui-dockmanager/loader';

defineCustomElements();
```
<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

<!-- WebComponents -->

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

ペインのコンテンツをロードするために、ドック マネージャーは[スロット](https://developer.mozilla.org/ja-JP/docs/Web/HTML/Element/slot)を使用します。コンテンツ要素の [`slot`](https://developer.mozilla.org/ja-JP/docs/Web/HTML/Global_attributes/slot) 属性はレイアウト構成のコンテンツ ペインの [`contentId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#contentid) と一致する必要があります。エンドユーザーがペインのサイズを変更する場合は、予測可能な応答のために、コンテンツ要素の幅と高さを **100%** に設定することを強くお勧めします。

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

ペインのピン固定が解除されると、ドック マネージャーのいずれかの端にタブ ヘッダーとして表示されます。エンドユーザーに選択されると、そのコンテンツはドッキングされたピン固定ペインの上に表示されます。コンテンツ ペインのピン固定を解除するには、[`isPinned`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) プロパティを **false** に設定します。

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

コンテンツ ペインを定義するときに、[`documentOnly`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#documentonly) プロパティを true に設定して、ペインをドキュメント ホストにのみドッキングできるようにすることができます。

コンテンツ ペインとそのコンテンツに対するユーザーの操作を制限するには、[`disabled`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#disabled) プロパティを true に設定します。これにより、単一のフローティング ペインでない限り、すべてのユーザーがペインを操作できなくなります。後者は移動、最大化、または閉じることができるため (最大化および閉じるためのペインの設定に従って)、ユーザーはその下の要素を見ることができますが、そのコンテンツを操作することはできません。

デフォルトでは、ペインを閉じると、[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) オブジェクトから削除されます。ただし、場合によってはペインを一時的に非表示にして後で表示することもできます。[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) オブジェクトを変更せずにそれを行うには、コンテンツペインの [`hidden`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#hidden) プロパティを使用できます。プロパティを **true** に設定すると UI から非表示になりますが、[`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) オブジェクトに残ります。デフォルトの閉じる動作をオーバーライドするには、このように [`paneClose`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#paneclose) イベントにサブスクライブできます。


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

デフォルトでは、分割ペインが空の場合は表示されません。ただし、その動作を変更したい場合は、[`allowEmpty`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#allowempty) プロパティを true に設定すると、内部にペインがない場合でも、分割ペインが UI に表示されます。

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

タブがないときにタブ グループ ペインを UI に表示する場合は、[`allowEmpty`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html#allowempty) プロパティを true に設定します。

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

[`floatingResizable`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingresizable) と [`allowFloatingPanesResize`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#allowfloatingpanesresize) を使用して、フローティング ペインのサイズ変更を許可するかどうかを設定できます。`allowFloatingPanesResize` は **IgcDockManagerComponent** プロパティであるため、値が **false** に設定されている場合、フローティング ペインのサイズを変更することはできません。`floatingResizable` プロパティは、`floatPanes` 配列の各分割ペインに個別に適用できます。プロパティ値が設定されていない場合、デフォルトで `allowFloatingPanesResize` プロパティの値になります。`floatingResizable` プロパティが特定のペインに設定されている場合、その値は `allowFloatingPanesResize` プロパティ値に優先されます。

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

### 実行時にペインを追加する

コンテンツとペインは、実行時に [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) に追加できます。以下の例では、コンテンツ、ドキュメント、およびフローティング ペインを追加する方法を確認できます。


<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-add-content-runtime"
           alt="$Platform$ ドック マネージャー実行時にペインを追加するの例"
           github-src="layouts/dock-manager/add-content-runtime">
</code-view>

<div class="divider--half"></div>

### イベント

ドック マネージャー コンポーネントは、ペインを閉じる、ピン固定、サイズ変更、ドラッグするなど、特定のエンドユーザーの操作が実行されるとイベントを発生させます。ドック マネージャーのイベントの完全なリストは、[こちら](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html)です。

<!-- end: WebComponents -->

<div class="divider--half"></div>

 <!-- WebComponents, React, Angular -->
 [`paneClose`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#paneclose) イベントのイベント リスナーを追加する方法は以下の通りです。

```ts
this.dockManager.addEventListener('paneClose', ev => console.log(ev.detail));
```
<!-- end: WebComponents, React, Angular -->

<div class="divider--half"></div>

<!-- WebComponents -->
<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-hiding-panes"
           alt="$Platform$ ドック マネージャー ペインを閉じる例"
           github-src="layouts/dock-manager/hiding-panes">
</code-view>
<!-- end: WebComponents -->

<div class="divider--half"></div>

## カスタマイズ

Dock Manager コンポーネントは、スロットとパーツを使用してすべてのボタンをカスタマイズするオプションを提供します。ボタンを変更するには、Dock Manager 内で独自の要素を定義し、slot 属性を対応する識別子に設定します。

これらのスロットとパーツを使用して、カスタマイズされた Dock Manager レイアウトを作成してみましょう。最初に、`closeButton`、`maximizeButton`、`minimizeButton`、`pinButton`、および `unpinButton` スロットを使用して独自のアイコンを提供します。

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" class="dockManagerContent">Content 1</div>
    <div slot="content2" class="dockManagerContent">Content 2</div>
    <div slot="content3" class="dockManagerContent">Content 3</div>
    <!-- ... -->

    <button slot="closeButton">x</button>

    <button slot="maximizeButton">
        <img src="https://www.svgrepo.com/show/419558/arrow-top-chevron-chevron-top.svg" alt="" />
    </button>

    <button slot="minimizeButton">
        <img src="https://www.svgrepo.com/show/419557/bottom-chevron-chevron-down.svg" alt="" />
    </button>

    <button slot="pinButton">
        <img src="https://www.svgrepo.com/show/154123/pin.svg" alt="" />
    </button>

    <button slot="unpinButton">
        <img src="https://www.svgrepo.com/show/154123/pin.svg" alt="" />
    </button>
</igc-dockmanager>
```

次に、スタイルシートで公開されたパーツを使用します。このようにして、コンポーネントのスタイル設定を完全に制御できます。

```css
igc-dockmanager::part(unpinned-tab-area) {
    background: #bee9ec;
}
  
igc-dockmanager::part(unpinned-tab-area--left) {
    border-right: 1px dashed #004d7a;
}
  
igc-dockmanager::part(unpinned-tab-area--bottom) {
    border-top: 1px dashed #004d7a;
}

igc-dockmanager::part(tab-header-close-button), 
igc-dockmanager::part(pane-header-close-button) {
    background-color: #e73c7e;
}

igc-dockmanager::part(pane-header-pin-button),
igc-dockmanager::part(pane-header-unpin-button) {
  background: rgb(218, 218, 218);
  border: none;
  width: 24px;
  height: 24px;
  color: #fff;
}

igc-dockmanager::part(tabs-maximize-button),
igc-dockmanager::part(tabs-minimize-button),
igc-dockmanager::part(pane-header-minimize-button),
igc-dockmanager::part(pane-header-maximize-button) {
  width: 24px;
  height: 24px;
  border: none;
  transition: opacity 250ms ease-in-out;
  opacity: 0.3;
  margin-right: 15px;
  margin-top: -5px;
  margin-left: 0px;
}
```

すべて適切に設定できると、カスタマイズされたアイコンとタブ領域を持つ DockManager が表示されます。以下は結果です。

<!-- WebComponents -->
<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-customize-buttons"
           alt="$Platform$ Dock Manager カスタマイズ ボタンの例"
           github-src="layouts/dock-manager/customize-buttons">
</code-view>
<!-- end: WebComponents -->

以下は、すべてのボタンとスプリッター ハンドルのスロット名のリストです。

スロット名 | 説明
----------|------------
`closeButton` | 閉じるボタン。
`moreTabsButton` | その他のタブボタン。
`moreOptionsButton` | その他のオプションボタン。
`maximizeButton` | 最大化ボタン。
`minimizeButton` | 最小化ボタン。
`pinButton` | ピン固定ボタン。
`unpinButton` | ピン固定解除ボタン。
`splitterHandle` | スプリッターのハンドル。

各スロットの対応するパーツは、このページの [CSS パーツ](dock-manager.md#css-parts) セクションにあります。

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

<!-- WebComponents -->

## スタイル設定

ドック マネージャーは、シャドウ DOM を使用してスタイルと動作をカプセル化します。その結果、通常の CSS セレクターでその内部要素を単純にターゲットにすることはできません。そのため **:: part** CSS セレクターでターゲットにできるコンポーネント **parts** を公開しています。

```css
igc-dockmanager::part(content-pane) {
  border-radius: 10px;
}
```

次の例では、公開した CSS パーツのいくつかを使用してドック マネージャーをカスタマイズする機能を紹介します。

<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-styling"
           alt="$Platform$ ドック マネージャー スタイル設定の例"
           github-src="layouts/dock-manager/styling">
</code-view>

<div class="divider--half"></div>

### CSS パーツ

パーツ名 | 説明
---------|------------
`content-pane` | コンテンツ ペイン コンポーネント。
`pane-header`  | コンテンツ ペインのヘッダー コンポーネント。
`pane-header-content` | コンテンツ ペイン ヘッダーのコンテンツ領域。
`pane-header-actions` | コンテンツ ペイン ヘッダーのアクション領域。
`active` | アクティブ状態を示します。`pane-header`、`pane-header-content`、`pane-header-actions`、`tab-header` に適用されます。
`floating`  | フローティング ペインの配置を示します。`pane-header`、`pane-header-content`、`pane-header-actions` に適用されます。
`window` | フローティング ウィンドウの配置を示します。`pane-header`、`pane-header-content`、`pane-header-actions` に適用されます。
`split-pane` | スプリット ペイン コンポーネント。
`splitter` | サイズ変更スプリッター コンポーネント。
`splitter-base` | スプリッター コンポーネントの基本要素。
`splitter-ghost`| スプリッター コンポーネントのゴースト要素。
`unpinned-pane-header` | 固定されていないペイン ヘッダー コンポーネント。
`tab-header` | タブ ヘッダー コンポーネント。
`selected` | 選択状態を示します。`tab-header` に適用されます。
`tab-strip-area` | タブ ヘッダーを含むタブ ストリップ領域。
`tab-strip-actions` | タブ アクションを含むタブ ストリップ領域。
`top` | タブの上位置を示します。`tab-header`、`tab-strip-area`、`tab-strip-actions` に適用されます。
`bottom` | タブの下位置を示します。`tab-header`、`tab-strip-area`、`tab-strip-actions` に適用されます。
`context-menu` | コンテキスト メニュー コンポーネント。
`context-menu-item` | コンテキスト メニュー コンポーネントの項目。
`docking-preview` | ドッキング プレビュー地域。
`docking-indicator` | 非ルート ドッキング インジケーター。
`root-docking-indicator` | ルート ドッキング インジケーター。
`pane-navigator` | ペイン ナビゲーター コンポーネント。
`pane-navigator-header` | ペイン ナビゲーターのヘッダー領域。
`pane-navigator-body` | ペイン ナビゲーターの本体領域。
`pane-navigator-items-group` | ペイン ナビゲーター コンポーネントの項目グループ。
`pane-navigator-items-group-title` | ペイン ナビゲーターの項目グループのタイトル要素。
`pane-navigator-item` | ペイン ナビゲーターの項目。
`pane-header-close-button` | ペイン ヘッダーの閉じるボタン。
`pane-header-maximize-button` | ペイン ヘッダーの最大化ボタン。
`pane-header-minimize-button` | ペイン ヘッダーの最小化ボタン。
`pane-header-pin-button` | ペイン ヘッダーのピン固定ボタン。
`pane-header-unpin-button` | ペイン ヘッダーのピン固定解除ボタン。
`tab-header-more-options-button` | タブ ヘッダーのその他のオプションボタン。
`tab-header-close-button` | タブ ヘッダーの閉じるボタン。
`tabs-maximize-button` | タブの最大化ボタン。
`tabs-minimize-button` | タブの最小化ボタン。
`tabs-more-button` | その他のタブ ボタン。
`context-menu-unpin-button` | コンテキスト メニューのピン固定解除ボタン。
`context-menu-close-button` | コンテキスト メニューの閉じるボタン。
`splitter-handle` | スプリッターのハンドル。

## テーマ

ドック マネージャーには、light (明るい) テーマと dark (暗い) テーマがあります。Light テーマがデフォルトです。Dark に変更するには、**igc.themes.css** ファイルを css にインポートし、**dark-theme** クラスをドック マネージャーまたはその親に追加します。

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

<!-- end: WebComponents -->
