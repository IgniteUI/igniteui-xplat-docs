---
title: $PlatformShort$ Dock Manager | Layout Controls | Infragistics
_description: Use Infragistics' $PlatformShort$ dock manager component to manage the layout through panes, with the ability to customize it by pinning, resizing, moving and hiding panes. Check out $ProductName$ dock manager tutorials!
_keywords: dock manager, layout, $ProductName$, Infragistics
---
# $PlatformShort$ Dock Manager Overview

The Infragistics $PlatformShort$ Dock Manager is a WebComponent that provides means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving, maximizing and hiding panes.

<!-- Blazor -->
> [!NOTE]
> <b>Coming Soon</b>

The Blazor Dock Manager is currently under development and will be completed soon.  When the Blazor Dock Manager component has been completed, this topic and sample will be updated. If you need a dock manager component during this time, you can use the Ignite UI for Web Components dock manager in your Blazor applications.

Please follow the steps outlined in the blog post titled:

 <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/using-the-igniteui-for-web-components-dock-manager-in-blazor">"Using the Ignite UI for Web Components Dock Manager in Blazor"  </a>
<!-- end: Blazor -->

## $PlatformShort$ Dock Manager Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-overview"
           alt="$PlatformShort$ Dock Manager Example"
           github-src="layouts/dock-manager/overview">
</code-view>

<div class="divider--half"></div>




<!-- Angular, React, WebComponents -->
To install the Dock Manager package execute the following command:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageDockManager}
</pre>

Then it is necessary to import and call the `defineCustomElements()` function:

```ts
import { defineCustomElements } from 'igniteui-dockmanager/loader';

defineCustomElements();
```
<div class="divider--half"></div>

<!-- end: Angular, React, WebComponents -->

## Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

> [!NOTE]
> Since the Dock Manager component uses ShadowDOM and slots it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

The Dock Manager has a [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) property, which describes the layout of the panes. To start defining a layout, you should set the [`rootPane`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#rootpane) property and add child panes. Here is how you can define a layout with a single content pane:

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

To load the content of the panes, the Dock Manager uses [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). The [`slot`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute of the content element should match the [`contentId`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#contentid) of the content pane in the layout configuration. It is highly recommended to set width and height of the content elements to `100%` for predictable response when the end-user is resizing panes.

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
```

The Dock Manager defines several [pane types]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/enums/igcdockmanagerpanetype.html):
* [Content pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
* [Split pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html)
* [Tab group pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html)
* [Document host]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html)

Each type of pane has a [`size`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#size) property. Depending on the parent orientation the size may affect either the width or the height of the pane. The size of a pane is relative to the sizes of its sibling panes and defaults to 100. If you have two sibling panes, where the first one has size set to 200 and the second one - size set to 100, the first will be twice the size of the second one. If the absolute size of their parent is 900px, they will be sized to 600px and 300px respectively.

The end-user can perform the following actions to customize the layout at runtime:
* Pin/unpin a pane
* Resize a pane
* Close a pane
* Drag a pane to make it float
* Move a floating pane
* Dock a floating pane
* Maximize a pane

All of these are reflected in the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) property of the Dock Manager.

### Content Pane

The [content pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html) represents a pane with header and content. It can be hosted inside a Split Pane or a Tab Group Pane. Here is how a content pane is defined:

```ts
const contentPane: IgcContentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1'
}
```

The [`header`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#header) property is used to provide a text header for the content pane. This text is rendered at several places: the top content pane header, the tab header if the pane is in a tab group and the unpinned header if the pane is unpinned. You can provide a custom slot content for each of these places respectively using the [`headerId`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#headerid), [`tabHeaderId`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#tabheaderid) and [`unpinnedHeaderId`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedheaderid) properties. If any of these properties is not set, the [`header`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#header) text is used. Here is how to provide a tab header slot content:

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

When a pane is unpinned, it appears as a tab header at one of the edges of the Dock Manager. If the end-user selects it, its content appears over the docked pinned panes. To unpin a content pane, set its [`isPinned`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) property to `false`.

```ts
const contentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    isPinned: false
}
```

The [`isPinned`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) property affects only content panes that are docked outside a document host. Also, content panes hosted in a floating pane cannot be unpinned.

By default, the unpin destination for a content pane is calculated automatically based on the location of the pane relative to the document host. When more than one document host is defined, the nearest one in the parent hierarchy of the unpinned content pane will be used. If there is no document host defined, the default location is used - [`left`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/enums/igcunpinnedlocation.html#left). It is also possible to set the desired destination of the unpinned pane by using the [`unpinnedLocation`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedlocation) property.

You can configure which end-user operations are allowed for a content pane using its [`allowClose`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowclose), [`allowPinning`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowpinning), [`allowDocking`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowdocking) and [`allowFloating`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowfloating) properties.

By default, when you close a pane it gets removed from the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) object. However, in some cases you would want to temporary hide the pane and show it later again. In order to do that without changing the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) object you can use the [`hidden`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#hidden) property of the content pane. Setting the property to `true` will hide it from the UI, but it will remain in the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) object. In order to override the default close behavior you can subscribe to the [`paneClose`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#paneclose) event like this:

```ts
this.dockManager.addEventListener('paneClose', ev => {
    for (const pane of ev.detail.panes) {
        pane.hidden = true;
    }
    ev.preventDefault();
});
```

### Split Pane

The [split pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html) is a container pane which stacks all of its child [`panes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#panes) horizontally or vertically based on its [`orientation`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#orientation) property. Here is how a horizontal split pane with two child content panes is defined:

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

The split pane may contain child panes of all pane types including other split panes.

### Tab Group Pane

The [tab group pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html) displays its child content [`panes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html#panes) as the tabs of a tab component. Here is how a tab group pane with a content pane for each of its two tabs is defined:

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

If there is not enough space to display all tab headers, the tab group shows **More tabs** menu, which contains the non-visible tabs. If you click a tab item in that menu, the tab gets selected and moved to the first position.

### Document Host

The [document host]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html) is an area of tabs for documents, similar to the one in Visual Studio for code editing and design view. Here is how to define a document host with two document tabs:

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

### Floating Pane

The floating pane is a split pane rendered above all other ones in a floating window. The floating pane definitions are stored in the [`floatingPanes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingpanes) property of the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout). Here is how to add a floating pane with a single content pane inside:

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

