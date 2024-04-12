---
title: {Platform} {ComponentTitle} Column Resizing - {ProductName}
_description: Start using {Platform} {ComponentTitle} Column Resizing in order to change the grid column width in an instant. {Platform} drag resizing has never been so easy. Try for free!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform}  {ComponentTitle} Column Resizing Overview

The {ProductName} Column Resizing feature in {Platform} {ComponentTitle} allows users to easily adjust the width of the columns of the `{ComponentName}`. By default, they will see a temporary resize indicator while the drag resizing operation is in effect. There are several resizing options available - Resizing Columns in Pixels/Percentages, Restrict Column Resizing, Auto-Size Columns on Double Click, and Auto-Size Columns on Initialization.

## {Platform}  {ComponentTitle} Column Resizing Example

`sample="/{ComponentSample}/column-resizing", height="550", alt="{Platform} {ComponentTitle} Column Resizing Example"`



**Column resizing** is also enabled per-column level, meaning that the `{ComponentName}` can have a mix of resizable and non-resizable columns. This is done via the `Resizable` input of the `Column`.

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```

```razor
<IgbColumn Field="ID" Resizable=true Width="100px"></IgbColumn>
```

```html
<igc-column field="ID" width="100px" resizable="true"></igc-column>
```

```tsx
<IgrColumn field="ID" resizable="true" width="100px"></IgrColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```

```razor
<IgbColumn Field="Artist" Resizable=true></IgbColumn>
```

```html
<igc-column field="Artist" resizable="true"></igc-column>
```

```tsx
<IgrColumn field="Artist" resizable="true"></IgrColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

You can subscribe to the `ColumnResized` event of the `{ComponentName}` to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the `Column` object, are exposed through the event arguments.

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="false">
    <igc-column field="ID" width="100px" resizable="true"></igc-column>
    <igc-column field="CompanyName" width="100px" resizable="true"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid1.data = this.data;
    grid1.columnResized = this.onResize;
}

public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}

```
<!-- end: WebComponents -->

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="ID" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="CompanyName" Resizable=true Width="100px"></IgbColumn>
</{ComponentSelector}>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

```tsx
function onResize(grid: IgrGridBaseDirective, event: IgrColumnMovingEventArgs) {
  IgrColumn col = event.detail.column;
  string pWidth = event.detail.prevWidth;
  string nWidth = event.detail.newWidth;
}

<{ComponentSelector} id="grid" autoGenerate="false" columnResized={onResize}>
    <IgrColumn field="ID" width="100px" resizable="true"></IgrColumn>
    <IgrColumn field="CompanyName" width="100px" resizable="true"></IgrColumn>
</{ComponentSelector}>
```

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</{ComponentSelector}>
```
<!-- end:Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="treeGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID">
    <igc-column field="Title" width="100px" resizable="true" width="100px"></igc-column>
    <igc-column field="HireDate" width="100px" resizable="true" width="100px"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    treeGrid.data = this.data;
    treeGrid.columnResized = this.onResize;
}
```
<!-- end: WebComponents -->

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize" PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumn Field="Title" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="HireDate" Resizable=true Width="100px"></IgbColumn>
</{ComponentSelector}>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

<!-- Angular -->
```html
<{ComponentSelector} class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="Artist" [resizable]="true"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="hierarchicalGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID"
    height="600px" width="100%">
    <igc-column field="Artist" resizable="true"></igc-column>
</{ComponentSelector}>
```

```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    hierarchicalGrid.data = this.data;
    hierarchicalGrid.columnResized = this.onResize;
}

public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
<!-- end: WebComponents -->

```tsx
function onResize(grid: IgrGridBaseDirective, event: IgrColumnMovingEventArgs) {
  IgrColumn col = event.detail.column;
  string pWidth = event.detail.prevWidth;
  string nWidth = event.detail.newWidth;
}

<{ComponentSelector} id="hierarchicalGrid" autoGenerate="false" columnResized={onResize}>
    <IgrColumn field="Artist" resizable="true"></IgrColumn>
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="Artist" Resizable=true></IgbColumn>
</{ComponentSelector}>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the **Column Resizing** feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

<!-- ComponentStart: Grid -->

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="ID" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="CompanyName" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="ContactTitle" Resizable=true></IgbColumn>
</{ComponentSelector}>
```

