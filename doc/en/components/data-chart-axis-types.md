---
title: $Platform$ Data Chart | Data Visualization Tools | Axis Types | Infragistics
_description: Use Infragistics' $Platform$ charts control to plot data using different axis types such as numeric, category and date time axis. Learn about our $ProductName$ graph axis!
_keywords: $Platform$ charts, data chart, axis, types, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
---
# $Platform$ Axis

In the $Platform$ data chart component, an axis provides base properties for specifying appearance of axis main lines, gridlines, tickmarks, titles, and labels. There are several different types of axis that can be used by the data chart component for the different types of series that the data chart supports. The type of series determines what type of axes can be used with them.

## $Platform$ Axis Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-types"
           alt="$Platform$ Axis Example"
           github-src="charts/data-chart/axis-types">
</code-view>

<div class="divider--half"></div>

## Supported Axes
The $Platform$ data chart component supports various types of axis that are intended to use with specific type of series. The following table lists which axes can be used with type of series.

Axis Type           | Supported Series Types
--------------------|-----------------------
CategoryYAxis       | only [Bar Series](data-chart-type-category-bar-series.md) in [Category Series](data-chart-type-category-series.md) group
CategoryXAxis       | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except [Bar Series](data-chart-type-category-bar-series.md))
TimeXAxis           |  all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except [Bar Series](data-chart-type-category-bar-series.md))
OrdinalTimeXAxis    | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except [Bar Series](data-chart-type-category-bar-series.md))
PercentChangeYAxis  | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), [Category Series](data-chart-type-category-series.md), [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md)
NumericYAxis        | all [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md), [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), [Category Series](data-chart-type-category-series.md)
NumericXAxis        | all [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md), and [Bar Series](data-chart-type-category-bar-series.md) in [Category Series](data-chart-type-category-series.md) group
NumericAngleAxis   | all [Polar Series](data-chart-type-polar-series.md)
NumericRadiusAxis  | all [Polar Series](data-chart-type-polar-series.md) and [Radial Series](data-chart-type-radial-series.md)
CategoryAngleAxis  | all  [Radial Series](data-chart-type-radial-series.md)

## Category X Axis

