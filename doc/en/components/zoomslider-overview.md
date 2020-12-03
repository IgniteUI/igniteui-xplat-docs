---
title: $PlatformShort$ ZoomSlider | Data Visualization Tools | Navigation | Zooming | DataChart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ zoom slider control to easily display a subset of data with two handles representing minimum and maximum values. Improve your data visualization with $ProductName$ zoom slider!
_keywords: zoom slider, $ProductName$, Infragistics, data chart
mentionedTypes: ['ZoomSlider, XamDataChart']
---
# $PlatformShort$ Zoom Slider Overview
The $PlatformShort$ ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart or CategoryChart.

## $PlatformShort$ Zoom Slider Overview Example

<div class="sample-container loading" style="height: 600px">
    <iframe id="zoomslider-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/zoomslider-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Zoom Slider Overview Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="zoomslider-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<sample-button src="charts/zoomslider/overview"></sample-button>

<div class="divider--half"></div>

## Usage

Feature Name        | Description
--------------------|-----------------------
Scrollbar navigation       | Users can change scale and scroll through ranges of data using the built-in capabilities of the ZoomSlider scrollbar.
Panning and zooming       | Users can adjust the display scale by dragging the edges of the thumb pad to either make the current display cover a larger range (zoom out) or a smaller range (zoom in).
Multiple user interaction options       | All mouse user interactions are redundantly supported through touch and most of them – through the keyboard. For details, see User Interactions and Usability.
Touch support       |  On touch-enabled devices, users can enjoy the full ZoomSlider functionality. All mouse interactions are supported in touch environment.
Extensibility       | The ZoomSlider control supports DataChart control out-of the box.
Configurable zoom-range window       | The initial zoom-range window width and position, as well as its minimum size, are configurable.


<!-- Angular, React, WebComponents -->
## Dependencies
When installing the $PlatformShort$ chart component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules
The `ZoomSlider` requires the following modules.

```razor
ZoomSliderModule
```

```ts
import { IgxZoomSliderModule } from 'igniteui-angular-charts';
import { IgxZoomSliderComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxZoomSliderModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrZoomSliderModule } from 'igniteui-react-charts';
import { IgrZoomSlider } from 'igniteui-react-charts';

IgrDataChartInteractivityModule.register();
```

```ts
import { IgcZoomSliderModule } from 'igniteui-webcomponents-charts';
import { IgcZoomSliderComponent } from "igniteui-webcomponents-charts";

IgcZoomSliderModule.register();

```

## Code Snippet
The following code demonstrates how to setup the ZoomSlider.

```html
<igx-zoom-slider
  width="100%"
  height="150px">
</igx-zoom-slider>
```

```tsx
 <IgrZoomSlider
  width="100%"
  height="100%"
 />
```


```html
  <igc-zoom-slider
      name="zoomSlider"
      width="100%"
      height="160px" >
  </igc-zoom-slider>
```
<div class="divider--half"></div>