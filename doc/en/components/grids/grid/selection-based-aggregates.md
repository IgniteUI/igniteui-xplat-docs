---
title: {Platform} Grid Selection-Based Data Aggregation- {ProductName}
_description: Learn how to aggregate selected data in a grid with Ignite UI. Get instant content aggregations in the virtualized data and rich API for your next project.
_keywords: Data aggregation, selection, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics {Platform}, infragistics
mentionedTypes: ['Infragistics.Controls.Grid']
---

# {Platform} Grid Selection-Based Data Aggregation

With the sample, illustrated beyond, you may see how multiple selection is being used, alongside with custom summary functions, to display aggregates based on the selected values in the grid footer.

## Topic Overview

To achieve the selection-based aggregates functionality, you can use our `Grid Selection` feature, together with the `Grid Summaries`.
The Summaries are allowing for customization of the basic Summary feature functionality through extending one of the base classess, `SummaryOperand`, `NumberSummaryOperand`.html) or `DateSummaryOperand`, depending on the column data type and your needs.

## Selection
To start working with the data in the selected grid range, you will have to subscribe to events that are notifying of changes in the grid selection. That can be done by subscribing to the `selected` event and to the `rangeSelected` event. You need to bind to both of them because the Selection feature differentiates between selecting a single cell and selecting a range of cells.

In the events subscription logic, you can extract the selected data using the grid's `getSelectedData`.html#getSelectedData) function and pass the selected data to the custom summary operand.


## Summary
Within the custom summary class, you'd have to be differentiating the types of data in the grid. For instance, in the scenario below, there are four different columns, whose type of data is suitable for custom summaries. These are the Unit Price, the Units in Stock, Discontinued status and the Order Date.
The `operate` method of the derived class of the `SummaryOperand`, is where you will process the data, starting by casing it in different categories based on the data types:

```typescript
const numberData = data.filter(rec => typeof rec === "number");
const boolData = data.filter(rec => typeof rec === "boolean");
const dates = data.filter(rec => isDate(rec));
```

> [!Note]
> Bear in mind, that `isDate` is a custom function.

After having the data types grouped accordingly, you can proceed to the aggregation itself. For that reason, you could use the already exposed methods of the `NumberSummaryOperand` and `DateSummaryOperand`.
After that, you'd have to put the aggregated data in the same array, which would be returned to the template.
For the visualization of the data, you might want to use the grid footer, which in a combination with the `custom-summaries` class will give the natural look of the Summary.

<!-- Angular -->

### Demo
Change the selection to see summaries of the currently selected range.

<!-- NOTE this sample is differed -->

`sample="/{GridSample}/data-summary-custom-selection", height="560", alt="{Platform} {GridTitle} data summary custom selection"`


<!-- end: Angular -->

## API References

* `GridComponent`
* `GridCell`

## Additional Resources
<div class="divider--half"></div>

* [Grid overview](../data-grid.md)
* [Selection Service]({environment:{Platform}ApiUrl}/classes/gridselectionservice.html)
* [Row Selection](row-selection.md)
* [Cell Selection](cell-selection.md)
* [NumberSummaryOperand]({environment:{Platform}ApiUrl}/classes/numbersummaryoperand.html)
* [DateSummaryOperand]({environment:{Platform}ApiUrl}/classes/datesummaryoperand.html)
* [Summaries](summaries.md)
* [Paging](paging.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})