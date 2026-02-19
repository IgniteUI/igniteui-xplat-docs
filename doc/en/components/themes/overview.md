---
title: {Platform} Styling and Themes | {Platform} Theming | Theme Switching | Infragistics
_description: Use Infragistics' {Platform} components to create apps and improve data visualization with the world’s fastest, virtualized, real-time {Platform} data grid and streaming financial and business and financial charts.
_keywords: {ProductName}, Infragistics, Themes, Styling
_license: MIT
mentionedTypes: ["ConfigureTheme"]
---

# Themes in {ProductName}

{ProductName} ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo. All component themes are baked into the components, however, a global style file is required for palettes, typography, and other global configurations to work.

## Loading a Theme

To enable a theme, a theme file should be loaded. Depending on your project configuration you can either `import` or `link`.

Here's the complete list of all bundled themes and their path:

<!-- Blazor -->
| Name        | Variant | Location                                                        |
| ----------- | ------- | --------------------------------------------------------------- |
| **Bootstrap**   | Light   | _content/IgniteUI.Blazor/themes/grid/light/bootstrap.css |
| **Material**    | Light   | _content/IgniteUI.Blazor/themes/grid/light/material.css  |
| **Fluent**      | Light   | _content/IgniteUI.Blazor/themes/grid/light/fluent.css    |
| **Indigo**      | Light   | _content/IgniteUI.Blazor/themes/grid/light/indigo.css    |
| **Bootstrap**   | Dark    | _content/IgniteUI.Blazor/themes/grid/dark/bootstrap.css  |
| **Material**    | Dark    | _content/IgniteUI.Blazor/themes/grid/dark/material.css   |
| **Fluent**      | Dark    | _content/IgniteUI.Blazor/themes/grid/dark/fluent.css     |
| **Indigo**      | Dark    | _content/IgniteUI.Blazor/themes/grid/dark/indigo.css     |

To load a theme, add a `<link>` tag in the `<head>` of your `index.html`:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

## Runtime Theme Switching

To switch themes at runtime, give the `<link>` tag an `id` and update its `href` via JavaScript interop. Define a JavaScript function:

```razor
<script>
    function changeGridTheme(newThemePath) {
        document.getElementById('grid-theme').href = newThemePath;
    }
</script>
```

Then call it from your Blazor component:

```razor
@inject IJSRuntime JS

@code {
    private async Task SwitchTheme(string themePath)
    {
        await JS.InvokeVoidAsync("changeGridTheme", themePath);
    }
}
```

For a complete example of runtime theme switching, see the [Grid Theming](../grids/theming-grid.md) topic.

<!-- end: Blazor -->

<!-- React -->
| Name        | Variant | Location                                          |
| ----------- | ------- | ------------------------------------------------- |
| **Bootstrap**   | Light   | igniteui-react-grids/grids/themes/light/bootstrap.css |
| **Material**    | Light   | igniteui-react-grids/grids/themes/light/material.css  |
| **Fluent**      | Light   | igniteui-react-grids/grids/themes/light/fluent.css    |
| **Indigo**      | Light   | igniteui-react-grids/grids/themes/light/indigo.css    |
| **Bootstrap**   | Dark    | igniteui-react-grids/grids/themes/dark/bootstrap.css  |
| **Material**    | Dark    | igniteui-react-grids/grids/themes/dark/material.css   |
| **Fluent**      | Dark    | igniteui-react-grids/grids/themes/dark/fluent.css     |
| **Indigo**      | Dark    | igniteui-react-grids/grids/themes/dark/indigo.css     |

To load a theme, import the CSS directly — it will be injected into the page automatically:

```tsx
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
```

## Runtime Theme Switching

To switch themes at runtime with Vite, import the CSS as a string using the `?inline` suffix and inject it via a `<style>` tag:

```tsx
import lightBootstrap from "igniteui-react-grids/grids/themes/light/bootstrap.css?inline";
import darkBootstrap from "igniteui-react-grids/grids/themes/dark/bootstrap.css?inline";

function App() {
  const [themeCss, setThemeCss] = useState(lightBootstrap);

  return (
    <div>
      <style>{themeCss}</style>
      <IgrGrid data={data} autoGenerate={true} />
    </div>
  );
}
```

The `?inline` suffix tells Vite to return the CSS content as a string instead of injecting it into `<head>`, enabling you to swap it dynamically.

For a complete example of runtime theme switching, see the [Grid Theming](../grids/theming-grid.md) topic.

<!-- end: React -->


<!-- WebComponents -->
| Name        | Variant | Location                                          |
| ----------- | ------- | ------------------------------------------------- |
| **Bootstrap**   | Light   | igniteui-webcomponents/themes/light/bootstrap.css |
| **Material**    | Light   | igniteui-webcomponents/themes/light/material.css  |
| **Fluent**      | Light   | igniteui-webcomponents/themes/light/fluent.css    |
| **Indigo**      | Light   | igniteui-webcomponents/themes/light/indigo.css    |
| **Bootstrap**   | Dark    | igniteui-webcomponents/themes/dark/bootstrap.css  |
| **Material**    | Dark    | igniteui-webcomponents/themes/dark/material.css   |
| **Fluent**      | Dark    | igniteui-webcomponents/themes/dark/fluent.css     |
| **Indigo**      | Dark    | igniteui-webcomponents/themes/dark/indigo.css     |

To load a theme, import the CSS in your module:

```ts
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Or link it directly in your HTML:

```ts
<link rel='stylesheet' href='node_modules/igniteui-webcomponents/themes/light/bootstrap.css'>
```

## Runtime Theme Switching

> [!Note]
> Changing the theme at runtime also requires you to replace the global stylesheet from the table above.

{ProductName} allows you to switch the component themes at runtime by using the `ConfigureTheme` function exported by the library. Passing one of the four valid themes - `bootstrap`, `material`, `fluent`, or `indigo` as a string will change the loaded component styles:

```ts
import { configureTheme } from "igniteui-webcomponents";

// Sets material as the theme to be used by all components
configureTheme("material");
```

> [!Note]
> This only tells components to switch their internal styles to the desired theme, you should also switch the global theme file to one of the listed files above.

For a complete example of runtime theme switching, see the [Grid Theming](../grids/theming-grid.md) topic.

<!-- end: WebComponents -->

## Additional Resources

- [Grid Theming](../grids/theming-grid.md)

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})