---
title: {Platform} Chart Data Annotations | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Data Annotations
_keywords: {Platform} Charts, Data Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Data Annotations <label>PREVIEW</label>

In the {Platform} chart, the data annotation layers allow you to annotate data plotted in Data Chart with sloped lines, vertical/horizontal lines (aka axis slices), vertical/horizontal strips (targeting specific axis), rectangles, and even parallelograms (aka bands). With data-binding supported, you can create as many annotations as you want to customize your charts. Also, you can combine different annotation layers and you can overlay text inside of plot area to annotated important events, patterns, and regions in your data.

> [!Note]
> These features are designed to support cartesian axes and does not currently support radius or angle axes. 

For example, you can annotates stock prices with stock events and patterns.

`sample="/charts/data-chart/data-annotation-multiple-with-stocks", height="600", alt="{Platform} Multiple Data Annotations Example"`

Like this sample? Get access to our complete {Platform} toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/{ProductSpinal}/download">Download it for free.</a>

## {Platform} Data Annotation Slice Layer Example

In {Platform}, the link:{DataChartLink}.DataAnnotationSliceLayer.html[DataAnnotationSliceLayer] renders multiple vertical or horizontal lines that slice the chart at multiple values of an axis in the `XamDataChart` component. This data annotation layer is often used to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal slices or setting TargetAxis property to x-axis will render data annotation layer as vertical slices. Similarly to all series, the DataAnnotationSliceLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the `AnnotationValueMemberPath` property. 

For example, you can use DataAnnotationSliceLayer to annotate stock prices with important events such as stock split and outcome of earning reports.

`sample="/charts/data-chart/data-annotation-slice-layer", height="500", alt="{Platform} Data Annotation Slice Layer Example"`

<div class="divider--half"></div>

## {Platform} Data Annotation Strip Layer Example

In {Platform}, the `DataAnnotationStripLayer` renders multiple vertical or horizontal strips between 2 values on an axis in the `XamDataChart` component. This data annotation layer can be used to annotate duration of events (e.g. stock market crash) on x-axis or important range of values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal strips or setting TargetAxis property to x-axis will render data annotation layer as vertical strips. Similarly to all series, the `DataAnnotationStripLayer` also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the AnnotationValueMemberPath property. 

For example, you can use `DataAnnotationStripLayer` to annotate chart with stock market crashes and changes in federal interest rates.

`sample="/charts/data-chart/data-annotation-strip-layer", height="500", alt="{Platform} Data Annotation Strip Layer Example"`

<div class="divider--half"></div>

## {Platform} Data Annotation Line Layer Example

In {Platform}, `DataAnnotationLineLayer` renders multiple lines between 2 points in plot area of the `XamDataChart` component. This data annotation layer can be used to annotate stock chart with growth and decline in stock prices. Similarly to all series, the DataAnnotationLineLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath`  properties.

For example, you can use DataAnnotationLineLayer to annotate growth and decline patterns in stock prices and 52-week high and low of stock prices on y-axis.

`sample="/charts/data-chart/data-annotation-line-layer", height="500", alt="{Platform} Data Annotation Line Layer Example"`

<div class="divider--half"></div>

## {Platform} Data Annotation Rect Layer Example

In {Platform}, the `DataAnnotationRectLayer` renders multiple rectangles defined by starting and ending points in plot area of the `XamDataChart` component. This data annotation layer can be used to annotate region of plot area such as bearish patterns in stock prices. Similarly to all series, the DataAnnotationRectLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the rectangles. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties.

For example, you can use DataAnnotationRectLayer to annotate bearish patterns and gaps in stock prices on y-axis.

`sample="/charts/data-chart/data-annotation-rect-layer", height="500", alt="{Platform} Data Annotation Rect Layer Example"`

<div class="divider--half"></div>

## {Platform} Data Annotation Band Layer Example

In {Platform}, the `DataAnnotationBandLayer` renders multiple skewed rectangles (free-form parallelogram) between 2 points in plot area of the `XamDataChart` component. This data annotation layer can be used to annotate range of growth and decline in stock prices. Similarly to all series, the DataAnnotationBandLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties. In addition, you can specify thickness/size of the skewed rectangle by binding numeric data column to the AnnotationBreadthMemberPath property.

For example, you can use DataAnnotationBandLayer to annotate range of growth in stock prices.

`sample="/charts/data-chart/data-annotation-band-layer", height="600", alt="{Platform} Data Annotation Band Layer Example"`

<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- `TargetAxis`: This property specifies which axis should have an enabled DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `DataSource`: This property binds data to the annotation layer to provide the precise shape.
- `StartValueXMemberPath`: This property is a mapping to the name of the data column with x-positions for the start of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `StartValueYMemberPath`: This property is a mapping to the name of data column with y-positions for the start of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `EndValueXMemberPath`: This property is a mapping to the data column with x-positions for the end of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `EndValueYMemberPath`: This property is a mapping to the data column with y-positions for end of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `StartLabelXMemberPath`: This property is a mapping to the data column representing the overlay label for the starting position of the xAxis along the axis.
- `StartLabelXDisplayMode` | `StartLabelYDisplayMode` | `EndLabelXDisplayMode` | `EndLabelYDisplayMode` | `CenterLabelXDisplayMode`: These properties specify what should annotation labels display on starting, ending, or center of the annotation shape, e.g. mapped data value, mapped data label, axis value, or hide a given annotation label.
- `StartLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the starting position of `DataAnnotationBandLayer`, `DataAnnotationLineLayer`, `DataAnnotationRectLayer` on the y-axis.
- `EndLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the ending position of `DataAnnotationBandLayer`, `DataAnnotationLineLayer`, `DataAnnotationRectLayer` on the y-axis.

