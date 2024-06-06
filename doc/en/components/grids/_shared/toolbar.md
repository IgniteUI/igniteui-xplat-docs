---
title: {Platform} {ComponentTitle} for {ProductName} for
_description: Use {Platform} {ComponentTitle} for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: {Platform}, {ComponentTitle}, {ComponentTitle}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Toolbar

The {ProductName} Toolbar in is a container for UI operations in the {Platform} {ComponentTitle}. The {Platform} toolbar is located at the top of the {Platform} component, i.e., the `{ComponentName}` and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the {Platform} {ComponentTitle} includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support {Platform} events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->
## {Platform} Toolbar Grid Example

`sample="/{ComponentSample}/toolbar-sample-1", height="420", alt="{Platform} {ComponentTitle} Toolbar Example"`
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular, WebComponents -->
## {Platform} Toolbar Grid Example

`sample="/{ComponentSample}/toolbar-sample-1", height="420", alt="{Platform} {ComponentTitle} Toolbar Example"`
<!-- end: Angular, WebComponents -->
<!-- ComponentEnd: HierarchicalGrid -->

The predefined `Actions` and `Title` UI components are added inside the `GridToolbar` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

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

```html
<igc-grid id="grid" auto-generate="true">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarTitle key="toolbarTitle">
            <span key="toolbarTitleText">Grid Toolbar<span>
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarAdvancedFiltering key="advancedFiltering"></IgrGridToolbarAdvancedFiltering>
            <IgrGridToolbarPinning key="pinning"></IgrGridToolbarPinning>
            <IgrGridToolbarHiding key="hiding"></IgrGridToolbarHiding>
            <IgrGridToolbarExporter key="export"></IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

```razor
<IgbGrid>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering>
            </IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding>
            </IgbGridToolbarHiding>
            <IgbGridToolbarPinning>
            </IgbGridToolbarPinning>
            <IgbGridToolbarExporter>
            </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```
<!-- ComponentEnd: Grid -->

<!-- Angular -->
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
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: TreeGrid -->
```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="true">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Tree Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: TreeGrid -->
```tsx
<IgrTreeGrid data={data} primaryKey="ID" foreignKey="ParentID" autoGenerate="true">
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarTitle key="toolbarTitle">
            <span key="toolbarTitleText">Tree Grid Toolbar<span>
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarAdvancedFiltering key="advancedFiltering"></IgrGridToolbarAdvancedFiltering>
            <IgrGridToolbarPinning key="pinning"></IgrGridToolbarPinning>
            <IgrGridToolbarHiding key="hiding"></IgrGridToolbarHiding>
            <IgrGridToolbarExporter key="export"></IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: React -->

<!-- Blazor -->
<!-- ComponentStart: TreeGrid -->
```razor
<IgbTreeGrid Data="Data" PrimaryKey="ID" ForeignKey="ParentID" AutoGenerate="true">
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering>
            </IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding>
            </IgbGridToolbarHiding>
            <IgbGridToolbarPinning>
            </IgbGridToolbarPinning>
            <IgbGridToolbarExporter>
            </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: Blazor -->

<!-- Angular -->
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
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid id="hGrid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Hierarchical Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarTitle key="toolbarTitle">
            <span key="toolbarTitleText">Hierarchical Grid Toolbar<span>
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarAdvancedFiltering key="advancedFiltering"></IgrGridToolbarAdvancedFiltering>
            <IgrGridToolbarPinning key="pinning"></IgrGridToolbarPinning>
            <IgrGridToolbarHiding key="hiding"></IgrGridToolbarHiding>
            <IgrGridToolbarExporter key="export"></IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
<IgbHierarchicalGrid>
    <IgbGridToolbar>
        <IgbGridToolbarTitle>Hierarchical Grid Toolbar</IgbGridToolbarTitle>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
            <IgbGridToolbarPinning></IgbGridToolbarPinning>
            <IgbGridToolbarExporter></IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

