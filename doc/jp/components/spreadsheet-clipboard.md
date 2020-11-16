---
title: $PlatformShort$ スプレッドシート | クリップボード操作 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スプレッドシート コントロール内でコピー、切り取り、貼り付けなどのクリップボード操作を使用します。Infragistics $ProductName$ スプレッドシートのサンプルを是非お試しください!
_keywords: Spreadsheet, clipboard operations, $ProductName$, Infragistics, スプレッドシート, クリップボード操作, インフラジスティックス
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction', 'SpreadsheetCommandType', 'Command']
_language: ja
---
# $PlatformShort$ クリップボードでの作業

このトピックでは、クリップボードの操作を実行する方法を説明します。

## サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-clipboard-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-clipboard' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="excel/spreadsheet/clipboard"></sample-button>

<div class="divider--half"></div>

## 依存関係
クリップボードを利用する前に、`SpreadsheetAction` 列挙体をインポートします。

<!-- Angular -->
```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<!-- React -->
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
次のコード スニペットは、$PlatformShort$ `Spreadsheet` コントロールでクリップボードに関連するコマンドを実行する方法を示しています。

```ts
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```
