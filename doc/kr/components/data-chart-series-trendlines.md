---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 추세선

`XamDataChart` 제어는 시리즈에 바인딩된 데이터의 추세를 식별하는 데 도움이 되는 추세선을 지원합니다.

## 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
<sample-button src="charts/data-chart/series-trendlines"></sample-button>

</div>

<div class="divider--half"></div>

`XamDataChart` 제어의 추세선은 기본적으로 무효로 되어 있습니다. 이것을 설정하기 위해 추세선을 표시할 해당 시리즈에서 `TrendLineType` 속성을 설정할 수 있습니다. 브러시, 기간, 두께, 대시 배열과 같은 추세선의 여러 모양 속성을 수정할 수 있습니다.

추세선은 스택 시리즈 및 범위 시리즈를 제외한 모든 시리즈에서 지원됩니다. 다음은 차트 시리즈에서 사용할 수 있는 추세선 목록입니다:

- `None`
- `CubicFit`
- `CumulativeAverage`
- `ExponentialAverage`
- `ExponentialFit`
- `LinearFit`
- `LogarithmicFit`
- `ModifiedAverage`
- `PowerLawFit`
- `QuadraticFit`
- `QuarticFit`
- `QuinticFit`
- `SimpleAverage`
- `WeightedAverage`

다음 코드 조각은 `XamDataChart` 제어의 시리즈에 추세선을 추가하는 방법을 보여 줍니다:

```html
<igx-data-chart  [dataSource]="data"
    height="400px"
    width="100%">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-financial-price-series
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit">
    </igx-financial-price-series>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px" >

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrFinancialPriceSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-financial-price-series
        high-member-path="High"
        low-member-path="Low"
        close-member-path="Close"
        open-member-path="Open"
        volume-member-path="Volume"
        trend-line-type="CubicFit">
    </igc-financial-price-series>

</igc-data-chart>
```
