---
title: {Platform} {ComponentTitle} キーボード ナビゲーション - {ProductName}
_description: {ProductName} で {ComponentTitle} キーボード ナビゲーションを使用する方法について説明します。キーボード インタラクションでは、セル、行、列を簡単に移動できます。
_keywords: keyboard navigation, {ProductName}, infragistics, キーボード インタラクション, インフラジスティックス
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} キーボード ナビゲーション

{Platform} {ComponentTitle} の {ProductName} キーボード ナビゲーションは、さまざまなキーボード操作をユーザーに提供します。これにより `{ComponentName}` のアクセシビリティが向上し、内部の要素 (セル、行、列ヘッダー、ツールバー、フッターなど) をナビゲートできるようになります。この機能はデフォルトで有効になっています。デフォルトの動作を簡単にオーバーライドするオプションがあります。

`{ComponentName}` のタブが削減され、ナビゲーションが W3C のアクセシビリティ標準に準拠し、使いやすくなりました。

現在、`{ComponentName}` には以下のタブ位置が導入されています。

* **グループ化またはツールバーの領域** (有効な場合)
* **{ComponentTitle} ヘッダー**
* **{ComponentTitle} 本体**
* **列の集計** (有効な場合)
* **{ComponentTitle} ページネーター** (有効な場合)

> [!Note]
> この変更のため、<kbd>Tab</kbd> と  <kbd>Shift</kbd> + <kbd>Tab</kbd> キーでセル間を移動することは `{ComponentName}` でサポートされなくなりました。
> <kbd>Tab</kbd> キーを押すと、**グループ化 / ツール バー** -> **ヘッダー** -> **本体** -> **集計** -> **フッター/ページネーター**の順序にタブ位置を移動します。

> [!Note]
> テンプレートによっ**フォーカス可能な**要素を `{ComponentName}` の本体に公開すると、ブラウザのデフォルトの動作が防止されていないため、**予期されない結果**が発生する可能性があります。
> したがって、それを適切に**防止/変更する**のは開発者の責任です。

## ヘッダー ナビゲーション

`{ComponentName}` ヘッダーの**キーボード ナビゲーション**が完全にサポートされるようになりました。列ヘッダーは矢印キーで簡単にトラバースできます。さらに、**フィルタリング**、**ソート**、**グループ化**などの列操作をトリガーするキーの組み合わせがいくつかあります。
`{ComponentName}` ヘッダー コンテナーがフォーカスされている場合、以下のキー組み合わせを使用できます。

### キーの組み合わせ

 - <kbd>↑</kbd> - ヘッダーで 1 つ上のセルへ移動 (ループなし)複数行レイアウトまたは複数列ヘッダーが定義されている場合のみ使用できます。
 - <kbd>↓</kbd> - ヘッダーの 1 つ下のセルに移動 (ラッピングなし)複数行レイアウトまたは複数列ヘッダーが定義されている場合のみ使用できます。
 - <kbd>←</kbd> - 1 つ左のセルへ移動 (ループなし)
 - <kbd>→</kbd> - 1 つ右のセルへ移動 (行間のラッピングなし)
 - <kbd>Ctrl</kbd> + <kbd>←</kbd> - 行の左端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの左端のセルへ移動
 - <kbd>Home</kbd> - 行の左端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの左端のセルへ移動
 - <kbd>Ctrl</kbd> + <kbd>→</kbd> - 行の右端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの右端のセルへ移動
 - <kbd>End</kbd> - 行の右端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの右端のセルへ移動
 - <kbd>Alt</kbd> + <kbd>L</kbd> - 詳細フィルタリングが有効な場合、詳細フィルタリング ダイアログを開きます。
 - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> - 列がフィルター可能な場合、Excel スタイル フィルターまたはデフォルト (行) フィルターを開きます。
 - <kbd>Ctrl</kbd> + <kbd>↑</kbd> - アクティブな列ヘッダーを昇順にソートします。列が昇順で既にソートされている場合、ソート状態を削除します。
 - <kbd>Ctrl</kbd> + <kbd>↓</kbd> - アクティブな列ヘッダーを降順にソートします。列が降順で既にソートされている場合、ソート状態を削除します。
 - <kbd>Space</kbd> - 列を選択します。列がすでに選択されている場合、選択を解除します。
 <!-- ComponentStart: Grid -->
 - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> - 列がグループ化可能としてマークされている場合、列をグループ化します。
 <!-- ComponentEnd: Grid -->
 - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> - 列がグループ化可能としてマークされている場合、列のグループ化を解除します。
 - <kbd>Alt</kbd> + <kbd>←</kbd> または <kbd>Alt</kbd> + <kbd>↑</kbd> - 列が縮小されていない場合、列グループ ヘッダーを縮小します。
 - <kbd>Alt</kbd> + <kbd>→</kbd> または <kbd>Alt</kbd> + <kbd>↓</kbd> - 列がまだ展開されていない場合、列グループヘッダーを展開します。

