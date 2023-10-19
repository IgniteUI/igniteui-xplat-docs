---
title: {Platform} Grid Group By | Group by multiple fields | Infragistics
_description: Configure group by that allows visualizing of data records in {Platform} Material table, visualize the grouped data in separate and convenient column group.
_keywords: {Platform}, Grid, {ProductName}, group by, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid']
namespace: Infragistics.Controls
---

# {Platform} Grid Group By

The {ProductName} Group By behavior in {Platform} {GridName} creates grouped data rows based on the column values. The Group By in the `Grid` allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API. When Row Selection is enabled, a Group By row selector is rendered in the left-most area of the group row. In case the `RowSelection` property is set to single, checkboxes are disabled and only serve as an indication for the group where selection is placed. If the `RowSelection` property is set to multiple, clicking over the Group By row selector selects all records belonging to this group.

## {Platform} Grid Group By Example
This example presents the grouping capabilities of a large amount of data. Dragging the column headers to the top (grouping area) allows users to see the data for the selected column in a hierarchical structure. They can do group by in multiple fields by dragging more column headers to the top. These grouping options come in handy when you have tables with numerous rows and columns where users want to present the data in a much faster and visually acceptable way.


`sample="/{GridSample}/groupby-expressions", height="605", alt="{Platform} {GridTitle} Group By Example"`

## Initial Grouping State

It is possible to define initial grouping of the grid by assigning an array of expressions to the `GroupingExpressions` property of the grid.

<!-- Angular -->
```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
constructor() {
    var grid = document.getElementById("grid") as IgcGridComponent;
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
const expressions = [
    { fieldName: 'ProductName', dir: SortingDirection.Desc },
    { fieldName: 'Released', dir: SortingDirection.Desc }
];

function App() {
    const grid1Ref = useRef();
    return (
    <>
        <IgrGrid
            autoGenerate="true"
            groupingExpressions={expressions}
            ref={grid1Ref}>
        </IgrGrid>
    </>
    )
}
```
<!-- end: React -->

<!-- Blazor -->

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" @ref="grid" Id="grid" GroupingExpressions="GroupingExpression1"></IgbGrid>

@code {
    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };
}
```

<!-- end: Blazor -->


Grouping expressions implement the `ISortingExpression` interface.

## Group By API

### Grouping API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's `Groupable` property to `true`.

```html
<igc-grid auto-generate="false" id="grid">
    <igc-column field="OrderID" hidden="true"></igc-column>
    <igc-column field="ShipCountry" header="Ship Country" width="200px" groupable="true"> </igc-column>
    <igc-column field="OrderDate" header="Order Date" data-type="date" width="200px" groupable="true"> </igc-column>
    <igc-column field="PostalCode" header="Postal Code" width="200px" groupable="true"> </igc-column>
    <igc-column field="Discontinued" width="200px" data-type="boolean" groupable="true" name="column1" id="column1"> </igc-column>
    <igc-column field="ShipName" header="Ship Name" width="200px" groupable="true"> </igc-column>
    <igc-column field="ShipCity" header="Ship City" width="200px" groupable="true"> </igc-column>
    <igc-column field="ShipperName" header="Shipper Name" width="200px" groupable="true"> </igc-column>
    <igc-column field="Salesperson" header="Sales Person" width="200px" groupable="true"> </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" width="200px" groupable="true"> </igc-column>
    <igc-column field="Quantity" width="200px" groupable="true"> </igc-column>
</igc-grid>
```

<!-- Blazor -->

```razor
<IgbGrid AutoGenerate="false" Data="InvoicesData" @ref="grid" Id="grid" GroupingExpressions="GroupingExpression1" GroupRowTemplateScript="WebGridGroupByRowTemplate">
    <IgbColumn Field="OrderID" Hidden="true"></IgbColumn>
    <IgbColumn Field="ShipCountry" Header="Ship Country" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="PostalCode" Header="Postal Code" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="Discontinued" Width="200px" DataType="GridColumnDataType.Boolean" Groupable="true" BodyTemplateScript="WebGridBooleanCellTemplate" Name="column1" @ref="column1"></IgbColumn>
    <IgbColumn Field="ShipName" Header="Ship Name" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="ShipCity" Header="Ship City" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name"Width="200px"Groupable="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Sales Person" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="UnitPrice" Header="Unit Price" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="Quantity" Width="200px" Groupable="true"></IgbColumn>
