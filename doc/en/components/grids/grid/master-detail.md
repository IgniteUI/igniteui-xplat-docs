---
title: {Platform} {ComponentTitle} Master-Detail Grid - Infragistics
_description: Define expandable detail view template for data in rows with Ignite UI {Platform} Grid. Useful for displaying master-detail style data in a hierarchical structure.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, master detail, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid']
---

# {Platform} Master-Detail Grid

The `Grid` component supports specifying a detail template that displays additional details for a particular row by expanding/collapsing its content. When specified each record acts as a master, which upon expansion shows a customizable details template with contextual data for the current record.

This mode is useful when you need to display master-detail style data in a hierarchical structure.

## {Platform} Grid Master-Detail Example


<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-grid-master-detail"
           alt="{Platform} {ComponentTitle} Master-Detail Example">
</code-view>

## Configuration

To configure the `Grid` to display in master-detail mode you need to specify a template inside the grid, marked with the `GridDetail` directive:

```html
<{ComponentSelector}>
         <ng-template GridDetail let-dataItem>
              <!-- Custom detail template content here -->
        </ng-template>
</{ComponentSelector}>
```

Context of the template is the master record data, so that values from the master record can be displayed in the detail template. For example:

```html
<{ComponentSelector}>
         <ng-template GridDetail let-dataItem>
            <div *ngIf="dataItem.Category">
                <header>{{dataItem.Category.CategoryName}}</header>
                <span>{{dataItem.Category.Description}}</span>
            </div>
        </ng-template>
</{ComponentSelector}>
```


## API

The expansion states can be controlled via the `ExpansionStates` input of the `Grid`. States are stored in key-value pairs [row identifier, expansion state]. The property gets/sets the current expansion states and supports two-way binding:

```html
  <{ComponentSelector} [(expansionStates)]='expansionState' >
    <!--...-->
  </{ComponentSelector}>
```

Additional API methods for controlling the expansion states are also exposed:
- `ExpandAll`
- `CollapseAll`
- `ToggleRow`
- `ExpandRow`
- `CollapseRow`

## Keyboard navigation

- When focus is on a detail row:

    - `Arrow Up` - navigates one row up, focusing a cell from the previous row.
    - `Arrow Down` -  navigates one row down, focusing a cell from the next row.
    - `Tab` - Allows focus to move to the next focusable element inside the template if there are focusable elements, otherwise moves to the next grid row.
    - `Shift + Tab` -  moves the focus to the previous row.

- When focus is on a data row with expander:
    - `Alt + Arrow Right/ Down` - expands the row.
    - `Alt + Arrow Left/Down` - collapses the row.

## Known Issues and Limitations


|Known Limitations| Description|
| --- | --- |
| Tab navigation inside the custom detail template may not update the master grid scroll position in case the next focused element is outside the visible view port.| Tab navigation inside the custom detail template is left up to the browser. |
| When templating a grid inside the details view that has a `<igc-column>` definitions, the parent grid will also render those columns.| This can be avoided using autoGenerate=true for the nested grid. In case some aspect of those columns need to be modified the `ColumnInit` event can be used. |
| Details template will not be exported to Excel.| As the details template can contain any type of content we cannot export it to excel out of the box.|
| The search feature will not highlight elements from the details template. | |

## API References

* `{GridName}`
* `Column`
* `GridRow`
* `GridCell`
* `TreeGridRow`
* `HierarchicalGridRow`