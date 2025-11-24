---
title: {Platform} {ComponentTitle} Cell Merging - {ProductName}
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the {ProductName} for {Platform} {ComponentTitle}. Check out examples and demos!
_keywords: cell merging, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: commercial
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
---

# {Platform} {ComponentTitle} Cell Merging

<!-- WebComponents, React -->
The Ignite UI for {Platform} {ComponentTitle} provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.
<!-- end: WebComponents, React -->
<!-- Blazor -->
The Ignite UI for {Platform} {ComponentTitle} provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values.
<!-- end: Blazor -->
## {Platform} {ComponentTitle} Cell Merging Example

<!-- ComponentStart: Grid -->
`sample="/{ComponentSample}/cell-merge", height="600", alt="{Platform} {ComponentTitle} Cell Merging Example"`
<!-- ComponentEnd: Grid -->
<!-- ComponentStart: HierarchicalGrid -->
`sample="/{ComponentSample}/cell-merge", height="475", alt="{Platform} {ComponentTitle} Cell Merging Example"`
<!-- ComponentEnd: HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
`sample="/{ComponentSample}/cell-merge", height="755", alt="{Platform} {ComponentTitle} Cell Merging Example"`
<!-- ComponentEnd: TreeGrid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:
- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:
- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```tsx
<{ComponentSelector} data={data} cellMergeMode={cellMergeMode} >
    ...
</{ComponentSelector}>
```

```tsx
const cellMergeMode: GridCellMergeMode = 'always';
```

```html
<{ComponentSelector} cell-merge-mode="always">
    ...
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Data="Data" CellMergeMode="CellMergeMode" >
    ...
</{ComponentSelector}>

@code {
    private GridCellMergeMode CellMergeMode = GridCellMergeMode.Always;
}
```
### Column Merge Toggle
At the column level, merging can be enabled or disabled with the `merge` property.

```tsx
<IgrColumn field="OrderID" merge={true}></IgrColumn>
<IgrColumn field="ShipperName" merge={false}></IgrColumn>
```

```html
<igc-column field="OrderID" merge="true"></igc-column>
<igc-column field="ShipperName" merge="false"></igc-column>
```

```razor
<IgbColumn Field="OrderID" Merge="true"></IgbColumn>
<IgbColumn Field="ShipperName" Merge="false"></IgbColumn>
```

In the above example:
- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.

### Combined Example

```tsx
<{ComponentSelector} data={data} cellMergeMode={cellMergeMode} autoGenerate={false}>
    <IgrColumn field="OrderID" header="Order ID" merge={true}></IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" merge={true}></IgrColumn>
    <IgrColumn field="Salesperson" header="Salesperson"></IgrColumn>
</{ComponentSelector}>
```

```tsx
const cellMergeMode: GridCellMergeMode = 'onSort';
```

```html
<{ComponentSelector} cell-merge-mode="onSort" auto-generate="false">
    <igc-column field="OrderID" header="Order ID" merge="true"></igc-column>
    <igc-column field="ShipperName" header="Shipper Name" merge="false"></igc-column>
    <igc-column field="Salesperson" header="Salesperson"></igc-column>
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Data="Data" CellMergeMode="CellMergeMode" AutoGenerate="false">
    <IgbColumn Field="OrderID" Header="Order ID" Merge="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name" Merge="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Salesperson"></IgbColumn>
</{ComponentSelector}>

@code {
    private GridCellMergeMode CellMergeMode = GridCellMergeMode.OnSort;
}
```
Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

<!-- WebComponents, React -->
## Custom Merge Conditions
In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.

### Merge Strategy Class
A custom merge strategy must implement the `GridMergeStrategy` class:

<!-- React -->
```ts
export declare class IgrGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;   
}
```
<!-- end: React -->
<!-- WebComponents -->
```ts
export declare class IgcGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;   
}
```
<!-- end: WebComponents -->

- `merge` - defines how merged cells are produced.
- `comparer` - defines the condition to decide if two adjacent records should be merged.

<!-- ComponentStart: Grid, HierarchicalGrid -->
### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in `DefaultMergeStrategy` and override the relevant methods.

<!-- React -->
```ts
export class MyCustomStrategy extends IgrDefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: React -->
<!-- WebComponents -->
```ts
export class MyCustomStrategy extends IgcDefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: Grid, HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
The `IgxTreeGrid` provides two built-in strategies that implement the `IGridMergeStrategy` interface: `DefaultTreeGridMergeStrategy` and `ByLevelTreeGridMergeStrategy`. `DefaultTreeGridMergeStrategy` merges all cells with the same value, regardless of their hierarchical level. In contrast, `ByLevelTreeGridMergeStrategy` only merges cells if they have the same value and are located at the same level, making level a required condition for merging.

### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend one of the built-in strategies, either `DefaultTreeGridMergeStrategy` or `ByLevelTreeGridMergeStrategy`, and override the relevant methods.

<!-- React -->
```ts
export class MyCustomStrategy extends IgrDefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: React -->
<!-- WebComponents -->
```ts
export class MyCustomStrategy extends IgcDefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: TreeGrid -->

### Applying a Custom Strategy
Once defined, assign the strategy to the grid through the `mergeStrategy` property:
<!-- React -->
```tsx
<{ComponentSelector} data={data} mergeStrategy={customStrategy}>
  <IgrColumn field="ActionID" merge={true}></IgrColumn>
  <IgrColumn field="ProjectName" merge={true}></IgrColumn>
</{ComponentSelector}>
```

```ts
const customStrategy = new MyCustomStrategy() as IgrGridMergeStrategy;
```
<!-- end: React -->
<!-- WebComponents -->
```ts
constructor() {
    const grid = (this.grid = document.getElementById('grid') as IgcGridComponent);

    grid.data = this.data;
    grid.mergeStrategy = new MyCustomStrategy() as IgcGridMergeStrategy;
    grid.cellMergeMode = 'always';
}
```

### Demo
<!-- end: WebComponents -->
<!-- ComponentStart: Grid -->
`sample="/{ComponentSample}/cell-merge-custom-sample", height="600", alt="{Platform} {ComponentTitle} Cell Merging Example"`
<!-- ComponentEnd: Grid -->
<!-- ComponentStart: HierarchicalGrid -->
`sample="/{ComponentSample}/cell-merge-custom-sample", height="425", alt="{Platform} {ComponentTitle} Cell Merging Example"`
<!-- ComponentEnd: HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
`sample="/{ComponentSample}/cell-merge-custom-sample", height="755", alt="{Platform} {ComponentTitle} Cell Merging Example"`
<!-- ComponentEnd: TreeGrid -->

<!-- end: WebComponents, React -->
## Feature Integration
Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:
<!-- ComponentStart: Grid -->
- **Expand/Collapse**: if a feature (such as master-detail, grouping, etc.) generates a non-data row, then the cell merging is interrupted and the group will be split.
<!-- ComponentEnd: Grid -->
- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

>[!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

<!-- ComponentStart: Grid -->
## Limitations
|Known Limitations| Description|
| --- | --- |
| Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |
<!-- ComponentEnd: Grid -->

## API References
- `{ComponentName}`

## Additional Resources
- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
