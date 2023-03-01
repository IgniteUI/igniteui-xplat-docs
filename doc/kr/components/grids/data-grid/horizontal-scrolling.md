---
title: 반응형 데이터 그리드 | 테이블 제어 | {ProductName} | 수평 스크롤 | Infragistics
_description: {ProductName} Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, {ProductName}, Infragistics
_language: kr
---

# {Platform} 수평 스크롤

{ProductName} 데이터 표/데이터 그리드는 {Platform} 데이터 그리드의 너비보다 큰 열의 총 너비를 설정하여 수평 스크롤을 활성화할 수 있습니다.

## 데모


`sample="/grids/data-grid/column-scrolling", height="600", alt="{Platform} data grid column scrolling"`


<div class="divider--half"></div>

## 기본 열 너비의 설정

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    autoGenerateColumns="true"
    defaultColumnMinWidth={300}
    dataSource={this.data}/>
```
```html
 <igc-data-grid id="grid"
      height="100%"
      width="100%"
      default-column-min-width=200>
    </igc-data-grid>
```
## 각 열 너비의 설정

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    autoGenerateColumns="false"
    dataSource={this.data}>
        <IgrTextColumn field="FirstName" headerText="First Name" width="300"/>
        <IgrTextColumn field="LastName" headerText="Last Name" width="300"/>
        <IgrNumericColumn field="Age" headerText="Age" width="300"/>
        <IgrDateTimeColumn field="Birthday" headerText="Birth Date" width="300"/>
        <IgrTextColumn field="Street" headerText="Street Address" width="300"/>
        <IgrTextColumn field="City" headerText="City and State" width="300"/>
        <IgrTextColumn field="Salary" headerText="Salary" width="300"/>
        <IgrTextColumn field="Sales" headerText="Sales" width="300"/>
    </IgrDataGrid>
```
```html
<igc-data-grid id="grid"
     width="100%"
    height="100%"
    auto-generate-columns="false">
      <igc-text-column id="FirstName" width="300"></igc-text-column>
      <igc-text-column id="LastName" width="300"></igc-text-column>
      <igc-numeric-column id="Age" width="300"></igc-numeric-column>
      <igc-date-time-column id="OrderDate" width="300"></igc-date-time-column>
      <igc-text-column id="Street" width="300"></igc-text-column>
      <igc-text-column id="City" width="300"></igc-text-column>
      <igc-text-column id="Salary" width="300"></igc-text-column>
      <igc-text-column id="Sales" width="300"></igc-text-column>
</igc-data-grid>
```