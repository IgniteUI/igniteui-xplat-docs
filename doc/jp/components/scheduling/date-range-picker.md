---
title: {Platform} Date Range Picker コンポーネント – {ProductName}
_description: インフラジスティックスの {Platform} Date Range Picker を使用すると、カレンダーから 2 つの日付の範囲を選択し、それを入力要素に設定できます。
_keywords: {Platform} Date Range Picker, {ProductName}, Infragistics, {Platform} 日付範囲ピッカー, インフラジスティックス
mentionedTypes: ["DateRangePicker"]
_language: ja
---

# {Platform} Date Range Picker (日付範囲ピッカー) の概要

{ProductName} Date Range Picker は、テキスト入力とカレンダー ポップアップを含む軽量なコンポーネントで、ユーザーが開始日と終了日を簡単に選択できます。日付範囲の制限や設定可能な日付フォーマットなど、さまざまなアプリケーション要件に合わせて高いカスタマイズ性を提供します。

## Date Range Picker の例

以下は、カレンダーのポップアップを使用して開始日と終了日を選択できる `DateRangePicker` コンポーネントのサンプルです。

`sample="/scheduling/date-range-picker/overview", height="500", alt="{Platform} Date Range Picker 概要の例"`

### 作業の開始

<!-- WebComponents -->

