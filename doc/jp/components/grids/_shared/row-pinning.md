---
title: {Platform} {ComponentTitle} 行のピン固定 - インフラジスティックス
_description: {Platform} の行ピン固定機能を使用して、豊富で使いやすい API で行をロックします。ユーザーが特定の順序で行をピン固定または特別な領域に複製することを許可します。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 行のピン固定

{Platform} `{ComponentName}` では、単一または複数の行をグリッドの上側または下側にピン固定できます。**行ピン固定**を使用すると、エンドユーザーは特定の順序で行をピン固定し、`{ComponentName}` を垂直にスクロールしても常に表示される特別な領域に行を複製できます。Material UI Grid には組み込みの行ピン固定 UI が含まれており、`{ComponentName}` のコンテキストで `ActionStrip` コンポーネントを初期化することで有効になります。その他、カスタム UI を定義し、行のピン固定 API を介して行のピン固定状態を変更できます。

## {Platform} {ComponentTitle} 行ピン固定の例

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-pinning-options"
           github-src="{ComponentSample}/row-pinning-options"
           alt="{Platform} {ComponentTitle} 行ピン固定の例">
</code-view>

## 行のピン固定 UI

組み込みの行ピン固定 UI は、`GridPinningActions` コンポーネントと `ActionStrip` コンポーネントを追加することで有効になります。アクション ストリップは、行にカーソルを合わせると自動的に表示され、表示されている行の状態に基づいてピン固定またはピン固定解除ボタンのアイコンが表示されます。ピン固定された行のコピーをビューにスクロールする追加のアクションがピン固定された行ごとに表示されます。

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="false">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
    <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=true
             Data=northwindEmployees
             RowEditable=true>
        <IgbColumn Field="ID" Editable=false></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City" Sortable=true></IgbColumn>
        <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true></IgbColumn>
        <IgbColumn Field="Address" Sortable=true></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
        <IgbColumn Field="Country" Sortable=true></IgbColumn>
        <IgbColumn Field="Phone" Sortable=true></IgbColumn>
        <IgbActionStrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridEditingActions></IgbGridEditingActions>
        </IgbActionStrip>
    </{ComponentSelector}>
```
<!-- WebComponents -->
```html
<{ComponentSelector} auto-generate="false">
    <igc-column field="field" header="field">
    </igc-column>
    <igc-action-strip #actionStrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

## 行のピン固定 API

行のピン固定は `Row` の `Pinned` 入力によって制御されます。デフォルトでピン固定行は `{ComponentName}` の上側に固定して描画され、`{ComponentName}` 本体のピン固定されていない行は垂直スクロールされます。

```typescript
this.grid.getRowByIndex(0).pinned = true;
```

```razor
this.Grid.PinRow("ALFKI", 0);
```

`{ComponentName}` の `PinRow` または `UnpinRow` メソッドを使用して ID によって行をピン固定またはピン固定解除できます。

```typescript
this.grid.pinRow('ALFKI');
this.grid.unpinRow('ALFKI');
```

```razor
this.Grid.PinRow("ALFKI", 0);
this.Grid.UnpinRow("ALFKI");
```

注: 行の ID は、グリッドの `PrimaryKey` またはレコード インスタンス自体によって定義される主キー値です。両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因に行がすでにその状態になっていることがあります。

行は、最後にピンされた行の下にピン固定されます。ピン固定行の順序を変更するには、`RowPinning` イベントでイベント引数の `InsertAtIndex` プロパティを適切な位置インデックスに変更します。

<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="true" (rowPinning)="rowPinning($event)">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="true">
</{ComponentSelector}>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;

    this._bind = () => {
        grid1.data = this.data;
        grid1.rowPinning = this.rowPinning;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```

```razor
<{ComponentSelector} Width="100%"
             Id="grid"
             RowPinningScript='rowPinningHandler'
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=true
             Data=northwindEmployees>
</{ComponentSelector}>
```

```razor
function rowPinningHandler(event) {
    event.insertAtIndex = 0;
}

igRegisterScript("rowPinningHandler", rowPinningHandler, false);
```
<!-- Angular -->

## ピン固定の位置

`Pinning` 設定オプションを使用して、行のピン固定の位置を変更できます。ピン固定の位置を Top または Bottom のいずれかに設定できます。
Bottom に設定すると、行がピン固定されていない行の後に、グリッドの一番下にレンダリングされます。ピン固定されていない行は垂直にスクロールできますが、ピン固定された行は下側に固定されます。

```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} data="data" auto-generate="true" pinning="pinningConfig">
    </igc-pinning-config rows="Bottom">
    </igc-pinning-config>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```typescript
public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Bottom };
```

