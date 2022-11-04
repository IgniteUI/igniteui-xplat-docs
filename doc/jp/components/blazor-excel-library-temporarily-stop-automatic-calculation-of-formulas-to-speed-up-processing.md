---
title: $Platform$ Excel ライブラリ | 数式の自動計算を一時的に停止して処理速度を上げる | インフラジスティックス
_description: Infragistics Blazor Excel ライブラリ – 数式の自動計算を一時的に停止して処理速度を上げる
_keywords: $Platform$ excel ライブラリ, 計算, 処理の高速化, $ProductName$, インフラジスティックス
_language: ja
mentionedTypes: []
---

# Blazor Excel ライブラリ – 数式の自動計算を一時的に停止して処理速度を上げる

Excel シートを、[Blazor Excel ライブラリ](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/excel-library)で読み込み、そのセルの値を参照したり書き換えたりする際、とくにその Excel シートが数式を含むセルを大量に持っていると、セルの値の参照・書き換えにかなりの時間がかかる場合があります。この現象は (Blazor Server プログラムに比べ) [Blazor WebAssembly](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/general-getting-started-blazor-client) プログラム上ではとくに顕著です。

このような場合に処理時間を改善する方法のひとつとして、数式の自動計算を一時的に停止する、という方法があります。

このトピックではその具体的な方法を解説し、以下の疑問に答えます。

* Ignite UI の Blazor Excel ライブラリ とは
* Ignite UI の Blazor ワークブックとは
* Blazor Excel ライブラリ での処理の高速化

## Ignite UI の Blazor Excel ライブラリ とは

Infragistics Blazor Excel ライブラリは、Microsoft® Excel® と同様に、表計算データを高速かつ簡単に操作できる文書処理ライブラリです。Workbook、Worksheet、Cell、Formula などのおなじみの表計算オブジェクトが付属しています。

Blazor の Excel ライブラリを使用するには、まず以下の @using ステートメントを追加する必要があります。

```razor
@using Infragistics.Documents.Excel
```

WebAssembly (WASM) Blazor プロジェクトを使用している場合、さらにいくつかのステップがあります。

まず wwwroot/index.html ファイルに以下のスクリプトへの参照を追加します。

```razor
<script src="_content/IgniteUI.Blazor.Documents.Excel/excel.js"></script>
```

および、アプリケーションの初期化時に、Workbook クラスの InProcessRuntime 静的プロパティに、IJSInProcessRuntime オブジェクトを設定します。以下にコード例を示します。

```razor
@using Microsoft.JSInterop

@code {
    [Inject]
    public IJSRuntime Runtime { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        Workbook.InProcessRuntime = (IJSInProcessRuntime)this.Runtime;
    }
}
```

## Ignite UI の Blazor ワークブックとは

[Ignite UI の Blazor ワークブック](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/excel-library-using-workbooks)は、複数のワークシートを簡単に集約できるように設計されており、最も効率的な方法で、データの取得、保存、整理、管理、編集、加工を行うことが可能です。Blazor ワークブックは、ゼロから新規に作成することも、作成済みの既存のドキュメントをインポートすることもできます。

以下では、新規にワークブックを作成し、そのタイトルとステータスのドキュメント プロパティを設定する方法を示しています。

```razor
var workbook = new Workbook();
workbook.DocumentProperties.Title = "Expense Report";
workbook.DocumentProperties.Status = "Complete";
```

Infragistics Blazor Excel Engine を使用することで、以下が可能になります。

* Microsoft® Excel® へのデータ保存と読み込み。
* ワークシートのコレクションの作成。
* Blazor アプリケーションから Excel へのエクスポート・アプリケーションへのインポート。
* 既定のスタイルの変更、ワークブックのスタイル コレクションへの新しいフォントの追加。
* ドキュメントの整理と追跡に有用な情報を提供するワークブック・プロパティの設定。 利用可能なプロパティは次のとおりです: 著者、タイトル、件名、キーワード、カテゴリ、ステータス、コメント、会社、および管理者。
* ワークブックの保護機能の設定。保護機能を使うことで、ワークブックの構造を保護することができます。

