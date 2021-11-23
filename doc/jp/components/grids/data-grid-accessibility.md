---
title: $Platform$ データ グリッド | リアルタイム データ グリッドとテーブル | アクセシビリティの遵守 | インフラジスティックス
_description: インフラジスティックスの $ProductName $データ テーブルとグリッドを使用して、スクリーン リーダーがグリッドのセルと列を介して「話す」キーボード ナビゲーションのインタラクションを読み取ることができるアクセシビリティ機能をサポートします。$ProductName$ テーブルのチュートリアルをご覧ください!
_keywords: $Platform$ Table, Data Grid, cell accessibility, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, セルのアクセシビリティ, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $Platform$ Grid アクセシビリティの遵守

$ProductName$ データ テーブル / データ グリッドは、グリッドのセルと列を介したキーボード ナビゲーションのインタラクションを解釈するアクセシビリティとスクリーン リーダーをサポートしています。

<!-- React, WebComponents -->
これは、グリッドの `useAccessibility` プロパティを `true` に設定することによってアクティブになります。
<!-- end: React, WebComponents -->

<!-- Blazor -->
これは、CSS で `--use-accessibility` プロパティを明示的に `true` に設定することによってアクティブになります。できれば、グリッドを div タグで囲みます。
<!-- end: Blazor -->

## $Platform$ Grid アクセシビリティの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-accessibility"
           alt="$Platform$ Grid セルのアクセシビリティの例"
           github-src="grids/data-grid/accessibility">
</code-view>

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

`useAccessibility` プロパティを `true` に設定すると、スクリーン リーダーが認識できるデータ グリッド内のさまざまなキーボード ナビゲーション オプションが有効になります。以下は、現在押下されているセルに対する各キーの押下 / 組み合わせとそれらが持つ効果についての説明です。

グリッド内の移動

- <b>Ctrl + Alt + 右矢印キー</b>: 1 つ上のセルに移動します。
- <b>Ctrl + Alt + 左矢印キー</b>: 左のセルに移動します。
- <b>Ctrl + Alt + 下矢印キー</b>: 1 つ下のセルに移動します。
- <b>Ctrl + Alt + 上矢印キー</b>: 1 つ上のセルに移動します。
- <b>Ctrl + Alt + Home</b>: 最初の列ヘッダーに移動します。
- <b>Ctrl + Alt + End</b>: 最後に表示されているセルに移動します。
- <b>Ctrl + Alt + Shift + ↑</b>	現在の列ヘッダーに移動します。
- <b>Ctrl + Alt + Shift + ↓</b>	現在の列の最後のセルに移動します。
- <b>Ctrl + Alt + Shift + ←</b>	現在の行の最初のセルに移動します。
- <b>Ctrl + Alt + Shift + →</b>	現在の行の最後のセルに移動します。

スクリーン リーダー コマンド

- <b>Ctrl または Alt + Num Pad 5</b>: 現在のセルを読み上げます。
- <b>Insert + Shift + ↑</b>: 現在の行を読み上げます。
- <b>Insert + Shift + Home</b>: 行の始まりから読み上げます。
- <b>Insert + Shift + Page Up</b>: 現在のセルから行の終わりまで読み上げます。
- <b>Insert + Shift + Num Pad 5</b>: 現在の列を読み上げます。
- <b>Insert + Shift + End</b>: 列の先頭から読み上げます。
- <b>Insert + Shift + Page Down</b>: 列の下部まで読み上げます。

## コード スニペット

以下は、$Platform$ データ グリッドにセルのアクセシビリティを実装する方法を示しています。

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