---
title: {Platform} Select Component – {ProductName}
_description: {ProductName} Select component
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Select components, {Platform} Select controls
mentionedTypes: ["Select"]
---

# {Platform} Select

The {ProductName} Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match.

## {Platform} Select Example

`sample="/inputs/select/overview", height="275", alt="{Platform} Select Example"`


<div class="divider--half"></div>

## Usage

<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Select` component, you need to register it together with its additional components:

```ts
import {
    defineComponents,
    IgcSelectComponent
}
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSelectComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- Blazor -->

Before using the `Select` component, you need to register it together with its additional components:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSelectModule));
```

You will also need to link an additional CSS file to apply the styling to the `Select` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Select` and the `SelectItem` and its necessary CSS, like so:

```tsx
import { IgrSelect, IgrSelectItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

> [!Note]
> Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the `Select` along with a list of `SelectItem`'s to choose from:

<!-- WebComponents -->
```html
<igc-select>
    <igc-select-item value="orange">Orange</igc-select-item>
    <igc-select-item value="apple">Apple</igc-select-item>
    <igc-select-item value="banana">Banana</igc-select-item>
    <igc-select-item value="mango">Mango</igc-select-item>
</igc-select>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbSelect>
    <IgbSelectItem Value="orange">Orange</IgbSelectItem>
    <IgbSelectItem Value="apple">Apple</IgbSelectItem>
    <IgbSelectItem Value="banana">Banana</IgbSelectItem>
    <IgbSelectItem Value="mango">Mango</IgbSelectItem>
</IgbSelect>
```
<!-- end: Blazor -->

<!-- React -->

```tsx
<IgrSelect>
  <IgrSelectItem value="Orange"><span>Orange</span></IgrSelectItem>
  <IgrSelectItem value="Apple"><span>Apple</span></IgrSelectItem>
  <IgrSelectItem value="Banana"><span>Banana</span></IgrSelectItem>
  <IgrSelectItem value="Mango"><span>Mango</span></IgrSelectItem>
</IgrSelect>
```

<!-- end: React -->

### Select

The `Select` component can be used inside a `Form` component, thus it exposes a `Name` property to be registered with. It also has a `Label`, and `Placeholder` properties. The `Outlined` property is used for styling purposes only when it comes to the Material theme. Except for the default slot, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`. The component size can be changed using the `--ig-size` CSS variable.

### Item

The `SelectItem` component allows the users to declaratively specify a list of options to be used by the `Select` control. Each item provides a `Value` property that represents the data it carries upon selection. The `SelectItem` has a default slot which allows you to specify the text content of the item. This text content will be used as value in case the `Value` property is not present on the `SelectItem`. You could also provide custom content to be rendered before or after the `SelectItem` content using the `prefix` and `suffix` slots. You could predefine a selected item by setting the `Selected` property. You could also disable some or all items via the `Disabled` property.

`sample="/inputs/select/item", height="275", alt="{Platform} Select Item Example"`


### Header

You can use the `SelectHeader` to provide a header for a group of items.

`sample="/inputs/select/header", height="275", alt="{Platform} Select Header Example"`


<!-- WebComponents -->
```html
<igc-select>
    <igc-select-header>Tasks</igc-select-header>
</igc-select>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbSelect>
    <IgbSelectHeader>Tasks</IgbSelectHeader>
</IgbSelect>
```
<!-- end: Blazor -->

<!-- React -->

```tsx
<IgrSelect>
  <IgrSelectHeader>
    <span>Tasks</span>
  </IgrSelectHeader>
</IgrSelect>
```

<!-- end: React -->

### Group

Multiple `SelectItem`s can be placed between the opening and closing brackets of an `SelectGroup` component so that users can visually group them together. The `SelectGroup` can be labelled via its `label` slot and disabled via its `Disabled` property.

> [!Note]
> Keep in mind that if a select group is disabled, you cannot enable separate items of it.

`sample="/inputs/select/group", height="500", alt="{Platform} Select Group Example"`

