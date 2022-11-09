---
title: {Platform} Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: グループを設定して {Platform} Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: {Platform}, Grid, {ProductName}, group by, Infragistics, グリッド, グループ化, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
_language: ja
---

# {Platform} Grid グループ化

{Platform} Material テーブルまたは UI グリッドの Group by 動作は、列の値に基づいてグループ化されたデータ行を作成します。`Grid` の Group By では、グループを階層構造で視覚化できます。グループデータ行は展開または縮小でき、グループの順序は UI または API で変更できます。行選択を有効にすると、GroupBy 行セレクターがグループ行の一番左の領域に描画されます。`RowSelection` プロパティが単一に設定されている場合、チェックボックスは無効になり、選択が行われるグループの表示としてのみ機能します。`RowSelection` プロパティが複数に設定されている場合、Group By 行セレクターをクリックすると、このグループに属するすべてのレコードが選択されます。

## {Platform} Grid グループ化の例
この例は、大量のデータのグループ化が可能であることを示しています。列ヘッダーを一番上 (グループ化領域) にドラッグすると、ユーザーは選択した列のデータを階層構造で表示できます。さらに列ヘッダーを一番上にドラッグすることで、複数のフィールドでグループ化できます。これらのグループ化オプションは、ユーザーが多数の行と列を持つテーブルがあり、はるかに高速で視覚的に受け入れられる方法でデータを表示ようとする場合に役立ちます。


<code-view style="height:605px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-expressions"
           alt="{Platform} {ComponentTitle} グループ化の例">
</code-view>


## 初期のグループ化状態

グリッドの `GroupingExpressions` プロパティに式の配列を割り当てることによって、グリッドの初期グループ化を定義することができます。

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

グループ式は、`ISortingExpression` インターフェイスを実装します。

## Group By API

### グループ化 API

グループ化は、UI およびグリッド コンポーネントで公開された API で実行できます。各列の `Groupable` プロパティを `true` に設定してエンドユーザーは特定の列でグリッド データをグループ化できます。

```html
<-grid [data]="data">
    <-column *ngFor="let c of columns" [field]="c.field" [groupable]="true">
    </-column>
</-grid>
```

```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```

ランタイムの式は `groupingExpressions` プロパティの取得または設定できます。既存の式を追加または変更する必要がある場合、`ISortingExpression` の単一または配列の `GroupBy` メソッドを使用してください。

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

<!-- Angular -->

> 注: これまで、グループ化 / ソートは互いに連携して機能していました。13.2 バージョンでは、grouping を sorting から切り離す新しい動作が導入されています。たとえば、グループ化をクリアしても、グリッド内のソート式はクリアされません。その逆も同様です。それでも、列がソートおよびグループ化されている場合は、グループ化された式が優先されます。

<!-- end: Angular -->

### 展開 / 縮小 API

グループ式の他にグループ行の展開も制御できます。`Grid` コンポーネント `GroupingExpansionState` の別のプロパティに保存されます。グループ行は、作成されたフィールド名とグループ化の各レベルを表す値に基づいて識別されます。以下は展開状態のインターフェイスのシグネチャです。

```typescript
export interface IGroupByKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupByKey>;
    expanded: boolean;
}
```

`GroupingExpressions` で `IGroupByExpandState` のリストを直接 `GroupingExpansionState` に設定すると展開が変更されます。`Grid` はグループ レコード インスタンスでトグルするメソッドを公開します。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.toggleGroup(groupRow);
    groupRow.expanded = false;
```

グループは展開済み (**デフォルト**) または縮小済みに作成でき、展開状態は一般的にデフォルト動作の反対の状態のみ含みます。グループを作成して展開するかどうか、または `GroupsExpanded` プロパティを介すかどうかを制御できます。

### グループですべての行を選択 / 選択解除 API

グループ内のすべての行の選択/選択解除は、`SelectRowsInGroup` および `DeselectRowsInGroup` API メソッドを介して利用できます。

以下のコードスニペットは、グループ レコード `SelectRowsInGroup` メソッドを使用してグループ内のすべての行を選択するために使用できます。さらに、このメソッドの2番目のパラメーターはブールプロパティです。それを使用して、前の行の選択をクリアするかどうかを選択できます。以前の選択はデフォルトで保存されます。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.selectRowsInGroup(groupRow);
```

プログラムでグループ内のすべての行の選択を解除する必要がある場合は、`DeselectRowsInGroup` メソッドを使用できます。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.deselectRowsInGroup(groupRow);
```

## テンプレート

### グループ行テンプレート

展開/縮小 UI を除くグループ行は完全にテンプレート化可能です。デフォルトでグループ アイコンを描画し、フィールド名と値を表示します。テンプレートが描画されるレコードのグループ化には、以下のシグネチャがあります:

```typescript
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
}
```

たとえば、以下のテンプレートはグループ行集計でより詳細な情報を表示します。

```html
<ng-template GroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

### グループ行セレクター テンプレート

