---
title: $Platform$ Calendar | Calendar | インフラジスティックス
_description: アプリケーションが日付情報を表示し、ユーザーが $ProductName$ Calendar コンポーネントを使用して日付情報を入力するための直感的な Calendar を作成します。
_keywords: $Platform$ Calendar, $Platform$ カレンダー, $ProductName$, インフラジスティックス
_language: ja
---

# $Platform$ Calendar (カレンダー) の概要
$ProductName$ Calendar コンポーネントは、日付情報を表示するための簡単で直感的な方法を提供します。ユーザーは、単一選択、複数選択、または範囲選択の 3 つの異なる選択モードから選択できます。


## $Platform$ Calendar の例
<div class="divider--half"></div>

<code-view style="height: 480px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-overview"
           alt="$Platform$ Calendar の例"
           github-src="scheduling/calendar/overview">
</code-view>

## 使用方法

Calendar コンポーネントの使用を開始するには、最初に次のコマンドを入力して $ProductName$ パッケージをインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageComponents}
</pre>

次の手順は、[`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) をインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録することです。

```ts
import { defineComponents, IgcCalendarComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);
```

### 単一選択の Calendar

`IgcCalendarComponent` のインスタンス化は、html に配置するのと同じくらい簡単です。これにより、現在の月が単一選択モードで表示されます。


```html
<!-- Single selection mode -->
<igc-calendar></igc-calendar>
```

### 複数選択

`selection` プロパティを使用して、デフォルト モードを簡単に変更できます:

```html
<!-- Multiple selection mode -->
<igc-calendar selection="multiple"></igc-calendar>
```

<code-view style="height: 370px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-multiple-selection"
           alt="$Platform$ Calendar 複数選択の例"
           github-src="scheduling/calendar/multiple-selection ">
</code-view>

### 範囲選択

同じ方法に従って、`range` 選択モードに切り替えることができます:

```html
<!-- Range selection mode -->
<igc-calendar selection="range"></igc-calendar>
```

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-range-selection"
           alt="$Platform$ Calendar 範囲選択の例"
           github-src="scheduling/calendar/range-selection">
</code-view>

### Active View と Date

Calendar コンポーネントを使用すると、日、月、年の 3 つの異なるビューを切り替えることができます。コンポーネントの `activeView` プロパティは、現在のビューを反映します。デフォルトでは、Calendar は最初に読み込まれたときに現在の日付を表示します。これは、`activeDate` プロパティを設定することで変更できます。`activeDate` プロパティは、エンド ユーザーが現在表示している日付の変更も反映します。

### ヘッダー オプション

デフォルトでは、Calendar コンポーネントは、選択された日付に関する情報を含むヘッダー領域を描画します。`hasHeader` プロパティを `false` に設定することで、ヘッダーを非表示にできます。`headerOrientation` プロパティを使用して、ヘッダーの`垂直方向`または`水平方向`を構成することもできます。

> [!NOTE]
> 選択が複数の場合、Calendar ヘッダーが描画されないことに注意してください。

> [!NOTE]
> Calendar の DOM プロパティは `camelCase` の命名を使用し、対応する HTML 属性は `kebab-case` を使用していることに注意してください。たとえば、`headerOrientation` プロパティは `header-orientation` 属性に対応します。

$ProductName$ Calendar コンポーネントは、ヘッダーのタイトルをカスタマイズできる `title` スロットを公開します。

```html
<igc-calendar selection="range" header-orientation="vertical">
    <span slot="title">Trip dates</span>
</igc-calendar>
```

次のサンプルは、上記の構成を示しています:

<code-view style="height: 370px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-header"
           alt="$Platform$ Calendar ヘッダーの例"
           github-src="scheduling/calendar/header">
</code-view>

### ローカライズおよび書式設定

カレンダーにおいてローカライズおよび書式設定はとても重要な要素です。`IgcCalendarComponent` では、これらは `locale`、`formatOptions`、`weekStart` のプロパティを介して制御およびカスタマイズされます。

先に進んで、他のカスタマイズと一緒にそれらを試してみましょう。最初に設定する必要があるのは、週の開始日を制御する `weekStart` です。デフォルトは `sunday` なので、`monday` に設定します。また、Calendar ビューで月と平日を書式設定するために使用されるオプションを指定する `formatOptions` プロパティをカスタマイズします。最後に、ユーザーの場所の選択に基づいて、`locale` プロパティを値に設定します:

```html
<igc-radio-group alignment="horizontal">
    <igc-radio name="locale" value="en" checked>EN</igc-radio>
    <igc-radio name="locale" value="de">DE</igc-radio>
    <igc-radio name="locale" value="fr">FR</igc-radio>
    <igc-radio name="locale" value="ar">AR</igc-radio>
    <igc-radio name="locale" value="ja">JA</igc-radio>
</igc-radio-group>

<igc-calendar 
    id="calendar1"
    week-start="monday"
>
</igc-calendar>
```

```ts
this.calendar = document.getElementById('calendar1') as IgcCalendarComponent;
this.calendar.formatOptions = {
    month: 'short',
    weekday: 'short'
};

this.radios = document.querySelectorAll('igc-radio') as NodeListOf<IgcRadioComponent>;
this.radios.forEach(radio => {
    radio.addEventListener('igcChange', () => {
        if (radio.checked) {
            this.calendar.locale = radio.value;
        }
    });
})
```

すべて適切に設定できると、カスタマイズされた表示の Calendar ができあがります。これにより、ユーザーの選択に基づいてロケールの表現も変更されます。以下は結果です:

<code-view style="height: 520px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-formatting"
           alt="$Platform$ Calendar 書式設定の例"
           github-src="scheduling/calendar/formatting">
</code-view>

### 日付の無効化

場合によっては、エンド ユーザーが選択できない Calendar の日付を無効にしたいことがあります。この機能は、`disabledDates` プロパティを使用して実現されます。`disabledDates` プロパティは、`DateRangeDescriptor` オブジェクトの配列です。各記述子には `type` があり、オプションで `Date` オブジェクトの配列である `dateRange` があります。

`type` プロパティで使用できるオプションは次のとおりです:
*  `After` - `dateRange` の最初の日付以降の日付を無効にします。
*  `Before` - `dateRange` の最初の日付より前の日付を無効にします。
*  `Between` - `dateRange` の最初の日付と 2 番目の日付の間の日付を無効にします。
*  `Specific` - `dateRange` 配列で指定された日付を無効にします。
*  `Weekdays` - すべての平日を無効にします。
*  `Weekends` - すべての週末を無効にします。

現在の月の 3 日から 8 日の日付を無効にするサンプルを作成します。

```ts
const today = new Date(Date.now());
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: range }];
```

これらの構成では、次の結果が得られます:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-disabled-dates"
           alt="$Platform$ Calendar 無効な日付の例"
           github-src="scheduling/calendar/disabled-dates">
</code-view>

### 特定の日付

`specialDates` プロパティは、`disabledDates` とほぼ同じ構成原則を使用しています。特別な日付は強調表示されたルック アンド フィールを持ち、無効な日付とは異なり、選択することができます。

Calendar に特別な日付を追加しましょう。これを行うために、`DateRangeDescriptor` を作成し、現在の月の 3 日から 8 日までの日付を渡します。

```ts
const today = new Date();
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.specialDates = [{ type: DateRangeType.Between, dateRange: range }];
```

次のデモは、休暇申請オプション付きの Calendar を示しています。

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-special-dates"
           alt="$Platform$ Calendar 特定の日付の例"
           github-src="scheduling/calendar/special-dates">
</code-view>

### 週番号

`showWeekNumbers` プロパティを使用して、Calendar コンポーネントの週番号を表示できます。これを行うには、対応するブール属性 `show-week-numbers` を次のように使用します:

```html
<igc-calendar show-week-numbers></igc-calendar>
```
次のデモは、週番号が有効になっている Calendar を示しています:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-week-numbers"
           alt="$Platform$ Calendar 週番号の例"
           github-src="scheduling/calendar/week-numbers">
</code-view>

### 複数の月

`visibleMonths` プロパティを使用すると、Calendar が日ビューのときに 1 か月以上表示できます。複数の月が表示されている場合は、`orientation` プロパティを使用して、月を垂直方向にスタックするか水平方向にスタックするかを構成できます。デフォルトでは、`orientation` プロパティは `horizontal` に設定されています。

Calendar には、前月と翌月の前後の日付が表示されます。これらの日付を非表示にするには、`hideOutsideDays` プロパティを `true` に設定するか、対応するブール属性 `hide-outside-days` を使用します。

```html
<igc-calendar visible-months="2" hide-outside-days></igc-calendar>
```

次のサンプルは、複数月の構成を示しています:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-multiple-months"
           alt="$Platform$ 複数の月の例"
           github-src="scheduling/calendar/multiple-months">
</code-view>

### サイズ

`size` プロパティを変更することで、Calendar の内部要素のサイズと間隔を制御できます。デフォルトの `size` 値は `large` です。

<code-view style="height: 520px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-size"
           alt="$Platform$ Calendar サイズの例"
           github-src="scheduling/calendar/size">
</code-view>

### イベント

選択した日付がエンド ユーザーによって変更されると、Calendar コンポーネントは `igcChange` イベントを発行します。このようにイベントをサブスクライブできます:

```ts
this.calendar.addEventListener('igcChange', ev => console.log(ev.detail));
```

## キーボード ナビゲーション

<kbd>Tab</kbd> キーを使用してページを移動する場合、`IgcCalendarComponent` が [W3 アクセシビリティ推奨事項 (英語)](https://www.w3.org/TR/wai-aria-practices/#layoutGrid)に基づいて以下のタブ ストップを導入することに注意してください。
- [月の選択] ボタン
- [年の選択] ボタン
- [前へ] ボタン
- [次へ] ボタン
- アクティブな日付要素

`IgcCalendarComponent` コンポーネントの**日/月/年**がフォーカスされている場合は、次を使用します:
- <kbd>PageUp</kbd> キーを押すと、前の月/年のページに移動します。
- <kbd>PageDown</kbd> キーを押すと、次の月/年のページに移動します。
- <kbd>Home</kbd> キーを使用して、現在の月の最初の日/最初の月を表示/最初の年を表示します。
- <kbd>End</kbd> キーを押すと、当月/先月/昨年の最終日にフォーカスされます。
- <kbd>矢印</kbd> キーを使用して、日/月/年をナビゲートします。最初の項目の前と最後の項目の後に移動すると、ビューが次/前の月/年のページに切り替わります。

`days` ビュー内の**日**がフォーカスされている場合は、次を使用します:
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> キーで前年に移動します。
- <kbd>Shift</kbd> + <kbd>PageDown</kbd> キーを押して翌年に移動します。
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーを押して、現在フォーカスされている日を選択します。

`months` ビュー内の**月**がフォーカスされている場合は、次を使用します:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーを押すと、`activeDate` が現在フォーカスされている月に変更され、`days` ビューに切り替わります。

`years` ビュー内の**年**がフォーカスされている場合は、次を使用します:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーを使用して、`activeDate` を現在フォーカスされている年に変更し、`months` ビューに切り替えます。

サブヘッダー内の**前**または**次**のボタンにフォーカスがある場合は、次を使用します:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーを押すと、前/翌月/年のページに切り替わります。

サブヘッダー内の**月**ボタンにフォーカスがある場合は、次を使用します:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーを押して、`months` ビューに切り替えます。

サブヘッダー内の**年**ボタンにフォーカスがある場合は、次を使用します:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーを押して、`years` ビューに切り替えます。

## スタイル設定

Calendar コンポーネントは、その内部要素のほぼすべての CSS パーツを公開します。次の表に、Calendar によって公開されるすべての CSS パーツを示します:

|名前|説明|
|--|--|
| header | ヘッダー要素。 |
| header-title | ヘッダーのタイトル要素。 |
| header-date | ヘッダーの日付要素。 |
| content | ビューとナビゲーション要素を含むコンテンツ要素。 |
| navigation | ナビゲーション コンテナー要素。 |
| months-navigation | 月のナビゲーション ボタン要素。 |
| years-navigation | 年のナビゲーション ボタン要素。 |
| years-range | 年の範囲の要素。|
| navigation-buttons | ナビゲーション ボタン コンテナー。 |
| navigation-button | 前/次のナビゲーション ボタン。 |
| days-view-container | 日ビュー コンテナー要素。 |
| days-view | 日ビュー要素。 |
| months-view | 月ビュー要素。 |
| years-view | 年ビュー要素。 |
| days-row | 日行要素。 |
| label | 週ヘッダー ラベル要素。 |
| week-number | 週番号要素。 |
| week-number-inner | 週番号の内部要素。 |
| date | 日付要素。 |
| date-inner | 日付の内部要素。|
| first | 最初に選択された日付要素。|
| last | 最後に選択された日付要素。 |
| inactive | 非アクティブな日付要素。 |
| hidden | 非表示の日付要素。|
| weekend | 週末の日付要素。 |
| range | 範囲選択の要素。 |
| special | 特別な日付要素。|
| disabled | 無効な日付要素。|
| single | 単一選択の日付要素。 |
| preview | 範囲選択プレビュー日付要素。|
| month | 月の要素。 |
| month-inner | 月の内部要素。 |
| year | 年の要素。 |
| year-inner | 年の内部要素。 |
| selected | 選択された状態を示します。日付、月、年の要素に適用されます。 |
| current | 現在の状態を示します。日付、月、年の要素に適用されます。 |

これらの CSS パーツを使用して、次のように Calendar コンポーネントの外観をカスタマイズできます:


```css
igc-calendar::part(header) {
    background: #345779;
}

igc-calendar::part(date-inner selected),
igc-calendar::part(month-inner selected),
igc-calendar::part(year-inner selected) {
    background: #345779;
    border-color: #345779;
}

igc-calendar::part(date-inner current),
igc-calendar::part(navigation-button):hover,
igc-calendar::part(navigation-button):focus,
igc-calendar::part(months-navigation):hover,
igc-calendar::part(months-navigation):focus,
igc-calendar::part(years-navigation):hover,
igc-calendar::part(years-navigation):focus {
    color: #2dabe8;
}

igc-calendar::part(date-inner current selected),
igc-calendar::part(month-inner current selected),
igc-calendar::part(year-inner current selected) {
    box-shadow: inset 0 0 0 0.0625rem white, 0 0 0 0.0625rem #345779;
    color: white;
}
```

次のサンプルは、上記の CSS 構成を示しています:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-styling"
           alt="$Platform$ スタイル設定の例"
           github-src="scheduling/calendar/styling">
</code-view>

## API リファレンス

* [IgcCalendarComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)
* [IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
* [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [$Platform$ **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)