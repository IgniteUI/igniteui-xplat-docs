---
title: {Platform} データ グリッド | 列スパークライン | インフラジスティックス
_description: {ProductName} Data Table / Data Grid は、列スパークラインなどの他のコンポーネントを埋め込む方法を提供するテンプレート列をサポートします。
_keywords: {Platform} Table, Data Grid, column sparkline, {ProductName}, data binding, Infragistics, {Platform} テーブル, データ グリッド, 列スパークライン, データ バインディング, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.CellInfo', 'Infragistics.Controls.Grid.Implementation.TemplateCellInfo', 'Sparkline']
namespace: Infragistics.Controls
_language: ja
---

# {Platform} 列スパークライン

{ProductName} Data Table / Data Grid は、{ProductName} スパークライン コンポーネントなど、他のコンポーネントを埋め込むことができるテンプレート列をサポートします。`Grid` コンポーネントにサポートされる他の列タイプについては、[列タイプ](data-grid-column-types.md) トピックを参照してください。

## {Platform} 列スパークラインの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-grid"
           alt="{Platform} 列スパークラインの例"
           github-src="charts/sparkline/grid">
</code-view>

<div class="divider--half"></div>

## コード スニペット

以下のコード例は、`Grid` コンポーネントの `Ig$TemplateColumn` に `XamSparkline` を埋め込む方法を示します。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    rowHeight="70"
    autoGenerateColumns="false"
    dataSource={this.data}>
    {/* ... */}
    <IgrTemplateColumn field="OrderHistory"
    headerText="Order History"
    horizontalAlignment="center" width="*>120"
    template={this.getOrderHistoryTemplate} />
    {/* ... */}
</IgrDataGrid>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';

public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
    const info = props.dataContext as IgrTemplateCellInfo;
    return (
        <div className="sparklineInGrid">
           <IgrSparkline
               height="60px" width="100%"
               displayType="Line"
               dataSource={info.rowItem.OrderHistory}
               valueMemberPath="Sold"
               labelMemberPath="Week"
               lineThickness={2}
               brush="rgb(21, 190, 6)"
               negativeBrush="rgb(211, 17, 3)" />
        </div>
    );
}
```

```html
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    row-height="70"
    auto-generate-columns="false">
    <!-- ... -->
    <igc-template-column id="historyColumn"
        field="OrderHistory" header-text="Order History" horizontal-alignment="center" width="*>150"></igc-template-column>
    <!-- ... -->
</igc-data-grid>
```

```ts
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateColumnComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellInfo } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellUpdatingEventArgs } from 'igniteui-webcomponents-grids';
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';

// registering Grid and Sparkline chart's modules:
ModuleManager.register(IgcDataGridModule);
ModuleManager.register(IgcSparklineModule);

constructor() {
this.grid = document.getElementById("grid") as IgcDataGridComponent;
this.grid.dataSource = Products.getData();

this.onUpdatingHistoryColumn = this.onUpdatingHistoryColumn.bind(this);

const historyColumn = document.getElementById("historyColumn") as IgcTemplateColumnComponent;
historyColumn.cellUpdating = this.onUpdatingHistoryColumn;
}

public onUpdatingHistoryColumn(s: IgcTemplateColumnComponent, e: IgcTemplateCellUpdatingEventArgs) {
    const content = e.content as HTMLDivElement;
    let chart: IgcSparklineComponent | null = null;
    let info = e.cellInfo as IgcTemplateCellInfo;

    if (content.childElementCount === 0) {
        chart = new IgcSparklineComponent();
        chart.valueMemberPath = "Sold";
        chart.labelMemberPath = "Week";
        chart.displayType = SparklineDisplayType.Line;
        chart.lineThickness = 2;
        chart.brush = "rgb(21, 190, 6)";
        chart.negativeBrush = "rgb(211, 17, 3)";
        chart.width = "100%";
        chart.height = "100%";

        content.style.width = "calc(100% - 10px)";
        content.style.height = "calc(100% - 10px)";
        content.style.padding = "5px";
        content.style.margin = "0px";
        content.style.display = "inline-grid";
        content.appendChild(chart);
    }
    else {
        chart = content.children[0] as IgcSparklineComponent;
    }

    if (chart) {
        chart.dataSource = info.rowItem.OrderHistory;
    }
}

```

```razor
<IgbDataGrid Height="100%" Width="100%"
          RowHeight="90"
          AutoGenerateColumns="false"
          DataSource="DataSource">
    <IgbTemplateColumn Field="OrderHistory" Width="@("*>180")" HeaderText="Order History" >
        <Template>
            <RenderFragment>
                 <div style="width: 100%; height: 70px; background: transparent">
                     <Sparkline Height="100%" Width="100%"
                                DataSource="@((context.RowItem as Product).OrderHistory)"
                                DisplayType="SparklineDisplayType.Line"
                                ValueMemberPath="Sold"
                                LabelMemberPath="Week"
                                Brush="rgb(21, 190, 6)">
                     </Sparkline>
                 </div>
            </RenderFragment>
        </Template>
    </IgbTemplateColumn>
</IgbDataGrid>
```

## API メンバー

 - `Grid`
 - `XamSparkline`