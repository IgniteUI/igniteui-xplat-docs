---
title: {Platform} {ComponentTitle} のカスケード コンボ - インフラジスティックス
_description: {Platform} {ComponentTitle} を使用して、{ComponentTitle} のカスケード コンボを介して更新を実行します。デモと例をお試しください。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
_language: ja
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid"]
namespace: Infragistics.Controls
---

# Cascading Combos (カスケード コンボ) を含む {Platform} {ComponentTitle}
{ComponentTitle} の編集機能では、カスケード コンボを使用する機会が提供されます。前の `Combo` で値を選択すると、ユーザーは次の Combo での選択に関連するデータのみを受け取ります。

## カスケード コンボを使用した Angular {ComponentTitle} サンプルの概要
以下のサンプルは、`{ComponentTitle}` がネストされた Cascading `Combo` コンポーネントとどのように動作するかを示しています。

<!-- ComponentStart: Grid -->
<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-cascading-combo"
           github-src="{ComponentSample}/cascading-combo"
           alt="{Platform} {ComponentName} カスケード コンボ">
</code-view>
<!-- ComponentEnd: Grid -->

## 設定

列の編集を有効にするには、`editable` プロパティが **true** に設定されていることを確認してください。

列の編集が有効になったら、`Combo` を追加することから始めることができます。ここで、単一選択を 1 つだけ使用できるようにするには、`singleSelect` プロパティを設定する必要があることに注意してください。


<!-- WebComponents, Blazor -->
`Combo` を使い始めるには、まずコンボをインポートする必要があります。

```ts
import { IgcComboComponent, defineAllComponents } from 'igniteui-webcomponents';
defineAllComponents();
```

```razor
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGridModule),
    typeof(IgbComboModule)
);
```

次に、コンボを使用して列テンプレートを定義する必要があります。


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

- `displayKey` - オブジェクト配列に必要 - 項目のテキストに使用されるプロパティを指定します。`displayKey` に値が指定されていない場合、コンボは指定された `valueKey` (存在する場合) を使用します。

選択の変更を処理するには、`change` イベントが必要です。発行されたイベント引数には、変更前の選択、現在の選択、追加または削除された項目に関する情報が含まれています。したがって、前のコンボの選択に基づいて値をフィルタリングします。

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

<!-- end: WebComponents, Blazor -->

<!-- Angular -->

`SimpleComboBox` コンポーネントの使用を開始するには、最初に `IgxSimpleComboModule` を `app.module.ts` ファイルにインポートする必要があります。

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

次に、テンプレート内でコンボ `SimpleCombo` をデータにバインドする必要があります。

- `displayKey` - オブジェクト配列に必要 - 項目のテキストに使用されるプロパティを指定します。`displayKey` に値が指定されていない場合、Simple ComboBox は指定された `valueKey` (存在する場合) を使用します。

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

選択の変更を処理するには、`selectionChanging` が必要です。発行されたイベント引数 `IComboSelectionChangingEventArgs` には、変更前の選択、現在の選択、追加または削除された項目に関する情報が含まれています。したがって、前のコンボの選択に基づいて値をフィルタリングします。

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
最後に、データのリストを読み込むときに必要な `LinearProgress` を追加します。
`id` 属性の値を設定するには `id` が必要です。

```html
 <igx-linear-bar
    [id]="'region-progress-' + cell.row.data.ID"
    [style.visibility]="'hidden'"
    type="info" [indeterminate]="true">
</igx-linear-bar>
```
<!-- end: Angular -->

<!-- WebComponents -->

最後に、データのリストを読み込むときに必要な `LinearProgress` を追加します。
`id` 属性の値を設定するには `id` が必要です。

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
最後に、データのリストを読み込むときに必要な `LinearProgress` を追加します。



```razor
    public static RenderFragment<IgbCellTemplateContext> WebGridRegionDropDownTemplate = (context) =>
    {
        var id = "region_" + context.Cell.Id.RowID;
        return @<div style="display:flex;flex-direction:column;"><IgbCombo id="@id" Placeholder="Choose Region..." SingleSelect=true ValueKey="Region" DisplayKey="Region" ChangeScript="RegionChange"></IgbCombo><IgbLinearProgress Indeterminate=true></IgbLinearProgress></div>;
    };
```
<!-- end: Blazor -->

## 既知の問題と制限

|制限|説明|
|--- |--- |
| コンボ ドロップダウン リストは他の UI 要素の後ろに隠れる場合があります。 | グリッド内の要素の積み重ね順序により、コンボ ドロップダウンがヘッダーやフッターなどの他の要素の後ろに隠れる場合があります。 |

## {Platform} {ComponentTitle} API メンバー
- `{ComponentName}`
- `Combo`
- `LinearProgress`