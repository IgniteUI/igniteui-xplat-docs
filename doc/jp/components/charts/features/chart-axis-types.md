---
title: {Platform} 軸タイプ | データの視覚化 | インフラジスティックス
_description: インフラジスティックスの {Platform} 軸タイプ
_keywords: {Platform} 軸, オプション, タイトル, ラベル, ギャップ, オーバーラップ, 範囲, スケール, モード, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} 軸タイプ

{ProductName} カテゴリ チャートは、`CategoryXAxis` および `NumericYAxis` タイプを 1 つだけ使用します。同様に、{ProductName} ファイナンシャル チャートは、`TimeXAxis` タイプと `NumericYAxis` タイプを 1 つだけ使用します。ただし、{ProductName} データ チャートは複数の軸タイプをサポートしており、[軸の位置](chart-axis-layouts.md#軸位置の例)を設定してチャートの任意の側に配置したり、[軸交差](chart-axis-layouts.md

## デカルト軸

デカルト軸を持つ `XamDataChart` では3 種類の X 軸を使用して水平 (X 軸) および垂直 (X 軸) 方向にデータをプロットすることが可能です。
(`CategoryXAxis`、`NumericXAxis`、および `TimeXAxis`) と 2 種類の Y 軸 (`CategoryYAxis` および `NumericYAxis`)。

### カテゴリ X 軸

`CategoryXAxis` は、そのデータを一連のカテゴリ データ項目として扱います。文字列や数値など、ほぼすべてのタイプのデータを表示できます。この軸に数値をプロットする場合、この軸は離散軸であり、連続ではないことに注意してください。これは、各カテゴリ データ項目がその前のデータ項目から等距離に配置されることを意味します。また、項目は軸のデータ ソースに表示される順序でプロットされます。

`CategoryXAxis` では、データをプロットするために `DataSource` と `Label` を提供する必要があります。通常、次のタイプの系列をプロットするために `NumericYAxis` と共に使用されます。

| カテゴリ シリーズ  | 積層型シリーズ | ファイナンシャル シリーズ |
|------------------|----------------|--------------------|
| - `AreaSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` | -  `StackedAreaSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br> <br> | - `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> <br> <br> <br> |

 次の例は、上記のスタイル設定プロパティの使用法を示しています:

 `sample="/charts/data-chart/stacked-column-chart", height="500", alt="{Platform} カテゴリ X 軸の例"`

### カテゴリ Y 軸

`CategoryYAxis` は、上記の `CategoryXAxis` と非常によく似た働きをしますが、水平ではなく垂直に配置されます。また、この軸では、データをプロットするために `DataSource` と `Label` を提供する必要があります。`CategoryYAxis` は通常 `NumericXAxis`  と組み合わせて次のタイプのシリーズをプロットするために使用されます。

 - `BarSeries`
 - `StackedBarSeries`
 - `Stacked100BarSeries`

 次の例は、`CategoryYAxis` タイプの使用法を示しています:

 `sample="/charts/data-chart/bar-chart-multiple-sources", height="500", alt="{Platform} カテゴリ Y 軸の例"`

### 数値 X 軸

`NumericXAxis` は、そのデータを連続的に変化する数値データ項目として扱います。この軸のラベルは、X 軸に沿って水平に配置されます。`NumericXAxis` ラベルの位置は、`NumericYAxis` と組み合わせた場合にサポートされるさまざまな [ScatterSeries](../types/scatter-chart.md) (散布シリーズ) の `XMemberPath` プロパティに依存します。または、`CategoryXAxis` と組み合わせた場合、これらのラベルは、`BarSeries`、`StackedBarSeries`、および `Stacked100BarSeries` の `ValueMemberPath` に対応して配置されます。

`NumericXAxis` は、次のタイプのシリーズと互換性があります:

 - `BarSeries`
 - `BubbleSeries`
 - `HighDensityScatterSeries`
 - `ScatterSeries`
 - `ScatterLineSeries`
 - `ScatterSplineSeries`
 - `ScatterAreaSeries`
 - `ScatterContourSeries`
 - `ScatterPolylineSeries`
 - `ScatterPolygonSeries`
 - `StackedBarSeries`
 - `Stacked100BarSeries`

 次の例は、`NumericXAxis` の使用法を示しています:

 `sample="/charts/data-chart/type-scatter-hd-series", height="500", alt="{Platform} 数値 X 軸の例"`

### 数値 Y 軸

`NumericYAxis` は、そのデータを連続的に変化する数値データ項目として扱います。この軸のラベルは、Y 軸に沿って垂直に配置されます。`NumericYAxis` ラベルの位置は、`NumericXAxis` と組み合わせた場合にサポートされるさまざまな [ScatterSeries](../types/scatter-chart.md) (散布シリーズ) の `YMemberPath` プロパティに依存します。または、`CategoryYAxis` と組み合わせた場合、これらのラベルは、上記の表に記載されているカテゴリまたは積層シリーズの `ValueMemberPath` に対応して配置されます。財務シリーズのいずれかを使用している場合、Open/High/Low/Close のパスと使用しているシリーズ タイプに対応して配置されます。

`NumericYAxis` は、次のタイプのシリーズと互換性があります:

| カテゴリ シリーズ  | 積層型シリーズ | ファイナンシャル シリーズ | 散布シリーズ |
|------------------|----------------|------------------|----------------|
| - `AreaSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> | - `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> | - `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> |

 次の例は、`NumericYAxis` の使用法を示しています:

 `sample="/charts/data-chart/scatter-line-chart", height="500", alt="{Platform} 数値 Y 軸の例"`

### 時間 X 軸

`TimeXAxis` は、そのデータを、日付でソートされた一連のデータ項目として扱います。この軸タイプのラベルは日付であり、日付間隔に従ってフォーマットおよび配置できます。この軸の日付範囲は、`DateTimeMemberPath` を使用してマップされたデータ列の日付値によって決定されます。これは、`DataSource` とともに、この軸タイプでデータをプロットするために必要です。

`TimeXAxis` は、`FinancialChart` コンポーネントの X 軸タイプです。

#### 時間 X 軸のブレーク

`TimeXAxis` には、`Breaks` (ブレーク) を使用してデータの間隔を除外するオプションがあります。その結果、ラベルとプロットされたデータは除外された間隔では表示されません。たとえば、勤務日/休業日、休日、週末などです。`TimeAxisBreak` のインスタンスを軸の `Breaks` コレクションに追加し、一意の `Start`、`End`、および `Interval` を使用して構成できます。

#### 時間 X 軸の書式設定

`TimeXAxis` には、`TimeAxisLabelFormat` オブジェクトのコレクションを表す `LabelFormats` プロパティがあります。コレクションに追加された各 `TimeAxisLabelFormat` は、一意の `Format` (書式) と `Range` (範囲) を割り当てる役割を果たします。これは、データを年からミリ秒にドリルダウンし、チャートに表示される時間の範囲に応じてラベルを調整する場合に特に役立ちます。

`TimeAxisLabelFormat` の `Format` プロパティは、特定の表示範囲に使用する形式を指定します。`TimeAxisLabelFormat` の `Range` プロパティは、軸ラベルの形式が別の形式に切り替わる表示範囲を指定します。たとえば、範囲が 10 日と 5 時間に設定された 2 つの `TimeAxisLabelFormat` 要素がある場合、軸の表示範囲が 10 日未満になるとすぐに、5 時間形式に切り替わります。

#### 時間 X 軸の間隔

`TimeXAxis` は、カテゴリ軸と数値軸の従来の `Interval` プロパティを `TimeAxisInterval` 型の `Intervals` コレクションに置き換えます。コレクションに追加された各 `TimeAxisInterval` は、一意の `Interval`、`Range`、および `IntervalType` を割り当てる役割を果たします。これは、データを年単位からミリ秒単位にドリルダウンして、チャートに表示される時間の範囲に応じてラベル間に一意の間隔を設ける場合に特に役立ちます。これらのプロパティの説明は次のとおりです。

- `Interval`: 使用する間隔を指定します。`IntervalType` プロパティに関連付けられています。たとえば、`IntervalType` が `Days` に設定されている場合、`Interval` で指定される数値は日数になります。
- `Range`: 軸間隔が別の間隔に切り替わる可視範囲を指定します。たとえば、範囲が 10 日間および 5 時間に設定された 2 つの TimeAxisInterval がある場合、軸の表示範囲が 10 日間より短くなる際に 5 時間範囲の間隔に変更します。
- `IntervalType`: `Interval` プロパティの時間単位を指定します。

## 極座標軸

極座標軸を持つ `XamDataChart` により、チャートの中心から外側 (半径軸) およびチャートの中心の周り (角度軸) にデータをプロットできます。

### カテゴリ角度軸

`CategoryAngleAxis` は、そのデータを一連のカテゴリ データ項目として扱います。この軸のラベルは、その順序での位置に従って円の端に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。

`CategoryAngleAxis` は通常、[ラジアル シリーズ](../types/radial-chart.md)をプロットするために `NumericRadiusAxis` と共に使用されます。

次の例は、`CategoryAngleAxis` タイプの使用法を示しています:

 `sample="/charts/data-chart/radial-area-chart", height="500", alt="{Platform} カテゴリ角度軸の例"`

### 数字角度軸

`NumericAngleAxis` は、そのデータを連続的に変化する数値データ項目として扱います。この軸領域のラベルは、円形プロットの中心から始まる半径線に沿って配置されます。`NumericAngleAxis` のラベルの位置は、[極座標シリーズ](../types/polar-chart.md) オブジェクトの `RadiusMemberPath` プロパティまたは[ラジアル シリーズ](../types/radial-chart.md) オブジェクトの `ValueMemberPath` プロパティを使用してマップされたデータ列の値によって異なります。

`NumericAngleAxis` は、`CategoryAngleAxis` と共に使用して[ラジアル シリーズ](../types/radial-chart.md)をプロットするか、`NumericRadiusAxis` と共に使用して[極座標シリーズ](../types/polar-chart.md)をプロットすることができます。

次の例は、`NumericAngleAxis` タイプの使用法を示しています:

 `sample="/charts/data-chart/polar-scatter-chart", height="500", alt="{Platform} 数字角度軸の例"`

### 数字半径軸

`NumericRadiusAxis` は、データを連続的に変化する数値データ項目として扱います。この軸のラベルは、円形プロットの周りに配置されます。ラベルの位置は、対応する極座標シリーズの `AngleMemberPath` プロパティを使用してマップされたデータ列の値によって異なります。

`NumericRadiusAxis` を `NumericRadiusAxis` と共に使用して、[極座標シリーズ](../types/polar-chart.md)をプロットできます。

次の例は、`NumericRadiusAxis` タイプの使用法を示しています:

 `sample="/charts/data-chart/polar-line-chart", height="500", alt="{Platform} 数字半径軸の例"`

## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください:

- [軸グリッド線](chart-axis-gridlines.md)
- [軸レイアウト](chart-axis-layouts.md)
- [軸オプション](chart-axis-options.md)