```html
<igc-grid id="grid" auto-generate="false">
    <igc-column field="ID" width="10%" resizable="true"></igc-column>
    <igc-column field="CompanyName" width="100px" resizable="true"></igc-column>
    <igc-column field="ContactTitle" resizable="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid id="grid" autoGenerate="false">
    <IgrColumn field="ID" width="10%" resizable="true"></IgrColumn>
    <IgrColumn field="CompanyName" width="100px" resizable="true"></IgrColumn>
    <IgrColumn field="ContactTitle" resizable="true"></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```

```razor
<{ComponentSelector} Data=data AutoGenerate=false ColumnResized="onResize" PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumn Field="Title" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="HireDate" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="Age" Resizable=true></IgbColumn>
</{ComponentSelector}>
```

```html
<igc-tree-grid id="data" primary-key="ID" foreign-key="ParentID" auto-generate="false">
    <igc-column field="Title" resizable="true" width="10%"></igc-column>
    <igc-column field="HireDate" resizable="true" width="100px"></igc-column>
    <igc-column field="Age" data-type="Number" resizable="true"></igc-column>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
</igx-hierarchical-grid>
```

```html
<igc-hierarchical-grid id="hierarchicalGrid" class="hgrid" auto-generate="false"
        height="600px" width="100%">
        <igc-column field="Artist" resizable="true" width="10%"></igc-column>
        <igc-column field="GrammyNominations" resizable="true" width="100px"></igc-column>
        <igc-column field="GrammyAwards" resizable="true"></igc-column>
</igc-hierarchical-grid>
```

```razor
<{ComponentSelector} Data=data ColumnResized="onResize" AutoGenerate=false Height="600px" Width="100%">
    <IgbColumn Field="Artist" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="GrammyNominations" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="GrammyAwards" Resizable=true></IgbColumn>
</{ComponentSelector}>
```

```tsx
<{ComponentSelector} id="hierarchicalGrid" columnResized={onResize} autoGenerate="false"
    height="600px" width="100%">
    <IgrColumn field="Artist" resizable="true" width="10%"></IgrColumn>
    <IgrColumn field="GrammyNominations" resizable="true" width="100px"></IgrColumn>
    <IgrColumn field="GrammyAwards" resizable="true"></IgrColumn>
</{ComponentSelector}>
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict Column Resizing

You can also configure the minimum and maximum allowable column widths. This is done via the `MinWidth` and `MaxWidth` inputs of the `Column`. In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by `MinWidth` and `MaxWidth`.

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
```html
<igc-column field="ID" width="100px" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

```tsx
<IgrColumn field="ID" width="100px" resizable="true"
            minWidth="60px" maxWidth="230px"></IgrColumn>
```

```razor
<IgbColumn Field="ContactTitle" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

```html
<igc-column field="Artist" width="100px" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

```tsx
<IgrColumn field="Artist" width="100px" resizable="true"
            minWidth="60px" maxWidth="230px"></IgrColumn>
```

```razor
<IgbColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
```html
<igc-column field="ID" width="10%" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

```tsx
<IgrColumn field="ID" width="10%" resizable="true"
            minWidth="60px" maxWidth="230px"></IgrColumn>
```

```razor
<IgbColumn Field="ContactTitle" Resizable=true Width="10%" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

```html
<igc-column field="Artist" width="100px" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

```tsx
<IgrColumn field="Artist" width="100px" resizable="true"
            minWidth="60px" maxWidth="230px"></IgrColumn>
```

```razor
<IgbColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

or

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```
```html
<igc-column field="ID" width="100px" resizable="true"
            min-width="5%" max-width="15%"></igc-column>
```

```tsx
<IgrColumn field="ID" width="100px" resizable="true"
            minWidth="5%" maxWidth="15%"></IgrColumn>
```

```razor
<IgbColumn Field="ID" Resizable=true Width="100px" MinWidth="5%" MaxWidth="15%"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'15%'"></igx-column>
```

```html
<igc-column field="Artist" width="100px" resizable="true"
            min-width="60px" max-width="15%"></igc-column>
```

```tsx
<IgrColumn field="Artist" width="100px" resizable="true"
            minWidth="60px" maxWidth="15%"></IgrColumn>
```

