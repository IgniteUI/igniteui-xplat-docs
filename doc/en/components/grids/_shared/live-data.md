---
title: Live Data updates in {Platform} {ComponentTitle} for {ProductName}
_description: Check out how the {ProductName} {ComponentTitle} can handle thousands of updates per second, while staying responsive for user interactions.
_keywords: {Platform} {ComponentKeywords} updates, {Platform} live data, infragistics
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Live Data Updates

The {Platform} `{ComponentName}` can handle thousands of updates per second, while staying responsive for user interactions.


## {Platform} Live-data Update Example

The sample below demonstrates the {ComponentTitle} performance when all records are updated multiple times per second. Use the UI controls to choose the number of records loaded and the frequency of updates.
Feed the same data into the [Column Chart](../../charts/types/column-chart.md) to experience the powerful charting capabilities of Ignite UI for Angular. The `Chart` button will show Category Prices per Region data for the selected rows and the `Chart` column button will show the same for the current row.

`sample="/{ComponentSample}/finjs", height="700", alt="{Platform} Live data Update Example"`



## Data binding and updates

A service provides data to the component when the page loads, and when the slider controller is used to fetch a certain number of records. While in a real scenario updated data would be consumed from the service, here data is updated in code. This is done to keep the demo simple and focus on its main goal - demonstrate the grid performance.

```Razor
<{ComponentSelector} Id="grid1" @ref="grid1"><{ComponentSelector}>
```

<!-- Angular -->
```html
<{ComponentSelector} [data]="data"></{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1"></{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<{ComponentSelector} id="grid1"></{ComponentSelector}>
```
<!-- end: React -->

```razor
public void OnStart()
{
    this.StartButton.Disabled = true;
    this.ShowChartButton.Disabled = true;
    this.StopButton.Disabled = false;
    var startTimeSpan = TimeSpan.Zero;
    var periodTimeSpan = TimeSpan.FromMilliseconds(Frequency);

    this.Timer = new System.Threading.Timer((e) =>
    {
        grid1.Data = this.FinancialDataClass.UpdateRandomPrices(this.CurrentStocks);
    }, null, startTimeSpan, periodTimeSpan);
}
```

```typescript
public startUpdate() {
    const frequency = (document.getElementById('frequency') as IgcSliderComponent).value;
    this._timer = setInterval(() => {
        this.grid1.data = FinancialData.updateAllPrices(this.data);
    }, frequency);
    (document.getElementById('startButton') as IgcButtonComponent).disabled = true;
    (document.getElementById('stopButton') as IgcButtonComponent).disabled = false;
    (document.getElementById('chartButton') as IgcButtonComponent).disabled = true;
}
```

<!-- React -->
```typescript
function startUpdate(frequency) {
  const timer = setInterval(() => {
    setData(prevData => FinancialDataClass.updateRandomPrices(prevData));
  }, frequency);

  setStartButtonDisabled(true);
  setShowChartButtonDisabled(true);
  setStopButtonDisabled(false);
}
```

A change in the data field value or a change in the data object/data collection reference will trigger the corresponding pipes. However, this is not the case for columns, which are bound to [complex data objects](../data-grid.md#complex-data-binding). To resolve the situation, provide a new object reference for the data object containing the property. Example:

```tsx
<{ComponentSelector} id="grid1">
    <IgrColumn field="price.usd"></IgrColumn>
</{ComponentSelector}>
```
<!-- end: React -->

A change in the data field value or a change in the data object/data collection reference will trigger the corresponding pipes. However, this is not the case for columns, which are bound to [complex data objects](../data-grid.md#complex-data-binding). To resolve the situation, provide a new object reference for the data object containing the property. Example:

```Razor
<{ComponentSelector}>
    <IgbColumn Field="price.usd"></IgbColumn>
</{ComponentSelector}>
```

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data">
    <igx-column field="price.usd"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1">
    <igc-column field="price.usd"></igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```typescript
private updateData(data: any[]) {
    const newData = []
    for (const rowData of data) {
        rowData.price = { usd: getUSD(), eur: getEUR() };
        newData.push({...rowData});
    }
    this.grid.data = newData;
}
```

```razor
 grid1.Data = this.FinancialDataClass.UpdateRandomPrices(this.CurrentStocks);
```

## Templates
Updating the view works the same way for columns with a default template and for columns with a custom template. However, it is recommended to keep custom templates relatively simple. As number of elements in the template grows, negative performance impact rises as well.

<!-- Angular -->
## Live-data feed with Dock Manager and igxGrid Components
The purpose of this demo is to showcase a financial screen board with Real-time data stream using a [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) hub back-end.
As you can see the igxGrid component handles with ease the high-frequency updates from the server. The code for the ASP.NET Core application using SignalR could be found in this [public GitHub repository](https://github.com/IgniteUI/finjs-web-api).
`sample="/{ComponentSample}/finjs-dock-manager", height="700", alt="{Platform} {ComponentTitle} Live data Update Example with a service"`




### Start the hub connection

The signal-r.service handles the connectivity and updates of the exposed manageable parameters *frequency*, *volume* and *live-update state toggle* (Start/Stop).

```ts
this.hubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
        .build();
    this.hubConnection
        .start()
        .then(() => {
            this.hasRemoteConnection = true;
            this.registerSignalEvents();
            this.broadcastParams(interval, volume, live, updateAll);
        })
        .catch(() => {});
```

Based on the specified frequency a total of 30 new updates will be received by the Grids from the server. A specific cellStyle classes are applied to the three columns that are handling the changes (Price, Change and Change in percent).

### Update frequency and data volume

By using the Action panel on the left, you can manage the frequency of the data feed and the volume of the requested data. All grids use the same data source. Feel free to use the other action elements to *stop the data feed*, change the *application theme* or add *dynamically a DockSlot container* with a igxGrid.

We use the `updateParameters` method to request a new set of data with certain frequency. This method is part of the SignalR [stream hub implementation](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Models/StreamHub.cs#L18).

```ts
this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
    .then(() => console.log('requestLiveData', volume))
    .catch(err => {
        console.error(err);
    });
```

### Dynamically create DockSlot and Grid components

By using the [ComponentFactoryResolver](https://angular.io/api/core/ComponentFactoryResolver) we are able to create DockSlot and Grid components on the fly.

### DockManager component
Take leverage of the [Dock Manager](../../layouts/dock-manager.md) WebComponent and build your own webview by using the docket or floating panels. In order to add a new floating panel, go ahead and open the Action pane on the right and click the 'Add floating pane' button. Drag and drop the new pane at the desired location.

<!-- end: Angular -->


## API References
* `{ComponentName}`
* `Cell`

## Additional Resources
<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})


