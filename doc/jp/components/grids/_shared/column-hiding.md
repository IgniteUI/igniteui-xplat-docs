---
title: {Platform} {ComponentTitle} の列非表示 - インフラジスティックス
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} の列非表示

<!-- Angular -->
{ProductName} `{ComponentName}` は、`ColumnHidingDirective` のある `ColumnActionsComponent` を提供し、ユーザーが **UI** を介して、または {Platform} コンポーネントを使用して列の非表示を実行できるようにします。
<!-- end: Angular -->

Ignite UI for {Platform} `{ComponentName}` には組み込み列非表示 UI があり、これを `{ComponentName}` のツールバーから使用して列の表示状態を変更できます。更に別のコンポーネントとして列非表示 UI を定義してページの必要な場所に配置できます。

## {Platform} {ComponentTitle} 列非表示の例

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-hiding-toolbar"
           github-src="{ComponentSample}/column-hiding-toolbar"
           alt="{Platform} {ComponentTitle} 列非表示の例">
</code-view>

## {ComponentTitle} のセットアップ

`{ComponentName}` を作成してからデータをバインドします。列でフィルタリングとソートも有効にします。

```html
<{ComponentSelector} #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Data=northwindEmployees AutoGenerate=false Width="100%"  Height="100%" ColumnWidth="200px" AllowFiltering=true>
    <IgbColumn Field="ID" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactName" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true></IgbColumn>
    <IgbColumn Field="City"  Sortable=true></IgbColumn>
    <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
    <IgbColumn Field="Fax" Sortable=true></IgbColumn>
    <IgbColumn Field="Address" Sortable=true></IgbColumn>
    <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
    <IgbColumn Field="Country" Sortable=true></IgbColumn>
    <IgbColumn Field="Phone" Sortable=true></IgbColumn>
</{ComponentSelector}>
```

## ツールバーの列非表示 UI

定義済みの列非表示 UI は、`{ComponentName}` のツールバーの `DropDown` 内に配置されます。列非表示の UI をこのドロップダウンを使用して表示/非表示にできます。

これには、`{ComponentName}` 内に `GridToolbarActions` と `GridToolbarHiding` の両方を設定することだけです。ツールバーにタイトルを追加するには、`GridToolbarTitle` を設定し、{ComponentTitle} のラッパーにカスタム スタイルを設定します。

```html
<div class="grid__wrapper">
    <{ComponentSelector} [data]="localdata">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </{ComponentSelector}>
</div>
```

```razor
<div class="grid__wrapper">
    <{ComponentSelector} Data=northwindEmployees>
        <IgbGridToolbar>
            <IgbGridToolbarTitle>Employees</IgbGridToolbarTitle>
            <IgbGridToolbarActions>
                <IgbGridToolbarHiding></IgbGridToolbarHiding>
            </IgbGridToolbarActions>
       </IgbGridToolbar>
    </{ComponentSelector}>
</div>
```

`{ComponentName}` にはツールバーの列非表示 UI に便利なプロパティがあります。

`Title` プロパティを使用して、ツールバーのドロップダウン ボタンに表示されるタイトルを設定します。

```html
<div class="grid__wrapper">
    <{ComponentSelector} [data]="localdata">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </{ComponentSelector}>
</div>
```

```razor
<div class="grid__wrapper">
    <{ComponentSelector} Data=northwindEmployees>
        <IgbGridToolbar>
            <IgbGridToolbarTitle>Employees</IgbGridToolbarTitle>
            <IgbGridToolbarActions>
                <IgbGridToolbarHiding @ref=HidingAction Title="Column Hiding"></IgbGridToolbarHiding>
            </IgbGridToolbarActions>
       </IgbGridToolbar>
    </{ComponentSelector}>
</div>
```

<!-- Angular -->

`GridToolbarHiding` の `ColumnsAreaMaxHeight` プロパティを使用して、列操作を含む領域の最大の高さを設定できます。このように、多くの操作があり、それらのすべてがコンテナーに収まらない場合は、スクロールバーが表示され、必要な操作にスクロールできます。

