---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 카테고리 시리즈


이 항목에서는 `XamDataChart` 제어에서 다양한 유형의 카테고리 시리즈에 대해 설명합니다. 카테고리 시리즈는 데이터를 가져 와서 가로 라인(예: `ColumnSeries`) 또는 세로 라인(예: `BarSeries`)을 따라 늘어나는 데이터 점 컬렉션으로 렌더링하는 차트 시리즈의 가장 간단하고 일반적인 형태의 그룹입니다.

## 데모


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-category-series"  
           github-src="charts/data-chart/type-category-series">
</code-view>

<div class="divider--half"></div>

## 카테고리 시리즈의 유형
다음 표에는 모든 유형의 카테고리 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름  | 설명   |
|--------------|---|
| `AreaSeries` | 영역이 채워진 아래 선으로 연결된 균일하게 배열된 점 집합을 표시합니다. 카테고리는 가로로 배열되고 값은 세로로 배열됩니다. |
| `BarSeries` | 개개의 데이터를 각각의 행에 표시합니다.다른 시리즈와 달리 카테고리는 세로로 배열되고 값은 가로로 표시됩니다.즉, 이 시리즈는 `ColumnSeries` 와 비슷하지만 시계 방향으로 90도 회전됩니다.|
| `ColumnSeries` | 개개의 데이터를 각각의 열에 표시합니다.카테고리는 가로로 정렬되고 값은 세로로 표시됩니다. 시간 경과에 따른 데이터 시리즈의 변경을 표시하거나 여러 항목을 비교할 때 사용합니다.|
| `LineSeries` | 직선으로 연결되고 균등 배열된 점 집합을 표시합니다.시간 경과에 따라 지속적으로 변화하는 데이터 또는 정보를 표시하는 데 사용합니다.점 사이의 관계를 강조할 때 유용합니다. |
| `PointSeries` | 선으로 연결하지 않고 데이터 점의 위치에 마커를 표시합니다.이러한 마커의 모양은 `markerType` 속성을 사용하여 변경할 수 있습니다. |
| `SplineSeries` | 데이터 표시를 향상시키기 위해 스플라인 보간을 사용하여 생성한 매끄러운 선으로 연결된 균일하게 배열되는 점 집합을 표시합니다. |
| `SplineAreaSeries`  | 데이터 표시를 향상시키기 위한 스플라인 보간 및 스무딩 기능이 추가된 `AreaSeries` 유형과 동일합니다. |
| `StepLineSeries` | `LineSeries` 유형과 동일하지만 점들 사이의 최단 경로를 추적하는 직선이 아닌 단계적으로 연속하는 수직선과 수평선으로 값이 연결된다는 점이 다릅니다. |
| `StepAreaSeries` | `StepLineSeries` 유형과 동일하지만 연속하는 수직선과 수평선이 데이터 점 사이의 변화를 단계적으로 진행시키는 것이 아닌 값보다 아래의 영역이 채워진다는 점이 다릅니다. |
| `WaterfallSeries` | 속하는 데이터 점의 값 사이의 차이를 나타내는 세로 열로 점 집합을 표시합니다.값의 양수 및 음수 변화를 구별하기 위해 열은 색상으로 코드화됩니다. 카테고리는 가로로 정렬되고 값은 세로로 표시됩니다.U시간 경과에 따른 연이은 데이터 점 변경을 표시하거나 여러 항목을 비교할 때 사용합니다. |

## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하지만 카테고리 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형        | YAxis 유형      | XAxis 유형                     |
|--------------------|-----------------|---------------------------------|
| `BarSeries`        | `CategoryYAxis` | `NumericXAxis`                                   |
| `AreaSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `ColumnSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `LineSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `SplineSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `SplineAreaSeries` | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StepAreaSeries`   | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StepLineSeries`   | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `WaterfallSeries`  | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## 필요한 데이터

