---
title: Conditional Cell Styling in {Platform} {ComponentTitle} for {ProductName}
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in {Platform} {ComponentTitle} to make cells stand out.
_keywords: conditional styling, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Conditional Styling

If you need to provide any custom styling in the `{ComponentName}` component, you can do it on either row or cell level.

## {ComponentTitle} Conditional Row Styling

The `{ComponentName}` component in {ProductName} provides two ways to **conditional styling of rows** based on custom rules.

- By setting `RowClasses` input on the `{ComponentName}` component;
- By setting `RowStyles` input on the `{ComponentName}` component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the `{ComponentName}` rows by setting the `RowClasses` input and define custom rules.

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<IgbGrid AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowClassesScript="RowClassesHandler" @ref="grid">
</IgbGrid>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" height="600px" width="100%">
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.rowClasses = this.rowClasses;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

The `RowClasses` input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- Angular -->
```typescript
public rowClasses = {
    activeRow: this.activeRowCondition
};

public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
```

```scss
// sample.component.scss

::ng-deep {
 .activeRow {
    border: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
 }
}
```
<!-- end: Angular -->


```razor
igRegisterScript("RowClassesHandler", () => {
    return {
        activeRow: (row) => row.index === 0
    };
}, true);
```

```ts
public rowClasses(args: any) {
    return {
            activeRow: (row) => row.index === 0
        };
}
```

```css
.activeRow {
    border: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
```

<!-- Angular -->
Use **::ng-deep** or **ViewEncapsulation.Non** to force the custom styles down through the current component and its children.
<!-- end: Angular -->

### Demo

`sample="/{ComponentSample}/row-classes", height="600", alt="{Platform} {ComponentTitle} row classes"`


### Using Row Styles

The `{ComponentName}` control exposes the `RowStyles` property which allows conditional styling of the data rows. Similar to `RowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both `RowStyles` and `RowClasses` is:

```ts
(row: RowType) => boolean
```

```razor
(row) => boolean
```

Let's define our styles:

<!-- ComponentStart: Grid -->

```typescript
public rowStyles = {
    'background': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
    'border': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```razor
igRegisterScript("WebGridRowStylesHandler", () => {
    return {
        'background': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };
}, true);
```

```html
<igx-grid #grid1 [data]="data | async" [height]="'500px'" width="100%"
        [autoGenerate]="false" [allowFiltering]="true" [rowStyles]="rowStyles">
</igx-grid>
```

```razor
<IgbGrid AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowStylesScript="WebGridRowStylesHandler" @ref="grid">
</IgbGrid>
```

```html
<igc-grid id="grid1" height="500px" width="100%"
        auto-generate="false" allow-filtering="true">
</igc-grid>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;

    this._bind = () => {
        grid1.rowStyles = this.rowStyles;
    }
    this._bind();
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```typescript
public background = (row: RowType) => row.data.data['Title'] === 'CEO' ? '#6c757d' :
    row.data.data['Title'].includes('President') ? '#adb5bd' : row.data.data['Title'].includes('Director') ?  '#ced4da' :
    row.data.data['Title'].includes('Manager') ? '#dee2e6' :
    row.data.data['Title'].includes('Lead') ? '#e9ecef' :
    row.data.data['Title'].includes('Senior') ? '#f8f9fa' : null;

public rowStyles = {
    background: this.background,
    'border-left': (row: RowType) => row.data.data['Title'] === 'CEO' || row.data.data['Title'].includes('President') ?
        '2px solid' : null,
    'border-color': (row: RowType) => row.data.data['Title'] === 'CEO' ? '#495057' : null,
    color: (row: RowType) => row.data.data['Title'] === 'CEO' ? '#fff' : null
};
```

```razor
Add treegrid styles
```

<!-- Angular -->
```html
<!-- sample.component.html -->
<igx-tree-grid #treeGrid [data]="data" [moving]="true" primaryKey="ID" foreignKey="ParentID"
        width="100%" height="550px" [rowStyles]="rowStyles">
</igx-tree-grid>
```
```html
<igc-tree-grid id="treeGrid" moving="true" primary-key="ID" foreign-key="ParentID"
        width="100%" height="550px">
</igc-tree-grid>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;

    this._bind = () => {
        treeGrid.rowStyles = this.rowStyles;
    }
    this._bind();
}
```
<!-- end: Angular -->

```razor
Add treegrid markup
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```typescript
public rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
};

public childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
};
```

