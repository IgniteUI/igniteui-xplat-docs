---
title: $PlatformShort$ Financial Chart | Axis Types | Infragistics
_description: Learn how to configure Infragistics' $PlatformShort$ charts control axis such as axis interval, axis lables, axis modes, axis range, axis scale, axis tickmarkts and axis titles. View our $ProductName$ financial graph demos!
_keywords: $PlatformShort$ charts, financial chart, stock chart, financial axis, $ProductName$, Axis type , Infragistics
mentionedTypes: ['FinancialChart']
---
# $PlatformShort$ Chart Axis Types

In the $PlatformShort$ financial chart component, an axis provides base properties for specifying appearance of axis main lines, tickmarks, titles, and axis labels.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-axis-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-axis-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/financial-chart/axis-types"></sample-button>

</div>

<div class="divider--half"></div>

By default, you do not need to explicitly set the labels. The financial chart component will use the first appropriate property that it finds within the data you provided and will use that for the labels.

## Axis Interval
In the Financial Chart control, the `YAxisInterval` property specifies how frequently major gridlines and axis labels are rendered on an axis. Similarly, the `YAxisMinorInterval` property specifies how frequently minor gridlines are rendered on an axis.

The following code snippet demonstrates how to configure intervals on the y-axis.

```html
 <igx-financial-chart
    yAxisInterval="200"
    yAxisMinorInterval="50"
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness="0.5"
    yAxisMajorStrokeThickness="0.5" >
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    yAxisInterval={200}
    yAxisMinorInterval={50}
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness={0.5}
    yAxisMajorStrokeThickness={0.5} />
```

```html
 <igc-financial-chart
    y-axis-interval="200"
    y-axis-minor-interval="50"
    y-axis-major-stroke="Black"
    y-axis-minor-stroke="Gray"
    y-axis-minor-stroke-thickness="0.5"
    y-axis-major-stroke-thickness="0.5" >
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    YAxisInterval="200"
    YAxisMinorInterval="50"
    YAxisMajorStroke="Black"
    YAxisMinorStroke="Gray"
    YAxisMinorStrokeThickness="0.5"
    YAxisMajorStrokeThickness="0.5" /> 
```

<div class="divider--half"></div>

## Axis Labels
The $PlatformShort$ financial chart component allows you full control over configuring and formatting the labels displayed on your chart. You can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility.

The following code example shows how to style labels on the x-axis using style properties:

```html
<igx-financial-chart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin="5"
    xAxisLabelAngle="0"
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin="5"
    yAxisLabelAngle="0"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin={5}
    xAxisLabelAngle={0}
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin={5}
    yAxisLabelAngle={0} />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    x-axis-label-text-style="8pt Verdana"
    x-axis-label-text-color="Gray"
    x-axis-label-top-margin="5"
    x-axis-label-angle="0"
    y-axis-label-text-style="8pt Verdana"
    y-axis-label-text-color="Gray"
    y-axis-label-left-margin="5"
    y-axis-label-angle="0">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    XAxisLabelTextStyle="8pt Verdana"
    XAxisLabelTextColor="Gray"
    XAxisLabelTopMargin="5"
    XAxisLabelAngle="0"
    YAxisLabelTextStyle="8pt Verdana"
    YAxisLabelTextColor="Gray"
    YAxisLabelLeftMargin="5"
    YAxisLabelAngle="0" />      
```

<div class="divider--half"></div>

## Axis Modes
The $PlatformShort$ financial chart component allows you to set different modes on the x-axis and the y-axis.
For the x-axis you can choose between the following modes:
- Time - This mode will render space along the x-axis for gaps in data, for example no stock trading on weekends or holidays.
- Ordinal - This mode will collapse date areas where data does not exist. This the default value.

For the y-axis you can choose between the following modes:
- Numeric - This mode will be charted with the exact value of the data. This is the default value.
- PercentChange - The mode will the display the data as a percentage change relative to the first data point provided.

The following code example shows how to set the modes for the axes:

```html
<igx-financial-chart
    xAxisMode="time"
    yAxisMode="percentChange"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisMode="time"
    yAxisMode="percentChange" />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    x-axis-mode="time"
    y-axis-mode="percentChange">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    XAxisMode="FinancialChartXAxisMode.Time"
    YAxisMode="FinancialChartYAxisMode.PercentChange" />
```

<div class="divider--half"></div>