```razor
    <{ComponentSelector} Id="grid"
            Width="100%"
            Height="100%"
            Pinning=PinningConfig
            PrimaryKey="Key"
            AutoGenerate=true
            Data=northwindEmployees>
    </{ComponentSelector}>
    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        public IgbPinningConfig PinningConfig = new IgbPinningConfig()
        {
            Rows = RowPinningPosition.Bottom
        };
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;
        }
    }
```

## カスタム行ピン固定 UI

カスタム UI を定義し、関連する API を介して行のピン状態を変更できます。

### アイコン付きの追加の列による

アクション ストリップの代わりに、すべての行にピンのアイコンを表示し、エンドユーザーが特定の行のピン状態をクリックして変更できます。
カスタム アイコンを含むセル テンプレートの列を追加することで実行できます。

```razor
<IgbColumn Width="70px" BodyTemplate=@bodyTemplate/>

@code {
    public RenderFragment<IgbCellTemplateContext> bodyTemplate = (context) =>
    {
        double index = context.Cell.Id.RowIndex;
        var grid = context.Cell.Grid;
        bool pinned = grid.GetRowByIndex(index).Pinned;
        var icon = pinned ? "lock" : "lock_open";
        string onPin = "togglePinning(" + index + ")";
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="@icon" Collection="material" onclick='@onPin' />;
    };
}
```

