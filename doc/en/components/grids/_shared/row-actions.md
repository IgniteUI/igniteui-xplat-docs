---
title:  Row actions in {Platform} {ComponentTitle} - Infragistics
_description: The {ComponentName} provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridRowActions}
---

# Row Actions in {Platform} {ComponentTitle}

The {ProductName} Row Actions feature in {Platform} {ComponentTitle} enables developers to use an `ActionStrip` and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the `{ComponentName}` – editing and pinning.

## Usage

<!-- Angular -->
The first step is to import the **IgxActionStripModule** in our **app.module.ts** file:

```typescript
// app.module.ts
import { IgxActionStripModule } from 'igniteui-angular';

@NgModule({
    imports: [..., IgxActionStripModule],
})
```
<!-- end: Angular -->

The predefined actions UI components are:

- `GridEditingActions` - includes functionality and UI specifically designed for the `{ComponentName}` editing. It allows you to quickly toggle edit mode for cells or rows, depending on the `RowEditable` option and row deletion of the `{ComponentName}`.

- `GridPinningActions` - includes functionality and UI specifically designed for the `{ComponentName}` row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the `{ComponentName}` and this is all needed to have an `ActionStrip` providing default interactions.

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<IgbGrid Data=northwindEmployees RowEditable="True" PrimaryKey="ID">
    @foreach (var c in columns)
    {
        <IgbColumn Field="@c.Field">
        </IgbColumn>
    }
    <IgbActionStrip @ref=actionstrip>
        <IgbGridPinningActions></IgbGridPinningActions>
        <IgbGridEditingActions></IgbGridEditingActions>
    </IgbActionStrip>
</IgbGrid>
```

<!-- ComponentStart: TreeGrid -->
```razor
<IgbTreeGrid Data=northwindEmployees RowEditable="True" PrimaryKey="ID">
    @foreach (var c in columns)
    {
        <IgbColumn Field="@c.Field">
        </IgbColumn>
    }
    <IgbActionStrip @ref=actionstrip>
        <IgbGridPinningActions></IgbGridPinningActions>
        <IgbGridEditingActions></IgbGridEditingActions>
    </IgbActionStrip>
</IgbTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```razor
<IgbHierarchicalGrid Data=northwindEmployees RowEditable="True" PrimaryKey="ID">
    @foreach (var c in columns)
    {
        <IgbColumn Field="@c.Field">
        </IgbColumn>
    }
    <IgbActionStrip @ref=actionstrip>
        <IgbGridPinningActions></IgbGridPinningActions>
        <IgbGridEditingActions></IgbGridEditingActions>
    </IgbActionStrip>
</IgbHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- WebComponents -->
```html
<igc-grid row-editable="true" primary-key="ID">
    <igc-column field="field"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</igc-grid>
```
<!-- ComponentStart: TreeGrid -->
```html
<igc-tree-grid row-editable="true" primary-key="ID">
    <igc-column field="field"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid row-editable="true" primary-key="ID">
    <igc-column field="field"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid -->
```tsx
<{ComponentSelector} rowEditable={true} primaryKey="ID">
    <IgrColumn field="field">
    </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```tsx
<{ComponentSelector} rowEditable={true} primaryKey="ID">
    <IgrColumn field="field">
    </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid rowEditable={true} primaryKey="ID">
    <IgrColumn field="field">
    </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

> [!Note]
> When `ActionStripComponent` is a child component of the `{ComponentName}`, hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the `ActionStrip` for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the `ActionStrip`.


```html
<{ComponentSelector}>
    <igx-action-strip #actionstrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <button title="Edit" igxButton="icon" igxRipple (click)='startEdit(actionstrip.context)'>
            <igx-icon>edit</igx-icon>
        </button>
        <button title="Delete" igxButton="icon" igxRipple *ngIf='!isDeleted(actionstrip.context)' (click)='actionstrip.context.delete()'>
            <igx-icon>delete</igx-icon>
        </button>
    </igx-action-strip>
</{ComponentSelector}>
```

<!-- ComponentStart: Grid, TreeGrid -->
```razor
<div class="grid__wrapper">
    <{ComponentSelector} Data=northwindEmployees>
        <IgbActionStrip @ref=actionstrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbButton Title="Edit" @onclick="() => StartEdit(actionstrip.Context)">
                <IgbIcon>edit</IgbIcon>
            </IgbButton>
            @if (!IsDeleted(actionstrip.Context))
            {
                <IgbButton Title="Delete" @onclick="() => Delete(actionstrip.Context)">
                    <IgbIcon>delete</IgbIcon>
                </IgbButton>
            }
        </IgbActionStrip>
    </{ComponentSelector}>
</div>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```razor
<div class="grid__wrapper">
    <IgbHierarchicalGrid Data=northwindEmployees>
        <IgbActionStrip @ref=actionstrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbButton Title="Edit" @onclick="() => StartEdit(actionstrip.Context)">
                <IgbIcon>edit</IgbIcon>
            </IgbButton>
            @if (!IsDeleted(actionstrip.Context))
            {
                <IgbButton Title="Delete" @onclick="() => Delete(actionstrip.Context)">
                    <IgbIcon>delete</IgbIcon>
                </IgbButton>
            }
        </IgbActionStrip>
    </IgbHierarchicalGrid>
</div>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid -->
```html
<{ComponentSelector}>
    <igc-action-strip #actionstrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions edit-row="true" delete-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igc-hierarchical-grid>
    <igc-action-strip #actionstrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions edit-row="true" delete-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid -->
```tsx
<{ComponentSelector}>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions editRow={true} deleteRow={true}></IgrGridEditingActions>
    </IgrActionStrip>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```tsx
<IgrHierarchicalGrid>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions editRow={true} deleteRow={true}></IgrGridEditingActions>
    </IgrActionStrip>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: React -->

`sample="/{ComponentSample}/action-strip", height="600", alt="{Platform} {ComponentTitle} Action Strip Example"`


<!-- Angular -->

> [!Note]
> The predefined actions inherit `GridActionsBaseDirective` and when creating a custom grid action component, it should also inherit `GridActionsBaseDirective`.

<!-- end: Angular -->

## API References

<!-- Angular -->

For more detailed information regarding the Action Strip API, refer to the following links:

* `ActionStrip`

Additional components and/or directives that can be used within the Action Strip:

* `GridActionsBaseDirective`
* `DividerDirective`

<!-- end: Angular -->

* `GridPinningActions`
* `GridEditingActions`

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})