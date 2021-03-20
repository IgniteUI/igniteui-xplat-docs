---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Navigation | Infragistics
_description: Navigate Infragistics' $PlatformShort$ charts by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about $ProductName$ graph navigation capabilities!
_keywords: $PlatformShort$ charts, data chart, navigation, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'ModifierKeys']
---
# $PlatformShort$ Chart Navigation

In the $PlatformShort$ data chart component, navigation is disabled by default. Once enabled, you are able to zoom and pan the data chart either programmatically or in the UI.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation"
           alt="$PlatformShort$ Navigation Example"
           github-src="charts/data-chart/chart-navigation">
</code-view>

<div class="divider--half"></div>

## Required Modules

In order to use navigation in the data chart, you need to import and register the interactivity module. This can be done by using the following code:

```razor
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

```ts
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
IgrDataChartInteractivityModule.register();
```

```ts
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
IgcDataChartInteractivityModule.register();
```

## Chart Navigation with User Interactions

In order to allow navigation in the UI, you need to set either the `IsHorizontalZoomEnabled` and/or the `IsVerticalZoomEnabled` properties of the chart to true, depending on the direction that you wish to allow zooming. This will allow you to zoom the data chart by rolling a mouse wheel over it.

It is also possible to zoom or pan simply by clicking the buttons on the mouse or using touch. The `DefaultInteraction` property of the data chart determines what happens on mouse click or touch events. This property defaults to `DragZoom` and when set to this with zooming enabled, clicking and dragging will place a preview rectangle over the plot area that will become the zoomed area of the chart. This `DefaultInteraction` property can also be set to either `DragPan` to allow panning or `None` to prevent these operations.

The following code snippet demonstrates how you can enable base UI navigation in the $PlatformShort$ data chart component:

Note, the same API also applies to `XamCategoryChart` and `XamFinancialChart` components.

```razor
<DataChart Height="400px" Width="100%"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true">
</DataChart>
```

```html
<igx-data-chart width="100%" height="400px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="true">
</igx-data-chart>
```

```tsx
<IgrDataChart width="100%" height="400px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled={true} />
```

```html
<igc-data-chart width="100%" height="400px"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
</igc-data-chart>
```

## Chart Navigation with Mouse and Keyboard

Navigation in the $PlatformShort$ data chart component can happen with either the mouse or the keyboard once enabled. The following operations can be invoked using the following mouse or keyboard operations by default:

- **Panning**: Using arrow keys on keyboard or holding the Shift key and clicking and dragging with the mouse.
- **Zoom In**: Using the PageUp key on keyboard or rolling the mouse wheel up.
- **Zoom Out**: Using the PageDown key on keyboard or rolling the mouse wheel down.
- **Fit to Chart Plot Area**: Home key on the keyboard. There is no mouse operation for this.
- **Area Zoom**: Click and drag mouse within the plot area with the `DefaultInteraction` property set to its default, `DragZoom`.

The zoom and pan operations can also be enabled by using modifier keys by setting the `DragModifier` and `PanModifier` properties, respectively. These properties can be set to the following modifier keys, and when pressed, the corresponding operation will be enabled:

- Shift
- Alt
- Control
- Windows Key
- Apple Key
- None

The following code snippet demonstrates how you can enable UI navigation in the chart. The following will only allow zooming while holding the **Shift** key and panning while holding the **Alt** key:

Note, the same API also applies to `XamCategoryChart` and `XamFinancialChart` components.

```razor
<DataChart Width="100%" Height="400px"
    DefaultInteraction="InteractionState.None"
    DragModifier="ModifierKeys.Shift"
    PanModifier="ModifierKeys.Alt"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true">
</DataChart>
```

```html
<igx-data-chart width="100%" height="400px"
    defaultInteraction="None"
    dragModifier="Shift"
    panModifier="Alt"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="true">
