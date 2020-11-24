---
title: $PlatformShort$ スプレッドシート | 条件付き書式 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スプレッドシート コントロールを使用して、ワークシートのセルに条件付き書式を設定します。$ProductName$ スプレッドシートのサンプルを是非お試しください!
_keywords: Spreadsheet, conditional formatting, $ProductName$, Infragistics, Worksheet, スプレッドシート, 条件付き書式, インフラジスティックス, ワークシート
mentionedTypes: ['Spreadsheet', 'ConditionalFormatCollection', 'WorksheetCell', 'Worksheet', 'IWorksheetCellFormat']
_language: ja
---
# $PlatformShort$ Spreadsheet の条件付き書式設定

$PlatformShort$ Spreadsheet コンポーネントは、ワークシートのセルに条件付き書式を設定できます。これにより、条件に基づいてデータのさまざまな部分を強調表示できます。

## $PlatformShort$ Spreadsheet の条件付き書式設定の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-conditional-formatting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Spreadsheet の条件付き書式設定の例"></iframe>
</div>
<sample-button src="excel/spreadsheet/conditional-formatting"></sample-button>

<div class="divider--half"></div>

## 条件付き書式設定の概要

特定のワークシートの条件付き書式を構成するには、ワークシートの `ConditionalFormats` コレクションに公開される `Add` メソッドを使用できます。この `Add` メソッドの最初のパラメーターは条件付き書式に適用するワークシートの string 領域です。

ワークシートに追加できる条件付き書式の多くには、その条件付き書式の条件が満たされたときにセルを表示する方法を決定する `CellFormat` プロパティがあります。たとえば、`Fill` および `Font` などのこの `CellFormat` プロパティにアタッチされるプロパティを使用してセルの背景およびフォント設定を決定できます。

条件付き書式が作成され、`CellFormat` が適用される場合、ワークシートのセルにサポートされるプロパティのサブセットがあります。現在サポートされる `CellFormat` プロパティは `Fill`、`Border` プロパティ、`FormatString`、および strikethrough、underline、italic、bold、color などの `Font` プロパティです。以下のコード スニペットに複数のプロパティが設定されます。

ワーク セルの可視化の動作が異なるため、`CellFormat` プロパティがない条件付き書式もあります。この条件付き書式は `DataBarConditionalFormat`、`ColorScaleConditionalFormat`、`IconSetConditionalFormat` です。

既存の Workbook を Excel から読み込む際に、ワークブックが読み込まれた場合も書式設定は保持されます。ワークブックを Excel ファイルに保存する場合も保持されます。

以下は、$PlatformShort$ `Spreadsheet` コントロールでサポートされている条件付き書式の一覧です。

