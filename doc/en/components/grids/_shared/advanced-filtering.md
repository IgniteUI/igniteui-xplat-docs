---
title: Advanced Filtering in {Platform} {ComponentTitle} for {ProductName}
_description: Learn how to configure advanced filter of data with the {Platform} {ComponentTitle}. The grid advanced filtering is more convenient and engaging than ever.
_keywords: Advanced Filtering, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---


# {Platform} {ComponentTitle} Advanced Filtering

The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any {Platform} table like the `{ComponentName}`.

## {Platform} {ComponentTitle} Advanced Filtering Example

`sample="/{ComponentSample}/advanced-filtering-options", height="530", alt="{Platform} {ComponentTitle} Advanced Filtering Example"`

## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. If no advanced filter is applied, you should start with creating a group of filtering conditions linked with **AND** or **OR**. After that, you can add filtering conditions or sub-groups.

In order to add a filtering condition, you have to select any of the `Filterable` columns, an operand based on the column `DataType` and a value if the operand is not unary. Once the condition is committed, a chip with the condition information appears. By hovering or clicking the chip, you have the options to modify it or add another condition or group right after it.

If you select more than one filtering condition chip, a context menu appears with options to create a group or delete the filters. If you choose to create a group with the selected conditions, the newly created group will appear where the topmost selected condition was placed.

In order to select a group, you can also click on its vertical line, which is colored based on the the linking condition **AND** or **OR**. If a single group is selected, you get a context menu with options to change its filtering logic, ungroup or delete it.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the `AllowAdvancedFiltering` input property should be set to **true**.

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</{ComponentSelector}>
```
<!-- end: Angular -->
```razor
<{ComponentSelector} Data=data AutoGenerate="true" AllowAdvancedFiltering="true">
    <IgbGridToolbar></IgbGridToolbar>
</{ComponentSelector}>
```
<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="true" allow-advanced-filtering="true">
    <igc-grid-toolbar></igc-grid-toolbar>
</{ComponentSelector}>
```
```ts
constructor() {
    let grid = (document.getElementById("grid") as IgcGridComponent);
    grid.data = this.data
}
```
<!-- end: WebComponents -->
<!-- React -->
```html
<{ComponentSelector} data={this.nwindData} autoGenerate="false" ref={this.gridRef} allowAdvancedFiltering="true">
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarAdvancedFilering></IgrGridToolbarAdvancedFilering>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</{ComponentSelector}>
```
<!-- end: React -->

<!-- React -->
```tsx
<{ComponentSelector} data={nwindData} autoGenerate="false" ref={gridRef} allowAdvancedFiltering="true">
    <IgrGridToolbar></IgrGridToolbar>
</{ComponentSelector}>
```
<!-- end: React -->

The advanced filtering generates a `FilteringExpressionsTree` which is stored in the `AdvancedFilteringExpressionsTree` input property. You could use the `AdvancedFilteringExpressionsTree` property to set an initial state of the advanced filtering.

<!-- Angular -->

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);

    this.@@igObjectRef.advancedFilteringExpressionsTree = tree;
}
```

<!-- end: Angular -->

<!-- WebComponents -->
```typescript
connectedCallback(): void {
    const tree = new IgcFilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('contains'),
        searchVal: 'cha',
        ignoreCase: true
    });
    const subTree = new IgcFilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'Chan',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    grid.advancedFilteringExpressionsTree = tree;
}
```
<!-- end: WebComponents -->

<!-- React -->
<!--```typescript
This code snippet cannot currently be achieved in React
componentDidMount() {
    const tree = new IgrFilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: new IgrStringFilteringOperand.condition('contains'),
        searchVal: 'cha',
        ignoreCase: true
    });
    const subTree = new IgrFilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: new IgrStringFilteringOperand.condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: new IgrStringFilteringOperand.condition('startsWith'),
        searchVal: 'Chan',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    gridRef.current.advancedFilteringExpressionsTree = tree;
}
```-->
<!-- end: React -->


In case you don't want to show the `{ComponentName}` toolbar, you could use the `OpenAdvancedFilteringDialog` and `CloseAdvancedFilteringDialog` methods to open and close the advanced filtering dialog programmatically.

> [!Note]
> You can enable both the **QuickFilter**/**ExcelStyleFilter** and the advanced filtering user interfaces in the `{ComponentName}`. Both filtering user interfaces will work independently of one another. The final filtered result in the `{ComponentName}` is the intersection between the results of the two filters.

<!-- Angular -->
## External Advanced Filtering

As you see in the demo above, the advanced filtering dialog is hosted in an overlay on top of the `{ComponentName}`. When the setup in the dialog is ready, the apply or close actions will hide that dialog. There is a way to make that dialog remain visible, and that is to use it as a standalone component. In the demo below, the advanced filtering dialog is declared separately of the `{ComponentName}`.

### Demo

`sample="/{ComponentSample}/external-advanced-filtering", height="750", alt="{Platform} {ComponentTitle} external advanced filtering"`


### Usage

It's super easy to configure the advanced filtering to work outside of the `{ComponentName}`. All you need to do is to create the dialog and set its **grid** property:

```html
<igx-advanced-filtering-dialog [grid]="grid1">
</igx-advanced-filtering-dialog>
```

```razor
<IgbAdvancedFilteringDialog Grid=grid1>
</IgbAdvancedFilteringDialog>
```

```html
<igc-advanced-filtering-dialog grid="grid1">
</igc-advanced-filtering-dialog>
```

<!-- end: Angular -->
<!-- Angular -->

## Styling

To get started with styling the Advanced Filtering dialog, we need to import the **index** file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The advanced filtering dialog takes its background color from the grid's theme, using the **filtering-row-background** parameter. In order to change the background we need to create a custom theme:

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);
```

