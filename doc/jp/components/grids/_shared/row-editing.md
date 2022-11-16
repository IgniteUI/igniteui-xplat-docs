---
title: {Platform} {ComponentTitle} 行の編集 - インフラジスティックス
_description: {Platform} {ComponentTitle}で行編集を有効にし、CRUD 操作のための強力な API が必要な場合、{ProductName} {ComponentTitle} 行編集コンポーネントをお試しください。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 行の編集

`{ComponentName}` はインライン編集や {Platform} CRUD 操作のための強力な API を通して便利なデータ操作方法を提供します。行をクリックして **Enter キー**を押すか、変更する行をダブルクリックします。

## {Platform} {ComponentTitle} 行編集の例

以下の手順では、`{ComponentName}` で行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も **[完了]** ボタンを使用して確定するまで行値を更新しません。または **[キャンセル]** ボタンを使用して破棄します。

<code-view style="height:550px"
            data-demos-base-url="{environment:dvDemosBaseUrl}"
            iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-editing-options"
            github-src="{ComponentSample}/row-editing-options"
            alt="{Platform} {ComponentTitle} 行編集の例">
</code-view>

> [!NOTE]
> 行が編集モードにある場合、他の行のセルをクリックすると [完了] ボタンが押されたように動作し、前の行の変更をすべての変更をサブミットします。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

## 行編集の使用

<!-- Angular -->

`{ComponentModule}` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

import { {ComponentModule} } from 'igniteui-{Platform}';

@NgModule({
    imports: [{ComponentModule}],
})
export class AppModule {}
```

<!-- end: Angular -->

次に `{ComponentName}` をバインドしたデータソースで定義し、`RowEditable` を true に設定してバインドします。
<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" width="100%" height="500px" row-editable="true">
    <igc-column field="ProductID" header="Product ID" editable="false"></igc-column>
    <igc-column field="ReorderLevel" header="ReorderLever" data-type="Number"></igc-column>
    <igc-column field="ProductName" header="ProductName" data-type="String"></igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" header="UnitsInStock" data-type="Number">
        <ng-template igcCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igc-column>
    <igc-column field="OrderDate" data-type="Date"></igc-column>
    <igc-column field="Discontinued" header="Discontinued" data-type="Boolean"></igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var unitsInStock = this.unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        unitsInStock.bodyTemplate = this.unitsInStockCellTemplate;
    }
    this._bind();
}

public unitsInStockCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<input name="units" value="${ctx.cell.value}" style="color: black" />`;
}
```
<!-- end: WebComponents -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

```razor
 <{ComponentSelector} Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=false
             Data=northwindEmployees
             RowEditable=true>
        <IgbColumn Field="ID" Editable=false></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City"></IgbColumn>
        <IgbColumn Field="CompanyName"></IgbColumn>
        <IgbColumn Field="Fax"></IgbColumn>
        <IgbColumn Field="Address"></IgbColumn>
        <IgbColumn Field="PostalCode"></IgbColumn>
        <IgbColumn Field="Country"></IgbColumn>
        <IgbColumn Field="Phone"></IgbColumn>
    </{ComponentSelector}>

    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;

        }
    }
