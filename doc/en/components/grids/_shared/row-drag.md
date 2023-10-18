---
title: {Platform} {ComponentTitle} Row Dragging - {ProductName}
_description: Row dragging in {Platform} {ComponentTitle} is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# Row Dragging in {Platform} {ComponentTitle}

The {ProductName} Row Dragging feature in {Platform} {ComponentTitle} is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root `Grid` component and is configurable via the `RowDraggable` input.

## {Platform} {ComponentTitle} Row Drag Example

`sample="/{ComponentSample}/row-drag-base", height="560", alt="{Platform} {ComponentTitle} Row Drag Example"`



## Configuration

In order to enable row-dragging for your `{ComponentName}`, all you need to do is set the grid's `RowDraggable` to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and *moving the cursor* while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

<!-- Angular -->
```html
<{ComponentSelector} [rowDraggable]="true">
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} RowDraggable="true">
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} row-draggable="true">
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} rowDraggable="true">
</{ComponentSelector}>
```
<!-- end: React -->

<!-- Angular -->

Below, you can find a walkthrough on how to configure an `{ComponentName}` to support row dragging and how to properly handle the drop event.

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

In this example, we'll handle dragging a row from one grid to another, removing it from the first data source and adding it to the second.

<!-- ComponentEnd: Grid -->

### Drop Areas

Enabling row-dragging was pretty easy, but now we have to configure how we'll handle row-*dropping*.
We can define where we want our rows to be dropped using the [Drop` directive](../drag-drop.md).

First we need to import the `DragDropModule` in our app module:

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular';
// ...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```

```typescript
import { IgcDragDropModule } from 'igniteui-webcomponents';
// ...
ModuleManager.register(
    IgcDragDropModule
);
```

Then, in our template, we define a drop-area using the directive's selector:

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

In this case, our drop-area will be a whole second grid where we'll drop the rows.
```html
<igx-grid #targetGrid igxDrop [data]="data2" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
    (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)" (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
</igx-grid>
```

```html
<igc-grid id="targetGrid" auto-generate="false" primary-key="ID">
</igc-grid>
```
```ts
constructor() {
    var targetGrid = this.targetGrid = document.getElementById('targetGrid') as IgcGridComponent;

    this._bind = () => {
        targetGrid.data = this.data;
        targetGrid.emptyGridTemplate = this.dragHereTemplate;
        targetGrid.enter = this.onEnterAllowed;
        targetGrid.leave = this.onLeaveAllowed;
        targetGrid.dropped = this.onDropAllowed;
    }
    this._bind();
}

public dragHereTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`Drop a row to add it to the grid`;
}
```

Since the grid will initially be empty, we also define a template that will be more meaningful to the user:

```html
<ng-template #dragHereTemplate>
    Drop a row to add it to the grid
</ng-template>
```

<!-- ComponentEnd: Grid -->

You may enable animation when a row is dropped on a non-droppable area using the `Animation` parameter of the `RowDragEnd` event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.

You may enable animation like this:

```typescript
export class {ComponentName}RowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

### Drop Area Event Handlers

Once we've defined our drop-area in the template, we have to declare our handlers for the `IgxDrop`'s `Enter`, `Leave` and `Dropped` events in our component's **.ts** file.

First, let's take a look at our `Enter` and `Leave` handlers. In those methods, we just want to change the icon of the drag's *ghost* so we can indicate to the user that they are above an area that allows them to drop the row:

```typescript
export class {ComponentName}RowDragComponent {
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
```
The **changeGhostIcon** **private** method just changes the icon inside of the drag ghost. The logic in the method finds the element that contains the icon (using the **igx-grid__drag-indicator** class that is applied to the drag-indicator container), changing the element's inner text to the passed one.
The icons themselves are from the [**material** font set](https://material.io/tools/icons/) and are defined in a separate **enum**:
<!-- ComponentStart: TreeGrid, HierarchicalGrid -->
```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}
```
<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->
<!-- ComponentStart: Grid -->
```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'add'
}
```
<!-- ComponentEnd: Grid -->

Next, we have to define what should happen when the user actually *drops* the row inside of the drop-area.
<!-- ComponentStart: TreeGrid, HierarchicalGrid -->
```typescript
export class {ComponentName}RowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

}
```

Once the row is dropped, we just call the row's `Delete` method
<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->
```typescript
export class {ComponentName}RowDragComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent }) public targetGrid: IgxGridComponent;

    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
    }
}
```

```typescript
export class {ComponentName}RowDragComponent {
    constructor() {
        var sourceGrid = this.sourceGrid = document.getElementById('sourceGrid') as IgcGridComponent;
        var targetGrid = this.targetGrid = document.getElementById('targetGrid') as IgcGridComponent;
    }

    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
    }
}
```

We define a reference to each of our grids via the **ViewChild** decorator and the handle the drop as follows:
- add a row to the `TargetGrid` that contains the data of the row being dropped
- remove the dragged row from the `SourceGrid`

<!-- ComponentEnd: Grid -->

> [!Note]
> When using row data from the event arguments (**args.dragData.data**) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.

### Templating the Drag Ghost

The drag ghost can be templated using the `RowDragGhost` directive, applied to a `<ng-template>` inside of the `{ComponentSelector}`'s body:

```html
<{ComponentSelector}>
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.rowDragGhost = this.rowDragGhostTemplate;
    }
    this._bind();
}

