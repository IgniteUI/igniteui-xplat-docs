---
title: {Platform} 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} 軸グリッド線
_keywords: {Platform} Axis, Gridlines, Infragistics, {Platform} 軸, グリッド線, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} 軸グリッド線

すべての {ProductName} チャートには、軸線の外観、X 軸と Y 軸に描画される主/副グリッド線および目盛りの頻度を変更するための組み込み機能が含まれています。

> [!Note]
> 次の例は、`CategoryChart` および `FinancialChart` コントロールに適用されます。

軸の主グリッド線は、軸ラベルの位置から水平 (Y 軸) または垂直 (X 軸) に伸びる長い線であり、チャートのプロット領域を介して描画されます。軸の副グリッド線は、軸の主グリッド線の間に描画される線です。

軸目盛りは、{Platform} チャートのすべての主線の位置で各ラベルのすべての水平軸および垂直軸に沿って表示されます。

## {Platform} 軸グリッド線の例

この例は、指定した間隔で主グリッド線と副グリッド線を表示するために軸グリッド線を構成する方法を示しています。

`sample="/charts/category-chart/axis-gridlines", height="450", alt="{Platform} 軸グリッド線の例"`



<div class="divider--half"></div>

## {Platform} 軸グリッド線のプロパティ

軸間隔プロパティを設定すると、主グリッド線と軸ラベルが軸に描画される頻度を指定します。同様に、軸副間隔のプロパティは副グリッド線が軸に描画される頻度を指定します。

副間隔に対応する副グリッド線を表示するには、軸に `XAxisMinorStroke` と `XAxisMinorStrokeThickness` プロパティを設定する必要があります。これは、副グリッド線にはデフォルトの色または太さがなく、最初に割り当てるまで表示されないためです。

以下のプロパティを設定して、{Platform} チャートでのグリッド線の表示をカスタマイズできます。

| 軸ビジュアル           | タイプ    | プロパティ名                                               | 説明 |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| 主なストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`                   | これらのプロパティは、軸の主グリッド線の色を設定します。 |
| 副ストロークの色     | 文字列  | `XAxisMinorStroke` <br> `YAxisMinorStroke`                   | これらのプロパティは、軸の副グリッド線の色を設定します。 |
| 主なストロークの太さ | 数  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness` | これらのプロパティは、軸の主グリッド線の太さをピクセル単位で設定します。 |
| 副ストロークの太さ | 数  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness` | これらのプロパティは、軸の副グリッド線の太さをピクセル単位で設定します。 |
| 主間隔         | 数  | `XAxisInterval` <br> `YAxisInterval`                         | これらのプロパティは、軸の主グリッド線とラベルの間隔を設定します。 |
| 副間隔         | 数  | `XAxisMinorInterval` <br> `YAxisMinorInterval`               | これらのプロパティは、軸の副グリッド線の間隔を設定します (使用する場合)。 |
| 軸線のストローク色    | 文字列  | `XAxisStroke` <br> `YAxisStroke`                   | これらのプロパティは、軸線の色を設定します。 |
| 軸のストロークの太さ | 数  | `XAxisStrokeThickness` <br> `YAxisStrokeThickness` | これらのプロパティは、軸線のピクセル単位の太さを設定します。 |

上記のテーブルの主間隔と副間隔については、軸ラベルの主間隔も、この値によって設定され、間隔に関連付けられた軸のポイントにラベルが 1 つ表示されることに注意してください。副間隔グリッド線は常に主グリッド線の間に描画されるため、副間隔プロパティは常に主間隔プロパティの値よりもはるかに小さい値 (通常は 2〜5 倍小さい値) に設定する必要があります。

カテゴリ軸では、間隔は、最初の項目から最後のカテゴリ項目の範囲のインデックスとして表されます。通常、この値は、主間隔のカテゴリ項目の合計数の 10～20% に相当します。その結果、すべての軸ラベルは軸にフィットし、他の軸ラベルによって切り取られることはありません。副間隔の場合、主間隔プロパティの一部として表されます。通常、この値の範囲は 0.25～0.5 です。

数値軸では、間隔値は軸の最小値と最大値の間の double 値として表されます。数値軸はデフォルトで、軸の最小値および最大値から四捨五入されたバランスの良い数値に、自動的に計算されます。

日付/時刻軸では、この値は軸の最小値から最大値の範囲の時間間隔として表されます。

以下の例は、上記のプロパティを設定してグリッド線をカスタマイズする方法を示しています。

`sample="/charts/category-chart/axis-gridlines", height="450", alt="{Platform} 軸グリッド線の例"`

`XamDataChart` の軸には、それぞれ `MajorStrokeDashArray` プロパティと `MinorStrokeDashArray` プロパティを利用して、主グリッド線と副グリッド線にダッシュ配列を配置する機能もあります。対応する軸の `StrokeDashArray` プロパティを設定することで、実際の軸線も破線にすることができます。これらのプロパティは、対応するグリッド線のダッシュの長さを記述する数値の配列を受け取ります。

次の例は、上記のダッシュ配列プロパティが設定された `XamDataChart` を示しています。

`sample="/charts/data-chart/dash-array-axes", height="450", alt="{Platform} 軸破線配列の例"`


<div class="divider--half"></div>

## {Platform} 軸目盛りの例

軸の目盛りは、`XAxisTickLength` と `YAxisTickLength` プロパティを 0 より大きい値に設定することで有効になります。これらのプロパティは、目盛りを形成する線セグメントの長さを指定します。

目盛りは常に軸線から伸び、ラベルの方向を指します。ラベルは、重ならないように目盛りの長さの値でオフセットされます。たとえば、`YAxisTickLength` プロパティが 5 に設定されている場合、軸ラベルはその量だけ左にシフトされます。

以下の例は、上記のプロパティを設定して目盛りをカスタマイズする方法を示します。

`sample="/charts/category-chart/axis-tickmarks", height="450", alt="{Platform} 軸目盛りの例"`



<div class="divider--half"></div>

## {Platform} 軸目盛りのプロパティ

以下のプロパティを設定して、{Platform} チャートで軸の目盛りの表示方法をカスタマイズできます。

| 軸ビジュアル           | タイプ    | プロパティ名                                             | 説明 |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| 目盛りストロークの色      | 文字列  | `XAxisTickStroke` <br> `YAxisTickStroke`                   | これらのプロパティは、目盛りの色を設定します。 |
| 目盛りストロークの太さ  | 数  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness` | これらのプロパティは、軸の目盛りの太さを設定します。 |
| 目盛りストロークの長さ     | 数  | `XAxisTickLength` <br> `YAxisTickLength`                   | これらのプロパティは、軸の目盛りの長さを設定します。 |


## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [軸レイアウト](chart-axis-layouts.md)
- [軸オプション](chart-axis-options.md)

## API リファレンス

以下は、上記のセクションで説明されている API メンバーのリストです。

| `XamDataChart`                                     | `CategoryChart` または `FinancialChart` |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` -> `NumericXAxis` -> `Interval`             | `XAxisInterval` (主間隔) |
| `Axes` -> `NumericYAxis` -> `Interval`             | `YAxisInterval` (主間隔) |
| `Axes` -> `NumericXAxis` -> `MinorInterval`        | `XAxisMinorInterval`    |
| `Axes` -> `NumericYAxis` -> `MinorInterval`        | `YAxisMinorInterval`    |
| `Axes` -> `NumericXAxis` -> `MajorStroke`          | `XAxisMajorStroke`    |
| `Axes` -> `NumericYAxis` -> `MajorStroke`          | `YAxisMajorStroke`    |
| `Axes` -> `NumericXAxis` -> `MajorStrokeThickness` | `XAxisMajorStrokeThickness` |
| `Axes` -> `NumericYAxis` -> `MajorStrokeThickness` | `YAxisMajorStrokeThickness` |
| `Axes` -> `NumericXAxis` -> `MinorStrokeThickness` | `XAxisMinorStrokeThickness` |
| `Axes` -> `NumericYAxis` -> `MinorStrokeThickness` | `YAxisMinorStrokeThickness` |
| `Axes` -> `NumericXAxis` -> `StrokeThickness`      | `XAxisStrokeThickness`   |
| `Axes` -> `NumericYAxis` -> `StrokeThickness`      | `YAxisStrokeThickness`   |
| `Axes` -> `NumericXAxis` -> `Stroke`               | `XAxisStroke` (軸線色) |
| `Axes` -> `NumericYAxis` -> `Stroke`               | `YAxisStroke` (軸線色) |
| `Axes` -> `NumericXAxis` -> `TickLength`           | `XAxisTickLength`    |
| `Axes` -> `NumericYAxis` -> `TickLength`           | `YAxisTickLength`    |
| `Axes` -> `NumericXAxis` -> `TickStroke`           | `XAxisTickStroke`    |
| `Axes` -> `NumericYAxis` -> `TickStroke`           | `YAxisTickStroke`    |
| `Axes` -> `NumericXAxis` -> `Strip`                | `XAxisStrip` (軸の主グリッド線の空間) |
| `Axes` -> `NumericYAxis` -> `Strip`                | `YAxisStrip` (軸の主グリッド線の空間) |
