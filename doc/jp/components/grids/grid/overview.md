---
title: {Platform} Grid | 高速な {Platform} テーブルの構築 | インフラジスティックス
_description: {ProductName} を使用して、超高速でレスポンシブな {Platform} グリッドとテーブルを作成します。編集、フィルタリング、データ バインディングなどをサポートします。今すぐお試しください。
_keywords: {Platform}, {ProductName}, Infragistics, Getting Started, Grid, 作業の開始, グリッド, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# {Platform} Grid 概要と構成

<div class="sample-content">
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <p> {Platform} データ グリッドは、データを表形式ですばやく簡単に表示するための機能豊富なコントロールとして使用されます。最新のグリッドは複雑で、通常、データの選択、Excel スタイルのフィルタリング、ソート、ページング、テンプレート化、列の移動、Excel、CSV、PDF 形式へのエクスポートなどの一連の機能が搭載されています。</p>
        </div>
    </article>
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <div class="tab-content">
                <img class="b-lazy responsive-img"
                    src="../../../images/general/landing-grid-page.png"
                    data-src="../../../images/general/landing-grid-page.png"
                    data-srcset="../../../images/general/landing-grid-page.png 480w, ../../../images/general/landing-grid-page.png 768w, ../../../images/general/landing-grid-page.png 1100w"
                    alt="Grid"
                    title="Grid">
                </div>
        </div>
    </article>
</div>


## {Platform} Grid の例


このグリッドの例では、ユーザーが基本スタイルと Excel スタイルの両方のフィルタリング、ライブ データのソート、およびグリッド集計とセル テンプレートの使用を実行する方法を確認できます。デモには、カスタム ページングと、[ページネーション](paging.md)のページごとの使用部分も含まれています。

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-overview"
           alt="grid の例">
</code-view>

<div class="divider--half"></div>



## Ignite UI for {Platform} Grid で作業を開始

### 依存関係

{Platform} グリッドを初期化するには、Ignite UI for {Platform} パッケージをインストールする必要があります。

<!-- Blazor -->

IgniteUI.Blazor パッケージの追加については、以下のトピックを参照してください。

- [作業の開始](..\..\general-getting-started.md)
- [NuGet パッケージの追加](..\..\general-nuget-feed.md)

また、グリッドに必要なスタイルを提供するために、アプリケーションの index.html ファイルに次の CSS リンクを含める必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

以下の名前空間を追加してコントロールの実装を開始できます。

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->
{Platform} グリッドのパッケージをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
</pre>

<!-- WebComponents -->

You also need to include the following imports to include the grid and the necessary styles for the grid:

```html
import 'igniteui-webcomponents-grids/grids/combined';
import "igniteui-webcomponents-grids/grids/themes/light/bootstrap.css";
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
```

<!-- end: WebComponents -->

<!-- end: Angular, React, WebComponents -->

<!-- Angular, React, Blazor -->

