---
title: {Platform} Combo | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} combo component helps you select the best chart to display your data. Improve your graphs and visualization with Ignite UI for  {Platform}!
_keywords: {Platform} combo, drop down, {ProductName}, Infragistics
mentionedTypes: []
---
# {Platform} Multi-Column Combo Box Overview

The Multi-Column Combo Box automatically generates columns for properties on the data object. This component is unique in that it's a combo box that visualizes large amounts of data similar to a data grid embedded in the dropdown.

## {Platform} Multi-Column Combo Box Example

This sample demonstrates how to create `MultiColumnComboBox` that displays data in multiple columns in a popup window.

<!-- Blazor -->

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview"
           alt="{Platform} Multi-Column Combo Box Example"
           github-src="editors/multi-column-combobox/overview">
</code-view>

<!-- end:Blazor -->

<!-- Angular, React, WebComponents -->

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview"
           alt="{Platform} Multi-Column Combo Box Example"
           github-src="editors/multi-column-combobox/overview">
</code-view>

## Dependencies
When installing the charts component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGrids}
npm install --save {PackageInputs}
npm install --save {PackageLayouts}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules

The Multi-Column Combo Box requires the following modules:

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

## Usage

### Binding a Data Source

In order to display your objects in the Multi-Column Combo Box component, you will need to bind the `DataSource` property. This can be bound in the form of an array of complex objects. The following code demonstrates how to bind the data source property.

<!-- React, WebComponents -->

In the below code snippet, the "countryNames" collection is an any[] full of custom objects.

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

### Setting Display Value and Data Value

You can configure different properties of the Multi-Column Combo Box's bound `DataSource` to act as the display text for the control as well as the underlying value when a selection is made. This is done by setting the `TextField` and `ValueField` properties of the control, respectively, to the name of the property on the data item that you want to represent these things.

<!-- Blazor -->
If the value of the component needs to be updated programmatically, the `ValueChanged` event needs to be handled. The `GetValue` and `GetValueAsync` methods can be used to get the value when not within the `ValueChanged` event handler.
<!-- end: Blazor -->

The following code snippet shows how to set these properties, given that the underlying data item has a "Country" and "ID" property:

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

### Setting Fields

By default, the Multi-Column Combo Box will show all of the properties on the underlying data item, but this can be controlled by setting the `Fields` property on the component. This property takes a `string[]` of property paths on the underlying data item to determine which properties are shown.

The following code snippet shows how to set this, and the resulting drop-down would only show the ID and Country columns:

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

### Setting Placeholder Text

It is possible to configure the text that shows as a placeholder for when there is no selection in the Multi-Column Combo Box component. This is done by setting the `Placeholder` property to the string you would like to be displayed. The following code demonstrates how to set this:

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

### Configuring Sorting Mode

The user has the ability to sort the columns that are displayed in the Multi-Column Combo Box by clicking the header of the column in the drop-down. The way the sorting is configured can be modified as well, as the columns can be sorted by only a single column or multiple columns, and they can be limited to either ascending and descending, or they can be tri-state. This is done by setting the `SortMode` property of the component.

Note, the TriState sort options will allow sorted columns to be unsorted.

The following code demonstrates how to set the Multi-Column Combo Box to be able to sort by multiple columns tri-state.

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

 ## API Members

 - `DataSource`
 - `Fields`
 - `GetValueAsync`
 - `GetValue`
 - `MultiColumnComboBox`
 - `Placeholder`
 - `SortMode`
 - `TextField`
 - `ValueChanged`
 - `ValueField`