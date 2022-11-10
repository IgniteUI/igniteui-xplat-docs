# Porting Angular Topics to XPlatform docs

This document explains process of porting Angular topics to XPlatform docs.

## Table of Contents

- [Documentation Config](#Documentation-Config)
- [Documentation Components](#Documentation-Components)
- [Shared Topics](#Shared-Topics)
- [Instructions](#Instructions)
- [Building Docs](#Building-Docs)


## Documentation Config

The [docConfig.json](https://github.com/IgniteUI/igniteui-xplat-docs/blob/vnext/docConfig.json#L369) file defines variables for each platform and also for shared components

```json
    "replacements": [
        { "name": "{TreeGridTitle}",      "value": "Tree Grid"},
        { "name": "{TreeGridName}",       "value": "TreeGrid"},
        { "name": "{TreeGridModule}",     "value": "IgbTreeGridModule"},
        { "name": "{TreeGridSelector}",   "value": "igb-tree-grid"},
        { "name": "{TreeGridPackage}",    "value": "igniteui-blazor-grids"},
        { "name": "{TreeGridSample}",     "value": "grids/tree-grid"},
        { "name": "{TreeGridApiMembers}", "value": ["TreeGrid", "GridCell", "TreeGridRow", "Column"]},
    ]
```

## Documentation Components

The [docComponents.json](docComponents.json) file contains mapping from a shared variable to actual variable names defined in [docConfig.json](https://github.com/IgniteUI/igniteui-xplat-docs/blob/vnext/docConfig.json#L369) file.

```json
{
    "Grid" :             { "name": "Grid", "output": "\\grid\\" },
    "TreeGrid" :         { "name": "TreeGrid", "output": "\\tree-grid\\" },
    "PivotGrid" :        { "name": "PivotGrid","output": "\\pivot-grid\\" },
    "HierarchicalGrid" : { "name": "HierarchicalGrid", "output": "\\hierarchical-grid\\" }
}
```

In shared topics, these variables are mapped from {Component*} and auto-replaced with actual values, e.g.

```
   {ComponentTitle} -> {TreeGridTitle}  -> 'Tree Grid'    in /tree-grid/*.md "},
   {ComponentName}  -> {TreeGridName}   -> 'IgbTreeGrid'  in /tree-grid/*.md "},
   {ComponentTitle} -> {PivotGridTitle} -> 'Pivot Grid'   in /pivot-grid/*.md "},
   {ComponentName}  -> {PivotGridName}  -> 'IgbPivotGrid' in /pivot-grid/*.md "},
```

Also, it defines `output` path folder used when generating topics from shared topics, e.g.

```
/_shared/template.md -> /grid/template.md
/_shared/template.md -> /tree-grid/template.md
/_shared/template.md -> /pivot-grid/template.md
/_shared/template.md -> /hierarchical-grid/template.md
```

## Shared Topics

Shared topics are markdown files that share content between multiple components. The shared topics are located in `_shared` folder and they have `sharedComponents` array that defines names of components that a given topic will share content with.

```
---
title: Batch Editing and Transactions in {Platform} {ComponentTitle} - Infragistics
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
---
```


## Instructions

This section provides instructions on how to port Angular topics located in
[grids_templates](https://github.com/IgniteUI/igniteui-docfx/tree/master/en/components/grids_templates) to xplatform docs repo.

NOTE: keep Angular code snippets when porting to xplatform docs.


- Copy and paste the `template` markdown file located in the `_shared` folder:

/doc/en/components/grids/_shared/template.md

- Rename copied file to match name of a topic located in [grids_templates](https://github.com/IgniteUI/igniteui-docfx/tree/master/en/components/grids_templates) folder in Angular repo, e.g.


/doc/en/components/grids/_shared/advanced-filtering.md

- add a new node to [TOC.json](/docfx/en/components/toc.json) file with title and reference path to the new markdown file, e.g.

```json
      {
        "exclude": ["Angular", "React", "WebComponents"],
        "name": "Pivot Grid Shared Topic",
        "href": "grids/pivot-grid/advanced-filtering.md",
        "status": "NEW"
      }
```
NOTE that reference path should be using name of gird folder (e.g. `pivot-grid`) instead of `_shared` folder.


- Pasted content (without metadata) of the topic from `grids_templates` to a topic in `_shared` folder.

- Remove URLs in API links because they will be auto-generated:

```
[HierarchicalTransactionService]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html)
```

to

```
`HierarchicalTransactionService`
```

- Remove "..." from code snippets.

- Remove all DIV elements that are below topic's headers

```md
## Topic Header
<div class="divider--half"></div>
```

- Remove backticks from topic links:

```md
[Transaction Service class hierarchy](../transaction-classes.md)
```

```md
[Transaction Service class hierarchy](../transaction-classes.md)
```

- Replace `@@igComponent` with `{ComponentName}` variable.

- Replace `ignite ui for angular` with `{ProductName}` variable.

- Replace `Angular` with `{Platform}` variable.

- Replace routing path to samples with `{ComponentSample}` variable in code-viewer:

from:

```
<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-advanced-filtering"
           alt="Angular @@igComponent Advanced Filtering Example">
</code-view>
```

to:

```
<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-advanced-filtering"
           github-src="{ComponentSample}/advanced-filtering"
           alt="{Platform} {ComponentName} Advanced Filtering Example">
</code-view>
```

## Build Flaging Topic

- Replace Angular build flags with Xplat build flags:

```
@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
This paragraph is about grids components.
}
```

with:

```md
<!-- ComponentStart: Grid, HierarchicalGrid -->
This paragraph is about grids components.
<!-- ComponentEnd: Grid, HierarchicalGrid -->
```

- You should NOT build flag code snippets for components because gulp script automatically detects whether or not to omit code snippets based on selector names:


```md

<igx-tree-grid [data]="data" >
</igx-tree-grid>

```

instead of:

```md
<!-- ComponentStart: TreeGrid -->

<igx-tree-grid [data]="data" >
</igx-tree-grid>

<!-- ComponentEnd: TreeGrid -->
```


## Building Docs

You can use one of the following commands to build docs:

```
yarn run buildBlazor
```

```
yarn run buildReact
```

```
yarn run buildWebComponents
```

You can review output of docs in this folders:

```
/dist/Blazor/en/
/dist/React/en/
/dist/WebComponents/en/
```
