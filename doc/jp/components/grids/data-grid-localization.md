---
title: $Platform$ データ グリッド | リアルタイム データ グリッドとテーブル | ローカリゼーション | インフラジスティックス
_description: ローカリゼーションをサポートするインフラジスティックスの $ProductName$ データ テーブルとグリッドを試しましょう。$ProductName$ テーブルのチュートリアルをご覧ください。
_keywords: $Platform$ テーブル、データ グリッド、セル アクセシビリティ、$ProductName$、インフラジスティック
mentionedTypes: ['Grid']
namespace: Infragistics.Controls
_language: ja
---

# $Platform$ グリッドのローカリゼーション

$ProductName$ データ テーブル / データ グリッドは、列オプションのポップアップと要約に固有のリソース文字列のローカライズをサポートします。これは、データの翻訳に使用することを意図したものではないことに注意してください。

<!-- Blazor -->
データ グリッドには、列オプションに関連付けられた文字列を割り当てるための `SetCustomizedStringAsync` が含まれています。グリッドの `ActualDataSource` プロパティには、集計に必要なリソース文字列を割り当てるためのこのメソッドもあります。
<!-- end: Blazor -->

## $Platform$ グリッド ローカリゼーションの例

<code-view style="height: 600px"
    data-demos-base-url="{environment:dvDemosBaseUrl}"
    iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-localization"
    alt="$Platform$ グリッド ローカリゼーションの例"
    github-src="grids/data-grid/localization">
</code-view>

<div class="divider--half"></div>

## リソース文字列

これは、グリッドをローカライズするための文字列の完全なリストです。

### 列オプションの文字列

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

### 集計の文字列

- DataSource_Summary_Avg  
- DataSource_Summary_Count
- DataSource_Summary_Max  
- DataSource_Summary_Min  
- DataSource_Summary_Sum  

<!-- React, WebComponents -->
### 日時列の文字列

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

### コンボボックス列の文字列

- NoMatches
<!-- end: React, WebComponents -->
