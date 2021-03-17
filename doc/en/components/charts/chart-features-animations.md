---
title: $PlatformShort$ Chart Animations | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Animations
_keywords: $PlatformShort$ Charts, Animations, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Chart Animations

Animations allows you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the y-axis.

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options" 
           alt="$PlatformShort$ Configuration Options Example" 
           github-src="charts/category-chart/marker-options">
</code-view>

<div class="divider--half"></div>

## Transition In Animations

By default, transition in animations are disabled and you can enable transition-in animations by setting the `IsTransitionInEnabled` option to “true”.

Transition in animations can be configured in terms of transition type, speed of the individual data points relative to each other, and the easing transition (managed by an easing function). The chart also resizes the title and subtitle information.

The transition type is configured by setting the transitionInMode option to the desired transition name. Automatic selection of the transition type based on the series type is possible, too, by setting the property to `Auto` (default).

The following code example demonstrates how to enable transition in animations and have the chart accordion in from the right.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    IsTransitionInEnabled="true"
    TransitionInDuration="5000"
    TransitionInMode="CategoryTransitionInMode.AccordionFromRight"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="5000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    isTransitionInEnabled={true}
    transitionInDuration={5000}
    transitionInMode="AccordionFromRight" />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    is-transition-in-enabled="true"
    transition-in-duration="5000"
    transition-in-mode="AccordionFromRight">
</igc-category-chart>
```