## 本体ナビゲーション

`{ComponentName}` 本体がフォーカスされている場合、以下のキー組み合わせを使用できます。

### キーの組み合わせ

<!-- ComponentStart: Grid, TreeGrid -->

- <kbd>↑</kbd> - 1 つ上のセルへ移動。
- <kbd>↓</kbd> - 1 つ下のセルへ移動。

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

- <kbd>↑</kbd> - 1 つ上のセルへ移動、必要に応じてグリッド階層の 1 つ上のレベルへ移動 (ラッピングなし)
- <kbd>↓</kbd> - 1 つ下のセルへ移動、必要に応じてグリッド階層の 1 つ下のレベルへ移動 (ラッピングなし)

<!-- ComponentEnd: HierarchicalGrid -->

 - <kbd>←</kbd> - 1 つ左のセルへ移動 (行間のラッピングなし)
 - <kbd>→</kbd> - 1 つ右のセルへ移動 (行間のラッピングなし)
 - <kbd>Ctrl</kbd> + <kbd>←</kbd> - 行の左端のセルへ移動
 - <kbd>Ctrl</kbd> + <kbd>→</kbd> - 行の右端のセルへ移動
 - <kbd>Ctrl</kbd> + <kbd>↑</kbd> - 列の最初のセルへ移動
 - <kbd>Ctrl</kbd> + <kbd>↓</kbd> - 列の最後のセルへ移動
 - <kbd>Home</kbd> - 行の左端のセルへ移動
 - <kbd>End</kbd> - 行の右端のセルへ移動
 - <kbd>Ctrl</kbd> + <kbd>Home</kbd> - グリッドの最も左上のデータ セルへ移動
 - <kbd>Ctrl</kbd> + <kbd>End</kbd> - グリッドの最も右下のデータ セルへ移動
 - <kbd>Page Up</kbd> - 1 ページ (ビューポート) 上へスクロール
 - <kbd>Page Down</kbd> - 1 ページ (ビューポート) 下へスクロール
 - <kbd>Enter</kbd> - 編集モードに入る
 - <kbd>F2</kbd> - 編集モードに入る
 - <kbd>Esc</kbd> - 編集モードを終了する
 - <kbd>Tab</kbd> - 編集モードのセルがある場合のみ使用できます。行の次の編集可能なセルにフォーカスを移動します。行の最後のセルに達した場合、フォーカスを次の行の最初の編集可能なセルに移動します。[行編集](row-editing.md)が有効な場合、フォーカスを編集可能な一番右のセルから **[キャンセル]** および **[完了]** ボタンへ移動し、**[完了]** ボタンから行の一番左の編集可能なセルへ移動します。
 - <kbd>Shift</kbd> + <kbd>Tab</kbd> - 編集モードのセルがある場合のみ使用できます。行の一つ前の編集可能なセルにフォーカスを移動します。行の最初のセルに達した場合、フォーカスを前の行の最後の編集可能なセルに移動します。[行編集](row-editing.md)が有効な場合、フォーカスを編集可能な一番右のセルから **[キャンセル]** および **[完了]** ボタンへ移動し、**[完了]** ボタンから行の一番右の編集可能なセルへ移動します。
 - <kbd>Space</kbd> - [行の選択](row-selection.md)が有効な場合、行を選択します。
 - <kbd>Alt</kbd> + <kbd>←</kbd> または <kbd>Alt</kbd> + <kbd>↑</kbd> -
 <!-- ComponentStart: Grid -->
  グループ行はグループを縮小します。
 <!-- ComponentEnd: Grid -->
 <!-- ComponentStart: HierarchicalGrid -->
  行アイランドを縮小します。
 <!-- ComponentEnd: HierarchicalGrid -->
 <!-- ComponentStart: TreeGrid -->
  現在のノードを縮小します。
 <!-- ComponentEnd: TreeGrid -->
 - <kbd>Alt</kbd> + <kbd>→</kbd> または <kbd>Alt</kbd> + <kbd>↓</kbd> -  <!-- ComponentStart: Grid -->
  グループ行はグループを展開します。
 <!-- ComponentEnd: Grid -->
 <!-- ComponentStart: HierarchicalGrid -->
  行アイランドを展開します。
 <!-- ComponentEnd: HierarchicalGrid -->
 <!-- ComponentStart: TreeGrid -->
  現在のノードを展開します。
 <!-- ComponentEnd: TreeGrid -->
 <!-- ComponentStart: Grid -->
 - <kbd>Alt</kbd> + <kbd>←</kbd> または <kbd>Alt</kbd> + <kbd>↑</kbd> - マスター/詳細行で詳細ビューを縮小します。
 - <kbd>Alt</kbd> + <kbd>→</kbd> または <kbd>Alt</kbd> + <kbd>↓</kbd> - マスター/詳細行で詳細ビューを展開します。
 - <kbd>Space</kbd> - グループ行上 - `RowSelection` プロパティが複数に設定されている場合、グループ内のすべての行を選択します。
 <!-- ComponentEnd: Grid -->



