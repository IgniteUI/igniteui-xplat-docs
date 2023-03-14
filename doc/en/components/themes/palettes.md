---
title: {Platform} Styling and Themes | {Platform} Palettes | Infragistics
_description:
_keywords: {ProductName}, Infragistics, Palettes, Styling
mentionedTypes: ["Palettes"]
---

# Palettes in {ProductName}

{ProductName} exposes CSS variables that allow you to update the colors in your application consistently.

## Overview

Palettes in {ProductName} provide over 100 color variants for 8 base colors - `primary`, `secondary`, `gray`, `info`, `success`, `warn`, `error`, and `surface`.

The `primary`, `secondary`, and `gray` colors follow the [2014 Material Design Color Palette](https://material.io/design/color/the-color-system.html#tools-for-picking-colors). This means these colors include the following variants:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">All</th>
        <th colspan="4" style="text-align: center !important">*Without Gray*</th>
    </tr>
    <tr>
        <td>**50**</td>
        <td>**100**</td>
        <td>**200**</td>
        <td>**300**</td>
        <td>**400**</td>
        <td>**500**</td>
        <td>**600**</td>
        <td>**700**</td>
        <td>**800**</td>
        <td>**900**</td>
        <td>*A100*</td>
        <td>*A200*</td>
        <td>*A400*</td>
        <td>*A700*</td>
    </tr>
</table>

<div class="divider--half"></div>
As the table above shows, the `gray` color doesn't include the `A100`, `A200`, `A400`, and `A700` variants, while the `primary` and `secondary` colors contain all 14 color variants. We include 5 additional colors that are not part of the 2014 Material Design Color Palette - `info`, `success`, `warn`, `error`, and `surface`. These colors also have all 14 color variants.

On top of the aforementioned colors, we also include **Level AAA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) compliant `contrast` colors for each color variant. This means that you can safely use the corresponding `contrast` color variants as foreground colors for the base color variant.

> [!Note]
> Contrast colors are generated at build-time therefore overriding the CSS variables will not update the corresponding contrast colors.

Here's an excerpt of the `primary` color as declared in the Light Bootstrap Palette:

```css
:root {
  --ig-primary-h: 216deg;
  --ig-primary-s: 98%;
  --ig-primary-l: 52%;
  --ig-primary-a: 1;
  --ig-primary-50: hsla(
                      var(--ig-primary-h),
                      calc(var(--ig-primary-s) * 1.23),
                      calc(var(--ig-primary-l) * 1.78),
                      var(--ig-primary-a)
                    );
  --ig-primary-100: hsla(
                      var(--ig-primary-h),
                      calc(var(--ig-primary-s) * 0.8),
                      calc(var(--ig-primary-l) * 1.66),
                      var(--ig-primary-a)
                    );
  --ig-primary-200: hsla(
                      var(--ig-primary-h),
                      calc(var(--ig-primary-s) * .64),
                      calc(var(--ig-primary-l) * 1.43),
                      var(--ig-primary-a)
                    );
  // ...
  --ig-primary-50-contrast: black;
  --ig-primary-100-contrast: black;
  --ig-primary-200-contrast: black;
  // ...
}
```

All color variants are derived from 4 base variables - `--ig-primary-h`, `--ig-primary-s`, `--ig-primary-l`, and `--ig-primary-a`. Each one of these variables holds the [HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation) parts for a single color. HSLA stands for `hue`, `saturation`, `lightness`, and `alpha`. It's another color space used to represent colors. We decided to use this approach as it allows us to modify all variants of the `primary`, `secondary` and other colors at runtime.

## Defining Palettes

If you wanted to change the color variants for a color from the palette, you can do so by overriding its HSLA values in your stylesheet. For instance, changing the primary colors is as easy as writing:

```css
/* The HSLA representation of orange (#ffa500) */
/* hsla(38.8, 100%, 50%, 1); */
:root {
  --ig-primary-h: 38.8deg;
  --ig-primary-s: 100%;
  --ig-primary-l: 50%;
  --ig-primary-a: 1;
}
```

This will automatically update all the other primary variants.

You will notice that color variants for each color are monochromatic. This is because all color variants are generated from the HSLA variables. You can override individual colors only using any color scheme:

```css
/* The HSLA representation of darkorange (#ff6e00) */
:root {
  --ig-primary-600: 25.9deg, 100%, 50%;
}
```

Be cautious when doing this:

```css
:root {
  /* The HSLA representation of orange (#ffa500) */
  --ig-primary-500: 38.8deg, 100%, 50%;

  /* The HSLA representation of blue (#0080ff) */
  --ig-primary-600: 210deg, 100%, 50%;
}
```

It may result in unexpected results, as some component themes use more than one color variant. We designed all component themes around monochromatic palettes.

## Scoping

We've seen that overriding colors in the palette is relatively easy. The _global_ palette can be updated by scoping color variants to the `:root` selector in the `styles.css` file of our application.

Let's say your corporate primary color is `#9f349c` and you want to create primary variants for it. One option would be to use the [Material Color Tool](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) to generate all color variants for you. Here's how we will declare the produced colors by the tool:

