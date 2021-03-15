---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Axis Location | Infragistics
_description: With the Infragistics' $PlatformShort$ charts control you can specify axis location in relation to the chart plot area. Create a $ProductName$ graph with two axis!
_keywords: $PlatformShort$ charts, data chart, axis locations, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Axis Locations

 For all axes have, you can specify axis location in relationship to chart plot area. This especially important when using more than two axes in the same data chart or when [Sharing Axis](data-chart-axis-sharing.md) between multiple series.


## $PlatformShort$ Axis Locations Example


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-locations" 
           alt="$PlatformShort$ Axis Locations Example" 
           github-src="charts/data-chart/axis-locations">
</code-view>

<div class="divider--half"></div>


## Code Example
This code demonstrates how to create $ProductName$ data chart with two `NumericYAxis` that will be placed on left/right sides and two `CategoryXAxis` that will be stacked on one another.

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxisYears"
        Interval="12"
        Label="Year"
        LabelLocation="AxisLabelsLocation.OutsideBottom"
        Overlap="1"
        Gap="0.4"
        DataSource="@DataSource" />
    <CategoryXAxis Name="xAxisMonths"
        Interval="1"
        Label="Month"
        LabelLocation="AxisLabelsLocation.OutsideBottom"
        Overlap="1"
        Gap="0.4"
        DataSource="@DataSource" />
    <NumericYAxis Name="yAxisLeft"
        Title="Expanse | Revenue"
        MinimumValue="-900"
        MaximumValue="900"
        Interval="300"
        LabelLocation="AxisLabelsLocation.OutsideBottom" />
    <NumericYAxis Name="yAxisRight"
        Title="Profit (%)"
        MinimumValue="0"
        MaximumValue="100"
        LabelLocation="AxisLabelsLocation.OutsideRight" />
    <ColumnSeries name="series1"
        ValueMemberPath="Revenue"
        XAxisName="xAxisMonths"
        YAxisName="yAxisLeft" />
    <ColumnSeries name="series3"
        ValueMemberPath="Expanse"
        XAxisName="xAxisMonths"
        YAxisName="yAxisLeft" />
    <ColumnSeries name="series2"
        ValueMemberPath="Profit"
        XAxisName="xAxisYears"
        YAxisName="yAxisRight" />
</DataChart>
```

```html
   <igx-data-chart
            [dataSource]="dataSource"
            width="700px"
            height="500px">

            <igx-category-x-axis name="xAxisYears"
            interval="12" labelLocation="OutsideBottom"
            label="Year"  overlap="1" gap="0.4"  >
            </igx-category-x-axis>
            <igx-category-x-axis name="xAxisMonths"
            interval="1"  labelLocation="OutsideBottom"
            label="Month" overlap="1" gap="0.4" >
            </igx-category-x-axis>

            <igx-numeric-y-axis  name="yAxisLeft"
            title="Expanse | Revenue"
            minimumValue="-900" labelLocation="OutsideLeft"
            maximumValue="900"
            interval="300" >
            </igx-numeric-y-axis>
            <igx-numeric-y-axis  name="yAxisRight"
            title="Profit (%)"
            minimumValue="0"  labelLocation="OutsideRight"
            maximumValue="100" >
            </igx-numeric-y-axis>
            <igx-column-series name="series1"
            valueMemberPath="Revenue"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series3"
            valueMemberPath="Expanse"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series2"
            valueMemberPath="Profit"
            xAxisName="xAxisYears"
            yAxisName="yAxisRight" >
            </igx-column-series>
         </igx-data-chart>
```

```tsx
 <IgrDataChart dataSource={this.data}>
    {/* axes */}
    <IgrCategoryXAxis name="xAxisYears"
    interval={12} labelLocation="OutsideBottom"
    label="Year"  overlap={1} gap={0.4}  />
    <IgrCategoryXAxis name="xAxisMonths"
    interval={1}  labelLocation="OutsideBottom"
    label="Month" overlap={1} gap={0.4}/>
    <IgrNumericYAxis  name="yAxisLeft"
    title="Expanse | Revenue"
    minimumValue={-900} labelLocation="OutsideLeft"
    maximumValue={900}
    interval={300} />
    <IgrNumericYAxis  name="yAxisRight"
    title="Profit (%)"
    minimumValue={0}  labelLocation="OutsideRight"
    maximumValue={100} />
    {/* series */}
    <IgrColumnSeries name="series1"
    valueMemberPath="Revenue"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <IgrColumnSeries name="series3"
    valueMemberPath="Expanse"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <IgrColumnSeries name="series2"
    valueMemberPath="Profit"
    xAxisName="xAxisYears"
    yAxisName="yAxisRight" />
 </IgrDataChart>
```



### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Series Types](data-chart-series-types.md)