```typescript
public ngAfterViewInit() {
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

```razor
@code {
    public IgbGridToolbarHiding HidingAction { get; set; }
    protected override async Task OnInitializedAsync()
    {
        HidingAction.ColumnsAreaMaxHeight = "200px";
    }
}
```

列非表示 UI の拡張機能セットを使用するために、`ColumnActions` の `ColumnsAreaMaxHeight` プロパティを使用できます。アプリケーションの要件に基づいて使用できます。

<!-- end: Angular -->

このトピックのはじめにあるコードの結果は {Platform} 列非表示の例のセクションで確認できます。

<!-- Angular -->

## カスタム列の非表示 UI

`ColumnActionsComponent` を手動で定義する場合は、`ColumnHidingDirective` をページの任意の場所に追加してその目的がわかるようにします。ただし、最初に、`IgxColumnActionsModule` をインポートする必要があります。

```typescript
// app.module.ts

//...
import {
    //...
    IgxColumnActionsModule
} from 'igniteui-{Platform}';

@NgModule({
    imports: [IgxColumnActionsModule],
})
export class AppModule {}
```

次に `ColumnActionsComponent` を作成します。アプリケーションでグリッドの隣に配置します。これはツールバーの列非表示 UI と異なります。ツールバーの場合、コンポーネントはドロップダウンに含まれます。`{ComponentName}` の `Columns` プロパティをグリッドの列に設定し、更にカスタム スタイルも追加します。

```html
<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="grid.columns">
    </igx-column-actions>
</div>
<div class="gridContainer">
    <{ComponentSelector} #grid [data]="data" [autoGenerate]="true" width="100%" height="500px" columnWidth="200px">
    </{ComponentSelector}>
