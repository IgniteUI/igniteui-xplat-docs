---
title: {Platform} 新機能 | {ProductName} | インフラジスティックス
_description: {ProductName} の新機能について学んでください。
_keywords: Changelog, What's New, {ProductName}, Infragistics, 変更ログ, 新機能, インフラジスティックス
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "DataPieChart", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {ProductName} 変更ログ

{ProductName} の各バージョンのすべての重要な変更は、このページに記載されています。

> [!Note]
> このトピックでは、{PackageAngularComponents} パッケージに含まれていないコンポーネントの変更についてのみ説明します。
> igniteui-angular コンポーネントに固有の変更については CHANGELOG.MD を参照してください。

* [Ignite UI for Angular 変更ログ (GitHub)](https://github.com/IgniteUI/igniteui-angular/blob/master)

## **{PackageVerChanges-24-2-DEC}**

### {PackageCharts} (チャート)

DashboardTile (ベータ版)

- 新しい [Dashboard Tile](charts/dashboard-tile.md) コンポーネントは、バインドされた ItemsSource コレクションまたは単一のポイントを分析および視覚化し、データのスキーマとカウントに基づいて適切なデータ視覚化を返すコンテナー コントロールです。このコントロールは、組み込みの [Toolbar](menus/toolbar.md) コンポーネントを利用して、実行時に視覚化を変更できるようにし、最小限のコードでデータのさまざまな視覚化を表示できるようにします。

### {PackageCharts} (入力)

- 新しい ColorEditor と Toolbar の ToolAction (ベータ版)

この新しいエディターはスタンドアロンのカラー ピッカーとして使用でき、実行時に視覚化を更新するために [Toolbar](menus/toolbar.md) コンポーネントに統合されました。

## **{PackageVerChanges-24-1-SEP}**

- [データ円チャート](charts/types/data-pie-chart.md) - `DataPieChart` は円ャートを表示する新しいコンポーネントです。このコンポーネントは、`CategoryChart` と同様に動作し、基になるデータ モデルのプロパティを自動的に検出しながら、ItemLegend コンポーネントを介して選択、ハイライト表示、アニメーション、凡例のサポートを可能にします。

- 新しい[比例カテゴリ角度軸](charts/types/radial-chart.md) - スライスをプロットするための、`XamDataChart` のラジアル円シリーズの新しい軸。円チャートに似ており、データ ポイントが円グラフ内のセグメントとして表されます。

- `Toolbar`

    - 新しい ToolActionCheckboxList
        選択用のチェックボックスを備えた項目のコレクションを表示する新しい CheckboxList ToolAction。ToolAction CheckboxList 内のグリッドの高さは 5 項目まで大きくなり、その後スクロールバーが表示されます。
        IgxCheckboxListModule を登録する必要があります。

    - 新しいフィルタリングのサポート

    - 軸フィールドの変更
        CategoryChart をターゲットにする場合のツールバーの新しいデフォルトの IconMenu。
        ラベル フィールドは X 軸にマップされ、値フィールドは Y 軸にマップされます。
        ターゲット チャートは、行われた変更にリアルタイムで反応します。チャートに ItemsSource が設定されていない場合、IconMenu は非表示になります。

## **{PackageVerChanges-24-1-JUN}**

* Angular 18 のサポート。

### {PackageCharts} (チャート)

* [データ凡例のグループ化](charts/features/chart-data-legend.md#{PlatformLower}-データ凡例のグループ化) と [データ ツールチップのグループ化](charts/features/chart-data-tooltip.md#{PlatformLower}-データ-チャートのデータ-ツールチップのグループ化) - 新しいグループ化機能が追加されました。`GroupRowVisible` プロパティは、各シリーズのグループ化を切り替え、オプトインすると `DataLegendGroup` プロパティを介してグループ テキストを割り当てることができます 同じ値が複数のシリーズに適用されている場合、それらはグループ化されて表示されます。すべてのユーザー向けに分類および整理する必要がある大規模なデータセットに役立ちます。

- [チャートの選択](charts/features/chart-data-selection.md) - 新しいシリーズ選択のスタイル設定。これは、`CategoryChart` および `XamDataChart` のすべてのカテゴリ、財務、およびラジアル シリーズに広く採用されています。シリーズはクリックして異なる色で表示したり、明るくしたり、薄くしたり、フォーカスのアウトラインを表示したりできます。個々のシリーズまたはデータ項目全体を通じて影響を受ける項目を管理します。
複数のシリーズとマーカーがサポートされています。特定のデータ項目の値間のさまざまな相違点や類似点を示すのに役立ちます。また、`SelectedSeriesItemsChanged` イベントと `SelectedSeriesItems` は、選択内容に基づいたデータ分析を行うポップアップやその他の画面など、アプリケーション内で実行できるその他のアクションを取り巻く堅牢なビジネス要件を構築するための追加の支援として利用できます。 

- [ツリーマップのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-リーマップのハイライト表示) - ツリー マップの項目のマウスオーバーによるハイライト表示を構成できる `HighlightingMode` プロパティが公開されました。このプロパティには 2 つのオプションがあります: `Brighten` では、マウスを置いた項目にのみハイライト表示が適用され、`FadeOthers` では、マウスホバーした項目のハイライト表示はそのままで、それ以外はすべてフェードアウトします。このハイライト表示はアニメーション化されており、`HighlightingTransitionDuration` プロパティを使用して制御できます。

- [ツリーマップのパーセントベースのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-ツリーマップのパーセントベースのハイライト表示) - 新しいパーセントベースのハイライト表示により、ノードはコレクションの進行状況またはサブセットを表すことができます。外観は、データ項目のメンバーによって、または新しい `HighlightedItemsSource` を指定することによって、特定の値までの背景色の塗りつぶしとして表示されます。`HighlightedValuesDisplayMode` で切り替えることができ、`FillBrushes` でスタイルを設定できます。

- `Toolbar` - 選択した特定のツールの周囲に境界線を描くための ToolAction の新しい `IsHighlighted` オプション。

### {PackageGauges} (ゲージ)

- `XamRadialGauge`
    - ハイライト針の新しいラベル。`HighlightLabelText` と `HighlightLabelSnapsToNeedlePivot` および、その他の HighlightLabel の多くのスタイル関連プロパティが追加されました。

## **{PackageVerChanges-24-1-JUN}**

* Angular 18 のサポート。

### {PackageCharts} (チャート)

* [データ凡例のグループ化](charts/features/chart-data-legend.md#{PlatformLower}-データ凡例のグループ化) と [データ ツールチップのグループ化](charts/features/chart-data-tooltip.md#{PlatformLower}-データ-チャートのデータ-ツールチップのグループ化) - 新しいグループ化機能が追加されました。`GroupRowVisible` プロパティは、各シリーズのグループ化を切り替え、オプトインすると `DataLegendGroup` プロパティを介してグループ テキストを割り当てることができます 同じ値が複数のシリーズに適用されている場合、それらはグループ化されて表示されます。すべてのユーザー向けに分類および整理する必要がある大規模なデータセットに役立ちます。

- [チャートの選択](charts/features/chart-data-selection.md) - 新しいシリーズ選択のスタイル設定。これは、`CategoryChart` および `XamDataChart` のすべてのカテゴリ、財務、およびラジアル シリーズに広く採用されています。シリーズはクリックして異なる色で表示したり、明るくしたり、薄くしたり、フォーカスのアウトラインを表示したりできます。個々のシリーズまたはデータ項目全体を通じて影響を受ける項目を管理します。
複数のシリーズとマーカーがサポートされています。特定のデータ項目の値間のさまざまな相違点や類似点を示すのに役立ちます。また、`SelectedSeriesItemsChanged` イベントと `SelectedSeriesItems` は、選択内容に基づいたデータ分析を行うポップアップやその他の画面など、アプリケーション内で実行できるその他のアクションを取り巻く堅牢なビジネス要件を構築するための追加の支援として利用できます。 

- [ツリーマップのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-リーマップのハイライト表示) - ツリー マップの項目のマウスオーバーによるハイライト表示を構成できる `HighlightingMode` プロパティが公開されました。このプロパティには 2 つのオプションがあります: `Brighten` では、マウスを置いた項目にのみハイライト表示が適用され、`FadeOthers` では、マウスホバーした項目のハイライト表示はそのままで、それ以外はすべてフェードアウトします。このハイライト表示はアニメーション化されており、`HighlightingTransitionDuration` プロパティを使用して制御できます。

- [ツリーマップのパーセントベースのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-ツリーマップのパーセントベースのハイライト表示) - 新しいパーセントベースのハイライト表示により、ノードはコレクションの進行状況またはサブセットを表すことができます。外観は、データ項目のメンバーによって、または新しい `HighlightedItemsSource` を指定することによって、特定の値までの背景色の塗りつぶしとして表示されます。`HighlightedValuesDisplayMode` で切り替えることができ、`FillBrushes` でスタイルを設定できます。

- `Toolbar` - 選択した特定のツールの周囲に境界線を描くための ToolAction の新しい `IsHighlighted` オプション。

### {PackageGauges} (ゲージ)

- `XamRadialGauge`
    - ハイライト針の新しいラベル。`HighlightLabelText` と `HighlightLabelSnapsToNeedlePivot` および、その他の HighlightLabel の多くのスタイル関連プロパティが追加されました。

## **{PackageVerChanges-23-2-MAR}**

### {PackageCharts}

- `InitialFilter` プロパティによる新しいデータ フィルタリング。フィルター式を適用して、チャート データをレコードのサブセットにフィルターします。大規模なデータのドリルダウンに使用できます。

- `XamRadialChart` 
    - 新しいラベル モード
        `CategoryAngleAxis` は、ラベルの位置をさらに構成できる `LabelMode` プロパティを公開するようになりました。これにより、`Center` 列挙型を選択してデフォルト モードを切り替えることも、ラベルを円形のプロット領域に近づける新しいモード `ClosestPoint` を使用することもできます。

### {PackageGauges}

- `XamRadialGauge`
    - 新しいタイトル/サブタイトルのプロパティ。`TitleText`、`SubtitleText` はゲージの下部近くに表示されます。さらに、`TitleFontSize`、`TitleFontFamily`、`TitleFontStyle`、`TitleFontWeight`、`TitleExtent` など、さまざまなタイトルとサブタイトルのフォント プロパティが追加されました。最後に、新しい `TitleDisplaysValue` により、値を針の位置に対応させることができます。 
    - `XamRadialGauge` の新しい `OpticalScalingEnabled` プロパティと `OpticalScalingSize` プロパティ。この新機能は、ゲージのラベル、タイトル、サブタイトルが 100% のオプティカル スケーリングを持つサイズを管理します。この新機能の詳細については、[こちら](radial-gauge.md#オプティカル-スケーリング)を参照してください。
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamLinearGauge`
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamBulletGraph`
    - `HighlightValueDisplayMode` が 'Overlay' 設定に適用されたとき、パフォーマンス バーには値と新しい `HighlightValue` の差が反映されるようになりました。ハイライト値には、フィルタリング/サブセットが完了した測定パーセンテージが塗りつぶされた色で表示され、残りのバーの外観は割り当てられた値に対して薄く表示され、リアルタイムでパフォーマンスを示します。

## **{PackageVerChanges-23-2-JAN}**

### {PackageCharts} (チャート)

* [チャートのハイライト表示フィルター](charts/features/chart-highlight-filter.md) - `CategoryChart` と `XamDataChart` は、データのサブセットの内外でハイライト表示およびアニメーション化する方法を公開するようになりました。このハイライト表示の表示はシリーズのタイプによって異なります。列およびエリア シリーズの場合、サブセットはデータの合計セットの上に表示され、サブセットはシリーズの実際のブラシによって色付けされ、合計セットは不透明度を下げます。折れ線シリーズの場合、サブセットは点線で表示されます。

## **{PackageVerChanges-23-2}**

### {PackageGrids} (Toolbar - ベータ版)

* クリップボードを介してチャートを画像に保存するための保存ツール アクションが追加されました。
* ツールバーの `Orientation` プロパティを介して垂直方向が追加されました。デフォルトでは、ツールバーは水平方向ですが、ツールバーを垂直方向に表示できるようになり、ツールが左右にポップアップ表示されます。
* ツールバーの `renderImageFromText` メソッドを介してカスタム SVG アイコンのサポートが追加され、カスタム ツールの作成がさらに強化されました。

## **{PackageVerChanges-23-1}**

### 新しいコンポーネント

* [Toolbar](menus/toolbar.md) - ベータ版。このコンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、`XamDataChart` または `CategoryChart` コンポーネントにリンクされると、プロパティとツール項目のプリセットで動的に更新されます。プロジェクト用のカスタム ツールを作成して、エンド ユーザーが変更を提供できるようになり、無限のカスタマイズが可能になります。

### {PackageCharts} (チャート)

* [ValueLayer](charts/features/chart-overlays.md#{PlatformLower}-value-layer) - `ValueLayer` という名前の新しいシリーズ タイプが公開されました。これにより、Maximum、Minimum、Average など、プロットされたデータのさまざまな焦点のオーバーレイを描画できます。これは、新しい `ValueLines` コレクションに追加することで、`CategoryChart` と `FinancialChart` に適用されます。

* **ダッシュ配列**を `XamDataChart` のシリーズのさまざまな部分に適用できるようになりました。これは、チャートにプロットされた[シリーズ](charts/types/line-chart.md#{PlatformLower}-折れ線チャートのスタイル設定)、チャートの[グリッド線](charts/features/chart-axis-gridlines.md#{PlatformLower}-軸グリッド線のプロパティ)、およびチャートにプロットされたシリーズの[トレンドライン](charts/features/chart-trendlines.md#{PlatformLower}-チャート-トレンドラインのダッシュ配列の例)に適用できます。

## **{PackageVerChanges-22-2.2}**
* Angular 16 のサポート。

## **{PackageVerChanges-22-2.1}**
* Angular 15 のサポート。

## **{PackageVerChanges-22-2}**

デフォルトの動作を大幅に改善し、カテゴリ チャート API を改良して使いやすくしました。これらの新しいチャートの改善点は次のとおりです:

* ブラウザー / 画面サイズに基づいた水平ラベル回転のレスポンシブ レイアウト。
* すべてのプラットフォームでの丸型ラベルの描画が強化されました。
* StackedFragmentSeries にマーカー プロパティを追加しました。
* `ShouldPanOnMaximumZoom` プロパティを追加しました。
* 新しいカテゴリ軸プロパティ:
    - ZoomMaximumCategoryRange
    - ZoomMaximumItemSpan
    - ZoomToCategoryRange
    - ZoomToItemSpan
* カテゴリの文字列と数値をグループ化、ソート、集計するための新しい[チャート集計](charts/features/chart-data-aggregations.md) API により、チャート データを事前に集計または計算する必要がなくなります。
  - InitialSortDescriptions
  - InitialSorts
  - SortDescriptions
  - InitialGroups
  - InitialGroupDescriptions
  - GroupDescriptions
  - InitialSummaries
  - InitialSummaryDescriptions
  - SummaryDescriptions
  - InitialGroupSortDescriptions
  - GroupSorts
  - GroupSortDescriptions

> [!Note]
`IncludedProperties` | `ExcludedProperties` を使用している場合、チャートの[集計](charts/features/chart-data-aggregations.md)は機能しません。これらのプロパティは非集計データ用です。データを集計しようとすると、これらのプロパティは使用できなくなります。うまくいかない理由は、描画のためにチャートに渡されたコレクションを集計により置き換えるためです。include/exclude プロパティは、そのデータの in/out プロパティをフィルターするように設計されており、それらのプロパティは新しい集計されたコレクションには存在しません。

## **{PackageVerChanges-22-1}**
### {PackageCharts} (チャート)

* 高度に構成可能な [DataLegend](charts/features/chart-data-legend.md) コンポーネントが追加されました。これは、`Legend` とよく似たコンポーネントですが、シリーズの値を表示し、シリーズの行と値の列をフィルタリングし、値のスタイルとフォーマットを行うための多くの構成プロパティを提供します。
* 高度に構成可能な [DataToolTip](charts/features/chart-data-tooltip.md) が追加されました。これは、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。これは、すべてのチャート タイプのデフォルトのツールチップになりました。
* 積層シリーズのアニメーションとトランジションインのサポートが追加されました。`IsTransitionInEnabled` プロパティを true に設定すると、アニメーションを有効にできます。そこから、`TransitionInDuration` プロパティを設定してアニメーションが完了するまでの時間を決定し、`TransitionInMode` でアニメーションのタイプを決定できます。
* 追加された `AssigningCategoryStyle` イベントは、`XamDataChart` のすべてのシリーズで利用できるようになりました。このイベントは、背景色の `Fill` やハイライト表示など、シリーズ項目の外観を条件付きで構成する場合に処理されます。
* CalloutLayer の新しい `AllowedPositions` 列挙型。チャート内のどこにコールアウトを配置するかを制限するために使用されます。デフォルトでは、コールアウトは最適な場所に配置されますが、これは `TopLeft`、`TopRight`、`BottomLeft`、または `BottomRight` を強制するために使用されます。
* 注釈レイヤーに追加された新しいコーナー半径プロパティ。各コールアウトのコーナーを丸めるために使用されます。コーナー半径がデフォルトで追加されていることに注意してください。
    - CalloutLayer の `CalloutCornerRadius`
    - FinalValueLayer の `AxisAnnotationBackgroundCornerRadius`
    - CrosshairLayer の `XAxisAnnotationBackgroundCornerRadius` と `YAxisAnnotationBackgroundCornerRadius`
* さまざまな方法でスクロールバーを有効にするための新しい `HorizontalViewScrollbarMode` および `VerticalViewScrollbarMode` 列挙型。`IsVerticalZoomEnabled` または `IsHorizontalZoomEnabled` と組み合わせると、チャートをナビゲートするための軸に沿ったスクロールバーを、常設またはフェードインおよびフェードアウトすることができます。
* 新しい `FavorLabellingScaleEnd` は、軸がスケールの最後にラベルを表示することを優先するかどうかを決定します。数値軸 (`NumericXAxis`、`NumericYAxis`、`PercentChangeAxis` など) とのみ互換性があります。
* 新しい `IsSplineShapePartOfRange` は、軸に要求された軸範囲にスプライン形状を含めるかどうかを決定します。
* 新しい `XAxisMaximumGap` は、`XAxisGap` を使用するときにプロットされたシリーズの最大許容値を決定します。ギャップは、プロットされたシリーズの列またはバー間のスペースの量を決定します。
* 新しい `XAxisMinimumGapSize` は、`XAxisGap` を使用するときに、プロットされたシリーズの最小許容ピクセルベース値を決定し、各カテゴリ間に常にある程度の間隔があることを保証します。

<div class="divider--half"></div>

## **{PackageVerChanges-21-2}**

> [!Note]
> パッケージ「lit-html」を確認してください。最適な互換性のために、「^2.0.0」以降がプロジェクトに追加されます。

### {PackageCharts} (チャート)

このリリースでは、地理マップとすべてのチャート コンポーネントのビジュアル デザインと構成オプションにいくつかの改善と簡素化が導入されています。

* `FinancialChart` と `CategoryChart` の `YAxisLabelLocation` プロパティのタイプ **AxisLabelLocation** を **YAxisLabelLocation** に変更しました。
* `FinancialChart` の `XAxisLabelLocation` プロパティのタイプ **AxisLabelLocation** を **XAxisLabelLocation** に変更しました。
* `CategoryChart` に `XAxisLabelLocation` プロパティを追加しました。
* Legend で `XamGeographicMap` の地理的シリーズを表すためのサポートを追加しました。
* `FinancialChart` と `CategoryChart` にデフォルトで十字線を追加しました。
* `FinancialChart`と `CategoryChart` にデフォルトで十字線注釈を追加しました。
* デフォルトで `FinancialChart` に最終値の注釈を追加しました。
* カテゴリ チャートとファイナンシャル チャートに新しいプロパティを追加しました:
   - 十字線をカスタマイズするための `CrosshairsLineThickness` およびその他のプロパティ
   - 十字線の注釈をカスタマイズするための `CrosshairsAnnotationXAxisBackground` およびその他のプロパティ
   - 最終値の注釈をカスタマイズするための `FinalValueAnnotationsBackground` およびその他のプロパティ
   - 塗りつぶしの図形の不透明度の変更を可能にする (エリア チャートなど) `AreaFillOpacity`
   - マーカーの厚さの変更を可能にする `MarkerThickness`
* カテゴリ チャート、ファイナンシャル チャート、データ チャート、および地理マップに新しいプロパティを追加しました。
   - 同じチャート内の複数のシリーズにどのマーカー タイプを割り当てるを可能にする `MarkerAutomaticBehavior`
   - 凡例で表されるすべてのシリーズのバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例のすべてのシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
* データ チャートと地理マップのシリーズに新しいプロパティを追加しました。
   - 凡例で表される特定のシリーズにバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例の特定のシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
* カテゴリ チャートとシリーズのデフォルトの垂直十字線ストロークを <span style="color:#000000">#000000</span> から <span style="color:#BBBBBB">#BBBBBB</span> に変更しました。
* 同じチャートにプロットされたすべてのシリーズのマーカーの図形を円に変更しました。これは、チャートの `MarkerAutomaticBehavior` プロパティを `SmartIndexed` 列挙値に設定することで元に戻すことができます。
* チャートの凡例のシリーズの簡略化された図形で、円、線、または四角のみを表示します。これは、チャートの `LegendItemBadgeMode` プロパティを `MatchSeries` 列挙値に設定することで元に戻すことができます。
* すべてのチャートに表示されるシリーズとマーカーのカラー パレットを変更しました。

| 古いのブラシ/アウトライン | 新のアウトライン/ブラシ |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

<div class="divider--half"></div>

## **{PackageVerChanges-21-1}**
### {PackageCharts} (チャート)

このリリースでは、すべてのチャート コンポーネントに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。例えば、`XamDataChart`、`CategoryChart`、および `FinancialChart`。

* 棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
* heat min プロパティの 散布高密度シリーズの色を <span style="color:#8a5bb1">#8a5bb1</span> から <span style="color:#000000">#000000</span> に変更しました。
* heat max プロパティの 散布高密度シリーズの色を <span style="color:#ee5879">#ee5879</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
* ファイナンシャル/ウォーターフォール シリーズの `NegativeBrush` および `NegativeOutline` プロパティを <span style="color:#C62828">#C62828</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
* マーカーの厚さを 1px から 2px に変更しました。
* `PointSeries`、`BubbleSeries`、`ScatterSeries`、`PolarScatterSeries` のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。`MarkerFillMode` プロパティを Normal に設定すると、この変更を元に戻すことができます。
* `TimeXAxis` および `OrdinalTimeXAxis` のラベリングを圧縮しました。
* 新しいマーカー プロパティ:
    - series.`MarkerFillMode` - マーカーがアウトラインに依存するように、`MatchMarkerOutline` に設定できます。
    - series.`MarkerFillOpacity` - 0〜1 の値に設定できます。
    - series.`MarkerOutlineMode` - マーカーのアウトラインが塗りブラシの色に依存するように、`MatchMarkerBrush` に設定できます。
* 新シリーズプロパティ:
    - series.`OutlineMode` - シリーズ アウトラインの表示を切り替えるように設定できます。データ チャートの場合、プロパティはシリーズ上にあることに注意してください。
    - チャートがデフォルトのズーム レベルにあるときにビューポートに導入されるブリード オーバー領域を定義する新しいチャート プロパティを追加しました。一般的な使用例では、軸と最初/最後のデータ ポイントの間にスペースを提供します。以下にリストされている `ComputedPlotAreaMarginMode` は、マーカーが有効になっているときに自動的にマージンを設定することに注意してください。その他は、厚さを表す `Double` を指定するように設計されており、PlotAreaMarginLeft などがチャートの 4 辺すべてにスペースを調整します:
    - chart.`PlotAreaMarginLeft`
    - chart.`PlotAreaMarginTop`
    - chart.`PlotAreaMarginRight`
    - chart.`PlotAreaMarginBottom`
    - chart.`ComputedPlotAreaMarginMode`
* 新しいハイライト表示プロパティ:
    - chart.`HighlightingMode` - ホバーされたシリーズとホバーされていないシリーズをフェードまたは明るくするかを設定します。
    - chart.`HighlightingBehavior` - 真上または最も近い項目など、マウスの位置に応じてシリーズをハイライト表示するかどうかを設定します。
    - 以前のリリースでは、ハイライト表示はホバー時にフェードするように制限されていたことに注意してください。
* 積層型、散布図、極座標、ラジアル、図形シリーズにハイライト表示を追加しました。
* 積層型、散布図、極座標、ラジアル、図形注釈レイヤーを追加しました。
* 積層型シリーズ内の個々の積層フラグメントのデータ ソースをオーバーライドするためのサポートが追加されました。
* 積層型、散布、範囲、極座標、ラジアル、シェイプ シリーズにカスタム スタイルのイベントを追加しました。
* 垂直ズームをシリーズ コンテンツに自動的に同期するサポートが追加されました。
* 表示された最初のラベルに基づいてチャートの水平マージンを自動的に拡張するサポートが追加されました。
* シリーズとマーカーの再設計されたカラー パレット:

| 古いのブラシ/アウトライン | 新のアウトライン/ブラシ |
| -------------------- | ------------------- |
| <span style="color:#7446B9">#7446B9</span> <br><span style="color:#9FB328">#9FB328</span> <br><span style="color:#F96232">#F96232</span> <br><span style="color:#2E9CA6">#2E9CA6</span> <br><span style="color:#DC3F76">#DC3F76</span> <br><span style="color:#FF9800">#FF9800</span> <br><span style="color:#3F51B5">#3F51B5</span> <br><span style="color:#439C47">#439C47</span> <br><span style="color:#795548">#795548</span> <br><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br><span style="color:#8b5bb1">#8b5bb1</span> <br><span style="color:#6db1ff">#6db1ff</span> <br><span style="color:#f8a15f">#f8a15f</span> <br><span style="color:#ee5879">#ee5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#f7d262">#f7d262</span> <br><span style="color:#8ce7d9">#8ce7d9</span> <br><span style="color:#e051a9">#e051a9</span> <br><span style="color:#a8a8b7">#a8a8b7</span> <br> |

例:

|   |   |
|---|---|
| <img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" /> |
| <img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" /> |

#### チャート凡例

* バブル、ドーナツ、および円チャートで使用できる水平方向の `Orientation` プロパティを ItemLegend に追加しました。
* `LegendHighlightingMode` プロパティを追加 - 凡例項目にカーソルを合わせたときにシリーズのハイライト表示を有効にします。

### {PackageMaps} (GeoMap)

> [!Note]
> これらの機能は CTP です。

* マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
* 座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
* シェイプ シリーズのハイライト表示のサポートが追加されました。
* シェイプ シリーズの一部の注釈レイヤーのサポートが追加されました。

<div class="divider--half"></div>

## **{PackageVerChangedImports}**

- Import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!Note]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

| 影響されるパッケージ | 影響されるコンポーネント |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel ライブラリ](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [スプレッドシート](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [マップ](geo-map.md)、[ツリーマップ](charts/types/treemap-chart.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [ブレット グラフ](bullet-graph.md)、[リニア ゲージ](linear-gauge.md)、[ラジアル ゲージ](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| カテゴリ チャート、データ チャート、ドーナツ チャート、ファイナンシャル チャート、円チャート、[ズーム スライダー](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | すべてのクラスと列挙型  |

- 変更後のコード

API クラスと列挙型へのフル パスの代わりにパッケージ名のみを使用できます。

注: Data Grid コンポーネントとそれに対応するモジュールの名前も変更されました。

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";
import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';
// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";
// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

- 変更前のコード

以前は、API クラスと列挙型への完全なパスを使用してインポートする必要がありました。

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-angular-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-angular-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-angular-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-angular-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
```