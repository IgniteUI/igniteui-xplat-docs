---
title: {Platform} Styling and Themes | {Platform} Palettes | Infragistics
_description:
_keywords: {ProductName}, Infragistics, Palettes, Styling
mentionedTypes: ["Palettes"]
---

# Palettes in {ProductName}

{ProductName} exposes CSS variables that allow you to update the colors in your application in a consistent way.

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

> [!NOTE]
> Contrast colors are generated at build-time therefore overriding the CSS variables will not update the corresponding contrast colors.

Here's an excerpt of the `primary` color as declared in the Light Bootstrap Palette:

```css
:root {
  --igc-primary-h: 216deg;
  --igc-primary-s: 98%;
  --igc-primary-l: 52%;
  --igc-primary-a: 1;
  --igc-primary-50: hsla(
                      var(--igc-primary-h),
                      calc(var(--igc-primary-s) * 1.23),
                      calc(var(--igc-primary-l) * 1.78),
                      var(--igc-primary-a)
                    );
  --igc-primary-100: hsla(
                      var(--igc-primary-h),
                      calc(var(--igc-primary-s) / 1.25),
                      calc(var(--igc-primary-l) * 1.66),
                      var(--igc-primary-a)
                    );
  --igc-primary-200: hsla(
                      var(--igc-primary-h),
                      calc(var(--igc-primary-s) * .64),
                      calc(var(--igc-primary-l) * 1.43),
                      var(--igc-primary-a)
                    );
  // ...
  --igc-primary-50-contrast: black;
  --igc-primary-100-contrast: black;
  --igc-primary-200-contrast: black;
  // ...
}
```

All color variants are derived from 4 base variables - `--igc-primary-h`, `--igc-primary-s`, `--igc-primary-l`, and `--igc-primary-a`. Each one of these variables holds the [HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation) parts for a single color. HSLA stands for `hue`, `saturation`, `lightness`, and `alpha`. It's another color space used to represent colors. We decided to use this approach as it allows us to modify all variants of the `primary`, `secondary` and other colors at runtime.

## Defining Palettes

If you wanted to change the color variants for a color from the palette, you can do so by overriding its HSLA values in your stylesheet. For instance, changing the primary colors is as easy as writing:

```css
/* The HSLA representation of orange (#ffa500) */
/* hsla(38.8, 100%, 50%, 1); */
:root {
  --igc-primary-h: 38.8deg;
  --igc-primary-s: 100%;
  --igc-primary-l: 50%;
  --igc-primary-a: 1;
}
```

This will automatically update all the other primary variants.

You will notice that color variants for each color are monochromatic. This is because all color variants are generated from the HSLA variables. You can override individual colors only using any color scheme:

```css
/* The HSLA representation of darkorange (#ff6e00) */
:root {
  --igc-primary-600: 25.9deg, 100%, 50%, 1;
}
```

Be cautious when doing this:

```css
:root {
  /* The HSLA representation of orange (#ffa500) */
  --igc-primary-500: 38.8deg, 100%, 50%, 1;

  /* The HSLA representation of blue (#0080ff) */
  --igc-primary-600: 210deg, 100%, 50%, 1;
}
```

It may result in unexpected results, as some component themes use more than one color variant. We designed all component themes around monochromatic palettes.

## Scoping

We've seen that overriding colors in the palette is relatively easy. We can update the _global_ palette by scoping color variants to the `:root` selector in the `styles.css` file of our application.

Let's say your corporate primary color is `#9f349c` and you want to create primary variants for it. One option would be to use the [Material Color Tool](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) to generate all color variants for you. Here's how we will declare the produced colors by the tool:

```css
:root {
  --igc-primary-50: 305deg, 35%, 93%, 1;
  --igc-primary-100: 304deg, 37%, 82%, 1;
  --igc-primary-200: 303deg, 38%, 70%, 1;
  --igc-primary-300: 303deg, 38%, 58%, 1;
  --igc-primary-400: 303deg, 38%, 50%, 1;
  --igc-primary-500: 302deg, 51%, 41%, 1;
  --igc-primary-600: 298deg, 51%, 39%, 1;
  --igc-primary-700: 293deg, 55%, 36%, 1;
  --igc-primary-800: 289deg, 56%, 33%, 1;
  --igc-primary-900: 279deg, 60%, 28%, 1;
}
```