```

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

> [!NOTE]
> プライマリキーは行編集操作で必須です。

> [!NOTE]
> 各列の編集を有効にする必要はありません。`{ComponentName}` で `RowEditable` プロパティを使用するとプライマリ行以外 `Field` プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、`Editable` 列の入力を **false** に設定します。

<!-- Angular -->
```typescript
import { Component, ViewChild } from '@{Platform}/core';
import { data } from './data';
import { {ComponentName} } from 'igniteui-{Platform}';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [app-grid-row-edit.component.css],
    templateUrl: 'app-grid-row-edit.component.html'
})
export class {ComponentName}RowEditSampleComponent {
    @ViewChild('gridRowEdit', { read: {ComponentName} }) public gridRowEdit: {ComponentName};

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
<!-- end: Angular -->


> [!NOTE]
> `{ComponentName}` は、保留中のセル変更を保持するプロバイダー `BaseTransactionService` を行ステートをサブミットまたはキャンセルするまで内部使用します。

## 位置

- オーバーレイのデフォルトの位置は編集モードで行の下にあります。

- 行の下にスペースがない場合、オーバーレイが行の上に表示されます。

- 一番上または下に表示されると、オーバーレイは閉じられるまでスクロール時にこの位置を保持します。

## 動作

- 行が編集モードの場合、編集が継続します。同じ行のセルがクリックされたかどうか。

- [完了] ボタンをクリックすると行編集を完了し、変更をデータソースまたはトランザクションへサブミットします。更に行が編集モードを完了します。

- [キャンセル] ボタンがをクリックすると現在の行のすべての変更を元に戻し、行編集モードを終了します。

- 行が編集モードにある場合、他の行のセルをクリックすると現在の行編集を終了し、行の新規の変更をサブミット ([完了] ボタンをクリックした場合と同じ) します。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、`{ComponentName}` は編集モードのままです。`{ComponentName}` をスクロールすると編集行は再度表示されますが編集行が編集モードのままになります。`{ComponentName}` 以外をクリックしたときにセルも編集モードに残ります。

- **ソート**、**フィルタリング**、**検索**、および**非表示**操作を実行すると、現在の行のすべての変更が元に戻され、行の編集モードを終了します。

- **ページング**、**サイズ変更**、**ピン固定**、**移動**操作を実行すると、編集モードを終了して最新の値を送信します。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。`{ComponentName}` がトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


## キーボード ナビゲーション

- <kbd>Enter</kbd> と <kbd>F2</kbd> で行編集モードに入ります

- <kbd>Esc</kbd> で行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません

- <kbd>Tab</kbd> - 行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから [キャンセル] と [完了] ボタンへ移動します。[完了] ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


## 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。ソート、グループの変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様にソートやフィルタリングなどの他の機能が有効になります。

<!-- ComponentStart: Grid -->

- グループ行の展開と縮小は現在の行の編集を終了しません。

<!-- ComponentEnd: Grid -->

## 行編集オーバーレイのカスタマイズ

### テキストのカスタマイズ

テンプレート化を使用した行編集オーバーレイのテキストのカスタマイズが可能です。

`RowChangesCount` プロパティが公開されて変更されたセルのカウントを保持します。

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

 ```razor
igRegisterScript("RowEditTextTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
   Changes: ${ctx.$implicit}
</div>`;
}, false);
 ```

 ```ts
public rowEditTextTemplate = (ctx: IgcGridRowEditTextTemplateContext) => {
    return html`Changes: ${ctx.rowChangesCount}`;
}
```

### ボタンのカスタマイズ

テンプレート化を使用した行編集オーバーレイのボタンのカスタマイズも可能です。

キーボード ナビゲーションにボタンを含める場合、各ボタンに `RowEditTabStopDirective` が必要です。

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

 ```razor
 igRegisterScript("RowEditActionsTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.endRowEdit = ctx.$implicit;
    return html`<div>
  	<button onclick="endRowEdit(false)">Cancel</button>
	<button onclick="endRowEdit(true)">Apply</button>
</div>`;
}, false);
 ```

 ```ts
public rowEditActionsTemplate = (ctx: IgcGridRowEditActionsTemplateContext) => {
    return html`
        <button onClick="${this.endRowEdit(false)}">Cancel</button>
	    <button onClick="${this.endRowEdit(true)}">Apply</button>
    `;
}
```

<!-- Angular -->

## スタイル設定

[{ProductName} テーマ ライブラリ](themes/index.md)を使用して、行編集オーバーレイを大幅に変更できます。

行編集オーバーレイは複合要素です。UI は、他の 2 つのコンポーネントで構成されています。

    - コンテンツをレンダリングするための [igx-banner](banner.md)
    - [igx-button](button.md) はデフォルトのテンプレートでレンダリングされます (`[完了]` ボタンと `[キャンセル]` ボタンの場合)。

以下の例では、これら 2 つのコンポーネントのスタイル設定オプション ([ボタン スタイル](button.md#スタイル設定) & [バナー スタイル](../banner.md#スタイル設定)) を使用して、`{ComponentName}` の行編集のエクスペリエンスをカスタマイズします。

次に、現在のセルのエディターと背景をより明確にするためにスタイルを設定します。セル スタイリングの詳細については、[こちら](cell-editing.md#スタイル設定)をご覧ください。

### テーマのインポート

行編集バナーのスタイルを設定する最も簡単な方法は、`app` のグローバル スタイル ファイル (通常 `styles.scss`) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、{ProductName} Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

テーマ ファイルをインポートしたら、カスタム テーマを作成できます。

#### テーマの定義

行編集の背景にカスタムの [banner theme]({environment:sassApiUrl}/index.html#function-banner-theme) を定義して、定義済みのパレットの 1 つである `$purple-palette` を使用することができます。

```scss
    $my-light-gray: #e3e3e3;
    $my-banner-palette: $purple-palette;

    $banner-theme: banner-theme(
        $banner-background: $my-light-gray,
        $banner-message-color: color($my-banner-palette, "secondary", 600)
    );
