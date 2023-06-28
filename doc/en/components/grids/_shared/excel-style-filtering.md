---
title:  Excel Style Filtering in {Platform} {ComponentTitle} for {ProductName}
_description: Learn how to configure Excel filtering in {Platform} {ComponentTitle}. You can enable/disable various options and customize the Excel style filter menu the way you want.
_keywords: excel like filter, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# Excel Filtering in {Platform} {ComponentTitle}

The {Platform} `{ComponentName}` exposes an Excel-style filtering feature that provides an Excel-like filtering UI.

## {Platform} {ComponentTitle} Excel Style Filtering Example

`sample="/{ComponentSample}/excel-style-filtering-sample-1", height="950", alt="{Platform} {ComponentTitle} excel style filtering sample 1"`


## Usage

To turn on the `Grid` component's Excel-style filtering, two inputs should be set. The `AllowFiltering` should be set to **true** and the `FilterMode` should be set to `ExcelStyleFilter` value.

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'" >
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<IgbGrid AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter" />
```

<!-- WebComponents -->
```html
<{ComponentSelector} auto-generate="true" allow-filtering="true" filter-mode="excelStyleFilter" >
</{ComponentSelector}>
```
<!-- end: WebComponents -->

## Interactions

In order to open the filter menu for a particular column, the {Platform} filter icon in the header should be clicked. Additionally, you can use the <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.

If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press <kbd>Enter</kbd>. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is `OR`.

If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option **Add current selection to filter**.

If you want to clear the filter, you can check the **Select All** option and then click the Apply button.

To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.


## Configure Menu Features

Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: `Sortable`, `Selected`, `DisablePinning`, `DisableHiding`.

<!-- ComponentStart: Grid -->

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

```razor
    <IgbGrid Data=northwindEmployees
             AllowFiltering="true"
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate="false">
        <IgbColumn Field="ProductName" Sortable="true"></IgbColumn>
        <IgbColumn Field="UnitPrice" Sortable="true" DisablePinning="true" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="QuantityPerUnit" Sortable="false" DisablePinning="true" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="OrderDate" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="Discontinued" Sortable="true"></IgbColumn>
    </IgbGrid>
```

```html
<igc-grid id="grid1" auto-generate="false" height="650px" width="100%" moving="true" allow-filtering="true" filter-mode="ExcelStyleFilter">
    <igc-column field="ProductName" header="Product Name" sortable="true" data-type="String">
    </igc-column>
    <igc-column field="QuantityPerUnit" header="Quantity Per Unit" sortable="false" disable-pinning="true" disable-hiding="true" data-type="String">
    </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" disable-pinning="true" disable-hiding="true" sortable="true" data-type="Number">
    </igc-column>
    <igc-column field="OrderDate" header="Order Date" sortable="false"  data-type="Date">
    </igc-column>
    <igc-column field="Discontinued" header="Discontinued" sortable="true" data-type="Boolean">
    </igc-column>
</igc-grid>
```

In the sample below **Product Name** and **Discontinued** columns have all four features enabled, **Quantity Per Unit** have all three disabled, **Unit Price** has only sorting and **Order Date** has only pinning and hiding and all are `Selectable`.

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [moving]="true" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Product ID" [dataType]="'string'">
    </igx-column>
    <igx-column field="Name" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="false" [disablePinning]="true" [disableHiding]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
            <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
        </ng-template>
    </igx-column>
    <igx-column field="AddedDate" header="Added Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
            <img *ngIf="cell.row.data.UnitPrice != 0 && val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="cell.row.data.UnitPrice != 0 && !val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

```razor
Add tree grid snippet
```

```html
<igc-tree-grid id="treegrid1" auto-generate="false" height="480px" width="100%" moving="true" allow-filtering="true"
    primary-key="ID" foreign-key="ParentID" filter-mode="ExcelStyleFilter">
    <igc-column field="ID" header="Product ID" data-type="String">
    </igc-column>
    <igc-column field="Name" header="Product Name" sortable="true" data-type="'string'">
    </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" data-type="Number" sortable="false" disable-pinning="true" disable-hiding="true">
    </igc-column>
    <igc-column field="AddedDate" header="Added Date" data-type="Date" sortable="false">
    </igc-column>
    <igc-column field="Discontinued" header="Discontinued" data-type="Boolean" sortable="true">
    </igc-column>
