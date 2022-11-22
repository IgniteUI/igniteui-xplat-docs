---
title:  Row actions in {Platform} {ComponentTitle} - Infragistics
_description: The {ComponentName} provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# Row Actions in {Platform} {ComponentTitle}

The `{ComponentName}` component in {ProductName} provides the ability to use an `ActionStrip` and utilize CRUD for row/cell components and row pinning. The Action Strip component can host predefined UI controls for these operations.

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
    <{ComponentSelector} Data=northwindEmployees RowEditable="True" PrimaryKey="ID">
        @foreach (var c in columns)
        {
            <IgbColumn Field="@c.Field">
            </IgbColumn>
        }
        <IgbActionStrip @ref=actionstrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridEditingActions></IgbGridEditingActions>
        </IgbActionStrip>
    </{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" row-editable="true" primary-key="ID">
    <igc-column field="field">
    </igc-column>

    <igc-action-strip id="actionStrip">
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

>Note: When `ActionStripComponent` is a child component of the `{ComponentName}`, hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the `ActionStripComponent` for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the `ActionStripComponent`.

<!-- Angular -->
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
<!-- end: Angular -->

```razor
<div class="grid__wrapper">
    <{ComponentSelector} Data=northwindEmployees>
        <IgbActionStrip @ref=actionstrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbButton Title="Edit" @onclick="StartEdit(actionstrip.Context)">
                <IgbIcon>edit</IgbIcon>
            </IgbButton>
            @if (!IsDeleted(actionstrip.Context))
            {
                <IgbButton Title="Delete" @onclick='Delete(actionstrip.Context)'>
                    <IgbIcon>delete</IgbIcon>
                </IgbButton>
            }
        </IgbActionStrip>
    </{ComponentSelector}>
</div>
```

<!-- WebComponents -->
```html
<{ComponentSelector}>
    <igc-action-strip #actionstrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions edit-row="true" delete-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-action-strip"
           github-src="{ComponentSample}/action-strip"
           alt="{Platform} {ComponentTitle} Action Strip Example" >
</code-view>

<!-- Angular -->

>Note: The predefined actions inherit `GridActionsBaseDirective` and when creating a custom grid action component, it should also inherit `GridActionsBaseDirective`.

<!-- end: Angular -->

## API References

For more detailed information regarding the Action Strip API, refer to the following links:

* `ActionStripComponent`

Additional components and/or directives that can be used within the Action Strip:

<!-- Angular -->

* `GridActionsBaseDirective`
* `DividerDirective`

<!-- end: Angular -->

* `GridPinningActionsComponent`
* `GridEditingActionsComponent`

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})