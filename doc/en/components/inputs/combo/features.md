---
title: {Platform} ComboBox Component – {ProductName}
_description: {ProductName} ComboBox Component Features
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} ComboBox Component Features
mentionedTypes: ['Combo', 'ComboList', 'ComboItem']
---

# {Platform} ComboBox Features

The {ProductName} ComboBox component exposes several features such as filtering and grouping.

## Combobox Features Example
The following demo shows some `ComboBox` features that are enabled/disabled at runtime:

`sample="/inputs/combo/features", height="400", alt="{Platform} Combo Features"`



In our sample we are going to use the `Switch` component, so we have to register it together with the combo:

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

You will also need to link an additional CSS file to apply the styling to the `Switch` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- React -->

```tsx
import { IgrComboModule, IgrCombo, IgrSwitchModule, IgrSwitch  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrComboModule.register();
IgrSwitchModule.register();
```

<!-- end: React -->

Then, we will add event handlers to all switch components so that we can control the combo features by toggling the switches:

```tsx
const comboRef = useRef<IgrCombo>(null);
const switchCaseSensitiveRef = useRef<IgrSwitch>(null);

const disableFiltering = (switchComponent: IgrSwitch) => {
    comboRef.current.disableFiltering =
    switchCaseSensitiveRef.current.disabled = switchComponent.checked;
};

const showCaseSensitiveIcon = (switchComponent: IgrSwitch) => {
    comboRef.current.caseSensitiveIcon = switchComponent.checked;
};

const disableCombo = (switchComponent: IgrSwitch) => {
    comboRef.current.disabled = switchComponent.checked;
};
```

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

Note that grouping is enabled/disabled by setting the `GroupKey` property to a corresponding data source field:

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

```tsx
const enableGrouping = (switchComponent: IgrSwitch) => {
    comboRef.current.groupKey = switchComponent.checked ? "country" : undefined;
};
```

## Features

### Filtering

By default, filtering in the ComboBox is enabled. It can be disabled by setting the `DisableFiltering` property.

Filtering options can be further enhanced by enabling the search case sensitivity. The case-sensitive icon can be turned on using the `CaseSensitiveIcon` property so that end-users can control the case sensitivity.

```html
<igc-combo disable-filtering case-sensitive-icon></igc-combo>
```

```razor
<IgbCombo DisableFiltering="true" CaseSensitiveIcon="true" />
```

```tsx
<IgrCombo disableFiltering="true" caseSensitiveIcon="true"></IgrCombo>
```

#### Filtering Options

The {ProductName} `ComboBox` component exposes one more filtering property that allows passing configuration of both `FilterKey` and `CaseSensitive` options. The `FilterKey` indicates which data source field should be used for filtering the list of options. The `CaseSensitive` option indicates if the filtering should be case-sensitive or not.

The following code snippet shows how to filter the cities from our data source by country instead of name. We are also making the filtering case-sensitive by default:

<!-- WebComponents -->
```ts
const options = {
    filterKey: 'country',
    caseSensitive: true
};

combo.filteringOptions = options;
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
const options = {
    filterKey: 'country',
    caseSensitive: true
};

comboRef.current.filteringOptions = options;
```
<!-- end: React -->

### Grouping

Defining a `GroupKey` option will group the items, according to the provided key:

```html
<igc-combo group-key="region"></igc-combo>
```

```razor
<IgbCombo GroupKey="region" />
```

```tsx
<IgrCombo groupKey="region" />
```

> [!Note]
> The `GroupKey` property will only have effect if your data source consists of complex objects.

#### Sorting Direction

The ComboBox component also exposes an option for setting whether groups should be sorted in ascending or descending order. By default, the sorting order is ascending:

```html
<igc-combo group-sorting="desc"></igc-combo>
```

```razor
<IgbCombo GroupSorting="desc" />
```

```tsx
<IgrCombo groupSorting="desc" />
```

### Label

The `Combo` label can be set easily using the `Label` property:

```html
<igc-combo label="Cities"></igc-combo>
```

```razor
<IgbCombo Label="Cities" />
```

```tsx
<IgrCombo label="Cities" />
```

### Placeholder

A placeholder text can be specified for both the ComboBox component input and the search input placed inside the dropdown menu:

```html
<igc-combo placeholder="Pick a city" placeholder-search="Search for a city"></igc-combo>
```

```razor
<IgbCombo Placeholder="Pick a city" PlaceholderSearch="Search for a city" />
```

```tsx
<IgrCombo placeholder="Pick a city" placeholderSearch="Search for a city" />
```

### Autofocus

If you want your ComboBox to be automatically focused on page load you can use the following code:

```html
<igc-combo autofocus></igc-combo>
```

```razor
<IgbCombo Autofocus="true" />
```

```tsx
<IgrCombo autofocus="true" />
```

### Search Input Focus

The ComboBox search input is focused by default. To disable this feature and move the focus to the list of options use the `AutofocusList` property as shown below:

```html
<igc-combo autofocus-list></igc-combo>
```

```razor
<IgbCombo AutofocusList="true" />
```

```tsx
<IgrCombo autofocusList="true" />
```

### Required

The ComboBox can be marked as required by setting the required property.

```html
<igc-combo required></igc-combo>
```

```razor
<IgbCombo Required="true" />
```

```tsx
<IgrCombo required="true" />
```

### Disable ComboBox

You can disable the ComboBox using the `Disabled` property:

```html
<igc-combo disabled></igc-combo>
```

```razor
<IgbCombo Disabled="true" />
```

```tsx
<IgrCombo disabled="true" />
```

<!-- WebComponents -->
## API Reference

* `Combo`

<!-- end: WebComponents -->
## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
