---
title: {Platform} Dock Manager | Customization | Infragistics
_description: Use Infragistics' {Platform} dock manager component to manage the layout through panes, with the ability to customize it. Check out {ProductName} dock manager tutorials!
_keywords: dock manager, layout, customization, {ProductName}
mentionedTypes: ['DockManager']
---

### Customizing {Platform} Dock Manager

The Infragistics {Platform} Dock Manager component provides you with the properties needed to further customize the DockManager to suit your specific application requirements.
Let's dive in and explore how {Platform} DockManager empowers you to create exceptional user interfaces and enhance the productivity of your applications!

<div class="divider--half"></div>

## Focus Panes Programmatically

The `focusPane` method allows developers to dynamically and programmatically focus a specific pane within the DockManager layout by providing the `contentId` of the desired pane.

```ts
this.dockManager.focusPane('content1');
```

When using the `focusPane` method, the behavior varies depending on the state of the targeted pane. Here's how it works:

1. **Floating Panes**: If the pane is floating, invoking the `focusPane` method will bring it into focus, set it as the activePane and ensure it appears on top of any other floating panes.

2. **Unpinned Panes**: When the targeted pane is unpinned, the `focusPane` method will flyout the pane to its open state.

3. **Regular Pinned Panes**: For regular pinned panes, the `focusPane` method will set the pane as the activePane.

By utilizing the `focusPane` method, you can effortlessly control the visibility and positioning of panes based on user interaction or application events.

The sample below demonstrates `{ComponentName}`'s **focusPane** behavior.

### Demo

`sample="/layouts/dock-manager/focus-panes", height="600", alt="{Platform} Focus panes programmatically in Dock Manager Example"`


## Auto-hide Pane Headers

With the `showPaneHeaders` property of the DockManager, developers now have the flexibility to control the visibility of pane headers within the `layout`. By default, `showPaneHeaders` has a value of **true** ensuring that pane headers are always visible. When set to **false**, all pane headers will be hidden, providing a cleaner and more streamlined user experience. When you hover your mouse over the top edge of a content pane, the corresponding pane header will gracefully appear, and it will smoothly hide once your mouse moves away. Take a look at the example below: 

### Demo

`sample="/layouts/dock-manager/hide-pane-headers", height="600", alt="{Platform} Auto-hide pane headers in Dock Manager Example"`

## Control Inner Docking
By default, the Dock Manager allows users to effortlessly drag and dock panes inside each other, creating tabs. To provide more control over this functionality, we've introduced two  properties - `allowInnerDock` and `acceptsInnerDock`.

By setting the `acceptsInnerDock` property of an IgcContentPane, developers can control docking inside content panes. When this property is set to false, users will be restricted from performing inner docking in the specified pane.


```ts
{
    type: IgcDockManagerPaneType.contentPane,
    header: 'Floating 1',
    contentId: 'content3'
    contentId: 'content3',
    acceptsInnerDock: false
}
```

However, if you wish to disable inner docking throughout the entire Dock Manager, you can utilize the `allowInnerDock` property. This property determines whether the end user is permitted to inner dock panes at all, effectively restricting the creation of tabs.

```ts
this.dockManager.allowInnerDock = false;
```

## Control Pane Dragging 

The `containedInBoundaries` property of the IgcDockManager determines whether the floating panes are kept inside the Dock Manager boundaries. When this property is set to **true**, it ensures that all floating panes remain confined within the boundaries of the Dock Manager so whenever any side of a pane goes outside the boundaries, the pane dragging will stop. This approach guarantees that floating panes will always be visible and contained within the Dock Manager, preventing them from extending beyond that area. 


Try it in the example below:

### Demo

`sample="/layouts/dock-manager/contained-in-boundaries", height="600", alt="{Platform} Dock Manager Contained in Boundaries Example"`

## API References

 - `DockManager`