public rowDragGhostTemplate = (ctx: IgcGridRowDragGhostContext) => {
    return html`<igc-icon fontSet="material">arrow_right_alt</igc-icon>`;
}
```

The result of the configuration can be seem below in a `{ComponentName}` with row dragging and multiple selection enabled. The demo shows the count of the currently dragged rows:

#### Example Demo

<!-- ComponentStart: HierarchicalGrid -->

The drag ghost can be templated on every grid level, making it possible to have multiple ghost templates or to only provide a template for a single row island.

```html
<{ComponentSelector}>
    <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>
    <igx-row-island>
        <ng-template IgxRowDragGhost>
            <img src="smile.gif" height="42" width="42">
        </ng-template>
    </igx-row-island>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->

`sample="/{ComponentSample}/multi-row-dragging", height="600", alt="{Platform} {ComponentTitle} Multi Row Drag"`

<!-- end: Angular -->

### Templating the Drag Icon

The drag handle icon can be templated using the grid's `DragIndicatorIconTemplate`. In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

To do so, we can use the `DragIndicatorIcon` to pass a template inside of the `{ComponentSelector}`'s body:

<!-- Angular -->
```html
<{ComponentSelector}>
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->

```html
<{ComponentSelector} row-draggable="true">
</{ComponentSelector}>
``

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.dragIndicatorIcon = this.dragIndicatorIconTemplate;
}

public dragIndicatorIconTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`<igc-icon name="drag_handle" collection="material"></igc-icon>`;
}
```

<!-- end: WebComponents -->

```tsx
function dragIndicatorIconTemplate(ctx: IgrGridEmptyTemplateContext) {
    return (
        <>
            <IgrIcon name="drag_handle" collection="material" />
        </>
    );
}

<{ComponentSelector} rowDraggable="true" dragIndicatorIcon={dragIndicatorIconTemplate}>
</{ComponentSelector}>
```

```razor
<IgbGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" DragIndicatorIconTemplate="dragIndicatorIconTemplate" @ref="grid">
</IgbGrid>

private RenderFragment<IgbGridEmptyTemplateContext> dragIndicatorIconTemplate = (context) =>
{
    return @<div>
        <IgbIcon IconName="drag_handle" Collection="material"></IgbIcon>
    </div>;
};
```

<!-- Angular -->
Once we've set the new icon template, we also need to adjust the **DEFAULT** icon in our **DragIcon enum**, so it's properly change by the `ChangeIcon` method:

```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
}
```
<!-- end: Angular -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->


<!-- Angular -->

### Styling the Drop Area

Once our drop handlers are properly configured, all that's left is to style our drop area a bit:

```css
.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;
}

:host {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
}
```

The result can be seen in the demo below:

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

Once our drop handlers are properly configured, we're good to go!

The result of the configuration can be seem below:

<!-- ComponentEnd: Grid -->

#### Example Demo

`sample="/{ComponentSample}/row-drag-to-grid", height="550", alt="{Platform} {ComponentTitle} Row Drag"`

<!-- end: Angular -->

## Application Demo

<!-- ComponentStart: Grid -->

<!-- Angular -->

### Using Row Drag Events

The following demo demonstrates how to use row drag event information to change both states of a custom component, where the row is dropped, and the source grid itself
.
Try to drag moons from the grid and drop them to their corresponding planets. Row drag ghost background is dynamically changed, depending on the hovered planet. If you succeed then the row in the grid will be selected and dragging will be disabled for it. Clicking planets will give you useful information.

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-dragging", height="560", alt="{Platform} {ComponentTitle} Row Drag"`

