---
title:  {Platform} {ComponentTitle} の行操作 - インフラジスティックス
_description: {ComponentName} は、ActionStrip を使用し、行/セルコンポーネントおよび行のピン固定に CRUD を使用する機能を提供します。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridRowActions}
_language: ja
---

# {Platform} {ComponentTitle} の行操作

{Platform} {ComponentTitle} の {ProductName} 行操作機能を使用すると、開発者は `ActionStrip` を使用し、行/セル コンポーネントと行のピン固定に CRUD を利用できます。これらの操作 (編集とピン固定) には、`{ComponentName}` の特定の行に適用できる事前定義された UI コントロールがいくつかあります。

## 使用方法

<!-- Angular -->
最初の手順は、**app.module.ts** ファイルに **IgxActionStripModule** をインポートすることです。

```typescript
// app.module.ts
import { IgxActionStripModule } from 'igniteui-angular';

@NgModule({
    imports: [..., IgxActionStripModule],
})
```
<!-- end: Angular -->

事前定義された操作 (actions) UI コンポーネントは次のとおりです:

- `GridEditingActions` - `{ComponentName}` 編集専用に設計された機能と UI を含みます。`RowEditable` オプションと `{ComponentName}` の行削除に応じて、セルまたは行の編集モードをすばやく切り替えることができます。

- `GridPinningActions` - `{ComponentName}` ピン固定専用に設計された機能と UI を含みます。行をすばやくピン固定し、ピン固定された行とその無効な行の間を移動できます。

これらは `{ComponentName}` 内に追加され、デフォルトのインタラクションを提供する `ActionStrip` プを持つために必要です。

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
> `ActionStripComponent` が `{ComponentName}` の子コンポーネントの場合、行をホバーすると UI が自動的に表示されます。

## カスタムの実装

これらのコンポーネントは、カスタマイズのための柔軟性を提供するテンプレートを公開します。たとえば、**delete**、**edit** などの行アクションがある Gmail シナリオで `ActionStrip` を使用する場合、アイコンでボタン コンポーネントを作成します。そして、クリック イベントを追加し、`ActionStrip` に挿入します。


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

`sample="/{ComponentSample}/action-strip", height="600", alt="{Platform} {ComponentTitle} アクション ストリップの例"`


<!-- Angular -->

> [!Note]
> 事前定義された操作は `GridActionsBaseDirective` を継承します。カスタム グリッド アクション コンポーネントを作成する場合、`GridActionsBaseDirective` も継承する必要があります。

<!-- end: Angular -->

## API リファレンス

<!-- Angular -->

アクション ストリップの API に関する詳細な情報は、以下のリンクのトピックを参照してください。

* `ActionStrip`

アクション ストリップで使用できるその他のコンポーネントとディレクティブ:

* `GridActionsBaseDirective`
* `DividerDirective`

<!-- end: Angular -->

* `GridPinningActions`
* `GridEditingActions`

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})