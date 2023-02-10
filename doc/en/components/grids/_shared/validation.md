---
title: Editing and Validation in {Platform} {ComponentTitle} - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform} validation, {ProductName}, infragistics,
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Editing and Validation

The `{ComponentName}` provides editing that has a built-in validation mechanism of user input when editing cells/rows. It extends the form validation functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.

## Configuration

### Configure via Template-Driven Configuration

We extend some of the {Platform} Forms validator directives to directly work with the `Column`. The same validators are available as attributes to be set declaratively in `Column`. The following validators are supported out-of-the-box:

- Required
- Min
- Max
- Email
- MinLength
- MaxLength
- Pattern

To validate that a column input would be set and the value is going to be formatted as an email, you can use the related directives:

```html
<igx-column [field]="email" [header]="User E-mail" required email></igx-column>
```

```html
<igc-column field="email" header="User E-mail" required="true" email="true"></igx-column>
```

The following sample demonstrates how to use the prebuilt `Required`, `Email` and `Min` validator directives in a `{ComponentName}`.

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service"
           github-src="{ComponentSample}/data-validator-service"
           alt="{Platform} {ComponentTitle} Validation Basic Example">
</code-view>

<!-- Angular -->

### Configure via Reactive Forms

We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:

<!-- ComponentStart: Grid -->
```html
<{ComponentInstance} (formGroupCreated)='formCreateHandler($event)' ...>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid -->
```ts
    public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }
```
<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
```ts
   public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }
```
<!-- ComponentEnd: TreeGrid -->

You can decide to write your own validator function, or use one of the [built-in {Platform} validator functions](https://{Platform}.io/guide/form-validation#built-in-validator-functions).

<!-- end: Angular -->

## Validation Service API

The grid exposes a validation service via the `Validation` property.

That service has the following public APIs:

- `Valid` - returns if the grid validation state is valid.
- `GetInvalid` - returns records with invalid states.
- `Clear` - clears state for record by id or clears all state if no id is provided.
- `MarkAsTouched` - marks the related record/field as touched.

Invalid states will persis until the validation errors in them are fixed according to the validation rule or they are cleared.

## Validation Triggers

Validation will be triggered in the following scenarios:

- While editing via the cell editor based on the grid's `ValidationTrigger`. Either on `Change` while typing in the editor, or on `Blur` when the editor loses focus or closes.
- When updating cells/rows via the API - `UpdateRow`, `UpdateCell`, etc.
- When using batch editing and the `Undo`/`Redo` API of the transaction service.

> [!Note]
> Validation will not trigger for records that have not been edited via user input or via the editing API. Visual indicators on the cell will only shown if the related input is considered touched - either via user interaction or via the `MarkAsTouched` API of the validation service.

<!-- Angular -->

## {Platform} {ComponentTitle} Validation Customization Options

### Set a custom validator

You can define your own validation directive to use on a `Column` in the template.

```ts
@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneFormatDirective, multi: true }]
})
export class PhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}
```

Once it is defined and added in your app module you can set it declaratively to a given column in the grid:

```html
<igx-column phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b"></igx-column>
```

### Change Default Error Template

You can define your own custom error template that will be displayed in the error tooltip when the cell enters invalid state. This is useful in scenarios where you want to add your own custom error message or otherwise change the look or content of the message.

```html
<igx-column>
  <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
      <ng-container *ngTemplateOutlet="defaultErr">
      </ng-container>
      <div *ngIf="cell.validation.errors?.['phoneFormat']">
        Please enter correct phone format
      </div>
  </ng-template>
