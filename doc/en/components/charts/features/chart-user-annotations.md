---
title: {Platform} Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart User Annotations
_keywords: {Platform} Charts, User Annotations, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart User Annotation Layer <label>PREVIEW</label>

In {ProductName}, you can annotate the `XamDataChart` with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the `Toolbar`. The following topic explains, with examples, how you can utilize the `Toolbar` to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

`sample="/charts/data-chart/user-annotation-layer", height="500", alt="{Platform} Trendlines Example"`

> [!Note]
> This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The `Toolbar` exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the `IsUserAnnotationsEnabled` property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the `XamDataChart`. This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="{Platform} user-annotation-create"/>

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="{Platform} user-annotation-delete"/>

When adding one of these user annotations via the `XamToolbar`, the `XamDataChart` will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a `UserAnnotationInformation` object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on `UserAnnotationInformation`:

| Property | Type | Description |
|------------|---------|-------------|
|`AnnotationData`|`string`|This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip.|
|`AnnotationId`|`string`|This read-only property returns the unique string ID of the user annotation.|
|`BadgeColor`|`string`|This property gets or sets the color to use for the badge in the user annotation.|
|`BadgeImageUri`|`string`|This property gets or sets a path to an image to use for the badge in the user annotation.|
|`DialogSuggestedXLocation`|`double`|This property gets a recommended X location to show a dialog based on the location that the user annotation was added.|
|`DialogSuggestedYLocation`|`double`|This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.|
|`Label`|`string`|This property gets or sets the label to be shown in the user annotation.|
|`MainColor`|`string`|This property gets or sets the color to be used to fill the background of the user annotation.|

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the `FinishAnnotationFlow` method on the `XamDataChart` to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling `CancelAnnotationFlow` and passing the `AnnotationId` of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the `UserAnnotationLayer` programmatically, you can invoke two different methods on the `XamDataChart` to put the chart into a mode where you can add or remove a user annotation. These methods are named `StartCreatingAnnotation` and `StartDeletingAnnotation`, respectively.

After invoking `StartCreatingAnnotation`, you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a `UserAnnotationInformation` object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the `FinishAnnotationFlow` method on the `XamDataChart` to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling `CancelAnnotationFlow` and passing the `AnnotationId` of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the `Series` collection as a `UserAnnotationLayer`. The `UserAnnotationLayer` has an `Annotations` collection that can store `UserSliceAnnotation`, `UserStripAnnotation` and `UserPointAnnotation` elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's `AnnotationInfo.AnnotationData` property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.


## API References

The following is a list of API members mentioned in the above sections:

- `XamDataChart`
- `IsUserAnnotationsEnabled`
- `AnnotationInfo`
- `CancelAnnotationFlow`
- `StartCreatingAnnotation`
- `StartDeletingAnnotation`
- `UserAnnotationInformation`
- `UserAnnotationInformationRequested`
- `UserAnnotationToolTipContentUpdating`
- `UserSliceAnnotation`
- `UserStripAnnotation`
- `UserPointAnnotation`
- `Toolbar`

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)
