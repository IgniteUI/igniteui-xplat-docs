---
제목: 데이터 차트 구성 요소 - 네이티브 $Platform$ | $ProductName$
_description: The $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다.
_keywords: $ProductName$, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components, Native $Platform$ Components Library, $Platform$ Chart, $Platform$ Chart Control, $Platform$ Chart Example, $Platform$ Chart Component, $Platform$ Data Chart
_language: kr
mentionedTypes: ['XamDataChart','StackedColumnSeries','CategoryXAxis']
namespace: Infragistics.Controls.Charts
---
# $Platform$ 스택 시리즈

이 항목에서는 `XamDataChart` 제어에서 다양한 유형의 스택 시리즈에 대해 설명합니다. 스택 시리즈는 데이터를 가져 와서 가로 라인(예: `ColumnSeries`) 또는 세로 라인(예: `BarSeries`)을 따라 늘어나는 데이터 점 컬렉션으로 렌더링하는 차트 시리즈의 가장 간단하고 일반적인 형태의 그룹입니다.

## 데모


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-series"
           github-src="charts/data-chart/type-stacked-series">
</code-view>

<div class="divider--half"></div>

스택된 각 시리즈에는　`StackedFragmentSeries` 요소를 배치할 수 있는 자체 `Series` 컬렉션이 있습니다. 이러한 프라그먼트는 차트의 실제 렌더링을 구성하며 `ValueMemberPath`를 허용하는 요소입니다.

## 스택 시리즈의 유형
다음 표에는 모든 유형의 카테고리 시리즈와 그 설명이 표시되어 있습니다.

| Series Name  | Description   |
|--------------|---|
| `StackedAreaSeries` | 이 시리즈 유형은 선의 아래 영역이 채워져 겹쳐지도록 하여 선분(`StackedFragmentSeries`)으로 연결된 점 집합을 사용하여 렌더링됩니다.컬렉션의 각 누적 프래그먼트는 각 스택의 하나의 시각적 요소를 나타냅니다. 각 스택은 양수 값 및 음수 값을 모두 포함할 수 있습니다.모든 양수 값은 y축의 양수 쪽에 그룹화되고, 모든 음수 값은 y축의 음수 쪽에 그룹화됩니다. |
| `StackedBarSeries` | 서로 옆에 이산 데이터를 누적된 바에 표시합니다.카테고리는 세로로 정렬되고 값은 가로로 누적됩니다. 이 시리즈는 일반적으로 시간 경과에 따른 데이터 시리즈의 변경을 표시하거나 여러 항목을 비교할 때 사용합니다. |
| `StackedColumnSeries` | 서로 위에 이산 데이터를 누적된 열에 표시합니다.카테고리는 가로로 정렬되고 값은 세로로 누적됩니다. 이 시리즈는 일반적으로 시간 경과에 따른 데이터 시리즈의 변경을 표시하거나 여러 항목을 비교할 때 사용합니다. |
| `StackedLineSeries` | 이 시리즈 유형은 서로 위에 누적된 선분 (`StackedFragmentSeries`) 으로 연결된 점 집합을 사용하여 렌더링됩니다. 컬렉션의 각 누적 프래그먼트는 각 스택의 하나의 시각적 요소를 나타냅니다. 각 스택은 양수 값 및 음수 값을 모두 포함할 수 있습니다. 모든 양수 값은 y축의 양수 쪽에 그룹화되고, 모든 음수 값은 y축의 음수 쪽에 그룹화됩니다. |
| `StackedSplineAreaSeries` | 이 시리즈 유형은 스플라인 아래 영역이 채워져 겹쳐지도록 하여 스플라인 세그먼트의 부드러운 곡선 (`StackedFragmentSeries`) 으로 연결된 점 집합을 사용하여 렌더링됩니다.컬렉션의 각 누적 프래그먼트는 각 스택의 하나의 시각적 요소를 나타냅니다. 각 스택은 양수 값 및 음수 값을 모두 포함할 수 있습니다. 모든 양수 값은 y축의 양수 쪽에 그룹화되고, 모든 음수 값은 y축의 음수 쪽에 그룹화됩니다. |
| `StackedSplineSeries` | 이 시리즈 유형은 서로 위에 누적된 스플라인 세그먼트의 부드러운 곡선 (`StackedFragmentSeries`) 으로 연결된 점 집합을 사용하여 렌더링됩니다.컬렉션의 각 누적 프래그먼트는 각 스택의 하나의 시각적 요소를 나타냅니다.각 스택은 양수 값 및 음수 값을 모두 포함할 수 있습니다. 모든 양수 값은 y축의 양수 쪽에 그룹화되고, 모든 음수 값은 y축의 음수 쪽에 그룹화됩니다.  |
| `Stacked100AreaSeries` | 이 시리즈는 y축 값을 처리하는 것을 제외한 모든 점에서 `StackedAreaSeries` 와 동일합니다.데이터를 직접 표시하는 대신에 `Stacked100AreaSeries` 는 데이터 점의 모든 값의 합계의 퍼센트로 데이터를 표시합니다. |
| `Stacked100BarSeries` | 이 시리즈는 `StackedBarSeries` 유형과 동일하지만 데이터를 직접 표시하는 대신에 카테고리의 모든 값의 퍼센트로 데이터를 표시하는 기능이 추가되었습니다. |
| `Stacked100ColumnSeries` | 이 시리즈는 `StackedColumnSeries` 유형과 동일하지만 데이터를 직접 표시하는 대신에 카테고리의 모든 값의 퍼센트로 데이터를 표시하는 기능이 추가되었습니다. |
| `Stacked100LineSeries` | 이 시리즈는 y축 값을 처리하는 것을 제외한 모든 점에서 `StackedLineSeries` 와 동일합니다. 데이터를 직접 표시하는 대신에 `Stacked100AreaSeries` 는 데이터 점의 모든 값의 합계의 퍼센트로 데이터를 표시합니다. |
| `Stacked100SplineAreaSeries` | 이 시리즈는 y축 값을 처리하는 것을 제외한 모든 점에서 `StackedSplineAreaSeries` 와 동일합니다. 데이터를 직접 표시하는 대신에 `Stacked100SplineAreaSeries` 는 데이터 점의 모든 값의 합계의 퍼센트로 데이터를 표시합니다.  |
| `Stacked100SplineSeries` | 이 시리즈는 y축 값을 처리하는 것을 제외한 모든 점에서 `StackedSplineSeries` 와 동일합니다. 데이터를 직접 표시하는 대신에 `Stacked100SplineSeries` 는 데이터 점의 모든 값의 합계의 퍼센트로 데이터를 표시합니다.  |

## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하지만 스택 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형        | YAxis 유형      | XAxis 유형                      |
|--------------------|-----------------|---------------------------------|
| `StackedAreaSeries`          | `CategoryYAxis` | `NumericXAxis`                                   |
| `StackedBarSeries`           | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedColumnSeries`        | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedLineSeries`          | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedSplineAreaSeries`    | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedSplineSeries`        | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100AreaSeries`       | `CategoryYAxis` | `NumericXAxis`                                   |
| `Stacked100BarSeries`        | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100ColumnSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100LineSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100SplineAreaSeries` | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100SplineSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## 필요한 데이터

스택 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 스택 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 카테고리 축(예: `CategoryXAxis`)의 `Label` 속성에 매핑해야 하는 하나 이상의 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
- 모든 데이터 항목에는스택 시리즈의  `시리즈` 컬렉션에 추가할 `StackedFragmentSeries`의　`ValueMemberPath` 속성을 사용하여 매핑해야 하는 숫자 데이터 열이 적어도 하나 이상 포함되어야 합니다.

## 필요한 모듈

스택 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
import { IgxStackedColumnSeries } from 'igniteui-angular-charts';
import { IgxStackedLineSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineSeries } from 'igniteui-angular-charts';
import { IgxStacked100AreaSeries } from 'igniteui-angular-charts';
import { IgxStacked100BarSeries } from 'igniteui-angular-charts';
import { IgxStacked100ColumnSeries } from 'igniteui-angular-charts';
import { IgxStacked100LineSeries } from 'igniteui-angular-charts';
import { IgxStacked100SplineAreaSeries } from 'igniteui-angular-charts'
import { IgxStacked100SplineSeries } from 'igniteui-angular-charts';
import { IgxStacked100SplineAreaSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxDataChartStackedModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
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
import { IgrStackedAreaSeries } from 'igniteui-react-charts';
import { IgrStackedBarSeries } from 'igniteui-react-charts';
import { IgrStackedColumnSeries } from 'igniteui-react-charts';
import { IgrStackedFragmentSeries } from 'igniteui-react-charts';
import { IgrStackedLineSeries } from 'igniteui-react-charts';
import { IgrStackedSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStackedSplineSeries } from 'igniteui-react-charts';
import { IgrStacked100AreaSeries } from 'igniteui-react-charts';
import { IgrStacked100BarSeries } from 'igniteui-react-charts';
import { IgrStacked100ColumnSeries } from 'igniteui-react-charts';
import { IgrStacked100LineSeries } from 'igniteui-react-charts';
import { IgrStacked100SplineAreaSeries } from 'igniteui-react-charts'
import { IgrStacked100SplineSeries } from 'igniteui-react-charts';
import { IgrStacked100SplineAreaSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartStackedModule } from 'igniteui-react-charts';
import { IgrColumnFragmentModule } from 'igniteui-react-charts'

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartStackedModule.register();
IgrColumnFragmentModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartStackedModule } from 'igniteui-webcomponents-charts';
import { IgcColumnFragmentModule } from 'igniteui-webcomponents-charts' ;
// axis' modules:
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisModule  } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisComponent } from 'igniteui-webcomponents-charts';
// scatter series' modules:
import { IgcStackedAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedBarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100AreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100BarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100ColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100LineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100SplineAreaSeriesModule } from 'igniteui-webcomponents-charts'
import { IgcStacked100SplineSeriesModule } from 'igniteui-webcomponents-charts';
// scatter series' elements:
import { IgcStackedAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedBarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100AreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100BarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100ColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100LineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100SplineAreaSeriesComponent } from 'igniteui-webcomponents-charts'
import { IgcStacked100SplineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartStackedModule,
    IgcColumnFragmentModule,
    IgcStackedAreaSeriesModule,
    IgcStackedBarSeriesModule,
    IgcStackedColumnSeriesModule,
    IgcStackedFragmentSeriesModule,
    IgcStackedLineSeriesModule,
    IgcStackedSplineAreaSeriesModule,
    IgcStackedSplineSeriesModule,
    IgcStacked100AreaSeriesModule,
    IgcStacked100BarSeriesModule,
    IgcStacked100ColumnSeriesModule,
    IgcStacked100LineSeriesModule,
    IgcStacked100SplineAreaSeriesModule,
    IgcStacked100SplineSeriesModule
);
```

## 코드 예제 - 스택 열 시리즈
이 코드는 `StackedColumnSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다. 또한, 위의 코드를 사용하여 `StackedColumnSeries`를 렌더링할 카테고리 시리즈의 이름으로 대체하여 다른 유형의 시리즈를 생성할 수도 있습니다.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-column-series>

