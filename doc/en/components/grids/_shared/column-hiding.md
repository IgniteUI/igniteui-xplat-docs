---
title: {Platform} {ComponentTitle} Column Hiding - {ProductName}
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Column Hiding

<!-- Angular -->
{ProductName} `{ComponentName}` provides an `ColumnActionsComponent` with an `ColumnHidingDirective` which allows users to perform column hiding directly through the user interface or by using the {Platform} component.
<!-- end: Angular -->

The {ProductName} has a built-in column hiding UI, which can be used through the {Platform} {ComponentTitle} toolbar to change the visible state of the columns. Developers have the flexibility to define the Column Hiding UI anywhere within the page as needed. The {Platform} {ComponentTitle} Column Hiding feature is especially useful when one wants to decrease the size of the grid and to eliminate the need for tabbing through redundant fields.

## {Platform} {ComponentTitle} Column Hiding Example

`sample="/{ComponentSample}/column-hiding-toolbar", height="600", alt="{Platform} {ComponentTitle} Column Hiding Example"`



## {ComponentTitle} Setup

Let's start by creating our `{ComponentName}` and binding it to our data. We will also enable both filtering and sorting for the columns.

```html
<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-grid>
```

```razor
<{ComponentSelector} Data=northwindEmployees AutoGenerate=false Width="100%" Height="100%" AllowFiltering=true>
    <IgbColumn Field="ID" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactName" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true></IgbColumn>
    <IgbColumn Field="City"  Sortable=true></IgbColumn>
    <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
    <IgbColumn Field="Fax" Sortable=true></IgbColumn>
    <IgbColumn Field="Address" Sortable=true></IgbColumn>
    <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
    <IgbColumn Field="Country" Sortable=true></IgbColumn>
    <IgbColumn Field="Phone" Sortable=true></IgbColumn>
</{ComponentSelector}>
```

```html
<igc-grid id="grid" auto-generate="false" width="100%" height="560px" allow-filtering="true">
    <igc-column field="ID" data-type="String" sortable="true" hidden="true"></igc-column>
    <igc-column field="ContactName" data-type="String" sortable="true" hidden="true"></igc-column>
    <igc-column field="ContactTitle" data-type="String" sortable="true"></igc-column>
    <igc-column field="City" data-type="String" sortable="true"></igc-column>
    <igc-column field="CompanyName" data-type="String" sortable="true"></igc-column>
    <igc-column field="Fax" data-type="String" sortable="true"></igc-column>
    <igc-column field="Address" data-type="String" sortable="true"></igc-column>
    <igc-column field="PostalCode" data-type="String" sortable="true"></igc-column>
    <igc-column field="Country" data-type="String" sortable="true"></igc-column>
    <igc-column field="Phone" data-type="String" sortable="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid autoGenerate="false" width="100%" height="560px" allowFiltering="true">
    <IgrColumn field="ID" dataType="string" sortable="true" hidden="true"></IgrColumn>
    <IgrColumn field="ContactName" dataType="String" sortable="true" hidden="true"></IgrColumn>
    <IgrColumn field="ContactTitle" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="City" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="CompanyName" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Fax" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Address" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="PostalCode" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Country" dataType="string" sortable="true"></IgrColumn>
    <IgrColumn field="Phone" dataType="string" sortable="true"></IgrColumn>
</IgrGrid>
```

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an `DropDown` in the `{ComponentName}`'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the `GridToolbarActions` and the `GridToolbarHiding` inside of the `{ComponentName}`. We will also add a title to our toolbar by using the `GridToolbarTitle` and a custom style for our {ComponentTitle}'s wrapper.

```html
<igx-grid [data]="localdata">
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```

```razor
<{ComponentSelector} Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```

```html
<igc-grid>
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarHiding key="toolbarHiding"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

The `{ComponentName}` provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the `Title` property, we will set the title that is displayed inside the dropdown button in the toolbar.

```html
<igx-grid [data]="localdata">
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```

```razor
<{ComponentSelector} Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding @ref=HidingAction Title="Column Hiding"></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```

```html
<igc-grid id="grid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding id="hidingAction" title="Column Hiding"></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarHiding key="toolbarHiding" title="Column Hiding"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

<!-- Angular -->

By using the `ColumnsAreaMaxHeight` property of the `GridToolbarHiding`, we can set the maximum height of the area that contains the column actions. This way if we have a lot of actions and not all of them can fit in the container, a scrollbar will appear, which will allow us to scroll to any action we want.

