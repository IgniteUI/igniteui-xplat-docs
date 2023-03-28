---
title: {Platform} ComboBox Component – {ProductName}
_description: {Platform} Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} ComboBox component
mentionedTypes: ['Combo', 'ComboItem', 'ComboHeader', 'ComboList']
---

# {Platform} ComboBox Overview

{Platform} ComboBox is a lightweight editor that enables users to easily select, filter, and group different predefined options in a provided list. The component also supports options for {Platform} ComboBox keyboard navigation, templates to customize how the items, header, and footer are displayed.

The {ProductName} ComboBox component provides a list of options from which users can make a selection. It displays all options in a virtualized list of items, meaning the ComboBox can simultaneously show thousands of records, where one or more options can be selected. Additionally, the component features case-sensitive filtering, grouping, complex data binding and more.

## {Platform} ComboBox Example

`sample="/inputs/combo/overview", height="320", alt="{Platform} Combo Example"`


<div class="divider--half"></div>

## Getting Started with {Platform} ComboBox

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `ComboBox` component, you need to register it together with its additional components:

```ts
import { defineComponents, IgcComboComponent }
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent);
```
<!-- end: WebComponents -->

<!-- Blazor -->

To get started with the `IgbCombo` component, first we need to register its module as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbComboModule));
```

You will also need to link an additional CSS file to apply the styling to the `Combo` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

>[!WARNING]
> The `Combo` component doesn't work with the standard `<form>` element. Use `Form` instead.

Then, we will bind an array of objects to the combo data source used for building the list of options.

```ts
interface City {
    id: string;
    name: string;
}

const cities: City[] = [
    { name: 'London', id: 'UK01' },
    { name: 'Sofia', id: 'BG01'},
    { name: 'New York', id: 'NY01'}
];

export class Sample {
    private combo: IgcComboComponent<City>;

    constructor() {
        this.combo = document.getElementById('basic-combo') as IgcComboComponent<City>;
        this.combo.data = cities;
    }
}
```

```html
<igc-combo id="basic-combo" display-key="name" value-key="id"></igc-combo>
```

```razor
<IgbCombo Id="basic-combo" DisplayKey="name" ValueKey="id" Data="Data" />

@code {
    private class City {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
    }

    private List<City> Data = new List<City> {
        new City {
            Id = "UK01",
            Name = "London",
            Country = "United Kingdom",
        },
        new City {
            Id = "BG01",
            Name = "Sofia",
            Country = "Bulgaria",
        },
        new City {
            Id = "US01",
            Name = "New York",
            Country = "United States",
        },
    };
}
```

### Data value and display properties

Since the combo is bound to a list of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The component exposes the following properties:

 - `DisplayKey` - *Optional,* ***required*** *for object arrays* - Determines which field in the data source is used as the display value. If no value is specified for `DisplayKey`, the combo will use the specified `ValueKey` (if any).
 - `ValueKey` - *Optional,* ***recommended*** *for object arrays* - Determines which field of the data source will be used to make selections. If `ValueKey` is omitted, the selection API will use object references to select items.

In our case, we want the combo to display the `name` of each city and use the `id` field for item selection. Therefore, we provide these properties to the combo's `DisplayKey` and `ValueKey` respectively.

> [!Note]
> When the data source consists of a primitive types (e.g. `strings`, `numbers`, etc.), **do not** specify a `ValueKey` and `DisplayKey`.

### Selection API

The combo component exposes APIs that allow you to change the currently selected items.

Besides selecting items from the list of options by user interaction, you can select items programmatically. This is done via the `select` and `deselect` methods. You can pass an array of items to both methods. If the methods are called with no arguments all items will be selected/deselected depending on which method is called. If you have specified a `ValueKey` for your combo component, then you should pass the value keys of the items you would like to select/deselect:

#### Select/deselect some items:
```ts
// Select/deselect items by their IDs as valueKey is set to 'id'
combo.select(['BG01', 'BG02', 'BG03', 'BG04']);
combo.deselect(['BG01', 'BG02', 'BG03', 'BG04']);
```

```razor
<IgbCombo 
    @ref="Combo"
    Label="Cities" 
    Placeholder="Pick a city" 
    Data="Data" 
    ValueKey="Id" 
    DisplayKey="Name">