`DateRangePicker` の使用を開始するには、最初に次のコマンドを実行して Ignite UI for Web Components をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`DateRangePicker` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcDateRangePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDateRangePickerComponent);
```

<!-- end: WebComponents -->

これで、{Platform} `DateRangePicker` の基本構成から始めることができます。

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

## 使用方法

`DateRangePicker` では、ドロップダウンやカレンダーのポップアップから日付範囲を選択するか、開始日と終了日それぞれの入力フィールドに直接入力することで、日付範囲を指定できます。

ピッカーは、日付を表示するために 「シングル インプット モード」 と 「2 インプット モード」 の 2 タイプのモードを提供します。シングル インプット モードでは、フィールドは編集不可で、日付範囲を入力して変更することはできません。一方で 2 インプット モードでは、開始日と終了日を別々の入力欄に入力して編集できます。

カレンダーが表示されている場合、開始日と終了日を選択することで日付範囲を指定できます。最初の日付を選択すると、開始日と終了日の両方がその日付に設定され、次に日付を選ぶと終了日として設定されます。すでに範囲が選択されている状態で別の日付をクリックすると、新しい範囲の選択が開始されます。

### Date Range Picker の表示

デフォルトのシングル インプット モードで `DateRangePicker` をインスタンス化するには、次のコードを使用します:

```html
<igc-date-range-picker>
</igc-date-range-picker>
```

`DateRangePicker` を 2 つの入力欄を使用するように切り替えるには、`UseTwoInputs` プロパティを `true` に設定します。

```html
<igc-date-range-picker use-two-inputs="true">
</igc-date-range-picker>
```

### Value (値)

ユーザーによる選択または入力に加えて、`DateRangePicker` の範囲値は `Value` プロパティを使用して設定することもできます。値は次の形式に従う必要があります: **{ start: startDate, end: endDate }**、ここで `startDate` と `endDate` は選択された範囲を表す `Date` オブジェクトです。

```ts
let dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;
let startDate = new Date(2025, 4, 6);
let endDate = new Date(2025, 4, 8);
dateRange.value = { start: startDate, end: endDate }
```

値は属性として設定することもできます。この場合、値は JSON として正しく解析可能なオブジェクトである必要があり、`start` と `end` フィールドには ISO 8601 形式の日付値を持たせる必要があります。

```html
<igc-date-range-picker value='{"start":"2025-01-01","end":"2025-01-02"}'>
<igc-date-range-picker/>
```

### 読み取り専用および編集不可

`DateRangePicker` を読み取り専用に設定すると、入力やカレンダーでの範囲変更が無効になり、キーボード ナビゲーションも無効になります。また、カレンダーやクリア アイコンも視覚的に無効状態になります。これは、value 属性で範囲を設定し、それを表示専用にしたい場合に便利です。この動作を有効にするには、`ReadOnly` プロパティを設定するだけです。

```html
<igc-date-range-picker use-two-inputs="true" readonly>
</igc-date-range-picker>
```

あるいは、`NonEditable` プロパティを使用することもできます。これは `ReadOnly` とは異なり、入力欄のタイピングによる編集のみを禁止し、カレンダーからの選択やクリア アイコンでのリセットは可能です。

```html
<igc-date-range-picker use-two-inputs="true" non-editable="true">
</igc-date-range-picker>
```

### ポップアップ モード 

デフォルトでは、`DateRangePicker` をクリックすると、カレンダーのポップアップが `dropdown` モードで表示されます。`Mode` プロパティを `dialog` に設定することで、カレンダーを `dialog` モードで開くこともできます。

```html
<igc-date-range-picker mode="dialog">
</igc-date-range-picker>
```

### キーボード ナビゲーション

`DatePicker` は直感的なキーボード ナビゲーションに対応しており、マウスを使わずに値の増減や入力マスクのセクション間の移動が可能です。

使用可能なキーボード ナビゲーション オプションは、コンポーネントがシングル インプット モードか 2 インプット モードかによって異なります。

**2 インプット モード:** 

|キー|説明|
|----|-----------|
| <kbd>&larr;</kbd> | カレットを 1 文字左に移動します |
| <kbd>&rarr;</kbd> | カレットを 1 文字右に移動します |
| <kbd>Ctrl + 左矢印</kbd> | カレットを現在の入力マスク セクションの先頭、またはすでに先頭にいる場合は前のセクションの先頭に移動します |
| <kbd>Ctrl + 右矢印</kbd> | カレットを現在の入力マスク セクションの末尾、またはすでに末尾にいる場合は次のセクションの末尾に移動します |
| <kbd>上矢印</kbd> | 現在フォーカスされている入力マスクのセクションの値を 1 ステップ増加させます |
| <kbd>下矢印</kbd> | 現在フォーカスされている入力マスクのセクションの値を 1 ステップ減少させます |
| <kbd>Home</kbd> | カレットを入力マスクの先頭に移動します |
| <kbd>End</kbd> | カレットを入力マスクの末尾に移動します |
| <kbd>Ctrl + ;</kbd> | 現在の日付をコンポーネントの値として設定します |

**シングル インプットおよび 2 インプット モードの両方:**

|キー|説明|
|----|-----------|
| <kbd>Alt + 下矢印</kbd> | カレンダーのドロップダウンを開きます |
| <kbd>Alt + 上矢印</kbd> | カレンダーのドロップダウンを閉じます |

キーボードを使用してカレンダー ポップアップ内を移動することもできます。ナビゲーションは `Calendar` コンポーネントと同じです。

|キー|説明|
|----|-----------|
| <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> / <kbd>&larr;</kbd> / <kbd>&rarr;</kbd>| 月内の日付間を移動します |
| <kbd>ENTER</kbd> | 現在フォーカスされている日を選択します |
| <kbd>PageUp</kbd> | 前の月に移動します |
| <kbd>PageDown</kbd> | 次の月に移動します |
| <kbd>SHIFT + PageUp</kbd> | 前年に移動します |
| <kbd>SHIFT + PageDown</kbd> | 翌年に移動します |
| <kbd>Home</kbd> | 表示されている月のうち、最も早い月の最初の日にフォーカスします (または 1 か月ビューの場合はその月の最初の日) |
| <kbd>End</kbd> | 表示されている月のうち、最も遅い月の最後の日にフォーカスします (または 1 か月ビューの場合はその月の最後の日) |
| <kbd>Escape</kbd> | カレンダーのポップアップを閉じます |

## レイアウト

### Label (ラベル)

シングル インプット モードの場合、`Label` プロパティを使用して `DateRangePicker` コンポーネントにラベルを設定できます。2  インプット モードでは、`LabelStart` および `LabelEnd` プロパティを使用して、それぞれ開始日および終了日の入力フィールドにラベルを設定できます。

```html
<igc-date-range-picker label="Date Range">
</igc-date-range-picker>
```

```html
<igc-date-range-picker use-two-inputs="true" label-start="Start Date" label-end="End Date">
</igc-date-range-picker>
```

### 形式

入力フィールドに表示される日付形式をカスタマイズすることも可能です。この目的のために使用できるプロパティは、`Locale`、`InputFormat`、および `DisplayFormat` の 3 つです。

`Locale` プロパティでは、使用するロケール識別子を指定でき、地域の慣習に基づいて日付の表示形式が決定されます。
たとえば、日付を日本形式で表示したい場合、locale プロパティを次のように設定します:
```html
<igc-date-range-picker locale="ja-JP">
</igc-date-range-picker>
```

日付形式を手動で定義したい場合は、カスタム形式の文字列を渡して `InputFormat` プロパティを使用できます。

```html
<igc-date-range-picker input-format="dd/MM/yy">
</igc-date-range-picker>
```

`DisplayFormat` プロパティはカスタム形式文字列も受け入れますが、入力フィールドがアイドル状態 (つまり、フォーカスされていない状態) の場合にのみ適用されます。フィールドにフォーカスがある場合、形式はデフォルト、または `InputFormat` で定義された形式に戻ります (両方のプロパティが使用されている場合)。

```html
<igc-date-range-picker input-format="dd/MM/yy" display-format="yy/MM/dd">
</igc-date-range-picker>
```

### カレンダーのレイアウトと形式

さまざまなプロパティを使用して、ポップアップ カレンダーをさらにカスタマイズできます。

|名前|タイプ|説明|
|--|--|--|
| `Orientation` | 'vertical' または 'horizontal' | カレンダーを縦向きまたは横向きで表示するかを設定できます。 |
| `VisibleMonths` | string | 一度に表示する月数 (1 または 2) を指定します。 |
| `ShowWeekNumbers` | string | カレンダーに週番号の列を表示するかどうかを設定します。 |
| `Open` | boolean | カレンダー ピッカーが開いているかどうかを判断します。 |
| `KeepOpenOnSelect` | boolean | 日付を選択した後もカレンダー ピッカーを開いたままにします。 |
| `KeepOpenOnOutsideClick` | boolean | カレンダー ピッカーの外側をクリックしても、カレンダー ピッカーを開いたままにします。 |
| `WeekStart` | string | 週の最初の曜日を設定します。 |
| `HideOutsideDays` | boolean | 現在の月ビューの範囲外の日を非表示にします。 |
| `HideHeader` | boolean | カレンダー ヘッダーを非表示にします (ダイアログ モードでのみ適用されます)。 |
| `HeaderOrientation` | 'vertical' または 'horizontal' | カレンダーのヘッダーを縦方向または横方向に配置します (ダイアログ モードのみ)。 |
| `ActiveDate` | Date | カレンダーで最初にハイライト表示される日付を設定します。設定されていない場合は、現在の日付がアクティブ日付になります。 |

```html
<igc-date-range-picker orientation="vertical" visible-months="1" show-week-numbers="true">
</igc-date-range-picker>
```

### Min (最小値) および Max (最大値)

`Min` および `Max` プロパティを使用して、定義した範囲外の日付を無効にすることで、ユーザーの入力を制限することもできます。これらのプロパティはバリデーターとして機能するため、範囲外の日付が手動で入力された場合でも、`DateRangePicker` は無効になります。

```html
<igc-date-range-picker min="2025-05-06" max="2025-05-10">
</igc-date-range-picker>
```

### カスタムおよび定義済みの日付範囲 

`CustomRanges` プロパティを使用して、範囲選択を高速化するために、カレンダー ポップアップにカスタム日付範囲チップを追加することもできます。たとえば、現在の日付を終了日とし、過去 7 日間の範囲をすぐに選択できるカスタム日付範囲チップを作成できます。さらに、`UsePredefinedRanges` プロパティを設定すると、カスタム チップに加えて定義済みの範囲チップも表示されます。

```ts
const today = new Date();

