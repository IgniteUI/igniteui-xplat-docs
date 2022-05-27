---
title: $Platform$ データ グリッド | リアルタイム データ グリッドとテーブル | ローカリゼーション | インフラジスティックス
_description: ローカリゼーションをサポートするインフラジスティックスの $ProductName$ データ テーブルとグリッドを試しましょう。$ProductName$ テーブルのチュートリアルをご覧ください。
_keywords: $Platform$ テーブル、データ グリッド、セル アクセシビリティ、$ProductName$、インフラジスティック
mentionedTypes: ['Grid']
namespace: Infragistics.Controls
_language: ja
---

# $Platform$ グリッドのローカリゼーション

$ProductName$ データ テーブル / データ グリッドは、列オプションのポップアップと要約に固有のリソース文字列のローカライズをサポートします。これは、データの翻訳に使用することを意図したものではないことに注意してください。

<!-- Blazor -->
データ グリッドには、列オプションに関連付けられた文字列を割り当てるための `SetCustomizedStringAsync` が含まれています。グリッドの `ActualDataSource` プロパティには、集計に必要なリソース文字列を割り当てるためのこのメソッドもあります。
<!-- end: Blazor -->

## $Platform$ グリッド ローカリゼーションの例

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-localization"
           alt="$Platform$ グリッド ローカリゼーションの例"
           github-src="grids/data-grid/localization">
</code-view>

<div class="divider--half"></div>