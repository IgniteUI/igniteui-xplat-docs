---
title: Conditional Cell Styling in {Platform} {ComponentTitle} - {ProductName}
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in {Platform} {ComponentTitle} to make cells stand out.
_keywords: conditional styling, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Conditional Styling

If you need to provide any custom styling in the `{ComponentName}` component, you can do it on either row or cell level.

## {ComponentTitle} Conditional Row Styling

The `{ComponentName}` component in Ignite UI for {Platform} provides two ways to **conditional styling of rows** based on custom rules.

- By setting `RowClasses` input on the `{ComponentName}` component;
- By setting `RowStyles` input on the `{ComponentName}` component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the `{ComponentName}` rows by setting the `RowClasses` input and define custom rules.

```html
<{ComponentSelector} #grid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
</{ComponentSelector}>
```

```razor
ADD razor rowclasess
```

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
Add snippet
```

<!-- Angular -->
Use **::ng-deep** or **ViewEncapsulation.Non** to force the custom styles down through the current component and its children.
<!-- end: Angular -->

### Demo

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-classes"
           github-src="{ComponentSample}/row-classes" >

</code-view>

### Using Row Styles

The `{ComponentName}` control exposes the `RowStyles` property which allows conditional styling of the data rows. Similar to `RowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both `RowStyles` and `RowClasses` is:

```ts
(row: RowType) => boolean
```

```razor
Add callback signature
```

Let's define our styles:

<!-- ComponentStart: Grid -->

```typescript
public rowStyles = {
    background: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000088' : '#00000000',
    border: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```razor
add styles
```

```html
<igx-grid #grid1 [data]="data | async" [height]="'500px'" width="100%"
        [autoGenerate]="false" [allowFiltering]="true" [rowStyles]="rowStyles">
</igx-grid>
```

```razor
Add grid sample
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
<!-- ComponentEnd: HierarchicalGrid -->


### Demo

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-rowStyles-sample"
           github-src="{ComponentSample}/rowStyles-sample" >
</code-view>

## {ComponentTitle} Conditional Cell Styling

## Overview

The `{ComponentName}` component in {ProductName} provides two ways to **conditional styling of cells** based on custom rules.

- By setting the `Column` input `CellClasses` to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

```ts
public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};



private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}
```

```razor
cellclasses example
```

<!-- Angular -->
```scss
// component.scss file
.upFont {
    color: red;
}

.downFont {
    color: green;
}
```
<!-- end: Angular -->


### Using Cell Classes

You can conditionally style the `{ComponentName}` cells by setting the `Column` `CellClasses` input and define custom rules.

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```
<!-- end: Angular -->

```razor
example
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
add example
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

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-conditional-cell-style-1"
           github-src="{ComponentSample}/conditional-cell-style-1" >
</code-view>

- By using the `Column` input `CellStyles` which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

```ts
public styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'
};
```

```razor
cellstyles example
```

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

```razor
callback signature for blazor
```

### Using Cell Styles

Columns expose the `CellStyles` property which allows conditional styling of the column cells. Similar to `CellClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

In the [sample above](#demo) we've created:
- Two different styles that will be applied based on the column index.
- You will also change the `text color` based on even/odd rows.


Let's define our styles:

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

```razor
define styles for blazor
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
Add similar to ngOnInit
Add similar handling
<!-- end: Blazor -->

### Demo

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-cell-cellStyling"
           github-src="{ComponentSample}/cell-cellStyling" >
</code-view>

## Known Issues and Limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

A pipe check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that with a `spread operator` ... on `OnCellEdit` event. This will copy the original object with a new instance, and lead pure pipe to be fired.

```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

editDone(evt) {
    this.backgroundClasses = {...this.backgroundClasses};
}

```
<!-- Angular -->
```html
<igx-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column>
</igx-grid>
```
<!-- end: Angular -->

```razor
Logic for that
```

## API References

* `Column`
* `{ComponentTitle}`

## Additional Resources


* [Grid Overview](overview.md)
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

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
