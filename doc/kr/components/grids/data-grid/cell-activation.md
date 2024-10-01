---
title: 반응형 데이터 그리드 | 테이블 제어 | {ProductName} | 셀 활성화 | Infragistics
_description: {ProductName} Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, {ProductName}, Infragistics
_language: kr
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid","Infragistics.Controls.Grid.Implementation.CellInfo", "Infragistics.Controls.Grid.Implementation.TemplateCellInfo", "Infragistics.Controls.Grid.Implementation.Column"]
---

# {Platform} 셀 활성화

{ProductName} 데이터 표/데이터 그리드는 그리드 셀을 통한 키보드 탐색을 가능하게 하는 셀 활성화 기능을 지원합니다. 그리드의 `ActivationMode` 속성을 `Cell`에 설정함으로써 활성화됩니다.

## 데모


`sample="/grids/data-grid/cell-activation", height="600", alt="{Platform} data grid cell activation"`


<div class="divider--half"></div>

## 키보드 탐색

그리드의 `ActivationMode` 속성을 `Cell`에 설정하면 그리드에서 다양한 키보드 탐색 옵션을 사용할 수 있습니다. 아래는 현재 활성화된 셀에 대한 키 누름/조합과 그 효과에 대한 설명입니다.

- <kbd>위 화살표 키</kbd>: 한 셀 위로 이동합니다.
- <kbd>아래 화살표 키</kbd>: 한 셀 아래로 이동합니다.
- <kbd>왼쪽 화살표 키</kbd>: 현재 행에서 셀을 하나 왼쪽으로 이동합니다.
- <kbd>오른쪽 화살표 키</kbd>: 현재 행에서 셀을 하나 오른쪽으로 이동합니다.
- <kbd>Page Up</kbd>: 그리드를 한 뷰포트 페이지 위로 스크롤합니다.
- <kbd>Page Down</kbd>: 그리드를 한 뷰포트 페이지 아래로 스크롤합니다.
- <kbd>Tab</kbd>: 활성화 셀을 오른쪽의 다음 셀로 이동하거나 해당 행의 마지막 셀에 도달한 경우, 다음 행의 가장 왼쪽 셀로 이동합니다.
- <kbd>Shift</kbd> + <kbd>Tab</kbd>: 활성화 셀을 왼쪽의 다음 셀로 이동하거나 이전 행의 첫 번째 셀에 도달한 경우, 이전 행의 가장 오른쪽 셀로 이동합니다.
- <kbd>Ctrl</kbd> + <kbd>위 화살표 키</kbd>: 열의 가장 위 셀로 이동합니다.
- <kbd>Ctrl</kbd> + <kbd>아래 화살표 키</kbd>: 열의 가장 아래 셀로 이동합니다.
- <kbd>Ctrl</kbd> + <kbd>왼쪽 화살표 키</kbd>: 열의 가장 왼쪽 셀로 이동합니다.
- <kbd>Ctrl</kbd> + <kbd>오른쪽 화살표 키</kbd>: 열의 가장 오른쪽 셀로 이동합니다.
- <kbd>Ctrl</kbd> + <kbd>Home</kbd>: 그리드의 왼쪽 위 셀로 이동합니다.
- <kbd>Ctrl</kbd> + <kbd>End</kbd>: 그리드의 오른쪽 아래 셀로 이동합니다.

## 코드 조각

다음은 그리드에서 셀 활성화를 구현하는 방법을 보여 줍니다:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    activationMode="Cell" />
```

```html
 <igc-data-grid id="grid"
      height="100%"
      width="100%"
      activation-mode="Cell">
    </igc-data-grid>
```