</igx-data-chart>
```

```tsx
<IgrDataChart width="100%" height="400px"
    defaultInteraction="None"
    dragModifier="Shift"
    panModifier="Alt"
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}/>
```

```html
<igc-data-chart width="100%" height="400px"
    default-interaction="None"
    drag-modifier="Shift"
    pan-modifier="Alt"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
</igc-data-chart>
```

<!-- ## Chart Navigation with Overview Plus Detail Pane

In the `XamDataChart` control, there is an overlaid control that allows navigation. This control supports a preview of most supported series types as well as all navigation methods described above. This overlay is the overview plus detail pane, and it can be enabled by setting the `overviewPlusDetailPaneVisibility` property.

The following is a summary of the operations a user can carry out with the overview plus detail pane:

- `Zoom a chart incrementally`: Use the mouse wheel or the zoom in/out buttons of the overview plus detail pane.
- `Zoom a chart to a specific level`: Use the zoom slider of the overview plus detail pane.
- `Reset a chart to 100% zoom level`: Use the zoom reset button of the overview plus detail pane.
- `Pan chart in all directions`: Click and drag the window rectangle inside of the preview plot area on the overview plus detail pane.
- `Pan to a specific region of the chart`: Clicking outside of the window rectangle inside of the preview area will move the window rectangle to that area.
- `Change mouse drag interaction in the chart`: Use the cursor button on the overview plus detail pane. This will switch between panning and drag zooming with the mouse.

The following code snippet demonstrates how to enable the overview plus detail pane:

```html
// TODO
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px"
    overviewPlusDetailPaneVisibility="Visible">
</IgrDataChart>
``` -->

## Chart Navigation through Code

The $PlatformShort$ data chart component provides several navigation properties that are updated each time a zoom or pan operation happens in the data chart. You can also set each of these properties to zoom or pan the data chart programmatically. The following is a list of these properties:

- `WindowPositionHorizontal`: A numeric value describing the X portion of the content view rectangle displayed by the data chart.
- `WindowPositionVertical`: A numeric value describing the Y portion of the content view rectangle displayed by the data chart.
- `WindowRect`: An `Rect` object representing a rectangle that represents the portion of the chart that is currently in view. For example, a `WindowRect` of "0, 0, 1, 1" would be the entirety of the data chart.
- `WindowScaleHorizontal`: A numeric value describing the width portion of the content view rectangle displayed by the data chart.
- `WindowScaleVertical`: A numeric value describing the height portion of the content view rectangle displayed by the data chart.

The following code snippets show how to modify the view of the $PlatformShort$ data chart component programmatically. The following assumes you have a variable named "chart" to represent the $PlatformShort$ data chart component:

```razor
// Zoom in by a factor of 0.05
this.chart.windowScaleVertical -= 0.05;
this.chart.windowScaleHorizontal -= 0.05;
// Zoom out by a factor of 0.05
this.chart.windowScaleVertical += 0.05;
this.chart.windowScaleHorizontal += 0.05;
// Pan up by a factor of 0.05
this.chart.actualWindowPositionVertical -= 0.05;
// Pan down by a factor of 0.05
this.chart.actualWindowPositionVertical += 0.05;
// Pan left by a factor of 0.05
this.chart.actualWindowPositionHorizontal -= 0.05;
// Pan right by a factor of 0.05
this.chart.actualWindowPositionHorizontal += 0.05;
```

```ts
// Zoom in by a factor of 0.05
this.chart.windowScaleVertical -= 0.05;
this.chart.windowScaleHorizontal -= 0.05;
// Zoom out by a factor of 0.05
this.chart.windowScaleVertical += 0.05;
this.chart.windowScaleHorizontal += 0.05;
// Pan up by a factor of 0.05
this.chart.actualWindowPositionVertical -= 0.05;
// Pan down by a factor of 0.05
this.chart.actualWindowPositionVertical += 0.05;
// Pan left by a factor of 0.05
this.chart.actualWindowPositionHorizontal -= 0.05;
// Pan right by a factor of 0.05
this.chart.actualWindowPositionHorizontal += 0.05;
```
