---
title: {Platform} Dock Manager | Layout Controls | Infragistics
_description: Use Infragistics' {Platform} dock manager component to manage the layout through panes, with the ability to customize it by pinning, resizing, moving and hiding panes. Check out {ProductName} dock manager tutorials!
_keywords: dock manager, layout, {ProductName}, Infragistics
mentionedTypes: ["DockManager", "DocumentHost", "DockManagerLayout", "DockManagerPaneType", "ContentPane", "SplitPane", "TabGroupPane", "PinnedLocation", "PaneHeaderElement"]
---

# {Platform} Dock Manager Overview

The Infragistics {Platform} Dock Manager provides a means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving, maximizing and hiding panes.

## {Platform} Dock Manager Example

This example shows most functionalities and docking options of the `DockManager` that you can use in your application.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-overview"
           alt="{Platform} Dock Manager Example"
           github-src="layouts/dock-manager/overview">
</code-view>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
To install the Dock Manager package execute the following command:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageDockManager}
</pre>

Then it is necessary to import and call the **defineCustomElements()** function:

```ts
import { defineCustomElements } from 'igniteui-dockmanager/loader';

defineCustomElements();
```
<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

<!-- WebComponents -->

## Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

> [!NOTE]
> Since the Dock Manager component uses ShadowDOM and slots it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

The Dock Manager has a `Layout` property, which describes the layout of the panes. To start defining a layout, you should set the `RootPane` property and add child panes. Here is how you can define a layout with a single content pane:

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

