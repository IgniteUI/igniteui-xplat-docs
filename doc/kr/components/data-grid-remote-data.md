---
제목: 반응형 데이터 그리드 | 테이블 제어 | $ProductName$ | 원격 데이터 바인딩 | Infragistics
_description: $ProductName$ Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: grid, table, $ProductName$, Infragistics
_language: kr
---
# $PlatformShort$ 가상 데이터 소스

$ProductName$ 데이터 표/데이터 그리드는 하나의 코드 행으로 원격 데이터 소스에의 바인딩을 지원합니다.  $PlatformShort$ 데이터 표의 가상 데이터 소스를 사용하면 원격 URI와 반환할 OData 엔터티로 $PlatformShort$ 그리드를 설정하는 것만으로 $PlatformShort$ 그리드가 나머지 작업을 실행합니다.

## 데모


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-binding-remote-data"  
           github-src="grids/data-grid/binding-remote-data">
</code-view>

<div class="divider--half"></div>

## 의존성
코어 및 $PlatformShort$ 데이터 그리드 패키지 외에도 데이터 소스 패키지를 설치해야 합니다.

- **npm install --save {PackageCore}**
- **npm install --save {PackageGrids}**
- **npm install --save {PackageInputs}**
- **npm install --save {PackageDataSources}**

## 필요한 모듈

`Grid`에는 다음 모듈이 필요합니다:

```ts
import './odatajs-4.0.0';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { ODataVirtualDataSource } from 'igniteui-react-datasources';

IgrDataGridModule.register();
```
```ts
import './odatajs-4.0.0';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
import { ODataVirtualDataSource } from 'igniteui-webcomponents-dataSource';

ModuleManager.register(
    IgcDataGridModule
    )

```
<div class="divider--half"></div>

## 사용 방법
$PlatformShort$ 데이터 그리드 모듈을 가져 왔으므로 다음 단계는 원격 데이터에 바인딩하는 $PlatformShort$ 그리드의 기본 설정입니다. 가상 데이터 소스를 생성합니다. 데이터를 검색할 URL을 `baseUri` 속성에 할당합니다. `entitySet` 속성을 설정하면 가상 데이터 소스에서 검색할 테이블을 알 수 있습니다.

```ts
private virtualData: ODataVirtualDataSource;
// ...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```
```ts
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = vds;
```

데이터 소스를 그리드에 할당합니다.
```tsx
<IgrDataGrid
    width="100%"
    height="100%"
    defaultColumnMinWidth={120}
    dataSource={this.virtualData}/>
```

```html
<igc-data-grid id="grid"
    width="100%"
    height="100%"
    default-column-min-width=200>
</igc-data-grid>
```