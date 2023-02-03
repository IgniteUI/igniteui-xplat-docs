---
title: {Platform} Hierarchical Data Grid | Material Table | {ProductName} | Infragistics
_description: Learn how to use {ProductName} data grid, based on {Platform} Material Table and create a touch-responsive {Platform} component with variety of {Platform} events.
_keywords: {Platform} data grid, igniteui for {Platform}, infragistics
---

# Hierarchical Data Grid Overview and Configuration

{ProductName} Hierarchical Data Grid is used to display and manipulate hierarchical data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. The Hierarchical Grid builds upon the Flat Grid Component and extends its functionality by allowing the users to expand or collapse the rows of the parent grid, revealing the corresponding child grid, when more detailed information is needed. Displaying of hierarchical data has never been easier and beautiful thanks to the Material Table-based UI Grid.

## {Platform} Hierarchical Data Grid Example
In this {Platform} grid example you can see how users can visualize hierarchical sets of data and use cell templating to add other visual components like [Sparkline](../charts/types/sparkline-chart.md).

<code-view style="height:520px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing" alt="{Platform} Hierarchical Data Grid Example">
</code-view>

<div class="divider--half"></div>

## Dependencies

>[!NOTE]
>**This component requires `HammerModule` to be imported in the root module of the application in order for touch interactions to work as expected.**.

To get started with the Hierarchical Data Grid, first you need to install Ignite UI for {Platform} by typing the following command:

```cmd
ng add igniteui-{Platform}
```
For a complete introduction to the Ignite UI for {Platform}, read the [*getting started*](../general/getting-started.md) topic.

The Hierarchical Grid is exported as an `NgModule` - all you need to do in your application is import the _HierarchicalGridModule_ inside your `AppModule`.

```typescript
// app.module.ts

import { HierarchicalGridModule } from 'igniteui-{Platform}';

@NgModule({
    imports: [
        ...
        HierarchicalGridModule,
        ...
    ]
})
export class AppModule {}
```

We can obtain a reference to the Hierarchical Grid in TypeScript the following way:

```typescript
@ViewChild('hgrid1', { read: HierarchicalGridComponent })
public hgrid1: HierarchicalGridComponent;
```

## Data Binding

**hierarchical-grid** derives from **grid** and shares most of its functionality. The main difference is that it allows multiple levels of hierarchy to be defined. They are configured through a separate tag within the definition of **hierarchical-grid**, called **row-island**. The **row-island** component defines the configuration for each child grid for the particular level. Multiple row islands per level are also supported.
The Hierarchical Grid supports two ways of binding to data:

### Using hierarchical data

If the application loads the whole hierarchical data as an array of objects referencing children arrays of objects, then the Hierarchical Grid can be configured to read it and bind to it automatically. Here is an example of a properly structured hierarchical data source:

```javascript
export const singers = [{
    "Artist": "Naomí Yepes",
    "Photo": "assets/images/hgrid/naomi.png",
    "Debut": "2011",
    "Grammy Nominations": 6,
    "Grammy Awards": 0,
    "Tours": [{
        "Tour": "Faithful Tour",
        "Started on": "Sep-12",
        "Location": "Worldwide",
        "Headliner": "NO",
        "Toured by": "Naomí Yepes"
    }],
    "Albums": [{
        "Album": "Dream Driven",
        "Launch Date": new Date("August 25, 2014"),
        "Billboard Review": "81",
        "US Billboard 200": "1",
        "Artist": "Naomí Yepes",
        "Songs": [{
            "No.": "1",
            "Title": "Intro",
            "Released": "*",
            "Genre": "*",
            "Album": "Dream Driven"
        }]
    }]
}];
```
Each **row-island** should specify the key of the property that holds the children data.

```html
<hierarchical-grid #hierarchicalGrid [data]="singers" [autoGenerate]="true">
    <row-island [key]="'Albums'" [autoGenerate]="true">
        <row-island [key]="'Songs'" [autoGenerate]="true">
        </row-island>
    </row-island>
    <row-island [key]="'Tours'" [autoGenerate]="true">
    </row-island>
</hierarchical-grid>
```
> [!NOTE]
> Note that instead of `data` the user configures only the `key` that the **hierarchical-grid** needs to read to set the data automatically.

### Using Load-On-Demand

Most applications are designed to load as little data as possible initially, which results in faster load times. In such cases **hierarchical-grid** may be configured to allow user-created services to feed it with data on demand. The following configuration uses a special `@Output` and a newly introduced loading-in-progress template to provide a fully-featured load-on-demand.

```html
<!-- hierarchicalGridSample.component.html -->

    <hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="true" [height]="'600px'" [width]="'100%'">
        <row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="true"  (gridCreated)="gridCreated($event, 'CustomerID')">
            <row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="true" (gridCreated)="gridCreated($event, 'OrderID')">
            </row-island>
        </row-island>
    </hierarchical-grid>
```

