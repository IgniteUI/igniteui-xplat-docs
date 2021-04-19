---
title: $Platform$ Charts and Graphs | Data Visualization Tools | Real Time Data | Infragistics
_description: Render millions of data points using Infragistics' $Platform$ charts control at super fast speed. Check out the $ProductName$ graph's high performance!
_keywords: $Platform$ charts, category chart, performance, $ProductName$, Infragistics, data binding
mentionedTypes: ['CategoryChart']
---
# $Platform$ Real Time Data

The $ProductName$ category chart component is capable of handling high volumes of data, ranging into the millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

## $Platform$ Real Time Data Example

<code-view style="height: 500px;"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="$Platform$ Real Time Data Example"
           github-src="charts/category-chart/high-frequency">
</code-view>

<div class="divider--half"></div>

## Performance Optimizations

There are several chart features and $Platform$ specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

> [!NOTE]
> For Angular:
> When storing lots of data in properties in your components to bind against, you should make sure to set `changeDetection: ChangeDetectionStrategy.OnPush` in your `@Component` decorator. Setting this will tell $Platform$ not to dig deeply into changes within your data array, something you don't want $Platform$ doing every change detection cycle.

* Instead of $Platform$ automatically telling the charts how they should react to data changes, its your responsibility to notify the components how the data they have been bound to has been modified.
     * Reacting to these delta notifications can be done much more efficiently than to have to compare a 1M record array for any changes, every time $Platform$ runs a change detection.
     * Look for the `notify*` methods on each chart for more information about how to notify the chart of changes to the data it is bound against.
* When $Platform$ is in Debug mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real would performance always make sure to serve or build with `--prod`

> Note If any performance issues are observed in your application, performance of the charts has shown improvement when run in production builds and not debug builds. Please be sure to run production builds for these scenarios.
