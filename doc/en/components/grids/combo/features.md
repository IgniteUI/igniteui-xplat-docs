---
title: {Platform} Combo Component – {ProductName}
_description: {ProductName} Combo Component Features
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Combo Component Features
mentionedTypes: ['Combo', 'ComboList', 'ComboItem']
---

# {Platform} Combo Features

The {ProductName} Combo component exposes several features such as filtering and grouping.

## Combo Features Example
The following demo demonstrates some of the combobox features that are enabled/disabled at runtime:

<code-view style="height:400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/combo-features"
           alt="{Platform} Combo Features"
           github-src="grids/combo/features">
</code-view>

In our sample we are going to use the `Switch` component so we have to register it together with the combo:

```ts
import {
    defineComponents,
    IgcComboComponent,
    IgcComboItemComponent, 
    IgcInputComponent, 
    IgcIconComponent,
    IgcSwitchComponent
}
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent, IgcComboItemComponent, IgcInputComponent, IgcIconComponent, IgcSwitchComponent);
```

Then, we will add event listeners to all switch components so that we can control the combo features by toggling the switches:

```ts
constructor() {
    this.combo = document.getElementById('combo') as IgcComboComponent<object>;

    let switchIcon = document.getElementById('caseSensitive') as IgcSwitchComponent;
    switchIcon.addEventListener('igcChange', () => {
        this.combo.caseSensitiveIcon = switchIcon.checked ? true : false
    });

    let switchFilter = document.getElementById('filtering') as IgcSwitchComponent;
    switchFilter.addEventListener('igcChange', () => {
        if (switchFilter.checked === true) {
            this.combo.disableFiltering = true;
            switchIcon.disabled = true;
        } else {
            this.combo.disableFiltering = false;
            switchIcon.disabled = false;
        }
    });
    
    let switchDisable = document.getElementById('disabled') as IgcSwitchComponent;
    switchDisable.addEventListener('igcChange', () => {
        this.combo.disabled = switchDisable.checked ? true : false
    });
}
```

Note that grouping is enabled/disabled by setting the `GroupKey` property to a corresponding data source entity or setting it to an empty string: 

```ts
let switchGroup = document.getElementById('grouping') as IgcSwitchComponent;
switchGroup.addEventListener('igcChange', () => {
    this.combo.groupKey = switchGroup.checked ? 'country' : ''
});
```

## Features

### Filtering

By default, filtering in the combobox is enabled. It can be disabled by setting the `DisableFiltering` property.

Filtering options can be further enhanced by enabling the search case sensitivity. The case-sensitive icon can be turned on using the `CaseSensitiveIcon` property so that end-users can control the case sensitivity.

```html
<igc-combo disable-filtering case-sensitive-icon></igc-combo>
```

#### Filtering Options

The {ProductName} Combo component exposes one more filtering property that allows passing configuration of both `FilterKey` and `CaseSensitive` options. The `FilterKey` indicates whether the `DisplayKey` property should be used for filtering the list of options. The `CaseSensitive` shows if the filtering should be case sensitive or not.

The following code snippet shows how to filter the cities from our data source by their country instead of their name. We are also making the filtering case sensitive no matter whether the `CaseSensitiveIcon` is enabled or not:

```ts
public customOpts = {
    filterKey: 'country',
    caseSensitive: true
};

constructor() {
    this.combo.filteringOptions = this.options;
}
```

### Grouping

Defining a combobox's `GroupKey` option will group the items, according to the provided key:

```html
<igc-combo group-key="region"></igc-combo>
```

> [!Note]
> You can use the `GroupKey` property only if your data source is comprised of type Object[].

#### Sorting Direction

The combo component also exposes an option for setting whether groups should be sorted in ascending or descending order. By default the sorting order is ascending:

```html
<igc-combo group-sorting="desc"></igc-combo>
```

### Label 

The combobox label can be set easily using the `Label` property:

```html
<igc-combo label="Cities"></igc-combo>
```

### Placeholder

A placeholder text can be specified for both the combo component input and the search input placed inside the dropdown menu: 

```html
<igc-combo placeholder="Pick a city" placeholder-search="Search for a city"></igc-combo>
```

### Autofocus

If you want your combo to be automatically focused on page load you can use the following code:

```html
<igc-combo autofocus></igc-combo>
```

### Search Input Focus

The combo search input is focused by default. To disable this feature and move the focus to the list of options use the `AutofocusList` property as shown below: 

```html
<igc-combo autofocus-list></igc-combo>
```

### Disable ComboBox

You can disable a combobox using the `Disabled` property:

```html
<igc-combo disabled></igc-combo>
```

## API Reference

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

## Additional Resources

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)