카테고리 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 카테고리 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 카테고리 축(예: `CategoryXAxis`)의 `Label` 속성에 매핑해야 하는 하나 이상의 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
- 모든 데이터 항목에는 카테고리 시리즈(예: `LineSeries`)의 `ValueMemberPath` 속성을 사용하여 매핑하는 숫자 데이터 열이 하나 이상 있어야 합니다



[SampleCategoryData](data-chart-data-sources-category.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleCategoryData.create() }
```

## 필요한 모듈

카테고리 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxAreaSeries } from 'igniteui-angular-charts';
import { IgxBarSeries } from 'igniteui-angular-charts';
import { IgxColumnSeries } from 'igniteui-angular-charts';
import { IgxLineSeries } from 'igniteui-angular-charts';
import { IgxPointSeries } from 'igniteui-angular-charts';
import { IgxSplineSeries } from 'igniteui-angular-charts';
import { IgxSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStepAreaSeries } from 'igniteui-angular-charts';
import { IgxStepLineSeries } from 'igniteui-angular-charts';
import { IgxWaterfallSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrAreaSeries } from 'igniteui-react-charts';
import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrPointSeries } from 'igniteui-react-charts';
import { IgrSplineSeries } from 'igniteui-react-charts';
import { IgrSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStepAreaSeries } from 'igniteui-react-charts';
import { IgrStepLineSeries } from 'igniteui-react-charts';
import { IgrWaterfallSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
// Module Manager:
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisComponent } from 'igniteui-webcomponents-charts';
// series' modules:
import { IgcAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcBarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPointSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStepAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcWaterfallSeriesModule } from 'igniteui-webcomponents-charts';
//series' components
import { IgcAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcBarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPointSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStepAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcWaterfallSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// registering the modules:
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcAreaSeriesModule,
    IgcBarSeriesModule,
    IgcColumnSeriesModule,
    IgcLineSeriesModule,
    IgcPointSeriesModule,
    IgcSplineSeriesModule,
    IgcSplineAreaSeriesModule,
    IgcStepAreaSeriesModule,
    IgcStepLineSeriesModule,
    IgcWaterfallSeriesModule
);
```

## 코드 예제 - 열 시리즈
이 코드는 `ColumnSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-column-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Year" />
    <IgrNumericYAxis  name="yAxis" />
    {/* series */}
    <IgrColumnSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```tsx
const series1 = new IgrColumnSeries({ name: "series1" });
series1.valueMemberPath = "USA";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-category-x-axis id="xAxis" label="Year"></igc-category-x-axis>
    <igc-numeric-y-axis  id="yAxis"></igc-numeric-y-axis>
    <igc-column-series
        id="series1"
        valueMemberPath="USA">
    </igc-column-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## 코드 예제 - 바 시리즈
또한, 위의 코드를 사용하여 `ColumnSeries`를 렌더링할 카테고리 시리즈의 이름으로 대체하여 다른 유형의 시리즈를 생성할 수도 있습니다. 단, `BarSeries`는 다른 유형의 축이 필요하기 때문에 이 규칙에서 예외입니다. 이 코드는 `BarSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis"></igx-numeric-x-axis>
    <igx-category-y-axis name="yAxis" label="Year"></igx-category-y-axis>
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-bar-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis  name="xAxis" />
    <IgrCategoryYAxis name="yAxis" label="Year" />
    {/* series */}
    <IgrBarSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```tsx
const series1 = new IgrBarSeries({ name: "series1" });
series1.valueMemberPath = "USA";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis  id="xAxis"></igc-numeric-x-axis>
    <igc-category-y-axis id="yAxis" label="Year"></igc-category-y-axis>
    <igc-bar-series
        id="series1"
        valueMemberPath="USA">
    </igc-bar-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcCategoryYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBarSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 주석](data-chart-series-annotations.md)
- [시리즈 강조 표시](data-chart-series-highlighting.md)
- [시리즈 마커](data-chart-series-markers.md)
- [시리즈 도구 설명](data-chart-series-tooltips.md)
- [시리즈 추세선](data-chart-series-trendlines.md)
- [시리즈 유형](data-chart-series-types.md)


