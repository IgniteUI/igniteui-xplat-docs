---
title: {Platform} Data Grid | Real-Time Data Grid and Tables | Localization | Infragistics
_description: Use Infragistics' {ProductName} Data Table & Grid which supports localization. View {ProductName} table tutorials!
_keywords: {Platform} Table, Data Grid, cell accessibility, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Localization

The {ProductName} Data Table / Data Grid supports localizing the resource strings specific to the column options pop-up and summaries. Note, this is not intended to be used nor capable of translating the data.

<!-- Blazor -->
The Data Grid contains `SetCustomizedStringAsync` for assigning strings associated with the column options. The grid's `ActualDataSource` property also has this method for assigning resource strings necessary for the summaries.
<!-- end: Blazor -->

## {Platform} Grid Localization Example

<code-view style="height: 600px"
    data-demos-base-url="{environment:dvDemosBaseUrl}"
    iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-localization"
    alt="{Platform} Grid Localization Example"
    github-src="grids/data-grid/localization">
</code-view>

<div class="divider--half"></div>

## Resource Strings

This is the full list of strings to localize the grid.

### Column Option Strings

- Apply
- Cancel
- Clear_Column_Filter
- Column_Move
- Column_Move_Left
- Column_Move_Right
- Column_Pin
- Column_Pin_Left
- Column_Pin_Right
- Column_Sort
- Column_Sort_Ascending
- Column_Sort_Descending
- Filter_Columns_List
- Search
- Select_All
- ComparisonOperator_Bottom
- ComparisonOperator_BottomPercentile
- ComparisonOperator_Contains
- ComparisonOperator_DoesNotContain
- ComparisonOperator_DoesNotEndWith
- ComparisonOperator_DoesNotMatch
- ComparisonOperator_DoesNotStartWith
- ComparisonOperator_Empty
- ComparisonOperator_EndsWith
- ComparisonOperator_Equals
- ComparisonOperator_False
- ComparisonOperator_GreaterThan
- ComparisonOperator_GreaterThanOrEqualTo
- ComparisonOperator_LastMonth
- ComparisonOperator_LastQuarter
- ComparisonOperator_LastWeek
- ComparisonOperator_LastYear
- ComparisonOperator_LessThan
- ComparisonOperator_LessThanOrEqualTo
- ComparisonOperator_NextMonth
- ComparisonOperator_NextQuarter
- ComparisonOperator_NextWeek
- ComparisonOperator_NextYear
- ComparisonOperator_NotEmpty
- ComparisonOperator_NotEquals
- ComparisonOperator_StartsWith
- ComparisonOperator_ThisMonth
- ComparisonOperator_ThisQuarter
- ComparisonOperator_ThisWeek
- ComparisonOperator_ThisYear
- ComparisonOperator_Today
- ComparisonOperator_Tomorrow
- ComparisonOperator_Top
- ComparisonOperator_TopPercentile
- ComparisonOperator_True
- ComparisonOperator_Yesterday
- Column_Options_Summary_Average
- Column_Options_Summary_Count
- Column_Options_Summary_Maximum
- Column_Options_Summary_Minimum
- Column_Options_Summary_Sum
- Column_Options_Summaries

### Summary Strings

- DataSource_Summary_Avg
- DataSource_Summary_Count
- DataSource_Summary_Max
- DataSource_Summary_Min
- DataSource_Summary_Sum

<!-- React, WebComponents -->
### Date-Time Column Strings

- January_Full
- January_Short
- February_Full
- February_Short
- March_Full
- March_Short
- April_Full
- April_Short
- May_Full
- May_Short
- June_Full
- June_Short
- July_Full
- July_Short
- August_Full
- August_Short
- September_Full
- September_Short
- October_Full
- October_Short
- November_Full
- November_Short
- December_Full
- December_Short
- Monday_Full
- Monday_Short
- Monday_Single
- Thursday_Single
- Today
- Tuesday_Full
- Tuesday_Short
- Tuesday_Single
- Wednesday_Full
- Wednesday_Short
- Wednesday_Single
- Thursday_Full
- Thursday_Short
- Friday_Full
- Friday_Short
- Friday_Single
- Saturday_Full
- Saturday_Short
- Saturday_Single
- Sunday_Full
- Sunday_Short
- Sunday_Single

### ComboBox Column Strings

- NoMatches
<!-- end: React, WebComponents -->

## API References

 - `ActualDataSource`
 - `SetCustomizedStringAsync`