上記のように、展開/縮小 UI を除くグループ行は完全にテンプレート化可能です。グリッド内にカスタムの GroupBy 行セレクター テンプレートを作成するには、`GroupByRowSelector` ディレクティブを使用して `<ng-template>` を宣言します。テンプレートから、Group By 行の状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`SelectedCount` プロパティは、現在選択されているグループ レコードの数を示し、`TotalCount` はグループに属するレコードの数を示します。

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    {{ groupByRowContext.selectedCount }} / {{ groupByRowContext.totalCount  }}
</ng-template>
```

`GroupRow` プロパティは、グループ行への参照を返します。

```html
<ng-template GroupByRowSelector let-groupByRowContext>
    <div (click)="handleGroupByRowSelectorClick($event, groupByRowContext.groupRow)">Handle groupRow</div>
</ng-template>
```

`SelectedCount` と `TotalCount` プロパティを使用して、Group By 行セレクターをチェックするか不確定にする (部分的に選択する) かを決定できます。

```html
<-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template GroupByRowSelector let-context>
        <-checkbox
            [checked]=" context.selectedCount > 0 && context.selectedCount === context.totalCount"
            [indeterminate]="context.selectedCount > 0 && context.selectedCount !== context.totalCount">
        </-checkbox>
    </ng-template>
</-grid>
```

## {Platform} Grid ページングによるグループ化

グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。展開または折りたたみ操作を行うと、ページングでページ数が再計算され、必要に応じてページ インデックスが調整されます。
複数のページにまたがるグループは、ページ間で分割されます。グループ行は、開始ページでのみ表示され、後続のページでは繰り返されません。グループ行の要約情報はグループ全体に基づいて計算され、ページングの影響を受けません。

### {Platform} ページングによるグループ化の例


<code-view style="height:605px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-paging"
           alt="{Platform} {ComponentTitle} ページングによるグループ化の例">
</code-view>


## 集計でグループ化

グループ化と要約の統合については、[集計](summaries.md#summaries-with-group-by)トピックで説明しています。

## キーボード ナビゲーション

グループ UI は、以下のキーボード インタラクションをサポートします。

- グループ行 (行または展開/縮小セルにフォーカス)
   - <kbd>ALT</kbd> + <kbd>右矢印</kbd> - グループを展開します。
   - <kbd>ALT</kbd> + <kbd>左矢印</kbd> - グループを縮小します。
   - <kbd>SPACE</kbd> - <kbd>rowSelection</kbd> プロパティが multiple に設定されている場合、グループ内のすべての行を選択します。

- グループ領域の `Chip` コンポーネントのグループ化 (チップにフォーカス)
   - <kbd>SHIFT</kbd> + <kbd>左矢印</kbd> - フォーカスしたチップの左へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SHIFT</kbd> + <kbd>右矢印</kbd> - フォーカスしたチップの右へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SPACE</kbd> - ソートの方向を変更します。
   - <kbd>DELETE</kbd> - フィールドのグループ解除。
   - チップの別の要素をフォーカスでき <kbd>ENTER</kbd> キーでインタラクティブに操作できます。

## {Platform} Grid カスタムグループ化

グリッドでは、列ごとまたはグループ化式ごとにカスタム グループを定義できます。これにより、カスタム条件に基づいてグループ化が提供されます。これは、複雑なオブジェクトごとにグループ化する必要がある場合、または他のアプリケーション固有のシナリオで役立ちます。

> [!NOTE]
> カスタム グループ化を実装するには、まずデータを適切にソートする必要があります。このため、ベース `DefaultSortingStrategy` を拡張するカスタムのソート ストラテジを適用する必要がある場合もあります。データがソートされた後、列または特定のグループ化式に `GroupingComparer` を指定することにより、カスタム グループを決定できます。

以下のサンプルは、`Date` によるカスタム グループ化を示しています。日付の値は、ユーザーが選択したグループ化モードに基づいて、日、週、月、または年でソートされおよびグループ化されています。

### {Platform} カスタム グループ化の例


<code-view style="height:605px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-custom-coming-soon"
           alt="{Platform} {ComponentTitle} カスタム グループ化の例">
</code-view>


このサンプルでは、さまざまな日付条件のカスタム並べ替えストラテジを定義しています。
各カスタム ストラテジ、ベースの `DefaultSortingStrategy` を拡張し、`CompareValues` メソッドを定義します。値をソートするときに使用されるカスタム比較関数です。さらに、比較に必要な日付から値を抽出します。

```typescript
class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : 0;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : dateA.day < dateB.day ?
            -1 : dateA.day > dateB.day ?
            1 : 0;
    }
}

class WeekSortingStrategy extends BaseSortingStrategy {

