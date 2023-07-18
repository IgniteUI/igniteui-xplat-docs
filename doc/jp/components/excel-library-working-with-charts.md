---
title: {Platform} Excel ライブラリ | チャートの使用 | インフラジスティックス
_description: インフラジスティックスの {Platform} Excel ライブラリのチャート機能を使用して、ワークシートのセル領域全体のデータ トレンドをチャートで表示します。{ProductName} Excel データを 70 種類以上のチャート タイプで可視化できます。
_keywords: Excel library, charts,  {ProductName}, Infragistics, Excel ライブラリ, チャート, インフラジスティックス
mentionedTypes: ['Workbook', 'Worksheet']
_language: ja
---
# {Platform} チャートの使用

Infragistics {Platform} Excel Engine の `WorksheetChart` 機能は、ワークシートのセル領域全体のデータ トレンドをチャートで表示します。たとえば Excel データを縦棒チャートや折れ線チャートで可視化する場合に便利です。

## {Platform} チャートの使用の例


`sample="/excel/excel-library/working-with-charts", height="500", alt="{Platform} チャートの使用の例"`



<div class="divider--half"></div>

## 使用方法
ワークシートを追加するには、ワークシートの Shapes コレクションの `AddChart` メソッドを使用します。このメソッドは、チャート タイプと表示位置を左上のセル、右下のセル、それらのセルのパーセンテージで指定できます。

`AddChart` メソッドはワークシートに追加されるワークシート チャート要素を返します。次にチャートの `SetSourceData` メソッドを使用してデータ ソースとして使用するワークシート セル領域のセルのセル アドレスを設定できます。同様に行列のマッピングを Y と X 軸に切り替えることもできます。

`Line`、`Area`、`Column`、`Pie` を含む 70 タイプ以上のチャート タイプがサポートされます。

以下のコードは、Excel チャート機能を有効にする方法を示します。以下のスニペットは、ワークシートの最初の行の最初のセルと 13 番目のセル間に縦棒チャートを追加します。ソースデータは A2:M6 領域のデータに設定します。縦棒チャートの  X と Y 軸の列と行のマッピングを切り替えます。

```ts
var chart = ws.shapes().addChart(ChartType.ColumnClustered,
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```

```razor
var chart = sheet.Shapes.AddChart(Documents.Excel.Charts.ChartType.ColumnClustered,
    sheet.Rows[0].Cells[0], new Core.Point(0, 0),
    sheet.Rows[0].Cells[props.Length - 1], new Core.Point(100, 100));

chart.SetSourceData("A2:M6", true);
```

## API リファレンス

 - `AddChart`
 - `Area`
 - `Column`
 - `Line`
 - `Pie`
 - `WorksheetChart`