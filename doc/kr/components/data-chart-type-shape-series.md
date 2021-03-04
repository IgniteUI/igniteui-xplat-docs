---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: The $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 분산 모양 시리즈

이 항목에서는 `XamDataChart` 제어에서 다양한 유형의 모양 시리즈에 대해 설명합니다. 분산 모양 시리즈는 모양 배열(배열 또는 X/Y 좌표 배열)을 가져와서 데카르트(x, y) 좌표계에서 폴리곤(`ScatterPolygonSeries`)  또는 폴리라인(`ScatterPolylineSeries`)의 컬렉션으로 렌더링하는 차트 시리즈 그룹입니다.

분산 모양 시리즈는 과학 데이터의 강조 표시 영역으로 자주 사용되거나 다이어그램, 청사진 또는 건물의 평면도를 플롯하는 데 사용할 수 있습니다.

## 데모


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-shape-series" >
</code-view>


<div class="divider--half"></div>

## 모양 시리즈의 유형
다음 표에는 모든 유형의 모양 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름  | 설명   |
|--------------|---------------|
| `ScatterPolygonSeries` | `ShapeMemberPath` 속성에 매핑된 각 도형의 폴리곤을 표시합니다. 국경과 같은 도형을 렌더링할 때 유용합니다. |
| `ScatterPolylineSeries` | `ShapeMemberPath` 속성에 매핑된 각 도형의 폴리라인을 표시합니다. 네트워크 그래프와 같이 단선을 렌더링할 때 유용합니다.  |


## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하지만 분산 모양 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형             | YAxis 유형     | XAxis 유형     |
|-------------------------|----------------|----------------|
| `ScatterPolygonSeries`  | `NumericYAxis` | `NumericXAxis` |
| `ScatterPolylineSeries` | `NumericYAxis` | `NumericXAxis` |

## 필요한 데이터

분산 모양 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 분산 모양 시리즈의 `ShapeMemberPath` 속성(예: `ScatterPolygonSeries`)에 매핑되어야 하는 하나의 모양 데이터 열(배열 또는 X/Y 좌표 배열)이 있어야 합니다

[SampleShapeData](data-chart-data-sources-shape.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleShapeData.create() }
```

## 필요한 모듈

분산 폴리곤 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterPolygonSeries } from 'igniteui-angular-charts';
import { IgxScatterPolylineSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```


```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisModule  } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
// scatter series' modules:
import { IgcScatterPolygonSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcScatterPolylineSeriesModule } from 'igniteui-webcomponents-charts';
// scatter series' elements:
import { IgcScatterPolygonSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcScatterPolylineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartShapeCoreModule,
    IgcDataChartShapeModule,
    IgcScatterPolygonSeriesModule,
    IgcScatterPolylineSeriesModule
);
```

## 코드 예제
이 코드는 `ShapeColumnSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polygon-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polygon-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />
    {/* series: */}
    <IgrScatterPolygonSeries
     name="series1"
     shapeMemberPath="Points"
     title="House Floor Plan"
     brush="Gray"
     outline="Black" />
 </IgrDataChart>
```

```tsx
const series1 = new IgrScatterPolygonSeries({ name: "series1" });
series1.shapeMemberPath = "Points";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.brush = "Gray";
series1.outline = "Black";

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
    <igc-numeric-x-axis id="xAxis"></igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>
    <igc-scatter-polygon-series
        id="series1"
        shape-member-path="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igc-scatter-polygon-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterPolygonSeriesComponent);
series1.dataSource = data;
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

위의 코드를 사용하면 `ScatterPolylineSeries`를 대체하여 `ScatterPolygonSeries`를 생성할 수도 있습니다.

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 마커](data-chart-series-markers.md)
- [시리즈 유형](data-chart-series-types.md)