```css
:root {
  --ig-primary-50: 305deg, 35%, 93%;
  --ig-primary-100: 304deg, 37%, 82%;
  --ig-primary-200: 303deg, 38%, 70%;
  --ig-primary-300: 303deg, 38%, 58%;
  --ig-primary-400: 303deg, 38%, 50%;
  --ig-primary-500: 302deg, 51%, 41%;
  --ig-primary-600: 298deg, 51%, 39%;
  --ig-primary-700: 293deg, 55%, 36%;
  --ig-primary-800: 289deg, 56%, 33%;
  --ig-primary-900: 279deg, 60%, 28%;
}
```

The Material Color Tool doesn't give you the contrast color for each color variant. There are many tools out there that will help you determine if a specific color has enough contrast when used in combination with another color. You can use the built-in contrast checker in Chrome when determining the contrast color you want to pick for each color variant.

Apart from having a single global palette, you can also create several palettes scoped to other CSS selectors. For example, we can have a blue and red palettes scoped to class selectors:

```css
/* cornflowerblue hsl(218.5, 79.2%, 66.1%) */
.blue-theme {
  --ig-primary-h: 218.5deg;
  --ig-primary-s: 79.2%;
  --ig-primary-l: 66.1%;
  --ig-primary-a: 1;
}

/* brick red hsl(351.7, 57%, 52.5%) */
.red-theme {
  --ig-primary-h: 351.7deg;
  --ig-primary-s: 57%;
  --ig-primary-l: 52.5%;
  --ig-primary-a: 1;
}
```

Then you can simply overhaul the colors in your application by changing the value of the class attribute from `blue-theme` to `red-theme`.

## Dark vs. Light

Palettes in {ProductName} dictate whether a theme is going to be light or dark. The two colors that have the biggest impact on that are `gray` and `surface`. See, the `gray` color variants in all themes are based on either a very light color shade, like `#fff`, or a very dark one like `#222`. Light themes have `gray` variants based on dark shades of gray, while dark themes are the opposite - all `gray` variants are a shade of white. These `gray` colors will be displayed against another color, usually the `surface` color. The `surface` color should always be on the opposite end of the `gray` in the gray scale to ensure themes look good.

To make this a bit clearer, below is the complete list of all `gray` and `surface` color variants in both a light and a dark theme.

*Bootstrap Light:*
```css
:root {
  /* surface is set to a shade of white */
  --ig-surface-500: 210deg, 17%, 98%;

  /* gray variants */
  --ig-gray-h: 210deg;
  --ig-gray-s: 11%;
  --ig-gray-l: 71%;
  --ig-gray-a: 1;

  --ig-gray-50: var(--ig-gray-h), var(--ig-gray-s), 98%;
  --ig-gray-100: var(--ig-gray-h), var(--ig-gray-s), 96%;
  --ig-gray-200: var(--ig-gray-h), var(--ig-gray-s), 93%;
  --ig-gray-300: var(--ig-gray-h), var(--ig-gray-s), 88%;
  --ig-gray-400: var(--ig-gray-h), var(--ig-gray-s), 74%;
  --ig-gray-500: var(--ig-gray-h), var(--ig-gray-s), 62%;
  --ig-gray-600: var(--ig-gray-h), var(--ig-gray-s), 54%;
  --ig-gray-700: var(--ig-gray-h), var(--ig-gray-s), 38%;
  --ig-gray-800: var(--ig-gray-h), var(--ig-gray-s), 26%;
  --ig-gray-900: var(--ig-gray-h), var(--ig-gray-s), 13%;
}
```

*Bootstrap Dark:*
```css
:root {
  /* surface is set to a dark shade of gray */
  --ig-surface-500: 210deg, 11%, 15%;

  /* gray variants */
  --ig-gray-h: 210deg;
  --ig-gray-s: 11%;
  --ig-gray-l: 71%;

  --ig-gray-50: var(--ig-gray-h), var(--ig-gray-s), 13%;
  --ig-gray-100: var(--ig-gray-h), var(--ig-gray-s), 26%;
  --ig-gray-200: var(--ig-gray-h), var(--ig-gray-s), 38%;
  --ig-gray-300: var(--ig-gray-h), var(--ig-gray-s), 54%;
  --ig-gray-400: var(--ig-gray-h), var(--ig-gray-s), 62%;
  --ig-gray-500: var(--ig-gray-h), var(--ig-gray-s), 74%;
  --ig-gray-600: var(--ig-gray-h), var(--ig-gray-s), 88%;
  --ig-gray-700: var(--ig-gray-h), var(--ig-gray-s), 93%;
  --ig-gray-800: var(--ig-gray-h), var(--ig-gray-s), 96%;
  --ig-gray-900: var(--ig-gray-h), var(--ig-gray-s), 98%;
}
```

Be mindful when changing the `gray` and `surface` color variants as they are used in most components and have a big impact on their overall look and feel.

## Other Colors

So far we've covered the `primary`, `secondary`, `gray`, and `surface` color variants and how you can override them. There are four more colors - `info`, `success`, `warn`, and `error`. They are usually used to set the colors in different states. For example, the `igc-input-group` component uses these colors in its input validation states.

```css
:root {
  --ig-info-500: 190deg, 90%, 50%;
  --ig-success-500: 152deg, 69%, 31%;
  --ig-warn-500: 45deg, 100%, 51%;
  --ig-error-500: 354deg, 70%, 54%;
}
```

## API References

 - `Palettes`