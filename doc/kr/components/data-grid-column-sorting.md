---
제목: 반응형 데이터 그리드 | 테이블 제어 | $ProductName$ | 정렬 | Infragistics
_description: $ProductName$ Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, $ProductName$, Infragistics
_language: kr
---

# $PlatformShort$ 정렬
$ProductName$ 데이터 표/데이터 그리드는 단일 열, 다중 열 및 3상태 열의 정렬 구성으로 오름차순 및 내림차순 열 정렬을 지원합니다.

## 데모

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-column-sorting-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/column-sorting"></sample-button>

<div class="divider--half"></div>

## 정렬 형식 설정
$PlatformShort$ 데이터 그리드에서 단일 또는 다중 열을 오름차순 또는 내림차순으로 정렬할 수 있습니다. TriState가 활성화된 경우, 열에 적용된 정렬을 삭제할 수 있습니다.

- `SortByMultipleColumns`
- `SortByMultipleColumnsTriState`
- `SortByOneColumnOnly`
- `SortByOneColumnOnlyTriState`

```ts
import { HeaderClickAction } from 'igniteui-react-grids';
```
```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    headerClickAction={HeaderClickAction.SortByMultipleColumns}
    dataSource={this.data}
    ref={this.onGridRef}/>
```
```html
<igc-data-grid
    id="grid"
    height="100%"
    width="100%"
    header-click-action="SortByMultipleColumns">
</igc-data-grid>
```

## API를 사용한 정렬
```ts
import { IgrColumnSortDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
```

```ts
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
}
// ...
let colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
colSortDesc.sortDirection = ListSortDirection.Descending;
this.grid.sortDescriptions.add(colSortDesc);
```
```ts
import { IgcColumnSortDescription } from 'igniteui-webcomponents-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;

let colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
colSortDesc.sortDirection = ListSortDirection.Descending;
grid1.sortDescriptions.add(colSortDesc);
```