---
title: {Platform} {ComponentTitle} Row Adding - {ProductName}
_description: Learn how to use and customize the built-in row adding functionality with {Platform} and utilize intuitive grid row adding and CRUD capabilities.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Row Adding

<!-- ComponentStart: Grid, HierarchicalGrid -->

The {ProductName} Row Adding feature in {Platform} {ComponentTitle} enables users to input and submit new data records without navigating to a separate form or page. With the `{ComponentName}`, users can manipulate data through inline row adding and a powerful API for CRUD operations.
Add an `ActionStrip` component with editing actions enabled in the grid's template. After that hover a row and use the provided button. Finally press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

The `{ComponentName}` provides a convenient way to perform data manipulations through inline row adding and a powerful API for {Platform} CRUD operations. Add an `ActionStrip` component with editing actions enabled in the grid's template, hover a row and use the provided button, press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI or <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> to spawn the UI for adding a child for the selected row.

<!-- ComponentEnd: TreeGrid -->

## {Platform} {ComponentTitle} Row Adding Example

`sample="/{ComponentSample}/row-adding", height="600", alt="{Platform} {ComponentTitle} Row Adding Example"`

## Row Adding Usage

<!-- Angular -->
To get started import the `{ComponentModule}` in the **app.module.ts** file:

```typescript
import { {ComponentModule} } from 'igniteui-angular';

@NgModule({
    imports: [
        {ComponentModule}
    ],
})
export class AppModule {}
```
<!-- end: Angular -->

Then define a `{ComponentName}` with bound data source, `RowEditable` set to true and an `ActionStrip` component with editing actions enabled. The `AddRow` input controls the visibility of the button that spawns the row adding UI.

<!-- ComponentStart: Grid -->

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" dataType="number"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" dataType="number"></igx-column>
    <igx-column field="ProductName" header="ProductName" dataType="string"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" dataType="number"></igx-column>
    <igx-column field="OrderDate" dataType="date"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" dataType="boolean"></igx-column>

    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" auto-generate="false" row-editable="true">
    <igc-column field="ProductID" header="Product ID" data-type="Number"></igc-column>
    <igc-column field="ReorderLevel" header="ReorderLever" data-type="Number"></igc-column>
    <igc-column field="ProductName" header="ProductName" data-type="String"></igc-column>
    <igc-column field="UnitsInStock" header="UnitsInStock" data-type="Number"></igc-column>
    <igc-column field="OrderDate" data-type="Date"></igc-column>
    <igc-column field="Discontinued" header="Discontinued" data-type="Boolean"></igc-column>

    <igc-action-strip id="actionstrip">
        <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} autoGenerate="false" data={NwindData} primaryKey="ProductID" rowEditable="true">
    <IgrColumn field="ProductID" header="Product ID" dataType="Number"></IgrColumn>
    <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="Number"></IgrColumn>
    <IgrColumn field="ProductName" header="Product Name" dataType="String"></IgrColumn>
    <IgrColumn field="UnitsInStock" header="Units In Stock" dataType="Number"></IgrColumn>
    <IgrColumn field="OrderDate" header="Order Date" dataType="Date"></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="Boolean"></IgrColumn>

    <IgrActionStrip>
        <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
    </IgrActionStrip>
</{ComponentSelector}>
```
<!-- end: React -->

```razor
<{ComponentSelector} AutoGenerate="false" Id="grid" Data="NwindData" PrimaryKey="ProductID" RowEditable="true">
    <IgbColumn Field="ProductID" Header="Product ID" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="ReorderLevel" Header="Reorder Level" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="ProductName" Header="Product Name" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="UnitsInStock" Header="Units In Stock" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date"></IgbColumn>
    <IgbColumn Field="Discontinued" Header="Discontinued" DataType="GridColumnDataType.Boolean"></IgbColumn>

    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
    </IgbActionStrip>
</{ComponentSelector}>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

