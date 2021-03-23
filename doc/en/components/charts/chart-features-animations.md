---
title: $PlatformShort$ Chart Animations | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Animations
_keywords: $PlatformShort$ Charts, Animations, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Chart Animations

Animations allows you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the origin of y-axis.

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-animations" 
           alt="$PlatformShort$ Configuration Options Example" 
           github-src="charts/category-chart/line-chart-with-animations">
</code-view>

<div class="divider--half"></div>

## Animation Settings

| Members | Description |
| ------------------|---------------------|
|`IsTransitionInEnabled`| By default, transition in animations are disabled but you can enable them by setting this property.|
| `TransitionInDuration` | Specifies how long, in milliseconds, a transition should take.|
|`TransitionInMode` | Sets the desired transition type. Automatic selection of the transition type based on the series type is possible, too, by setting the property to `Auto` (default). The additional modes consist of multi-directional accordion or sweeping effects.|

The following code example demonstrates how to enable transition in animations and have the chart accordion in from the right. 

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    IsTransitionInEnabled="true"
    TransitionInDuration="1000"
    TransitionInMode="CategoryTransitionInMode.AccordionFromRight"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="1000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    isTransitionInEnabled={true}
    transitionInDuration={1000}
    transitionInMode="AccordionFromRight" />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    is-transition-in-enabled="true"
    transition-in-duration="1000"
    transition-in-mode="AccordionFromRight">
</igc-category-chart>
```