---
title: $PlatformShort$ データ チャート | データ可視化ツール | 軸タイプ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、数値、カテゴリ、日付時間軸などのさまざまな軸タイプを通じてデータをプロットします。$ProductName$ グラフ軸について説明します。
_keywords: $PlatformShort$ charts, data chart, axis, types, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 軸, タイプ, インフラジスティックス
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
_language: ja
---
# $PlatformShort$ 軸

$PlatformShort$ データ チャート コンポーネントの軸は、軸の主線、グリッド線、目盛り、タイトル、およびラベルの外観を指定するための基本プロパティを提供します。データ チャートがサポートするさまざまなシリーズ タイプのデータ チャート コンポーネントで使用できる複数の軸タイプがあります。シリーズのタイプは、併用できる軸タイプを決定します。

## $PlatformShort$ 軸の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 軸の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/axis-types"></sample-button>

</div>

<div class="divider--half"></div>

## サポートされる軸
$PlatformShort$ データ チャート コンポーネントは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。

軸タイプ           |サポートされるシリーズ タイプ
--------------------|-----------------------
CategoryYAxis       |[Category シリーズ ](data-chart-type-category-series.md) グループの [Bar シリーズ](data-chart-type-category-bar-series.md) のみ
CategoryXAxis       |すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([Bar シリーズ](data-chart-type-category-bar-series.md) を除く)
TimeXAxis           |すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([Bar シリーズ](data-chart-type-category-bar-series.md) を除く)
OrdinalTimeXAxis    |すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([Bar シリーズ](data-chart-type-category-bar-series.md) を除く)
PercentChangeYAxis|すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md)、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)
NumericYAxis        |すべての [Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md)
NumericXAxis        |[Category シリーズ](data-chart-type-category-series.md) グループのすべての [Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)、[Bar シリーズ](data-chart-type-category-bar-series.md)
NumericAngleAxis   |すべての [Polar シリーズ](data-chart-type-polar-series.md)
NumericRadiusAxis|すべての [Polar シリーズ](data-chart-type-polar-series.md) と [Radial シリーズ](data-chart-type-radial-series.md)
CategoryAngleAxis|すべての [Radial シリーズ](data-chart-type-radial-series.md)

## カテゴリ X 軸

`CategoryXAxis` は、データを一連のカテゴリ データ項目として扱います。この軸のラベルがシーケンスの位置に応じて、X 軸に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。このタイプの軸は、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([Bar シリーズ](data-chart-type-category-bar-series.md) を除く) と互換性があります。

以下のコードは、`CategoryXAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" 
    Width="100%">
    <CategoryXAxis Name="xAxis" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryXAxis name="xAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-x-axis id="xAxis">
    </igc-category-x-axis>
</igc-data-chart>
```

## カテゴリ Y 軸

`CategoryYAxis` は、データを一連のカテゴリ データ項目として扱います。この軸のラベルがシーケンスの位置に応じて、Y 軸に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。この軸タイプは、[Category シリーズ](data-chart-type-category-series.md) グループ内の [Bar シリーズ](data-chart-type-category-bar-series.md) とのみ互換性があります。

以下のコード スニペットは、`CategoryYAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" 
    Width="100%">
    <CategoryYAxis Name="yAxis"
        DataSource="@DataSource" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-y-axis id="yAxis">
    </igc-category-y-axis>
</igc-data-chart>
```

## カテゴリ DateTime X 軸

<!-- Angular, React, WebComponents -->
`CategoryDateTimeXAxis` 軸は、日付順にソートされた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、
この軸の `DateTimeMemberPath` プロパティを使用してマッピングされたデータ列の値に従って、X軸に沿って配置されます。また、書式設定されたラベルを表示するには、`FormatLabel` イベントを使用できます。
<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->
`CategoryDateTimeXAxis` は、日付順にソートされた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、`DateTimeMemberPath` プロパティを使用してマップされるデータ列の値に基づいて X 軸に沿って配置されます。また、書式設定されたラベルを表示するには、`LabelFormat` プロパティの `DateTimeFormatSpecifier` を使用できます。
このタイプの軸は、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([Bar シリーズ](data-chart-type-category-bar-series.md) を除く) と互換性があります。
<!-- end: Blazor -->

以下のコードは、`CategoryDateTimeXAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" 
    Width="100%">
    <CategoryDateTimeXAxis Name="xAxis"
        DateTimeMemberPath="Date"
        LabelFormat="{0}" >
            <DateTimeFormatSpecifier Locale="en-US" />
    </CategoryDateTimeXAxis>
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-date-time-x-axis name="xAxis"
        (FormatLabel)=”xAxisFormatLabel()”
        dateTimeMemberPath="Date" >
        </igx-category-date-time-x-axis>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryDateTimeXAxis name="xAxis"
        labelFormats= {this.xAxisFormatLabel}
        dateTimeMemberPath="Date" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-date-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-category-date-time-x-axis>
</igc-data-chart>
```

