---
제목: 반응형 데이터 그리드 | 테이블 제어 | $ProductName$ | 행 그룹화 | Infragistics
_description: $ProductName$ Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, $ProductName$, Infragistics
_language: kr
---

# $Platform$ 열 그룹화

$ProductName$ 데이터 표/데이터 그리드를 사용하면 열 값을 '고정 헤더' 행 그룹으로 그룹화할 수 있습니다.  이것은 Microsoft Outlook의 그룹화 기능과 유사하며, 독자적인 기준에 따라 데이터를 시각적으로 그룹화할 수 있는 간단한 방법입니다.

## 데모


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-grouping"
           github-src="grids/data-grid/row-grouping">
</code-view>

<div class="divider--half"></div>

## API를 사용한 열 그룹화

```ts
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
```

```ts
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
}

public onLoad() {
    const desc = new IgrColumnGroupDescription();
    desc.field = "LastName";
    desc.displayName = "Last Name";
    desc.sortDirection = ListSortDirection.Descending;
    this.grid.groupDescriptions.add(desc);
}

public componentDidMount() {
    window.addEventListener('load', this.onLoad);
}
```

```ts
import { IgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';

const desc = new IgcColumnGroupDescription();
desc.field = "LastName";
desc.displayName = "Last Name";
desc.sortDirection = ListSortDirection.Descending;
grid1.groupDescriptions.add(desc);

```