</igx-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >

  <IgrCategoryXAxis name="xAxis" label="Country" />
  <IgrNumericYAxis name="yAxis" minimumValue={0} />
  <IgrStackedColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStackedColumnSeries>
</IgrDataChart>
```

```tsx
const stackedSeries = new IgrStackedColumnSeries({ name: "series" });

const fragment1 = new IgrStackedFragmentSeries({ name: "coal" });
fragment1.valueMemberPath = "Coal";

const fragment2 = new IgrStackedFragmentSeries({ name: "hydro" });
fragment2.valueMemberPath = "Hydro";

const fragment3 = new IgrStackedFragmentSeries({ name: "nuclear" });
fragment3.valueMemberPath = "Nuclear";

const fragment4 = new IgrStackedFragmentSeries({ name: "gas" });
fragment4.valueMemberPath = "Gas";

const fragment5 = new IgrStackedFragmentSeries({ name: "oil" });
fragment5.valueMemberPath = "Oil";

stackedSeries.xAxisName = "xAxis";
stackedSeries.yAxisName = "yAxis";

stackedSeries.series.add(fragment1);
stackedSeries.series.add(fragment2);
stackedSeries.series.add(fragment3);
stackedSeries.series.add(fragment4);
stackedSeries.series.add(fragment5);

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stackedSeries);
```

```html
<igc-data-chart id="chart" height="500px" width="700px">
  <igc-category-x-axis id="xAxis" label="Country"></igc-category-x-axis>
  <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

  <igc-stacked-column-series id="series1">
    <igc-stacked-fragment-series value-member-path="Coal"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Hydro"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Nuclear"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Gas"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Oil"></igc-stacked-fragment-series>
  </igc-stacked-column-series>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcStackedColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## 코드 예제 - 스택 바 시리즈
 `StackedBarSeries`는 `CategoryYAxis` 및 `NumericXAxis`를 사용한다는 점에서 다른 유형의 축을 필요로 하기 때문에 `StackedColumnSeries`를 다른 시리즈 이름으로 대체할 수 있다는 규칙에서 예외입니다. 이 코드는 `StackedBarSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>

</igx-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >
  <IgrNumericXAxis name="xAxis" />
  <IgrCategoryYAxis name="yAxis" label="Country" />

  <IgrStackedBarSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStackedBarSeries>
</IgrDataChart>
```

```tsx
const stackedSeries = new IgrStackedBarSeries({ name: "series" });

const fragment1 = new IgrStackedFragmentSeries({ name: "fragment1" });
fragment1.valueMemberPath = "Coal";

const fragment2 = new IgrStackedFragmentSeries({ name: "fragment2" });
fragment2.valueMemberPath = "Hydro";

const fragment3 = new IgrStackedFragmentSeries({ name: "fragment3" });
fragment3.valueMemberPath = "Nuclear";

const fragment4 = new IgrStackedFragmentSeries({ name: "fragment4" });
fragment4.valueMemberPath = "Gas";

const fragment5 = new IgrStackedFragmentSeries({ name: "fragment5" });
fragment5.valueMemberPath = "Oil";

stackedSeries.xAxisName = "xAxis";
stackedSeries.yAxisName = "yAxis";

stackedSeries.series.add(fragment1);
stackedSeries.series.add(fragment2);
stackedSeries.series.add(fragment3);
stackedSeries.series.add(fragment4);
stackedSeries.series.add(fragment5);

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stackedSeries);
```

```html
<igc-data-chart id="chart" height="500px" width="700px">
  <igc-numeric-x-axis id="xAxis"></igc-numeric-x-axis>
  <igc-category-y-axis id="yAxis" label="Country"></igc-category-y-axis>

  <igc-stacked-bar-series id="series1">
    <igc-stacked-fragment-series value-member-path="Coal"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Hydro"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Nuclear"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Gas"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Oil"></igc-stacked-fragment-series>
  </igc-stacked-bar-series>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcCategoryYAxisComponent);

let series1 = (document.getElementById("series1") as IgcStackedBarSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

