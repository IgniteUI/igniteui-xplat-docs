---
title:  {Platform} {ComponentTitle} の行操作 - インフラジスティックス
_description: {ComponentName} は、ActionStrip を使用し、行/セルコンポーネントおよび行のピン固定に CRUD を使用する機能を提供します。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} の行操作

Ignite UI for {Platform} の `{ComponentName}` コンポーネントは、`ActionStrip` を使用し、行/セルコンポーネントおよび行のピン固定に CRUD を使用する機能を提供します。アクション ストリップ コンポーネントは、これらの操作用に事前定義された UI コントロールをホストできます。

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

>注: `ActionStripComponent` が `{ComponentName}` の子コンポーネントの場合、行をホバーすると UI が自動的に表示されます。

## カスタムの実装

これらのコンポーネントは、カスタマイズのための柔軟性を提供するテンプレートを公開します。たとえば、**delete**、**edit** などの行アクションがある Gmail シナリオで `ActionStripComponent` を使用する場合、`igx-icon` でボタン コンポーネントを作成します。そして、クリック イベントを追加し、`ActionStripComponent` に挿入します。

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

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-action-strip"
           github-src="{ComponentSample}/action-strip"
           alt="{Platform} {ComponentTitle} アクション ストリップの例" >
</code-view>

<!-- Angular -->

>注: 事前定義された操作は `GridActionsBaseDirective` を継承します。カスタム グリッド アクション コンポーネントを作成する場合、`GridActionsBaseDirective` も継承する必要があります。

<!-- end: Angular -->

## API リファレンス

アクション ストリップの API に関する詳細な情報は、以下のリンクのトピックを参照してください。

* `ActionStripComponent`

アクション ストリップで使用できるその他のコンポーネントとディレクティブ:

<!-- Angular -->

* `GridActionsBaseDirective`
* `DividerDirective`

<!-- end: Angular -->

* `GridPinningActionsComponent`
* `GridEditingActionsComponent`

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})