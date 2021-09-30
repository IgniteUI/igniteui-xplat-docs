---
title: $Platform$ Data Grid | Horizontal Scrolling | Infragistics
_description: Use Infragistics' $Platform$ grid component's horizontal scrolling feature to scroll seamlessly through the columns. Check out $ProductName$ table demos!
_keywords: $Platform$ Table, Data Grid, column, horizontal, scrolling, $ProductName$, Infragistics
mentionedTypes: ['Grid']
---

# $Platform$ Horizontal Scrolling

The $ProductName$ Data Table / Data Grid supports Horizontal Scrolling is enabled by setting the total width of the columns greater than the width of the $Platform$ data grid.

## $Platform$ Horizontal Scrolling Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-scrolling"
           alt="$Platform$ Horizontal Scrolling Example"
           github-src="grids/data-grid/column-scrolling">
</code-view>

<div class="divider--half"></div>

## Setting Default Column Width

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

## Setting Individual Column Widths

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