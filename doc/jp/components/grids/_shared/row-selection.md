---
title: {Platform} {ComponentTitle} の行選択 - インフラジスティックス
_description: {Platform} {ComponentTitle} は、{ComponentTitle} 一括編集を使用して、基になるデータに影響を与えずにデータ操作を実行します。デモと例をお試しください。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
_language: ja
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} 行の選択

{Platform} `{ComponentName}` の行選択では、行内の他のすべての列に先行する行セレクター列があります。行選択ボックスをクリックすると、行の選択や選択解除、複数行にわたるデータの選択が可能になります。

## {Platform} 行選択の例

<!-- ComponentStart: TreeGrid -->

以下のサンプルは、`{ComponentName}` の 4 種類の**行選択**動作を示しています。以下のボタンを使用して、利用可能な各選択モードを有効にします。スナックバーのメッセージ ボックスを介して、各ボタンの操作に関する簡単な説明が提供されます。スイッチ ボタンを使用して、行セレクター チェックボックスを非表示または表示します。

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid -->

以下のサンプルは、`{ComponentName}` の 3 種類の**行選択**動作を示しています。以下のボタンを使用して、利用可能な各選択モードを有効にします。スナックバーのメッセージ ボックスを介して、各ボタンの操作に関する簡単な説明が提供されます。スイッチ ボタンを使用して、行セレクター チェックボックスを非表示または表示します。

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-selection-mode"
           github-src="{ComponentSample}/row-selection-mode"
           alt="{Platform} {ComponentTitle} 行選択の例">
</code-view>



## 設定
`{ComponentName}`で項目の選択を設定するには、その `RowSelection` プロパティを設定する必要があります。このプロパティは、`GridSelectionMode` 列挙を受け取ります。

`GridSelectionMode` は以下のモードを公開します。

- **None (なし)**
- **Single (単一)**
- **Multiple (複数)**

<!-- ComponentStart: TreeGrid -->

- **MultipleCascade**

<!-- ComponentEnd: TreeGrid -->

以下で、それぞれについて詳しく説明します。

### None 選択

`{ComponentName}` では、デフォルトで行選択が無効になります。(`RowSelection` は None です。)したがって、`{ComponentName}`UI とのインタラクションを通じて行を選択または選択解除することは**できません**が、選択/選択解除する唯一の方法は、提供された API メソッドを使用することです。

### 単一選択

単一行の選択は、`RowSelection` プロパティ を `Single` に設定することのみで簡単に設定できるようになりました。これにより、**グリッド内の 1 行のみを選択できます**。行のセルにフォーカスするときにセルをクリックするかスペース キーを押すと行を選択できます。もちろん、行セレクターフィールドをクリックして行を選択できます。行が選択または選択解除されると、`RowSelectionChanging` イベントが生成されます。

<!-- Angular -->
```html
<{ComponentSelector} [data]="remote | async" [rowSelection]="'single'" [autoGenerate]="true"
          (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" row-selection="Single" auto-generate="true"
        allow-filtering="true">
</{ComponentSelector}>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid1.data = this.data;
        grid.rowSelectionChanging = this.handleRowSelection;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
public handleRowSelection(args) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }
}
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Single
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

```razor
function rowSelectionChangingHandler(args) {
        if (args.detail.added.length && args.added[0] === 3) {
        args.detail.cancel = true;
    }
}