## Axis Range
In the $PlatformShort$ financial chart component, the range on numeric axes is the difference in numeric values from the beginning of the axis to the end or from the smallest to largest values in the data. The range minimum is the lowest value of the axis. The range maximum is the highest value of the axis. By default, the financial chart component will calculate the minimum and maximum values for the y-axis range based on the lowest and highest data points in order to maximize the chart plot area. The automatic calculation of an axis' minimum and maximum values may not be appropriate for your set of data points. For example, if your data has a minimum value of 850, you may want to set the minimum value of the axis using y-axis’s `YAxisMinimumValue` property to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same can be applied to the axis maximum value and the highest value of data points using y-axis’s `YAxisMaximumValue` property.

The following sample code demonstrates how to change the axis range on the y-axis.

```html
 <igx-financial-chart
    yAxisMinimumValue="-200"
    yAxisMaximumValue="1000"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    yAxisMinimumValue={-200}
    yAxisMaximumValue={1000} />
```

```html
 <igc-financial-chart
     width="850px"
    height="600px"
    y-axis-minimum-value="-200"
    y-axis-maximum-value="1000">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    YAxisMinimumValue="-200"
    YAxisMaximumValue="1000" />  
```

<div class="divider--half"></div>

## Axis Scale
In the $PlatformShort$ financial chart component, you can control if the data in the chart is mapped logarithmically along the y-axis, this is done by setting the following properties:
- `YAxisIsLogarithmic` - This specifies if the y-axis should use a logarithmic scale instead of a linear one. By default this property is set to false.
- `YAxisLogarithmBase` - The base value to use in the log function when mapping the position of data items along the y-axis.
This is effective only when yAxisIsLogarithmic is true.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <igx-financial-chart
    yAxisIsLogarithmic="true"
    yAxisLogarithmBase="10"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    yAxisIsLogarithmic={true}
    yAxisLogarithmBase={10} />
```

```html
 <igc-financial-chart
    width="850px"
    height="600px"
    y-axis-is-logarithmic="true"
    y-axis-logarithm-base="10">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    YAxisIsLogarithmic="true"
    YAxisLogarithmBase="10" />
```

<div class="divider--half"></div>

## Axis Tickmarks
Tick marks display points on the axes. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness and color of the x-axis and y-axis labels.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <igx-financial-chart
    xAxisTickLength="10"
    xAxisTickStrokeThickness="1"
    xAxisTickStroke="Gray"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisTickLength={10}
    xAxisTickStrokeThickness={1}
    xAxisTickStroke="Gray" />
```

```html
 <igc-financial-chart
    width="850px"
    height="600px"
    x-axis-tick-length="10"
    x-axis-tick-stroke-thickness="1"
    x-axis-tick-stroke="Gray">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    XAxisTickLength="10"
    XAxisTickStrokeThickness="1"
    XAxisTickStroke="Gray" />          
```

<div class="divider--half"></div>

## Axis Titles
The axis title feature of the financial chart component allows you to add contextual information to the x and y axes of the chart. You can customize the look and feel of the financial chart's x-axis and y-axis titles in many different ways such as applying different font styles, margins, and alignment.

The following code example shows how to set and customize the titles on the x-axis and y-axis:

```html
<igx-financial-chart
      xAxisTitle="Data Range"
      xAxisTitleTextColor="Black"
      xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
      xAxisTitleAngle="0"
      yAxisTitle="Stock Prices ($)"
      yAxisTitleTextColor="Black"
      yAxisTitleAngle="90"
      width="850px"
      height="600px"
      [dataSource]="data">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    xAxisTitle="Data Range"
    xAxisTitleTextColor="Black"
    xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
    xAxisTitleAngle={0}
    yAxisTitle="Stock Prices ($)"
    yAxisTitleTextColor="Black"
    yAxisTitleAngle={90} />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    x-axis-title="Data Range"
    x-axis-title-text-color="Black"
    x-axis-title-text-style="15pt Times New Roman|Georgia|Serif"
    x-axis-title-angle="0"
    y-axis-title="Stock Prices ($)"
    y-axis-title-text-color="Black"
    y-axis-title-angle="90">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%" 
    DataSource="DataSource"
    XAxisTitle="Data Range"
    XAxisTitleTextColor="Black"
    XAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
    XAxisTitleAngle="0"
    YAxisTitle="Stock Prices ($)"
    YAxisTitleTextColor="Black"
    YAxisTitleAngle="90" />                     
```

<div class="divider--half"></div>


