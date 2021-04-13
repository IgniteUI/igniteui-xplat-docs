---
title: $PlatformShort$ チャート アニメーション | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート アニメーション
_keywords: $PlatformShort$ Charts, Animations, Infragistics, $PlatformShort$ チャート, アニメーション, インフラジスティックス
mentionedTypes: ["XamCategoryChart"]
_language: ja
---

# $PlatformShort$ チャート アニメーション

アニメーションを使用すると、新しいデータ ソースを読み込むときにシリーズをイーズインできます。利用可能なアニメーションは、シリーズのタイプに基づきます。たとえば、縦棒シリーズは x 軸から上昇する描画アニメーションになります。折れ線シリーズは y 軸の原点から描画するアニメーションになります。

アニメーションは $ProductName$ チャート コンポーネントで無効ですが、`IsTransitionInEnabled` プロパティを true に設定することで有効にできます。そこから、`TransitionInDuration` プロパティを設定してアニメーションが完了するまでの時間を決定し、`TransitionInMode` でアニメーションのタイプを決定できます。

## $PlatformShort$ チャート アニメーションの例

以下の例は、アニメーションをデフォルトの `TransitionInMode` ("Auto") に設定した[折れ線チャート](../types/line-chart.md)を示しています。この例の一番上のドロップダウンとスライダーは、`TransitionInMode` と `TransitionInDuration` をそれぞれ変更できるため、サポートされるさまざまなアニメーションが異なる速度でどのように見えるかを確認できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-animations"
           alt="$PlatformShort$構成オプションの例"
           github-src="charts/category-chart/line-chart-with-animations">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャート強調表示](chart-highlighting.md)
- [チャート ツールチップ](chart-tooltips.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamCategoryChart`
- `IsTransitionInEnabled`
- `TransitionInDuration`
- `TransitionInMode`