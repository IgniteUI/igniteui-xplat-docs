---
title: {Platform} 日時入力 | インフラジスティックス
_description: インフラジスティックスの {Platform} 日時入力を使用すると、ユーザーは入力要素の日付と時刻を編集できます。
_keywords: {Platform} input, {ProductName}, Infragistics, {Platform} 入力, インフラジスティックス
mentionedTypes: ["DateTimeInput"]
_language: ja
---

# {Platform} Date Time Input (日時入力) の概要

{ProductName} Date Time Input を使用すると、ユーザーは選択した入力要素で日付と時刻を設定および編集できます。ユーザーは、編集可能なマスクされた入力を使用して、日付と時刻の両方のパーツを編集できます。さらに、検証に最小値と最大値だけでなく、希望の表示形式および入力形式の設定を指定できます。

`sample="/inputs/date-time-input/overview", height="150", alt="{Platform} 日時入力の概要の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`DateTimeInput` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcDateTimeInput } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDateTimeInput);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`DateTimeInput` と必要な CSS をインポートする必要があります:

```tsx
import { IgrDateTimeInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

<!-- Blazor -->

`DateTimeInput` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDateTimeInputModule));
```

また、`DateTimeInput` コンポーネントにスタイルを適用するために、追加の CSS ファイルをリンクする必要があります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

### 値バインディング
`DateTimeInput` コンポーネントの値を設定する最も簡単な方法は、Date オブジェクトを `Value` プロパティに渡すことです。

```typescript
const input = document.querySelector('igc-date-time-input') as IgcDateTimeInputComponent;
const date = new Date();

input.value = date;
```

```tsx
<IgrDateTimeInput value={someValue}></IgrDateTimeInput>
```

```razor
<IgbDateTimeInput @ref="DateTimeInputRef" Value="@Date">
    <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
</IgbDateTimeInput>
```

<!-- WebComponents, React -->

`DateTimeInput` は、[ISO 8601](https://tc39.es/ecma262/#sec-date-time-string-format) 文字列も受け入れます。

文字列は、`YYYY-MM-DDTHH:mm:ss.sssZ` の形式の完全な `ISO` 文字列にすることも、日付のみと時間のみのパーツに分割することもできます。

##### 日付のみ
日付のみの文字列がコンポーネントの `Value` プロパティにバインドされている場合は、`YYYY-MM-DD` の形式である必要があります。`InputFormat` は、入力に値を入力するときに引き続き使用され、同じ形式である必要はありません。さらに、日付のみの文字列をバインドする場合、ディレクティブは時刻を `T00:00:00` に強制することにより、時刻のずれを防ぎます。

##### 時刻のみ
時刻のみの文字列は通常、`ECMA` 仕様では定義されていませんが、時刻のみのソリューションを必要とするシナリオにディレクティブを統合できるようにするために、24 時間形式 (`HH:mm:ss`) をサポートしています。12 時間形式はサポートされていません。

##### 完全な ISO 文字列
完全な `ISO` 文字列がバインドされている場合、ディレクティブは、[Date.parse](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) に必要なすべての要素が提供されている場合にのみそれを解析します。

`InvalidDate` を含むすべての falsy の値は、`null` として解析されます。不完全な日付のみ、時間のみ、または完全な `ISO` 文字列は、`InvalidDate` として解析されます。

<!-- end: WebComponents, React -->

### キーボード ナビゲーション

`DateTimeInput` には直感的なキーボード ナビゲーションがあり、マウスに触れることなく、さまざまな `DatePart` を簡単に増分、減分、またはジャンプできます。

|キー|説明|
|----|-----------|
| <kbd>&larr;</kbd> | 1 文字を先頭に移動 |
| <kbd>&rarr;</kbd> | 1 文字を最後に移動 |
| <kbd>Home</kbd> | 最初に移動 |
| <kbd>End</kbd> | 最後に移動 |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>&larr;</kbd> | 日付 / 時刻セクションの先頭に移動 - 現在のセクションまたは左側のセクション |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>&rarr;</kbd> | 日付 / 時刻セクションの最後に移動 - 現在または右側のセクション |
| 日付 / 時刻のパーツにフォーカス + <kbd>&darr;</kbd> | 日付 / 時刻のパーツを減分 |
| 日付 / 時刻のパーツにフォーカス + <kbd>&uarr;</kbd> | 日付 / 時刻のパーツを増分 |
| <kbd>Ctrl</kbd> / <kbd>Command</kbd> + <kbd>;</kbd> | 現在の日付 / 時刻をエディターの値として設定 |

## 書式の設定

`DateTimeInput` は、さまざまな表示形式と入力形式をサポートしています。

[Intl.DateTimeFormat](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) を使用して、`long` と `short`、`medium` と `full` などの事前定義された書式オプションをサポートできるようにします。さらに、`dd-MM-yy` などのサポートされている文字から構築されたカスタム文字列を受け入れることもできます。また、`DisplayFormat` が指定されていない場合、コンポーネントは `InputFormat` をそのまま使用します。

### 入力書式
次の表は、コンポーネントの `InputFormat` でサポートされている形式を示しています。

|書式|説明|
|-------|----------|
| `d` | 日付。編集中は先行ゼロで強制されます。 |
| `dd` | 先行ゼロが明示的に設定された日付。 |
| `M` | 月。編集中は先行ゼロで強制されます。 |
| `MM` | 先行ゼロが明示的に設定されている月。 |
| `yy` | 短い年形式。 |
| `yyyy` | 完全な年形式。 |
| `h` | 12 時間形式の時間。編集中は先行ゼロで強制されます。 |
| `hh` | 明示的に先行ゼロが設定された 12 時間形式の時間。 |
| `H` | 24 時間形式の時間。編集中は先行ゼロで強制されます。 |
| `HH` | 明示的に先行ゼロが設定された 24 時間形式の時間。 |
| `m` | 分。編集中に先行ゼロで強制されます。 |
| `mm` | 先行ゼロが明示的に設定された分。 |
| `tt` | 12 時間形式の AM/PM セクション。 |

特定の入力形式を設定するには、それを文字列として `DateTimeInput` に渡します。これにより、予想されるユーザー入力形式と `mask` の両方が設定されます。さらに、`InputFormat` はロケール ベースであるため、何も指定されていない場合、エディターはデフォルトで `dd/MM/yyyy` になります。

```html
<igc-date-time-input input-format="dd-MM-yy" display-format="medium"/>
```

```tsx
<IgrDateTimeInput inputFormat="dd-MM-yy" displayFormat="medium"></IgrDateTimeInput>
```

```razor
<IgbDateTimeInput @ref="DateTimeInputRef" InputFormat="dd-MM-yy" DisplayFormat="medium">
    <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
