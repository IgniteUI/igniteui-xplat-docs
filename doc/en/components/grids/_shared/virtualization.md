---
title: {Platform} {ComponentTitle} Virtualization and Performance - Ignite UI for {Platform}
_description: The Ignite UI for {Platform} Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!
_keywords: {Platform} {ComponentTitle}, {ComponentTitle} performance, data table virtualization, ignite ui for {Platform}
_canonicalLink: grid/virtualization
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: [{ComponentTitle}, 'Virtualization']
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Virtualization and Performance

In Ignite UI for {Platform}, the `{ComponentName}` control now utilizes the `igxForOf` directive and virtualizes its content both vertically and horizontally.

## {Platform} {ComponentTitle} Virtualization and Performance Example

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-performance-virtualization"
           github-src="{ComponentSample}/data-performance-virtualization"
           alt="{Platform} {ComponentTitle} Virtualization and Performance Example">
</code-view>

<div class="divider--half"></div>

## Enabling Virtualization

By utilizing the `igxForOf` directive the `{ComponentName}` now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. The `{ComponentName}`'s `Width` and `Height` defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. 

However, it is also possible to explicitly set the `{ComponentName}`'s `Width` and/or `Height` to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if `Width` is `null` and rows if `Height` is `null`).

The size of the data chunks is determined by:

*   The row height for the vertical (row) virtualization. This is determined by the `RowHeight` option and is 50(px) by default.
*   The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the `{ComponentName}`'s `ColumnWidth` option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the `{ComponentName}`'s container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

## Remote Virtualization

The `{ComponentName}` supports remote virtualization, which is demonstrated in the [`Remote Data Operations`](remote-data-operations.md) topic.

## Virtualization Limitations

*   On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the `{ComponentName}`’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

## FAQ

### Why is having dimensions in the {ComponentTitle} is necessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the `{ComponentName}` is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.

## API References

* `Grid`
* `Column`

## Additional Resources

<div class="divider--half"></div>

* [{ComponentTitle} Overview](overview.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName}  **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})