---
title: {Platform} {ComponentTitle} Export to Excel - {ProductName}
_description: With {ProductName} Excel Exporter you can make client Excel functionality more convenient & simpler. This format allows features like filtering, sorting, etc.
_keywords: {Platform}, {ComponentTitle}, {ComponentTitle}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridExportExcel}
---

# {Platform} {ComponentTitle} Export to Excel Service

The {ProductName} Export to Excel Service in {Platform} {ComponentTitle} can export data to excel. The data export functionality is encapsulated in the `ExcelExporterService` class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the `Export` method of `ExcelExporterService` and pass the `{ComponentName}` component as first argument to export grid easily.

## {Platform} Excel Exporter Example


`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} Excel Exporter Example"`


<!-- Angular -->
## Exporting {ComponentTitle} Data

To start using the IgniteUI Excel Exporter first import the `ExcelExporterService` in the app.module.ts file and add the service to the `providers` array:

```ts
// app.module.ts
import { ExcelExporterService } from 'igniteui-{Platform}';

@NgModule({
  providers: [ ExcelExporterService ]
})

export class AppModule {}
```

> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

> [!Note]
> The Excel Exporter service has a peer dependency on the JSZip library. The JSZip library should be installed when using the Excel Exporter.

To initiate an export process you may use the handler of a button in your component's template.

```html
<{ComponentTitle} #{ComponentTitle} [data]="localData" [autoGenerate]="true"></{ComponentTitle}>
<button (click)="exportButtonHandler()">Export {ComponentTitle} to Excel</button>
```

```Razor
<IgbDataGrid data="localData"/>
<button @onclick="exportButtonHandler">Export to Excel</button>
```

You may access the exporter service by defining an argument of type `ExcelExporterService` in the component's constructor and the {Platform} framework will provide an instance of the service. To export some data in MS Excel format you need to invoke the exporter service's `Export` method and pass the {ComponentTitle} component as first argument.

Here is the code which will execute the export process in the component's file:

```ts
// component.ts
import { ExcelExporterService, ExcelExporterOptions } from 'igniteui-{Platform}';
import { {ComponentName} } from 'igniteui-{Platform}';

@ViewChild('{ComponentName}') public {ComponentName}: {ComponentName};

constructor(private excelExportService: ExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.{ComponentName}, new ExcelExporterOptions('ExportedDataFile'));
}
```

If all went well, you should see the {ComponentTitle} component and a button under it. When pressing the button, it will trigger the export process and the browser will download a file named "ExportedDataFile.xlsx" which contains the data from the `{ComponentName}` component in MS Excel format.
<!-- end: Angular -->

<!-- Angular -->

## Export All Data

There are some cases when you might be using remote operations like *Paging* and the Grid won't have access to all of its data. In these cases, we recommend using the [Excel Export Service](../exporter-excel.md) and pass the whole data collection, if available. Example:

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new ExcelExporterOptions('ExportedDataFile'));
}
```

<!-- end: Angular -->

<!-- ComponentStart: Grid -->
## Export Grouped Data

To export grouped data you just need to group the `{ComponentName}` by one or more columns. The browser will download a file named "ExportedDataFile.xlsx" which contains the data from the `{ComponentName}` component in MS Excel format grouped by the selected column. You can find example in the beggining of the topic.

<!-- Angular -->
`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} Grouped Data Excel Exporter Example"`
<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## Export Multi Column Headers Grid

It is now possible to export `{ComponentName}` with defined [multi-column headers](multi-column-headers.md). All headers will be reflected in the exported excel file as they are displayed in the `{ComponentName}`. If you want to exclude the defined multi-column headers from the exported data you can set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> [!Note]
> The exported `{ComponentName}` will not be formatted as a table, since Excel tables do not support multiple column headers.

`sample="/{ComponentSample}/multi-column-headers-export", height="750", alt="{Platform} {ComponentTitle} Multi Column Headers Export"`

## Export Grid with Frozen Column Headers


By default Excel Exporter service exports the grid with scrollable (unfrozen) column headers. There are scenarios in which you may want to freeze all headers on top of the exported excel file so they always stay in view as the user scrolls through the records. To achieve this you could set the `ExporterOption` `FreezeHeaders` to `true`.

<!-- Angular -->
```ts
public exportButtonHandler() {
    const exporterOptions = new ExcelExporterOptions('ExportedDataFile');
    exporterOptions.freezeHeaders = true;
    this.excelExportService.export(this.grid, exporterOptions);
}
```
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid -->
```ts
constructor() {
  var gridToolbarExporter1 = document.getElementById('gridToolbarExporter1') as IgcGridToolbarExporterComponent;
  gridToolbarExporter1.addEventListener("exportStarted", this.webGridExportEventFreezeHeaders);
}

public webGridExportEventFreezeHeaders(args: any): void {
  args.detail.options.freezeHeaders = true;
}
```
<!-- ComponentEnd: Grid, TreeGrid -->
<!-- end: WebComponents -->

<!-- WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
```ts
constructor() {
  var hGridToolbarExporter = document.getElementById('hGridToolbarExporter') as IgcGridToolbarExporterComponent;
  hGridToolbarExporter.addEventListener("exportStarted", this.webGridExportEventFreezeHeaders);
}

public webGridExportEventFreezeHeaders(args: CustomEvent<IgcExporterEvent>): void {
  args.detail.options.freezeHeaders = true;
}
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
function exportEventFreezeHeaders(args: IgrExporterEventArgs) {
    args.detail.options.freezeHeaders = true;
  }

<IgrGridToolbar>
  <IgrGridToolbarActions>
    <IgrGridToolbarExporter onExportStarted={exportEventFreezeHeaders}></IgrGridToolbarExporter>
  </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- ComponentStart: Grid, TreeGrid -->
```razor
 <{ComponentSelector}>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </{ComponentSelector}>

igRegisterScript("WebGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
 <{ComponentSelector}>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebHierarchicalGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </{ComponentSelector}>

igRegisterScript("WebHierarchicalGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

<!-- Angular -->
## Customizing the Exported Content

In the above examples the Excel Exporter service was exporting all available data. There are situations in which you may want to skip exporting a row or even an entire column. To achieve this you may hook to the `columnExporting` and/or `rowExporting` events which are fired respectively for each column and/or each row and cancel the respective event by setting the event argument object's `cancel` property to `true`.

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```ts
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.{ComponentTitle}, new ExcelExporterOptions('ExportedDataFile'));
```

When you are exporting data from the `{ComponentName}` component, the export process takes in account features like row filtering and column hiding and exports only the data visible in the `{ComponentName}`. You can configure the exporter service to include filtered rows or hidden columns by setting properties on the `ExcelExporterOptions` object.
<!-- end: Angular -->

## Known Limitations

<!-- ComponentStart: Grid -->
|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Exporting pinned columns|In the exported Excel file, the pinned columns will not be frozen but will be displayed in the same order as they appear in the grid.|
<!-- ComponentEnd: HierarchicalGrid -->

## API References

* `ExcelExporterService`
* `ExcelExporterOptions` 
* `{ComponentName}`

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
