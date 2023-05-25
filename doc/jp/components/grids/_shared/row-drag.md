---
title: {Platform} {ComponentTitle} の行ドラッグ - インフラジスティックス
_description: {Platform} {ComponentTitle} の行ドラッグは、マウスで行をすばやくドラッグして再配置します。プロジェクトで行ドラッグを構成する方法を説明します。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} の行ドラッグ

{ProductName} `{ComponentName}` では、行ドラッグがルート `{ComponentSelector}` コンポーネントで初期化されて、`RowDraggable` 入力で設定できます。行ドラッグを有効にすると、ユーザーは行ドラッグ ハンドルを使用して行のドラッグを開始できます。

## {Platform} {ComponentTitle} 行ドラッグの例

`sample="/{ComponentSample}/row-drag-base", height="560", alt="{Platform} {ComponentTitle} 行ドラッグの例"`



## 構成

`{ComponentName}` の行ドラッグを有効にするには、グリッドの `RowDraggable` を **true** に設定します。これが有効になると、行ドラッグ ハンドルが各行に表示されます。このハンドルは行ドラッグを開始するために使用できます。ドラッグ ハンドルをクリックしてボタンを押しながらカーソルを動かすと、グリッドの `RowDragStart` イベントが発生します。クリックをリリースすると、`RowDragEnd` イベントが発生します。

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

<!-- Angular -->

以下は、行ドラッグをサポートするための `{ComponentName}` の設定方法と、ドロップイベントの適切な処理方法についてのチュートリアルです。

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

この例では、グリッドから指定された領域に行をドラッグし、ドロップするとグリッドから削除します。

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

この例では、あるグリッドから別のグリッドに行をドラッグし、それを最初のデータソースから削除し、それを 2 番目のデータソースに追加します。

<!-- ComponentEnd: Grid -->

### ドロップエリア

行ドラッグを簡単に有効にできました。次は行ドロップを処理する方法を設定する必要があります。
[Drop ディレクティブ](../drag-drop.md)を使用して、行をドロップする場所を定義できます。

はじめに、アプリ モジュールに `DragDropModule` をインポートする必要があります。

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

次にテンプレートでディレクティブのセレクターを使ってドロップ エリアを定義します。

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

この場合、ドロップ領域は行をドロップする 2 番目のグリッドになります。
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

グリッドは最初空のため、ユーザーにとってより意味のあるテンプレートを定義します。

```html
<ng-template #dragHereTemplate>
    Drop a row to add it to the grid
</ng-template>
```

<!-- ComponentEnd: Grid -->

`RowDragEnd` イベントの `Animation` パラメーターを使用して、ドロップできない領域に行がドロップされたときにアニメーションを有効にできます。true に設定されている場合、ドラッグされた行は、ドロップできない領域の上にドロップされると元の位置に戻ります。

以下はアニメーションを有効にする方法です。

```typescript
export class {ComponentName}RowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

### ドロップ エリア イベント ハンドラー

テンプレートでドロップ領域を定義したら、コンポーネントの **.ts** ファイルで `IgxDrop` の `Enter`、`Leave` および `Dropped` イベントを宣言する必要があります。

はじめに、`Enter` と `Leave` ハンドラーを見てみましょう。これらのメソッドでは、ドラッグの *ghost* のアイコンを変更して、行をドロップできる領域の上にあることをユーザーに示すことができます。

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
**changeGhostIcon** **private** メソッドは、ドラッグ ゴースト内のアイコンを変更するだけです。メソッドのロジックは、アイコンを含む要素を検索し (ドラッグインジケーターコンテナに適用される **igx-grid__drag-indicator** クラスを使用)、要素の内部テキストを渡されたものに変更します。
アイコン自体は [**material** フォント セット](https://material.io/tools/icons/)からのもので、別の列挙型で定義されています。
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

次に、ユーザーが実際にドロップ領域内に行をドロップしたときに何が起こるかを定義する必要があります。
<!-- ComponentStart: TreeGrid, HierarchicalGrid -->
```typescript
export class {ComponentName}RowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

}
```

行が削除されたら、行の `Delete` メソッドを呼び出すだけです。
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

次のように **ViewChild** デコレータを介して各グリッドへの参照を定義し、ドロップを次のように処理します。
- 削除される行のデータを含む行を `TargetGrid` に追加します。
- `SourceGrid` からドラッグした行を削除します

<!-- ComponentEnd: Grid -->

> [!Note]
> イベント引数 (**args.dragData.data**) または他の行プロパティからの行データを使用する場合、行全体が参照として引数に渡されることに注意してください。つまり、ソースグリッドのデータと区別する必要がある場合は、必要なデータを複製する必要があります。


### ドラッグ ゴーストのテンプレート化

ドラッグ ゴーストは、`{ComponentSelector}` の本体内の `<ng-template>` に適用される `RowDragGhost` ディレクティブを使用してテンプレート化できます。

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

以下は、行ドラッグと複数選択を有効にした `{ComponentName}` で確認できる設定の結果です。以下のデモでは、現在ドラッグされている行の数を示します。

#### デモ

<!-- ComponentStart: HierarchicalGrid -->

ドラッグ ゴーストは各グリッド レベルでテンプレート化できます。複数のゴース トテンプレートを作成できて、または単一の行アイランドにのみテンプレートを提供できます。

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

`sample="/{ComponentSample}/multi-row-dragging", height="600", alt="{Platform} {ComponentTitle} 複数行のドラッグ"`



### ドラッグ アイコンのテンプレート化

ドラッグ ハンドル アイコンは、グリッドの `DragIndicatorIconTemplate` を使用してテンプレート化できます。作成している例で、アイコンをデフォルトのもの (**drag_indicator**) から **drag_handle** に変更します。

そのためには、`DragIndicatorIcon` を使用して `{ComponentSelector}` の本体内にテンプレートを渡すことができます。

```html
<{ComponentSelector}>
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
</{ComponentSelector}>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.dragIndicatorIcon = this.dragIndicatorIconTemplate;
    }
    this._bind();
}