</igc-tree-grid>
```

In the sample below 'Product Name' and 'Discontinued' columns have all three features enabled, 'Unit Price' have all three disabled, 'Added Date' has only pinning and hiding.

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

```razor
Add blazor snippets here
```

```html
<igc-hierarchical-grid class="hgrid" auto-gGenerate="false" moving="true" allow-filtering='true' filter-mode="ExcelStyleFilter"
    height="650px" width="100%" rowHeight="65px" id="hierarchicalGrid">
    <igc-column field="Artist" filterable='true' sortable="true"></igc-column>
    <igc-column field="Photo" filterable='false'>
    </igc-column>
    <igc-column field="Debut" filterable='true' disable-pinning="true" disable-hiding="true"></igc-column>
    <igc-column field="Grammy Nominations" filterable='true' date-type="Number" sortable="false"></igc-column>
    <igc-column field="Grammy Awards" filterable='true' date-type="Number"></igc-column>

    <igc-row-island key="Albums" auto-gGenerate="false" allow-filtering='true' filter-mode="ExcelStyleFilter">
        <igc-column field="Album" filterable='true'></igc-column>
        <igc-column field="Launch Date" filterable='true' date-type="Date"></igc-column>
        <igc-column field="Billboard Review" filterable='true' date-type="Number"></igc-column>
        <igc-column field="US Billboard 200" filterable='true' date-type="Number"></igc-column>
    <igc-row-island key="Songs" auto-generate="false" >
            <igc-column field="No."></igc-column>
            <igc-column field="Title"></igc-column>
            <igc-column field="Released"></igc-column>
            <igc-column field="Genre"></igc-column>
    </igc-row-island>
    </igc-row-island>

    <igc-row-island key="Tours" auto-generate="false">
        <igc-column field="Tour"></igc-column>
        <igc-column field="Started on"></igc-column>
        <igc-column field="Location"></igc-column>
        <igc-column field="Headliner"></igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

In the sample below 'Artist' column have all three features enabled, 'Debut' have all three disabled, 'Grammy Nominations' has only pinning and hiding.

<!-- ComponentEnd: HierarchicalGrid -->

`sample="/{ComponentSample}/excel-style-filtering-sample-2", height="620", alt="{Platform} {ComponentTitle} excel style filtering sample 2"`


## Templates

<!-- Angular -->

If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:
- `IgxExcelStyleColumnOperationsTemplateDirective` - re-templates the area with all column operations like sorting, pinning, etc.
- `IgxExcelStyleFilterOperationsTemplateDirective` - re-templates the area with all filter specific operations.

You could either re-template only one of those areas or both of them. You could put any custom content inside those directives or you could use any of our built-in Excel style filtering components.

The following code demonstrates how to define a custom Excel style filter menu using the `excel-style-header`, `excel-style-sorting` and `excel-style-search` components.

<!-- end: Angular -->

<!-- WebComponents, Blazor -->

If you want to further customize the Excel style filter menu, you can use the `ExcelStyleHeaderIconTemplate` property to define a custom template for the header icon of the menu.

The following code demonstrates how to customize the Excel style filter menu using the `ExcelStyleHeaderIconTemplate`:

```razor
<IgbGrid    
    Name="grid"
    @ref="grid"
    Data="Data"    
    AllowFiltering="true"
    FilterMode="FilterMode.ExcelStyleFilter"
    ExcelStyleHeaderIconTemplateScript="WebGridFilterAltIconTemplate"/>

*** In JavaScript ***
igRegisterScript("WebGridFilterAltIconTemplate", (ctx) => {
    var html = window.igTemplating.html;
        return html`<img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />`
}, false);
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.excelStyleHeaderIconTemplate = this.webGridFilterAltIconTemplate;
}

public webGridFilterAltIconTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />`
}
```

<!-- end: WebComponents, Blazor -->

<!-- ComponentStart: Grid -->

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

</igx-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-grid id="grid1" auto-generate="false" height="650px" width="100%" allow-filtering="true" filter-mode="ExcelStyleFilter">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>

</igc-grid>
``` -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
</igx-tree-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-tree-grid id="treegrid1" auto-generate="false" height="650px" width="100%" allow-filtering="true"
    primary-key="ID" foreign-key="ParentID" filter-mode="ExcelStyleFilter">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>

</igc-tree-grid>
``` -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>

</igx-hierarchical-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-hierarchical-grid class="hgrid" auto-generate="false" allow-fFiltering='true' filter-mode="ExcelStyleFilter"
    height="650px" width="100%" row-height="65px" id="hierarchicalGrid">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>
    <igc-row-island key="Albums" auto-generate="false" allow-fFiltering='true' filter-mode="ExcelStyleFilter">
        <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
            <igc-excel-style-column-operations>
                <igc-excel-style-header
                    show-pinning="true"
                    show-hiding="true"
                >
                </igc-excel-style-header>

                <igc-excel-style-sorting></igc-excel-style-sorting>
            </igc-excel-style-column-operations>

            <igc-excel-style-filter-operations>
                <igc-excel-style-search></igc-excel-style-search>
            </igc-excel-style-filter-operations>
        </igc-grid-excel-style-filtering>

</igc-hierarchical-grid>
``` -->

<!-- ComponentEnd: HierarchicalGrid -->


