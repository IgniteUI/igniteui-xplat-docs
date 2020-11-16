---
title: $PlatformShort$ スプレッドシート | コマンド | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スプレッドシート コントロールのさまざまな機能をアクティブにするためのコマンドを実行できます。$ProductName$ スプレッドシートで ZoomIn や ZoomOut などのコマンドを使用できます。
_keywords: Spreadsheet, commands, $ProductName$, Infragistics, スプレッドシート, コマンド, インフラジスティックス
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction']
_language: ja
---
# $PlatformShort$ コマンドの使用

$PlatformShort$ Spreadsheet コンポーネントは、スプレッドシートのさまざまな機能をアクティブにするためのコマンドを実行できます。このトピックでは、コマンドによりコントロールを使用してさまざまな操作を実行する方法を説明します。多くのコマンドは、アクティブセル、行、またはワークシートに基づいてアクションを実行します。例えば、ZoomIn と ZoomOut の 2 つのコマンドです。完全なリストは SpreadsheetAction 列挙体を見てください。

## サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-commands-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-commands' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="excel/spreadsheet/commands"></sample-button>

<div class="divider--half"></div>

## 依存関係
コマンドボードを利用する前に、`SpreadsheetAction` をインポートします。

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

```ts
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetAction } from 'igniteui-react-spreadsheet';
```

```ts
import { IgcSpreadsheetComponent } from 'igniteui-webcomponents-spreadsheet';
import { SpreadsheetAction } from 'igniteui-webcomponents-spreadsheet';
```

<div class="divider--half"></div>


## 使用方法
以下のコード スニペットは、データの検証規則を設定する方法を示します。

```ts
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```

```ts
public spreadsheet : IgrSpreadsheet = new IgrSpreadsheet({});

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```

```ts
let spreadsheet = (document.getElementById("spreadsheet") as IgcSpreadsheetComponent);

// ...

function zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

function zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```
