---
title: {Platform} スプレッドシート | アクティブ化 | インフラジスティックス
_description: セル、ペイン、およびワークシート間で分割される {Platform} スプレッドシート コントロールのアクティブ化を使用する方法について説明します。{ProductName} スプレッドシートのサンプルを是非お試しください!
_keywords: Excel Spreadsheet, activation, {ProductName}, Infragistics, Excel スプレッドシート、アクティブ化, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---
# {Platform} スプレッドシートのアクティブ化

{Platform} Spreadsheet コンポーネントは、コントロールで現在アクティブなセル、ペイン、およびワークシートを決定できるプロパティを公開します。これは、ユーザーがコントロール内で移動または編集している場所を判断するのに役立ちます。

## {Platform} スプレッドシートのアクティブ化の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-activation"
           alt="{Platform} スプレッドシートのアクティブ化の例"
           github-src="excel/spreadsheet/activation">
</code-view>

<div class="divider--half"></div>

## アクティベーションの概要

{Platform} `Spreadsheet` コントロールのアクティブ化は、スプレッドシートの現在の `Workbook` のセル、ペイン、およびワークシート間で分割されます。3 つの アクティブなプロパティは以下のとおりです。

- `ActiveCell`: スプレッドシートのアクティブ セルを設定します。設定するには、`SpreadsheetCell` の新しいインスタンスを作成し、そのセルに関する列と行、またはセルの文字列アドレスなどの情報を渡す必要があります。
- `ActivePane`: スプレッドシート コントロールの現在アクティブなワークシートのアクティブ ペインを返します。
- `ActiveWorksheet`: スプレッドシート コントロールの `Workbook` 内のアクティブ ワークシートを返すか、設定します。これは、スプレッドシートに添付されている `Workbook` 内の既存のワークシートに設定することで設定できます。

## コード スニペット

次のコード スニペットは、`Spreadsheet` コントロールのセルとワークシートのアクティブ化の設定を示しています。

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```

## API メンバー

 - `ActiveCell`
 - `ActivePane`
 - `ActiveWorksheet`
 - `SpreadsheetCell`
 - `Spreadsheet`
 - `Workbook`