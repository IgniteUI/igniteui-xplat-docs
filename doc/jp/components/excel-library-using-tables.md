---
title: $PlatformShort$ Excel ライブラリ | テーブルの使用 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ Excel ライブラリのテーブル機能を使用して、行と列のデータを書式設定します。詳細については、$ProductName$ Excel のチュートリアルを参照してください。
_keywords: Excel library, tables, $ProductName$, Infragistics, Excel ライブラリ, テーブル, インフラジスティックス
mentionedTypes: ['Workbook', 'WorksheetTable', 'Worksheet', 'SortSettings']
_language: ja
---
# $PlatformShort$ テーブルの使用

Infragistics $PlatformShort$ Excel Engine の `WorksheetTable` 機能は、行列のデータを書式設定できます。ワークシート テーブルのデータは `Worksheet` の他の行や列のデータから個々に管理できます。

<!--## $PlatformShort$ Using Tables Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-working-with-tables' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Using Tables Example"></iframe>
</div>-->


<div class="divider--half"></div>

## テーブルをワークシートに追加
Infragistics $PlatformShort$ Excel Engine のワークシート テーブルは `WorksheetTable` オブジェクトによって表され、ワー​​クシートの `Tables` コレクションに追加されます。テーブルを追加するには、このコレクションの `Add` メソッドを呼び出す必要があります。このメソッドでは、テーブルを追加する領域、テーブルにヘッダーを含めるかどうか、およびオプションで `WorksheetTableStyle` オブジェクトとしてテーブルのスタイルを指定できます。

以下のコード サンプルは、ヘッダーを含むテーブルを `Worksheet` の A1 to G10 (A1 to G1 が列ヘッダー) 領域に追加する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");

worksheet.tables().add("A1:G10", true);
```

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");

worksheet.Tables.Add("A1:G10", true);
```

テーブルを追加後 `WorksheetTable` で `InsertColumns`、`InsertDataRows`、`DeleteColumns`、または `DeleteDataRows` メソッドを呼び出して行列を追加または削除して変更できます。テーブルの `Resize` メソッドを使用して新しいテーブル範囲を設定できます。

以下のコード スニペットは、3 つのメソッドの使用方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

//Will add 5 columns at index 1.
table.insertColumns(1, 5);

//Will add 5 rows at index 0.
table.insertDataRows(0, 5);

//Will delete 5 columns starting at index 1.
table.deleteColumns(1, 5);

//Will delete 5 rows starting at index 0.
table.deleteDataRows(0, 5);

//Will resize the table to be in the region of A1:G15.
table.resize("A1:G15");
```

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");
var table = worksheet.Tables.Add("A1:G10", true);

//Will add 5 columns at index 1.
table.InsertColumns(1, 5);

//Will add 5 rows at index 0.
table.InsertDataRows(0, 5);

//Will delete 5 columns starting at index 1.
table.DeleteColumns(1, 5);

//Will delete 5 rows starting at index 0.
table.DeleteDataRows(0, 5);

//Will resize the table to be in the region of A1:G15.
table.Resize("A1:G15");
```

## テーブルのフィルタリング
`WorksheetTable` の列にフィルターを適用します。フィルターが列で適用されると、テーブルに適用したすべてのフィルター条件と一致する行を決定するために再評価されます。

テーブルのデータを後で変更または行の `Hidden` プロパティを変更した場合、フィルター条件は自動的に再評価されません。テーブルのフィルター条件は、テーブルの列フィルターが追加、削除、変更されたときか、`ReapplyFilters` メソッドがテーブルに対して呼び出されたときに限り再適用されます。

以下は、`WorksheetTable` の列で使用できるフィルター タイプです。

- `AverageFilter` - このコードは、列のすべてのセルの平均値の上か下かに基づいてセルをフィルターする方法を示します。
- `CustomFilter` - 1 つ以上のカスタム条件に基づいてセルをフィルターできます。
- `DatePeriodFilter` - 年の特定の月または四半期の日付を含むセルのみが表示されます。
- `FillFilter` - 特定の塗りつぶしを含むセルのみが表示されます。
- `FixedValuesFilter` - 特定の表示値のみに一致するまたは日付/時間の特定のグループ内に分類されるセルが表示されます。
- `FontColorFilter` - 特定のフォントの色を含むセルのみが表示されます。
- `RelativeDateRangeFilter` - フィルターが適用されたときに、以下の日または前の四半期のように日付の相対的な時間の範囲内で発生するかどうかに基づいて、日付値ををフィルターできます。
- `TopOrBottomFilter` - このフィルターはトップまたはボトム N 値をフィルターします。このフィルターはトップまたはボトム N %値をフィルターします。
- `YearToDateFilter` - 年の始まりとフィルターが適用される日付の間に発生する場合、日付値を含むYearToDateFilter-をフィルターできます。

以下のコード スニペットは、`WorksheetTable` の最初の列に平均を超えるフィルターを適用する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).applyAverageFilter(AverageFilterType.AboveAverage);
```

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");
var table = worksheet.Tables.Add("A1:G10", true);

table.Columns[0].ApplyAverageFilter(Documents.Excel.Filtering.AverageFilterType.AboveAverage);
```

## テーブルのソート
テーブル列でソート条件を設定するとソートが実行されます。ソート条件が列で設定されると、テーブルのセルの順番を決定するためにテーブルのすべてのソート条件が再評価されます。ソートの基準を満たすためにセルを移動させる必要があるとき、テーブルのセルの行全体が 1 つの単位として移動されます。

テーブルのデータが後で変更される場合、ソート条件は自動的に再評価されません。テーブルのソート条件は、ソート条件が追加、削除、変更される時に、または `ReapplySortConditions` メソッドがテーブルで呼び出されるときに限り再適用されます。ソート条件が再評価されると、表示されたセルのみがソートられます。非表示行のすべてのセルは適切に維持されます。

テーブル列からソート条件へアクセスする以外に `WorksheetTable` の `SortSettings` プロパティの `SortConditions` コレクションからも公開されます。これは、列/ソート条件のペアの順番に並べられたコレクションです。このコレクション内の順序はソートの優先順位です。

列に設定可能なソート条件タイプは以下のとおりです。

- `OrderedSortCondition` - セル値に基づいてセルを昇順または降順にソートします。
- `CustomListSortCondition` - テキストまたは表示値に基づいて定義された順序でセルをソートします。このソート方法は、日付がカレンダーに表示されるためアルファベット順よりも便利です。
- `FillSortCondition` - 塗りつぶしが特定のパターン/グラデーションであるかどうかに基づいてセルをソートします。
- `FontColorSortCondition` - フォントが特定の色であるかどうかによってセルをソートします。

また `WorksheetTable` の `SortSettings` の `CaseSensitive` プロパティは、文字列が大文字と小文字を区別してソートできるかどうかを開発者が設定できます。

以下のコード スニペットは、`WorksheetTable` に `OrderedSortCondition` を適用する方法です。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).sortCondition = new OrderedSortCondition(SortDirection.Ascending);

//Alternative:
table.sortSettings.sortConditions().addItem(table.columns(0), new OrderedSortCondition(SortDirection.Ascending));
```

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");
var table = worksheet.Tables.Add("A1:G10", true);

table.Columns[0].SortCondition = new Infragistics.Documents.Excel.Sorting.OrderedSortCondition(Documents.Excel.Sorting.SortDirection.Ascending);

//Alternative
table.SortSettings.SortConditions.Add(table.Columns[0], new Infragistics.Documents.Excel.Sorting.OrderedSortCondition(Documents.Excel.Sorting.SortDirection.Ascending));
```

