---
title: $Platform$ Tree Component | Infragistics
_description: Infragistics' $Platform$ Tree component helps you to display hierarchical data in a tree-view structure, customize nodes easily and load data on demand. Learn how $ProductName$ can help you better display your data!
_keywords: $Platform$ Tree, Item Tree, overview, $ProductName$, Infragistics
mentionedTypes: ['Tree', 'TreeItem', 'Icon', 'CircularProgress']
---

# $Platform$ Tree Overview

The $ProductName$ Tree element allows users to represent hierarchical data in a tree-view structure, maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model. Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures. The `Tree` component also provides load on demand capabilities, item activation, multiple and cascade selection of items through built-in checkboxes, built-in keyboard navigation and more.


## $Platform$ Tree Example

In this basic $ProductName$ Tree example, you can see how to define a tree and its items by specifying the item hierarchy.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/tree-basic-example"
           alt="$Platform$ Tree Example"
           github-src="grids/tree/basic-example">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->

First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Tree`, you need to register it as follows:

```ts
import {defineComponents, IgcTreeComponent, IgcTreeItemComponent, IgcIconComponent} from 'igniteui-webcomponents';
defineComponents(IgcTreeComponent, IgcTreeItemComponent, IgcIconComponent);
```

<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding $ProductName$ npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Tree`, its necessary CSS, and register its module, like so:

```tsx
import { IgrTreeModule, IgrTree, IgrTreeItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrTreeModule.register();
```

<!-- end: React -->

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Tree` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

```razor
IgbTreeModule.Register(IgniteUIBlazor);
IgbTreeItemModule.Register(IgniteUIBlazor);
```

The simplest way to start using the `Tree` is as follows:

### Declaring a tree
`TreeItem` is the representation of every item that belongs to the `Tree`.
Items provide `disabled`, `active`, `selected` and `expanded` properties, which give you opportunity to configure the states of the item as per your requirement.
The `value` property can be used to add a reference to the data entry the item represents.

<!-- WebComponents, Blazor -->

Items can be declared using one of the following approaches.

- Declaring the tree and its items by specifying the item hierarchy and iterating through a data set

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

<!-- end: WebComponents, Blazor -->

Items can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

- Declaring a tree by creating static unbound items

In order to render a tree you do not necessarily need a data set - individual items can be created without an underlying data model using the exposed `label` property or provide a custom slot content for the `TreeItem` label.

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

```tsx
<IgrTree>
    <IgrTreeItem label='North America'>
        <IgrTreeItem label='United States' />
        <IgrTreeItem label='Canada' />
        <IgrTreeItem label='Mexico' />
    </IgrTreeItem>
    <IgrTreeItem label='South America'>
        <IgrTreeItem label='Brazil' />
        <IgrTreeItem label='Uruguay' />                        
    </IgrTreeItem>
    <IgrTreeItem label='Europe'>
        <IgrTreeItem label='United Kingdom' />
        <IgrTreeItem label='Germany' />
        <IgrTreeItem label='Bulgaria' />
    </IgrTreeItem>
