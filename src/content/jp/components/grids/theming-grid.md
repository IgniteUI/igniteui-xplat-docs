---
title: {Platform} Grid のテーマ設定 | リアルタイム {Platform} テーブル | 軽量 {Platform} Web コンポーネント テーブル | インフラジスティックス
_description: {ProductName} のダーク テーマ
_keywords: {Platform} {ComponentTitle}, {ComponentTitle} dark theme {ProductName}
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} Grid のテーマ設定
{Platform} テーマ CSS を使用すると、{ProductName} Grid をブランド アイデンティティに合わせて簡単にカスタマイズできます。
定義済みのテーマとパレットに加えて、CSS カスタム プロパティの代替セットを使用して、データ グリッドのルック アンド フィールをさらにカスタマイズできます。

`sample="/grids/grid/overview-dark", height="500", alt="{Platform} Grid ダーク テーマの例"`


```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/grid/dark/bootstrap.css" rel="stylesheet" />
</head>
```

## 利用可能なテーマ プロパティ

| プロパティ名                            | タイプ                     | 説明                                                                                  |
|------------------------------------------|--------------------------|----------------------------------------------------------------------------------------------|
| --grid-elevation                         | 0〜24 の間の数値      | グリッドに使用されるのエレベーション レベル。                                                 |
| --drag-elevation                         | 0〜24 の間の数値      | 移動可能な要素 (列ヘッダーなど) に使用される のエレベーション レベル。                     |
| --grouparea-color                        | color                    | グリッド グループ領域テキストの色                                                               |
| --grouparea-background                   | color                    | グリッド グループ領域テキストの色                                                               |
| --drop-area-text-color                   | color                    | ドロップ領域テキストの色                                                                     |
| --drop-area-icon-color                   | color                    | ドロップ領域アイコンの色                                                                     |
| --drop-area-background                   | color                    | ドロップ領域の背景色                                                               |
| --drop-area-on-drop-background           | color                    | ドロップ色のドロップ領域の背景                                                       |
| --header-background                      | color                    | グリッド ヘッダーの背景色                                                             |
| --header-text-color                      | color                    | グリッド ヘッダーのテキストの色                                                                   |
| --header-selected-background             | color                    | 選択時のグリッド ヘッダーの背景色 (列の選択など)。                       |
| --header-selected-text-color             | color                    | 選択時のグリッド ヘッダーのテキストの色 (列の選択など)。                             |
| --sortable-header-icon-hover-color       | color                    | 列のソートが可能な場合のグリッド ヘッダーのホバーのアイコンの色。                          |
| --sorted-header-icon-color               | color                    | ソートされたテーブル ヘッダー アイコンの色。                                                           |
| --header-border-width                    | border-width             | ヘッダー境界線に使用される境界線の幅。                                                    |
| --header-border-style                    | border-style             | ヘッダー境界線に使用される境界線のスタイル。点線、破線、実線になります               |
| --header-border-color                    | color                    | ヘッダー境界線に使用される色。                                                           |
| --ghost-header-background                | color                    | ドラッグされたヘッダーの背景色。                                                         |
| --ghost-header-text-color                | color                    | ドラッグされたヘッダーテキストの色。                                                               |
| --ghost-header-icon-color                | color                    | ドラッグされたヘッダー アイコンの色。                                                               |
| --filtering-background-and               | color                    | 高度なフィルタリングの 「AND」 条件の背景色。                                  |
| --filtering-background-or                | color                    | 高度なフィルタリングの 「AND」 条件のフォーカス/選択の背景色。                |
| --filtering-background-and--focus        | color                    | 高度なフィルタリングの 「OR」 条件の背景色。                                   |
| --filtering-background-or--focus         | color                    | 高度なフィルタリングの OR 条件のフォーカス/選択の背景色。                 |
| --grid-border-color                      | color                    | グリッドを囲む境界線の色。                                                       |
| --content-background                     | color                    | グリッド本体の背景色。                                                              |
| --content-text-color                     | color                    | グリッド本体のテキストの色。                                                                    |
| --row-odd-background                     | color                    | 奇数行の背景色。                                                            |
| --row-even-background                    | color                    | 偶数行の背景色。                                                           |
| --row-odd-text-color                     | color                    | 奇数行テキストの色。                                                                  |
| --row-even-text-color                    | color                    | 偶数行テキストの色。                                                                 |
| --row-selected-background                | color                    | 選択された行の背景色。                                                           |
| --tree-selected-filtered-row-text-color  | color                    | 選択された/フィルターされた行のテキストの色。                                                         |
| --row-selected-text-color                | color                    | 選択された行のテキストの色。                                                                 |
| --cell-selected-within-background        | color                    | 選択した行/列内の選択したセルの背景。                            |
| --cell-selected-within-text-color        | color                    | 選択した行/列内の選択したセルの色。                                 |
| --row-selected-hover-background          | color                    | 選択された行のホバーの背景色。                                                           |
| --row-selected-hover-text-color          | color                    | 選択された行のホバー状態のテキスト                                                                   |
| --row-hover-background                   | color                    | ホバー行の背景色。                                                              |
| --row-hover-text-color                   | color                    | ホバー行のテキストの色。                                                                    |
| --row-border-color                       | color                    | グリッド本体の行間の境界線の色。                                                 |
| --pinned-border-width                    | border-width             | ピン固定された行/列の境界線の幅。                                                 |
| --pinned-border-style                    | border-style             | ピン固定された行/列の境界線のスタイル。点線、破線、実線になります            |
| --pinned-border-color                    | color                    | ピン固定された行/列の境界線の色。                                                 |
| --cell-active-border-color               | color                    | アクティブな (フォーカスされる) セルの境界線の色。                                                       |
| --cell-selected-background               | color                    | 選択されたセルの背景色。                                                          |
| --tree-selected-filtered-cell-text-color | color                    | 選択された/フィルターされたセルのテキストの色。                                                        |
| --cell-selected-text-color               | color                    | 選択されたセルのテキストの色。                                                                |
| --cell-editing-background                | color                    | 編集モードのセルの背景色。                                                 |
| --edit-mode-color                        | color                    | 編集モードのテキストの色                                                                  |
| --edited-row-indicator                   | color                    | 編集された行のインジケーターの色。                                                         |
| --cell-new-color                         | color                    | 編集されていない新しいセルのテキストの色。グリッドに新しい行を追加するときに使用されます。                  |
| --cell-edited-value-color                | color                    | セル編集値の色。                                                              |
| --cell-disabled-color                    | color                    | 無効なセルのテキストの色。                                                           |
| --resize-line-color                      | color                    | グリッド ヘッダーのサイズ変更線の色。                                                           |
| --drop-indicator-color                   | color                    | ドロップ インジケーターの色。                                                             |
| --group-label-column-name-text           | color                    | グリッド グループ行名前のテキストの色。                                                   |
| --group-label-icon                       | color                    | グリッド グループ行アイコンの色。                                                               |
| --group-label-text                       | color                    | グリッド グループ行テキストの色。                                                               |
| --expand-all-icon-color                  | color                    | グリッド ヘッダーすべてのグループ行の展開のアイコンの色。                                            |
| --expand-all-icon-hover-color            | color                    | グリッド ヘッダーすべてのグループ行の展開のアイコン ホバーの色。                                      |
| --expand-icon-color                      | color                    | グリッド行の展開アイコンの色。                                                              |
| --expand-icon-hover-color                | color                    | グリッド行の展開アイコン ホバーの色。                                                        |
| --active-expand-icon-color               | color                    | ドロップ色のドロップ領域の背景。                                                      |
| --active-expand-icon-hover-color         | color                    | ドロップ色のドロップ領域の背景。                                                      |
| --group-count-background                 | color                    | グリッド グループの行数バッジの背景色。                                              |
| --group-count-text-color                 | color                    | グリッド グループの行数バッジのテキストの色。                                                    |
| --group-row-background                   | color                    | グリッド グループ行の背景色。                                                         |
| --group-row-selected-background          | color                    | ドロップ色のドロップ領域の背景。                                                      |
| --filtering-header-background            | color                    | フィルター済み列ヘッダーの背景色。                                          |
| --filtering-header-text-color            | color                    | フィルター済み列ヘッダーテキストの色。                                          |
| --filtering-row-background               | color                    | フィルタリング行の背景色。                                                   |
| --filtering-row-text-color               | color                    | フィルタリング行のテキストの色の色。                                                   |
| --tree-filtered-text-color               | color                    | フォーカスされているグループ化行の背景色。                                                  |
| --body-summaries-background              | color                    | 本体に配置される集計グループの背景色。                                 |
| --body-summaries-text-color              | color                    | 本体に配置される集計グループのテキストの色。                                       |
| --root-summaries-background              | color                    | フッターに配置される集計グループの背景色。                               |
| --root-summaries-text-color              | color                    | フッターに配置される集計グループのテキストの色。                                     |
| --row-highlight                          | color                    | グリッド行の強調表示の色。                                                                |
| --row-ghost-background                   | color                    | ドラッグされた行の背景色。                                                     |
| --row-drag-color                         | color                    | ドラッグ ハンドルの色。                                                                |
| --drop-area-border-radius                | 0〜1 の間の数値   | ドロップ領域に使用される境界半径。0～1 の任意の小数、ピクセル、またはパーセントを指定できます。 |