## Blazor Excel ライブラリ での処理の高速化

すでに述べたように、数式を含むセルを大量に扱う場合、処理時間を改善する方法のひとつとして、数式の自動計算を一時的に停止する方法があります。式の自動計算を一時的に停止している間にセルの値の参照・書き換えを行ない、ひととおり処理が完了してから、数式の自動計算を再開します。数式の自動計算はいつでも好きなタイミングで再開できます。

数式の自動計算が一時停止されている間は、セルの値を参照・書き換えても、都度毎回の数式の再計算が実行されなくなることで、処理時間を改善することができます。

具体的には、Workbook オブジェクトの SuspendCalculations() メソッドと ResumeCalculations() メソッドをそれぞれ呼び出します (下記コード例)。

```razor
@using Infragistics.Documents.Excel
...
var workbook = Workbook.Load(...);

// 👇 SuspendCalculations() を呼び出すと、これ以降、数式の自動計算が止る
workbook.SuspendCalculations();

// ... ここで、この Workbook に含まれるセルの読み書きなどを行なう ...

// 👇 ResumeCalculations() を呼び出すと、数式の自動計算が再開する
workbook.ResumeCalculations();
```

但し、数式の自動計算を一時的に停止する方法では、処理速度を向上させることができない基本的なケースが 2 つあります。

1. この方法は、数式の自動計算を一時的に停止させるものです。そのため、ビジネスロジックが数式の自動計算に依存している場合、この方法を利用できないことが想定されます。また、セルに未更新の値が格納される可能性があります。

2. 処理時間が長くなる原因が数式の自動計算にない場合、この回避策による処理速度の向上は期待できません。

その他に、.NET 6 以降の [Blazor WebAssembly](https://blogs.jp.infragistics.com/entry/Blazor-Server-vs-Blazor-WebAssembly-Just-the-Facts) プログラムにおいては、「AOT コンパイル」を有効にすることにより、特に計算が中心となる処理 (Excel シートの処理のような) については処理速度の改善が見込まれます。但し AOT コンパイルには以下のようなデメリットもあります。

* 発行処理に長い時間がかかる
* 出力されるアプリケーションコンテンツサイズが大きくなる

## まとめ

Excel ファイルの処理には、下記項目の状況によっては、かなりの時間がかかる場合があります。

* 内容
* 処理するデータの規模
* セル数

この記事では、Ignite UI の Blazor Excel ライブラリおよびワークブックを使用する際に、ドキュメントやデータの処理速度を向上させる、その容易に適用できる技法に焦点を置き、そのひとつとして数式の自動式計算を一時停止する方法を紹介しました。

しかし、他にも試せる技法がいくつかあります。

* AOT (Ahead-Of-Time) コンパイルを使用する。
* サーバーサイドで実行する。

具体的な手順は、以前のブログ記事「Blazor WebAssemblyでExcelファイルを読み書きしてサーバーの負荷を軽減する方法」を参照してください。

## Ignite UI for Blazor について

[Ignite UI for Blazor](https://jp.infragistics.com/products/ignite-ui-blazor) には、[Blazor ドック マネージャー](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/dock-manager)、超高速・軽量の [Blazor データグリッド](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/grids/grids)、60 以上の高性能チャート - [株価チャート](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/charts/types/stock-chart)、[円チャート](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/charts/types/pie-chart)、その他多数 - [マップ](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/geo-map)、[Blazor 複数列コンボボックス](https://jp.infragistics.com/products/ignite-ui-blazor/blazor/components/editors/multi-column-combobox)、などといった、Blazor Server と Blazor WebAssembly および .NET 6 を完全にサポートするプロフェッショナルレベルの Blazor コンポーネントが搭載されています。

最新の [Ultimate 22.1 リリース](https://blogs.jp.infragistics.com/entry/ignite-ui-for-blazor---what-s-new-in-22-1)では、更新された [ローコード/ノーコードツール App Builder™](https://jp.infragistics.com/products/appbuilder) を通じて提供される最新のコード生成、Blazor グリッドのページネーション、Blazor データ可視化、ツールチップ、その他の素晴らしい機能とコントロールを利用することができます。
