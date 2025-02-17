---
title: {Platform} Tile Manager Component - {ProductName}
_description: {Platform} Tile Manager component is used to visualize content as a process and to show its progress by dividing the content into logical steps. Try it for FREE.
_keywords: {Platform} Tile Manager, {ProductName}, Infragistics
mentionedTypes: ["TileManager"]
---

# {Platform} Tile Manager Overview

The `igc-tile-manager` component enables the display of content in individual tiles. It allows users to interact with these tiles by rearranging and resizing them, giving them the freedom to customize the layout and appearance of the content according to their preferences. This flexibility enhances the user experience by enabling a more personalized and efficient way to view and manage content.

## {Platform} Tile Manager Example

The following {ProductName} Tile Manager Example shows the component in action. 

`sample="/layouts/tile-manager/overview", height="430", alt="{Platform} Tile Manager Example"`

<div class="divider--half"></div>

## Usage

The Tile Manager provides a base tile layout behavior, managing the placement of tiles in maximized or normal state. The tiles can be sized independently of each other and used to form complex layouts. End users can reorder tiles by dragging and dropping them, providing a flexible and intuitive experience. 

There are three different Tile components which we can use:
- `IgcTileComponent` - This component represents an individual tile displayed within the Tile Manager.
- `IgcTileHeaderComponent` - This component can only be used within a tile component to represent the header section of the tile.
- `IgcTileManagerComponent` - This is the main component that contains all of the tile components, serving as the container for the entire tile layout.

### Getting Started

<!-- WebComponents -->

To start using the Tile Manager, first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the Tile Manager, you need to import it as follows:

```ts
import { defineComponents, IgcTileManagerComponent, IgcTileComponent, IgcTileHeaderComponent } from 'igniteui-webcomponents';

defineComponents(IgcTileManagerComponent, IgcTileComponent, IgcTileHeaderComponent);
```

Now you can start with a basic configuration of the {Platform} Tile Manager.

```html
<igc-tile-manager>
  <igc-tile>
    <p>Tile 1</p>
  </igc-tile>
  <igc-tile>
    <igc-tile-header>Tile 2 header</igc-tile-header>
    <p>Tile 2</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 3</p>
  </igc-tile>
</igc-tile-manager>
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

## Resizing

Resizing in the tile manager is a functionality that allows tiles to be resized using three different resize adorners.

- **Side Adorner**: Adjusts the width by modifying the column span.
- **Bottom Adorner**: Adjusts the height by modifying the row span.
- **Corner Adorner**: Adjusts both width and height simultaneously.

To ensure smooth resizing, a ghost element is used instead of directly modifying the tile’s dimensions. This element appears on top of the original tile, displaying its current dimensions when resizing begins, and it updates in real time as the user drags any of the resize handles.

> [!Note] If the ghost element exceeds the available grid space, it will automatically adjust to the largest possible span within the grid's limits.

We can use the `resize-mode` property to control how resizing is applied in the Tile Manager. It can be set to either `hover` or `always`, which determines when the resize adorners are visible.

```html
<igc-tile-manager resize-mode='hover'>
  <igc-tile>
    <p>Tile 1</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 2</p>
  </igc-tile>
</igc-tile-manager>
```

You can see the difference between the two states in the example below:

`sample="/layouts/tile-manager/resize", height="430", alt="{Platform} Tile Manager Resize Example"`

### Limitations

There are several constraints and limitations in the resizing process:

- A tile cannot be resized smaller than its defined minimum width or height (minColWidth, minRowHeight).
- A tile cannot exceed the maximum available space in the grid. If a tile starts at a specific column or row, and the user tries to resize it beyond the visible grid area, it will only expand up to the maximum available columns or rows from its starting position.

## Reorder

You can reorder tiles in the Tile Manager using the drag-and-drop feature. By default, tiles are not draggable. To enable this functionality, set the `drag-mode` property on the Tile Manager to either `tile` or `tile-header`.

- With the `tile` option, you can click and hold anywhere on an individual tile to start dragging it.
- With the `tile-header` option, you can only click and hold in the tile's header section to start the dragging process.

Similar to resizing, when you initiate the drag-and-drop process, a ghost element appears beneath the tile you’ve grabbed. As you drag the tile, the ghost element moves with it, dynamically reordering the other tiles in real time. This allows you to preview how the tile grid will look when you drop the tile.

There are two types of transitions you can use while reordering tiles with drag-and-drop. To use them, simply set the `drag-action` property on the Tile Manager to either `slide` or `swap`.

```html
<igc-tile-manager drag-mode="tile-header" drag-action="slide">
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 1 header</span>
    </igc-tile-header>
    <p>Content for Tile 1</p>
  </igc-tile>
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 2 header</span>
    </igc-tile-header>
    <p>Content for Tile 2</p>
  </igc-tile>
</igc-tile-manager>
```

`sample="/layouts/tile-manager/dragndrop", height="430", alt="{Platform} Tile Manager Drag and drop Example"`

## Managing Tile columns

### Columns

We can also specify the number of grid columns for our Tile Manager. To do this, simply set the `column-count` property to the desired number of columns. If the number is less than one, the Tile Manager will create as many columns as can fit, with each column being at least 20px wide and expanding to equally share the available space.

```html
<igc-tile-manager column-count="2">
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 1 header</span>
    </igc-tile-header>
    <p>Content for Tile 1</p>
  </igc-tile>
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 2 header</span>
    </igc-tile-header>
    <p>Content for Tile 2</p>
  </igc-tile>
  ...
