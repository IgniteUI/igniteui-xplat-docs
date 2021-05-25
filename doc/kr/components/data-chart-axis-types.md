---
제목: 데이터 차트 구성 요소 - 네이티브 $Platform$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components, Native $Platform$ Components Library, $Platform$ Chart, $Platform$ Chart Control, $Platform$ Chart Example, $Platform$ Chart Component, $Platform$ Data Chart
_language: kr
---
# $Platform$ 축

`XamDataChart` 제어에서는 축은 축 기본 선, 격자선, 눈금 표시, 제목 및 라벨 모양을 설정하는 기본 속성을 제공합니다. 차트가 지원하는 여러 유형의 시리즈에 대해 `XamDataChart`에서 사용할 수 있는 여러 유형의 축이 있습니다. 시리즈 유형에 따라 사용할 수 있는 축 유형이 결정됩니다.

## 데모


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-types"
           github-src="charts/data-chart/axis-types">
</code-view>

<div class="divider--half"></div>

## 지원되는 축
`XamDataChart` 제어는 특정 시리즈 유형에 사용할 수 있도록 다양한 유형의 축을 지원합니다. 다음 표에는 시리즈 유형에 사용할 수 있는 축이 열거되어 있습니다.

축 유형           | 지원되는 시리즈 유형
--------------------|-----------------------
CategoryYAxis       | [카테고리 시리즈](data-chart-type-category-series.md) 그룹의 `BarSeries`만
CategoryXAxis       | 모든 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md),  [카테고리 시리즈](data-chart-type-category-series.md)(`BarSeries` 제외)
TimeXAxis           |  모든 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md),  [카테고리 시리즈](data-chart-type-category-series.md)(`BarSeries` 제외)
OrdinalTimeXAxis    | 모든 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md),  [카테고리 시리즈](data-chart-type-category-series.md)(`BarSeries` 제외)
PercentChangeYAxis  | 모든 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md), [카테고리 시리즈](data-chart-type-category-series.md), [분산 시리즈](data-chart-type-scatter-bubble-series.md), [모양 시리즈](data-chart-type-shape-series.md)
NumericYAxis        | 모든 [분산 시리즈](data-chart-type-scatter-bubble-series.md), [모양 시리즈](data-chart-type-shape-series.md), [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md), [카테고리 시리즈](data-chart-type-category-series.md)
NumericXAxis        | [카테고리 시리즈](data-chart-type-category-series.md) 그룹의 모든 [분산 시리즈](data-chart-type-scatter-bubble-series.md), [모양 시리즈](data-chart-type-shape-series.md) 및 `BarSeries`
NumericAngleAxis   | 모든 [폴라 시리즈](data-chart-type-polar-series.md)
NumericRadiusAxis  | 모든 [폴라 시리즈](data-chart-type-polar-series.md) 및 [레이디얼 시리즈](data-chart-type-radial-series.md)
CategoryAngleAxis  | 모든 [레이디얼 시리즈](data-chart-type-radial-series.md)

## 카테고리 X축

`CategoryXAxis`는 데이터를 일련의 카테고리 데이터 항목으로 처리합니다. 이 축의 라벨은 순서의 위치에 따라 X축에 배치됩니다. 이 유형의 축은 문자열과 숫자를 포함한 거의 모든 유형의 데이터를 표시할 수 있습니다. 이 유형의 축은 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md),  and [카테고리 시리즈](data-chart-type-category-series.md)(`BarSeries` 제외)와 호환됩니다

다음 코드 조각은 `CategoryXAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryXAxis name="xAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-x-axis id="xAxis">
    </igc-category-x-axis>
</igc-data-chart>
```

## 카테고리  Y축

`CategoryYAxis` 는 데이터를 일련의 카테고리 데이터 항목으로 처리합니다. 이 축의 라벨은 순서의 위치에 따라 Y축에 배치됩니다. 이 유형의 축은 문자열과 숫자를 포함한 거의 모든 유형의 데이터를 표시할 수 있습니다. 이 유형의 축은 [카테고리 시리즈](data-chart-type-category-series.md) 그룹 내의 `BarSeries`만 호환됩니다.

다음 코드 조각은 `CategoryYAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-y-axis id="yAxis">
    </igc-category-y-axis>
</igc-data-chart>
```

## 카테고리 DateTime X축

`CategoryDateTimeXAxis` 축은 데이터를 날짜별로 정렬된 카테고리 데이터 항목의 순서대로 처리합니다. 이 축의 라벨은 이 축의 `DateTimeMemberPath` 속성을 사용하여 매핑된 데이터 열의 값에 따라 X축에 배치됩니다. 이 유형의 축은 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md) 및 [카테고리 시리즈](data-chart-type-category-series.md)(`BarSeries` 제외)와 호환됩니다

다음 코드 조각은 `CategoryDateTimeXAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-date-time-x-axis name="yAxis"
        (FormatLabel)=”xAxisFormatLabel()”
        dateTimeMemberPath="Date" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryDateTimeXAxis name="xAxis"
        labelFormats= {this.xAxisFormatLabel}
        dateTimeMemberPath="Date" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-date-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-category-date-time-x-axis>
</igc-data-chart>
```

