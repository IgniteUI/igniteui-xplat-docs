---
title: {Platform} {GridLiteTitle} Overview | {ProductName} | MIT license
_description: Create apps with our open-source {GridLiteTitle}. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Open Source {Platform} Grid

The {ProductName} {GridLiteTitle} is part of Infragistics’ open-source UI component set, actively supported and maintained. It is an open-source JavaScript data grid built as a Web Component, so you can use it dependency-free with or without a web framework. There are 40+ OSS controls available under the MIT license across Angular, React, Blazor, and Web Components.

The {GridLiteTitle} delivers essential data-display functionality with minimal overhead and the performance users expect. It is designed for developers who need fast, lightweight data presentation without the complexity of an enterprise grid.

{GridLiteTitle} features:

- Column Filtering
- Hiding
- Resizing
- Sorting
- Row Virtualization
- Accessibility
- Themes and Styling
- Column Data Types

<!-- React, WebComponents -->
## Installation and Setup

### Installation
To install {GridLiteTitle}, go to the root folder of your project (where `package.json` is located) and run the following command using npm:

```cmd
npm install igniteui-grid-lite --save
```

Or using yarn:

```cmd
yarn add igniteui-grid-lite
```

### Using the Grid Lite in your {Platform} code

In the file where you want to use Grid Lite, import and register it before your component class or function is declared:

<!-- React -->
```tsx
import { IgcGridLite } from 'igniteui-grid-lite';

IgcGridLite.register();
```
<!-- End: React -->

<!-- WebComponents -->
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
<!-- end: WebComponents -->

Add the `<igc-grid-lite>` element to your markup:

<!-- React -->
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