```typescript
public ngAfterViewInit() {
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

```razor
@code {
    public IgbGridToolbarHiding HidingAction { get; set; }
    protected override async Task OnInitializedAsync()
    {
        HidingAction.ColumnsAreaMaxHeight = "200px";
    }
}
```

```typescript
constructor() {
    var hidingAction = this.hidingAction = document.getElementById('hidingAction') as IgcGridToolbarHidingComponent;
}

connectedCallback() {
    this.hidingAction.columnsAreaMaxHeight = "200px";
}
```

In order to use the expanded set of functionalities for the column hiding UI, we can use the `ColumnActions`'s `ColumnsAreaMaxHeight` property. This way we can use it according to our application's requirements.

<!-- end: Angular -->

You can see the result of the code from above at the beginning of this article in the {Platform} Column Hiding Example section.

<!-- Angular -->

## Custom Column Hiding UI

Let's say we want to manually define our `ColumnActionsComponent`, add the `ColumnHidingDirective`so that it knows what its purpose would be and put it anywhere on the page. First, however, we need to import the `IgxColumnActionsModule`.

```typescript
// app.module.ts

//...
import {
    //...
    IgxColumnActionsModule
} from 'igniteui-{Platform}';

@NgModule({
    imports: [IgxColumnActionsModule],
})
export class AppModule {}
```

Now let's create our `ColumnActionsComponent`. In our application, we will place it next to the grid (which is not the case with the toolbar's column hiding UI, where the component is inside a dropdown by design). We will also set the `Columns` property of the component to the columns of our `{ComponentName}` and include some custom styles to make our application look even better!

```html
<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="grid.columns">
    </igx-column-actions>
</div>
<div class="gridContainer">
    <{ComponentSelector} #grid [data]="data" [autoGenerate]="true" width="100%" height="500px" columnWidth="200px">
    </{ComponentSelector}>