```razor
Add Hierarchical styles
```

```html
<igx-hierarchical-grid  #hierarchicalGrid [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [rowStyles]="childRowStyles">
        </igx-row-island>
</igx-hierarchical-grid>
```

```razor
Add Hierarchical markup
```

```html
<igc-hierarchical-grid id="hierarchicalGrid" auto-generate="false"
        height="580px" width="100%">
        <igc-row-island id="rowIsland1" key="Albums" auto-generate="false" >
        </igc-row-island>>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    var rowIsland1 = this.rowIsland1 = document.getElementById('rowIsland1') as IgcRowIslandComponent;

    this._bind = () => {
        hierarchicalGrid.rowStyles = this.rowStyles;
        rowIsland1.rowStyles = this.childRowStyles;
    }
    this._bind();
}
```
<!-- ComponentEnd: HierarchicalGrid -->


### Demo

`sample="/{ComponentSample}/row-styles", height="620", alt="{Platform} {ComponentTitle} row styles"`


## {ComponentTitle} Conditional Cell Styling

## Overview

The `{ComponentName}` component in {ProductName} provides two ways to **conditional styling of cells** based on custom rules.

- By setting the `Column` input `CellClasses` to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes
You can conditionally style the `{ComponentName}` cells by setting the `Column` `CellClasses` input and define custom rules.

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```
```html
<igc-column id="beatsPerMin" field="BeatsPerMinute" data-type="Number"></igc-column>
```
```ts
constructor() {
    var beatsPerMin = this.beatsPerMin = document.getElementById('beatsPerMin') as IgcColumnComponent;

    this._bind = () => {
        beatsPerMin.cellClasses = this.beatsPerMinuteClasses;
    }
    this._bind();
}
```
<!-- end: Angular -->

```razor
<IgbColumn Field="BeatsPerMinute" CellClassesScript="CellClassesHandler">
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

<!-- Angular -->
```html
<igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [cellClasses] = "priceClasses">
    <ng-template igxCell let-cell="cell" let-val>
        <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
        <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
    </ng-template>
</igx-column>
```
```html
<igc-column id="UnitPrice" field="UnitPrice" header="Unit Price"  data-type="Number"></igc-column>
```
```ts
constructor() {
    var UnitPrice = this.UnitPrice = document.getElementById('UnitPrice') as IgcColumnComponent;

    this._bind = () => {
        UnitPrice.cellClasses = this.priceClasses;
        UnitPrice.bodyTemplate = this.unitPriceTemplate;
    }
    this._bind();
}
public unitPriceTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${if (ctx.cell.value == 0)}
        <span>-</span>
        ${if (ctx.cell.value != 0)}
        <span>${ctx.cell.value}</span>
    `;
}
```
<!-- end: Angular -->

```razor
Add tree grid example
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```razor
add example
```

<!-- ComponentEnd: HierarchicalGrid -->

The `CellClasses` input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- ComponentStart: Grid -->

```typescript

private upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
```

```razor
igRegisterScript("CellClassesHandler", () => {
    return {
        downFont: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] <= 95,
        upFont: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] > 95
    };
}, true);
```

<!-- Angular -->
```scss
// sample.component.scss

::ng-deep {
    .upFont {
        color: green;
    }

    .downFont {
        color: red;
    }
}
```
<!-- end: Angular -->

```css
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```typescript
private upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 25;
}

private downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 25;
}

