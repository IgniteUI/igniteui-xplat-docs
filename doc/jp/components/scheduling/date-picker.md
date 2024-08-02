---
title: {Platform} Datepicker コンポーネント – {ProductName}
_description: インフラジスティックスの {Platform} Datepicker を使用すると、ユーザーはカレンダーから日付を選択し、入力要素に設定できます。
_keywords: {Platform} Datepicker, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: ['Datepicker']
_language: ja
---

# {Platform} Datepicker (日付ピッカー) コンポーネントの概要
{ProductName} DatePicker は、手動でテキストを入力して日付を入力するか、ポップアップするカレンダー ダイアログから日付値を選択するために使用される機能豊富なコンポーネントです。軽量で使いやすい DatePicker を使用すると、ユーザーは、月、年、10 年の複数の表示オプションを使用して目的の日付に移動できます。検証を追加するための通常の min、max、および required プロパティがあります。 

{ProductName} DatePicker コンポーネントを使用すると、ユーザーは月表示のカレンダード ロップダウンまたは編集可能な入力フィールドから単一の日付を選択できます。DatePicker は、カレンダーからのみ選択するための dialog モード、ロケール対応でカスタマイズ可能な日付の書式設定と検証の統合もサポートしています。 

## {Platform} Datepicker の例

以下は、ユーザーが手動のテキスト入力で日付を選択し、左側のカレンダー アイコンをクリックしてナビゲートできるようになったときに、DatePicker がどのように機能するかを示すサンプルです。描画する方法は以下のとおりです。 

`sample="/scheduling/date-picker/overview", height="500", alt="{Platform} Date Picker 入力の概要例"`

## {Platform} Datepicker を使用した作業の開始

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`DatePicker` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcDatePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDatePickerComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

## {Platform} Datepicker コンポーネントの使用

### Datepicker の表示
デフォルトの `dropdown` 状態の Datepicker をインスタンス化するには、以下のコードを使用してください。

```html
<igc-date-picker>
    <p slot="helper-text">Date</p>
</igc-date-picker>
```

### オプション
`DatePicker` は `date` または `string` にバインドできます。

```typescript
const datepicker = document.querySelector('igc-date-picker') as IgcDatePickerComponent;
const date = new Date();

datepicker.value = date;
```
文字列がピッカーにバインドされている場合は、`ISO 8601` 形式の文字列である必要があります。
```html
<igc-date-picker [value]="'2000-01-01'"></igc-date-picker>
```

### コンポーネントの投影
prefix スロットと suffix スロットを使用すると、入力のメイン コンテンツの前後に異なるコンテンツを追加できます。

```html
<igc-date-picker id="datePicker">
    <igc-icon slot="suffix" name="arrow-up" collection="material" class="small" onclick="datePicker.stepUp()"></igc-icon>
</igc-date-picker>
```
上記のスニペットでは、​​入力の最後、デフォルトのクリア アイコンの直後に追加のアイコンが追加されます。プレフィックスとサフィックスを次々に積み重ねることができるため、これによってデフォルトのトグル アイコンが削除されることはありません。

#### トグル アイコンとクリア アイコンのカスタマイズ
カレンダーとクリア アイコンは、`calendar-icon` スロットと `clear-icon` スロットを使用してテンプレート化できます。

```html
<igc-date-picker id="datePicker">
    <igc-icon slot="calendar-icon" name="calendar" collection="material" class="small"></igc-icon>
    <igc-icon slot="clear-icon" name="delete" collection="material" class="small"></igc-icon>
</igc-date-picker>
```

#### カスタム アクション ボタン
ピッカーのアクション ボタンは、`actions` スロットを使用してテンプレート化できます。
```html
<igc-date-picker id="datePicker">
    <igc-button slot="actions" onclick="datePicker.showWeekNumbers = true">Show Week Numbers</igc-button>
</igc-date-picker>
```

### キーボード ナビゲーション

`DatePicker` には直感的なキーボード ナビゲーションがあり、マウスに触れることなく、さまざまな DatePart を簡単に増加、減少、またはジャンプできます。