<!-- WebComponents -->
```html
<igc-select>
    <igc-select-group>
        <span slot="label">Europe</span>

        <igc-select-item>
          <igc-icon @ref="IconRef" slot="prefix" name="place" collection="material"></igc-icon>
          Germany
          <span slot="suffix">DE</span>
        </igc-select-item>

        <igc-select-item>
          <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
          France
          <span slot="suffix">FR</span>
        </igc-select-item>

        <igc-select-item>
          <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
          Spain
          <span slot="suffix">ES</span>
        </igc-select-item>
    </igc-select-group>
</igc-select>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbSelect>
    <IgbSelectGroup>
        <span slot="label">Europe</span>

        <IgbSelectItem>
          <IgbIcon @ref="IconRef" slot="prefix" name="place" collection="material"></IgbIcon>
          Germany
          <span slot="suffix">DE</span>
        </IgbSelectItem>

        <IgbSelectItem>
          <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
          France
          <span slot="suffix">FR</span>
        </IgbSelectItem>

        <IgbSelectItem>
          <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
          Spain
          <span slot="suffix">ES</span>
        </IgbSelectItem>
    </IgbSelectGroup>
</IgbSelect>
```
<!-- end: Blazor -->

<!-- React -->

```tsx
<IgrSelect>
  <IgrSelectGroup>
    <span slot="label">Europe</span>
    <IgrSelectItem>
      <span slot="prefix">
        <IgrIcon name="place" collection="material"></IgrIcon>
      </span>
      <span> Germany </span>
      <span slot="suffix">DE</span>
    </IgrSelectItem>
    <IgrSelectItem>
      <span slot="prefix">
        <IgrIcon name="place" collection="material"></IgrIcon>
      </span>
      <span> France </span>
      <span slot="suffix">FR</span>
    </IgrSelectItem>
    <IgrSelectItem>
      <span slot="prefix">
        <IgrIcon name="place" collection="material"></IgrIcon>
      </span>
      <span> Spain </span>
      <span slot="suffix">ES</span>
    </IgrSelectItem>
  </IgrSelectGroup>
</IgrSelect>
```

<!-- end: React -->

## Validation

In addition, the `Select` supports most of the `Input` properties, such as `Required`, `Disabled`, `Autofocus`, etc. The component also exposes a method bound to its validation:

- `reportValidity` - checks for validity and focuses the component if invalid.

## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the `Select` using the <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> combination or by clicking on the <kbd>SPACE</kbd> or the <kbd>ENTER</kbd> key.
- Close the `Select` using the <kbd>ALT</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd> combination or any of the <kbd>ENTER</kbd>, <kbd>SPACE</kbd>, <kbd>ESC</kbd> or `Tab` keys.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will select the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will select the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the <kbd>ENTER</kbd> or <kbd>SPACE</kbd> keys will select an item and close the list.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will activate the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will activate the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or last item in the list.

> [!Note]
> The `Select` component supports only **single** selection of items.

<!-- WebComponents, React -->

## Styling

You can change the appearance of the {ProductName} `Select` component and its items, by using the exposed CSS parts listed below:

**Select Component**

| Part name | Description |
| ---------|------------ |
| `input` | The encapsulated igc-input. |
| `label` | The encapsulated text label. |
| `list` | A wrapper that holds the list of options. |
| `prefix`  | A prefix wrapper that renders content before the input. |
| `suffix` | A suffix wrapper that renders content after the input. |
| `toggle-icon` | A toggle-icon wrapper that renders content inside the suffix wrapper. |
| `helper-text` | A helper-text wrapper that renders content below the input. |

**Select Item Component**

| Part name | Description |
| ---------|------------ |
| `content` | The main wrapper that holds the text content of an item. |
| `prefix`  | A prefix wrapper that renders content before the main wrapper. |
| `suffix` | A suffix wrapper that renders content after the main wrapper. |

**Select Group Component**

| Part name | Description |
| ---------|------------ |
| `label` | A label wrapper that renders content above the select group items. |

```css
igc-select::part(base) {
  background: var(--ig-primary-50);
}

igc-select-item[active] {
  background: var(--ig-secondary-300);
}

igc-select::part(input) {
  background-color: var(--ig-primary-50);
}

igc-select::part(prefix),
igc-select::part(suffix) {
  color: var(--ig-secondary-500-contrast);
  background: var(--ig-secondary-500);
}
```

`sample="/inputs/select/styling", height="380", alt="{Platform} Select Styling Example"`

<!-- end: WebComponents, React -->


## API Reference

- `Select`
- `SelectItem`
- `SelectHeader`
- `SelectGroup`
- [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
