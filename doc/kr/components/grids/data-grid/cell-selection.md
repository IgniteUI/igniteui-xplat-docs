---
title: 반응형 데이터 그리드 | 테이블 제어 | {ProductName} | 선택 | Infragistics
_description: {ProductName} Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid','Infragistics.Controls.Grid.Implementation.CellInfo', 'Infragistics.Controls.Grid.Implementation.TemplateCellInfo', 'Infragistics.Controls.Grid.Implementation.Column']
---

# {Platform} 선택

{ProductName} 데이터 표/데이터 그리드는 단일 또는 다중 행 및 셀 선택을 지원합니다.

## 데모


`sample="/grids/data-grid/cell-selection", height="600", alt="{Platform} data grid cell selection"`


<div class="divider--half"></div>

## 개요

{Platform} 데이터 그리드의 선택은 행과 셀 수준에서 활성화되며, {Platform} 그리드의 `selectionMode` 옵션을 사용하여 설정할 수 있습니다. 이 속성에는 다음과 같은 5가지 옵션이 있습니다:

- `None`: 선택이 활성화되지 않음.
- `SingleCell`: 단일 셀의 선택이 활성화됨.
- `SingleRow`: 단일 행의 선택이 활성화됨.
- `MultipleCell`: 다중 셀의 선택이 활성화됨.
- `MultipleRow`: 다중 행의 선택이 활성화됨.
- `RangeCell`: 클릭하고 드래그하여 다중 셀 범위를 선택할 수 있음.

`MultipleRow` 또는 `MultipleCell`로 설정하면 다중 행이나 셀을 선택하기 위해 CTRL 키를 누를 필요가 없습니다. 각 행이나 셀은 특정 행이나 셀을 클릭할 때 선택되거나 선택 취소됩니다.

## 코드 조각

다음은 {Platform} 데이터 그리드에서 다중 행 선택을 설정하기 위해 선택을 구성하는 방법을 보여 줍니다:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    selectionMode="MultipleRow">
</IgrDataGrid>
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      selection-mode="MultipleRow">
</igc-data-grid>
```