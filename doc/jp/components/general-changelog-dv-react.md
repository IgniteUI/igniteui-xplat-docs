---
title: {Platform} 新機能 | {ProductName} | インフラジスティックス
_description: {ProductName} の新機能について学んでください。
_keywords: Changelog, What's New, {ProductName}, Infragistics, 変更ログ, 新機能, インフラジスティックス
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {ProductName} 変更ログ

{ProductName} の各バージョンのすべての重要な変更は、このページに記載されています。

## **{PackageVerChanges-24-1-SEP}**

### {PackageCharts} (チャート)
 
- 新しい[データ円チャート](charts/types/data-pie-chart.md) - `DataPieChart` は円ャートを表示する新しいコンポーネントです。このコンポーネントは、`CategoryChart` と同様に動作し、基になるデータ モデルのプロパティを自動的に検出しながら、ItemLegend コンポーネントを介して選択、強調表示、アニメーション、凡例のサポートを可能にします。

- 新しい [比例カテゴリ角度軸](charts/types/radial-chart.md) - スライスをプロットするための、`XamDataChart` のラジアル円シリーズの新しい軸。円チャートに似ており、データ ポイントが円グラフ内のセグメントとして表されます。

- `Toolbar`

    - 新しい ToolActionCheckboxList。
        選択用のチェックボックスを備えた項目のコレクションを表示する新しい CheckboxList ToolAction。 ToolAction CheckboxList 内のグリッドの高さは 5 項目まで大きくなり、その後スクロールバーが表示されます。
        IgrCheckboxListModule を登録する必要があります。

    - 新しいフィルタリングのサポート。

    - 軸フィールドの変更。
        CategoryChart をターゲットにする場合のツールバーの新しいデフォルトの IconMenu。
        ラベル フィールドは X 軸にマップされ、値フィールドは Y 軸にマップされます。
        ターゲット チャートは、行われた変更にリアルタイムで反応します。チャートに ItemsSource が設定されていない場合、IconMenu は非表示になります。

### {PackageCommon}

- 新しい [Banner](notifications/banner.md) コンポーネント。
- 新しい [DatePicker](scheduling/date-picker.md) コンポーネント。
- 新しい `Divider` コンポーネント。
- すべてのコンポーネントにネイティブ イベントのサポートが追加されました。
- `Icon`
  - `setIconRef` メソッドが追加されました。これにより、アイコンを SVG ファイルで登録および置き換えることができます。
  - すべてのコンポーネントが内部的な参照によるアイコンを使用するようになり、カスタム テンプレートを明示的に提供しなくても簡単に置き換えられるようになりました。
- `Combo`、`DatePicker`、`Dialog`、`Dropdown`、 `ExpansionPanel`、`NavDrawer`、`Toast`、`Snackbar`、**IgrSelectComponent**
  - トグル メソッドの `show`、`hide`、`toggle` メソッドは、成功した場合に **true** を返すようになりました。そうでない場合は **false**。
- **IgrButtonComponent**、`IconButton`、`Checkbox`、`Switch`、`Combo`、`DateTimeInput`、`Input`、`MaskInput`、`Radio`、**IgrSelectComponent**、`Textarea`
  - カスタムの `focus` および `blur` イベントは非推奨になりました。代わりにネイティブの `onFocus` および `onBlur` イベントを使用してください。
- `RadioGroup`
  - `Name` および `Value` プロパティを追加しました。

**重大な変更**:

- 古い **IgrDatePicker** の名前を **IgrXDatePicker** に変更しました。
- `Form` コンポーネントを削除しました。代わりにネイティブのフォームを使用してください。
- 以下のコンポーネントの `size` プロパティが削除され、代わりに `--ig-size` CSS カスタム プロパティが使用されるようになりました。
  - `Avatar`、 **IgrButtonComponent**、`IconButton`、`Calendar`、`Chip`、`Dropdown`、`Icon`、`Input`、`List`、`Rating`、`Snackbar`、`Tabs`、`Tree`
- `Badge`、`Chip`、`LinearProgress`、`CircularProgress`
  - `Variant` プロパティ タイプの名前を `StyleVariant` に変更しました。
- `Calendar`
  - `WeekStart` プロパティ タイプの名前を `WeekDays` に変更しました。
- `Checkbox`、`Switch`
  - `change` イベント引数タイプを `ComponentBoolValueChangedEventArgs` から `CheckboxChangeEventArgs` に変更しました。
- `Combo`、**IgrSelectComponent**
  - `positionStrategy`、`flip`、`sameWidth` プロパティが削除されました。
- `DateTimeInput`
  - `maxValue` および `minValue` プロパティが削除されました。代わりに `max` および `min` を使用してください。
- `Dropdown`
  - `positionStrategy` プロパティが削除されました。