const previousSeven = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7 
);
const lastWeek: CustomDateRange[] = [
  {
    label: 'Previous 7 days',
    dateRange: {
      start: previousSeven,
      end: today,
    },
  }
]

const dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;
dateRange.customRanges = lastWeek;
dateRange.usePredefinedRanges = true;
```

これで、カレンダーのポップアップ内に表示された `「過去 7 日間」` チップをクリックすると、7 日前から今日までの範囲が自動的に選択されます。

`sample="/scheduling/date-range-picker/custom-ranges", height="500", alt="{Platform} Date Range Picker カスタム範囲の例"`

### 無効日と特別な日

カレンダーで無効な日付を設定して、ユーザーが選択できる日付の範囲を絞り込むこともできます。無効にする日付を設定するには、`DisabledDates` プロパティを使用できます。

```ts
let dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;

const minDate = new Date(2025, 4, 1);
const maxDate = new Date(2025, 4, 31);

dateRange.disabledDates = [
  {
    type: DateRangeType.Between,
    dateRange: [minDate, maxDate]
  }
] as DateRangeDescriptor[];
```

`DisabledDates` プロパティが提供するすべての可能性に関する詳細情報は、以下で確認できます: [無効日](./calendar.md#日付の無効化)

同様に、カレンダーに 1 日または複数の日付を特別な日として設定したい場合も可能です。この場合は `SpecialDates` プロパティを使用します。([特別な日](./calendar.md#特定の日付))

### フォーム

`DateRangePicker` コンポーネントは、HTML フォーム要素とシームレスに使用することもできます。`Min`、`Max`、`Required` プロパティはフォーム検証子として機能します。

`sample="/scheduling/date-range-picker/form", height="500", alt="{Platform} Date Range Picker フォームの例"`

## 追加構成

### プロパティ

すでに紹介したプロパティに加えて、`DateRangePicker` コンポーネントには動作をさらに細かく設定できるさまざまなプロパティが用意されています。

<!-- WebComponents -->

|名前|タイプ|説明|
|--|--|--|
| `Disabled` | boolean | コンポーネントを無効にします。 |
| `NonEditable` | boolean |	入力フィールドでの入力を無効にします。 |
| `Placeholder` | string | シングル インプット モード時のプレースホルダー テキスト。 |
| `PlaceholderStart` | string | 開始日入力 (2 インプット モード) のプレースホルダー テキスト。 |
| `PlaceholderEnd` | string | 終了日入力 (2 インプット モード) のプレースホルダー テキスト。 |
| `Outlined` | boolean | [Material テーマ](../themes/overview.md)で、入力部分をアウトライン表示にするかどうかを設定します。 |
| `Prompt` | string | 入力マスクで未入力部分に表示されるプロンプト文字。 |
| `ResourceStrings` | IgcDateRangePickerResourceStrings | 日付範囲ピッカーとカレンダーをローカライズするためのリソース文字列。 |

<!-- end: WebComponents -->

### スロット

`DateRangePicker` コンポーネントでは、利用可能なスロットを使用して、カスタム コンテンツを追加したり、外観を変更したりすることも可能です。 

シングル インプット モードでは、`prefix` および `suffix` スロットを使って、入力フィールドの前後にカスタム コンテンツを挿入できます。

```html
<igc-date-range-picker>
  <igc-icon slot="prefix" name="down_arrow_icon"></igc-icon>
  <igc-icon slot="suffix" name="upload_icon"></igc-icon>
