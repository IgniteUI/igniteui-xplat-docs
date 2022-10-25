---
title: {Platform} 日付選択 | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの {Platform}日付選択コンポーネントは、ユーザーの日付選択を支援します。Ignite UI for {Platform} でグラフと視覚化を改善します!
_keywords: {Platform} date picker, drop down, {ProductName}, Infragistics, 日付選択, ドロップダウン, インフラジスティックス
mentionedTypes: ['DatePicker']
_language: ja
---
# {Platform} 日付選択の概要

日付選択コンポーネントは、ドロップダウン カレンダー UI を使用して日、月、年を直感的に選択できます。これは、アプリケーション ユーザーが特定の日付を選択する必要があり、複数のエディターを組み合わせて日付範囲 UI を作成する場合に便利です。

## {Platform} 日付選択の例

このサンプルは、単一の日付を選択するオプションを使用して `DatePicker` を作成する方法を示しています。

<code-view style="height: 350px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-overview"
           alt="{Platform} 日付選択の例"
           github-src="editors/date-picker/overview">
</code-view>

<!-- React, WebComponents -->
## 依存関係
日付選択コンポーネントをインストールするときに core と input のパッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageInputs}
npm install --save {PackageLayouts}
</pre>
<!-- end: React, WebComponents -->

## モジュールの要件

日付選択コンポーネントを使用するには、以下のモジュールを登録する必要があります。


Open the Program.cs
```razor
builder.Services.AddIgniteUIBlazor(typeof(IgbDatePickerModule));
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

{Platform} 日付選択エディター コンポーネントは、デフォルトでは、テキスト領域、カレンダー ドロップダウン ボタン、およびクリア ボタンの 3 つの構成されます。これらの領域について以下に説明します。

- テキスト領域: エディターの `Value` プロパティに保存されている選択した日付を表示します。

- カレンダー: カレンダー ボタンをクリックすると、日付選択のカレンダー ドロップダウンが開きます。カレンダーが開き、現在選択されている `Value` の月が表示されます。`Value` が指定されていない場合、カレンダーは現在の日付に対応する月を表示します。上部の月をクリックすると、月のリストが表示され、年も同様です。月と年の可視化の左右にある矢印ボタンは、表示されている月を時系列で増減します。

- クリア ボタン: x アイコンは現在の値をクリアします。

プロパティ | タイプ | 説明
---------|------|------------
`IconColor` | string | カレンダー ボタンの色を変更します。
`AllowTextInput`  |  bool   |  このプロパティを true に切り替えることで、日付ピッカーの値を入力して変更できます。
`DateFormat` | enum | デフォルトは DateShort です。例: 'mm/dd/yyyy'。DateLong に設定すると、エディターに表示される曜日を含めた日付が表示されます。例: 2021年4月14日水曜日。
`FirstDayOfWeek` | enum | デフォルトは日曜日です。特定の曜日が、カレンダーの各週の行の最初の日として使用されます。例えば、月曜日から日曜日。
`FormatString` | string  | DateShort を使用すると、日付の形式を構成できます。例えば、'dd/mm/yyyy'。`DateFormat` の DateLong と `FormatString` が設定されている場合、`DateFormat` は無視されることに注意してください。
`Label`  |  string | 日付ピッカーの左上隅の日付の上にカスタム テキストを表示します。
`MinDate` | DateTime | 以前の日付が選択または表示されないように制限します。
`MaxDate` | DateTime | 後の日付が選択または表示されないように制限します。
`Placeholder` | string  |  カレンダーの編集部分の値がクリアされたときに表示されるカスタム文字列。
`ShowClearButton` | bool  |  デフォルトは true で、クリア ボタンはカレンダー ボタンのすぐ左にあり、X で視覚化されます。クリックすると、日付ピッカーの `Value` がクリアされます。クリア ボタンの表示は、オンとオフを切り替えることができます。
`ShowTodayButton`| bool  |  本日は、カレンダーが開かれた日付のすぐ下に表示されます。クリックすると、現在の日付が選択されます。本日のボタンの表示は、オンとオフを切り替えることができます。
`ShowWeekNumbers` | bool | 週番号は、日付ピッカーのドロップダウン部分の日付のすべての行の左側に番号として表示できます。週番号の表示のオンとオフを切り替えることができます。
`FirstWeekOfYear` | enum | 年間の週の開始番号を構成します。FirstDay、FirstFourDayWeek、FirstFullWeek に設定できます。
`OpenOnFocus` | bool | デフォルトでは、日付ピッカーのドロップダウン部分はシングル クリックで開かれ、ユーザーはカレンダー ボタンをクリックしてカレンダーをドロップダウンする必要があります。
`Value` | date | 日付ピッカーの値を設定し、ドロップダウン カレンダーで選択します。

ユーザーは、コントロールのさまざまなテキスト プロパティを使用して日付選択のフォントをカスタマイズできます。使用できるプロパティは `TextColor`、`TextFontFamily`、`TextFontSize`、`TextFontStyle`、および `TextFontWeight` です。

### 編集

次の例は、`DatePicker` で編集を有効にする方法を示しています。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-editing"
           alt="{Platform} Date Picker 編集の例"
           github-src="editors/date-picker/editing">
</code-view>

<div class="divider--half"></div>

### 日付制限

次の例は、`DatePicker` で選択した日付を制限する方法を示しています。

<code-view style="height: 360px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-date-limits"
           alt="{Platform} Date Picker 日付制限の例"
           github-src="editors/date-picker/date-limits">
</code-view>

<div class="divider--half"></div>

### 日付の書式

次の例は、`DatePicker` で長い日付を適用する方法を示しています。

<code-view style="height: 350px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-format"
           alt="{Platform} Date Picker 書式の例"
           github-src="editors/date-picker/format">
</code-view>

<div class="divider--half"></div>

### 日付範囲

次の例は、複数の `DatePicker` コントロールを組み合わせる方法を示しています。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-range"
           alt="{Platform} Date Picker 日付範囲の例"
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
