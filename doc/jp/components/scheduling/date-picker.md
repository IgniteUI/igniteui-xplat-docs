---
title: {Platform} Date Picker コンポーネント – {ProductName}
_description: インフラジスティックスの {Platform} Date Picker を使用すると、ユーザーはカレンダーから日付を選択し、入力要素に設定できます。
_keywords: {Platform} Date Picker, {ProductName}, Infragistics, {Platform} 日付ピッカー, インフラジスティックス
mentionedTypes: ["DatePicker"]
_language: ja
---

# {Platform} Date Picker (日付ピッカー) コンポーネントの概要
{ProductName} Date Picker は、手動でテキストを入力して日付を入力するか、ポップアップするカレンダー ダイアログから日付値を選択するために使用される機能豊富なコンポーネントです。軽量で使いやすい Date Picker を使用すると、ユーザーは、月、年、10 年の複数の表示オプションを使用して目的の日付に移動できます。また、最小および最大の日付制約や必須フィールドなどの一般的な検証プロパティもサポートしています。 

{ProductName} Date Picker コンポーネントを使用すると、ユーザーは月表示のカレンダード ロップダウンまたは編集可能な入力フィールドから単一の日付を選択できます。{Platform} Date Picker は、カレンダーからのみ選択するための dialog モード、ロケール対応でカスタマイズ可能な日付の書式設定と検証の統合もサポートしています。 

> [!NOTE]
> `DatePicker` コンポーネントは、{ProductName} のバージョン <!-- WebComponents -->5.0.0<!-- end: WebComponents --><!-- React -->18.7.0<!-- end: React --> 以降の新しいコンポーネントです。このバージョンより前の古い `DatePicker` は `XDatePicker` に名前が変更され、それぞれのドキュメント ページは「非推奨のコンポーネント」の下にあります。

## {Platform} Date Picker の例

以下は、ユーザーが手動のテキスト入力で日付を選択し、左側のカレンダー アイコンをクリックしてナビゲートできるようになったときに、Date Picker がどのように機能するかを示すサンプルです。描画する方法は以下のとおりです。 

`sample="/scheduling/date-picker/overview", height="500", alt="{Platform} Date Picker 入力の概要例"`

## {Platform} Date Picker を使用した作業の開始

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
<!-- end: WebComponents -->
<!-- React -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`DatePicker` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrDatePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->
<!-- Blazor -->
`DatePicker` コンポーネントの使用を開始するには、最初にそのモジュールを登録する必要があります。

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDatePickerModule));
```

スタイルを `DatePicker` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

## {Platform} Date Picker コンポーネントの使用

### 日付ピッカーの表示
デフォルトの `dropdown` 状態の `DatePicker` をインスタンス化するには、以下のコードを使用してください。

```html
<igc-date-picker>
    <p slot="helper-text">Date</p>
</igc-date-picker>
```

```tsx
<IgrDatePicker></IgrDatePicker>
```

```razor
<IgbDatePicker @ref="DatePicker"></IgbDatePicker>
```

### オプション
<!-- WebComponents -->
`DatePicker` は `date` または `string` にバインドできます。
<!-- end: WebComponents -->
<!-- React, Blazor -->
`DatePicker` は `date` にバインドできます。
<!-- end: React, Blazor -->

<!-- WebComponents -->
```typescript
const DatePicker = document.querySelector('igc-date-picker') as IgcDatePickerComponent;
const date = new Date();

DatePicker.value = date;
```

<!-- end:WebComponents -->

```tsx
const date = new Date();

<IgrDatePicker value={date}/>
```
```Razor
<IgbDatePicker @ref="DatePicker" Value="@SelectedDate">
</IgbDatePicker>

@code {

    public DateTime SelectedDate { get; set; }
    public IgbDatePicker DatePicker { get; set; }

    protected override void OnInitialized()
    {
        this.SelectedDate = DateTime.Today;
    }
}
```
<!-- WebComponents -->
文字列がピッカーにバインドされている場合は、**ISO 8601** 形式の文字列である必要があります。
```html
<igc-date-picker value="2000-01-01"></igc-date-picker>
```
<!-- end: WebComponents -->

### コンポーネントの投影
prefix スロットと suffix スロットを使用すると、入力のメイン コンテンツの前後に異なるコンテンツを追加できます。

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="suffix" name="arrow_upward" collection="material" class="small" onclick="DatePicker.stepUp()"></igc-icon>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrIcon 
        slot="suffix" 
        name="arrow_upward" 
        collection="material" 
        class="small" 
        onClick={() => datePickerRef.current.stepUp(DatePart.Month)}>
    </IgrIcon>
</IgrDatePicker>
```
```razor
<IgbDatePicker @ref="DatePicker">
    <IgbIcon 
        Slot="suffix" 
        IconName="arrow_upward" 
        Collection="bootstrap" 
        Class="small" 
        @onclick="() => DatePicker.StepUp(DatePart.Month)">
    </IgbIcon>
</IgbDatePicker>
```
上記のスニペットでは、​​入力の最後、デフォルトのクリア アイコンの直後に追加のアイコンが追加されます。プレフィックスとサフィックスを次々に積み重ねることができるため、これによってデフォルトのトグル アイコンが削除されることはありません。