## 数字 X 軸

`NumericXAxis` は、データを連続的に変化する数値データ項目として扱います。この軸のラベルは X-Axis に沿ってに配置されます。ラベルの位置は、対応する値マッピング プロパティを使用してマップされたデータ列の値に基づいて変わります。このタイプの軸は、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)と [Shape シリーズ](data-chart-type-shape-series.md) のタイプと互換性があります。また、この軸は [Bar シリーズ](data-chart-type-category-bar-series.md) タイプの [Category シリーズ](data-chart-type-category-series.md) と互換性があります。ここでは、`ValueMemberPath` プロパティを使用してデータ列をマップします。

以下のコードは、`NumericXAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" 
    Width="100%">
    <NumericXAxis Name="xAxis"
        DataSource="@data"  />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrNumericXAxis name="xAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-numeric-x-axis id="xAxis">
    </igc-numeric-x-axis>
</igc-data-chart>
```

## 数字 Y 軸

`NumericYAxis` は、データを連続的に変化する数値データ項目として扱います。この軸のラベルは Y 軸に沿ってに配置されます。ラベルの位置は、対応する値マッピング プロパティを使用してマップされたデータ列の値に基づいて変わります。このタイプの軸は、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)と [Shape シリーズ](data-chart-type-shape-series.md) のタイプと互換性があります。また、このタイプの軸は、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([Bar シリーズ](data-chart-type-category-bar-series.md) を除く) タイプと互換性があります。

以下のコードは、`NumericYAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" 
    Width="100%">
    <NumericYAxis Name="xAxis" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrNumericYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-numeric-y-axis id="yAxis">
    </igc-numeric-y-axis>
</igc-data-chart>
```

## 時間 X 軸

`TimeXAxis` は、日付順にソートされた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、この軸の `DateTimeMemberPath` プロパティを使用してマッピングされたデータ列の値に従って、X軸に沿って配置されます。このタイプの軸は、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) と互換性があります。

`TimeXAxis` に `Breaks` を使用してデータの間隔を除外するオプションがあります。その結果として、ラベルは除外された間隔で表示されません。たとえば、勤務日/休業日、休日、週末などです。

以下のコードは、`TimeXAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" Width="100%" >
    <TimeXAxis Name="xAxis" DateTimeMemberPath="Date"
    DataSource="@data" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"
    DataSource="@data"/>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrTimeXAxis name="xAxis" dateTimeMemberPath="Date"/>
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-time-x-axis>
</igc-data-chart>
```

## 序数時間 X 軸

`OrdinalTimeXAxis` と `TimeXAxis` の主な違いは、序数軸で表示される日付は等距離であると見なされることです。`TimeXAxis` は現在、日付を時系列に従ってソートします。そのため、パフォーマンスを向上させるため、またはデータ項目が同じ時間間隔で時系列順になっている場合は、`OrdinalTimeXAxis` を使用することをお勧めします。

以下のコードは、`OrdinalTimeXAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" Width="100%" >
    <OrdinalTimeXAxis Name="xAxis" DateTimeMemberPath="Date" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrOrdinalTimeXAxis name="xAxis" dateTimeMemberPath="Date"/>
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-ordinal-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-ordinal-time-x-axis>
</igc-data-chart>
```

## Y 軸の変化率

`PercentChangeYAxis` は、参照値としてシリーズの最初のポイントを取得します。それ以後の値は参照値に比較して増減パーセントに基づいて拡大縮小されます。

この軸タイプは `NumericYAxis` に基づいているため、同じシリーズ タイプをサポートします。[Category シリーズ](data-chart-type-category-series.md)の場合、参照値はそれらのシリーズの `ValueMemberPath` に対応します。[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)の場合、参照値はそれらのシリーズの `YMemberPath` に対応します。[Financial シリーズ](data-chart-type-financial-series.md)の場合、参照値は `OpenMemberPath` プロパティにマッピングされた最初の値に対応します。

以下のコードは、`PercentChangeYAxis` を $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" Width="100%">
    <PercentChangeYAxis Name="yAxis" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-percent-change-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrPercentChangeYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-percent-change-y-axis id="yAxis">
    </igc-percent-change-y-axis>
</igc-data-chart>
```

### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [軸の設定](data-chart-axis-settings.md)
- [チャートの凡例](data-chart-legends.md)
- [シリーズのマーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)