The [`floatingLocation`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatinglocation), [`floatingWidth`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingwidth) and [`floatingHeight`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingheight) properties represent absolute dimensions in pixels. Please note that these properties are applied only for the split panes in the [`floatingPanes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingpanes) array.

### Active Pane

The Dock Manager component highlights the content pane which contains the focus and exposes it in its [`activePane`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#activepane) property. You can programmatically change the active pane by setting the property. You can also listen for changes of the [`activePane`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#activepane) property by subscribing to the [`activePaneChanged`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#activepanechanged) event:

```ts
this.dockManager.addEventListener('activePaneChanged', ev => {
    console.log(ev.detail.oldPane);
    console.log(ev.detail.newPane);
});
```

### Save/Load Layout

To restore or persist a layout, you simply have to get/set the value of the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) property. Here is how to save the layout as a stringified JSON:

```ts
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

Please note that modifying any of the properties of the layout object will not trigger an update of the Dock Manager. If that is your goal, you should replace the whole layout object like so:

```ts
const layout = this.dockManager.layout;
layout.rootPane.orientation = IgcSplitPaneOrientation.vertical;
this.dockManager.layout = { ...layout };
```

### Events

The Dock Manager component raises events when specific end-user interactions are performed for example closing, pinning, resizing and dragging a pane. You can find the full list of Dock Manager events [here]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html). Here is how to add an event listener for the [`paneClose`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html#paneclose) event:

```ts
this.dockManager.addEventListener('paneClose', ev => console.log(ev.detail));
```

## Themes

The Dock Manager comes with a light and a dark theme. The light theme is the default one. To change it to dark, you only need to import the `igc.themes.css` file in your css and add the `dark-theme` class to the Dock Manager or any of its parents:

```
@import '~igniteui-dockmanager/dist/collection/styles/igc.themes';
```

```html
<igc-dockmanager class="dark-theme">
```

## Localization

The Dock Manager component supports localizing the strings used in the context menus, tooltips and aria attributes. By default, the Dock Manager detects the language of the page by searching for a [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any of its parents. If the [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is not set or is set to a value which the Dock Manager does not support, the default language used is [English(`en`)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsen). The Dock Manager provides built-in localized strings for the following languages: [English(`en`)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsen), [Japanese(`jp`)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsjp), [Korean(`ko`)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringsko) and [Spanish(`es`)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#igcdockmanagerresourcestringses). In order to provide resource strings for any other language use the [`addResourceStrings`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#addresourcestrings) method:

```ts
import { addResourceStrings } from 'igniteui-dockmanager';

const dockManagerStringsFr: IgcDockManagerResourceStrings = {
  close: 'Fermer',
  // ...
};

addResourceStrings('fr', dockManagerStringsFr);
```

The Dock Manager exposes [`resourceStrings`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#resourcestrings) property which allows you to modify the strings. If you set the [`resourceStrings`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#resourcestrings) property, the Dock Manager will use your strings no matter what [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is set.
