---
title: {Platform} コンボボックス コンポーネント – {ProductName}
_description: {ProductName} コンボボックス コンポーネントの機能
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} コンボボックス コンポーネントの機能
mentionedTypes: ['Combo', 'ComboList', 'ComboItem']
_language: ja
---

# {Platform} コンボボックスの機能

{ProductName} コンボボックス コンポーネントは、フィルタリングやグループ化などのいくつかの機能を公開しています。

## コンボボックス機能の例
以下のデモは、ランタイムで有効または無効にできるいくつかの `ComboBox` 機能を示しています。

`sample="/inputs/combo/features", height="400", alt="{Platform} コンボ機能"`



このサンプルでは、`Switch` コンポーネントを使用するため、コンボと一緒に登録する必要があります。

<!-- WebComponents -->
```ts
import { defineComponents, IgcComboComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent, IgcSwitchComponent);
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbComboModule));
builder.Services.AddIgniteUIBlazor(typeof(IgbSwitchModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Switch` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

次に、スイッチを切り替えてコンボ機能を制御できるように、すべてのスイッチ コンポーネントにイベント ハンドラーを追加します。

```ts
let combo = document.getElementById('combo') as IgcComboComponent<City>;

let switchIcon = document.getElementById('caseSensitive') as IgcSwitchComponent;
let switchFilter = document.getElementById('filtering') as IgcSwitchComponent;
let switchDisable = document.getElementById('disabled') as IgcSwitchComponent;

switchIcon.addEventListener("igcChange", () => {
    combo.caseSensitiveIcon = switchIcon.checked;
});

switchFilter.addEventListener("igcChange", () => {
    combo.disableFiltering = switchIcon.disabled = switchFilter.checked;
});

switchDisable.addEventListener("igcChange", () => {
    combo.disabled = switchDisable.checked;
});
```

```razor
<IgbCombo 
    Label="Cities" 
    Placeholder="Pick a city" 
    Data="Data" 
    ValueKey="Id" 
    DisplayKey="Name"
    DisableFiltering="@DisableFiltering"
    CaseSensitiveIcon="@CaseSensitiveIcon"
    GroupKey="@Group"
    Disabled="@Disabled">
</IgbCombo>

<IgbSwitch Change="@OnDisableFilteringClick">Disable Filtering</IgbSwitch>
<IgbSwitch Change="@OnCaseSensitiveClick" Disabled="@DisableFiltering">Show Case-sensitive Icon</IgbSwitch>
<IgbSwitch Change="@OnGroupClick">Enable Grouping</IgbSwitch>
<IgbSwitch Change="@OnDisableClick">Disable Combo</IgbSwitch>

@code {
    private bool DisableFiltering = false;
    private bool CaseSensitiveIcon = false;
    private bool Disabled = false;

    public void OnDisableFilteringClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.DisableFiltering = sw.Checked;
    }

    public void OnCaseSensitiveClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.CaseSensitiveIcon = sw.Checked;
    }

    public void OnDisableClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Disabled = sw.Checked;
    }
}
```

グループ化は、`GroupKey` プロパティを対応するデータ ソース フィールドに設定することで有効/無効になることに注意してください。

```ts
let switchGroup = document.getElementById('grouping') as IgcSwitchComponent;

switchGroup.addEventListener("igcChange", () => {
    this.combo.groupKey = switchGroup.checked ? "country" : undefined;
});
```

```razor
@code {
    private string Group = "";

    public void OnGroupClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Group = sw.Checked ? "Country" : "";
    }
}
```

## 機能

### フィルタリング

コンボボックスのフィルタリングがデフォルトで有効になります。無効にするには、`DisableFiltering` プロパティを設定します。

フィルタリング オプションは、検索の大文字と小文字の区別を有効にすることでさらに拡張できます。`CaseSensitiveIcon` プロパティを使用して大文字と小文字を区別するアイコンをオンにすると、エンド ユーザーは大文字と小文字の区別を制御できます。

```html
<igc-combo disable-filtering case-sensitive-icon></igc-combo>
```

```razor
<IgbCombo DisableFiltering="true" CaseSensitiveIcon="true" />
```

#### フィルタリング オプション

{ProductName} `ComboBox` コンポーネントは、`FilterKey` オプションと `CaseSensitive` オプションの両方の構成を渡すことができるフィルター プロパティをもう 1 つ公開しています。`FilterKey` は、オプションのリストをフィルタリングするためにどのデータ ソース フィールドを使用する必要があるかを示します。`CaseSensitive` オプションは、フィルタリングで大文字と小文字を区別するかどうかを示します。

次のコード スニペットは、名前ではなく国でデータ ソースから都市をフィルター処理する方法を示しています。また、デフォルトで大文字と小文字を区別するフィルタリングを行います。

```ts
const options = {
    filterKey: 'country',
    caseSensitive: true
};

combo.filteringOptions = options;
```

### グループ化

`GroupKey` オプションを定義すると、キーに基づいて項目をグループ化します。

```html
<igc-combo group-key="region"></igc-combo>
```

```razor
<IgbCombo GroupKey="region" />
```

> [!Note]
> `GroupKey` プロパティは、データ ソースが複雑なオブジェクトで構成されている場合にのみ有効です。

#### ソートの方向

コンボボックス コンポーネントは、グループを昇順または降順でソートするかどうかを設定するオプションも公開します。デフォルトでは、ソート順序は、昇順に設定されています。

```html
<igc-combo group-sorting="desc"></igc-combo>
```

```razor
<IgbCombo GroupSorting="desc" />
```

### ラベル

`Combo` ラベルは、`Label` プロパティを使用して簡単に設定できます。

```html
<igc-combo label="Cities"></igc-combo>
```

```razor
<IgbCombo Label="Cities" />
```

### プレースホルダー

コンボボックス コンポーネント入力とドロップダウン メニュー内に配置された検索入力の両方に、プレースホルダー テキストを指定できます。

```html
<igc-combo placeholder="Pick a city" placeholder-search="Search for a city"></igc-combo>
```

```razor
<IgbCombo Placeholder="Pick a city" PlaceholderSearch="Search for a city" />
```

### オートフォーカス

コンボボックスをページの読み込みに自動的にフォーカスさせたい場合は、次のコードを使用できます。

```html
<igc-combo autofocus></igc-combo>
```

```razor
<IgbCombo Autofocus="true" />
```

### 検索入力のフォーカス

コンボボックスの検索入力はデフォルトでフォーカスされています。この機能を無効にしてフォーカスをオプションのリストに移動するには、以下に示すように `AutofocusList` プロパティを使用します。

```html
<igc-combo autofocus-list></igc-combo>
```

```razor
<IgbCombo AutofocusList="true" />
```

### 必須

required プロパティを設定することで、コンボボックスを必須としてマークできます。

```html
<igc-combo required></igc-combo>
```

```razor
<IgbCombo Required="true" />
```

### コンボボックスを無効にする

`Disabled` プロパティを使用してコンボボックスを無効にできます。

```html
<igc-combo disabled></igc-combo>
```

```razor
<IgbCombo Disabled="true" />
```

<!-- WebComponents -->
## API リファレンス

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

<!-- end: WebComponents -->
## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
