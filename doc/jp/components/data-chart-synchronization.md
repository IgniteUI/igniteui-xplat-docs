---
title: $PlatformShort$ データ チャート | データ可視化ツール | 同期化 | インフラジスティックス
_description: ズーム操作、パン操作および十字線イベントを含む複数のインフラジスティックスの $PlatformShort$ チャート コントロール間で同期します。$ProductName$のグラフ同期機能について説明します。
_keywords: $PlatformShort$ charts, data chart, synchronization, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 同期化, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ 同期

$ProductName$ データ チャート コンポーネントは、複数のチャート間のズーム、パン、および十字線イベントの調整に関して同期をとることができます。これは、データソースが軸に関して似ているか同じであると仮定して、複数のチャートの同じ領域を可視化するのに役立ちます。

## $PlatformShort$ 同期の例


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization" 
           alt="$PlatformShort$ 同期の例" 
           github-src="charts/data-chart/chart-synchronization">
</code-view>

<div class="divider--half"></div>

チャートの同期にはデフォルトで 4 つのオプションがあり、水平方向のみ、垂直方向のみ、その両方を同期、あるいは同期なしを選択することもできます。

チャートのセットを同期する場合は、それらに `SyncChannel` プロパティに同じ名前を割り当ててから、`SynchronizeHorizontally` と `SynchronizeVertically` プロパティを対応するブール値に設定して、チャートを水平または垂直に同期するかどうかを指定できます。

垂直または水平に同期するには、`IsHorizontalZoomEnabled` または `IsVerticalZoomEnabled` プロパティをそれぞれ `true` に設定する必要があります。他のチャートに依存している同期チャートは、このプロパティ設定に関係なく、ズームできます。

## コード スニペット

以下のコード スニペットは、$ProductName$ データ チャートのチャート コントロールのペアを同期する方法を示しています。

```razor
<DataChart Height="600px" 
    Width="100%"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">

</DataChart>

<DataChart Height="600px" 
    Width="100%"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">

</DataChart>
```

```html
<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>

<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>
```

```tsx
<IgrDataChart width="600px"
    height="400px"
    dataSource={this.data}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />


<IgrDataChart width="600px"
    height="400px"
    dataSource={this.data}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />
```

```html
<igc-data-chart id="chart1"
    width="600px"
    height="400px"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>

<igc-data-chart id="chart2"
    width="600px"
    height="400px"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>
```