```razor
<IgbColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="15%"></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Auto-Size Columns on Double Click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case `MaxWidth` is set on that column and the new width exceeds that `MaxWidth` value. In this case the column will be sized according to preset `MaxWidth` value.

You can also auto-size a column dynamically using the exposed `Autosize` method on `Column`.

<!-- ComponentStart: Grid, TreeGrid -->

<!-- Angular -->
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: {ComponentName};

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```
<!-- end: Angular -->

```typescript
constructor() {
    var id = this.id = document.getElementById('ID') as IgcColumnComponent;
    id.autosize();
}
```

```tsx
    const column = grid.getColumnByName('ID');
    column.autosize();
```

```razor
@code {
    private {ComponentSelector} gridRef;

    private void AutosizeColumn()
    {
        IgbColumn column = gridRef.Columns.Where((col) => { return col.Field == "ID"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

<!-- Angular -->
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: {ComponentName};

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'Artist')[0];
column.autosize();
```
<!-- end: Angular -->

```typescript
constructor() {
    var column = this.column = document.getElementById('Artist') as IgcColumnComponent;
    column.autosize();
}
```

```tsx
const column = grid.getColumnByName('Artist');
column.autosize();
```

```razor
@code {
    private {ComponentSelector} gridRef;

    private void AutosizeColumn()
    {
        IgbColumn column = gridRef.Columns.Where((col) => { return col.Field == "Artist"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Auto-Size Columns on Initialization

Each column can be set to auto-size on initialization by setting `Width` to 'auto':

```html
<igx-column width='auto'>
```

```html
<igc-column width='auto'>
```

```tsx
<IgrColumn width='auto'>
```

```razor
<IgbColumn Width="auto"></IgbColumn>
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.

This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

`sample="/{ComponentSample}/column-auto-sizing", height="550", alt="{Platform} {ComponentTitle} Column Resizing Example"`

<!-- Angular -->

## Styling

To get started with the styling of the `{ComponentName}` column resize line, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The simplest approach to achieve this is to create a new theme that extends the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts many parameters as well as the `$resize-line-color` parameter.

```scss
$custom-grid-theme: grid-theme(
    $resize-line-color: #0288D1
);
```
 > [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include grid($custom-grid-theme);
    }
}
```

### Defining a Color Palette
Instead of hard-coding the color values, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the specified primary and secondary color:

```scss
$primary-color: #0288D1;
$secondary-color: #BDBDBD;

$custom-theme-palette: palette($primary: $primary-color, $secondary: $secondary-color);
```

And then, with [igx-color]({environment:sassApiUrl}/index.html#function-igx-color), we can easily retrieve the color from the palette.

```scss
$custom-grid-theme: grid-theme(
    $palette: $custom-theme-palette,
    $resize-line-color: color($custom-theme-palette, 'secondary', 500)
);
```

> [!Note]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please, refer to [Palettes](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas
Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend the predefined schema provided for every component, in this case - [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid) schema:

```scss
// Extending the light grid schema
$light-grid-schema: extend($_light-grid,
    (
        resize-line-color: (
           color: ('secondary', 500)
            ),
        header-background: (
           color: ("primary", 100)
            ),
        header-text-color: (
           color: ("primary", 600)
            )
    )
);
```

In order to apply our custom schema, we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component theme:

```scss
// Extending the global light-schema
$custom-light-grid-schema: extend($light-schema,(
    igx-grid: $light-grid-schema
));

// Specifying the palette and schema of the custom grid theme
$custom-grid-theme: grid-theme(
    $palette: $custom-theme-palette,
    $schema: $custom-light-grid-schema
);
```
Don't forget to include the theme in the same way as it was demonstrated above.

### Demo

`sample="/{ComponentSample}/column-resize-styling", height="550", alt="{Platform} {ComponentTitle} column resize styling"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change the color of the resize handle, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

Then set the related CSS property for that class:

```css
.grid {
    --ig-grid-resize-line-color: #f35b04;
}
```

### Demo

`sample="/{ComponentSample}/column-resize-styling", height="550", alt="{Platform} {ComponentTitle} Column Resizing Styling Example"`

<!-- end: WebComponents, Blazor, React -->


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
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
