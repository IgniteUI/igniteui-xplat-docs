---
title: {Platform} XDate Picker | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの {Platform} XDate Picker コンポーネントは、ユーザーの日付選択を支援します。{ProductName} でグラフと視覚化を改善します!
_keywords: {Platform} xdate picker, drop down, {ProductName}, Infragistics, ドロップダウン, インフラジスティックス
mentionedTypes: ['XDatePicker']
_language: ja
---
# {Platform} XDate Picker (XDate ピッカー) の概要

XDate Picker コンポーネントは、ドロップダウン カレンダー UI を使用して日、月、年を直感的に選択できます。これは、アプリケーション ユーザーが特定の日付を選択する必要があり、複数のエディターを組み合わせて日付範囲 UI を作成する場合に便利です。

> [!WARNING]
> `XDatePicker` コンポーネントは、{ProductName} のバージョン <!-- WebComponents -->5.0.0<!-- end: WebComponents --><!-- React -->18.7.0<!-- end: React --> 以降では非推奨です。サポートされている最新の {ProductName} Date Picker コンポーネントについては、「スケジュール」のそれぞれのページを参照してください。

## {Platform} XDate Picker の例

このサンプルは、単一の日付を選択するオプションを使用して `XDatePicker` を作成する方法を示しています。

`sample="/editors/date-picker/overview", height="350", alt="{Platform} XDate Picker の例"`



<!-- React, WebComponents -->
## 依存関係
XDate Picker コンポーネントをインストールするときに core と input のパッケージもインストールする必要があります。

```cmd
npm install --save {PackageCore}
npm install --save {PackageInputs}
npm install --save {PackageLayouts}
```
<!-- end: React, WebComponents -->

## コンポーネント モジュール

XDate Picker コンポーネントを使用するには、以下のモジュールを登録する必要があります。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbXDatePickerModule));
```

```ts
import { IgrXDatePickerModule } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();
```

```ts
import { IgcXDatePickerModule } from 'igniteui-webcomponents-inputs';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcXDatePickerModule);
```

<div class="divider--half"></div>

## 使用方法

{Platform} XDate Picker エディター コンポーネントは、デフォルトでは、テキスト領域、カレンダー ドロップダウン ボタン、およびクリア ボタンの 3 つの構成されます。これらの領域について以下に説明します。

- テキスト領域: エディターの `Value` プロパティに保存されている選択した日付を表示します。

- カレンダー: カレンダー ボタンをクリックすると、XDate Picker のカレンダー ドロップダウンが開きます。カレンダーが開き、現在選択されている `Value` の月が表示されます。`Value` が指定されていない場合、カレンダーは現在の日付に対応する月を表示します。上部の月をクリックすると、月のリストが表示され、年も同様です。月と年の可視化の左右にある矢印ボタンは、表示されている月を時系列で増減します。

- クリア ボタン: x アイコンは現在の値をクリアします。

| プロパティ | タイプ | 説明 |
| ---------|------|------------ |
| `IconColor` | string | カレンダー ボタンの色を変更します。 |
| `AllowTextInput`  |  bool   |  このプロパティを true に切り替えることで、XDate Picker の値を入力して変更できます。 |
| `DateFormat` | enum | デフォルトは DateShort です。例: 'mm/dd/yyyy'。DateLong に設定すると、エディターに表示される曜日を含めた日付が表示されます。例: 2021年4月14日水曜日。 |
| `FirstDayOfWeek` | enum | デフォルトは日曜日です。特定の曜日が、カレンダーの各週の行の最初の日として使用されます。例えば、月曜日から日曜日。 |
| `FormatString` | string  | DateShort を使用すると、日付の形式を構成できます。例えば、'dd/mm/yyyy'。`DateFormat` の DateLong と `FormatString` が設定されている場合、`DateFormat` は無視されることに注意してください。 |
| `Label`  |  string | XDate Picker の左上隅の日付の上にカスタム テキストを表示します。 |
| `MinDate` | DateTime | 以前の日付が選択または表示されないように制限します。 |
| `MaxDate` | DateTime | 後の日付が選択または表示されないように制限します。 |
| `Placeholder` | string  |  カレンダーの編集部分の値がクリアされたときに表示されるカスタム文字列。 |
| `ShowClearButton` | bool  |  デフォルトは true で、クリア ボタンはカレンダー ボタンのすぐ左にあり、X で視覚化されます。クリックすると、XDate Picker の `Value` がクリアされます。クリア ボタンの表示は、オンとオフを切り替えることができます。 |
| `ShowTodayButton`| bool  |  本日は、カレンダーが開かれた日付のすぐ下に表示されます。クリックすると、現在の日付が選択されます。本日のボタンの表示は、オンとオフを切り替えることができます。 |
| `ShowWeekNumbers` | bool | 週番号は、XDate Picker のドロップダウン部分の日付のすべての行の左側に番号として表示できます。週番号の表示のオンとオフを切り替えることができます。 |
| `FirstWeekOfYear` | enum | 年間の週の開始番号を構成します。FirstDay、FirstFourDayWeek、FirstFullWeek に設定できます。 |
| `OpenOnFocus` | bool | デフォルトでは、XDate Picker のドロップダウン部分はシングル クリックで開かれ、ユーザーはカレンダー ボタンをクリックしてカレンダーをドロップダウンする必要があります。 |
| `Value` | date | XDate Picker の値を設定し、ドロップダウン カレンダーで選択します。 |

ユーザーは、コントロールのさまざまなテキスト プロパティを使用して XDate Picker のフォントをカスタマイズできます。使用できるプロパティは `TextColor`、`TextFontFamily`、`TextFontSize`、`TextFontStyle`、および `TextFontWeight` です。

### 編集

次の例は、`XDatePicker` で編集を有効にする方法を示しています。

`sample="/editors/date-picker/editing", height="300", alt="{Platform} XDate Picker 編集の例"`



<div class="divider--half"></div>

### 日付制限

次の例は、`XDatePicker` で選択した日付を制限する方法を示しています。

`sample="/editors/date-picker/date-limits", height="360", alt="{Platform} XDate Picker Date 制限の例"`



<div class="divider--half"></div>

### 日付の書式

次の例は、`XDatePicker` で長い日付を適用する方法を示しています。

`sample="/editors/date-picker/format", height="350", alt="{Platform} XDate Picker 書式の例"`



<div class="divider--half"></div>

### 日付範囲

次の例は、複数の `XDatePicker` コントロールを組み合わせる方法を示しています。

`sample="/editors/date-picker/range", height="300", alt="{Platform} XDate Picker 日付範囲の例"`



<div class="divider--half"></div>

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- `XDatePicker`
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
