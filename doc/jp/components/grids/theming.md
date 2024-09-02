---
title: {Platform} グリッドのテーマ | リアル タイム {Platform} テーブル | 軽量 {Platform} Web Components のテーブル | インフラジスティックス
_description: .
_keywords: {Platform} data grid, infragistics, data grids theming, theming, {ProductName}, table, {Platform} データ グリッド, インフラジスティックス, データ グリッド テーマ, テーマ, テーブル
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid']
namespace: Infragistics.Controls
_language: ja
---

# {Platform} データ グリッドのテーマ
{Platform} テーマ エンジンを使用すると、{ProductName} Grid をブランド アイデンティティに合わせて簡単にカスタマイズできます。
定義済みのテーマとパレットに加えて、一連の CSS カスタム プロパティを使用して、データ グリッドのルック アンド フィールをさらにカスタマイズできます。

### 利用可能なテーマ プロパティ
| プロパティ名                            | 型                     | 説明                                                                                  |
|------------------------------------------|--------------------------|----------------------------------------------------------------------------------------------|
| --grid-elevation                         | 0 ～ 24 の数      | グリッドに使用されるのエレベーション レベル。                                                 |
| --drag-elevation                         | 0 ～ 24 の数      | 移動可能な要素 (列ヘッダーなど) に使用される のエレベーション レベル。                     |
| --grouparea-color                        | 色                    | グリッド グループ領域テキストの色。                                                               |
| --grouparea-background                   | 色                    | グリッド グループ領域テキストの色。                                                               |
| --drop-area-text-color                   | 色                    | ドロップ領域テキストの色。                                                                     |
| --drop-area-icon-color                   | 色                    | ドロップ領域アイコンの色。                                                                    |
| --drop-area-background                   | 色                    | ドロップ領域の背景色。                                                               |
| --drop-area-on-drop-background           | 色                    | ドロップ色のドロップ領域の背景。                                                      |
| --header-background                      | 色                    | グリッド ヘッダーの背景色。                                                             |
| --header-text-color                      | 色                    | グリッド ヘッダーのテキストの色。                                                                  |
| --header-selected-background             | 色                    | 選択時のグリッド ヘッダーの背景色 (列の選択など)。                      |
| --header-selected-text-color             | 色                    | 選択時のグリッド ヘッダーのテキスト色 (列の選択など)。                             |
| --sortable-header-icon-hover-color       | 色                    | 列のソートが可能な場合のグリッド ヘッダーのホバーのアイコンの色。                          |
| --sorted-header-icon-color               | 色                    | ソートされたテーブル ヘッダー アイコンの色。                                                           |
| --header-border-width                    | 境界線の幅             | ヘッダー境界線に使用される境界線の幅。                                                    |
| --header-border-style                    | 境界線スタイル             | ヘッダー境界線に使用される境界線のスタイル。点線、破線、実線になります。               |
| --header-border-color                    | 色                    | ヘッダー境界線に使用される色。                                                           |
| --ghost-header-background                | 色                    | ドラッグされたヘッダーの背景色。                                                         |
| --ghost-header-text-color                | 色                    | ドラッグされたヘッダーテキストの色。                                                               |
| --ghost-header-icon-color                | 色                    | ドラッグされたヘッダー アイコンの色。                                                               |
| --filtering-background-and               | 色                    | 高度なフィルタリングの "AND" 条件の背景色。                                  |
| --filtering-background-or                | 色                    | 高度なフィルタリングの "AND" 条件のフォーカス/選択の背景色。                |
| --filtering-background-and--focus        | 色                    | 高度なフィルタリングの "OR" 条件の背景色。                                   |
| --filtering-background-or--focus         | 色                    | 高度なフィルタリングの "OR" 条件のフォーカス/選択の背景色。                 |
| --grid-border-color                      | 色                    | グリッドを囲む境界線の色。                                                       |
| --content-background                     | 色                    | グリッド本体の背景色。                                                              |
| --content-text-color                     | 色                    | グリッド本体のテキストの色。                                                                    |
| --row-odd-background                     | 色                    | 奇数行の背景色。                                                            |
| --row-even-background                    | 色                    | 偶数行の背景色。                                                           |
| --row-odd-text-color                     | 色                    | 奇数行テキストの色。                                                                  |
| --row-even-text-color                    | 色                    | 偶数行テキストの色。                                                                 |
| --row-selected-background                | 色                    | 選択された行の背景色。                                                           |
| --tree-selected-filtered-row-text-color  | 色                    | 選択された/フィルターされた行のテキストの色。                                                         |
| --row-selected-text-color                | 色                    | 選択された行のテキストの色。                                                                 |
| --cell-selected-within-background        | 色                    | 選択した行/列内の選択したセルの背景。                            |
| --cell-selected-within-text-color        | 色                    | 選択した行/列内の選択したセルの色。                                 |
| --row-selected-hover-background          | 色                    | 選択された行のホバーの背景色。                                                           |
| --row-selected-hover-text-color          | 色                    | 選択された行のホバー状態のテキスト                                                                   |
| --row-hover-background                   | 色                    | ホバー行の背景色。                                                              |
| --row-hover-text-color                   | 色                    | ホバー行のテキストの色。                                                                    |
| --row-border-color                       | 色                    | グリッド本体の行間の境界線色。                                                 |
| --pinned-border-width                    | 境界線の幅             | ピン固定された行/列の境界線の幅。                                                 |
| --pinned-border-style                    | 境界線スタイル             | ピン固定された行/列の境界線のスタイル。点線、破線、実線になります。            |
| --pinned-border-color                    | 色                    | ピン固定された行/列の境界線色。                                                 |
| --cell-active-border-color               | 色                    | アクティブな (フォーカスされれいる) セルの境界線色。                                                       |
| --cell-selected-background               | 色                    | 選択されたセルの背景色。                                                          |
| --tree-selected-filtered-cell-text-color | 色                    | 選択された/フィルターされたセルのテキストの色。                                                        |
| --cell-selected-text-color               | 色                    | 選択されたセルのテキストの色。                                                                |
| --cell-editing-background                | 色                    | 編集モードのセルの背景色。                                                 |
| --edit-mode-color                        | 色                    | 編集モードのテキストの色。                                                                  |
| --edited-row-indicator                   | 色                    | 編集された行のインジケーターの色。                                                         |
| --cell-new-color                         | 色                    | 編集されていない新しいセルのテキスト色。グリッドに新しい行を追加するときに使用されます。                  |
| --cell-edited-value-color                | 色                    | セル編集値の色。                                                              |
| --cell-disabled-color                    | 色                    | 無効なセルのテキストの色。                                                           |
| --resize-line-color                      | 色                    | グリッド ヘッダーのサイズ変更線の色。                                                           |
| --drop-indicator-color                   | 色                    | ドロップ インジケーターの色。                                                             |
| --group-label-column-name-text           | 色                    | グリッド グループ行名前のテキストの色。                                                   |
| --group-label-icon                       | 色                    | グリッド グループ行アイコンの色。                                                               |
| --group-label-text                       | 色                    | グリッド グループ行テキストの色。                                                               |
| --expand-all-icon-color                  | 色                    | グリッド ヘッダーすべてのグループ行の展開のアイコンの色。                                            |
| --expand-all-icon-hover-color            | 色                    | グリッド ヘッダーすべてのグループ行の展開のアイコン ホバーの色。                                      |
| --expand-icon-color                      | 色                    | グリッド行の展開アイコンの色。                                                              |
| --expand-icon-hover-color                | 色                    | グリッド行の展開アイコン ホバーの色。                                                        |
| --active-expand-icon-color               | 色                    | ドロップ色のドロップ領域の背景。                                                      |
| --active-expand-icon-hover-color         | 色                    | ドロップ色のドロップ領域の背景。                                                      |
| --group-count-background                 | 色                    | グリッド グループの行数バッジの背景色。                                              |
| --group-count-text-color                 | 色                    | グリッド グループの行数バッジのテキストの色。                                                    |
| --group-row-background                   | 色                    | グリッド グループ行の背景色。                                                         |
| --group-row-selected-background          | 色                    | ドロップ色のドロップ領域の背景。                                                      |
| --filtering-header-background            | 色                    | フィルター済み列ヘッダーの背景色。                                          |
| --filtering-header-text-color            | 色                    | フィルター済み列ヘッダーテキストの色。                                          |
| --filtering-row-background               | 色                    | フィルタリング行の背景色。                                                   |
| --filtering-row-text-color               | 色                    | フィルタリング行の text-color の色。                                                   |
| --tree-filtered-text-color               | 色                    | フォーカスされているグループ化行の背景色。                                                  |
| --body-summaries-background              | 色                    | 本体に配置される集計グループの背景色。                                 |
| --body-summaries-text-color              | 色                    | 本体に配置される集計グループのテキストの色。                                       |
| --root-summaries-background              | 色                    | フッターに配置される集計グループの背景色。                               |
| --root-summaries-text-color              | 色                    | フッターに配置される集計グループのテキストの色。                                     |
| --row-highlight                          | 色                    | グリッド行のハイライト表示の色。                                                                |
| --row-ghost-background                   | 色                    | ドラッグされている行の背景色。                                                     |
| --row-drag-color                         | 色                    | ドラッグ ハンドルの色。                                                                |
| --drop-area-border-radius                | 0 ～ 1 の数   | ドロップ領域に使用される境界半径。0 ～ 1 の任意の小数、ピクセル、またはパーセントを指定できます。 |