> [!Note]
> The classes applied to the row drag ghost, used in the demo above, are using ::ng-deep modifier, because row drag is an internal grid feature and cannot be accessed on application level, due to the CSS encapsulation.

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

### Row Reordering Demo

<!--  Angular -->
With the help of the grid's row drag events and the `Drop` directive, you can create a grid that allows you to reorder rows by dragging them.

Since all of the actions will be happening _inside_ of the grid's body, that's where you have to attach the `Drop` directive:

```html
<igx-grid #grid [data]="data" [rowDraggable]="true" [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
</igx-grid>
```
<!--  end: Angular -->

<!--  WebComponents, Blazor, React -->

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- WebComponents -->

```html
<igc-grid id="grid" row-draggable="true" primary-key="ID">
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.addEventListener("rowDragEnd", this.webGridReorderRowHandler)
}
```
<!-- end: WebComponents -->

```tsx
<IgrGrid rowDraggable="true" primaryKey="ID" rowDragEnd={webGridReorderRowHandler}>
</IgrGrid>
```

```razor
<IgbGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" RowDragEndScript="WebGridReorderRowHandler"></IgbGrid>

// In JavaScript
igRegisterScript("WebGridReorderRowHandler", (args) => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-grid")[0];
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}, false);

function getCurrentRowIndex(rowList, cursorPosition) {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }    
    return -1;
}
```

<!--  end: WebComponents, Blazor, React -->

<!--  Angular -->
```html
<igx-tree-grid igxPreventDocumentScroll  #treeGrid [data]="localData" childDataKey="Employees" [rowDraggable]="true" foreignKey="ParentID"
    [primaryKey]="'ID'" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="dropInGrid($event)">
</igx-tree-grid>
```

```html
<igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="rowDrop($event)">
</igx-hierarchical-grid>
```
<!--  end: Angular -->

> [!Note]
> Make sure that there is a `PrimaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once `RowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: Grid -->

  - Was the row dropped inside of the grid?
  - If so, on which _other_ row was the dragged row dropped?
  - Once you've found the _target_ row, swap the records' places in the `Data` array

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

  - Is the row expanded? If so, collapse it.
  - Was the row dropped inside of the grid?
  - If so, on which _other_ row was the dragged row dropped?
  - Once you've found the _target_ row, swap the records' places in the `Data` array
  - Was the row initially selected? If so, mark it as selected.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

Below, you can see this implemented:

<!-- ComponentStart: Grid -->

```typescript
public webGridReorderRowHandler(args: CustomEvent<IgcRowDragEndEventArgs>): void {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-grid")[0] as any;
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}
    
public getCurrentRowIndex(rowList: any[], cursorPosition) {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }
    return -1;
}
```

```tsx
function webGridReorderRowHandler(grid: IgrGridBaseDirective, args: IgrRowDragEndEventArgs): void {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}
    
function getCurrentRowIndex(rowList: any[], cursorPosition) {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }
    return -1;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```typescript
export class TreeGridRowReorderComponent {
    public rowDragStart(args: any): void {
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetrow.key);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        const row = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }
        if (row.data.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.data.ParentID === draggedrow.data.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedrow.data);
                this.localData[rowIndex].ParentID = row.data.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.rowID === draggedrow.key).rowID], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: IgxTreeGridRowComponent, targetRow: IgxTreeGridRowComponent) {
        const draggedRowIndex = this.getRowIndex(draggedrow.data);
        const targetRowIndex: number = this.getRowIndex(targetrow.data);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedrow.data);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point)
        : IgxTreeGridRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```typescript
export class HGridRowReorderComponent {
    public rowDragStart(args: any): void {
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            targetRow.expanded = false;
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        // const parent: IgxHierarchicalGridComponent = (draggedRow as any).grid;
        // const parent = args.drag.ghostContext.grid;
        const parent = this.hGrid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        const wasSelected = draggedRow.selected;
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.data);
        if (wasSelected) {
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowID === draggedRow.key).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: RowType[], cursorPosition: Point): number {
        const targetElem: IgxHierarchicalRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point)
        : IgxHierarchicalRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            } else if (row === rowListArr[rowListArr.length - 1] && cursorPosition.y > rowRect.bottom) {
                return row;
            }
        }
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: Grid -->

Holding onto the drag icon will allow you to move a row anywhere in the grid:

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

`sample="/{ComponentSample}/row-reorder", height="700", alt="{Platform} {ComponentTitle} Row Reorder"`



<!-- ComponentStart: Grid -->

<!-- Angular -->

### Improving UX in Row Drag Scenarios

Being able to obtain the row index which is currently below the cursor provides you with the opportunity to build rich custom functionalities and to improve the UX of your application. For example, you can change the drag ghost or display a drop indicator, based on the position of the dragged row over the grid. Another useful behavior that you can achieve that way is to scroll the grid up or down while dragging a row, when reaching the border of the grid.

Below you can find example snippets of a couple of custom implementations you can achieve by knowing the row's position.

#### Changing the Drag Ghost based on Cursor Position

In the snippets below you see how you can change the text inside the drag ghost to display the name of the hovered row.

First, you specify a template which you'd like to use for the drag ghost. The `DropName` property will dynamically change, getting the name of the row over which the cursor is hovering:

```html
<ng-template igxRowDragGhost>
    <div class="customGhost">
        <div>{{ dropName }}</div>
    </div>