</div>
```

```css
.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-actions {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
```

### タイトルおよびフィルター プロンプトの追加

列非表示コンポーネント機能を拡張するために `Title` および `FilterColumnsPrompt` プロパティを設定します。`Title` は一番上に表示され、`FilterColumnsPrompt` は列非表示 UI のフィルター入力に表示されるプロンプト テキストです。

```html
<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="grid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions>
</div>
```

### 列の表示順序オプションの追加

列非表示 UI で列の表示順序を選択する機能も追加します。このため、`ColumnDisplayOrder` プロパティを使用します。列挙型のプロパティで、以下のオプションがあります。

- **Alphabetical** (列をアルファベット順で並べ替え)
- **DisplayOrder** (列を {ComponentTitle} で表示される順序によって並べ替え)

このオプションにラジオ ボタンを追加します。[**IgxRadio**](../radio-button.md) モジュールを追加します。

```typescript
import {
    IgxRadioModule
} from 'igniteui-{Platform}';

@NgModule({
    imports: [IgxRadioModule]
})
export class AppModule {}
```

両方のラジオ ボタンの `Checked` プロパティを異なる条件に個々にバインドして、click イベントを処理します。

```html
<div class="columnHidingContainer">
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```

### 列の非表示の無効化
列の `DisableHiding` プロパティを true に設定すると、ユーザーが列非表示 UI によって列を非表示にできません。

```html
<div class="gridContainer">
    <{ComponentSelector}>
        <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    </{ComponentSelector}>
</div>
```

列非表示 UI コンポーネントは以下のようになります。

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-custom-column-hiding"
           github-src="{ComponentSample}/custom-column-hiding"
           alt="{Platform} {ComponentTitle} カスタム列非表示の例">
</code-view>

## スタイル設定

列操作コンポーネントのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント mixins が存在するインデックス ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to Ignite UI for {Platform} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

最も簡単なアプローチを使用して、`column-actions-theme` を拡張し、`$title-color` および `$background-color` パラメーターを受け取る新しいテーマを作成します。

```scss
$custom-column-actions-theme: column-actions-theme(
    $background-color: steelblue,
    $title-color: gold
);
```

ご覧のように `column-actions-theme` は列操作コンテナーのカラーのみを制御しますが、ボタン、チェックボックス、内部の入力グループには影響しません。ボタンのスタイルも設定したい場合、新しいボタン テーマを作成します。

```scss
$custom-button: button-theme($flat-text-color: gold, $disabled-color: black);
```

この例では、フラット ボタンのテキスト カラーとボタンの無効なカラーのみを変更しましたが、`button-theme` は、ボタンのスタイルを制御するためのより多くのパラメーターを提供します。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
@include column-actions($custom-column-actions-theme);
.igx-column-actions {
    @include button($custom-button);
}
```

>[!NOTE]
>**igx-button** mixin を `.igx-column-actions` 内にとどめ、列を非表示にするボタンのみがスタイル設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 >[!NOTE]
 >コンポーネントが `Emulated` ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include column-actions($custom-column-actions-theme);
        .igx-column-actions {
            @include button($custom-button);
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、`igx-palette` および `igx-color` 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: gold;
$blue-color: steelblue;

$custom-palette: palette($primary: $blue-color, $secondary: $yellow-color);
```

また `igx-color` を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-column-actions-theme: column-actions-theme(
    $palette: $custom-palette,
    $title-color: color($custom-palette, "secondary", 400),
    $background-color: color($custom-palette, "primary", 200)
);

$custom-button: button-theme(
    $palette: $custom-palette,
    $flat-text-color: color($custom-palette, "secondary", 400),
    $disabled-color: black
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

```scss
// Extending the dark column actions schema
$custom-column-actions-schema: extend($_dark-column-actions,
    (
        title-color:(
           color: ("secondary", 400)
        ),
        background-color:(
           color: ("primary", 200)
        )
    )
);
// Extending the dark button schema
$custom-button-schema: extend($_dark-button,
    (
        flat-text-color:(
           color:("secondary", 500)
        ),
        disabled-color:(
           color:("primary", 700)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル (`light` または `dark`) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-column-actions: $custom-column-actions-schema,
    igx-button: $custom-button-schema
));

// Defining column-actions-theme with the global dark schema
$custom-column-actions-theme: column-actions-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$custom-button: button-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<code-view style="height:600px"
            data-demos-base-url="{environment:dvDemosBaseUrl}"
            iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-hiding-style"
            github-src="{ComponentSample}/column-hiding-style"
            alt="{Platform} {ComponentTitle} 列非表示のスタイル設定の例">
</code-view>

<!-- end: Angular -->

## API リファレンス

<!-- Angular -->
このトピックでは、`{ComponentName}` のツールバーの定義済みの列非表示 UI の使用方法や別のコンポーネントとして定義する方法について説明しました。その他の列順序から選択する機能を提供する UI を実装し、カスタム タイトルおよびフィルター プロンプト テキストを設定しました。[**IgxRadio**](../radio-button.md) ボタンなどその他の Ignite UI for {Platform} コンポーネントも使用しています。
<!-- end: Angular -->

<!-- Blazor -->
このトピックでは、`{ComponentName}` のツールバーの定義済みの列非表示 UI の使用方法について学びました。
<!-- end: Blazor -->

以下は、列非表示 UI のその他の API です。

* `ColumnActions`

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

`{ComponentName}` プロパティ:
* `HiddenColumnsCount`

`Column` プロパティ:
* `DisableHiding`

`GridToolbar` プロパティ:
* `showProgress`

<!-- Angular -->
`GridToolbar` ディレクティブ:
* `TitleDirective`
* `ActionsDirective`
<!-- end: Angular -->

`GridToolbar` メソッド:

`{ComponentName}` イベント:
* `ColumnVisibilityChanged`

<!-- Angular -->
スタイル:
* `{ComponentName}`
* `Radio`
<!-- end: Angular -->

## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})
