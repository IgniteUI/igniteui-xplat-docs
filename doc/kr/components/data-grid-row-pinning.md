---
제목: 반응형 데이터 그리드 | 테이블 제어 | $ProductName$ | 행 핀 고정 | Infragistics
_description: $ProductName$ Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, $ProductName$, Infragistics
_language: kr
---

# $PlatformShort$ 행 핀 고정

 $ProductName$ 데이터 표/데이터 그리드는 키 또는 기본 데이터 소스 항목을 사용하여 행 핀 고정을 가능하게 합니다. 행이 핀 고정되면 그리드 상단에 복제되고 연한 회색 배경으로 고정되며 실제 행은 낮은 불투명도로 렌더링됩니다.

## 데모

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
<sample-button src="grids/data-grid/row-pinning"></sample-button>

<div class="divider--half"></div>

대상 행의 기본 데이터 항목을 $PlatformShort$ 그리드의 pinnedItems 컬렉션에 추가하여 $PlatformShort$ 데이터 그리드의 행을 핀 고정할 수 있습니다.

## API를 사용한 행 핀 고정

```ts
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    this.grid.pinnedItems.add(this.data[2]);
    this.grid.pinnedItems.add(this.data[4]);
}
```

```html
   <igc-data-grid id="grid"
    width="100%"
    height="100%">
    </igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
grid1.pinnedItems.add(data[2]);
grid1.pinnedItems.add(data[4]);
```
