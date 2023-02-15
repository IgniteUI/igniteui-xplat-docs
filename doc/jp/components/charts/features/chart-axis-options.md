---
title: {Platform} 軸オプション | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} 軸オプション
_keywords: {Platform} Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics, {Platform} 軸, オプション, タイトル, ラベル, 間隔, 重複, 範囲, スケール, モード, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} 軸オプション

すべての {ProductName} チャートで、軸はタイトル、ラベル、範囲などの視覚的構成のプロパティを提供します。これらの機能は、以下の例で示されています。

## 軸タイトルの例

{Platform} チャートの軸タイトル機能を使用すると、チャートにコンテキスト情報を追加できます。さまざまなフォントスタイル、色、マージン、および配置を適用するなど、さまざまな方法で軸タイトルの外観をカスタマイズできます。

`sample="/charts/category-chart/axis-titles", height="450", alt="{Platform} 軸タイトルの例"`



<div class="divider--half"></div>


## 軸ラベルの例

{Platform} チャートは、チャートで表示されるラベルの構成、書式設定、およびラベル フォントのスタイル設定を制御することが可能です。軸ラベルの回転角度、マージン、水平および垂直方向の配置、色、余白、および表示設定を変更できます。次の例は、これらの軸の機能を使用する方法を示しています。

`sample="/charts/category-chart/axis-labels", height="450", alt="{Platform} 軸ラベルの例"`



<div class="divider--half"></div>

## 軸ラベルの管理

チャートの軸には、所有する軸のラベルに使用可能なスペースの量に関する拡張計算を実行する機能があります。この拡張された計算により、軸は、指定された軸に対してより多くのラベルを表示するために、指定されたスペースの量を最適化できます。

この拡張された計算は、オプトインする必要があるものです。これは、`UseEnhancedIntervalManagement` プロパティを true に設定することで実行できます。次に、軸の `Interval` プロパティを手動で設定せずに、軸のディメンションに収まるだけの数のラベルを表示したい場合は、軸の `EnhancedIntervalPreferMoreCategoryLabels` プロパティを true に設定できます。

チャートには、ラベルが割り当てられたスペースに収まらない場合にラベルの自動回転を考慮する機能と、ラベルが収まるようにプロット領域に自動マージンを適用する機能もあります。これは、最初にチャートの `AutoMarginAndAngleUpdateMode` プロパティを `SizeChanging` または `SizeChangingAndZoom` に設定することで最初にオプトインできるものです。これにより、必要に応じて、ラベルに適用された自動マージンと角度をいつ再評価するかがチャートに通知されます。

`AutoMarginAndAngleUpdateMode` を設定した後、`ShouldAutoExpandMarginForInitialLabels` プロパティを true に設定して自動マージンをオプトインするか `ShouldConsiderAutoRotationForInitialLabels` プロパティを true に設定して自動回転を行うことができます。`AutoExpandMarginExtraPadding` と `AutoExpandMarginMaximumValue` を設して、それぞれ追加のスペースまたは可能な最大マージンを提供することにより、適用される自動マージンをさらにカスタマイズすることもできます。

## 軸範囲の例

チャートでは数値軸または時間軸の範囲の最小値と最大値を定義できます。範囲の最小値は軸の最小値で、範囲の最大値は軸の最大値です。これらは、`YAxisMinimumValue` および `YAxisMaximumValue` オプションを設定することによって設定されます。

既定では、{Platform} チャートは、データ内の対応する最小値と最大値に基づいて、数値と時間軸の範囲の最小値と最大値を計算しますが、この自動計算は、データセットには適していません。たとえば、データの最小値が 850 の場合、`YAxisMinimumValue` を 800 に設定してください。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができます。`YAxisMaximumValue` プロパティを使用して、同じ方法を軸の最小値と最大値に適用することができます。

`sample="/charts/category-chart/axis-range", height="450", alt="{Platform} 軸範囲の例"`



<div class="divider--half"></div>


## 軸モードとスケール

`FinancialChart` および `CategoryChart` コントロールでは、`YAxisIsLogarithmic` プロパティが true に設定されている場合はデータを Y 軸に沿って対数スケールでプロットするか、このプロパティが false (デフォルト価値) に設定されている場合は線形スケールでプロットするかを選択できます。

`YAxisLogarithmBase` プロパティを使用すると、対数スケールのベースをデフォルト値の 10 から他の整数値に変更できます。`FinancialChart` とコントロールを使用すると、`Numeric` モードと `PercentChange` モードを提供する `YAxisMode` プロパティを使用して、Y 軸に沿ってデータをどのように表現するかを選択できます。`Numeric` モードは正確な値でデータをプロットし、`PercentChange` モードは提供された最初のデータ ポイントに対する変化率としてデータを表示します。デフォルト値は `Numeric` モードです。