### コンポーネント モジュール

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbGridModule));
```

<!-- end: Angular, React, Blazor -->


### 使用方法

グリッド パッケージをインポートしたので、基本的な構成と、ローカル データへのバインドから始めていきましょう。

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

```html
<igc-grid id="grid1" auto-generate="true"></igc-grid>
```

```ts
constructor() {
    let grid1 = (document.getElementById("grid1") as IgcGridComponent);
    grid1.data = data;
}
```

`Id` プロパティは文字列値で、設定されない場合に自動生成生成されるグリッドの一意識別子です。**data** はグリッドをローカル データにバインドします。

`AutoGenerate` プロパティはグリッドにデータ ソース フィールドに基づいてグリッドの `ColumnComponent` を自動生成します。列の適切なデータ型の決定を試みます。それ以外の場合、開発者は列およびデータ ソース フィールドへのマッピングを明示的に定義する必要があります。

## Bootstrap グリッドの定義

Ignite UI for {Platform} には、Flex に基づくレイアウト システムのような強力なブートストラップ グリッドが含まれています。今日の最新のアプリケーションは、レスポンシブ Web デザインのアプローチに従うことが期待されています。つまり、デバイスのサイズに基づいて、または単にブラウザーのサイズを変更するだけで、HTML 要素のレイアウトを適切に調整できます。ブートストラップ グリッド レイアウトはこれまで最も使用されていたアプローチでしたが、CSS グリッドのような Flex に基づくレイアウト システムは、どのブラウザーでも機能するため、より一般的になりました。Ignite UI for {Platform} ディレクティブにより、コンテンツ / テキストの折り返し、両端揃え、配置など、垂直方向と水平方向のフローが可能になります。Ignite UI for {Platform} は、CSS を使用したレスポンシブ レイアウトをサポートし、サイズ変更時のグリッドの動作に究極の柔軟性を提供します。

## 編集可能なグリッド

グリッド編集の各操作にはバッチ操作が含まれます。つまり、API には、編集を単一のサーバー呼び出しにグループ化するオプションがあります。または、グリッドの操作を使用して、グリッドの編集を実行したり、発生した操作を更新したりできます。CRUD 操作を備えた編集グリッドとしての優れた開発者エクスペリエンスに加えて、Angular グリッドには Excel のようなキーボード ナビゲーションが含まれます。一般的なデフォルトのグリッド ナビゲーションに加えて、お客様のニーズを満たすためにナビゲーション オプションを上書きするオプションが含まれています。優れたナビゲーション スキームを備えた編集可能なグリッドは、最新の業務アプリケーションにとって重要であり、Ignite UI グリッドを使用すると簡単になります。

このトピックに続いて、[セル テンプレート](#セル-テンプレート)と[セル編集テンプレート](#セル編集テンプレート)および編集について詳しく学習します。

## グリッドの列構成

`Column` は、グリッドの `Columns` コレクションを定義し、**ソート**や**フィルタリング**などの列ごとの機能を有効にするために使用されます。セル、ヘッダー、およびフッター テンプレートも利用できます。

### 列の定義

`AutoGenerate` プロパティを無効にし、マークアップで列コレクションを定義します。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)" [allowFiltering]="true">
    <igx-column field="Name" [sortable]="true" header=" "></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" header="Track progress" [filterable]="false">
        <ng-template igxCell let-value>
            <igx-linear-bar [stripped]="false" [value]="value" [max]="100"></igx-linear-bar>
        </ng-template>
    </igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-grid>
```
```html
<igc-grid id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="Name" sortable="true" header=" "></igc-column>
    <igc-column field="AthleteNumber" sortable="true" header="Athlete number" filterable="false"></igc-column>
    <igc-column id="trackProgress" field="TrackProgress" header="Track progress" filterable="false">
    </igc-column>
    <igc-paginator per-page="6">
    </igc-paginator>
</igc-grid>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var trackProgress = this.trackProgress = document.getElementById('trackProgress') as IgcColumnComponent;

    this._bind = () => {
        grid1.data = this.data;
        grid1.columnInit = this.gridColumnInit;
        grid1.selected = this.gridSelected;
        trackProgress.bodyTemplate = this.trackProgressCellTemplate;
    }
    this._bind();
}

public trackProgressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-linear-bar stripped="false" max="100" value="${ctx.cell.value}" ></igc-linear-bar>`;
}
```

<!-- Angular -->

グリッドの各列は別のテンプレートを持つことができます。列に `ng-template` Angular グリッド モジュール ディレクティブが必要です。

また、カスタム プロパティや列自体に渡す任意のタイプのデータ コンテキストに使用できる `additionalTemplateContext 入力`も公開します。

```html
<igx-column [additionalTemplateContext]="contextObject">
    <ng-template igxCell let-cell="cell" let-props="additionalTemplateContext">
        {{ props.firstProperty }}
    </ng-template>
</igx-column>
```

```ts
public contextObject = { firstProperty: 'testValue', secondProperty: 'testValue1'};
```

<!-- end: Angular -->

### ヘッダー テンプレート

`Header` は、列オブジェクト自体をコンテキストとして提供する列ヘッダーをターゲットにします。

```html
<igx-column field="Name">
    <ng-template igxHeader let-column>
        {{ column.field | uppercase }}
    </ng-template>
</igx-column>
```
```html
<igc-column id="name" field="Name">
</igc-column>
```
```ts
constructor() {
    var name = this.name = document.getElementById('name') as IgcColumnComponent;

    this._bind = () => {
        name.headerTemplate = this.nameHeaderTemplate;
    }
    this._bind();
}

public nameHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${this.formattUppercase(ctx.cell.value)}
    `;
}

public formattUppercase(value: string) {
    return value.toUpperCase();
}
```

>[!NOTE]
>グループ化 / 移動機能と一緒にヘッダー テンプレートを使用すると、列ヘッダー領域はドラッグ可能になりヘッダー テンプレートのカスタム要素部分にドラッグ不可としてマークするまでアクセスできません。以下の例をご覧ください。

```html
<igx-column #col field="ProductName" header="Product Name"
    [groupable]="true" [hasSummary]="true">
    <ng-template igxHeader let-col>
        <div class="text">{{col.field}}</div>
        <igx-icon (click)="toggleSummary(col)" [attr.draggable]="false">functions
        </igx-icon>
    </ng-template>
</igx-column>
```
```html
<igc-column id="productName" field="ProductName" header="Product Name" groupable="true" has-summary="true">
</igc-column>
```
```ts
constructor() {
    var productName = this.productName = document.getElementById('productName') as IgcColumnComponent;

    this._bind = () => {
        productName.headerTemplate = this.productNameHeaderTemplate;
    }
    this._bind();
}
public productNameHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="text">${ctx.cell.column.field}</div>
        <igx-icon click="${toggleSummary(ctx.cell.column)}" [attr.draggable]="false">functions</igx-icon>
    `;
}

