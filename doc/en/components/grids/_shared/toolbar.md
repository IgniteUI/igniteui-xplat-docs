---
title: {Platform} {Component} {ComponentTitle} - {ProductName} for {Platform}
_description: Use {Platform} {Component} {ComponentTitle} for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: {Platform}, {ComponentTitle}, {ComponentTitle}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Toolbar

The `{ComponentName}` in {ProductName} for {Platform} provides an `GridToolbarComponent` which is essentially a container for **UI** operations. The {Platform} toolbar is located at the top of the {Platform} component, i.e the `{ComponentName}` and it matches its horizontal size. The toolbar container can host predefined UI controls for the following `{ComponentName}`'s features:

 - Column Pinning

The predefined `Actions` and `Title` UI components are added inside the `GridToolbar` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

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
<!-- Angular -->

<!-- ComponentStart: Grid -->
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

> Note: As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the `GridToolbarActions` container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

<!-- ComponentStart: Grid -->
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-grid>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

For a comprehensive look over each of the default UI components, continue reading the **Features** section below.

<!--end: Angular -->

<!-- ComponentStart: HierarchicalGrid -->

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.
As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the {ProductName} for {Platform} suite.

<!--start: Angular -->
## Toolbar with Child Grids

Due to certain limitations in how the child grids of an IgxHierarchicalGrid are implemented and how DI scope works, there is a caveat when
using the toolbar in the scope of child grids. When defining a toolbar component inside the `igx-row-island` tags, always make sure
to use the IgxGridToolbar directive on the toolbar itself and pass the provided grid instance as an input property to the toolbar itself.
This will make sure you always have the correct grid instance in the scope of your template:

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        <!--
            You can name the binding from igxGridToolbar however you want. Just make sure to use
            it inside the template if you need to access the grid instance.
        -->
        <igx-grid-toolbar [grid]="gridRef" *igxGridToolbar="let gridRef">
            <igx-grid-toolbar-title>Child toolbar {{ gridRef.parentIsland.level }}</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->


## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for {Platform} suite.

Listed below are the main features of the toolbar with example code for each of them.

<code-view style="height:630px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-toolbar-sample-2" >
</code-view>

<!--end: Angular -->

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

<!--start: Angular -->

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

### Actions

The `GridToolbarTitleDirective` exposes a container where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        ...
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

Each action now exposes a way to change the overlay settings of the actions dialog by using the `OverlaySettings` input. For example:

```html
<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
</igx-grid-toolbar-actions>
```

```ts
public data: any[];
public positionStrategyScaleCenter = new GlobalPositionStrategy({
    openAnimation: scaleInCenter,
    closeAnimation: scaleOutCenter
});
public overlaySettingsScaleCenter = {
    positionStrategy: this.positionStrategyScaleCenter,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: true,
    closeOnEscape: true
};

public positionStrategyAuto = new AutoPositionStrategy();
public overlaySettingsAuto = {
    positionStrategy: this.positionStrategyAuto,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: false,
    closeOnEscape: false
};
constructor() {
    this.data = athletesData;
}
```

The default overlaySettings are using *ConnectedPositionStrategy* with *Absolute* scroll strategy, *modal* set to false, with enabled *close on escape* and *close on outside click* interactions.

### Column Pinning

The `GridToolbarPinning` component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

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

### Column Hiding

The `GridToolbarHiding` provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
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

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Data Exporting

<!-- ComponentStart: HierarchicalGrid -->

> [!NOTE]
> When exporting the `{ComponentName}` or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> belonging to their respective grid (the child grids will not be included in the exported data).

<!-- ComponentEnd: HierarchicalGrid -->

As with the rest of the toolbar actions, exporting is provided through a `GridToolbarExporter` out of the box.

The exporting component is using the respective service for the target data format `ExcelExporterService` and `CSVExporterService`. That means if the respective service is not provided through the dependency injection chain, the component won't be able to export anything.

If you need a refresher on the DI in {Platform}, check the [official guide](https://{Platform}.io/guide/dependency-injection). Here is a sample snippet showing how to enable all export services for your application.

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-{Platform}';

@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```
<!--end: Angular -->

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

<!-- Angular -->

Styles:

* `{ComponentName}` Styles

<!-- end: Angular -->

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [{ProductName} for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
