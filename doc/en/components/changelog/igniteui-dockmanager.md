---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
---
# {ProductName} Changelog

All notable changes for each version of {ProductName} are documented on this page.

## {PackageDockManager}

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

<!-- Angular -->

### **{PackageDockManagerVerChanges-2.0.0}**

#### Breaking Changes
Localization resources are no longer bundled directly with this package `igniteui-i18n-core`. The previously exported resource string objects have been removed from this package and moved into dedicated localization packages (see the README "Localization" section for details). The corresponding resource string objects in the new localization packages no longer use the Igc prefix.

- IgcDockManagerResourceStringsEN
- IgcDockManagerResourceStringsES
- IgcDockManagerResourceStringsJP
- IgcDockManagerResourceStringsKO

Applications that relied on these exports must now:

> Note 

Install the new localization package(s), and
Update imports to use the resource strings from the new packages.
Major Changes
Migrated the dock manager component from Stencil to Lit framework. This is an internal architectural change that maintains full API compatibility with previous versions.

#### Enhancements

Refactored TypeScript enums to string union types for better type safety and simpler codebase structure. Const objects are provided for backward compatibility. 

```ts
const layout1: IgcDockManagerLayout = {
  rootPane: {
    type: IgcDockManagerPaneType.splitPane,
    orientation: IgcSplitPaneOrientation.horizontal,
    panes: [
      // ...
    ]
  }
};
Can now also be written as:
const layout1: IgcDockManagerLayout = {
  rootPane: {
    type: 'splitPane',
    orientation: 'horizontal',
    panes: [
      // ...
    ]
  }
};
```

<!-- end:Angular -->

### **{PackageDockManagerVerChanges-1.18.0}**

#### New features
- Introduced a new docking behavior that allows docking directly in a split pane by dragging a pane over one of its splitters. It can be switched on via the new allowSplitterDock property of the IgcDockManagerComponent.

- Added edge docking functionality for docking panes to the edges of the dock manager. This docking mode is enabled when root docking is disabled via allowRootDock = false.

- Added automatic scrolling when resizing panes with useFixedSize enabled, allowing resizing beyond viewport bounds.

- Added visual feedback with a thin border highlighting the pane being resized. This can be customized via new CSS variables: --igc-resize-target-border-color, --igc-resize-target-border-width, and --igc-resize-target-border-style.

- Added enableDragCursor property to provide cursor feedback on hover for interactive panes and tabs - when enabled, the cursor changes to pointer when panes/tabs can be dragged.

- Exposed new CSS variables for splitter and resize handle customization:
--igc-splitter-thickness (replaces --igc-splitter-width)
--igc-resize-handle-size (replaces --igc-resize-handle-height)
--igc-resize-handle-thickness (replaces --igc-resize-handle-width)

- Improved joystick indicators to display on the visible portion of target panes.

#### Enhancements
- Resize handle CSS variables renamed to be orientation-agnostic with backward compatibility maintained for old variable names.
Auto-scroll behavior now triggers when dragging panes near the edges of the root container.
Improved drop shadow positioning when docking in split panes with useFixedSize enabled.

#### Bug fixes
- Removed obsolete start placeholder and splitter implementation.
- Fixed auto-scroll triggering incorrectly when dragging mouse upward at the top of the container.
- Fixed flyout behavior when clicking on splitters.
- Fixed splitter resizing to work without requiring mouse movement.
- Fixed splitter dragging preventing default browser behavior to avoid unwanted text selection and auto-scroll.
- Fixed dock indicators and preview incorrectly showing when context menu is displayed.
- Removed resize border from unpinned panes.
- Fixed bottom dock preview positioning.
- Fixed pane size calculation when floatingWidth or floatingHeight are undefined.
- Fixed root dock preview display for edge indicators.
- Fixed null reference errors during splitter docking.

### **{PackageDockManagerVerChanges-1.17.0}**

#### New features
- Adding two new Dock Manager properties:
useFixedSizeOnDock, which specifies which docking orientations should apply the FixedSize sizing mode when split panes are dynamically created via docking.
allowRootDock, which defaults to true, and enables or disables docking into the root-level container.
- Adding automatic scrolling of the root container during drag-and-drop operations.
Introduced a new autoScrollConfig property for finer control over scroll behavior.

#### Bug fixes

- Placeholder panes are no longer present in Pane Navigator
- Dark theme is now properly applied to scrollbars

### **{PackageDockManagerVerChanges-1.16.1}**

#### Bug fixing
- Dockmanager is not loading if layout has no floating panes collection

### **{PackageDockManagerVerChanges-1.16.0}**