Since we have other components inside the advanced filtering dialog, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: button-theme(
    $disabled-color: gray,

);

$custom-button-group: button-group-theme(
    $item-background:  #292826,

);

$custom-input-group: input-group-theme(
    $box-background: #4a4a4a,

);

$custom-chip: chip-theme(
    $background: #FFCD0F,

);

$custom-drop-down: drop-down-theme(
    $background-color: #292826,

);
```

In this example we only changed some of the parameters for the listed components, but the [button-theme]({environment:sassApiUrl}/index.html#function-button-theme), [button-group-theme]({environment:sassApiUrl}/index.html#function-button-group-theme), [chip-theme]({environment:sassApiUrl}/index.html#function-chip-theme), [drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme), [input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also add some styles for other elements inside the advanced filtering dialog.

```scss
@include grid($custom-grid);
igx-advanced-filtering-dialog {
    @include button($custom-button);
    @include button-group($custom-button-group);
    @include input-group($custom-input-group);
    @include chip($custom-chip);
    @include drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-advanced-filter__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

> [!Note]
>We scope most of the components' mixins within `igx-advanced-filtering-dialog`, so that these custom themes will affect only components nested in the advanced filtering dialog. Otherwise, other buttons, chips, inputs and dropdowns in the application would be affected too.

> [!Note]
>If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include grid($custom-grid);
        igx-advanced-filtering-dialog {
            @include button($custom-button);
            @include button-group($custom-button-group);
            @include input-group($custom-input-group);
            @include chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-advanced-filter__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```
And then with [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-grid: grid-theme(
    $filtering-row-background: color($dark-palette, "secondary", 400)
);

$custom-button: button-theme(
    $disabled-color: color($dark-palette, "secondary", 100),

);

$custom-button-group: button-group-theme(
    $item-background: color($dark-palette, "secondary", 400),

);

$custom-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 200),

);

$custom-chip: chip-theme(
    $background: color($dark-palette, "primary", 400),

);

$custom-drop-down: drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),

);
```

> [!Note]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid), [light-button]({environment:sassApiUrl}/index.html#variable-_light-button), [light-button-group]({environment:sassApiUrl}/index.html#variable-_light-button-group), [light-chip]({environment:sassApiUrl}/index.html#variable-_light-chip), [light-input-group]({environment:sassApiUrl}/index.html#variable-_light-input-group) and [light-drop-down]({environment:sassApiUrl}/index.html#variable-_light-drop-down) schemas:

```scss
$grid-dark-palette: palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
           color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
           color: ("secondary", 100)
        ),

    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
           color: ("secondary", 400)
        ),

    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 200)
        ),

    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
           color: ("primary", 400)
        ),

    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),

    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-grid: grid-theme(
    $palette: $grid-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/advanced-filtering-style", height="530", alt="{Platform} {ComponentTitle} advanced filtering style"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```

```tsx
<{ComponentName} className="grid"></{ComponentName}>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-background-or: #d83434;
}
```
### Demo

`sample="/{ComponentSample}/advanced-filtering-style", height="530", alt="{Platform} {ComponentTitle} advanced filtering style"`

<!-- end: WebComponents, Blazor, React -->

## API References

* `Column`
* `{ComponentName}`

## Additional Resources

<!-- ComponentStart:  Grid -->
* [Filtering](filtering.md)
* [Excel Style Filtering](excel-style-filtering.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
