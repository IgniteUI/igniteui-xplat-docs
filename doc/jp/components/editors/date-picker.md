---
title: $Platform$ 日付選択 | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $Platform$日付選択コンポーネントは、ユーザーの日付選択を支援します。Ignite UI for $Platform$ でグラフと視覚化を改善します!
_keywords: $Platform$ date picker, drop down, $ProductName$, Infragistics, 日付選択, ドロップダウン, インフラジスティックス
mentionedTypes: ['DatePicker']
_language: ja
---
# $Platform$ 日付選択の概要

日付選択コンポーネントは、ドロップダウン カレンダー UI を使用して日、月、年を直感的に選択できます。これは、アプリケーション ユーザーが特定の日付を選択する必要があり、複数のエディターを組み合わせて日付範囲 UI を作成する場合に便利です。

## $Platform$ 日付選択の例


<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-overview"
           alt="$Platform$ 日付選択の例"
           github-src="editors/date-picker/overview">
</code-view>

<!-- React, WebComponents -->
## 依存関係
日付選択コンポーネントをインストールするときに core と input のパッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageInputs}
</pre>
<!-- end: React, WebComponents -->

## モジュールの要件

日付選択コンポーネントを使用するには、以下のモジュールを登録する必要があります。

```razor
DatePickerModule.Register(IgniteUIBlazor);
```

```ts
import { IgrDatePickerModule } from 'igniteui-react-inputs';

IgrDatePickerModule.register();
```

```ts
import { IgcDatePickerModule } from 'igniteui-webcomponents-inputs';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcDatePickerModule);
```

<div class="divider--half"></div>

## 使用方法

$Platform$ 日付選択エディター コンポーネントは、デフォルトでは、テキスト領域、カレンダー ドロップダウン ボタン、およびクリア ボタンの 3 つの構成されます。これらの領域について以下に説明します。

- テキスト領域: エディターの `Value` プロパティに保存されている選択した日付を表示します。

- カレンダー: カレンダー ボタンをクリックすると、日付選択のカレンダー ドロップダウンが開きます。カレンダーが開き、現在選択されている `Value` の月が表示されます。`Value` が指定されていない場合、カレンダーは現在の日付に対応する月を表示します。上部の月をクリックすると、月のリストが表示され、年も同様です。月と年の可視化の左右にある矢印ボタンは、表示されている月を時系列で増減します。

- Clear Button: The 'x' icon will clear the current value.

プロパティ | タイプ | 説明
---------|------|------------
`IconColor` | string | Changes the color of the calendar button.
`AllowTextInput`  |  bool   |  The date picker's value can be typed-in and modified by toggling this property to true.
`DateFormat` | enum | Defaults to DateShort eg. 'mm/dd/yyyy'. When set to DateLong, the date displayed in the editor will appear as eg. Wednesday, April 14, 2021. 
`FirstDayOfWeek` | enum | Defaults to Sunday. A given day of the week will be used as the first day in each weekly row of the calendar. eg. Monday through Sunday.
`FormatString` | string  | When DateShort is used, the date's format can be configured eg. 'dd/mm/yyyy'. Note, if the `DateFormat`'s DateLong and `FormatString` are set then the `DateFormat` is ignored.
`Label`  |  string | Displays custom text above the date in the top-left corner of the Date Picker.
`MinDate` | DateTime | Restricts earlier dates from being selected or viewed.
`MaxDate` | DateTime | Restricts later dates from being selected or viewed.
`Placeholder` | string  |  A custom string to be displayed when the value within the edit portion of the calendar is cleared.
`ShowClearButton` | bool  |  Defaults to true, the clear button is directly to the left of the calendar button, visualized by an X. When clicked, it will clear the `Value` of the Date Picker. The clear button's visibility can be toggled on and off. 
`ShowTodayButton`| bool  |  The today is directly below the dates when the calendar is opened. When clicked, it will select the current date. The today button's visibility can be toggled on and off.
`ShowWeekNumbers` | bool | Week numbers can be displayed as a number, at the left of every row of dates, in the drop down portion of the date picker. The week number's visibility can be toggled on and off. 
`FirstWeekOfYear` | enum | Configures the start of the week numbers for the entire year. Can be set to FirstDay, FirstFourDayWeek, FirstFullWeek.
`OpenOnFocus` | bool | By default, the dropdown portion of the Date Picker is opened on single click, forcing the user to click the calendar button to drop down the calendar.
`Value` | date | Sets the value of the Date Picker and selects it in the dropdown calendar. 

ユーザーは、コントロールのさまざまなテキスト プロパティを使用して日付選択のフォントをカスタマイズできます。使用できるプロパティは `TextColor`、`TextFontFamily`、`TextFontSize`、`TextFontStyle`、および `TextFontWeight` です。

### 編集

The following example demonstrates how to enable editing in the `DatePicker`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-editing"
           alt="$PlatformShort$ Date Picker 編集の例"
           github-src="editors/date-picker/editing">
</code-view>

<div class="divider--half"></div>

### Date Limits

The following example demonstrates how to restrict selected dates in the `DatePicker`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-date-limits"
           alt="$PlatformShort$ Date Picker Date Limits Example"
           github-src="editors/date-picker/date-limits">
</code-view>

<div class="divider--half"></div>

### Date Formats

The following example demonstrates how apply a long date in the `DatePicker`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-format"
           alt="$PlatformShort$ Date Picker Format Example"
           github-src="editors/date-picker/format">
</code-view>

<div class="divider--half"></div>

### Date Ranges

The following example demonstrates how combine multiple `DatePicker` controls. 

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-range"
           alt="$PlatformShort$ Date Picker Date Range Example"
           github-src="editors/date-picker/range">
</code-view>

<div class="divider--half"></div>

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです:

- `DatePicker`
- `IconColor`
- `AllowTextInput`
- `DateFormat`
- `FirstDayOfWeek`
- `FormatString`
- `Label`
- `MinDate`
- `MaxDate`
- `Placeholder`
- `ShowClearButton`
- `ShowTodayButton`
- `ShowWeekNumbers`
- `FirstWeekOfYear`
- `OpenOnFocus`
- `Value`
- `TextColor`
- `TextFontFamily`
- `TextFontSize`
- `TextFontStyle`
- `TextFontWeight`