public dragIndicatorIconTemplate = (ctx: IgcDragIndicatorIconContext) => {
    return html`<igc-icon>drag_handle</igc-icon>`;
}
```

新しいアイコン テンプレートの設定後、**DragIcon enum** の **DEFAULT** アイコンも調整する必要があるため、`ChangeIcon` メソッドによって適切に変更されます。

```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
}
```
<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

<!-- Angular -->

### ドロップ領域のスタイル設定

ドロップ ハンドラが正しく設定されたら、あとはドロップ領域をスタイル設定します。

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

結果は以下のデモで確認できます。

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

ドロップ ハンドラが正しく設定されたら、準備完了です。

以下は、設定の結果です。

<!-- ComponentEnd: Grid -->

#### デモ

`sample="/{ComponentSample}/row-drag-to-grid", height="550", alt="{Platform} {ComponentTitle} 行のドラッグ"`


## アプリケーション デモ

<!-- ComponentStart: Grid -->

### 行ドラッグ イベントの使用

以下のデモは、行ドラッグ イベント情報を使用して、行がドロップされたカスタム コンポーネントとソース グリッド自体の両方の状態を変更する方法を示しています。
.
グリッドから月をドラッグして、それらを対応する惑星にドロップしてみてください。行ドラッグ ゴーストの背景は、ホバーされた惑星に応じて動的に変更されます。成功するとグリッド内の行が選択され、ドラッグは無効になります。惑星をクリックすると役に立つ情報が得られます。

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-dragging", height="560", alt="{Platform} {ComponentTitle} 行のドラッグ"`

> [!Note]
> 上記のデモで使用されている行ドラッグ ゴーストに適用されるクラスは ::ng-deep 修飾子を使用しています。これは、行ドラッグが内部グリッド機能であり、CSS カプセル化のためにアプリケーション レベルでアクセスできないためです。

<!-- ComponentEnd: Grid -->

### 行の並べ替えデモ

グリッドの行ドラッグ イベントと `Drop` ディレクティブを使用して、ドラッグよる行の並べ替えるが可能なグリッドを作成できます。

すべてのアクションはグリッド本体の**内側**で発生するため、ここで `Drop` ディレクティブをアタッチする必要があります:

```html
<igx-grid #grid [data]="data" [rowDraggable]="true" [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
</igx-grid>
```

```html
<igc-grid id="grid" row-draggable="true" primary-key="ID">
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.dropped = this.onDropAllowed;
    }
    this._bind();
}
```

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

> [!Note]
> グリッドに `PrimaryKey` が指定されていることを確認してください。ロジックが行を適切に並べ替えられるように、行には一意の識別子が必要です。

`RowDraggable` が有効になり、ドロップ エリアが定義されたら、ドロップ イベントの単純なハンドラーを実装する必要があります。行をドラッグするときは、以下を確認してください:

<!-- ComponentStart: Grid -->

  - 行はグリッド内にドロップされましたか?
  - そうであれば、ドラッグされた行が_他の_どの行にドロップされましたか?
  - ターゲット行が見つかれば、`Data` 配列内のレコードの位置を入れ替えます。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

  - 行が展開されていますか? そうであれば、行を縮小します。
  - 行はグリッド内にドロップされましたか?
  - そうであれば、ドラッグされた行が**他の**どの行にドロップされましたか?
  - **ターゲット**行が見つかれば、`Data` 配列内のレコードの位置を入れ替えます。
  - 行は最初に選択されてましたか? そうであれば、選択済みとしてマークします。

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

以下では、上記の実装を示します。

<!-- ComponentStart: Grid -->