#### New features
- Introduced a new docking behavior that allows docking directly in a split pane by dragging a pane over one of its splitters. It can be switched on via the new `AllowSplitterDock` property of the DockManagerComponent.

- Introduced the `UseFixedSize` property of Split Panes - a new resizing behavior where child panes are sized in pixels and can be resized beyond the viewport, allowing scrollable overflow within the container.

#### Bug fixes
The `ShowHeaderIconOnHover` property now defaults to 'none' instead of undefined and has correct type

### **{PackageDockManagerVerChanges-1.15.1}**

#### Enhancements
Added custom elements manifest file

### **{PackageDockManagerVerChanges-1.15.0}**

#### New features
- Added closeBehavior and unpinBehavior properties controlling whether the selected pane or all panes are closed/unpinned when clicking the respective button of a pane within a dockable TabGroup #94

#### Enhancements
Added new CSS variables for styling the scrollbars

#### Fixed
- TabGroupPane disappears when an unpinned pane is pinned.
- Unpinned panes on the right and bottom edges cannot be resized via the splitter after being sized to minimum width/height #90
- Splitter cursor should be correct while resizing #93
- Uncaught TypeError: Cannot read properties of undefined (reading 'focus') #96
- Layout has more nesting levels then should #97
- Reopening a pane in IgcDockManager after closing a tab group pane does not show content of pane #103
- DockManager's maximized pane is not cleared when closing a maximized tabgroup pane

### **{PackageDockManagerVerChanges-1.14.4}**

#### Deprecated
- `SplitPane` `IsMaximized` is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the `IsMaximized` property of `TabGroupPane` and/or `ContentPane` instead.

### **{PackageDockManagerVerChanges-1.14.3}**

#### Fixed
- Dock manager throws errors with Vite-based builds.
- Docking to edge in an empty root split pane throws errors.

### **{PackageDockManagerVerChanges-1.14.2}**

#### Fixed
- Constraining panels inside the dock manager boundaries with quick drags.

### **{PackageDockManagerVerChanges-1.14.1}**

#### Fixed
- Proximity dock rtl check

### **{PackageDockManagerVerChanges-1.14.0}**

#### New features

- Add `showPaneHeaders` property.
- Add `proximityDock` property.
- Add `containedInBoundaries` property.

#### Enhancements
- Add `contentId` of elements as CSS parts.

#### Fixed
- Maximizing and unpinning panes leads to unclickable panes.
- Center dock is possible in a pane that has `AcceptsInnerDock` set to **true** if the `AllowInnerDock` of `DockManager` is set to **false**.

### **{PackageDockManagerVerChanges-1.13.0}**

#### New features
- Add `FocusPane` method.
- Add `AllowInnerDock` and `AcceptsInnerDock` properties.

#### Enhancements
- Save pane maximized state in layout.

#### Fixed
- Tab selection order is not preserved.

#### **{PackageDockManagerVerChanges-1.12.5}**

#### New features
- Add `paneScroll` event.

#### Fixed
- ТabGroupPane: Pinning one of several unpinned panes results in all the panes getting pinned.
- Context menu not positioning correctly in RTL mode.
- Active pane is not retained when docking with keyboard.

### **{PackageDockManagerVerChanges-1.12.4}**

#### Fixed
- Active pane incorrectly set when more than one Tab Group Pane is within a Floating Pane.

### **{PackageDockManagerVerChanges-1.12.3}**

#### Fixed
- Error is thrown when dropping pane in a separate window.

### **{PackageDockManagerVerChanges-1.12.2}**

#### Enhancements
- Add `tabs-more-menu-content` and `tabs-more-menu-item` CSS parts.

#### Fixed
- Docking indicator left/right arrows positions are reversed in RTL mode.
- Context menu not positioning correctly.
- Missing overloads for `addEventListener` and `removeEventListener`.

### **{PackageDockManagerVerChanges-1.12.1}**

#### Enhancements
- Include pane information in `splitterResizeStart` and `splitterResizeEnd` events.
- `DockManager` is now exported as class.

#### Fixed
- Contents in slots with `unpinnedHeaderId` are not updated correctly.

### **{PackageDockManagerVerChanges-1.12.0}**

#### Fixed
- Docking not working with `allowFloating: false`.
- Flyout pane closing while active.
- Focusable elements does not receive focus.
- Navigating with pane navigator does not bring selected floating window on top.
- Event `splitterResizeStart` can't be cancelled.
- Tabs context menu not positioning correctly.

### **{PackageDockManagerVerChanges-1.11.3}**