> [!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the `GridToolbarActions` container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

<!-- ComponentStart: Grid -->
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-grid>
```
```html
<igc-grid auto-generate="true">
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-grid>
```

```razor
<IgbGrid>
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbGrid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
    </IgrGridToolbar>
</IgrGrid>
```
<!-- ComponentEnd: Grid -->

<!-- Angular -->
<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: TreeGrid -->
```html
<igc-tree-grid primary-key="ID" foreign-key="ParentID" auto-generate="true">
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: TreeGrid -->
```tsx
<IgrTreeGrid data={data} primaryKey="ID" foreignKey="ParentID" autoGenerate="true">
    <IgrGridToolbar key="toolbar">
    </IgrGridToolbar>
</IgrTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: React -->

<!-- Blazor -->
<!-- ComponentStart: TreeGrid -->
```razor
<IgbTreeGrid Data="Data" PrimaryKey="ID" ForeignKey="ParentID" AutoGenerate="true">
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: Blazor -->

<!-- Angular -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid>
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
<IgbHierarchicalGrid>
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid>
    <IgrGridToolbar key="toolbar">
    </IgrGridToolbar>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

For a comprehensive look over each of the default UI components, continue reading the **Features** section below.

<!-- Angular, WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
## Toolbar with Child Grids

<!-- Angular -->
Due to certain limitations in how the child grids of an IgxHierarchicalGrid are implemented and how DI scope works, there is a caveat when
using the toolbar in the scope of child grids. When defining a toolbar component inside the `igx-row-island` tags, always make sure to use the IgxGridToolbar and pass the provided grid instance as an input property to the toolbar itself.
This will make sure you always have the correct grid instance in the scope of your template:

```html
<igx-hierarchical-grid>
    <!--...-->
    <igx-row-island>
        <!--
            You can name the binding from igxGridToolbar however you want. Just make sure to use
            it inside the template if you need to access the grid instance.
        -->
        <igx-grid-toolbar [grid]="gridRef" *igxGridToolbar="let gridRef">
            <igx-grid-toolbar-title>Child toolbar {{ gridRef.parentIsland.level }}</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    <!--...-->
</igx-hierarchical-grid>
```
<!-- end: Angular -->

<!-- WebComponents -->
Due to certain limitations in how the child grids of an `{ComponentSelector}` are implemented and how DI scope works, to define a toolbar component inside the `{RowIslandSelector}`, use the `ToolbarTemplate` input property. This allows child grids to create their own separate toolbar instances:
<!-- end: WebComponents -->
<!-- ComponentEnd: HierarchicalGrid -->

<!-- WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
```ts
constructor() {
    var rowIsland1 = document.getElementById('rowIsland1') as IgcRowIslandComponent;
    rowIsland1.toolbarTemplate = this.rowIslandToolbarTemplate;
}

public rowIslandToolbarTemplate = () => {
    return html`<igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering></igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>`;
}
```

```html
<igc-hierarchical-grid>
    ...
    <igc-row-island id="rowIsland1">
    </igc-row-island>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

```razor
<IgbHierarchicalGrid>
    ...
    <IgbRowIsland ToolbarTemplateScript="RowIslandToolbarTemplate">
    </IgbRowIsland>
</IgbHierarchicalGrid>

//In JavaScript:
igRegisterScript("RowIslandToolbarTemplate", () => {
    var html = window.igTemplating.html;
    return html`<igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering></igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>`;
}, false);
```

```tsx
function rowIslandToolbarTemplate = () => {
    return (
        <IgrGridToolbar>
            <IgrGridToolbarActions>
                <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarExporter></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
        </IgrGridToolbar>
    );
}

<IgrHierarchicalGrid>
    ...
    <IgrRowIsland toolbarTemplate={rowIslandToolbarTemplate}>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```
<!-- end: Angular, WebComponents -->

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the {ProductName} suite.

Listed below are the main features of the toolbar with example code for each of them.

<!-- ComponentStart: Grid, TreeGrid -->
`sample="/{ComponentSample}/toolbar-sample-2", height="630", alt="{Platform} {ComponentTitle} toolbar sample 2"`
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular, WebComponents -->
`sample="/{ComponentSample}/toolbar-sample-2", height="630", alt="{Platform} {ComponentTitle} toolbar sample 2"`
<!-- end: Angular, WebComponents -->
<!-- ComponentEnd: HierarchicalGrid -->


### Title

Setting a title for the toolbar in your grid is achieved by using the `GridToolbarTitle`.

Users can provide anything from simple text to more involved templates.

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igc-grid-toolbar>
    <igc-grid-toolbar-title>Grid toolbar title</igc-grid-toolbar-title>
</igc-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarTitle key="toolbarTitle">
        <span key="toolbarTitleText">Grid toolbar title<span>
    </IgrGridToolbarTitle>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<IgbGridToolbar>
    <IgbGridToolbarTitle>Grid toolbar title</IgbGridToolbarTitle>
</IgbGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

### Actions


The `GridToolbarActions` is where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        <!--...-->
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
    <!-- ... -->
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <!--...-->
    </IgbGridToolbarActions>
</IgbGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">

    </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- Angular -->

Each action now exposes a way to change the overlay settings of the actions dialog by using the `OverlaySettings` input. For example:

```html
<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
</igx-grid-toolbar-actions>
```

```html
<igc-grid-toolbar-actions>
    <igc-grid-toolbar-pinning id="pinTool"></ig-grid-toolbar-pinning>
    <igc-grid-toolbar-hiding id="hideTool"></igc-grid-toolbar-hiding>
</igc-grid-toolbar-actions>
```

```ts
constructor() {
    var pinTool = this.pinTool = document.getElementById('pinTool') as IgcGridToolbarPinningComponent;
    var hideTool = this.hideTool = document.getElementById('hideTool') as IgcGridToolbarHidingComponent;
    pinTool.overlaySettings = this.overlaySettingsScaleCenter;
    hideTool.overlaySettings = this.overlaySettingsAuto;
}
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

<!-- end: Angular -->

### Column Pinning

The `GridToolbarPinning` component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
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
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            column-list-height="400px">
        </igc-grid-toolbar-pinning>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarPinning Title="Grid pinned columns" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarPinning>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarPinning key="pinning" title="Grid pinned columns" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarPinning>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

### Column Hiding

The `GridToolbarHiding` provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
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
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            column-list-height="400px">
        </igc-grid-toolbar-hiding>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarHiding Title="Grid column hiding" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarHiding>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarHiding key="hiding" title="Grid column hiding" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarHiding>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-advanced-filtering>Custom text for the toggle button</igc-grid-toolbar-advanced-filtering>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarAdvancedFiltering key="advancedFiltering"></IgrGridToolbarAdvancedFiltering>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

### Data Exporting

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
> When exporting the `{ComponentName}` or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> belonging to their respective grid (the child grids will not be included in the exported data).

<!-- ComponentEnd: HierarchicalGrid -->

As with the rest of the toolbar actions, exporting is provided through a `GridToolbarExporter` out of the box.

<!-- Angular -->

The exporting component is using the respective service for the target data format `ExcelExporterService` and `CSVExporterService`. That means if the respective service is not provided through the dependency injection chain, the component won't be able to export anything.

If you need a refresher on the DI in {Platform}, check the [official guide](https://{Platform}.io/guide/dependency-injection). Here is a sample snippet showing how to enable all export services for your application.

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-{Platform}';

@NgModule({
    //...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```

> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

<!-- end: Angular -->

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.

These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the generated file. For full reference, consult the API documentation for the `ToolbarExporter`.

Here is a snippet showing some of the options which can be customized through the {Platform} template:

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <!-- exportCSV enables the csv export entry in the dropdown UI -->
        <!-- exportExcel enables the excel export entry in the dropdown UI -->
        <igx-grid-toolbar-exporter
            [exportCSV]="csvExportEnabled"
            [exportExcel]="excelExportEnabled"
            filename="exported_data">
            Custom text for the exporter button
            <span excelText>Custom text for the excel export entry</span>
            <span csvText>Custom text for the CSV export entry</span>
        </igx-grid-toolbar-exporter>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-exporter export-csv="true" export-excel="true" filename="exported_data">
        </igc-grid-toolbar-exporter>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarExporter ExportCSV="true" ExportExcel="true" Filename="exported_data"></IgbGridToolbarExporter>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarExporter key="export" exportCSV="true" exportExcel="true" filename="exported_data"></IgrGridToolbarExporter>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the `ToolbarExporting` event and customizing the options entry in the event properties.

> [!Note]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<{ComponentSelector} (toolbarExporting)="configureExport($event)" ></{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="toolbarExporter"></{ComponentSelector}>
```
```ts
constructor() {
    var toolbarExporter = this.toolbarExporter = document.getElementById('toolbarExporter') as IgcGridToolbarExporterComponent;
    toolbarExporter.addEventListener("toolbarExporting", this.configureExport);
}
```
<!-- end: WebComponents -->

```tsx
function configureExport(evt: IgrGridToolbarExportEventArgs) {
    const args = evt.detail;
    const options: IgrExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
    });
}

<{ComponentSelector} toolbarExporting={configureExport}>
</{ComponentSelector}>
```


<!-- Angular -->
```typescript
configureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = '\t';
    }

    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === 'Athlete' ||
                            columnArgs.header === 'Country';
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === 'Name';
        }
    });
}
```
<!-- end: Angular -->

```typescript
public configureExport(evt: CustomEvent<IgcGridToolbarExportEventArgs>) {
    const args = evt.detail;
    const options: IgcExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
    });
}
```

```razor
<IgbGridToolbarExporter ExportStartedScript="WebGridToolbarExporting"></IgbGridToolbarExporter>
```

```razor
// In Javascript
igRegisterScript("WebGridToolbarExporting", (evt) => {
        const args = evt.detail;
        const options = args.options;
        options.fileName = `Report_${new Date().toDateString()}`;
        args.exporter.columnExporting.subscribe((columnArgs) => {
                columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
        });
}, false);
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```html
<{ComponentSelector} id="treeGrid"></{ComponentSelector}>
```
```ts
constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    treeGrid.addEventListener("toolbarExporting", this.configureExport);
}

public configureExport(evt: CustomEvent<IgcGridToolbarExportEventArgs>) {
    const args = evt.detail;
    const options: IgcExporterOptionsBase = args.options;
    if (options) {
        options.fileName = `Report_${new Date().toDateString()}`;
        (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Name';
        });
    }
}
```
<!-- end: WebComponents -->

