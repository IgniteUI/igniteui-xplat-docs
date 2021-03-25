---
title: $PlatformShort$  $PlatformShort$ データ チャート | データ可視化ツール | 同期化 | インフラジスティックス
_description: ズーム操作、パン操作および十字線イベントを含む複数のインフラジスティックスの $PlatformShort$ チャート コントロール間で同期します。$Product Name$のグラフ同期機能について説明します。
_keywords: $PlatformShort$ charts, data chart, synchronization, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 同期化, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ チャートの同期化

$ ProductName$ データ チャートを使用すると、複数のチャート間のズーム、パン、および十字線イベントの調整に関して同期をとることができます。これは、データソースが軸に関して似ているか同じであると仮定して、複数のチャートの同じ領域を視覚化するのに役立ちます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization"
           alt="$PlatformShort$ チャートの同期化の例"
           github-src="charts/data-chart/chart-synchronization">
</code-view>

<div class="divider--half"></div>

## モジュールの要件

データチャートで同期を使用するする場合、インポートしてからインタラクティブ モードを登録します。以下のコードを使用できます:

```razor
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

```ts
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
IgrDataChartInteractivityModule.register();
```

```ts
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
IgcDataChartInteractivityModule.register();
```

チャートの同期にはデフォルトで 4 つのオプションがあり、水平方向のみ、垂直方向のみ、その両方を同期、あるいは同期なしを選択することもできます。

チャートのセットを同期する場合は、それらに `SyncChannel` プロパティに同じ名前を割り当ててから、`SynchronizeHorizontally` と `SynchronizeVertically` プロパティを対応するブール値に設定して、チャートを水平または垂直に同期するかどうかを指定できます。

垂直または水平に同期するには、`IsHorizontalZoomEnabled` または `IsVerticalZoomEnabled` プロパティをそれぞれ `true` に設定する必要があります。他のチャートに依存している同期チャートは、このプロパティ設定に関係なく、ズームできます。

## コード スニペット

次のコードスニペットは、$ProductName$ データチャートのチャート コントロールのペアを同期する方法を示しています:

```razor
<DataChart Width="600px" Height="400px" @ref="Chart1"
    DataSource="DataSource1"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">
</DataChart>

<DataChart Width="600px" Height="400px" @ref="Chart2"
    DataSource="DataSource2"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">
</DataChart>
```

```html
<igx-data-chart width="600px" height="400px" #chart1
    [dataSource]="DataSource1"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>

<igx-data-chart width="600px" height="400px" #chart2
    [dataSource]="DataSource2"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>
```

```tsx
<IgrDataChart width="600px" height="400px" ref={this.chart1}
    dataSource={this.state.dataSource1}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />

<IgrDataChart width="600px" height="400px" ref={this.chart2}
    dataSource={this.state.dataSource2}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />
```

```html
<igc-data-chart width="600px" height="400px" id="chart1"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>

<igc-data-chart width="600px" height="400px" id="chart2"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>
```


## API メンバー
- `IsHorizontalZoomEnabled`
- `IsVerticalZoomEnabled`
- `SyncChannel`
- `SynchronizeHorizontally`
- `SynchronizeVertically`
- `XamDataChart`