```

ここでは、色を生成するために `my-banner-palette` を `igx-color` (テーマ ライブラリによって公開) と共に使用しています。

### テーマを含む

次に Sass `@include` ステートメントを使用してテーマを適用します。新しく定義された `$banner-theme` を **igx-banner mixin** で渡します。

```scss
@include banner($banner-theme);
```

これにより、カスタム バナー テーマが行編集オーバーレイに適用されます。ただし、グローバル スタイル ファイルで定義したため、これらのスタイルはアプリケーションの**すべて**のバナーにも適用されます。

### コンポーネント スタイル

行編集オーバーレイは他の多くのコンポーネントのテーマを利用するため、グローバル スタイルでスタイル設定するとアプリケーションの他の部分 (バナー、ボタンなど) に影響を与える可能性があります。回避策としては、バナー テーマのスコープがあります。`{ComponentName}` を含むコンポーネントでスタイル ([theme/index インポート](#テーマのインポート)を含む) を定義できます。

>[!NOTE]
>コンポーネントが [Emulated](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
>ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
// custom.component.scss

:host {
    ::ng-deep {
        @include banner($banner-theme);
    }
}
```

上記の構文で、カスタム バナー テーマはグリッドの行編集オーバーレイに適切に適用されます。

### カスタム テンプレート

行編集オーバーレイをさらにカスタマイズするには、`[完了]` ボタンと `[キャンセル]` ボタンを別々にスタイル設定できるようにカスタム テンプレートを渡します。

```html
<!-- in component.html -->
<{ComponentSelector}>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</{ComponentSelector}>
```

カスタム ボタンを定義した後は、[button-theme]({environment:sassApiUrl}/index.html#function-button-theme) を使用してスタイルを設定できます。[こちら](../button.md#スタイル設定)で `igx-button` のスタイリングについてさらに学ぶことができます。`完了`と`キャンセル`のカスタム テーマを作成できます。

```scss
// custom.component.scss
...

$button-theme: button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
    @include button($button-theme);
  }
```

`@include` ステートメントを `.custom-buttons` でスコープ設定して、`[完了]` ボタンと`[キャンセル]` ボタンにのみ適用されるようにします。

### デモ

バナーとボタンのスタイルを設定後、[編集モードのセル](cell-editing.md#スタイル設定)のカスタム スタイルも定義します。以下は、すべてのスタイルを組み合わせた結果です。

<!-- NOTE this sample is differed -->

<code-view style="height:560px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-editing-style"
           github-src="{ComponentSample}/row-editing-style"
           alt="{Platform} {ComponentTitle} 行編集のスタイル設定の例">
</code-view>

>[!NOTE]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

## 既知の問題と制限

- グリッドに `PrimaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合）、データ要求が完了すると、行は次の状態を失います:

* 行の選択
* 行の展開/縮小
* 行の編集
* 行のピン固定

<!-- end: Angular -->

## API リファレンス

* `RowEditable`
* `RowEditEnter`
* `RowEdit`
* `RowEditDone`
* `EndEdit`
* `Field`
* `Editable`
* `PrimaryKey`
* `{ComponentName}`

## その他のリソース

<!-- Angular -->
* [igxGrid で CRUD 操作を構築する](/general/how-to/how-to-perform-crud.md)
<!-- end: Angular -->
* [{ComponentTitle} 概要](overview.md)
* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} トランザクション](batch-editing.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