#### トグル アイコンとクリア アイコンのカスタマイズ
カレンダーとクリア アイコンは、`calendar` スロットと `clear` スロットを使用してテンプレート化できます。

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="calendar" name="calendar" collection="material" class="small"></igc-icon>
    <igc-icon slot="clear" name="delete" collection="material" class="small"></igc-icon>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrIcon slot="calendar" name="calendar" collection="material" class="small"></IgrIcon>
    <IgrIcon slot="clear" name="delete" collection="material" class="small"></IgrIcon>
</IgrDatePicker>
```
```razor
<IgbDatePicker>
    <IgbIcon Slot="calendar" IconName="calendar" Collection="material" Class="small"></IgbIcon>
    <IgbIcon Slot="clear" IconName="delete" Collection="material" Class="small"></IgbIcon>
</IgbDatePicker>
```

#### カスタム アクション ボタン
ピッカーのアクション ボタンは、`actions` スロットを使用してテンプレート化できます。
```html
<igc-date-picker id="DatePicker">
    <igc-button slot="actions" onclick="DatePicker.showWeekNumbers = true">Show Week Numbers</igc-button>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrButton 
        slot='actions' 
        onClick={() => datePickerRef.current.showWeekNumbers = true}>
        <span>Show Week Numbers</span>
    </IgrButton>
</IgrDatePicker>
```
```razor
<IgbDatePicker>
    <IgbButton Slot="actions" @onclick="() => DatePicker.ShowWeekNumbers = true">Show Week Numbers</IgbButton>
</IgbDatePicker>
```

### キーボード ナビゲーション

`DatePicker` には直感的なキーボード ナビゲーションがあり、マウスに触れることなく、さまざまな DatePart を簡単に増分、減分、またはジャンプできます。

|キー|説明|
|----|-----------|
| <kbd>←</kbd> | 1 文字を先頭に移動 |
| <kbd>→</kbd> | 1 文字を最後に移動 |
| <kbd>HOME</kbd> | 最初に移動 |
| <kbd>END</kbd> | 最後に移動 |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>←</kbd> | 日付 / 時刻セクションの先頭に移動 - 現在のセクションまたは左側のセクション |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>→</kbd> | 日付 / 時刻セクションの最後に移動 - 現在または右側のセクション |
| 日付 / 時刻部分にフォーカス + <kbd>↓</kbd> | 日付 / 時刻部分を減少 |
| 日付 / 時刻部分にフォーカス + <kbd>↑</kbd> | 日付 / 時刻部分を増加 |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>;</kbd> | 現在の日付 / 時刻をエディターの値として設定 |
| <kbd>ESC</kbd> | カレンダーのポップアップを閉じて、入力フィールドにフォーカを合わせます。 |

## 例

### ダイアログ モード
DatePicker は `dialog` モードもサポートしています。
```html
<igc-date-picker id="DatePicker" mode="dialog">
</igc-date-picker>
```
```tsx
<IgrDatePicker mode="dialog"></IgrDatePicker>
```
```razor
<IgbDatePicker Mode="PickerMode.Dialog"></IgbDatePicker>
```
`sample="/scheduling/date-picker/dialog-mode", height="500", alt="{Platform} Date Picker Dialog モードの例"`

### 表示および入力形式
`InputFormat` および `DisplayFormat` は、ピッカーのエディターが指定された形式に従うように設定できるプロパティです。`InputFormat` はロケール ベースであるため、何も指定されていない場合、ピッカーはデフォルトでブラウザーで使用されるものになります。

注意すべき点は、Date Picker コンポーネントが `date` と `month` の部分がない形式で提供された場合、それらの部分に常に先行ゼロを追加することです。例えば、`d/M/yy` は `dd/MM/yy` になります。これは編集中にのみ適用されます。

`DisplayFormat` は、フォーカスされていないときにピッカーの入力を書式設定するために使用されます。`DisplayFormat` が指定されていない場合、ピッカーは `InputFormat` を `DisplayFormat` として使用します。

詳細については、`IgcDateTimeInput` 形式のセクションを参照してください。

`sample="/scheduling/date-picker/format", height="500", alt="{Platform} Date Picker 入力形式の例"`

### 増加および減少
`DatePicker` は、`StepUp` メソッドと `StepDown` メソッドを公開します。これらは両方とも `IgcDateTimeInput` から取得され、現在設定されている日付の特定の `DatePart` を増加および減少するために使用できます。

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="prefix" name="arrow_upward" collection="material" onclick="DatePicker.stepUp()"></igc-icon>
    <igc-icon slot="suffix" name="arrow_downward" collection="material" onclick="DatePicker.stepDown()"></igc-icon>
</igc-date-picker>
```
```tsx
<IgrDatePicker>
    <IgrIcon 
        slot="prefix" 
        name="arrow_upward" 
        collection="material" 
        onClick={() => datePickerRef.current.stepUp(DatePart.Month)}>
    </IgrIcon>
    <IgrIcon 
        slot="suffix" 
        name="arrow_downward" 
        collection="material" 
        onClick={() => datePickerRef.current.stepDown(DatePart.Month)}>
    </IgrIcon>
</IgrDatePicker>
```
```razor
<IgbDatePicker @ref="DatePicker">
    <IgbIcon 
        Slot="prefix"
        IconName="arrow_upward"
        Collection="material"               
        @onclick="() => DatePicker.StepUp(DatePart.Month)">
    </IgbIcon>
    <IgbIcon 
        Slot="suffix"
        IconName="arrow_downward"
        Collection="material"
        @onclick="() => DatePicker.StepDown(DatePart.Month)">
    </IgbIcon>
</IgbDatePicker>
```
### フォーム
`DatePicker` はフォーム要素で使用できます。コンポーネントの `Min` プロパティと `Max` プロパティはフォーム検証機能として機能します。

