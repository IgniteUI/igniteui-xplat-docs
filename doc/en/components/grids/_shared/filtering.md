---
title: Filtering in {Platform} {ComponentTitle} - {ProductName}
_description: Start using angular filter to return specific data with {Platform} {ComponentTitle}. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: filter, {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Filtering

The {Platform} `{ComponentTitle}` component provides three different filtering types - Quick filtering, [Excel Style Filtering](excel-style-filtering.md) and [Advanced Filtering](advanced-filtering.md) which enable you to display only the records that meet specified criteria. The `{ComponentTitle}` component in {Platform} provides filtering capabilities and extensive filtering API through the data container to which the `{ComponentTitle}` is bound.

## {Platform} {ComponentTitle} Filtering Example

The sample below demonstrates `{ComponentTitle}`'s **Quick filtering** user experience.

<code-view style="height:500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-filtering"
           github-src="{ComponentSample}/filtering"
           alt="{Platform} {ComponentTitle} Filtering Example">
</code-view>

## Setup

In order to specify if filtering is enabled and which filtering mode should be used, the `{ComponentTitle}` exposes the following properties - `AllowFiltering`, `AllowAdvancedFiltering`, `FilterMode` and `Filterable`.

Property `AllowFiltering` enables you to specify the following options:
- **false** - the filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the filtering for the corresponding grid will be enabled.

Property `AllowAdvancedFiltering` enables you to specify the following options:
- **false** - the advanced filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the advanced filtering for the corresponding grid will be enabled.

Property `FilterMode` enables you to specify the following options:
- **QuickFilter** - a simplistic filtering UI. This is the default value.
- **ExcelStyleFilter** - an Excel-like filtering UI.

Property `Filterable` enables you to specify the following options:
- **true** - the filtering for the corresponding column will be enabled. This is the default value.
- **false** - the filtering for the corresponding column will be disabled.

```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
<{ComponentSelector}>
```

```razor
<IgbGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String1"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbGrid>
```

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the `AllowAdvancedFiltering` input property to **true**.

```html
<{ComponentSelector}  [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</{ComponentSelector}>
```

```razor
<IgbGrid Data=data AutoGenerate=true AllowAdvancedFiltering=true />
```

>[!NOTE]
>You can enable both the `QuickFilter` or `ExcelStyleFilter` and the advanced filtering user interfaces in the `{ComponentTitle}`. Both filtering user interfaces will work independently of one another. The final filtered result in the `{ComponentTitle}` is the intersection between the results of the two filters.

## Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For *number* and *date* columns 'Equals' is selected by default, for *string* - 'Contains' and for *boolean* - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

## Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The `{ComponentTitle}` currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set `DataType` of the column, the correct set of **filtering operations** is loaded inside the filter UI dropdown. Additionally, you can set the `IgnoreCase` and the initial `Condition` properties.

The filtering feature is enabled for the `{ComponentTitle}` component by setting the `AllowFiltering` input to **true**. The default `FilterMode` is `QuickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the `Filterable` input to **false**.

<!-- ComponentStart: Grid, TreeGrid -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]="true"></igx-column>
    <igx-column field="Photo" [filterable]="false"></igx-column>
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

```razor
<IgbGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String1"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbGrid>
```

> [!NOTE]
> If values of type *string* are used by a column of data type *date*, the `{ComponentTitle}` won't parse them to *date* objects and using filtering conditions won't be possible. If you want to use *string* objects, additional logic should be implemented on the application level, in order to parse the values to *date* objects.

You can filter any column or a combination of columns through the `{ComponentTitle}` API. The `{ComponentTitle}` exposes several methods for this task - `Filter`, `FilterGlobal` and `ClearFilter`.

*   `Filter` - filter a single column or a combination of columns.

There are five filtering operand classes exposed:
   - `FilteringOperand`: this is a base filtering operand, which can be inherited when defining custom filtering conditions.
   - `BooleanFilteringOperand` defines all default filtering conditions for *boolean* type.
   - `NumberFilteringOperand` defines all default filtering conditions for *numeric* type.
   - `StringFilteringOperand` defines all default filtering conditions for *string* type.
   - `DateFilteringOperand` defines all default filtering conditions for *date* type.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```

The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.

> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the `{ComponentTitle}`.

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```

* `FilterGlobal` - clears all existing filters and applies the new filtering condition to all {ComponentTitle}'s columns.

```typescript
// Filter all cells for a value which contains `myproduct`
this.@@igObjectRef.filteringLogic = FilteringLogic.Or;
this.@@igObjectRef.filterGlobal('myproduct', IgxStringFilteringOperand.instance().condition('contains'), false);
```

* `ClearFilter` - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```

## Initial filtered state

To set the initial filtering state of the `{ComponentTitle}`, set the `{ComponentName}` `FilteringExpressionsTree` property to an array of `FilteringExpressionsTree` for each column to be filtered.

```typescript
constructor(private cdr: ChangeDetectorRef) { }

public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'ProductName',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```

### Filtering logic

The `FilteringLogic` property of the `{ComponentTitle}` controls how filtering multiple columns will resolve in the `{ComponentTitle}`. You can change it at any time through the `{ComponentTitle}` API, or through the `{ComponentTitle}` input property.

```typescript
import { FilteringLogic } from 'igniteui-angular';

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

<!-- ComponentStart: Grid, HierarchicalGrid -->
## Remote Filtering

The `{ComponentTitle}` supports remote filtering, which is demonstrated in the [{ComponentTitle} Remote Data Operations](remote-data-operations.md) topic.
<!-- ComponentEnd: Grid, TreeGrid -->

## Custom Filtering Operands

You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type (`BooleanFilteringOperand`, `DateFilteringOperand`, `NumberFilteringOperand` and `StringFilteringOperand`). You can extend these classes or their base class `FilteringOperand` to change the filtering menu items’ behavior.

In the sample below, inspect the “Product Name” and “Discontinued” columns filters menus. For the “Discontinued” column filter, we have limited the number of operands to All, True and False. For the “Product Name” column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.

To do that, extend the `StringFilteringOperand` and `BooleanFilteringOperand`, modify the operations and their logic, and set the column `filters` input to the new operands.

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}

export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```

<!-- ComponentStart: Grid, TreeGrid -->
```html
<!-- grid-custom-filtering.component.html -->

<{ComponentSelector} [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid -->

```html
<!-- hierarchical-grid-custom-filtering.component.html -->

<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]='true' [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
            <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
        </ng-template>
    </igx-column>
</igx-hierarchical-grid>
```

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-custom-filtering"
           github-src="{ComponentSample}/custom-filtering"
           alt="{Platform} {ComponentTitle} Custom Filtering Example">
</code-view>


## Re-templating Filter Cell

You can add a template marked with `FilterCellTemplate` in order to retemplate the filter cell. In the sample below, an input is added for the string columns and `DatePicker` for the date column. When the user types or selects a value, a filter with contains operator for string columns and equals operator for date columns, is applied using grid's public API.

<code-view style="height:500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-filtering-template"
           github-src="{ComponentSample}/filtering-template"
           alt="{Platform} {ComponentTitle} Filtering Template Example">
</code-view>

<!-- ComponentStart: TreeGrid -->

## Matching Records Only Filtering Strategy

By default, after a filtering is applied, the `{ComponentName}` component displays the records matching the criterion that have been set and their parents in a grayed-out fashion to provide additional context. However, in some cases, you may want to display only the records matching particular filtering condition without any trace for their parents. This can be achieved by using the `TreeGridMatchingRecordsOnlyFilteringStrategy`:

```html
<igx-tree-grid [data]="data" [allowFiltering]="true" [filterStrategy]="matchingRecordsOnlyStrategy">
</igx-tree-grid>
```

```typescript
import { TreeGridMatchingRecordsOnlyFilteringStrategy } from "igniteui-angular";

public matchingRecordsOnlyStrategy = new TreeGridMatchingRecordsOnlyFilteringStrategy();
```

<!-- ComponentEnd: TreeGrid -->

<!-- Angular -->

## Styling

To get started with styling the filtering row, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the `grid-theme` and accepts the `$filtering-row-text-color`, `$filtering-row-background`, `$filtering-header-text-color` and the `$filtering-header-background` parameters.

```scss
$custom-grid: grid-theme(
    $filtering-row-text-color: #292826,
    $filtering-row-background: #FFCD0F,
    $filtering-header-text-color: #292826,
    $filtering-header-background: #FFCD0F
);
```

As seen, the `grid-theme` only controls colors for the filtering row and the respective column header that is being filtered. We obviously have a lot more components inside the filtering row, such as an input group, chips, buttons and others. In order to style them, we need to create a separate theme for each one, so let's create a new input group theme and a new button theme:

```scss
$dark-input-group: input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$dark-button: button-theme(
    $flat-background: #FFCD0F,
    $flat-text-color: #292826,
    $flat-hover-background: #292826,
    $flat-hover-text-color: #FFCD0F
);
```

In this example we only changed some of the parameters for the input group and the button, but the `input-group-theme` and the `button-theme` provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.

```scss
@include grid($custom-grid);
.igx-grid__filtering-row {
    @include button($dark-button);
    @include input-group($dark-input-group);

    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

>[!NOTE]
>We scope the **igx-button** and the **igx-input-group** mixins within `.igx-grid__filtering-row`, so that only the filtering row buttons and its input group would be styled. Otherwise other buttons and input groups in the grid would be affected too.

 >[!NOTE]
 >If the component is using an `Emulated` ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include grid($custom-grid);
        .igx-grid__filtering-row {
            @include button($dark-button);
            @include input-group($dark-input-group);

            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `igx-palette` and `igx-color` functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```

And then with `igx-color` we can easily retrieve color from the palette.

```scss
$custom-grid: grid-theme(
    $filtering-row-text-color: color($dark-palette, "primary", 400),
    $filtering-row-background: color($dark-palette, "secondary", 400),
    $filtering-header-text-color: color($dark-palette, "primary", 400),
    $filtering-header-background: color($dark-palette, "secondary", 400)
);

$dark-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 400),
    $idle-text-color: color($dark-palette, "primary", 400),
    $focused-text-color: color($dark-palette, "primary", 400),
    $filled-text-color: color($dark-palette, "primary", 400)
);

$dark-button: button-theme(
    $flat-background: color($dark-palette, "secondary", 400),
    $flat-text-color: color($dark-palette, "primary", 400),
    $flat-hover-background: color($dark-palette, "primary", 400),
    $flat-hover-text-color: color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [Schemas](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - `light-grid`, `light-input-group` and `light-button` schemas:

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-text-color:(
           color: ("primary", 400)
        ),
        filtering-row-background:(
           color: ("secondary", 400)
        ),
        filtering-header-text-color:(
           color: ("primary", 400)
        ),
        filtering-header-background:(
           color: ("secondary", 400)
        )
    )
);

// Extending the light input group schema
$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 400)
        ),
        idle-text-color:(
           color: ("primary", 400)
        ),
        focused-text-color:(
           color: ("primary", 400)
        ),
        filled-text-color:(
           color: ("primary", 400)
        )
    )
);