<!-- Angular -->
```html
<{ComponentSelector} igxPreventDocumentScroll [data]="data"
    primaryKey="ID" foreignKey="ParentID" [rowEditable]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date"></igx-column>
    <igx-column [field]="'OnPTO'" dataType="boolean" width="130px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon [color]="cell.row.data.OnPTO? 'red': 'green'">account_circle</igx-icon>
        </ng-template>
    </igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true" [addChild]="actionstrip.context?.treeRow.level < 2">
        </igx-grid-editing-actions>
    </igx-action-strip>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: TreeGrid -->
```html
<{ComponentSelector} id="treeGrid" primary-key="ID" foreign-key="ParentID" row-editable="true">
    <igc-column field="Name" data-type="String"></igc-column>
    <igc-column field="Title" data-type="String"></igc-column>
    <igc-column field="HireDate" data-type="Date"></igc-column>
    <igc-column field="OnPTO" data-type="Boolean" width="130px">
    </igc-column>
    <igc-column field="Age" data-type="Number"></igc-column>
    <igc-action-strip id="actionstrip">
        <igc-grid-editing-actions add-row="true">
        </igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: TreeGrid -->
```tsx
<{ComponentSelector} autoGenerate="false" primaryKey="ID" foreignKey="ParentID" rowEditable="true">
    <IgrColumn field="Name" header="Name" dataType="String"></IgrColumn>
    <IgrColumn field="Title" header="Title" dataType="String"></IgrColumn>
    <IgrColumn field="HireDate" header="Hire Date" dataType="Date"></IgrColumn>
    <IgrColumn field="OnPTO" header="On PTO" dataType="Boolean"></IgrColumn>

    <IgrActionStrip>
        <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
    </IgrActionStrip>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->
<!-- end: React -->

<!-- ComponentStart: TreeGrid -->
```razor
<{ComponentSelector} AutoGenerate="false" Id="treegrid" PrimaryKey="ID" ForeignKey="ParentID" RowEditable="true">
    <IgbColumn Field="Name" Header="Name" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Title" Header="Title" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date"></IgbColumn>
    <IgbColumn Field="OnPTO" Header="On PTO" DataType="GridColumnDataType.Boolean"></IgbColumn>

    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
    </IgbActionStrip>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- Angular -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<{ComponentSelector} igxPreventDocumentScroll [data]="localdata"
    [autoGenerate]="false" [primaryKey]="'Debut'" [rowEditable]="true">
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-action-strip #actionstrip1>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [primaryKey]="'USBillboard200'" [rowEditable]="true">
        <igx-column field="Album" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false" [primaryKey]="'Number'" [rowEditable]="true">
            <igx-column field="Number" header="No." dataType="number"></igx-column>
            <igx-column field="Title" [dataType]="'string'"></igx-column>
            <igx-column field="Released" [dataType]="'date'"></igx-column>
            <igx-column field="Genre" [dataType]="'string'"></igx-column>

            <igx-action-strip #actionstrip3>
                <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
            </igx-action-strip>

        </igx-row-island>

        <igx-action-strip #actionstrip2>
            <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
        </igx-action-strip>
    </igx-row-island>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<{ComponentSelector} id="hGrid" auto-generate="false" primary-key="Debut" row-editable="true">
    <igc-column field="Artist" data-type="String"></igc-column>
    <igc-column field="HasGrammyAward" header="Has Grammy Award?" data-type="Boolean'">
    </igc-column>
    <igc-column field="Debut" data-type="Number"></igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="Number"></igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="Number"></igc-column>

    <igc-action-strip id="actionstrip1">
        <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
    </igc-action-strip>

    <igc-row-island key="Albums" auto-generate="false" primary-key="USBillboard200" row-editable="true">
        <igc-column field="Album" [data-type]="String"></igc-column>
        <igc-column field="LaunchDate" header="Launch Date" data-type="Date"></igc-column>
        <igc-column field="BillboardReview" header="Billboard Review" data-type="Number"></igc-column>
        <igc-column field="USBillboard200" header="US Billboard 200" data-type="Number"></igc-column>
        <igc-row-island key="Songs" auto-generate="false" primary-key="Number" row-editable="true">
            <igc-column field="Number" header="No." data-type="Number"></igc-column>
            <igc-column field="Title" data-type="String"></igc-column>
            <igc-column field="Released" data-type="Date"></igc-column>
            <igc-column field="Genre" data-type="String"></igc-column>

            <igc-action-strip id="actionstrip3">
                <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
            </igc-action-strip>

        </igc-row-island>

        <igc-action-strip id="actionstrip2">
            <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
        </igc-action-strip>
    </igc-row-island>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
