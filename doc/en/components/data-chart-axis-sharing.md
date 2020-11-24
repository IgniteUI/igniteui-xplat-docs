---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Axis Sharing | Infragistics
_description: Infragistics' $PlatformShort$ charts control allows for multiple axes to be displayed in the same plot area. Create a $ProductName$ graph with multiple axis!
_keywords: $PlatformShort$ charts, data chart, axis sharing, $ProductName$, Infragistics, multiple axes
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
---
# $PlatformShort$ Axis Sharing and Multiple Axes

 You can share and add multiple axes in the same plot area of the $PlatformShort$ data chart component. For all axes, you can specify locations in relationship to chart plot area. It a common scenario to use multiple axes when you want to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

## $PlatformShort$ Axis Sharing and Multiple Axes Example

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-sharing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/axis-sharing"></sample-button>

</div>

<div class="divider--half"></div>


## Code Example
This code demonstrates how to create $ProductName$ data chart with two `NumericYAxis` and one `CategoryXAxis` that will be shared between two series.

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="sharedXAxis"
        Label="Date"/>
    <NumericYAxis Name="rightYAxis>
        LabelLocation="AxisLabelsLocation.OutsideRight" />
    <NumericYAxis Name="leftYAxis>
        LabelLocation="AxisLabelsLocation.OutsideLeft" />
    <FinancialPriceSeries Name=" series1"
        XAxisName="sharedXAxis"
        YAxisName="rightYAxis"
        DisplayType="PriceDisplayType.Candlestick"
        LowMemberPath="Low"
        HighMemberPath="High"
        OpenMemberPath="Open"
        CloseMemberPath="Close"
        VolumeMemberPath="Volume" />
    <MoneyFlowIndexIndicator Name=" series1"
        XAxisName="sharedXAxis"
        YAxisName="leftYAxis"
        DisplayType="IndicatorDisplayType.Column"
        LowMemberPath="Low"
        HighMemberPath="High"
        OpenMemberPath="Open"
        CloseMemberPath="Close"
        VolumeMemberPath="Volume" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="sharedXAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="rightYAxis" labelLocation="OutsideRight"></igx-numeric-y-axis>
    <igx-numeric-y-axis  name="leftYAxis" labelLocation="OutsideLeft"></igx-numeric-y-axis>

    <igx-financial-price-series
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-money-flow-index-indicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-money-flow-index-indicator>

 </igx-data-chart>
```

```tsx
 <IgrDataChart >

    {/* axes */}
    <IgrCategoryXAxis name="sharedXAxis" label="Date"/>
    <IgrNumericYAxis  name="rightYAxis" labelLocation="OutsideRight" />
    <IgrNumericYAxis  name="leftYAxis" labelLocation="OutsideLeft" />

    {/* series */}
    <IgrFinancialPriceSeries
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

    <IgrMoneyFlowIndexIndicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const rightYAxis = new IgrNumericYAxis({ name: "rightYAxis" });
rightYAxis.labelLocation = "OutsideRight";
const leftYAxis = new IgrNumericYAxis({ name: "leftYAxis" });
leftYAxis.labelLocation = "OutsideLeft";
const sharedXAxis = new IgrCategoryXAxis({ name: "sharedXAxis" });
sharedXAxis.label = "Date";

const series1 = new IgrFinancialPriceSeries({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
series1.xAxisName = "sharedXAxis";
series1.yAxisName = "rightYAxis";

const series2 = new IgrMoneyFlowIndexIndicator({ name: "series2" });
series2.lowMemberPath = "Low";
series2.highMemberPath = "High";
series2.openMemberPath = "Open";
series2.closeMemberPath = "High";
series2.volumeMemberPath = "Volume";
series2.xAxisName = "sharedXAxis";
series2.yAxisName = "leftYAxis";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleFinancialData.create();
this.chart.axes.add(leftYAxis);
this.chart.axes.add(rightYAxis);
this.chart.axes.add(sharedXAxis);
this.chart.series.add(series1);
this.chart.series.add(series2);
```

```html
<igc-data-chart id="chart"
    width="700px"
    height="500px">

    <igc-category-x-axis id="xAxis" label="Date">
    </igc-category-x-axis>
    <igc-numeric-y-axis id="yAxisLeft" label-location="OutsideLeft"
      minimum-value="0" maximum-value="300" major-stroke-thickness="0">
    </igc-numeric-y-axis>
    <igc-numeric-y-axis id="yAxisRight" label-location="OutsideRight"
      minimum-value="400" maximum-value="700">
    </igc-numeric-y-axis>

    <igc-financial-price-series id="series1"
      display-type="Candlestick"
      high-member-path="High"
      low-member-path="Low"
      close-member-path="Close"
      open-member-path="Open"
      volume-member-path="Volume">
    </igc-financial-price-series>

    <igc-money-flow-index-indicator id="series2"
      display-type="Area"
      high-member-path="High"
      low-member-path="Low"
      close-member-path="Close"
      open-member-path="Open"
      volume-member-path="Volume">
    </igc-money-flow-index-indicator>
  </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxisLeft = (document.getElementById("yAxisLeft") as IgcNumericYAxisComponent);
let yAxisRight = (document.getElementById("yAxisRight") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcFinancialPriceSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxisRight;

let series2 = (document.getElementById("series2") as IgcMoneyFlowIndexIndicatorComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxisLeft;
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Series Types](data-chart-series-types.md)



