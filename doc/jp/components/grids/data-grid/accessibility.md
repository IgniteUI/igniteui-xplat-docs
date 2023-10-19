---
title: {Platform} データ グリッド | リアルタイム データ グリッドとテーブル | アクセシビリティの遵守 | インフラジスティックス
_description: インフラジスティックスの {ProductName} データ テーブルとグリッドを使用して、スクリーン リーダーがグリッドのセルと列を介して「話す」キーボード ナビゲーションのインタラクションを読み取ることができるアクセシビリティ機能をサポートします。{ProductName} テーブルのチュートリアルをご覧ください!
_keywords: {Platform} Table, Data Grid, cell accessibility, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, セルのアクセシビリティ, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} Grid アクセシビリティの遵守

{ProductName} データ テーブル / データ グリッドは、グリッドのセルと列を介したキーボード ナビゲーションのインタラクションを解釈するアクセシビリティとスクリーン リーダーをサポートしています。

<!-- React, WebComponents -->
これは、グリッドの `useAccessibility` プロパティを **true** に設定することによってアクティブになります。
<!-- end: React, WebComponents -->

<!-- Blazor -->
これは、CSS で `--use-accessibility` プロパティを明示的に **true** に設定することによってアクティブになります。できれば、グリッドを div タグで囲みます。
<!-- end: Blazor -->

## {Platform} Grid アクセシビリティの例


`sample="/grids/data-grid/accessibility", height="600", alt="{Platform} Grid セルのアクセシビリティの例"`



<div class="divider--half"></div>

## 第 508 条の遵守
リハビリテーション法<a href="https://www.section508.gov/" target="_blank">第 508 条</a>は、連邦議会によって 1998 年に改正され、すべての連邦政府機関は障害を持つ人が電子情報技術にアクセスできるようにすることを義務付けました。それ以降、第 508 条の準拠は連邦政府機関の要件であるだけでなく、ソフトウェア ソリューションを提供し、Web ページを設計する際にも重要となります。

第 508 条の第 1194 部 22 条は、特に Web ベースのイントラネットおよびインターネット情報およびシステムを対象としており、遵守すべき 16 の規則が含まれています。お客様の最小限の努力でお客様の Web アプリケーションおよび Web サイトがこれらの規則に整合できるようにするために、インフラジスティックスは、Ignite UI for Angular のコントロールおよびコンポーネントが該当するアクセシビリティ規則に準拠することを保証するための取り組みを続けてきました。

## WAI-ARIA サポート
2014 年に W3C は <a href="https://www.w3.org/TR/wai-aria/" target="_blank">WAI-ARIA 仕様</a>を完成しました。障害を持つユーザーに Web コンテンツおよび Web アプリケーションへのアクセシビリティを提供するためのデザイン方法を定義したものです。

このセクションでは、フレームワークのアクセシビリティ (ARIA) サポートと、コンポーネントの文字表記の方向の簡単な管理を示します。

ARIA 属性
スクリーン リーダーに、グリッドの解釈とインタラクションに必要なコンテキスト情報を提供するために、ARIA 属性がグリッドの DOM 要素に追加されます。これらの属性は、div や span などのプレーンな HTML 要素を使用して複雑な DOM 構造を作成する場合に特に役立ちます。これは、ag-Grid の場合です。

グリッドの DOM 要素を検査する場合、次の役割とプロパティがサポートされ、スクリーン リーダーによって通知されます。

- グリッド セル - グリッド セルを含む要素。
- 行数 - 行数を通知します。
- 列数 - 列数を通知します。
- 行 - 列ヘッダーまたはグリッド セルの行。
- 行インデックス - 行の表示インデックスを通知します。
- 選択された行 - 行が選択可能な場合にのみ存在し、選択状態を通知します。
- 展開されたグループ - 行グループにのみ存在し、展開状態を通知します。
- 列ヘッダー - 列ヘッダーを含む要素。
- セル インデックス - 列の表示インデックスを通知します。
- Colspan - 列が複数の列にまたがる場合にのみ存在し、スクリーン リーダーのガイドに役立ちます。
- ソート - ソート可能な列にのみ存在し、ソートの状態を通知します。
- 列インデックス - セルの表示インデックスを通知します。
- 選択済み - セルが選択可能である場合にのみ存在し、選択状態を通知します。
- 展開済み - グループ セルにのみ存在し、展開状態を通知します。

## キーボード ナビゲーション

`useAccessibility` プロパティを **true** に設定すると、スクリーン リーダーが認識できるデータ グリッド内のさまざまなキーボード ナビゲーション オプションが有効になります。以下は、現在押下されているセルに対する各キーの押下 / 組み合わせとそれらが持つ効果についての説明です。

グリッド内の移動

- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd>: 1 つ上のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd>: 左のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd>: 1 つ下のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd>: 1 つ上のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Home</kbd>: 最初の列ヘッダーに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>End</kbd>: 最後に表示されているセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> 現在の列ヘッダーに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd> 現在の列の最後のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd> 現在の行の最初のセルに移動します。
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd> 現在の行の最後のセルに移動します。

スクリーン リーダー コマンド

- <kbd>Ctrl または Alt</kbd> + <kbd>Num Pad 5</kbd>: 現在のセルを読み上げます。
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>: 現在の行を読み上げます。
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd>: 行の始まりから読み上げます。
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Page Up</kbd>: 現在のセルから行の終わりまで読み上げます。
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Num Pad 5</kbd>: 現在の列を読み上げます。
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd>: 列の先頭から読み上げます。
- <kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>Page Down</kbd>: 列の下部まで読み上げます。

## コード スニペット

以下は、{Platform} データ グリッドにセルのアクセシビリティを実装する方法を示しています。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    useAccessibility="true" />
```

```html
<igc-data-grid id="grid"
     height="100%"
     width="100%"
     use-accessibility="true">
</igc-data-grid>
```

```razor
<div style="--use-accessibility:true;">

        @if (DataSource != null)
        {
            <IgbDataGrid Height="100%" Width="100%" />
        }
</div>
```

## API リファレンス

 - `Grid`
 - `UseAccessibility`