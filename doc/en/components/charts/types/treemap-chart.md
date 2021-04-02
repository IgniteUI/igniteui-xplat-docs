---
title: $PlatformShort$ Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about $ProductName$ treemap!
_keywords: $PlatformShort$ Tree Map, Treemap, layout, orientation, $ProductName$, Infragistics
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType"]
---
# $PlatformShort$ Treemap
The $ProductName$ Treemap chart displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

## $PlatformShort$ Treemap Example

In the following example, the treemap demonstrates the 30 largest countries in the world by total area.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-overview"
           alt="$PlatformShort$ Treemap Example"
           github-src="charts/tree-map/overview">
</code-view>

<div class="divider--half"></div>

## Treemap Recommendations

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

- Treemaps are more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.

- Treemaps are designed for drill down scenarios. You can continuously drill down into the data set that is represented by smaller rectangles for more efficient data analysis.

- Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings.

Like any other data visualization, a Treemap chart visualization should be used in specific scenarios. It does not solve the same problem that a visualization like a Bar Chart or a Line Chart would. It is really meant for a more complex, richer data display.

<b>Use Cases:</b>

- Have drill-down hierarchical data (data organized as a tree, with branches and sub-branches)

- Want to illustrate hierarchies of relative weight and comparative values between categories (branches) and subcategories (sub-branches)

- Want to display large data sets that need a compact, space-efficient visualization

- Want to deliver at-a-glance, quick data analysis without precise values. The relative size of the rectangles help identify patterns and/or outliers very quickly

- Want to make efficient use of space. Treemaps can legibly display thousands of items on the screen simultaneously

<b>Do not use a Treemap when:</b>

- You are telling a data story that requires precise values

- You have negative data values

- You have flat, non-hierarchical data

- Your data is similar in size

<b>Data Structure:</b>

- The data source must be an array or a list of data items

- The data source must contain at least one data item otherwise the map will not render any nodes.

- All data items must contain at least one data column (e.g. string) which should be mapped to the `LabelMemberPath` property.

- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property.
- To categorize data into organized tiles you can optionally use `ParentIdMemberPath` and `IdMemberPath`.

## $PlatformShort$ Treemap Configuration

In the following example, the treemap demonstrates the ability of changing it's algorithmic structure by modifying the `LayoutType` and `LayoutOrientation` properties.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-layout-configuration"
           alt="$PlatformShort$ Treemap Layout Configuration"
           github-src="charts/tree-map/layout-configuration">
</code-view>

<div class="divider--half"></div>

<b>Layout Types:</b>

The Treemap chart displays the relative weight of data. It uses a variety of algorithms to help it determine how the layout of its data items should occur:

- SliceAndDiced - layout algorithm aims to preserve the initial order at the expense of the aspect ratio.

- Squarified - layout tiling algorithm has a better aspect ratio than the SliceAndDice and keeps a better order than Squarified.

- Stripped - layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

The Treemap allows you to choose the algorithm that is best for your requirements, defaulting to use the Squarified method. It also includes the ability to allow you to colorize nodes using two mechanisms:

- A group-based mechanism that colors items with like values

- A scale-based mechanism similar to a map choropleth, which gradiates node colors based on their value.

<b>Layout Orientation:</b>

`LayoutOrientation` property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the `LayoutOrientation` property works with the layout types SliceAndDice and Strip.

- `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).

- `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

## $PlatformShort$ Treemap Styling

In the following example, the treemap demonstrates the ability of changing the look and feel of the nodes achieved by styling through the `NodeStylingScript` event.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-styling"
           alt="$PlatformShort$ Treemap Styling"
           github-src="charts/tree-map/styling">
</code-view>

<div class="divider--half"></div>

## API Members
- `XamTreemap`
- `LayoutOrientation`
- `LayoutType`
