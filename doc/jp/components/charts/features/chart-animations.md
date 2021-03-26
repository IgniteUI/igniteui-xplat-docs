---
title: $PlatformShort$ チャート アニメーション | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート アニメーション
_keywords: $PlatformShort$ Charts, Animations, Infragistics, $PlatformShort$ チャート, アニメーション, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ チャート アニメーション

アニメーションを使用すると、新しいデータ ソースを読み込むときにシリーズをイーズインできます。利用可能なアニメーションは、シリーズのタイプに基づきます。たとえば、縦棒シリーズは  x 軸から上昇する描画アニメーションになります。折れ線シリーズは y 軸の原点から描画するアニメーションになります。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-animations"
           alt="$PlatformShort$ 構成オプションの例"
           github-src="charts/category-chart/line-chart-with-animations">
</code-view>

<div class="divider--half"></div>

## アニメーション設定

| メンバー | 説明 |
| ------------------|---------------------|
|`IsTransitionInEnabled`| デフォルトでは、アニメーションのトランジションは無効になっていますが、このプロパティを設定することで有効にできます。|
| `TransitionInDuration` | トランジションにかかる時間をミリ秒単位で指定します。|
|`TransitionInMode` | 目的のトランジション タイプを設定します。プロパティを `Auto` (デフォルト値) に設定し、シリーズ タイプに基づいてトランジション タイプを自動的に選択することもできます。追加のモードは、複数方向のアコーディオンまたはスイープ効果で構成されます。|

以下のコード例では、トランジションイン アニメーションを有効にし、チャートを右側からアコーディオン表示する方法を示します。

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    IsTransitionInEnabled="true"
    TransitionInDuration="1000"
    TransitionInMode="CategoryTransitionInMode.AccordionFromRight"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="1000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    isTransitionInEnabled={true}
    transitionInDuration={1000}
    transitionInMode="AccordionFromRight" />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    is-transition-in-enabled="true"
    transition-in-duration="1000"
    transition-in-mode="AccordionFromRight">
</igc-category-chart>
```