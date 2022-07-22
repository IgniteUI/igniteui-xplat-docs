---
title: $Platform$ Excel ライブラリ | ワークブックの使用 | インフラジスティックス
_description: インフラジスティックスの $Platform$ Excel ライブラリを使用してワークブックおよびワークシートを作成し、データを入力して日付を Microsoft®Excel にエクスポートします。詳細については、$ProductName$ Excel のチュートリアルを参照してください。
_keywords: Excel library, workbooks, $ProductName$, Infragistics, Excel ライブラリ, ワークブック, インフラジスティックス
mentionedTypes: ['Workbook']
_language: ja
---
# $Platform$ ワークブックの使用

Infragistics $Platform$ Excel Engine は、データを Microsoft® Excel® に保存、また Microsoft® Excel® からの読み込みを可能にします。ライブラリのさまざまなクラスを使用してワークブックやワークシートを作成、データを入力、データを Excel にエクスポートできます。Infragistics $Platform$ Excel Engine は、Excel スプレッドシートでアプリケーションのデータの表示や Excel からアプリケーションへのデータのインポートが簡単にできます。

## $Platform$ ワークブックの使用の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library-operations-on-workbooks"
           alt="$Platform$ ワークブックの使用の例"
           github-src="excel/excel-library/operations-on-workbooks">
</code-view>

<div class="divider--half"></div>

## 既定のフォントを変更

`IWorkbookFont` の新しいインスタンスを作成します。`Workbook` の `Styles` コレクションに新しいフォントを追加します。このスタイルにはワークブックのすべてのセルのデフォルトのプロパティが含まれています。ただし、行、列またはセルで指定されている場合はその限りではありません。スタイルのプロパティを変更すると、ワークブックのデフォルトのセル書式プロパティが変更します。

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

```razor
var workbook = new Workbook();
var font = workbook.Styles.NormalStyle.StyleFormat.Font;
font.Name = "Times New Roman";
font.Height = 16 * 20;
```

## ワークブック プロパティの設定

Microsoft Excel® ドキュメント プロパティは、ドキュメントの整理やトラッキングを改善するための情報を提供します。`Workbook` オブジェクトの `DocumentProperties` プロパティを使用してこれらのプロパティを設定するために、Infragistics $Platform$ Excel Engine を使用できます。使用可能なプロパティは以下のとおりです。

- `Author`

- `Title`

- `Subject`

- `Keywords`

- `Category`

- `Status`

- `Comments`

- `Company`

- `Manager`

以下のコードは、ブックを作成し、`title` および `status` ドキュメント プロパティを設定する方法を示します。

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

```razor
var workbook = new Workbook();
workbook.DocumentProperties.Title = "Expense Report";
workbook.DocumentProperties.Status = "Complete";
```

## ブックの保護

ブック保護機能は、ブックの構造を保護できます。つまり、ユーザーがそのブック内のワークシートを追加、名前変更、削除、非表示、およびソートができます。

Infragistics Excel Engine のオブジェクト モデルから保護が強制されることはありません。これらの保護設定を履行し、対応する操作の実行をユーザーに許可または制限することは、このオブジェクト モデルを表示する UI の役割です。

保護は、`protect` メソッドを呼び出すことによってブックに適用されます。

`Workbook` がパスワードを使用せずに保護される場合、エンドユーザーは Excel で `Workbook` の保護をパスワードを入力せずに解除できます。`Workbook` の保護をコードで解除するには、`unprotect` メソッドを使用できます。

`Workbook` が保護される場合、この `Workbook` の `protection` プロパティの `WorkbookProtection` インスタンスのプロパティの値は無効な操作を示します。

`IsProtected` が既に true の場合、`protect` メソッドは無視されます。

```ts
var workbook = new Workbook();
workbook.protect(false, false);
```

```razor
var workbook = new Workbook();
workbook.Protect(false, false);
```

ブックが保護されているかどうかの確認この読み取り専用プロパティは、ワークブックに Protect メソッドのオーバーロードを使用して設定された保護がある場合、true を返します。

```ts
var workbook = new Workbook();
var protect = workbook.isProtected;
```

```razor
var workbook = new Workbook();
var protect = workbook.IsProtected;
```

この読み取り専用プロパティは、保護の各設定を個別に取得するためにプロパティを含む WorkbookProtection 型のオブジェクトを返します。

```ts
var workbook = new Workbook();
var protection = workbook.protection;
```

```razor
var workbook = new Workbook();
var protect = workbook.Protection;
```

## API メンバー

 - `DocumentProperties`
 - `WorkbookProtection`
 - `Workbook`
 - `Workbook`