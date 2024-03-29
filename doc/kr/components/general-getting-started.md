---
title: {Platform} Data Visualization Tools | Infragistics
_description: The {ProductName} is a complete set of {Platform} components designed to enable developers to build the most modern, high-performance HTML5 & TypeScript apps for modern desktop browsers.
_keywords: {ProductName}, Infragistics, Getting started, IG, Install {Platform}
_language: kr
---

# {Platform} Getting Started With {ProductName}

The {ProductName} is a complete set of {Platform} components designed to enable developers to build the most modern, high-performance HTML5 & TypeScript apps for modern desktop browsers.

## Setting Up Computer

Before you can run {ProductName}, there are 2 steps to get everything on your machine set up to run any {Platform} app, including {ProductName}, and to build {Platform} apps. To get started, you must install both NodeJS and Visual Studio Code on your machine. Modern web development with {Platform} requires NodeJS, it’s sort of like an ASP.NET app running in the browser and requires ASP.NET runtime deployed on the server. For development, there is nothing better than Visual Studio Code to build {Platform} apps. Getting started is easy, just download and install both Node.js and Visual Studio Code.

<div style="display:block;width:100%;margin:50px;">
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE JS
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>

## Creating New App

Now that we have everything we need, we can start creating/updating our application!

In **VS Code**, select **Terminal** menu, **New Terminal** option, and type this command in terminal window:


- **npx create-react-app MyAppName --typescript**

Or

- **yarn create react-app MyAppName --typescript**


Refer to this <a href="https://facebook.github.io/create-react-app/docs/adding-typescript" target="_blank">website</a> for more information on above commands.


Next, you need to open the **MyAppName** folder in **VS Code** app and install the following packages for {ProductName} using these commands:

- **npm install --save {PackageCharts} {PackageCore}**
- **npm install --save {PackageExcel} {PackageCore}**
- **npm install --save {PackageGauges} {PackageCore}**
- **npm install --save {PackageGrids} {PackageCore}**
- **npm install --save {PackageMaps} {PackageCore}**
- **npm install --save {PackageSpreadsheet} {PackageCore}**

Or

- **yarn add {PackageCharts} {PackageCore}**
- **yarn add {PackageExcel} {PackageCore}**
- **yarn add {PackageGauges} {PackageCore}**
- **yarn add {PackageGrids} {PackageCore}**
- **yarn add {PackageMaps} {PackageCore}**
- **yarn add {PackageSpreadsheet} {PackageCore}**


Lastly, you can build for production or start your application with these commands:

- **npm run-script build**
- **npm run-script start**

After executing those simple commands, your new project will be built and served. It will automatically open in your default browser and you will be able to use {ProductName} components in your project.

## Updating Existing App

What if you want to use {ProductName} in an existing {Platform} CLI project (one that you have from before)? We have you covered! All you have to do is execute these commands:


- **npm install --save {PackageCharts} {PackageCore}**
- **npm install --save {PackageExcel} {PackageCore}**
- **npm install --save {PackageGauges} {PackageCore}**
- **npm install --save {PackageGrids} {PackageCore}**
- **npm install --save {PackageMaps} {PackageCore}**
- **npm install --save {PackageSpreadsheet} {PackageCore}**

Or

- **yarn add {PackageCharts} {PackageCore}**
- **yarn add {PackageExcel} {PackageCore}**
- **yarn add {PackageGauges} {PackageCore}**
- **yarn add {PackageGrids} {PackageCore}**
- **yarn add {PackageMaps} {PackageCore}**
- **yarn add {PackageSpreadsheet} {PackageCore}**

This will automatically install packages for {ProductName}, along with all of their dependencies, font imports and styles references to the existing project.


## Importing Modules

First we have to import the required modules of the components we want to use. We will go ahead and do this for the [**GeographicMap**](geo-map.md) component.


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```

## Using Components

We are now ready to use the {ProductName} map component in our markup! Let's go ahead and define it:

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

## Running Application

Finally, we can run our new application by using one of the following commands:

- **npm run-script start**


The final result should look something like this screenshot:

<img src="../images/general/geo-map.png" />
