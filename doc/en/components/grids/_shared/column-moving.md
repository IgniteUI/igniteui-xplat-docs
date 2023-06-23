---
title: Column Reordering & Moving in {Platform} {ComponentTitle} - Infragistics
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the {Platform} Column Moving API. Try {ProductName}!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {ComponentTitle} Column Reordering & Moving

The `{ComponentName}` component in {ProductName} provides the **Column Moving** feature to allow columns reordering via standard drag/drop mouse or touch gestures, or by using the Column Moving API. Column moving works both with pinned and unpinned columns and with [Multi-Column Headers](multi-column-headers.md). Moving a column into the pinned area pins the column and vice versa, moving a column outside of the pinned area unpins the column.

> [!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> [!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

<!-- Angular -->
This allows to attach handlers for any event emitted by the element, otherwise the event is consumed by the `igxDrag` directive.
<!-- end: Angular -->

> [!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total `{ComponentName}` width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

```razor
    public RenderFragment<IgbColumnTemplateContext> headerTemplate = (context) =>
    {
        return @<IgbIcon Collection="fas" IconName="fa-thumbtack" draggable="false" onclick="onClick()"></IgbIcon>;
    };
```

```ts
public headerTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <igc-icon draggable="false" click="${this.onClick()}"></igc-icon>
    `;
}
```

## {Platform} {ComponentTitle} Column Moving Overview Example

`sample="/{ComponentSample}/column-moving-options", height="650", alt="{Platform} {ComponentTitle} Column Moving Overview Example"`



## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the `{ComponentName}` could have either movable or immovable columns. This is done via the `Moving` input of the `{ComponentName}`.

<!-- Angular -->
```html
<{ComponentSelector} [moving]="true"></{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Moving=true></{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} moving="true"></{ComponentSelector}>
```
<!-- end: WebComponents -->

## API

In addition to the drag and drop functionality, the Column Moving feature also provides API methods to allow moving a column/reordering columns programmatically:

`MoveColumn` - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `Position` (representing a `DropPosition` value), which determines whether to place the column before or after the target column.


```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        IgbColumn Col2 = await this.grid.GetColumnByVisibleIndexAsync(1);
        this.Grid.MoveColumn(Col1,Col2, DropPosition.AfterDropTarget);
    }
```


`Move` - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        this.Col1.Move(3);
    }
```

Note that when using the column moving feature, the `ColumnMovingEnd` event will be emitted if the operation was successful. Also note that in comparison to the drag and drop functionality, using the column moving feature does not require setting the `Moving` property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are `ColumnMovingStart`, `ColumnMoving` and `ColumnMovingEnd`.

You can subscribe to the `ColumnMovingEnd` event of the `{ComponentName}` to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

<!-- Angular -->
```html
<{ComponentSelector} #dataGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" ></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="dataGrid" auto-generate="false" moving="true">
    <igc-column field="Category"></igx-column>
    <igc-column field="Change On Year(%)" data-type="Number" ></igx-column>
</{ComponentSelector}>
```

```typescript
constructor() {
    var dataGrid = this.dataGrid = document.getElementById('dataGrid') as {ComponentName}Component;
    dataGrid.data = this.data;
    dataGrid.addEventListener("columnMovingEnd", this.onColumnMovingEnd);
}
```
<!-- end: WebComponents -->

```typescript
public onColumnMovingEnd(event) {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}
```

```razor
    <{ComponentSelector} ShowGroupArea="true" @ref='Grid' Width="100%" Height="100%"
             AllowFiltering=true
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate=true
             Data=northwindEmployees
             DisplayDensity="DisplayDensity.Compact"
             Moving="true"
             ColumnMovingEndScript='onColumnMovingEnd'>
    </{ComponentSelector}>
```

```razor
igRegisterScript("onColumnMovingEnd", (event) => {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}, false);
```

<!-- Angular -->

## Styling

To get started with styling the `{ComponentName}` column moving headers, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the `$ghost-header-background`, `$ghost-header-text-color` and the `$ghost-header-icon-color` parameters.

```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: grid-theme(
    $ghost-header-text-color: #F4D45C,
    $ghost-header-background: #575757,
    $ghost-header-icon-color: #f4bb5c
);
```

The last step is to **include** the component mixins with its respective theme:

```scss
@include grid($dark-grid-column-moving-theme);
```

> [!Note]
> Depending on the component [**View Encapsulation**](/components/themes/sass/component-themes.html#view-encapsulation) strategy, it may be necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
    ::ng-deep {
        @include grid($dark-grid-column-moving-theme);
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.


**igx-palette** generates a color palette based on the primary and secondary colors that are passed:
```scss
$yellow-color: #F4D45C;
$black-color: #575757;

$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```

And then with [**igx-color**]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the pallete.

```scss
$dark-grid-column-moving-theme: grid-theme(
    $palette: $dark-palette,
    $ghost-header-text-color: color($dark-palette, "primary", 400),
    $ghost-header-background: color($dark-palette, "secondary", 200),
    $ghost-header-icon-color: color($dark-palette, "primary", 500)
);
```


> [!Note]
> Thecolor andpalette are powerful functions for generating and retrieving colors. Please refer to [Palettes](/components/themes/palettes.html) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [schemas](/components/themes/sass/schemas.html). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid).

```scss
// Extending the dark grid schema
$dark-grid-column-moving-schema: extend($_light-grid,
        (
            ghost-header-text-color:(
               color: ("primary", 400)
            ),
            ghost-header-background:(
               color: ("secondary", 200)
            ),
            ghost-header-icon-color:(
               color: ("primary", 500)
            )
        )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component theme:

```scss
// Extending the global dark-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $dark-grid-column-moving-schema,
));

// Defining dark-grid-theme with the global dark schema
$dark-grid-column-moving-theme: grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

Don't forget to include the theme in the same way as it was demonstrated above.

### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/column-moving-styles", height="650", alt="{Platform} {ComponentTitle} Grid Moving Styled Example"`



> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

<!-- WebComponents, Blazor -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).

In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

Then set the related CSS properties to this class:

```css
.grid {
    --igx-grid-ghost-header-text-color: #f4d45c;
    --igx-grid-ghost-header-background: #ad9d9d;
    --igx-grid-ghost-header-icon-color: #f4d45c;
}
```
### Demo

`sample="/{ComponentSample}/column-moving-styles", height="650", alt="{Platform} {ComponentTitle} Grid Moving Styled Example"`

<!-- end: WebComponents, Blazor -->

## API References

* `Column`
* `{ComponentName}`

## Additional Resources

<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Searching](search.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})