```html
<{ComponentSelector} [data]="data" [primaryKey]="'ID'" [autoGenerate]="false">
    <igx-column width="70px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key]="ID" auto-generate="false">
    <igc-column id="column" width="70px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var column = this.column = document.getElementById('column') as IgcColumnComponent;

    this._bind = () => {
        grid1.data = this.data;
        column.bodyTemplate = this.cellPinCellTemplate;
    }
    this._bind();
}

public cellPinCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
    <igc-icon class="pin-icon" mousedown="${this.togglePinning(ctx.cell.row, $event)}">
        ${ctx.cell.row.pinned ? 'lock' : 'lock_open'}
    </igc-icon>
            `;
}
```
<!-- end: WebComponents -->

カスタムアイコンをクリックすると、関連する行のピン状態は、行の API メソッドを使用して変更できます。

```typescript
public togglePinning(row: IgxGridRow, event) {
    event.preventDefault();
    if (row.pinned) {
        row.unpin();
    } else {
        row.pin();
    }
}
```

```razor
function togglePinning(rowIndex) {
    const row = grid1.getRowByIndex(0).pinned;
    row.pinned = !row.pinned;
}
igRegisterScript("togglePinning", togglePinning, false);
```

#### デモ

<code-view style="height:600px"
            data-demos-base-url="{environment:dvDemosBaseUrl}"
            iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-pinning-extra-column"
            github-src="{ComponentSample}/row-pinning-extra-column"
            alt="{Platform} {ComponentTitle} 行ピン固定の追加の列の例">
</code-view>

<!-- end: Angular -->

<!-- ComponentStart: Grid -->

<!-- Angular -->

### 行のドラッグによる

ピン状態を変更するために、ピン固定された行とピン固定されていない行の間に直接行をドラッグアンドドロップできるようにするとします。
これは、行のドラッグ機能を有効にし、ドロップの際に API で行をピン固定/ピン固定解除することで実現できます。

最初に、`igxDrop` ディレクティブによってグリッドをドロップ領域としてマークし、`rowDraggable` オプションで行のドラッグ機能を有効にします。

```html
<igx-grid [data]="data" [autoGenerate]="true" [rowDraggable]="true"
    [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
</igx-grid>
```

次に、`dropped` イベントを使用して並べ替えとピン固定/ピン固定解除のロジックを処理できます。

```typescript
public onDropAllowed(args) {
    const event = args.originalEvent;
    let currRowPinnedIndex;
    const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });
    if (currRowIndex === -1) { return; }

    const currRowID = this.getCurrentRowID(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });

    const currentRow = this.grid.rowList.toArray().find((r) => r.rowID === currRowID);
    if (currentRow.pinned) {
        currRowPinnedIndex = this.grid.pinnedRows.indexOf(this.grid.pinnedRows.find((r) => r.rowID === currRowID));
    }
    // remove the row that was dragged and place it onto its new location
    this.grid.deleteRow(args.dragData.key);
    this.data.splice(currRowIndex, 0, args.dragData.data);
    if (currentRow.pinned && !args.dragData.pinned) {
        this.grid.pinRow(args.dragData.key, currRowPinnedIndex);
    } else if (!currentRow.pinned && args.dragData.pinned) {
        this.grid.unpinRow(args.dragData.key);
    } else if (currentRow.pinned && args.dragData.pinned) {
        this.grid.unpinRow(args.dragData.key);
        this.grid.pinRow(args.dragData.key, currRowPinnedIndex);
    }
}
```

これにより、行を並べ替えたり、ピン固定とピン固定解除の行コレクション間で移動できるようになります。

#### デモ

<code-view style="height:510px"
            data-demos-base-url="{environment:dvDemosBaseUrl}"
            iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-pinning-drag"
            github-src="{ComponentSample}/row-pinning-drag"
            alt="{Platform} {ComponentTitle} 行ピン固定ドラッグの例">
</code-view>

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## 行ピン固定の制限

* データソースに存在するレコードのみをピン固定できます。
* 行のピン固定状態は Excel にエクスポートされません。グリッドは行のピン固定が適用されずにエクスポートされます。
* グリッドのスクロール可能領域におけるピン固定行のコピーは、ピン固定行が存在する状態で他のグリッド機能が動作するのに不可欠な役割を果たします。そのため、その生成を無効化または削除することはできません。
* 行選択 は 行 ID のみで動作するため、ピン固定行を選択するとそのコピーも選択されます (逆も同様)。さらに、ピン固定領域での範囲選択 (Shift + クリックにより) は、スクロール可能な領域で行を範囲選択する場合と同じように機能します。結果として、間にある行はピン固定されていなくてもすべて選択されます。API を 介して選択した行を取得すると、選択した各レコードの単一のインスタンスのみを返します。

<!-- Angular -->
* ピン固定行が内部でグリッドのピン固定領域と非固定領域の両方に存在するよう保存される仕様上、グリッド内のレコードがオンデマンドでリモート エンドポイントから取得される場合 (リモート仮想化)、行のピン固定はサポートされません。
* グリッドに `PrimaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合）、データ要求が完了すると、行は次の状態を失います:
    * 行の選択
    * 行の展開/縮小
    * 行の編集
    * 行のピン固定

<!-- end: Angular -->

<!-- Angular -->

## スタイル設定

`{ComponentName}` を使用すると、[{ProductName} テーマ ライブラリ](../themes/styles.md)を介してスタイルを設定できます。{ComponentTitle} の [theme]({environment:sassApiUrl}/index.html#function-grid-theme) は、{ComponentTitle} のすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下では、{ComponentTitle} の行ピン固定スタイルをカスタマイズする手順を示します。

### スタイル ライブラリのインポート

行のピン固定機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### テーマの定義

次に、[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張し、必要に応じて行のピン固定をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-grid-theme: grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```

### CSS 変数の使用

最後にカスタム グリッド テーマを設定します。

```scss
@include css-vars($custom-grid-theme);
```

### Mixin の使用

Internet Explorer 11 のコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。

コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。ただし、カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom grid theme to the `igx-grid` mixin
        @include grid($custom-grid-theme);
    }
}
```

### デモ

<!-- NOTE this sample is differed -->

<code-view style="height:540px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-pinning-style"
           github-src="{ComponentSample}/row-pinning-style"
           alt="{Platform} {ComponentTitle} 行ピン固定スタイル設定の例">
</code-view>

>[!NOTE]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## API リファレンス
* `{ComponentName}`
* `{ComponentName}Row`
* `RowType`

## その他のリソース


* [{ComponentTitle} 概要](overview.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)


コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})