### 使用方法
前述のように、テーブルの CSS 変数を使用すると、グリッドのスタイルを設定できます。次のヘッダーの背景やテキストの色などを変更することで、ダーク テーマを使用するようにグリッドを変更したいとします。これは、オプションで dark-theme.css というファイルで行うことができます。

import "./dark-theme.css";

```css
.ig-data-grid {
  /* shared variables used in custom properties */
  --cell-text-color:#58258b;
  --cell-background:#191919;
  --cell-selected-background: #58258b;
  --cell-selected-within-text-color: #191919;
  --cell-selected-within-background: #58258b;

  --row-selected-background:var(--cell-selected-background);
  --row-hover-background:var(--cell-selected-background);
  --row-hover-text-color:var(--cell-background);

  --header-background: #58258b;
  --header-text-color: #191919;
  --header-separator-background: #58258b;
  --header-separator-width: 5px;

  --section-header-background: #191919;
  --section-header-text-color: #58258b;
  --section-header-selected-background: #58258b;
  --section-header-selected-text-color: #191919;

  --row-separator-background: #191919;
  --row-separator-last-sticky-row-background: #191919;
  --row-separator-pinned-row-background: #58258b;
  --row-separator-sticky-row-background: #58258b;

  --column-resizing-separator-background: #58258b;
  --column-moving-separator-background: #58258b;


  --filtering-header-background: #272727;
  --filtering-header-text-color: #ffffff;
  --filtering-row-background: #272727;
  --filtering-row-text-color: #ffffff;
  --tree-filtered-text-color: #ffffff;

  --summary-root-background: #7446b9;
  --summary-root-label-text-color: #191919;
  --summary-root-value-text-color: #191919;
}

.ig-grid-column-options {
  --background-color: black;
  --text-color: #7446b9;
  --summary-list-text-color: #7446b9;
  --summary-list-background: #191919;
}

.ig-data-grid-toolbar {
  --background-color: #191919;
  --text-color: #58258b;
  --dialog-background-color: #191919;
}

.ig-column-chooser {
  --background-color: #191919;
  --title-color: green;
  --select-all-caption-text-color: #58258b;
  --search-icon-color: #58258b;
  --search-text-color: #58258b;
  --search-background-color: #191919;
  --search-border-color: #58258b;
  --search-text-style: 12px 'Courier';
}

.ig-column-pinning {
  --background-color: white;
  --text-color: #7446b9;
  --select-all-caption-text-color: #58258b;
  --search-icon-color: #58258b;
  --search-text-color: #58258b;
  --search-background-color: #191919;
  --search-border-color: #58258b;
  --search-text-style: 12px 'Courier';
}
```