</div>
```

```css
.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-actions {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
```

### Add title and filter prompt

A couple more things we can do in order to enrich the user experience of our column hiding component is to set the `Title` and the `FilterColumnsPrompt` properties. The `Title` is displayed on the top and the `FilterColumnsPrompt` is the prompt text that is displayed in the filter input of our column hiding UI.

```html
<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="grid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions>
</div>
```


### Add Column Display Order Options

We can also allow the user to choose the display order of the columns in the column hiding UI. For this purpose we will use the `ColumnDisplayOrder` property, which is an enumeration type property and has the following options:

- **Alphabetical** (order the columns alphabetically)
- **DisplayOrder** (order the columns according to the way they are displayed in the {ComponentTitle})

Let's create a couple of nicely designed radio buttons for our options! We just have to go ahead and get the [**IgxRadio**](../radio-button.md) module.

```typescript
import {
    IgxRadioModule
} from 'igniteui-{Platform}';

@NgModule({
    imports: [IgxRadioModule]
})
export class AppModule {}
```

Now all we have to do is bind the `Checked` property of both radio buttons respectively with different conditions and handle their click events.

```html
<div class="columnHidingContainer">
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```
<!-- end: Angular -->
### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their `DisableHiding` property to true.

```html
<igx-grid>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
</igx-grid>
```

```html
<igc-grid>
    <igc-column field="ContactName" data-type="String" sortable="true" disable-hiding="true"></igc-column>
    <igc-column field="ContactTitle" data-type="String" sortable="true" disable-hiding="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrColumn field="ContactName" dataType="string" sortable="true" disableHiding="true"></IgrColumn>
    <IgrColumn field="ContactTitle" dataType="string" sortable="true" disableHiding="true"></IgrColumn>
</IgrGrid>
```

```razor
<{ComponentSelector} Data=northwindEmployees AutoGenerate=false>
    <IgbColumn Field="ContactName" Sortable=true DisableHiding=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true DisableHiding=true></IgbColumn>
</{ComponentSelector}>
```

<!-- Angular -->
If all went well, this is how our column hiding UI component should look like:

`sample="/{ComponentSample}/custom-column-hiding", height="600", alt="{Platform} {ComponentTitle} Custom Column Hiding Example"`

## Styling

To get started with styling the column actions component, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

By using the simplest approach, we create a new theme that extends the `column-actions-theme` and accepts the `$title-color` and the `$background-color` parameters.

```scss
$custom-column-actions-theme: column-actions-theme(
    $background-color: steelblue,
    $title-color: gold
);
```

As seen, the `column-actions-theme` only controls colors for the column actions container, but does not affect the buttons, checkboxes and the input-group inside of it. Let's say we want to style the buttons as well, so we will create a new button theme:

```scss
$custom-button: button-theme($flat-text-color: gold, $disabled-color: black);
```

In this example we only changed the text-color of the flat buttons and the button disabled color, but the `button-theme` provides way more parameters to control the button style.

The last step is to **include** the component mixins, each with its respective theme:

```scss
@include column-actions($custom-column-actions-theme);
.igx-column-actions {
    @include button($custom-button);
}
```

> **Note**
>We scope the **igx-button** mixin within `.igx-column-actions`, so that only the column hiding buttons would be styled. Otherwise other buttons in the grid would be affected too.

 > **Note**
 >If the component is using an `Emulated`ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include column-actions($custom-column-actions-theme);
        .igx-column-actions {
            @include button($custom-button);
        }
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `igx-palette` and `igx-color` functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: gold;
$blue-color: steelblue;

$custom-palette: palette($primary: $blue-color, $secondary: $yellow-color);
```

And then with `igx-color` we can easily retrieve color from the palette.

```scss
$custom-column-actions-theme: column-actions-theme(
    $palette: $custom-palette,
    $title-color: color($custom-palette, "secondary", 400),
    $background-color: color($custom-palette, "primary", 200)
);

$custom-button: button-theme(
    $palette: $custom-palette,
    $flat-text-color: color($custom-palette, "secondary", 400),
    $disabled-color: black
);
```

> **Note**
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to `Palettes](themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/sass/schemas.md). A **schema** is a recipe of a theme.

```scss
// Extending the dark column actions schema
$custom-column-actions-schema: extend($_dark-column-actions,
    (
        title-color:(
           color: ("secondary", 400)
        ),
        background-color:(
           color: ("primary", 200)
        )
    )
);
// Extending the dark button schema
$custom-button-schema: extend($_dark-button,
    (
        flat-text-color:(
           color: ("secondary", 500)
        ),
        disabled-color:(
           color: ("primary", 700)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals `light` or `dark`, which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-column-actions: $custom-column-actions-schema,
    igx-button: $custom-button-schema
));

// Defining column-actions-theme with the global dark schema
$custom-column-actions-theme: column-actions-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$custom-button: button-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

`sample="/{ComponentSample}/column-hiding-style", height="600", alt="{Platform} {ComponentTitle} Column Hiding Styling Example"`

<!-- end: Angular -->

<!-- Blazor, WebComponents, React -->
## Styling

The grid could be further customized by setting some of the available [CSS variables](../theming.md).
In order to achieve that, we will use a class that we will first assign to the grid:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

```css
.grid  igx-column-actions {
    /* Main Column Actions styles */
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;

    /* Checkbox styles */
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;

    /* Input styles */
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;

    /* Buttons styles */
    --ig-button-foreground: #292826;
    --ig-button-background: #ffcd0f;
    --ig-button-hover-background: #404040;
    --ig-button-hover-foreground: #ffcd0f;
    --ig-button-focus-background: #ffcd0f;
    --ig-button-focus-foreground: black;
    --ig-button-focus-visible-background: #ffcd0f;
    --ig-button-focus-visible-foreground: black;
    --ig-button-disabled-foreground: #ffcd0f;
}
```

### Demo

`sample="/{ComponentSample}/column-hiding-toolbar-style", height="570", alt="{Platform} {ComponentTitle} column hiding toolbar styles"`

<!-- end: Blazor, WebComponents, React -->

## API References

<!-- Angular -->
In this article we learned how to use the built-in column hiding UI in the `{ComponentName}`'s toolbar and we defined it as a separate component as well. We introduced a UI that allows the user to choose between different column orders and we set our own custom title and filter prompt texts. We also used an additional {ProductName} component - the [**IgxRadio**](../radio-button.md) button.

Additional components and/or directives with relative APIs that were used:

* `ColumnActionsComponent`
<!-- end: Angular -->

<!-- Blazor, WebComponents -->
In this article we learned how to use the built-in column hiding UI in the `{ComponentName}`'s toolbar. The column hiding UI has a few more APIs to explore, which are listed below.

* `ColumnActionsComponent`

Additional components with relative APIs that were used:

<!-- end: Blazor, WebComponents -->

`Column` properties:
* `DisableHiding`

`GridToolbar` properties:
* `showProgress`

<!-- Angular -->
`GridToolbar` directives:
* `TitleDirective`
* `ActionsDirective`
<!-- end: Angular -->

`GridToolbar` methods:
* `GridToolbarHiding`
* `GridToolbarActions`
* `GridToolbarTitle`

`{ComponentName}` events:
* `ColumnVisibilityChanged`

<!-- Angular -->
Styles:
* `{ComponentName}`
* `Radio`
<!-- end: Angular -->

## Additional Resources
<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