igRegisterScript("rowSelectionChangingHandler", rowSelectionChangingHandler, false);
```

### 複数選択

`{ComponentName}` で複数の項目を選択できるようにするには、`RowSelection` プロパティを `Multiple` に設定するだけです。これにより、各行および `{ComponentName}` ヘッダーで行セレクター フィールドが有効になります。行セレクターを使用して複数行を選択できます。選択はスクロール、ページング、およびソートとフィルター、などのデータ操作で保持されます。行を選択するには、セルをクリックするか、セルにフォーカスがあるときにスペース キーを押します。1 つの行を選択し、*Shift* キーを押しながら別の行をクリックすると、行の範囲全体が選択されます。この選択モードでは、単一の行をクリックすると、前に選択した行が選択解除されます。*Ctrl* キーを押しながらクリックすると、行が切り替わり、前の選択が保持されます。

<!-- Angular -->
```html
<{ComponentSelector} [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'"
        (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true" [autoGenerate]="true">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" row-selection="Multiple"
        allow-filtering="true" auto-generate="true">
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

<!-- ComponentStart: TreeGrid -->

### カスケード選択

`{ComponentName}` で複数の項目を選択できるようにするには、`RowSelection` プロパティを `MultipleCascade` に設定するだけです。これにより、各行および `{ComponentName}` ヘッダーで行セレクター フィールドが有効になります。行セレクターを使用すると、ユーザーは複数の行を選択して、下のツリーのすべての子を選択できます。選択は、スクロール、ページング、およびソートやフィルタリングなどのデータ操作を通じて保持されます。行は、セルをクリックするか、セルがフォーカスされているときにスペース キーを押すことによっても選択できます。1 つの行を選択し、*Shift* キーを押しながら別の行をクリックすると、親レコードの選択を通じて選択した範囲内にない場合でも、そのすべての子が選択されます。この選択モードでは、単一の行をクリックすると、前に選択した行が選択解除されます。*Ctrl* キーを押しながらクリックすると、行とその子が切り替えられ、前の選択が保持されます。

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true"
        [rowSelection]="'multipleCascade'" [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)">
</igx-tree-grid>
```

```html
<igc-tree-grid id="grid" primaryKey="ID" foreign-key="ParentID" auto-generate="true"
        row-selection="MultipleCascade" allow-filtering="true">
</igc-tree-grid>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.MultipleCascade
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

このモードでは、親の選択状態はその子の選択状態に完全に依存します。親に選択された子と選択解除された子がある場合、そのチェックボックスは不確定な状態になります。

<!-- ComponentEnd: TreeGrid -->

**注**

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- Angular -->
* 行選択およびセル選択を正しく実行するには、`{ComponentName}` にリモート仮想化がある場合、`PrimaryKey` を設定します。
* `{ComponentName}` でリモート仮想化を使用した場合、ヘッダーのチェックボックスをクリックすると、現在グリッドにあるすべてのレコードが選択/選択解除されます。新しいデータがオンデマンドで `{ComponentName}` にロードされると、新、しく追加された行は選択されない制限があるため、これらの行を選択するには API メソッドを使用して動作を処理する必要があります。
<!-- end: Angular -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

* 行を選択すると、`RowSelectionChanging` イベントがトリガーされます。このイベントは、新しい選択、古い選択、古い選択に対して追加および削除された行に関する情報を提供します。また、イベントはキャンセル可能であるため、選択を防ぐことができます。
* 行選択が有効になっている場合、行セレクターが表示されますが、表示しない場合は、`HideRowSelectors` を **true** に設定できます。
* 行選択モードのランタイムを切り替えると、優先行選択状態がクリアされます。


## API の使用

### コードで行を選択

以下は、単一または複数の行を同時に選択できるコード例です (`PrimaryKey` を介して)。さらに、このメソッドの 2 番目のパラメーターは boolean プロパティです。それを使用して、前の行の選択をクリアするかどうかを選択できます。以前の選択はデフォルトで保存されます。

<!-- Angular -->
```html
<{ComponentSelector} #grid  [data]="remote | async"
[primaryKey]="'ProductID'"
[rowSelection]="'multiple'
[autoGenerate]="true">
</{ComponentSelector}>

<button (click)="grid.selectRows([1,2,5], true)">Select 1,2 and 5</button>
```
<!-- end: Angular -->

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton onclick='grid.selectRows([1,2,5], true)'>Select</IgbButton>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</{ComponentSelector}>

<button onClick="onClick">Select 1,2 and 5</button>
```
```ts
public onClick() {
    this.grid.selectRows([1,2,5], true);
}
```
<!-- end: WebComponents -->

1、2、および 5 の ID を持つデータ エントリに対応する行を `{ComponentName}` の選択に追加します。

### 行選択の解除

プログラムで行を選択解除する必要がある場合は、`DeselectRows` メソッドを使用できます。

<!-- Angular -->
```html
<{ComponentSelector} #grid  [data]="remote | async"
[primaryKey]="'ProductID'"
[rowSelection]="'multiple'
[autoGenerate]="true">
</{ComponentSelector}>

<button (click)="grid.deselectRows([1,2,5], true)">Select 1,2 and 5</button>
```
<!-- end: Angular -->

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton onclick='grid.deselectRows([1,2,5], true)'>Select</IgbButton>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</{ComponentSelector}>

<button onClick="onClick">DeSelect</button>
```
```ts
public onClick() {
    this.grid.deselectRows([1,2,5], true);
}
```
<!-- end: WebComponents -->

### 行選択イベント

行選択に何らかの変更があると、`RowSelectionChanging` イベントが発生します。`RowSelectionChanging` は次の引数を公開します。
- `OldSelection` - 行選択の前の状態を含む行 ID の配列。
- `NewSelection` - 行選択の新しい状態に一致する行 ID の列。
- `Added` - 現在選択に追加されている行 ID の配列。
- `Removed` - 古い選択状態に従って現在削除されている行 ID の配列。
- `Event` - 行選択の変更をトリガーする元のイベント。
- `Cancel` - 行選択の変更を防ぐことができます。

<!-- ComponentStart: HierarchicalGrid -->

- `Owner` - イベントが子グリッドからトリガーされる場合、これにより、イベントの発行元であるコンポーネントへの参照が提供されます。

<!-- ComponentEnd: HierarchicalGrid -->

<!-- Angular -->
```html
<{ComponentSelector} (rowSelectionChanging)="handleRowSelectionChange($event)">
</{ComponentSelector}>
```
<!-- end: Angular -->

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid1.data = this.data;
        grid.rowSelectionChanging = this.handleRowSelectionChange;
    }
    this._bind();
}
```

```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection
}