</igx-column>
```

### Prevent Exiting Edit Mode on Invalid State

In some cases you may want to disallow submitting an invalid value in the data. In that scenario, you can use the `CellEdit` or `RowEdit` events and cancel the event in case the new value is invalid.

Both events' arguments have a `Valid` property and can be canceled accordingly.

```html
<{ComponentInstance} (cellEdit)='cellEdit($event)'>
```

```ts
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```

### Example

The below example demonstrates the above-mentioned customization options.

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-extended"
           github-src="{ComponentSample}/data-validator-service-extended"
           alt="{Platform} {ComponentTitle} Custom Validation Example">
</code-view>

### Cross-Field Validation

In some scenarios validation of one field may depend on the value of another field in the record.

In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.

<!-- ComponentStart: Grid -->

The below sample demonstrates a cross-field validation between different field of the same record. It checks the dates validity compared to the current date and between the active and created on date of the record as well as the deals won/lost ration for each employee. All errors are collected in a separate pinned column that shows that the record is invalid and displays the related errors.

The next lines of code show the cross-field validator function, which contains the comparisons and sets the related errors relative to them.

```razor
private rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const actualSalesControl = formGroup.get('actual_sales');

        // Validate dates
        const curDate = new Date();
        if (new Date(createdOnRecord.value) > curDate) {
            // The created on date should not be greater than current date.
            returnObject['createdInvalid'] =  true;
        }
        if (new Date(lastActiveRecord.value) > curDate) {
            // The last active date should not be greater than current date.
            returnObject['lastActiveInvalid'] = true;
        }
        if (new Date(createdOnRecord.value) > new Date(lastActiveRecord.value)) {
            // The created on date should not be greater than last active date.
            returnObject['createdLastActiveInvalid'] = true;
        }

        // Validate deals
        const dealsRatio = this.calculateDealsRatio(winControl.value, loseControl.value);
        if (actualSalesControl.value === 0 && dealsRatio > 0) {
            // If the actual sales value is 0 but there are deals made.
            returnObject['salesZero'] = true;
        }
        if (actualSalesControl.value > 0 && dealsRatio === 0) {
            // If the deals ratio based on deals won is 0 but the actual sales is bigger than 0.
            returnObject['salesNotZero'] = true;
        }

        return returnObject;
    };
}

public calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;
}
```

The cross-field validator can be added to the `FormGroup` of the row from `FormGroupCreated` event, which returns the new `FormGroup` for each row when entering edit mode:

```html
<{ComponentInstance} #grid1 [data]="transactionData" [width]="'100%'" [height]="'480px'" [autoGenerate]="false"
        [batchEditing]="true" [rowEditable]="true" [primaryKey]="'id'"
        (formGroupCreated)='formCreateHandler($event)'>
    <!-- ... -->
</{ComponentInstance}>
```

```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

The different errors are displayed in a templated cell that combines all errors in a single tooltip. Depending on the row valid state different icon is displayed:

```html
<igx-column field="row_valid" header=" " [editable]="false" [pinned]="true" [width]="'50px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin-right: '-10px';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin-right: '-10px';">
            <img width="18" src="assets/images/grid/expired.png"/>
        </div>
        <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
            <div *ngFor="let message of stateMessage(cell)">
                {{message}}
            </div>
        </div>
    </ng-template>
</igx-column>
```

The error messages are gathered in the `StateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `RowValidator`.

```typescript
public stateMessage(cell: IgxGridCell) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors ...
        }
    });

    if (row.validation.errors?.createdInvalid) {
        messages.push(`The \`Date of Registration\` date cannot be in the future.`);
    }
    // Other cross-field errors...

    return messages;
}
```

The below sample demonstrates the cross-field validation in action.

<code-view style="height:560px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-cross-field"
           github-src="{ComponentSample}/data-validator-service-cross-field"
           alt="{Platform} {ComponentTitle} Cross-field Validation Example">
</code-view>


<!-- ComponentEnd:Grid -->

<!-- ComponentStart:HierarchicalGrid -->

Cross-field validators can be added to the formGroup on the `FormGroupCreated` event. In them multiple fields can be compared for validity.

```ts
  public formCreateCustomerHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.addressValidator());
    }

    public formCreateOrderHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.dateValidator());
    }

    public addressValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }
            return returnObject;
        }
    }

    public dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const orderDate = formGroup.get('OrderDate').value;
            const shippedDate = formGroup.get('ShippedDate').value;
            if (new Date(shippedDate) < new Date(orderDate)) {
                returnObject['invalidRange'] = true;
            }
            return returnObject;
        }
    }
