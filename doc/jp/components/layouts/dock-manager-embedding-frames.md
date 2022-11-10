---
title: {Platform} ドック マネージャー | フレームの埋め込み | インフラジスティックス
_description: インフラジスティックスの {Platform} ドック マネージャーを使用してペインによってインタラクティブなコンテンツを埋め込みます。{ProductName} ドック マネージャー チュートリアルを是非お試しください!
_keywords: dock manager, embed frames, {ProductName}, Infragistics, ドック マネージャー, フレームの埋め込み, インフラジスティックス
_language: ja
mentionedTypes: ['DockManager']
---
# {Platform} ドック マネージャーでのフレームの埋め込み

Dock Manager コンポーネントは、ペインを使用してアプリケーションにインタラクティブなコンテンツを埋め込むためのレイアウトを提供します。

## {Platform} ドック マネージャーでのフレームの埋め込み例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-embedding-frames"
           alt="{Platform} ドック マネージャーでのフレームの埋め込み例"
           github-src="layouts/dock-manager/embedding-frames">
</code-view>

<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

<!--
## Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

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

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
``` -->

## API メンバー

 - [DockManager]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html)