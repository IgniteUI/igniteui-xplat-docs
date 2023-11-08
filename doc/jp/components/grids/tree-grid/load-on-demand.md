---
title: {Platform} ツリー グリッド | 最速の {Platform} ツリー テーブル | インフラジスティックス
_description: {ProductName} ツリー Tree Grid は、親行が展開されたときに必要な子データのみを読み込むことにより、取得およびレンダリングするデータ量が大幅に軽減されます。
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics, {Platform} ツリー グリッド, インフラジスティックス
_language: ja
---

# Tree Grid (ツリー グリッド) ロードオンデマンド

Ignite UI for {Platform} ツリー グリッド は、サーバーから最小限のデータのみ取得してレンダリングされるため、ユーザーにすばやくデータを表示できます。その後、ユーザーが行を展開した後にのみ、その特定の親行の子がロードされます。このメカニズムは、ロードオンデマンドであらゆるリモートデータとの設定が簡単にできます。

## {Platform} Tree Grid ロードオンデマンド例

`sample="/{TreeGridSample}/load-on-demand", height="700", alt="{Platform} Tree Grid ロードオンデマンド例"`

### 使用方法

ロードオンデマンド機能は、ツリーグリッド データソースの両方のタイプ (主キーと外部キー、または子コレクション) と互換性があります。ツリー グリッドにルート レベルのデータをロードし、いずれかのデータソース タイプに必要なキーを指定するだけです。ツリーグリッドは、ユーザーが行を展開したときに子行をロードするためのコールバック入力プロパティ `LoadChildrenOnDemand` を提供します。

<!-- Angular -->

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren">
</igx-tree-grid>
```

<!-- end: Angular -->

<!-- WebComponents -->

```html
<igc-tree-grid id="treeGrid"></igc-tree-grid>
```

```ts
constructor() {
    var treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.employeesFlatData;
    treeGrid.loadChildrenOnDemand = (parentID: any, done: (children: any[]) => void) => {
    this.getData(parentID, (children) => done(children));
    };
}
```

LoadChildrenOnDemand コールバックは、2 つのパラメーターを提供します:

- parentID - 展開されている親行の ID。
- done - 子がサーバーから取得されたときに子と共に呼び出されるコールバック。

```typescript
public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    this.getData(parentID, (children) => done(children));
}
```

<!-- end: WebComponents -->

ユーザーが展開アイコンをクリックすると、ロード アイコンに変わります。done コールバックが呼び出されると、読み込みインジケーターが消え、子が読み込まれます。ツリーグリッドは子を基になるデータソースに追加し、必要なキーを自動的に設定します。 

行がその展開前に子を持つかどうかについての情報を提供する方法がある場合は、HasChildrenKey 入力プロパティを使用できます。このようにして、展開インジケータを表示するかどうかを示すデータオブジェクトからブール値プロパティを提供できます。

<!-- Angular -->

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren" hasChildrenKey="hasEmployees">
        ...
</igx-tree-grid>
```

<!-- end: Angular -->

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" has-children-key="hasEmployees"></igc-tree-grid>
```

HasChildrenKey プロパティを設定する必要はありません。指定しなかった場合は、各行に展開インジケーターが表示されます。子を持たない行を展開した後も、未定義または空の配列で done コールバックを呼び出す必要があります。この場合、ロード インジケーターが消えた後に展開ンジケータは表示されません。


<!-- WebComponents -->
独自のカスタム ロード インジケーターを提供する場合は、RowLoadingIndicatorTemplate オプションを使用してカスタム テンプレートを設定できます。以下のコードは設定方法を示します:

```ts
constructor() {
    var treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.employeesFlatData;
    treeGrid.rowLoadingIndicatorTemplate = this.rowLoadingTemplate;
    treeGrid.loadChildrenOnDemand = (parentID: any, done: (children: any[]) => void) => {
               this.getData(parentID, (children) => done(children));
    };

}
public rowLoadingTemplate() {
    return html`<igc-icon name="loop" collection="material"></igc-icon>`;
}
```

<!-- end: WebComponents -->

<!-- Angular -->
カスタムの読み込みインジケーターを提供したい場合は、ng-template を作成し、それに RowLoadingIndicator ディレクティブを使用してマークを付けます。以下のコード スニペットはカスタム テンプレートを定義する方法を示します。

```html
<igx-tree-grid>
    <ng-template igxRowLoadingIndicator>
        <igx-icon fontSet="material">loop</igx-icon>
    </ng-template>
</igx-tree-grid>
```

<!-- end: Angular -->

## API リファレンス

* `TreeGrid`

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})