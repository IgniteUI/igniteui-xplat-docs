---
title: {Platform} チャートのデータの選択 | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックスの {ProductName} チャートでデータの選択をお試しください!
_keywords: {Platform} charts, chart data, selection, data selection, {ProductName}, Infragistics, {Platform} チャート, チャート データ, 選択, データの選択, インフラジスティックス
_license: commercial
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャートの選択

{Platform} {ComponentTitle} の {ProductName} 選択機能を使用すると、ユーザーはチャート内の単一または複数のシリーズを対話的に選択、ハイライト表示、アウトライン表示したり、その逆の選択を解除したりできます。これにより、提示されたデータをユーザーがより意味のある方法で操作するさまざまな可能性が提供されます。

## 選択の設定

デフォルトの動作 `SelectionMode` はオフになっており、次のいずれかのオプションを選択する必要があります。`{ComponentName}` に使用可能な選択モードがいくつかあります。

- **Auto**
- **None**
- **Brighten**
- **FadeOthers**
- **GrayscaleOthers**
- **FocusColorThickOutline**
- **FocusColorOutline**
- **SelectionColorThickOutline**
- **SelectionColorOutline**
- **FocusColorFill**
- **SelectionColorFill**
- **ThickOutline**

`Brighten` は選択した項目をフェードアウトしますが、`FadeOthers` は反対の効果を引き起こします。
`GrayscaleOthers` は `FadeOthers` と同様に動作しますが、シリーズの残りの部分にはグレー色を表示します。これは `SelectionBrush` 設定をオーバーライドすることに注意してください。
`SelectionColorOutline` と `SelectionColorThickOutline` はシリーズの周囲に境界線を描画します。

併せて、どの項目を選択するかをより細かく制御できる `SelectionBehavior` も利用できます。Auto のデフォルトの動作は `PerSeriesAndDataItemMultiSelect` です。

- **Auto**
- **PerDataItemMultiSelect**
- **PerDataItemSingleSelect**
- **PerSeriesAndDataItemMultiSelect**
- **PerSeriesAndDataItemSingleSelect**
- **PerSeriesAndDataItemGlobalSingleSelect**
- **PerSeriesMultiSelect**
- **PerSeriesSingleSelect**

## Color Fill (塗りつぶし) による選択の設定

次の例は、`SelectionColorFill` と `Auto` の両方の選択動作の組み合わせ、つまり `PerSeriesAndDataItemMultiSelect` を示しています。塗りつぶしは、シリーズ項目全体の背景色を変更するため、便利な視覚的な合図を提供します。各項目をクリックすると、項目が緑から紫に変わります。


`sample="/charts/category-chart/selection-modes", height="450", alt="{Platform} カテゴリ チャートの選択モードの例"`

## 複数選択の構成

その他の選択モードでは、さまざまな選択方法が提供されます。たとえば、`PerDataItemMultiSelect` とともに `SelectionBehavior` を使用すると、複数のシリーズが存在する場合にカテゴリ全体のすべてのシリーズに影響し、カテゴリ間での選択が可能になります。`PerDataItemSingleSelect` と比較すると、一度に選択できるのは 1 つのカテゴリの項目のみです。これは、複数のシリーズが異なるデータ ソースにバインドされている場合に役立ち、カテゴリ間の選択をより細かく制御できます。
`PerSeriesAndDataItemGlobalSingleSelect` を使用すると、一度にすべてのカテゴリで単一のシリーズを選択できます。

`sample="/charts/category-chart/selection-multiple-modes", height="450", alt="{Platform} カテゴリ チャートの選択の複数モードの例"`

## アウトライン選択の構成

`FocusBrush` を適用すると、`SelectionMode` プロパティがフォーカス オプションの 1 つに設定されている場合に、選択されたシリーズが境界線付きで表示されます。

## ラジアル シリーズの選択

この例では、各ラジアル シリーズを異なる色で選択できる `XamDataChart` を介した別のシリーズ タイプを示します。

`sample="/charts/data-chart/radial-column-chart-selection", height="450", alt="{Platform} ラジアル縦棒チャートの複数モード選択の例"`


## プログラムによる選択

チャートの選択項目は、起動時や実行時にチャートの選択項目を表示するようにコードで設定することもできます。これは、`CategoryChart` の `SelectedSeriesCollection` に項目を追加することで実現できます。`ChartSelection` オブジェクトの `Matcher` プロパティを使用すると、「マッチャー」に基づいてシリーズを選択できます。これはチャートから実際のシリーズにアクセスできない場合に最適です。データ ソースに含まれるプロパティがわかっていれば、シリーズが使用される `ValueMemberPath` を使用できます。

マッチャーは、`XamDataChart` のように実際のシリーズにアクセスできない場合、`CategoryChart` などのチャートで使用するのに最適です。この場合、データ ソースに含まれるプロパティがわかっていれば、シリーズに含まれる ValueMemberPaths を推測できます。たとえば、データ ソースに Nuclear、Coal、Oil、Solar という数値プロパティがある場合、これらのプロパティごとにシリーズが作成されていることがわかります。Solar 値にバインドされたシリーズをハイライト表示する場合は、次のプロパティが設定されたマッチャーを使用して、ChartSelection オブジェクトを `SelectedSeriesItems` コレクションに追加できます。

たとえば、データ ソースに Nuclear、Coal、Oil、Solar という数値プロパティがある場合、これらのプロパティごとにシリーズが作成されていることがわかります。Solar 値にバインドされたシリーズを選択する場合は、次のプロパティが設定されたマッチャーを使用して、ChartSelection オブジェクトを SelectedSeriesItems コレクションに追加できます。

 `sample="/charts/category-chart/selection-matcher", height="500", alt="{Platform} 選択マッチャー"`

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

| `CategoryChart` プロパティ                    | `XamDataChart` プロパティ |
| ----------------------------------------------|---------------------------|
|                                               |                           |
