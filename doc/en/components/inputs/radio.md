---
title: Radio and Radio Group
_description: With {ProductName} Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Radio Button components, {Platform} Radio Button controls, {Platform} Radio Group component, {Platform} Radio Group control
mentionedTypes: ['Radio', 'RadioGroup', 'Form']
---

# {Platform} Radio & Radio Group

The {ProductName} Radio component allows the user to select a single option from an available set of options that are listed side by side.


## {ProductName} Radio Example

`sample="/inputs/radio/group", height="100", alt="{Platform} Radio & Radio Group Example"`


<div class="divider--half"></div>

### Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Radio` and the `RadioGroup`, you need to register them as follows:

```ts
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Radio` and the `RadioGroup`, its necessary CSS, and register its module, like so:

```tsx
import { IgrRadioModule, IgrRadio, IgrRadioGroupComponent, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrRadioModule.register();
IgrRadioGroupModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Radio` and the `RadioGroup`, you need to register them as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbRadioModule),
  typeof(IgbRadioGroupModule)
);
```

You will also need to link an additional CSS file to apply the styling to the `Radio` and the `RadioGroup` components. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The simplest way to start using the `Radio` is as follows:

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio>Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

> [!WARNING]
> The `Radio` component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the `Radio`, simply place some text between the opening and closing tags:

```tsx
<IgrRadio><span>Label</span></IgrRadio>
```

```html
<igc-radio>Apple</igc-radio>
```

```razor
<IgbRadio>Apple</IgbRadio>
```

You can specify if the label should be positioned before or after the `Radio` button by setting the `label-position` attribute. Allowed values are `before` and `after`(default):

```tsx
<IgrRadio labelPosition="before"><span>Apple</span></IgrRadio>
```

```html
<igc-radio label-position="before">Apple</igc-radio>
```

```razor
<IgbRadio LabelPosition="@RadioLabelPosition.Before">Apple</IgbRadio>
```

The `Radio` can also be labelled by elements external to it. In this case the user is given full control to position and style the label in accordance to their needs.


```tsx
<span id="radio-label">Label</span>
<IgrRadio ariaLabelledby="radio-label"></IgrRadio>
```

```html
<span id="radio-label">Label</span>
<igc-radio aria-labelledby="radio-label"></igc-radio>
```

```razor
<span id="radio-label">Label</span>
<IgbRadio AriaLabelledBy="radio-label" />
```

`sample="/inputs/radio/label", height="100", alt="{Platform} Radio Example"`



### Checked

You can use the `checked` attribute to toggle on the radio.

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" checked="true"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio checked>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio Checked="true">Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

`sample="/inputs/radio/group", height="100", alt="{Platform} Radio Example"`



### Invalid

You can use the `invalid` attribute to mark the radio as invalid.

```tsx
<IgrRadio invalid="true"></IgrRadio>
```

```html
<igc-radio invalid></igc-radio>
```

```razor
<IgbRadio Invalid="true" />
```

`sample="/inputs/radio/invalid", height="100", alt="{Platform} Radio Example"`



### Disabled

You can use the `disabled` attribute to disable the radio.

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" disabled="true"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio disabled>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio Disabled="true">Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

`sample="/inputs/radio/disabled", height="100", alt="{Platform} Radio Example"`



### Group Alignment

The `RadioGroup` allows you to easily change the placement directionality of the radio buttons it contains using the `alignment` attribute. Allowed values are `vertical`(default) and `horizontal`.

```tsx
<IgrRadioGroup alignment="horizontal">
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" disabled="true"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```html
<igc-radio-group alignment="horizontal">
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup Alignment="@RadioGroupAlignment.Horizontal">
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio>Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

`sample="/inputs/radio/alignment", height="60", alt="{Platform} Radio Example"`



### Forms

You can use the `name` and `value` attributes when using the radio with `Form`.

```tsx
<IgrRadioGroup>
  <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio name="fruit" value="banana"><span>Banana</span></IgrRadio>
  <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```html
<igc-radio-group>
  <igc-radio name="fruit" value="apple">Apple</igc-radio>
  <igc-radio name="fruit" value="banana">Banana</igc-radio>
  <igc-radio name="fruit" value="mango">Mango</igc-radio>
  <igc-radio name="fruit" value="banana">Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio Name="fruit" Value="apple">Apple</IgbRadio>
    <IgbRadio Name="fruit" Value="banana">Banana</IgbRadio>
    <IgbRadio Name="fruit" Value="mango">Mango</IgbRadio>
    <IgbRadio Name="fruit" Value="orange">Orange</IgbRadio>
</IgbRadioGroup>
```

## Styling

The `Radio` component exposes several CSS parts (`base`, `control`, and `label`) to give you full control over its styling. You can also modify the global palette colors to change the colors of the radio component:

```scss
:root {
    --ig-primary-h: 60deg;
    --ig-primary-s: 100%;
    --ig-primary-l: 25%;
}

igc-radio::part(control) {
    --size: 18px;
}
```

`sample="/inputs/radio/styling", height="205", alt="{Platform} Radio Styling"`



<div class="divider--half"></div>


## API References

 - `Form`
 - `RadioGroup`
 - `Radio`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