The `CategoryXAxis` treats the data as a sequence of category data items. Labels on this axis are placed along the X-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers. This type of axis is compatible with the [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  and [Category Series](data-chart-type-category-series.md) (except [Bar Series](data-chart-type-category-bar-series.md))

The following code snippet demonstrates how to add a `CategoryXAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px"
    Width="100%">
    <CategoryXAxis Name="xAxis" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryXAxis name="xAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-x-axis id="xAxis">
    </igc-category-x-axis>
</igc-data-chart>
```

## Category Y Axis

The `CategoryYAxis` treats the data as a sequence of category data items. Labels on this axis are placed along the Y-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers. This type of axis is compatible only with [Bar Series](data-chart-type-category-bar-series.md) within the [Category Series](data-chart-type-category-series.md) group.

The following code snippet demonstrates how to add a `CategoryYAxis` to the data chart component:

```razor
<DataChart Height="400px"
    Width="100%">
    <CategoryYAxis Name="yAxis"
        DataSource="@DataSource" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-y-axis id="yAxis">
    </igc-category-y-axis>
</igc-data-chart>
```

## Category DateTime X Axis

<!-- Angular, React, WebComponents -->
The `CategoryDateTimeXAxis` Axis treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the `DateTimeMemberPath` property of this axis. Also in order to display the formatted labels you can use the `FormatLabel` event.
This type of axis is compatible with the [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), and [Category Series](data-chart-type-category-series.md) (except [Bar Series](data-chart-type-category-bar-series.md))
<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->
The `CategoryDateTimeXAxis` Axis treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the `DateTimeMemberPath` property of this axis. Also in order to display the formatted labels you can use the `LabelFormat` property `DateTimeFormatSpecifier`.
This type of axis is compatible with the [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), and [Category Series](data-chart-type-category-series.md) (except [Bar Series](data-chart-type-category-bar-series.md))
<!-- end: Blazor -->

The following code snippet demonstrates how to add a `CategoryDateTimeXAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px"
    Width="100%">
    <CategoryDateTimeXAxis Name="xAxis"
        DateTimeMemberPath="Date"
        LabelFormat="{0}" >
            <DateTimeFormatSpecifier Locale="en-US" />
    </CategoryDateTimeXAxis>
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-date-time-x-axis name="xAxis"
        (FormatLabel)=”xAxisFormatLabel()”
        dateTimeMemberPath="Date" >
        </igx-category-date-time-x-axis>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrCategoryDateTimeXAxis name="xAxis"
        labelFormats= {this.xAxisFormatLabel}
        dateTimeMemberPath="Date" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-category-date-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-category-date-time-x-axis>
</igc-data-chart>
```

## Numeric X Axis

The `NumericXAxis` treats the data as continuously varying numerical data items. Labels on this axis are placed along the X-Axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties. This type of axis is compatible with the [Scatter Series](data-chart-type-scatter-bubble-series.md) and [Shape Series](data-chart-type-shape-series.md) types. Also, this axis is compatible with the [Bar Series](data-chart-type-category-bar-series.md) type of [Category Series](data-chart-type-category-series.md), in which the `ValueMemberPath` property will be used to map the data column.

The following code snippet demonstrates how to add a `NumericXAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px"
    Width="100%">
    <NumericXAxis Name="xAxis"
        DataSource="@data"  />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrNumericXAxis name="xAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-numeric-x-axis id="xAxis">
    </igc-numeric-x-axis>
</igc-data-chart>
```

## Numeric Y Axis

The `NumericYAxis` treats the data as continuously varying numerical data items. Labels on this axis are placed along the Y-axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties. This type of axis is compatible with the [Scatter Series](data-chart-type-scatter-bubble-series.md) and [Shape Series](data-chart-type-shape-series.md) types. Also, this axis is compatible with [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), and [Category Series](data-chart-type-category-series.md) types (except [Bar Series](data-chart-type-category-bar-series.md)).

The following code snippet demonstrates how to add a `NumericYAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px"
    Width="100%">
    <NumericYAxis Name="xAxis" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrNumericYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-numeric-y-axis id="yAxis">
    </igc-numeric-y-axis>
</igc-data-chart>
```

## Time X Axis

The `TimeXAxis` treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the `DateTimeMemberPath` property of this axis. This type of axis is compatible with the [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), and [Category Series](data-chart-type-category-series.md) types.

The `TimeXAxis` also supports the ability to exclude intervals of data with `Breaks`. As a result, labels will not appear at the excluded interval. For example, working/non-working days, holidays, or weekends.

The following code snippet demonstrates how to add a `TimeXAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px" Width="100%" >
    <TimeXAxis Name="xAxis" DateTimeMemberPath="Date"
    DataSource="@data" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"
    DataSource="@data"/>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrTimeXAxis name="xAxis" dateTimeMemberPath="Date"/>
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-time-x-axis>
</igc-data-chart>
```

## Ordinal Time X Axis

The main difference between the `OrdinalTimeXAxis` and the `TimeXAxis` is that in the ordinal axis, the dates displayed are assumed to be equidistant. The `TimeXAxis` currently sorts and aligns the dates according to a chronological timescale. Therefore, we recommend using `OrdinalTimeXAxis` for better performance or when your data items are already in chronological order with the same time interval.

The following code snippet demonstrates how to add a `OrdinalTimeXAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px" Width="100%" >
    <OrdinalTimeXAxis Name="xAxis" DateTimeMemberPath="Date" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrOrdinalTimeXAxis name="xAxis" dateTimeMemberPath="Date"/>
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-ordinal-time-x-axis id="xAxis"
        date-time-member-path="Date">
    </igc-ordinal-time-x-axis>
</igc-data-chart>
```

## Percent Change Y Axis

The `PercentChangeYAxis` works such that it takes the first point in your series as a reference value. Each value after the first value is scaled according to what percent increase or decrease it is compared to the reference value.

This axis type is based on `NumericYAxis`, and so will support the same series types. For [Category Series](data-chart-type-category-series.md), the reference value will correspond to the `ValueMemberPath` for those series. For[Scatter Series](data-chart-type-scatter-bubble-series.md), the reference value will correspond to the `YMemberPath` of those series. For [Financial Series](data-chart-type-financial-series.md), the reference value will correspond to the first value mapped to `OpenMemberPath` property.

The following code snippet demonstrates how to add a `PercentChangeYAxis` to the $Platform$ data chart component:

```razor
<DataChart Height="400px" Width="100%">
    <PercentChangeYAxis Name="yAxis" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-percent-change-y-axis name="yAxis" />
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">
    <IgrPercentChangeYAxis name="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="400px">
    <igc-percent-change-y-axis id="yAxis">
    </igc-percent-change-y-axis>
</igc-data-chart>
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Axis Settings](data-chart-axis-settings.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)