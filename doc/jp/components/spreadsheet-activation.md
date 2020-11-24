---
title: $PlatformShort$ スプレッドシート | アクティブ化 | インフラジスティックス
_description: セル、ペイン、およびワークシート間で分割される $PlatformShort$ スプレッドシート コントロールのアクティブ化を使用する方法について説明します。$ProductName$ スプレッドシートのサンプルを是非お試しください!
_keywords: Excel Spreadsheet, activation, $ProductName$, Infragistics, Excel スプレッドシート、アクティブ化, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---
# $PlatformShort$ スプレッドシートのアクティブ化

$PlatformShort$ Spreadsheet コンポーネントは、コントロールで現在アクティブなセル、ペイン、およびワークシートを決定できるプロパティを公開します。これは、ユーザーがコントロール内で移動または編集している場所を判断するのに役立ちます。

## $PlatformShort$ スプレッドシートのアクティブ化例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ スプレッドシートのアクティブ化例"></iframe>
</div>
<sample-button src="excel/spreadsheet/activation"></sample-button>

<div class="divider--half"></div>

## アクティベーションの概要

$PlatformShort$ `Spreadsheet` コントロールのアクティブ化は、スプレッドシートの現在の `Workbook` のセル、ペイン、およびワークシート間で分割されます。3 つの アクティブなプロパティは以下のとおりです。

- `ActiveCell`: スプレッドシートのアクティブ セルを設定します。設定するには、`SpreadsheetCell` の新しいインスタンスを作成し、そのセルに関する列と行、またはセルの文字列アドレスなどの情報を渡す必要があります。
- `ActivePane`: スプレッドシート コントロールの現在アクティブなワークシートのアクティブ ペインを返します。
- `ActiveWorksheet`: スプレッドシート コントロールの `Workbook` 内のアクティブ ワークシートを返すか、設定します。これは、スプレッドシートに添付されている`ワークブック`内の既存のワークシートに設定することで設定できます。

## コード スニペット

次のコード スニペットは、`Spreadsheet` コントロールのセルとワークシートのアクティブ化の設定を示しています。

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