```tsx
function configureExport(evt: IgrGridToolbarExportEventArgs) {
    const args = evt.detail;
    const options: IgrExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
        columnArgs.cancel = columnArgs.header === 'Name';
    });
}

<{ComponentSelector} toolbarExporting={configureExport}>
</{ComponentSelector}>
```

```razor
<{ComponentSelector} ToolbarExportingScript="ConfigureExport"></{ComponentSelector}>

// In Javascript
igRegisterScript("ConfigureExport", (evt) => {
    const args = evt.detail;
    const options = args.options;
    options.fileName = `Report_${new Date().toDateString()}`;
    args.exporter.columnExporting.subscribe((columnArgs) => {
        columnArgs.cancel = columnArgs.header === 'Name';
    });
}, false);
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="hierarchicalGrid"></{ComponentSelector}>
```
```ts
constructor() {
    var hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    hierarchicalGrid.addEventListener("toolbarExporting", this.configureExport);
}

public configureExport(evt: CustomEvent<IgcGridToolbarExportEventArgs>) {
    const args = evt.detail;
    const options: IgcExporterOptionsBase = args.options;
    if (options) {
        options.fileName = `Report_${new Date().toDateString()}`;
        (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Photo';
        });
    }
}
```
<!-- end: WebComponents -->

