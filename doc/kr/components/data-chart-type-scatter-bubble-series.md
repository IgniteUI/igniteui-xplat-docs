---
제목: 데이터 차트 구성 요소 - 네이티브 $Platform$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components, Native $Platform$ Components Library, $Platform$ Chart, $Platform$ Chart Control, $Platform$ Chart Example, $Platform$ Chart Component, $Platform$ Data Chart
_language: kr
---
# $Platform$ 분산 버블 시리즈

이 항목에서는 코드 예제를 사용하여 `XamDataChart` 제어에서 분산 `BubbleSeries`를 사용하는 방법을 설명합니다. 이 시리즈는
데카르트(x, y) 좌표계를 사용하여 데이터를 플롯하는 [분산 마커 시리즈](data-chart-type-scatter-point-series.md)와 유사합니다. 이 시리즈는 데이터를 크기가 변경된 버블 집합으로 표시하는데 각 버블에는 위치를 결정하는 숫자 X /Y 값과 크기를 결정하는 세 번째 값이 있습니다.


## 데모


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-series"
           github-src="charts/data-chart/type-scatter-series">
</code-view>

<div class="divider--half"></div>

## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하며, `NumericYAxis` 및 `NumericYAxis`만 `BubbleSeries`와 함께 사용할 수 있습니다.

## 필요한 데이터

`BubbleSeries`에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 `XMemberPath`, `YMemberPath` 및 `RadiusMemberPath` 속성에 매핑되는 3개의 숫자 데이터 열이 있어야 합니다

[SampleScatterStats](data-chart-data-sources-stats.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleScatterStats.getCountries() }
```

## 필요한 모듈

분산 버블 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxBubbleSeries } from 'igniteui-angular-charts';
import { IgxSizeScale } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxCustomPaletteBrushScale } from 'igniteui-angular-charts';
import { BrushSelectionMode } from 'igniteui-angular-charts';
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
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteBrushScale } from 'igniteui-react-charts';
import { BrushSelectionMode } from 'igniteui-react-charts';
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
import { IgcBubbleSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleModule } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleModule } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteBrushScaleModule } from 'igniteui-webcomponents-charts';
import { BrushSelectionMode } from 'igniteui-webcomponents-charts';
import { MarkerType } from 'igniteui-webcomponents-charts';
// series' components
import { IgcBubbleSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleComponent } from "igniteui-webcomponents-charts";
import { IgcCustomPaletteBrushScaleComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcBubbleSeriesModule,
    IgcSizeScaleModule,
    IgcValueBrushScaleModule,
    IgcCustomPaletteBrushScaleModule
);
```

## 코드 예제
이 코드는 `BubbleSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>

    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita">
    </igx-bubble-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" isLogarithmic="true" />
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    {/* series: */}
    <IgrBubbleSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="Population"
     yMemberPath="GdpTotal"
     radiusMemberPath="GdpPerCapita" />
 </IgrDataChart>
```

```tsx
const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

const series1 = new IgrBubbleSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "Population";
series1.yMemberPath = "GdpTotal";
series1.radiusMemberPath = "GdpPerCapita";

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

    <igc-bubble-series
        id="series1"
        x-member-path="population"
        y-member-path="gdpTotal"
        radius-member-path="gdpPerCapita">
    </igc-bubble-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## 버블 모양

`BubbleSeries`의 모양은 [Markers](data-chart-series-markers.md) 속성을 사용하여 버블 모양을 미리 정의된 모양 중 하나로 변경할 수 있는데 예를 들면 다음과 같습니다:

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

```tsx
<IgrBubbleSeries
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
/>
```

```html
<igc-bubble-series
 id="series1"
 marker-type="Square"
 marker-brush="White"
 marker-oOutline="Blue">
</igc-bubble-series>
```

```tsx
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

```tsx
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

```ts
const series1 = new IgcBubbleSeriesComponent();
series1.id = "series1";
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

## 버블 반경 비율

`RadiusScale`은 버블의 크기를 결정하는 `BubbleSeries`의 옵션 기능입니다. 이 기능은 ` SizeScale` 객체를 통해 구현됩니다. 반경 비율이 설정되면 가장 작은 버블은 `MinimumValue`와 같게 되며, 가장 큰 버블은 `MaximumValue`와 같게 되고 나머지 모든 버블은 그에 따라 변경됩니다. 크기 비율은 선형 또는 로그여도 상관 없습니다. 반경 비율이 설정되지 않은 경우, 각 버블의 크기는 `RadiusMemberPath` 속성에 매핑된 데이터 열의 값과 동일하게 됩니다

```tsx
const sizeScale = new IgxSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

```tsx
const sizeScale = new IgrSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

```ts
const sizeScale = new IgcSizeScaleComponent();
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.radiusScale = sizeScale;
```

## 버블 채우기 비율

`FillScale`은 단일 `BubbleSeries` 내의 컬러 패턴을 결정하는 옵션 기능입니다. 이 시리즈는 다음과 같은 채우기 비율을 지원합니다:

- `ValueBrushScale`은 `FillMemberPath` 속성에 매핑된 데이터 열의 값 집합을 사용하여 버블의 보간 브러시를 결정합니다. 또한, 사용자가 지정한 `MinimumValue` 및 `MaximumValue`를 가질 수 있습니다. 이 비율로 범위를 설정하면 범위 밖에 있는 값을 가진 버블은 `Brushes` 컬렉션으로부터 브러시를 얻지 못하고 컬러도 없습니다.
- `CustomPaletteBrushScale`은 버블 마커의 인덱스를 사용하여 `Brushes` 컬렉션으로부터 브러시를 선택합니다. `BrushSelectionMode` 속성을 `Select` enumerable 값으로 설정하면 버블이 순차적으로 색칠되어 `Interpolate`로 설정되고, 브러시는 버블의 인덱스와 컬렉션의 브러시 수에 따라 보간됩니다.

```tsx
const brushScale = new IgxValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgxCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

```tsx
const brushScale = new IgrValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgrCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

```ts
const brushScale = new IgcValueBrushScaleComponent();
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgcCustomPaletteBrushScaleComponent();
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.fillScale = brushScale;
```

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 마커](data-chart-series-markers.md)
- [시리즈 도구 설명](data-chart-series-tooltips.md)
- [시리즈 추세선](data-chart-series-trendlines.md)
- [시리즈 유형](data-chart-series-types.md)