// Extending the light button schema
$custom-button-schema: extend($_light-button,
    (
        flat-background:(
           color: ("secondary", 400)
        ),
        flat-text-color:(
           color: ("primary", 400)
        ),
        flat-hover-background:(
           color: ("primary", 400)
        ),
        flat-hover-text-color:(
           color: ("secondary", 400)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals (`light` or `dark`), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-input-group: $custom-input-group-schema,
    igx-button: $custom-button-schema
));

// Defining grid-theme with the global light schema
$custom-grid: grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);

// Defining button-theme with the global light schema
$custom-button: button-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);

// Defining input-group-theme with the global light schema
$custom-input-group: input-group-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

<code-view style="height:500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-filtering-style"
           github-src="{ComponentSample}/filtering-style"
           alt="{Platform} {ComponentTitle} Filtering Style Example">
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

<!-- end: Angular -->

## Known Limitations

> [!NOTE]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid -->

### Breaking Changes in 6.1.0
* {ComponentName} `filteringExpressions` property is removed. Use `FilteringExpressionsTree` instead.
* `filter_multiple` method is removed. Use `Filter` method and `FilteringExpressionsTree` property instead.
* The `Filter` method has new signature. It now accepts the following parameters:
  * `Name` - the name of the column to be filtered.
  * `Value` - the value to be used for filtering.
  * `ConditionOrExpressionTree` (optional) - this parameter accepts object of type `FilteringOperation` or `FilteringExpressionsTree`. If only simple filtering is needed, a filtering operation could be passed as an argument. In case of advanced filtering, an expressions tree containing complex filtering logic could be passed as an argument.
  * `IgnoreCase` (optional) - whether the filtering is case sensitive or not.
* `FilteringDone` event now have only one parameter of type `FilteringExpressionsTree` which contains the filtering state of the filtered column.
* filtering operands: `FilteringExpression` condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an `FilteringOperation`.
* `ColumnComponent` now exposes a `Filters` property, which takes an `FilteringOperand` class reference.
* Custom filters can be provided to the {ComponentTitle} columns by populating the `Operations` property of the `FilteringOperand` with operations of `FilteringOperation` type.

<!-- ComponentEnd: Grid, TreeGrid -->
<!-- end: Angular -->

## API References

* `{ComponentName}`
* `Column`

## Additional Resources

* [{ComponentTitle} Overview](overview.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName}  **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

