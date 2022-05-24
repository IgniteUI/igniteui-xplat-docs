---
title: $Platform$ Data Grid | Real-Time Data Grid and Tables | Localization | Infragistics
_description: Use Infragistics' $ProductName$ Data Table & Grid which supports localization. View $ProductName$ table tutorials!
_keywords: $Platform$ Table, Data Grid, cell accessibility, $ProductName$, Infragistics
mentionedTypes: ['Grid']
namespace: Infragistics.Controls
---

# $Platform$ Grid Localization

The $ProductName$ Data Table / Data Grid supports localizing the resource strings specific to the column options pop-up and summaries. Note, this is not intended to be used nor capable of translating the data.

<!-- Blazor -->
The Data Grid contains `SetCustomizedStringAsync` for assigning strings associated with the column options. The grid's `ActualDataSource` property also has this method for assigning resource strings necessary for the summaries.
<!-- end: Blazor -->

## $Platform$ Grid Localization Example

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-localization"
           alt="$Platform$ Grid Localization Example"
           github-src="grids/data-grid/localization">
</code-view>

<div class="divider--half"></div>