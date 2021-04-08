---
title: $PlatformShort$ 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 軸グリッド線
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics, $PlatformShort$ 軸, グリッド線, インフラジスティックス
mentionedTypes: ["XamCategoryChart"]
_language: ja
---

# $PlatformShort$ 軸グリッド線

すべての $ProductName$ チャートには、軸線の外観、X 軸と Y 軸に描画される主/副グリッド線および目盛りの頻度を変更するための組み込み機能が含まれています。

> 注: 次の例は、`XamCategoryChart` および `XamFinancialChart` コントロールに適用されます。

軸の主グリッド線は、軸ラベルの位置から水平 (Y 軸) または垂直 (X 軸) に伸びる長い線であり、チャートのプロット領域を介して描画されます。軸の副グリッド線は、軸の主グリッド線の間に描画される線です。

軸目盛りは、$PlatformShort$ チャートのすべての主線の位置で各ラベルのすべての水平軸および垂直軸に沿って表示されます。

## $PlatformShort$ 軸グリッド線の例

この例は、指定した間隔で主グリッド線と副グリッド線を表示するために軸グリッド線を構成する方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 軸グリッド線のプロパティ

軸間隔プロパティを設定すると、主グリッド線と軸ラベルが軸に描画される頻度を指定します。同様に、軸副間隔のプロパティは副グリッド線が軸に描画される頻度を指定します。

副間隔に対応する副グリッド線を表示するには、軸に `XAxisMinorStroke` と `XAxisMinorStrokeThickness` プロパティを設定する必要があります。これは、副グリッド線にはデフォルトの色または太さがなく、最初に割り当てるまで表示されないためです。

以下のプロパティを設定して、$PlatformShort$ チャートでのグリッド線の表示をカスタマイズできます。

軸ビジュアル           | タイプ    | プロパティ名                                               | 説明
-----------------------|---------|--------------------------------------------------------------|----------------
主なストロークの色     | string  | `XAxisMajorStroke` <br> `YAxisMajorStroke`                   | これらのプロパティは、軸の主グリッド線の色を設定します。
副ストロークの色     | string  | `XAxisMinorStroke` <br> `YAxisMinorStroke`                   | これらのプロパティは、軸の副グリッド線の色を設定します。
主なストロークの太さ | number  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness` | これらのプロパティは、軸の主グリッド線の太さをピクセル単位で設定します。
副ストロークの太さ | number  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness` | これらのプロパティは、軸の副グリッド線の太さをピクセル単位で設定します。
主間隔         | number  | `XAxisInterval` <br> `YAxisInterval`                         | これらのプロパティは、軸の主グリッド線とラベルの間隔を設定します。
副間隔         | number  | `XAxisMinorInterval` <br> `YAxisMinorInterval`               | これらのプロパティは、軸の副グリッド線の間隔を設定します (使用する場合)。

上記のテーブルの主間隔と副間隔については、軸ラベルの主間隔も、この値によって設定され、間隔に関連付けられた軸のポイントにラベルが 1 つ表示されることに注意してください。副間隔グリッド線は常に主グリッド線の間に描画されるため、副間隔プロパティは常に主間隔プロパティの値よりもはるかに小さい値 (通常は 2〜5 倍小さい値) に設定する必要があります。

カテゴリ軸では、間隔は、最初の項目から最後のカテゴリ項目の範囲のインデックスとして表されます。通常、この値は、主間隔のカテゴリ項目の合計数の 10～20% に相当します。その結果、すべての軸ラベルは軸にフィットし、他の軸ラベルによって切り取られることはありません。副間隔の場合、主間隔プロパティの一部として表されます。通常、この値の範囲は 0.25～0.5 です。

数値軸では、間隔値は軸の最小値と最大値の間の double 値として表されます。数値軸はデフォルトで、軸の最小値および最大値から四捨五入されたバランスの良い数値に、自動的に計算されます。

日付/時刻軸では、この値は軸の最小値から最大値の範囲の時間間隔として表されます。

以下の例は、上記のプロパティを設定してグリッド線をカスタマイズする方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 軸目盛りの例

軸の目盛りは、`XAxisTickLength` と `YAxisTickLength` プロパティを 0 より大きい値に設定することで有効になります。これらのプロパティは、目盛りを形成する線セグメントの長さを指定します。

目盛りは常に軸線から伸び、ラベルの方向を指します。ラベルは、重ならないように目盛りの長さの値でオフセットされます。たとえば、`YAxisTickLength` プロパティが 5 に設定されている場合、軸ラベルはその量だけ左にシフトされます。

以下の例は、上記のプロパティを設定して目盛りをカスタマイズする方法を示します。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-tickmarks"
           alt="$PlatformShort$ 軸目盛りの例"
           github-src="charts/category-chart/axis-tickmarks">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 軸目盛りのプロパティ

以下のプロパティを設定して、$PlatformShort$ チャートで軸の目盛りの表示方法をカスタマイズできます。

軸ビジュアル           | タイプ    | プロパティ名                                             | 説明
-----------------------|---------|------------------------------------------------------------|-------------------------
目盛りストロークの色      | string  | `XAxisTickStroke` <br> `YAxisTickStroke`                   | これらのプロパティは、目盛りの色を設定します。
目盛りストロークの太さ  | number  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness` | これらのプロパティは、軸の目盛りの太さを設定します。
目盛りストロークの長さ     | number  | `XAxisTickLength` <br> `YAxisTickLength`                   | これらのプロパティは、軸の目盛りの長さを設定します。


## その他のリソース

- [軸レイアウト](chart-axis-layouts.md)
- [軸オプション](chart-axis-options.md)

## API メンバー

- `XamCategoryChart` 
- `XamFinancialChart`
- `XAxisInterval` 
- `YAxisInterval` 
- `XAxisMinorInterval` 
- `YAxisMinorInterval` 
- `XAxisMajorStrokeThickness` 
- `YAxisMajorStrokeThickness` 
- `XAxisMinorStrokeThickness` 
- `YAxisMinorStrokeThickness` 
- `XAxisTickLength` 
- `YAxisTickLength` 
- `XAxisTickStroke` 
- `YAxisTickStroke` 
- `XAxisMajorStroke` 
- `YAxisMajorStroke`  