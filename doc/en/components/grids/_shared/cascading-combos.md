---
title: Cascading combos in {Platform} {ComponentTitle} - Infragistics
_description: {ComponentTitle} with Cascading Combos. See the sample here.
_keywords: cascading combos with grid, {ProductName}, infragistics
---

# {Platform} {ComponentTitle} with Cascading Combos
The {ComponentTitle}'s Editing functionality provides with the opportunity to use Cascading Combos. By selecting the value in any preceding `Combos`]`, the users will receive only the data that is relevant to their selection within the next Combo.

## Angular {ComponentTitle} with Cascading Combos Sample Overview
The sample below demonstrates how `Grid` works with nested `Cascading Combos`.

<!-- ComponentStart: Grid -->
<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-cascading-combo"
           github-src="{ComponentSample}/cascading-combo"
           alt="{Platform} {ComponentName} Cascading Combos">
</code-view>
<!-- ComponentEnd: Grid -->

## Setup

In order enable column editing, make sure `editable` property is set to `true`.

Once the column editing is enabled, you can start by adding your `Combo`. Please note that here in order to have only one single selection available, you will need to use set the `singleSelect` property.

<!-- Angular -->

To get started with the `Simple ComboBox component`, first you need to import the `IgxSimpleComboModule` in your `app.module.ts` file:

```typescript
import { IgxSimpleComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxSimpleComboModule,
        ...
    ]
})
export class AppModule {}
```

Then, in the template, you should bind the combos `SimpleCombo` to some data.

- `displayKey` - Required for object arrays - Specifies which property will be used for the items' text. If no value is specified for `displayKey`, the simple combobox will use the specified `valueKey` (if any).

```typescript
export class MySimpleComboComponent implements OnInit {
    public countriesData: Country[];
    public selectedCountry: Country;
    public selectedCity: City;

    public ngOnInit() {
        this.countriesData = getCountries([
            'United States',
            'Japan',
            'United Kingdom'
        ]);
    }
}
```

In order to handle the selection change, we need `selectionChanging`. The emitted event arguments, `IComboSelectionChangingEventArgs`, contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```html
<igx-combo [data]="countriesData" (selectionChanging)="countryChanging($event)"></igx-combo>
```

```typescript
public countryChanging(event: IComboSelectionChangeEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```

<!-- end: Angular -->


And lastly, adding the `LinearProgress`, which is required while loading the list of data.
The `id` is necessary to set the value of `id` attribute.

```html
 <igx-linear-bar 
    [id]="'region-progress-' + cell.row.data.ID" 
    [style.visibility]="'hidden'"
    type="info" [indeterminate]="true">
</igx-linear-bar>
```


## API Summary
<div class="divider--half"></div>

## Additional Resources