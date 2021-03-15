---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 분산 영역 시리즈

이 항목에서는 코드 예제를 사용하여 `XamDataChart` 제어에서 `ScatterAreaSeries`를 사용하는 방법을 설명합니다. 이 시리즈는 각 점에 할당된 숫치 값으로X 및 Y 데이터의 삼각 측량을 기반으로 색상이 입혀진 표면을 그립니다. 이 유형의 시리즈는 히트 맵, 자기장 강도 또는 사무실에서 Wi-Fi 강도를 렌더링하는 경우 등에 유용합니다. `ScatterAreaSeries`는 데이터 점를 동일한 값으로 연결하는 등고선 대신 보간 및 채색된 표면으로 데이터를 나타낸다는 점을 제외하면 `ScatterContourSeries`와 매우 유사합니다.

## 데모


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-area-series"  
           github-src="charts/data-chart/type-area-series">
</code-view>

<div class="divider--half"></div>

## 필요한 축
`XamDataChart` 제어는 다양한 유형의 축을 제공하며, `NumericYAxis` 및 `NumericYAxis`만 `ScatterAreaSeries`와 함께 사용할 수 있습니다.

## 필요한 데이터

`ScatterAreaSeries`에는 다음과 같은 데이터 요구 사항이 있습니다:
- 데이터 소스는 배열 또는 데이터 항목 목록이어야 함
- 데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
- 모든 데이터 항목에는 `XMemberPath`, `YMemberPath` 및 `ColorMemberPath` 속성에 매핑되는 3개의 숫자 데이터 열이 있어야 합니다.

[SampleScatterData](data-chart-data-sources-scatter.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleScatterData.create() }
```

## 필요한 모듈

분산 영역 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterAreaSeries } from 'igniteui-angular-charts';
import { IgxCustomPaletteColorScale } from 'igniteui-angular-charts';
import { ColorScaleInterpolationMode } from 'igniteui-angular-charts';
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
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
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
import { IgcScatterAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteColorScaleModule } from 'igniteui-webcomponents-charts';
import { ColorScaleInterpolationMode } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteColorScaleComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterAreaSeriesModule,
    IgcCustomPaletteColorScaleModule
);
```

## 코드 예제
이 코드는 `ScatterAreaSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-area-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />
    {/* series: */}
    <IgrScatterAreaSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="X"
     yMemberPath="Y"
     colorMemberPath="Z" />
 </IgrDataChart>
```

```tsx
const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

const series1 = new IgrScatterAreaSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "X";
series1.yMemberPath = "Y";
series1.colorMemberPath = "Z";

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
    <igc-scatter-area-series
        id="series1"
        x-member-path="X"
        y-member-path="Y"
        color-member-path="Z">
    </igc-scatter-area-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterAreaSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## 컬러 비율

` ScatterAreaSeries`의 `ColorScale` 속성을 사용하여 점의 값을 분석하고 시리즈의 표면을 채 웁니다. 컬러는 삼각 측량 데이터에 픽셀 단위의 삼각 래스터라이저를 적용하여 표면의 모양 주변을 매끄럽게 보간합니다. 표면 렌더링은 픽셀 단위이기 때문에 컬러 비율은 브러시 대신 컬러를 사용합니다.

제공된 `CustomPaletteColorScale` 클래스는 대부분의 착색 요구 사항을 만족시킬 수 있지만 `ColorScale` 추상 클래스를 상속하고 독자적인 착색 논리를 제공할 수 있습니다.

다음 표에는 `ScatterAreaSeries`의 면 채색에 영향을 주는 `CustomPaletteColorScale`의 속성이 열거되어 있습니다 .

- `Palette`는 선택하거나 보간하는 컬러의 컬렉션을 설정합니다.
- `InterpolationMode`는 팔레트에서 컬러를 가져오는 메소드를 설정합니다.
- `MaximumValue`는 컬러를 할당할 수 있는 상한값을 설정합니다. 지정한 값이 이 값보다 큰 경우에는 투명하게 됩니다.
- `MinimumValue`는 컬러를 할당할 수 있는 최소값을 설정합니다. 지정한 값이 이 값보다 작은 경우에는 투명하게 됩니다.


```tsx
const scale = new IgrCustomPaletteColorScale({});
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.interpolationMode = ColorScaleInterpolationMode.Interpolate;
scale.palette = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

const series1 = new IgrScatterAreaSeries({ name: "series1" });
series1.colorMemberPath = "Z";
series1.colorScale = scale;
```

```ts
const scale = new IgcCustomPaletteColorScaleComponent();
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.interpolationMode = ColorScaleInterpolationMode.InterpolateRGB;
scale.palette = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

let series1 = (document.getElementById("series1") as IgcScatterAreaSeriesComponent);
series1.colorScale = scale;
```

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 유형](data-chart-series-types.md)

