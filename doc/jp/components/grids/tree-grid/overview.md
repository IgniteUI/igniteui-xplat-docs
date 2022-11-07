---
title: {Platform} ツリー グリッド | 最速の {Platform} ツリー テーブル | インフラジスティックス
_description: {ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。わずかなコーディングでデータをすばやくバインドできます。無料でお試しください。
_keywords: angular data grid, igniteui for angular, infragistics, angular データ グリッド, インフラジスティックス
_language: ja
---

# {Platform} ツリー グリッドの概要と構成

{ProductName} ツリー グリッドは、階層データまたはフラット データを簡単に表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。マテリアル テーブルをベースとした UI ツリー グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。

## {Platform} Tree Grid Example

In this example, you can see how users can manipulate hierarchical or flat data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv, and cell templating that uses our Sparkline component.  

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{TreeGridSample}-overview"
           alt="grid example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for {Platform} Tree Grid

### Dependencies

To get started with the {Platform} tree grid, first you need to install the Ignite UI for {Platform} package.

<!-- Blazor -->

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](..\general-getting-started.md)
- [Adding Nuget Package](..\general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the tree grid:

```html
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls
</pre>

<!-- end: Blazor -->

### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTreeGridModule));
```

### Usage

Now that we have the tree grid package imported, let’s get started with the basic configuration and bind to local data:

The tree grid shares a lot of features with the grid, but it also adds the ability to display its data hierarchically.
In order to achieve this, the tree grid provides us with a couple of ways to define the relations among our data objects - by using a child collection for every data object or by using primary and foreign keys for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- `GridCell` - Ordinary cell that contains a value.
- `GridCell` - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the `level` property of its inner `treeRow`.

> [!NOTE]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the `expansionDepth` property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection
When we are using the **child collection** option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in our tree grid will have a direct reference to any of its children. In this case the `data` property of our tree grid that contains the original data source will be a hierarchically defined collection.

In order for the tree grid to build the hierarchy, we will have to set its `childDataKey` property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we will disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

We will now enable the row selection and paging features of the tree grid by using the `rowSelection` and the `paging` properties.
We will also enable the summaries feature on the first column and the filtering, sorting, editing, moving and resizing features for each of our columns.

Finally, we will enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the `GridToolbarComponent`, `GridToolbarHidingComponent`, `GridToolbarPinningComponent` and `GridToolbarExporterComponent` respectively.

### Primary and Foreign keys
When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the `data` property of our tree grid that contains the original data source will be a flat collection.
