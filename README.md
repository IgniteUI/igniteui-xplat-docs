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
  * [Changing Docs](#Changing-Docs)
  * [Creating Pull Requests](#Creating-Pull-Requests)
  * [Following Rules](#Following-Rules)
  * [Using Variables](#Using-Variables)

- [Running Docs](#Running-Docs)
- [Building Docs](#Building-Docs)

- [Maintenance](#Maintenance)
  * [Updating API Mapping Files](#Updating-API-Mapping-Files)
  * [Merging Branches](#Merging-Branches)


## Getting Started

This section provides information on how to install software required for running this repository.

> NOTE: you need to start VS Code or your command-line shell (CMD, PowerShell, Bash, etc.) with elevated permissions ("Run As Administrator" in Windows). This is required by Chocolatey, for further information read point 1 from [here](https://chocolatey.org/security#overall).

#### Prerequisites

1. Install [Node.js](https://nodejs.org)
2. Install [Yarn](https://yarnpkg.com/en/)

#### Installing DocFX

On Windows based platforms, install [chocolatey](https://chocolatey.org/) and then run:
```
choco install docfx
```

On macOS based platforms, use `brew` to install the latest version of [DocFX](https://dotnet.github.io/docfx)
```
brew install docfx
```

#### Installing Node JS

Run this command in VS code terminal to install required dependencies:
```
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

- commit your changes to you branch
- push your branch to origin
- create pull request and target vnext branch on [github](https://github.com/IgniteUI/igniteui-xplat-docs)

#### Following Rules

The files in this repo are arranged under the `./doc` folder. They are organized in the same structure as the target platform specific DocFX project. Just edit `.md` file named for the member you want to add documentation for. Author it for all platforms at once, preferably, as described below:

#### Always: Use C# member names and class names in code terms

Whenever mentioning a member name or class name, surround it in backticks in the markdown. This will cause it to be transformed to the appropriate platform member name for each platform during transformation:

```md
To invert the axis scale use `IsInverted`
```

will, for example be translated into this markdown for Angular:

```md
To invert the axis scale use `IsInverted`
```

#### Always: Call out the language being used in a fenced code block.

When transforming the markdown to various platforms, we'll automatically drop inappropriate fenced code blocks if we can identify their platform reliably.

It helps, in this regard, if you call out the platform being used:

````md
```cs
chart.IsInverted = true;
```
````

If we were, say, transforming to Angular, this code block would get dropped.


#### Always: Pretend you are documenting all platforms at once.

Try to imagine you are trying to document all platforms at once, that may even be a target we use one day.

In the meantime, the transformation process will try to drop content that applies to just one platform or another.

#### Do: Provide code snippets, one after another, for as many platforms as possible.

The transformation process will drop code snippets that don't apply to the current platform.

#### Avoid: Placing platform specific front matter in front of a code block.

The transformation process will not necessarily know that a preceding paragraph is associated with a code block, and so wont necessarily know to drop it if it drops the associated code block.

You can hint that a paragraph is associated with a succeeding code block like this:

````md
<!-- Angular -->
This is some Angular specific stuff preceding an Angular specific code block

```html
<igx-category-chart dataSource="data"
    yAxisIsInverted="true">
</igx-category-chart>
```
````

This would end up dropping both the code block and the preceding paragraph.

However, this doesn't look very clean, so its best to avoid this unless the preceding text is truly needed for clarity. If this scenario crops up often, we should come up with some key phrases to identify platform specific preceding text. For example, if a paragraph were to start with "For Angular, " then we could automatically treat it as Angular text. This is not in place yet, though.

#### Do: Call out platform specific notes using conventional DocFX style note blocks.

If you have some platform specific notes/warnings/etc, do call them out with DocFX style notes:

```md
> [!NOTE]
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

You can host the DocFX locally with this command:

```cmd
yarn start
```

Which will show you English documentation for Blazor platform by default.

You can change platform by running one of the following commands with:

<!-- ```cmd
yarn start --plat=WebComponents
yarn start --plat=React
yarn start --plat=Angular
yarn start --plat=Blazor
``` -->

```cmd
yarn startWC
yarn startReact
yarn startBlazor
```

If you want see the output for a different language you can use the lang switches:

<!-- ```cmd
yarn start --lang=jp --plat=WebComponents
yarn start --lang=en --plat=WebComponents
yarn start --lang=kr --plat=WebComponents
``` -->

```cmd
yarn startWC --lang=jp
yarn startWC --lang=en
yarn startWC --lang=kr
```

The `start` command will watch for changes to the input md files and re-run the compile and refresh browsers if a file has changed.

Note, Angular cannot run through xplat-docfx directly. Because Angular output gets combined with the igniteui-docfx site.
​If changes here needed to be tested, and with samples simultaneously, ensure docs are updated and merged. The xplat-docfx build then auto submits a PR against igniteui-docfx which needs to be updated for the angular content to join that site. Then clone, and npm start igniteui-docfx at
   https://github.com/IgniteUI/igniteui-docfx


## Building Docs

To test just the output of your transformed remarks, when authored as below described:

| Command                       | Description  |
|-------------------------------|--------------|
| `yarn run buildAngular`       | transforms the content for Angular  |
| `yarn run buildBlazor`        | transforms the content for Blazor  |
| `yarn run buildReact`         | transforms the content for React  |
| `yarn run buildWebComponents` | transforms the content for WebComponents  |

You can build the site output with:

```cmd
yarn build
```

Which supports all the same command line switches. There are also production and staging variants:

```cmd
yarn build-staging --lang=jp
yarn build-staging --lang=en
yarn build-staging --lang=kr
```

```cmd
yarn build-production --lang=jp --plat=WebComponents
yarn build-production --lang=en --plat=WebComponents
yarn build-production --lang=kr --plat=WebComponents

yarn build-production --lang=jp --plat=React
yarn build-production --lang=en --plat=React
yarn build-production --lang=kr --plat=React

yarn build-production --lang=jp --plat=Angular
yarn build-production --lang=en --plat=Angular
yarn build-production --lang=kr --plat=Angular

yarn build-production --lang=jp --plat=Blazor
yarn build-production --lang=en --plat=Blazor
yarn build-production --lang=kr --plat=Blazor
```

## Maintenance

Follow this section only if you have access to XPlatform source code.

#### Updating API Mapping Files

- open, get latest, and build Translator solution: <br>
**$/NetAdvantage/DEV/XPlatform/2020.2/Source/Translator/Translator_NoRoslyn.sln**

- open, get latest, and build DV.Controls solution: <br>
**$/NetAdvantage/DEV/XPlatform/2020.2/Source/DV.Controls.sln**

- open, get latest, and build jQuery solution: <br>
**$/NetAdvantage/DEV/XPlatform/2020.2/Source/jQuery/Infragistics.jQuery.sln**

- follow instructions to [create a new branch](#Creating-Branches)

- open this repository in VS Code

- in VS terminal, run this command to copy API Mapping files to the **apiMap** folder

```
gulp updateApi
```

- commit changes made in the **apiMap** folder

- follow instructions to [a new pull request](#Creating-Pull-Requests)

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

