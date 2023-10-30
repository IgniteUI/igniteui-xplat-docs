---
title: {Platform} {ComponentTitle} 列のデータ タイプ - {ProductName}
_description: いくつかの定義済みの列データ型 - number、string、date、boolean、currency、percent 列 - から選択して {Platform} のセルおよび編集テンプレートを処理します。
_keywords: Column Data Type, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス, 列のデータ型
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 列タイプの概要

{Platform} {ComponentTitle} は、デフォルトおよび編集テンプレートの外観に基づいて、number (数値)、string (文字列)、date (日付)、boolean (ブール値)、currency (通貨) および percent (パーセント) 列のデータ型のデフォルト処理を提供します。

<!-- ComponentStart: Grid -->

## {Platform} {ComponentTitle} 列タイプの例

`sample="/{ComponentSample}/column-data-types", height="550", alt="{Platform} {ComponentTitle} column data types"`


<!-- ComponentEnd: Grid -->

## {Platform} {ComponentTitle} デフォルト テンプレート

データ型固有のテンプレートを有効にする場合、列の `DataType` 入力を設定する必要があります。設定しない場合、列は文字列の列として処理されます (これは列 `DataType` のデフォルト値であるためです)。

次に、各 `DataType` のデフォルト テンプレートについて説明します。

### 文字列

この列 `DataType` はセル値の外観または書式を変更しません。

### Number (数値)

`DataType` が *number* に設定されている場合、セル値はアプリケーションまたはグリッドの `Locale` 設定に基づいて書式設定され、`PipeArgs` プロパティが指定されている場合にも同じように設定されます。数値書式はそれらに基づいて変更されます。たとえば、以下を変更します:

 - 小数点後の桁数。
 - `,` または `.` の少数桁の区切り文字

<!-- Angular -->

```ts
public options = {
  digitsInfo: '1.4-4',
};
public formatOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column [pipeArgs]="formatOptions" [dataType]="'number'">
</igx-column>
```

```razor
<IgbColumn Field="Sales" DataType="GridColumnDataType.Number" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs() { DigitsInfo = "1.4-4" };
}
```

```html
<igc-column id="column" data-type="number">
</igc-column>
```

```ts
private _formatOptions: any | null = null;
    public get formatOptions(): any {
        if (this._formatOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "1.4-4";
            this._formatOptions = columnPipeArgs;
        }
        return this._formatOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.digitsInfo = "1.4-4";

<IgrColumn pipeArgs={formatOptions} dataType="number"></IgrColumn>
```

### DateTime、Date and Time (日付と時刻)

日付部分の外観は、`Locale` の形式または `PipeArgs` 入力に基づいて設定されます (例: 日、月、年)。Pipe 引数はカスタム日付書式またはタイムゾーンを指定するために使用できます。
 - **format** - 日付の書式設定のデフォルト値は `'mediumDate'` です。その他の利用可能なオプション `'short'`、`'long'`、`'shortDate'`、`'fullDate'`、`'longTime'`、`'fullTime'` などです。
 - **timezone** - ユーザーのローカル システム タイムゾーンがデフォルト値です。タイムゾーン オフセットまたは標準の UTC/GMT または米国本土のタイムゾーンの略語も渡すことができます。世界の任意の場所の対応する時間を表示するさまざまなタイムゾーンの例:

<!-- Angular -->

```ts
public formatDateOptions = {
    /** The date/time components that a date column will display, using predefined options or a custom format string. */
    /** e.g 'dd/mm/yyyy' or 'shortDate' **/
    format: 'longDate',
    /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
    timezone: 'GMT'
};
public formatOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column [pipeArgs]="formatDateOptions" [dataType]="'date'">
</igx-column>
```

```razor
<IgbColumn Field="Date" DataType="GridColumnDataType.Date" PipeArgs=formatDateOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatDateOptions = new IgbColumnPipeArgs()
    {
        /** The date/time components that a date column will display, using predefined options or a custom format string. */
        /** e.g 'dd/mm/yyyy' or 'shortDate' **/
        Format = "longDate",
        /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
        Timezone = "GMT"
    };
}
```

```html
<igc-column id="column" data-type="date">
</igc-column>
```

```ts
private _formatDateOptions: any | null = null;
    public get formatDateOptions(): any {
        if (this._formatDateOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs2.format = "long";
            columnPipeArgs2.timezone = "UTC+0";
            this._formatDateOptions = columnPipeArgs;
        }
        return this._formatDateOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatDateOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.format = "long";
formatOptions.timezone = "UTC+0";

<IgrColumn pipeArgs={formatOptions} dataType="date"></IgrColumn>
```

