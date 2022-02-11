---
title: $Platform$ Tree Component | Infragistics
_description: Infragistics' $Platform$ Tree component helps you to display hierarchical data in a tree-view structure, customize nodes easily and load data on demand. Learn how $ProductName$ can help you better display your data!
_keywords: $Platform$ Tree, Item Tree, overview, $ProductName$, Infragistics
mentionedTypes: ['Tree', 'TreeItem', 'CircularProgress']
---

# $Platform$ Tree Overview

The $ProductName$ Tree element allows users to represent hierarchical data in a tree-view structure, maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model. Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures. The `Tree` component also provides load on demand capabilities, item activation, bi-state and cascade selection of items through built-in checkboxes, built-in keyboard navigation and more.


## $Platform$ Tree Example

In this basic $ProductName$ Tree example, you can see how to define a tree and its items by specifying the item hierarchy and iterating through a hierarchical data set.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/tree-basic-sample"
           alt="$Platform$ Tree Example"
           github-src="grids/tree/tree-basic-sample">
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
import {defineComponents, IgcTreeComponent} from 'igniteui-webcomponents';

defineComponents(IgcTreeComponent);
```
<!-- end: WebComponents -->

The simplest way to start using the `Tree` is as follows:


### Declaring a tree
`TreeItem` is the representation of every item that belongs to the `Tree`.  
Items provide `disabled`, `selected` and `expanded` properties, which give you opportunity to configure the states of the item as per your requirement. 
`value` property can be used to add a reference to the data entry the item represents.

Items can be declared using one of the following approaches.

- Declaring the tree and its items by specifying the item hierarchy and iterating through a data set - The tree items can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

- Declaring a tree by creating static unbound item

<!-- WebComponents -->

In order to render a tree you do not necessarily need a data set - individual items can be created without an underlying data model using the exposed `label` property or provide a custom slot content for the `TreeItem` label.

> [!NOTE]
> You can provide a custom slot content for each `TreeItem` indentation, expansion and label area respectively using the provided `indentation`, `indicator` and `label` slots.

<!-- end: WebComponents -->

### Items with focusable content

When an item should render a focusable element (e.g. link, button), enable the `Tree`'s `hasFocusableContent` property. This will ensure that the proper aria role is assigned to the items's DOM elements.

### Item Interactions
The `Tree` provides the following API methods for item interactions:
- `expand` - expands all items. If an items array is passed, expands only the specified items.
- `collapse` - collapses all items. If an items array is passed, collapses only the specified items.
- `select` - selects all items. If an items array is passed, selects only the specified items. Does not emit igcSelection event.
- `deselect` - deselects all items. If an items array is passed, deselects only the specified items. Does not emit igcSelection event.

## $Platform$ Tree Selection

In order to setup item selection in the $ProductName$ Tree, you just need to set its `selection` property. This property accepts the following three modes: **None**, **Multiple** and **Cascade**. Below we will take a look at each of them in more detail.

### None
In the `Tree` by default item selection is disabled. Users cannot select or deselect an item through UI interaction, but these actions can still be completed through the provided API method.
### Multiple
To enable multiple item selection in the `Tree` just set the `selection` property to **Multiple**. This will render a checkbox for every item. Each item has two states - selected or not. This mode supports multiple selection.
### Cascade
To enable cascade item selection in the `Tree`, just set the selection property to **Cascade**. This will render a checkbox for every item. 

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

## Keyboard Navigation
Keyboard navigation in `Tree` provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the items.

The `Tree` navigation is compliant with W3C accesibility standards and convenient to use.

**Key Combinations**

 - <kbd>Arrow Down</kbd> - navigates to the next visible item. Marks the item as active. Does nothing if on the LAST item
 - <kbd>Ctrl + Arrow Down</kbd> - navigates to the next visible item. Does nothing if on the LAST item
 - <kbd>Arrow Up</kbd> - navigates to the previous visible item. Marks the item as active. Does nothing if on the FIRST item
 - <kbd>Ctrl + Arrow Up</kbd> - navigates to the previous visible item. Does nothing if on the FIRST item
 - <kbd>Arrow Left</kbd> - on an expanded parent item, collapses it. If on a child item, moves to its parent item.
 - <kbd>Arrow Right</kbd> - on an expanded parent item, navigates to the first child of the item. If on a collapsed parent item, expands it.
 - <kbd>Home</kbd> - navigates to the FIRST item
 - <kbd>End</kbd> - navigates to the LAST visible item
 - <kbd>Tab</kbd> - navigates to the next focusable element on the page, outside of the tree
 - <kbd>Shift + Tab</kbd> - navigates to the previous focusable element on the page, outside of the tree
 - <kbd>Space</kbd> - toggles selection of the current item. Marks the node as active.
 - <kbd>Shift + Space</kbd> - toggles selection of all items between the active one and the one pressed Space while holding Shift if selection is enabled
 - <kbd>Enter</kbd> - activates the focused item. If the item has link in it, open the link
 - <kbd>*</kbd> - expands the item and all sibling items on the same level

When selection is enabled, end-user selection of items is only allowed through the rendered checkbox. Since both selection types allow multiple selection, the following mouse + keyboard interactions are available:

 - <kbd>Click</kbd> - when performed on the item checkbox, toggles selection of the item if selection is enabled. Otherwise, focuses the item
 - <kbd>Shift + Click</kbd> - when performed on the item checkbox, toggles selection of all items between the active one and the one clicked while holding Shift if selection is enabled

## $Platform$ Tree Load On Demand

The $ProductName$ Tree can be rendered in such way that it requires the minimal amount of data to be retrieved from the server so the user could see it as quickly as possible. With this dynamic data loading approach, only after the user expands an item, the children for that particular parent item will be retrieved. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/tree-advanced-sample"
           alt="$Platform$ Tree Load On Demand Example"
           github-src="grids/tree/tree-advanced-sample">
</code-view>

After the user clicks the expand icon, it is replaced by a loading indicator. When the loading property resolves to false, the loading indicator disappears and the children are loaded. 

<!-- WebComponents -->

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
