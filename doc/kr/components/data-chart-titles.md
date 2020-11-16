---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: 컴포지트 차트 뷰를 만들기 위해 동일한 플롯 영역에 여러 개의 시각적 요소 인스턴스를 표시하는 데이터 차트를 만듭니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 제목 및 부제

`XamDataChart` 제어의 `Title` 및 `Subtitle` 기능을 사용하면 차트의 상단 섹션에 정보를 추가할 수 있습니다. 차트에 제목 또는 부제를 추가하면 차트 콘텐츠가 자동으로 크기 조정되어 사용자가 지정한 제목 및 부제 정보가 표시되도록 합니다.

## 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-chart-titles-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-chart-titles-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
<sample-button src="charts/data-chart/chart-titles"></sample-button>

</div>

<div class="divider--half"></div>

차트의 제목과 부제의 텍스트 컬러, 스타일 및 여백의 스타일을 지정할 수 있는 속성이 제공됩니다. 다음 코드 조각은 차트의 제목을 설정하고 사용자 지정하는 방법을 보여 줍니다:

```html
<igx-data-chart [dataSource]="data"
    height="600px"
    width="100%"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana">
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana"/>
```

```html
<igc-data-chart id="chart"
    height="600px"
    width="100%"
    chart-title="Energy Use Per Country"
    subtitle="Results over a two year period"
    title-text-color="Red"
    title-text-style="24pt Verdana"
    subtitle-text-color="Red"
    subtitle-text-style="16pt Verdana">
</igc-data-chart>
```