以下のデモサンプルで上記のすべての操作を実行できます。ナビゲーション可能なグリッド要素をフォーカスすると、利用可能な操作のリストが表示されます。

<!-- Angular, WebComponents, React -->

## デモ


`sample="/{ComponentSample}/keyboard-navigation-guide", height="600", alt="{Platform} {ComponentTitle} キーボード ナビゲーション ガイド"`

<!-- end: Angular, WebComponents, React -->

## カスタム キーボード ナビゲーション

特定のキーまたはキーの組み合わせのデフォルトの動作をオーバーライドすることができるは、**キーボード ナビゲーション**機能の利点の 1 つです。たとえば、<kbd>Enter</kbd> キーまたは <kbd>Tab</kbd> キーを押して次のセルまたは下のセルへ移動します。</kbd> </kbd> この以外のナビゲーションシナリオでも、**Keyboard Navigation** API で簡単に実現できます。

<!-- Blazor -->
| API | 説明 | 引数 |
|---------|-------------|-----------|
| `GridKeydown` | 上記のキー押下やキー押下の組み合わせのいずれかが実行されたときに発生されるイベント。キャンセルできます。その他のキーの押下/組み合わせには、デフォルトの `onkeydown` イベントを使用します。 | `GridKeydownEventArgs` |
| `ActiveNodeChange` | アクティブ ノードが変更されたときに発生するイベント。これを使用して、アクティブ フォーカス位置 (ヘッダー、tbody など)、列インデックス、行インデックス、またはネストされたレベルを決定できます。| `ActiveNodeChangeEventArgs` |
<!-- end: Blazor -->

<!-- Angular, WebComponents -->
| API | 説明 | 引数 |
|---------|-------------|-----------|
| `GridKeydown` | 上記のキー押下やキー押下の組み合わせのいずれかが実行されたときに発生されるイベント。キャンセルできます。その他のキーの押下/組み合わせには、デフォルトの `onkeydown` イベントを使用します。 | `GridKeydownEventArgs` |
| `ActiveNodeChange` | アクティブ ノードが変更されたときに発行されるイベント。これを使用して、アクティブ フォーカス位置 (ヘッダー、tbody など)、列インデックス、行インデックス、またはネストされたレベルを決定できます。 | `ActiveNodeChangeEventArgs` |
| `NavigateTo` | 提供された `Rowindex` と `VisibleColumnIndex` に基づいてグリッド内の位置に移動します。```{ targetType: GridKeydownTargetType, target: Object }``` タイプのパラメーターを受け入れるコールバック関数を通してターゲット要素上でカスタム ロジックを実行することもできます。使用方法: <br />```grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });``` | ```RowIndex: number, VisibleColumnIndex: number, callback: ({ targetType: GridKeydownTargetType, target: Object }```) => {} |
| `GetNextCell`| `RowIndex` と `VisibleColumnIndex` で次のセルを定義する `ICellPosition` オブジェクトを返します。コールバック関数は、`GetNextCell` メソッドの 3 番目のパラメーターとして渡すことができます。コールバック関数は、パラメーターとして `Column` を受け取り、指定された条件が満たされた場合に `boolean` 値を返します: <br />```const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);``` | ```currentRowIndex: number, currentVisibleColumnIndex: number, callback: (Column) => boolean``` |
| `GetPreviousCell` | `RowIndex` と `VisibleColumnIndex` で前のセルを定義する `ICellPosition` オブジェクトを返します。コールバック関数は、`GetPreviousCell` メソッドの 3 番目のパラメーターとして渡すことができます。コールバック関数は、パラメーターとして `Column` を受け取り、指定された条件が満たされた場合に `boolean` 値を返します: <br />```const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);``` | ``` CurrentRowIndex: number, CurrentVisibleColumnIndex: number, callback: (Column) => boolean ``` |
<!-- end: Angular, WebComponents -->
<br />

