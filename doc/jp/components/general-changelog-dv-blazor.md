---
title: {Platform} 新機能 | {ProductName} | インフラジスティックス
_description: {ProductName} の新機能について学んでください。
_keywords: Changelog, What's New, {ProductName}, Infragistics, 変更ログ, 新機能, インフラジスティックス
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "Infragistics.Controls.DataGridCellEventArgs", "Infragistics.Controls.GridBaseDirective", "MaskInput", "Shape", "RoundShape", "XamRadialGauge, XamLinearGauge, XamBulletGraph, XamTreemap", "XamRadialChart", "Toolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {ProductName} 変更ログ

{ProductName} の各バージョンのすべての重要な変更は、このページに記載されています。

- バージョン 2024.2 以降、Ignite UI for Blazor ツールセットは .NET 9 をサポートします。.NET 9 の詳細については、[Microsoft サイト](https://learn.microsoft.com/ja-jp/dotnet/core/whats-new/dotnet-9/overview)をご確認ください。

## **{PackageVerLatest}**

### {PackageMaps} (地理マップ)

_重大な変更_

- `AzureMapsMapImagery` は `AzureMapsImagery` に名前が変更されました。
- `AzureMapsImagery` は `AzureMapsImageryStyle.Satellite` に名前が変更されました。
- 次の `AzureMapsImageryStyle` 列挙値は、Overlay サフィックスを含むように名前が変更されました。
  - `TerraOverlay`
  - `LabelsRoadOverlay`
  - `LabelsDarkGreyOverlay`
  - `HybridRoadOverlay`
  - `HybridDarkGreyOverlay`
  - `WeatherRadarOverlay`
  - `WeatherInfraredOverlay`
  - `TrafficAbsoluteOverlay`
  - `TrafficRelativeOverlay`
  - `TrafficRelativeDarkOverlay`
  - `TrafficDelayOverlay`
  - `TrafficReducedOverlay`

### {PackageCharts} (チャート)

#### <label>PREVIEW</label> 新しい軸ラベル イベント

軸ラベルに対するさまざまな操作を検出できるように、次のイベントが `IgbDataChart` に追加されました。

- `LabelMouseDown`
- `LabelMouseUp`
- `LabelMouseEnter`
- `LabelMouseLeave`
- `LabelMouseMove`
- `LabelMouseClick`

#### <label>PREVIEW</label> 対応軸

X 軸と Y 軸に `CompanionAxis` プロパティが追加され、既存の軸を簡単に複製できるようになりました。`CompanionAxisEnabled` プロパティを有効にすると、複製された軸はチャートの反対側に配置され、そこから各軸プロパティを設定できます。

#### <label>PREVIEW</label> RadialPieSeries インセット アウトライン

`RadialPieSeries` のアウトライン レンダリング方法を制御するために `UseInsetOutlines` プロパティが追加されました。**true** に設定すると、アウトラインがスライス形状の内側に描画され、**false** (既定値) に設定すると、アウトラインはスライス形状の端に半分内側・半分外側で描画されます。

_重大な変更_

- `ChartMouseEventArgs` クラスの `PlotAreaPosition` プロパティと `ChartPosition` プロパティが逆になっている問題が修正されました。これにより、`PlotAreaPosition` と `ChartPosition` が返す値が変更されます。

### {PackageGrids} (グリッド)

#### <label>PREVIEW</label> セル サフィックス コンテンツ

セル内のサフィックス コンテンツのサポートが追加されました。これにより、セル値の末尾にテキストやアイコンを追加してスタイルを設定できるようになりました。セル サフィックス コンテンツに追加されたプロパティの完全なリストは以下に示されており、`DataGridColumn` および `CellInfo` クラスで使用できます。

- `SuffixText`
- `SuffixTextColor`
- `SuffixTextFont`
- `SuffixIconName`
- `SuffixIconCollectionName`
- `SuffixIconStroke`
- `SuffixIconFill`
- `SuffixIconViewBoxLeft`
- `SuffixIconViewBoxTop`
- `SuffixIconViewBoxWidth`
- `SuffixIconViewBoxHeight`
- `TextDecoration`

アイコンに使用できる最大サイズは 24 x 24 であることに注意してください。これより大きいまたは小さいアイコンを提供することもできますが、アイコンが完全に表示されるように 24x24 のスペースに収まるように適切に拡大縮小するには、ビューボックス設定を構成する必要があります。

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|31624 | `IgbCategoryChart` | IgbCategoryChart を含むウィンドウをリサイズすると、チャートがシリーズをレンダリングできなくなる。|
|37307 | `IgbCheckBox` | IgbCheckBox で JS Heap、ノード、リスナーのリークが発生する。|
|27304 | `IgbDataChart` | ズーム長方形が背景長方形と同じ位置に配置されない。|
|37930 | `IgbDataChart` | Data Annotation Overlay のテキスト色が機能しない。|
|30600 | `IgbDoughnutChart` | チャートやシリーズに textStyle プロパティが存在しない (円チャートにはある)。|
|38231 | `IgbGrid` | 非ピン固定列は、非表示が存在する場合に元の位置に戻らない。|
|33861 | Excel Library | 折れ線チャートを追加すると、ドイツ語カルチャで Excel ファイルが破損する。|

### 機能拡張

#### IgbBulletGraph

- <label>PREVIEW</label> 新しい `LabelsVisible` プロパティが追加されました。

#### チャート

- DataToolTipLayer、ItemToolTipLayer、CategoryToolTipLayer にスタイル設定用の新しいプロパティが追加されました: `ToolTipBackground`、`ToolTipBorderBrush`、および `ToolTipBorderThickness`。

- DataLegend にスタイル設定用の新しいプロパティが追加されました: `ContentBackground`、`ContentBorderBrush`、および `ContentBorderThickness`。`ContentBorderBrush` と `ContentBorderThickness` はそれぞれ既定で transparent と 0 に設定されているため、境界線を表示するにはこれらのプロパティを設定する必要があります。

- マウスのワールド相対位置を提供する `WorldPosition` という新しいプロパティが `ChartMouseEventArgs` に追加されました。この位置は、軸空間内の X 軸と Y 軸の両方に対して 0 から 1 の間の値になります。

- `SeriesViewer` と `DomainChart` に `HighlightingFadeOpacity` が追加されました。ハイライト表示されたシリーズに適用される不透明度を設定できます。

#### IgbDataGrid

-  DataGrid に新しいプロパティ `stopPropagation` が追加されました。これにより、マウス イベントが親要素へバブリングするのを防止できます。

#### IgbLinearGauge

- <label>PREVIEW</label> 新しい `LabelsVisible` プロパティが追加されました。


### **{PackageVerChanges-25-1-AUG}**

### {PackageMaps} 地理マップ

#### <label>PREVIEW</label> Azure マップ画像のサポート

`IgbGeographicMap` は、 Azure ベースのマップ画像をサポートし、開発者は複数のアプリケーション タイプにわたって詳細かつ動的なマップを表示できるようになりました。複数のマップ レイヤーを組み合わせて地理データを視覚化し、インタラクティブなマッピング エクスペリエンスを簡単に作成できます。

注: Bing マップ画像のサポートは段階的に廃止されます。既存のエンタープライズ キーは引き続き Bing Maps にアクセスするために利用できるため、Azure Maps へ移行する間も現在のアプリケーションをそのまま利用可能です。

公開されている Azure Maps の一部は[こちら](https://azure.microsoft.com/ja-jp/products/azure-maps)をご覧ください。


### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|26952 | `IgbTabs` | Razor/JS の Change イベントで e.Detail が null になる問題を修正。|
|26953 | `IgbTabs` | タブを選択状態にしても、その後の操作で選択が反映されない問題を修正。|
|31910 | `IgbXDatePicker` | 「@bind-Value」 構文で値をバインドし、クリア ボタンをクリックするとエラーが発生する問題を修正。|
|31323 | `IgbDataChart`, `IgbGrid`, `IgbCombo` | データ タイプにコレクション タイプ プロパティがあり、そのコレクションの最初の要素が null の場合に NullReferenceException が発生する問題を修正。|
|38903 | `IgbTabs` | タブ内に配置されたコンポーネントでドロップダウン リストが正しい位置に表示されない問題を修正。|
|[139](https://github.com/IgniteUI/igniteui-blazor/issues/139) | `IgbDatePicker`, `IgbDateTimeInput` | Date Picker および Date Time Input が null 許容値をサポートしていない問題を修正。|

### 一般
以下のコンポーネントのプロパティが null 許容になりました。
- `Button`: `Form`
- `Calendar`: `SpecialDates`、`DisabledDates`
- `Combo`: `ValueKey`、`DisplayKey`、`GroupKey`
- `DatePicker`: `Value`、`Min`、`Max`
- `DateTimePicker`: `Value`、`Min`、`Max`
- `Dropdown`: `SelectedItem`
- `Input`: `Pattern`、`MinLength`、`MaxLength`、`Min`、`Max`、`Step`
- `Select`: `Value`、`SelectedItem`
- `Tile`: `ColStart`、`RowStart`
- `TileManager`: `MinColumnWidth`、`MinRowHeight`、`Gap`

## **{PackageVerChanges-25-1-JULY}**

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|36448 | `IgbRadialGauge` | ラジアル ラベルの書式設定プロパティ (例: Title、SubTitles) が機能しない。|
|37718 | `IgbTab` | タブ パネル内のグリッドに新しい行を追加した際に、予期しないスクロールが発生する。|
|37855 | `IgbGrid` | グリッドに HeaderTemplate が含まれており、ページが安全でない (http) プロトコルを使用してアクセスされた場合、Crypto.randomUID が見つからないというエラーがスローされる。|

### {PackageCharts} (チャート)

- 軸ラベルに使用できる <label>NEW</label> `MaximumExtent` および `MaximumExtentPercentage` プロパティを追加しました。

## **{PackageVerChanges-25-1-JUNE}**

### {PackageMaps} 地理マップ

> [!Note]
> 2025 年 6 月 30 日をもって、すべての Microsoft Bing Maps for Enterprise Basic (無料) アカウントはすべて廃止されます。無料の Basic アカウントおよびキーをご利用中の場合は、サービスの中断を回避するために今すぐ対応する必要があります。Bing Maps for Enterprise の有償ライセンスをお持ちの方は、2028 年 6 月 30 日までアプリケーション内で Bing Maps を引き続きご利用いただけます。
> 詳細は以下をご覧ください:

[Microsoft Bing ブログ](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### {PackageCharts} (チャート)

- <label>PREVIEW</label> [チャート データ注釈](charts/features/chart-data-annotations.md)レイヤーを追加しました:
  - データ注釈バンド レイヤー
  - データ注釈ライン レイヤー
  - データ注釈矩形レイヤー
  - データ注釈スライス レイヤー
  - データ注釈ストリップ レイヤー

- [データ ツールチップ](charts/features/chart-data-tooltip.md)と[データ 凡例](charts/features/chart-data-legend.md)では、ツールチップまたは凡例のコンテンツをテーブルまたは垂直レイアウト構造でレイアウトするために使用できる <label>PREVIEW</label> `LayoutMode` プロパティが公開されています。 

- <label>PREVIEW</label> チャートの `DefaultInteraction` プロパティが更新され、新しい列挙体 `DragSelect` が含まれるようになりました。これにより、ドラッグされたプレビュー Rect は、その中に含まれるポイントを選択します。 (ベータ版)

- <label>PREVIEW</label> [ValueOverlay と ValueLayer](charts/features/chart-overlays.md) は、上記にリストした <label>PREVIEW</label> [チャート データ注釈](charts/features/chart-data-annotations.md)に加えて、プロット領域に追加の注釈テキストをオーバーレイするために使用できる `OverlayText` プロパティを公開するようになりました。これらの注釈の外観は、OverlayText プレフィックスが付いた多くのプロパティを使用して構成できます。たとえば、`OverlayTextBrush` プロパティはオーバーレイ テキストの色を構成します。 (ベータ版)

- <label>NEW</label> [トレンドライン レイヤー](charts/features/chart-trendlines.md) シリーズ タイプを使用すると、トレンド ライン レイヤーごとに 1 つのトレンド ラインを特定のシリーズに適用できます。これにより、チャートに複数の [TrendlineLayer](charts/features/chart-overlays.md) シリーズ タイプを使用できるため、単一のシリーズで複数のトレンド ラインを使用できるようになります。

### 一般

- <label>NEW</label> `Tooltip` は、特定の要素のツールチップを表示する方法を提供します。使用するには、必要に応じてコンテンツを設定し、`Anchor` プロパティを介してターゲット要素の ID にリンクします。

    ```razor
    <IgbButton id="target-button">Hover me</IgbButton>
    <IgbTooltip Anchor="target-button">
        You've hovered the button! 🎉
    </IgbTooltip>
    ```

    ツールチップは、`Show/HideDelay`、ターゲットの周囲への `Placement`、カスタマイズ可能な `Show/HideTriggers` イベントを使用してさらにカスタマイズできます。

### 変更内容

- いくつかの列挙は名前が変更され、他の列挙と統合されました。名前の変更 (影響を受けるコンポーネントを含む):
    - `BaseAlertLikePosition` (`Snackbar` と `Toast`) は `AbsolutePosition` に名前が変更されました。
    - `ButtonGroupAlignment` (`ButtonGroup`)、`CalendarOrientation` (`Calendar`)、`CardActionsOrientation` (`CardActions`)、`DatePickerOrientation` (`DatePicker`)、`RadioGroupAlignment` (`RadioGroup`) が統合され、`ContentOrientation` に名前が変更されました。
    - `CalendarBaseSelection` (`Calendar`) は `CalendarSelection` に名前が変更されました。
    - `CarouselAnimationType` (`Carousel`) と `StepperHorizontalAnimation` (`Stepper`) が統合され、`HorizontalTransitionAnimation` に名前が変更されました。
    - `CheckboxBaseLabelPosition` (`Checkbox` と `Switch`) と `RadioLabelPosition` (`Radio`) が統合され、`ToggleLabelPosition` に名前が変更されました。
    - `DatePickerMode` (`DatePicker`) は `PickerMode` に名前が変更されました。
    - `DatePickerHeaderOrientation` (`DatePicker`) は `CalendarHeaderOrientation` に名前変更/統合されました。
    - `DropdownPlacement` (`Dropdown` と `Select`) は `PopoverPlacement` に名前が変更されました。
    - `DropdownScrollStrategy` (`Dropdown`) と `SelectScrollStrategy` (`Select`) が統合され、`PopoverScrollStrategy` に名前が変更されました。
    - `SliderBaseTickOrientation` (`Slider` および `RangeSlider`) の名前が `SliderTickOrientation` に変更されました。
    - `TickLabelRotation` (`Slider` と `RangeSlider`) の名前が `SliderTickLabelRotation` に変更されました。
- `Tabs`
  設定を簡素化し、タブヘッダーとパネルを個別に定義してリンクする必要がなくなりました。`Panel` プロパティと `IgbTabPanel` 自体は削除されました。コンテンツを `Tab` に直接割り当てることができるようになり、ヘッダー テキストは新しい `Label` プロパティを介して、または要素を `slot="label"` に投影してより複雑なカスタマイズを行うことで簡単に設定できるようになりました。

    前:

    ```razor
    <IgbTabs Alignment=@TabAlignment>
        <IgbTab Panel="basics">Basics</IgbTab>
        <IgbTab Panel="details">Details</IgbTab>
        <IgbTab Panel="favorite">
            <IgbIcon IconName="favorite" Collection="material"/>
        </IgbTab>
        <IgbTab Panel="disabled" Disabled=true>Disabled</IgbTab>
        <IgbTabPanel id="basics">Basics tab content</IgbTabPanel>
        <IgbTabPanel id="details">Details tab content</IgbTabPanel>
        <IgbTabPanel id="favorite">Favorite tab content</IgbTabPanel>
        <IgbTabPanel id="disabled">Disabled tab content will not be displayed</IgbTabPanel>
    </IgbTabs>
    ```

    後:

    ```razor
    <IgbTabs Alignment=@TabAlignment>
        <IgbTab Label="Basics">
            Basics tab content
        </IgbTab>
        <IgbTab Label="Details">
            Details tab content
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="label" IconName="favorite" Collection="material"/>
            Favorite tab content
        </IgbTab>
        <IgbTab Disabled="true" Label="Disabled">
            Disabled tab content will not be displayed
        </IgbTab>
    </IgbTabs>
    ```

- `Input`
    - `Min` と `Max` は `string` ではなく `double` になりました。
- `Stepper`
    - `ActiveStepChangingArgsEventArgs` は `ActiveStepChangingEventArgs` に名前が変更されました。
    - `ActiveStepChangedArgsEventArgs` は `ActiveStepChangedEventArgs` に名前が変更されました。
    - `StepperTitlePosition` はデフォルトの動作を正しく反映するためにデフォルトで `Auto` になりました。
- `Tree`
    - `TreeSelectionChangeEventArgs` は `TreeSelectionEventArgs` に名前が変更されました。
- `Textarea`
    - `Autocapitalize` と `InputMode` は明示的な列挙型ではなく `string` プロパティになりました。

### {PackageGrids} (グリッド)

- `Column`
  - 追加されたイベント: `HiddenChange`、`ExpandedChange`、`WidthChange`、`PinnedChange`。
- `Grid`
  - 追加されたイベント: `GroupingExpressionsChange`、`GroupingExpansionStateChange`。
- `RowIsland`
  - `GridCreated` イベントの `GridCreatedEventArgsDetail` 引数に新しいパラメーター `ParentRowData` を追加しました。
- `Grid`、`HierarchicalGrid`、`TreeGrid`
  - 追加されたプロパティ - `ExpansionStates` - キーと値のペア [行 Id、展開状態] のリストを表します。
  - 追加されたイベント: `ExpansionStatesChange`。
  - `Rendered` イベントのタイプが `VoidHandler` から `ComponentBoolValueChangedEventHandler` に変更されました。
  - DataChanging イベントのタイプが `ForOfDataChangingEventHandler` から `ForOfDataChangeEventHandler` に変更されました。
  - DataChanged イベントのタイプが `VoidHandler` から `ForOfDataChangeEventHandler` に変更されました。
- `PivotDataSelector`
  - 追加されたイベント: `ColumnsExpandedChange`、`RowsExpandedChange`、`FiltersExpandedChange`、`ValuesExpandedChange`。

### {PackageDashboards} (ダッシュボード)

- `IgbDashboardTile` では、ソート、グループ化、フィルタリング、選択などの集計を DataGrid ビューからチャート視覚化に伝播できるようになりました。これは現在、`IgbDashboardTile` の `DataSource` を `IgbLocalDataSource` のインスタンスにバインドすることによってサポートされています。

### 機能拡張

#### Toolbar
- ツールバーから追加された値レイヤーが凡例に表示されるようになりました。
- ズーム リセット ツールはズーム ドロップダウンに移動されました。

#### Data Pie Chart
- チャートは `GetOthersContext()` メソッドを公開するようになりました。これにより、Others (その他) スライスのコンテンツが返されます。

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|25997 | `IgbDataGrid` | 集計はグループ化された最初の子行にのみ表示される。|
|37023 | `IgbDataChart` | overflow: hidden が設定されている場合にツールチップが切り取られたり画面外に表示されたりする。|
|37244 | Excel Library | カスタム データ検証が機能しない。|

## **{PackageVerChanges-24-2-MAY}**

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|37271 | `IgbHierarchicalGrid` | ParentRowData が IGridCreatedEventArgs に追加される問題。|
|37681 | `IgbDataChart` | カテゴリ チャート - 十分なスペースがあるにもかかわらず、値ラベルが縦棒の上に表示されない。|
|37244 | Excel Library | カスタム データ検証が機能しない。|

## **{PackageVerChanges-24-2-APR}**

### 新しいコンポーネント

- IgbTileManager

### 機能拡張

#### List
- `ListItem` に新しいプロパティ `Selected` を追加しました。

#### Accordion
- 新しいイベント `Open` および `Close` を追加しました。

### {PackageGrids}

- **すべてのグリッド**  
  - `FilteringExpressionsTree` プロパティを使用して初期フィルタリングの適用が可能になりました。

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|25602 | `IgbDataGrid` | 日付特有のフィルター演算子を含むレイアウトを読み込むと、TypeError がコンソールに出力される。|
|28480 | `IgbCombo` | データ ソースを置き換えた際に未定義の参照エラーが発生する。|
|32598 | `IgbDataGrid` | 複数選択が正しく動作しない。
|36374 | `IgbInput` | タッチ デバイスでフォームを送信すると、以前の値がバインドされる。|
|37214|一般|Blazor の WebCallback.Register() で断続的にエラーが発生する。

## **{PackageVerChanges-24-2-MAR}**

### {PackageGrids}

- **すべてのグリッド** 
  - グリッドの列に新しい `DisabledSummaries` が追加され、開発者が一部の集計をスキップできるようにしました。
  - 内部グリッド アクション ボタンをカプセル化しました。

### バグ修正
| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|35497 | `IgbDialog` | ShowAsync と HideAsync が呼び出されると、後続のコードは実行されない。|

## **{PackageVerChanges-24-2-FEB}**

### 機能拡張

#### Toolbar

- `Toolbar` と `ToolPanel` に新しい `GroupHeaderTextStyle` プロパティを追加しました。設定されている場合、すべての `ToolActionGroupHeader` アクションに適用されます。
- タイトル テキストの水平方向の配置を制御する `TitleHorizontalAlignment` という新しいプロパティを `ToolAction` に追加しました。
- `ToolActionSubPanel` に、パネル内の項目間の間隔を制御する `ItemSpacing` という新しいプロパティを追加しました。

### バグ修正

次の表は、このリリースの {ProductName} ツールセットに対して行われたバグ修正を示しています。

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|29998 | `IgbCombo` | .NET 8 では Change イベントコールバックが複数回発生する。|
|30286 | `IgbDataChart` | バブルをクリックすると、Bubble Series のツールチップが近くのバブル データの内容に切り替わる。|
|35498 | `IgbDataChart` | IncludedSeries で指定されたシリーズのツールチップは表示されない。|
|32906 | `IgbDataChart` | IgbDataChart は上部に 2 つの xAxis を表示している。|
|33605 | `IgbDataChart` | 凡例に ScatterLineSeries の線の色が正しく表示されない。|
|34776 | `IgbDataChart` | IgbDataChart を繰り返し表示したり非表示にしたりすると、JS ヒープでメモリ リークが発生する。|
|34149 | `IgbGrid` | IgbGrid を繰り返し表示したり非表示にしたりすると、JS ヒープでメモリ リークが発生する。|
|34224 | `IgbGrid` | render mode に 'InteractiveAuto' が使用されている場合、アプリがサーバー モードから WebAssembly モードに変更されると、「There are multiple .NET runtimes present」 というエラーが発生する。|
|34654 | `IgbGrid` | データに空のリストが含まれている場合、NullReferenceException が発生する。|
|31344 | `IgbGrid` | SelectedRows の双方向バインディングが機能しない。|
|35439 | `IgbGrid` | アプリを複数のタブで開いた際に、CPU 使用率とメモリ消費が異常に高くなる。|
|36024 | `IgbGrid` | IgbGrid コンポーネントを含む 2 つのページ間を行き来しても、JS ヒープ サイズが削減されない。|
|34053 | `IgbRadialGauge` | スケール ラベルの位置がずれる。|
|36176 | Excel Library | LET 関数を含む Excel ブックを読み込むと、例外が発生する。|
|36379 | Excel Library | Excel ワークブック内のアルファ チャネルを含む色は読み込まれない。|
|26218 | Excel Library | Excel ファイルを読み込むだけで、チャートのプロット領域の右マージンが狭くなり、塗りつぶしパターンと前景の塗りつぶしが消える。|
|34083 | Excel Library | テンプレート Excel ファイルのテキストに 「=」 が含まれている場合、TextOperatorConditionalFormat が正しく読み込まれない/保存されない。|
|35495 | Excel Library | テンプレート ファイルを読み込むと、セル内の画像が失われる。|


## **{PackageVerChanges-24-2-JAN}**

- バグ修正

### {PackageGrids}

- **すべてのグリッド** 
  - 複数の重複したブラウザー タブでコンポーネントが開かれた場合に発生する重大なメモリ リークを修正しました。

## **{PackageVerChanges-24-2-DEC}**

### {PackageCharts} (チャート)

- <label>PREVIEW</label> [Dashboard Tile](dashboard-tile.md) コンポーネントは、バインドされた ItemsSource コレクションまたは単一のポイントを分析および視覚化し、データのスキーマとカウントに基づいて適切なデータ視覚化を返すコンテナー コントロールです。このコントロールは、組み込みの [Toolbar](menus/toolbar.md) コンポーネントを利用して、実行時に視覚化を変更できるようにし、最小限のコードでデータのさまざまな視覚化を表示できるようにします。

### {PackageCharts} (入力)

- <label>PREVIEW</label>[カラー エディター](inputs/color-editor.md)はスタンドアロンのカラー ピッカーとして使用できるようになり、さらに [Toolbar](menus/toolbar.md) コンポーネントの <label>PREVIEW</label> ToolAction に統合され、実行時に視覚化を更新できるようになりました。

_重大な変更_

- バージョン 2024.2 のリリースでは、[Microsoft .NET ライフサイクル](https://dotnet.microsoft.com/ja-jp/platform/support/policy/dotnet-core)に従い、.NET 3.1、.NET 5、.NET 7 はサポートされなくなりました。

## **{PackageVerChanges-24-2-NOV}**

### 一般
- 新しい [Carousel](layouts/carousel.md) コンポーネント。
- `Input`
  - `change` イベント引数タイプを `ComponentDataValueChangedEventArgs` から `ComponentValueChangedEventArgs` に変更しました。

## **{PackageVerChanges-24-1-SEP}**

### {PackageCharts} (チャート)
 
- 新しい[データ円チャート](charts/types/data-pie-chart.md) - `DataPieChart` は円ャートを表示する新しいコンポーネントです。このコンポーネントは、`CategoryChart` と同様に動作し、基になるデータ モデルのプロパティを自動的に検出しながら、ItemLegend コンポーネントを介して選択、強調表示、アニメーション、凡例のサポートを可能にします。

- 新しい [比例カテゴリ角度軸](charts/types/radial-chart.md) - スライスをプロットするための、`XamDataChart` のラジアル円シリーズの新しい軸。円チャートに似ており、データ ポイントが円グラフ内のセグメントとして表されます。

- `Toolbar`

    - 新しい ToolActionCheckboxList。
        選択用のチェックボックスを備えた項目のコレクションを表示する新しい CheckboxList ToolAction。ToolAction CheckboxList 内のグリッドの高さは 5 項目まで大きくなり、その後スクロールバーが表示されます。
        IgbCheckboxListModule を登録する必要があります。

    - 新しいフィルタリングのサポート。

    - 軸フィールドの変更。
        CategoryChart をターゲットにする場合のツールバーの新しいデフォルトの IconMenu。
        ラベル フィールドは X 軸にマップされ、値フィールドは Y 軸にマップされます。
        ターゲット チャートは、行われた変更にリアルタイムで反応します。チャートに ItemsSource が設定されていない場合、IconMenu は非表示になります。

### 一般

- 新しい [Banner](notifications/banner.md) コンポーネント。
- 新しい [DatePicker](scheduling/date-picker.md) コンポーネント。
- 新しい `Divider` コンポーネント。
- `Icon`
  - `SetIconRef` メソッドが追加されました。これにより、アイコンを SVG ファイルで登録および置き換えることができます。
  - すべてのコンポーネントが内部的な参照によるアイコンを使用するようになり、カスタム テンプレートを明示的に提供しなくても簡単に置き換えられるようになりました。
- `Combo`、`DatePicker`、`Dialog`、`Dropdown`、`ExpansionPanel`、`NavDrawer`、`Toast`、`Snackbar`、**IgbSelectComponent**
  - トグル メソッドの `Show`、`Hide`、`Toggle` メソッドは、成功した場合に **true** を返すようになりました。そうでない場合は **false**。
- `RadioGroup`
  - `Name` および `Value` プロパティを追加しました。`Value` は双方向バインディングもサポートします。

_重大な変更_:

- 古い **IgbDatePicker** の名前を **IgbXDatePicker** に変更しました。
- `Form` コンポーネントを削除しました。代わりにネイティブのフォームを使用してください。
- 以下のコンポーネントの `size` プロパティが削除され、代わりに `--ig-size` CSS カスタム プロパティが使用されるようになりました。
  - `Avatar`、`Button`、`IconButton`、`Calendar`、`Chip`、`Dropdown`、`Icon`、`Input`、`List`、`Rating`、`Snackbar`、`Tabs`、`Tree`
- `Badge`、`Chip`、`LinearProgress`、`CircularProgress`
  - `Variant` プロパティ タイプの名前を `StyleVariant` に変更しました。
- `Calendar`
  - `WeekStart` プロパティ タイプの名前を `WeekDays` に変更しました。
- `Checkbox`、`Switch`
  - `Change` イベント引数タイプを `ComponentBoolValueChangedEventArgs` から `CheckboxChangeEventArgs` に変更しました。
- `Combo`
  - `IgbCombo` はジェネリック タイプになり、`Value` タイプは `T[]` タイプになりました。つまり、`T` を指定するか、割り当てられた `Value` タイプによって推論される必要があります。
  - `PositionStrategy`、`Flip`、`SameWidth` プロパティが削除されました。
- **IgbSelectComponent**
  - `PositionStrategy`、`Flip`、`SameWidth` プロパティが削除されました。
- `DateTimeInput`
  - `MaxValue` および `MinValue` プロパティが削除されました。代わりに `Max` および `Min` を使用してください。
- `Dropdown`
  - `PositionStrategy` プロパティが削除されました。
- `Input`
  - 古い名前の `Maxlength` および `Minlength` プロパティが削除されました。`MaxLength` および `MinLength` を使用してください。
  - 古い名前の `Readonly` および `Inputmode` プロパティが削除されました。`ReadOnly` および `InputMode` を使用してください。
  - `InputMode` タイプも `string` (文字列) に変更されました。
- `Radio`
  - `Change` イベント引数タイプを `ComponentBoolValueChangedEventArgs` から `RadioChangeEventArgs` に変更しました。
- `RangeSlider`
  - `AriaThumbLower` および `AriaThumbUpper` プロパティが削除されました。代わりに `ThumbLabelLower` および `ThumbLabelUpper` を使用してください。
- `Rating`
  - `Readonly` プロパティの名前を `ReadOnly` に変更しました。

### {PackageGrids}

- **すべてのグリッド**
  - グリッド列コレクションを返す `GetColumns` / `GetColumnsAsync` メソッドが追加されました。
  - 新しい `RowClick` イベントが追加されました。
- `PivotGrid`
  - `PivotDimension` に `Sortable` プロパティが追加されました。
  - 水平レイアウトが追加されました。新しい `PivotUI` プロパティ内で `RowLayout` `Horizontal` として有効にできます。
  - 水平レイアウトのみの行ディメンション サマリーが追加されました。`HorizontalSummary` を **true** に設定することで、各 `PivotDimension` に対して有効にできます。
  - 水平集計の位置を設定するための `HorizontalSummariesPosition` プロパティを `PivotUI` に追加しました。
  - 行ディメンションの行ヘッダーが追加されました。新しい `PivotUI` プロパティ内で `ShowHeaders` **true** として有効にできます。
  - キーボード ナビゲーションで行ディメンションヘッダーや列ヘッダーから行ヘッダーへ移動できるようになりました。
  - キーボード操作で行ディメンションの縮小 (<kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>) および行ヘッダーのソート (<kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd>) ができるようになりました。

_重大な変更_:
- **すべてのグリッド**
  - `RowIsland`
  - `DisplayDensity` の非推奨のプロパティが削除されました。
  - `Columns`、`ActualColumns`、`ContentColumns` プロパティの名前が `ColumnList`、`ActualColumnList`、`ContentColumnList` に変更されました。代わりに新しい `GetColumns` メソッドを使用することをお勧めします。
  - `RowDelete` および `RowAdd` イベント引数タイプの名前を `RowDataCancelableEventArgs` に変更しました。
  - `ContextMenu` イベント引数タイプの名前を `GridContextMenuEventArgs` に変更しました。
  - `GridEditEventArgs`、`GridEditDoneEventArgs`、`PinRowEventArgs` イベントの `RowID` および `PrimaryKey` プロパティが削除されました。代わりに `RowKey` を使用してください。
- `PivotGrid`
  - `ShowPivotConfigurationUI` プロパティが削除されました。`PivotUI` を使用して、その中に新しい `ShowConfiguration` オプションを設定してください。
- `Column`
  - `Movable` プロパティが削除されました。グリッドの `Moving` プロパティを使用してください。
  - `ColumnChildren` プロパティが削除されました。代わりに `ChildColumns` を使用してください。
- `ColumnGroup`
  - `Children` プロパティが削除されました。代わりに `ChildColumns` を使用してください。
- `Paginator`
  - `IsFirstPageDisabled` および `IsLastPageDisabled` プロパティが削除されました。代わりに、`IsFirstPage` および `IsLastPage` を使用してください。

## **{PackageVerChanges-24-1-JUN}**

### 一般

- `Input`、`Textarea` - ユーザー入力を制限することなく検証ルールを適用できるように `ValidateOnly` を公開しました。
- `Dropdown` - `PositionStrategy` プロパティは非推奨です。ドロップダウンは、ブラウザー ビューポートの最上位レイヤーにコンテナーをレンダリングするために `Popover` API を使用するようになったため、このプロパティは廃止されました。
- `DockManager` - `SplitPane` の `IsMaximized` は非推奨です。分割ペイン レベルで isMaximized を true に設定しても、分割ペインはコンテナーとしてのみ機能し、最大化されて表示される実際のコンテンツがないため、実際の効果はありません。代わりに、`TabGroupPane` および/または `ContentPane` の `IsMaximized` プロパティを使用してください。

### {PackageGrids}

- `DisplayDensity` は非推奨となり、代わりに `--ig-size` CSS カスタム プロパティが使用されるようになりました。詳細については、[グリッド サイズ](grids/grid/size.md) トピックを参照してください。

- `PivotGrid` - `PivotConfiguration` オプションの列、行、フィルターのタイプが、IgbPivotDimension の配列である `IgbPivotDimension[]` になりました (以前は `IgbPivotDimensionCollection` でした)。

`PivotConfiguration` オプションの値のタイプが、IgbPivotValue の配列である `IgbPivotValue[]` になりました (以前は `IgbPivotValueCollection` でした)。

### {PackageCharts} (チャート)

- [データ凡例のグループ化](charts/features/chart-data-legend.md#{PlatformLower}-データ凡例のグループ化) と [データ ツールチップのグループ化](charts/features/chart-data-tooltip.md#{PlatformLower}-データ-チャートのデータ-ツールチップのグループ化) - 新しいグループ化機能が追加されました。`GroupRowVisible` プロパティは、各シリーズのグループ化を切り替え、オプトインすると `DataLegendGroup` プロパティを介してグループ テキストを割り当てることができます 同じ値が複数のシリーズに適用されている場合、それらはグループ化されて表示されます。すべてのユーザー向けに分類および整理する必要がある大規模なデータセットに役立ちます。

- [チャートの選択](charts/features/chart-data-selection.md) - 新しいシリーズ選択のスタイル設定。これは、`CategoryChart` および `XamDataChart` のすべてのカテゴリ、財務、およびラジアル シリーズに広く採用されています。シリーズはクリックして異なる色で表示したり、明るくしたり、薄くしたり、フォーカスのアウトラインを表示したりできます。個々のシリーズまたはデータ項目全体を通じて影響を受ける項目を管理します。
複数のシリーズとマーカーがサポートされています。特定のデータ項目の値間のさまざまな相違点や類似点を示すのに役立ちます。また、`SelectedSeriesItemsChanged` イベントと `SelectedSeriesItems` は、選択内容に基づいたデータ分析を行うポップアップやその他の画面など、アプリケーション内で実行できるその他のアクションを取り巻く堅牢なビジネス要件を構築するための追加の支援として利用できます。  

- [比例カテゴリ角度軸](charts/types/radial-chart.md) - `XamDataChart` のラジアル円シリーズの新しい軸により、データ チャートのすべての追加機能を使用してロバスト可能な視覚化をする円チャートの作成が可能になります。

- [ツリーマップのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-リーマップのハイライト表示) - ツリー マップの項目のマウスオーバーによるハイライト表示を構成できる `HighlightingMode` プロパティが公開されました。このプロパティには 2 つのオプションがあります: `Brighten` では、マウスを置いた項目にのみハイライト表示が適用され、`FadeOthers` では、マウスホバーした項目のハイライト表示はそのままで、それ以外はすべてフェードアウトします。このハイライト表示はアニメーション化されており、`HighlightingTransitionDuration` プロパティを使用して制御できます。

- [ツリーマップのパーセントベースのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-ツリーマップのパーセントベースのハイライト表示) - 新しいパーセントベースのハイライト表示により、ノードはコレクションの進行状況またはサブセットを表すことができます。外観は、データ項目のメンバーによって、または新しい `HighlightedItemsSource` を指定することによって、特定の値までの背景色の塗りつぶしとして表示されます。`HighlightedValuesDisplayMode` で切り替えることができ、`FillBrushes` でスタイルを設定できます。

- `Toolbar` - 選択した特定のツールの周囲に境界線を描くための ToolAction の新しい `IsHighlighted` オプション。

### {PackageGauges} (ゲージ)

- `XamRadialGauge`
    - ハイライト針の新しいラベル。`HighlightLabelText` と `HighlightLabelSnapsToNeedlePivot` および、その他の HighlightLabel の多くのスタイル関連プロパティが追加されました。

## **{PackageVerChanges-23-2-APR2}**

### {PackageCharts} (チャート)

`InitialFilter` プロパティによる新しいデータ フィルタリング。フィルター式を適用して、チャート データをレコードのサブセットにフィルターします。大規模なデータのドリルダウンに使用できます。

- `XamBulletGraph`
    - `HighlightValueDisplayMode` が 'Overlay' 設定に適用されたとき、パフォーマンス バーには値と新しい `HighlightValue` の差が反映されるようになりました。ハイライト値には、フィルタリング/サブセットの測定パーセンテージが塗りつぶされた色で表示され、残りのバーの外観は割り当てられた値に対して薄く表示され、リアルタイムでパフォーマンスを示します。
- `XamLinearGauge`
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamRadialGauge`
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。

## **{PackageVerChanges-23-2-APR}**

- バグ修正

## **{PackageVerChanges-23-2-MAR}**

### 新しいコンポーネント

- [Hierarchical Grid](grids/hierarchical-grid/overview.md) コンポーネント
- [Text Area](inputs/text-area.md) コンポーネント
- [Button Group](inputs/button-group.md) コンポーネント

### 新機能

- `DockManager`
    - 新しい `ProximityDock` プロパティ。有効にすると、ドッキング インジケーターは表示されなくなり、エンド ユーザーは、ドラッグしたペインをターゲット ペインの端に近づけてドラッグすることでドッキングできます。
    - 新しい `ContainedInBoundaries` プロパティ。フローティング ペインを Dock Manager の境界内に保持するかどうかを決定します。デフォルトは **false** です。
    - 新しい `ShowPaneHeaders` プロパティ。ペインのヘッダーをホバー時にのみ表示するか、常に表示するかを決定します。デフォルトは `always` です。
- `Tree`
    - ノードをクリックすると展開状態が変更されるかどうかを決定する `toggleNodeOnClick` プロパティが追加されました。デフォルトは **false** です。
- `Rating`
    - `allowReset` が追加されました。有効にすると、同じ値を選択するとコンポーネントがリセットされます。**動作の変更** - 以前のリリースでは、これが Rating コンポーネントのデフォルトの動作でした。アプリケーションでこの動作を維持する必要がある場合は、必ず `allowReset` を設定してください。
- `Select`、`Dropdown` 
    - `selectedItem`、`items`、および `groups` ゲッターが公開されました。
- `XamRadialGauge`
    - 新しいタイトル/サブタイトルのプロパティ。`TitleText`、`SubtitleText` はゲージの下部近くに表示されます。さらに、`TitleFontSize`、`TitleFontFamily`、`TitleFontStyle`、`TitleFontWeight`、`TitleExtent` など、さまざまなタイトルとサブタイトルのフォント プロパティが追加されました。最後に、新しい `TitleDisplaysValue` により、値を針の位置に対応させることができます。 
    - `XamRadialGauge` の新しい `OpticalScalingEnabled` プロパティと `OpticalScalingSize` プロパティ。この新機能は、ゲージのラベル、タイトル、サブタイトルが 100% のオプティカル スケーリングを持つサイズを管理します。この新機能の詳細については、[こちら](radial-gauge.md#オプティカル-スケーリング)を参照してください。
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamRadialChart` 
    - 新しいラベル モード
        `CategoryAngleAxis` は、ラベルの位置をさらに構成できる `LabelMode` プロパティを公開するようになりました。これにより、`Center` 列挙型を選択してデフォルト モードを切り替えることも、ラベルを円形のプロット領域に近づける新しいモード `ClosestPoint` を使用することもできます。

### 一般

- `Input`、`MaskInput`、`DateTimeInput`、`Rating`
	- `Readonly` は `ReadOnly` に名前が変更されました。
- `Input`
	- `Maxlength` は `MaxLength` に名前が変更されました。
	- `Minlength` は `MinLength` に名前が変更されました。

### 非推奨

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

### 削除済

- デフォルトの属性を隠していた独自の `dir` 属性が削除されました。これは互換性のある変更です。
- `Slider` - `ariaLabel` シャドウ プロパティ。これは互換性のある変更です。
- `Checkbox` - `ariaLabelledBy` シャドウ属性。これは互換性のある変更です。
- `Switch` - `ariaLabelledBy` シャドウ属性。これは互換性のある変更です。
- `Radio` - `ariaLabelledBy` シャドウ属性。これは互換性のある変更です。

## **{PackageVerChanges-23-2-JAN}**

### .NET 8.0 のサポート

- 2023.2 リリースでは .NET 8 がサポートされます。.NET 8 の詳細については、[Microsoft サイト](https://learn.microsoft.com/ja-jp/dotnet/core/whats-new/dotnet-8)をご確認ください。

### {PackageCharts} (チャート)

- [チャートのハイライト表示フィルター](charts/features/chart-highlight-filter.md) - `CategoryChart` と `XamDataChart` は、データのサブセットの内外でハイライト表示およびアニメーション化する方法を公開するようになりました。このハイライト表示の表示はシリーズのタイプによって異なります。列およびエリア シリーズの場合、サブセットはデータの合計セットの上に表示され、サブセットはシリーズの実際のブラシによって色付けされ、合計セットは不透明度を下げます。折れ線シリーズの場合、サブセットは点線で表示されます。

## **{PackageVerChanges-23-2}**

### {PackageGrids} - Toolbar - <label>PREVIEW</label>

- クリップボードを介してチャートを画像に保存するための保存ツール アクションが追加されました。
- ツールバーの `Orientation` プロパティを介して垂直方向が追加されました。デフォルトでは、ツールバーは水平方向ですが、ツールバーを垂直方向に表示できるようになり、ツールが左右にポップアップ表示されます。
- ツールバーの `renderImageFromText` メソッドを介してカスタム SVG アイコンのサポートが追加され、カスタム ツールの作成がさらに強化されました。

### {PackageGrids} (Grid)

- 新規機能:
    - [状態保持](grids/grid/state-persistence.md)

## **{PackageVerChanges-23-1}**

### 新しいコンポーネント

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md) コンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、`XamDataChart` または `CategoryChart` コンポーネントにリンクされると、プロパティとツールのプリセットで動的に更新されますが、プロジェクト用のカスタム ツールを作成する機能も提供します。

### {PackageCharts} (チャート)

- [ValueLayer](charts/features/chart-overlays.md#{PlatformLower}-value-layer) - `ValueLayer` という名前の新しいシリーズ タイプが公開されました。これにより、Maximum、Minimum、Average など、プロットされたデータのさまざまな焦点のオーバーレイを描画できます。これは、新しい `ValueLines` コレクションに追加することで、`CategoryChart` と `FinancialChart` に適用されます。

- **ダッシュ配列**を `XamDataChart` のシリーズのさまざまな部分に適用できるようになりました。これは、チャートにプロットされた[シリーズ](charts/types/line-chart.md#{PlatformLower}-折れ線チャートのスタイル設定)、チャートの[グリッド線](charts/features/chart-axis-gridlines.md#{PlatformLower}-軸グリッド線のプロパティ)、およびチャートにプロットされたシリーズの[トレンドライン](charts/features/chart-trendlines.md#{PlatformLower}-チャート-トレンドラインのダッシュ配列の例)に適用できます。

## **{PackageVerChanges-22-2.65}**
### 新しいコンポーネント

- [Stepper](layouts/stepper.md)

### 新しいコンポーネント

- [Dialog](notifications/dialog.md)
- [Select](inputs/select.md)

### {PackageGrids} (データ グリッド)

- 新しい引数 `PrimaryKey` が `Detail` から `IgbRowDataEventArgs` に導入されました。これは、`RowAdded` および `RowDeleted` イベントによって発行されるイベント引数の一部です。グリッドに主キー属性が追加されている場合、発行された primaryKey イベント引数は行 ID を表し、それ以外の場合はデフォルトで null 値になります。
- `RowSelectionChanging` イベント引数が変更されました。現在、グリッドが primaryKey を設定した場合、`OldSelection`、`NewSelection`、`Added` および `Removed` コレクションは、選択された要素の行キーで構成されなくなりましたが、いずれにしても行データが出力されるようになりました。
- グリッドがリモート データを操作していて、主キーが設定されている場合、現在グリッド ビューに含まれていない選択された行に対して、部分的な行データ オブジェクトが発行されます。
- 選択された行がグリッド コンポーネントから削除されると、`RowSelectionChanging` イベントは発生しなくなります。
- `OnGroupingDone` イベントは `GroupingDone` に名前が変更され、on プレフィックスを付けない出力規則に違反しなくなりました。
- `OnDensityChanged` イベントの名前が `DensityChanged` に変更され、on プレフィックスを付けない出力規則に違反しなくなりました。このイベントを公開しているすべてのコンポーネントが影響を受けます。

### {PackageGrids} (ピボット グリッド)

- `IgbPivotDateDimension` プロパティの `InBaseDimension` と `InOption` は廃止され、それぞれ `BaseDimension` と `Options` に名前が変更されました。

### {PackageInputs} (入力)

- `IgbDateTimeInput`、StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) は、DateTimeInputDatePart ではなく DatePart に切り詰められるようになりました。
- `IgbRadio` および `IgbRadioGroup` は、無効な状態のスタイルとともにコンポーネントの検証が追加されました。
- `IgbMask` は、マスク パターン リテラルをエスケープする機能が追加されました。
- `IgbBadge` は、バッジの形状を制御する `Shape` プロパティを追加し、`Square` または `Rounded` のいずれかになります。デフォルトでは、バッジの形状は rounded です。
- `IgbAvatar`、`RoundShape` プロパティは廃止され、将来のバージョンで削除される予定です。ユーザーは、新しく追加された `Shape` 属性によってアバターの形状を制御できます。これは、`Square`、`Rounded`、または `Circle` にすることができます。アバターのデフォルトの形状は `Square`です。

### {PackageDockManager} (DockManager)

- [ドック マネージャー](layouts/dock-manager.md)のペイン コレクションに保護されたセッターが追加されました。ペインを作成するときに、ネストされた構造でペインを設定するのではなく、Add を呼び出す必要があります。

## **{PackageVerChanges-22-2.50}**

### 新しいコンポーネント

- [コンボ](inputs/combo/overview.md)
- [ピボット グリッド](grids/pivot-grid/overview.md)
- .NET 7.0

## **{PackageVerChanges-22-2}**

### 新しいコンポーネント

- [Grid](grids/data-grid.md)
- [TreeGrid](grids/tree-grid/overview.md)

### {PackageCharts} (チャート)

デフォルトの動作を大幅に改善し、カテゴリ チャート API を改良して使いやすくしました。これらの新しいチャートの改善点は次のとおりです:

- ブラウザー / 画面サイズに基づいた水平ラベル回転のレスポンシブ レイアウト。
- すべてのプラットフォームでの丸型ラベルの描画が強化されました。
- StackedFragmentSeries にマーカー プロパティを追加しました。
- `ShouldPanOnMaximumZoom` プロパティを追加しました。
- 新しいカテゴリ軸プロパティ:
    - ZoomMaximumCategoryRange
    - ZoomMaximumItemSpan
    - ZoomToCategoryRange
    - ZoomToItemSpan
- カテゴリの文字列と数値をグループ化、ソート、集計するための新しい[チャート集計](charts/features/chart-data-aggregations.md) API により、チャート データを事前に集計または計算する必要がなくなります。
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

- **{IgPrefix}Column** を `DataGridColumn` に変更しました。
- **GridCellEventArgs** を `DataGridCellEventArgs` に変更しました。
- **GridSelectionMode** を `DataGridSelectionMode` に変更しました。
- **SummaryOperand** を `DataSourceSummaryOperand` に変更しました。

## **{PackageVerChanges-22-1}**

### {PackageCharts} (チャート)

- 高度に構成可能な [DataLegend](charts/features/chart-data-legend.md) コンポーネントが追加されました。これは、`Legend` とよく似たコンポーネントですが、シリーズの値を表示し、シリーズの行と値の列をフィルタリングし、値のスタイルとフォーマットを行うための多くの構成プロパティを提供します。
- 高度に構成可能な [DataToolTip](charts/features/chart-data-tooltip.md) が追加されました。これは、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。これは、すべてのチャート タイプのデフォルトのツールチップになりました。
- 積層シリーズのアニメーションとトランジションインのサポートが追加されました。`IsTransitionInEnabled` プロパティを true に設定すると、アニメーションを有効にできます。そこから、`TransitionInDuration` プロパティを設定してアニメーションが完了するまでの時間を決定し、`TransitionInMode` でアニメーションのタイプを決定できます。
- 追加された `AssigningCategoryStyle` イベントは、`XamDataChart` のすべてのシリーズで利用できるようになりました。このイベントは、背景色の `Fill` やハイライト表示など、シリーズ項目の外観を条件付きで構成する場合に処理されます。
- CalloutLayer の新しい `AllowedPositions` 列挙体。チャート内のどこにコールアウトを配置するかを制限するために使用されます。デフォルトでは、コールアウトは最適な場所に配置されますが、これは `TopLeft`、`TopRight`、`BottomLeft`、または `BottomRight` を強制するために使用されます。
- 注釈レイヤーに追加された新しいコーナー半径プロパティ。各コールアウトのコーナーを丸めるために使用されます。コーナー半径がデフォルトで追加されていることに注意してください。
    - CalloutLayer の `CalloutCornerRadius`
    - FinalValueLayer の `AxisAnnotationBackgroundCornerRadius`
    - CrosshairLayer の `XAxisAnnotationBackgroundCornerRadius` と `YAxisAnnotationBackgroundCornerRadius`
- さまざまな方法でスクロールバーを有効にするための新しい `HorizontalViewScrollbarMode` および `VerticalViewScrollbarMode` 列挙体。`IsVerticalZoomEnabled` または `IsHorizontalZoomEnabled` と組み合わせると、チャートをナビゲートするための軸に沿ったスクロールバーを、常設またはフェードインおよびフェードアウトすることができます。
- 新しい `FavorLabellingScaleEnd` は、軸がスケールの最後にラベルを表示することを優先するかどうかを決定します。数値軸 (`NumericXAxis`、`NumericYAxis`、`PercentChangeAxis` など) とのみ互換性があります。
- 新しい `IsSplineShapePartOfRange` は、軸に要求された軸範囲にスプライン形状を含めるかどうかを決定します。
- 新しい `XAxisMaximumGap` は、`XAxisGap` を使用するときにプロットされたシリーズの最大許容値を決定します。ギャップは、プロットされたシリーズの列またはバー間のスペースの量を決定します。
- 新しい `XAxisMinimumGapSize` は、`XAxisGap` を使用するときに、プロットされたシリーズの最小許容ピクセルベース値を決定し、各カテゴリ間に常にある程度の間隔があることを保証します。

### {PackageGrids} (データ グリッド)

新機能 - [行ページング](grids/data-grid/row-paging.md)を追加しました。これは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。ページネーションを使用すると、データを設定された行数で表示することができ、ユーザーはスクロール バーを使用せずにデータを順次閲覧することができます。テーブル ページネーションの UI には通常、現在のページ、合計ページ、ユーザーがページをめくるためのクリック可能な [前へ] と [次へ] の矢印 / ボタンなどが含まれます。

### {PackageDockManager} (Dock Manager)

- {Platform} ドック マネージャーは 現在 <label>PREVIEW</label> です。ドックマネージャーにより、さまざまなサイズ、位置、動作をするペインによって複雑なレイアウトを管理し、アプリ内のさまざまな場所にドッキングできます。[ドック マネージャー](layouts/dock-manager.md)を使用すると、エンドユーザーは、ピン固定、サイズ変更、移動、フローティング、および非表示にするなど、ペインをカスタマイズすることができます。

### 新しいコンポーネント

- [Chip](inputs/chip.md)
- [Circular Progress](inputs/circular-progress.md)
- [Linear Progress](inputs/linear-progress.md)
- [Drop Down](inputs/dropdown.md)
- [Slider & Range Slider](inputs/slider.md)
- [Snackbar](notifications/snackbar.md)
- [Toast](notifications/toast.md)

## **{PackageVerChanges-21-2.1}**

> [!Note]
> 以下の重大な変更が導入されました

### {PackageGrids} (データ グリッド)

- `ValueField` プロパティを string[] 型から string に変更しました。

### {PackageInputs} (入力)

- 新しい `ValueChanged` イベントは双方向バインディングをサポートしており、`Value` プロパティをバインドしていない場合にのみ処理する必要があります。データ バインディングなしでコントロールから Value フィールドを読み取るには、`ValueChanged` イベントを処理する必要があります。データがバインドされていない場合は、GetCurrentValueAsync を使用してコントロールの値を読み取る必要があります。

#### 日付ピッカー
- `ValueChanged` イベントを `SelectedValueChanged` に変更しました。

#### 複数列コンボボックス
- `TextChanged` イベントを `TextValueChanged` に変更しました。
- `ValueChanged` イベントを `SelectedValueChanged` に変更しました。

## **{PackageVerChanges-21-2}**

> [!Note]
> **Igb** プレフィックスは {ProductName} のコンポーネントと各コンポーネント内のネスト要素に必要になりました。この API の変更は、Infragistics コントロールとサードパーティのコントロールの間の曖昧を回避するために必要でした。
>
> たとえば、``` <CategoryChart/> ``` の代わりに ``` <IgbCategoryChart/> ```

### 新しいコンポーネント

- [Avatar](layouts/avatar.md)
- [Badge](inputs/badge.md)
- [Button & Icon Button](inputs/button.md)
- [Card](layouts/card.md)
- [Checkbox](inputs/checkbox.md)
- Form
- [Icon](layouts/icon.md)
- [List](grids/list.md)
- [Navigation Bar](menus/navbar.md)
- [Navigation Drawer](menus/navigation-drawer.md)
- [Radio & Radio Group](inputs/radio.md)
- [Ripple](inputs/ripple.md)
- [Switch](inputs/switch.md)

### チャートとマップの改善

このリリースでは、地理マップとすべてのチャート コンポーネントのビジュアル デザインと構成オプションにいくつかの改善と簡素化が導入されています。

- `FinancialChart` と `CategoryChart` の `YAxisLabelLocation` プロパティのタイプを **AxisLabelLocation** から **YAxisLabelLocation** に変更しました。
- `FinancialChart` の **AxisLabelLocation** から **XAxisLabelLocation** に `XAxisLabelLocation` プロパティのタイプを変更しました。
- `CategoryChart` に `XAxisLabelLocation` プロパティを追加しました。
- 凡例で `XamGeographicMap` の地理的なシリーズを表すためのサポートが追加されました。
- `FinancialChart` と`CategoryChart` にデフォルトの十字線を追加しました。
- `FinancialChart` と`CategoryChart` にデフォルトの十字線の注釈を追加しました。
- `FinancialChart` にデフォルトで最終値の注釈を追加しました。
- カテゴリ チャートとファイナンシャル チャートに新しいプロパティを追加しました:
   - 十字線をカスタマイズするための `CrosshairsLineThickness` およびその他のプロパティ
   - 十字線の注釈をカスタマイズするための `CrosshairsAnnotationXAxisBackground` およびその他のプロパティ
   - 最終値の注釈をカスタマイズするための `FinalValueAnnotationsBackground` およびその他のプロパティ
   - シリーズ塗りつぶしの不透明度を変更できる `AreaFillOpacity` (エリア チャートなど)
   - マーカーの厚さを変更できる `MarkerThickness`
- カテゴリ チャート、ファイナンシャル チャート、データ チャート、および地理マップに新しいプロパティを追加しました。
   - 同じチャート内の複数のシリーズにどのマーカー タイプを割り当てることができる `MarkerAutomaticBehavior`
   - 凡例で表されるすべてのシリーズのバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例のすべてのシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
- データ チャートと地理マップのシリーズに新しいプロパティを追加しました。
   - 凡例で表される特定のシリーズにバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例の特定のシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
- カテゴリ チャートとシリーズで、デフォルトの垂直十字線ストロークを<span style="color:#000000">#000000</span> から <span style="color:#BBBBBB">#BBBBBB</span> に変更しました。
- 同じチャートにプロットされたすべてのシリーズのマーカーの図形を円に変更しました。これは、チャートの `MarkerAutomaticBehavior` プロパティを `SmartIndexed` 列挙値に設定することで元に戻すことができます。
- チャートの凡例のシリーズの簡略化された図形で、円、線、または四角のみを表示します。これは、チャートの `LegendItemBadgeMode` プロパティを `MatchSeries` 列挙値に設定することで元に戻すことができます。
- アクセシビリティを向上させるために、すべてのチャートに表示されるシリーズとマーカーのカラー パレットを変更しました。

| 古いのブラシ/アウトライン | 新のアウトライン/ブラシ |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

### {PackageGrids} (データ グリッド)

- 新規機能:
    - [フィルター行](grids/data-grid/column-filtering.md)
    - [レイアウトのカスタマイズ読み込み/保存](grids/data-grid/load-save-layout.md)
    - [列をグループ化するための GroupBy 領域](grids/data-grid/row-grouping.md)
    - [セルの結合](grids/data-grid/cell-merging.md)
- 新規 API:
    - `SelectionChanged` イベントを追加しました。複数行の選択など、選択のインタラクションの変化を検出するために使用されます。
- 重大な変更:
    - グリッドの SummaryScope プロパティのタイプを `DataSourceSummaryScope` から SummaryScope に変更しました。
    - GroupHeaderDisplayMode プロパティのタイプを `DataSourceSectionHeaderDisplayMode` から GroupHeaderDisplayMode に変更しました。

## **{PackageVerChanges-21-1}**
### 新しいビジュアル デザイン

#### チャートとマップ

このリリースでは、すべてのチャート コンポーネントに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。例えば、`XamDataChart`、`CategoryChart`、および `FinancialChart`。

- 棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
- heat min プロパティの 散布高密度シリーズの色を <span style="color:#8a5bb1">#8a5bb1</span> から <span style="color:#000000">#000000</span> に変更しました。
- heat max プロパティの 散布高密度シリーズの色を <span style="color:#ee5879">#ee5879</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
- ファイナンシャル/ウォーターフォール シリーズの `NegativeBrush` および `NegativeOutline` プロパティを <span style="color:#C62828">#C62828</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
- マーカーの厚さを 1 pxから 2 pxに変更しました。
- `PointSeries`、`BubbleSeries`、`ScatterSeries`、`PolarScatterSeries` のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。`MarkerFillMode` プロパティを Normal に設定すると、この変更を元に戻すことができます。
- `TimeXAxis` と`OrdinalTimeXAxis` のラベリングを圧縮しました。
- 新しいマーカー プロパティ:
    - series.`MarkerFillMode` - マーカーがアウトラインに依存するように、`MatchMarkerOutline` に設定できます。
    - series.`MarkerFillOpacity` - 0〜1 の値に設定できます。
    - series.`MarkerOutlineMode` - マーカーのアウトラインが塗りブラシの色に依存するように、'MatchMarkerBrush' に設定できます。
- 新シリーズ  プロパティ:
    - series.`OutlineMode` - シリーズ アウトラインの表示を切り替えるように設定できます。データ チャートの場合、プロパティはシリーズ上にあることに注意してください。
- チャートがデフォルトのズーム レベルにあるときにビューポートに導入されるブリード オーバー領域を定義する新しいチャート プロパティを追加しました。一般的な使用例では、軸と最初/最後のデータ ポイントの間にスペースを提供します。以下にリストされている `ComputedPlotAreaMarginMode` は、マーカーが有効になっているときに自動的にマージンを設定することに注意してください。その他は、厚さを表す `Double` を指定するように設計されており、PlotAreaMarginLeft などがチャートの 4 辺すべてにスペースを調整します。
    - chart.`PlotAreaMarginLeft`
    - chart.`PlotAreaMarginTop`
    - chart.`PlotAreaMarginRight`
    - chart.`PlotAreaMarginBottom`
    - chart.`ComputedPlotAreaMarginMode`
- 新しいハイライト表示プロパティ:
    - chart.`HighlightingMode` - ホバーされたシリーズとホバーされていないシリーズをフェードまたは明るくするかを設定します。
    - chart.`HighlightingBehavior` - 真上または最も近い項目など、マウスの位置に応じてシリーズをハイライト表示するかどうかを設定します。
    - 以前のリリースでは、ハイライト表示はホバー時にフェードするように制限されていたことに注意してください。
- 積層型、散布、極座標、ラジアル、およびシェイプ シリーズにハイライト表示を追加しました。
- 積層型、散布、極座標、ラジアル、およびシェイプ シリーズに注釈レイヤーを追加しました。
- 積層型シリーズ内の個々の積層フラグメントのデータ ソースをオーバーライドするためのサポートが追加されました。
- 積層型、散布、範囲、極座標、ラジアル、シェイプ シリーズにカスタム スタイルのイベントを追加しました。
- 垂直ズームをシリーズ コンテンツに自動的に同期するサポートが追加されました。
- 表示された最初のラベルに基づいてチャートの水平マージンを自動的に拡張するサポートが追加されました。
- シリーズとマーカーの再設計されたカラー パレット:

| 古いのブラシ/アウトライン | 新のアウトライン/ブラシ |
| -------------------- | ------------------- |
| <span style="color:#7446B9">#7446B9</span> <br><span style="color:#9FB328">#9FB328</span> <br><span style="color:#F96232">#F96232</span> <br><span style="color:#2E9CA6">#2E9CA6</span> <br><span style="color:#DC3F76">#DC3F76</span> <br><span style="color:#FF9800">#FF9800</span> <br><span style="color:#3F51B5">#3F51B5</span> <br><span style="color:#439C47">#439C47</span> <br><span style="color:#795548">#795548</span> <br><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br><span style="color:#8b5bb1">#8b5bb1</span> <br><span style="color:#6db1ff">#6db1ff</span> <br><span style="color:#f8a15f">#f8a15f</span> <br><span style="color:#ee5879">#ee5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#f7d262">#f7d262</span> <br><span style="color:#8ce7d9">#8ce7d9</span> <br><span style="color:#e051a9">#e051a9</span> <br><span style="color:#a8a8b7">#a8a8b7</span> <br> |

例:

|   |   |
|---|---|
| <img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" /> |
| <img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" /> |

#### チャート凡例

- バブル、ドーナツ、および円チャートで使用できる水平方向の `Orientation` プロパティを ItemLegend に追加しました。
- `LegendHighlightingMode` プロパティの追加 - 凡例項目にホバーした時にシリーズのハイライト表示を有効にします。

#### 地理マップ

> [!Note]
> これらの機能は CTP です。

- マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
- 座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
- シェイプ シリーズのハイライト表示のサポートが追加されました。
- シェイプ シリーズの一部の注釈レイヤーのサポートが追加されました。

### {PackageGrids} (データ グリッド)

- `EditOnKeyPress`、(別名: Excel スタイルの編集) を追加し、入力するとすぐに編集を開始します。
- `EditModeClickAction` プロパティを追加しました - デフォルトでは、編集モードに入るにはダブル クリックが必要です。これを `SingleClick` に設定して、新しいセルを選択するときに編集モードを実行できるようにすることができます。
- `EnterKeyBehaviors` プロパティの追加 - 別名 Excel スタイル ナビゲーション (Enter 動作) - Enter キーの動作を制御します。たとえば、オプションは none、edit、move up、down、left、right です。
- `EnterKeyBehaviorAfterEdit` プロパティの追加 - 編集モードでは、このプロパティは Enter キーが押されたときを制御します。例えば、オプションは (下、上、右、左のセルに移動) です。
- `SelectAllRows` メソッドを追加しました。
- 行範囲の選択を追加しました - `GridSelectionMode` プロパティを MultipleRow に設定すると、次の新しい機能が含まれるようになりました:
    - クリックしてドラッグし、行を選択します。
    - <kbd>SHIFT</kbd> キーを押しながらクリックして、複数の行を選択します。
    - <kbd>SHIFT</kbd> キーを押しながら <kbd>↑</kbd> + <kbd>↓</kbd> 矢印キーを押して、複数の行を選択します。
- スペース バーを押すと、MultipleRow または SingleRow に設定された `GridSelectionMode` プロパティを介してアクティブな行の選択が切り替わります。
- 列オプション ダイアログに列集計を追加しました。

### {PackageInputs} (入力)

#### 日付ピッカー

- `ShowTodayButton` - 現在の日付のボタンの表示を切り替えます。
- `Label` - 日付値の上にラベルを追加します。
- `Placeholder` プロパティ - 値が選択されていない場合にカスタム テキストを追加します。
- `FormatString` - 入力日付文字列をカスタマイズします。(例: `yyyy-MM-dd`)
- `DateFormat` - 選択した日付を LongDate または ShortDate のどちらとして表示するかを指定します。
- `FirstDayOfWeek` - 週の最初の曜日を指定します。
- `FirstWeekOfYear` - 年の最初の週をいつ表示するかを指定します。例えば、最初の 1 週間、最初の 4 日間の週です。
- `ShowWeekNumbers` - 週番号の表示を切り替えます。
- `MinDate` & `MaxDate` - 使用可能の選択できる日付の範囲を指定する日付制限。
- アクセシビリティの追加