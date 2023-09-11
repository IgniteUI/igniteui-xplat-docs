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


`sample="/{GridSample}/master-detail", height="600", alt="{Platform} {ComponentTitle} Master Detail Example"`


## Configuration

To configure the `Grid` to display in master-detail mode you need to specify a template for the grid:


```html
<{ComponentSelector}>
         <ng-template GridDetail let-dataItem>
              <!-- Custom detail template content here -->
        </ng-template>
</{ComponentSelector}>
```

```ts
constructor() {
  var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
  this._bind = () => {
    grid.data = this.customersData;
    grid.detailTemplate = this.masterDetailTemplate;
  }
  this._bind();
}
```

```razor
    <IgbGrid DetailTemplateScript="DetailTemplate"  AutoGenerate=true  Data=northwindEmployees></IgbGrid>
```

```ts
<IgrGrid detailTemplate={masterDetailTemplate} autoGenerate="false" data={nwindData}>
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

```ts
    public masterDetailTemplate = (ctx: IgcGridMasterDetailContext) => {
        var data = ctx.implicit;
        return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span> <br/>
        <span><strong>Title:</strong> ${data.ContactTitle}</span> <br/>
        <span><strong>Company:</strong> ${data.CompanyName}</span> <br/>
    </div>`;
    }
```

```razor
// In JavaScript
igRegisterScript("DetailTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var data = ctx.implicit;
    return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span> <br/>
        <span><strong>Title:</strong> ${data.ContactTitle}</span> <br/>
        <span><strong>Company:</strong> ${data.CompanyName}</span> <br/>
    </div>`;
}, false);
```

```ts
const masterDetailTemplate = ({dataContext}:{dataContext: IgrGridMasterDetailContext}) => {
    const data = dataContext.implicit;
    return (
        <div className="contact-container">
            <span><strong>Name:</strong> {data.ContactName}</span> <br/>
            <span><strong>Title:</strong> {data.ContactTitle}</span> <br/>
            <span><strong>Company:</strong> {data.CompanyName}</span> <br/>
        </div>
    );
}
```

## API

<!-- Angular -->

The expansion states can be controlled via the `ExpansionStates` input of the `Grid`. States are stored in key-value pairs [row identifier, expansion state]. The property gets/sets the current expansion states and supports two-way binding:

```html
  <{ComponentSelector} [(expansionStates)]='expansionState' >
  </{ComponentSelector}>
```

<!-- end: Angular -->

Additional API methods for controlling the expansion states are also exposed:
- `ExpandAll`
- `CollapseAll`
- `ToggleRow`
- `ExpandRow`
- `CollapseRow`

## Keyboard navigation

- When focus is on a detail row:

    - <kbd>🡑</kbd> - navigates one row up, focusing a cell from the previous row.
    - <kbd>🡓</kbd> -  navigates one row down, focusing a cell from the next row.
    - <kbd>Tab</kbd> - Allows focus to move to the next focusable element inside the template if there are focusable elements, otherwise moves to the next grid row.
    - <kbd>Shift + <kbd>Tab</kbd> -  moves the focus to the previous row.

- When focus is on a data row with expander:
    - <kbd>Alt</kbd> + <kbd>🡒</kbd> or <kbd>Alt</kbd> + <kbd>🡓</kbd> - expands the row.
    - <kbd>Alt</kbd> + <kbd>🡐</kbd> or <kbd>Alt</kbd> + <kbd>🡑</kbd> - collapses the row.

## Known Issues and Limitations


|Known Limitations| Description|
| --- | --- |
| Tab navigation inside the custom detail template may not update the master grid scroll position in case the next focused element is outside the visible view port.| Tab navigation inside the custom detail template is left up to the browser. |
| When templating a grid inside the details view that has a `<igc-column>` definitions, the parent grid will also render those columns.| This can be avoided using autoGenerate=true for the nested grid. In case some aspect of those columns need to be modified the `ColumnInit` event can be used. |
| Details template will not be exported to Excel.| As the details template can contain any type of content we cannot export it to excel out of the box.|
| The search feature will not highlight elements from the details template. | |

## API References

* `Grid`
* `Column`
* `GridRow`
* `GridCell`
* `TreeGridRow`
* `HierarchicalGridRow`