The Material Color Tool doesn't give you the contrast color for each color variant. There are many tools out there that will help you determine if a specific color has enough contrast when used in combination with another color. You can use the built-in contrast checker in Chrome when determining the contrast color you want to pick for each color variant.

Apart from having a single global palette, you can also create several palettes scoped to other CSS selectors. For example, we can have a blue and red palettes scoped to class selectors:

```css
/* cornflowerblue hsl(218.5, 79.2%, 66.1%) */
.blue-theme {
  --igc-primary-h: 218.5deg;
  --igc-primary-s: 79.2%;
  --igc-primary-l: 66.1%;
  --igc-primary-a: 1;
}

/* brick red hsl(351.7, 57%, 52.5%) */
.red-theme {
  --igc-primary-h: 351.7deg;
  --igc-primary-s: 57%;
  --igc-primary-l: 52.5%;
  --igc-primary-a: 1;
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
  --igc-surface-500: 210deg, 17%, 98%, 1;

  /* gray variants */
  --igc-gray-h: 210deg;
  --igc-gray-s: 11%;
  --igc-gray-l: 71%;
  --igc-gray-a: 1;

  --igc-gray-50: var(--igc-gray-h), var(--igc-gray-s), 98%;
  --igc-gray-100: var(--igc-gray-h), var(--igc-gray-s), 96%;
  --igc-gray-200: var(--igc-gray-h), var(--igc-gray-s), 93%;
  --igc-gray-300: var(--igc-gray-h), var(--igc-gray-s), 88%;
  --igc-gray-400: var(--igc-gray-h), var(--igc-gray-s), 74%;
  --igc-gray-500: var(--igc-gray-h), var(--igc-gray-s), 62%;
  --igc-gray-600: var(--igc-gray-h), var(--igc-gray-s), 54%;
  --igc-gray-700: var(--igc-gray-h), var(--igc-gray-s), 38%;
  --igc-gray-800: var(--igc-gray-h), var(--igc-gray-s), 26%;
  --igc-gray-900: var(--igc-gray-h), var(--igc-gray-s), 13%;
}
```

*Bootstrap Dark:*
```css
:root {
  /* surface is set to a dark shade of gray */
  --igc-surface-500: 210deg, 11%, 15%, 1;

  /* gray variants */
  --igc-gray-h: 210deg;
  --igc-gray-s: 11%;
  --igc-gray-l: 71%;
  --igc-gray-a: 1;

  --igc-gray-50: var(--igc-gray-h), var(--igc-gray-s), 13%;
  --igc-gray-100: var(--igc-gray-h), var(--igc-gray-s), 26%;
  --igc-gray-200: var(--igc-gray-h), var(--igc-gray-s), 38%;
  --igc-gray-300: var(--igc-gray-h), var(--igc-gray-s), 54%;
  --igc-gray-400: var(--igc-gray-h), var(--igc-gray-s), 62%;
  --igc-gray-500: var(--igc-gray-h), var(--igc-gray-s), 74%;
  --igc-gray-600: var(--igc-gray-h), var(--igc-gray-s), 88%;
  --igc-gray-700: var(--igc-gray-h), var(--igc-gray-s), 93%;
  --igc-gray-800: var(--igc-gray-h), var(--igc-gray-s), 96%;
  --igc-gray-900: var(--igc-gray-h), var(--igc-gray-s), 98%;
}
```

Be mindful when changing the `gray` and `surface` color variants as they are used in most components and have a big impact on their overall look and feel.

## Other Colors

So far we've covered the `primary`, `secondary`, `gray`, and `surface` color variants and how you can override them. There are four more colors - `info`, `success`, `warn`, and `error`. They are usually used to set the colors in different states. For example, the `igc-input-group` component uses these colors in its input validation states.

```css
:root {
  --igc-info-500: 190deg, 90%, 50%, 1;
  --igc-success-500: 152deg, 69%, 31%, 1;
  --igc-warn-500: 45deg, 100%, 51%, 1;
  --igc-error-500: 354deg, 70%, 54%, 1;
}
```

 ## API Members

 - `Palettes`