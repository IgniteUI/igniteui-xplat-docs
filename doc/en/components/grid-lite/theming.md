---
title: {Platform} {GridLiteTitle} Theming | {ProductName} | MIT license
_description: Styling the {GridLiteTitle} in {ProductName} happens easily and quickly. See demos and examples! Try our open-source components and build your next app.
_keywords: styling, theming, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Styles and Themes

The {GridLiteTitle} comes with four distinct themes - Bootstrap, Material, Fluent and Indigo. The grid and its UI components have the themes baked in, but the component requires a global stylesheet for palettes, typography and other global configurations to work.

## Loading a Base Themes

Depending on your project type, setup and build configuration the method of how to include one of the files below will vary. If you are using a framework/build tool refer to its documentation on how to add external styles to your output bundle.

As a rule of thumb, you can always copy the `themes` folder to your assets directory and link the theme from there in your index.html.

```html
<link rel="stylesheet" href="./assets/themes/light/bootstrap.css"
```

| Theme     | Variant | Path                                                           |
| --------- | ------- | -------------------------------------------------------------- |
| Bootstrap | Light   | node_modules/igniteui-webcomponents/themes/light/bootstrap.css |
| Bootstrap | Dark    | node_modules/igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material  | Light   | node_modules/igniteui-webcomponents/themes/light/material.css  |
| Material  | Dark    | node_modules/igniteui-webcomponents/themes/dark/material.css   |
| Fluent    | Light   | node_modules/igniteui-webcomponents/themes/light/fluent.css    |
| Fluent    | Dark    | node_modules/igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo    | Light   | node_modules/igniteui-webcomponents/themes/light/indigo.css    |
| Indigo    | Dark    | node_modules/igniteui-webcomponents/themes/dark/indigo.css     |

In the sample below, you can preview all the default base themes.

`sample="/{GridLiteSample}/styling-themes", height="600", alt="{Platform} {GridLiteTitle} Styling Config Themes"`

## Creating Custom Themes

Aside from the default themes shipped with the {GridLiteTitle} package, you can further customize the look and feel of your data grid by using an alternate set of CSS custom properties.

Refer to the [theming topic](../grids/theming-grid.md) for more details. 

```css
.grid-sample {
  --header-background: #494949;
  --header-text-color: #f2c43c;
  --cell-active-border-color: #f2c43c;
  --row-hover-background: #707070;
  --row-hover-text-color: #f2c43c;
}
```

```razor
 <IgbGridLite class="grid-lite-sample" />
```

Here is an example showcasing the custom theming from above.

`sample="/{GridLiteSample}/styling-custom", height="600", alt="{Platform} {GridLiteTitle} Styling Custom Theme"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})