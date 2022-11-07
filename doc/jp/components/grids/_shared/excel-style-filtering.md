---
title:  {Platform} {ComponentTitle} の Excel スタイル フィルタリング - {ProductName}
_description: {Platform} {ComponentTitle} で Excel フィルタリングを構成する方法を説明します。さまざまなオプションを有効/無効にし、Excel スタイル フィルター メニューを自由にカスタマイズできます。
_keywords: excel like filter, {Platform}, {ProductName}, Infragistics, excel のようなフィルター, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} の Excel スタイル フィルタリング

グリッド Excel フィルタリングは、{Platform} `{ComponentName}` に対して Excel のようなフィルタリング UI を提供します。

## {Platform} {ComponentTitle} Excel スタイル フィルタリングの例

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-excel-style-filtering-sample-1"
           github-src="{ComponentSample}/excel-style-filtering-sample-1" >
</code-view>

## 使用方法

Excel フィルタリングをオンにするには、2 つの入力を設定します。`AllowFiltering` を **true** に設定し、`FilterMode` を `ExcelStyleFilter` に設定してください。

```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'" >
</{ComponentSelector}>
```

```razor
<IgbGrid AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter" />
```

## インタラクション

特定の列のフィルター メニューを開くには、ヘッダーの {Platform} フィルター アイコンをクリックします。さらに、選択したヘッダーで <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> の組み合わせを使用できます。列でフィルタリング機能とソート、ピン固定、移動、選択、非表示が設定された場合、オンになっている機能のボタンが表示されます。

フィルターが適用されていない場合、リストのすべての項目が選択されます￥。リストの上の入力からフィルターされます。データのフィルターは、リストで項目を選択/非選択して [適用] ボタンをクリックするか、あるいは  <kbd>Enter</kbd>. を押します。 リスト項目に適用したフィルタリングは、`equals` オペレーターでフィルター式を作成します。各式間のロジック オペレーターは `OR` です。

検索ボックスに入力してフィルターを適用すると、検索条件に一致する項目のみが選択されます。ただし、現在フィルターされている項目に項目を追加したい場合は、**[現在の選択をフィルターに追加]** オプションを選択する必要があります。

フィルターをクリアしたい場合、`[すべて選択]` オプションをチェックして [適用] ボタンを押します。

異なる式でフィルターを適用する場合、**テキスト フィルター**をクリックし、特定の列で使用できるフィルター演算子のサブメニューを開きます。いずれかを選択してカスタム フィルター ダイアログを開き、フィルターとロジック演算子を使用して式を追加できます。[クリア] ボタンでフィルターをクリアできます。


## メニュー機能の構成

ソート、ピン固定、および非表示機能は、対応する入力を使用してフィルター メニューから削除できます: `Sortable`、`Selected`、`DisablePinning`、`DisableHiding`。

<!-- ComponentStart: Grid -->

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

```razor
    <IgbGrid Data=northwindEmployees
             AllowFiltering="true"
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate="false">
        <IgbColumn Field="ProductName" Sortable="true"></IgbColumn>
        <IgbColumn Field="UnitPrice" Sortable="true" DisablePinning="true" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="QuantityPerUnit" Sortable="false" DisablePinning="true" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="OrderDate" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="Discontinued" Sortable="true"></IgbColumn>
    </IgbGrid>
```

以下のサンプルの **Product Name** と **Discontinued** 列で 4 つすべての機能が有効です。**Quantity Per Unit** で 4 機能すべてが無効、**Unit Price** でソートのみが有効、**Order Date** でピン固定と非表示のみ有効です。すべてが `Selectable` です。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [moving]="true" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Product ID" [dataType]="'string'">
    </igx-column>
    <igx-column field="Name" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="false" [disablePinning]="true" [disableHiding]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
            <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
        </ng-template>
    </igx-column>
    <igx-column field="AddedDate" header="Added Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
            <img *ngIf="cell.row.data.UnitPrice != 0 && val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="cell.row.data.UnitPrice != 0 && !val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

```razor
Add tree grid snippet
```

以下のサンプルでは、「Product Name」 列と 「Discontinued」 列で 3 つの機能がすべて有効化され、「Unit Price」 で 3 つすべてが無効化され、「Added Date」 でピン固定と非表示のみが設定されています。

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

```razor
Add blazor snippets here
```

下のサンプルでは、「Artist」 列では 3 つの機能がすべて有効化され、「Debut」 では 3 つすべてが無効化され、「Grammy Nominations」 ではピン固定と非表示のみが設定されています。

<!-- ComponentEnd: HierarchicalGrid -->

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-excel-style-filtering-sample-2"
           github-src="{ComponentSample}/excel-style-filtering-sample-2" >
</code-view>

<!-- TODO -- there is still no excel style filtering components. Uncomment the below section once they exist. -->
<!-- ## Templates
TODO: check when decide how to support directives