```tsx
function configureExport(evt: IgrGridToolbarExportEventArgs) {
    const args = evt.detail;
    const options: IgrExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
        columnArgs.cancel = columnArgs.header === 'Photo';
    });
}

<{ComponentSelector} toolbarExporting={configureExport}>
</{ComponentSelector}>
```

```razor
<{ComponentSelector} ToolbarExportingScript="ConfigureExport"></{ComponentSelector}>

// In Javascript
igRegisterScript("ConfigureExport", (evt) => {
    const args = evt.detail;
    const options = args.options;
    options.fileName = `Report_${new Date().toDateString()}`;
    args.exporter.columnExporting.subscribe((columnArgs) => {
        columnArgs.cancel = columnArgs.header === 'Photo';
    });
}, false);
```
<!-- ComponentEnd: HierarchicalGrid -->

The following sample demonstrates how to customize the exported files:


`sample="/{ComponentSample}/toolbar-sample-3", height="420", alt="{Platform} {ComponentTitle} toolbar sample 3"`




## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.

Moreover, users can set the toolbar `ShowProgress` property and use for their own long running operations or just as another way to signify an action taking place in the grid.

The sample belows uses has significant amount of data, in order to increase the time needed for data export so the progressbar can be seen. Additionally it has another button that simulates a long running operation in the grid:

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/data-exporting-indicator", height="370", alt="{Platform} {ComponentTitle} data exporting indicator"`


<!-- Angular, WebComponents, Blazor -->
## Custom Content

<!-- Angular -->

> [!Note]
> This replaces the old toolbar template directive. If you are migrating from a version before v11 our migrations will handle the moving of the template content. However, we do not handle the bindings in the template, so make sure to double check the modified template files after the migration completes.

<!-- end: Angular -->

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.

Here is a sample snippet:

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<{ComponentSelector} #gridRef>
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>{{ titleBinding }}</igx-grid-toolbar-title>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <button igxButton="flat" igxRipple (click)="#gridRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>

        <igx-grid-toolbar-actions>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<{ComponentSelector} id="grid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>title</igx-grid-toolbar-title>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <igc-grid-toolbar-actions>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
