---
title: {Platform} Grid の選択ベースのデータ集計 - Ignite UI for {Platform}
_description: Ignite UI を使用して選択したデータをグリッドに集計する方法を説明します。次のプロジェクトのために仮想化データと豊富な API でコンテンツを即時に集計します。
_keywords: Data aggregation, selection, {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics {Platform}, infragistics, データ集計, 選択, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
_language: ja
---

# {Platform} Grid の選択ベースのデータ集計

以下のサンプルでは、グリッドのフッターで選択した値に基づいて、カスタム集計関数と共に集計を表示する際の複数選択の動作を確認できます。

## トピックの概要

選択に基づいた集計機能を実現するには、`グリッド選択`機能と`グリッド集計`を使用できます。
集計では、列のデータ タイプとニーズに応じて、`SummaryOperand`、`NumberSummaryOperand`.html、`DateSummaryOperand` のいずれかの基本クラスを拡張することにより、基本的な集計機能をカスタマイズできます。

## 選択
選択したグリッド範囲のデータの操作を開始するには、グリッド選択の変更を通知するイベントにサブスクライブする必要があります。これは、`selected` イベントと `rangeSelected` イベントにサブスクライブすることで実行できます。選択機能では、単一のセル選択とセル範囲の選択が区別されるため、両方にバインドする必要があります。

イベント サブスクリプション ロジックでは、グリッド `getSelectedData`.html#getSelectedData) 関数を使用して選択したデータを抽出し、選択したデータをカスタム集計オペランドに渡すことができます。


## 集計
カスタム集計クラス内では、グリッドのデータ タイプを差別化する必要があります。たとえば、以下のシナリオでは、4 つの異なる列があり、それぞれのデータ タイプがカスタム集計に適しています。それらは、Unit Price、Units in Stock、Discontinued status、Order Date です。
`SummaryOperand` の派生クラスの `operate` メソッドでデータを処理します。データ タイプに基づいて、さまざまなカテゴリにデータを入れていきます。

```typescript
const numberData = data.filter(rec => typeof rec === "number");
const boolData = data.filter(rec => typeof rec === "boolean");
const dates = data.filter(rec => isDate(rec));
```

> [!NOTE]
> `isDate` はカスタム関数であることに注意してください。

データ タイプをグループ化した後、集計を開始できます。そのため、`NumberSummaryOperand` および `DateSummaryOperand` の既に公開されているメソッドを使用できます。
その後、集計データを同じ配列に配置する必要があり、テンプレートに返されます。
データを可視化には、`<-grid-footer>`を使用することができ、`custom-summaries` クラスと組み合わせて集計を表示します。

<!-- Angular -->

### デモ
選択を変更して、現在選択されている範囲の概要を表示します。

<!-- NOTE this sample is differed -->

<code-view style="height: 560px;"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{GridSample}-data-summary-custom-selection" >
</code-view>

<!-- end: Angular -->

## API リファレンス

* `GridComponent`
* `GridCell`

## その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [選択サービス]({environment:{Platform}ApiUrl}/classes/gridselectionservice.html)
* [行の選択](row-selection.md)
* [セルの選択](cell-selection.md)
* [NumberSummaryOperand]({environment:{Platform}ApiUrl}/classes/numbersummaryoperand.html)
* [DateSummaryOperand]({environment:{Platform}ApiUrl}/classes/datesummaryoperand.html)
* [集計](summaries.md)
* [ページング](paging.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})