    public getWeekOfDate(a: any) {
       return parseInt(new DatePipe("en-US").transform(a, 'w'), 10);
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        const weekA = this.getWeekOfDate(a);
        const weekB = this.getWeekOfDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : weekA < weekB ?
            -1 : weekA > weekB ?
            1 : 0;
    }
}
```

`GroupingComparer` 関数がグループ化式に対して定義され、選択されたグループ化モードに基づいて同じグループに属するアイテムを決定します。この関数が 0 を返すソートされた値は、同じグループの一部としてマークされます。

```typescript
 groupingComparer: (a, b) => {
    const dateA = this.sortingStrategy.getParsedDate(a);
    const dateB = this.sortingStrategy.getParsedDate(b);
    if (this.groupByMode === 'Month') {
        return dateA.month === dateB.month ? 0 : -1;
    } else if (this.groupByMode === "Year") {
        return dateA.year === dateB.year ? 0 : -1;
    } else if (this.groupByMode === "Week") {
        return this.sortingStrategy.getWeekOfDate(a) === this.sortingStrategy.getWeekOfDate(b) ? 0 : -1;
    }
    return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
}
```

<!-- Angular -->
## スタイル設定

[Ignite UI for {Platform} テーマ ライブラリ](../themes/sass/component-themes.md)でスタイルを設定できます。theme は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下の手順では、グリッドの Group By スタイルをカスタマイズする手順を実行しています。

### グローバル テーマのインポート

グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to Ignite UI for {Platform} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### カスタム テーマの定義

次に、`grid-theme` を拡張し、必要に応じてピン固定をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。Group By 機能で使用されるため、`chip-theme` を拡張する必要もあります。

```scss

$custom-theme: grid-theme(
    /* Group By properties that affect styling */
    $group-row-background: #494949,
    $group-row-selected-background: #383838,
    $group-label-column-name-text: #f8f8f8,
    $group-label-icon: #FFCD0F,
    $group-label-text: #f8f8f8,
    $group-count-background: #FFCD0F,
    $group-count-text-color: #000,
    $expand-icon-color: #FFCD0F,
    $expand-icon-hover-color: rgb(223, 181, 13),
    $cell-active-border-color: #FFCD0F,
    $row-selected-background: #fff6d3,
    $row-selected-text-color: #000,
    $drop-indicator-color: #FFCD0F
    /* add other features properties here... */
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: chip-theme(
    $background: #494949,
    $text-color: #f8f8f8,
    $hover-text-color: #e7e7e7
);
```

### カスタム カラー パレットの定義

上記で説明したアプローチでは、色の値がハード コーディングされていました。または、`palette` および `color` 関数を使用して、柔軟性を高めることができます。
`palette` generates a color palette, based on provided primary and secondary colors.

```scss
$black-color: #292826;
$yellow-color: #FFCD0F;

$custom-palette: palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
カスタム パレットが生成された後、`color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。

```scss
$custom-theme: grid-theme(
    $group-row-background: color($custom-palette, "primary", 300),
    $group-row-selected-background: color($custom-palette, "primary", 400),
    $group-label-column-name-text:contrast-color($custom-palette, "primary", 500),
    $group-label-icon: color($custom-palette, "secondary", 600),
    $group-label-text:contrast-color($custom-palette, "primary", 500),
    $group-count-background: color($custom-palette, "secondary", 600),
    $group-count-text-color: color($custom-palette, "primary", 400),
    $expand-icon-color: color($custom-palette, "secondary", 600),
    $expand-icon-hover-color: color($custom-palette, "secondary", 300),
    $cell-active-border-color: color($custom-palette, "secondary", 600)
);

$custom-chips-theme: chip-theme(
    $background: color($custom-palette, "primary", 300),
    $text-color:contrast-color($custom-palette, "primary", 500),
    $hover-text-color:contrast-color($custom-palette, "primary", 600)
);
```
### カスタム スキーマの定義
[**スキーマ**](../themes/sass/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマのいずれかを拡張します。この場合、`$_light_grid` を使用します。
```scss
$custom-grid-schema: extend($_light-grid,(
    group-row-background: (-color:('secondary', 100)),
    group-row-selected-background: (-color:('primary', 400)),
    group-label-column-name-text: (-color:('primary', 600)),
    group-label-icon: (-color:('primary', 600)),
    group-label-text: (-color:('secondary', 700)),
    group-count-background: (-color:('primary', 600)),
    group-count-text-color: (-color:('secondary', 400)),
    expand-icon-color: (-color:('primary', 600)),
    expand-icon-hover-color: (-color:('primary', 400))
));
```
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。
```scss
$my-custom-schema: extend($light-schema, (
    -grid: $custom-grid-schema
));

$custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

### カスタム テーマの適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。
```scss
@include grid($custom-theme);
@include chip($custom-chips-theme);
```

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、{Platform} の [ViewEncapsulation](https://{Platform}.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが [Emulated](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
        @include chip($custom-chips-theme);
    }
}
```


### デモ

<!-- NOTE this sample is differed -->

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-groupby-styling" >
</code-view>

>[!NOTE]
>サンプルは、`テーマの変更`で選択したグローバル テーマの影響を受けません。

<!-- end:Angular -->

## 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ列の最大値は 10 です。 | 10 列以上の場合はエラーがスローされます。

## API リファレン

* {ComponentTitle}
* `GroupByRow`
* `GridComponent スタイル`
* `ISortingExpression`
* `ColumnComponent`
* `IGroupByExpandState`
* `ChipComponent`
* `ChipComponent スタイル`

## その他のリソース

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列の移動](column-moving.md)
* [集計](summaries.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})