<{ComponentSelector} AutoGenerate="false" Id="hGrid" PrimaryKey="Debut" RowEditable="true">
    <IgbColumn Field="Artist" Header="Artist" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="HasGrammyAward" Header="Has Grammy Award" DataType="GridColumnDataType.Boolean"></IgbColumn>
    <IgbColumn Field="Debut" Header="Debut" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="GrammyNominations" Header="Grammy Nominations" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="GrammyAwards" Header="Grammy Awards" DataType="GridColumnDataType.Number"></IgbColumn>

    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
    </IgbActionStrip>
    
    <IgbRowIsland AutoGenerate="false" Key="Albums" PrimaryKey="USBillboard200" RowEditable="true">
        <IgbColumn Field="Album" Header="Album" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="LaunchDate" Header="Launch Date" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="BillboardReview" Header="Billboard Review" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="USBillboard200" Header="US Billboard 200" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="GrammyAwards" Header="Grammy Awards" DataType="GridColumnDataType.Number"></IgbColumn>

        <IgbRowIsland AutoGenerate="false" Key="Songs" PrimaryKey="Number" RowEditable="true">
            <IgbColumn Field="Number" Header="Number" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Title" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Released" DataType="GridColumnDataType.Date"></IgbColumn>
            <IgbColumn Field="Genre" DataType="GridColumnDataType.String"></IgbColumn>

            <IgbActionStrip>
                <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
            </IgbActionStrip>
        </IgbRowIsland>

        <IgbActionStrip>
            <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
        </IgbActionStrip>
    </IgbRowIsland>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