If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:
- `IgxExcelStyleColumnOperationsTemplateDirective` - re-templates the area with all column operations like sorting, pinning, etc.
- `IgxExcelStyleFilterOperationsTemplateDirective` - re-templates the area with all filter specific operations.

You could either re-template only one of those areas or both of them. You could put any custom content inside those directives or you could use any of our built-in Excel style filtering components.

The following code demonstrates how to define a custom Excel style filter menu using the `excel-style-header`, `excel-style-sorting` and `excel-style-search` components. -->

<!-- ComponentStart: Grid -->

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

</igx-grid>
```
<!-- end: Angular -->



<!-- ```razor
Add razor snipets
``` -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
</igx-tree-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>

</igx-hierarchical-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ComponentEnd: HierarchicalGrid -->


<!-- You could also re-template the Excel style filtering icon in the column header using the `ExcelStyleHeaderIcon` directive: -->

```html
<{ComponentSelector}>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</{ComponentSelector}>
```

<!-- ```razor
Templating header icon
```

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-excel-style-filtering-sample-3"
           github-src="{ComponentSample}/excel-style-filtering-sample-3" >
</code-view>

Here is the full list of Excel style filtering components that you could use:
- `Excel-style-header`
- `Excel-style-sorting`
- `Excel-style-moving`
- `Excel-style-pinning`
- `Excel-style-hiding`
- `Excel-style-selecting`
- `Excel-style-clear-filters`
- `Excel-style-conditional-filter`
- `Excel-style-search` -->

## 一意の列値戦略

Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。これらの値は手動で提供し、ロード オン デマンドすることができます。詳細については、[{ComponentTitle} リモート データ操作](remote-data-operations.md#一意の列値ストラテジ)で説明されています。

<!-- TODO -- uncomment below section when we can define a filtering strategy on the grid. -->
<!-- ## Formatted Values Filtering Strategy

By default, the {ComponentTitle} component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values. -->

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- In order to do that you can use the `FormattedValuesFilteringStrategy`. -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

<!-- In order to do that you can use the `TreeGridFormattedValuesFilteringStrategy`. -->

<!-- ComponentEnd: TreeGrid -->

<!-- The following sample demonstrates how to format the numeric values of a column as strings and filter the {ComponentTitle} based on the string values: -->

<!-- <code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-filtering-strategy"
           github-src="{ComponentSample}/filtering-strategy" >
</code-view>

>[!NOTE]
>The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter. -->

<!-- ComponentStart: TreeGrid -->
<!-- ## Tree Filter View

By default, the Excel Style Filtering dialog displays the items in a list view. In order to display them in a tree view you can use the `TreeGridFilteringStrategy` and specify an array of column field names. Filter items will be displayed in a tree view for the speicified columns and in a list view for all other columns. The following sample demonstrates how to show filter items in a tree view for the first column:

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-tree-filter-view"
           github-src="{ComponentSample}/tree-filter-view" >
</code-view> -->

<!-- ComponentEnd: TreeGrid -->

<!-- TODO -- No excel style filtering component -->
<!-- ## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the `{ComponentName}`. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the `{ComponentName}`.

### Demo

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-external-excel-style-filtering"
           github-src="{ComponentSample}/external-excel-style-filtering" >
</code-view>

### Usage

In order to configure the Excel style filtering component, you should set its `Column` property to one of the {ComponentTitle}'s columns. In the sample above, we have bound the `Column` property to the value of an SelectComponent that displays the {ComponentTitle}'s columns. -->


<!-- ComponentStart: Grid -->

```html
<igx-select #gridColums value="ProductID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of grid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
add snippet for blazor
``` -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-select #gridColums value="ID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of treegrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="treegrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
Add snippet for blazor
``` -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-select #gridColums value="Artist">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of hierarchicalgrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="hierarchicalgrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
Add snippet for blazor
``` -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- TODO -- uncomment below when there is igxOverlayOutlet -->
<!-- ## External Outlet

The {ComponentTitle}'s [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) creates separate stacking context for each grid in the DOM. This ensures that all descendant elements of the grid will render as intended, without overlapping one another.
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the `Outlet` property to an external outlet directive which allows the overlay elements to always appear on top.

### Demo

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-external-outlet"
           github-src="{ComponentSample}/external-outlet" >
</code-view> -->

<!-- Angular -->

## スタイル設定

ページネータのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Excel スタイルのフィルタリング ダイアログは、`filtering-row-background` パラメーターを使用して、グリッドのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);
```

ボタン、チェックボックス、リスト、さらにはドロップダウンなど、フィルタリング ダイアログのような Excel 内には明らかに多くのコンポーネントがあります。スタイルを設定するには、それぞれに個別のテーマを作成する必要があります。

