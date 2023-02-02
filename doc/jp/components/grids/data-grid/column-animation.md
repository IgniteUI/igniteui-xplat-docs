---
title: {Platform} データ グリッド | 列アニメーション | インフラジスティックス
_description: Infragistics {ProductName} データ テーブルとグリッドを使用して、列を移動または非表示にするときに、イベントで列アニメーションを表示する方法を説明します。{ProductName} テーブル チュートリアルを是非お試しください!
_keywords: {Platform} Table, Data Grid, column animations, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 列アニメーション, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド列アニメーション

{ProductName} Data Table / Data Grid は、列の非表示や列の移動などのイベント時に列のアニメーションをサポートします。{Platform} データ グリッドで Column Animation が設定されている場合、対応するアニメーションはその列のすべてのセルに対して発生します。

## {Platform} グリッド列アニメーションの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-animation"
           alt="{Platform} グリッド列アニメーションの例"
           github-src="grids/data-grid/column-animation">
</code-view>

<div class="divider--half"></div>

## アニメーション プロパティ

各列のアニメーションプロパティは以下のとおりです。

- `ColumnAddingAnimationMode`: 列を追加すると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。スライドやフェード インだけでなく、フェード インさせるオプションもあります。
- `ColumnExchangingAnimationMode`: 列を交換する場合、交換した列ヘッダーとそのセルを左、右、上、または下にスライドさせることができます。スライドやフェードだけでなく、フェードさせるオプションもあります。
- `ColumnHidingAnimationMode`: 列を非表示にすると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。スライドやフェード アウトだけでなく、フェード アウトさせるオプションもあります。
- `ColumnMovingAnimationMode`: 列が移動すると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。
- `ColumnPropertyUpdatingAnimationMode`: 列のプロパティが変更されると、その変更を補完または深く補完してそのプロパティの変更をアニメーションするオプションがあります。
- `ColumnShowingAnimationMode`: 列を追加すると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。スライドやフェード インだけでなく、フェード インさせるオプションもあります。

## コード スニペット

このトピックで説明されている各列アニメーションの実装を次に示します。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    columnAddingAnimationMode="SlideToLeft"
    columnExchangingAnimationMode="SlideToRight"
    columnHidingAnimationMode="SlideToTopAndFadeOut"
    columnMovingAnimationMode="SlideOver"
    columnPropertyUpdatingAnimationMode="Interpolate"
    columnShowingAnimationMode="SlideFromBottomAndFadeIn" />
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      column-addingAnimation-mode="SlideToLeft"
      column-exchanging-animation-mode="SlideToRight"
      column-hiding-animation-mode="SlideToTopAndFadeOut"
      column-moving-animation-mode="SlideOver"
      column-property-updating-animation-mode="Interpolate"
      column-showing-animation-mode="SlideFromBottomAndFadeIn">
</igc-data-grid>
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    ColumnAddingAnimationMode="ColumnShowingAnimationMode.SlideFromLeft"
    ColumnExchangingAnimationMode="ColumnExchangingAnimationMode.SlideToRight"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToTopAndFadeOut"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnPropertyUpdatingAnimationMode="ColumnPropertyUpdatingAnimationMode.Interpolate"
    ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromBottomAndFadeIn" />
```

## API リファレンス

 - `ColumnAddingAnimationMode`
 - `ColumnExchangingAnimationMode`
 - `ColumnHidingAnimationMode`
 - `ColumnMovingAnimationMode`
 - `ColumnPropertyUpdatingAnimation`