To load the content of the panes, the Dock Manager uses [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). The [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute of the content element should match the `ContentId` of the content pane in the layout configuration. It is highly recommended to set width and height of the content elements to **100%** for predictable response when the end-user is resizing panes.

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
```

The Dock Manager defines several pane types:
* `ContentPane`
* `SplitPane`
* `TabGroupPane`
* `DocumentHost`

Each type of pane has a `Size` property. Depending on the parent orientation the size may affect either the width or the height of the pane. The size of a pane is relative to the sizes of its sibling panes and defaults to 100. If you have two sibling panes, where the first one has size set to 200 and the second one - size set to 100, the first will be twice the size of the second one. If the absolute size of their parent is 900px, they will be sized to 600px and 300px respectively.

The end-user can perform the following actions to customize the layout at runtime:
* Pin/unpin a pane
* Resize a pane
* Close a pane
* Drag a pane to make it float
* Move a floating pane
* Dock a floating pane
* Maximize a pane

All of these are reflected in the `Layout` property of the Dock Manager.

### Content Pane

The `ContentPane` represents a pane with header and content. It can be hosted inside a Split Pane or a Tab Group Pane. Here is how a content pane is defined:

```ts
const contentPane: IgcContentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1'
}
```

The `Header` property is used to provide a text header for the content pane. This text is rendered at several places: the top content pane header, the tab header if the pane is in a tab group and the unpinned header if the pane is unpinned. You can provide a custom slot content for each of these places respectively using the `HeaderId`, `TabHeaderId` and `UnpinnedHeaderId` properties. If any of these properties is not set, the `Header` text is used. Here is how to provide a tab header slot content:

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

When a pane is unpinned, it appears as a tab header at one of the edges of the Dock Manager. If the end-user selects it, its content appears over the docked pinned panes. To unpin a content pane, set its `IsPinned` property to **false**.

```ts
const contentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    isPinned: false
}
```

The `IsPinned` property affects only content panes that are docked outside a document host. Also, content panes hosted in a floating pane cannot be unpinned.

By default, the unpin destination for a content pane is calculated automatically based on the location of the pane relative to the document host. When more than one document host is defined, the nearest one in the parent hierarchy of the unpinned content pane will be used. If there is no document host defined, the default location is used - `Left`. It is also possible to set the desired destination of the unpinned pane by using the `UnpinnedLocation` property.

You can configure which end-user operations are allowed for a content pane using its `AllowClose`, `AllowPinning`, `AllowDocking` and `AllowFloating` properties.

When defining a content pane, you can set the `DocumentOnly` property to true so the pane can be docked only in a document host.

To restrict the user interaction with the content pane and its content, you can set the `Disabled` property to true. This will prevent all user interactions with the pane unless it is a single floating pane. The latter could be moved, maximized or closed (according to the pane's settings for maximizing and closing), so the user can have a look at the elements under it but will not be able to interact with its content.

By default, when you close a pane it gets removed from the `Layout` object. However, in some cases you would want to temporary hide the pane and show it later again. In order to do that without changing the `Layout` object you can use the `Hidden` property of the content pane. Setting the property to **true** will hide it from the UI, but it will remain in the `Layout` object. In order to override the default close behavior you can subscribe to the `PaneClose` event like this:

```ts
this.dockManager.addEventListener('paneClose', ev => {
    for (const pane of ev.detail.panes) {
        pane.hidden = true;
    }
    ev.preventDefault();
});
```

### Split Pane

The `SplitPane` is a container pane which stacks all of its child `Panes` horizontally or vertically based on its `Orientation` property. Here is how a horizontal split pane with two child content panes is defined:

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

By default, if the split pane is empty it is not displayed. Yet if you would like to change that behavior you can set its `AllowEmpty` property to true and the split pane will be presented in the UI even when there is no panes inside it.

### Tab Group Pane

The `TabGroupPane` displays its child content `Panes` as the tabs of a tab component. Here is how a tab group pane with a content pane for each of its two tabs is defined:

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

The tabs also can be reordered without being detached from the tab group in which they are located. You can click on a tab of your choice and drag it left or right to the position you want it to be. If you drag the selected tab outside of the tabs area it will be detached into a floating pane.

In case you would like the tab group pane to be displayed in the UI when it has no tabs, you can set the `AllowEmpty` property to true.

### Document Host

The `DocumentHost` is an area of tabs for documents, similar to the one in Visual Studio for code editing and design view. Here is how to define a document host with two document tabs:

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

The floating pane is a split pane rendered above all other ones in a floating window. The floating pane definitions are stored in the `FloatingPanes` property of the `Layout`. Here is how to add a floating pane with a single content pane inside:

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

The `FloatingLocation`, `FloatingWidth` and `FloatingHeight` properties represent absolute dimensions in pixels. Please note that these properties are applied only for the split panes in the `FloatingPanes` array.

With the `FloatingResizable` and
`AllowFloatingPanesResize` you can set whether resizing floating panes is allowed. The `allowFloatingPanesResize` is an **IgcDockManagerComponent** property, so if the value is set to **false** none of the floating panes can be resized. The `floatingResizable` property can be applied separately on each split pane in the `floatingPanes` array and if the property value is not set, it defaults to the value of the `allowFloatingPanesResize` property. If the `floatingResizable` property is set for a specific pane, its value takes precedence over the `allowFloatingPanesResize` property value.

### Active Pane

The Dock Manager component highlights the content pane which contains the focus and exposes it in its `ActivePane` property. You can programmatically change the active pane by setting the property. You can also listen for changes of the `ActivePane` property by subscribing to the `ActivePaneChanged` event:

```ts
this.dockManager.addEventListener('activePaneChanged', ev => {
    console.log(ev.detail.oldPane);
    console.log(ev.detail.newPane);
});
```

### Save/Load Layout

To restore or persist a layout, you simply have to get/set the value of the `Layout` property. Here is how to save the layout as a stringified JSON:

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

### Adding Panes At Runtime

Contents and panes can be added to the `Layout` at runtime. In the example below, you can see how you can add content, document and floating panes.


<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-add-content-runtime"
           alt="{Platform} Dock Manager Add Content Runtime Example"
           github-src="layouts/dock-manager/add-content-runtime">
</code-view>

<div class="divider--half"></div>

### Events

The Dock Manager component raises events when specific end-user interactions are performed for example closing, pinning, resizing and dragging a pane. You can find the full list of Dock Manager events [here]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html).

<!-- end: WebComponents -->

<div class="divider--half"></div>

 <!-- WebComponents, React, Angular -->
 Here is how to add an event listener for the `PaneClose` event:

```ts
this.dockManager.addEventListener('paneClose', ev => console.log(ev.detail));
```
<!-- end: WebComponents, React, Angular -->

<div class="divider--half"></div>

<!-- WebComponents -->
<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-hiding-panes"
           alt="{Platform} Dock Manager Pane Closing Example"
           github-src="layouts/dock-manager/hiding-panes">
</code-view>
<!-- end: WebComponents -->

<div class="divider--half"></div>

## Customization

The Dock Manager component provides the option to customize all buttons using slots and parts. To change any of the buttons you simply have to define your own element inside the Dock Manager and set the slot attribute to the corresponding identifier.

Let's utilize these slots and parts to create a customized Dock Manager layout. First, we will provide our own icons, using the `closeButton`, `maximizeButton`, `minimizeButton`, `pinButton` and `unpinButton` slots:

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

Then, we will use the exposed parts in our stylesheet. This way we have full control of the component's styling:

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

If everything went well, we should now have a DockManager with customized icons and tab area. Let's have a look at it:

<!-- WebComponents -->
<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-customize-buttons"
           alt="{Platform} Dock Manager Customize Buttons Example"
           github-src="layouts/dock-manager/customize-buttons">
</code-view>
<!-- end: WebComponents -->

Below you can find a list containing the slot names for all of the buttons as well as the splitter handle:

| Slot name | Description |
| ----------|------------ |
| `closeButton` | The close buttons. |
| `paneHeaderCloseButton` | The close buttons of the pane headers. |
| `tabHeaderCloseButton` | The close buttons of the tab headers. |
| `moreTabsButton` | The more tabs buttons. |
| `moreOptionsButton` | The more options buttons. |
| `maximizeButton` | The maximize buttons. |
| `minimizeButton` | The minimize buttons. |
| `pinButton` | The pin buttons. |
| `unpinButton` | The unpin buttons. |
| `splitterHandle` | The splitter handle. |

You can find each slot's corresponding part in the **CSS Parts** under **Styling** section of this page.

### CSS Variables

The following table describes all CSS variables used for styling the dock-manager component:

| CSS variable         | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `--igc-background-color`               | The background color of the header inside the pane navigator component. |
| `--igc-accent-color`                   | The background color of the buttons inside the pane header actions part on focus. |
| `--igc-active-color`                   | The text and box-shadow color used for the components in active state. |
| `--igc-border-color`                   | The border bottom color of the pane header component. |
| `--igc-font-family`                    | The font-family of the dock-manager component. |
| `--igc-dock-background`                | The background color of the dock-manager, tab and floating-pane components. |
| `--igc-dock-text`                      | The text color of the dock-manager and the floating pane components. |
| `--igc-pane-header-background`         | The background color of the pane header component. |
| `--igc-pane-header-text`               | The text color of the pane header component. |
| `--igc-pane-content-background`        | The background color of the content inside the dock-manager and the tab panel components. |
| `--igc-pane-content-text`              | The text color of the content inside the dock-manager and the tab panel components. |
| `--igc-tab-text`                       | The text color of the tab header component. |
| `--igc-tab-background`                 | The background color of the tab header component. |
| `--igc-tab-border-color`               | The border color of the tab header component. |
| `--igc-tab-text-active`                | The text color of the selected tab header component. |
| `--igc-tab-background-active`          | The background color of the selected tab header component. |
| `--igc-tab-border-color-active`        | The border color of the selected tab header component. |
| `--igc-pinned-header-background`       | The background color of the unpinned pane header component. |
| `--igc-pinned-header-text`             | The text color of the unpinned pane header component. |
| `--igc-splitter-background`            | The background color of the splitter component. |
| `--igc-splitter-handle`                | The background color of the splitter handle. |
| `--igc-button-text`                    | The color of the buttons inside the pane header actions part. |
| `--igc-flyout-shadow-color`            | The box-shadow color of the content pane component. |
| `--igc-joystick-background`            | The background color of the joystick and the root docking indicator components. |
| `--igc-joystick-border-color`          | The border color of the joystick and the root docking indicator components. |
| `--igc-joystick-icon-color`            | The icon color of the joystick and the root docking indicator components. |
| `--igc-joystick-background-active`     | The hover background color of the joystick and the root docking indicator components. |
| `--igc-joystick-icon-color-active`     | The hover icon color of the joystick and the root docking indicator components. |
| `--igc-floating-pane-border-color`     | The border color of the floating panes. |
| `--igc-context-menu-background`        | The background color of the context menu items. |
| `--igc-context-menu-background-active` | The background color of the context menu items on hover and focus. |
| `--igc-context-menu-color`             | The text color of the context menu items. |
| `--igc-context-menu-color-active`      | The text color of the context menu items on hover and focus. |
| `--igc-drop-shadow-background`         | The background color of the drop shadow. |
| `--igc-disabled-color`                 | The text color of the components in disabled state. |

## Keyboard Navigation

Keyboard navigation enhances the accessibility of the **Dock Manager** and provides a rich variety of interactions to the end-user like navigating through all panes, splitting the view in multiple directions through docking the active pane, etc.


The shortcuts are as follows:

### Docking

- <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow up</kbd> Docks to global top
- <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow down</kbd> Docks to global bottom
- <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow right</kbd> Docks to global right
- <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow left</kbd> Docks to global left
- <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> With multiple tabs in a tab group splits the view and docks the focused tab above
- <kbd>Shift</kbd> + <kbd>Arrow down</kbd> With multiple tabs in a tab group splits the view and docks the focused tab below
- <kbd>Shift</kbd> + <kbd>Arrow right</kbd> With multiple tabs in a tab group splits the view and docks the focused tab right
- <kbd>Shift</kbd> + <kbd>Arrow left</kbd> With multiple tabs in a tab group splits the view and docks the focused tab left

### Navigating
 - <kbd>Cmd/Ctrl</kbd> + <kbd>F6</kbd> or <kbd>Cmd/Ctrl</kbd> + <kbd>Arrow right</kbd> Focuses next tab in document host
 - <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F6</kbd> or <kbd>Cmd/Ctrl</kbd> + <kbd>Arrow left</kbd> Focuses previous tab in document host
 - <kbd>Alt</kbd> + <kbd>F6</kbd> Focuses next content pane
 - <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F6</kbd> Focuses previous content pane

### Pane Navigator

Тhe following keyboard shortcuts show a navigator from which you can iterate through panes and documents.

 - <kbd>Cmd/Ctrl</kbd> + <kbd>F7</kbd> or <kbd>Cmd/Ctrl</kbd> + <kbd>F8</kbd>  Starts from the first document forward
 - <kbd>Alt</kbd> + <kbd>F7</kbd> or <kbd>Alt</kbd> + <kbd>F8</kbd> Starts from the first pane forward
 - <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F7</kbd> or <kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F8</kbd> Starts from the last document backwards
 - <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F7</kbd> or <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F8</kbd> Starts from the last pane backwards

### Other
 - <kbd>Alt</kbd> + <kbd>F3</kbd> Closes the active pane

Practice all of the above mentioned actions in the sample [demo](dock-manager.md#{Platform}-dock-manager-example).

<!-- WebComponents -->

## Styling

The Dock Manager uses a shadow DOM to encapsulate his styles and behaviors. As a result, you can't simply target its internal elements with the usual CSS selectors. That is why we expose components **parts** that can be targeted with the **::part** CSS selector.

```css
igc-dockmanager::part(content-pane) {
  border-radius: 10px;
}
```

In the following example, we demonstrate the ability of customizing the Dock Manager through some of the CSS parts that we've exposed.

<code-view style="height: 700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/dock-manager-styling"
           alt="{Platform} Dock Manager Styling Example"
           github-src="layouts/dock-manager/styling">
</code-view>

<div class="divider--half"></div>

### CSS Parts

| Part name | Description |
| ---------|------------ |
| `content-pane` | The content pane component. |
| `pane-header`  | The content pane header component. |
| `pane-header-content` | The content area of the content pane header. |
| `pane-header-actions` | The actions area of the content pane header. |
| `active` | Indicates an active state. Applies to `pane-header`, `pane-header-content`, `pane-header-actions`, `tab-header`. |
| `floating`  | Indicates a floating pane placement. Applies to `pane-header`, `pane-header-content`, `pane-header-actions`. |
| `window` | Indicates a floating window placement. Applies to `pane-header`, `pane-header-content`, `pane-header-actions`. |
| `split-pane` | The split pane component. |
| `splitter` | The resizing splitter component. |
| `splitter-base` | The base element of the splitter component. |
| `splitter-ghost`| The ghost element of the splitter component. |
| `unpinned-pane-header` | The unpinned pane header component. |
| `tab-header` | The tab header component. |
| `tab-header-more-options-button` | The more options button in the tab header. |
| `tab-header-close-button` | The close button in the tab header. |
| `selected` | Indicates a selected state. Applies to `tab-header` and `tab-header-close-button`. |
| `hovered` | Indicates a hovered state. Applies to `tab-header-close-button`. |
| `header-title` | The text title of the tab header. |
| `tab-strip-area` | The tab strip area containing the tab headers. |
| `tab-strip-actions` | The tab strip area containing the tab actions. |
| `top` | Indicates a top tabs position. Applies to `tab-header`, `tab-strip-area`, `tab-strip-actions`. |
| `bottom` | Indicates a bottom tabs position. Applies to `tab-header`, `tab-strip-area`, `tab-strip-actions`. |
| `context-menu` | The context menu component. |
| `context-menu-item` | An item in the context menu component. |
| `docking-preview` | The docking preview area. |
| `docking-indicator` | The non-root docking indicator. |
| `root-docking-indicator` | The root docking indicator. |
| `pane-navigator` | The pane navigator component. |
| `pane-navigator-header` | The header area of the pane navigator. |
| `pane-navigator-body` | The body area of the pane navigator. |
| `pane-navigator-items-group` | An items group in the pane navigator component. |
| `pane-navigator-items-group-title` | The title element of an items group in the pane navigator. |
| `pane-navigator-item` | An item in the pane navigator. |
| `pane-header-close-button` | The close button in the pane header. |
| `pane-header-maximize-button` | The maximize button in the pane header. |
| `pane-header-minimize-button` | The minimize button in the pane header. |
| `pane-header-pin-button` | The pin button in the pane header. |
| `pane-header-unpin-button` | The unpin button in the pane header. |
| `tabs-maximize-button` | The tabs maximize button. |
| `tabs-minimize-button` | The tabs minimize button. |
| `tabs-more-button` | The more tabs button. |
| `context-menu-unpin-button` | The unpin button in the context menu. |
| `context-menu-close-button` | The close button in the context menu. |
| `splitter-handle` | The splitter handle. |
| `horizontal` | Indicates a horizontal position. Applies to `splitter-handle`. |
| `vertical` | Indicates a vertical position. Applies to `splitter-handle`. |

### Themes

The Dock Manager comes with a light and a dark theme. The light theme is the default one. To change it to dark, you only need to import the **igc.themes.css** file in your css and add the **dark-theme** class to the Dock Manager or any of its parents:

```
@import '~igniteui-dockmanager/dist/collection/styles/igc.themes';
```

```html
<igc-dockmanager class="dark-theme">
```

## Localization

The Dock Manager component supports localizing the strings used in the context menus, tooltips and aria attributes. By default, the Dock Manager detects the language of the page by searching for a [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any of its parents. If the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is not set or is set to a value which the Dock Manager does not support, the default language used is [English (en)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsEN). The Dock Manager provides built-in localized strings for the following languages: [English (en)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsEN), [Japanese (jp)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsJP), [Korean (ko)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsKO) and [Spanish (es)]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsES). In order to provide resource strings for any other language use the [addResourceStrings]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#addResourceStrings) method:

```ts
import { addResourceStrings } from 'igniteui-dockmanager';

const dockManagerStringsFr: IgcDockManagerResourceStrings = {
  close: 'Fermer',
  // ...
};

addResourceStrings('fr', dockManagerStringsFr);
```

The Dock Manager exposes `ResourceStrings` property which allows you to modify the strings. If you set the `ResourceStrings` property, the Dock Manager will use your strings no matter what [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is set.

<!-- end: WebComponents -->

## API References

 - `DockManager`
 - `DocumentHost`
 - `DockManagerLayout`
 - `ContentPane`
 - `SplitPane`
 - `TabGroupPane`