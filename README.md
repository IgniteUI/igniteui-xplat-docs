
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <img style="border-radius: 0.25rem" alt="ignite-ui" src="./doc/en/images/readme/ig-banner.png"/>
</div>

# Cross Platform Docs for Ignite UI Components

![Blazor CI](https://github.com/IgniteUI/igniteui-xplat-docs/actions/workflows/build-blazor.yml/badge.svg?branch=vnext)
![React CI](https://github.com/IgniteUI/igniteui-xplat-docs/actions/workflows/build-react.yml/badge.svg?branch=vnext)
![WebComponents CI](https://github.com/IgniteUI/igniteui-xplat-docs/actions/workflows/build-wc.yml/badge.svg?branch=vnext)

## Introduction

The goal here is to provide cross platform long form doc for Angular, Blazor, React, and WebComponents using DocFX.

## Table of Contents

- [Introduction](#Introduction)

- [Getting Started](#Getting-Started)
  * [Prerequisites](#Prerequisites)
  * [Installing DocFX](#Installing-DocFX)
  * [Installing Node JS](#Installing-Node-JS)

- [Writing Documentation](#Writing-Documentation)
  * [Creating Branches](#Creating-Branches)
  * [Following Rules](#Following-Rules)
  * [Using Variables](#Using-Variables)

- [Running Docs](#Running-Docs)
- [Building Docs](#Building-Docs)

- [Maintenance](#Maintenance)
  * [API Mapping Files](#API-Mapping-Files)
  * [API Resource Links](#API-Resource-Links)
  * [Merging Branches](#Merging-Branches)
  * [Updating Angular Docs](#updating-angular-docs)


## Getting Started

This section provides information on how to install software required for running this repository.

> NOTE: you need to start VS Code or your command-line shell (CMD, PowerShell, Bash, etc.) with elevated permissions ("Run As Administrator" in Windows). This is required by Chocolatey, for further information read point 1 from [here](https://chocolatey.org/security#overall).

#### Prerequisites

1. Install [Node.js](https://nodejs.org)
2. Install [Yarn](https://yarnpkg.com/en/)

#### Installing DocFX

To install docfx restore it as a dotnet tool: 

```cmd
dotnet tool restore
```

**NOTE**: Performing `npm install` also restores dotnet tool dependencies as a `postinstall` step.

#### Installing Node JS

Run this command in VS code terminal to install required dependencies:
```cmd
yarn install
```

> NOTE: Do not use `npm` because you will not be able to run docs locally.

## Writing Documentation

#### Creating Branches

- get latest from this repository
- checkout `vnext` branch
- create a new branch with your initials, e.g. `mt-fixing-charts`
- make your changes in `.md` files under `./doc/` folder
- make your changes in TOC if you are adding new topics,

`./docfx/en/components/toc.json`
  - If you want to add status (new, updated, preview) to all topics for WebComponents, React and Blazor you can set the property status like this `status = "NEW"`
  - If you want to add status specific only to a single platform you can set the property status like this `status = ["NEW_REACT", "PREVIEW_BLAZOR", "UPDATED_WEBCOMPONENTS"]`

- commit your changes to you branch
- push your branch to origin
- create a pull request and target `vnext` branch on [github](https://github.com/IgniteUI/igniteui-xplat-docs)

## Following Rules

The files in this repo are arranged under the `./doc` folder. They are organized in the same structure as the target platform specific DocFX project. Just edit `.md` file named for the member you want to add documentation for. Author it for all platforms at once, preferably, as described below:


#### Always: Pretend you are documenting all platforms at once.

Try to imagine you are trying to document all platforms at once, that may even be a target we use one day.

In the meantime, the transformation process will try to drop content that applies to just one platform or another.

#### Always: Provide code snippets, one after another, for as many platforms as possible.

The transformation process will drop code snippets that don't apply to the current platform.

#### Always: Call out the language being used in a fenced code block.

When transforming the markdown to various platforms, we'll automatically drop inappropriate fenced code blocks if we can identify their platform reliably.

It helps, in this regard, if you call out the platform being used:

````md
```cs
chart.IsInverted = true;
```
````

If we were, say, transforming to Angular, this code block would get dropped.

#### Avoid: Placing platform specific front matter in front of a code block.

The transformation process will not necessarily know that a preceding paragraph is associated with a code block, and so wont necessarily know to drop it if it drops the associated code block.

You can hint that a paragraph is associated with a succeeding code block like this:

````md
<!-- Angular -->
This is some Angular specific stuff preceding an Angular specific code block

```html
<igx-category-chart dataSource="data"
    yAxisInverted="true">
</igx-category-chart>
```
````

This would end up dropping both the code block and the preceding paragraph.

However, this doesn't look very clean, so its best to avoid this unless the preceding text is truly needed for clarity. If this scenario crops up often, we should come up with some key phrases to identify platform specific preceding text. For example, if a paragraph were to start with "For Angular, " then we could automatically treat it as Angular text. This is not in place yet, though.

#### Do: Call out platform specific notes using conventional DocFX style note blocks.

If you have some platform specific notes/warnings/etc, do call them out with DocFX style notes:

```md
> [!Note]
> For Angular:
> This is an angular specific note.
```

When generating content for a platform other than angular, this note will be stripped. When generating content for Angular, this note's content will be retained, but the note container and _For Angular_ will be removed.

#### If Necessary: Gate text with a platform comment

If you need to gate some markdown and have it only apply to a specific platform or platforms, you can do this with some comments:

```md
<!-- Angular -->
This is some content that will only show for Angular.
<!-- end: Angular -->
```

or

```md
<!-- Angular, WPF -->
This is some content that will only show for Angular or WPF.
<!-- end: Angular, WPF -->
```

> NOTE: Don't overuse this, as it hampers the readability of the markdown files. Readability of the markdown files should be paramount. Don't make them difficult to digest for someone trying to read and edit the markdown.

#### Always: Use C# member names and class names in code terms

Whenever mentioning a member name or class name, surround it in backticks in the markdown. This will cause it to be transformed to the appropriate platform member name for each platform during transformation:

```md
To invert the axis scale use `IsInverted`
```

will, for example be translated into this markdown for Angular:

```md
To invert the axis scale use `isInverted`
```
#### Using Variables

In **docConfig.json** you can add entries in "[ProductName]" => "replacements" where name is a regular expression that matches the text you wish to replace in the markdown, and value is the value you wish to have inserted.

For example with this entry:

```js
{
"Angular": {
        "replacements": [
            { "name": "{ProductName}", "value": "Ignite UI for Angular" },
```

you can have `{ProductName}` replaced with `Ignite UI for Angular` wherever it appears in the input documentation.


## Running Docs

Each time your get latest, run this command:

```cmd
yarn install
```

> NOTE: Do not use `npm` because you will not be able to run docs locally.

You can host the DocFX locally with this command *yarn* (PS in admin mode required):

```cmd
yarn start
```

Which will show you English documentation for Blazor platform by default.

You can change platform by running one of the following commands with:

<!-- ```cmd 
For internal use only:
    npm run startBlazorStaging
    (Note staging samples only )
``` -->

```cmd
yarn startWC
yarn startReact
yarn startBlazor
```

If you want see the output for a different language you can use the lang switches:


```cmd
yarn startWC --lang=jp
yarn startReact --lang=jp
yarn startBlazor --lang=jp
```

The `start` command will watch for changes to the input md files and re-run the compile and refresh browsers if a file has changed.

> NOTE: Angular cannot run through xplat-docfx directly. Because Angular output gets combined with the igniteui-docfx site.
​If changes here needed to be tested, and with samples simultaneously, ensure docs are updated and merged. The xplat-docfx build then auto submits a PR against igniteui-docfx which needs to be updated for the angular content to join that site. Then clone, and npm start igniteui-docfx at
   https://github.com/IgniteUI/igniteui-docfx


## Building Docs

Run these commands to test just transformation of markdown files to the ./dist/ output folder:

| Command                       | Description  |
|-------------------------------|--------------|
| `yarn run buildAngular`       | transforms the content for Angular with local links |
| `yarn run buildBlazor`        | transforms the content for Blazor with local links |
| `yarn run buildReact`         | transforms the content for React with local links |
| `yarn run buildWC` | transforms the content for WC with local links |

NOTE the output will have API links and links to samples hosted locally. 

You can transform markdown topics to output content for staging with these commands:

| Command                            | Description  |
|------------------------------------|--------------|
| `yarn run stageBuildAngular`       | transforms docs for Angular with staging links |
| `yarn run stageBuildBlazor`        | transforms docs for Blazor with staging links  |
| `yarn run stageBuildReact`         | transforms docs for React  with staging links |
| `yarn run stageBuildWC` | transforms docs for WC with staging links  |


You can also build output for whole the DocFX website with these commands:

```cmd
yarn build-staging --lang=jp --plat=WebComponents
yarn build-staging --lang=en --plat=WebComponents

yarn build-staging --lang=jp --plat=React
yarn build-staging --lang=jp --plat=React

yarn build-staging --lang=en --plat=Angular
yarn build-staging --lang=kr --plat=Angular

yarn build-staging --lang=jp --plat=Blazor
yarn build-staging --lang=en --plat=Blazor
```

There are also production and staging variants:

```cmd
yarn build-production --lang=jp --plat=WebComponents
yarn build-production --lang=en --plat=WebComponents

yarn build-production --lang=jp --plat=React
yarn build-production --lang=en --plat=React

yarn build-production --lang=jp --plat=Angular
yarn build-production --lang=en --plat=Angular

yarn build-production --lang=jp --plat=Blazor
yarn build-production --lang=en --plat=Blazor
```

## Maintenance


#### API Mapping Files

Follow this section to update API mapping files in the `apiMap` folder:

- clone [dev-tools](https://infragistics.visualstudio.com/NetAdvantage/_git/dev-tools?path=%2F&version=GBmain&_a=contents) repo to **C:\WORK** folder

- checkout `main` branch in the dev-tools repo

- open and build Translator solution: <br>
**C:\WORK\dev-tools\XPlatform\Main\Source\Translator\Translator_NoRoslyn.sln**

- open and build jQuery solution in `Debug` mode: <br>
**C:\WORK\dev-tools\XPlatform\Main\Source\jQuery\Infragistics.jQuery.sln**

- checkout [igniteui-xplat-docs](https://github.com/IgniteUI/igniteui-xplat-docs) repo

- create a new branch from `vnext` branch

- open this repository in VS Code

- in VS terminal, run this command to copy API Mapping files to the **apiMap** folder

```
gulp updateApiMapping
```

- commit changes made in the `apiMap` folder

- create a pull request and target `vnext` branch on [github](https://github.com/IgniteUI/igniteui-xplat-docs)


#### API Resource Links

This table provides links to API source repositories and build definitions for all platforms:

Platform |API Source | API Build | API DV Web | API LOB Web | Help Docs Web | Help Docs Build
----|------|---|---|---|---|---
Blazor| [igniteui-blazor-api](https://github.com/IgniteUI/igniteui-blazor-api) | [BlazorDocFX_API_EN](http://tfs.infragistics.local:8080/tfs/Engineering/IgInternalApplicationsGit/IgInternalApplicationsGit%20Team/_build/index?context=allDefinitions&path=%5C&definitionId=2376&_a=completed) | [STAG](https://staging.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.html) - [PROD](https://infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.html) | N/A | [STAG](https://staging.infragistics.com/products/ignite-ui-blazor/blazor/components/general-getting-started) - [PROD](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/general-getting-started) | [BlazorDocFX_EN](http://tfs.infragistics.local:8080/tfs/Engineering/IgInternalApplicationsGit/IgInternalApplicationsGit%20Team/_build/index?context=allDefinitions&path=%5C&definitionId=2130&_a=completed)
React | [/Source/RBuild](http://tfs.infragistics.local:8080/tfs/Engineering/NetAdvantage/XSharp%20Team/_versionControl?path=%24%2FNetAdvantage%2FDEV%2FXPlatform%2F2022.1%2FSource%2FRBuild&_a=contents) | [React.DEV](http://tfs.infragistics.local:8080/tfs/Engineering/NetAdvantage/XSharp%20Team/_build/index?context=allDefinitions&path=%5CProducts%5CXPlatform%5C22.1&definitionId=2387&_a=completed) | [STAG](https://staging.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/index.html) - [PROD](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/index.html) | N/A | [STAG](https://staging.infragistics.com/products/ignite-ui-react/react/components/general-getting-started) - [PROD](https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started) | [ReactDocFX_EN](http://tfs.infragistics.local:8080/tfs/Engineering/IgInternalApplicationsGit/IgInternalApplicationsGit%20Team/_build/index?context=allDefinitions&path=%5C&definitionId=1780&_a=completed)
Angular| [/Source/NGBuild](http://tfs.infragistics.local:8080/tfs/Engineering/NetAdvantage/XSharp%20Team/_versionControl?path=%24%2FNetAdvantage%2FDEV%2FXPlatform%2F2022.1%2FSource%2FNGBuild&_a=contents) | [Angular.DEV](http://tfs.infragistics.local:8080/tfs/Engineering/NetAdvantage/XSharp%20Team/_build/index?context=allDefinitions&path=%5CProducts%5CXPlatform%5C22.1&definitionId=2385&_a=completed) | [STAG](https://staging.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/index.html) - [PROD](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/index.html) | [STAG](https://staging.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html) - [PROD](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html) | [STAG](https://staging.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started) - [PROD](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started) | [AngularDocFX_EN](http://tfs.infragistics.local:8080/tfs/Engineering/IgInternalApplicationsGit/IgInternalApplicationsGit%20Team/_build/index?context=allDefinitions&path=%5C&definitionId=1812&_a=completed)
WC| [/Source/WCBuild](http://tfs.infragistics.local:8080/tfs/Engineering/NetAdvantage/XSharp%20Team/_versionControl?path=%24%2FNetAdvantage%2FDEV%2FXPlatform%2F2022.1%2FSource%2FWCBuild&_a=contents) | [XPlat.WC.DEV](http://tfs.infragistics.local:8080/tfs/Engineering/NetAdvantage/XSharp%20Team/_build/index?context=allDefinitions&path=%5CProducts%5CXPlatform%5C22.1&definitionId=2384&_a=completed) | [STAG](https://staging.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/index.html) - [PROD](https://infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/index.html) | [STAG](https://staging.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html) - [PROD](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html) | [STAG](https://staging.infragistics.com/products/ignite-ui-web-components/web-components/components/general-getting-started) - [PROD](https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/general-getting-started) | [WC_DocFX_EN](http://tfs.infragistics.local:8080/tfs/Engineering/IgInternalApplicationsGit/IgInternalApplicationsGit%20Team/_build/index?context=allDefinitions&path=%5C&definitionId=1784&_a=completed)



#### Merging Branches

Follow these instruction to merge `vnext` branch into `master` branch. This is require before deploying docs to production.

- open **Windows Powershell** as Administrator

- type `cd repo-path` command where *repo-path* is local directory of this directory, e.g.
```
cd C:\REPOS\GitInternalDocs\xplat-docfx
```

- type this command to check out `vnext` branch:
```
git checkout master
```

- type this command to merge all changes from `vnext` to the `master` branch
```
git merge vnext
```

- type this command to push changes from local `master` branch to remote
```
git push
```

- enter your IG user/password (if asked)

- queue a new DocFX build and target `master` branch

- ask RE team to deploy DocFX build to production



#### Updating Angular Docs

The [Angular docs](https://github.com/IgniteUI/igniteui-docfx) repo is automatically updated with changes made in markdown (.md) files in the xplat-docs repo. However, changes make to table of content, are not and they must to be manually propagated by following these instructions:

- clone or get latest on the [Angular igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) repo

- open [xplat-docs](https://github.com/IgniteUI/igniteui-xplat-docs) repo in VS Code

- open terminal window

- run this command to generate output files for angular docs:
```
yarn run build-docfx-angular
```

- compare and propagate changes from the xplat-docs TOC file: 
```
C:\WORK\igniteui-xplat-docs\dist\Angular\en\components\toc.yml 
``` 

- to the angular TOC file:
``` 
C:\WORK\igniteui-docfx\en\components\toc.yml
``` 

- create a pull request for the [Angular igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) repo