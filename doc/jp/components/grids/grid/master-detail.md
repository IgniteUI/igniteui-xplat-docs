---
title: {Platform} {ComponentTitle} マスターと詳細 Grid - インフラジスティックス
_description: Ignite UI {Platform} Grid を使用して行データの展開可能な詳細ビュー テンプレートを定義します。マスターと詳細スタイル データを階層構造で表示する場合に便利です。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, master detail, Infragistics, マスターと詳細, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid']
_language: ja
---

# {Platform} マスターと詳細 Grid

`Grid` コンポーネントは、コンテンツを展開/縮小することで特定の行の追加の詳細を表示する詳細テンプレートの指定をサポートします。指定した場合、各レコードはマスターとして機能し、展開すると、現在のレコードのコンテキスト データを含むカスタマイズ可能な詳細テンプレートが表示されます。

このモードは、マスターと詳細スタイル データを階層構造で表示する必要がある場合に役立ちます。

## {Platform} Grid マスターと詳細の例


`sample="/{GridSample}/master-detail", height="600", alt="{Platform} {ComponentTitle} マスターと詳細の例"`


## 構成

マスターと詳細モードで表示するように `Grid` を設定するには、グリッドのテンプレートを指定する必要があります。

```html
<{ComponentSelector}>
         <ng-template GridDetail let-dataItem>
              <!-- Custom detail template content here -->
        </ng-template>
</{ComponentSelector}>
```

```ts
constructor() {
  var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
  this._bind = () => {
    grid.data = this.customersData;
    grid.detailTemplate = this.masterDetailTemplate;
  }
  this._bind();
}
```

```razor
    <IgbGrid DetailTemplateScript="DetailTemplate"  AutoGenerate=true  Data=northwindEmployees></IgbGrid>
```

```ts
<IgrGrid detailTemplate={masterDetailTemplate} autoGenerate="false" data={nwindData}>
```

テンプレートのコンテキストはマスター レコード データであるため、マスター レコードの値を詳細テンプレートに表示できます。例:

```html
<{ComponentSelector}>
         <ng-template GridDetail let-dataItem>
            <div *ngIf="dataItem.Category">
                <header>{{dataItem.Category.CategoryName}}</header>
                <span>{{dataItem.Category.Description}}</span>
            </div>
        </ng-template>
</{ComponentSelector}>
```

```ts
    public masterDetailTemplate = (ctx: IgcGridMasterDetailContext) => {
        var data = ctx.implicit;
        return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span> <br/>
        <span><strong>Title:</strong> ${data.ContactTitle}</span> <br/>
        <span><strong>Company:</strong> ${data.CompanyName}</span> <br/>
    </div>`;
    }
```

```razor
// In JavaScript
igRegisterScript("DetailTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var data = ctx.implicit;
    return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span> <br/>
        <span><strong>Title:</strong> ${data.ContactTitle}</span> <br/>
        <span><strong>Company:</strong> ${data.CompanyName}</span> <br/>
    </div>`;
}, false);
```

```ts
const masterDetailTemplate = ({dataContext}:{dataContext: IgrGridMasterDetailContext}) => {
    const data = dataContext.implicit;
    return (
        <div className="contact-container">
            <span><strong>Name:</strong> {data.ContactName}</span> <br/>
            <span><strong>Title:</strong> {data.ContactTitle}</span> <br/>
            <span><strong>Company:</strong> {data.CompanyName}</span> <br/>
        </div>
    );
}
```

## API

<!-- Angular -->

展開状態は、`Grid` の `ExpansionStates` 入力で制御できます。状態はキーと値のペア [行識別子、展開状態] に保存されます。このプロパティは、展開状態を取得/設定し、双方向バインディングをサポートします。

```html
  <{ComponentSelector} [(expansionStates)]='expansionState' >
  </{ComponentSelector}>
```

<!-- end: Angular -->

展開状態を制御するための追加の API メソッドも公開されています。
- `ExpandAll`
- `CollapseAll`
- `ToggleRow`
- `ExpandRow`
- `CollapseRow`

## キーボード ナビゲーション

- 詳細行にフォーカスがある場合:

    - <kbd>🡑</kbd> - 前の行のセルにフォーカスし、1 つ上の行へ移動します。
    - <kbd>🡓</kbd> - 次の行のセルにフォーカスし、1 つ下の行へ移動します。
    - <kbd>Tab</kbd> - フォーカス可能な要素がある場合、テンプレート内の次のフォーカス可能な要素にフォーカスを移動します。そうでない場合は、次のグリッド行に移動します。
    - <kbd>Shift</kbd> + <kbd><kbd>Tab</kbd> - 前の行にフォーカスします。

- エキスパンダーのデータ行にフォーカスがある場合:
    - <kbd>Alt</kbd> + <kbd>🡒</kbd> または <kbd>Alt</kbd> + <kbd>🡓</kbd> - 行を展開します。
    - <kbd>Alt</kbd> + <kbd>🡐</kbd> または <kbd>Alt</kbd> + <kbd>🡑</kbd> - 行を縮小します。

## 既知の問題と制限


|既知の制限| 説明|
| --- | --- |
| カスタム詳細テンプレート内のタブ ナビゲーションは、次のフォーカスされた要素が表示ビュー ポート以外にある場合、マスター グリッドのスクロール位置を更新しない場合があります。| カスタム詳細テンプレート内のタブ ナビゲーションは、ブラウザーに残されています。 |
| `<igc-column>` 定義を含む詳細ビュー内のグリッドをテンプレート化する際に親グリッドもそれらの列をレンダリングします。 | これは、ネストされたグリッドで autoGenerate=true を使用して回避できます。これらの列の要素を変更する必要がある場合、`ColumnInit` イベントを使用できます。|
| 詳細テンプレートは Excel にエクスポートされません。| 詳細テンプレートにはあらゆる種類のコンテンツが含まれているため、Excel にエクスポートすることはできません。|
| 検索機能は、詳細テンプレートの要素を強調表示しません。 | |

## API リファレンス

* `Grid`
* `Column`
* `HierarchicalGridRow`
