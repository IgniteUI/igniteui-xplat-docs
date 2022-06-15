---
title: $Platform$ コンボ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $Platform$ コンボ コンポーネントは、データを表示するのに最適なチャートを選択するのに役立ちます。Ignite UI for $Platform$ でグラフと視覚化を改善します!
_keywords: $Platform$ combo, drop down, $ProductName$, Infragistics, $Platform$ コンボ, ドロップダウン, インフラジスティックス
mentionedTypes: []
_language: ja
---
# $Platform$ 複数列コンボ ボックスの概要

複数列コンボ ボックスは、データ オブジェクトのプロパティ列を自動的に生成します。このコンポーネントは、ドロップダウンに埋め込まれたデータ グリッドのように大量のデータを可視化するコンボ ボックスであるという点で独特です。

## $Platform$ 複数列コンボ ボックスの例

このサンプルは、ポップアップ ウィンドウの複数の列にデータを表示する `MultiColumnComboBox` を作成する方法を示しています。

<!-- Blazor -->

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview"
           alt="$Platform$ 複数列コンボ ボックスの例"
           github-src="editors/multi-column-combobox/overview">
</code-view>

<!-- end:Blazor -->

<!-- Angular, React, WebComponents -->

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview"
           alt="$Platform$ 複数列コンボ ボックスの例"
           github-src="editors/multi-column-combobox/overview">
</code-view>

## 依存関係
Chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
npm install --save {PackageLayouts}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

複数列コンボ ボックスを作成するには、以下のモジュールが必要です。

```razor
IgbMultiColumnComboBoxModule.Register(IgniteUIBlazor);
```

```ts
import { IgrMultiColumnComboBoxModule } from 'igniteui-react-grids';
import { IgrMultiColumnComboBox } from 'igniteui-react-grids';

IgrMultiColumnComboBoxModule.register();
```

```ts
import { IgcMultiColumnComboBoxModule } from 'igniteui-webcomponents-grids';
import { IgcMultiColumnComboBoxComponent } from 'igniteui-webcomponents-grids';

ModuleManager.register(
    IgcMultiColumnComboBoxModule
);
```

## 使用方法

### データ ソースのバインド

オブジェクトを複数列コンボ ボックス コンポーネントに表示するには、`DataSource` プロパティをバインドする必要があります。これは、複雑なオブジェクトの配列の形式としてバインドできます。以下のコードは、データ ソース プロパティをバインドする方法を示します。

<!-- React, WebComponents -->

以下のコード スニペットでは、"countryNames" コレクションはカスタム オブジェクトで満たされた any[] です。

<!-- end:React, WebComponents -->

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryNames} />
```

<!-- WebComponents -->
```html
<igc-multi-column-combo-box id="comboBox" height="50px" width="400px">
</igc-multi-column-combo-box>
```

```ts
constructor() {
    let multiColumnComboBox = document.getElementById("comboBox") as IgcMultiColumnComboBoxComponent;
    multiColumnComboBox.dataSource = countryNames;
}
```
<!-- end:WebComponents -->

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px" DataSource="CountryNames" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        IgbMultiColumnComboBoxModule.Register(IgniteUIBlazor);
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### 表示値とデータ値の設定

複数列コンボ ボックスのバインドされた `DataSource` のさまざまなプロパティを構成して、コントロールの表示テキストとして機能し、選択が行われたときに既定値としても機能します。コントロールの `TextField` と `ValueField` プロパティをこれらを表現したいデータ項目のプロパティ名に設定します。

<!-- Blazor -->
コンポーネントの値をプログラムで更新する必要がある場合、`ValueChanged` イベントを処理する必要があります。`ValueChanged` イベント ハンドラー内にない場合、`GetValue` と `GetValueAsync` メソッドを使用して値を取得できます。
<!-- end: Blazor -->

以下のコード スニペットは、基本データ項目に "Country" および "ID" プロパティがある場合、これらのプロパティを設定する方法を示しています。

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        textField="Country" valueField={["ID"]}/>
```