```typescript
export class GridRowReorderComponent {
    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.indexOf(this.data.find((r) => r.rowID === row.rowID));
            }
        }

        return -1;
    }
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

これらの簡単な手順で、ドラッグ/ドロップで行を並べ替えることができるグリッドを構成しました! 次のデモで、上記コードの動作を確認できます。

<!-- ComponentStart: Grid -->

ドラッグ アイコンを押下しながら、グリッド内で好きな場所に行を移動できます。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

行の選択も有効で、ドラッグした行をドロップしても選択が保持されます。

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

`sample="/{ComponentSample}/row-reorder", height="700", alt="{Platform} {ComponentTitle} 行の並べ替え"`



<!-- ComponentStart: Grid -->

### 行ドラッグ シナリオでの UX の改善

現在カーソルの下にある行インデックスを取得できることで、豊富なカスタム機能を構築し、アプリケーションの UX を向上させる機会が得られます。たとえば、グリッド上のドラッグされた行の位置に基づいて、ドラッグ ゴーストを変更したり、ドロップ インジケーターを表示したりできます。この方法で実現できるもう 1 つの便利な動作は、グリッドの境界に達したときに、行をドラッグしながらグリッドを上下にスクロールすることです。

以下に、行の位置を知ることで実現できるいくつかのカスタム実装のスニペットの例を示します。

#### カーソル位置に基づいてドラッグ ゴーストを変更する

以下のスニペットでは、ドラッグ ゴースト内のテキストを変更して、ホバーされた行の名前を表示する方法を示しています。

まず、ドラッグ ゴーストに使用するテンプレートを指定します。`DropName` プロパティは動的に変化し、カーソルが置かれている行の名前を取得します。

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

次に、終了した行のインスタンスを返すメソッド[行の並べ替えデモ](#行の並べ替えデモ)で使用されているものと同様) を定義します。

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

最後に、`DragMove` イベント (ドラッグされた行に対して発行) を処理するために使用されるメソッドを作成します。このメソッドは、`RowDragGhost` テンプレートで使用されているプロパティの値を変更し、強制的に再描画します。

ドラッグしている特定の行の `DragMove` イベントのみをサブスクライブし、行がドロップされるたびに (メモリ リークを防ぐために) サブスクライブを解除します。

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

<!-- Angular -->

#### カーソル位置に基づいたドロップ インジケーターの表示

次のセクションのデモでは、ドラッグされた行がドロップされる場所のインジケーターを表示する方法を確認します。このインジケーターは好きなようにカスタマイズできます - ドラッグされた行がドロップされる位置に配置されたプレースホルダー行、ドラッグされた行が現在ホバーされている行の上または下にドロップされるかどうかを示す境界線スタイルなどです。

カーソルの位置を追跡するために、行のドラッグを開始するときに `DragDirective` の `DragMove` イベントにバインドします。

> [!Note]
> グリッドに `PrimaryKey` が指定されていることを確認してください。ロジックが行を適切に並べ替えられるように、行には一意の識別子が必要です。

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

#### 行ドラッグでグリッドをスクロールする

非常に便利なシナリオは、ドラッグされた行がその上部または下部の境界に達したときにグリッドをスクロールできることです。これにより、グリッド内の行数にスクロールバーが必要な場合に、現在のビューポートの外側で行を並べ替えることができます。

以下に、ビューポートの端に到達したかどうかを確認し、必要に応じてスクロールするために使用する 2 つの方法の例を示します。`IsGridScrolledToEdge` は、グリッドをスクロールする方向 (「下」 の場合は 1、「上」 の場合は -1) の 1 つのパラメーターを受け入れ、その方向の最後の行に到達した場合は **true** を返します。`ScrollGrid` メソッドは、グリッドをある方向 (1 または -1) にスクロールしようとしますが、グリッドがすでにその端にある場合は何もしません。

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

前の例で行ったように、特定の行の `DragMove` イベントをサブスクライブします。`DragMove` はカーソルが実際に移動したときにのみ起動されるため、行が端の 1 つにあるときにグリッドを自動スクロールするための便利で簡単な方法が必要ですが、ユーザーはマウスを**移動しません**。**500ms** ごとにグリッドを自動スクロールする `Interval` を設定するメソッドを追加します。

ポインタがグリッドの端に達したときに `Interval` を作成してサブスクライブし、マウスが移動したり行がドロップされたりするたびに (カーソル位置に関係なく)、その `Interval` から**サブスクライブを解除します**。

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

以下では、上記の両方のシナリオの例です。ドロップ インジケーターを表示し、境界線の端に到達したときにビューポートをスクロールします。

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-drop-indicator", height="830", alt="{Platform} {ComponentTitle} ドロップ インジケーター"`



<!-- end: Angular -->

<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## 制限

現在、`RowDraggable` に既知の制限はありません。

## API リファレンス

* `RowDraggable`
* `RowDragStart`
* `RowDragEnd`
* `{ComponentName}`

## その他のリソース
コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})