---
title: {Platform} {Component} {ComponentTitle} - {ProductName} for {Platform}
_description: Use {Platform} {Component} {ComponentTitle} for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: {Platform}, {ComponentTitle}, {ComponentTitle}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Toolbar

The {ComponentTitle} in {ProductName} for {Platform} provides an `GridToolbarComponent` which is essentially a container for **UI** operations. The {Platform} toolbar is located at the top of the {Platform} component, i.e the {ComponentTitle} and it matches its horizontal size. The toolbar container can host predefined UI controls for the following {ComponentTitle}'s features:

 - Column Pinning


or just any other custom content. The toolbar and the predefined UI components support {Platform} events and expose API for developers.

The predefined `actions` and `title` UI components are added inside the `<igx-grid-toolbar>` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

```Razor
<IgbDataGrid data="data">
    <IgbDataGridToolbar title="Toolbar" ColumnPinning="true">
    </IgbDataGridToolbar>
</IgbDataGrid>
```
Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

```Razor
<IgbDataGrid data="data">
    <IgbDataGridToolbar>
    </IgbDataGridToolbar>
</IgbDataGrid>
```

For a comprehensive look over each of the default UI components, continue reading the **Features** section
below.

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.
As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the {ProductName} for {Platform} suite.


### Title
Setting a title for the toolbar in your grid is achieved by using the `GridToolbarTitleDirective`.
Users can provide anything from simple text to more involved templates.
```Razor
<IgbDataGrid>
    <IgbDataGridToolbar title="CustomTitle" />
</IgbDataGrid>
```
### Column pinning
`GridToolbarPinningComponent` provides the default UI for interacting with column pinning in the grid.
The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-pinning>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```


### Column hiding
`GridToolbarHidingComponent` provides the default
UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-hiding>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Advanced filtering
[Toolbar Advanced Filtering component]({environment:{Platform}ApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html) provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Data exporting

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> When exporting the Hierarchical Grid or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> belonging to their respective grid (the child grids will not be included in the exported data).
}

As with the rest of the toolbar actions, exporting is provided through a `GridToolbarExporterComponent` out of the box.
The exporting component is using the respective service for the target data format `ExcelExporterService` and `CSVExporterService`. That means if the respective service is not provided through the dependency injection chain, the component
won't be able to export anything.
If you need a refresher on the DI in {Platform}, check the [official guide](https://{Platform}.io/guide/dependency-injection). Here is a sample snippet showing how to enable
all export services for your application.

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-{Platform}';

@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```

## Custom Content

Here is a sample snippet:

```Razor
<@@igSelector #gridRef ...>

    ...
    <IgbDataGrid>
        <IgbDataGridToolbar>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <IgbButton Variant="@ButtonVariant.Contained">
            <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
        </IgbButton>
       </IgbDataGridToolbar>
</@@igSelector>
```

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

* `GridToolbarActionsDirective`
* `GridToolbarAdvancedFilteringComponent`
* `GridToolbarComponent`
* `GridToolbarExporterComponent`
* `GridToolbarHidingComponent`
* `GridToolbarPinningComponent`
* `GridToolbarTitleDirective`


* `{ComponentName}` Events:
* `ToolbarExporting`

Styles:

* `{ComponentName}` Styles

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [{ProductName} for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
