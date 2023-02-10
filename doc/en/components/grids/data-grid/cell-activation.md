---
title: {Platform} Data Grid | Real-Time Data Grid and Tables | Activation | Infragistics
_description: Use Infragistics' {ProductName} Data Table & Grid to support the cell activation feature that will enable keyboard navigation through the cells of the grid. View {ProductName} table tutorials!
_keywords: {Platform} Table, Data Grid, cell activation, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.GridActivationMode']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Cell Activation

The {ProductName} Data Table / Data Grid supports a cell activation feature that will enable keyboard navigation through the cells of the grid. This is activated by setting the `ActivationMode` property of the grid to `Cell`.

## {Platform} Grid Cell Activation Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-activation"
           alt="{Platform} Grid Cell Activation Example"
           github-src="grids/data-grid/cell-activation">
</code-view>

<div class="divider--half"></div>

## Excel Style Navigation

`EnterBehaviorAfterEdit` property will configure the grid to navigate to the next cell up, down, left or right after the enter key is pressed in edit mode. Otherwise, the `EnterBehavior` property of the grid can be used to navigate to other cells, while not in edit mode, up, down, left or right.

## Keyboard Navigation

After setting the `ActivationMode` property of the grid to `Cell`, this will enable a range of keyboard navigation options in the data grid. Below is a description of each of the key presses / combinations and the effect they will have relative to the currently activated cell:

- <b>Arrow Key Up</b>: Navigate one cell up.
- <b>Arrow Key Down</b>: Navigate one cell down.
- <b>Arrow Key Left</b>: Navigate one cell to the left on the current row only.
- <b>Arrow Key Right</b>: Navigate one cell to the right on the current row only.
- <b>Page Up</b>: Scroll the grid one viewport page up.
- <b>Page Down</b>: Scroll the grid one viewport page down.
- <b>Tab</b>: Move the active cell to the next cell to the right, or the left-most cell of the next row if the last cell of that row is reached.
- <b>Shift + Tab</b>: Move the active cell to the next cell to the left, or the right-most cell of the previous row if the first cell of that row is reached.
- <b>Ctrl + Arrow Key Up</b>: Move to the top cell in the column.
- <b>Ctrl + Arrow Key Down</b>: Move to the bottom cell in the column.
- <b>Ctrl + Arrow Key Left</b>: Move to the left-most cell in the row.
- <b>Ctrl + Arrow Key Right</b>: Move to the right-most cell in the row.
- <b>Ctrl + Home</b>: Move to the top-left cell in the grid.
- <b>Ctrl + End</b>: Move to the bottom-right cell in the grid.

## API References

 - `ActivationMode`
 - `Cell`