```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

```razor
function rowSelectionChangingHandler(args) {
    args.detail.cancel = true; // this will cancel the row selection
}

igRegisterScript("rowSelectionChangingHandler", rowSelectionChangingHandler, false);
```

### すべての行の選択

`{ComponentName}` が提供するもう 1 つの便利な API メソッドが `SelectAll` です。このメソッドはデフォルトですべてのデータ行を選択しますが、フィルタリングが適用される場合、フィルター条件に一致する行のみが選択されます。ただし、*false* パラメーターを指定してメソッドを呼び出すと、`SelectAll(false)` は、フィルターが適用されているかどうかに関係なく、常にグリッド内のすべてのデータを選択します。

> **注:** `SelectAll()` は削除された行を選択しないことに注意してください。

### 全行の選択解除

`{ComponentName}` は、デフォルトですべてのデータ行の選択を解除する `DeselectAll` メソッドを提供しますが、フィルタリングが適用される場合、フィルター条件に一致する行のみを選択解除します。ただし、*false* パラメーターを指定してメソッドを呼び出すと、`DeselectAll(false)` は、フィルターが適用されているかどうかに関係なく、常にグリッド内のすべてのデータをクリアします。

### 選択した行を取得する方法

現在選択されている行を確認する必要がある場合は、`SelectedRows` ゲッターを使用して行 ID を取得できます。

```typescript
public getSelectedRows() {
    const currentSelection = this.grid.selectedRows; // return array of row IDs
}
```

さらに、`SelectedRows` に行 ID を割り当てると、グリッドの選択状態を変更できます。

```typescript
public mySelectedRows = [1, 2, 3]; // an array of row IDs
```

<!-- Angular -->
```html
<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" [autoGenerate]="false" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid1.data = this.data;
        grid.selectedRows = this.mySelectedRows;
    }
    this._bind();
}
```

```razor
<{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             SelectedRows=selectedRows
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
</{ComponentSelector}>

@code {
    public object[] selectedRows = {1, 2, 4};
}
```

### 行セレクターのテンプレート

`{ComponentName}` でヘッダーおよび行セレクターをテンプレート化し、さまざまなシナリオに役立つ機能を提供するコンテキストにアクセスすることもできます。

デフォルトでは、`{ComponentName}` は、行セレクターの親コンテナまたは行自体の**すべての行選択操作を処理し**、テンプレートの状態の可視化のみになります。基本機能のオーバーライドは通常、[RowSelectionChanging イベント](#行選択イベント)を使用して実行する必要があります。基本機能をオーバーライドする `Click` ハンドラーを使用してカスタムテンプレートを実装する場合、イベントの伝播を停止して、正しい行の状態を保持する必要があります。

#### 行テンプレート

```razor
igRegisterScript("WebGridRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.$implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.$implicit.index}</span>
<igc-checkbox checked></igc-checkbox>
</div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.$implicit.index}</span>
<igc-checkbox></igc-checkbox>
</div>`;
    }
}, false);
```

<!-- Angular -->

カスタム行セレクター テンプレートを作成するには、`{ComponentSelector}` 内で `igxRowSelector` ディレクティブを使用して `<ng-template>` を宣言します。テンプレートから、行の状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`selected` プロパティは、現在の行が選択されているかどうかを示しますが、`index` プロパティを使用して行インデックスにアクセスできます。
```html
<ng-template igxRowSelector let-rowContext>
    {{ rowContext.index }}
    <igx-checkbox
        [checked]="rowContext.selected"
        [readonly]="true"
    ></igx-checkbox>
</ng-template>
```
```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    return html`
        ${ctx.index }
        <igc-checkbox
            checked="${ctx.selected}"
            readonly="true"
        ></igc-checkbox>
    `;
}
```

`rowID` プロパティを使用して、`{ComponentSelector}` 行の参照を取得できます。行セレクター要素に `click` ハンドラーを実装する場合に便利です。
```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox>
</ng-template>
```
```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    return html`
        <igc-checkbox click="${this.onSelectorClick($event, ctx.key)}"></igc-checkbox>
    `;
}
```
上の例では、`igx-checkbox`  を使用しており、`rowContext.selected` をその `checked` プロパティにバインドしています。[行番号のデモ](#行の番号付けデモ)で実際にこれをご覧ください。

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
`rowContext.select()` および `rowContext.deselect()` メソッドは、`{ComponentSelector}` のテンプレート コンテキストで公開されます。基本機能をオーバーライドするクリック ハンドラーを実装した場合、特に子グリッドで現在の行を簡単に切り替えることができます。

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular -->

### ヘッダー テンプレート

```razor
igRegisterScript("WebGridHeaderRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div style="width: 70px;height: 60px;display: flex;">
    <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png">
</div>`;
}, false);
```

<!-- Angular -->

カスタム行ヘッダー テンプレートを作成するには、`{ComponentName}` 内で `igxHeadSelector` ディレクティブを使用して `<ng-template>` を宣言します。テンプレートから、ヘッダーの状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`SelectedCount` プロパティは現在選択されている行数を示し、`totalCount` は `{ComponentName}` に合計の行数を示します。

```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```
```ts
public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    return html`
        ${ ctx.selectedCount } / ${ ctx.totalCount  }
    `;
}
```

`SelectedCount` および `TotalCount` プロパティを使用して、ヘッド セレクターをチェックするか、不確定にする（部分的に選択する）かを決定できます。

```html
<{ComponentSelector} [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]=" headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.data = this.data;
        grid.headSelectorTemplate = this.headSelectorTemplate;
    }
    this._bind();
}

