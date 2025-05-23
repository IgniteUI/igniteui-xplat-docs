---
title: {Platform} データ グリッド | 列サイズ変更 | インフラジスティックス
_description: インフラジスティックスの {ProductName} グリッド コンポーネントは列サイズを変更する機能をサポートしており、各列の幅に関して列の表示方法を柔軟に選択できます。詳細については、{ProductName} テーブル サンプルを参照してください。
_keywords: {Platform} Table, Data Grid, column resizing, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 列サイズ変更, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.ColumnResizingMode", "Infragistics.Controls.Grid.Implementation.ColumnResizingAnimationMode"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridColumnResizing}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッドの列サイズ変更

{ProductName} Data Grid は列サイズを変更する機能をサポートしており、各列の幅に関して列の表示方法を柔軟に選択できます。

## {Platform} グリッドの列サイズ変更の例


`sample="/grids/data-grid/column-resizing", height="600", alt="{Platform} グリッドの列サイズ変更の例"`



<div class="divider--half"></div>

{ProductName} データグリッド内の列サイズ変更はデフォルトでオンになっており、グリッドの `ColumnResizingMode` プロパティを使用して制御できます。このプロパティには 3 つのオプションがあります。各オプションを以下に説明します。

- `Deferred`: デフォルト オプションです。サイズを変更すると、サイズが変更された後に列が大きくまたは小さくなる量を示すセパレーターが表示されます。
- `Immediate`: サイズを変更する際のセパレーターはありません。列の端をドラッグすると、列の幅はポインターの動きを追ってそれに応じてサイズを変更します。
- `None`: 列サイズを変更することはできません。

列サイズ変更を `Deferred` に設定すると、グリッドの `ColumnResizingSeparatorBackground` プロパティと `ColumnResizingSeparatorWidth` プロパティを使用して、表示するセパレーターの色と幅をそれぞれ変更できます。

サイズ変更モードが `Deferred`  のみに設定されている場合、列のサイズを変更するときに列をアニメーション化することもできます。これを実行するには、`ColumnResizingAnimationMode` プロパティ `Interpolate` にを設定します。

グリッドの各列は、個別にサイズ変更できるかどうかを決定できます。特定の列でサイズ変更を有効または無効にする場合、その列の IsResizingEnabled プロパティを設定できます。</b>

スター幅の列のサイズを変更すると、その列が固定列に変更されます。

## コード スニペット

以下のコード スニペットは、{Platform} データ グリッドで列のサイズ変更を実装する方法を示します。この場合、<b>Street</b> 列はサイズ変更できません。</b>この場合、列のサイズ変更セパレーターの幅は 5 ピクセルになり、サイズ変更可能な列もサイズ変更時にアニメーション化されます。

<!--React-->
```ts
import { ColumnResizingMode } from 'igniteui-react-data-grids';
import { ColumnResizingAnimationMode } from 'igniteui-react-data-grids';
```

<!--WebComponents-->
```ts
import { ColumnResizingMode } from 'igniteui-webcomponents-data-grids';
import { ColumnResizingAnimationMode } from 'igniteui-webcomponents-data-grids';
```

```tsx
<IgrDataGrid ref={this.onGridRef}
    height="100%"
    width="100%"
    columnResizingAnimationMode={ColumnResizingAnimationMode.Interpolate}
    columnResizingMode={ColumnResizingMode.Deferred}
    columnResizingSeparatorWidth={5}
    autoGenerateColumns={false}
    dataSource={this.data} >
    <IgrTextColumn field="FirstName" headerText="First Name" />
    <IgrTextColumn field="LastName" headerText="Last Name" />
    <IgrTextColumn field="Street" headerText="Street" isResizingEnabled={false} />
    <IgrTextColumn field="City" headerText="City" />
</IgrDataGrid>
```

```html
<igc-data-grid id="grid"
    auto-generate-columns="false"
    height="500px"
    width="500px"
    column-resizing-mode="Deferred"
    column-resizing-animation-mode="Interpolate"
    column-moving-separator-width="5" >
    <igc-text-column field="FirstName"></igc-text-column>
    <igc-text-column field="LastName"></igc-text-column>
    <igc-text-column field="Street" is-resizing-enabled=false></igc-text-column>
    <igc-text-column field="City"></igc-text-column>
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    AutoGenerateColumns="false"
    DataSource="DataSource"
    ColumnResizingMode="ColumnResizingMode.Deferred"
    ColumnResizingAnimationMode="ColumnResizingAnimationMode.Interpolate"
    ColumnResizingSeparatorWidth="5">
    <IgbTextColumn Field="FirstName" />
    <IgbTextColumn Field="LastName" />
    <IgbTextColumn Field="Street" IsResizingEnabled="false" />
    <IgbTextColumn Field="City" />
</IgbDataGrid>
```

## API リファレンス

 - `ColumnResizingAnimationMode`
 - `ColumnResizingMode`
 - `ColumnResizingSeparatorBackground`
 - `ColumnResizingSeparatorWidth`
 - `Deferred`
 - `Interpolate`