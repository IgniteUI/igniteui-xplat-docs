---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: $ProductName$ 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 축 위치

 모든 축에 대해 차트 플롯 영역과 관련하여 축 위치를 지정할 수 있습니다. 이는 동일한 차트에서 2개 이상의 축을 사용하거나 여러 시리즈 간에 [축을 공유](data-chart-axis-sharing.md)하는 경우에 특히 중요합니다.


## 데모


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-locations"  
           github-src="charts/data-chart/axis-locations">
</code-view>

<div class="divider--half"></div>


## 코드 예제
이 코드는 2개의 `NumericYAxis`가 왼쪽/오른쪽에 배치되고, 2개의 `CategoryXAxis`가 서로 쌓이는 데이터 차트를 생성하는 방법을 보여 줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="xAxisYears"
    interval="12" labelLocation="OutsideBottom"
    label="Year"  overlap="1" gap="0.4"  />
    <igx-category-x-axis name="xAxisMonths"
    interval="1"  labelLocation="OutsideBottom"
    label="Month" overlap="1" gap="0.4" />
    <igx-numeric-y-axis  name="yAxisLeft"
    title="Expanse | Revenue"
    minimumValue="-900" labelLocation="OutsideLeft"
    maximumValue="900"
    interval="300" />
    <igx-numeric-y-axis  name="yAxisRight"
    title="Profit (%)"
    minimumValue="0"  labelLocation="OutsideRight"
    maximumValue="100" />

    <igx-column-series name="series1"
    valueMemberPath="Revenue"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <igx-column-series name="series3"
    valueMemberPath="Expanse"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <igx-column-series name="series2"
    valueMemberPath="Profit"
    xAxisName="xAxisYears"
    yAxisName="yAxisRight" />
 </igx-data-chart>
```

```tsx
 <IgrDataChart dataSource={this.state.dataSource}>
    {/* axes */}
    <IgrCategoryXAxis name="xAxisYears"
    interval={12} labelLocation="OutsideBottom"
    label="Year"  overlap={1} gap={0.4}  />
    <IgrCategoryXAxis name="xAxisMonths"
    interval={1}  labelLocation="OutsideBottom"
    label="Month" overlap={1} gap={0.4}/>
    <IgrNumericYAxis  name="yAxisLeft"
    title="Expanse | Revenue"
    minimumValue={-900} labelLocation="OutsideLeft"
    maximumValue={900}
    interval={300} />
    <IgrNumericYAxis  name="yAxisRight"
    title="Profit (%)"
    minimumValue={0}  labelLocation="OutsideRight"
    maximumValue={100} />
    {/* series */}
    <IgrColumnSeries name="series1"
    valueMemberPath="Revenue"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <IgrColumnSeries name="series3"
    valueMemberPath="Expanse"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <IgrColumnSeries name="series2"
    valueMemberPath="Profit"
    xAxisName="xAxisYears"
    yAxisName="yAxisRight" />
 </IgrDataChart>
```



## 추가 리소스

- [축 유형](data-chart-axis-types.md)
- [축 공유](data-chart-axis-sharing.md)
- [시리즈 유형](data-chart-series-types.md)



