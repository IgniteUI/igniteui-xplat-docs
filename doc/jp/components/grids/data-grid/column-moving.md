---
title: {Platform} データ グリッド | 列移動 | インフラジスティックス
_description: インフラジスティックスの {ProductName} データ グリッドは列の移動をサポートし、列の表示方法を柔軟に選択できます。詳細については、{ProductName} テーブル サンプルを参照してください。
_keywords: {Platform} Table, Data Grid, column moving, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 列移動, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.ColumnMovingMode', 'Infragistics.Controls.Grid.Implementation.ColumnMovingAnimationMode']
namespace: Infragistics.Controls
_language: ja
---

# {Platform} グリッド列移動の概要

{ProductName} Data Grid は列を移動する機能をサポートしているので、表示されている列の順序に関して列の表示方法を柔軟に選択できます。

## {Platform} グリッド列移動の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-moving"
           alt="{Platform} グリッド列移動の例"
           github-src="grids/data-grid/column-moving">
</code-view>

<div class="divider--half"></div>

{ProductName} Data Grid の列移動はデフォルトで有効になっているため、グリッドの `ColumnMovingMode` プロパティを設定して制御できます。このプロパティには、Deferred または None の 2 つのオプションがあります。`Deferred` は列の移動を許可しますが、`None` はグリッド全体の列の移動を無効にします。

列の移動が `Deferred` に設定されていると、列を移動している間、セパレーターが表示されます。列を移動しているときにマウス ポインタを離すと、移動した列は区切り記号の右側にある列の位置に移動します。このセパレータは、それぞれ `ColumnMovingSeparatorWidth` プロパティと `ColumnMovingSeparatorBackground` プロパティを使用して幅と色をカスタマイズすることもできます。

必要に応じて、列の動きをアニメートすることもできます。これは、グリッドの `ColumnMovingAnimationMode` プロパティを設定することによって実行できます。アニメーションはデフォルトで編集できません。

## コード スニペット

以下は、遅延列の移動、アニメーションの有効化、5 ピクセル幅のセパレーターを使用して {ProductName} Data Grid に列移動を実装する方法を示しています。

<!--React-->
```ts
import { ColumnMovingAnimationMode } from 'igniteui-react-grids';
import { ColumnMovingMode } from 'igniteui-react-grids';
```

<!--WebComponents-->
```ts
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-grids';
import { ColumnMovingMode } from 'igniteui-webcomponents-grids';
```

```tsx
<IgrDataGrid
    ref={this.onGridRef}
    height="500px"
    width="100%"
    dataSource={this.data}
    columnMovingMode={ColumnMovingMode.Deferred}
    columnMovingAnimationMode={ColumnMovingAnimationMode.SlideOver}
    columnMovingSeparatorWidth={5} />
```

```html
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    column-moving-mode="Deferred"
    column-moving-animation-mode="SlideOver"
    column-moving-separator-width="5">
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    ColumnMovingMode="ColumnMovingMode.Deferred"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnMovingSeparatorWidth="5" />
```

## API リファレンス

 - `ColumnMovingAnimationMode`
 - `ColumnMovingMode`
 - `ColumnMovingSeparatorBackground`
 - `ColumnMovingSeparatorWidth`
 - `Deferred`