public toggleSummary(column: IgxColumnComponent) {
}
```
`Draggable` 属性を false に設定して追加しています。

### セル テンプレート

`Cell` は提供したテンプレートを列内のすべてのセルに適用します。テンプレートで提供されるコンテキスト オブジェクトは暗示的に提供されたセル値およびセル オブジェクトです。以下のようにセルがコンテンツに応じて拡張するテンプレートを定義するために使用できます。

```html
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
```
```html
<igc-column id="name" field="Name">
</igc-column>
```
```ts
constructor() {
    var name = this.name = document.getElementById('name') as IgcColumnComponent;

    this._bind = () => {
        name.bodyTemplate = this.nameCellTemplate;
    }
    this._bind();
}

public nameCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${this.formatTitlecase(ctx.cell.value)}
    `;
}

public formatTitlecase(value: string) {;
}
```

上記のスニペットで暗示的に提供されたセル値への参照を取得します。データを表示し、セルの値にカスタム スタイル設定およびパイプ変換を適用する場合に使用します。ただし、`GridCell` インスタンスを以下のように使用するとより効果的です。

```html
<igx-grid #grid [data]="data">
    <igx-column dataType="string" field="Name">
        <ng-template igxCell let-cell="cell">
            <!-- Implement row deleting inside the cell template itself -->
            <span tabindex="0" (keydown.delete)="grid.deleteRow(cell.row.index)">{{ cell.value | titlecase }}</span>
        </ng-template>
    </igx-column>
    <igx-column dataType="boolean" field="Subscribtion">
        <ng-template igxCell let-cell="cell">
            <!-- Bind the cell value through the ngModel directive and update the data source when the value is changed in the template -->
            <input type="checkbox" [ngModel]="cell.value" (ngModelChange)="cell.update($event)" />
        </ng-template>
    </igx-column>
<igx-grid>
```
```html
<igc-grid id="grid" auto-generate="false">
    <igc-column id="name" field="Name" data-type="string">
    </igc-column>
    <igc-column id="subscribtion" field="Subscribtion" data-type="boolean">
    </igc-column>
</igc-grid>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var name = this.name = document.getElementById('name') as IgcColumnComponent;
    var subscribtion = this.subscribtion = document.getElementById('subscribtion') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        name.bodyTemplate = this.nameCellTemplate;
        subscribtion.bodyTemplate = this.subscribtionCellTemplate;
    }
    this._bind();
}

public nameCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <span tabindex="0" onkeydown="${this.deleteRow(ctx.cell.id)}">${this.formatTitleCase(ctx.cell.value)}</span>
    `;
}

public subscribtionCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <input type="checkbox" value="${ctx.cell.value}" onchange="${this.updateValue(ctx.cell.value)}" />
    `;
}

public updateValue(value: boolean){
}

public deleteRow(rowId: number){
}

public formatTitleCase(value: string) {;
}
```

<!-- Angular -->

