---
title: $PlatformShort$ Data Grid | Remote Data | Infragistics
_description: Use the Infragistics $PlatformShort$ grid component's Virtual Data Source to bind remote data. View $ProductName$ table tutorials!
_keywords: $PlatformShort$ Table, Data Grid, virtual data, $ProductName$, Infragistics, data binding
mentionedTypes: ['Grid']
---
# $PlatformShort$ Grid Binding Virtual Data

The $ProductName$ Data Table / Data Grid supports data binding to remote datasources with one line of code.  With the $PlatformShort$ data table’s Virtual Data Source, you simply configure the $PlatformShort$ grid with your remote URI and which OData Entity you’d like returned, and the $PlatformShort$ grid does the rest of the work for you.

## $PlatformShort$ Grid Binding Virtual Data Example

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-binding-remote-data-iframe" src='{environment:demosBaseUrl}/grids/data-grid-binding-remote-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Grid Binding Virtual Data Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-binding-remote-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<sample-button src="grids/data-grid/binding-remote-data"></sample-button>

<div class="divider--half"></div>



<!-- Angular, React, WebComponents -->
In addition to the core and $PlatformShort$ data grid packages you will also have to install the datasources package.

- **npm install --save {PackageCore}**
- **npm install --save {PackageGrids}**
- **npm install --save {PackageInputs}**
- **npm install --save {PackageDataSources}**

<!-- end: Angular, React, WebComponents -->

## Required Modules

The `Grid` requires the following modules:

```razor
DataGridModule
```

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

## Code Snippet

Now that the $PlatformShort$ data grid module is imported, the next step is the basic configuration of the $PlatformShort$ grid that binds to remote data. Create the virtual data source. Assign the url where the data will be retrieved from to the <b>baseUri</b> property. Setting the <b>entitySet</b> property will inform which table to retrieve from the virtual data source.

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

Assign the data source to the grid.

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