- `Input`
  - 古い名前の `maxlength` および `minlength` プロパティが削除されました。`maxLength` および `minLength` を使用してください。
  - 古い名前の `readonly` および `inputmode` プロパティが削除されました。`readOnly` および `inputMode` を使用してください。
  - `inputMode` タイプも `string` (文字列) に変更されました。
- `Radio`
  - `change` イベント引数タイプを `ComponentBoolValueChangedEventArgs` から `RadioChangeEventArgs` に変更しました。
- `RangeSlider`
  - `ariaThumbLower` および `ariaThumbUpper` プロパティが削除されました。代わりに `thumbLabelLower` および `thumbLabelUpper` を使用してください。
- `Rating`
  - `readonly` プロパティの名前を `readOnly` に変更しました。

### {PackageGrids}

- **すべてのグリッド**
  - 新しい `RowClick` イベントが追加されました。
- `PivotGrid`
  - `PivotDimension` に `sortable` プロパティが追加されました。
  - 水平レイアウトが追加されました。新しい `pivotUI` プロパティ内で `rowLayout` `horizontal` として有効にできます。
  - 水平レイアウトのみの行ディメンション サマリーが追加されました。`horizontalSummary` を **true** に設定することで、各 `PivotDimension` に対して有効にできます。
  - 水平集計の位置を設定するための `horizontalSummariesPosition` プロパティを `pivotUI` に追加しました。
  - 行ディメンションの行ヘッダーが追加されました。新しい `pivotUI` プロパティ内で `showHeaders` **true** として有効にできます。
  - キーボード ナビゲーションで行ディメンションヘッダーや列ヘッダーから行ヘッダーへ移動できるようになりました。
  - キーボード操作で行ディメンションの縮小 (<kbd>Alt</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>) および行ヘッダーのソート (<kbd>Ctrl</kbd> + <kbd>↑</kbd> <kbd>↓</kbd>) ができるようになりました。

**重大な変更**:

- **すべてのグリッド**
  - `RowIsland`
  - `displayDensity` の非推奨のプロパティが削除されました。
  - `actualColumns`、`contentColumns` プロパティの名前を、`actualColumnList` および `contentColumnList` に変更しました。すべての列を取得するには、`columns` または `columnList` プロパティを使用してください。
  - `rowDelete` および `rowAdd` イベント引数タイプの名前を `RowDataCancelableEventArgs` に変更しました。
  - `contextMenu` イベント引数タイプの名前を `GridContextMenuEventArgs` に変更しました。
  - `GridEditEventArgs`、`GridEditDoneEventArgs`、`PinRowEventArgs` イベントの `rowID` および `primaryKey` プロパティが削除されました。代わりに `rowKey` を使用してください。
- `PivotGrid`
  - `showPivotConfigurationUI` プロパティが削除されました。`pivotUI` を使用して、その中に新しい `showConfiguration` オプションを設定してください。
- `Column`
  - `movable` プロパティが削除されました。グリッドの `moving` プロパティを使用してください。
  - `columnChildren` プロパティが削除されました。代わりに `childColumns` を使用してください。
- `ColumnGroup`
  - `children` プロパティが削除されました。代わりに `childColumns` を使用してください。
- `Paginator`
  - `isFirstPageDisabled` および `isLastPageDisabled` プロパティが削除されました。代わりに、`isFirstPage` および `isLastPage` を使用してください。

## **{PackageVerChanges-24-1-JUN}**

### {PackageCommon}
- `Input`、`Textarea` - ユーザー入力を制限することなく検証ルールを適用できるように `ValidateOnly` を公開しました。
- `Dropdown` - `PositionStrategy` プロパティは非推奨です。ドロップダウンは、ブラウザー ビューポートの最上位レイヤーにコンテナーをレンダリングするために `Popover` API を使用するようになったため、このプロパティは廃止されました。
- `DockManager` - `SplitPane` の `IsMaximized` は非推奨です。分割ペイン レベルで isMaximized を true に設定しても、分割ペインはコンテナーとしてのみ機能し、最大化されて表示される実際のコンテンツがないため、実際の効果はありません。代わりに、`TabGroupPane` および/または `ContentPane` の `IsMaximized` プロパティを使用してください。

### {PackageGrids}

- `DisplayDensity` は非推奨となり、代わりに `--ig-size` CSS カスタム プロパティが使用されるようになりました。詳細については、[グリッド サイズ](grids/grid/size.md) トピックを参照してください。

- `PivotGrid` - コンポーネントの構成が正しく適用できるようになりました。

### {PackageCharts} (チャート)

