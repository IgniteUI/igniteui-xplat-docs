---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 축 공유 및 다중 행

 `XamDataChart` 제어의 동일한 플롯 영역에서 여러 축을 공유하고 추가할 수 있습니다. 모든 축에 대해 차트 플롯 영역과 관련하여 위치를 지정할 수 있습니다. 광범위 값(예: 주가 및 주식 거래량)을 가진 많은 데이터 소스를 플롯하는 경우, 여러 축을 사용하는 것이 일반적인 시나리오입니다.

## 데모

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-sharing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
<sample-button src="charts/data-chart/axis-sharing"></sample-button>

</div>

<div class="divider--half"></div>


## 코드 예제
이 코드는 2개의 `NumericYAxis` 및 1개의 `CategoryXAxis`가 2개의 시리즈 사이에서 공유되는 데이터 차트를 생성하는 방법을 보여 줍니다.

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

```tsx
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

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [시리즈 유형](data-chart-series-types.md)