<!-- WebComponents -->
フォームでは、コンポーネントの `igcChange` イベントを処理し、ラベルの値を更新できます。
<!-- end: WebComponents -->
<!-- React -->
フォームでは、コンポーネントの `change` イベントを処理し、ラベルの値を更新できます。
<!-- end: React -->
<!-- Blazor -->
フォームでは、コンポーネントの `Change` イベントを処理し、ラベルの値を更新できます。
<!-- end: Blazor -->

`sample="/scheduling/date-picker/form", height="500", alt="{Platform} Date Picker 入力フォームの例"`

### カレンダー固有の設定
`DatePicker` は、Date Picker が公開するプロパティを通じて、カレンダーの設定の一部を変更できます。これらの一部には、ピッカーが展開されたときに複数のカレンダーを表示できる `VisibleMonths`、週の開始日を決定する `WeekStart`、年の各週の番号を表示する `ShowWeekNumbers` などが含まれます。

## インターナショナリゼーション

`DatePicker` のローカライズは、`Locale` 入力で制御できます。 

以下は日本ロケール定義を持つ `DatePicker` です。
```html
<igc-date-picker locale="ja-JP">
</igc-date-picker>
```
```tsx
<IgrDatePicker locale="ja-JP"></IgrDatePicker>
```
```razor
<IgbDatePicker Locale="ja-JP"></IgbDatePicker>
```

## スタイル設定
`DatePicker` コンポーネントは `Input` コンポーネントおよび `Calendar` コンポーネントから派生するため、使用可能なすべての CSS パーツを公開します。詳細については、[Input のスタイル設定](../inputs/input.md#スタイル設定)と [Calendar のスタイル設定](calendar.md#スタイル設定)を参照してください。

```css
igc-date-picker::part(header) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
igc-date-picker::part(calendar-content) {
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(date-inner current) {
  color: var(--ig-info-300);
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(navigation-button):hover,
igc-date-picker::part(months-navigation):hover,
igc-date-picker::part(years-navigation):hover {
  color: var(--ig-secondary-500);
}
igc-date-picker::part(month-inner current),
igc-date-picker::part(year-inner current),
igc-date-picker::part(navigation-button),
igc-date-picker::part(months-navigation),
igc-date-picker::part(years-navigation) {
  color: var(--ig-info-300);
}
igc-date-picker::part(date-inner selected),
igc-date-picker::part(month-inner selected),
igc-date-picker::part(year-inner selected) {
  color: var(--ig-secondary-500-contrast);
  background-color: var(--ig-secondary-500);
}
```

`sample="/scheduling/date-picker/styling", height="500", alt="{Platform} Date Picker 入力のスタイル設定に例"`

## API リファレンス

 - `Input`
 - `Calendar`
 - `DatePicker`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})