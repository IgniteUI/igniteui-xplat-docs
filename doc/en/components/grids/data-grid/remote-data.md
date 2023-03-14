---
title: {Platform} Data Grid | Remote Data | Infragistics
_description: Use the Infragistics {Platform} grid component's Virtual Data Source to bind remote data. View {ProductName} table tutorials!
_keywords: {Platform} Table, Data Grid, virtual data, {ProductName}, Infragistics, data binding
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Binding Virtual Data

The {ProductName} Data Table / Data Grid supports data binding to remote datasources with one line of code.  With the {Platform} data table’s Virtual Data Source, you simply configure the {Platform} grid with your remote URI and which OData Entity you’d like returned, and the {Platform} grid does the rest of the work for you.

## {Platform} Grid Binding Virtual Data Example


`sample="/grids/data-grid/binding-remote-data", height="600", alt="{Platform} Grid Binding Virtual Data Example"`



<div class="divider--half"></div>
<!-- Angular, React, WebComponents -->
In addition to the core and {Platform} data grid packages you will also have to install the datasources package.

- **npm install --save {PackageCore}**
- **npm install --save {PackageGrids}**
- **npm install --save {PackageInputs}**
- **npm install --save {PackageDataSources}**

<!-- end: Angular, React, WebComponents -->

## Component Modules

The `Grid` requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDataGridModule));
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

Now that the {Platform} data grid module is imported, the next step is the basic configuration of the {Platform} grid that binds to remote data. Create the virtual data source. Assign the url where the data will be retrieved from to the <b>baseUri</b> property. Setting the <b>entitySet</b> property will inform which table to retrieve from the virtual data source.

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

## API References

 - `Grid`