<!-- React -->
<!-- ComponentStart: HierarchicalGrid -->
```tsx
<{ComponentSelector}
   autoGenerate="false"
   data={this.singersData}
   id="hGrid"
   primaryKey="ID"
   rowEditable="true"
   ref={this.hierarchicalGrid1Ref}>
   <IgrActionStrip>
     <IgrGridEditingActions
        addRow="true">
       </IgrGridEditingActions>
   </IgrActionStrip>
   <IgrColumn
       field="Artist"
       header="Artist"
       dataType="String"
       resizable="true">
   </IgrColumn>
   <IgrColumn
       field="Debut"
       header="Debut"
       dataType="Number"
       minWidth="88px"
       maxWidth="230px"
       resizable="true">
   </IgrColumn>
   <IgrColumn
       field="GrammyNominations"
       header="Grammy Nominations"
       dataType="String"
       resizable="true">
   </IgrColumn>
   <IgrColumn
       field="GrammyAwards"
       header="Grammy Awards"
       dataType="String"
       resizable="true">
   </IgrColumn>
   <IgrRowIsland
       childDataKey="Albums"
       autoGenerate="false">
       <IgrColumn
           field="Album"
           header="Album"
           dataType="String"
           resizable="true">
       </IgrColumn>
       <IgrColumn
           field="LaunchDate"
           header="Launch Date"
           dataType="Date"
           resizable="true">
       </IgrColumn>
       <IgrColumn
           field="BillboardReview"
           header="Billboard Review"
           dataType="String"
           resizable="true">
       </IgrColumn>
       <IgrColumn
           field="USBillboard200"
           header="US Billboard 200"
           dataType="String"
           resizable="true">
       </IgrColumn>
       <IgrRowIsland
           childDataKey="Songs"
           autoGenerate="false">
           <IgrActionStrip>
                <IgrGridEditingActions
                    addRow="true">
                </IgrGridEditingActions>
            </IgrActionStrip>
           <IgrColumn
               field="Number"
               header="No."
               dataType="String"
               resizable="true">
           </IgrColumn>
           <IgrColumn
               field="Title"
               header="Title"
               dataType="String"
               resizable="true">
           </IgrColumn>
           <IgrColumn
               field="Released"
               header="Released"
               dataType="String"
               resizable="true">
           </IgrColumn>
           <IgrColumn
               field="Genre"
               header="Genre"
               dataType="String"
               resizable="true">
           </IgrColumn>
       </IgrRowIsland>
   </IgrRowIsland>
   <IgrRowIsland
       childDataKey="Tours"
       autoGenerate="false">
           <IgrActionStrip>
                <IgrGridEditingActions
                    addRow="true">
                </IgrGridEditingActions>
            </IgrActionStrip>                  
       <IgrColumn
           field="Tour"
           header="Tour"
           dataType="String"
           resizable="true">
       </IgrColumn>
       <IgrColumn
           field="StartedOn"
           header="Started on"
           dataType="String"
           resizable="true">
       </IgrColumn>
       <IgrColumn
           field="Location"
           header="Location"
           dataType="String"
           resizable="true">
       </IgrColumn>
       <IgrColumn
           field="Headliner"
           header="Headliner"
           dataType="String"
           resizable="true">
       </IgrColumn>
   </IgrRowIsland>
</{ComponentSelector}>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the `Editable` column's input to `false`.

<!-- ComponentStart: Grid, HierarchicalGrid -->

> **Note**:
> The `GridEditingActions` input controlling the visibility of the add row button may use the action strip context (which is of type `RowType` to fine tune which records the button shows for.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

> **Note**:
> The `GridEditingActions` inputs controlling the visibility of the add row and add child buttons may use the action strip context (which is of type `RowType` to fine tune which records the buttons show for.

<!-- ComponentEnd: TreeGrid -->

The internal `BaseTransactionService` is automatically provided for `{ComponentName}`. It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

`{ComponentName}` allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

<!-- ComponentStart: Grid, HierarchicalGrid -->

Using `BeginAddRowById` requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

<!-- WebComponents -->
```typescript
this.grid.beginAddRowById('ALFKI');  // Spawns the add row UI under the row with PK 'ALFKI'
this.grid.beginAddRowById(null);     // Spawns the add row UI as the first record
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
gridRef.current.beginAddRowById('ALFKI');  // Spawns the add row UI under the row with PK 'ALFKI'
gridRef.current.beginAddRowById(null);     // Spawns the add row UI as the first record
```
<!-- end: React -->

```razor
@code {
    await this.grid.BeginAddRowByIdAsync('ALFKI', false);  // Spawns the add row UI under the row with PK 'ALFKI'
    await this.grid.BeginAddRowByIdAsync(null, false);     // Spawns the add row UI as the first record
}
```

The `beginAddRowByIndex` method works similarly but requires you to specify the index at which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.

<!-- WebComponents -->
```typescript
this.grid.beginAddRowByIndex(10);   // Spawns the add row UI at index 10
this.grid.beginAddRowByIndex(0);    // Spawns the add row UI as the first record
```
<!-- end: WebComponents -->

<!-- React -->
```typescript
gridRef.current.beginAddRowByIndex(10);   // Spawns the add row UI at index 10
gridRef.current.beginAddRowByIndex(0);    // Spawns the add row UI as the first record
```
<!-- end: React -->

```razor
@code {
    await this.grid.BeginAddRowByIndexAsync(10);   // Spawns the add row UI at index 10
    await this.grid.BeginAddRowByIndexAsync(0);    // Spawns the add row UI as the first record
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

Using `BeginAddRowById` requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. The second parameter controls if the row is added as a child to the context row or as a sibling. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

```typescript
this.treeGrid.beginAddRowById('ALFKI', true);   // Spawns the add row UI to add a child for the row with PK 'ALFKI'
this.treeGrid.beginAddRowById(null);            // Spawns the add row UI as the first record
```

```razor
@code {
    await this.treeGrid.BeginAddRowByIdAsync('ALFKI', true);  // Spawns the add row UI to add a child for the row with PK 'ALFKI'
    await this.treeGrid.BeginAddRowByIdAsync(null, false);     // Spawns the add row UI as the first record
}
```

The `BeginAddRowByIndex` method works similarly but the row to use as context is specified by index.

```typescript
this.treeGrid.beginAddRowByIndex(10, true);   // Spawns the add row UI to add a child for the row at index 10
this.treeGrid.beginAddRowByIndex(null);       // Spawns the add row UI as the first record
```

```razor
@code {
    await this.treeGrid.BeginAddRowByIndexAsync(10, true);   // Spawns the add row UI to add a child for the row at index 10
    await this.treeGrid.BeginAddRowByIndexAsync(0);    // Spawns the add row UI as the first record
}
```

<!-- ComponentEnd: TreeGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The `{ComponentName}` scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [{ComponentTitle} Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the `{ComponentName}`. In a `{ComponentName}` that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the `{ComponentName}` to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!-- ComponentStart: TreeGrid -->

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a child

<!-- ComponentEnd: TreeGrid -->
- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the `{ComponentName}` gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

<!-- ComponentStart: HierarchicalGrid -->

- When spawning the UI for the `{ComponentName}`, any child layout currently expanded for a row that the end user clicks the add row button for is collapsed.

<!-- ComponentEnd: HierarchicalGrid -->

## Customizing Row Adding Overlay

### Customizing Text

Customizing the text of the row adding overlay is possible using the `RowAddTextDirective`.

<!-- Angular -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [rowEditable]="true">
    <ng-template igxRowAddText>
	    Adding Row
    </ng-template>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```ts
this.grid.rowAddTextTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`Adding Row`;
}
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
gridRef.current.rowAddTextTemplate = (ctx: IgrGridEmptyTemplateContext) => {
    return ('Adding Row');
}
```            
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid-->
<!-- end: React -->

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<{ComponentSelector} Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowAddTextTemplate="addTextTemplate">
</{ComponentSelector}>

@code {
    private RenderFragment<IgbGridEmptyTemplateContext> addTextTemplate = (context) =>
    {
        return @<span>Adding Row</span>;
    };
}
```                 
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->

<!-- Angular -->
### Customizing Buttons

Customizing the buttons of the row editing overlay is possible by using the `RowEditActionsDirective`.

If you want the buttons to be part of the keyboard navigation, then each on of them should have the `RowEditTabStopDirective`.

```html
<ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
```

> **Note**:
> Using `RowEditActions` directive will change edit actions for both editing and adding overlay buttons.
<!-- end: Angular -->

<!-- Blazor -->
### Customizing Buttons

Customizing the buttons of the row editing overlay is possible by using the `RowEditActions` template.

<!-- 
REQUIRES FIX!
```ts
this.grid.rowEditActionsTemplate = (endRowEdit: IgcGridRowEditActionsTemplateContext) => {
    return html`
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
	    <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    `;
}
```
-->

```razor
<{ComponentSelector} Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowEditActionsTemplateScript="rowEditActionsTemplate">
</{ComponentSelector}>

//In JavaScript:
igRegisterScript("rowEditActionsTemplate", (endRowEdit) => {
    var html = window.igTemplating.html;
    return html`<div class="row-actions">
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
        <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    </div>`
}, false);
```

> **Note**:
> Using `RowEditActions` template will change edit actions for both editing and adding overlay buttons.
<!-- end: Blazor -->

<!-- Angular -->
## Remote Scenarios

In most remote data scenarios the Primary Key assignment happens on the create server request. In this case the added records on the client will not have the final primary key value until saved on the server's data base. In that case the recommended way to handle this update in the `{ComponentName}` is as follows:

- If the `{ComponentName}` does not use transactions.

    Once the create request is successfully completed and returns the added record data, you can replace that record's id in the local data record instance.

- If the `{ComponentName}` uses transactions.

    Once the create request or batch update request is successfully completed and returns the added record instances (with their db generated ids), the related ADD transactions should be cleared from the transaction log using the `Clear` API method. This is necessary because the local transaction will have a generated id field, which may differ than the one created in the data base, so they should be cleared. You can then add the record(s) passed in the response to the local data instance.

This will ensure that the remotely generated ids are always reflected in the local data, and subsequent update/delete operations target the correct record ids.
<!-- end: Angular -->

## Styling

The row adding UI comprises the buttons in the `ActionStrip` editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [{ComponentTitle} Row Editing](row-editing.md#styling)
- [Snackbar](../../notifications/snackbar.md#styling)
<!-- - [ActionStrip](../action-strip.md#styling) -->

## API References

* `RowEditable`
* `RowEditEnter`
* `RowEdit`
* `RowEditDone`
* `RowEditCancel`
* `EndEdit`
* `PrimaryKey`
* `{ComponentName}`

## Additional Resources


* [{ComponentTitle} Editing](editing.md)
<!-- * [{ComponentTitle} Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})