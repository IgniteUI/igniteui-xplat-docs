---
title: 	{Platform} {ComponentTitle} 複数行レイアウト - {ProductName}
_description: {ProductName} Data Grid の複数行レイアウト機能を使用して、列をより強力な方法で配置およびサイズ設定します。デモと例をお試しください。
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Multi-Row Layout, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, 複数行レイアウト, インフラジスティックス
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} の複数行レイアウト

{ComponentTitle} のレンダリング機能を拡張します。この機能により、単一のデータレコードを複数の表示行に分割することができます。

## {Platform} {ComponentTitle} 複数行レイアウトの例

`sample="/{ComponentSample}/multi-row-layout-options", height="755", alt="{Platform} {ComponentTitle} 複数行レイアウト概要の例"`



複数行レイアウトの宣言は、`ColumnLayout` コンポーネントによって実現されます。各 `ColumnLayout` コンポーネントは、単一または複数の `Column` コンポーネントを含むブロックと見なします。一部のグリッド機能はブロック レベルで機能します (下記の「機能の統合」セクション参照)。たとえば、仮想化ではブロックを使用して仮想チャンクを決定します。そのため、レイアウトで許容される場合は、パフォーマンスを向上させるために列を更に `ColumnLayout` ブロックに分割します。複数行のレイアウトを設定するときは、これらのブロックの外側に列がなく、`ColumnGroup` を使用しないでください。複数行のレイアウトは、[グリッド レイアウト](https://www.w3.org/TR/css-grid-1/)仕様上に実装されており、その要件に準拠する必要があります。

`Column` は各セルの位置と範囲を決めるために 4 つの `Input` プロパティを公開します。
* `ColStart` - フィールドの開始位置となる列インデックス。このプロパティは**必須**です。
* `RowStart` - フィールドの開始位置となる行インデックス。このプロパティは**必須**です。
* `ColEnd` - 現在のフィールドが終了する位置の列インデックス。colStart と colEnd の間の列数によって、そのフィールドまでの列の幅が決まります。このプロパティは**オプション**です。設定されていない場合、デフォルトは **colStart + 1** になります。
* `RowEnd` - 現在のフィールドが終了する行インデックス。rowStart と rowEnd の間の行数によって、そのフィールドにまたがる行数が決まります。このプロパティは**オプション**です。設定されていない場合は、デフォルトで **rowStart + 1** に設定されます。


```html
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID"></igx-column>
</igx-column-layout>
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName"></igx-column>
	<igx-column [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle"></igx-column>
</igx-column-layout>
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>
	<igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>
	<igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>
	<igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>
</igx-column-layout>
<igx-column-layout>
    <igx-column [rowStart]="1" [colStart]="1" field="Phone"></igx-column>
    <igx-column [rowStart]="2" [colStart]="1" field="Fax"></igx-column>
</igx-column-layout>
```

```razor
<IgbColumnLayout>
    <IgbColumn RowStart="1" RowEnd="3" ColStart="1" Field="ID"></IgbColumn>
</IgbColumnLayout>
<IgbColumnLayout>
    <IgbColumn RowStart="1" ColStart="1" ColEnd="3" Field="CompanyName"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="1" ColEnd="2" Field="ContactName"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="2" ColEnd="3" Field="ContactTitle"></IgbColumn>
</IgbColumnLayout>
<IgbColumnLayout>
    <IgbColumn RowStart="1" ColStart="1" ColEnd="3" Field="Country"></IgbColumn>
    <IgbColumn RowStart="1" ColStart="3" ColEnd="5" Field="Region"></IgbColumn>
    <IgbColumn RowStart="1" ColStart="5" ColEnd="7" Field="PostalCode"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="1" ColEnd="4" Field="City"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="4" ColEnd="7" Field="Address"></IgbColumn>
</IgbColumnLayout>
<IgbColumnLayout>
    <IgbColumn RowStart="1" ColStart="1" Field="Phone"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="1" Field="Fax"></IgbColumn>
</IgbColumnLayout>
```

```html
<igc-column-layout>
	<igc-column row-start="1" col-start="1" row-end="3" field="ID"></igc-column>
</igc-column-layout>
<igc-column-layout>
	<igc-column row-start="1" col-start="1" col-end="3" field="CompanyName"></igc-column>
	<igc-column row-start="2" col-start="1" col-end="2" field="ContactName"></igc-column>
	<igc-column row-start="2" col-start="2" col-end="3" field="ContactTitle"></igc-column>
</igc-column-layout>
<igc-column-layout>
	<igc-column row-start="1" col-start="1" col-end="3" field="Country"></igc-column>
	<igc-column row-start="1" col-start="3" col-end="5" field="Region"></igc-column>
	<igc-column row-start="1" col-start="5" col-end="7" field="PostalCode"></igc-column>
	<igc-column row-start="2" col-start="1" col-end="4" field="City"></igc-column>
	<igc-column row-start="2" col-start="4" col-end="7" field="Address"></igc-column>
</igc-column-layout>
<igc-column-layout>
    <igc-column row-start="1" col-start="1" field="Phone"></igc-column>
    <igc-column row-start="2" col-start="1" field="Fax"></igc-column>
</igc-column-layout>
```

```tsx
<IgrColumnLayout>
    <IgrColumn rowStart="1" colStart="1" rowEnd="3" field="ID"></IgrColumn>
</IgrColumnLayout>
<IgrColumnLayout>
    <IgrColumn rowStart="1" colStart="1" colEnd="3" field="CompanyName"></IgrColumn>
    <IgrColumn rowStart="2" colStart="1" colEnd="2" field="ContactName"></IgrColumn>
    <IgrColumn rowStart="2" colStart="2" colEnd="3" field="ContactTitle"></IgrColumn>
</IgrColumnLayout>
<IgrColumnLayout>
    <IgrColumn rowStart="1" colStart="1" colEnd="3" field="Country"></IgrColumn>
    <IgrColumn rowStart="1" colStart="3" colEnd="5" field="Region"></IgrColumn>
    <IgrColumn rowStart="1" colStart="5" colEnd="7" field="PostalCode"></IgrColumn>
    <IgrColumn rowStart="2" colStart="1" colEnd="4" field="City"></IgrColumn>
    <IgrColumn rowStart="2" colStart="4" colEnd="7" field="Address"></IgrColumn>
</IgrColumnLayout>
<IgrColumnLayout>
    <IgrColumn rowStart="1" colStart="1" field="Phone"></IgrColumn>
    <IgrColumn rowStart="2" colStart="1" field="Fax"></IgrColumn>
</IgrColumnLayout>
```

上記の設定の結果は、以下のスクリーンショットで確認できます。

<img src="../../../images/multi-row-layout-1.png" style="width: 100%"/>

> [!Note]
> `RowStart` と `ColStart` プロパティは、`ColumnLayout` 内の各 `Column` に設定する必要があります。`ColumnLayout` コンポーネントはレイアウトが正しいかどうかを検証しておらず、それについてエラーや警告をスローしません。開発者は、レイアウトの宣言が正しく、完全であることを確認し、誤った配置、オーバーラップ、ブラウザーでの不整合、レイアウトの崩れなどを回避する必要があります。

## 機能の統合

複数行レイアウトのレンダリング方法は全く異なるため、列ピン固定や列非表示など一部の列機能は `ColumnLayout` コンポーネントでのみ機能します。その他の機能ソートとグループ化などは、`Column` コンポーネントで同じように機能します。

- フィルタリング - Excel スタイルのフィルタリングのみがサポートされています。`FilterMode` を `FilterMode.quickFilter` に明示的に設定しても効果はありません。
- ページング - 表示行ではなくレコードで機能します。
- グループ化 - `HideGroupedColumns` オプションは、複数行レイアウトでは効果がありません。グループ化された列は常に表示されます。

以下の機能は現在**サポートされません**。

- 列の移動
- 複数列ヘッダー
- Excel へのエクスポート
- 集計

## キーボード ナビゲーション

複数行レイアウトを持つ `{ComponentName}` は、ビルトインのキーボード ナビゲーションを提供します。

### 水平ナビゲーション

* <kbd>←</kbd> または <kbd>→</kbd> は、現在行内の左右に隣接するセルに移動します。定義されている列レイアウトの影響を受けません。現在のセルが複数の行にまたがる場合は、他の隣接するセルへ移動した場合を除き、<kbd>←</kbd> と <kbd>→</kbd> は、同じ `rowStart` で左右の最初のセルに移動します。ナビゲーションはナビゲーション開始セルを格納し、可能であれば同じ `rowStart` を持つセルに移動します。
* <kbd>Ctrl</kbd> + <kbd>←</kbd> (<kbd>HOME</kbd>) または <kbd>Ctrl</kbd> + <kbd>→</kbd> (<kbd>END</kbd>) - 行の先頭または末尾に移動し、ナビゲーション開始セルに従ってセルを選択します。


### 垂直ナビゲーション

* <kbd>↑</kbd> または <kbd>↓</kbd> - 開始位置に対して上下のセルに移動し、行の影響は受けません。現在のセルが複数の列にまたがる場合は、次のアクティブ セルがナビゲーション開始セルに従って選択されます。
* <kbd>Ctrl</kbd> + <kbd>↑</kbd> または <kbd>Ctrl</kbd> + <kbd>↓</kbd> - 最初の行または最後の行の同じ列に移動してフォーカスを適用します。
* <kbd>Ctrl</kbd> + <kbd>Home</kbd> または <kbd>Ctrl</kbd> + <kbd>End</kbd> - 最初の行に移動して最初のセルに移動するか、最後のセルに移動します。最後のセルに移動してフォーカスを合わせます。


> [!Note]
> 複数の行または列にわたるセルを介したナビゲーションは、ナビゲーション開始セルに従って行われ、反対方向のキーを使用して開始セルに戻ることができます。グループ行を移動するときにも同じ方法が使用されます。

> [!Note]
> 選択と複数セル選択はレイアウトで使用できます。つまり、セルがアクティブになると、そのレイアウトが選択されます。ドラッグ選択などの複数選択のすべての機能も適用可能であり、セルごとではなくレイアウトごとに機能します。

### カスタム キーボード ナビゲーション

グリッドでは、特定のキーが押されたときのデフォルトのナビゲーション動作をカスタマイズできます。**隣りのセル**または**下のセルへ移動するような操作**は、キーボード ナビゲーション API を使用して簡単に処理できます。

- `GridKeydown` が公開されています。イベントは `IGridKeydownEventArgs` を発生します。このイベントは、キーボードで上記のキー組み合わせを介してのみ使用できます。他のすべてのキー操作では、`KeyDown` イベントを使用できます。
- `NavigateTo` - このメソッドを使用すると、提供された `RowIndex` と `VisibleColumnIndex` に基づいて位置に移動できます。

以下のデモでは、Excel と同じように、<kbd>Enter</kbd> と <kbd>Shift</kbd> + <kbd>Enter</kbd> キーを使って追加のナビゲーションを使用します。

### デモ


`sample="/{ComponentSample}/keyboard-mrl-navigation", height="605", alt="{Platform} {ComponentTitle} 複数行レイアウト ナビゲーションの例"`



<!-- Angular -->

### レイアウトの構成

列レイアウトを構成するときに、適切な `ColStart` および `ColEnd`、または `RowStart` および `RowEnd` を計算して設定するのが難しい場合があります。特に 1 つのレイアウトに多数の列がある場合などですが、適用時のプレビューを簡単に確認するためにコンフィギュレーターを使用できます。以下の操作が可能です。

* 設定全体の行数を設定します。すべてのレイアウトは同じ行数である必要があります。
* **[レイアウトの追加]** チップをクリックするか、レイアウトチップを左右にドラッグしてソートします。
* 各レイアウトに特定の設定を列数と幅に合わせて設定します。設定は現在選択されているレイアウトを参照します。
* レイアウト プレビューで列セルのサイズを変更して、より多くの列/行にまたがるようにしたり、`[削除]` ボタンを使用して列セルを消去したりできます。
* プレビューで列チップをドラッグして列を設定します。
* **[列の追加]** チップを使用して新しい列を追加/削除します。

* [NgForOf](https://angular.io/api/common/NgForOf) を使用してテンプレート内で使用および解析できる JSON 表現または igxGrid 内に配置できるように構成全体のテンプレート出力を取得します。

<!-- end: Angular -->

<!-- Angular -->

デフォルトでは、前のサンプルと同じ列を設定していますが、目的の設定に合わせて消去して設定することもできます。

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/multi-row-layout-configuration", height="500", alt="{Platform} {ComponentTitle} 複数行レイアウト構成の例"`



<!-- end: Angular -->

<!-- Angular -->

## スタイル設定

`{ComponentName}` を使用すると、[{ProductName} テーマ ライブラリ](../themes/styles.md)でスタイルを設定できます。`Theme` は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下は、グリッドの複数行レイアウト スタイルをカスタマイズする手順です。

### グローバル テーマのインポート

複数行レイアウト機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `Index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### カスタム テーマの定義

次に、`GridTheme` を拡張し、必要に応じて機能レイアウトをカスタマイズするために必要なパラメーターを受け取る新しいテーマを作成します。

```scss
$custom-theme: grid-theme(
    $cell-active-border-color: #ffcd0f,
    $cell-selected-background: #6f6f6f,
    $row-hover-background: #fde069,
    $row-selected-background: #8d8d8d,
    $header-background: #494949,
    $header-text-color: #fff,
    $sorted-header-icon-color: #ffcd0f,
    $sortable-header-icon-hover-color: #e9bd0d
);
```

### カスタム カラー パレットの定義

上記で説明したアプローチでは、色の値がハード コーディングされていました。または `Palette` および `Color` 関数を使用して、柔軟性を高めることができます。

`Palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。

 ```scss
$black-color: #494949;
$yellow-color: #FFCD0F;

$custom-palette: palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```

カスタム パレットが生成された後、`Color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。

```scss
$custom-theme: grid-theme(
    $cell-active-border-color: color($custom-palette, "secondary", 500),
    $cell-selected-background: color($custom-palette, "primary", 300),
    $row-hover-background: color($custom-palette, "secondary", 300),
    $row-selected-background: color($custom-palette, "primary", 100),
    $header-background: color($custom-palette, "primary", 500),
    $header-text-color:contrast-color($custom-palette, "primary", 500),
    $sorted-header-icon-color: color($custom-palette, "secondary", 500),
    $sortable-header-icon-hover-color: color($custom-palette, "secondary", 600)
);
```

### カスタム スキーマの定義

[**スキーマ**](../themes/sass/schemas.md)のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。

すべてのコンポーネントに提供される 2 つの事前定義されたスキーマのいずれかを拡張します。この場合、`$_light_grid` を使用します。

```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 300)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    sorted-header-icon-color: (igx-color:('secondary', 500)),
    sortable-header-icon-hover-color: (igx-color:('secondary', 600))
));
```

カスタム スキーマを適用するには、`Light` グローバルまたは `Dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。

```scss
$my-custom-schema: extend($light-schema, (
    igx-grid: $custom-grid-schema
));
 $custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

### カスタム テーマの適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
@include grid($custom-theme);
```

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、{Platform} の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 > [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 > [!Note]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### デモ

`sample="/{ComponentSample}/multi-row-layout-styling", height="755", alt="{Platform} {ComponentTitle} 複数行レイアウトのスタイル設定の例"`



> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```

```tsx
<IgrGrid className="grid"></IgrGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #fde069;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
}
```
### デモ

`sample="/{ComponentSample}/multi-row-layout-styling", height="755", alt="{Platform} {ComponentTitle} 複数列ヘッダーのスタイル サンプル"`


<!-- end: WebComponents, Blazor, React -->

## API リファレンス

* `{ComponentName}`
* `ColumnLayout`
* `Column`

## その他のリソース

<!-- ComponentStart:  Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
