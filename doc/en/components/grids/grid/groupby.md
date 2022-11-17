---
title: {Platform} Grid Group By | Group by multiple fields | Infragistics
_description: Configure group by that allows visualizing of data records in {Platform} Material table, visualize the grouped data in separate and convenient column group.
_keywords: {Platform}, Grid, {ProductName}, group by, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid']
---

# {Platform} Grid Group By

A Group By behavior in an {Platform} Material table or UI grid creates grouped data rows based on the column values. The Group By in the `{GridName}` allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API. When Row Selection is enabled, a Group By row selector is rendered in the left-most area of the group row. In case the `RowSelection` property is set to single, checkboxes are disabled and only serve as an indication for the group where selection is placed. If the `RowSelection` property is set to multiple, clicking over the Group By row selector selects all records belonging to this group.

## {Platform} Grid Group By Example
This example presents the grouping capabilities of a large amount of data. Dragging the column headers to the top (grouping area) allows users to see the data for the selected column in a hierarchical structure. They can do group by in multiple fields by dragging more column headers to the top. These grouping options come in handy when you have tables with numerous rows and columns where users want to present the data in a much faster and visually acceptable way.


<code-view style="height:605px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-expressions"
           alt="{Platform} {ComponentTitle} Group By Example">
</code-view>


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
connectedCallback() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: WebComponents -->

Grouping expressions implement the `ISortingExpression` interface.

## Group By API

### Grouping API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's `Groupable` property to `true`.

```html
<-grid [data]="data">
    <-column *ngFor="let c of columns" [field]="c.field" [groupable]="true">
    </-column>
</-grid>
```

<!-- Angular -->
```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
connectedCallback() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```

During runtime the expressions are gettable and settable from the `groupingExpressions` property. If you need to add or change an existing expression you may also use the `GroupBy` method with either a single or an array of `ISortingExpression`.

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

<!-- Angular -->

> Note: Up until now, grouping/sorting worked in conjuction with each other. In 13.2 version, a new behavior which decouples gropuing from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

<!-- end: Angular -->

### Expand/Collapse API

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the `{GridName}` component `GroupingExpansionState`. A group row is uniquely identified based on the field name it is created for and the value it represents for each level of grouping. This means that the signature of an expansion state interface is the following:

```typescript
export interface IGroupByKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupByKey>;
    expanded: boolean;
}
```

As with `GroupingExpressions`, setting a list of `IGroupByExpandState` directly to the `GroupingExpansionState` will change the expansion accordingly. Additionally `{GridName}` exposes a method that toggles a group by the group record instance.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.toggleGroup(groupRow);
    groupRow.expanded = false;
```

Groups can be created expanded (***default***) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the `GroupsExpanded` property.

### Select/Deselect All Rows in a Group API

Selecting/Deselecting all rows in a group is available through the `SelectRowsInGroup` and `DeselectRowsInGroup` API methods.

The code snippet below can be used to select all rows within a group using the group record instance `SelectRowsInGroup` method. Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.selectRowsInGroup(groupRow);
```

If you need to deselect all rows within a group programmatically, you can use the `DeselectRowsInGroup` method.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.deselectRowsInGroup(groupRow);
```

## Templating

### Group Row Templates

The group row except for the expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The grouping record template is rendered against has the following signature:

```typescript
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
}
```

As an example, the following template would make the group rows summary more verbose:

```html
<ng-template GroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

```ts
public groupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {
    return html`<span>Total items with value: ${ ctx.value } are ${ ctx.records.length }</span>`;
}
```

### Group Row Selector Templates

As mentioned above the group row except for the expand/collapse UI is fully templatable. To create a custom Group By row selector template within the Grid, declare an `<ng-template>` with `GroupByRowSelector` directive. From the template, you can access the implicitly provided context variable, with properties that give you information about the Group By row's state.

The `SelectedCount` property shows how many of the group records are currently selected while `TotalCount` shows how many records belong to the group.

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    {{ groupByRowContext.selectedCount }} / {{ groupByRowContext.totalCount  }}
</ng-template>
```

```ts
public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateDetails) => {
    return html`
        ${ ctx.selectedCount } / ${ ctx.totalCount  }
    `;
}
```

The `GroupRow` property returns a reference to the group row.

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    <div (click)="handleGroupByRowSelectorClick($event, groupByRowContext.groupRow)">Handle groupRow</div>
</ng-template>
```

