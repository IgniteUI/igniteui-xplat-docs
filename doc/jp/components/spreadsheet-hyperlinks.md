---
title: $PlatformShort$ スプレッドシート | ハイパーリンク | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スプレッドシート コントロールを使用して、Excel ワークブックに Webサイト、ファイル ディレクトリ、およびその他のワークシートにリンクするハイパーリンクを表示します。$ProductName$ スプレッドシート チュートリアルを是非お試しください!
_keywords: Excel Spreadsheet, hyperlinks, $ProductName$, Infragistics, Excel スプレッドシート、ハイパーリンク, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---
# $PlatformShort$ Spreadsheet ハイパーリンク

$PlatformShort$ Spreadsheet コンポーネントは、Excel ワークブックに既存のハイパーリンクを表示、Webサイト、ファイルディレクトリ、およびワークブック内の他のワークシートにリンクできる新しいハイパーリンクを挿入できます。

## $PlatformShort$ Spreadsheet ハイパーリンクの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Spreadsheet ハイパーリンクの例"></iframe>
</div>
<sample-button src="excel/spreadsheet/hyperlinks"></sample-button>

<div class="divider--half"></div>

## ハイパーリンク概要

ハイパーリンクを配置するワークシートの `Hyperlinks` コレクションにアクセスすると、ハイパーリンクが `表計算、スプレッドシート` コントロールに追加されます。このコレクションには、`WorksheetHyperlink` オブジェクトを受け取る `add` メソッドがあり、セル アドレス、移動先のハイパーリンク URL、表示テキスト、およびオプションでホバー時に表示するツールチップを定義できます。

## 依存関係

ハイパーリンクを使用するように $PlatformShort$ スプレッドシート コントロールを設定するときは、`WorksheetHyperlink` クラスをインポートする必要があります。

<!-- Angular -->
```ts
import { WorksheetHyperlink } from 'igniteui-angular-excel';
```

<!-- React -->
```ts
import { WorksheetHyperlink } from 'igniteui-react-excel';
```

<!-- WebComponents -->
```ts
import { WorksheetHyperlink } from 'igniteui-webcomponents-excel';
```

## コード スニペット

以下のコード スニペットは、$PlatformShort$ `Spreadsheet` コントロールで現在表示されているワークシートにハイパーリンクを追加する方法を示しています。

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```