* [データ凡例のグループ化](charts/features/chart-data-legend.md#{PlatformLower}-データ凡例のグループ化) と [データ ツールチップのグループ化](charts/features/chart-data-tooltip.md#{PlatformLower}-データ-チャートのデータ-ツールチップのグループ化) - 新しいグループ化機能が追加されました。`GroupRowVisible` プロパティは、各シリーズのグループ化を切り替え、オプトインすると `DataLegendGroup` プロパティを介してグループ テキストを割り当てることができます 同じ値が複数のシリーズに適用されている場合、それらはグループ化されて表示されます。すべてのユーザー向けに分類および整理する必要がある大規模なデータセットに役立ちます。

- [チャートの選択](charts/features/chart-data-selection.md) - 新しいシリーズ選択のスタイル設定。これは、`CategoryChart` および `XamDataChart` のすべてのカテゴリ、財務、およびラジアル シリーズに広く採用されています。シリーズはクリックして異なる色で表示したり、明るくしたり、薄くしたり、フォーカスのアウトラインを表示したりできます。個々のシリーズまたはデータ項目全体を通じて影響を受ける項目を管理します。
複数のシリーズとマーカーがサポートされています。特定のデータ項目の値間のさまざまな相違点や類似点を示すのに役立ちます。また、`SelectedSeriesItemsChanged` イベントと `SelectedSeriesItems` は、選択内容に基づいたデータ分析を行うポップアップやその他の画面など、アプリケーション内で実行できるその他のアクションを取り巻く堅牢なビジネス要件を構築するための追加の支援として利用できます。 

- [比例カテゴリ角度軸](charts/types/radial-chart.md) - `XamDataChart` のラジアル円シリーズの新しい軸により、データ チャートのすべての追加機能を使用してロバスト可能な視覚化をする円チャートの作成が可能になります。

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

### {PackageGrids}

- 新しい [`HierarchicalGrid`](grids/hierarchical-grid/overview.md) コンポーネント

### {PackageGauges}

- `XamRadialGauge`
    - 新しいタイトル/サブタイトルのプロパティ。`TitleText`、`SubtitleText` はゲージの下部近くに表示されます。さらに、`TitleFontSize`、`TitleFontFamily`、`TitleFontStyle`、`TitleFontWeight`、`TitleExtent` など、さまざまなタイトルとサブタイトルのフォント プロパティが追加されました。最後に、新しい `TitleDisplaysValue` により、値を針の位置に対応させることができます。 
    - `XamRadialGauge` の新しい `OpticalScalingEnabled` プロパティと `OpticalScalingSize` プロパティ。この新機能は、ゲージのラベル、タイトル、サブタイトルが 100% のオプティカル スケーリングを持つサイズを管理します。この新機能の詳細については、[こちら](radial-gauge.md#オプティカル-スケーリング)を参照してください。
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamLinearGauge`
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamBulletGraph`
    - `HighlightValueDisplayMode` が 'Overlay' 設定に適用されたとき、パフォーマンス バーには値と新しい `HighlightValue` の差が反映されるようになりました。ハイライト値には、フィルタリング/サブセットが完了した測定パーセンテージが塗りつぶされた色で表示され、残りのバーの外観は割り当てられた値に対して薄く表示され、リアルタイムでパフォーマンスを示します。

### {PackageCommon}

- 新しい `Textarea` コンポーネント
- 新しい `ButtonGroup` コンポーネント
- `DockManager`
    - 新しい `ProximityDock` プロパティ。有効にすると、ドッキング インジケーターは表示されなくなり、エンド ユーザーは、ドラッグしたペインをターゲット ペインの端に近づけてドラッグすることでドッキングできます
    - 新しい `ContainedInBoundaries` プロパティ。フローティング ペインを Dock Manager の境界内に保持するかどうかを決定します。デフォルトは **false** です。
    - 新しい `ShowPaneHeaders` プロパティ。ペインのヘッダーをホバー時にのみ表示するか、常に表示するかを決定します。デフォルトは `always` です。
- `Input`、`MaskInput`、`DateTimeInput`、`Rating`
    - `Readonly` は `ReadOnly` に名前が変更されました。
- `Input`
    - `Maxlength` は `MaxLength` に名前が変更されました。
    - `Minlength` は `MinLength` に名前が変更されました。
- `Tree`
    - ノードをクリックすると展開状態が変更されるかどうかを決定する `toggleNodeOnClick` プロパティが追加されました。デフォルトは **false** です。
- `Rating`
     - `allowReset` が追加されました。有効にすると、同じ値を選択するとコンポーネントがリセットされます。**動作の変更** - 以前のリリースでは、これが Rating コンポーネントのデフォルトの動作でした。アプリケーションでこの動作を維持する必要がある場合は、必ず `allowReset` を設定してください。
- `Select`、`Dropdown` 
    - `selectedItem`、`items`、および `groups` ゲッターが公開されました。

#### 非推奨

- `Form` コンポーネントは非推奨になりました。代わりにネイティブのフォーム要素を使用してください。
- `size` プロパティと属性は、すべてのコンポーネントで非推奨になりました。代わりに `--ig-size` CSS カスタム プロパティを使用してください。次の例では、Avatar コンポーネントのサイズを小さく設定します:
    ```css
    .avatar {
        --ig-size: var(--ig-size-small);
    }
    ```
- `DateTimeInput`
    - `MinValue` および `MaxValue` プロパティは非推奨になりました。代わりに `Min` および `Max` を使用してください。
- `RangeSlider`
    - `AriaLabelLower` および `AriaLabelUpper` プロパティは非推奨になりました。代わりに `ThumbLabelLower` および `ThumbLabelUpper` を使用してください。

#### 削除済

- デフォルトの属性を隠していた独自の `dir` 属性が削除されました。これは互換性のある変更です。
- `Slider` - `ariaLabel` シャドウ プロパティ。これは互換性のある変更です。
- `Checkbox` - `ariaLabelledBy` シャドウ属性。これは互換性のある変更です。
- `Switch` - `ariaLabelledBy` シャドウ属性。これは互換性のある変更です。
- `Radio` - `ariaLabelledBy` シャドウ属性。これは互換性のある変更です。

## **{PackageVerChanges-23-2-JAN}**

### {PackageCharts} (チャート)

* [チャートのハイライト表示フィルター](charts/features/chart-highlight-filter.md) - `CategoryChart` と `XamDataChart` は、データのサブセットの内外でハイライト表示およびアニメーション化する方法を公開するようになりました。このハイライト表示の表示はシリーズのタイプによって異なります。列およびエリア シリーズの場合、サブセットはデータの合計セットの上に表示され、サブセットはシリーズの実際のブラシによって色付けされ、合計セットは不透明度を下げます。折れ線シリーズの場合、サブセットは点線で表示されます。

## **{PackageVerChanges-23-2-DEC}**

### {PackageGrids} (Grid)

* 新規機能:
    - [状態保持](grids/grid/state-persistence.md)

## **{PackageVerChanges-23-2}**

### {PackageGrids} (Toolbar - ベータ版)

* クリップボードを介してチャートを画像に保存するための保存ツール アクションが追加されました。
* ツールバーの `Orientation` プロパティを介して垂直方向が追加されました。デフォルトでは、ツールバーは水平方向ですが、ツールバーを垂直方向に表示できるようになり、ツールが左右にポップアップ表示されます。
* ツールバーの `renderImageFromText` メソッドを介してカスタム SVG アイコンのサポートが追加され、カスタム ツールの作成がさらに強化されました。

* [Grid](grids/data-grid.md) - これは新しい完全に機能するクロスプラットフォーム グリッドで、フィルタリング、ソート、テンプレート、行の選択、行のグループ化、行のピン固定、移動可能な列などの機能が含まれています。

### 非推奨のコンポーネント

> [DataGrid](grids/data-grid/overview.md) - DataGrid は非推奨です。[Grid](grids/data-grid.md) を使用してください。

## **{PackageVerChanges-23-1}**

### 新しいコンポーネント

* [Toolbar](menus/toolbar.md) - ベータ版。このコンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、`XamDataChart` または `CategoryChart` コンポーネントにリンクされると、プロパティとツール項目のプリセットで動的に更新されます。プロジェクト用のカスタム ツールを作成して、エンド ユーザーが変更を提供できるようになり、無限のカスタマイズが可能になります。

### {PackageCharts} (チャート)

* [ValueLayer](charts/features/chart-overlays.md#{PlatformLower}-value-layer) - `ValueLayer` という名前の新しいシリーズ タイプが公開されました。これにより、Maximum、Minimum、Average など、プロットされたデータのさまざまな焦点のオーバーレイを描画できます。これは、新しい `ValueLines` コレクションに追加することで、`CategoryChart` と `FinancialChart` に適用されます。

* **ダッシュ配列**を `XamDataChart` のシリーズのさまざまな部分に適用できるようになりました。これは、チャートにプロットされた[シリーズ](charts/types/line-chart.md#{PlatformLower}-折れ線チャートのスタイル設定)、チャートの[グリッド線](charts/features/chart-axis-gridlines.md#{PlatformLower}-軸グリッド線のプロパティ)、およびチャートにプロットされたシリーズの[トレンドライン](charts/features/chart-trendlines.md#{PlatformLower}-チャート-トレンドラインのダッシュ配列の例)に適用できます。

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
`IncludedProperties` | `ExcludedProperties` を使用している場合、[チャート集計](charts/features/chart-data-aggregations.md)は機能しません。チャートのこれらのプロパティは非集計データ用です。データを集計しようとすると、これらのプロパティは使用できなくなります。うまくいかない理由は、描画のためにチャートに渡されたコレクションを集計により置き換えるためです。include/exclude プロパティは、そのデータの in/out プロパティをフィルターするように設計されており、それらのプロパティは新しい集計されたコレクションには存在しません。

### {PackageGrids} (データ グリッド)

* **{IgPrefix}Column** を `DataGridColumn` に変更しました。
* **GridCellEventArgs** を `DataGridCellEventArgs` に変更しました。
* **GridSelectionMode** を `DataGridSelectionMode` に変更しました。
* **SummaryOperand** を `DataSourceSummaryOperand` に変更しました。

## **{PackageVerChanges-22-1}**
### {PackageCharts} (チャート)

* 高度に構成可能な [DataLegend](charts/features/chart-data-legend.md) コンポーネントが追加されました。これは、`Legend` とよく似たコンポーネントですが、シリーズの値を表示し、シリーズの行と値の列をフィルタリングし、値のスタイルとフォーマットを行うための多くの構成プロパティを提供します。
* 高度に構成可能な [DataToolTip](charts/features/chart-data-tooltip.md) が追加されました。これは、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。これは、すべてのチャート タイプのデフォルトのツールチップになりました。
* 積層シリーズのアニメーションとトランジションインのサポートが追加されました。`IsTransitionInEnabled` プロパティを true に設定すると、アニメーションを有効にできます。そこから、`TransitionInDuration` プロパティを設定してアニメーションが完了するまでの時間を決定し、`TransitionInMode` でアニメーションのタイプを決定できます。
* 追加された `AssigningCategoryStyle` イベントは、`XamDataChart` のすべてのシリーズで利用できるようになりました。このイベントは、背景色の `Fill` やハイライト表示など、シリーズ項目の外観を条件付きで構成する場合に処理されます。
* CalloutLayer の新しい `AllowedPositions` 列挙体。チャート内のどこにコールアウトを配置するかを制限するために使用されます。デフォルトでは、コールアウトは最適な場所に配置されますが、これは `TopLeft`、`TopRight`、`BottomLeft`、または `BottomRight` を強制するために使用されます。
* 注釈レイヤーに追加された新しいコーナー半径プロパティ。各コールアウトのコーナーを丸めるために使用されます。コーナー半径がデフォルトで追加されていることに注意してください。
    - CalloutLayer の `CalloutCornerRadius`
    - FinalValueLayer の `AxisAnnotationBackgroundCornerRadius`
    - CrosshairLayer の `XAxisAnnotationBackgroundCornerRadius` と `YAxisAnnotationBackgroundCornerRadius`
* さまざまな方法でスクロールバーを有効にするための新しい `HorizontalViewScrollbarMode` および `VerticalViewScrollbarMode` 列挙体。`IsVerticalZoomEnabled` または `IsHorizontalZoomEnabled` と組み合わせると、チャートをナビゲートするための軸に沿ったスクロールバーを、常設またはフェードインおよびフェードアウトすることができます。
* 新しい `FavorLabellingScaleEnd` は、軸がスケールの最後にラベルを表示することを優先するかどうかを決定します。数値軸 (`NumericXAxis`、`NumericYAxis`、`PercentChangeAxis` など) とのみ互換性があります。
* 新しい `IsSplineShapePartOfRange` は、軸に要求された軸範囲にスプライン形状を含めるかどうかを決定します。
* 新しい `XAxisMaximumGap` は、`XAxisGap` を使用するときにプロットされたシリーズの最大許容値を決定します。ギャップは、プロットされたシリーズの列またはバー間のスペースの量を決定します。
* 新しい `XAxisMinimumGapSize` は、`XAxisGap` を使用するときに、プロットされたシリーズの最小許容ピクセルベース値を決定し、各カテゴリ間に常にある程度の間隔があることを保証します。

### {PackageGrids} (データ グリッド)

新機能 - [行ページング](grids/data-grid/row-paging.md)を追加しました。これは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。ページネーションを使用すると、データを設定された行数で表示することができ、ユーザーはスクロール バーを使用せずにデータを順次閲覧することができます。テーブル ページネーションの UI には通常、現在のページ、合計ページ、ユーザーがページをめくるためのクリック可能な [前へ] と [次へ] の矢印 / ボタンなどが含まれます。

## **{PackageVerChanges-21-2.1}**

### {PackageGrids} (データ グリッド)

#### データ グリッド
- ドロップダウンの項目に複数のフィールドで構成されるキーが含まれている場合に使用される `ComboBoxColumn` に string[] 型の `ValueMultiField` が追加されました。

> [!Note]
> 以下の重大な変更が導入されました

- `ValueField` プロパティを string[] 型から string に変更しました。

### {PackageInputs} (入力)

#### 日付ピッカー
- ValueChanged イベントを `SelectedValueChanged` に変更しました。

#### 複数列コンボボックス
- `TextChanged` イベントを `TextValueChanged` に変更しました。
- `ValueChanged` イベントを `SelectedValueChanged` に変更しました。

<div class="divider--half"></div>

## **{PackageVerChanges-21-2}**

> [!Note]
> パッケージ「lit-html」を確認してください。最適な互換性のために、「^2.0.0」以降がプロジェクトに追加されます。

### {PackageCharts} (チャート)

このリリースでは、地理マップとすべてのチャート コンポーネントのビジュアル デザインと構成オプションにいくつかの改善と簡素化が導入されています。

* `FinancialChart` と `CategoryChart` の `YAxisLabelLocation` プロパティのタイプを **AxisLabelLocation** から **YAxisLabelLocation** に変更しました。
* `FinancialChart` の **AxisLabelLocation** から **XAxisLabelLocation** に `XAxisLabelLocation` プロパティのタイプを変更しました。
* `CategoryChart` に `XAxisLabelLocation` プロパティを追加しました。
* 凡例で `XamGeographicMap` の地理的なシリーズを表すためのサポートが追加されました。
* `FinancialChart` と`CategoryChart` にデフォルトの十字線を追加しました。
* `FinancialChart` と`CategoryChart` にデフォルトの十字線の注釈を追加しました。
* `FinancialChart` にデフォルトで最終値の注釈を追加しました。
* カテゴリ チャートとファイナンシャル チャートに新しいプロパティを追加しました:
   - 十字線をカスタマイズするための `CrosshairsLineThickness` およびその他のプロパティ
   - 十字線の注釈をカスタマイズするための `CrosshairsAnnotationXAxisBackground` およびその他のプロパティ
   - 最終値の注釈をカスタマイズするための `FinalValueAnnotationsBackground` およびその他のプロパティ
   - シリーズ塗りつぶしの不透明度を変更できる `AreaFillOpacity` (エリア チャートなど)
   - マーカーの厚さを変更できる `MarkerThickness`
* カテゴリ チャート、ファイナンシャル チャート、データ チャート、および地理マップに新しいプロパティを追加しました。
   - 同じチャート内の複数のシリーズにどのマーカー タイプを割り当てることができる `MarkerAutomaticBehavior`
   - 凡例で表されるすべてのシリーズのバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例のすべてのシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
* データ チャートと地理マップのシリーズに新しいプロパティを追加しました。
   - 凡例で表される特定のシリーズにバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例の特定のシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
* カテゴリ チャートとシリーズで、デフォルトの垂直十字線ストロークを<span style="color:#000000">#000000</span> から <span style="color:#BBBBBB">#BBBBBB</span> に変更しました。
* 同じチャートにプロットされたすべてのシリーズのマーカーの図形を円に変更しました。これは、チャートの `MarkerAutomaticBehavior` プロパティを `SmartIndexed` 列挙値に設定することで元に戻すことができます。
* チャートの凡例のシリーズの簡略化された図形で、円、線、または四角のみを表示します。これは、チャートの `LegendItemBadgeMode` プロパティを `MatchSeries` 列挙値に設定することで元に戻すことができます。
* アクセシビリティを向上させるために、すべてのチャートに表示されるシリーズとマーカーのカラー パレットを変更しました

| 古いのブラシ/アウトライン | 新のアウトライン/ブラシ |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

<div class="divider--half"></div>

### {PackageGrids} (データ グリッド)

* 新規機能:
    - [フィルター行](grids/data-grid/column-filtering.md)
    - [レイアウトのカスタマイズ読み込み/保存](grids/data-grid/load-save-layout.md)
    - [列をグループ化するための GroupBy 領域](grids/data-grid/row-grouping.md)
    - [セルの結合](grids/data-grid/cell-merging.md)
* 新規 API:
    - `SelectionChanged` イベントを追加しました。複数行の選択など、選択のインタラクションの変化を検出するために使用されます。
* 重大な変更:
    - グリッドの SummaryScope プロパティのタイプを `DataSourceSummaryScope` から SummaryScope に変更しました。
    - GroupHeaderDisplayMode プロパティのタイプを `DataSourceSectionHeaderDisplayMode` から GroupHeaderDisplayMode に変更しました。

<div class="divider--half"></div>

## **{PackageVerChanges-21-1}**
### {PackageCharts} (チャート)

このリリースでは、すべてのチャート コンポーネントに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。例えば、`XamDataChart`、`CategoryChart`、および `FinancialChart`。

* 棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
* heat min プロパティの 散布高密度シリーズの色を <span style="color:#8a5bb1">#8a5bb1</span> から <span style="color:#000000">#000000</span> に変更しました。
* heat max プロパティの 散布高密度シリーズの色を <span style="color:#ee5879">#ee5879</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
* ファイナンシャル/ウォーターフォール シリーズの `NegativeBrush` および `NegativeOutline` プロパティを <span style="color:#C62828">#C62828</span> から <span style="color:#ee5879">#ee5879</span> に変更しました
* マーカーの厚さを 1 pxから 2 pxに変更しました。
* `PointSeries`、`BubbleSeries`、`ScatterSeries`、`PolarScatterSeries` のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。`MarkerFillMode` プロパティを Normal に設定すると、この変更を元に戻すことができます。
* `TimeXAxis` と`OrdinalTimeXAxis` のラベリングを圧縮しました。
* 新しいマーカー プロパティ:
    - series.`MarkerFillMode` - マーカーがアウトラインに依存するように、`MatchMarkerOutline` に設定できます。
    - series.`MarkerFillOpacity` - 0〜1 の値に設定できます。
    - series.`MarkerOutlineMode` - マーカーのアウトラインが塗りブラシの色に依存するように、'MatchMarkerBrush' に設定できます。
* 新シリーズ  プロパティ:
    - series.`OutlineMode` - シリーズ アウトラインの表示を切り替えるように設定できます。データ チャートの場合、プロパティはシリーズ上にあることに注意してください。
* チャートがデフォルトのズーム レベルにあるときにビューポートに導入されるブリード オーバー領域を定義する新しいチャート プロパティを追加しました。一般的な使用例では、軸と最初/最後のデータ ポイントの間にスペースを提供します。以下にリストされている `ComputedPlotAreaMarginMode` は、マーカーが有効になっているときに自動的にマージンを設定することに注意してください。その他は、厚さを表す `Double` を指定するように設計されており、PlotAreaMarginLeft などがチャートの 4 辺すべてにスペースを調整します。
    - chart.`PlotAreaMarginLeft`
    - chart.`PlotAreaMarginTop`
    - chart.`PlotAreaMarginRight`
    - chart.`PlotAreaMarginBottom`
    - chart.`ComputedPlotAreaMarginMode`
* 新しいハイライト表示プロパティ:
    - chart.`HighlightingMode` - ホバーされたシリーズとホバーされていないシリーズをフェードまたは明るくするかを設定します。
    - chart.`HighlightingBehavior` - 真上または最も近い項目など、マウスの位置に応じてシリーズをハイライト表示するかどうかを設定します。
    - 以前のリリースでは、ハイライト表示はホバー時にフェードするように制限されていたことに注意してください。
* 積層型、散布、極座標、ラジアル、およびシェイプ シリーズにハイライト表示を追加しました。
* 積層型、散布、極座標、ラジアル、およびシェイプ シリーズに注釈レイヤーを追加しました。
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
* `LegendHighlightingMode` プロパティの追加 - 凡例項目にホバーした時にシリーズのハイライト表示を有効にします。

### {PackageMaps} (GeoMap)

> [!Note]
> これらの機能は CTP です。

* マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
* 座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
* シェイプ シリーズのハイライト表示のサポートが追加されました。

<div class="divider--half"></div>

### {PackageGrids} (データ グリッド)

* `EditOnKeyPress`、(別名: Excel スタイルの編集) を追加し、入力するとすぐに編集を開始します。
* `EditModeClickAction` プロパティを追加しました - デフォルトでは、編集モードに入るにはダブル クリックが必要です。これを `SingleClick` に設定して、新しいセルを選択するときに編集モードを実行できるようにすることができます。
* `EnterKeyBehaviors` プロパティの追加 - 別名 Excel スタイル ナビゲーション (Enter 動作) - Enter キーの動作を制御します。たとえば、オプションは none、edit、move up、down、left、right です。
* `EnterKeyBehaviorAfterEdit` プロパティの追加 - 編集モードでは、このプロパティは Enter キーが押されたときを制御します。例えば、オプションは (下、上、右、左のセルに移動) です。
* `SelectAllRows` メソッドを追加しました。
* 行範囲の選択を追加しました - `GridSelectionMode` プロパティを MultipleRow に設定すると、次の新しい機能が含まれるようになりました:
    - クリックしてドラッグし、行を選択します。
    - Shift キーを押しながらクリックして、複数の行を選択します。
    - Shift キーを押しながら上下の矢印キーを押して、複数の行を選択します。
* スペース バーを押すと、MultipleRow または SingleRow に設定された `GridSelectionMode` プロパティを介してアクティブな行の選択が切り替わります。
* 列オプション ダイアログに列集計を追加しました。

### {PackageInputs} (入力)

#### 日付ピッカー

* `ShowTodayButton` - 現在の日付のボタンの表示を切り替えます。
* `Label` - 日付値の上にラベルを追加します。
* `Placeholder` プロパティ - 値が選択されていない場合にカスタム テキストを追加します。
* `FormatString` - 入力日付文字列をカスタマイズします。(例: `yyyy-MM-dd`)
* `DateFormat` - 選択した日付を LongDate または ShortDate のどちらとして表示するかを指定します。
* `FirstDayOfWeek` - 週の最初の曜日を指定します。
* `FirstWeekOfYear` - 年の最初の週をいつ表示するかを指定します。例えば、最初の 1 週間、最初の 4 日間の週です。
* `ShowWeekNumbers` - 週番号の表示を切り替えます。
* `MinDate` & `MaxDate` - 使用可能の選択できる日付の範囲を指定する日付制限。
* アクセシビリティの追加

<div class="divider--half"></div>

## **{PackageVerChangedFields}**

### {PackageGrids} (データ グリッド)

> [!Note]
> これらの重大な変更は、グリッド パッケージで導入されました。

- PropertyPath の名称変更

データ グリッド コンポーネントの `propertyPath` プロパティ名が `field` に変更されました。これは、すべての Column タイプ、GroupDescription、SortDescription および SummaryDescription に適用します。

```tsx
 <IgrTextColumn field="Name"/>
```

```ts
import { IgrColumnSummaryDescription, IgrColumnSortDescription, IgrColumnGroupDescription } from 'igniteui-react-grids'
const productCount = new IgrColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgrColumnGroupDescription();
income.field = "Income";
```

## **{PackageVerRenamedGrid}**

### {PackageGrids} (データ グリッド)

- Live Grid の名称変更

Data Grid コンポーネントおよび対応するモジュールの名前が 「LiveGrid」 から 「DataGrid」 に変更されました。

> [!Note]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

グリッドとそれに対応するモジュールをインポートする新しいコードは以下のとおりです。

```ts
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridModule } from 'igniteui-react-grids';
```

- Data Grid の必須ピア依存関係

Data Grid コンポーネントには「inputs」パッケージが必要です。

```ts
**npm install --save {PackageInputs}**
```

<div class="divider--half"></div>

## **{PackageVerChangedImports}**

- import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!Note]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

| 影響されるパッケージ | 影響されるコンポーネント |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel ライブラリ](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [スプレッドシート](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [地理マップ](geo-map.md)、[ツリーマップ](charts/types/treemap-chart.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [ブレット グラフ](bullet-graph.md)、[リニア ゲージ](linear-gauge.md)、[ラジアル ゲージ](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| カテゴリ チャート、データ チャート、ドーナツ チャート、ファイナンシャル チャート、円チャート、[ズーム スライダー](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | すべてのクラスと列挙型  |
| <a href="{PackageWebsite}{PackageGrids}/v/{PackageVerChangedImports}" target="_blank">{PackageGrids}</a> | [データ グリッド](grids/data-grid/overview.md) |

- 変更後のコード

API クラスと列挙型へのフル パスの代わりにパッケージ名のみを使用できます。

注: Data Grid コンポーネントとそれに対応するモジュールの名前も変更されました。

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { SweepDirection } from 'igniteui-react-core';
// charts:
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
// maps:
import { IgrGeographicMap } from "igniteui-react-maps";
import { IgrGeographicMapModule } from "igniteui-react-maps";
// grids:
import { IgrLiveGrid } from "igniteui-react-grids";
import { IgrLiveGridModule } from 'igniteui-react-grids';
```

- 変更前のコード

以前は、API クラスと列挙型への完全なパスを使用してインポートする必要がありました。

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges/ES5/igr-linear-gauge";
import { IgrLinearGaugeModule } from "igniteui-react-gauges/ES5/igr-linear-gauge-module";
import { IgrLinearGraphRange } from "igniteui-react-gauges/ES5/igr-linear-graph-range";

import { IgrRadialGauge } from "igniteui-react-gauges/ES5/igr-radial-gauge";
import { IgrRadialGaugeModule } from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import { IgrRadialGaugeRange } from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import { SweepDirection } from "igniteui-react-core/ES5/SweepDirection";

// charts:
import { IgrFinancialChart } from "igniteui-react-charts/ES5/igr-financial-chart";
import { IgrFinancialChartModule } from "igniteui-react-charts/ES5/igr-financial-chart-module";
import { IgrDataChart } from "igniteui-react-charts/ES5/igr-data-chart";
import { IgrDataChartCoreModule } from "igniteui-react-charts/ES5/igr-data-chart-core-module";

// maps:
import { IgrGeographicMap } from "igniteui-react-maps/ES5/igr-geographic-map";
import { IgrGeographicMapModule } from "igniteui-react-maps/ES5/igr-geographic-map-module";

// grids:
import { IgrLiveGrid } from "igniteui-react-grids/ES5/igr-live-grid";
import { IgrLiveGridModule } from 'igniteui-react-grids/ES5/igr-live-grid-module';
```