```ts
public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateDetails) => {
    return html`
        <div onClick="${ handleGroupByRowSelectorClick($event, groupByRowContext.groupRow) }">Handle groupRow</div>
    `;
}
```

The `SelectedCount` and `TotalCount` properties can be used to determine if the Group By row selector should be checked or indeterminate (partially selected).

```html
<-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template GroupByRowSelector let-context>
        <-checkbox
            [checked]=" context.selectedCount > 0 && context.selectedCount === context.totalCount"
            [indeterminate]="context.selectedCount > 0 && context.selectedCount !== context.totalCount">
        </-checkbox>
    </ng-template>
</-grid>
```

## {Platform} Grid Group By With Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

### {Platform} Group By With Paging Example


<code-view style="height:605px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-paging"
           alt="{Platform} {ComponentTitle} group by with paging example">
</code-view>


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

## {Platform} Grid Custom Group By

Grid allows defining custom grouping per column or per grouping expression, which provides grouping based on a custom condition. This is useful when you need to group by complex objects or for other application specific scenarios.

> [!NOTE]
> In order to implement custom grouping the data first needs to be sorted appropriately. Due to this you may also need to apply a custom sorting strategy that extends the base `DefaultSortingStrategy`. After the data is sorted the custom groups can be determined by specifying a `GroupingComparer` for the column or for the specific grouping expression.

The sample below demonstrates custom grouping by `Date`, where the date values are sorted and grouped by Day, Week, Month or Year based on user-selected grouping mode.

### {Platform} Custom Group By Example


<code-view style="height:605px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-custom-coming-soon"
           alt="{Platform} {ComponentTitle} custom group by example">
</code-view>


The sample defines custom sorting strategies for the different date conditions.
Each custom strategy extends the base `DefaultSortingStrategy` and defines the `CompareValues` method, which is the custom compare function used when sorting the values. Additionally it extracts the values from the date needed for the comparison.

```typescript
class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : 0;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : dateA.day < dateB.day ?
            -1 : dateA.day > dateB.day ?
            1 : 0;
    }
}

class WeekSortingStrategy extends BaseSortingStrategy {

    public getWeekOfDate(a: any) {
       return parseInt(new DatePipe("en-US").transform(a, 'w'), 10);
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        const weekA = this.getWeekOfDate(a);
        const weekB = this.getWeekOfDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : weekA < weekB ?
            -1 : weekA > weekB ?
            1 : 0;
    }
}
```

A `GroupingComparer` function is defined for the grouping expressions, which determines the items belonging to the same group based on the selected grouping mode. Values in the sorted data for which this function returns 0 are marked as part of the same group.

```typescript
 groupingComparer: (a, b) => {
    const dateA = this.sortingStrategy.getParsedDate(a);
    const dateB = this.sortingStrategy.getParsedDate(b);
    if (this.groupByMode === 'Month') {
        return dateA.month === dateB.month ? 0 : -1;
    } else if (this.groupByMode === "Year") {
        return dateA.year === dateB.year ? 0 : -1;
    } else if (this.groupByMode === "Week") {
        return this.sortingStrategy.getWeekOfDate(a) === this.sortingStrategy.getWeekOfDate(b) ? 0 : -1;
    }
    return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
}
```

<!-- Angular -->
## Styling

The Grid allows styling through the [Ignite UI for {Platform} Theme Library](../themes/sass/component-themes.md). The grid's theme exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Group By styling.

### Importing Global Theme

To begin the customization of the Group By feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to Ignite UI for {Platform} version 13 use:
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

 >[!NOTE]
 >If the component is using an [Emulated](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
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

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-styling" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end:Angular -->

## Known Limitations

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

## API References

* `{GridName}`
* `GroupByRow`
* `GridComponent Styles`
* `ISortingExpression`
* `ColumnComponent`
* `IGroupByExpandState`
* `ChipComponent`
* `ChipComponent Styles`

## Additional Resources

* [Grid overview](grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column-moving.md)
* [Summaries](summaries.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})