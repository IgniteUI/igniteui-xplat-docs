---
title: $Platform$ Styling and Themes | $Platform$ Typography | Infragistics
_description:
_keywords: $ProductName$, Infragistics, Typography, Styling
mentionedTypes: ["Typography"]
---

# Typography in $ProductName$
The typography in $ProductName$ is modeled after the [Material Type System](https://material.io/design/typography/the-type-system.html#). It's non-intrusive and optional, allowing you to modify the type styles using CSS only.

## Overview
The type system is a **_type scale_** consisting of **_13 different category type styles_** used across most components. All of the scale categories are completely reusable and adjustable by the end user.

Here's a list of all 13 category styles as defined for the Bootstrap Theme in $ProductName$:

| **Scale Category** | **Font Family** | **Font Weight** | **Font Size** | **Text Transform** | **Letter Spacing** | **Line Height** |
|--------------------|-----------------|-----------------|---------------|--------------------|--------------------|-----------------|
| **h1**             |  System Font    | 500             | 2.5 rem       | none               | -.09375 rem        | 3 rem           |
| **h2**             |  System Font    | 500             | 2 rem         | none               | -.0312 rem         | 2.4 rem         |
| **h3**             |  System Font    | 500             | 1.75 rem      | none               | 0                  | 2.1 rem         |
| **h4**             |  System Font    | 500             | 1.5 rem       | none               | .015625 rem        | 1.8 rem         |
| **h5**             |  System Font    | 500             | 1.25 rem      | none               | 0                  | 1.5 rem         |
| **h6**             |  System Font    | 500             | 1 rem         | none               | .009375 rem        | 1.2 rem         |
| **subtitle-1**     |  System Font    | 400             | .875 rem      | none               | .009375 rem        | 1.5 rem         |
| **subtitle-2**     |  System Font    | 400             | .9 rem        | none               | .00625 rem         | 1.35 rem        |
| **body-1**         |  System Font    | 400             | 1 rem         | none               | .03125 rem         | 1.5 rem         |
| **body-2**         |  System Font    | 400             | .9 rem        | none               | .015625 rem        | 1.5 rem         |
| **button**         |  System Font    | 500             | 1 rem         | none               | .046875 rem        | 1.5 rem         |
| **caption**        |  System Font    | 400             | .75 rem       | none               | .025 rem           | 1 rem           |
| **overline**       |  System Font    | 400             | .625 rem      | uppercase          | .09375 rem         | 1 rem           |

Each theme defines its own type scale. This means each one of the themes we ship - Material, Fluent, Boostrap, and Indigo will have its own type scale. They all share the same _scale categories_, but can have different font family, weight, size, text transform, letter spacing, and line height.

## Usage

### Changing font family

To change the font family in all components, all you have to do is overwrite the `--igc-font-family` CSS variable:

```css
:root {
  --igc-font-family: 'Helvetica Neue';
}
```

### Changing type styles

The type styles are used internally by most of the components in $ProductName$. For instance, the `igc-button` component uses the button type style.
To change any of the type style properties, we need to overwrite the corresponding CSS variable:

```css
:root {
  --igc-button-font-size: 22px;
  --igc-button-line-height: 26px;
  --igc-button-text-transform: lowercase;
}
```

Keep in mind that this will update the global button typography styles. If you want to apply these changes to a specific button, you can make use of a class selector.

 ## API Members

 - `Typography`