#### New features
- Add `contextMenuPosition` property
- Add `selected` option for `tab-header-close-button` CSS part

### **{PackageDockManagerVerChanges-1.11.2}**

#### New features
- Add `hovered` option for `tab-header-close-button` CSS part

### **{PackageDockManagerVerChanges-1.11.1}**

#### Fixed
- CSS part fixes for `tab-header`

### **{PackageDockManagerVerChanges-1.11.0}**

#### New features
- Add options for `ShowHeaderIconOnHover` property for different buttons
- Add `horizontal` and `vertical` options for `splitter-handle` CSS part
- Add `header-title` CSS part
- Add `hover` option for `tab-header-close-button` CSS part in active/inactive states
- Add `paneHeaderCloseButton` and `tabHeaderCloseButton` slots

### **{PackageDockManagerVerChanges-1.10.0}**

#### New features
- Add `ShowHeaderIconOnHover` property.

#### Fixed
- Active pane is not retained on float/dock.
- Splitter styles are not applied.
- `click` event on customized header buttons is not working.
- Removed erroneous dock indicators while dragging over splitter.

### **{PackageDockManagerVerChanges-1.9.0}**

#### Fixed
- Styles not applied.
- Resize in RTL mode.

### **{PackageDockManagerVerChanges-1.8.0}**

#### New features
- Customize dock manager buttons.
- `LayoutChange` event which fires when the layout updates.

### **{PackageDockManagerVerChanges-1.7.0}**

#### New features
- Customizable floating pane header.
- `Disabled` property per pane.
- `DocumentOnly` property which allows content pane to be docked only inside a document host.
- `AllowEmpty` property for split and tab group panes which allows displaying empty areas.
- `DisableKeyboardNavigation` property on the dock manager.

#### Fixed
- Docking indicators appear over the currently dragged floating pane.

### **{PackageDockManagerVerChanges-1.6.0}**

#### New features
- Customize dock manager panes and tabs.

#### Fixed
- A floating pane is draggable outside of the page.

### **{PackageDockManagerVerChanges-1.5.0}**

#### New features
- `AllowMaximize` property per pane.

#### Fixed
- Unpinned pane is closing automatically upon clicking on its content.
- Panes selected from the overflow menu are not activated if there is an unpinned pane from the same tab group.

### **{PackageDockManagerVerChanges-1.4.1}**

#### Fixed
- Pane with `allowPinning: false` placed inside tab group can be unpinned.
- Normalize a maximized pane when navigating away from it via the keyboard.

### **{PackageDockManagerVerChanges-1.4.0}**

#### New features
- Reorder tabs without creating floating pane.
- Keyboard navigation.
- Pane navigator.
- Enable/disable floating pane resizing.
- Events for floating pane resizing.

#### Fixed
- Select pane when activated.
- Flyout unpinned pane when activated.
- Error thrown when hosting external popup inside pane.
- Tab selection is lost with nested Dock Manager components.
- Floating pane containing panes with disabled floating and docking cannot be moved.
- Exception thrown when docking floating pane inside empty dock manager.

### **{PackageDockManagerVerChanges-1.3.0}**

#### New features
- More tabs menu appears when there is not enough space to display all tab headers.
- Hide pane without removing it from the layout using its `hidden` property.
- Header slot properties for tab and unpinned pane - `tabHeaderId` and `unpinnedHeaderId`.

### **{PackageDockManagerVerChanges-1.2.0}**

#### New features
- Active pane.
- Localization support.

#### Fixed
- Errors thrown when dragging the last document host tab and there is unpinned pane.
- Tabs content disappears after docking a pane with `allowFloating: false`.
- Exception thrown when quickly switching between docking indicators.

### **{PackageDockManagerVerChanges-1.1.0}**

#### New features
- Maximizing panes.
- Docking preview shadow.
- ARIA support.
- API for external drag/drop support.
- Properties and events for user interactions such as closing, pinning, dragging.
- Support for **ng update** for Angular projects.

### **{PackageDockManagerVerChanges-1.0.3}**

#### Enhancements
- Resize splitter using the keyboard.

### **{PackageDockManagerVerChanges-1.0.2}**

#### Fixed
- Pane goes out of view when resized to its minimum size.

### **{PackageDockManagerVerChanges-1.0.1}**

#### Enhancements
- Add active color css variable.
- Add keyboard support for context menu.

#### Fixed
- Selection is not working on first click when context menu is opened.
- Single tab is not rendered correctly after pinning/unpinning its sibling.

### **{PackageDockManagerVerChanges-1.0.0}**

Initial release of Ignite UI Dock Manager.
