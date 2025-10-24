---
title: {Platform} Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart User Annotations
_keywords: {Platform} Charts, User Annotations, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart User Annotation Layer

In the {Platform} chart, the `UserAnnotationLayer` is a new annotation layer that allows you to show multiple types of axis and plot area annotations in a way in a more clear and concise way. The `UserAnnotationLayer` has an `Annotations` collection that you can add the new user annotations to. These new annotations are the `UserSliceAnnotation`, `UserStripAnnotation` and `UserPointAnnotation`.

Each of the annotations have a `LabelDisplayMode` property that takes a `DataAnnotationDisplayMode` enum. This enum has the following options:

- `Auto`: Auto
- `AxisValue`: Displays the axis value in the axis annotation that is between the axis minimum and maximum.
- `DataLabel`: Displays a label in the the axis annotation representing a value mapped via the `LabelMemberPath`.
- `DataValue`: Displays a data value in the axis annotation that represents a value mapped via the `ValueMemberPath`.
- `Hidden`: Hides the axis annotation.
- `PixelValue`: Displays a pixel value in the axis annotation that is between the start and end size of the plot area.
- `WindowValue`: Displays a window value in the axis annotation in relative coordinates (0.0 - 1.0) to the start and end size of the plot area.

Each of the annotations also expose customization properties `LabelBackground`, `LabelBorderColor`, and `LabelColor` for the axis annotation's background, border color, and text color, respectively.

By default, the user annotations will use the companion axis. If no companion axis is defined, it will create one for you, but if one is already defined, it will use it. The user annotations will also use the companion axis to your category axis by default if one is defined.

The `UserAnnotationLayer` and its underlying user annotations, with the exception of the `UserPointAnnotation` expose a `TargetMode` property that allows you to direct which axis the annotations will target. If you set this on the `UserAnnotationLayer`, then each of the user annotations in its `Annotations` collection will inherit the value that you set. Note, if you want the user annotations to use a different target than the `UserAnnotationLayer`, you can set the `TargetMode` on the corresponding user annotation to the desired target.

```md

> [!Note]
> This feature is designed to support cartesian axes and does not currently support radius or angle axes.

```

## UserSliceAnnotation

The `UserSliceAnnotation` will draw a dashed horizontal or vertical line on the plot area depending on the defined axis for the `TargetMode` property. This annotation has a `Value` property that you must set to the value that you want the annotation and the dashed line to appear at. You can customize the text shown on the axis by setting the `Label` property on this annotation.

The following sample demonstrates how to use the `UserSliceAnnotation`:

`sample="/charts/data-chart/user-slice-annotation", height="500", alt="{Platform} User Slice Annotation Example"`

## UserStripAnnotation

The `UserStripAnnotation` will render a horizontal or vertical strip starting at the `StartValue` and ending at the `EndValue` that you define on the annotation. You can also modify the axis annotation shown for the `StartValue` and `EndValue` by setting the `StartLabel` and `EndLabel`, respectively.

The following sample demonstrates the usage of the `UserStripAnnotation`:

`sample="/charts/data-chart/user-strip-annotation", height="500", alt="{Platform} User Strip Annotation Example"`

## UserPointAnnotation

The `UserPointAnnotation` will render a callout at the `XValue` and `YValue` that you define. You can also configure the text it will display by using the `Label` property.

The following sample demonstrates the usage of the `UserPointAnnotation`:

`sample="/charts/data-chart/user-point-annotation", height="500", alt="{Platform} User Point Annotation Example"`

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)