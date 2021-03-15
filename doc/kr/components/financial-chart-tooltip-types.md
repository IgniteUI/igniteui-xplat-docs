---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Infragistics | 도구 설명 유형
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, $ProductName$, Infragistics
_language: kr
---
# $PlatformShort$ 도구 설명 유형

이 항목에서는 `XamFinancialChart`에서 사용할 수 있는 도구 설명 유형에 대한 개념 정보를 제공합니다.

## 데모

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types"  
           github-src="charts/financial-chart/tooltip-types">
</code-view>

<div class="divider--half"></div>

## 도구 설명 유형

IgxFinancialChart는 다음과 같은 방법으로 도구 설명을 표시하도록 설정할 수 있습니다:

1. `Default` 도구 설명은 포인터가 항목 위에 있을 때 단일 항목에 대한 도구 설명을 표시합니다.
1. `Item` 도구 설명은 포인터가 항목 위에 있을 때 카테고리의 각 데이터 항목에 대한 도구 설명을 표시합니다.
1. `Category` 도구 설명은 포인터가 항목 위에 있을 때 카테고리의 모든 데이터 점에 대한 그룹화된 도구 설명을 표시합니다.
1. `None` 도구 설명이 표시되지 않도록 합니다.

```html
<igx-financial-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.data}
    toolTipType="Category" />
```

```html
<igc-financial-chart id="chart"
    tool-tip-type="Category">
</igc-financial-chart>
```
