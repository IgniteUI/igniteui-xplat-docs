---
title: $PlatformShort$ Data Grid | Real-Time Data Grid and Tables | Activation | Infragistics
_description: Use Infragistics' $ProductName$ Data Table & Grid to support the cell activation feature that will enable keyboard navigation through the cells of the grid. View $ProductName$ table tutorials!
_keywords: $PlatformShort$ Table, Data Grid, cell activation, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'GridActivationMode']
---

# $PlatformShort$ Grid Cell Activation

The $ProductName$ Data Table / Data Grid supports a cell activation feature that will enable keyboard navigation through the cells of the grid. This is activated by setting the `ActivationMode` property of the grid to `Cell`.

## $PlatformShort$ Grid Cell Activation Example

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/cell-activation"></sample-button>

<div class="divider--half"></div>

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

## Code Snippet

The following demonstrates how to implement cell activation in the  $PlatformShort$ data grid:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    activationMode="Cell" />
```

```html
<igc-data-grid id="grid"
     height="100%"
     width="100%"
     activation-mode="Cell">
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"
    DataSource="DataSource"          
    ActivationMode="GridActivationMode.Cell" />
```