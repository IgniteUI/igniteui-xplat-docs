---
title: Editing and Validation in {Platform} {ComponentTitle} - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform} validation, ignite ui for {Platform}, infragistics
mentionedTypes: [{ComponentApiMembers}]
---

# {Platform} {ComponentTitle} Editing and Validation
The {ComponentTitle}'s editing exposes a built-in validation mechanism of user input when editing cells/rows. It extends the [{Platform} Form validation](https://{Platform}.io/guide/form-validation) functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.

## Configuration

### Configure via template-driven configuration

We extend some of the {Platform} Forms validator directives to directly work with the grid's columns. The same validators are available as attributes to be set declaratively in Razor. The following validators are supported out-of-the-box:
- required
- min
- max
- email
- minlength
- maxlength
- pattern

To validate that a column input would be set and the value is going to be formatted as an email, you can use the related directives:
```Razor
<IgbTextColumn field="email" header="User E-mail" required />
```

The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a {ComponentTitle}.

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service"
           alt="{Platform} {ComponentTitle} Validation Basic Example">
</code-view>

### Configure via reactive forms

We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:

```Razor
<{ComponentInstance} (formGroupCreated)='formCreateHandler($event)' ...>
```

<!-- ComponentStart:Grid -->
```js
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
<!-- ComponentEndt:Grid -->

<!-- ComponentStart:TreeGrid -->
```js
   public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }
```
<!-- ComponentEnd:TreeGrid -->

You can decide to write your own validator function, or use one of the [built-in {Platform} validator functions](https://{Platform}.io/guide/form-validation#built-in-validator-functions).


## Validation service API

The grid exposes a validation service via the [`validation`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#validation) property.
That service has the following public APIs:
- [`valid`]({environment:{Platform}ApiUrl}/classes/IgxGridValidationService.html#valid) - returns if the grid validation state is valid.
- [`getInvalid`]({environment:{Platform}ApiUrl}/classes/IgxGridValidationService.html#getInvalid) - returns records with invalid states.
- [`clear`]({environment:{Platform}ApiUrl}/classes/IgxGridValidationService.html#clear) - clears state for record by id or clears all state if no id is provided.
- [`markAsTouched`]({environment:{Platform}ApiUrl}/classes/IgxGridValidationService.html#markAsTouched) - marks the related record/field as touched.

Invalid states will persis until the validation errors in them are fixed according to the validation rule or they are cleared.

## Validation triggers

Validation will be triggered in the following scenarios:

- While editing via the cell editor based on the grid's [`validationTrigger`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#validationTrigger). Either on `change` while typing in the editor, or on `blur` when the editor loses focus or closes.
- When updating cells/rows via the API - [`updateRow`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#updateRow), [`updateCell`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#updateCell) etc..
- When using batch editing and the [`undo`]({environment:{Platform}ApiUrl}/classes/IgxTransactionService.html#undo)/[`redo`]({environment:{Platform}ApiUrl}/classes/IgxTransactionService.html#redo) API of the transaction service.

> Note: Validation will not trigger for records that have not been edited via user input or via the editing API. Visual indicators on the cell will only shown if the related input is considered touched - either via user interaction or via the `markAsTouched` API of the validation service.

## {Platform} {ComponentTitle} Validation Customization Options

### Set a custom validator

You can define your own validation directive to use on a grid column in the template.

```js
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

```Razor
<IgbTextColumn phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b" ...>
```

### Prevent exiting edit mode on invalid state

In some cases you may want to disallow submitting an invalid value in the data.
In that scenarios you can use the [`cellEdit`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#cellEdit) or [`rowEdit`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#rowEdit) events and cancel the event in case the new value is invalid.
Both events' arguments have a [`valid`]({environment:{Platform}ApiUrl}/interfaces/IGridEditEventArgs.html#valid) property and can be canceled accordingly.


```Razor
<{ComponentInstance} cellEdit='cellEdit($event)' ...>
```

```js
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```

### Cross-field validation

In some scenarios validation of one field may depend on the value of another field in the record.
In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.

<!-- ComponentStart:Grid -->

The below sample demonstrates a cross-field validation between different field of the same record. It checks the dates validity compared to the current date and between the active and created on date of the record as well as the deals won/lost ration for each employee. All errors are collected in a separate pinned column that shows that the record is invalid and displays the related errors.

The next lines of code show the cross-field validator function, which contains the comparisons and sets the related errors relative to them.

```js
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

The cross-field validator can be added to the `formGroup` of the row from [`formGroupCreated`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#formGroupCreated) event, which returns the new `formGroup` for each row when entering edit mode:

```Razor
<IgbDataGrid #grid1 data="transactionData" width="'100%'" height="'480px'" autoGenerate="false"
        batchEditing="true" rowEditable="true" primaryKey="'id'"
        (formGroupCreated)='formCreateHandler($event)'>
    <!-- ... -->
</IgbDataGrid>

```

```js
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

The error messages are gathered in the `stateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `rowValidator`.

<!-- ComponentEnd:Grid -->

<!-- ComponentStart:HierarchicalGrid -->

  Cross-field validators can be added to the formGroup on the [`formGroupCreated`]({environment:{Platform}ApiUrl}/classes/IgxGridComponent.html#formGroupCreated) event. In them multiple fields can be compared for validity.

  ```js
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

Errors and the detailed messages can be determined based on the row and cell's validity.

```js
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

<!-- ComponentEnd:HierarchicalGrid -->

<!-- ComponentStart:TreeGrid -->

The below sample demonstrates a cross-field validation between different field of the same record. It checks that a specified City for a person is in the Country currently set and vice versa. Also check if the age for a person was 18 already when it was hired.

The next lines of code show the cross-field validator function, which contains comparisons described above and sets the related errors.

```js
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

```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

The error messages are gathered in the `stateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `rowValidator`.

```js
public stateMessage(cell: IgbGridCell) {
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

<!-- ComponentEnd:TreeGrid -->

## API References

* `BaseTransactionService`
* `GridComponent`
* `ColumnComponent`


## Additional Resources

* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
* [{ComponentTitle} Overview](@@igMainTopic.md)
* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Row Editing](row-editing.md)
* [{ComponentTitle} Row Adding](row-adding.md)
* [{ComponentTitle} Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
