---
title: $Platform$ Select Component – $ProductName$
_description: $ProductName$ Select component 
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Select components, $Platform$ Select controls
mentionedTypes: ['Select']
---

# $Platform$ Select
The $ProductName$ Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match. 

## $Platform$ Select Example

<code-view style="height:220px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/select-overview" alt="$Platform$ Select Example"
           github-src="inputs/select/overview">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Select` component, you need to register it together with its additional components:

```ts
import { defineComponents,
         IgcSelectComponent,
         IgcSelectItemComponent,
         IgcSelectGroupComponent,
         IgcSelectHeaderComponent } 
from 'igniteui-webcomponents';

defineComponents(IgcSelectComponent, IgcSelectItemComponent, IgcSelectGroupComponent, IgcSelectHeaderComponent);
```

> [!NOTE]
> Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the `igc-select` along with a list of `igc-select-item`'s to choose from:

```html
<igc-select>
    <igc-select-item value="Orange">Orange</igc-select-item>
    <igc-select-item value="Apple">Apple</igc-select-item>
    <igc-select-item value="Banana">Banana</igc-select-item>
    <igc-select-item value="Mango">Mango</igc-select-item>
</igc-select>
```

### Select 

The `igc-select` component can be used inside and `igc-form` thus it exposes a `Name` property to be registered with. It also has a `Label`, `Placeholder`, and `Size` properties. The `Outlined` property is used for styling purposes only when it comes to the Material theme. Except for the default one, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`. In addition, the `igc-select` also supports most of the `igc-input` properties, such as `required`, `disabled`, `autofocus`, `autocomplete`, etc.

### Item

The `igc-select-item` component allows the users to declaratively specify a list of options to be used by the `igc-select` control. Each item provides a `Value` property that represents the data it carries upon selection. The `SelectItem` has a default slot which allows you to specify the content of the item. This content will only be used for visual purposes and will not be used in case the `Value` property is not present on the `igc-select-item`. You could also provide custom content to be rendered before or after the `SelectItem` content using the `prefix` and `suffix` slots. You could predefine a selected item by setting the `Selected` property. You could also disable some or all items via the `Disabled` property.

<code-view style="height: 220px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-item"
           alt="$Platform$ Select Item Example"
           github-src="inputs/select/item">
</code-view>

### Header

You can use the `SelectHeader` to provide a header for a group of items.

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-header"
           alt="$Platform$ Select Header Example"
           github-src="inputs/select/header">
</code-view>

### Group

Multiple `igc-select-item`'s can be placed between the opening and close brackets of an `igc-select-group` component. The `SelectGroup` allows the users to visually group items together. The `igc-select-group` can be labelled via its `label` slot.

<code-view style="height: 380px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-group"
           alt="$Platform$ Select Group Example"
           github-src="inputs/select/group">
</code-view>


## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the `igc-select` using the `ALT + Up/Down Arrow` combination or by clicking on the `Space` or the `Enter` key.
- Close the `igc-select` using the `ALT + Up/Down Arrow` combination or any of the `Enter`, `Space`, `Esc` or `Tab` keys.
- Using the `Up/Left Arrow` keys will select the previous item in the list.
- Using the `Down/Right Arrow` keys will select the next item in the list.
- Using the `Home` or `End` keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the `Enter` or `Space` keys will select an item and close the list.
- Using the `Up/Left Arrow` keys will activate the previous item in the list.
- Using the `Down/Right Arrow` keys will activate the next item in the list.
- Using the `Home` or `End` keys will activate the first or last item in the list.

> [!NOTE]
> The `igc-select` component supports only **single** selection of items.

## CSS Parts

Part name | Description
---------|------------
`container` | The main wrapper that holds all main input elements.
`prefix`  | A prefix wrapper that renders content before the input.
`suffix` | A suffix wrapper that renders content after the input.
`helper-text` | A helper-text wrapper that renders content below the input.

<!-- WebComponents -->

## Styling

The $ProductName$ Select component is built up entirely by the `igc-input` and the `igc-dropdown` components. Therefore, if you want to change the `igc-select` appearance you have to use the CSS parts exposed by the other two components.

<code-view style="height: 380px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-styling"
           alt="$Platform$ Select Styling Example"
           github-src="inputs/select/styling">
</code-view>

## API Reference

* `Select`
* `SelectItem`
* `SelectHeader`
* `SelectGroup`

<!-- end: WebComponents -->

## Additional Resources

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->