```

The multi-field errors can then be displayed in a separate pinned column.

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'50px'">
        <ng-template igxCell let-cell="cell">
            <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/active.png"/>
            </div>
            <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/expired.png"/>
            </div>
            <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
               <div *ngFor="let message of stateMessage(cell)">
                   {{message}}
               </div>
            </div>
        </ng-template>
    </igx-column>
```

Errors and the detailed messages can be determined based on the row and cell's validity.

```ts
    public isRowValid(cell: IgxGridCell) {
        const hasErrors = !!cell.row.validation.errors || cell.row.cells.some(x => !!x.validation.errors);
        return !hasErrors;
    }

    public stateMessage(cell: IgxGridCell) {
        const messages = [];
        const row = cell.row;
        if  (row.validation.errors?.invalidAddress) {
            messages.push('The address information is invalid. City does not match the Country.');
        }
        if  (row.validation.errors?.invalidRange) {
            messages.push('The ShippedDate cannot be before the OrderDate.');
        }
        const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
        if (cellValidationErrors && cellValidationErrors.length > 0) {
            const fields = cellValidationErrors.map(x => x.column.field).join(',');
            messages.push('The following fields are required: ' + fields);
        }

        if (messages.length === 0) {
            // no errors
            return ['Valid'];
        }
        return messages;
    }
```

The below sample demonstrates cross-field validation in a `{ComponentName}` for both the root and child data.

<code-view style="height:530px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-cross-field"
           github-src="{ComponentSample}/data-validator-service-cross-field"
           alt="{Platform} {ComponentTitle} Cross-field Validation Example">
</code-view>

<!-- ComponentEnd:HierarchicalGrid -->

<!-- ComponentStart:TreeGrid -->

The below sample demonstrates a cross-field validation between different field of the same record. It checks that a specified City for a person is in the Country currently set and vice versa. Also check if the age for a person was 18 already when it was hired.

The next lines of code show the cross-field validator function, which contains comparisons described above and sets the related errors.

```ts
private rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};

        const age = formGroup.get('Age');
        const hireDate = formGroup.get('HireDate');
        if((new Date().getFullYear() - new Date(hireDate.value).getFullYear()) + 18 >= age.value) {
            returnObject['ageLessHireDate'] = true;
        }

        const city = formGroup.get('City');
        const country = formGroup.get('Country');
        const validCities = this.countryData.get(country.value);
        if (!validCities || !validCities[city.value]) {
            returnObject['invalidAddress'] = true;
        }

        return returnObject;
    };
}
```

The cross-field validator can be added to the `FormGroup` of the row from `FormGroupCreated` event, which returns the new `FormGroup` for each row when entering edit mode:

```html
<igx-tree-grid igxPreventDocumentScroll #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID"
    foreignKey="ParentID" [width]="'100%'" [height]="'500px'" [rowEditable]="true" [pinning]="pinningConfig"
    (formGroupCreated)="formCreateHandler($event)">
</igx-tree-grid>
```

```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

The different errors are displayed in a templated cell that combines all errors in a single tooltip. Depending on the row valid state different icon is displayed:

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'150px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin: 'auto';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin: 'auto';">
            <img width="18" src="assets/images/grid/expired.png"/>
        </div>
        <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
            <div *ngFor="let message of stateMessage(cell)">
                {{message}}
            </div>
        </div>
    </ng-template>
</igx-column>
```

