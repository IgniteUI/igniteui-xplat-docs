---
title: $Platform$ Data Chart | Data Visualization Tools | Title and SubTitle | Infragistics
_description: Use the titles and subtitles of the Infragistics' $Platform$ charts to add information to to top section. Check out the $ProductName$ graph's title and subtitles feature!
_keywords: $Platform$ charts, data chart, chart title, chart subtitle, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $Platform$ Title and Subtitle

The `Title` and `Subtitle` feature of the $Platform$ data chart component allows you to add information to the top section of the data chart. When adding a title or subtitle to the data chart, the content of the data chart automatically resizes allowing for the title and subtitle information that you provide.

## $Platform$ Title and Subtitle Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles"
           alt="$Platform$ Title and Subtitle Example"
           github-src="charts/data-chart/chart-titles">
</code-view>

<div class="divider--half"></div>

There are properties provided that allow you to style the text color, style, and margins of the titles and subtitles of the data chart. The following code-snippet demonstrates how you can set and customize the titles in the $Platform$ data chart component:

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