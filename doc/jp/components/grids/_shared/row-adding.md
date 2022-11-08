---
title: {Platform} {ComponentTitle} 行の追加 - インフラジスティックス
_description: {Platform} を使用して、定義済みの行追加機能の使用およびカスタマイズする方法を学びます。直感的なグリッド行の追加と CRUD 機能を利用できます。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 行の追加

<!-- ComponentStart: Grid, HierarchicalGrid -->

`{ComponentName}` はインライン行追加や {Platform} CRUD 操作のための強力な API を通して便利なデータ操作方法を提供します。グリッドのテンプレートで編集アクションが有効になっている `ActionStrip` コンポーネントを追加し、行にホバーして提供されたボタンを使用するか、<kbd>ALT</kbd> + <kbd>+</kbd> を押して、行追加 UI を生成します。

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

`{ComponentName}` はインライン行追加や {Platform} CRUD 操作のための強力な API を通して便利なデータ操作方法を提供します。グリッドのテンプレートで編集アクションが有効になっている `ActionStrip` コンポーネントを追加し、ホバーして提供されたボタンを使用するか、<kbd>ALT</kbd> + <kbd>+</kbd> を押して、行追加 UI を生成するか、<kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> を押して、選択した行に子を追加するための UI を生成します。

<!-- ComponentEnd: TreeGrid -->

# {Platform} {ComponentTitle} 行の追加の例

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-adding"
           github-src="{ComponentSample}/row-adding"
           alt="{Platform} {ComponentTitle} 行の追加の例">
</code-view>

## 行追加の使用

<!-- Angular -->
`{ComponentModule}` を **app.module.ts** ファイルにインポートします。

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

次に、バインドしたデータ ソースに `{ComponentName}` を定義をして `RowEditable` を true に設定し、編集アクションを有効にした `ActionStrip` コンポーネントを定義します。`AddRow` 入力は、行追加 UI を生成するボタンの表示状態を制御します。

```html
<igx-grid [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" dataType="number"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" dataType="number"></igx-column>
    <igx-column field="ProductName" header="ProductName" dataType="string"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" dataType="number"></igx-column>
    <igx-column field="OrderDate" dataType="date"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" dataType="boolean"></igx-column>

    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```

```html
<igx-tree-grid igxPreventDocumentScroll [data]="data"
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
</igx-tree-grid>
```

```html
<igx-hierarchical-grid igxPreventDocumentScroll [data]="localdata"
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
</igx-hierarchical-grid>
```

> [!NOTE]
> プライマリ キーは行追加操作で必須です。

> [!NOTE]
> プライマリ キーを除くすべての列は、デフォルトで行追加 UI で編集可能です。特定の列の編集を無効にする場合、`Editable` 列の入力を `false` に設定します。

<!-- ComponentStart: Grid, HierarchicalGrid -->