<!-- Angular -->

You could also re-template the Excel style filtering icon in the column header using the `ExcelStyleHeaderIcon` directive:

```html
<{ComponentSelector}>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</{ComponentSelector}>
```

```ts
public filterIconHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igx-icon>filter_alt</igx-icon>`;
}
```

<!-- end: Angular -->

`sample="/{ComponentSample}/excel-style-filtering-sample-3", height="620", alt="{Platform} {ComponentTitle} excel style filtering sample 3"`


<!-- Angular -->

Here is the full list of Excel style filtering components that you could use:
- `Excel-style-header`
- `Excel-style-sorting`
- `Excel-style-moving`
- `Excel-style-pinning`
- `Excel-style-hiding`
- `Excel-style-selecting`
- `Excel-style-clear-filters`
- `Excel-style-conditional-filter`
- `Excel-style-search`

<!-- end: Angular -->

<!-- Angular -->

## Unique Column Values Strategy

The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. These values can be provided manually and loaded on demand, which is demonstrated in the [{ComponentTitle} Remote Data Operations](remote-data-operations.md#unique-column-values-strategy) topic.

<!-- end: Angular -->

<!-- Angular -->

 ## Formatted Values Filtering Strategy

By default, the {ComponentTitle} component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values.

<!-- ComponentStart: Grid, HierarchicalGrid -->

In order to do that you can use the `FormattedValuesFilteringStrategy`.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

In order to do that you can use the `TreeGridFormattedValuesFilteringStrategy`.

<!-- ComponentEnd: TreeGrid -->

The following sample demonstrates how to format the numeric values of a column as strings and filter the {ComponentTitle} based on the string values:



`sample="/{ComponentSample}/filtering-strategy", height="620", alt="{Platform} {ComponentTitle} filtering strategy"`


> [!Note]
>The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.

<!-- end: Angular -->

<!-- ComponentStart: TreeGrid -->

## Tree Filter View

By default, the Excel Style Filtering dialog displays the items in a list view. In order to display them in a tree view you can use the `TreeGridFilteringStrategy` and specify an array of column field names. Filter items will be displayed in a tree view for the speicified columns and in a list view for all other columns. The following sample demonstrates how to show filter items in a tree view for the first column:

`sample="/{ComponentSample}/filter-view", height="650", alt="{Platform} {ComponentTitle} filter view"`


<!-- ComponentEnd: TreeGrid -->

<!-- Angular -->

## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the `{ComponentName}`. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the `{ComponentName}`.

### Demo

`sample="/{ComponentSample}/external-excel-style-filtering", height="620", alt="{Platform} {ComponentTitle} external excel style filtering"`


### Usage

In order to configure the Excel style filtering component, you should set its `Column` property to one of the {ComponentTitle}'s columns. In the sample above, we have bound the `Column` property to the value of an SelectComponent that displays the {ComponentTitle}'s columns.


<!-- ComponentStart: Grid -->

```html
<igx-select #gridColums value="ProductID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of grid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
add snippet for blazor
``` -->

```html
<igc-select id="gridColums" value="ProductID">
   <label>Columns:</label>
</igc-select>

<igc-grid-excel-style-filtering>
</igc-grid-excel-style-filtering>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-select #gridColums value="ID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of treegrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="treegrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
Add snippet for blazor
``` -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-select #gridColums value="Artist">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of hierarchicalgrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="hierarchicalgrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
Add snippet for blazor
``` -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular -->

<!-- Angular -->

## External Outlet

The {ComponentTitle}'s [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) creates separate stacking context for each grid in the DOM. This ensures that all descendant elements of the grid will render as intended, without overlapping one another.
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the `Outlet` property to an external outlet directive which allows the overlay elements to always appear on top.

### Demo

`sample="/{ComponentSample}/external-outlet", height="700", alt="{Platform} {ComponentTitle} external outlet"`

<!-- end: Angular -->


<!-- Angular -->

## Styling

To get started with styling the Excel Style Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The excel style filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. In order to change the background we need to create a custom theme:

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);
```

We obviously have a lot more components inside the excel like filtering dialog, such as buttons, checkboxes, a list and even a drop-down. In order to style them, we need to create a separate theme for each one:

```scss
$dark-button: button-theme(
    $background: #FFCD0F,
    $foreground: #292826,
    $hover-background: #292826,
    $hover-foreground: #FFCD0F
);

$dark-input-group: input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$custom-list: list-theme(
    $background: #FFCD0F
);

$custom-checkbox: checkbox-theme(
    $empty-color: #292826,
    $fill-color: #292826,
    $tick-color: #FFCD0F,
    $label-color: #292826
);