## その他のリソース

<!-- Angular -->

- [グリッドのサイズ設定](grid/sizing.md)
- [仮想化とパフォーマンス](grid/virtualization.md)
- [ページング](grid/paging.md)
- [フィルタリング](grid/filtering.md)
- [ソート](grid/sorting.md)
- [集計](grid/summaries.md)
- [列の移動](grid/column-moving.md)
- [列のピン固定](grid/column-pinning.md)
- [列のサイズ変更](grid/column-resizing.md)
- [選択](grid/selection.md)
- [列のデータ タイプ](grid/column-types.md#デフォルトのテンプレート)
<!-- * [Build CRUD operations with Grid](../general/how-to/how-to-perform-crud.md) -->

<!-- end: Angular -->

<!-- Blazor -->

- [グリッドのサイズ設定](grid/sizing.md)
- [仮想化とパフォーマンス](grid/virtualization.md)
- [ページング](grid/paging.md)
- [フィルタリング](grid/filtering.md)
- [ソート](grid/sorting.md)
- [集計](grid/summaries.md)
- [列の移動](grid/column-moving.md)
- [列のピン固定](grid/column-pinning.md)
- [列のサイズ変更](grid/column-resizing.md)
- [選択](grid/selection.md)
- [列のデータ タイプ](grid/column-types.md#デフォルトのテンプレート)

<!-- end: Blazor -->

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})