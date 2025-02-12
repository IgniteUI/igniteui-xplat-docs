---
title: {Platform} {ComponentTitle} Cascading combos - {ProductName}
_description: Perform updating via cascading combos in {ComponentTitle}, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_language: en
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} with Cascading Combos

The {ComponentTitle}'s Editing functionality provides with the opportunity to use Cascading Combobox components. By selecting the value in any preceding `Combo`, the users will receive only the data that is relevant to their selection within the next {Platform} Combobox component.

## Angular {ComponentTitle} with Cascading Combos Sample Overview
The sample below demonstrates how `{ComponentName}` works with nested Cascading `Combo` components.

<!-- ComponentStart: Grid -->
<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}/cascading-combo"
           github-src="{ComponentSample}/cascading-combo"
           alt="{Platform} {ComponentName} Cascading Combos">
</code-view>
<!-- ComponentEnd: Grid -->

## Setup

In order enable column editing, make sure `editable` property is set to `true`.

Once the column editing is enabled, you can start by adding your `Combo`. Please note that here in order to have only one single selection available, you will need to use set the `singleSelect` property.


<!-- WebComponents, Blazor, React -->
To get started with the `Combo`, first you need to import it:


<!-- WebComponents -->
```ts
import { IgcComboComponent, defineAllComponents } from 'igniteui-webcomponents';
defineAllComponents();
```
<!-- end: WebComponents -->

```razor
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGridModule),
    typeof(IgbComboModule)
);
```

```tsx
import { IgrComboModule, IgrCombo } from 'igniteui-react';
IgrComboModule.register();
```

Then you should define the column template with the combo:


```tsx
   <IgrColumn
    field="Country"
    header="Country"
    bodyTemplate={webGridCountryDropDownTemplate}
    name="column1">
    </IgrColumn>
```

```tsx
    function webGridCountryDropDownTemplate(props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "country" + id;
        return (
        <>
            <IgrCombo data={countries} ref={comboRefs} change={(x: any, args: any) => {onCountryChange(id, x, args) }} placeholder="Choose Country..." valueKey="Country" displayKey="Country" singleSelect="true" name={comboId}></IgrCombo>
        </>
        );
    }
```

```razor
<IgbColumn Field="Country" Header="Country" BodyTemplate="WebGridCountryDropDownTemplate"></IgbColumn>

@code{
    public static RenderFragment<IgbCellTemplateContext> WebGridCountryDropDownTemplate = (context) =>
    {
        var id = "country_" + context.Cell.Id.RowID;
        return @<IgbCombo id="@id" Placeholder="Choose Country..." SingleSelect=true ValueKey="Country" DisplayKey="Country" ChangeScript="CountryChange"></IgbCombo>;
    };
}

```

```ts
public webGridCountryDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    const id = ctx.cell.id.rowID;
    const comboId = "country_" + id;
    return html`<igc-combo placeholder="Choose Country..." value-key="Country" display-key="Country" id="${comboId}" single-select></igc-combo>`
}
```

- `displayKey` - Required for object arrays - Specifies which property will be used for the items' text. If no value is specified for `displayKey`, the  combo will use the specified `valueKey` (if any).

In order to handle the selection change, we need the `change` event. The emitted event arguments contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```razor
//In Javascript
igRegisterScript("CountryChange", (ctx) => {
    const value = e.detail.newValue;
    cell.update(value);
    const nextCombo = document.getElementById("region_" + cell.id.rowID);
    const nextProgress = document.getElementById("progress_region_" + cell.id.rowID);
    if (value === "") {
        nextCombo.deselect(nextCombo.value);
        nextCombo.disabled = true;
        nextCombo.data = [];
    } else {
        nextProgress.style.display = "block";
        setTimeout(() => {
            nextProgress.style.display = "none";
            nextCombo.disabled = false;
            nextCombo.data = this.regions.filter(x => x.Country === value);
        }, 2000);
    }
});
```

```ts
 public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
public bindEventsCountryCombo(rowId: any, cell: any) {
        const comboId = "country_" + rowId;
        var combo = document.getElementById(comboId) as IgcComboComponent<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
            const nextCombo = document.getElementById("region_" + cell.id.rowID) as IgcComboComponent<any>;
            const nextProgress = document.getElementById("progress_region_" + cell.id.rowID) as IgcLinearProgressComponent;
            if (value === "") {
                nextCombo.deselect(nextCombo.value);
                nextCombo.disabled = true;
                nextCombo.data = [];
            } else {
                nextProgress.style.display = "block";
                setTimeout(() => {
                    nextProgress.style.display = "none";
                    nextCombo.disabled = false;
                    nextCombo.data = this.regions.filter(x => x.Country === value);
                }, 2000);

            }
        });
        combo?.addEventListener("igcOpening", (e:any) => {
            var currCombo = e.target;
            if (currCombo.data.length === 0) {
                combo.data = this.countries;
            };
        });
    }
```

```tsx
    function onCountryChange(rowId: string, cmp: any, args:any) {
        const regionCombo = comboRefCollection.get("region_" + rowId);
       setTimeout(() => {
            const newValue = cmp.value[0];
            if (newValue === undefined) {
                regionCombo.deselect(regionCombo.value);
                regionCombo.disabled = true;
                regionCombo.data = [];
            } else {
                regionCombo.disabled = false;
                regionCombo.data = regions.filter(x => x.Country === newValue);
            }
       });
    }
```

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

To get started with the `SimpleComboBox` component, first you need to import the `IgxSimpleComboModule` in your `app.module.ts` file:

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
And lastly, adding the `LinearProgress`, which is required while loading the list of data.
The `id` is necessary to set the value of `id` attribute.

```html
 <igx-linear-bar
    [id]="'region-progress-' + cell.row.data.ID"
    [style.visibility]="'hidden'"
    type="info" [indeterminate]="true">
</igx-linear-bar>
```
<!-- end: Angular -->

<!-- WebComponents -->

And lastly, adding the `LinearProgress`, which is required while loading the list of data.
The `id` is necessary to set the value of `id` attribute.

```ts
    public webGridRegionDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
        const id = ctx.cell.id.rowID;
        const comboId = "region_" + id;
        const progressId = "progress_region_" + id;
        return html`<div style="display:flex; flex-direction: column;"><igc-combo placeholder="Choose Region..." disabled value-key="Region" display-key="Region" id="${comboId}" single-select></igc-combo>
        <igc-linear-progress style="display:none;" indeterminate id="${progressId}"></<igc-linear-progress><div>`;
    }
```


<!-- end: WebComponents -->


<!-- Blazor -->
And lastly, adding the `LinearProgress`, which is required while loading the list of data.



```razor
    public static RenderFragment<IgbCellTemplateContext> WebGridRegionDropDownTemplate = (context) =>
    {
        var id = "region_" + context.Cell.Id.RowID;
        return @<div style="display:flex;flex-direction:column;"><IgbCombo id="@id" Placeholder="Choose Region..." SingleSelect=true ValueKey="Region" DisplayKey="Region" ChangeScript="RegionChange"></IgbCombo><IgbLinearProgress Indeterminate=true></IgbLinearProgress></div>;
    };
```
<!-- end: Blazor -->

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Combo drop-down list may hide behind other UI elements. | Due to the stacking order of elements in the grid the combo drop-down may hide behind other elements like header, footers etc. |

## {Platform} {ComponentTitle} API Members
- `{ComponentName}`
- `Combo`
- `LinearProgress`