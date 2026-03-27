---
title: {Platform} {ComponentTitle} Exporting - {ProductName}
_description: With {ProductName} {ComponentTitle} exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: {Platform}, {ComponentTitle}, {ComponentTitle}, {ProductName}, Infragistics
_license: commercial
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridExportExcel}
---

# {Platform} {ComponentTitle} Exporting

<!-- Blazor, React, WebComponents -->
The {ProductName} {ComponentTitle} provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the `GridToolbarExporter` inside the grid's toolbar. By default, all export formats are enabled.
<!-- end: Blazor, React, WebComponents  -->

<!-- Angular -->
The {ProductName} export services in {Platform} {ComponentTitle} can export data to Excel and PDF formats. The exporting functionality is encapsulated in the `ExcelExporterService` and `PdfExporterService` classes. Excel exports use the MS Excel table format, which supports features like filtering and sorting, while PDF exports capture the current state of the grid. To start an export, invoke the `Export` method of `ExcelExporterService` or `PdfExporterService` and pass the `{ComponentName}` component as the first argument.
<!-- end: Angular -->

## {Platform} Exporting Example

`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} Exporting Example"`


<!-- Angular -->
## Exporting {ComponentTitle} Data

To start using the IgniteUI Excel and PDF exporters, first import the `ExcelExporterService` and/or `PdfExporterService` in the app.module.ts file and add the services to the `providers` array:

```ts
// app.module.ts
import { ExcelExporterService, PdfExporterService } from 'igniteui-{Platform}';

@NgModule({
  providers: [ ExcelExporterService, PdfExporterService ]
})

export class AppModule {}
```

> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

To initiate an export, you can use the handler of a button in your component's template.

```html
<{ComponentTitle} #{ComponentTitle} [data]="localData" [autoGenerate]="true"></{ComponentTitle}>
<button (click)="exportButtonHandler()">Export {ComponentTitle} to Excel</button>
<button (click)="exportPdfButtonHandler()">Export {ComponentTitle} to PDF</button>
```

```Razor
<IgbDataGrid data="localData"/>
<button @onclick="exportButtonHandler">Export to Excel</button>
<button @onclick="exportPdfButtonHandler">Export to PDF</button>
```

You can access the exporter services by defining constructor arguments of type `ExcelExporterService` or `PdfExporterService`, and the {Platform} framework will provide instances of the services. To export data to Excel or PDF, invoke the `Export` method and pass the {ComponentTitle} component as the first argument.

The following code executes the export processes in the component file:

```ts
// component.ts
import { ExcelExporterService, ExcelExporterOptions, PdfExporterService, PdfExporterOptions } from 'igniteui-{Platform}';
import { {ComponentName} } from 'igniteui-{Platform}';

@ViewChild('{ComponentName}') public {ComponentName}: {ComponentName};

constructor(private excelExportService: ExcelExporterService, private pdfExportService: PdfExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.{ComponentName}, new ExcelExporterOptions('ExportedDataFile'));
}

public exportPdfButtonHandler() {
  this.pdfExportService.export(this.{ComponentName}, new PdfExporterOptions('ExportedDataFile'));
}
```

If all went well, you should see the {ComponentTitle} component and the two export buttons. When you press the respective button, it triggers the export process and the browser downloads a file named "ExportedDataFile.xlsx" or "ExportedDataFile.pdf" containing the data from the `{ComponentName}` component in Excel or PDF format.
<!-- end: Angular -->

<!-- Angular -->

## Export All Data

When you use remote operations like **paging**, the Grid might not have access to the full data set at once. In these cases, we recommend using the [Excel Export Service](../exporter-excel.md) and passing the entire data collection, if available. Example:

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new ExcelExporterOptions('ExportedDataFile'));
}
```

When offering PDF downloads for remote data, consider fetching the complete data set first and then calling `export` so the document mirrors what users expect to see.

<!-- end: Angular -->

<!-- ComponentStart: Grid -->
## Export Grouped Data

To export grouped data, group the `{ComponentName}` by one or more columns. The browser will download a file named "ExportedDataFile.xlsx" that contains the data from the `{ComponentName}` component in Excel format, grouped by the selected columns. You can find an example at the beginning of the topic.

<!-- Angular -->
`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} Grouped Data Excel Exporter Example"`
<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## Export Multi Column Headers Grid

You can export `{ComponentName}` with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the `{ComponentName}`. If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> [!Note]
> The exported `{ComponentName}` will not be formatted as a table, since Excel tables do not support multiple column headers.

> [!Note]
> `GridToolbarExporter` is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
> <!-- WebComponents -->
> - `export-excel`, `export-csv`, `export-pdf`
> <!-- end: WebComponents -->
> <!-- Angular, React -->
> - `exportExcel`, `exportCsv`, `exportPdf`
> <!-- end: Angular, React -->
> <!-- Blazor -->
> - `ExportExcel`, `ExportCsv`, `ExportPdf`
> <!-- end: Blazor -->

`sample="/{ComponentSample}/multi-column-headers-export", height="750", alt="{Platform} {ComponentTitle} Multi Column Headers Export"`

## Export Grid with Frozen Column Headers


By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` `FreezeHeaders` to `true`.

> [!Note]
> PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

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

In the examples above, the Excel Exporter service exports all available data. There are situations in which you may want to skip exporting a row or even an entire column. To achieve this, subscribe to the `columnExporting` and/or `rowExporting` events, which are fired for each column and each row respectively, and cancel the event by setting the event argument object's `cancel` property to `true`.

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

When you are exporting data from the `{ComponentName}` component, the export process takes into account features like row filtering and column hiding and exports only the data visible in the `{ComponentName}`. You can configure the exporter service to include filtered rows or hidden columns by setting properties on the `ExcelExporterOptions` or `PdfExporterOptions` object.
<!-- end: Angular -->

## Known Limitations

<!-- ComponentStart: Grid -->
|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Exporting pinned columns|In the exported Excel file, the pinned columns will not be frozen but will be displayed in the same order as they appear in the grid.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|
<!-- ComponentEnd: HierarchicalGrid -->

## API References

<!-- Angular -->
- `ExcelExporterService`
- `ExcelExporterOptions`
- `PdfExporterService`
- `PdfExporterOptions`
<!-- end: Angular -->
- `{ComponentName}`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
