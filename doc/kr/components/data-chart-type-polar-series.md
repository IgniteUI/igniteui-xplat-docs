---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 폴라 시리즈

이 항목에서는 `XamDataChart` 제어에서 다양한 유형의 폴라 시리즈에 대해 설명합니다. 폴라 시리즈는 데카르트(x, y) 좌표계 대신 폴라(각도, 반경) 좌표계를 사용하여 차트에 데이터를 플롯하는 일련의 시리즈입니다. 즉, 폴라 시리즈는 [분산 시리즈](data-chart-type-scatter-point-series.md)의 개념을 사용하여 수평선을 따라 늘어서는 것이 아니라 원을 중심으로 감쌉니다. 이 시리즈 그룹은 폴라 좌표계를 사용하여 여러 개의 서로 다른 데이터 시리즈 내의 항목 간의 관계를 표시하는 데 사용됩니다.

폴라 시리즈는 데이터의 불균등한 간격이나 데이터 클러스터에 주의를 끕니다. 이것은 과학적인 데이터(예: 바람의 방향과 속도, 자기장의 강도와 방향, 태양계 내의 물체 위치)를 플롯하는 데 사용되며, 수집된 데이터와 예상 결과의 편차를 강조 표시할 수 있습니다.

## 데모


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-series" >
</code-view>


<div class="divider--half"></div>

## 폴라 시리즈의 유형
데이터 차트는 다음과 같은 유형의 폴라 시리즈를 지원합니다:

| 시리즈 이름  | 설명   |
|--------------|---------------|
| `PolarAreaSeries` | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 직선 집합으로 둘러싸여 채워진 폴리곤을 표시합니다.  |
| `PolarSplineAreaSeries` | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 매끄럽고/보간된 선 집합으로 둘러싸여 채워진 폴리곤을 표시합니다.  |
| `PolarSplineSeries` | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 매끄럽고/보간된 선 집합을 표시합니다.  |
| `PolarScatterSeries` | 폴라(각도/반경) 좌표에 있는 데이터 점을 나타내는 마커 집합을 표시합니다.  |
| `PolarLineSeries` | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 직선 집합을 표시합니다.  |


## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하지만 폴라 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형             | Radius Axis 유형    | Angle Axis 유형    |
|-------------------------|---------------------|--------------------|
| `PolarAreaSeries`       | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarSplineAreaSeries` | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarSplineSeries`     | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarScatterSeries`    | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarLineSeries`       | `NumericRadiusAxis` | `NumericAngleAxis` |

## 필요한 데이터

폴라 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 폴라 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 폴라 시리즈의 `AngleMemberPath` 및 `RadiusMemberPath` 속성(예: `PolarAreaSeries`)을 사용하여 매핑하는 숫자 데이터 열이 2개 이상 있어야 합니다

폴라 좌표계의 데이터 점의 위치는  "극"이라고 하는 고정 방향에서의 각도(각도 좌표)와 고정점(데카르트 좌표의 원점과 유사)에서의 거리(반경 좌표)로 결정됩니다. 극에서 시작하여 바깥 쪽을 향하는 선은 각도 축의 격자선(`NumericAngleAxis`)이며, 극을 둘러싸는 동심원은 반경 축의 격자선(`NumericRadiusAxis`)입니다

[SamplePolarData](data-chart-data-sources-polar.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SamplePolarData.create() }
```
## 필요한 모듈

폴라 시리즈를 사용하려면 로딩하는 동안 앱에 다음 모듈을 불러와야 합니다.

```ts
// axis' modules:
import { IgxNumericAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxPolarAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarLineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarScatterSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarAreaSeries } from 'igniteui-react-charts';
import { IgrPolarLineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
import { IgrPolarScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
```

```ts
// Module Manager:
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericAngleAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericAngleAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcPolarAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarScatterSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcPolarAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarScatterSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartPolarCoreModule,
    IgcDataChartPolarModule,
    IgcPolarAreaSeriesModule,
    IgcPolarLineSeriesModule,
    IgcPolarSplineSeriesModule,
    IgcPolarSplineAreaSeriesModule,
    IgcPolarScatterSeriesModule
);
```

## 코드 예제
이 코드는 `PolarLineSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-line-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-line-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericAngleAxis  name="angleAxis" startAngleOffset={-90}/>
    <IgrNumericRadiusAxis name="radiusAxis" />
    {/* series: */}
    <IgrPolarLineSeries
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis"/>
```

```tsx
const series1 = new IgrPolarLineSeries({ name: "series1" });
series1.angleMemberPath = "Direction";
series1.radiusMemberPath  = "WindSpeed";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrNumericAngleAxis({ name: "angleAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-angle-axis  id="angleAxis" start-angle-offset="-90"></igc-numeric-angle-axis>
    <igc-numeric-radius-axis id="radiusAxis"></igc-numeric-radius-axis>
    <igc-polar-line-series
        id="series1"
        angle-member-path="Direction"
        radius-member-path="WindSpeed">
    </igc-polar-line-series>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let angleAxis = (document.getElementById("angleAxis") as IgcNumericAngleAxisComponent);
let radiusAxis = (document.getElementById("radiusAxis") as IgcNumericRadiusAxisComponent);

let series1 = (document.getElementById("series1") as IgcPolarLineSeriesComponent);
series1.angleAxis = angleAxis;
series1.radiusAxis = radiusAxis;
```

또한, 위의 코드를 사용하여 `PolarLineSeries`를 렌더링할 폴라 시리즈의 이름으로 대체하여 다른 유형의 폴라 시리즈를 생성할 수도 있습니다.

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 마커](data-chart-series-markers.md)
- [시리즈 유형](data-chart-series-types.md)

