---
title: Column Hiding in {Platform} {ComponentTitle} - Infragistics
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Column Hiding

<!-- Angular -->
{ProductName} `{ComponentName}` provides an `ColumnActionsComponent` with an `ColumnHidingDirective` which allows users to perform column hiding directly through the user interface or by using the {Platform} component.
<!-- end: Angular -->

The {ProductName} `{ComponentName}` has a built-in column hiding UI, which can be used through the `{ComponentName}`'s toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

## {Platform} {ComponentTitle} Column Hiding Example

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-hiding-toolbar"
           github-src="{ComponentSample}/column-hiding-toolbar"
           alt="{Platform} {ComponentTitle} Column Hiding Example">
</code-view>

## {ComponentTitle} Setup

Let's start by creating our `{ComponentName}` and binding it to our data. We will also enable both filtering and sorting for the columns.

<!-- Angular -->
```html
<{ComponentSelector} #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px" [allowFiltering]="true">
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
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} Data=northwindEmployees AutoGenerate=false Width="100%"  Height="100%" ColumnWidth="200px" AllowFiltering=true>
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
<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="false" width="100%" height="560px" column-width="200px" allow-filtering="true">
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
</{ComponentSelector}>
```
<!-- end: WebComponents -->

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an `DropDown` in the `{ComponentName}`'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the `GridToolbarActions` and the `GridToolbarHiding` inside of the `{ComponentName}`. We will also add a title to our toolbar by using the `GridToolbarTitle` and a custom style for our {ComponentTitle}'s wrapper.

<!-- Angular -->
```html
<div class="grid__wrapper">
    <{ComponentSelector} [data]="localdata">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </{ComponentSelector}>
</div>
```
<!-- end: Angular -->

```razor
<div class="grid__wrapper">
    <{ComponentSelector} Data=northwindEmployees>
        <IgbGridToolbar>
            <IgbGridToolbarTitle>Employees</IgbGridToolbarTitle>
            <IgbGridToolbarActions>
                <IgbGridToolbarHiding></IgbGridToolbarHiding>
            </IgbGridToolbarActions>
       </IgbGridToolbar>
    </{ComponentSelector}>
</div>
```

<!-- WebComponents -->
```html
<div class="grid__wrapper">
    <{ComponentSelector} id="grid">
        <igc-grid-toolbar>
            <igc-grid-toolbar-title>Employees</igc-grid-toolbar-title>
            <igc-grid-toolbar-actions>
                <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            </igc-grid-toolbar-actions>
        </igc-grid-toolbar>
    </{ComponentSelector}>
</div>
```
<!-- end: WebComponents -->

The `{ComponentName}` provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the `Title` property, we will set the title that is displayed inside the dropdown button in the toolbar.

<!-- Angular -->
```html
<div class="grid__wrapper">
    <{ComponentSelector} [data]="localdata">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </{ComponentSelector}>
</div>
```
<!-- end: Angular -->

```razor
<div class="grid__wrapper">
    <{ComponentSelector} Data=northwindEmployees>
        <IgbGridToolbar>
            <IgbGridToolbarTitle>Employees</IgbGridToolbarTitle>
            <IgbGridToolbarActions>
                <IgbGridToolbarHiding @ref=HidingAction Title="Column Hiding"></IgbGridToolbarHiding>
            </IgbGridToolbarActions>
       </IgbGridToolbar>
    </{ComponentSelector}>
</div>
```
<!-- WebComponents -->
```html
<div class="grid__wrapper">
    <{ComponentSelector} id="grid">
        <igc-grid-toolbar>
            <igc-grid-toolbar-title>Employees</igc-grid-toolbar-title>
            <igc-grid-toolbar-actions>
                <igc-grid-toolbar-hiding id="hidingAction" title="Column Hiding"></igc-grid-toolbar-hiding>
            </igc-grid-toolbar-actions>
        </igc-grid-toolbar>
    </{ComponentSelector}>
</div>
```
<!-- end: WebComponents -->

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

### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their `DisableHiding` property to true.

```html
<div class="gridContainer">
    <{ComponentSelector}>
        <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    </{ComponentSelector}>
</div>
```

<!-- WebComponents -->
```html
<div class="gridContainer">
    <{ComponentSelector}>
        <igc-column field="ContactName" data-type="String" sortable="true" disable-hiding="true"></igc-column>
        <igc-column field="ContactTitle" data-type="String" sortable="true" disable-hiding="true"></igc-column>
    </{ComponentSelector}>
</div>
```
<!-- end: WebComponents -->

If all went well, this is how our column hiding UI component should look like:

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-custom-column-hiding"
           github-src="{ComponentSample}/custom-column-hiding"
           alt="{Platform} {ComponentTitle} Custom Column Hiding Example" >
</code-view>

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

> [!Note]
>We scope the **igx-button** mixin within `.igx-column-actions`, so that only the column hiding buttons would be styled. Otherwise other buttons in the grid would be affected too.

 > [!Note]
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

> [!Note]
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
           color:("secondary", 500)
        ),
        disabled-color:(
           color:("primary", 700)
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

<code-view style="height:600px"
            data-demos-base-url="{environment:dvDemosBaseUrl}"
            iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-hiding-style"
            github-src="{ComponentSample}/column-hiding-style"
            alt="{Platform} {ComponentTitle} Column Hiding Styling Example">
</code-view>

<!-- end: Angular -->

## API References

<!-- Angular -->
In this article we learned how to use the built-in column hiding UI in the `{ComponentName}`'s toolbar and we defined it as a separate component as well. We introduced a UI that allows the user to choose between different column orders and we set our own custom title and filter prompt texts. We also used an additional {ProductName} component - the [**IgxRadio**](../radio-button.md) button.
<!-- end: Angular -->

<!-- Blazor -->
In this article we learned how to use the built-in column hiding UI in the `{ComponentName}`'s toolbar.
<!-- end: Blazor -->

The column hiding UI has a few more APIs to explore, which are listed below.

* `ColumnActions`

Additional components and/or directives with relative APIs that were used:

`{ComponentName}` properties:
* `HiddenColumnsCount`

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

`{ComponentName}` events:
* `ColumnVisibilityChanged`

<!-- Angular -->
Styles:
* `{ComponentName}`
* `Radio`
<!-- end: Angular -->

## Additional Resources


* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