## 숫자 X축

`NumericXAxis`는 데이터를 지속적으로 변하는 숫자 데이터 항목으로 처리합니다. 이 축의 라벨은 X축에 배치됩니다. 라벨 위치는 해당 값 매핑 속성을 사용하여 매핑되는 데이터 열의 값에 따라 다릅니다. 이 유형의 축은 [분산 시리즈](data-chart-type-scatter-bubble-series.md) 및 [모양 시리즈](data-chart-type-shape-series.md) 유형과 호환됩니다. 또한, 이 축은 `ValueMemberPath` 속성을 사용하여 데이터 열을 매핑하는 [Category Series](data-chart-type-category-series.md)의 `BarSeries` 유형과 호환됩니다.

다음 코드 조각은 `NumericXAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrNumericXAxis name="xAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-numeric-x-axis id="xAxis">
    </igc-numeric-x-axis>
</igc-data-chart>
```

## 숫자 Y축

`NumericYAxis`는 데이터를 지속적으로 변하는 숫자 데이터 항목으로 처리합니다. 이 축의 라벨은 Y축에 배치됩니다. 라벨 위치는 해당 값 매핑 속성을 사용하여 매핑되는 데이터 열의 값에 따라 다릅니다. 이 유형의 축은 [분산 시리즈](data-chart-type-scatter-bubble-series.md) 및 [모양 시리즈](data-chart-type-shape-series.md) 유형과 호환됩니다. 또한,  이 축은 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md) 및 [카테고리 시리즈](data-chart-type-category-series.md) 유형(`BarSeries` 제외)과 호환됩니다

다음 코드 조각은 `NumericYAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrNumericYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-numeric-y-axis id="yAxis">
    </igc-numeric-y-axis>
</igc-data-chart>
```

## 시간 X축

`TimeXAxis`는 데이터를 날짜별로 정렬된 카테고리 데이터 항목의 순서대로 처리합니다. 이 축의 라벨은 이 축의 `DateTimeMemberPath` 속성을 사용하여 매핑된 데이터 열의 값에 따라 X축에 배치됩니다. 이 유형의 축은 [금융 시리즈](data-chart-type-financial-series.md), [범위 시리즈](data-chart-type-range-series.md) 및 [카테고리 시리즈](data-chart-type-category-series.md) 유형과 호환됩니다

또한, `TimeXAxis`는 `Breaks`로 데이터 간격을 제외하는 기능을 지원합니다. 따라서 라벨은 제외된 간격에 표시되지 않습니다. 예를 들면, 근무/휴무일, 공휴일 또는 주말.

다음 코드 조각은 `TimeXAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrTimeXAxis name="xAxis" dateTimeMemberPath="Date"/>
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-time-x-axis>
</igc-data-chart>
```

## 서수 시간 X축

`OrdinalTimeXAxis`와 `TimeXAxis`의 주요 차이점은 서수 축에 표시되는 날짜를 등거리로 가정하는 것입니다. `TimeXAxis` 는 현재 시간 순서대로 날짜를 정렬하고 조정합니다. 따라서 더 나은 성능을 위해 또는 동일한 시간 간격으로 데이터 항목이 시간 순서대로 이미 존재할 경우에는 `OrdinalTimeXAxis`를 사용하는 것이 좋습니다.

다음 코드 조각은 `OrdinalTimeXAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrOrdinalTimeXAxis name="xAxis" dateTimeMemberPath="Date"/>
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-ordinal-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-ordinal-time-x-axis>
</igc-data-chart>
```

## 백분율 변경 Y축

`PercentChangeYAxis`는 시리즈의 첫 번째 점을 참조값으로 사용하도록 작동합니다. 첫 번째 값 이후의 각 값은 기준 값과 비교하여 증가 또는 감소하는 백분율에 따라 변경됩니다.

이 축 유형은 `NumericYAxis`를 기반으로 하기 때문에 동일한 시리즈 유형을 지원합니다. [카테고리 시리즈](data-chart-type-category-series.md)의 경우, 참조값은 해당 시리즈의 `ValueMemberPath`에 해당합니다. [분산 시리즈](data-chart-type-scatter-bubble-series.md)의 경우, 참조값은 해당 시리즈의 `YMemberPath`에 해당합니다. [금융 시리즈](data-chart-type-financial-series.md)의 경우, 참조값은 `OpenMemberPath` 속성에 매핑된 첫 번째 값에 해당합니다.

다음 코드 조각은 `PercentChangeYAxis`를 `XamDataChart` 제어에 추가하는 방법을 보여줍니다:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-percent-change-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrPercentChangeYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-percent-change-y-axis id="yAxis">
    </igc-percent-change-y-axis>
</igc-data-chart>
```

## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [축 설정](data-chart-axis-settings.md)
- [차트 범례](data-chart-legends.md)
- [시리즈 마커](data-chart-series-markers.md)
- [시리즈 유형](data-chart-series-types.md)
