---
title: $PlatformShort$ コンボ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ コンボ コンポーネントは、データを表示するのに最適なチャートを選択するのに役立ちます。Ignite UI for $PlatformShort$ でグラフと視覚化を改善します!
_keywords: $PlatformShort$ combo, drop down, $ProductName$, Infragistics, $PlatformShort$ コンボ, ドロップダウン, インフラジスティックス
mentionedTypes: []
_language: ja
---
# $PlatformShort$ 複数列コンボ ボックスの概要

複数列コンボ ボックスは、データ オブジェクトのプロパティ列を自動的に生成します。このコンポーネントは、ドロップダウンに埋め込まれたデータ グリッドのように大量のデータを可視化するコンボ ボックスであるという点で独特です。

## 使用方法

The following properties are the most commonly used to configure the component:

- `DataSource` - ドロップダウン メニューに表示される複雑なオブジェクトの配列の形式でデータをバインドできます。
- `TextField` - set this property to a field in the datasource to reflect what is shown as the display text in the items when users make a selection. 
- `ValueField` - set this property to a field in the datasource which represents a key or unique identify for the underlying data item to be selected. This is necessary if your list of objects have several properties because if no `ValueField` is specified, then the first field in the data source is used.

<!-- Blazor --> 
Note, if the value needs to be updated, handle the `ValueChanged` event needs to be handled. The `GetValue` and `GetValueAsync` methods can be used to get the value when not handling the `ValueChanged` event.
<!-- end: Blazor -->

- `Fields` 文字列配列プロパティは、どのフィールドが含まれ、表示されるかを決定します。配列にリストされていないすべてのフィールドは、ドロップダウンに表示されません。
- `PlaceHolder` プロパティを使用すると、コントロールの編集部分で、何も選択されていないときにテキストを表示できます。 
- `SortMode` プロパティを使用すると、次の構成でフィールドのソートを構成できます:

    * `None`
    * `SortByOneColumnOnly`
    * `SortByOneColumnOnlyTriState`
    * `SortByMultipleColumns`
    * `SortByMultipleColumnsTriState`

TriState オプションを使用すると、ソートされた列のソートを解除できます。


## $PlatformShort$ 複数列コンボ ボックスの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 複数列コンボ ボックスの例"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="editors/multi-column-combobox/overview"></sample-button>

</div>

<!-- Angular, React, WebComponents -->
## 依存関係
Chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。


<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageInputs}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

複数列コンボ ボックスを作成するには、以下のモジュールが必要です。

```razor
MultiColumnComboBoxModule.Register(IgniteUIBlazor);
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

<div class="divider--half"></div>

## コード スニペット

```tsx
<IgrMultiColumnComboBox
    width="400px"
    dataSource={countryNames}
    textField="Name">
</IgrMultiColumnComboBox>
```

```html
<igc-multi-column-combo-box width="400px"
    data-source={countryNames}
    text-field="Name">       
</igc-multi-column-combo-box>
```

```razor                
<MultiColumnComboBox Height="50px" Width="400px"
    DataSource="CountryNames"
    TextField="Name" />            

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        MultiColumnComboBoxModule.Register(IgniteUIBlazor);
        this.CountryNames = CountryTreeData.Create();            
    }
}
```
