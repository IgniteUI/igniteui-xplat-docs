---
title: $PlatformShort$ Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about $ProductName$ treemap!
_keywords: $PlatformShort$ Tree Map, Treemap, layout, orientation, $ProductName$, Infragistics
mentionedTypes: ['Treemap','TreemapOrientation','TreemapLayoutType']
---
# $PlatformShort$ Treemap Overview
The $ProductName$ Treemap displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.


## Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="tree-map-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/tree-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="tree-map-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/tree-map/overview"></sample-button>

</div>

<div class="divider--half"></div>

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings. Treemaps can be more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.

## Required Data

Binding to the `Treemap` contains the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the map will not render any nodes.
- All data items must contain at least one data column (e.g. string) which should be mapped to the `LabelMemberPath` property.
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property.
- To categorize data into organized tiles you can optionally use `ParentIdMemberPath` and `IdMemberPath`.

## Layout Types

The $ProductName$ treemap component supports the following types algorithms:

- `SliceAndDice`
- `Squarified`
- `Stripped`

The type is defined by setting the `TreemapLayoutType` property. If the `TreemapLayoutType` property is not specified, then by default, the `Stripped` type is displayed. There are different tiling algorithms when it comes to displaying the data. All algorithms have their advantages depending on the user’s needs. Some aim to obtain the best aspect ratio – the nodes are as close to rectangles as possible. Other algorithms aim to preserve the initial order of the elements – object which are close to each other in the data source are arranged near each other on the treemap.

* `Stripped` layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

* `SliceAndDice` layout algorithm aims to preserve the initial order at the expense of the aspect ratio.

* `Squarified` layout tiling algorithm has a better aspect ratio than the SliceAndDice and keeps a better order than Squarified.

## Layout Orientation

`LayoutOrientation` property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the LayoutOrientation property works with the layout types SliceAndDice and Strip.

* `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).

* `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the chart component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules
The `Treemap` requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* TreemapModule
<!-- end: Blazor -->

```ts
import { IgxTreemapModule } from "igniteui-angular-charts";
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxTreemapModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrTreemapModule } from "igniteui-react-charts";
import { IgrTreemapComponent } from 'igniteui-react-charts';

IgrTreeMapModule.register();
```

```ts
import { IgcTreemapModule } from "igniteui-webcomponents-charts";
import { IgcTreemapComponent } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcTreemapModule);
```

## Code Snippet
The following code demonstrates how to setup the Treemap.

```html
<igx-treemap
    height="100%"
    width="100%"
    layoutType="stripped"
    layoutOrientation="horizontal"
    parentIdMemberPath="parent"
    idMemberPath="id"
    labelMemberPath="name"
    valueMemberPath="pop"
    transitionDuration="500"
    rootTitle="Countries"   >
</igx-treemap>
```

```tsx
<igr-treemap
    height="100%"
    width="100%"
    layoutType="stripped"
    layoutOrientation="horizontal"
    parentIdMemberPath="parent"
    idMemberPath="id"
    labelMemberPath="name"
    valueMemberPath="pop"
    transitionDuration="500"
    rootTitle="Countries" >
</igr-treemap>
```

```html
<igc-treemap
    height="100%"
    width="100%"
    id="treemap"
    layout-type="stripped"
    layout-orientation="horizontal"
    parent-id-member-path="parent"
    id-member-path="id"
    label-member-path="name"
    value-member-path="pop"
    transition-duration="500"
    root-title="Countries" >
</igc-treemap>
```

```razor
<Treemap Height="100%" Width="100%"
    DataSource="Data"
    LayoutType="TreemapLayoutType.Stripped"
    LayoutOrientation="TreemapOrientation.Horizontal"
    ParentIdMemberPath="parent"
    IdMemberPath="id"
    LabelMemberPath="name"
    ValueMemberPath="pop"
    TransitionDuration="500"
    RootTitle="Countries" />
```


## Fill Scale
The following code demonstrates how to set fill scale on the Treemap.

```ts
import { TreemapFillScaleMode } from 'igniteui-angular-charts';
// ...
this.treeMap = new IgxTreemapComponent()
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

```ts
import { TreemapFillScaleMode } from 'igniteui-react-charts';
// ...
this.treeMap = new IgrTreemapComponent({ name: "treeMap" })
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

```ts
import { TreemapFillScaleMode } from 'igniteui-webcomponents-charts';
// ...
this.treeMap = document.getElementById("treeMap") as IgcTreemapComponent;
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

```razor
<Treemap Height="100%" Width="100%"
    DataSource="Data"
    ParentIdMemberPath="Parent"
    IdMemberPath="Name"
    LabelMemberPath="Name"
    ValueMemberPath="Pop"    
    FillScaleMode="TreemapFillScaleMode.Value"
    FillScaleMinimumValue="0"
    FillScaleMaximumValue="1500000000"
    FillBrushes="#4e62cf, #8a58d6"
    IsFillScaleLogarithmic="false"    
    RootTitle="Countries" />
```

<div class="divider--half"></div>