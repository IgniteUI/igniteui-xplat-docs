---
title: $PlatformShort$ コンボ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ コンボ コンポーネントは、データを表示するのに最適なチャートを選択するのに役立ちます。Ignite UI for $PlatformShort$ でグラフと視覚化を改善します!
_keywords: $PlatformShort$ combo, drop down, $ProductName$, Infragistics, $PlatformShort$ コンボ, ドロップダウン, インフラジスティックス
mentionedTypes: []
_language: ja
---
# $PlatformShort$ 複数列コンボ ボックスの概要

複数列コンボ ボックスは、データ オブジェクトのプロパティ列を自動的に生成します。このコンポーネントは、ドロップダウンに埋め込まれたデータ グリッドのように大量のデータを可視化するコンボ ボックスであるという点で独特です。

データ バインディングは、列の `DataSource` プロパティで複合オブジェクトの配列を使用して実現できます。

`TextField` プロパティはユーザーが選択を行うときに表示する値を決定します。

`ValueField` プロパティは選択された基本データ項目のバインド値を決定します。オブジェクトのリストに複数のプロパティがある場合に必要です。

The `Fields` string array property determines which fields will be included and displayed. All fields not listed in the array will not be displayed in the dropdown.

The `PlaceHolder` property lets the edit portion of the control to display text when nothing is selected. 

The `SortMode` property lets you configure the field's sorting with the following configurations:

- `None`
- `SortByOneColumnOnly`
- `SortByOneColumnOnlyTriState`
- `SortByMultipleColumns`
- `SortByMultipleColumnsTriState`

The TriState options will allow sorted columns to be unsorted.


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
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

複数列コンボ ボックスを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* MultiColumnComboBoxModule
<!-- end: Blazor -->

## コード スニペット

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

