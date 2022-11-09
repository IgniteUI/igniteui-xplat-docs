---
title: {Platform} ツリー グリッド | 最速の {Platform} ツリー テーブル | インフラジスティックス
_description: {ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。わずかなコーディングでデータをすばやくバインドできます。無料でお試しください。
_keywords: angular data grid, igniteui for angular, infragistics, angular データ グリッド, インフラジスティックス
_language: ja
---

# {Platform} ツリー グリッドの概要と構成

{ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。マテリアル テーブルをベースとした UI ツリー グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。

## {Platform} ツリー グリッドの例

この例では、ユーザーが階層データまたはフラット データを操作する方法を確認できます。フィルタリングとソートのオプション、ピン固定と非表示、行の選択、Excel と csv へのエクスポート、スパークライン コンポーネントを使用したセル テンプレートが含まれています。 

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{TreeGridSample}-overview"
           alt="グリッドの例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for {Platform} Tree Grid で作業を開始

### 依存関係

{Platform} ツリー グリッドを初期化するには、Ignite UI for {Platform} パッケージをインストールする必要があります。

<!-- Blazor -->

IgniteUI.Blazor パッケージの追加については、以下のトピックを参照してください。

- [作業の開始](..\general-getting-started.md)
- [NuGet パッケージの追加](..\general-nuget-feed.md)

また、ツリー グリッドに必要なスタイルを提供するために、アプリケーションの index.html ファイルに次の CSS リンクを含める必要があります:

```html
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

以下の名前空間を追加してコントロールの実装を開始できます。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls
</pre>

<!-- end: Blazor -->

### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTreeGridModule));
```

### 使用方法

ツリー グリッド パッケージをインポートしたので、基本的な構成と、ローカル データへのバインドから始めていきましょう。

ツリー グリッドはグリッドと多くの機能を共有していますが、データを階層的に表示する機能も追加されています。
ツリー グリッドは、各データ オブジェクトの子コレクションまたは各データ オブジェクトにプライマリキーまたは外部キーを使用してデータ オブジェクト内の関係を定義できます。

### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- `GridCell` - 値を含む標準セル。
- `GridCell` - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。行コンポーネントのレベルは、その内部の `treeRow` の `level` プロパティを通じてアクセスできます。

> [!NOTE]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

### 初期展開時の深さ

初期時のツリーグリッドは、すべてのノード レベルを展開して表示します。この動作は `expansionDepth` プロパティを使用して構成できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、**0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

### 子コレクション
**child collection** オプションを使用して各データ オブジェクトは子コレクションを含み、親データ オブジェクトとして同じタイプの項目で生成します。これによりツリー グリッドの各レコードがその子への直接の参照を持つことができます。元のデータ ソースを含むツリー グリッドの `data` プロパティが階層が定義されたコレクションになります。

ツリー グリッドで階層を構築するには、その `childDataKey` プロパティに、各データ オブジェクトで使用される子コレクションの名前を設定する必要があります。このサンプルでは **Employees** コレクションです。
更に自動列生成を無効にしてデータ オブジェクトの実際のプロパティとの一致を手動で定義します。**Employees** コレクションが階層で自動的に使用されるため、列定義に含める必要はありません。

`rowSelection` および `paging` プロパティを使用して、ツリー グリッドの行選択およびページング機能を有効にします。
最初の列に集計機能、各列にはフィルタリング、並べ替え、編集、サイズ変更機能を有効にします。

最後に、`GridToolbarComponent`、`GridToolbarHidingComponent`、`GridToolbarPinningComponent`、`GridToolbarExporterComponent` をそれぞれ使用して、列の非表示、列のピン固定、エクスポート機能、およびツリー グリッドのツールバーを有効にします。

### プライマリと外部キー
**プライマリと外部キー**オプションを使用した際に各データ オブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータ ソースを含むツリー グリッドの `data` プロパティがフラット コレクションになります。
