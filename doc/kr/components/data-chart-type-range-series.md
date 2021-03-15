---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 범위 시리즈

이 항목에서는 `XamDataChart` 제어의 다양한 범위 시리즈 유형에 대해 설명하며, 범위 시리즈는 2개의 숫자 데이터 열을 사용하여 수평 방향으로 늘어선 데이터 점 컬렉션으로 렌더링하는 차트 시리즈 그룹입니다(예: `RangeAreaSeries`)

## 데모


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-range-series"  
           github-src="charts/data-chart/type-range-series">
</code-view>

<div class="divider--half"></div>

## 범위 시리즈의 유형
다음 표에는 모든 유형의 범위 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름  | 설명   |
|--------------|---------------|
| `RangeAreaSeries` | 데이터 점의 High/Low 값의 쌍 사이의 채워진 영역/범위를 표시합니다. 카테고리는 가로로 정렬되고 값은 세로로 정렬됩니다. |
| `RangeColumnSeries` | 데이터 점의 High/Low 값 사이의 개별 열에 이산 데이터를 표시합니다. 카테고리는 가로로 정렬되고 값은 세로로 표시됩니다. |


## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하지만 범위 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형         | YAxis 유형     | XAxis 유형      |
|---------------------|----------------|-----------------|
| `RangeAreaSeries`   | `NumericYAxis` | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `RangeColumnSeries` | `NumericYAxis` | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## 필요한 데이터

범위 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 범위 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 카테고리 축(예: `CategoryXAxis`)의 `Label` 속성에 매핑해야 하는 하나 이상의 라벨 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
- 모든 데이터 항목에는 범위 시리즈의 `HighMemberPath` 및 `LowMemberPath` 속성(예: `RangeAreaSeries`)을 사용하여 매핑하는 숫자 데이터 열이 2개 이상 있어야 합니다

[SampleRangeData](data-chart-data-sources-range.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleRangeData.create() }
```

## 필요한 모듈

범위 시리즈를 사용하려면 로딩하는 동안 앱에 다음 모듈을 불러와야 합니다.

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxRangeAreaSeries } from 'igniteui-angular-charts';
import { IgxRangeColumnSeries } from 'igniteui-angular-charts';
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
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrRangeAreaSeries } from 'igniteui-react-charts';
import { IgrRangeColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcRangeAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcRangeAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcRangeAreaSeriesModule,
    IgcRangeColumnSeriesModule
);
```

## 코드 예제
이 코드는 `RangeColumnSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
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
    {/* series: */}
    <IgrRangeColumnSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low" />
 </IgrDataChart>
```

```tsx
const series1 = new IgrRangeColumnSeries({ name: "series1" });
series1.highMemberPath = "High";
series1.lowMemberPath  = "Low";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const xAxis = new IgrNumericXAxis({  name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleRangeData.create();
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
    <igc-range-column-series
        id="series1"
        high-member-path="High"
        low-member-path="Low">
    </igc-range-column-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcRangeColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

위의 코드를 사용하면 `RangeColumnSeries`를 대체하여 `RangeAreaSeries`를 생성할 수도 있습니다.

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
