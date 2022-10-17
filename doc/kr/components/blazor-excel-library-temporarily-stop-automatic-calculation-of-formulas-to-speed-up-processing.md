---
title: $Platform$ Excel Library | Temporarily Stop Automatic Calculation of Formulas to Speed Up Processing | Infragistics
_description: Infragistics Blazor Excel Library – Temporarily Stop Automatic Calculation of Formulas to Speed Up Processing
_keywords: $Platform$ excel library, calculation, speed up processing, $ProductName$, Infragistics
_language: kr
mentionedTypes: []
---

# Blazor Excel Library – Temporarily Stop Automatic Calculation of Formulas to Speed Up Processing

When reading an Excel sheet using a certain document processing library, referencing or rewriting the value of a cell can take a considerable amount of time, especially if the Excel sheet contains a large number of cells with formulas. This is particularly true for [Blazor WebAssembly apps](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/general-getting-started-blazor-client).

But we’ve identified a way to help you speed up processing by using our [Blazor Excel Library](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/excel-library).

How?

By temporarily disabling the automatic calculation of formulas.
In this quick how-to article, we will show you how exactly to do it and will cover the following questions: 
* What is Blazor Excel Library in Ignite UI
* What are Blazor Workbooks in Ignite UI
* Speeding Up Processing in Blazor Excel Library

## What Is Blazor Excel Library in Ignite UI

The Infragistics Blazor Excel Library is a document processing library that allows you to work with spreadsheet data in a fast and easy way, similarly to Microsoft® Excel®. It comes with the familiar spreadsheet objects like Workbook, Worksheet, Cell, Formula, and more.

However, to use the Blazor excel library, you must first add the following @using statement:

```razor
@using Infragistics.Documents.Excel
```

If you are using a Web Assembly (WASM) Blazor project, there are a few more steps:

Add a reference to the following script in the wwwroot/index.html file:

```razor
<script src="_content/IgniteUI.Blazor.Documents.Excel/excel.js"></script>
```

Set the static Workbook.InProcessRuntime to the current runtime. This can be done by using the following code:

```razor
@using Microsoft.JSInterop

@code {
    [Inject]
    public IJSRuntime Runtime { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        Workbook.InProcessRuntime = (IJSInProcessRuntime)this.Runtime;
    }
}
```

## What Are Blazor Workbooks in Ignite UI

The [Blazor Workbooks in Ignite UI](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/excel-library-using-workbooks) are designed to easily collect multiple worksheets so you can retrieve, store, organize, manage, edit, and process data in the most efficient way. You can either create a new Blazor workbook from scratch or import an existing document that’s been completed before.

This is how to create a workbook and set its title and status document properties:

```razor
var workbook = new Workbook();
workbook.DocumentProperties.Title = "Expense Report";
workbook.DocumentProperties.Status = "Complete";
```

Using the Infragistics Blazor Excel Engine you can:

* Save data to and load data from Microsoft® Excel®.
* Create a collection of worksheets with related data.
* Manage Blazor export to Excel and Blazor Excel import into your app, using the library’s classes.
* Change default styles and add new font to the Styles collection of the Workbook.
* Set Workbook Properties that provide information to help organize and keep track of your documents. The available properties are: Author, Title, Subject, Keywords, Category, Status, Comments, Company, and Manager.
* Enable workbook protection feature to protect the structure of the workbook by invoking its protect method.
## Speeding Up Processing in Blazor Excel Library

As mentioned already, the best and quickest way to improve the processing time when you deal with a large number of cells with added formulas, is to temporarily stop the automatic formula calculation. Then refer to and rewrite the cell value and resume the automatic calculation of the formula after the process is completed. You can enable the automatic calculation whenever you decide.

How exactly does this suspension of the automatic formula calculation work? When it’s disabled, even if you refer to or rewrite the cell value, the formula isn’t recalculated each time which reduces the processing time.

Call the SuspendCalculations () and ResumeCalculations () methods of the Workbook object.

```razor
@ using Infragistics. Documents . Excel
...
var workbook = Workbook. Load ( ... );

// Calling SuspendCalculations () will stop the automatic calculation of formulas.
workbook. SuspendCalculations (); 

// ... Here is where you read, write, etc. the cells contained in this Workbook...
// Call ResumeCalculations ()to resume the automatic formula calculation. 

workbook. ResumeCalculations ();
```

However, there are two basic cases when this method of temporarily stopping the automatic calculation of formulas cannot be applied to improve the processing speed.

1. This approach temporarily stops automatic cell calculation. So, if your business logic depends on automatic formula calculation, you may not be able to use this approach. There is a chance that a cell may hold a value which is not updated yet.

2. If the automatic calculation of formulas is not the cause of the long processing time, this workaround cannot be expected to improve the processing speed.

It’s important to note that in .NET 6 and later [Blazor WebAssembly](https://www.infragistics.com/community/blogs/b/jason_beres/posts/blazor-server-vs-blazor-webassembly) programs, enabling "AOT compilation" is expected to improve processing speed, especially for compute-intensive processes (such as Excel sheet processing). However, AOT compilation has some disadvantages such as:

* It takes too long to publish.
* It increases the output application content size.

## Conclusion
Processing an Excel file may take a considerable amount of time depending on:

* the content
* the scale of the data you want to handle
* the number of cells

The focus of this article was to quickly show you how to improve speed for your documents and data processing when using Ignite UI for Blazor Excel Library and Workbooks. The primary technique we demonstrated was disabling the automatic formula calculation.

But there are a few other tricks you can try out as well:

* Use Ahead-Of-Time (AOT) compilation.
* Run on the server side.

You can read about the exact steps to do it in our previous blog post - How to Read and Write Excel Files on Blazor WebAssembly To Reduce Server Load.

## What is Ignite UI for Blazor?

[Ignite UI for Blazor](https://www.infragistics.com/products/ignite-ui-blazor) is packed with professionally designed Blazor components like [Blazor Dock Manager](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/dock-manager), super-fast and lightweight [Blazor Data Grid](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/grids/grids), over 60 high-performance Charts - [Financial/Stock Chart](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/charts/types/stock-chart), [Pie Chart](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/charts/types/pie-chart) and more - [Geospatial Maps](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/geo-map), [Multi-Column Combo Box](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/editors/multi-column-combobox), full support for Blazor Server, Blazor WebAssembly, and .NET 6.

With the latest [Ultimate 22.1 Release](https://www.infragistics.com/community/blogs/b/infragistics/posts/ignite-ui-for-blazor---what-s-new-in-22-1), you can now take advantage of things like updated code generation delivered through the updated [low-code/no-code App Builder™](https://www.infragistics.com/products/appbuilder), Pagination for the Blazor Grid, Blazor Data Visualization, Tooltip and other great features and controls.