</igc-date-range-picker>
```

2 インプット モードでは、`prefix-start`、`prefix-end`、`suffix-start`、`suffix-end` スロットを使用して、それぞれの入力に対してカスタム コンテンツを追加できます。

`clear-icon` および `calendar-icon` スロットを使用すると、入力欄内のクリア ボタンとカレンダー ボタンのアイコンをカスタマイズできます。

```html
<igc-date-range-picker>
  <igc-icon slot="clear-icon" name="apps_icon"></igc-icon>
  <igc-icon slot="calendar-icon" name="bin_icon"></igc-icon>
</igc-date-range-picker>
```

2 インプット モードでは、`separator` スロットを使用して、開始日と終了日の入力欄の間に表示されるデフォルトの「～」テキストをカスタマイズできます。

```html
<igc-date-range-picker use-two-inputs="true">
  <span slot="separator">till</span>
</igc-date-range-picker>
```

`actions` スロットを使用すると、独自のロジックを持つカスタム アクション ボタンを挿入できます。たとえば、以下のボタンはカレンダーの週番号の列を切り替えます。

```html
<igc-date-range-picker id="DateRange">
  <igc-button slot="actions" onclick="DateRange.showWeekNumbers = true">Toggle Week Numbers</igc-button>
</igc-date-range-picker>
```

これまでに説明したスロットに加えて、`DateRangePicker` コンポーネントでは次のスロットも使用できます。

<!-- WebComponents -->

|名前|説明|
|--|--|
| `title` | カレンダーのタイトルのコンテンツを描画します。ダイアログ モードでのみ適用されます。 |
| `helper-text` | 入力フィールドの下にコンテンツを描画します。 |
| `header-date` | カレンダー ヘッダーのデフォルトの現在の日付/範囲テキストを置き換えます。ダイアログ モードでのみ適用されます。 |
| `clear-icon-start` | 開始入力 (2 インプット モード) のカスタム クリア アイコン。 |
| `clear-icon-end` | 終了入力 (2 インプット モード) のカスタム クリア アイコン。 |
| `calendar-icon-start` | 開始入力 (2 インプット モード) のカスタム カレンダー アイコン。 |
| `calendar-icon-end` | 終了入力 (2 インプット モード) のカスタム カレンダー アイコン。 |
| `calendar-icon-open` | ピッカーが開いているときに表示されるアイコンまたはコンテンツ (2 インプット モードの両方に適用)。 |
| `calendar-icon-open-start` | 開始入力 (2 インプット モード) の開いた状態で表示されるアイコンやコンテンツ。|
| `calendar-icon-open-end` | 終了入力 (2 インプット モード) の開いた状態で表示されるアイコンやコンテンツ。 |

<!-- end: WebComponents -->

`sample="/scheduling/date-range-picker/slots", height="500", alt="{Platform} Date Range Picker スロットの例"`

### メソッド

<!-- WebComponents -->

`DateRangePicker` は、プロパティやスロットに加えて、次のメソッドも公開しています:

|名前|説明|
|--|--|
| `Show` | カレンダー ピッカー コンポーネントを表示します。 |
| `Hide` | カレンダー ピッカー コンポーネントを非表示にします。 |
| `Toggle` | カレンダー ピッカーの表示／非表示を切り替えます。 |
| `Clear` | 入力フィールドをクリアして、ユーザー入力を削除します。 |
| `Select` | ピッカーで日付範囲の値を選択します。 |
| `SetCustomValidity` | カスタム検証メッセージを設定します。提供されたメッセージが空でない場合、入力は無効 (invalid) としてマークされます。 |

<!-- end: WebComponents -->

## スタイル設定

`DateRangePicker` コンポーネントは `Calendar` コンポーネントを使用しているため、Calendar の CSS パーツも継承されており、両コンポーネントをシームレスにスタイル設定できます。Calendar コンポーネントで使用可能なすべての CSS パーツの一覧はこちらをご覧ください: [カレンダーのスタイル設定](calendar.md#スタイル設定)。Calendar の CSS パーツに加えて、`DateRangePicker` は以下のような独自の CSS パーツも提供しており、外観をさらにカスタマイズできます:

|名前|説明|
|--|--|
| `separator` | 2 つの入力欄の間に表示されるセパレーター要素。 |
| `ranges` | カスタムおよび定義済み範囲を表示するラッパー。 |
| `label` | ターゲットの入力の上に表示されるラベルのラッパー。 |
| `container` | すべての主要な入力要素を保持するメイン ラッパー。 |
| `input` | ネイティブ入力要素。 |
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |
| `calendar-icon` | カレンダー アイコンのラッパー (閉じた状態)。 |
| `calendar-icon-start` | 開始入力のカレンダー アイコンのラッパー (閉じた状態、2 インプット)。 |
| `calendar-icon-end` | 終了入力のカレンダー アイコンのラッパー (閉じた状態、2 インプット)。 |
| `calendar-icon-open` | カレンダー アイコンのラッパー (開いた状態)。 |
| `calendar-icon-open-start` | 開始入力のカレンダー アイコンのラッパー (開いた状態、2 インプット)。 |
| `calendar-icon-open-end` | 終了入力のカレンダー アイコンのラッパー (開いた状態、2 インプット)。 |
| `clear-icon` | クリア アイコンのラッパー (シングル インプット)。 |
| `clear-icon-start` | 開始入力 (2 入力) のクリア アイコン ラッパー。 |
| `clear-icon-end` | 終了入力 (2 入力) のクリア アイコン ラッパー。 |
| `actions` | アクション ラッパー。 |
| `helper-text` | ターゲットの入力の下にコンテンツを描画するヘルパー テキスト ラッパー。 |

```css
igc-date-range-picker::part(label) {
  color: var(--ig-gray-600);
}

igc-date-range-picker::part(calendar-icon-start),
igc-date-range-picker::part(calendar-icon-end) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-date-range-picker::part(calendar-icon-open-start),
igc-date-range-picker::part(calendar-icon-open-end) {
  background-color: var(--ig-primary-700);
  color: var(--ig-primary-700-contrast);
}

igc-date-range-picker::part(clear-icon-start),
igc-date-range-picker::part(clear-icon-end) {
  background-color: var(--ig-error-500);
  color: var(--ig-error-500-contrast);
}
```

`sample="/scheduling/date-range-picker/styling", height="500", alt="{Platform} Date Range Picker スタイル設定の例"`

## API リファレンス

 - `Input`
 - `Calendar`
 - `DatePicker`
 - `DateTimeInput`
 - `Dialog`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})