<!-- ComponentStart: HierarchicalGrid -->
> [!Note]
> `GetNextCell` および `GetPreviousCell` は現在のレベルで使用し、上位または下位レベルのセルにアクセスできません。
<!-- ComponentEnd: HierarchicalGrid -->

API を使用して、ユーザー入力の検証やカスタム ナビゲーションなどの一般的なシナリオを実現する方法を示します。最初に、`GridKeydown` イベントのイベント ハンドラーを登録する必要があります。


<!-- Angular -->
```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" (gridKeydown)="customKeydown($event)">
```
<!-- end: Angular -->

```html
<{ComponentSelector} id="grid1" primary-key="ProductID">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Id="grid1" PrimaryKey="ProductID" GridKeydownScript="WebGridCustomKBNav">
</{ComponentSelector}>
```

```razor
// In JavaScript

igRegisterScript("WebGridCustomKBNav", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    const grid = document.getElementById("grid1");

    if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}, false);
```

```tsx
<{ComponentSelector} id="grid1" primaryKey="ProductID" onGridKeydown={customKeydown}>
</{ComponentSelector}>
```
<!-- WebComponents -->
```ts
constructor() {
        const grid = this.grid = document.getElementById('grid1') as {ComponentName}Component;
		grid.data = this.data
		grid.addEventListener("gridKeydown", this.customKeydown);
	}
```
<!-- end: WebComponents -->

<!-- React -->

```tsx
const customKeydown = (eventArgs: IgrGridKeydownEventArgs) => {
  const args = eventArgs.detail;
  const target= args.target;
  const evt = args.event;
  const type = args.targetType;

  if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
      // 1. USER INPUT VALIDATION ON TAB
      
  }
  if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
      // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
  }
}
```

<!-- end: React -->

<!-- WebComponents -->

```typescript
public customKeydown(args: : CustomEvent<IgcGridKeydownEventArgs>) {
    const evt = args.detail;
    const target = evt.target as IgcCellType;
    const evt: KeyboardEvent = evt.event as KeyboardEvent;
    const type = evt.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

<!-- WebComponents -->

<!-- Angular, WebComponents, Blazor -->

イベント引数の値に基づいて、独自のロジックを提供する 2つ のケースを識別しました (上記を参照)。API のメソッドを使用して、目的の処理を実行しましょう。ユーザーが編集モードでセル上で <kbd>Tab</kbd> キーを押している場合、入力の検証を実行します。ユーザーがセル上で <kbd>Enter</kbd> キーを押すと、次の行のセルへフォーカスを移動します。

<!-- end: Angular, WebComponents, Blazor -->

<!-- Angular, WebComponents -->
```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
        });
```
<!-- end: Angular, WebComponents -->

<!-- React -->

イベント引数の値に基づいて、独自のロジックを提供する 2 つのケースを特定しました (上記を参照)。API のメソッドを使用して、目的の処理を実行しましょう。ユーザーが編集モードのセル上で <kbd>Tab</kbd> キーを押すと、入力の検証を実行します。

```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
```
<!-- end: React -->

```razor

// In JavaScript

igRegisterScript("WebGridCustomKBNav", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    const grid = document.getElementById("grid1");

    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
    });
}, false);

```

> [!Note]
> 実装の詳細は、サンプルコードを参照してください。

実装したカスタム シナリオを試すには以下のデモを使用してください。
- 数値列のセルをダブルクリックするか <kbd>F2</kbd> キーを押し、値を **7** に変更して <kbd>Tab</kbd> キーを押します。プロンプト メッセージが表示されます。
- セルを選択して <kbd>Enter</kbd> キー を数回押します。キーを押すたびに、同じ列の下にある次の行のセルへフォーカスを移動します。

#### デモ


`sample="/{ComponentSample}/keyboard-custom-navigation", height="400", alt="{Platform} {ComponentTitle} キーボードのカスタム ナビゲーション"`


## 既知の問題と制限

|制限|説明|
|--- |--- |
| スクロール可能な親コンテナーを使用してグリッド内を移動します。 | グリッドがスクロール可能な親コンテナー内に配置され、ユーザーが表示されていないグリッドのセルへ移動した場合、親コンテナーはスクロールされません。|

<!-- Angular -->

## API リファレンス

* [{ComponentTitle} API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [{ComponentTitle} スタイル]({environment:sassApiUrl}/index.html#function-grid-theme)

<!-- end: Angular -->

## その他のリソース

<!-- ComponentStart: Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd: Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})