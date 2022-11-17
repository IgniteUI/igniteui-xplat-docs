---
title: 반응형 데이터 그리드 | 테이블 제어 | {ProductName} | 페이징 | Infragistics
_description: {ProductName} Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, {ProductName}, Infragistics, paging
_language: kr
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid','Infragistics.Controls.Grid.Implementation.CellInfo', 'Infragistics.Controls.Grid.Implementation.TemplateCellInfo', 'Infragistics.Controls.Grid.Implementation.Column']
---

# {Platform} 페이징

페이징은 현재 {ProductName} 데이터 표/데이터 그리드 내에서 구현되지 않지만 데이터 소스를 동적으로 전환하면 유사한 결과를 얻을 수 있습니다.

## 데모


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-paging"
           github-src="grids/data-grid/row-paging">
</code-view>

<div class="divider--half"></div>

## 개요

위의 데모에서는 페이징이 {ProductName} 데이터 그리드에 내장되어 있지 않으므로 데이터 배열을 조합하여 그 데이터의 일부를 페이지로서 출력하도록 설계된 사용자 페이저 컴포넌트를 생성했습니다.  이 페이지 데이터는 {ProductName} 데이터 그리드에 제공되어 자동으로 새로운 데이터를 표시합니다.

> [!NOTE]
>
> 페이저 컴포넌트의 소스 코드는 {ProductName} 다운로드에서 사용할 수 있습니다.

페이저 컴포넌트는 정렬, 그룹화 및 필터링 등을 지원하기 위해 데이터 소스의 자체 버전을 유지합니다.  정렬, 그룹 또는 필터링이 {ProductName} 데이터 그리드에 추가되면 페이저 내의 데이터 소스의 내부 버전이 일치하는 정렬, 그룹 또는 필터링으로 업데이트됩니다.  그런 다음, 데이터 소스는 이를 기반으로 데이터 보기를 변경하고 이것을 반영하도록 업데이트 된 데이터를 제공합니다.

위의 데모에서 이 페이저 컴포넌트를 사용하는 방법은 다음과 같습니다:

```tsx
<div>
    <IgrDataGrid
        ref={this.onGridRef}
        sortDescriptionsChanged={this.onSortChanged}
        groupDescriptionsChanged={this.onGroupChanged}
        filterExpressionsChanged={this.onFilterChanged}>
    </IgrDataGrid>
    <Pager
        ref={this.onPagerRef}
        dataSource={this.data}
        pageSize={20}
        pagedChanged={this.onPageChanged}/>
</div>
```

```ts
private data: any[];

constructor(props: any) {
    super(props);

    this.onGridRef = this.onGridRef.bind(this);
    this.onPagerRef = this.onPagerRef.bind(this);
    this.data = SharedData.getEmployees();
}

public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
}

public onPageRef(pager: Pager) {
    this.pager = pager;
}

private onSortChanged = () => {
    if (this.pager) {
        this.pager.applySorts(this.grid.sortDescriptions);
    }
}

private onGroupChanged = () => {
    if (this.pager) {
        this.pager.applyGroups(this.grid.groupDescriptions);
    }
}

private onFilterChanged = () => {
    if (this.pager) {
        this.pager.applyFilters(this.grid.filterExpressions);
    }
}

private onPageChanged = (pageNumber: number, data: any[]) => {
    this.grid.dataSource = data;
    this.grid.flush();
    this.grid.scrollToRowByIndex(0);
};
```

페이저 컴포넌트의 `pageChanged` 이벤트는 페이지를 변경하면 알려주며 새로운 페이지의 데이터를 제공합니다.  샘플은 이 데이터를 가져와서 표시하기 위해 그리드에 전달합니다.