public priceClasses = {
    downPrice: this.downPriceCondition,
    upPrice: this.upPriceCondition
};
```

```razor
Add treegrid example
```

```scss
::ng-deep {
    .upPrice {
        color: red;
    }

    .downPrice {
        color: green;
    }
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```razor
Add hierarchical grid example
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- Angular -->
Use **::ng-deep** or **ViewEncapsulation.None** to force the custom styles down through the current component and its children.
<!-- end: Angular -->

### Demo

`sample="/{ComponentSample}/conditional-cell-style-1", height="600", alt="{Platform} {ComponentTitle} conditional cell style 1"`


- By using the `Column` input `CellStyles` which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

```razor
(rowData, columnKey, cellValue, rowIndex) => boolean
```

### Using Cell Styles

Columns expose the `CellStyles` property which allows conditional styling of the column cells. Similar to `CellClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

In the [sample above](#demo) we've created:
- Two different styles that will be applied based on the column index.
- You will also change the **text color** based on even/odd rows.


Let's define our styles:


<!-- Angular -->

```typescript
public oddColStyles = {
    background: 'linear-gradient(to right, #b993d6, #8ca6db)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
    animation: '0.75s popin'
};

public evenColStyles = {
    background: 'linear-gradient(to right, #8ca6db, #b993d6)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
    animation: '0.75s popin'
};
```

<!-- end:Angular -->

```razor
igRegisterScript("WebGridCellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "Position") {
                switch (cellValue) {
                    case "up": return "#28a745";
                    case "down": return "#dc3545";
                    case "current": return "#17a2b8"
                }
            }
        }
    };
}, true);
```

```ts
    public WebGridCellStylesHandler(): any {
        return {
            background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
            color: (rowData, columnKey, cellValue, rowIndex) => {
                if (columnKey === "Position") {
                    switch (cellValue) {
                        case "up": return "#28a745";
                        case "down": return "#dc3545";
                        case "current": return "#17a2b8"
                    }
                }
            }
        };
    }
```

<!-- Angular -->
On `ngOnInit` we will add the `CellStyles` configuration for each column of the predefined `Columns` collection, which is used to create the `{ComponentName}` columns dynamically.

```ts
public ngOnInit() {
    this.data = athletesData;
    this.columns = [
        { field: 'Id' },
        { field: 'Position' },
        { field: 'Name' },
        { field: 'AthleteNumber' },
        { field: 'CountryName' }
    ];

    this.applyCSS();
}

public applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });
}

public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();
}
```

```html
<igx-grid
    #grid1 [data]="data"
    primaryKey="ID"
    width="80%"
    height="300px">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.field"
        [cellStyles]="c.cellStyles">
    </igx-column>
</igx-grid>
```

Define a `popin` animation

```scss
// component.scss
@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }
}
```
<!-- end: Angular -->

<!-- Blazor -->

```razor
<IgbColumn CellStylesScript="WebGridCellStylesHandler">
</IgbColumn>
```


<!-- end: Blazor -->

### Demo

`sample="/{ComponentSample}/conditional-cell-style-2", height="620", alt="{Platform} {ComponentTitle} conditional cell style 2"`


## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

<!-- Angular, WebComponents -->

A check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that.

```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

public editDone(evt) {
    this.Col1.cellClasses = {...this.backgroundClasses};
}
```

```html
<igx-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column>
</igx-grid>
```

```html
<igc-grid id="grid1" height="500px" width="100%" >
  <igc-column id="Col1" field="Col1" data-type="number"></igx-column>
  <igc-column id="Col2" field="Col2" data-type="number" editable="true"></igx-column>
  <igc-column id="Col3" field="Col3" header="Col3" data-type="string"></igx-column>
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid1') as IgcGridComponent;
    var Col1 = this.Col1 = document.getElementById('Col1') as IgcColumnComponent;
    var Col2 = this.Col2 = document.getElementById('Col2') as IgcColumnComponent;
    var Col3 = this.Col3 = document.getElementById('Col3') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        grid.onCellEdit = this.editDone;
        Col1.cellClasses = this.backgroundClasses;
        Col2.cellClasses = this.backgroundClasses;
        Col3.cellClasses = this.backgroundClasses;
    }
    this._bind();
}
```

<!-- end:Angular, WebComponents -->

## API References

* `Column`
* `{ComponentName}`

## Additional Resources


* [Virtualization and Performance](virtualization.md)
* [Editing](editing.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Column Hiding](column-hiding.md)
* [Selection](selection.md)
* [Searching](search.md)
* [Toolbar](toolbar.md)
* [Multi-column Headers](multi-column-headers.md)
* [Display Density](display-density.md)


Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
