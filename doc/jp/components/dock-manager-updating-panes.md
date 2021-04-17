---
title: $Platform$ ドック マネージャー | ペインの更新 | インフラジスティックス
_description: インフラジスティックスの $Platform$ ドック マネージャー コントロールを使用して、操作に基づいて更新できるペインによってインタラクティブなコンテンツを作成します。$ProductName$ ドック マネージャー チュートリアルを是非お試しください!
_keywords: dock manager, layout, updating panes, $ProductName$, ドック マネージャー, レイアウト, ペインの更新, インフラジスティックス
_language: ja
---
# $Platform$ ドック マネージャー ペインの更新

Dock Manager コンポーネントは、エンドユーザーの操作に基づいて更新できるペインを使用して、アプリケーションでインタラクティブなコンテンツを作成するためのレイアウトを提供します。

## $Platform$ ドック マネージャー ペインの更新の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-updating-panes"
           alt="$Platform$ ドック マネージャー ペインの更新の例"
           github-src="layouts/dock-manager/updating-panes">
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
