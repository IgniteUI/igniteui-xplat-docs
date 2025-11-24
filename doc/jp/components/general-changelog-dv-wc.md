---
title: {Platform} 新機能 | {ProductName} | インフラジスティックス
_description: {ProductName} の新機能について学んでください。
_keywords: Changelog, What's New, {ProductName}, Infragistics, 変更ログ, 新機能, インフラジスティックス
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls
_language: ja
---

# {ProductName} 変更ログ

{ProductName} の各バージョンのすべての重要な変更は、このページに記載されています。

## **{PackageVerLatest}**

### 新しいコンポーネント

- `IgrChat` コンポーネントを追加しました。

### {PackageGrids} (グリッド)
- `IgcGrid`、`IgcTreeGrid`、`IgcHierarchicalGrid`
    - 同じデータまたはその他のカスタム条件に基づいて列内のセルを 1 つのセルに構成および結合できる新しいセル結合機能を追加しました。

        個々の列で有効化できます:

        ```html
        <igc-column field="field" merge="true"></igc-column>
        ```
        グリッド レベルで以下のいずれかの設定が可能です:
        - `onSort` - 列がソートされたときのみ結合。
        - `always` - データ操作に関わらず常に結合。

        ```html
        <igc-grid cellMergeMode="always">
        </igc-grid>
        ```

        デフォルトの `cellMergeMode` は `onSort` です。

        カスタム シナリオに応じて結合条件やロジックを変更する場合は、グリッドにカスタムの `mergeStrategy` を設定できます。

        特定のデータ フィールドに対してカスタム処理が必要な場合には、個々の列に `mergeComparer` を設定することもできます。

    - 列をグリッドの特定の側 (先頭または末尾) にピン固定できるようになりました。これにより、両側からのピン固定が可能です。これは、列の `pinningPosition` プロパティを宣言的に設定することで実行できます。

        ```html
        <igc-column field="Col1" pinned="true" pinningPosition="pinningPosition">
        </igc-column>
        ```

        ```ts
        pinningPosition = ColumnPinningPosition.End;
        ```

        または、API を使用してオプションのパラメーターで実行することもできます。

        ```ts
        grid.pinColumn('Col1', 0, ColumnPinningPosition.End);
        grid.pinColumn('Col2', 0, ColumnPinningPosition.Start);
        ```

        列にプロパティ `pinningPosition` が設定されていない場合、列はグリッドの `columns` の `pinning` オプションで指定された位置にデフォルト設定されます。

    - **ソートの改善**
        - Schwartzian Transformation を用いてソート アルゴリズムの効率を改善しました。この手法 (decorate-sort-undecorate とも呼ばれる) は、ソート キーを一時的に元データに関連付けることで再計算を回避します。
        - ソート アルゴリズムを再帰型から反復型にリファクタリングしました。
    - **グループ化の改善**
        - グループ化アルゴリズムを再帰型から反復型にリファクタリングしました。
        - グループ化処理を最適化しました。

### バグ修正
| バグ修正 | コントロール | 説明 |
|------------|---------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)| List |リスト コンポーネントおよびテーマ間で重複していた CSS 変数を削除。|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)| Card |テーマからカラーを取得するように変更。|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)| Card |カード ヘッダー内のアバター サイズを調整。|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)| Chat |最後のメッセージ後にメッセージ アクションがレンダーされない問題を修正。|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)| Date Picker |編集不可の入力設定で change イベントが発生しない問題を修正。|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)| Date Picker | Material テーマで値をクリアした際にノッチの境界線に関する問題を修正。|

## **{PackageVerChanges-25-1-SEP}**

### {PackageMaps}

#### <label>PREVIEW</label> Azure マップ画像のサポート

`IgcGeographicMap` は、 Azure ベースのマップ画像をサポートし、開発者は複数のアプリケーション タイプにわたって詳細かつ動的なマップを表示できるようになりました。複数のマップ レイヤーを組み合わせて地理データを視覚化し、インタラクティブなマッピング エクスペリエンスを簡単に作成できます。

注: Bing マップ画像のサポートは段階的に廃止されます。既存のエンタープライズ キーは引き続き Bing Maps にアクセスするために利用できるため、Azure Maps へ移行する間も現在のアプリケーションをそのまま利用可能です。

