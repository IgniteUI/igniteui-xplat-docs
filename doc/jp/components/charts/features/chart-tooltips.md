---
title: $PlatformShort$ チャート ツールチップ | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート ツールチップ
_keywords: $PlatformShort$ Charts, Tooltips, Infragistics, $PlatformShort$ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['XamCategoryChart', 'ToolTipType']
_language: ja
---

# $PlatformShort$ チャート ツールチップ

$PlatformShort$ チャートでは、ツールチップはバインドされたデータに関する詳細を提供し、エンドユーザーがデータ ポイントにカーソルを合わせるとポップアップで表示されます。ツールチップは、 `XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` コンポーネントでサポートされています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="$PlatformShort$ ツールチップ タイプの例"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

## ツールチップ タイプ

$ProductName$ カテゴリ チャートは、次の方法で `ToolTipType` プロパティを設定することにより、ツールチップを表示するように構成できます。

1. `Default` ツールチップは、ポインタがその上に位置されると、単一の項目のツールチップを表示します。
2. `Item` ツールチップは、ポインタが位置されているカテゴリの各データ項目のツールチップを表示します。
3. `Category` ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。
4. `None` はツールチップが非表示になります。

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    ToolTipType="ToolTipType.Category"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    toolTipType="Category" />
```

```html
<igc-category-chart
    id="chart"
    tool-tip-type="Category">
</igc-category-chart>
```

<!-- TODO uncomment below section when bug# 272693 is fixed

# $PlatformShort$ Tooltip Templates

The $PlatformShort$ category chart provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, tooltip templates can be configured to customize the tooltip content and look and feel.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template"
           alt="$PlatformShort$ Tooltip Templates Example"
           github-src="charts/category-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

The tooltip content is customized by creating a template for the tooltip as demonstrated in the following code.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
   <div>
      <span> {{item.Country}} energy use: <br/></span>
      <span> Coal :{{item.Coal | number}}<br/></span>
      <span> Oil :{{item.Oil | number}}<br/></span>
      <span> Gas :{{item.Gas | number}}<br/></span>
      <span> Nuclear :{{item.Nuclear | number}}<br/></span>
      <span> Hydro :{{item.Hydro | number}}<br/></span>
    </div>
</ng-template>

<div class="chart">
    <igx-category-chart height="100%" width="100%"
        [dataSource]="data" chartTitle="Energy Production"
        subtitle="by Country"
        [tooltipTemplate]="valueTooltip"
        [chartType]="chartType">
    </igx-category-chart>
</div>
```

```tsx
 <IgrCategoryChart height="100%" width="100%"
        dataSource={this.state.data}
        chartTitle="Energy Production"
        subtitle="by Country"
        tooltipTemplate={this.valueTooltip}
        chartType={this.state.chartType} />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="700px"
    chart-title="Energy Production"
    subtitle="by Country"
    chart-type="Column">
  </igc-category-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcCategoryChartComponent);
chart.dataSource = categoryData;

let template: TemplateFunction;
chart.tooltipTemplate = template;
```

TODO uncomment above section when bug# 272693 is fixed
-->

## API メンバー
- `ToolTipType`
- `XamCategoryChart`
