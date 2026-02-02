---
title: {Platform} {GridLiteTitle} Overview | {ProductName} | MIT license
_description: Create apps with our open-source {GridLiteTitle}. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Open Source {Platform} Grid

The {ProductName} {GridLiteTitle} is part of Infragistics’ new open-source UI component set that will be actively supported and maintained. It is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. There are 40+ OSS controls now available under the MIT license across Angular, React, Blazor, and Web Components.

The {GridLiteTitle} delivers essential data-display functionality with minimal overhead and the performance users expect. It is designed for developers who need fast, lightweight data presentation without the complexity of an enterprise grid.

{GridLiteTitle} features:

- Column Filtering
- Hiding
- Resizing
- Sorting
- Row Virtualization
- Accessibility
- Themes And Styling
- Column Data Types

## Installation and Setup

### Installation
To install it, go to the root folder of your project (where package.json is located) and run the following command using npm

```cmd
npm install igniteui-grid-lite
```

or using yarn
```cmd
yarn install igniteui-grid-lite
```

### Using the Grid Lite in your {Platform} code

In your component import the Grid Lite component like this

```cmd
import { IgcGridLite } from 'igniteui-grid-lite';
```

Then you need to register it before the declaration of your component class or function
```cmd
IgcGridLite.register();
```

<!-- WebComponents -->
Get the element from the html in your typescript file by id

```ts
const gridLite = document.getElementById('grid-lite') as any;
```
<!-- end: WebComponents -->

<!-- React -->
Finally add the grid lite component to your html template

```tsx
 return (
      <div className="container sample ig-typography">
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div>
    );
```
<!-- end: React -->

<!-- WebComponents -->

Finally add the grid lite component to your html template
```ts
<div class="grid-lite-wrapper">
    <igc-grid-lite id="grid-lite"></igc-grid-lite>
</div>
```
<!-- end: WebComponents -->


## Grid Lite in Action
`sample="/{GridLiteSample}/overview", height="600", alt="{Platform} {GridLiteTitle} App Sample Main"`

{GridLiteTitle} is designed to give you the core features that you need to deliver a beautiful data grid / data table experience in your apps. Designed for performance and beauty, the {GridLiteTitle} will work in any framework, on any platform.

## Performance Built In

Row-level virtualization allows you to render unlimited amounts of data with smooth scrolling.

## Automatic Column Types

Column types are automatically generated base on your data source with built-in filtering based on column type.

<!-- WebComponents -->
## Custom Column Templates

Deliver any type of UX with column templates. Anything you imagine can render in a grid column!
<!-- end: WebComponents -->

## Interactive Features

All the core interactive features your users expect, like column filtering, column hiding, column resizing, columns sorting, and more!

## Beautiful UX & Branding

Built-in theme support for Bootstrap, Material & Fluent, plus endless branding options in color palettes, fonts, elevation, display density & more.

## Rich Keyboard Navigation

Full Excel-style keyboard navigation gives user the experience they expect with high-performance keyboard navigation.