- `AverageConditionalFormat`: `AddAverageCondition` メソッドを使用して追加されたこの条件付きフォーマットは、セルの値が関連する範囲の平均または標準偏差より上か下かに基づいて、ワークシートセルの視覚属性を制御するプロパティを公開します。
- `BlanksConditionalFormat`: `AddBlanksCondition` メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
- `ColorScaleConditionalFormat`: `AddColorScaleCondition` メソッドを使用して追加された条件付き書式は、最小値、中央値、最大値に対するセルの値に基づいてワークシート セルの色を制御するプロパティを公開します。
- `DataBarConditionalFormat`: `AddDataBarCondition` メソッドを使用して追加されたこの条件付き書式は、関連付けられた値の範囲に対するセルの値に基づいてワークシートのセルにデータバーを表示するプロパティを公開します。
- `DateTimeConditionalFormat`: `AddDateTimeCondition` メソッドを使用して追加されたこの条件付き書式は、セルの日付値が指定された時間範囲内にあるかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
- `DuplicateConditionalFormat`: `AddDuplicateCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が一意であるか、関連付けられた範囲全体で複製されるかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
- `ErrorsConditionalFormat`: `AddErrorsCondition` メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
- `FormulaConditionalFormat`: `AddFormulaCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が式で定義された基準を満たすかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
- `IconSetConditionalFormat`: `AddIconSetCondition` メソッドを使用して追加されたこの条件付き書式は、しきい値に対するセルの値に基づいてワークシートのセルにアイコンを表示するプロパティを公開します。
- `NoBlanksConditionalFormat`: `AddNoBlanksCondition` メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
- `NoErrorsConditionalFormat`: `AddNoErrorsCondition` メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
- `OperatorConditionalFormat`: `AddOperatorCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が論理演算子で定義された基準を満たすかどうかに基づいてワークシートセルの視覚属性を制御するプロパティを公開します。
- `RankConditionalFormat`: `AddRankCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が関連する範囲全体の値の最下位ランクの上部にあるかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
- `TextOperatorConditionalFormat`: `AddRankCondition` メソッドを使用して追加されたこの条件付き書式は、セルのテキスト値が `AddTextCondition` メソッドのパラメーターの文字列および `FormatConditionTextOperator` 値にで定義された基準を満たすかどうかに基づいてワークシート セルのビジュアル属性を制御するプロパティを公開します。
- `UniqueConditionalFormat`: `AddUniqueCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が関連付けられた範囲全体で一意であるかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。

## 依存関係

`Spreadsheet` コントロールに条件付き書式を追加するには、以下の依存関係をインポートする必要があります。

<!-- Angular -->
```ts
import { CellFill } from "igniteui-angular-excel";
import { Color } from 'igniteui-angular-core';
import { ColorScaleType } from "igniteui-angular-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-angular-excel';
import { FormatConditionIconSet } from 'igniteui-angular-excel';
import { FormatConditionOperator } from 'igniteui-angular-excel';
import { FormatConditionTextOperator } from 'igniteui-angular-excel';
import { FormatConditionTimePeriod } from 'igniteui-angular-excel';
import { FormatConditionTopBottom } from "igniteui-angular-excel";
import { WorkbookColorInfo } from 'igniteui-angular-excel';
```

<!-- React -->
```ts
import { CellFill } from "igniteui-react-excel";
import { Color } from 'igniteui-react-core';
import { ColorScaleType } from "igniteui-react-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-react-excel';
import { FormatConditionIconSet } from 'igniteui-react-excel';
import { FormatConditionOperator } from 'igniteui-react-excel';
import { FormatConditionTextOperator } from 'igniteui-react-excel';
import { FormatConditionTimePeriod } from 'igniteui-react-excel';
import { FormatConditionTopBottom } from "igniteui-react-excel";
import { WorkbookColorInfo } from 'igniteui-react-excel';
```

<!-- WebComponents -->
```ts
import { CellFill } from "igniteui-webcomponents-excel";
import { Color } from 'igniteui-webcomponents-core';
import { ColorScaleType } from "igniteui-webcomponents-excel";
import { FormatConditionAboveBelow } from 'igniteui-webcomponents-excel';
import { FormatConditionIconSet } from 'igniteui-webcomponents-excel';
import { FormatConditionOperator } from 'igniteui-webcomponents-excel';
import { FormatConditionTextOperator } from 'igniteui-webcomponents-excel';
import { FormatConditionTimePeriod } from 'igniteui-webcomponents-excel';
import { FormatConditionTopBottom } from "igniteui-webcomponents-excel";
import { WorkbookColorInfo } from 'igniteui-webcomponents-excel';
```

## コード スニペット

以下のコード スニペットは、`Spreadsheet` コントロールのスプレッドシートに各条件付き書式を追加する方法を示しています。

```ts
let sheet = this.spreadsheet.activeWorksheet;

let red = new Color();
red.colorString = "#ff0000";

let blue = new Color();
blue.colorString = "#0000ff";

let green = new Color();
green.colorString = "#00ff00";

let gray = new Color();
gray.colorString = "#d3d3d3";

let avgFormat = sheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
avgFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let blanksFormat = sheet.conditionalFormats().addBlanksCondition("B1:B10");
blanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let colorFormat = sheet.conditionalFormats().addColorScaleCondition("C1:C10", ColorScaleType.ThreeColor);
colorFormat.minimumThreshold.formatColor = new WorkbookColorInfo(red);
colorFormat.midpointThreshold.formatColor = new WorkbookColorInfo(blue);
colorFormat.maximumThreshold.formatColor = new WorkbookColorInfo(green);

let dataBarFormat = sheet.conditionalFormats().addDataBarCondition("D1:D10");

let dateTimeFormat = sheet.conditionalFormats().addDateTimeCondition("E1:E10", FormatConditionTimePeriod.NextWeek);
dateTimeFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let duplicateFormat = sheet.conditionalFormats().addDuplicateCondition("F1:F10");
duplicateFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let errorFormat = sheet.conditionalFormats().addErrorsCondition("G1:G10");
errorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let formulaFormat = sheet.conditionalFormats().addFormulaCondition("H1:H10", "=H1>2");
formulaFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let iconFormat = sheet.conditionalFormats().addIconSetCondition("I1:I10", FormatConditionIconSet.IconSet3TrafficLights1);

let noBlanksFormat = sheet.conditionalFormats().addNoBlanksCondition("J1:J10");
noBlanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let noErrorFormat = sheet.conditionalFormats().addErrorsCondition("K1:K10");
noErrorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let operatorFormat = sheet.conditionalFormats().addOperatorCondition("L1:L10", FormatConditionOperator.Greater);
operatorFormat.setOperand1(500);
operatorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let rankFormat = sheet.conditionalFormats().addRankCondition("M1:M10", FormatConditionTopBottom.Top, 5);
rankFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let textFormat = sheet.conditionalFormats().addTextCondition("N1:N10", "A", FormatConditionTextOperator.Contains);
textFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let uniqueFormat = sheet.conditionalFormats().addUniqueCondition("O1:O10");
uniqueFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);
```
