---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 분산 마커 시리즈


이 항목에서는 `XamDataChart` 제어에서 다양한 유형의 분산 마커 시리즈에 대해 설명합니다. 분산 마커 시리즈는 데카르트(x, y) 좌표계를 사용하여 각 데이터 항목의 마커를 플롯하는 시리즈 그룹입니다.



## 데모


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-series"  
           github-src="charts/data-chart/type-scatter-series">
</code-view>

<div class="divider--half"></div>

## 분산 마커 시리즈의 유형
다음 표에는 모든 유형의 분산 마커 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름  | 설명   |
|--------------|---------------|
| `ScatterSeries` | `XMemberPath` 와 `YMemberPath` 속성에 매핑 된 데이터 포인트의 표식을 표시합니다. |
| `ScatterLineSeries` | 마커 외에도 각 데이터 포인트 사이에 직선을 표시합니다. |
| `ScatterSplineSeries` | 마커 외에도 각 데이터 포인트 사이에 보간 된 부드러운 선을 표시합니다. |

## 필요한 축

`XamDataChart` 제어는 다양한 유형의 축을 제공하지만 분산 마커 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형           | YAxis 유형     | XAxis 유형     |
|-----------------------|----------------|----------------|
| `ScatterSeries`       | `NumericYAxis` | `NumericXAxis` |
| `ScatterLineSeries`   | `NumericYAxis` | `NumericXAxis` |
| `ScatterSplineSeries` | `NumericYAxis` | `NumericXAxis` |

## 필요한 데이터

분산 마커 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 `XMemberPath` 및 `YMemberPath` 속성에 매핑되는 2개의 숫자 데이터 열이 있어야 합니다

[SampleScatterStats](data-chart-data-sources-stats.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleScatterStats.getCountries() }
```

## 필요한 모듈

분산 마커 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterSeries } from 'igniteui-angular-charts';
import { IgxScatterLineSeries } from 'igniteui-angular-charts';
import { IgxScatterSplineSeries } from 'igniteui-angular-charts';
import { MarkerType } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterSeries } from 'igniteui-react-charts';
import { IgrScatterLineSeries } from 'igniteui-react-charts';
import { IgrScatterSplineSeries } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcScatterSeriesModule } from 'igniteui-webcomponents-charts';
import { MarkerType } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterSeriesModule
);
```

## 코드 예제
이 코드는 `ScatterSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>
    <igx-scatter-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal">
    </igx-scatter-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" isLogarithmic="true"/>
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    {/* series: */}
    <IgrScatterSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="Population"
     yMemberPath="GdpTotal" />
 </IgrDataChart>
```

```tsx
const series1 = new IgrScatterSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "Population";
series1.yMemberPath = "GdpTotal";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis id="xAxis" is-logarithmic="true"></igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis" is-logarithmic="true"></igc-numeric-y-axis>
    <igc-scatter-series
        id="series1"
        x-member-path="population"
        y-member-path="gdpTotal">
    </igc-scatter-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

위의 코드를 사용하면 `ScatterSeries`를 대체하여 `ScatterLineSeries` 또는 `ScatterSplineSeries`를 생성할 수도 있습니다.

## 시리즈 외관

[Markers](data-chart-series-markers.md) 속성을 사용하여 마커 외관을 사용자 지정할 수 있으며, 마커 사이의 선 비주얼의 `Brush` 및 `Thickness`를 변경할 수 있습니다. 아래 코드는 이러한 속성을 사용하는 방법을 보여 줍니다.

```html
<igx-scatter-series
 name="series1"
 brush="Blue"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-series>
```

```tsx
<IgrScatterLineSeries
 name="series1"
 brush="Blue"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness={2}
/>
```

```html
<igc-scatter-series
 id="series1"
 brush="Purple"
 marker-type="Square"
 marker-brush="White"
 marker-outline="Blue"
 thickness="2">
</igc-scatter-series>
```

```tsx
const series1 = new IgxScatterLineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Blue";
series1.thickness = 2;
```

```tsx
const series1 = new IgrScatterLineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Blue";
series1.thickness = 2;
```

```ts
const series1 = new IgcScatterSeriesComponent();
series.id = "series1"
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Purple";
series1.thickness = 2;
```

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 마커](data-chart-series-markers.md)
- [시리즈 도구 설명](data-chart-series-tooltips.md)
- [시리즈 추세선](data-chart-series-trendlines.md)
- [시리즈 유형](data-chart-series-types.md)
