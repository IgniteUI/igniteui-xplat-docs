---
title: $PlatformShort$ データ チャート | データ可視化ツール | タイトルとサブタイトル | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートのタイトルとサブタイトルを使用して、上部セクションに情報を追加します。$ProductName$ グラフのタイトルとサブタイトル機能をお試しください!
_keywords: $PlatformShort$ charts, data chart, chart title, chart subtitle, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, チャート サブタイトル, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ タイトルとサブタイトル

$PlatformShort$ データ チャート コンポーネントの `Title` と `Subtitle` の機能は、チャート コントロールの一番上のセクションに情報を追加できます。チャートにタイトルまたはサブタイトルを追加すると、チャートの内容は自動的にサイズ変更され、指定したタイトルとサブタイトルの情報が表示されます。

## $PlatformShort$ タイトルとサブタイトル例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-chart-titles-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-chart-titles-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/chart-titles"></sample-button>

</div>

<div class="divider--half"></div>

チャートのタイトルと字幕のテキストの色、スタイル、および余白をスタイルするためのプロパティが用意されています。以下のコード スニペットは、チャートのタイトルを設定およびカスタマイズする方法を示しています。

```razor
<DataChart Height="600px" 
    Width="100%"ChartTitle="Energy Use Per Country"
    Subtitle="Results over a two year period"
    TitleTextColor="Red"
    TitleTextStyle="24pt Verdana"
    SubtitleTextColor="Red"
    SubtitleTextStyle="16pt Verdana" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    height="600px"
    width="100%"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana">
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="600px"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana"/>
```

```html
<igc-data-chart id="chart"
    height="600px"
    width="100%"
    chart-title="Energy Use Per Country"
    subtitle="Results over a two year period"
    title-text-color="Red"
    title-text-style="24pt Verdana"
    subtitle-text-color="Red"
    subtitle-text-style="16pt Verdana">
</igc-data-chart>
```