</IgrTree>
```

> [!NOTE]
> You can provide a custom slot content for each `TreeItem`'s indentation, expansion and label area respectively using the provided `indentation`, `indicator` and `label` slots.

### Item Interactions

The `Tree` provides the following API methods for item interactions:

- `expand` - expands all items. If an items array is passed, expands only the specified items.
- `collapse` - collapses all items. If an items array is passed, collapses only the specified items.
- `select` - selects all items. If an items array is passed, selects only the specified items. Does not emit `Selection` event.
- `deselect` - deselects all items. If an items array is passed, deselects only the specified items. Does not emit `Selection` event.

## $Platform$ Tree Selection

In order to setup item selection in the $ProductName$ Tree, you just need to set its `selection` property. This property accepts the following three modes: **None**, **Multiple** and **Cascade**. Below we will take a look at each of them in more detail.

### None

In the `Tree` by default item selection is disabled. Users cannot select or deselect an item through UI interaction, but these actions can still be completed through the provided API method.

### Multiple

To enable multiple item selection in the `Tree` just set the `selection` property to **multiple**. This will render a checkbox for every item. Each item has two states - selected or not. This mode supports multiple selection.

```html
<igc-tree selection="multiple">
</igc-tree>
```

```razor
<IgbTree Selection=TreeSelection.Multiple>
</IgbTree>
```

```tsx
<IgrTree selection="multiple" />
```

### Cascade
To enable cascade item selection in the `Tree`, just set the selection property to **cascade**. This will render a checkbox for every item.

```html
<igc-tree selection="Cascade">
</igc-tree>
```

```razor
<IgbTree Selection=TreeSelection.Cascade>
</IgbTree>
```

```tsx
<IgrTree selection="cascade" />
```

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

## Keyboard Navigation
Keyboard navigation in `Tree` provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the items.

The `Tree` navigation is compliant with W3C accesibility standards and convenient to use.

**Key Combinations**

 - <kbd>Arrow Down</kbd> - navigates to the next visible item. Marks the item as active. Does nothing if on the LAST item.
 - <kbd>Ctrl + Arrow Down</kbd> - navigates to the next visible item. Does nothing if on the LAST item.
 - <kbd>Arrow Up</kbd> - navigates to the previous visible item. Marks the item as active. Does nothing if on the FIRST item.
 - <kbd>Ctrl + Arrow Up</kbd> - navigates to the previous visible item. Does nothing if on the FIRST item.
 - <kbd>Arrow Left</kbd> - on an expanded parent item, collapses it. If the item is collapsed or does not have children, moves to its parent item. Does nothing if there is no parent item.
 - <kbd>Arrow Right</kbd> - on an expanded parent item, navigates to the first child of the item. If on a collapsed parent item, expands it. Does nothing if the item does not have children.
 - <kbd>Home</kbd> - navigates to the FIRST item.
 - <kbd>End</kbd> - navigates to the LAST visible item.
 - <kbd>Tab</kbd> - navigates to the next focusable element on the page, outside of the tree.
 - <kbd>Shift + Tab</kbd> - navigates to the previous focusable element on the page, outside of the tree.
 - <kbd>Space</kbd> - toggles selection of the current item. Marks the node as active.
 - <kbd>Shift + Space</kbd> - toggles selection of all items between the active one and the one pressed Space while holding Shift if selection is enabled.
 - <kbd>Enter</kbd> - activates the focused item. If the item has link in it, opens the link.
 - <kbd>*</kbd> - expands the item and all sibling items on the same level.

When selection is enabled, end-user selection of items is only allowed through the rendered checkbox. Since both selection types allow multiple selection, the following mouse + keyboard interactions are available:

 - <kbd>Click</kbd> - when performed on the item checkbox, toggles selection of the item if selection is enabled. Otherwise, focuses the item
 - <kbd>Shift + Click</kbd> - when performed on the item checkbox, toggles selection of all items between the active one and the one clicked while holding Shift if selection is enabled

<!-- WebComponents -->

## $Platform$ Tree Load On Demand

The $ProductName$ Tree can be rendered in such way that it requires the minimal amount of data to be retrieved from the server so the user could see it as quickly as possible. With this dynamic data loading approach, only after the user expands an item, the children for that particular parent item will be retrieved. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/tree-load-on-demand"
           alt="$Platform$ Tree Load On Demand Example"
           github-src="grids/tree/load-on-demand">
</code-view>

After the user clicks the expand icon, it is replaced by a loading indicator. When the loading property resolves to false, the loading indicator disappears and the children are loaded.

You can provide a custom slot content for the loading area using the `loadingIndicator` slot. If such slot is not defined, the `CircularProgress` is used.

<!-- end: WebComponents -->

## Styling

You can change the appearance of the `TreeItem`s, by using some of the exposed CSS parts listed below:

Part name | Description
---------|------------
`wrapper` | The wrapper for the tree item.
`selected`  | Indicates selected state. Applies to `wrapper`.
`focused` | Indicates focused state. Applies to `wrapper`.
`active` | Indicates an active state. Applies to `wrapper`.
`indicator` | The expand indicator of the tree item.
`label` | The tree item content.
`text` | The tree item displayed text.
`select` | The checkbox of the tree item when selection is enabled.

Using these CSS parts we can customize thе appearance of the `Tree` component like this:

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

## API References

* `Tree`
* `TreeItem`
* `CircularProgress`
* `Icon`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## Additional Resources

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

<!-- end: Blazor>

<!-- React -->

* [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

<!-- end: React -->

## API Members

 - `TreeItem`
 - `Tree`