</igc-tile-manager>
```

In this code snippet, setting the `column-count` property to 2 will arrange all the tiles in the Tile Manager into 2 columns.

### Gap

Another property that can be used in the Tile Manager is the `gap` property, which defines the space between tiles. The value of the `gap` property must be a number followed by a length unit (e.g., px, rem, em, ...). This value will apply to both the horizontal gap (width) and the vertical gap (height) between tiles.

```html
<igc-tile-manager gap="20px">
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 1 header</span>
    </igc-tile-header>
    <p>Content for Tile 1</p>
  </igc-tile>
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 2 header</span>
    </igc-tile-header>
    <p>Content for Tile 2</p>
  </igc-tile>
  ...
</igc-tile-manager>
```

### Minimum width and height

We also have properties for setting the minimum width of the columns (`min-column-width`) and the minimum height of the rows (`min-row-height`) in the Tile Manager. Similar to the gap property, the values for these properties must be a number followed by a length unit. These values will define the minimum width for all columns and the minimum height for all rows in the Tile Manager.

```html
<igc-tile-manager min-column-widt="200px" min-row-height="150px">
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 1 header</span>
    </igc-tile-header>
    <p>Content for Tile 1</p>
  </igc-tile>
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 2 header</span>
    </igc-tile-header>
    <p>Content for Tile 2</p>
  </igc-tile>
  ...
</igc-tile-manager>
```

### Example

`sample="/layouts/tile-manager/columngap", height="430", alt="{Platform} Tile Manager Column Example"`

## Layout

The Tile Manager also provides methods that help manage the layout of tiles:

- The `saveLayout` method allows you to save the current arrangement of tiles in the Tile Manager, it captures the current order and positions of all tiles, so you can later restore it to this exact configuration.
- The `loadLayout` method enables you to load a previously saved layout. When called, it restores the Tile Manager to the exact state it was in when the layout was saved, including the order and positions of the tiles.

`sample="/layouts/tile-manager/layout", height="430", alt="{Platform} Tile Manager Layout Example"`

## Tile component

The Tile component also has properties that can be set individually for each tile. Some of these properties include:

- The `col-span` property specifies how many columns the tile will span across in the layout, allowing you to control its horizontal size.
- The `row-span` property determines how many rows the tile will span vertically, adjusting the tile's height within the layout.
- The `disable-resize` property prevents the tile from being resized by the user.
- The `disable-drag` property disables the ability to drag and move the tile within the layout.

```html
<igc-tile-manager>
  <igc-tile col-span="2" disable-resize>
    <igc-tile-header slot="header">
      <span slot="title">Tile 1 header</span>
    </igc-tile-header>
    <p>Content for Tile 1</p>
  </igc-tile>
  <igc-tile>
    <igc-tile-header slot="header">
      <span slot="title">Tile 2 header</span>
    </igc-tile-header>
    <p>Content for Tile 2</p>
  </igc-tile>
  ...
</igc-tile-manager>
```

## Header component actions

The header component also includes two action buttons:

- The `expand` button enlarges the tile's content to fill the entire width of the Tile Manager, offering a wider view of the content.
- The `fullscreen` button enables the tile to open in fullscreen mode in the user's browser.

<img src="../../images/tile-manager-actions.png" />

## Styling

You can customize the appearance of all three components: `Tile Manager`, `Tile`, and `Tile Header`. 
Each of these components exposes CSS properties that can be used for styling.

`Tile Manager` CSS parts:

| Part name | Description |
| ---------|------------ |
| `base` | The base wrapper of the tile manager. |
| `maximized-tile` | Added when there is a maximized tile. |

`Tile` CSS parts:

| Part name | Description |
| ---------|------------ |
| `base` | The wrapper of a tile. |
| `drag-over` | Added when a tile is dragged over the current tile. |
| `dragging` | Added when the tile is dragged. |
| `resizing` | Added when the tile is resized. |
| `draggable` | Added when disableDrag is false. |
| `resizable` | Added when disableResize is false. |
| `fullscreen` | Added to the wrapper when a tile is in fullscreen state. |
| `header` | The header wrapper of a tile. |
| `title` | The title of a tile. |
| `actions` | 	A section where action buttons are added. |
| `content-container` | The content wrapper of a tile. |

`Tile Header` CSS parts:

| Part name | Description |
| ---------|------------ |
| `header` | The tile header container. |
| `title` | The header title container. |
| `actions` | The header actions container. |

Using these CSS parts you can customize the appearance of the three components as follows:

```css
igc-tile-manager::part(base) {
  background-color: var(--ig-surface-600);
}

igc-tile::part(content-container) {
  color: var(--ig-secondary-200);
}

igc-tile-header::part(header) {
  background-color: var(--ig-gray-400);
}

igc-tile-header::part(title) {
  color: var(--ig-primary-400);
}
```

`sample="/layouts/tile-manager/styling", height="430", alt="{Platform} Tile Manager Styling Example"`

## API References


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

