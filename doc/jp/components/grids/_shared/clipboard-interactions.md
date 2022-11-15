---
title: {Platform} {ComponentTitle} のクリップボードの操作 - インフラジスティックス
_description: {Platform} {ComponentTitle} のクリップボード機能は、データを Excel、その他のプログラムにコピー、貼り付け、エクスポートするための高速で簡単、カスタマイズ可能な方法を提供します。今すぐお試しください。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} クリップボードの概要

クリップボードへのコピー操作が `{ComponentName}` で可能になりました。この機能は、現在の複数セル データ選択を通して {Platform} {ComponentName} のデータをすばやくコピーするための簡単でカスタマイズ可能な方法を提供します。システム クリップボードの動作により、ユーザーは `{ComponentName}` から Excel または他の外部プログラムにデータをコピーできます。

## {Platform} {ComponentTitle} クリップボードの例

<code-view style="height:635px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-clipboard-operations"
           github-src="{ComponentSample}/clipboard-operations"
           alt="{Platform} {ComponentTitle} クリップボードの操作の例">
</code-view>

## 機能

コピー動作は、ブラウザーとオペレーティング システムで定義されているデフォルトのインタラクションで動作します。以下は、コピー＆ペースト動作の場合です。

- Windows または Unix
  - キーボード ショートカット: <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Ins</kbd>
  - キーボード ショートカット: <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Shift</kbd> + <kbd>Ins</kbd>
  - ブラウザー メニューからのコピー操作
- macOS
  - キーボード ショートカット: <kbd>⌘ Cmd</kbd> + <kbd>C</kbd>
  - キーボード ショートカット: <kbd>⌘ Cmd</kbd> + <kbd>V</kbd>
  - ブラウザー メニューからのコピー操作


## 制限

- カットとコピーの両方のイベントは、Internet Explorer では本来サポートされていません。**paste** イベント (IE 11) は発生されますが、イベントの `ClipboardData` プロパティを公開しません。
> [!NOTE]
> IE 11のセルを**コピー**するためには、キーボード選択を使用できます。複数セルを選択するには **Shift キー** を押しながらコピーするには **Ctrl + C** を押します。

- グリッドが編集モードの間、コピー動作は無効になります。
- この機能の現在のバージョンは、グリッドからのコピー動作のみをカバーします。今後、グリッドの動作内で`貼り付け`を公開する予定です。

<!-- Angular -->

<!-- ComponentStart: Grid -->
カスタムの貼り付けハンドラーを使用して、**貼り付け**の動作を構成できます。[Excel から貼り付けのトピック](paste-excel.md)を参照してください。
<!-- ComponentEnd: Grid -->

<!-- end: Angular -->

## API の使用

次のオプションを処理する `ClipboardOptions` プロパティを公開します。
- `Enabled` は選択したセルのコピーを有効または無効にします。
- `CopyHeaders` は、コピー時に関連付けられているヘッダーを含めます。
- `CopyFormatters` は、既存の列フォーマッタをコピーしたデータに適用します。
- `Separator` は、クリップボードのデータのフォーマットに使用する文字列の区切り文字。デフォルトは `/t` です。

> [!NOTE]
> Excel は、タブで区切られたテキスト (タブ区切り `/t`) を自動的に検出し、データを別々の列に正しく貼り付けることができます。貼り付け形式が機能せず、貼り付けたものがすべて 1 列に表示される場合は、Excel の区切り文字が別の文字に設定されている、またはテキストがタブではなくスペースを使用しています。

- `GridCopy` は、コピー操作が実行されたときに発生します。`ClipboardOptions` を使用してコピー動作が有効になっている場合のみ発生します。

## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [選択](selection.md)
* [仮想化とパフォーマンス](virtualization.md)
* [複数列ヘッダー](multi-column-headers.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for {Platform} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [Ignite UI for {Platform} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
