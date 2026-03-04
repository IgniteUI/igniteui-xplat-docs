---
title: {Platform} Internationalization | Changelog | Infragistics 
_description: Learn about new features and updates for internationalization (i18n) and localization in {ProductName}
_keywords: {Platform} i18n, Infragistics, Internationalization, Localization, Changelog
---

# {Platform} Internationalization Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

## **{PackageVerChanges-25-2-APR}**

### Localization (i18n)

<!-- React -->

- `IgrGrid`, `IgrTreeGrid`, `IgrHierarchicalGrid`, `IgrPivotGrid`, `IgrCombo`, `IgrDatePicker`, `IgrDateRangePicker`, `IgrCalendar`, `IgrCarousel`, `IgrChip`, `IgrInput`, `IgrTree`
  - New `Intl` implementation for the grid components that format and render data like dates and numbers. Updated `Intl` implementation for `IgrCalendar`, `IgrDatePicker`, and `IgrDateRangePicker`.
  - New localization implementation for the currently supported languages for all components that have resource strings in the currently supported languages.
  - New public localization API and package named `igniteui-i18n-resources` containing the new resources that are used in conjunction.

<!-- end: React -->

<!-- WebComponents -->

- `IgcGrid`, `IgcTreeGrid`, `IgcHierarchicalGrid`, `IgcPivotGrid`, `IgcCombo`, `IgcDatePicker`, `IgcDateRangePicker`, `IgcCalendar`, `IgcCarousel`, `IgcChip`, `IgcInput`, `IgcTree`
  - New `Intl` implementation for the grid components that format and render data like dates and numbers. Updated `Intl` implementation for `IgcCalendar`, `IgcDatePicker`, and `IgcDateRangePicker` that previously used it in `igniteui-webcomponents`.
  - New localization implementation for the currently supported languages for all components that have resource strings in the currently supported languages.
  - New public localization API and package named `igniteui-i18n-resources` containing the new resources that are used in conjunction.

<!-- end: WebComponents -->
