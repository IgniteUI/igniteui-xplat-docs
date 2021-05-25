---
title: $Platform$ スプレッドシート | ハイパーリンク | インフラジスティックス
_description: インフラジスティックスの $Platform$ スプレッドシート コントロールを使用して、Excel ワークブックに Webサイト、ファイル ディレクトリ、およびその他のワークシートにリンクするハイパーリンクを表示します。$ProductName$ スプレッドシート チュートリアルを是非お試しください!
_keywords: Excel Spreadsheet, hyperlinks, $ProductName$, Infragistics, Excel スプレッドシート、ハイパーリンク, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---
# $Platform$ Spreadsheet ハイパーリンク

$Platform$ Spreadsheet コンポーネントは、Excel ワークブックに既存のハイパーリンクを表示、Web サイト、ファイル ディレクトリ、およびワークブック内の他のワークシートにリンクできる新しいハイパーリンクを挿入できます。

## $Platform$ Spreadsheet ハイパーリンクの例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks"
           alt="$Platform$ Spreadsheet ハイパーリンクの例"
           github-src="excel/spreadsheet/hyperlinks">
</code-view>

<div class="divider--half"></div>

## ハイパーリンク概要

ハイパーリンクを配置するワークシートの `Hyperlinks` コレクションにアクセスすると、ハイパーリンクが表計算、`Spreadsheet` コントロールに追加されます。このコレクションには、`WorksheetHyperlink` オブジェクトを受け取る `Add` メソッドがあり、セル アドレス、移動先のハイパーリンク URL、表示テキスト、およびオプションでホバー時に表示するツールチップを定義できます。

## 依存関係

ハイパーリンクを使用するように $Platform$ スプレッドシート コントロールを設定するときは、`WorksheetHyperlink` クラスをインポートする必要があります。

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

以下のコード スニペットは、$Platform$ `Spreadsheet` コントロールで現在表示されているワークシートにハイパーリンクを追加する方法を示しています。

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```