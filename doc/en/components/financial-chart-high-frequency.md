---
title: $Platform$ Financial Chart | Real Time Data | Infragistics
_description: Render millions of data points using Infragistics' $Platform$ financial chart control at super fast speed. Check out the $ProductName$ graph's high performance!
_keywords: $Platform$ charts, financial chart, stock chart, data binding, $ProductName$, Infragistics
mentionedTypes: ['FinancialChart']
---
# $Platform$ Binding Real-Time Data

The $Platform$ financial chart component is very fast control that can handle rendering of data in real-time. The following demo shows how the financial chart component is capable of handling high frequency of data updates.

## $Platform$ Binding Real-Time Data Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency"
           alt="$Platform$ Binding Real-Time Data Example"
           github-src="charts/financial-chart/high-frequency">
</code-view>

<div class="divider--half"></div>


## Code Example

You can create the $Platform$ financial chart component with high frequency data updates by removing the first data item from your data source and appending a new data item to end of your data. Also, you should call `NotifyRemoveItem` and `NotifyInsertItem` functions to notify the chart about changes. Also, you can look for more "notify" methods on the financial chart to get more information about how to notify the chart of changes to the data it is bound against.

<!-- Blazor -->
Note, if you are binding your data source to an ObservableCollection or another collection that implements INotifyCollectionChanged, it is not necessary to call `NotifyRemoveItem` or `NotifyInsertItem` when adding or removing items.
<!-- end: Blazor -->

The following example demonstrates how to notify Financial Chart control about high frequency data updates:
```

```ts
private tick(): void {
    const newVal = this.getValue();
    const oldVal = this.data[0];

    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);

    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);
}
```

```razor
var oldItem = this.DataSource[0];
var newItem = this.GetNewItem();

this.DataSource.Add(newItem.FirstOrDefault());
this.Chart.NotifyInsertItem(this.DataSource, this.DataSource.Count - 1, newItem);

this.DataSource.RemoveAt(0);
this.Chart.NotifyRemoveItem(this.DataSource, 0, oldItem);
```

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Chart Performance](financial-chart-performance.md)
* [Binding High Volume Data](financial-chart-high-volume.md)
* [Binding Multiple Data Sources](financial-chart-multiple-data.md)

