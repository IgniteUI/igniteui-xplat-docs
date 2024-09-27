# Testing XPlatform docs

This document explains process of testing cross-platform docs and their samples.

<!--
## Table of Contents
- [Building Docs](#Building-Docs) -->


## Building Docs

Use one of the following commands to build docs:

```
npm run buildAngular
npm run buildBlazor
npm run buildReact
npm run buildWebComponents
```

## Hosting Docs

You can use one of the following commands to host docs locally:

```
npm run startAngular
npm run startBlazor
npm run startReact
npm run startWebComponents
```

Alternatively, you can open these docs on staging server:

- [angular docs](https://staging.infragistics.com/products/ignite-ui-angular/angular/components/charts/chart-overview)
- [blazor docs](https://staging.infragistics.com/products/ignite-ui-blazor/blazor/components/charts/chart-overview)
- [react docs](https://staging.infragistics.com/products/ignite-ui-react/react/components/charts/chart-overview)
- [web-components react](https://staging.infragistics.com/products/ignite-ui-web-components/web-components/components/charts/chart-overview)

## Extracting Samples

You can get a list of links to samples used in cross-platform docs by first **building all docs** locally (see [Building Docs](#building-docs) section) and then running the following commands:

NOTE: these commands generate JSON files with links to samples on **staging server**

```
   gulp extractSampleLinks --server="staging" --plat=angular
   gulp extractSampleLinks --server="staging" --plat=blazor
   gulp extractSampleLinks --server="staging" --plat=react
   gulp extractSampleLinks --server="staging" --plat=wc
```

NOTE: these commands generate JSON files with links to samples on **production server**

```
   gulp extractSampleLinks --server="production" --plat=angular
   gulp extractSampleLinks --server="production" --plat=blazor
   gulp extractSampleLinks --server="production" --plat=react
   gulp extractSampleLinks --server="production" --plat=wc
```

NOTE: these commands generates JSON files with links to samples on **local server**

```
   gulp extractSampleLinks --server="local" --plat=angular
   gulp extractSampleLinks --server="local" --plat=blazor
   gulp extractSampleLinks --server="local" --plat=react
   gulp extractSampleLinks --server="local" --plat=wc
```

Open generated JSON files in VS Code and then hold CTRL key and click a link to open it browser.

NOTE: links to local samples will work when you run samples browser locally from these repos:

- [igniteui-angular-examples](https://github.com/IgniteUI/igniteui-angular-examples)
- [igniteui-blazor-examples](https://github.com/IgniteUI/igniteui-blazor-examples)
- [igniteui-react-examples](https://github.com/IgniteUI/igniteui-react-examples)
- [igniteui-wc-examples](https://github.com/IgniteUI/igniteui-wc-examples)
