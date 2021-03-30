---
title: $PlatformShort$ Line Charts and Graphs | $ProductName$
_description: The $PlatformShort$ Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds. Try for FREE.
_keywords: $PlatformShort$ Charts, Line Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "Legend", "PolarLineSeries", "RadialLineSeries", "StackedLineSeries", "Stacked100LineSeries"]
---
# $PlatformShort$ Line Chart

$PlatformShort$ Line Chart, or Line Graph, is a type of category line graph that shows the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

With multiple series, our $PlatformShort$ Line Chart requires more visual indicators for end-users to easily perceive what data is displayed. To improve the experience, we need to add a legend for the multiple series. First, we will add a legend object to our application and then we will set it to the `Legend` property of the $PlatformShort$ `XamCategoryChart`. This gives the benefit for our users to more easily comprehend what data set each line corresponds to.

## $PlatformShort$ Line Chart Example

In the following example, the line chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-legend"
           alt="$PlatformShort$ Line Chart With Legend" >
</code-view>

<div class="divider--half"></div>

## Are $PlatformShort$ Line Charts right for your project?

- Different than an [area chart](area-chart.md), the line chart does not fill the area between the X-Axis (bottom axis) and the line.
- The $PlatformShort$ line chart is identical to the $PlatformShort$ [spline chart](spline-chart.md) in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Layered Line Chart
- Stacked Line Chart
- Stepped Line Chart
- Polar Line Chart
- Stacked 100 Line Chart

### There are several use cases for Line Charts. When you:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming and Drill-down.
- Need to compare the trends over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize detailed time-series data.

### Line Chart Best Practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data  from left to right.
- Use visual attributes like solid lines to show a series of data.

### Do not Use Line Charts When:

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period), it makes overlapped lines impossible to differentiate.

### Data Structure:

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source must contain at least one data item.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

<!-- The following code snippet demonstrates a sample data source that can be used to create a Line Chart:

```razor
public class EnergyRenewableData : List<EnergyRenewableInfo>
{
    public EnergyRenewableData()
    {
        Add(new EnergyRenewableInfo { Year = "2009", Europe = 31, USA = 19, China = 21 });
        Add(new EnergyRenewableInfo { Year = "2010", Europe = 43, USA = 24, China = 26 });
        Add(new EnergyRenewableInfo { Year = "2011", Europe = 66, USA = 28, China = 29 });
        Add(new EnergyRenewableInfo { Year = "2012", Europe = 69, USA = 26, China = 32 });
        Add(new EnergyRenewableInfo { Year = "2013", Europe = 58, USA = 38, China = 47 });
        Add(new EnergyRenewableInfo { Year = "2014", Europe = 40, USA = 31, China = 46 });
        Add(new EnergyRenewableInfo { Year = "2015", Europe = 78, USA = 19, China = 50 });
        Add(new EnergyRenewableInfo { Year = "2016", Europe = 13, USA = 52, China = 90 });
        Add(new EnergyRenewableInfo { Year = "2017", Europe = 78, USA = 50, China = 132 });
        Add(new EnergyRenewableInfo { Year = "2018", Europe = 40, USA = 34, China = 134 });
        Add(new EnergyRenewableInfo { Year = "2019", Europe = 80, USA = 38, China = 96 });
    }
}

public class EnergyRenewableInfo
{
    public string Year { get; set; }
    public int Europe { get; set; }
    public int China { get; set; }
    public int USA { get; set; }
}
```

```ts
public initData() {
    this.data = [
        { Year: "2009", Europe: 31, China: 21,  USA: 19 },
        { Year: "2010", Europe: 43, China: 26,  USA: 24 },
        { Year: "2011", Europe: 66, China: 29,  USA: 28 },
        { Year: "2012", Europe: 69, China: 32,  USA: 26 },
        { Year: "2013", Europe: 58, China: 47,  USA: 38 },
        { Year: "2014", Europe: 40, China: 46,  USA: 31 },
        { Year: "2015", Europe: 78, China: 50,  USA: 19 },
        { Year: "2016", Europe: 13, China: 90,  USA: 52 },
        { Year: "2017", Europe: 78, China: 132, USA: 50 },
        { Year: "2018", Europe: 40, China: 134, USA: 34 },
        { Year: "2019", Europe: 80, China: 96,  USA: 38 },
    ];
}
``` -->

In order to use the $PlatformShort$ Line Chart, the following modules are first required to be added to your application:

<!-- Blazor -->
```razor
CategoryChartModule.Register(IgniteUIBlazor);
```
<!-- end: Blazor -->

<!-- Angular -->
```ts
// app.module.ts
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxCategoryChartModule,
        // ...
    ]
})
export class AppModule {}
```
<!-- end: Angular -->

<!-- React -->
```ts
import { IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();
```
<!-- end: React -->

<!-- WebComponents -->
```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcCategoryChartModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcCategoryChartModule
    );
```
<!-- end: WebComponents -->


## $PlatformShort$ Line Chart with Single Series

The $PlatformShort$ Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-single-source"
           alt="$PlatformShort$ Line Chart with Single Source"
           github-src="charts/category-chart/chart-single-source">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Line Chart with Multiple Series

Since the $PlatformShort$ Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources"
           alt="$PlatformShort$ Line Chart with Multiple Sources"
           github-src="charts/category-chart/line-chart-multiple-sources'">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Line Chart with Live Data

The $PlatformShort$ Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the $PlatformShort$ Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="$PlatformShort$ Line Chart Live Data Example"
           github-src="charts/category-chart/high-frequency">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Styling Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-styling"
           alt="$PlatformShort$ Line Chart Styling"
           github-src="charts/category-chart/line-chart-styling">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Line Chart Advanced Scenarios

For more advanced types of line charts, use `XamDataChart` control to create other types of area charts as the following sections demonstrate them.

## $PlatformShort$ Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-line-chart"
           alt="$PlatformShort$ Stacked Line Chart"
           github-src="charts/data-chart/stacked-line-chart">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100LineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-line-chart"
           alt="$PlatformShort$ Stacked 100 Line Chart"
           github-src="charts/data-chart/stacked-100-line-chart">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Line Chart

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Line Chart, but wraps the data points around a circular axis rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           alt="$PlatformShort$ Radial Line Chart"
           github-src="charts/data-chart/radial-line-chart">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Polar Line Chart

The Polar Line Chart belongs to a group of polar charts and is rendered using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. Polar Line Charts use the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-line-series"
           alt="$PlatformShort$ Polar Line Chart"
           github-src="charts/data-chart/type-polar-line-series">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Charts](area-chart.md)
- [Column Charts](column-chart.md)
- [Polar Charts](polar-chart.md)
- [Radial Charts](radial-chart.md)
- [Spline Charts](spline-chart.md)
- [Stacked Charts](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type        | Control Name       | API Members
------------------|--------------------|-----------------------
Line              | `XamCategoryChart` | `ChartType` = `Line`
Polar Line        | `XamDataChart`     | `PolarLineSeries`
Radial Line       | `XamDataChart`     | `RadialLineSeries`
Stacked Line      | `XamDataChart`     | `StackedLineSeries`
Stacked 100% Line | `XamDataChart`     | `Stacked100LineSeries`                  