> [!NOTE]
> [行の追加] のボタンの表示状態を制御する `GridEditingActions` 入力は、アクション ストリップ コンテキスト (タイプ `RowType` を使用して、ボタンが表示するレコードを調整できます。

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

> [!NOTE]
> [行の追加] のボタンの表示状態を制御する `GridEditingActions` 入力は、アクション ストリップ コンテキスト (タイプ `RowType`) を使用して、ボタンが表示するレコードを調整できます。

<!-- ComponentEnd: TreeGrid -->

内部の `BaseTransactionService` は `{ComponentName}` に自動的に提供されます。行の状態が送信またはキャンセルされるまで、保留中のセルの変更を保持します。

## プログラムで行の追加を開始

`{ComponentName}` を使用すると、2 つの異なるパブリック メソッドを使用して、プログラムで行追加 UI を生成できます。1 つは UI が生成される行を指定するための行 ID を受け入れ、もう 1 つはインデックスによって機能します。これらのメソッドを使用して、現在のデータ ビュー内の任意の場所に UI を生成できます。ページの変更や、たとえばフィルターで除外された行の指定はサポートされていません。

<!-- ComponentStart: Grid, HierarchicalGrid -->

`BeginAddRowById` を使用するには、`RowID` (PK) によって操作のコンテキストとして使用する行を指定する必要があります。このメソッドは、エンドユーザーが指定された行の [行の追加] アクション ストリップ ボタンをクリックしたかのように機能し、その下に UI を生成します。最初のパラメーターに `null` を渡すことで、UI をグリッドの最初の行としてス生成させることもできます。

```typescript
this.grid.beginAddRowById('ALFKI');  // Spawns the add row UI under the row with PK 'ALFKI'
this.grid.beginAddRowById(null);     // Spawns the add row UI as the first record
```

`beginAddRowByIndex` メソッドも同様に機能しますが、UI が生成されるインデックスを指定する必要があります。許可される値の範囲は、0 からデータ ビューのサイズ -1 までです。

```typescript
this.grid.beginAddRowByIndex(10);   // Spawns the add row UI at index 10
this.grid.beginAddRowByIndex(0);    // Spawns the add row UI as the first record
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid --> 

`BeginAddRowById` を使用するには、`RowID` (PK) によって操作のコンテキストとして使用する行を指定する必要があります。このメソッドは、エンドユーザーが指定された行の [行の追加] アクション ストリップ ボタンをクリックしたかのように機能し、その下に UI を生成します。2 番目のパラメーターは、行を子としてコンテキスト行に追加するか、兄弟として追加するかを制御します。最初のパラメーターに `null` を渡すことで、UI をグリッドの最初の行としてス生成させることもできます。

```typescript
this.treeGrid.beginAddRowById('ALFKI', true);   // Spawns the add row UI to add a child for the row with PK 'ALFKI'
this.treeGrid.beginAddRowById(null);            // Spawns the add row UI as the first record
```

`BeginAddRowByIndex` メソッドも同様に機能しますが、コンテキストとして使用する行はインデックスによって指定されます。

```typescript
this.treeGrid.beginAddRowByIndex(10, true);   // Spawns the add row UI to add a child for the row at index 10
this.treeGrid.beginAddRowByIndex(null);       // Spawns the add row UI as the first record
```

<!-- ComponentEnd: TreeGrid -->

## 位置

- 行追加 UI のデフォルト位置は、エンド ユーザーが [行の追加] ボタンをクリックした行の下にあります。

- `{ComponentName}` がスクロールして、行追加 UI が自動的に完全に表示されます。

- 行追加 UI のオーバーレイは、スクロール中もその位置を維持します。

## 動作

行追加 UI は、エンド ユーザーに整合性のある編集エクスペリエンスを提供するように設計されているため、行編集 UI と同じ動作をします。詳細については、[{ComponentTitle} 行の編集](row-editing.md)のトピックを参照してください。

行追加 UI を介して新しい行が追加された後、その位置や表示状態は、`{ComponentName}` のソート、フィルタリングおよびグループ化の状態によって決定されます。これらの状態のいずれも適用されていない `{ComponentName}` では、最後のレコードとして表示されます。スナックバーが短時間表示され、`{ComponentName}` が表示されていない場合にはエンド ユーザーがコントロールの位置までスクロールするためのボタンが含まれています。

## キーボード ナビゲーション

- <kbd>ALT</kbd> + <kbd>+</kbd> - 行を追加するために編集モードに入ります。

<!-- ComponentStart: TreeGrid -->

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - 子を追加するために編集モードに入ります。

<!-- ComponentEnd: TreeGrid -->
- <kbd>ESC</kbd> は変更を送信せずに行追加モードを終了します。

- <kbd>TAB</kbd> -  行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから [キャンセル] と [完了] ボタンへ移動します。[完了] ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。

## 機能の統合

- `{ComponentName}` のデータ ビューが変更されると、行追加の操作は停止します。エンド ユーザーが行った変更はすべて送信されます。データ ビューを変更する操作には、ソート、グループ化、フィルタリング、ページングなどが含まれますが、これらに限定されません。

- 行追加の操作が終了すると、集計が更新されます。同じことが、ソート、フィルタリングなど、他のデータ ビューに依存する機能にも当てはまります。

<!-- ComponentStart: HierarchicalGrid -->

- `{ComponentName}` の UI を生成すると、エンド ユーザーが [行の追加] ボタンをクリックした行に対して現在展開されている子レイアウトはすべて縮小されます。

<!-- ComponentEnd: HierarchicalGrid -->

## 行追加オーバーレイのカスタマイズ

### テキストのカスタマイズ

行追加オーバーレイのテキストのカスタマイズは、`RowAddTextDirective` を使用して可能です。

```html
<ng-template igxRowAddText>
	Adding Row
</ng-template>
```

### ボタンのカスタマイズ

`RowEditActionsDirective` を使用して行編集オーバーレイのボタンのカスタマイズが可能です。

キーボード ナビゲーションにボタンを含める場合、各ボタンに `RowEditTabStopDirective` が必要です。

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
```
> [!NOTE]
> `RowEditActions` ディレクティブを使用すると、オーバーレイ ボタンの編集と追加の両方の編集アクションが変更されます。

<!-- Angular -->

## リモート シナリオ

ほとんどのリモート データ シナリオでは、主キーの割り当てはサーバーの作成要求で発生します。この場合、クライアントに追加されたレコードは、サーバーのデータベースに保存されるまで最終的な主キー値を持ちません。`{ComponentName}` でこの更新を処理する推奨される方法は以下のとおりです。

- `{ComponentName}` がトランザクションを使用しない場合。

    作成要求が正常に完了し、追加されたレコード データを返すと、ローカル データ レコード インスタンスでそのレコードの ID を置き換えることができます。

- `{ComponentName}` がトランザクションを使用する場合。

    作成要求または一括更新要求が正常に完了し、追加されたレコード インスタンス (db で生成された ID) を返すと、`Clear` API メソッド を使用して関連する ADD トランザクションをトランザクション ログからクリアする必要があります。ローカル トランザクションに生成された id フィールドがあり、データベースで作成された id フィールドと異なる場合があるため、クリアする必要があります。返却されたレコードをローカル データ インスタンスに追加できます。

これにより、リモートで生成された ID がローカル データに常に反映され、以降の更新/削除操作で正しいレコード ID がターゲットになります。

<!-- end: Angular -->

<!-- Angular -->

## スタイル設定

行追加 UI は `ActionStrip` 編集操作のボタン、編集エディター、オーバーレイ、エンドユーザーが新しく追加された行にスクロールできるスナックバーが構成されます。これらのコンポーネントのスタイル設定には、それぞれのトピックのガイドを参照してください。

- [{ComponentTitle} 行の編集](row-editing.md#スタイル設定)
- [Snackbar](../snackbar.md#スタイル設定)
- [ActionStrip](../action-strip.md#スタイル設定)

<!-- end: Angular -->

## API リファレンス

* `RowEditable`
* `RowEditEnter`
* `RowEdit`
* `RowEditDone`
* `RowEditCancel`
* `EndEdit`
* `PrimaryKey`
* `{ComponentName}`

## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} トランザクション](batch-editing.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})