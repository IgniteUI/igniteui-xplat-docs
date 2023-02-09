---
title: Clipboard Interactions in {Platform} {ComponentTitle} - Infragistics
_description: The {Platform} {ComponentTitle} Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Clipboard Overview

Copy to clipboard operations are now available in the `{ComponentName}`. This functionality provides a fast, easy and customizable way to copy data of the {Platform} `{ComponentName}` through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the `{ComponentName}` into Excel or other external programs.

## {Platform} {ComponentTitle} Clipboard Example

<code-view style="height:635px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-clipboard-operations"
           github-src="{ComponentSample}/clipboard-operations"
           alt="{Platform} {ComponentTitle} Clipboard Interactions Example">
</code-view>

## Functionality

Copy behavior is working with the default interaction defined by the browser and operating system. Thus for the copy and paste behaviors, these are:

- Windows/Unix based
  - <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Shift</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - Copy action through the browser menu
- macOS
  - <kbd>⌘ Cmd</kbd> + <kbd>C</kbd> as a keyboard shortcut
  - <kbd>⌘ Cmd</kbd> + <kbd>V</kbd> as a keyboard shortcut
  - Copy action through the browser menu


## Limitations

- Both the **cut** and **copy** events are not natively supported in Internet Explorer. The exception is the
**paste** event (IE 11) which is emitted but does not expose the `ClipboardData` property in the event.
> [!Note]
> In order to **copy** cells in IE 11, you can use the keyboard selection. Hold the **shift key** in order to make a multi-cell selection, press **Ctrl + C** in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the **copy** from grid behavior. Later on we plan to expose `paste` within grid behavior.

<!-- Angular -->

<!-- ComponentStart: Grid -->
You can use a custom paste handler in order to configure **paste** behavior, have a look at our [Paste from Excel topic](paste-excel.md).
<!-- ComponentEnd: Grid -->

<!-- end: Angular -->

## API Usage

We expose `ClipboardOptions` property, which handles the following options:
- `Enabled` Enables/disables copying of selected cells.
- `CopyHeaders` Include the associated headers when copying.
- `CopyFormatters` Apply any existing column formatters to the copied data.
- `Separator` The string separator to use the for formatting the data in the clipboard. Default is `/t`

> [!Note]
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- `GridCopy` Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the `ClipboardOptions`.

## Additional Resources


* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Selection](selection.md)
* [Virtualization and Performance](virtualization.md)
* [Multi-column headers](multi-column-headers.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
