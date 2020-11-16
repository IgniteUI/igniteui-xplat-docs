---
title: $PlatformShort$ データ グリッド | 水平方向スクロール | インフラジスティックス
_description: Infragistics のグリッド コンポーネントの水平方向スクロール機能を使用して、列をシームレスにスクロールします。$ProductName$ テーブルのサンプルを是非お試しください!
_keywords: $PlatformShort$ Table, Data Grid, column, horizontal, scrolling, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 列, 水平, スクロール, インフラジスティックス
mentionedTypes: ['Grid']
---

# $PlatformShort$ 水平方向のスクロール

$ProductName$ Data Table / Data Grid は、$PlatformShort$ データ グリッドの幅より大きい列の合計幅を設定することにより Horizontal Scrolling を有効にできます。

## サンプル

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-column-scrolling-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-scrolling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-column-scrolling-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="grids/data-grid/column-scrolling"></sample-button>

<div class="divider--half"></div>

## デフォルト列幅の設定

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    autoGenerateColumns="true"
    defaultColumnMinWidth={300}
    dataSource={this.data}/>
```
```html
 <igc-data-grid id="grid"
      height="100%"
      width="100%"
      default-column-min-width=200>
 </igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"                  
    DataSource="DataSource"
    DefaultColumnMinWidth="300" />
```

## 各列の幅の設定

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    autoGenerateColumns="false"
    dataSource={this.data}>
        <IgrTextColumn field="FirstName" headerText="First Name" width="300"/>
        <IgrTextColumn field="LastName" headerText="Last Name" width="300"/>
        <IgrNumericColumn field="Age" headerText="Age" width="300"/>
        <IgrDateTimeColumn field="Birthday" headerText="Birth Date" width="300"/>
        <IgrTextColumn field="Street" headerText="Street Address" width="300"/>
        <IgrTextColumn field="City" headerText="City and State" width="300"/>
        <IgrTextColumn field="Salary" headerText="Salary" width="300"/>
        <IgrTextColumn field="Sales" headerText="Sales" width="300"/>
    </IgrDataGrid>
```

```html
<igc-data-grid id="grid"
     width="100%"
     height="100%"
     auto-generate-columns="false">
      <igc-text-column id="FirstName" width="300"></igc-text-column>
      <igc-text-column id="LastName" width="300"></igc-text-column>
      <igc-numeric-column id="Age" width="300"></igc-numeric-column>
      <igc-date-time-column id="OrderDate" width="300"></igc-date-time-column>
      <igc-text-column id="Street" width="300"></igc-text-column>
      <igc-text-column id="City" width="300"></igc-text-column>
      <igc-text-column id="Salary" width="300"></igc-text-column>
      <igc-text-column id="Sales" width="300"></igc-text-column>
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"                  
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <TextColumn Field="FirstName" Width="300" />
    <TextColumn Field="LastName" Width="300" />
    <NumericColumn Field="Age" Width="300" />
    <DateTimeColumn Field="Birthday" Width="300" />
    <TextColumn Field="Street" Width="300" />
    <TextColumn Field="City" Width="300" />            
    <NumericColumn Field="Salary" Width="300" />
    <NumericColumn Field="Sales" Width="300" />            
</DataGrid>
```