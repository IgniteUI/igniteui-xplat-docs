---
title: {Platform} 新機能 | {ProductName} | インフラジスティックス
_description: {ProductName} の新機能について学んでください。
_keywords: Changelog, What's New, {ProductName}, Infragistics, 変更ログ, 新機能, インフラジスティックス
_language: ja
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode"]
namespace: Infragistics.Controls.Charts
---
# {ProductName} 変更ログ

{ProductName} の各バージョンのすべての重要な変更は、このページに記載されています。

## **{PackageVerChanges-23-2-JAN}**

### {PackageCharts} チャート

* [チャート強調表示フィルター](charts/features/chart-highlight-filter.md) - `CategoryChart` と `DataChart` は、データのサブセットの内外で強調表示およびアニメーション化する方法を公開するようになりました。この強調表示の表示はシリーズのタイプによって異なります。列およびエリア シリーズの場合、サブセットはデータの合計セットの上に表示され、サブセットはシリーズの実際のブラシによって色付けされ、合計セットは不透明度を下げます。折れ線シリーズの場合、サブセットは点線で表示されます。

## **{PackageVerChanges-23-2-DEC}**

### {PackageGrids} (Grid)
* 新規機能:
    - [状態保持](grids/grid/state-persistence.md)

### {PackageGrids} (Toolbar - ベータ版)

* クリップボードを介してチャートを画像に保存するための新しいツールがデフォルトのツールとして追加されました。
* ツールバーの `Orientation` プロパティを介して垂直方向が追加されました。デフォルトでは、ツールバーは水平方向ですが、ツールバーを垂直方向に表示できるようになり、ツールが左右にポップアップ表示されます。
* ツールバーの `renderImageFromText` メソッドを介してカスタム SVG アイコンのサポートが追加され、カスタム ツールの作成がさらに強化されました。

## **{PackageVerChanges-23-1}**

### 新しいコンポーネント

* [Toolbar](menus/toolbar.md) - ベータ版。このコンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、`XamDataChart` または `CategoryChart` コンポーネントにリンクされると、プロパティとツール項目のプリセットで動的に更新されます。プロジェクト用のカスタム ツールを作成して、エンド ユーザーが変更を提供できるようになり、無限のカスタマイズが可能になります。

### {PackageCharts} チャート

