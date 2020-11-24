---
title: $PlatformShort$ Charts and Graphs | Data Visualization Tools | High Volume Data | Infragistics
_description: Learn how to optimize the performance of the Infragistics' $PlatformShort$ charts control. Improve the $ProductName$graph's performance!
_keywords: $PlatformShort$ charts, category chart, performance,$ProductName$, Infragistics, data binding
mentionedTypes: ['CategoryChart']
---
# $PlatformShort$ High Volume Data

The $ProductName$ category chart component is capable of handling high volumes of data, ranging into the millions of data points, as shown in the following demo.

## $PlatformShort$ High Volume Data Example
<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-high-volume-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-volume-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/category-chart/high-volume"></sample-button>

</div>

<div class="divider--half"></div>

## Performance Optimizations

There are several chart features and $PlatformShort$ specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

> [!NOTE]
> For Angular:
> When storing lots of data in properties in your components to bind against, you should make sure to set `changeDetection: ChangeDetectionStrategy.OnPush` in your `@Component` decorator. Setting this will tell $PlatformShort$ not to dig deeply into changes within your data array, something you don't want $PlatformShort$ doing every change detection cycle.

* Instead of $PlatformShort$ automatically telling the charts how they should react to data changes, its your responsibility to notify the components how the data they have been bound to has been modified.
     * Reacting to these delta notifications can be done much more efficiently than to have to compare a 1M record array for any changes, every time $PlatformShort$ runs a change detection.
     * Look for the `notify*` methods on each chart for more information about how to notify the chart of changes to the data it is bound against.
* When $PlatformShort$ is in Debug mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real world performance always make sure to serve or build with `--prod`

> Note If any performance issues are observed in your application, performance of the charts has shown improvement when run in production builds and not debug builds.  Please be sure to run production builds for these scenarios.