The error messages are gathered in the `StateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `RowValidator`.

```typescript
public stateMessage(cell: IgxGridCell) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors...
        }
    });

    if (row.validation.errors?.ageLessHireDate) {
        messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
    }
    if (row.validation.errors?.invalidAddress) {
        messages.push(`Selected \`City\` does not match the \`Country\`.`);
    }

    if (messages.length === 0 && this.isRowValid(cell)) {
        messages.push('OK');
    }

    return messages;
}
```

The below sample demonstrates the cross-field validation in action.

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-cross-field"
           github-src="{ComponentSample}/data-validator-service-cross-field"
           alt="{Platform} {ComponentTitle} Cross-field Validation Example">
</code-view>

<!-- ComponentEnd:TreeGrid -->

## Styling

Using the [{ProductName} Theme Library](../themes/index.md), we can alter the default validation styles while editing.

In the example below, we will make use of the exposed template for validation message, which pops out in a tooltip and overriding the error color to modify the default looks of the validation.
We will also style the background of the invalid rows to make them more distinct.

### Import theme

The easiest way to style and access css variables is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the {ProductName} Sass framework:

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### Include the styles
In order to change the error color you can use the css variable `--igx-error-500`:
```scss
--igx-error-500: 34, 80%, 63%;
```

### Custom Templates
Changing the default error template allows setting custom classes and styles:
```html
<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
    <div class="validator-container">
        <ng-container *ngTemplateOutlet="defaultErr">
        </ng-container>
    </div>
</ng-template>
```

### Invalid Row and Cell styles

Rows and cells provide API for the developers to know if a row or cell is invalid and what kind of errors are active.
<!-- ComponentStart:Grid -->
```ts
public rowStyles = {
    background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
};
public cellStyles = {
    'invalid-cell': (rowData, columnKey) => {
        const pKey = this.grid.primaryKey;
        const cell = this.grid.getCellByKey(rowData[pKey], columnKey);
        return cell && cell.validation.status === 'INVALID';
    }
}
```
```html
<{ComponentInstance} [rowStyles]="rowStyles">
    <igx-column field="ReorderLevel" header="ReorderLever" required [cellClasses]="cellStyles">
```
<!-- ComponentEnd:Grid -->

<!-- ComponentStart:HierarchicalGrid -->
```ts
public rowStyles = {
    background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
};
public cellStyles = {
    'invalid-cell': (rowData, columnKey) => {
        let cell = this.hierarchicalGrid.getCellByKey(rowData, columnKey);
        // search in child grids
        if (!cell) {
            for (let grid of this.childGrid.gridAPI.getChildGrids()) {
                cell = grid.getCellByKey(rowData, columnKey);
                if (cell) break;
            }
        }
        return cell && cell.validation.status === 'INVALID';
    }
}
```
```html
<igx-hierarchical-grid [rowStyles]="rowStyles">
    <igx-column field="Artist" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
    <!--...-->
    <igx-row-island [key]="'Albums'" [rowStyles]="rowStyles">
        <igx-column field="Album" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
    </igx-row-island>
    <!--...-->
</igx-hierarchical-grid>
```

<!-- ComponentEnd:HierarchicalGrid -->


<!-- ComponentStart:TreeGrid -->
```razor
public rowStyles = {
    background: (row: RowType) => row.cells.find(c => c.validation.errors !== null && c.validation.errors !== undefined) ? '#FF000033' : '#00000000'
};
public cellStyles = {
    'invalid-cell': (rowData, columnKey) => {
        const pKey = this.treeGrid.primaryKey;
        const cell = this.treeGrid.getCellByKey(rowData[pKey], columnKey);
        return cell && cell.validation.status === 'INVALID';
    }
}
```
```html
<igx-tree-grid [rowStyles]="rowStyles">
        <igx-column *ngFor="let c of columns" [field]="c.field" [dataType]="c.dataType" [header]="c.label" [required]="c.required" [cellClasses]="cellStyles">
```
<!-- ComponentEnd:TreeGrid -->


### Demo

<code-view style="height:560px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validation-style"
           github-src="{ComponentSample}/data-validation-style">
</code-view>

<!-- end: Angular -->

## API References

* `BaseTransactionService`
* `{ComponentName}`
* `Column`


## Additional Resources

<!-- Angular -->

* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)

* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Row Editing](row-editing.md)
* [{ComponentTitle} Row Adding](row-adding.md)
* [{ComponentTitle} Transactions](batch-editing.md)

<!-- end: Angular -->

<!-- Blazor -->


* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Row Editing](row-editing.md)
* [{ComponentTitle} Row Adding](row-adding.md)
* [{ComponentTitle} Transactions](batch-editing.md)

<!-- end: Blazor -->

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