|キー|説明|
|----|-----------|
| <kbd>&larr;</kbd> | 1 文字を先頭に移動 |
| <kbd>&rarr;</kbd> | 1 文字を最後に移動 |
| <kbd>Home</kbd> | 最初に移動 |
| <kbd>End</kbd> | 最後に移動 |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>&larr;</kbd> | 日付 / 時刻セクションの先頭に移動 - 現在のセクションまたは左側のセクション |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>&rarr;</kbd> | 日付 / 時刻セクションの最後に移動 - 現在または右側のセクション |
| 日付 / 時刻部分にフォーカス + <kbd>&darr;</kbd> | 日付 / 時刻部分を減少 |
| 日付 / 時刻部分にフォーカス + <kbd>&uarr;</kbd> | 日付 / 時刻部分を増加 |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>;</kbd> | 現在の日付 / 時刻をエディターの値として設定 |
| <kbd>Esc</kbd> | カレンダーのポップアップを閉じて、入力フィールドにフォーカを合わせます。 |

## 例

### ダイアログ モード
DatePicker は `dialog` モードもサポートしています。
```html
<igc-date-picker id="datePicker" mode="dialog">
</igc-date-picker>
```
`sample="/scheduling/date-picker/dialog_mode", height="500", alt="{Platform} Date Picker ダイアログ モードの例"`

### 表示および入力形式
`InputFormat` および `DisplayFormat` は、ピッカーのエディターが指定された形式に従うように設定できるプロパティです。`InputFormat` はロケール ベースであるため、何も指定されていない場合、ピッカーはデフォルトでブラウザーで使用されるものになります。

注意すべき点は、DatePicker コンポーネントが `date` と `month` の部分がない形式で提供された場合、それらの部分に常に先行ゼロを追加することです。 例えば、`d/M/yy` は `dd/MM/yy` になります。これは編集中にのみ適用されます。

`DisplayFormat` は、フォーカスされていないときにピッカーの入力を書式設定するために使用されます。`DisplayFormat` が指定されていない場合、ピッカーは `InputFormat` を `DisplayFormat` として使用します。

詳細については、`IgcDateTimeInput` 形式のセクションを参照してください。

`sample="/scheduling/date-picker/format", height="500", alt="{Platform} Date Picker 入力形式の例"`

### 増加および減少
`DatePicker` は、`StepUp` メソッドと `StepDown` メソッドを公開します。これらは両方とも `IgcDateTimeInput` から取得され、現在設定されている日付の特定の `DatePart` を増加および減少するために使用できます。

```html
<igc-date-picker id="datePicker">
    <igc-icon slot="prefix" name="arrow-up" collection="material" onclick="datePicker.stepUp()"></igc-icon>
    <igc-icon slot="suffix" name="arrow-down" collection="material" onclick="datePicker.stepDown()"></igc-icon>
</igc-date-picker>
```

### フォーム
`DatePicker` はフォーム要素で使用できます。コンポーネントの `Min` プロパティと `Max` プロパティはフォーム検証機能として機能します。

フォームでは、コンポーネントの `igcChange` イベントを処理し、ラベルの値を更新できます。

`sample="/scheduling/date-picker/form", height="500", alt="{Platform} Date Picker 入力フォームの例"`

### カレンダー固有の設定
`DatePicker` は、日付ピッカーが公開するプロパティを通じて、カレンダーの設定の一部を変更できます。これらの一部には、ピッカーが展開されたときに複数のカレンダーを表示できる `VisibleMonths`、週の開始日を決定する `WeekStart`、年の各週の番号を表示する `ShowWeekNumbers` などが含まれます。

## インターナショナリゼーション

`DatePicker` のローカライズは、`Locale` 入力で制御できます。 

以下は日本ロケール定義を持つ `DatePicker` です。
```html
<igc-date-picker locale="ja-JP">
</igc-date-picker>
```

## スタイル設定
`DatePicker` コンポーネントは `Input` コンポーネントおよび `Calendar` コンポーネントから派生するため、使用可能なすべての CSS パーツを公開します。詳細については、[Input のスタイル設定](../inputs/input.md#スタイル設定)と [Calendar のスタイル設定](calendar.md#スタイル設定)を参照してください。


`sample="/scheduling/date-picker/styling", height="500", alt="{Platform} Date Picker 入力のスタイル設定に例"`

## API リファレンス

 - `Input`
 - `Calendar`
 - `DatePicker`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})