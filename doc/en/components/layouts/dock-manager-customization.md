---
title: {Platform} Dock Manager | Customization | Infragistics
_description: Use Infragistics' {Platform} dock manager component to manage the layout through panes, with the ability to customize it. Check out {ProductName} dock manager tutorials!
_keywords: dock manager, layout, customization, {ProductName}
mentionedTypes: ['DockManager']
---

### Customizing {Platform} Dock Manager

The Infragistics {Platform} Dock Manager component provides you with the properties needed to further customize the layout to suit your specific application requirements.
Let's dive in and explore how {Platform} DockManager empowers you to create exceptional user interfaces and enhance the productivity of your applications!

<div class="divider--half"></div>

## Focus Panes Programmatically

The `focusPane` method allows developers to dynamically and programmatically focus a specific pane within the layout by providing the `contentId` of the desired pane.

```ts
this.dockManager.focusPane('content1');
```

When using the `focusPane` method, the behavior varies depending on the state of the targeted pane. Here's how it works:

1. **Floating Panes**: If the pane is floating, invoking `focusPane` will bring it into focus, set it as the activePane and ensure it appears on top of any other floating panes.

2. **Unpinned Panes**: When the targeted pane is unpinned, `focusPane` will flyout the pane to its open state.

3. **Regular Pinned Panes**: For regular pinned panes, `focusPane` will set the pane as the `activePane`.


By utilizing this method, developers can effortlessly control the visibility and positioning of panes based on user interaction or application events.

Try it for yourself in the sample below:

### Demo

`sample="/layouts/dock-manager/focus-panes", height="600", alt="{Platform} Focus panes programmatically in Dock Manager Example"`


## Auto-hide Pane Headers

With the `showPaneHeaders` property of the DockManager, developers now have the flexibility to control the visibility of pane headers within the `layout`. By default, `showPaneHeaders` is set to **true** ensuring that pane headers are always visible. When set to **false**, all pane headers will be hidden until you hover your mouse over the top edge of a content pane. The corresponding pane header will appear and it will smoothly hide once your mouse moves away. Take a look at the example below: 

### Demo

`sample="/layouts/dock-manager/hide-pane-headers", height="600", alt="{Platform} Auto-hide pane headers in Dock Manager Example"`

## Control Inner Docking
By default, the Dock Manager allows users to effortlessly drag and dock panes inside each other, creating tabs. To provide more control over this functionality, we've introduced two properties - `allowInnerDock` and `acceptsInnerDock`.

By setting the `acceptsInnerDock` property of an `IgcContentPane`, developers can control docking inside specific content panes. When this property is set to false, users will be restricted from performing inner docking in the specified pane.


```ts
{
    type: IgcDockManagerPaneType.contentPane,
    header: 'Floating 1',
    contentId: 'content3'
    contentId: 'content3',
    acceptsInnerDock: false
}
```

If you wish to disable inner docking throughout the DockManager, simply set `allowInnerDock` to **false**. This property determines whether the end user is permitted to inner dock panes at all.


```ts
this.dockManager.allowInnerDock = false;
```

### Demo

`sample="/layouts/dock-manager/toggle-inner-dock", height="600", alt="{Platform} Dock Manager Toggle Inner Dock Example"`

## Control Pane Dragging 

With the `containedInBoundaries` property, developers can control whether the sides of floating panes are always contained within the DockManager. When set to **true**, pane dragging will stop once any of the sides attempt to move beyond the DockManager boundaries.


Try it in the example below:

### Demo

`sample="/layouts/dock-manager/contained-in-boundaries", height="600", alt="{Platform} Dock Manager Contained in Boundaries Example"`

## API References

 - `DockManager`
 - `ContentPane`