</IgbGrid>
```

<!-- end: Blazor -->

<!-- Angular -->
```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```
<!-- end: Angular -->

```tsx
function App() {
    const gridRef = useRef();
    return (
    <>
        <IgrGrid
            autoGenerate="false"
            ref={gridRef}
            >
            <IgrColumn field="OrderID" hidden="true"></IgrColumn>
            <IgrColumn field="ShipCountry" header="Ship Country" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="OrderDate" header="Order Date" dataType="date" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="PostalCode" header="Postal Code" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="Discontinued" width="200px" dataType="boolean" groupable="true"></IgrColumn>
            <IgrColumn field="ShipName" header="Ship Name" width="200px" groupable="false"></IgrColumn>
            <IgrColumn field="ShipCity" header="Ship City" width="200px" groupable="false"></IgrColumn>
            <IgrColumn field="ShipperName" header="Shipper Name" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="Salesperson" header="Sales Person" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="UnitPrice" header="Unit Price" width="200px" groupable="true"></IgrColumn>
            <IgrColumn field="Quantity" width="200px" groupable="true"></IgrColumn>
        </IgrGrid>
    </>
  )
}
```

<!-- WebComponents -->
```typescript
    constructor() {
        var column1 = (this.column1 = document.getElementById("column1") as IgcColumnComponent);
        column1.groupable = true;
    }
```
<!-- end: WebComponents -->

During runtime the expressions are gettable and settable from the `groupingExpressions` property. If you need to add or change an existing expression you may also use the `GroupBy` method with either a single or an array of expressions.


<!-- WebComponents -->
```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
gridRef.current.groupBy([{ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true }]);
```
<!-- end: React -->

<!-- Blazor -->

```razor
@code {
    public IgbGrid grid;

    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };


    private void GroupGrid()
    {
        this.grid.GroupBy(GroupingExpression1);
    }
}
```

<!-- end: Blazor -->

<!-- Angular -->

> [!Note]
> Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

<!-- end: Angular -->

### Expand/Collapse API

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the `Grid` component `GroupingExpansionState` which is a collection of `GroupByExpandState`. Each expansion state is uniquely defined by the field name it is created for and the value it represents for each level of grouping, i.e. the identifier is a hierarchy array of `GroupByKey`.

As with `GroupingExpressions`, setting a list of `GroupByExpandState` directly to the `GroupingExpansionState` will change the expansion accordingly. Additionally `Grid` exposes a method `toggleGroup` that toggles a group by the group record instance or via the `expanded` property of the row.

<!-- WebComponents -->
```typescript
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.toggleGroup(groupRow);
```

```typescript
    const groupRow = this.grid.getRowByIndex(0);
    groupRow.expanded = false;
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
    const groupRow = gridRef.current.getRowByIndex(0).groupRow;
    gridRef.current.toggleGroup(groupRow);
```

```typescript
    const groupRow = gridRef.current.getRowByIndex(0);
    groupRow.expanded = false;
```
<!-- end: React -->

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" GroupingExpressions="GroupingExpression1" GroupingExpansionState=ExpansionState @ref="grid" Id="grid">
</IgbGrid>

@code {
    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };
    public IgbGroupByExpandState[] state = new IgbGroupByExpandState[1]
    {
        new IgbGroupByExpandState(){ Hierarchy = new IgbGroupByKey[1]{ new IgbGroupByKey() { FieldName="ShipCountry", Value = "USA" } },  Expanded = false }
    };
}
```

Groups can be created expanded (***default***) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the `GroupsExpanded` property.

### Select/Deselect All Rows in a Group API

Selecting/Deselecting all rows in a group is available through the `SelectRowsInGroup` and `DeselectRowsInGroup` API methods.

The code snippet below can be used to select all rows within a group using the group record instance `SelectRowsInGroup` method. Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

<!-- WebComponents -->
```typescript
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.selectRowsInGroup(groupRow);
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
    const groupRow = gridRef.current.getRowByIndex(0).groupRow;
    gridRef.current.selectRowsInGroup(groupRow);
```
<!-- end: React -->

