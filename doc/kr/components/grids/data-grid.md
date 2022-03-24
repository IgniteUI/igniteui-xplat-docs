---
title: 반응형 데이터 그리드 | 테이블 제어 | $ProductName$ | Infragistics
_description: $ProductName$ Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, $ProductName$, Infragistics
_language: kr
---
# $Platform$ $Platform$ 표/그리드

$ProductName$ 데이터 표/데이터 그리드는 표 형식의 $Platform$ 컴포넌트로 거의 코딩이나 설정 없이 데이터를 빠르게 바인딩하여 표시할 수 있습니다. $Platform$ 데이터 그리드의 기능에는 필터링, 정렬, 템플릿, 행 선택, 행 그룹화, 행 핀 고정, 열 이동이 있습니다.  $Platform$ 데이터 표는 라이브 스트리밍 데이터에 최적화되어 있으며, 복수의 행 또는 열에서 무제한으로 데이터 세트 크기를 처리할 수 있습니다.

## 데모


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-overview"
           github-src="grids/data-grid/overview">
</code-view>

<div class="divider--half"></div>

## 의존성
$Platform$ 그리드 패키지를 설치할 때 코어 패키지도 설치해야 합니다.

- **npm install --save {PackageCore}**
- **npm install --save {PackageGrids}**
- **npm install --save {PackageInputs}**

## 필요한 모듈

`Grid`에는 다음 모듈이 필요합니다:


```ts
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';

IgrDataGridModule.register();
```
```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';

ModuleManager.register(
    IgcDataGridModule
)
```
<div class="divider--half"></div>

## 사용 방법
$Platform$ 데이터 그리드 모듈을 가져 왔으므로 다음은 로컬 데이터에 바인딩하는 $Platform$ 그리드의 기본 설정입니다.

```ts
    this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
    }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
    }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
    }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antony Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
    }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antony Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
    }];

```

다음의 코드는 $Platform$ 데이터 그리드를 상기의 데이터에 바인딩하는 방법을 보여줍니다.

자동 생성된 열:
```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    autoGenerateColumns="true"
    dataSource={this.data}/>
```
```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      auto-generate-columns="false">
</igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
```

열의 수동 정의:
```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    autoGenerateColumns="false"
    dataSource={this.data}>
    <IgrNumericColumn field="ProductID" headerText="Product ID"/>
    <IgrTextColumn field="ProductName" headerText="Product Name"/>
    <IgrTextColumn field="QuantityPerUnit" headerText="Quantity Per Unit"/>
    <IgrNumericColumn field="UnitsInStock" headerText="Units In Stock"/>
    <IgrDateTimeColumn field="OrderDate" headerText="Order Date"/>
</IgrDataGrid>
```

```html
<igc-data-grid id="grid"
    width="100%"
    height="500px"
    auto-generate-columns="false">
        <igc-numeric-column id="ProductID"></igc-numeric-column>
        <igc-text-column id="ProductName"></igc-text-column>
        <igc-text-column id="QuantityPerUnit"></igc-text-column>
        <igc-numeric-column id="UnitsInStock"></igc-numeric-column>
        <igc-date-time-column id="OrderDate"></igc-date-time-column>
    </igc-data-grid>
```

```ts
import { IgcTextColumnComponent } from 'igniteui-webcomponents-grids';
import { IgcNumericColumnComponent } from 'igniteui-webcomponents-grids';
import { IgcDateTimeColumnComponent } from 'igniteui-webcomponents-grids';

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;

let ProductIDColumn = (document.getElementById("ProductID") as IgcNumericColumnComponent);
ProductIDColumn.field = "ProductID";
ProductIDColumn.headerText = "Product ID" ;

let ProductNameTextColumn = (document.getElementById("ProductName") as IgcTextColumnComponent);
ProductNameTextColumn.field = "ProductName";
ProductNameTextColumn.headerText = "Product Name" ;

let QuantityPerUnitTextColumn = (document.getElementById("QuantityPerUnit") as IgcTextColumnComponent);
QuantityPerUnitTextColumn.field = "QuantityPerUnit";
QuantityPerUnitTextColumn.headerText = "Quantity PerUnit" ;

let UnitsInStockColumn = (document.getElementById("UnitsInStock") as IgcNumericColumnComponent);
UnitsInStockColumn.field = "UnitsInStock";
UnitsInStockColumn.headerText = "Units InStock" ;

let DateColumn = (document.getElementById("OrderDate") as IgcDateTimeColumnComponent);
DateColumn.field = "OrderDate";
DateColumn.headerText = "Order Date" ;
```