</IgbCombo>

@code {
    private List<City> Data;
    private IgbCombo Combo;
    private object[] UKCities; 

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
        this.UKCities = new object[] { "UK01", "UK02", "UK03", "UK04", "UK05" };
    }

    public void SelectUKCities() {
        this.Combo.Select(UKCities);
    }

    public void DeselectUKCities() {
        this.Combo.Deselect(UKCities);
    }
}
```

#### Select/deselect all items:
```ts
// Select/deselect all items
combo.select();
combo.deselect();
```

```razor
@code {
    public void SelectAll() {
        this.Combo.Select(new object[] {});
    }

    public void DeselectAll() {
        this.Combo.Deselect(new object[] {});
    }
}
```

If the `ValueKey` property is omitted, you will have to list the items you wish to select/deselect as objects references:

```ts
// Select/deselect values by object references when no valueKey is provided
combo.select([cities[1], cities[5]]);
combo.deselect([cities[1], cities[5]]);
```

`sample="/inputs/combo/selection", height="380", alt="{Platform} Combo Selection Example"`



### Validation

The {ProductName} Combo component supports most of the `Input` properties, such as `Required`, `Disabled`, `Autofocus`, `Invalid`, etc. The component also exposes two methods bound to its validation:

- `reportValidity` - checks for validity and returns true if the component satisfies the validation constraints.
- `checkValidity` - a wrapper around reportValidity to comply with the native input API.

## Keyboard Navigation

When the combo component is focused and the list of options is **not visible**:

- Open the list of options using <kbd>Down/Alt + Down</kbd> keys.

When the combo component is focused and the list of options is **visible**:

- Using the <kbd>Down</kbd> key will activate the next item in the list.
- Using the <kbd>Up</kbd> key will activate the previous item in the list. If the first item is already active it will focus the input.
- Using the <kbd>Home</kbd> or <kbd>End</kbd> keys will activate the first or the last item in the list.
- Using the <kbd>Space</kbd> key will select the active item.
- Using the <kbd>Enter</kbd> key will select the active item and close the list of options.
- Using the <kbd>Esc</kbd> or <kbd>Tab/Shift + Tab</kbd> keys will close the list of options.

## Styling {Platform} ComboBox

You can change the appearance of the {ProductName} `Combo` component and its items, by using the exposed CSS parts listed below:

### CSS Parts

| Part name            | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `label`              | The encapsulated text label.                                                    |
| `input`              | The main input field.                                                           |
| `native-input`       | The native input of the main input field.                                       |
| `prefix`             | The prefix wrapper.                                                             |
| `suffix`             | The suffix wrapper.                                                             |
| `toggle-icon`        | The toggle icon wrapper.                                                        |
| `clear-icon`         | The clear icon wrapper.                                                         |
| `case-icon`          | A case-icon wrapper that renders content inside the suffix of the filter-input. |
| `helper-text`        | The helper text wrapper.                                                        |
| `search-input`       | The search input field.                                                         |
| `list-wrapper`       | The list of options wrapper.                                                    |
| `list`               | The list of options box.                                                        |
| `item`               | Represents each item in the list of options.                                    |
| `group-header`       | Represents each header in the list of options.                                  |
| `active`             | Appended to the item parts list when the item is active.                        |
| `selected`           | Appended to the item parts list when the item is selected.                      |
| `checkbox`           | Represents each checkbox of each list item.                                     |
| `checkbox-indicator` | Represents the checkbox indicator of each list item.                            |
| `checked`            | Appended to checkbox parts list when checkbox is checked.                       |
| `header`             | The container holding the header content.                                       |
| `footer`             | The container holding the footer content.                                       |
| `empty`              | The container holding the empty content.                                        |

`sample="/inputs/combo/styling", height="380", alt="{Platform} Combo Styling Example"`



## API Reference

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