`ngModel` を使用して**セル テンプレート**を介してデータを変更する場合、適切な API メソッドを呼び出して、Angular グリッドの基になるデータ コレクションで値が正しく更新されることを確認する必要があります。上記のスニペットでは、`ngModelChange` 呼び出しはグリッドの[編集 API](cell-editing.md#api-を介した編集) を通過し、グリッドの編集パイプラインを通過し、[トランザクション](batch-editing.md) (該当する場合) を適切にトリガーし、[集計](summaries.md)、[選択](selection.md)などの処理を行います。ただし、この `ngModelChange` はユーザーが編集を完了したときだけでなく、セルが変更され、より多くの API  呼び出しが発生します。

<!-- end: Angular -->

> [!NOTE]
> グリッドは、数値、文字列、日付、およびブール列タイプのデフォルトの処理を公開します。例えば、ブール列タイプの場合に列はデフォルトで true/false の代わりに `check` または `close` アイコンを表示します。

<!-- Angular -->

セル内のデータが `[(ngModel)]` でバインドされていて、値の変更が処理されない場合、新しい値は Angular グリッドの基になるデータ ソースで適切に更**されません**。カスタム テンプレートを使用してセルの編集を行う場合は、セルの**セル編集テンプレート**を使用することを強くお勧めします。

<!-- end: Angular -->

適切に実装されると、セル編集テンプレートは、セルの `EditValue` がグリッド[編集イベント サイクル](editing.md#イベントの引数とシーケンス)を正しく渡します。

### セル編集テンプレート

列は、セルが編集モードにある場合に使用されるテンプレートを使用します。その他の列テンプレートと同じように、提供されるコンテキスト オブジェクトはセル値およびセル オブジェクトです。編集モード テンプレートをユーザー アクセス可能にするには、`Column` の `Editable` プロパティを true に設定します。

```html
<igx-column dataType="number" editable="true" field="Price">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [(ngModel)]="cell.editValue" />
    </ng-template>
</igx-column>
```
```html
<igc-column id="price" field="Price" data-type="number" editable="true">
</igc-column>
```
```ts
constructor() {
    var price = this.price = document.getElementById('price') as IgcColumnComponent;

    this._bind = () => {
        price.inlineEditorTemplateRef = this.priceCellTemplate;
    }
    this._bind();
}

public priceCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <label>
            Enter the new price tag
        </label>
        <input name="price" type="number" value="${ctx.cell.value}" onchange="${this.updateValue(ctx.cell.value)}"  />
    `;
}

public updateValue(value: number){
}
```

テンプレートで使用可能なプロパティの詳細については、`GridCell` の API を参照してください。

### 列テンプレート API

各列テンプレートが `Column` オブジェクトでコードによって変更可能です。以下のコード例で、ユーザー データの 2 つのテンプレートを宣言しました。TypeScript コードでテンプレートへの参照を取得し、条件に基づいてアプリケーションで列の適切なテンプレートを描画します。

```html
<igx-grid>
    <!-- Column declarations -->
</igx-grid>

<ng-template #normalView let-value>
    <div class="user-details">{{ val }}</div>
    <user-details-component></user-details-component>
</ng-template>

<ng-template #smallView let-value>
    <div class="user-details-small">{{ val }}</div>
</ng-template>
```
<!-- Angular -->
```typescript
@ViewChild("normalView", { read: TemplateRef })
public normalView: TemplateRef<any>;

@ViewChild("smallView", { read: TemplateRef })
public smallView: TemplateRef<any>;

....

const column = this.grid.getColumnByName("User");
// Return the appropriate template based on some conditiion.
// For example saved user settings, viewport size, etc.
column.bodyTemplate = this.smallView;
```
<!-- end: Angular -->
```html
<igc-grid>
    <!-- Column declarations -->
</igc-grid>
```
```ts
var user = this.user = document.getElementById('user') as IgcColumnComponent;
// Return the appropriate template based on some conditiion.
// For example saved user settings, viewport size, etc.
user.bodyTemplate = this.smallView;

public normalViewTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="user-details">${ ctx.cell.value }</div>
        <user-details-component></user-details-component>
    `;
}

public smallViewTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="user-details-small">${ ctx.cell.value }</div>
    `;
}
```

列プロパティもグリッドで列が初期化されるときに発生される `ColumnInit` イベントのコードで設定できます。

```typescript
public initColumns(column: IgxGridColumn) {
    const column: IgxColumnComponent = column;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```
```ts
public initColumns(column: IgcGridColumn) {
    const column: IgcGridComponent = column;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```

上記のコードは **ProductName** 列のソートや編集機能を有効にし、対応する機能の UI (編集の入力など) をインスタンス化します。

### カスタム表示形式

書式設定のためのオプションのパラメーターがあります:

- `Format` - 表示される日付 / 時間部分を決定します。デフォルト `'mediumDate'` です (`'MMM d, y'`)。
- `Timezone` - 日付のタイムゾーン オフセット。デフォルトでは、エンドユーザーのローカル システムのタイムゾーンを使用します。
- `DigitsInfo` - 10 進表現オブジェクト。デフォルトの設定は `'1.0-3'` です。

これらのパラメーターによって表示形式をカスタマイズできるようにするには、`PipeArgs` 入力公開します。`PipeArgs` が設定されている場合、列はそのデータ型の対応するプロパティのみに遵守します。例:
<!-- Angular -->
```typescript
const pipeArgs: IColumnPipeArgs = {
     format: 'longDate',
     timezone: 'UTC',
     digitsInfo: '1.1-2'
}
```
<!-- end: Angular -->
```html
<igx-column field="OrderDate" dataType="date" [pipeArgs]="pipeArgs"></igx-column>
<igx-column field="UnitPrice" dataType="number" [pipeArgs]="pipeArgs"></igx-column>
```
```ts
private _columnPipeArgs: any | null = null;
    public get columnPipeArgs(): any {
        if (this._columnPipeArgs == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.format = "longDate";
            columnPipeArgs.timezone = "UTC";
            columnPipeArgs.digitsInfo = "1.2-2"
            this._columnPipeArgs = columnPipeArgs;
        }
        return this._columnPipeArgs;
    }

constructor() {
    var orderDate = this.orderDate = document.getElementById('OrderDate') as IgcColumnComponent;

    this._bind = () => {
        orderDate.pipeArgs = this.columnPipeArgs;
    }
    this._bind();
}
```
```html
<igc-column id="OrderDate" field="OrderDate" data-type="date"></igc-column>
```

`OrderDate` 列は `Format` および `Timezone` プロパティのみに遵守しますが、`UnitPrice` は `DigitsInfo` のみに遵守します。

すべての利用可能な列データ型は、公式の[列タイプ トピック](column-types.md#デフォルトのテンプレート)にあります。

## グリッド データの構造

`Grid` は**フラット データ**とネストされた **POJO (Plain old Java objects)** を処理します。描画に固有のデータ構造はフォームにあります。

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    .
    .
    .
  }];

const POJO = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: {
          ObjectKeyN1: value1,
          ObjectKeyN2: value2,
          .
          .
          .
          ObjectKeyNM: valueNM,
        }
    },
    .
    .
    .
  }];

```
>[!WARNING]
>**キー値に配列を含まないでください。**

>`AutoGenerate` 列を使用する場合、**データ キーが同一である必要があります**。

## グリッドのデータ バインディング

はじめにリモート データ サービスにバインドするためにグリッドを変更します。大規模なアプリケーション レベルでは一般的なシナリオです。すべてのデータ取得に関連するロジックを別のデータ サービスに分割することがベスト プラクティスであるため、サーバーからデータの取得を処理するサービスを作成します。

サービスを別のファイルで実装します。

<!-- Angular -->
```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```
<!-- end: Angular -->

各 {Platform} サービス定義で[必須要素](https://angular.io/guide/dependency-injection)である `Injectable` デコレータをインポートします。`HttpClient` はバックエンド サービスに接続する機能を提供します。グリッド コンポーネントにサブスクライブする結果である `Observable` を返します。

<!-- Angular -->

**注** Angular 5 の前では `HttpClient` が `@angular/http` にあり、名前は `Http` でした。

<!-- end: Angular -->

レコードの配列を含む JSON レスポンスを受け取るため、監視可能な要素に返されるデータの型を指定するために適切なインターフェイスを定義します。タイプ チェックを行うことにより、後で発生する可能性のある問題を防止できます。

```typescript
// northwind.service.ts

export interface NorthwindRecord {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    CategoryName: string;
}
```

サービスは `Observable<NorthwindRecord[]>` を返す `fetchData` の単一のメソッドを含みます。要求が任意の理由 (サーバーが利用不可、ネットワーク エラーなど) により失敗した場合、`HttpClient` はエラーを返します。`CatchError` 演算子を使用して失敗した Observable を傍受してエラーをエラー ハンドラーへ渡します。エラー ハンドラーはエラーをログして値を返します。

<!-- Angular -->
```typescript
// northwind.service.ts

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```
<!-- end: Angular -->

`HttpClientModule` および作成したサービスをアプリケーションのモジュールにインポートし、サービスをプロバイダーとして登録します。

<!-- Angular -->
```typescript
// app.module.ts

import { HttpClientModule } from '@angular/common/http';
import { NorthwindService } from './northwind.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        NorthwindService
    ]
})
export class AppModule {}
```
<!-- end: Angular -->

<!-- Angular -->

サービスを実装した後、コンポーネントのコンストラクターにインジェクトしてデータを取得するために使用します。`ngOnInit` ライフサイクル フックに最初の要求を追加します。

<!-- end: Angular -->

**注:** 以下のコードでは、サービスに加入する前に _records_ プロパティを空の配列に設定しています。Http 要求は非同期です。完了するまで _records_ プロパティは _undefined_ で、グリッドをプロパティにバインドするときにエラーが発生されます。デフォルト値に初期化するか、`BehaviorSubject` を使用します。

<!-- Angular -->
```typescript
// my.component.ts

@Component({

})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];

    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```
<!-- end: Angular -->

コンポーネントのテンプレートのコード:

```html
    <igx-grid [data]="records">
        <igx-column field="ProductId"></igx-column>
        <!-- rest of the column definitions -->
    </igx-grid>
```

**注**: リモート データにバインドする場合、グリッドの `AutoGenerate` プロパティは使用しないことをお勧めします。データを検証して適切な列を生成するためにデータが利用可能である必要があります。リモート サービスの応答が完了するまでデータが利用できないため、グリッドはエラーを発生します。リモート サービスへバインド時に `AutoGenerate` を使用する機能は今後追加予定です。

## 複雑なデータ バインディング

`Grid` は、データ レコード内のプロパティのパスを介した複合オブジェクト (1 レベルより深いネストを含む) へのバインドをサポートします。

次のデータ モデルを見てください。
```typescript
interface AminoAcid {
    name: string;
    abbreviation: {
        short: string;
        long: string;
    }
    weight: {
        molecular: number;
        residue: number;
    },
    formula: {
        molecular: string;
        residue: string;
    }
}
```
たとえば、グリッド内の特定のアミノ酸の重みを表示するには、次のスニペットで十分です。

```html
<igx-column field="weight.molecular"></igx-column>
<igx-column field="weight.residue"></igx-column>
```
```html
<igc-column field="weight.molecular"></igc-column>
<igc-column field="weight.residue"></igc-column>
```

<!-- Angular -->

詳しくは、以下のサンプルを参照してください。このバインディングのタイプは、グリッドに期待されるすべてのデフォルト機能をサポートします。
つまり、追加の構成を行わなくても、すべてのソートおよびフィルタリング操作がそのまま使用できます。トランザクションの有無に関係なく、グループ化と編集の操作、およびバインドされた列のセルをテンプレート化する機能についても同様です。

>[!WARNING]
>グリッドは、`primary key`、`foreign key`、および `child key` プロパティのこの種のバインディングをサポート**していません**。

<!-- NOTE this sample is differed -->

<code-view style="height:460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-binding-nested-data-2" >
</code-view>

<!-- end: Angular -->

`Grid` で複雑なデータをバインドまたは複合データ (複数の列から) を可視化する別の方法は、列にカスタム ボディ テンプレートを使用することです。通常、以下のことができます。
    - ネストされたデータを含むセルの `value` を使用します。
    - `row.data` にアクセスするためにテンプレートの `cell` オブジェクトを使用します。それから、セルから任意の値 (`cell.row.data[field]` や `cell.row.data[field][nestedField]` など) を取得します。

それをテンプレートに挿入します。

```html
<igx-column field="abbreviation.long" header="Long">
    <ng-template igxCell let-cell="cell">
        <div>
            <div>
                {{ cell.value }}
                {{ cell.row.data['name'] }}
                {{ cell.row.data['weight']['molecular'] }}
            </div>
        </div>
    </ng-template>
</igx-column>
```
```html
<igc-column id="abbreviationLong" field="abbreviation.long">
</igc-column>
```
```ts
constructor() {
    var abbreviationLong = this.abbreviationLong = document.getElementById('abbreviationLong') as IgcColumnComponent;

    this._bind = () => {
        abbreviationLong.bodyTemplate = this.abbreviationLongCellTemplate;
    }
    this._bind();
}

public abbreviationLongCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div>
            <div>
                ${ ctx.cell.value }
                ${ this.getName(ctx.cell.id) }
                ${ this.getWeight(ctx.cell.id) }
            </div>
        </div>
    `;
}

public getName(rowId: number){
    //row.data['name']
}
public getWeight(rowId: number){
    //row.data['weight']['molecular']
}
```

以下は使用するデータです。

```typescript
export const EMPLOYEE_DATA = [
    {
        Age: 55,
        Employees: [
            {
                Age: 43,
                HireDate: new Date(2011, 6, 3),
                ID: 3,
                Name: "Michael Burke",
                Title: "Senior Software Developer"
            },
            {
                Age: 29,
                HireDate: new Date(2009, 6, 19),
                ID: 2,
                Name: "Thomas Anderson",
                Title: "Senior Software Developer"
            },
            {
                Age: 31,
                HireDate: new Date(2014, 8, 18),
                ID: 11,
                Name: "Monica Reyes",
                Title: "Software Development Team Lead"
            },
            {
                Age: 35,
                HireDate: new Date(2015, 9, 17),
                ID: 6,
                Name: "Roland Mendel",
                Title: "Senior Software Developer"
            }],
        HireDate: new Date(2008, 3, 20),
        ID: 1,
        Name: "John Winchester",
        Title: "Development Manager"
    }
```
ネスト データをレンダリングする列のカスタム テンプレート。

```html
 <igx-column field="Employees" header="Employees" [cellClasses]="{ expand: true }" width="40%">
        <ng-template #nestedDataTemp igxCell let-people let-cell="cell">
            <div class="employees-container">
                <igx-expansion-panel *ngFor="let person of people">
                    <igx-expansion-panel-header iconPosition="right">
                        <igx-expansion-panel-description>
                            {{ person.Name }}
                        </igx-expansion-panel-description>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        <div class="description">
                            <igx-input-group (keydown)="stop($event)" displayDensity="compact">
                                <label igxLabel for="title">Title</label>
                                <input type="text" name="title" igxInput [(ngModel)]="person.Title" style="text-overflow: ellipsis;" />
                            </igx-input-group>
                            <igx-input-group (keydown)="stop($event)" displayDensity="compact" style="width: 15%;">
                                <label igxLabel for="age">Age</label>
                                <input type="number" name="age" igxInput [(ngModel)]="person.Age" />
                            </igx-input-group>
                        </div>
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
            </div>
        </ng-template>
 </igx-column>
```
```html
<igc-column id="Employees" field="Employees" header="Employees" width="40%">
</igc-column>
```
```ts
constructor() {
    var employees = this.employees = document.getElementById('Employees') as IgcColumnComponent;

    this._bind = () => {
        employees.bodyTemplate = this.employeesCellTemplate;
    }
    this._bind();
}

public addressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="employees-container">
            <igc-expansion-panel >
                <igc-expansion-panel-header iconPosition="right">
                    <igc-expansion-panel-description>
                        ${this.getName(ctx.cell.id)}
                    </igc-expansion-panel-description>
                </igc-expansion-panel-header>
                <igc-expansion-panel-body>
                    <div class="description">
                        <igc-input-group keydown="${this.stop()}" display-density="compact">
                            <label for="title">Title</label>
                            <input type="text" name="title" value="${this.getTitle(ctx.cell.id)}" style="text-overflow: ellipsis;" />
                        </igc-input-group>
                        <igc-input-group keydown="${this.stop()}" display-density="compact" style="width: 15%;">
                            <label for="age">Age</label>
                            <input type="number" name="age" value="${this.getAge(ctx.cell.id)}" />
                        </igc-input-group>
                    </div>
                </igc-expansion-panel-body>
            </igc-expansion-panel>
        </div>
    `;
}

public stop() {
}
public getName(rowId: number) {
}
public getTitle(rowId: number) {
}
public getAge(rowId: number) {
}
```

以下は、この設定の結果です。


<code-view style="height:460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-binding-nested-data-1" >
</code-view>

### フラット データの操作

フラット データ バインディングのアプローチは既に説明したものと似ていますが、**セル値**の代わりに、`GridRow` の `Data` プロパティを使用します。

{Platform} グリッドはデータ レコードを**レンダリング**、**操作**、**保存する**ためのコンポーネントのため、**すべてのデータ レコード**へアクセスすることで、それを処理する方法をカスタマイズすることができます。それには、`data` プロパティを使用します。

以下は使用するデータです。

```typescript
export const DATA: any[] = [
    {
        Address: "Obere Str. 57",
        City: "Berlin",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        Country: "Germany",
        Fax: "030-0076545",
        ID: "ALFKI",
        Phone: "030-0074321",
        PostalCode: "12209",
        Region: null
    }
```

カスタム テンプレート:

```html
<igx-column field="Address" header="Address" width="25%" editable="true">
    <ng-template #compositeTemp igxCell let-cell="cell">
        <div class="address-container">
        // In the Address column combine the Country, City and PostCode values of the corresponding data record
            <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
            <br/>
            <span><strong>City:</strong> {{cell.row.data.City}}</span>
            <br/>
            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
        </div>
    </ng-template>
</igx-column>
```
```html
<igc-column id="Address" field="Address" header="Address" width="25%" editable="true">
</igc-column>
```
```ts
constructor() {
    var address = this.address = document.getElementById('Address') as IgcColumnComponent;

    this._bind = () => {
        address.bodyTemplate = this.addressCellTemplate;
    }
    this._bind();
}

public addressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="address-container">
        // In the Address column combine the Country, City and PostCode values of the corresponding data record
            <span><strong>Country:</strong> ${this.getName(ctx.cell.id)}</span>
            <br/>
            <span><strong>City:</strong> ${this.getCity(ctx.cell.id)}</span>
            <br/>
            <span><strong>Postal Code:</strong> ${this.getPostalCode(ctx.cell.id)}</span>
        </div>
    `;
}

public getCountry(rowId: number){
}
public getCity(rowId: number){
}
public getPostalCode(rowId: number){
}
```

上記で定義したテンプレートでは編集操作ができないため、エディター テンプレートが必要であることに注意してください。

```html
<igx-column>
    <ng-template  igxCellEditor let-cell="cell">
            <div class="address-container">
            <span>
                <strong>Country:</strong> {{cell.row.data.Country}}
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.Country" />
                </igx-input-group>
            </span>
                <br/>
                <span><strong>City:</strong> {{cell.row.data.City}}</span>
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.City" />
                </igx-input-group>
                <br/>
                <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.PostalCode" />
                </igx-input-group>
                <br/>
            </div>
    </ng-template>
</igx-column>
```
```html
<igc-column id="Address" field="Address" data-type="number" width="25%" editable="true">
</igc-column>
```
```ts
constructor() {
    var address = this.address = document.getElementById('Address') as IgcColumnComponent;

    this._bind = () => {
        address.inlineEditorTemplateRef = this.addressEditCellTemplate;
    }
    this._bind();
}

public addressEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="address-container">
            <span>
                <strong>Country:</strong> ${this.getName(ctx.cell.id)}
                <igc-input-group width="100%">
                        <input onchange="${this.updateCountry(ctx.cell.id)}" />
                </igc-input-group>
            </span>
            <br/>
            <span>
                <strong>City:</strong> ${this.getCity(ctx.cell.id)}</span>
                <igxc-input-group width="100%">
                        <input onchange="${this.updateCity(ctx.cell.id)}" />
                </igc-input-group>
            <br/>
            <span>
                <strong>Postal Code:</strong> ${this.getPostalCode(ctx.cell.id)}</span>
                <igc-input-group width="100%">
                        <input onchange="${this.updatePostalCode(ctx.cell.id)}" />
                </igc-input-group>
            <br/>
        </div>
    `;
}

public updateCountry(rowId: number){
}
public updateCity(rowId: number){
}
public updatePostalCode(rowId: number){
}
```

以下は結果です。

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-binding-composite-data" >
</code-view>

## キーボード ナビゲーション

`Grid` のキーボード ナビゲーションは、さまざまなキーボード操作をユーザーに提供します。アクセシビリティが向上し、内部の要素 (セル、行、列ヘッダー、ツールバー、フッターなど) を直感的にナビゲートできます。

詳細については、これらのリソースを参照してください。

 - [Grid キーボード ナビゲーション](keyboard-navigation.md)
 - [TreeGrid キーボード ナビゲーション](../tree-grid/keyboard-navigation.md)
 - [Hierarchical Grid キーボード ナビゲーション](../hierarchical-grid/keyboard-navigation.md)
 - [ブログ (英語)](https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility) - Improving Usability, Accessibility and ARIA Compliance with Grid keyboard navigation

## 状態保持

新しい組み込み済みの [GridState](state-persistence.md) ディレクティブ を使用することで、パーシステンス フレームワークの実装がより簡単になりました。

## サイズ変更

[Grid サイズ変更](sizing.md)トピックを確認してください。


<!-- Angular -->

## パフォーマンス (試験中)

`Grid` のデザインでは、Angular で導入されたイベント結合機能を利用できます。この機能は、インタラクションとレスポンシブの点で **`20%`** のパフォーマンスを向上します。この機能は、`bootstrapModule` メソッドで `ngZoneEventCoalescing` と `ngZoneRunCoalescing` プロパティを **true** に設定するだけでアプリケーション レベルで有効にできます。

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> これは `IgxGridComponent` の試験中の機能です。これは、グリッドで予期しない動作が発生する可能性があることを意味します。このような動作が発生した場合は、[Github](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen}/discussions) ページでお問い合わせください。

>[!NOTE]
> 有効にすると、`IgxGridComponent` に関連しない Angular アプリケーションの他の部分に影響します。

<!-- end: Angular -->

## 既知の問題と制限

|制限|説明|
|--- |--- |
|列幅は `percentage` および `px` で設定されます。|列に `%` と `px` を組み合わせて使用することはできません。|
|`number` 型の列をフィルターする場合|フィルター入力に入力された値が `number` と異なる場合、キャストが正しくないため `NaN` が返されます。|
|グリッドの `width` が列幅に依存しない | すべての列の `width` でグリッド自体のスパンは決定しません。親コンテナーのディメンションまたは定義したグリッドの `width` で決定されます。|
|親コンテナーでネストされた Grid | グリッドの `width` を設定せずに定義済みのディメンションで親コンテナーに配置した場合、グリッドがコンテナーに合わせてスパンします。|
|グリッドの `OnPush` ChangeDetectionStrategy | `ChangeDetectionStrategy.OnPush` を処理し、カスタム表示されたときにグリッドに発生した変更について通知します。|
| 列には設定可能な最小幅があります。`displayDensity` オプションに基づき、<br/>"compact": 56px <br/> "cosy": 64px <br/> "comfortable": 80px があります。 | 許容される最小幅未満に設定した場合、描画される要素に影響はありません。`displayDensity` に対応する許容される最小幅で描画します。水平方向の仮想化は予期しない動作を招く場合があるためサポートしていません。
| ビューに描画されていないセル高さは行の高さに影響しません。 | 仮想化のため、セルの高さを変更するビューにないカスタム テンプレートの列は行の高さに影響しません。関連する列がビューにスクロールされるときのみ行の高さに影響します。

## API リファレンス
* `Grid`
* `Column`
* `GridRow`
* `GridCell`

<!-- Angular -->

## テーマの依存関係
* **Icon Theme**
* **InputGroup Theme**
* **Chip Theme**
* **Ripple Theme**
* **Button Theme**
* **Overlay Theme**
* **DropDown Theme**
* **Calendar Theme**
* **SnackBar Theme**
* **Badge Theme**

## チュートリアル ビデオ

{Platform} `Grid` の作成について詳しくは、このビデオ チュートリアルをご覧ください:

> [!Video https://www.youtube.com/embed/Xv_fQVQ8fmM]

<!-- end: Angular -->

## その他のリソース
<!-- Angular -->

* [Grid サイズ変更](sizing.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [Grid で CRUD 操作を構築する](../general/how-to/how-to-perform-crud.md)

<!-- end: Angular -->

<!-- Blazor -->

* [Grid サイズ変更](sizing.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [列のデータ型](column-types.md#デフォルトのテンプレート)

<!-- end: Blazor -->

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
