---
title: $PlatformShort$ Excel ライブラリ | ワークシートの使用 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ Excel ライブラリを使用してワークシートの行やセルにデータを入力でき、対応する値を設定できます。$ProductName$ Excel からアプリケーションへデータを簡単に転送できます。
_keywords: Excel library, worksheet, $ProductName$, Infragistics, Excel ライブラリ, ワークシート, インフラジスティックス
mentionedTypes: ['Workbook', 'Worksheet', 'WorksheetCell', 'DisplayOptions', 'WorksheetFilterSettings', 'IWorksheetCellFormat']
_language: ja
---
# $PlatformShort$ ワークシートの使用

$PlatformShort$ Excel Engine の `Worksheet` にデータが保存されます。Worksheet の行やセルにデータを入力でき、対応する値を設定できます。`Worksheet` は、フィルター、ソート、セル書式のカスタマイズができます。

## $PlatformShort$ ワークシートの使用例

<div class="sample-container loading" style="height: 200px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-operations-on-worksheets' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ワークシートの使用例"></iframe>
</div>
<sample-button src="excel/excel-library/operations-on-worksheets"></sample-button>


<div class="divider--half"></div>

以下のコードは、以下のコード スニペットを使用するインポートを示します。

```ts
import { Workbook } from "{PackageExcel}";
import { Worksheet } from "{PackageExcel}";
import { WorkbookFormat } from "{PackageExcel}";
import { Color } from "{PackageCore}";

import { CustomFilterCondition } from "{PackageExcel}";
import { ExcelComparisonOperator } from "{PackageExcel}";
import { FormatConditionTextOperator } from "{PackageExcel}";
import { OrderedSortCondition } from "{PackageExcel}";
import { RelativeIndex } from "{PackageExcel}";
import { SortDirection } from "{PackageExcel}";
import { WorkbookColorInfo } from "{PackageExcel}";
```

## ガイドラインの設定
グリッド線は、ワークシートでセルを視覚的に分離するために使用されます。グリッド線は表示または非表示にできます。また、色を変更することもできます。

