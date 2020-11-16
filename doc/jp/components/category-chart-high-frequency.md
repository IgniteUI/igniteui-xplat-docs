---
title: $PlatformShort$ チャートおよびグラフ | データ可視化ツール | リアルタイム データ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して数百万のデータ ポイントを超高速でレンダリングします。$ProductName$ グラフの高パフォーマンスをお試しください!
_keywords: $PlatformShort$ charts, category chart, performance, $ProductName$, Infragistics, data binding, $PlatformShort$ チャート, カテゴリ チャート, パフォーマンス, インフラジスティックス、データ バインディング
mentionedTypes: ['CategoryChart']
_language: ja
---
# $PlatformShort$ リアルタイムのデータ

$ProductName$ カテゴリ チャート コンポネントは、以下のサンプルのように数百万に及ぶデータ ポイントを含む大量のデータを処理し、数ミリ秒ごとに更新できます。

## サンプル
<div class="sample-container loading" style="height: 500px;">
    <iframe id="category-chart-high-frequency-iframe" align="center" src='{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency' height="100%" width="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/category-chart/high-frequency"></sample-button>

</div>

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