公開されている Azure Maps の一部は[こちら](https://azure.microsoft.com/ja-jp/products/azure-maps)をご覧ください。

### {PackageCharts}

#### <label>PREVIEW</label> 新しい軸ラベル イベント

軸ラベルに対するさまざまな操作を検出できるように、次のイベントが `IgcDataChart` に追加されました。

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

### {PackageGrids}

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

| バグ番号 | コントロール | 説明 |
|------------|---------|-------------|
|31624 | `IgcCategoryChart` | `IgcCategoryChart` を含むウィンドウをリサイズすると、チャートがシリーズをレンダリングできなくなる。|
|37930 | `IgcDataChart` | Data Annotation Overlay のテキスト色が機能しない。|
|27304 | `IgcDataChart` | ズーム長方形が背景長方形と同じ位置に配置されない。|
|30600 | `IgcDoughnutChart` | チャートやシリーズに textStyle プロパティが存在しない (円チャートにはある)。|
|38231 | `IgcGrid` | 非ピン固定列は、非表示が存在する場合に元の位置に戻らない。|
|33861 | Excel Library | 折れ線チャートを追加すると、ドイツ語カルチャで Excel ファイルが破損する。|

### 機能拡張

#### IgcBulletGraph

- <label>PREVIEW</label> 新しい `LabelsVisible` プロパティが追加されました。

#### チャート

- DataToolTipLayer、ItemToolTipLayer、CategoryToolTipLayer にスタイル設定用の新しいプロパティが追加されました: `ToolTipBackground`、`ToolTipBorderBrush`、および `ToolTipBorderThickness`。

- DataLegend にスタイル設定用の新しいプロパティが追加されました: `ContentBackground`、`ContentBorderBrush`、および `ContentBorderThickness`。`ContentBorderBrush` と `ContentBorderThickness` はそれぞれ既定で transparent と 0 に設定されているため、境界線を表示するにはこれらのプロパティを設定する必要があります。

- マウスのワールド相対位置を提供する `WorldPosition` という新しいプロパティが `ChartMouseEventArgs` に追加されました。この位置は、軸空間内の X 軸と Y 軸の両方に対して 0 から 1 の間の値になります。

- `SeriesViewer` と `DomainChart` に `HighlightingFadeOpacity` が追加されました。ハイライト表示されたシリーズに適用される不透明度を設定できます。

- ドメイン チャートの `CalloutLabelUpdating` イベントを公開しました。

#### IgcDataGrid

-  DataGrid に新しいプロパティ `stopPropagation` が追加されました。これにより、マウス イベントが親要素へバブリングするのを防止できます。

#### IgcLinearGauge

- <label>PREVIEW</label> 新しい `LabelsVisible` プロパティが追加されました。

## **{PackageVerChanges-25-1-AUG}**

#### 機能拡張

- フォームに関連付けられたカスタム要素は、`:state()` CSS セレクターを使用してスタイル設定するための **ig-invalid** カスタム状態を公開するようになりました。
  [詳細はこちらをご参照ください](https://developer.mozilla.org/ja/docs/Web/CSS/:state)
- フォーム関連カスタム要素の有効性の動作: 要素は `:user-invalid` を模倣しようとし、UI またはフォームの `requestSubmit()/reset()` 呼び出しを介して操作されない限り、無効スタイルは適用されません。

### バグ修正

| バグ番号 | コントロール | 説明 |
|------------|---------|-------------|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|**読み取り専用**モードでの無効状態を修正。|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|**helper-text** のスタイルが適用できない。|
|[1795](https://github.com/IgniteUI/igniteui-webcomponents/pull/1795)|Card|Indigo テーマでのスロット化された igc-avatar を修正。|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Combo|無効状態でラベル テキストと境界線が重なる。|
|[1799](https://github.com/IgniteUI/igniteui-webcomponents/pull/1799)|Date Picker|Indigo のエレベーション スタイルを修正。|
|[1783](https://github.com/IgniteUI/igniteui-webcomponents/pull/1783)|Date Range Picker|キーボード操作時にメイン入力へフォーカスを戻す。|
|[1792](https://github.com/IgniteUI/igniteui-webcomponents/pull/1792)|Input|Material テーマでのプレースホルダーとラベルの整列を修正。|
|[1806](https://github.com/IgniteUI/igniteui-webcomponents/pull/1806)|Navigation Drawer|*relative* 位置スタイルとアニメーションを更新。|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Select|無効状態のテーマ適用問題。|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Material テーマでのインタラクション問題。|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|サフィックス部分でのリサイズの動作を修正。|
|[1775](https://github.com/IgniteUI/igniteui-webcomponents/pull/1775)|Calendar|垂直モード コンテナーのパディングを修正。|
|[1731](https://github.com/IgniteUI/igniteui-webcomponents/issues/1731)|Carousel|ポインター操作によるフォーカス時に自動回転を一時停止。|
|[1772](https://github.com/IgniteUI/igniteui-webcomponents/issues/1772)|Carousel|スライド変更時に `igcSlideChanged` イベントが発生することを保証。|
|[1765](https://github.com/IgniteUI/igniteui-webcomponents/pull/1765)|Date Picker|スタイル設定の問題。|
|[1764](https://github.com/IgniteUI/igniteui-webcomponents/pull/1764)|Date Range Picker|CSS の境界線とエレベーションを修正。|
|[1747](https://github.com/IgniteUI/igniteui-webcomponents/pull/1747)|File Input|Bootstrap の無効な box-shadow スタイルを修正。|
|[1672](https://github.com/IgniteUI/igniteui-webcomponents/pull/1672)|Stepper|遅延レンダリング シナリオでの linear プロパティ設定エラー。|
|[1768](https://github.com/IgniteUI/igniteui-webcomponents/pull/1768)|Textarea|Readonly 状態のスタイルを修正。|
|[1755](https://github.com/IgniteUI/igniteui-webcomponents/pull/1755)|Dropdown|Bootstrap テーマのアイコン サイズを修正。|
|[1739](https://github.com/IgniteUI/igniteui-webcomponents/pull/1739)|Inputs|Material テーマでのラベル配置とトランジション ロジックを修正。|


## **{PackageVerChanges-25-1-JUL-2}**

- <label>NEW</label> コンポーネント - Date Range Picker (日付範囲ピッカー)

### 重大な変更

#### File Input
  - `igcChange` および `igcCancel` イベントの詳細では、基になるコンポーネントの `files` プロパティが返されるようになりました。

#### Tooltip
  - Tooltip イベントは、`detail` プロパティに `anchor` ターゲットを返さなくなりました。

### 動作変更

#### Tooltip
  - **動作変更**: Tooltip のデフォルトの `placement` は 'bottom' になりました。
  - **動作変更**: `with-arrow` が設定されていない限り、ツールチップはデフォルトでは矢印インジケーターをレンダリングしません。

### 機能拡張
- すべてのテーマにわたってフォームに関連付けられたほとんどのコンポーネントの読み取り専用スタイルを更新し、コンポーネントが読み取り専用状態にあることをより適切に示せるようになりました。

### バグ修正

| バグ番号 | コントロール | 説明 |
|------------|---------|-------------|
|[1710](https://github.com/IgniteUI/igniteui-webcomponents/issues/1710)|Calendar および Date Picker|特定のシナリオにおける日付ロールオーバーが正しくない。
|[1728](https://github.com/IgniteUI/igniteui-webcomponents/pull/1728)|Combo|テーマにおける大文字小文字を区別しないアイコン スタイルを修正。
|[1726](https://github.com/IgniteUI/igniteui-webcomponents/pull/1726)|Input|Fluent テーマの境界線を box-shadow に置き換える。
|[1732](https://github.com/IgniteUI/igniteui-webcomponents/pull/1732)|Input|Indigo テーマでのフォーカス状態背景色を修正。
|[1715](https://github.com/IgniteUI/igniteui-webcomponents/pull/1715)|Text Area|ラベルの高さとコンポーネントの高さのオーバーライドを修正。

## **{PackageVerChanges-25-1-JUL}**

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|36448 | `IgcRadialGauge` | ラジアル ラベルの書式設定プロパティ (例: Title、SubTitles) が機能しない。|


### {PackageCharts}

- 軸ラベルに使用できる <label>NEW</label> `MaximumExtent` および `MaximumExtentPercentage` プロパティを追加しました。

## **{PackageVerChanges-25-1-JUN}**

### {PackageMaps} 地理マップ

> [!Note]
> 2025 年 6 月 30 日をもって、すべての Microsoft Bing Maps for Enterprise Basic (無料) アカウントはすべて廃止されます。無料の Basic アカウントおよびキーをご利用中の場合は、サービスの中断を回避するために今すぐ対応する必要があります。Bing Maps for Enterprise の有償ライセンスをお持ちの方は、2028 年 6 月 30 日までアプリケーション内で Bing Maps を引き続きご利用いただけます。
> 詳細は以下をご覧ください:

[Microsoft Bing ブログ](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### {PackageCharts}

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

### {PackageDashboards} (ダッシュボード)

- `IgcDashboardTile` では、ソート、グループ化、フィルタリング、選択などの集計を DataGrid ビューからチャート視覚化に伝播できるようになりました。これは現在、`IgcDashboardTile` の `DataSource` を `IgcLocalDataSource` のインスタンスにバインドすることによってサポートされています。

### {PackageGrids}

_重大な変更_

- `IgcDataGrid` と `IgcMultiColumnComboBox` は、igniteui-webcomponents-data-grids パッケージの一部になりました。

### 機能拡張

#### Toolbar
- ツールバーから追加された値レイヤーが凡例に表示されるようになりました。
- ズーム リセット ツールはズーム ドロップダウンに移動されました。

#### Data Pie Chart
- チャートは `GetOthersContext()` メソッドを公開するようになりました。これにより、Others (その他) スライスのコンテンツが返されます。

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|25997 | `IgcDataGrid` | 集計はグループ化された最初の子行にのみ表示される。|
|37023 | `IgcDataChart` | overflow: hidden が設定されている場合にツールチップが切り取られたり画面外に表示されたりする。
|37685 | `IgcSpreadsheet` | Arial フォントで書式設定された数値が正しく描画されない。
|37244 | Excel Library | カスタム データ検証が機能しない。.

## **{PackageVerChanges-24-2-APR}**

### {PackageGrids}

- **すべてのグリッド**  
  - `FilteringExpressionsTree` プロパティを使用して初期フィルタリングの適用が可能になりました。

### バグ修正

| バグ番号 | コントロール | 説明      |
|------------|---------|------------------|
|25602 | `IgcDataGrid` | 日付特有のフィルター演算子を含むレイアウトを読み込むと、TypeError がコンソールに出力される。|
|28480 | `IgcCombo` | データ ソースを置き換えた際に未定義の参照エラーが発生する。|
|30319 | `IgcDataGrid` | 値が変更されていないにもかかわらず、レコードがソートされる。|
|32598 | `IgcDataGrid` | 複数選択が正しく動作しない。
|36374 | `IgcInput` | タッチ デバイスでフォームを送信すると、以前の値がバインドされる。|

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
|30286 | `IgcDataChart` | バブルをクリックすると、Bubble Series のツールチップが近くのバブル データの内容に切り替わる。|
|32906 | `IgcDataChart` | `IgcDataChart` は上部に 2 つの xAxis を表示している。|
|33605 | `IgcDataChart` | 凡例に ScatterLineSeries の線の色が正しく表示されない。|
|34776 | `IgcDataChart` | `IgcDataChart` を繰り返し表示したり非表示にしたりすると、JS ヒープでメモリ リークが発生する。|
|35498 | `IgcDataChart` | IncludedSeries で指定されたシリーズのツールチップは表示されない。|
|34053 | `IgcRadialGauge` | スケール ラベルの位置がずれる。|
|35496 | `IgcSpreadsheet` | Excel に画像付きでスタイルを設定すると エラーが発生する。|
|26218 | Excel Library | Excel ファイルを読み込むだけで、チャートのプロット領域の右マージンが狭くなり、塗りつぶしパターンと前景の塗りつぶしが消える。|
|34083 | Excel Library | テンプレート Excel ファイルのテキストに 「=」 が含まれている場合、TextOperatorConditionalFormat が正しく読み込まれない/保存されない。|
|36176 | Excel Library | LET 関数を含む Excel ブックを読み込むと、例外が発生する。|
|36379 | Excel Library | Excel ワークブック内のアルファ チャネルを含む色は読み込まれない。|
|35495 | Excel Library | テンプレート ファイルを読み込むと、セル内の画像が失われる。|

## **{PackageVerChanges-24-2-JAN}**

- バグ修正

### {PackageGrids}

- **すべてのグリッド** 
  - 複数の重複したブラウザー タブでコンポーネントが開かれた場合に発生する重大なメモリ リークを修正しました。

## **{PackageVerChanges-24-2-DEC}**

### {PackageCharts}

- <label>PREVIEW</label> [Dashboard Tile](dashboard-tile.md) コンポーネントは、バインドされた ItemsSource コレクションまたは単一のポイントを分析および視覚化し、データのスキーマとカウントに基づいて適切なデータ視覚化を返すコンテナー コントロールです。このコントロールは、組み込みの [Toolbar](menus/toolbar.md) コンポーネントを利用して、実行時に視覚化を変更できるようにし、最小限のコードでデータのさまざまな視覚化を表示できるようにします。

### {PackageCharts} (入力)

- <label>PREVIEW</label>[カラー エディター](inputs/color-editor.md)はスタンドアロンのカラー ピッカーとして使用できるようになり、さらに [Toolbar](menus/toolbar.md) コンポーネントの <label>PREVIEW</label> ToolAction に統合され、実行時に視覚化を更新できるようになりました。

## **{PackageVerChanges-24-1-SEP}**

### {PackageCharts}
 
- 新しい[データ円チャート](charts/types/data-pie-chart.md) - `DataPieChart` は円ャートを表示する新しいコンポーネントです。このコンポーネントは、`CategoryChart` と同様に動作し、基になるデータ モデルのプロパティを自動的に検出しながら、ItemLegend コンポーネントを介して選択、強調表示、アニメーション、凡例のサポートを可能にします。

- 新しい [比例カテゴリ角度軸](charts/types/radial-chart.md) - スライスをプロットするための、`XamDataChart` のラジアル円シリーズの新しい軸。円チャートに似ており、データ ポイントが円グラフ内のセグメントとして表されます。

- `Toolbar`

    - 新しい ToolActionCheckboxList。
        選択用のチェックボックスを備えた項目のコレクションを表示する新しい CheckboxList ToolAction。ToolAction CheckboxList 内のグリッドの高さは 5 項目まで大きくなり、その後スクロールバーが表示されます。
        IgcCheckboxListModule を登録する必要があります。

    - 新しいフィルタリングのサポート。

    - 軸フィールドの変更。
        CategoryChart をターゲットにする場合のツールバーの新しいデフォルトの IconMenu。
        ラベル フィールドは X 軸にマップされ、値フィールドは Y 軸にマップされます。
        ターゲット チャートは、行われた変更にリアルタイムで反応します。チャートに ItemsSource が設定されていない場合、IconMenu は非表示になります。

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
  - キーボード操作で行ディメンションの縮小 (<kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>) および行ヘッダーのソート (<kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd>) ができるようになりました。

_重大な変更_:
- **すべてのグリッド**
  - `RowIsland`
  - `displayDensity` の非推奨のプロパティが削除されました。
  - `actualColumns`、`contentColumns` プロパティの名前を、`actualColumnList` および `contentColumnList` に変更しました。すべての列を取得するには、`column` または `columnList` プロパティを使用してください。
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
- `DisplayDensity` 非推奨となり、代わりに `--ig-size` CSS カスタム プロパティが使用されるようになりました。詳細については、[グリッド サイズ](grids/grid/size.md) トピックを参照してください。

### {PackageCharts}

- [データ凡例のグループ化](charts/features/chart-data-legend.md#{PlatformLower}-データ凡例のグループ化) と [データ ツールチップのグループ化](charts/features/chart-data-tooltip.md#{PlatformLower}-データ-チャートのデータ-ツールチップのグループ化) - 新しいグループ化機能が追加されました。`GroupRowVisible` プロパティは、各シリーズのグループ化を切り替え、オプトインすると `DataLegendGroup` プロパティを介してグループ テキストを割り当てることができます 同じ値が複数のシリーズに適用されている場合、それらはグループ化されて表示されます。すべてのユーザー向けに分類および整理する必要がある大規模なデータセットに役立ちます。

- [チャートの選択](charts/features/chart-data-selection.md) - 新しいシリーズ選択のスタイル設定。これは、`CategoryChart` および `XamDataChart` のすべてのカテゴリ、財務、およびラジアル シリーズに広く採用されています。シリーズはクリックして異なる色で表示したり、明るくしたり、薄くしたり、フォーカスのアウトラインを表示したりできます。個々のシリーズまたはデータ項目全体を通じて影響を受ける項目を管理します。
複数のシリーズとマーカーがサポートされています。特定のデータ項目の値間のさまざまな相違点や類似点を示すのに役立ちます。また、`SelectedSeriesItemsChanged` イベントと `SelectedSeriesItems` は、選択内容に基づいたデータ分析を行うポップアップやその他の画面など、アプリケーション内で実行できるその他のアクションを取り巻く堅牢なビジネス要件を構築するための追加の支援として利用できます。 

- [ツリーマップのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-リーマップのハイライト表示) - ツリー マップの項目のマウスオーバーによるハイライト表示を構成できる `HighlightingMode` プロパティが公開されました。このプロパティには 2 つのオプションがあります: `Brighten` では、マウスを置いた項目にのみハイライト表示が適用され、`FadeOthers` では、マウスホバーした項目のハイライト表示はそのままで、それ以外はすべてフェードアウトします。このハイライト表示はアニメーション化されており、`HighlightingTransitionDuration` プロパティを使用して制御できます。

- [ツリーマップのパーセントベースのハイライト表示](charts/types/treemap-chart.md#{PlatformLower}-ツリーマップのパーセントベースのハイライト表示) - 新しいパーセントベースのハイライト表示により、ノードはコレクションの進行状況またはサブセットを表すことができます。外観は、データ項目のメンバーによって、または新しい `HighlightedItemsSource` を指定することによって、特定の値までの背景色の塗りつぶしとして表示されます。`HighlightedValuesDisplayMode` で切り替えることができ、`FillBrushes` でスタイルを設定できます。

- `Toolbar` - 選択した特定のツールの周囲に境界線を描くための ToolAction の新しい `IsHighlighted` オプション。

### {PackageGauges}

- `XamRadialGauge`
    - ハイライト針の新しいラベル。`HighlightLabelText` と `HighlightLabelSnapsToNeedlePivot` および、その他の HighlightLabel の多くのスタイル関連プロパティが追加されました。

## **{PackageVerChanges-23-2-MAR}**


### {PackageGrids}

- 新しい [`HierarchicalGrid`](grids/hierarchical-grid/overview.md) ンポーネント


### {PackageCharts}

- `InitialFilter` プロパティによる新しいデータ フィルタリング。フィルター式を適用して、チャート データをレコードのサブセットにフィルターします。大規模なデータのドリルダウンに使用できます。

- `XamRadialChart` 
  - 新しいラベル モード
        `CategoryAngleAxis` は、ラベルの位置をさらに構成できる `LabelMode` プロパティを公開するようになりました。これにより、`Center` 列挙型を選択してデフォルト モードを切り替えることも、ラベルを円形のプロット領域に近づける新しいモード `ClosestPoint` を使用することもできます。

### {PackageGauges}

- `XamRadialGauge`
  - 新しいタイトル/サブタイトルのプロパティ。`TitleText`、`SubtitleText` はゲージの下部近くに表示されます。さらに、`TitleFontSize`、`TitleFontFamily`、`TitleFontStyle`、`TitleFontWeight`、`TitleExtent` など、さまざまなタイトルとサブタイトルのフォント プロパティが追加されました。最後に、新しい `TitleDisplaysValue` により、値を針の位置に対応させることができます。
  - `XamRadialGauge` の新しい `OpticalScalingEnabled` と `OpticalScalingSize` プロパティを追加しました。この新機能は、ゲージのラベル、タイトル、サブタイトルが 100% のオプティカル スケーリングを持つサイズを管理します。この新機能の詳細については、[こちら](radial-gauge.md#オプティカル-スケーリング)を参照してください。
    - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamLinearGauge`
  - 新しいハイライト針が追加されました。`HighlightValue` と `HighlightValueDisplayMode` の両方に値と 'Overlay' 設定が指定されたとき、メインの針が薄く表示され、新しい針が表示されます。
- `XamBulletGraph`
    - `HighlightValueDisplayMode` が 'Overlay' 設定に適用されたとき、パフォーマンス バーには値と新しい `HighlightValue` の差が反映されるようになりました。ハイライト値には、フィルタリング/サブセットが完了した測定パーセンテージが塗りつぶされた色で表示され、残りのバーの外観は割り当てられた値に対して薄く表示され、リアルタイムでパフォーマンスを示します。


## **{PackageVerChanges-23-2-JAN}**

### {PackageCharts}

- [チャートのハイライト表示フィルター](charts/features/chart-highlight-filter.md) - `CategoryChart` と `XamDataChart` は、データのサブセットの内外でハイライト表示およびアニメーション化する方法を公開するようになりました。このハイライトの表示はシリーズのタイプによって異なります。列およびエリア シリーズの場合、サブセットはデータの合計セットの上に表示され、サブセットはシリーズの実際のブラシによって色付けされ、合計セットは不透明度を下げます。折れ線シリーズの場合、サブセットは点線で表示されます。

## **{PackageVerChanges-23-2-DEC}**

### {PackageGrids}

- 新機能 (Grid) - [状態保持](grids/grid/state-persistence.md)。


## **{PackageVerChanges-23-2}**

### {PackageLayouts}

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md)
  - クリップボードを介してチャートを画像に保存するための保存ツール アクションが追加されました。
  - ツールバーの `Orientation` プロパティを介して垂直方向が追加されました。デフォルトでは、ツールバーは水平方向ですが、ツールバーを垂直方向に表示できるようになり、ツールが左右にポップアップ表示されます。
  - ツールバーの `renderImageFromText` メソッドを介してカスタム SVG アイコンのサポートが追加され、カスタム ツールの作成がさらに強化されました。


## **{PackageVerChanges-23-1}**

### {PackageLayouts}

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md) - このコンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、`XamDataChart` または `CategoryChart` コンポーネントにリンクされると、プロパティとツール項目のプリセットで動的に更新されます。プロジェクト用のカスタム ツールを作成して、エンド ユーザーが変更を提供できるようになり、無限のカスタマイズが可能になります。

### {PackageCharts}

- [ValueLayer](charts/features/chart-overlays.md#{PlatformLower}-value-layer) - `ValueLayer` という名前の新しいシリーズ タイプが公開され、最大値、最小値、平均値など、プロットされたデータのさまざまな焦点のオーバーレイを描画できるようになりました。これは、新しい `ValueLines` コレクションに追加することで、`CategoryChart` と `FinancialChart` に適用されます。

- **破線の配列**を `XamDataChart` のシリーズのさまざまな部分に適用できるようになりました。これは、チャートにプロットされた[シリーズ](charts/types/line-chart.md#{PlatformLower}-折れ線チャートのスタイル設定)、チャートの[グリッド線](charts/features/chart-axis-gridlines.md#{PlatformLower}-軸グリッド線のプロパティ)、チャートにプロットされたシリーズの[トレンドライン](charts/features/chart-trendlines.md#{PlatformLower}-チャート-トレンドラインのダッシュ配列の例)に適用できます。


## **{PackageVerChanges-22-2.2}**


### {PackageGrids}

- 新しい引数 `PrimaryKey` が `IgcRowDataEventArgs` と、`RowAdded` および `RowDeleted` イベントによって発行されるイベント引数の一部に導入されました。グリッドに主キー属性が追加されている場合、発行された primaryKey イベント引数は行 ID を表し、それ以外の場合はデフォルトで未定義になります。
- `RowSelectionChanging` イベント引数が変更されました。グリッドが primaryKey を設定した場合、`OldSelection`、`NewSelection`、`Added` および `Removed` コレクションは、選択された要素の行キーで構成されなくなりましたが、いずれにしても行データが出力されるようになりました。
- グリッドがリモート データを操作していて、主キーが設定されている場合、現在グリッド ビューに含まれていない選択された行に対して、部分的な行データ オブジェクトが発行されます。
- * 選択された行がグリッド コンポーネントから削除されると、`RowSelectionChanging` イベントは発生しなくなります。
- `OnGroupingDone` イベントは `GroupingDone` に名前が変更され、on プレフィックスを付けない出力規則に違反しなくなりました。
- `OnDensityChanged` イベントの名前が `DensityChanged` に変更され、on プレフィックスを付けない出力規則に違反しなくなりました。このイベントを公開しているすべてのコンポーネントが影響を受けます。

- `PivotGrid`: `IgcPivotDateDimension` プロパティの `InBaseDimension` および `InOption` は非推奨になり、それぞれ `BaseDimension` および `Options` に名前が変更されました。

### {PackageInputs}

- `IgcDateTimeInput` で StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date)、DateTimeInputDatePart ではなく DatePart に切り詰められるようになりました。
- `IgcRadio` および `IgcRadioGroup` で、無効な状態のスタイルとともにコンポーネントの検証が追加されました。
- `IgcMask` - マスク パターン リテラルをエスケープする機能が追加されました。
- `IgcBadge` - バッジの形状を制御する `Shape`  プロパティが追加され、`Square` または `Rounded` のいずれかになります。デフォルトでは、バッジの形状は Rounded です。
- `IgcAvatar` - `RoundShape` プロパティは非推奨になり、将来のバージョンで削除される予定です。ユーザーは、新しく追加された `Shape` 属性によってアバターの形状を制御できます。形状属性は、`Square`、`Rounded`、または `Circle` です。アバターの図形はデフォルトで `Square` です。


## **{PackageVerChanges-22-2.1}**

### {PackageGrids}

- 新しい [Pivot Grid](grids/pivot-grid/overview.md) コンポーネント。

## **{PackageVerChanges-22-2}**

### {PackageGrids}

- 新しい [Grid](grids/data-grid.md) コンポーネント。
- 新しい [Tree Grid](grids/tree-grid/overview.md) コンポーネント。
- `DataGrid`:
  - **{IgPrefix}Column** を `DataGridColumn` に変更しました。
  - **GridCellEventArgs** を `DataGridCellEventArgs` に変更しました。
  - **GridSelectionMode** を `DataGridSelectionMode` に変更しました。
  - **SummaryOperand** を `DataSourceSummaryOperand` に変更しました。

  ### {PackageCharts}

- デフォルトの動作を大幅に改善し、カテゴリ チャート API を改良して使いやすくしました。これらの新しいチャートの改善点は次のとおりです:

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
`IncludedProperties` | `ExcludedProperties` を使用する場合、[チャート集計](charts/features/chart-data-aggregations.md) は機能しません。チャートのこれらのプロパティは非集計データ用です。データを集計しようとすると、これらのプロパティは使用できなくなります。うまくいかない理由は、描画のためにチャートに渡されたコレクションを集計により置き換えるためです。include/exclude プロパティは、そのデータの in/out プロパティをフィルターするように設計されており、それらのプロパティは新しい集計されたコレクションには存在しません。


## **{PackageVerChanges-22-1}**

### {PackageGrids}

- `DataGrid`:
  - 新機能 - [行ページング](grids/data-grid/row-paging.md)を追加しました。これは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。ページネーションを使用すると、データを設定された行数で表示することができ、ユーザーはスクロール バーを使用せずにデータを順次閲覧することができます。テーブル ページネーションの UI には通常、現在のページ、合計ページ、ユーザーがページをめくるためのクリック可能な [前へ] と [次へ] の矢印 / ボタンなどが含まれます。
### {PackageCharts}

- 高度に構成可能な [DataLegend](charts/features/chart-data-legend.md) コンポーネントを追加しました。これは、`Legend` とよく似ていますが、シリーズの値を表示し、シリーズの行と値の列をフィルタリングし、値のスタイルとフォーマットを行うための多くの構成プロパティを提供します。
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

## **{PackageVerChanges-21-2.1}**

### {PackageGrids}

- `DataGrid`:
  - ドロップダウンの項目に複数のフィールドで構成されるキーが含まれている場合に使用される `ComboBoxColumn` に string[] 型の `ValueMultiField` が追加されました。

> [!Note]
> 以下の重大な変更が導入されました: `ValueField` プロパティを string[] 型から string に変更しました。

### {PackageInputs}

- Date Picker:
  * ValueChanged イベントを `SelectedValueChanged` に変更しました。
- Multi-Column ComboBox:
  * `TextChanged` イベントを `TextValueChanged` に変更しました。
  * `ValueChanged` イベントを `SelectedValueChanged` に変更しました。

## **{PackageVerChanges-21-2}**

### {PackageGrids}

- `DataGrid`:
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

> [!Note]
> パッケージ 「lit-html」 を確認してください。最適な互換性のために、「^2.0.0」 以降がプロジェクトに追加されます。

### {PackageCharts}

このリリースでは、地理マップとすべてのチャート コンポーネントのビジュアル デザインと構成オプションにいくつかの改善と簡素化が導入されています。

- `FinancialChart` と `CategoryChart` の `YAxisLabelLocation` プロパティのタイプを **AxisLabelLocation** から **YAxisLabelLocation** に変更しました。
- `FinancialChart` の `XAxisLabelLocation`  プロパティのタイプを **AxisLabelLocation** から **XAxisLabelLocation** に変更しました。
- `CategoryChart` に `XAxisLabelLocation` プロパティを追加しました。
- 凡例で `XamGeographicMap` の地理的なシリーズを表すためのサポートが追加されました。
- `FinancialChart` と `CategoryChart` にデフォルトの十字線を追加しました。
- `FinancialChart` と `CategoryChart` にデフォルトの十字線の注釈を追加しました。
- `FinancialChart` にデフォルトで最終値の注釈を追加しました
- カテゴリ チャートとファイナンシャル チャートに新しいプロパティを追加しました：
   - 十字線をカスタマイズするための `CrosshairsLineThickness` およびその他のプロパティ。
   - 十字線の注釈をカスタマイズするための `CrosshairsAnnotationXAxisBackground` およびその他のプロパティ。
   - 最終値の注釈をカスタマイズするための `FinalValueAnnotationsBackground` およびその他のプロパティ。
   - シリーズ塗りつぶしの不透明度を変更できる `AreaFillOpacity` (エリア チャートなど)
   - マーカーの厚さを変更できる `MarkerThickness`
- カテゴリ チャート、ファイナンシャル チャート、データ チャート、および地理マップに新しいプロパティを追加しました。
   - 同じチャート内の複数のシリーズにどのマーカー タイプを割り当てることができる `MarkerAutomaticBehavior` 
   - 凡例で表されるすべてのシリーズのバッジの形状を設定するための `LegendItemBadgeShape`
   - 凡例のすべてのシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode` 
- データ チャートと地理マップのシリーズに新しいプロパティを追加しました。
   - 凡例で表される特定のシリーズにバッジの形状を設定するための `LegendItemBadgeShape` 
   - 凡例の特定のシリーズにバッジの複雑さを設定するための `LegendItemBadgeMode`
- カテゴリ チャートとシリーズで、デフォルトの垂直十字線ストロークを <span style="color:#000000">#000000</span> から <span style="color:#BBBBBB">#BBBBBB</span> に変更しました。
- 同じチャートにプロットされたすべてのシリーズのマーカーの図形を円に変更しました。これは、チャートの `MarkerAutomaticBehavior` プロパティを `SmartIndexed` 列挙値に設定することで元に戻すことができます。
- チャートの凡例のシリーズの簡略化された図形で、円、線、または四角のみを表示します。これは、チャートの `LegendItemBadgeMode` プロパティを `MatchSeries` 列挙値に設定することで元に戻すことができます。
- アクセシビリティを向上させるために、すべてのチャートに表示されるシリーズとマーカーのカラー パレットを変更しました

| 古いのブラシ/アウトライン | 新のアウトライン/ブラシ |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |


## **{PackageVerChanges-21-1}**

### {PackageGrids}

- `DataGrid`:
  - `EditOnKeyPress` を追加しました - 別名 Excel スタイルの編集。入力するとすぐに編集を開始します。
  - `EditModeClickAction` プロパティを追加しました - デフォルトでは、編集モードに入るにはダブル クリックが必要です。これを `SingleClick` に設定して、新しいセルを選択するときに編集モードを実行できるようにすることができます。
  - `EnterKeyBehaviors` プロパティ (別名 Excel スタイルのナビゲーション (Enter 動作)) を追加して、Enter キーの動作を制御します。例えば、オプションは (なし、編集、上、下、左、右に移動) です。
  - `EnterKeyBehaviorAfterEdit` プロパティを追加しました - 編集モードでは、このプロパティは Enter キーが押されたときを制御します。例えば、オプションは (下、上、右、左のセルに移動) です。
  - `SelectAllRows` メソッドを追加しました。
  - 行範囲の選択を追加しました - `GridSelectionMode` プロパティを MultipleRow に設定すると、次の新しい機能が含まれるようになりました:
    - クリックしてドラッグし、行を選択します。
    - <kbd>SHIFT</kbd> キーを押しながらクリックして、複数の行を選択します。
    - <kbd>SHIFT</kbd> キーを押しながら <kbd>↑</kbd> + <kbd>↓</kbd> 矢印キーを押して、複数の行を選択します。
  - スペース バーを押すと、MultipleRow または SingleRow に設定された `GridSelectionMode` プロパティを介してアクティブな行の選択が切り替わります。
  - 列オプション ダイアログに列集計を追加しました。

### {PackageCharts}

- Date Picker:
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


### {PackageMaps}

> [!Note]
> これらの機能は CTP です。

- マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
- 座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
- シェイプ シリーズのハイライト表示のサポートが追加されました。
- シェイプ シリーズの一部の注釈レイヤーのサポートが追加されました。


### {PackageCharts}

このリリースでは、すべてのチャート コンポーネントに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。例えば、`XamDataChart`、`CategoryChart`、および `FinancialChart`。

- 棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
- heat min プロパティの 散布高密度シリーズの色を <span style="color:#8a5bb1">#8a5bb1</span> から <span style="color:#000000">#000000</span> に変更しました。
- heat max プロパティの 散布高密度シリーズの色を <span style="color:#ee5879">#ee5879</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
- ファイナンシャル/ウォーターフォール シリーズの `NegativeBrush` および `NegativeOutline` プロパティを <span style="color:#C62828">#C62828</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
- マーカーの厚さを 1 pxから 2 pxに変更しました。
- `PointSeries`、`BubbleSeries`、`ScatterSeries`、`PolarScatterSeries` のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。`MarkerFillMode` プロパティを Normal に設定すると、この変更を元に戻すことができます。
- `TimeXAxis` および `OrdinalTimeXAxis` のラベリングを圧縮しました。
- 新しいマーカー プロパティ:
    - series.`MarkerFillMode` - マーカーがアウトラインに依存するように、`MatchMarkerOutline` に設定できます。
    - series.`MarkerFillOpacity` - 0〜1 の値に設定できます。
    - series.`MarkerOutlineMode` - マーカーのアウトラインが塗りブラシの色に依存するように、`MatchMarkerBrush` に設定できます。
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

- バブル、ドーナツ、および円チャートで使用できる水平方向の `Orientation` プロパティを ItemLegend に追加しました
- `LegendHighlightingMode` プロパティの追加 - 凡例項目にホバーした時にシリーズのハイライト表示を有効にします

## **{PackageVerChangedFields}**

### {PackageGrids}

- `DataGrid`:

> [!Note]
> これらの重大な変更は、グリッド パッケージで導入されました。

- PropertyPath の名称変更

データ グリッド コンポーネントの `propertyPath` プロパティ名が `field` に変更されました。これは、すべての Column タイプ、GroupDescription、SortDescription および SummaryDescription に適用します。

```html
<igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-data-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
income.field = "Income";
```

## **{PackageVerRenamedGrid}**

### {PackageGrids}

- `DataGrid`:

- Live Grid の名称変更 - Data Grid コンポーネントおよび対応するモジュールの名前が 「LiveGrid」 から 「DataGrid」 に変更されました。

> [!Note]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

グリッドとそれに対応するモジュールをインポートする新しいコードは以下のとおりです。

```ts
import { IgcDataGrid } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';
```

- `DataGrid` の必須ピア依存関係

Data Grid コンポーネントには 「inputs」 パッケージが必要です。

```ts
**npm install --save {PackageInputs}**
```

## **{PackageVerChangedImports}**

### All Packages

- Import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!Note]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

| 影響されるパッケージ | 影響されるコンポーネント |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageExcel}/v/{PackageVerChangedImports}" target="_blank">{PackageExcel}</a> | [Excel Library](excel-library.md)  |
| <a href="{PackageWebsite}{PackageSpreadsheet}/v/{PackageVerChangedImports}" target="_blank">{PackageSpreadsheet}</a> | [Spreadsheet](spreadsheet-overview.md) |
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [Geo Map](geo-map.md)、[Treemap](charts/types/treemap-chart.md)  |
| <a href="{PackageWebsite}{PackageGauges}/v/{PackageVerChangedImports}" target="_blank">{PackageGauges}</a> |  [Bullet Graph](bullet-graph.md)、[Linear Gauge](linear-gauge.md)、[Radial Gauge](radial-gauge.md)   |
| <a href="{PackageWebsite}{PackageCharts}/v/{PackageVerChangedImports}" target="_blank">{PackageCharts}</a>| Category Chart、Data Chart、Donut Chart、Financial Chart、Pie Chart、[Zoom Slider](zoomslider-overview.md)  |
| <a href="{PackageWebsite}{PackageCore}/v/{PackageVerChangedImports}" target="_blank">{PackageCore}</a> | すべてのクラスと列挙型  |
| <a href="{PackageWebsite}{PackageGrids}/v/{PackageVerChangedImports}" target="_blank">{PackageGrids}</a> | [Data Grid](grids/data-grid/overview.md) |

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
import { IgcDataGridComponent } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from "igniteui-webcomponents-data-grids";
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
import { IgcLiveGridModule } from 'igniteui-webcomponents-data-grids/ES5/igc-live-grid-module';
import { IgcLiveGridComponent } from 'igniteui-webcomponents-data-grids/ES5/igc-live-grid-component';
```

## {PackageCommon}

### **{PackageCommonVerChanges-5.1.0}**

#### 追加
- 新しい [Carousel](layouts/carousel.md) コンポーネント。

### **{PackageCommonVerChanges-5.0.0}**

- `Icon`
  - `setIconRef` メソッドが追加されました。これにより、アイコンを SVG ファイルで登録および置き換えることができます。
  - すべてのコンポーネントが内部的な参照によるアイコンを使用するようになり、カスタム テンプレートを明示的に提供しなくても簡単に置き換えられるようになりました。
- `RadioGroup`
  - `name` および `value` プロパティを追加しました。

_重大な変更_:

- `Form` コンポーネントを削除しました。代わりにネイティブのフォームを使用してください。
- 以下のコンポーネントの `size` プロパティが削除され、代わりに `--ig-size` CSS カスタム プロパティが使用されるようになりました。
  - `Avatar`、`Button`,`IconButton`、`Calendar`、`Chip`、`Dropdown`、`Icon`、`Input`、`List`、`Rating`、`Snackbar`、`Tabs`、`Tree`
- カスタム `igcFocus` および `igcBlur` イベントが削除されました。次のコンポーネントには、代わりにネイティブの `focus` イベントと `blur` イベントを使用してください。
  - `Button`、`IconButton`、`Checkbox`、`Switch`、`Combo`、`DateTimeInput`、`Input`、`MaskInput`、`Radio`、**IgcSelectComponent**、`Textarea`
- `Checkbox`、`Switch`、`Radio`
  - `igcChange` イベント引数を `CustomEvent<boolean>` から `CustomEvent<{ checked: boolean; value: string | undefined }>` に変更しました。
- `Combo`、**IgcSelectComponent**
  - `positionStrategy`、`flip`、`sameWidth` プロパティが削除されました。
- `Dialog`
  - `closeOnEscape` プロパティの名前を `keepOpenOnEscape` に変更しました。
- `Dropdown`
  - `positionStrategy` プロパティが削除されました。
- `Input`
  - `maxlength` および `minlength` プロパティが削除されました。代わりに、ネイティブの `maxLength` および `minLength` プロパティ、または `max` および `min` を使用してください。
  - `readonly` および `inputmode` プロパティの名前を `readOnly` および `inputMode` に変更しました。
- `RangeSlider`
  - `ariaThumbLower`/`ariaThumbUpper` プロパティの名前を、`thumbLabelLower`/`thumbLabelUpper` に変更しました。
- `Rating`
  - `readonly` プロパティの名前を `readOnly` に変更しました。

### **{PackageCommonVerChanges-4.11.1}**

#### 変更
- `Stepper` - 垂直モードでのデザインの変更。

### **{PackageCommonVerChanges-4.11.0}**

#### 変更
- `Toast`、`Rating`、`Stepper` - Indigo テーマのスタイル設定の変更。

### **{PackageCommonVerChanges-4.10.0}**

#### 追加
- 新しい [Banner](notifications/banner.md) コンポーネント。
- 新しい [Divider](layouts/divider.md) コンポーネント。
- 新しい [DatePicker](scheduling/date-picker.md) コンポーネント。
- `RadioGroup` - ラジオ グループを通じて、基礎となるラジオ コンポーネントの名前とチェック状態をバインドします。

#### 非推奨
- `Input` `Inputmode` プロパティ。代わりに、ネイティブの `inputMode` DOM プロパティに調整されます。

#### 修正
- `Input`、`Textarea`- 値に `undefined` を渡すと、基になる入力値が undefined に設定されます。
- `MaskInput` - フォームの `reset` の呼び出し後、基になる入力値とプレースホルダーの状態が正しく更新されます。
- `Tree` - 項目 `indicator` CSS パーツに `--ig-size` を設定すると、アイコンのサイズが変更されるようになりました。
- `DateTimeInput` - 特定のシナリオで `igcChange` が二重に発行されます。
- `NavDrawer` - ミニ バリアントは、開いた状態でない場合、最初は描画されません。
- `Combo`:
  - <kbd>ENTER</kbd> キーを使用してエントリを選択すると、単一選択モードで正しく機能するようになりました。
  - `DisableFiltering` オプションをオンにすると、以前に入力した検索語句がクリアされるようになりました。
  - 単一選択モードで、選択した項目に既に一致する検索語を入力すると、正しく機能するようになりました。

### **{PackageCommonVerChanges-4.9.0}**

#### 追加
- `ButtonGroup` - `SelectedItems` プロパティを介して選択状態をリセットできるようになりました。
- `Input`、`Textarea` - ユーザー入力を制限することなく検証ルールを適用できるように `ValidateOnly` を公開しました。

#### 変更
- `Combo`、`Select`、`Dropdown` - ネイティブの `Popover` API を使用するようになりました。

#### 非推奨
- `Dropdown` - `PositionStrategy` プロパティは非推奨です。ドロップダウンは、ブラウザー ビューポートの最上位レイヤーにコンテナーをレンダリングするために `Popover` API を使用するようになったため、このプロパティは廃止されました。

#### 修正
- `DateTimeInput` - コンポーネントが読み取り専用モードの場合、Material テーマのラベルが壊れます。

### **{PackageCommonVerChanges-4.8.2}**

#### 修正
- `Textarea` - サフィックスのないテキスト領域のサイズ変更ハンドルの位置。
- `Tabs` - 単一の呼び出しスタックでタブ グループとタブを動的に作成および追加するときにエラーが発生します。
- `Checkbox`/`Switch` - 最初にチェックしたときにフォームの送信に参加します。
- `Dialog` - コンポーネントが実際に閉じられる/非表示になる前に `igcClosed` が発生します。

### **{PackageCommonVerChanges-4.8.1}**

#### 修正
- `DateTimeInput` - `InputFormat` は、既に設定されている値には適用されません。
- `Checkbox`、`Radio`、`Switch` - フォーム検証を同期的に適用します。
- `Select`、`Dropdown` - ドロップダウン/選択項目スロット内のラップ要素をクリックしても項目を選択できません。
- `Tree` - アクティブ状態は、クリック時に正しいツリー ノードに正しく適用されます。

### **{PackageCommonVerChanges-4.8.0}**

#### 追加
- `Combo` では、`GroupSorting` を none に設定できるようになりました。これにより、提供されたデータの順序でグループが表示されます。
- `Button`/`IconButton` - テーマ間でビジュアルの外観が更新され、新しい状態が追加されました。
- `NavBar` - Bootstrap テーマに境界線が追加されました。

#### 変更
- `Combo` でのグループ化ではデータがソートされなくなりました。`GroupSorting` プロパティは、グループのソート方向にのみ影響するようになりました。**動作変更**: 以前のリリースでは、グループのソート方向によって項目もソートされていました。この動作を実現したい場合は、既にソートされたデータを `Combo` に渡すことができます。

#### 非推奨
- `Slider` - `aria-label-upper` と `aria-label-lower` は非推奨であり、次のメジャー リリースで削除されます。代わりに、`thumb-label-upper` と `thumb-label-lower` を使用してください。

#### 修正
- `Button` - スロットアイコンのサイズ。
- `ButtonGroup`
  - Fluent テーマの外観を更新しました。
  - Safari での無効状態。
- `Combo`/`Select` - スタイルの問題。
- `Slider`
  - スライダー トラックのクリックは、トラック要素の幅を計算の基準として使用します。
  - スライダーのつまみを連続的にドラッグし、上限/下限を超えても、入力イベントは発生されません。
  - `min`/`max` の前に `upper-bound`/`lower-bound` を設定する場合、スライダーはバインドされたプロパティを `min`/`max` の以前の値で上書きしません。
  - スライダーのつまみにバインドされた `aria-label` は結果のレンダリングでリセットされなくなりました。
- `Input`
  - デフォルトの検証は同期的に実行されます。
  - スタイルの問題。
- `DateTimeInput` - `setRangeText()` は基になる値を更新します。

### **{PackageCommonVerChanges-4.7.0}**

#### 追加
- `Tree` - ノードをクリックすると展開状態が変更されるかどうかを決定する `ToggleNodeOnClick` プロパティが追加されました。デフォルトは **false** です。

- `Rating` - `AllowReset` が追加されました。有効にすると、同じ値を選択するとコンポーネントがリセットされます。**動作変更**: 以前のリリースでは、これが Rating コンポーネントのデフォルトの動作でした。アプリケーションでこの動作を維持する必要がある場合は、必ず `allowReset` を設定してください。

#### 変更
- `Avatar`、`Badge`、および `Combo` の WAI-ARIA 準拠を改善しました。
#### 修正
- `Dropdown`、`Select`、および `Combo` のアクティブ項目のビジュアル スタイル。
- `NavDrawer` - ミニ バリアントの壊れたビジュアル スタイル。

### **{PackageCommonVerChanges-4.6.0}**

#### 追加
- `Snackbar` に `action` スロットが追加されました。
- `indicator-expanded` スロットが `ExpansionPanel` に追加されました。
- `toggle-icon-expanded` スロットが `Select` に追加されました。
- `Select`、`Dropdown` - `selectedItem`、`items`、`groups` ゲッターを公開しました。

#### 変更
- パッケージを Lit v3 に更新しました。
- コンポーネントのダーク バリアントはシャドウ ルートにバインドされるようになりました。
- コンポーネントは現在のテーマに基づいてデフォルトのサイズを実装します。
- `ButtonGroup` - イベントをキャンセル不可に変更しました。
- コンポーネント CSS を最適化し、バンドル サイズを縮小しました。
- `Icon`、`Select`、`Dropdown`、`List` の WAI-ARIA が改善されました。

#### 修正
- `Textarea` にスタイル設定パーツがありません。
- `TreeItem` の無効なスタイル。
- `Snackbar` の不要なスタイルを削除しました。
- `TreeItem` ホバー状態のビジュアル デザイン。
- ビューを切り替えても `Calendar` のフォーカス状態が維持されません。

### **{PackageCommonVerChanges-4.5.0}**

#### 追加

- 新しい [Text Area](inputs/text-area.md) コンポーネント。
- 新しい [Button Group](inputs/button-group.md) コンポーネント。
- 新しい `ToggleButton`。
- `NavDrawer` は CSS トランジションをサポートするようになりました。
- `Toast` と `Snackbar` の位置属性。

#### 非推奨

`size` プロパティと属性は、すべてのコンポーネントで非推奨になりました。代わりに `--ig-size` CSS カスタム プロパティを使用してください。次の例では、`Avatar` コンポーネントのサイズを小さく設定します:

```css
igc-avatar {
  --ig-size: var(--ig-size-small);
}
```

#### 修正
- Safari でのコンボ項目の位置。
- RTL コンテキストのカレンダー ナビゲーション ボタン。
- `IgcComboChangeEventArgs` タイプのエクスポート。
- 遅延データ バインディングを使用したコンボ値と選択状態。
- さまざまなスタイルとテーマの修正と調整

### **{PackageCommonVerChanges-4.4.0}**

#### 追加
- 次のコンポーネントは、フォームに関連付けられたカスタム要素になりました。これらは親 `<form>` に自動的に関連付けられ、ブラウザーが提供するコントロールのように動作します。

  - `Button` & `IconButton`
  - `Checkbox`
  - `Combo`
  - `DateTimeInput`
  - `Input`
  - `MaskInput`
  - `Radio`
  - `Rating`
  - 単一の `Slider`
  - `Select`
  - `Switch`
- `Stepper` はアニメーションをサポートするようになりました。

#### 変更
- `Rating` - Fluent テーマのカラー。
- `Stepper` - インジケーターのスタイルとカラー スキーマ。

#### 非推奨
- `IgcForm` コンポーネントは非推奨です。
- `Input`:
  - `minlength` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `minLength` を使用してください。
  - `maxlength` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `maxLength` を使用してください。
  - `readonly` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `readOnly` を使用してください。
- `MaskInput`:
  - `readonly` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `readOnly` を使用してください。
- `DateTimeInput`:
  - `readonly` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `readOnly` を使用してください。
  - `minValue` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `min` を使用してください。
  - `maxValue` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `max` を使用してください。
- `Rating`:
  - `readonly` プロパティは非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `readOnly` を使用してください。

#### 削除済
- デフォルトの属性を隠していた独自の `dir` 属性が削除されました。これは**互換性のある変更**です。
- `Slider` - `ariaLabel` シャドウ プロパティ。これは**互換性のある変更**です。
- `Checkbox` - `ariaLabelledBy` シャドウ属性。これは**互換性のある変更**です。
- `Switch` - `ariaLabelledBy` シャドウ属性。これは**互換性のある変更**です。
- `Radio` - `ariaLabelledBy` シャドウ属性。これは**互換性のある変更**です。

#### 修正
- `Input` - バリアントのスタイル設定の問題と Indigo テーマの問題を概説しました。
- `Select` - バリアントのスタイル設定の問題を概説しました。
- `DateTimeInput` - `spinUp/spinDown` は、入力にフォーカスがあるときにキャレットを移動するように呼び出します。

### **{PackageCommonVerChanges-4.3.1}**

#### 追加
- `Tree` - コンポーネントアニメーション。
- コンポーネントの境界半径は、そのスキーマから使用されます。

#### 変更
- `Combo`、`Input`、`Select` - スキーマのカラー。
- `Dropdown` - スキーマのカラー。
- `Icon` - テーマのスタイルとサイズが更新されました。

#### 修正
- `Combo` - 特定のシナリオでは単一選択が機能しません。
- `Dropdown` - さまざまなスタイル設定の修正。
- `IconButton` - リップルのある境界線の半径。
- `IconButton` - Fluent テーマの間違ったカラーを修正しました。
- `Input` - さまざまなスタイル設定の修正。
- `TreeItem` - 最も近い *igc-tree-item* 祖先を親として割り当てます。
- `Tabs` - 内部の **hidden** スタイルとカスタム表示プロパティ。

### **{PackageCommonVerChanges-4.3.0}**

#### 追加
- `Combo`:
  - `matchDiacritics` をフィルタリング オプション プロパティに追加しました。デフォルトは **false** です。**true** に設定すると、フィルターはアクセント付き文字とその基本文字を区別します。それ以外の場合、文字列は正規化されてから照合されます。
  - 現在の選択内容をデータ オブジェクトの配列として返す `selection` プロパティ。
- `Card`: 明示的な高さのサポート
- `Dialog`: アニメーションの追加
- `Snackbar`: アニメーションの追加
- `Toast`: アニメーションの追加

#### 変更
- `Combo`:
  - `value` は読み取り専用ではなくなり、明示的に設定できるようになりました。value 属性は宣言型のバインディングもサポートしており、有効な JSON 文字列化配列を受け入れます。

  - `value` タイプが `string[]` から `ComboValue<T>[]` に変更されました:

  ```ts
  ComboValue<T> = T | T[keyof T]
  ```

  - `igcChange` イベント オブジェクトのプロパティも新しい `value` タイプを反映するように変更されました:

  ```typescript
  interface IgcComboChangeEventArgs<T> {
    newValue: ComboValue<T>[];
    items: T[];
    type: ComboChangeType;
  }
  ```

#### 非推奨
- `Select`: `sameWidth`、`positionStrategy`、`flip` は非推奨になりました。これらは次のメジャー リリースで削除される予定です。

#### 修正
- `Select`: `prefix`/`suffix`/`helper-text` スロットが描画されません。
- `Tabs`: ネストされたタブの選択。
- `Dialog`: 背景は要素をオーバーレイしません。
- `Dropdown`: 最初に開いた状態でのリストボックスの位置。
- `Stepper`: 親コンテナ内で垂直方向に引き伸ばします。
- `Navbar`: Fluent テーマの間違ったカラー。
- 高さが指定されていない場合、アニメーション プレーヤーはエラーを発生します。
- `DateTimeInput`: Chromium ベースのブラウザーでの Intl.DateTimeFormat の問題。

### **{PackageCommonVerChanges-4.2.3}**

#### 非推奨
- `Dialog` - `closeOnEscape` プロパティは非推奨となり、代わりに新しい `keepOpenOnEscape` プロパティが使用されます。

#### 修正
- `Radio`- 選択されたフォーカス状態のカラー。
- `IconButton` - 他のデザイン システム製品に合わせてアイコンのサイズを設定します。
- `Chip` - Fluent および Material テーマのアウトライン スタイルが削除されました。
- `Calendar` - 設定された値の日付へのナビゲーション。
- `Tabs` - 親の高さを完全には取得しません。

### **{PackageCommonVerChanges-4.2.2}**

#### 非推奨
- `Button` - `prefix`/`suffix` スロットは不要になったため、次のメジャー リリースで削除される予定です。

#### 修正
- `Button` - UI の不一致。
- `Calendar` - Fluent テーマの不一致。
- `Combo` - API 経由の選択は検索リストでは機能しません。
- `Dialog` - Fluent テーマの不一致。
- `Input` - UI の不一致。
- `Toast` - Fluent テーマの不一致。
- defineAllComponents にコンポーネントがありません。
- `Avatar`、`Badge`、`Button`、`IconButton` のホスト サイズが間違っています。

### **{PackageCommonVerChanges-4.2.1}**

#### 修正
- `Combo` - 単一選択モードでのフィルタリングでは一致する項目がアクティブ化されません。

### **{PackageCommonVerChanges-4.2.0}**

#### 追加
- `Combo` - `single-select` 属性による単一選択モード。

#### 修正
- `Input` - UI の不一致。
- `Badge` - `igc-icon` とフォント アイコンが正しく描画されません。
- `Radio` - UI の不一致。
- `NavDrawer` - 項目のマージンをオーバーライドできません。

### **{PackageCommonVerChanges-4.1.1}**

#### 修正
- `Input`
  - コンポーネントのサイズに基づいてラベルを配置します。
  - Material のテーマがデザインと一致しません。
  - 基になる入力をキャッシュしません。
- Card - Web Components と Angular 間の色の不一致。
- テーマ - 古くなった `--igc-*` 変数を `--ig-*` に更新しました。
- 要素の切断後にぶら下がっている参照を削除しました。

### **{PackageCommonVerChanges-4.1.0}**

#### 追加
- 新しい [Stepper](layouts/stepper.md) コンポーネント。
- 新しい [Combo](inputs/combo/overview.md) コンポーネント。
- `MaskInput` - コンポーネント内のシンボルを削除するときにリテラル位置をスキップします。

#### 修正
- `MaskInput` - ユーザー入力の検証状態。

### **{PackageCommonVerChanges-4.0.0}**

#### 変更
- テーマ
  - ビルド - テーマをビルドするときに [Ignite UI Theming](https://github.com/IgniteUI/igniteui-theming) パッケージを利用します。
  - サイズ変更 - すべてのコンポーネントまたは個々のコンポーネントのサイズを実行時に CSS 構成できる CSS 変数を導入しました。
  - 間隔 - コンポーネントの内部間隔 (パディング/マージン) のランタイム CSS 構成を可能にする CSS 変数を導入しました。
  - スクロール バー - 任意の要素に `ig-scrollbar` CSS クラスを設定することで、アプリケーション レベルのスクロール バーのスタイルを設定する機能が追加されました。

### **{PackageCommonVerChanges-3.4.2}**

#### 修正
- `DateRangeType` のインポート エラーを解決しました。

### **{PackageCommonVerChanges-3.4.1}**

#### 変更
- `Slider` - 最新の Fluent 仕様に合わせてテーマを更新しました。
- `Calendar` - 週末の色を更新しました。

#### 修正
- `Tabs` の `selected` 属性により、初期化時にコンテンツの可視性が損なわれます。

### **{PackageCommonVerChanges-3.4.0}**

#### 追加
- 新しい [Dialog](notifications/dialog.md) コンポーネント。
- 新しい [Select](inputs/select.md) コンポーネント。

#### 修正
- `Calendar` - 範囲選択の a11y 改善。
- `RangeSlider` - 範囲値を選択するための a11y の改善。
- `Rating` - 支援ソフトウェアが項目の総数を読み取れるようになり、a11y が改善されました。
- `Toast` - 支援ソフトウェアがフォーカスを必要とせずに読み取れるように、メッセージ コンテナーに `role="alert"`  を追加しました。
- `Chip` - 削除ボタンをキーボードでアクセスできるようにしました。
- `Button` の `prefix`/`suffix` により、アイコンがボタンのテキストに揃えられません。

### **{PackageCommonVerChanges-3.3.1}**

#### 変更
- `Tree` - テーマ指定の高さを削除しました。

#### 修正
- `Dropdown` - トップレベルのイベント リスナーを破棄します。
- `LinearProgress` - Safari での不確定なアニメーション。
- `RadioGroup` - 子ラジオ コンポーネントの自動登録。

### **{PackageCommonVerChanges-3.3.0}**

#### 追加
- 新しい [DateTimeInput](inputs/date-time-input.md) コンポーネント。
- 新しい [Tabs](layouts/tabs.md) コンポーネント。
- 新しい [Accordion](layouts/accordion.md) コンポーネント。
- テーマのタイポグラフィ スタイル。

#### 変更
- `Rating` - 単一選択と空のシンボルのサポートが追加されました。
- `Slider` - スライダー ステップの描画を改善しました。
- コンポーネントは、`defineComponents` で登録されると、その依存関係を自動登録するようになりました。

```typescript
import { IgcDropdownComponent, defineComponents } from 'igniteui-webcomponents';
// will automatically register the dropdown item & group elements
// as well as their dependencies if any
defineComponents(IgcDropdownComponent);
```

詳細については、[公式ドキュメント](https://jp.infragistics.com/products/ignite-ui-web-components/web-components/components/general-getting-started)を参照してください。

#### 修正
- 空の入力ヘルパー テキスト コンテナーを削除するようにしました。
- Safari で `Icon` が表示されない問題を修正しました。
- Safari で `Checkbox` が表示されない問題を修正しました。
- フレックス コンテナーで `Button` が正しく伸張するようになりました。
- さまざまなテーマの問題。
- `Dropdown` - バグ修正と実装改善。

### **{PackageCommonVerChanges-3.2.0}**

#### 追加
- 新しい [MaskInput](inputs/mask-input.md) コンポーネント。
- 新しい [ExpansionPanel](layouts/expansion-panel.md) コンポーネント。
- 新しい [Tree](grids/tree.md) コンポーネント。
- `Rating` - シンボルのサイズを制御するために、`selected` CSS パーツと公開された CSS 変数を追加しました。
- `IconButton` - スロット化されたコンテンツを許可します。

#### 修正
- `NavDrawer` - さまざまなスタイルの修正。
- Buttons - 垂直方向の配置とフォーカスの管理。
- `Input` - `suffix`/`prefix` のオーバーフロー。
- `Switch` - 小さいサイズで縮小します。
- `List` - オーバーフロー動作。

### **{PackageCommonVerChanges-3.1.0}**

#### 追加
- `Chip`: `prefix` と `suffix` のスロットを追加しました。
- `Snackbar`: `toggle` メソッドを追加しました。

#### 非推奨
- `Chip`: 以前に公開された `start` スロットと `end` スロットは、`prefix` と `suffix` に置き換えられます。これらは引き続き有効ですが、現在は非推奨であり、将来のバージョンでは削除される予定です。

#### 修正
- `Chip`:
  - 内部アイコンを自動読み込みます。
  - 選択したチップの位置がずれています。
- パッケージ: ESM 内部インポート パス。

### **{PackageCommonVerChanges-3.0.0}**

#### 変更
- _重大な変更_: すべてのドロップダウン関連クラスの名前が `IgcDropDown*` から `IgcDropdown*` に変更されました。

### **{PackageCommonVerChanges-2.2.0}**

#### 追加
- 新しい [DropDown](inputs/dropdown.md) コンポーネント。
- `Calendar`: アクティブ日付は属性を介して設定できます。

### **{PackageCommonVerChanges-2.1.1}**

#### 追加
- `--igc-radius-factor` と `--igc-elevation-factor` から境界の半径と標高を制御します。

例:

```css
/* Make all components square and remove all shadows */
:root {
  --igc-radius-factor: 0;
  --igc-elevation-factor: 0;
}
```

### **{PackageCommonVerChanges-2.1.0}**

#### 追加
- 新しい [LinearProgress](inputs/linear-progress.md) コンポーネント。
- 新しい [CircularProgress](inputs/circular-progress.md) コンポーネント。
- 新しい [Chip](inputs/chip.md) コンポーネント。
- 新しい [Snackbar](notifications/snackbar.md) コンポーネント。
- 新しい [Toast](notifications/toast.md) コンポーネント。
- 新しい [Rating](inputs/rating.md) コンポーネント。
- コンポーネントテーマは、`configureTheme(theme: Theme)` 関数を呼び出すことで実行時に変更できます。

### **{PackageCommonVerChanges-2.0.0}**

#### 追加
- ダーク テーマ
- 新しい [Slider](inputs/slider.md) コンポーネント。
- 新しい [RangeSlider](inputs/slider.md) コンポーネント。
- `Radio` コンポーネントの `required` プロパティのサポート。

#### 変更
- チェックボックス/スイッチの検証状態を修正しました。
- `Calendar` の `value: Date | Date[]` プロパティを 2 つのプロパティに分割しました:  `value: Date` おとび `values: Date[]`。``
- `Calendar` の `hasHeader`  プロパティと `has-header` 属性をそれぞれ `hideHeader` と `hide-header` に置き換えました。
- `Card` の `outlined` プロパティを `elevated` に置き換えました。

#### 削除済
- `NavDrawer` コンポーネントの `igcOpening`、`igcOpened`、`igcClosing`、および `igcClosed` イベントを削除しました。

### **{PackageCommonVerChanges-1.0.0}**

Ignite UI Web Components の初期リリース

#### 追加
- [Avatar](layouts/avatar.md) コンポーネント
- [Badge](inputs/badge.md) コンポーネント
- [Button](inputs/button.md) コンポーネント
- [Calendar](scheduling/calendar.md) コンポーネント
- [Card](layouts/card.md) コンポーネント
- [Checkbox](inputs/checkbox.md) コンポーネント
- Form コンポーネント
- [Icon](layouts/icon.md) コンポーネント
- [IconB utton](inputs/icon-button.md) コンポーネント
- [Input](inputs/input.md) コンポーネント
- [List](grids/list.md) コンポーネント
- [Navigation bar](menus/navbar.md) コンポーネント
- [Navigation drawer](menus/navigation-drawer.md) コンポーネント
- [Radio group](inputs/radio.md) コンポーネント
- [Radio](inputs/radio.md) コンポーネント
- [Ripple](inputs/ripple.md) コンポーネント
- [Switch](inputs/switch.md) コンポーネント




## {PackageDockManager}

### **{PackageDockManagerVerChanges-1.14.4}**

#### 非推奨
- `SplitPane` の `IsMaximized` は非推奨です。分割ペイン レベルで isMaximized を true に設定しても、分割ペインはコンテナーとしてのみ機能し、最大化されて表示される実際のコンテンツがないため、実際の効果はありません。代わりに、`TabGroupPane` および/または `ContentPane` の `IsMaximized` プロパティを使用してください。

### **{PackageDockManagerVerChanges-1.14.3}**

#### 修正
- ドック マネージャーは、Vite ベースのビルドでエラーをスローします。
- 空のルート分割ペインのエッジにドッキングするとエラーが発生します。

### **{PackageDockManagerVerChanges-1.14.2}**

#### 修正
- すばやくドラッグして、パネルをドック マネージャーの境界内に制限します。

### **{PackageDockManagerVerChanges-1.14.1}**

#### 修正
- 近接ドックの RTL チェック

### **{PackageDockManagerVerChanges-1.14.0}**

#### 新機能

- `showPaneHeaders` プロパティを追加しました。
- `proximityDock` プロパティを追加しました。
- `containedInBoundaries` プロパティを追加しました。

#### 機能拡張
- 要素の `contentId` を CSS パーツとして追加します。

#### 修正
- ペインを最大化してピン固定を解除すると、ペインがクリックできなくなります。
- `DockManager` の `AllowInnerDock` が **false** に設定されている場合、`AcceptsInnerDock` が **true** に設定されているペインでは中央ドックが可能です。

### **{PackageDockManagerVerChanges-1.13.0}**

#### 新機能
- `FocusPane` メソッドを追加しました。
- `AllowInnerDock` プロパティと `AcceptsInnerDock` プロパティを追加しました。

#### 機能拡張
- レイアウトでペインの最大化された状態を保存します。

#### 修正
- タブの選択順序は保持されません。

#### **{PackageDockManagerVerChanges-1.12.5}**

#### 新機能
- `paneScroll` イベントを追加しました。

#### 修正
- ТabGroupPane: ピン固定されていない複数のペインのうち 1 つをピン固定すると、すべてのペインがピン固定されます。
- RTL モードでコンテキスト メニューが正しく配置されません。
- キーボードとドッキングすると、アクティブなペインは保持されません。

### **{PackageDockManagerVerChanges-1.12.4}**

#### 修正
- フローティング ペイン内に複数のタブ グループ ペインがある場合、アクティブ ペインが誤って設定されます。

### **{PackageDockManagerVerChanges-1.12.3}**

#### 修正
- 別のウィンドウにペインをドロップするとエラーが発生します。

### **{PackageDockManagerVerChanges-1.12.2}**

#### 機能拡張
- `tabs-more-menu-content` と `tabs-more-menu-item` CSS パーツを追加しました。

#### 修正
- RTL モードでは、ドッキング インジケーターの左/右矢印の位置が逆になります。
- コンテキスト メニューが正しく配置されていません。
- `addEventListener` および `removeEventListener` の不足しているオーバーロード。

### **{PackageDockManagerVerChanges-1.12.1}**

#### 機能拡張
- `splitterResizeStart` イベントと `splitterResizeEnd` イベントにペイン情報を含めます。
- `DockManager` がクラスとしてエクスポートされるようになりました。

#### 修正
- `unpinnedHeaderId` を持つスロットのコンテンツは正しく更新されません。

### **{PackageDockManagerVerChanges-1.12.0}**

#### 修正
- `allowFloating: false` ではドッキングが機能しません。
- アクティブなときにフライアウト ペインが閉じます。
- フォーカス可能な要素はフォーカスを受け取りません。
- ペイン ナビゲーターを使用してナビゲートしても、選択したフローティング ウィンドウは最前面に表示されません。
- `splitterResizeStart` イベントはキャンセルできません。
- タブのコンテキスト メニューが正しく配置されていません。

### **{PackageDockManagerVerChanges-1.11.3}**

#### 新機能
- `contextMenuPosition` プロパティを追加しました。
- `tab-header-close-button` CSS パーツに `selected` オプションを追加しました。

### **{PackageDockManagerVerChanges-1.11.2}**

#### 新機能
- `tab-header-close-button` CSS パーツに `hovered` オプションを追加しました。

### **{PackageDockManagerVerChanges-1.11.1}**

#### 修正
- `tab-header` の CSS パーツの修正。

### **{PackageDockManagerVerChanges-1.11.0}**

#### 新機能
- さまざまなボタンの `ShowHeaderIconOnHover` プロパティのオプションを追加しました。
- スプリッター ハンドル CSS パーツに `horizontal` および `vertical` オプションを追加しました。
- `header-title` の CSS パーツを追加しました。
- アクティブ/非アクティブ状態の `tab-header-close-button` CSS パーツに `hover` オプションを追加しました。
- `paneHeaderCloseButton` スロットと `tabHeaderCloseButton` スロットを追加しました。

### **{PackageDockManagerVerChanges-1.10.0}**

#### 新機能
-  `ShowHeaderIconOnHover` プロパティを追加しました。

#### 修正
- アクティブなペインはフロート/ドック上で保持されません。
- スプリッター スタイルは適用されません。
- カスタマイズされたヘッダー ボタンの `click` イベントが機能しません。
- スプリッター上でドラッグ中に誤ったドック インジケーターが削除されました。

### **{PackageDockManagerVerChanges-1.9.0}**

#### 修正
- スタイルは適用されません。
- RTL モードでのサイズ変更。

### **{PackageDockManagerVerChanges-1.8.0}**

#### 新機能
- ドック マネージャーのボタンをカスタマイズします。
- レイアウトが更新されたときに発生する `LayoutChange`  イベント。

### **{PackageDockManagerVerChanges-1.7.0}**

#### 新機能
- カスタマイズ可能なフローティング ペイン ヘッダー。
- ペインごとの `Disabled` プロパティ。
- `DocumentOnly` プロパティは、コンテンツ ペインをドキュメント ホスト内にのみドッキングできるようにします。
- 分割ペインとタブ グループ ペインの空の領域を表示できるようにする `AllowEmpty` プロパティ。
- ドック マネージャーの `DisableKeyboardNavigation` プロパティ。

#### 修正
- ドッキング インジケーターは、現在ドラッグされているフローティング ペイン上に表示されます。

### **{PackageDockManagerVerChanges-1.6.0}**

#### 新機能
- ドック マネージャーのペインとタブをカスタマイズします。

#### 修正
- フローティング ペインはページの外側にドラッグ可能です。

### **{PackageDockManagerVerChanges-1.5.0}**

#### 新機能
- ペインごとの `AllowMaximize` プロパティ。

#### 修正
- ピン固定されていないペインは、そのコンテンツをクリックすると自動的に閉じます。
- 同じタブ グループにピン固定されていないペインがある場合、オーバーフロー メニューから選択されたペインはアクティブ化されません。

### **{PackageDockManagerVerChanges-1.4.1}**

#### 修正
- タブ グループ内に配置された `allowPinning: false` が指定されたペインはピン固定を解除できます。
- キーボードを使用して最大化されたペインから移動するときに、最大化されたペインを正規化します。

### **{PackageDockManagerVerChanges-1.4.0}**

#### 新機能
- フローティング ペインを作成せずにタブを並べ替えます。
- キーボードナビゲーション。
- ペイ ンナビゲーター。
- フローティング ペインのサイズ変更を有効/無効にします。
- フローティング ペインのサイズ変更のためのイベント。

#### 修正
- アクティブ化されたときにペインを選択します。
- アクティブ化されると、ピン固定されていないペインがフライアウトされます。
- ペイン内で外部ポップアップをホストするときにエラーが発生します。
- ネストされた Dock Manager コンポーネントではタブ選択が失われます。
- フローティングとドッキングが無効になっているペインを含むフローティング ペインは移動できません。
- 空のドック マネージャー内にフローティング ペインをドッキングするときに例外が発生します。

### **{PackageDockManagerVerChanges-1.3.0}**

#### 新機能
- すべてのタブ ヘッダーを表示するのに十分なスペースがない場合は、その他のタブ メニューが表示されます。
- `hidden` プロパティを使用して、レイアウトからペインを削除せずに非表示にします。
- タブとピン固定されていないペインのヘッダー スロット プロパティ - `tabHeaderId` と `unpinnedHeaderId`。

### **{PackageDockManagerVerChanges-1.2.0}**

#### 新機能
- アクティブ ペイン。
- ローカライズのサポート

#### 修正
- 最後のドキュメント ホスト タブをドラッグし、ピン固定されていないペインがある場合にエラーが発生します。
- `allowFloating: false` でペインをドッキングすると、タブのコンテンツが消えます。
- ドッキング インジケーターをすばやく切り替えるときに例外が発生します。

### **{PackageDockManagerVerChanges-1.1.0}**

#### 新機能
- ペインの最大化。
- ドッキング プレビュー シャドウ。
- ARIA のサポート。
- 外部ドラッグ/ドロップをサポートする API。
- 閉じる、ピン固定、ドラッグなどのユーザー操作のプロパティとイベント。
- Angular プロジェクトの **ng update** のサポート。

### **{PackageDockManagerVerChanges-1.0.3}**

#### 機能拡張
- キーボードを使用してスプリッターのサイズを変更します。

### **{PackageDockManagerVerChanges-1.0.2}**

#### 修正
- ペインは最小サイズに変更すると表示されなくなります。

### **{PackageDockManagerVerChanges-1.0.1}**

#### 機能拡張
- アクティブ カラーの CSS 変数を追加します。
- コンテキスト メニューにキーボード サポートを追加します。

#### 修正
- コンテキスト メニューを開いたときに最初のクリックで選択が機能しません。
- 兄弟タブをピン固定/ピン固定解除した後、単一のタブが正しく描画されません。

### **{PackageDockManagerVerChanges-1.0.0}**

Ignite UI Dock Manager の初期リリース