public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    return html`
        <igc-checkbox
            checked="${ ctx.selectedCount > 0 && ctx.selectedCount === ctx.totalCount}"
            indeterminate="${ctx.selectedCount > 0 && ctx.selectedCount !== ctx.totalCount}">
        </igc-checkbox>
    `;
}
```

<!-- ComponentStart: HierarchicalGrid -->

`{ComponentSelector}` の各階層レベルには、独自の行とヘッダーのテンプレートを設定できます。

> [!Note]
`headContext.selectAll()` および `headContext.deselectAll()` メソッドは、`{ComponentSelector}` のテンプレート コンテキストで公開されます。基本機能をオーバーライドするクリック ハンドラーを実装した場合、特に子グリッドで現在の行を簡単に切り替えることができます。

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular -->

### 行の番号付けデモ

このデモでは、カスタム ヘッダーと行セレクターの使用方法を示します。後者は、`RowContext.Index` を使用して行番号と、`RowContext.Selected` にバインドされた `Checkbox` を表示します。

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-selection-template-numbers"
           github-src="{ComponentSample}/row-selection-template-numbers"
           alt="{Platform} {ComponentTitle} 選択テンプレートの番号付けの例">
</code-view>

<!-- ComponentStart: Grid -->

<!-- Angular -->
### Excel スタイル行セレクターのデモ

このデモは、カスタム テンプレートを使用して Excel ライクなヘッダーおよび行セレクターを示します。

<!-- NOTE this sample is differed -->

<code-view style="height:550px"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-selection-template-excel"
           github-src="{ComponentSample}/row-selection-template-excel"
           alt="{Platform} {ComponentTitle} 選択テンプレート Excel の例">
</code-view>

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

### 条件付き選択のデモ

このデモでは、`RowSelectionChanging` イベントと、選択できない行のチェックボックスが無効になっているカスタム テンプレートを使用して、一部の行が選択されないようにします。

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-conditional-row-selectors"
           github-src="{ComponentSample}/conditional-row-selectors"
           alt="{Platform} {ComponentTitle} 条件行セレクターの例">
</code-view>

## API リファレンス

* `{ComponentName}`
* `{ComponentName}Row`
* `{ComponentName}Cell`

## その他のリソース


* [選択](selection.md)
* [セル選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [仮想化とパフォーマンス](virtualization.md)


コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
