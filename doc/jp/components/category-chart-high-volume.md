---
title: $PlatformShort$ チャートおよびグラフ | データ可視化ツール | 大量データ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールのパフォーマンスを最適化する方法を学びます。$ProductName$ グラフのパフォーマンスを改善します!
_keywords: $PlatformShort$ charts, category chart, performance, $ProductName$, Infragistics, data binding, $PlatformShort$ チャート, カテゴリ チャート, パフォーマンス, インフラジスティックス、データ バインディング
mentionedTypes: ['CategoryChart']
_language: ja
---
# $PlatformShort$ 大規模データ

$ProductName$ カテゴリ チャート コンポネントは、以下のサンプルに示すように、数百万に及ぶデータ ポイントを含む大量のデータを高速で処理できます。

## $PlatformShort$ 大規模データの例

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-volume" 
           alt="$PlatformShort$ 大規模データの例" 
           github-src="charts/category-chart/high-volume">
</code-view>

<div class="divider--half"></div>

## パフォーマンスの最適化

チャートのパフォーマンスに影響を及ぼすチャート機能および $PlatformShort$ 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

> [!NOTE]
> For Angular:
> コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。$PlatformShort$ の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。

* チャートに $PlatformShort$ が自動でデータ変更を通知する代わりに、バインドされたデータが変更された方法をコンポーネントに通知できます。
     * デルタ通知の処理は、$PlatformShort$ が変更検出を実行する際に 100 万のレコードを含む配列のすべての変更を比較するより効果的に実行できます。
     * バインドしたデータの変更をチャートに通知する方法の詳細については、チャートの `notify*` メソッドを参照してください。
* $PlatformShort$ がデバッグ モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合、 `--prod` を使用して serve または build してください。

> 注: アプリケーションでパフォーマンス上の問題が発生した場合、デバッグ ビルドではなくプロダクション ビルドで実行するとチャートのパフォーマンスが改善されます。これらのケースでは必ずプロダクション ビルドを実行してください。