```typescript
//  hierarchicalGridSample.component.ts

export class HierarchicalGridLoDSampleComponent implements AfterViewInit {
    @ViewChild("hGrid")
    public hGrid: HierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }

    public ngAfterViewInit() {
        this.hGrid.isLoading = true;
        this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
            this.hGrid.isLoading = false;
            this.hGrid.data = data;
            this.hGrid.cdr.detectChanges();
        });
    }

    public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
        const dataState = {
            key: event.owner.key,
            parentID: event.parentID,
            parentKey: _parentKey,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            }
        );
    }
}
```

```typescript
// remote-load-on-demand.service.ts

@Injectable()
export class RemoteLoDService {
    public url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState?: any): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response) => response["value"])
        );
    }

    public buildUrl(dataState) {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }
}
```

## Hide/Show row expand indicators

If you have a way to provide information whether a row has children prior to its expanding, you could use the [`hasChildrenKey`]({environment:{Platform}ApiUrl}/classes/treegridcomponent.html#haschildrenkey) input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

```html
<hierarchical-grid #grid [data]="data" primaryKey="ID" hasChildrenKey="hasChildren">
        ...
</hierarchical-grid>
```

Note that setting the [`hasChildrenKey`]({environment:{Platform}ApiUrl}/classes/hierarchicalgridcomponent.html#haschildrenkey) property is not required. In case you don't provide it, expansion indicators will be displayed for each row.

Additionally if you wish to show/hide the header expand/collapse all indicator you can use the [showExpandAll]({environment:{Platform}ApiUrl}/classes/hierarchicalgridcomponent.html#showExpandAll) property.
This UI is disabled by default for performance reasons and it is not recommended to enable it in grids with large data or grids with load on demand.

## Features

The grid features could be enabled and configured through the **row-island** markup - they get applied for every grid that is created for it. Changing options at runtime through the row island instance changes them for each of the grids it has spawned.

```html
<hierarchical-grid [data]="localData" [displayDensity]="density" [autoGenerate]="false"
    [allowFiltering]='true' [height]="'600px'" [width]="'800px'" #hGrid>
    <column field="ID" [pinned]="true" [filterable]='true'></column>
    <column-group header="Information">
        <column field="ChildLevels"></column>
        <column field="ProductName" hasSummary='true'></column>
    </column-group>
    <row-island [key]="'childData'" [autoGenerate]="false" [rowSelection]="'multiple'" #layout1>
        <column field="ID" [hasSummary]='true' [dataType]="'number'"></column>
        <column-group header="Information2">
            <column field="ChildLevels"></column>
            <column field="ProductName"></column>
        </column-group>
        <paginator *Paginator [perPage]="5"></paginator>
    </row-island>
    <paginator>
    </paginator>
</hierarchical-grid>
```

The following grid features work on a per grid level, which means that each grid instance manages them independently of the rest of the grids:

- Sorting
- Filtering
- Paging
- Multi Column Headers
- Hiding
- Pinning
- Moving
- Summaries
- Search

The Selection and Navigation features work globally for the whole **hierarchical-grid**

- Selection
    Selection does not allow selected cells to be present for two different child grids at once.
- Navigation
    When navigating up/down, if next/prev element is a child grid, navigation will continue in the related child grid, marking the related cell as selected and focused. If the child cell is outside the current visible view port it is scrolled into view so that selected cell is always visible.

## Collapse All Button

The Hierarchical Grid allows the users to conveniently collapse all its currently expanded rows by pressing the "Collapse All" button at its top left corner. Additionally, every child grid which contains other grids and is a Hierarchical Grid itself, also has such a button - this way the user is able to collapse only a given grid in the hierarchy:

<img class="responsive-img" src="../../images/unfold_less_icon_screenshot.jpg" srcset="../../images/unfold_less_icon_screenshoto@2x.jpg 2x" />

## Sizing

See the [Grid Sizing](sizing.md) topic.

## CRUD operations

> [!NOTE]
> An important difference from the flat Data Grid is that each instance for a given row island has the same transaction service instance and accumulates the same transaction log. In order to enable the CRUD functionality users should inject the `HierarchicalTransactionServiceFactory`.

Calling CRUD API methods should still be done through each separate grid instance.

Check out the How-to [Build CRUD operations with Grid](../general/how-to/how-to-perform-crud.md) topic.

## Styling

The HierarchicalGrid allows styling through the [Ignite UI for {Platform} Theme Library](../themes/sass/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the HierarchicalGrid styling.

### Importing global theme
To begin the customization of the hierarchical grid, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@import '~igniteui-{Platform}/lib/core/styles/themes/index'
```

### Defining custom theme
Next, create a new theme, that extends the `grid-theme` and accepts the parameters, required to customize the hierarchical grid as desired.

 >[!NOTE]
 >There is no specific `sass` hierarchical grid function.


```scss
$custom-theme: grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $row-hover-background: #f8e495,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: #e0b710,
  $resize-line-color: #ffcd0f,
  $row-highlight: #ffcd0f
);
```

### Defining a custom color palette
In the approach, that was described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the `palette` and `color` functions.
`palette` generates a color palette, based on provided primary and secondary colors.

 ```scss
$black-color: #494949;
$yellow-color: #FFCD0F;

$custom-palette: palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
After a custom palette has been generated, the `color` function can be used to obtain different varieties of the primary and the secondary colors.
```scss
$custom-theme: grid-theme(
    $cell-active-border-color: (color($custom-palette, "secondary", 500)),
    $cell-selected-background: (color($custom-palette, "primary", 300)),
    $row-hover-background: (color($custom-palette, "secondary", 100)),
    $row-selected-background: (color($custom-palette, "primary", 100)),
    $header-background: (color($custom-palette, "primary", 500)),
    $header-text-color: (contrast-color($custom-palette, "primary", 500)),
    $expand-icon-color: (color($custom-palette, "secondary", 500)),
    $expand-icon-hover-color: (color($custom-palette, "secondary", 600)),
    $resize-line-color: (color($custom-palette, "secondary", 500)),
    $row-highlight: (color($custom-palette, "secondary", 500))
);
```

### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/sass/schemas.md). The **schema** is the recipe of a theme.
Extend one of the two predefined schemas, that are provided for every component. In our case, we will use `$_light_grid`.
```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (color:('secondary', 500)),
    cell-selected-background: (color:('primary', 300)),
    row-hover-background: (color:('secondary', 100)),
    row-selected-background: (color:('primary', 100)),
    header-background: (color:('primary', 500)),
    header-text-color: (contrast-color:('primary', 500)),
    expand-icon-color: (color:('secondary', 500)),
    expand-icon-hover-color: (color:('secondary', 600)),
    resize-line-color: (color:('secondary', 500)),
    row-highlight: (color:('secondary', 500))
));
```
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.
```scss
$my-custom-schema: extend($light-schema, (
    grid: $custom-grid-schema
));

$custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:

```scss
@include grid($custom-theme);
```

### Scoped component theme

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to {Platform}'s [ViewEncapsulation](https://{Platform}.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### Demo

<code-view style="height:505px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-styling" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## Performance (Experimental)

The `HierarchicalGrid`'s design allows it to take advantage of the Event Coalescing feature that has {Platform} introduced. This feature allows for improved performance with roughly around **`20%`** in terms of interactions and responsiveness. This feature can be enabled on application level by simply setting the `ngZoneEventCoalescing ` and `ngZoneRunCoalescing` properties to `true` in the `bootstrapModule` method:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> This is still in experimental feature for the `HierarchicalGrid`. This means that there might be some unexpected behaviors in the Hierarchical Grid. In case of encountering any such behavior, please contact us on our [Github](https://github.com/IgniteUI/igniteui-{Platform}/discussions) page.

>[!NOTE]
> Enabling it can affects other parts of an {Platform} application that the `HierarchicalGrid` is not related to.

## Known Limitations

|Limitation|Description|
|--- |--- |
|Group By|Group By feature is not supported by the hierarchical grid.|

> [!NOTE]
> `HierarchicalGrid` uses `ForOf` directive internally hence all `ForOf` limitations are valid for `HierarchicalGrid`. For more details see [ForOf Known Issues](../for-of.md#known-limitations) section.

## API References

* [HierarchicalGridComponent]({environment:{Platform}ApiUrl}/classes/hierarchicalgridcomponent.html)
* [RowIslandComponent]({environment:{Platform}ApiUrl}/classes/rowislandcomponent.html)
* [GridComponent]({environment:{Platform}ApiUrl}/classes/gridcomponent.html)
* [GridComponent Styles]({environment:sassApiUrl}/#function-grid-theme)
* [ColumnComponent]({environment:{Platform}ApiUrl}/classes/columncomponent.html)
* [HierarchicalGridRow]({environment:{Platform}ApiUrl}/classes/hierarchicalgridrow.html)
* [GridCell]({environment:{Platform}ApiUrl}/classes/gridcell.html)

## Theming Dependencies
* [Icon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [InputGroup Theme]({environment:sassApiUrl}/index.html#function-input-group-theme)
* [Chip Theme]({environment:sassApiUrl}/index.html#function-chip-theme)
* [Ripple Theme]({environment:sassApiUrl}/index.html#function-ripple-theme)
* [Button Theme]({environment:sassApiUrl}/index.html#function-button-theme)
* [Overlay Theme]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [DropDown Theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [Calendar Theme]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [ActionStrip Theme]({environment:sassApiUrl}/index.html#function-action-strip-theme)
* [SnackBar Theme]({environment:sassApiUrl}/index.html#function-snackbar-theme)
* [Badge Theme]({environment:sassApiUrl}/index.html#function-badge-theme)

## Additional Resources
<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})