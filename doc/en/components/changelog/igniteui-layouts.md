---
title: {Platform} Layouts | Changelog | Infragistics 
_description: Learn about new features and bug fixes for the {ProductName} Layout components
_keywords: {Platform} Layouts, Infragistics, Toolbar, Changelog
mentionedTypes: ["Toolbar"]
---

# {Platform} Layouts Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->
<!-- NOTE: Add new version sections below this comment for automated changelog updates -->
## **{PackageVerChanges-24-2-MAY}**

### Enhancements

#### Toolbar
- Value layers added from the toolbar now appear on the legend.

## **{PackageVerChanges-24-2-FEB_2}**

### Enhancements

#### Toolbar

- Added new `GroupHeaderTextStyle` property to `Toolbar` and `ToolPanel`. If set, it will apply to all `ToolActionGroupHeader` actions.

## **{PackageVerChanges-24-1-NOV}**

### Enhancements

- `Toolbar`

  - New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.

  - New Filtering Support

  - Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

## **{PackageVerChanges-23-2-MAR}**

### Enhancements

- `Toolbar` - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

## **{PackageVerChanges-23-2}**

### {PackageGrids} - Toolbar - <label>PREVIEW</label>

- Save tool action has been added to save the chart to an image via the clipboard.
- Vertical orientation has been added via the toolbar's `Orientation` property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
- Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

## **{PackageVerChanges-23-1}**

### New Components

- <label>PREVIEW</label> [Toolbar](menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our `XamDataChart` or `CategoryChart` components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.