```razor
var row = await this.grid.GetRowByIndexAsync(0);
this.grid.SelectRowsInGroup(row.GroupRow, true);
```

If you need to deselect all rows within a group programmatically, you can use the `DeselectRowsInGroup` method.

<!-- WebComponents -->
```typescript
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.deselectRowsInGroup(groupRow);
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
    const groupRow = gridRef.current.getRowByIndex(0).groupRow;
    gridRef.current.deselectRowsInGroup(groupRow);
```
<!-- end: React -->

```razor
var row = await this.grid.GetRowByIndexAsync(0);
this.grid.DeselectRowsInGroup(row.GroupRow);
```


## Templating

### Group Row Templates

The group row except for the expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The context to render the template against is of type `GroupByRecord`.

As an example, the following template would make the group rows summary more verbose:

```html
<ng-template GroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

```tsx
function template(ctx: { dataContext: IgrGroupByRowTemplateContext }) {
    const groupRow = ctx.dataContext.implicit;
    return (<>
       <span>Total items with value: { groupRow.value } are { groupRow.records.length }</span>
    </>)
}
```

```ts
    public groupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {
        const groupRow: IgcGroupByRecord = ctx.implicit;
        return html`<span>Total items with value: ${ groupRow.value } are ${ groupRow.records.length }</span>`;
    }
```

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" @ref="grid" Id="grid" GroupRowTemplateScript="WebGridGroupByRowTemplate"></IgbGrid>


//In JavaScript:
igRegisterScript("WebGridGroupByRowTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var groupRow = ctx.implicit;
    return html`<span>Total items with value: ${groupRow.value} are ${groupRow.records.length}</span>`;
}, false);
```


### Group Row Selector Templates

As mentioned above the group row except for the expand/collapse UI is fully templatable. To create a custom Group By row selector template use `GroupByRowSelectorTemplate`. From the template, you can access the implicitly provided context variable, with properties that give you information about the Group By row's state.

The `SelectedCount` property shows how many of the group records are currently selected while `TotalCount` shows how many records belong to the group.

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    {{ groupByRowContext.selectedCount }} / {{ groupByRowContext.totalCount  }}
</ng-template>
```

```tsx
function template(ctx: { dataContext: IgrGroupByRowSelectorTemplateContext }) {
    return (<>
        { ctx.dataContext.implicit.selectedCount } / { ctx.dataContext.implicit.totalCount }
    </>)
}
```

```ts
    public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateContext) => {
        return html`
            ${ ctx.implicit.selectedCount } / ${ ctx.implicit.totalCount  }
        `;
    }
```

```razor
<IgbGrid GroupByRowSelectorTemplateScript="GroupByRowSelectorTemplate"></IgbGrid>
//In Javascript
igRegisterScript("GroupByRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html` ${ctx.implicit.selectedCount} / ${ctx.implicit.totalCount} `;
}, false);
```

The `GroupRow` property returns a reference to the group row.

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    <div (click)="handleGroupByRowSelectorClick($event, groupByRowContext.groupRow)">Handle groupRow</div>
</ng-template>
```

```tsx
function template(ctx: { dataContext: IgrGroupByRowSelectorTemplateContext }) {
    const groupRow = ctx.dataContext.implicit.groupRow;
    return (<>
        <div onClick={(e: any) => handleGroupByRowSelectorClick(e, groupRow)}>Handle groupRow</div> `;
    </>)
}
```

```ts
    public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateContext) => {
        const groupRow = ctx.implicit.groupRow;
        return html` <div @click=${(e: any) => this.handleGroupByRowSelectorClick(e, groupRow)} ">Handle groupRow</div> `;
    };
```

```razor
<IgbGrid GroupByRowSelectorTemplateScript="GroupByRowSelectorTemplate"></IgbGrid>
//In Javascript
igRegisterScript("GroupByRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var groupRow = ctx.implicit.groupRow;
    return html`<div onclick="handleGroupByRowSelectorClick()">Handle groupRow</div> `;
}, false);
```

The `SelectedCount` and `TotalCount` properties can be used to determine if the Group By row selector should be checked or indeterminate (partially selected).

```html
<igx-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template GroupByRowSelector let-context>
        <igx-checkbox
            [checked]=" context.selectedCount > 0 && context.selectedCount === context.totalCount"
            [indeterminate]="context.selectedCount > 0 && context.selectedCount !== context.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```


