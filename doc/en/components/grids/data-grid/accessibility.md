---
title: {Platform} Data Grid | Real-Time Data Grid and Tables | Accessibility Compliance | Infragistics
_description: Use Infragistics' {ProductName} Data Table & Grid to support accessibility feature that will enable screen readers to read "speak" keyboard navigation interactions through the cells and columns of the grid. View {ProductName} table tutorials!
_keywords: {Platform} Table, Data Grid, cell accessibility, {ProductName}, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: {CanonicalLinkToGridMain}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Accessibility Compliance

The {ProductName} Data Table / Data Grid supports accessibility and screen readers that interpret keyboard navigation interactions through the cells and columns of the grid.

<!-- React, WebComponents -->
This is activated by setting the `UseAccessibility` property of the grid to **true**.
<!-- end: React, WebComponents -->

<!-- Blazor -->
This is activated by setting `--use-accessibility` property to **true** explicitly in CSS, preferably using a div tag around the grid.
<!-- end: Blazor -->

## {Platform} Grid Accessible Example


`sample="/grids/data-grid/accessibility", height="600", alt="{Platform} Grid Cell Accessibility Example"`



<div class="divider--half"></div>

##Section 508 Compliance
<a href="https://www.section508.gov/" target="_blank">Section 508</a> of the Rehabilitation Act was amended in 1998 by Congress to require all Federal agencies to make their electronic and information technology accessible to people with disabilities. Since then, Section 508 compliance has not only been a requirement in government agencies, but it's also important when providing software solutions and designing Web pages.

Section 1194.22 of the Section 508 law specifically targets Web-based intranet and internet information and systems, and contains a set of 16 rules to follow. In order to enable you to keep your Web applications and Web sites compatible with these rules with minimal effort on your part, Infragistics has taken steps to ensure that the Ignite UI for Angular controls and components are compliant with the relevant accessibility rules.

##WAI-ARIA Support
In 2014 the W3C finalized their <a href="https://www.w3.org/TR/wai-aria/" target="_blank">WAI-ARIA specification</a> which defined how to design Web content and Web applications to be more accessible to users with disabilities.

This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the directionality of the components is.

ARIA Attributes
In order to give screen readers the contextual information they require to interpret and interact with the grid, ARIA attributes are added to the grid DOM elements. These attributes are particularity useful when plain HTML elements such div and span are used to create complex DOM structures, which is the case with ag-Grid.

When inspecting the grid's DOM elements the following roles and properties are supported and announced by the screen reader:

- Grid Cell - element containing a grid cell.
- Row Count - announces the number of rows.
- Column Count - announces the number of rows.
- Row - a row of column headers or grid cells.
- Row Index - announces the visible index of the row.
- Row Selected - only present if the row is selectable, it announces the selection state.
- Group Expanded - only present in row groups, it announces the expand state.
- Column Header - element containing a column header.
- Cell Index - announces the visible index of the column.
- Colspan - only present if the column spans across multiple columns, it helps guide screen readers.
- Sort - only present in sortable columns, it announces the sort state.
- Column Index - announces the visible index of the cell.
- Selected - only present if the cell is selectable, it announces the selection state.
- Expanded - only present in a group cell, it announces the expand state.

## Keyboard Navigation

After setting the `UseAccessibility` property to **true**, this will enable a range of keyboard navigation options in the data grid that screen readers can recognize. Below is a description of each of the key presses / combinations and the effect they will have relative to the currently activated cell:

Navigating within the Grid

- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd>: Navigate one cell up.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd>: Navigate one cell left.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd>: Navigate one cell below.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd>: Navigate one cell above.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Home</kbd>: Navigate to first column header.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>End</kbd>: Navigate to last visible cell.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>	Navigate to current column header.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd>	Navigate to last cell in current column.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd>	Navigate to first cell in current row.
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd>	Navigate to last cell in current row.

Screen Reader Commands

- <kbd>Ctrl OR Alt</kbd> + <kbd>Num Pad 5</kbd>: Read current cell.
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>: Read current row.
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd>: Read from start of row.
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Page Up</kbd>: Read to end of row from current cell.
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Num Pad 5</kbd>: Read current column.
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd>: Read from top of column.
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Page Down</kbd>: Read to bottom of column.

## Code Snippet

The following demonstrates how to implement cell accessibility in the  {Platform} data grid:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    useAccessibility="true" />
```

```html
<igc-data-grid id="grid"
     height="100%"
     width="100%"
     use-accessibility="true">
</igc-data-grid>
```

```razor
<div style="--use-accessibility:true;">

        @if (DataSource != null)
        {
            <IgbDataGrid Height="100%" Width="100%" />
        }
</div>
```

## API References

 - `Grid`
 - `UseAccessibility`