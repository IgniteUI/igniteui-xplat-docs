---
title: Free {Platform} Data {GridLiteTitle} (Open Source) - Ignite UI Grid Lite | MIT license
_description: Create apps with our open-source {GridLiteTitle}. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Free & Open-Source {Platform} Data Grid (Grid Lite)

The {ProductName} {GridLiteTitle} is a lightweight, high-performance {Platform} data grid that’s free to use, open-source, and built for modern {Platform} applications.

<!-- React, Blazor -->
This free {Platform} data grid is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. It delivers essential data-display functionality with minimal overhead and the performance users expect. The {Platform} Grid Lite is designed for developers who need fast and lightweight data presentation.
<!-- end: React, Blazor -->

<!-- WebComponents -->
Grid Lite is a free, open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. It delivers essential data-display functionality with minimal overhead and the performance users expect. The {Platform} Grid Lite is designed for developers who need fast and lightweight data presentation.
<!-- end: WebComponents -->

## What You Get with our Free {Platform} Data Grid

Our free, open-source {Platform} Grid Lite comes with the following column-based features: sorting, filtering, hiding, resizing and a variety of pre-defined data types. Blazing-fast performance is delivered with the use of row virtualization. In addition, the component supports keyboard navigation and theming through the [Ignite UI Theming Framework](../themes/overview.md).

<!-- React, WebComponents -->
## Installation and Setup

<!-- WebComponents -->
### Installation
To install {GridLiteTitle}, go to the root folder of your project (where `package.json` is located) and run the following command using npm:

```cmd
npm install igniteui-grid-lite --save
```

Or using yarn:

```cmd
yarn add igniteui-grid-lite
```
<!-- end: WebComponents -->
<!-- React -->
### Installation
To install {GridLiteTitle}, go to the root folder of your project (where `package.json` is located) and run the following command using npm:

```cmd
npm install igniteui-react --save
```

Or using yarn:

```cmd
yarn add igniteui-react
```
<!-- end: React -->

### Using the Grid Lite in your {Platform} code

<!-- React -->
In the file where you want to use Grid Lite, first we need to import it:

```tsx
import { IgrGridLite } from 'igniteui-react/grid-lite';
```
<!-- End: React -->

<!-- WebComponents -->
In the file where you want to use Grid Lite, import and register it before your component class or function is declared:

```ts
import { IgcGridLite } from 'igniteui-grid-lite';

IgcGridLite.register();
```
<!-- End: WebComponents -->

<!-- WebComponents -->
Get the element from the HTML in your TypeScript file by id:

```ts
const gridLite = document.getElementById('grid-lite') as IgcGridLite<ProductInfo>;
```

Add the `<igc-grid-lite>` element to your markup:
<!-- end: WebComponents -->

<!-- React -->
Add the `<IgrGridLite>` component to your markup:

```tsx
return (
  <div className="container sample ig-typography">
    <div className="grid-lite-wrapper">
      <IgrGridLite ref={this.gridRef} id="grid-lite"></IgrGridLite>
    </div>
  </div>
);
```
<!-- end: React -->

<!-- WebComponents -->
```html
<div class="grid-lite-wrapper">
    <igc-grid-lite id="grid-lite"></igc-grid-lite>
</div>
```
<!-- end: WebComponents -->

<!-- end: React, WebComponents -->

<!-- Blazor -->
### Install IgniteUI.Blazor.GridLite

In Visual Studio, open the NuGet package manager by selecting **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**. Search for and install the **IgniteUI.Blazor.GridLite** NuGet package.

Or install via the Package Manager Console:

```cmd
Install-Package IgniteUI.Blazor.GridLite
```

Or via .NET CLI:

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```
### Using Grid Lite

1 - Add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

2 - Add the Style Sheet in the appropriate location based on your project type:

```razor
<head>
       <link href="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

3 - Add the Grid Lite component to your razor page:

```razor
<IgbGridLite Data="data" AutoGenerateColumns="true">
</IgbGridLite>

@code {
    private object[] data = new object[]
    {
        new { Name = "John", Age = 30, City = "New York" },
        new { Name = "Jane", Age = 25, City = "Los Angeles" },
        new { Name = "Bob", Age = 35, City = "Chicago" }
    };
}
```
<!-- end: Blazor -->

## Grid Lite in Action
`sample="/{GridLiteSample}/overview", height="600", alt="{Platform} {GridLiteTitle} App Sample Main"`

{GridLiteTitle} is designed to give you the core features that you need to deliver a beautiful data grid / data table experience in your apps. Designed for performance and beauty, the {GridLiteTitle} will work in any framework, on any platform.

## Performance Built In

Row-level virtualization allows you to render unlimited amounts of data with smooth scrolling.

## Automatic Column Types

Column types are automatically generated based on your data source, with built-in filtering tailored to each column type.

<!-- WebComponents -->
## Custom Column Templates

Deliver any type of UX with column templates. Anything you imagine can render in a grid column!
<!-- end: WebComponents -->

## Interactive Features

All the core interactive features your users expect: column filtering, column hiding, column resizing, column sorting, and more.

## Beautiful UX & Branding

Built-in theme support for Bootstrap, Material & Fluent, plus endless branding options in color palettes, fonts, elevation, display density & more.

## Rich Keyboard Navigation

Full Excel-style keyboard navigation gives users the experience they expect, with high performance even on large datasets.

## Is Grid Lite a Free & Open-Source {Platform} Data Grid?

Yes. Ignite UI Grid Lite is a free, open-source {Platform} data grid released under the MIT license. You can use it in commercial or personal projects with no licensing fees. It is part of our initiative to make Ignite UI more open, transparent, and accessible.

- MIT-licensed

- Free for commercial use

- Community-driven development

- No feature gating

However, if your project scales and grows in complexity and functionality, and you require an enterprise-grade application, we have a seamless upgrade strategy. It will make the transitioning from the free {Platform} data grid (Grid Lite) to the full-featured and advanced Data Grid simpler and faster.