```scss
$dark-button: button-theme(
    $background: #FFCD0F,
    $foreground: #292826,
    $hover-background: #292826,
    $hover-foreground: #FFCD0F
);

$dark-input-group: input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$custom-list: list-theme(
    $background: #FFCD0F
);

$custom-checkbox: checkbox-theme(
    $empty-color: #292826,
    $fill-color: #292826,
    $tick-color: #FFCD0F,
    $label-color: #292826
);

$custom-drop-down: drop-down-theme(
    $background-color: #FFCD0F,
    $item-text-color: #292826,
    $hover-item-background: #292826,
    $hover-item-text-color: #FFCD0F
);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme)、[`checkbox-theme`]({environment:sassApiUrl}/index.html#function-checkbox-theme)、[`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme)、および [`list-theme`]({environment:sassApiUrl}/index.html#function-list-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後のステップは、それぞれのテーマを持つコンポーネント mixin を**含める**ことです。また、入力のプレース ホルダーの色プロパティを設定します。

```scss
@include drop-down($custom-drop-down);
@include grid($custom-grid);
.igx-excel-filter, .igx-excel-filter__secondary {
    @include button($dark-button);
    @include input-group($dark-input-group);
    @include list($custom-list);
    @include checkbox($custom-checkbox);
    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

>[!NOTE]
>`.igx-excel-filter` と `.igx-excel-filter__secondary` 内のほとんどのコンポーネントのミックスインをスコープするため、これらのカスタムテーマは、Excel スタイル フィルタリング ダイアログとそのすべてのサブダイアログにネストされたコンポーネントのみに影響します。そうでない場合、他のボタン、チェックボックス、入力グループ、およびリストも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include grid($custom-grid);
        .igx-excel-filter, .igx-excel-filter__secondary {
            @include button($dark-button);
            @include input-group($dark-input-group);
            @include list($custom-list);
            @include checkbox($custom-checkbox);
            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```
また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);

$dark-button: button-theme(
    $background: color($dark-palette, "secondary", 400),
    $foreground: color($dark-palette, "primary", 400),
    $hover-background: color($dark-palette, "primary", 400),
    $hover-foreground: color($dark-palette, "secondary", 400)
);

$dark-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 400),
    $idle-text-color: color($dark-palette, "primary", 400),
    $focused-text-color: color($dark-palette, "primary", 400),
    $filled-text-color: color($dark-palette, "primary", 400)
);

$custom-list: list-theme(
    $background: color($dark-palette, "secondary", 400)
);

$custom-checkbox: checkbox-theme(
    $empty-color: color($dark-palette, "primary", 400),
    $fill-color: color($dark-palette, "primary", 400),
    $tick-color: color($dark-palette, "secondary", 400),
    $label-color: color($dark-palette, "primary", 400)
);

$custom-drop-down:drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),
    $item-text-color: color($dark-palette, "primary", 400),
    $hover-item-background: color($dark-palette, "primary", 400),
    $hover-item-text-color: color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネント (この場合は[`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid)、[`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group)、[`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button)、[`light-list`]({environment:sassApiUrl}/index.html#variable-_light-list)、[`light-checkbox`]({environment:sassApiUrl}/index.html#variable-_light-checkbox)、[`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down)) に提供される 2 つの定義済みスキーマのいずれかを拡張します。

```scss
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
           color: ("secondary", 400)
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        flat-background:(
           color: ("secondary", 400)
        ),
        flat-text-color:(
           color: ("primary", 400)
        ),
        flat-hover-background:(
           color: ("primary", 400)
        ),
        flat-hover-text-color:(
           color: ("secondary", 400)
        ),

        raised-background:(
           color: ("secondary", 400)
        ),
        raised-text-color:(
           color: ("primary", 400)
        ),
        raised-hover-background:(
           color: ("primary", 400)
        ),
        raised-hover-text-color:(
           color: ("secondary", 400)
        )
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 400)
        ),
        idle-text-color:(
           color: ("primary", 400)
        ),
        focused-text-color:(
           color: ("primary", 400)
        ),
        filled-text-color:(
           color: ("primary", 400)
        )
    )
);

$custom-list-schema: extend($_light-list,
    (
        background:(
           color: ("secondary", 400)
        )
    )
);

$custom-checkbox-schema: extend($_light-checkbox,
    (
        empty-color:(
           color: ("primary", 400)
        ),
        fill-color:(
           color: ("primary", 400)
        ),
        tick-color:(
           color: ("secondary", 400)
        ),
        label-color:(
           color: ("primary", 400)
        )
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),
        item-text-color:(
           color: ("primary", 400)
        ),
        hover-item-background:(
           color: ("primary", 400)
        ),
        hover-item-text-color:(
           color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
$custom-light-schema: extend($light-schema,(
   grid: $custom-grid-schema,
   button: $custom-button-schema,
   input-group: $custom-input-group-schema,
   list: $custom-list-schema,
   checkbox: $custom-checkbox-schema,
   drop-down: $custom-drop-down-schema
));

$custom-grid: grid-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-list: list-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-checkbox: checkbox-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<code-view style="height:950px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-excel-style-filtering-style"
           github-src="{ComponentSample}/excel-style-filtering-style" >
</code-view>

>[!NOTE]
>サンプルは、`テーマの変更`で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->
## API リファレンス

* `Column`


## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)


コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})
