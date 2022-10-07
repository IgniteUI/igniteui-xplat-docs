---
title: {Platform} {ComponentTitle} Column Resizing - {ProductName}
_description: Start using {Platform} {ComponentTitle} Column Resizing in order to change the grid column width in an instant. {Platform} drag resizing has never been so easy. Try for free!
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform}  {ComponentTitle} Column Resizing Overview

With deferred grid column resizing, the user will see a temporary resize indicator while the {Platform} drag resizing operation is in effect. The new grid column width is applied once the drag operation has ended.

## {Platform}  {ComponentTitle} Column Resizing Example

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-column-resizing" alt="{Platform} {ComponentTitle} Column Resizing Example">
</code-view>

**Column resizing** is also enabled per-column level, meaning that the **{ComponentSelector}** can have a mix of resizable and non-resizable columns. This is done via the `Resizable` input of the `ColumnComponent`.

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```

```razor
<IgbGridColumn Field="ID" Resizable=true Width="100px"></IgbGridColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```

```razor
<IgbGridColumn Field="Artist" Resizable=true></IgbGridColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

You can subscribe to the `ColumnResized` event of the `{ComponentSelector}` to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the `ColumnComponent` object, are exposed through the event arguments.

<!-- ComponentStart: Grid -->

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
<IgbGrid Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbGridColumn Field="ID" Resizable=true Width="100px"></IgbGridColumn>
    <IgbGridColumn Field="CompanyName" Resizable=true Width="100px"></IgbGridColumn>
</IgbGrid>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</igx-tree-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
TO DO!
```

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```
```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

```razor
TO DO!
```

<!-- ComponentEnd: HierarchicalGrid -->

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the Column Resizing feature. By default if a column does not have width set, it fits the available space with width set in pixels.

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
<IgbGrid Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbGridColumn Field="ID" Resizable=true Width="10%"></IgbGridColumn>
    <IgbGridColumn Field="CompanyName" Resizable=true Width="100px"></IgbGridColumn>
    <IgbGridColumn Field="ContactTitle" Resizable=true></IgbGridColumn>
</IgbGrid>
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
TO DO!
```

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```

```razor
TO DO!
```

<!-- ComponentEnd: HierarchicalGrid -->

>[!NOTE]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict Column Resizing

You can also configure the minimum and maximum allowable column widths. This is done via the `MinWidth` and `MaxWidth` inputs of the `ColumnComponent`. In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by `MinWidth` and `MaxWidth`.

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

```razor
<IgbGridColumn Field="ContactTitle" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbGridColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

```razor
<IgbGridColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbGridColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

```razor
<IgbGridColumn Field="ContactTitle" Resizable=true Width="10%" MinWidth="60px" MaxWidth="230px"></IgbGridColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

```razor
<IgbGridColumn Field="Artist" Resizable=true Width="10%" MinWidth="60px" MaxWidth="230px"></IgbGridColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

or

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```

```razor
<IgbGridColumn Field="ID" Resizable=true Width="100px" MinWidth="5%" MaxWidth="15%"></IgbGridColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'15%'"></igx-column>
```

```razor
<IgbGridColumn Field="Artist" Resizable=true Width="100px" MinWidth="5%" MaxWidth="15%"></IgbGridColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Auto-Size Columns on Double Click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case `MaxWidth` is set on that column and the new width exceeds that `MaxWidth` value. In this case the column will be sized according to preset `MaxWidth` value.

You can also auto-size a column dynamically using the exposed `Autosize` method on `ColumnComponent`.

<!-- ComponentStart: Grid, TreeGrid -->

```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: {ComponentName};

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```

```razor
@code {
    private {ComponentName} gridRef;

    protected void OnInitialize()
    {
        IgbGridColumn column = gridRef.Columns.Where((col) => { return col.Field == "ID"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: {ComponentName};

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'Artist')[0];
column.autosize();
```

```razor
@code {
    private {ComponentName} gridRef;

    protected void OnInitialize()
    {
        IgbGridColumn column = gridRef.Columns.Where((col) => { return col.Field == "Artist"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Auto-Size Columns on Initialization

Each column can be set to auto-size on initialization by setting `Width` to 'auto':

```html
<igx-column width='auto'>...
```

```razor
<IgbGridColumn Width="auto"></IgbGridColumn>
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.
This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-columnAutoResizing-sample" alt="{Platform} {ComponentTitle} Column Resizing Example">
</code-view>

## Styling
To get started with the styling of the {ComponentTitle} column resize line, we need to import the index file, where all the theme functions and component mixins live:

<!-- Angular -->

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The simplest approach to achieve this is to create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts many parameters as well as the `$resize-line-color` parameter.

``` scss
$custom-grid-theme: grid-theme(
    $resize-line-color: #0288D1
);

```
 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include grid($custom-grid-theme);
    }
}
```

### Defining a Color Palette
Instead of hard-coding the color values, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the specified primary and secondary color:

```scss
$primary-color: #0288D1;
$secondary-color: #BDBDBD;

$custom-theme-palette: palette($primary: $primary-color, $secondary: $secondary-color);
```

And then, with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color), we can easily retrieve the color from the palette. 

```scss
$custom-grid-theme: grid-theme(
    $palette: $custom-theme-palette,
    $resize-line-color: color($custom-theme-palette, 'secondary', 500)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please, refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas
Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend the predefined schema provided for every component, in this case - [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid) schema:

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

In order to apply our custom schema, we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component theme:

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

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-resize-line-styling" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

<!-- end: Angular -->

## API References

* ColumnComponent
* {ComponentName}

## Additional Resources

* [{ComponentTitle} overview](overview.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