<!-- WebComponents -->
```html
<igc-multi-column-combo-box id="comboBox" height="50px" width="400px">
</igc-multi-column-combo-box>
```

```ts
constructor() {
    let multiColumnComboBox = document.getElementById("comboBox") as IgcMultiColumnComboBoxComponent;
    multiColumnComboBox.dataSource = countryNames;
    multiColumnComboBox.textField = "Country";
    multiColumnComboBox.valueField = ["ID"];
}
```
<!-- end:WebComponents -->

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     TextField="Country"
                     ValueField="@(new string[]{ "ID" })" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        IgbMultiColumnComboBoxModule.Register(IgniteUIBlazor);
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### フィールドの設定

デフォルトで、複数列コンボ ボックスは基本データ項目のすべてのプロパティを表示しますが、これはコンポーネントの `Fields` プロパティを設定することで制御できます。このプロパティは表示されるプロパティを決定するために基本データ項目のプロパティ パスの `string[]` を取得します。

以下のコード スニペットはこれを設定する方法を示します。結果のドロップダウンは ID および Country 列のみを表示します。

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        fields={["ID", "Country"]} />
```

<!-- WebComponents -->
```html
<igc-multi-column-combo-box id="comboBox" height="50px" width="400px">
</igc-multi-column-combo-box>
```

```ts
constructor() {
    let multiColumnComboBox = document.getElementById("comboBox") as IgcMultiColumnComboBoxComponent;
    multiColumnComboBox.dataSource = countryNames;
    multiColumnComboBox.fields = ["ID", "Country"];
}
```
<!-- end:WebComponents -->

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     Fields="@(new string[] { "ID", "Country" })" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        IgbMultiColumnComboBoxModule.Register(IgniteUIBlazor);
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### プレースホルダー テキストの設定

複数列コンボ ボックス コンポーネントに選択がない場合にプレースホルダーとして表示するテキストを設定できます。`Placeholder` プロパティを表示したい文字列に設定します。以下のコードは設定する方法を示します。

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        placeholder="Please choose a country" />
```

<!-- WebComponents -->
```html
<igc-multi-column-combo-box id="comboBox" height="50px" width="400px">
</igc-multi-column-combo-box>
```

```ts
constructor() {
    let multiColumnComboBox = document.getElementById("comboBox") as IgcMultiColumnComboBoxComponent;
    multiColumnComboBox.dataSource = countryNames;
    multiColumnComboBox.placeholder = "Please choose a country";
}
```
<!-- end:WebComponents -->

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     Placeholder="Please choose a country" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        IgbMultiColumnComboBoxModule.Register(IgniteUIBlazor);
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### ソート モードの設定

ユーザーは、ドロップダウンで列のヘッダーをクリックして、複数列コンボ ボックスに表示される列をソートすることができます。列は単一の列または複数の列でソートすることができ、昇順または降順に制限したり、3 ステートにしたり、ソートの構成方法も変更できます。コンポーネントの `SortMode` プロパティを使用して設定します。

注: TriState のソート オプションを使用すると、ソートされた列のソートを解除できます。

以下のコードは、複数列の 3 ステートでソートできるように複数列コンボ ボックスを設定する方法を示します。

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        sortMode={SortMode.SortByMultipleColumnsTriState} />
```

<!-- WebComponents -->
```html
<igc-multi-column-combo-box id="comboBox" height="50px" width="400px">
</igc-multi-column-combo-box>
```

```ts
constructor() {
    let multiColumnComboBox = document.getElementById("comboBox") as IgcMultiColumnComboBoxComponent;
    multiColumnComboBox.dataSource = countryNames;
    multiColumnComboBox.sortMode = SortMode.SortByMultipleColumnsTriState;
}
```
<!-- end:WebComponents -->

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     SortMode="SortMode.SortByMultipleColumnsTriState" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        IgbMultiColumnComboBoxModule.Register(IgniteUIBlazor);
        this.CountryNames = CountryTreeData.Create();
    }
}
```