* [ValueLayer](charts/features/chart-overlays.md#{PlatformLower}-value-layer) - `ValueLayer` という名前の新しいシリーズ タイプが公開されました。これにより、Maximum、Minimum、Average など、プロットされたデータのさまざまな焦点のオーバーレイを描画できます。これは、新しい `ValueLines` コレクションに追加することで、`CategoryChart` と `FinancialChart` に適用されます。

* **ダッシュ配列**を `XamDataChart` のシリーズのさまざまな部分に適用できるようになりました。これは、チャートにプロットされた[シリーズ](charts/types/line-chart.md#{PlatformLower}-折れ線チャートのスタイル設定)、チャートの[グリッド線](charts/features/chart-axis-gridlines.md#{PlatformLower}-軸グリッド線のプロパティ)、およびチャートにプロットされたシリーズの[トレンドライン](charts/features/chart-trendlines.md#{PlatformLower}-チャート-トレンドラインのダッシュ配列の例)に適用できます。

## **{PackageVerChanges-22-2.2}**

### 新しいコンポーネント

* [Dialog](notifications/dialog.md)
* [Select](inputs/select.md)

### {PackageGrids} (データ グリッド)

* 新しい引数 `PrimaryKey` が `IgcRowDataEventArgs` に導入されました。これは、`RowAdded` および `RowDeleted` イベントによって発行されるイベント引数の一部です。グリッドに主キー属性が追加されている場合、発行された primaryKey イベント引数は行 ID を表し、それ以外の場合はデフォルトで未定義になります。
* `RowSelectionChanging` イベント引数が変更されました。現在、グリッドが primaryKey を設定した場合、`OldSelection`、`NewSelection`、`Added` および `Removed` コレクションは、選択された要素の行キーで構成されなくなりましたが、いずれにしても行データが出力されるようになりました。
* グリッドがリモート データを操作していて、主キーが設定されている場合、現在グリッド ビューに含まれていない選択された行に対して、部分的な行データ オブジェクトが発行されます。
* 選択された行がグリッド コンポーネントから削除されると、`RowSelectionChanging` イベントは発生しなくなります。
* `OnGroupingDone` イベントは `GroupingDone` に名前が変更され、on プレフィックスを付けない出力規則に違反しなくなりました。
* `OnDensityChanged` イベントの名前が `DensityChanged` に変更され、on プレフィックスを付けない出力規則に違反しなくなりました。このイベントを公開しているすべてのコンポーネントが影響を受けます。

### {PackageInputs}

* `IgcDateTimeInput`、StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) は、DateTimeInputDatePart ではなく DatePart に切り詰められるようになりました。
* `IgcRadio` および `IgcRadioGroup` は、無効な状態のスタイルとともにコンポーネントの検証が追加されました。
* `IgcMask` は、マスク パターン リテラルをエスケープする機能が追加されました。
* `IgcBadge` は、バッジの形状を制御する `Shape` プロパティを追加し、`Square` または `Rounded` のいずれかになります。デフォルトでは、バッジの形状は rounded です。
* `IgcAvatar`、`roundShape` プロパティは廃止され、将来のバージョンで削除される予定です。ユーザーは、新しく追加された `Shape` 属性によってアバターの形状を制御できます。これは、`Square`、`Rounded`、または `Circle` にすることができます。アバターのデフォルトの形状は `Square`です。

### {PackageGrids} (ピボット グリッド)

* `IgcPivotDateDimension` プロパティの `InBaseDimension` と `InOption` は廃止され、それぞれ `BaseDimension` と `Options` に名前が変更されました。

### {PackageDockManager} (DockManager)

* [ドック マネージャー](layouts/dock-manager.md) のペイン コレクションに保護されたセッターが追加されました。ペインを作成するときに、ネストされた構造でペインを設定するのではなく、Add を呼び出す必要があります。

## **{PackageVerChanges-22-2.1}**

### 新しいコンポーネント

* [Accordion](layouts/accordion.md)
* [Combo Box](inputs/combo/overview.md)
* [Expansion Panel](layouts/expansion-panel.md)
* [Pivot Grid](grids/pivot-grid/overview.md)
* [Stepper](layouts/stepper.md)
* [Tabs](layouts/tabs.md)

## **{PackageVerChanges-22-2}**

### 新しいコンポーネント

* [Grid](grids/data-grid.md)
* [Tree Grid](grids/tree-grid/overview.md)

### {PackageCharts}

デフォルトの動作を大幅に改善し、カテゴリ チャート API を改良して使いやすくしました。

これらの新しいチャートの改善点は次のとおりです:

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

* `Column` を `DataGridColumn` に変更しました。
* `GridCellEventArgs` を `DataGridCellEventArgs` に変更しました。
* `GridSelectionMode` を `DataGridSelectionMode` に変更しました。
* `SummaryOperand` を `DataSourceSummaryOperand` に変更しました。

## **{PackageVerChanges-22-1}**
### {PackageCharts}

* 高度に構成可能な [DataLegend](charts/features/chart-data-legend.md) コンポーネントが追加されました。これは、`Legend` とよく似たコンポーネントですが、シリーズの値を表示し、シリーズの行と値の列をフィルタリングし、値のスタイルとフォーマットを行うための多くの構成プロパティを提供します。
* 高度に構成可能な [DataToolTip](charts/features/chart-data-tooltip.md) が追加されました。これは、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。これは、すべてのチャート タイプのデフォルトのツールチップになりました。
* 積層シリーズのアニメーションとトランジションインのサポートが追加されました。`IsTransitionInEnabled` プロパティを true に設定すると、アニメーションを有効にできます。そこから、`TransitionInDuration` プロパティを設定してアニメーションが完了するまでの時間を決定し、`TransitionInMode` でアニメーションのタイプを決定できます。
* 追加された `AssigningCategoryStyle` イベントは、`DataChart` のすべてのシリーズで利用できるようになりました。このイベントは、背景色の `Fill` や強調表示など、シリーズ項目の外観を条件付きで構成する場合に処理されます。
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

* 新規機能:
- [行のページング](grids/data-grid/row-paging.md)

ページネーションは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。ページネーションを使用すると、データを設定された行数で表示することができ、ユーザーはスクロール バーを使用せずにデータを順次閲覧することができます。テーブル ページネーションの UI には通常、現在のページ、合計ページ、ユーザーがページをめくるためのクリック可能な [前へ] と [次へ] の矢印 / ボタンなどが含まれます。

### 新しいコンポーネント

* [Chip](inputs/chip.md)
* [Circular Progress](inputs/circular-progress.md)
* [Linear Progress](inputs/linear-progress.md)
* [Drop Down](inputs/dropdown.md)
* [Slider & Range Slider](inputs/slider.md)
* [Snackbar](notifications/snackbar.md)
* [Toast](notifications/toast.md)

<div class="divider--half"></div>

## **2.0.0**
### {PackageComponents}
#### 新しいコンポーネントとテーマ

これらは **{PackageComponents}** パッケージでのみ関連しています。

* [スライダー](inputs/slider.md)を追加しました。
* [範囲スライダー](inputs/slider.md)を追加しました。
* `igniteui-webcomponents/themes/bootstrap.css` のテーマの構造を変更するダーク テーマを追加しました:
ライト テーマの場合は `igniteui-webcomponents/themes/light/bootstrap.css`
ダーク テーマの場合は `igniteui-webcomponents/themes/dark/bootstrap.css`

#### 重大な変更

このリリースでは、Calendar、Card、Navigation Drawer、および Radio コンポーネントの API にいくつかの重大な変更が導入されています。

* Radio コンポーネントの `required` プロパティをサポートする機能が追加されました。
* 重大な変更:
    * Calendar コンポーネントの **value: Date | Date[]** プロパティを 2 つのプロパティに分割しました: `value`: Date おとび `values`: Date[]。
    * Calendar コンポーネントの **hasHeader** プロパティと **has-header** 属性をそれぞれ `hideHeader` と `hide-header` に置き換えました。
    * Card コンポーネントの **outlined** プロパティを `elevated` に置き換えました。
    * Navigation Drawer コンポーネントの **igcOpening**、**igcOpened**、**igcClosing**、および **igcClosed** イベントを削除しました。

<div class="divider--half"></div>

## **{PackageVerChanges-21-2.1}**

### {PackageGrids} (データ グリッド)

#### データ グリッド
- ドロップダウンの項目に複数のフィールドで構成されるキーが含まれている場合に使用される `ComboBoxColumn` に string[] 型の `ValueMultiField` が追加されました。

> [!Note]
> 以下の重大な変更が導入されました:

- `ValueField` プロパティを string[] 型から string に変更しました。

### {PackageInputs}

#### 日付ピッカー
- `ValueChanged` イベントを `SelectedValueChanged` に変更しました。

#### 複数列コンボボックス
- `TextChanged` イベントを `TextValueChanged` に変更しました。
- `ValueChanged` イベントを `SelectedValueChanged` に変更しました。

<div class="divider--half"></div>

## **1.0.0**
### {PackageComponents}
#### 新しいコンポーネント

これらは **{PackageComponents}** パッケージでのみ関連しています。

* [Avatar](layouts/avatar.md)
* [Badge](inputs/badge.md)
* [Button & Icon Button](inputs/button.md)
* [Calendar](scheduling/calendar.md)
* [Card](layouts/card.md)
* [Checkbox](inputs/checkbox.md)
* [Form](inputs/form.md)
* [Icon](layouts/icon.md)
* [Input](inputs/input.md)
* [List](grids/list.md)
* [Navigation Bar](menus/navbar.md)
* [Navigation Drawer](menus/navigation-drawer.md)
* [Radio & Radio Group](inputs/radio.md)
* [Ripple](inputs/ripple.md)
* [Switch](inputs/switch.md)

<div class="divider--half"></div>

## **{PackageVerChanges-21-2}**

> [!Note]
> パッケージ 「lit-html」 を確認してください。最適な互換性のために、「^2.0.0」 以降がプロジェクトに追加されます。

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

このリリースでは、すべてのチャート コンポーネントに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。例えば、`DataChart`、`CategoryChart`、および `FinancialChart`。

* 棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
* heat min プロパティの 散布高密度シリーズの色を <span style="color:#8a5bb1">#8a5bb1</span> から <span style="color:#000000">#000000</span> に変更しました。
* heat max プロパティの 散布高密度シリーズの色を <span style="color:#ee5879">#ee5879</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
* ファイナンシャル/ウォーターフォール シリーズの `NegativeBrush` および `NegativeOutline` プロパティを <span style="color:#C62828">#C62828</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
* マーカーの厚さを 1 pxから 2 pxに変更しました。
* `PointSeries`、`BubbleSeries`、`ScatterSeries`、`PolarScatterSeries` のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。`MarkerFillMode` プロパティを Normal に設定すると、この変更を元に戻すことができます。
* `TimeXAxis` と`OrdinalTimeXAxis` のラベリングを圧縮しました。
* 新しいマーカー プロパティ:
    - series.`MarkerFillMode` - マーカーがアウトラインに依存するように、`MarkerFillMode` に設定できます。
    - series.`MarkerFillOpacity` - 0〜1 の値に設定できます。
    - series.`MarkerOutlineMode` - マーカーのアウトラインが塗りブラシの色に依存するように、`MatchMarkerBrush` に設定できます。
* 新シリーズ  プロパティ:
    - series.`OutlineMode` - シリーズ アウトラインの表示を切り替えるように設定できます。データ チャートの場合、プロパティはシリーズ上にあることに注意してください。
* チャートがデフォルトのズーム レベルにあるときにビューポートに導入されるブリード オーバー領域を定義する新しいチャート プロパティを追加しました。一般的な使用例では、軸と最初/最後のデータ ポイントの間にスペースを提供します。以下にリストされている `ComputedPlotAreaMarginMode` は、マーカーが有効になっているときに自動的にマージンを設定することに注意してください。その他は、厚さを表す `Double` を指定するように設計されており、PlotAreaMarginLeft などがチャートの 4 辺すべてにスペースを調整します。
    - chart.`PlotAreaMarginLeft`
    - chart.`PlotAreaMarginTop`
    - chart.`PlotAreaMarginRight`
    - chart.`PlotAreaMarginBottom`
    - chart.`ComputedPlotAreaMarginMode`
* 新しい強調表示プロパティ:
    - chart.`HighlightingMode` - ホバーされたシリーズとホバーされていないシリーズをフェードまたは明るくするかを設定します。
    - chart.`HighlightingBehavior` - 真上または最も近い項目など、マウスの位置に応じてシリーズを強調表示するかどうかを設定します。
    - 以前のリリースでは、強調表示はホバー時にフェードするように制限されていたことに注意してください。
* 積層型、散布、極座標、ラジアル、およびシェイプ シリーズに強調表示を追加しました。
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
* `LegendHighlightingMode` プロパティの追加 - 凡例項目にホバーした時にシリーズの強調表示を有効にします。

### {PackageMaps} (GeoMap)

> [!Note]
> これらの機能は CTP です。

* マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
* 座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
* シェイプ シリーズの強調表示のサポートが追加されました。
* シェイプ シリーズの一部の注釈レイヤーのサポートが追加されました。

<div class="divider--half"></div>

### {PackageGrids}

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

### {PackageInputs}

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

```html
 <igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
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
import { IgcDataGrid } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
```

- Data Grid の必須ピア依存関係

Data Grid コンポーネントには 「inputs」 パッケージが必要です。

```ts
**npm install --save {PackageInputs}**
```
<!-- end: React, WebComponents -->

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
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
import { IgcLinearGaugeComponent } from "igniteui-webcomponents-gauges";
import { IgcLinearGaugeModule } from "igniteui-webcomponents-gauges";
import { IgcLinearGraphRange } from "igniteui-webcomponents-gauges";
import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeRange } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts";
// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps";
// grids:
import { IgcDataGridComponent } from "igniteui-webcomponents-grids";
import { IgcDataGridModule } from "igniteui-webcomponents-grids";
```

- 変更前のコード

以前は、API クラスと列挙型への完全なパスを使用してインポートする必要がありました。

```ts
// gauges:
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-component';
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-module';
import { IgcLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igc-linear-graph-range';

import { IgcRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-component";
import { IgcRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-module";
import { IgcRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-component";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-module";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts/ES5/igc-data-chart-component";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igc-data-chart-core-module";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-component";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-module";

// grids:
import { IgcLiveGridModule } from 'igniteui-webcomponents-grids/ES5/igc-live-grid-module';
import { IgcLiveGridComponent } from 'igniteui-webcomponents-grids/ES5/igc-live-grid-component';
```
