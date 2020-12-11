---
title: $PlatformShort$ Combo | Data Visualization Tools | Infragistics
_description: Infragistics' $PlatformShort$ combo component helps you select the best chart to display your data. Improve your graphs and visualization with Ignite UI for  $PlatformShort$!
_keywords: $PlatformShort$ combo, drop down, $ProductName$, Infragistics
mentionedTypes: []
---
# $PlatformShort$ Multi-Column Combo Box Overview

The Multi-Column Combo Box automatically generates columns for properties on the data object. This component is unique in that it's a combo box that visualizes large amounts of data similar to a data grid embedded in the dropdown. 

## Usage

The following properties are the most commonly used to configure the component:

- `DataSource` - allows binding data in form of an array of complex objects that will be displayed in drop down menu.
- `TextField` - determines which value is shown when users make a selection. 
- `ValueField` - property determines the bound value of the underlying data item selected. This is necessary if your list of objects have several properties.
- `Fields` - string array property that determines which fields will be included and displayed. All fields not listed in the array will not be displayed in the dropdown.
- `PlaceHolder` property lets the edit portion of the control to display text when nothing is selected. 
- `SortMode` property lets you configure the field's sorting with the following configurations:

    * `None`
    * `SortByOneColumnOnly`
    * `SortByOneColumnOnlyTriState`
    * `SortByMultipleColumns`
    * `SortByMultipleColumnsTriState`

Note, the TriState sort options will allow sorted columns to be unsorted.


## $PlatformShort$ Multi-Column Combo Box Overview Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Multi-Column Combo Box Overview Example"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="editors/multi-column-combobox/overview"></sample-button>

</div>

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the charts component, the core package must also be installed.


<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageInputs}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules

The Multi-Column Combo Box requires the following modules:

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

## Code Snippet

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

