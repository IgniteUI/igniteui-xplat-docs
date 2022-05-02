---
title: $Platform$ Data Visualization Tools | $Platform$ Data Visualization Tools | Getting Started | Infragistics
_description: Use Infragistics' $Platform$ components to create apps and improve data visualization with the world’s fastest, virtualized, real-time $Platform$ data grid and streaming financial and business and financial charts.
_keywords: $ProductName$, Infragistics, Getting Started
---
# Getting Started With $ProductName$

<!-- React -->

## Creating New React Project

With above prerequisites installed, we can create a new React application.

1 - Open **VS Code**, select **Terminal** menu and then **New Terminal** option.

2 - Type one of these commands in terminal window:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npx create-react-app my-app-name --typescript
</pre>
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
yarn create react-app my-app-name --typescript
</pre>

Refer to this <a href="https://facebook.github.io/create-react-app/docs/adding-typescript" target="_blank">website</a> for more information on above commands.

<!-- end: React -->

<!-- WebComponents -->
## Step 1 - Create the Web Component Project

1 - Open a command line and create a directory named **wc-html**
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
mkdir wc-html
</pre>

2 - Change the command line path to the newly created directory
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
cd wc-html
</pre>

3 - Initialize **npm** in the directory
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm init -y
</pre>

4 - Install the **webpack** bundler and the **webpack cli** as a developer dependency
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install webpack webpack-cli --save-dev
</pre>

> [!Note]
> Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

5 - Open the project in **VS Code**
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
code .
</pre>

6 - Create a new file named **index.html** with this code:

```
<html>
    <head>
        <title>Getting Started with Ignite UI for Web Components</title>
    </head>
    <body>

    </body>
</html>
```

7 - Create a new folder named **src**, and within that folder create a new file named **index.js**. Your project structure should look like this:

<img src="../images/wc-project.jpg"/>

8 - Update the **package.json** file to include a build script using **webpack**

```
  "scripts": {
    "build": "webpack src/index.js -o dist/index.bundle.js"
  },
```

> [!Note]
> This script will use webpack to bundle the **index.js** file into another file called **index.bundle.js** and place it into a folder named **dist**.
>
> If a **javaScript heap out of memory** issue occurs while building you can increase the heap size by using this build command instead:

```
"scripts": {
    "build": "node --max_old_space_size=8192 node_modules/webpack/bin/webpack src/index.js -o dist/index.bundle.js"
},
```

## Step 2 - Install Polyfills

1 - Open a terminal in **VS Code** (**View** -> **Terminal** menu or press <kbd>CTRL</kbd> + <kbd>`</kbd> keys)

2 - Type this command to install the web component polyfills:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install @webcomponents/custom-elements
</pre>

3 - Import the web component polyfills into **index.js**
```ts
import '@webcomponents/custom-elements/custom-elements.min';
import '@webcomponents/custom-elements/src/native-shim.js';
```

## Step 3 - Install Ignite UI for Web Components

1 - Install the Ignite UI for Web Component using **npm**. In this example, we will install the Map web component:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
npm install --save {PackageMaps}
</pre>

2 - Import the Geographic Map modules and **ModuleManager** in **index.ts** file:

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
// module manager for registering the modules
import { ModuleManager } from 'igniteui-webcomponents-core';
```

3 - Register the Geographic Map modules using the **ModuleManager**

```ts
ModuleManager.register(
    IgcGeographicMapModule,
    IgcDataChartInteractivityModule
);
```

4 - Add the Geographic Map web component to the body of **index.html** file

```html
<body>
    <igc-geographic-map id="map" height="500px" width="100%">
    </igc-geographic-map>
</body>
```

## Step 4 - Build and Run the Web Component Project

1 - Open a terminal in **VS Code** and execute the **build** script

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm run build
</pre>

> [!Note]
> This command will run the build script we created earlier. The build script will generate a file named **index.bundle.js** in a folder named **dist**

2 - Add the **index.bundle.js** script to the end of **body** element in **index.html** file.

```html
<body>
    <igc-geographic-map id="map" height="500px" width="100%">
    </igc-geographic-map>

    <script src="dist/index.bundle.js"></script>
</body>
```

3 - To run the project, launch a local development server. In this example, we are using Live Server. Right-click within the editor of **index.html** and select **Open with Live Server**

<!-- <img src="../images/wc-live-server.jpg" /> -->

> [!Note]
> Live Server is an extension to Visual Studio Code that allows you to launch a local development server with live reload feature for static & dynamic pages. This extension can be installed via the Visual Studio Code Extensions tab, or by downloading it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

4 - Navigate to the **index.html** using a web browser on your local server, and the Ignite UI for Web Components map should now be rendered with shape of the world.

<img src="../images/general/geo-map.png" />
<!-- end: WebComponents -->

<!-- Angular, React -->

## Updating Existing App

If you want to use $ProductName$ in an existing $Platform$ CLI project (one that you have from before). We have you covered! All you have to do is execute these commands:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCharts} {PackageCore}
npm install --save {PackageExcel} {PackageCore}
npm install --save {PackageGauges} {PackageCore}
npm install --save {PackageGrids} {PackageCore}
npm install --save {PackageMaps} {PackageCore}
npm install --save {PackageSpreadsheet} {PackageCore}
</pre>

Or

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
yarn add {PackageCharts} {PackageCore}
yarn add {PackageExcel} {PackageCore}
yarn add {PackageGauges} {PackageCore}
yarn add {PackageGrids} {PackageCore}
yarn add {PackageMaps} {PackageCore}
yarn add {PackageSpreadsheet} {PackageCore}
</pre>

This will automatically install packages for $ProductName$, along with all of their dependencies, font imports and styles references to the existing project.

## Importing Modules

First we have to import the required modules of the components we want to use. We will go ahead and do this for the [**GeographicMap**](geo-map.md) component.

```razor
IgbGeographicMapModule.Register(IgniteUIBlazor);
IgbDataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcGeographicMapModule,
    IgcDataChartInteractivityModule
);

```

## Using Components

We are now ready to use the $ProductName$ map component in our markup! Let's go ahead and define it:

```tsx
// App.txs
render() {
    return (
        <div style={{height: "100%", width: "100%" }}>
            <IgrGeographicMap
            width="800px"
            height="500px"
            zoomable="true" />
        </div>
    );
}
```

```html
<div style="height: 100%, width: 100%">
    <igc-geographic-map
      width="800px"
      height="500px"
      zoomable="true">
    </igc-geographic-map>
</div>
```

## Running Application

Finally, we can run our new application by using one of the following commands:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm run-script start
</pre>

After executing this command, your project will be built and served locally on your computer. It will automatically open in your default browser and you will be able to use $ProductName$ components in your project.

The final result should look something like this screenshot:

<img src="../images/general/geo-map.png" />
<!-- end: Angular, React -->