## {Platform} Grid Group By With Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

### {Platform} Group By With Paging Example


`sample="/{GridSample}/groupby-paging", height="605", alt="{Platform} {GridTitle} group by with paging example"`

## Group By With Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.md#summaries-with-group-by) topic.

## Keyboard Navigation

The grouping UI supports the following keyboard interactions:

- For group rows (focus should be on the row or the expand/collapse cell)
   - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - Expands the group
   - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - Collapses the group
   - <kbd>SPACE</kbd> - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple

- For group `Chip` components in the group by area (focus should be on the chip)
   - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - moves the focused chip left, changing the grouping order, if possible
   - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - moves the focused chip right, changing the grouping order, if possible
   - <kbd>SPACE</kbd> - changes the sorting direction
   - <kbd>DELETE</kbd> - ungroups the field
   - The seperate elements of the chip are also focusable and can be interacted with using the <kbd>ENTER</kbd> key.

<!-- WebComponents, Angular, React -->

## {Platform} Grid Custom Group By

Grid allows defining custom grouping per column or per grouping expression, which provides grouping based on a custom condition. This is useful when you need to group by complex objects or for other application specific scenarios.

<!-- Angular -->

> [!Note]
> In order to implement custom grouping the data first needs to be sorted appropriately. Due to this you may also need to apply a custom sorting strategy that extends the base `DefaultSortingStrategy`. After the data is sorted the custom groups can be determined by specifying a `GroupingComparer` for the column or for the specific grouping expression.

<!-- end:Angular -->

The sample below demonstrates custom grouping by `Date`, where the date values are sorted and grouped by Day, Week, Month or Year based on user-selected grouping mode.

### {Platform} Custom Group By Example


`sample="/{GridSample}/groupby-custom", height="605", alt="{Platform} {GridTitle} custom group by example"`

The sample defines custom sorting for the different date conditions.
Each custom strategy defines the `GroupingComparer` method, which is the custom compare function used when sorting the values. Additionally it extracts the values from the date needed for the comparison.

<!-- WebComponents -->
```typescript
public groupByMode = "Month";
public getParsedDate(date: any) {
    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
}
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
const groupByMode = "Month";
function getParsedDate(date: any) {
    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
}
```
<!-- end: React -->

A `GroupingComparer` function is defined for the grouping expressions, which determines the items belonging to the same group based on the selected grouping mode. Values in the sorted data for which this function returns 0 are marked as part of the same group.

```typescript
grid.groupingExpressions = [
    { fieldName: 'OrderDate', dir: SortingDirection.Desc,
    groupingComparer: (a, b) => {
            const dateA = this.getParsedDate(a);
            const dateB = this.getParsedDate(b);
            if (this.groupByMode === 'Month') {
                return dateA.month === dateB.month ? 0 : -1;
            } else if (this.groupByMode === "Year") {
                return dateA.year === dateB.year ? 0 : -1;
            } else if (this.groupByMode === 'Week') {
                return this.getWeekOfDate(a) === this.getWeekOfDate(b) ? 0 : -1;
            }
            return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
        }
    }
];
```

<!-- end:WebComponents, Angular, React -->

<!-- WebComponents, Blazor, React -->
## Styling


In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- WebComponents -->
```ts
<igc-grid class="grid">
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
function App() {
     return (
        <IgrGrid className="grid">
        </IgrGrid>
    )
}
```
<!-- end: React -->

```razor
<IgbGrid Class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-group-row-background: #969799;
    --ig-grid-group-row-selected-background: #969799;
    --ig-grid-group-label-column-name-text: #f8f8f8;
    --ig-grid-group-label-text: #f8f8f8;
    --ig-grid-group-count-text-color: #222;
    --ig-grid-expand-icon-color: #f8f8f8;
    --ig-grid-expand-icon-hover-color: #f8f8f8;
}
```

### Demo

