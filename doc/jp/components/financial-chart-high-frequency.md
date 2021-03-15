---
title: $PlatformShort$ ファイナンシャル チャート | リアルタイム データ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ファイナンシャル チャート コントロールを使用して数百万のデータ ポイントを高速に描画します。$ProductName$ チャートの高いパフォーマンスを是非お試しください。
_keywords: $PlatformShort$ charts, financial chart, stock chart, data binding, $ProductName$, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, 株価チャート, データ バインディング, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---
# $PlatformShort$ リアルタイム データにバインド

$PlatformShort$ Financial Chart コンポーネントはリアルタイムでデータの描画をすばやく処理できるコントロールです。以下のサンプルでは、Financial Chart のデータが高頻度で更新されています。

## $PlatformShort$ リアルタイム データ バインドの例


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency" 
           alt="$PlatformShort$ リアルタイム データ バインドの例" 
           github-src="charts/financial-chart/high-frequency">
</code-view>

<div class="divider--half"></div>


## コード例

高頻度でデータを更新する $PlatformShort$ Financial Chart コンポーネントを作成するには、データ ソースの最初のデータ項目を削除し、新しいデータ項目をデータの最後に追加します。また、チャートに変更について通知するために `NotifyRemoveItem` および `NotifyInsertItem` 関数を呼び出します。バインドしたデータの変更をチャートに通知する方法の詳細については、ファイナンシャル チャートの `notify*` メソッドを参照してください。

<!-- Blazor -->
データソースを ObservableCollection または INotifyCollectionChanged を実装する別のコレクションにバインドする場合、項目を追加または削除するときに `NotifyRemoveItem` または `NotifyInsertItem` を呼び出す必要はありません。
<!-- end: Blazor -->

以下の例は、高頻度のデータ更新について Financial Chart を通知する方法を紹介します。
```

```ts
private tick(): void {
    const newVal = this.getValue();
    const oldVal = this.data[0];

    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);

    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);
}
```

```razor
var oldItem = this.DataSource[0];
var newItem = this.GetNewItem();

this.DataSource.Add(newItem.FirstOrDefault());
this.Chart.NotifyInsertItem(this.DataSource, this.DataSource.Count - 1, newItem);

this.DataSource.RemoveAt(0);
this.Chart.NotifyRemoveItem(this.DataSource, 0, oldItem);
```

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

* [チャートのパフォーマンス](financial-chart-performance.md)
* [大量のデータのバインド](financial-chart-high-volume.md)
* [複数データ ソースへのバインド](financial-chart-multiple-data.md)