</IgbDateTimeInput>
```

以下は結果です:

`sample="/inputs/date-time-input/input-format-display-format", height="150", alt="{Platform} 日時入力の表示書式の例"`



### 表示書式
日時入力は、さまざまな方法で日付 / 時刻を表示するための事前定義された形式を公開します。以下の例はすべて、en-US ロケールで示されています。

| オプション | 例 |
|:-------:|:-----------|
| `short` | 7/17/22, 12:00 AM |
| `medium` | Jul 17, 2022, 12:00:00 AM |
| `long` | July 17, 2022 at 12:00:00 AM GMT+3 |
| `full` | Sunday, July 17, 2022 at 12:00:00 AM Eastern European Summer Time |
| `shortDate` | 7/17/22 |
| `mediumDate` | Jul 17, 2022 |
| `longDate` | July 17, 2022 |
| `fullDate` | Sunday, July 17, 2022 |
| `shortTime` | 12:00 AM |
| `mediumTime` | 12:00:00 AM |
| `longTime` | 12:00:00 AM GMT+3 |
| `fullTime` | 12:00:00 AM Eastern European Summer Time |

さらに、ユーザーは、次の表で説明されているサポートされている記号を使用して、displayFormat 文字列を作成できます。
<br>

| タイプ | 書式 | 説明 | 例 |
|:---|-------:|:-----------|:--------|
| 日付 | `d` | 最小桁数 | 7, 17 |
|   | `dd` | ゼロ埋込み | 07, 17 |
| 月 | `M` | 最小桁数 | 3, 10 |
|   | `MM` | ゼロ埋込み | 03, 10 |
|   | `MMM` | 省略 | Oct |
|   | `MMMM` | ワイド | October |
|   | `MMMMM` | 狭い | O |
| 年 | `y` | 数値 | 2022 |
|   | `yy` | 2 桁 | 22
|   | `yyy` | 数値 | 2022
|   | `yyyy` |  数値  | 2022
| 12 時間 | `h` | 最小桁数 | 1, 12 |
|   | `hh` | ゼロ埋込み | 01, 12
| 24 時間 | `H` | 最小桁数 | 1, 23 |
|   | `HH` | ゼロ埋込み | 01, 23 |
| 分 | `m` | 最小桁数 | 1, 59 |
|   | `mm` | ゼロ埋込み | 01, 59 |
| 秒 |  `s` | 最小桁数 | 1, 59 |
|   | `ss` | ゼロ埋込み | 01, 59 |
| 期間 | `t` | 省略 | AM, PM |
|   | `tt` | 省略 | AM, PM |
|   | `ttt` | 短い | noon |
|   | `tttt` | 長い | noon |
|   | `ttttt` | 狭い | n |

> [!Note]
> 多くのロケールは、指定された書式に関係なく、同じ期間文字列を使用します。また、12 時間制を使用した場合にのみ効果があります。

## 最小値 / 最大値

`Min` および `Max` プロパティを指定して、コンポーネントの入力を制限し、有効性を制御できます。`Value` プロパティと同様に、`string` 型にすることができます。

```ts
const input = document.querySelector('igc-date-time-input') as IgcDateTimeInputComponent;