</ng-template>
```

```ts
public rowDragGhostTemplate = (ctx: IgcGridRowDragGhostContext) => {
    return html`dropName`;
}
```

Then, define a method that returns the instance of the row you're over (similar to the one used in the [row reordering demo](#row-reordering-demo)):

```typescript
class MyRowGhostComponent {
    private getRowDataAtPoint(rowList: IgxGridRowComponent[], cursorPosition: Point): any {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.find((r) => r.rowID === row.rowID);
            }
        }
        return null;
    }
}
```

```typescript
class MyRowGhostComponent {
    private getRowDataAtPoint(rowList: IgcGridRowComponent[], cursorPosition: Point): any {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.find((r) => r.rowID === row.rowID);
            }
        }
        return null;
    }
}
```

Finally, we create a method that will be used to handle the `DragMove` event (emitted for the dragged row). The method will change the value of the property used in the `RowDragGhost` template and force a rerender.

We want to subscribe to the `DragMove` event only of the specific row we're dragging and unsub from it (to prevent memory leaks) each time a row is dropped.

```typescript
class MyRowGhostComponent {
    public ngAfterViewInit(): void {
        this.grid.rowDragStart.pipe(takeUntil(this.destroy$)).subscribe(this.onRowDragStart.bind(this));
    }

    private onRowDragStart(e: IRowDragStartEventArgs) {
        if (e !== null) {
            this._draggedRow = e.dragData.rowData;
        }
        const directive = e.dragDirective;
        directive.dragMove
            .pipe(takeUntil(this.grid.rowDragEnd))
            .subscribe(this.onDragMove.bind(this));
    }

    private onDragMove(args: IDragMoveEventArgs) {
        const cursorPosition = this.getCursorPosition(args.originalEvent);
        const hoveredRowData = this.getRowDataAtPoint(
            this.grid.rowList.toArray(),
            cursorPosition
        );
        if (!hoveredRowData) {
            args.cancel = true;
            return;
        }
        const rowID = hoveredRowData.ID;
        if (rowID !== null) {
            let newName = this.dropName;
            if (rowID !== -1) {
                const targetRow = this.grid.rowList.find((e) => {
                    return e.rowData.ID === rowID;
                });
                newName = targetRow?.rowData.Name;
            }
            if (newName !== this.dropName) {
                this.dropName = newName;
                args.owner.cdr.detectChanges();
            }
        }
    }
}
```

#### Displaying a Drop Indicator based on Cursor Position

In the demo in the next section you see how you can display an indicator of where the dragged row would be dropped. You can customize this indicator as you like - it may be a placeholder row, placed at the position where the dragged row would be dropped, a border style indicating if the dragged row would be dropped above or below the currently hovered row, etc.

In order to track the position of the cursor, we bind to the `DragMove` event of the `DragDirective` when we start dragging a row.

> [!Note]
> Make sure that there is a `PrimaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered

```typescript
public ngAfterViewInit() {
  this.grid.rowDragStart
    .pipe(takeUntil(this.destroy$))
    .subscribe(this.handleRowStart.bind(this));
}

private handleRowStart(e: IRowDragStartEventArgs): void {
  if (e !== null) {
    this._draggedRow = e.dragData.data;
  }
  const directive = e.dragDirective;
  directive.dragMove
    .pipe(takeUntil(this.grid.rowDragEnd))
    .subscribe(this.handleDragMove.bind(this));
}

private handleDragMove(event: IDragMoveEventArgs): void {
  this.handleOver(event);
}

private handleOver(event: IDragMoveEventArgs) {
  const ghostRect = event.owner.ghostElement.getBoundingClientRect();
  const rowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
    x: ghostRect.x,
    y: ghostRect.y
  });
  if (rowIndex === -1) {
    return;
  }
  const rowElement = this.grid.rowList.find(
    e => e.rowData.ID === this.grid.data[rowIndex].ID
  );
  if (rowElement) {
    this.changeHighlightedElement(rowElement.element.nativeElement);
  }
}

private clearHighlightElement(): void {
  if (this.highlightedRow !== undefined) {
    this.renderer.removeClass(this.highlightedRow, 'underlined-class');
  }
}

private setHightlightElement(newElement: HTMLElement) {
  this.renderer.addClass(newElement, 'underlined-class');
  this.highlightedRow = newElement;
}

private changeHighlightedElement(newElement: HTMLElement) {
  if (newElement !== undefined) {
    if (newElement !== this.highlightedRow) {
      this.clearHighlightElement();
      this.setHightlightElement(newElement);
    } else {
      return;
    }
  }
}
```

#### Scrolling the Grid on Row Drag

A very useful scenario is being able to scroll the grid when the dragged row reaches its' top or bottom border. This allows reordering rows outside of the current viewport when the number of rows in the grid requires a scrollbar.

Below you see an example of the two methods we use to check if we have reached the edge of the viewport and to scroll it if needed. The `IsGridScrolledToEdge` accepts one parameter - the direction we'd like to scroll the grid (1 for "Down", -1 for "Up") and returns **true** if we've reach the final row in that direction. The `ScrollGrid` method will attempt to scroll the grid in a direction (1 or -1), doing nothing if the grid is already at that edge.

```typescript
class MyGridScrollComponent {
    private isGridScrolledToEdge(dir: 1 | -1): boolean {
        if (this.grid.data[0] === this.grid.rowList.first.data && dir === -1) {
            return true;
        }
        if (
            this.grid.data[this.grid.data.length - 1] === this.grid.rowList.last.data &&
            dir === 1
        ) {
            return true;
        }
        return false;
    }

    private scrollGrid(dir: 1 | -1): void {
        if (!this.isGridScrolledToEdge(dir)) {
            if (dir === 1) {
                this.grid.verticalScrollContainer.scrollNext();
            } else {
                this.grid.verticalScrollContainer.scrollPrev();
            }
        }
    }
}
```

We'll still be subscribing to the `DragMove` event of the specific row in the way we did in the previous example. Since `DragMove` is fired only when the cursor actually moves, we want to have a nice and simple way to auto-scroll the grid when the row is at one of the edges, but the user **does not** move the mouse. We'll an additional method which will setup an `Interval`, auto-scrolling the grid every **500ms**.

We create and subscribe to the `Interval` when the pointer reaches the grid's edge and we **unsubscribe** from that `Interval` every time the mouse moves or the row is dropped (regardless of cursor position).

```typescript
class MyGridScrollComponent {
    public ngAfterViewInit() {
        this.grid.rowDragStart
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.onDragStart.bind(this));
        this.grid.rowDragEnd
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.unsubInterval());
    }

    private onDragMove(event: IDragMoveEventArgs): void {
        this.unsubInterval();
        const dir = this.isPointOnGridEdge(event.pageY);
        if (!dir) {
            return;
        }
        this.scrollGrid(dir);
        if (!this.intervalSub) {
            this.interval$ = interval(500);
            this.intervalSub = this.interval$.subscribe(() => this.scrollGrid(dir));
        }
    }

    private unsubInterval(): void {
        if (this.intervalSub) {
            this.intervalSub.unsubscribe();
            this.intervalSub = null;
        }
    }
}
```

Following is the example of both scenarios described above - showing a drop indicator and scrolling the viewport when border's edge is reached.

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-drop-indicator", height="830", alt="{Platform} {ComponentTitle} Drop Indicator"`



<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## Limitations

Currently, there are no known limitations for the `RowDraggable`.

## API References

* `RowDraggable`
* `RowDragStart`
* `RowDragEnd`
* `{ComponentName}`

## Additional Resources
Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})