<{ComponentSelector}>
    <IgrGridToolbar>
        <IgrGridToolbarTitle key="toolbarTitle">
            <span key="toolbarTitleText">title<span>
        </IgrGridToolbarTitle>
        {/*
            Everything between the toolbar tags except the default toolbar components
            will be projected as custom content.
        */}
        <IgrGridToolbarActions key="toolbarActions">
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<{ComponentSelector}>
    <IgbGridToolbar>
        <IgbGridToolbarTitle>title</IgbGridToolbarTitle>
        @*
            Everything between the toolbar tags except the default toolbar components
            will be projected as custom content.
        *@
        <IgbGridToolbarActions>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

`sample="/{ComponentSample}/toolbar-sample-4", height="420", alt="{Platform} {ComponentTitle} toolbar sample 4"`

<!-- end: Angular, WebComponents, Blazor -->

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
}
```

### Demo

`sample="/{ComponentSample}/toolbar-style", height="540", alt="{Platform} {ComponentTitle} Toolbar Styling Example"`

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

## Styling

To get started with styling the toolbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

First, let's create a new palette.

```scss
$my-dark-palette: palette(
    $primary: #2466ff,
    $secondary: #FFCD0F,
    $surface: #2a2b2f,
    $grays: #fff,
);

$my-dark-color: color($my-dark-palette, 'surface');
```

Now, create a new theme that extends the [grid-toolbar-theme]({environment:sassApiUrl}/index.html#function-grid-toolbar-theme) and modify the `$background-color` and the `$title-text-color` parameters.

```scss
$dark-grid-toolbar-theme: grid-toolbar-theme(
    $palette: $my-dark-palette,
    $background-color: $my-dark-color,
    $title-text-color: color($my-dark-palette, 'secondary'),
    $dropdown-background: $my-dark-color,
);
```

To theme the column actions menus of the toolbar, we have to change the theme of the `column-actions-theme` component.

```scss
$dark-column-actions-theme: column-actions-theme(
    $palette: $my-dark-palette,
    $title-color: color($my-dark-palette, 'secondary'),
    $background-color: color($my-dark-palette, 'surface')
);
```

Since the column actions are using other components - igx-button, igx-checkbox, and igx-input-group, we need to change their themes to match our new toolbar theme.

```scss
$dark-button-theme: button-theme(
    $palette: $my-dark-palette,
    $outlined-background: color($my-dark-palette, 'secondary'),
    $outlined-hover-background: color($my-dark-palette, 'grays', 100),
    $outlined-hover-text-color: color($my-dark-palette, 'secondary')
);

$dark-checkbox-theme: checkbox-theme(
    $palette: $my-dark-palette,
    $tick-color: $my-dark-color,
);

$dark-input-group-theme: input-group-theme(
    $palette: $my-dark-palette
);
```

The last step is to **include** the newly created themes.

```scss
:host {
    @include grid-toolbar($dark-grid-toolbar-theme);
    @include column-actions($dark-column-actions-theme);
    @include checkbox($dark-checkbox-theme);
    @include input-group($dark-input-group-theme);
    @include button($dark-button-theme);
}
```

> [!Note]
>If `$legacy-support` is set to `false(default)`, include the component css variables like that:

```scss
:host {
    @include css-vars($dark-grid-toolbar-theme);
    @include css-vars($dark-column-actions-theme);
    @include css-vars($dark-checkbox-theme);
    @include css-vars($dark-input-group-theme);
    @include css-vars($dark-button-theme);
}
```

> [!Note]
>If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include grid-toolbar($dark-grid-toolbar-theme);
        @include column-actions($dark-column-actions-theme);
        @include checkbox($dark-checkbox-theme);
        @include input-group($dark-input-group-theme);
        @include button($dark-button-theme);
    }
}
```

### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/toolbar-style", height="510", alt="{Platform} {ComponentTitle} toolbar style"`



<div class="divider"></div>

<!-- end: Angular -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- React, Blazor -->
## Known Limitations

> [!Note]
> Currently, defining a toolbar component inside the {RowIslandSelector} is not supported.
<!-- end: React, Blazor -->
<!-- ComponentEnd: HierarchicalGrid -->

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

* `GridToolbarAdvancedFiltering`
* `GridToolbar`
* `GridToolbarExporter`
* `GridToolbarHiding`
* `GridToolbarPinning`
* `GridToolbarTitle`

* `{ComponentName}` Events:
* `ToolbarExporting`

<!-- Angular -->

Styles:

* `{ComponentName}` Styles

<!-- end: Angular -->

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