列と行のヘッダーは、ワークシートの `DisplayOptions` の `ShowGridlines` プロパティを使用して、表示と非表示を切り替えることができます。以下のコードは、ワークシートのグリッドラインを非表示にする方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showGridlines = false;
```

ワークシートの `DisplayOptions` の `GridlineColor` プロパティを使用して、グリッド線の色を設定できます。以下のコードは、ワークシートのグリッド線を変更する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

## ヘッダーの構成
列ヘッダーと行ヘッダーは、列と行を視覚的に特定するために使用します。また、現在選択されているセルやセル領域を強調表示する場合にも使用します。

列と行のヘッダーは、ワークシートの `DisplayOptions`  の `ShowRowAndColumnHeaders` プロパティを使用して、表示と非表示を切り替えることができます。以下のコードは、列と行ヘッダーを非表示にする方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

## ワークシートの編集を設定
デフォルトで保存する `Worksheet` オブジェクトが有効です。`Worksheet` オブジェクトの `Protect` メソッドを使用してワークシートを保護することにより、ワークシートの編集を禁止できます。このメソッドは、保護する部分を決定する null 許容型 `bool` 引数が多くあり、オプションの 1 つは編集オブジェクトを許容し、`false` に設定した場合はワークシートの編集を防止します。

以下のコードは、ワークシートで編集を無効にする方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

`Worksheet` オブジェクトの `Protect` メソッドを使用して構造変更からワークシートを保護できます。

保護が設定されると、Worksheet オブジェクトの保護をこれらのオブジェクトでオーバーライドするために、`CellFormat` オブジェクトの `Locked` プロパティを各セル、行、マージされたセル領域、または列で設定することができます。たとえば、1 つの列のセルを除き、ワークシートのすべてのセルを読み取り専用にする必要がある場合、特定の `WorksheetColumn` オブジェクトで `CellFormat` プロパティの `Locked` を `false` に設定します。これにより、その列内のセルの編集をユーザーに許可し、ワークシートの他のセルの編集は禁止できます。

以下のコードはその方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

## ワークシート領域のフィルタリング
フィルタリングは、`Worksheet` オブジェクトの `filterSettings` プロパティから取得できるワークシートの `WorksheetFilterSettings` でフィルター条件を設定できます。フィルター条件は、フィルター条件追加、削除、変更される時に、または `ReapplyFilters` メソッドがワークシートで呼び出されるときに限り再適用されます。フィルターは、領域内で常にデータを評価するわけではありません。

`WorksheetFilterSettings` オブジェクトの `SetRegion` メソッドでフィルターを適用する領域を指定できます。

以下は、フィルターをワークシートに追加するためのメソッド一覧と概要です。

| メソッド			|説明     																	|
| ------------- 	|:-------------:																	|
|`ApplyAverageFilter`|データ範囲全体の平均を下回るデータであるか上回るデータであるかという条件に基づいてデータを絞り込むことのできるフィルターです。|
|`ApplyDatePeriodFilter`|月または四半期の日付をフィルターできるフィルターを表します。|
|`ApplyFillFilter`|背景の塗りつぶしに基づいてセルを絞り込むフィルターを表します。このフィルターには CellFill を 1 つ指定します。この塗りつぶしのセルがデータ範囲に表示されることになります。他のセルはすべて非表示になります。|
|`ApplyFixedValuesFilter`|具体的な指定値に基づいて表示セルを絞り込むことのできるフィルターです。|
|`ApplyFontColorFilter`|フォントの色に基づいてセルを絞り込むフィルターを表します。このフィルターには 1 つの色を指定します。この色のフォントのセルがデータ範囲に表示されることになります。他のセルはすべて非表示になります。|
|`ApplyIconFilter`|条件付き書式アイコンに基づいてセルを絞り込むフィルターを表します。|
|`ApplyRelativeDateRangeFilter`|フィルターの適用日を基点とした相対日付によって日付セルの範囲を絞り込むことのできるフィルターです。|
|`ApplyTopOrBottomFilter`|ソートされた値リストの上位または下位にあるセルを表示できるフィルターです。|
|`ApplyYearToDateFilter`|日付セルの範囲を現在の年の開始日からフィルターの評価実施日までの期間に絞り込むことのできるフィルターです。|
|`ApplyCustomFilter`|1 つ、ないし 2 つのカスタム条件に基づいてデータを絞り込むことのできるフィルターです。この 2 つの絞り込み条件は論理積 (and) または論理和 (or) 演算子と組み合わせて使用できます。|

以下のコード スニペットを使用してフィルターをワークシート領域に追加します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

## ペインの固定と分割
ペイン固定機能は、行をワークシートの上または列を左にで固定できます。ユーザーがスクロールしている間、固定した行や列は表示されたままになります。固定された行列は、削除できない実線によってワークシートの残りの部分と区切られます。

ペイン固定を有効にするために `Worksheet` オブジェクトの `DisplayOptions` の `PanesAreFrozen` プロパティを `true` に設定する必要があります。表示オプション `FrozenPaneSettings` の `FrozenRows` と `FrozenColumns` プロパティを使用して固定する行列を指定できます。

また `FirstRowInBottomPane` と `FirstColumnInRightPane` を個々に使用して下ペインの最初の行または右ペインの最初の列を指定できます。

以下のコード スニペットは、ワークシートのペイン機能を固定する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;

worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

## ワークシート ズーム レベルの設定
各ワークシートのズーム レベルは、`Worksheet` オブジェクトの `DisplayOptions` の `MagnificationInNormalView` プロパティを使用して個別に変更できます。このプロパティは、10 から 400 の間の値を取得して適用したいズームのパーセンテージを表します。

以下のコードはその方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

## ワークシート レベルのソート
列または行にワークシート レベル オブジェクトでソートの条件を設定することによってソートが実行されます。列または行を昇順または降順にソートすることができます。

これには、シートの `SortSettings` プロパティを使用して取得できる `Worksheet` オブジェクトの `WorksheetSortSettings` に領域とソートタイプを指定します。

シートのソート条件は、ソート条件が追加、削除、変更される時に、または `ReapplySortConditions` メソッドがワークシートで呼び出されるときに限り再適用されます。列または行を領域でソートします。'Rows' はデフォルトのソートタイプです。

以下のコード スニペットは、ワークシートのセル領域を適用する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

## ワークシートの保護
`Worksheet` オブジェクトで `Protect` メソッドを呼び出してワークシートを保護できます。このメソッドは、以下のユーザー操作を制限または許容する null 許容型 `bool` パラメーターを公開します。

- セルの編集
- 図形、コメント、チャートなどのオブジェクトやコントロールを編集します。
- シナリオの編集。
- データ フィルタリング。
- セルの書式設定。
- 列の挿入、削除、書式設定。
- 行の挿入、削除、書式設定。
- ハイパーリンクの挿入。
- データのソート。
- ピボット テーブルの使用

`Worksheet` オブジェクトで `Unprotect` メソッドを呼び出してワークシートの保護を削除できます。

以下のコード スニペットは、上記にリストされたすべてのユーザー操作を保護を有効にします。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

## ワークシートの条件付き書式設定
`Worksheet` の条件付き書式を設定するには、ワークシートの `ConditionalFormats` コレクションで公開される多数の Add メソッドを使用できます。この Add メソッドの最初のパラメーターは条件付き書式に適用する Worksheet の `string` 領域です。

Worksheet に追加可能な条件付き書式にその条件が true の場合に `WorksheetCell`  要素の外観を決定する `CellFormat` プロパティがあります。たとえば、`Fill` や `Font` などのこの `CellFormat` プロパティにアタッチされるプロパティを使用してセルの背景およびフォント設定を決定できます。

ワークシート セルの可視化の動作が異なるため、`CellFormat` プロパティがない条件付き書式もあります。この条件付き書式は `DataBarConditionalFormat`、`ColorScaleConditionalFormat`、`IconSetConditionalFormat` です。

既存の `Workbook` を Excel から読み込む際に、その `Workbook` が読み込まれた場合も書式設定は保持されます。`Workbook` を Excel ファイルに保存する場合も保持されます。

以下のコード例はワークシートの条件付き書式の使用方法を紹介します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";

var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```
