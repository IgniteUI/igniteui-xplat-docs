---
title: {Platform} Dock Manager | Updating Panes | Infragistics
_description: Use Infragistics' {Platform} dock manager control to create interactive content using panes that can update based on actions. Check out {ProductName} dock manager tutorials!
_keywords: dock manager, layout, updating panes, {ProductName}
mentionedTypes: ['DockManager']
---
# {Platform} Updating Panes in Dock Manager

The Infragistics {Platform} Dock Manager component provides you with the layout for creating interactive content in your application using panes that can update based on actions of end-users.

## {Platform} Updating Panes in Dock Manager Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-updating-panes"
           alt="{Platform} Updating Panes in Dock Manager Example"
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

 ## API Members

 - [DockManager]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html)