$custom-drop-down: drop-down-theme(
    $background-color: #FFCD0F,
    $item-text-color: #292826,
    $hover-item-background: #292826,
    $hover-item-text-color: #FFCD0F
);
```

In this example we only changed some of the parameters for the listed components, but the [button-theme]({environment:sassApiUrl}/index.html#function-button-theme), [checkbox-theme]({environment:sassApiUrl}/index.html#function-checkbox-theme), [drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme), [input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme), [list-theme]({environment:sassApiUrl}/index.html#function-list-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.

```scss
@include drop-down($custom-drop-down);
@include grid($custom-grid);
.igx-excel-filter, .igx-excel-filter__secondary {
    @include button($dark-button);
    @include input-group($dark-input-group);
    @include list($custom-list);
    @include checkbox($custom-checkbox);
    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

> [!Note]
>We scope most of the components' mixins within `.igx-excel-filter` and `.igx-excel-filter__secondary`, so that these custom themes will affect only components nested in the excel style filtering dialog and all of its sub-dialogs. Otherwise other buttons, checkboxes, input-groups and lists would be affected too.

> [!Note]
>If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include grid($custom-grid);
        .igx-excel-filter, .igx-excel-filter__secondary {
            @include button($dark-button);
            @include input-group($dark-input-group);
            @include list($custom-list);
            @include checkbox($custom-checkbox);
            .igx-input-group__input::placeholder {
                color: #FFCD0F;
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

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```
And then with [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);

$dark-button: button-theme(
    $background: color($dark-palette, "secondary", 400),
    $foreground: color($dark-palette, "primary", 400),
    $hover-background: color($dark-palette, "primary", 400),
    $hover-foreground: color($dark-palette, "secondary", 400)
);

$dark-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 400),
    $idle-text-color: color($dark-palette, "primary", 400),
    $focused-text-color: color($dark-palette, "primary", 400),
    $filled-text-color: color($dark-palette, "primary", 400)
);

$custom-list: list-theme(
    $background: color($dark-palette, "secondary", 400)
);

$custom-checkbox: checkbox-theme(
    $empty-color: color($dark-palette, "primary", 400),
    $fill-color: color($dark-palette, "primary", 400),
    $tick-color: color($dark-palette, "secondary", 400),
    $label-color: color($dark-palette, "primary", 400)
);

$custom-drop-down:drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),
    $item-text-color: color($dark-palette, "primary", 400),
    $hover-item-background: color($dark-palette, "primary", 400),
    $hover-item-text-color: color($dark-palette, "secondary", 400)
);
```

> [!Note]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid), [light-input-group]({environment:sassApiUrl}/index.html#variable-_light-input-group), [light-button]({environment:sassApiUrl}/index.html#variable-_light-button), [light-list]({environment:sassApiUrl}/index.html#variable-_light-list), [light-checkbox]({environment:sassApiUrl}/index.html#variable-_light-checkbox) and [light-drop-down]({environment:sassApiUrl}/index.html#variable-_light-drop-down) schemas:

```scss
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
           color: ("secondary", 400)
        )
    )
);

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
        ),

        raised-background:(
           color: ("secondary", 400)
        ),
        raised-text-color:(
           color: ("primary", 400)
        ),
        raised-hover-background:(
           color: ("primary", 400)
        ),
        raised-hover-text-color:(
           color: ("secondary", 400)
        )
    )
);

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

$custom-list-schema: extend($_light-list,
    (
        background:(
           color: ("secondary", 400)
        )
    )
);

$custom-checkbox-schema: extend($_light-checkbox,
    (
        empty-color:(
           color: ("primary", 400)
        ),
        fill-color:(
           color: ("primary", 400)
        ),
        tick-color:(
           color: ("secondary", 400)
        ),
        label-color:(
           color: ("primary", 400)
        )
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),
        item-text-color:(
           color: ("primary", 400)
        ),
        hover-item-background:(
           color: ("primary", 400)
        ),
        hover-item-text-color:(
           color: ("secondary", 400)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
$custom-light-schema: extend($light-schema,(
   grid: $custom-grid-schema,
   button: $custom-button-schema,
   input-group: $custom-input-group-schema,
   list: $custom-list-schema,
   checkbox: $custom-checkbox-schema,
   drop-down: $custom-drop-down-schema
));

$custom-grid: grid-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-list: list-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-checkbox: checkbox-theme(
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

`sample="/{ComponentSample}/excel-style-filtering-style", height="950", alt="{Platform} {ComponentTitle} excel style filtering style"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

<!-- WebComponents, Blazor -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --igx-grid-filtering-row-background: #ffcd0f;
    --igx-list-item-background: #ffcd0f;
}
```
### Demo

`sample="/{ComponentSample}/excel-style-filtering-style", height="950", alt="{Platform} {ComponentTitle} excel style filtering style"`

<!-- end: WebComponents, Blazor -->

## API References

* `Column`
* `Grid`


## Additional Resources

<!-- ComponentStart:  Grid -->
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
