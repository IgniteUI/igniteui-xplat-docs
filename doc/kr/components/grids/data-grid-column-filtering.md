---
title: 반응형 데이터 그리드 | 테이블 제어 | $ProductName$ | 필터링 | Infragistics
_description: $ProductName$ Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, $ProductName$, Infragistics
_language: kr
---

# $Platform$ 열 필터 API

$ProductName$ 데이터 표/데이터 그리드에는 필터링되는 열의 데이터 유형을 기반으로 정렬 조건을 실행할 수 있는 열 필터 API가 포함되어 있습니다.

## 데모


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filtering"
           github-src="grids/data-grid/column-filtering">
</code-view>

<div class="divider--half"></div>

## API를 통한 필터링
FilterExpression 및 FilterFactory를 불러와서 필터 컬렉션을 생성할 수 있습니다.
```ts
import { FilterExpression } from 'igniteui-react-core';
import { FilterFactory } from 'igniteui-react-core';
```

```ts
import { FilterExpression } from 'igniteui-webcomponents-core';
import { FilterFactory } from 'igniteui-webcomponents-core';
```

필터 컬렉션에 추가하기 위한 FilterExpression을 생성합니다.
```ts
public grid: IgrDataGrid;
public filterText: string = "New York";
public filterMode: string = "Contains";
public filterColumn: string = "City";
public filterFactory: FilterFactory;
// ...
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    this.applyFilter();
}

public onFilterTextChanged = (e: any) => {
    this.filterText = e.target.value;
    this.setState({filterText: e.target.value});
    this.applyFilter();
}

public onFilterModeChanged = (e: any) => {
    this.filterMode = e.target.value;
    this.setState({filterMode: e.target.value});
    this.applyFilter();
}

public onFilterColumnChanged = (e: any) => {
    this.filterColumn = e.target.value;
    this.setState({filterColumn: e.target.value});
    this.applyFilter();
}

public applyFilter()
{
    if (this.filterText === "") {
        return;
    }

    this.filterFactory = new FilterFactory();

    const expression = this.filterText.toUpperCase();
    const column = this.filterFactory.property(this.filterColumn).toUpper();

    let filter: FilterExpression;
    if (this.filterMode === "Contains")
    {
        filter = column.contains(expression)
    }
    else if (this.filterMode === "StartsWith")
    {
        filter = column.startsWith(expression);
    }
    else // if (this.filterMode === "EndsWith")
    {
        filter = column.endsWith(expression);
    }

    this.grid.filterExpressions.clear();
    this.grid.filterExpressions.add(filter);
}
```

```ts
private grid: IgcDataGridComponent;
private filterText : string = "";
private filterMode : string = "Contains";
private filterColumn : string = "Name";
private filterFactory : FilterFactory;
// ...

 this.grid = document.getElementById("grid") as IgcDataGridComponent;

document.getElementById("filterColumnDropDown").addEventListener("change", this.onFilterColumnDropDownValueChanged);
document.getElementById("filterModeDropDown").addEventListener("change", this.onFilterModeDropDownValueChanged);
document.getElementById("filterTextBox").addEventListener("change", this.onFilterTextBoxTextChanged);

 public onFilterColumnDropDownValueChanged() {
        let dropDown = document.getElementById("filterColumnDropDown") as any;
        this.filterColumn = dropDown.value;
        this.applyFilter();
    }

    public onFilterModeDropDownValueChanged() {
        let dropDown = document.getElementById("filterModeDropDown") as any;
        this.filterMode = dropDown.value;
        this.applyFilter();
    }

    public onFilterTextBoxTextChanged() {
        let textBox = document.getElementById("filterTextBox") as any;
        this.filterText = textBox.value;
        this.applyFilter();
    }

    public applyFilter(){
        this.grid.filterExpressions.clear();
        if (this.filterText === "" || this.filterText === null) {
            return;
        }

        this.filterFactory = new FilterFactory();
        const expression = this.filterText.toUpperCase();
        const column = this.filterFactory.property(this.filterColumn).toUpper();

        let filter: FilterExpression;
        if (this.filterMode === "Contains")
        {
            filter = column.contains(expression)
        }
        else if (this.filterMode === "StartsWith")
        {
            filter = column.startsWith(expression);
        }
        else // if (this.filterMode === "EndsWith")
        {
            filter = column.endsWith(expression);
        }

        this.grid.filterExpressions.add(filter);
    }

```