利用可能なタイムゾーン:

| タイムゾーン                  | 値                     |
|---------------------------| ------------------------- |
| Alpha Time Zone           |‘UTC+1’                    |
| Australian Central Time   |‘UTC+9:30/ +10:30’         |
| Arabia Standard Time      |‘UTC+3’                    |
| Central Standard Time     |‘UTC-6’                    |
| China Standard Time       |‘UTC+8’                    |
| Delta Time Zone           |‘UTC+4’                    |
| Greenwich Mean Time       |‘UTC+0’                    |
| Gulf Standard Time        |‘UTC+4’                    |
| Hawaii Standard Time      |‘UTC-10’                   |
| India Standard Time       |‘UTC+4’                    |


`{ComponentName}` は、**Date オブジェクト**、**数値 (ミリ秒)** または **ISO 日付/時刻文字列**の日付値を受け取ります。このセクションは、[カスタム表示書式を構成する方法](../data-grid.md#カスタム表示形式)を示します。

サンプルでは、特定の列タイプで使用可能な書式を紹介するために、さまざまな書式設定オプションを指定しています。たとえば、以下は日付オブジェクトの *time* 部分の書式設定オプションのサンプルです。

<!-- Angular, WebComponents -->

```ts
// Time format with equivalent example
public timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
```
<!-- end: Angular, WebComponents -->

```razor
// Time format with equivalent example
@code {
    public Dictionary<string, string> timeFormats = new() {
        { "shortTime", "h:mm a" },
        { "mediumTime", "h:mm:ss a" },
        { "longTime", "h:mm:ss a z" },
        { "fullTime", "h:mm:ss a zzzz" },
    };
}
```

```tsx
const timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
```

#### セルの編集

列タイプに基づくセル編集に関しては、別のエディターが表示されます。
- `DateTime` - `DateTimeEditor` が使用されます。このエディターは、`DateTime` オブジェクトの入力要素部分のマスクを提供します。
- `Date` - `DatePicker` が使用されます。
- `Time` - `TimePicker` が使用されます。

#### フィルタリング

クイック フィルタリング/Excel スタイル フィルタリングに関しては、上記と同じエディターが使用されます。これらは、各タイプが公開する次のフィルタリング オペランドです。
- `DateTime` および `Date` - Equals、Does Not Equal、Before、After、Today、Yesterday、This Month、Last Month、Next Month、This Year、Last Year、Next Year、Empty、Not Empty、Null、Not Null;
- `Time` - At、Not At、Before、After、At or Before、At or After、Empty、Not Empty、Null、Not Null;

#### 集計

使用可能な集計オペランドは、**Count**、**Earliest** (date/time)、および **Latest** (date/time) になります。

#### ソート

- `Time`: タイプの列は、オブジェクトの時間部分に基づいてソートされます。分/秒は無視されます。
- `Date`: タイプの列は、日付部分に基づいてソートされ、時間部分は無視されます。
- `DateTime`: タイプの列は、日付に基づいてソートされます。

### Boolean

デフォルトのテンプレートは、ブール値の可視化にマテリアル アイコンを使用します。*false* 値には 'clear' アイコン、*true* 値には 'check' アイコンを使用します。編集テンプレートは `Checkbox` コンポーネントを使用しています。

```html
<igx-column [dataType]="'boolean'">
</igx-column>
```

```razor
<IgbColumn DataType="GridColumnDataType.Boolean"></IgbColumn>
```

```html
<igc-column data-type="boolean">
</igc-column>
```

```tsx
<IgrColumn dataType="boolean"></IgrColumn>
```

### 画像

デフォルトのテンプレートは、デフォルの画像テンプレートへの画像ソースとしてデータからの値を使用しています。デフォルトの画像テンプレートは、画像ファイルの名前を抽出し、アクセシビリティ要件を満たすために画像の `alt` 属性として設定します。表示されるセル サイズは描画される画像のサイズに合わせて調整されるため、大きな画像も描画され、グリッド行は画像列の画像と同じ大きさになることに注意してください。画像タイプの列では、フィルタリング、ソート、およびグループ化はデフォルトでオフになっています。それらを有効にしたい場合は、データ操作を実行するカスタム ストラテジを提供する必要があります。

```html
<igx-grid>
    <igx-column [dataType]="'image'">
    </igx-column>
<igx-grid>
```

```html
<igc-grid id="grid1" auto-generate="false">
    <igc-column field="Image" data-type="image">
    </igc-column>
</igc-grid>
```

```razor
<IgbColumn DataType="GridColumnDataType.Image"></IgbColumn>
```

```tsx
<IgrGrid>
    <IgrColumn field="Image" dataType="Image"></IgrColumn>
</IgrGrid>
```

列に `AutoGenerate` を使用すると、グリッドは最初のデータ レコードの値を分析します。値が文字列型で、画像拡張子 (gif、jpg、jpeg、tiff、png、webp、bmp) で終わる URL のパターンと一致する場合、列は自動的に `dataType === GridColumnDataType.Image` としてマークされ、 デフォルトの画像テンプレートが描画されます。

### 通貨

#### デフォルトのテンプレート

<!-- Angular -->

デフォルトのテンプレートには、接頭辞または接尾辞が付いた通貨記号を含む数値を表示します。通貨記号の位置と数値の書式設定は、提供された Application [LOCALE_ID](https://angular.io/api/core/LOCALE_ID) または {ComponentTitle} の `Locale` に基づいています。

*LOCALE_ID を使用する場合:*
```ts
import { LOCALE_ID } from '@angular/core';
// ...

@Component({
    selector: 'app-component.sample',
    templateUrl: 'grid-component.sample.html',
    providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]
})
```

グリッドの locale を使用する場合:

```html
<{ComponentSelector} [locale]="'fr-FR'" [data]="data">
</{ComponentSelector}>
```

<!-- end: Angular -->

<!-- Blazor, WebComponents, React -->

デフォルトのテンプレートには、接頭辞または接尾辞が付いた通貨記号を含む数値を表示します。

<!-- end: Blazor, WebComponents, React -->

`PipeArgs` 入力を使用することにより、エンドユーザーは**小数点**、*currencyCode* および *display* によって数値書式をカスタマイズできます。

<!-- Angular -->

```ts
public options = {
  digitsInfo: '3.4-4',
  display: 'symbol-narrow'
};
public formatOptions = this.options;
```

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatOptions"
    [dataType]="'currency'">
</igx-column>
```

<!-- end: Angular -->

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Currency" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs()
    {
        DigitsInfo = "3.4-4",
        Display = "symbol-narrow"
    };
}
```

```html
<igc-column id="column" field="UnitsInStock"
    data-type="currency">
</igc-column>
```

```ts
private _formatOptions: any | null = null;
    public get formatOptions(): any {
        if (this._formatOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "1.4-4";
            columnPipeArgs.display = "symbol-narrow";
            this._formatOptions = columnPipeArgs;
        }
        return this._formatOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.digitsInfo = "1.4-4";
formatOptions.display = "symbol-narrow";

<IgrColumn pipeArgs={formatOptions} dataType="currency" field="UnitsInStock"></IgrColumn>
```

| パラメーター                 | 説明                                                |
|---------------------------| -------------------------                                  |
| digitsInfo                | 通貨値の 10 進数表現を表します。        |
| display*                  | 狭義または広義の記号で値を表示します。                |
<!-- Angular -->
| currencyCode              | ISO 4217 通貨コード                                     |
<!-- end: Angular -->

*display - デフォルトの en-US ロケールの場合、USD コードは省略記号 $ または記号 US$ で表すことができます。

<!-- ComponentStart:  Grid -->
セルの値を編集すると、**通貨記号**がサフィックスまたはプレフィックスとして表示されます。詳細については、公式の[セル編集トピック](cell-editing.md#セル編集と編集テンプレートの例)を参照してください。<!-- ComponentEnd:  Grid -->

> 注: 上/下矢印キーを使用する場合、値は digitsInfo - minFractionDigits (小数点以下の最小桁数。デフォルトは 0 です。) に基づいてステップで増減します。


### Percent (パーセント)

デフォルトのテンプレートは、基になる数値に相当するパーセントを表示します。表示されるセル値は、'100' の表示ファクタで乗算された結果です。たとえば、デフォルトのファクタは 100 で、セルに渡される値は 0.123 であるため、表示されるセル値は 12.3% になります。

セル編集の場合、値はデータ ソース値と同じになります。表示ファクタは '1' です。セルを編集すると、パーセント値のプレビューがサフィックス要素として表示されます。たとえば、'0.0547' の編集中にプレビュー要素に '5.47%' が表示されます。

<!-- Angular -->

```ts
public options = {
    /**
    * Decimal representation options, specified by a string in the following format:
    * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
    * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
    * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
    * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
    */
    digitsInfo: '2.2-3'
};
public formatPercentOptions = this.options;
```

<!-- end: Angular -->

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatPercentOptions"
    [dataType]="'percent'">
</igx-column>
```

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Percent" PipeArgs=formatPercentOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatPercentOptions = new IgbColumnPipeArgs()
    {
        /**
        * Decimal representation options, specified by a string in the following format:
        * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
        * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
        * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
        * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
        */
        DigitsInfo = "2.2-3"
    };
}
```

```html
<igc-column id="column" field="UnitsInStock"
    data-type="percent">
</igc-column>
```

```ts
private _formatPercentOptions: any | null = null;
    public get formatPercentOptions(): any {
        if (this._formatPercentOptions == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.digitsInfo = "2.2-3";
            this._formatPercentOptions = columnPipeArgs;
        }
        return this._formatPercentOptions;
    }

constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatPercentOptions;
}
```

```tsx
const formatOptions = new IgrColumnPipeArgs();
formatOptions.digitsInfo = "2.2-3";

<IgrColumn pipeArgs={formatOptions} dataType="percent"></IgrColumn>
```

> [!Note]
> 上/下矢印キーを使用する場合、値は digitsInfo - minFractionDigits (小数点以下の最小桁数。デフォルトは 0 です。) に基づいてステップで増減します。

## デフォルトの編集テンプレート

<!-- ComponentStart:  Grid -->
[{ComponentTitle} 編集トピック](editing.md#テンプレートの編集)の編集テンプレート部分を参照してください。
<!-- ComponentEnd:  Grid -->

## カスタム編集テンプレートとフォーマッタ

カスタム テンプレートと列フォーマッタの定義は、列データ型セットより常に優先されます。

### カスタム テンプレート

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false">
    <igx-column [field]="'UnitsInStock'" [dataType]="'currency'" [pipeArgs]="formatOptions" [editable]="true">
        <ng-template igxCellEditor let-value>
            {{ value | currency:'USD':'symbol':'1.0-0'}}
        </ng-template>
    </igx-column>
</igx-grid>
```

```html
<igc-grid id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="currency" editable="true">
    </igc-column>
</igc-grid>
```

```ts
constructor() {
    var unitsInStock = this.unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;
    unitsInStock.inlineEditorTemplate = this.editCellTemplate;
}

public editCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<input></input>`;
}
```

```tsx
function editCellTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <input></input>
        </>
    );
}

<IgrGrid autoGenerate="false">
    <IgrColumn inlineEditorTemplate={editCellTemplate}></IgrColumn>
</IgrGrid>
```

```razor
<IgbGrid>
 <IgbColumn InlineEditorTemplate="EditTemplate"></IgbColumn>
</IgbGrid>
@code {
    public RenderFragment<IgbCellTemplateContext> EditTemplate = (ctx) =>
    {
        var value = ctx.Cell.Value;
        return@<input value="@value" />;
    };
}
```

### 列の書式設定

```html
<igc-grid id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="currency">
    </igc-column>
</igc-grid>
```

```ts
constructor() {
    var unitsInStock = this.unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;
    unitsInStock.formatter = this.formatCurrency;
}

public formatCurrency(value: number) {
    return `$ ${value.toFixed(0)}`;
}
```

```tsx
function formatCurrency(value: number) {
    return `$ ${value.toFixed(0)}`;
}

<IgrGrid autoGenerate="false">
    <IgrColumn formatter={formatCurrency} field="UnitsInStock"></IgrColumn>
</IgrGrid>
```

```razor
<IgbGrid>
 <IgbColumn FormatterScript="CurrencyFormatter"></IgbColumn>
</IgbGrid>

//In Javascript
igRegisterScript("CurrencyFormatter", (value) => {
    return `$ ${value.toFixed(0)}`;
}, false);
```

<!-- Angular -->
```ts
 // Through column formatter property
public formatCurrency(value: number) {
    return `Dollar sign ${value.toFixed(0)}`;
}

public init(column: IgxColumnComponent) {
    switch (column.field) {
        case 'UnitsInStock':
            column.formatter = this.formatCurrency;
            break;
        default:
            return;
}
```
<!-- end: Angular -->


## API リファレンス

* `Cell`
* `Column`
* `PipeArgs`
* `{ComponentName}`
* `Locale`
* `DataType`

## その他のリソース
<!-- ComponentStart:  Grid -->
カスタム テンプレートについては、[セル編集トピック](cell-editing.md#セル編集テンプレート)を参照してください。


* [編集](editing.md)
* [集計](summaries.md)
<!-- ComponentEnd:  Grid -->
