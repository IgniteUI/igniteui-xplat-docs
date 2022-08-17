---
title: $Platform$ Excel Library| Using Workbooks| Infragistics
_description: Use Infragistics' $Platform$ excel library to create workbooks and worksheets, input data and export the date to Microsoft® Excel. View $ProductName$ excel tutorials for more information!
_keywords: Excel library, workbooks, $ProductName$, Infragistics
mentionedTypes: ['Workbook']
---
# $Platform$ Using Workbooks

The Infragistics $Platform$ Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics $Platform$ Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

## $Platform$ Using Workbooks Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library-operations-on-workbooks"
           alt="$Platform$ Using Workbooks Example"
           github-src="excel/excel-library/operations-on-workbooks">
</code-view>

<div class="divider--half"></div>

## Change Default Font

First create a new instance of <a class="external-link" href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/api/docs/typescript/latest/interfaces/iworkbookfont.html">IWorkbookFont</a>. Next, add the new font to the `Styles` collection of the `Workbook`. This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

```razor
var workbook = new Workbook();
var font = workbook.Styles.NormalStyle.StyleFormat.Font;
font.Name = "Times New Roman";
font.Height = 16 * 20;
```

## Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics $Platform$ Excel Library to set these properties using the `Workbook` object’s `DocumentProperties` property. The available properties are:

- `Author`

- `Title`

- `Subject`

- `Keywords`

- `Category`

- `Status`

- `Comments`

- `Company`

- `Manager`

The following code demonstrates how to create a workbook and set its `title` and `status` document properties.

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

```razor
var workbook = new Workbook();
workbook.DocumentProperties.Title = "Expense Report";
workbook.DocumentProperties.Status = "Complete";
```

## Workbook Protection

The workbook protection feature allows you to protect the structure of the workbook. That is, the ability for a user to add, rename, delete, hide, and reorder the worksheets in that workbook.

The protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model to honor these protection settings and allow or restrict the user from performing the corresponding operations.

Protection is applied to a workbook by invoking its `protect` method.

When a `Workbook` is protected without a password, the end user may unprotect the `Workbook` in Excel without having to supply a password. To programmatically unprotect a `Workbook`, one may use the `unprotect` method.

When a `Workbook` is protected, the values of the properties of the `WorkbookProtection` instance from this `Workbook`'s `protection` property indicate the disabled operations.

If `IsProtected` is already true, the `protect` method will be ignored.

```ts
var workbook = new Workbook();
workbook.protect(false, false);
```

```razor
var workbook = new Workbook();
workbook.Protect(false, false);
```

Check if a workbook has protection. This read-only property returns true if the workbook has any protection set using the overloads of the Protect method.

```ts
var workbook = new Workbook();
var protect = workbook.isProtected;
```

```razor
var workbook = new Workbook();
var protect = workbook.IsProtected;
```

This read-only property returns an object of type WorkbookProtection which contains properties for obtaining each protection setting individually.

```ts
var workbook = new Workbook();
var protection = workbook.protection;
```

```razor
var workbook = new Workbook();
var protect = workbook.Protection;
```

 ## API Members

 - `DocumentProperties`
 - `WorkbookProtection`
 - `Workbook`
 - `Workbook`