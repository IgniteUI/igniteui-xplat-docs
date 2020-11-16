---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Legends | Infragistics
_description: Infragistics' $PlatformShort$ charts control's legend displays contextual information related to data plotted. Check out our $ProductName$ graph legends!
_keywords: $PlatformShort$ charts, data chart, legend, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'Infragistics.Controls.Charts.Legend']
---
# $PlatformShort$ Legends

Legends help end-users identify visuals of data chart series with contextual information related to data plotted in the $PlatformShort$ data chart component. Most data charts should have at least one legend in order to make it easier to understand data displayed in the plot area, however, it is not a requirement and the data chart can render without any legends, as it does by default.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-legends-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-legends' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-legends-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/legends"></sample-button>

</div>

<div class="divider--half"></div>

## Legend Overview

By default, the $PlatformShort$ data chart component does not display legends for any series in the data chart. If you want to show a common legend for multiple series, you need to add a legend object to your application and then set it to the Legend property of the data chart.

In addition, you must set the `Title` property for each series object or the legend will use a default series title.

The following code snippet shows how to use a legend in the $PlatformShort$ data chart component:

```razor
<div class="igContainer">
    <div class="igOptions-horizontal">
        <span class="igLegend-title">Legend: </span>
        <div class="igLegend">
            <Legend @ref="LegendRef" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>
<div class="igComponent">
    <DataChart Height="500px" Legend="@LegendRef" Width="700px" ChartTitle>
        <CategoryXAxis Name="xAxis" Label="Country" DataSource="@data"/>
        <NumericYAxis Name="yAxis" MinimumValue="0" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Coal"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Hydro"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Nuclear"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Gas"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Oil"
            DataSource="@data" />
    </DataChart>
</div>
```

```html
<div>
  <igx-legend #legend></igx-legend>
</div>
<div>
  <igx-data-chart chartTitle="Energy Use Per Country" subtitle="Results over a two year period" height="600px" width="100%"
    [dataSource]="data" [legend]="legend">

    <igx-category-x-axis #xAxis name="xAxis" label="Country"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis name="yAxis" minimumValue=0></igx-numeric-y-axis>

    <igx-column-series name="series1" title="Coal" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Coal"></igx-column-series>
    <igx-column-series name="series2" title="Hydro" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Hydro"></igx-column-series>
    <igx-column-series name="series3" title="Nuclear" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Nuclear"></igx-column-series>
    <igx-column-series name="series4" title="Gas" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Gas"></igx-column-series>
    <igx-column-series name="series5" title="Oil" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Oil"></igx-column-series>
  </igx-data-chart>
</div>
```

```ts
@ViewChild("legend")
public legend : IgxLegendComponent;
```

```tsx
public render() {
    return (
        <div>
            <div>
                <IgrLegend ref={this.onLegendRef}
                    orientation="Horizontal" />
            </div>
            <IgrDataChart dataSource={this.data} ref={this.onChartRef} width="100%" height="400px">
                <IgrCategoryXAxis name="xAxis" label="Country" />
                <IgrNumericYAxis name="yAxis" minimumValue={0}  />

                <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Coal" />
                <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Hydro" />
                <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Nuclear" />
                <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Gas" />
                <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Oil" />
            </IgrDataChart>
        </div>
    );
}
```

```ts
public onChartRef(chart: IgrDataChart) {
    this.chart = chart;
    if (this.legend) {
        this.chart.legend = this.legend;
    }
}

public onLegendRef(legend: IgrLegend) {
    this.legend = legend;
    if (this.chart) {
        this.chart.legend = this.legend;
    }
}
```

```html
<div>
  <igc-legend id="legend" orientation="horizontal">
  </igc-legend>
</div>
<div>
  <igc-data-chart id="chart" height="500px" width="700px" >

    <igc-category-x-axis id="xAxis" label="Country"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis" min-value="0" abbreviate-large-numbers="true"></igc-numeric-y-axis>

    <igc-column-series id="series1" title=" Coal" value-member-path="Coal"></igc-column-series>
    <igc-column-series id="series2" title=" Hydro" value-member-path="Hydro"></igc-column-series>
    <igc-column-series id="series3" title=" Nuclear" value-member-path="Nuclear"></igc-column-series>
    <igc-column-series id="series4" title=" Gas" value-member-path="Gas"></igc-column-series>
    <igc-column-series id="series5" title=" Oil" value-member-path="Oil"></igc-column-series>
  </igc-data-chart>
</div>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let legend = (document.getElementById("legend") as IgcLegendComponent);
chart.legend = legend;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let series2 = (document.getElementById("series2") as IgcColumnSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;

let series3 = (document.getElementById("series3") as IgcColumnSeriesComponent);
series3.xAxis = xAxis;
series3.yAxis = yAxis;

let series4 = (document.getElementById("series4") as IgcColumnSeriesComponent);
series4.xAxis = xAxis;
series4.yAxis = yAxis;

let series5 = (document.getElementById("series5") as IgcColumnSeriesComponent);
series5.xAxis = xAxis;
series5.yAxis = yAxis;
```