input.min = new Date(2021, 0, 1);
```

```html
<igc-date-time-input max="2022-01-01T21:00:00.000Z"></igc-date-time-input>
```

```tsx
 <IgrDateTimeInput min={minDate} max={maxDate}></IgrDateTimeInput>
```

```razor
<IgbDateTimeInput @ref="DateTimeInputRef" Min="@MinDate" Max="@MaxDate">
    <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
</IgbDateTimeInput>
```

すべてがうまくいった場合、値が指定された日付よりも大きいか小さい場合、コンポーネントは `invalid` になります。以下の例をご覧ください:

`sample="/inputs/date-time-input/min-max-value", height="150", alt="{Platform} 日時入力最小 / 最大値の例"`

## ステップアップ / ステップダウン

`DateTimeInput` は、公開な `StepUp` メソッドと `StepDown` メソッドを公開します。現在設定されている日付と時刻の特定の `DatePart` を増減し、いくつかの方法で使用できます。

最初のシナリオでは、特定の DatePart がメソッドに渡されない場合、指定した `InputFormat` および内部コンポーネントの実装に基づいてデフォルトの DatePart が増減します。2 番目のシナリオでは、さまざまな要件を満たすために操作する DatePart を明示的に指定できます。また、どちらのメソッドも、stepUp/stepDown ステップを設定するために使用できるタイプ番号のオプションの `delta` パラメーターを受け入れます。

<!-- WebComponents, Blazor -->

さらに、`SpinDelta` は、各日時セグメントに異なる delta を適用するために使用できるプロパティです。キーボード、マウス ホイール、または `StepUp` メソッドと `StepDown` メソッドを使用してスピンする場合に適用されます。ただし、`SpinDelta` よりも優先されるため、delta パラメーターが提供されていない場合に限ります。

<!-- end: WebComponents, Blazor -->

```ts
const input = document.getElementById('dateTimeInput') as IgcDateTimeInputComponent;

const spinDelta: DatePartDeltas = {
    date: 2,
    month: 3,
    year: 10,
};

input.spinDelta = spinDelta;
```

以下の例をご覧ください。

`sample="/inputs/date-time-input/step-up-down", height="150", alt="{Platform} 日時入力ステップアップ / ステップダウンの例"`

## スタイル設定

`DateTimeInput` コンポーネントは、その内部要素のほとんどすべての CSS パーツを公開します。次の表に、公開されているすべての CSS パーツを示します。

|名前|説明|
|--|--|
| `container` | すべての主要な入力要素を保持するメイン ラッパー。 |
| `input` | ネイティブ入力要素。 |
| `label` | ネイティブ ラベル要素。 |
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |
| `helper-text` | ヘルパー テキスト ラッパー。 |

```css
igc-date-time-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-date-time-input::part(prefix),
igc-date-time-input::part(suffix) {
  color: var(--ig-primary-600-contrast);
  background-color: var(--ig-primary-500);
  border-color: var(--ig-secondary-500);
}
```

`sample="/inputs/date-time-input/styling", height="150", alt="{Platform} Date Time Input のスタイル設定"`

## API リファレンス

 - `Input`
 - `MaskInput`
 - `Icon`
 - `DateTimeInput`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