`YAxisMode` プロパティに加えて、`FinancialChart` コントロールには X 軸に `Time` モードと `Ordinal` モードを提供する `XAxisMode` プロパティがあります。`Time` モードはデータのギャップを X 軸にスペースを用いて描画します。つまり、週末または休日に株取引がないことを示します。`Ordinal` モードはデータがない日付領域を縮小します。デフォルト値は `Ordinal` モードです。

`sample="/charts/financial-chart/axis-types", height="450", alt="{Platform} 軸範囲の例"`



<div class="divider--half"></div>

## 軸間隔の例

{Platform} チャートの `XAxisGap` プロパティは、プロットされた系列の縦棒または棒間のスペースの量を決定します。このプロパティは、0.0 から 1.0 までの数値を受け入れます。値は、シリーズ間の利用可能なピクセル数からのギャップの相対幅を表します。このプロパティを 0 に設定すると、シリーズ間にギャップがレンダリングされず、1 に設定すると最大ギャップがレンダリングされます。

{Platform} チャートの `XAxisMaximumGap` プロパティは、許可される最大ギャップ値を決定します。このデフォルトは 1.0 に設定されていますが、`XAxisGap` の設定に応じて変更できます。

{Platform} チャートの `XAxisMinimumGapSize` プロパティは、可能であれば、カテゴリ間のギャップに使用する最小のピクセル数を決定します。

以下の例は、ニューヨーク市のセントラル パークの摂氏の平均最高気温を示しています。これは、`XAxisGap` が最初に 1 に設定された[縦棒チャート](../types/column-chart.md)で表されているため、列の間にカテゴリ全体の幅があります。スライダーを使用すると、この例のギャップを構成して、さまざまな値の効果を確認できます。

`sample="/charts/category-chart/axis-gap", height="450", alt="{Platform} 軸間隔の例"`



<div class="divider--half"></div>

## 軸重複の例

{Platform} チャートの `XAxisOverlap` プロパティを使用すると、プロットされた系列の描画された縦棒または棒の重複を設定できます。このプロパティは、-1.0 から 1.0 までの数値を受け入れます。値は、各シリーズ専用の使用可能なピクセル数からの相対的な重なりを表します。このプロパティを負の値 (-1.0 まで) に設定すると、カテゴリが互いから離れてしまい、それらの間にギャップが生じます。逆に、このプロパティを正の値 (最大 1.0) に設定すると、カテゴリが互いに重なります。値が 1 の場合、チャートはカテゴリを互いの上に表示します。

以下の例は、フランチャイズの世界の興行収入の合計とシリーズで最も収益の高い映画を比較した、世界で最も収益の高い映画フランチャイズの比較を示しています。これは、`XAxisOverlap` が最初に 1 に設定された[縦棒チャート](../types/column-chart.md)で表されており、列は完全に重なり合います。スライダーを使用すると、この例の重複を構成して、さまざまな値の効果を確認できます。

`sample="/charts/category-chart/axis-overlap", height="450", alt="{Platform} 軸重複の例"`



<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [軸グリッド線](chart-axis-gridlines.md)
- [軸レイアウト](chart-axis-layouts.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

| `XamDataChart`                                         | `FinancialChart`       | `CategoryChart`        |
| ------------------------------------------------------ | ---------------------- | ---------------------- |
| `Axes` -> `NumericYAxis` -> `MaximumValue`             | `YAxisMaximumValue`    | `YAxisMaximumValue`    |
| `Axes` -> `NumericYAxis` -> `MinimumValue`             | `YAxisMinimumValue`    | `YAxisMinimumValue`    |
| `Axes` -> `NumericYAxis` -> `IsLogarithmic`            | `YAxisIsLogarithmic`   | `YAxisIsLogarithmic`   |
| `Axes` -> `NumericYAxis` -> `LogarithmBase`            | `YAxisLogarithmBase`   | `YAxisLogarithmBase`   |
| `Axes` -> `CategoryXAxis` -> `Gap`                     | None                   | `XAxisGap`             |
| `Axes` -> `CategoryXAxis` -> `Overlap`                 | None                   | `XAxisOverlap`         |
| `Axes` -> `TimeXAxis`                                  | `XAxisMode`            | None                   |
| `Axes` -> `PercentChangeYAxis`                         | `YAxisMode`            | None                   |
| `Axes` -> `NumericYAxis` -> `labelSettings.angle`      | `YAxisLabelAngle`      | `YAxisLabelAngle`      |
| `Axes` -> `NumericXAxis` -> `labelSettings.angle`      | `XAxisLabelAngle`      | `XAxisLabelAngle`      |
| `Axes` -> `NumericYAxis` -> `labelSettings.textColor`  | `YAxisLabelForeground` | `YAxisLabelForeground` |
| `Axes` -> `NumericXAxis` -> `labelSettings.textColor`  | `XAxisLabelForeground` | `XAxisLabelForeground` |
| `Axes` -> `NumericYAxis` -> `labelSettings.visibility` | `YAxisLabelVisibility` | `YAxisLabelVisibility` |
| `Axes` -> `NumericXAxis` -> `labelSettings.visibility` | `XAxisLabelVisibility` | `XAxisLabelVisibility` |