`sample="/{GridSample}/groupby-styling", height="605", alt="{Platform} {GridTitle} Group By Styling Example"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

The Grid allows styling through the [{ProductName} Theme Library](../themes/styles.md). The grid's theme exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Group By styling.

### Importing Global Theme

To begin the customization of the Group By feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### Defining Custom Theme

Next, create a new theme, that extends the `grid-theme` and accepts the parameters, required to customize the Group By as desired. You also need to extend the `chip-theme`, because it's used in the Group By feature.

```scss

$custom-theme: grid-theme(
    /* Group By properties that affect styling */
    $group-row-background: #494949,
    $group-row-selected-background: #383838,
    $group-label-column-name-text: #f8f8f8,
    $group-label-icon: #FFCD0F,
    $group-label-text: #f8f8f8,
    $group-count-background: #FFCD0F,
    $group-count-text-color: #000,
    $expand-icon-color: #FFCD0F,
    $expand-icon-hover-color: rgb(223, 181, 13),
    $cell-active-border-color: #FFCD0F,
    $row-selected-background: #fff6d3,
    $row-selected-text-color: #000,
    $drop-indicator-color: #FFCD0F
    /* add other features properties here... */
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: chip-theme(
    $background: #494949,
    $text-color: #f8f8f8,
    $hover-text-color: #e7e7e7
);
```

### Defining a Custom Color Palette

In the approach that we described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the `palette` and `color` functions.
`palette` generates a color palette, based on provided primary and secondary colors.

```scss
$black-color: #292826;
$yellow-color: #FFCD0F;

$custom-palette: palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
After a custom palette has been generated, the `color` function can be used to obtain different varieties of the primary and the secondary colors.

```scss
$custom-theme: grid-theme(
    $group-row-background: color($custom-palette, "primary", 300),
    $group-row-selected-background: color($custom-palette, "primary", 400),
    $group-label-column-name-text:contrast-color($custom-palette, "primary", 500),
    $group-label-icon: color($custom-palette, "secondary", 600),
    $group-label-text:contrast-color($custom-palette, "primary", 500),
    $group-count-background: color($custom-palette, "secondary", 600),
    $group-count-text-color: color($custom-palette, "primary", 400),
    $expand-icon-color: color($custom-palette, "secondary", 600),
    $expand-icon-hover-color: color($custom-palette, "secondary", 300),
    $cell-active-border-color: color($custom-palette, "secondary", 600)
);

$custom-chips-theme: chip-theme(
    $background: color($custom-palette, "primary", 300),
    $text-color:contrast-color($custom-palette, "primary", 500),
    $hover-text-color:contrast-color($custom-palette, "primary", 600)
);
```
### Defining Custom Schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/sass/schemas.md). The **schema** is the recipe of a theme.
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_light_grid`.
```scss
$custom-grid-schema: extend($_light-grid,(
    group-row-background: (-color:('secondary', 100)),
    group-row-selected-background: (-color:('primary', 400)),
    group-label-column-name-text: (-color:('primary', 600)),
    group-label-icon: (-color:('primary', 600)),
    group-label-text: (-color:('secondary', 700)),
    group-count-background: (-color:('primary', 600)),
    group-count-text-color: (-color:('secondary', 400)),
    expand-icon-color: (-color:('primary', 600)),
    expand-icon-hover-color: (-color:('primary', 400))
));
```
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.
```scss
$my-custom-schema: extend($light-schema, (
    -grid: $custom-grid-schema
));

$custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

### Applying the Custom Theme

The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include grid($custom-theme);
@include chip($custom-chips-theme);
```

### Scoped Component Theme

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to {Platform}'s [ViewEncapsulation](https://{Platform}.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 > [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 > [!Note]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
        @include chip($custom-chips-theme);
    }
}
```


### Demo

<!-- NOTE this sample is differed -->

`sample="/{GridSample}/groupby-styling", height="570", alt="{Platform} {GridTitle} groupby styling"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end:Angular -->

## Known Limitations

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

## API References

* `Grid`
* `GroupByRow`
* `ISortingExpression`
* `Column`
* `IGroupByExpandState`
* `Chip`

## Additional Resources

* [Grid overview](../data-grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column-moving.md)
* [Summaries](summaries.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})