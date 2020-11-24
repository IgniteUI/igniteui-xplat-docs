---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Title and SubTitle | Infragistics
_description: Use the titles and subtitles of the Infragistics' $PlatformShort$ charts to add information to to top section. Check out the $ProductName$ graph's title and subtitles feature!
_keywords: $PlatformShort$ charts, data chart, chart title, chart subtitle, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Title and Subtitle

The `Title` and `Subtitle` feature of the $PlatformShort$ data chart component allows you to add information to the top section of the data chart. When adding a title or subtitle to the data chart, the content of the data chart automatically resizes allowing for the title and subtitle information that you provide.

## $PlatformShort$ Title and Subtitle Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-chart-titles-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-chart-titles-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/chart-titles"></sample-button>

</div>

<div class="divider--half"></div>

There are properties provided that allow you to style the text color, style, and margins of the titles and subtitles of the data chart. The following code-snippet demonstrates how you can set and customize the titles in the $PlatformShort$ data chart component:

```razor
<DataChart Height="600px" 
    Width="100%"ChartTitle="Energy Use Per Country"
    Subtitle="Results over a two year period"
    TitleTextColor="Red"
    TitleTextStyle="24pt Verdana"
    SubtitleTextColor="Red"
    SubtitleTextStyle="16pt Verdana" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data"
    height="600px"
    width="100%"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana">
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="600px"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana"/>
```

```html
<igc-data-chart id="chart"
    height="600px"
    width="100%"
    chart-title="Energy Use Per Country"
    subtitle="Results over a two year period"
    title-text-color="Red"
    title-text-style="24pt Verdana"
    subtitle-text-color="Red"
    subtitle-text-style="16pt Verdana">
</igc-data-chart>
```