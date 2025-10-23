---
title: {Platform} Divider | Layout Controls | Infragistics
_description: Use Infragistics' {Platform} divider component to easily create a horizontal/vertical rule as a break between content to better organize information on a page.
_keywords: {ProductName}, UI controls, {Platform} widgets, Web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} DIvider components, {Platform} Divider controls
mentionedTypes: ["Divider"]
---

# {Platform} Divider

The {ProductName} Divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page.

## {Platform} Divider Example

`sample="/layouts/divider/overview", height="220", alt="{Platform} Divider Example"`

<div class="divider--half"></div>

## Dependencies

<!-- WebComponents -->
First, you need to install the {ProductName} npm package by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Divider`, its necessary CSS, and register its module, like so:

```tsx
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();
```

<!-- end: React -->

Before using the `Divider`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDividerModule));
```
<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Divider` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcDividerComponent } from 'igniteui-webcomponents';

defineComponents(IgcDividerComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

The `Divider` is capable of displaying images, initials, or any other content, including icons. Declaring an `Divider` is as simple as:

```html
<igc-divider></igc-divider>
```

```tsx
<IgrDivider></IgrDivider>
```

```razor
<IgbDivider></IgbDivider>
```
## Usage
### Vertical Divider

If the `Vertical` attribute is set the direction of the divider would be changed from horizontal to vertical.

```html
<igc-divider vertical></igc-divider>
```

```tsx
<IgrDivider vertical></IgrDivider>
```

```razor
<igrDivider Vertical></igrDivider>
```

`sample="/layouts/divider/vertical", height="330", alt="{Platform} Divider Vertical Example"`

### Type

The `Type` attribute determines whether to render a `solid` or a `dashed` divider line. The default value is `solid`.

```html
<igc-divider type="dashed"></igc-divider>
```

```tsx
<IgrDivider type="dashed"></IgrDivider>
```

```razor
<IgbDivider Type="dashed"></igrDivider>
```

`sample="/layouts/divider/dashed", height="220", alt="{Platform} Divider Dashed Example"`

### Inset Divider

The `Divider` can be set in on both sides. To `inset` the divider, set the `Middle` attribute to true in combination with the `--inset` css variable. This will shrink the divider line from both sides. The default value of the `Middle` attribute is false.

```css
/* DividerStyles.css */
.withInset{
    --inset: 100px;
    --color:red;
}
```

```html
// Both side
<igc-divider middle="true" class="withInset"></igc-divider>
// Left side only 
<igc-divider></igc-divider>
```


```tsx
// Both side
<IgrDivider middle="true" className="withInset"></IgrDivider>
// Left side only 
<IgrDivider  className="withInset"></IgrDivider>
```

```razor
// Both side
<IgbDivider Middle="True" class="withInset"</igrDivider>
// Left side only 
<IgbDivider class="withInset"</igrDivider>
```


`sample="/layouts/divider/middle", height="220", alt="{Platform} Divider Middle Inset Example"`

### Using Divider Inside Select Component

The following sample illustrates how the `Divider` can be integrated within the `Select` in order to distinguish two groups of items.

```html
<igc-select>
  <igc-select-item>Item 1</igc-select-item>
  <igc-select-item>Item 2</igc-select-item>
  <igc-divider></igc-divider>
  <igc-select-item>Item 3</igc-select-item>
</igc-select>
```

```tsx
<IgrSelect>
  <IgrSelectItem><span>Item 1</span></IgrSelectItem>
  <IgrSelectItem><span>Item 2</span></IgrSelectItem>
  <IgrDivider></IgrDivider>
  <IgrSelectItem><span>Item 2</span></IgrSelectItem>
</IgrSelect>

```

```razor
<IgbSelect>
 <IgbSelectItem>Item 1</IgbSelectItem>
 <IgbSelectItem>Item 2</IgbSelectItem>
 <IgbDivider></IgbDivider>
 <IgbSelectItem>Item 2</IgbSelectItem>
</IgbSelect>
```

`sample="/layouts/divider/select", height="330", alt="{Platform} Divider Select Example"`

## CSS Variables
### Inset
The `--inset` css variable shrinks the divider by the given amount from the start. If middle is set it will shrink from both sides.

### Color
The `--color` css variable sets the color of the divider.

<div class="divider--half"></div>


## API References

 - `Divider`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})