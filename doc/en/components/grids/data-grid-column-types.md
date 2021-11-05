---
title: $Platform$ Data Grid | Column Types | Infragistics
_description: Learn how Infragistics' $ProductName$ data table & grid supports four column types to display your content such as Image, Text, Numeric, DataTime or a Template Column. View $ProductName$ tutorials!
_keywords: $Platform$ Table, Data Grid, column types, $ProductName$, Infragistics
mentionedTypes: ['CellInfo', 'TemplateCellInfo', 'Column', 'XamDataGrid']
---

# $Platform$ Column Types

The $ProductName$ Data Table / Data Grid supports 5 column types, plus a Template Column type, giving you complete flexibility over the way your data is displayed in the $Platform$ data grid.  Column types supported are Text column, Numeric column, DateTime column, Image column, ComboBox and Template.

Each column binds to data by setting the `Field` property to the name of the corresponding property on the items of your underlying data source bound to the $Platform$ data grid.

## $Platform$ Column Types Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-types"
           alt="$Platform$ Column Types Example"
           github-src="grids/data-grid/column-types">
</code-view>

<div class="divider--half"></div>

## Text Column

The $Platform$ data grid is used for displaying formatted text in its associated cells. This is the default column type used to display data of the string type.

## Numeric Column

The `NumericColumn` is used for displaying a formatted numeric value in its associated cells and enables control of decimal place placement within cells and displaying fractional digits.

## DateTime Column

The `DateTimeColumn` is used for displaying Date objects in its associated cells and enables control to format the Date objects how you see fit.

## Image Column

The `ImageColumn` is used for displaying an image within a cell and exposes options for image stretch customization for cells by using its `ImageStretchOption` option.

You can also choose what type of resource your image is by setting the `ImageResourceType` option.

## ComboBox Column

The `ComboBoxColumn` is used for displaying a drop-down list from which your end users can select a single item.

Data binding can be achieved using an array of complex objects via the column's `DataSource` property.

The `TextField` property determines which value is shown when users make a selection.

The `ValueField` property determines the bound value of the underlying data item selected. This is necessary if your list of objects have several properties.

## Template Column

The `TemplateColumn` is used in conjunction with a cell template. It enables you to apply a custom template to the column's cell. This is done by handling the `CellUpdating` event of the template column.

The `CellUpdating` event's arguments expose the `TemplateColumn` that fires the event as well as a `TemplateCellUpdatingEventArgs` parameter. This event arguments parameter exposes a `Content` property that returns the HTMLDivElement that will be placed within the associated cells of the column. You can then append new elements to this div.

The `TemplateCellUpdatingEventArgs` also exposes a `CellInfo` property that you can use to get a `TemplateCellInfo` object. This object exposes information about the cell and the row, such as the index, underlying data item, and appearance of the cell.

## Sparkline Column

You can embed Sparkline components in `TemplateColumn` to show more complex data structures.
Refer to the [Column Sparkline](data-grid-type-sparkline-table.md) topic for information on how to do this.

## Code Snippet

The following demonstrates the implementation of each of the columns described in this topic:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    defaultColumnMinWidth="120"
    autoGenerateColumns="false"
    dataSource={this.data}>
    <IgrTextColumn field="FirstName" headerText="First Name" />
    <IgrTextColumn field="LastName" headerText="Last Name" />
    <IgrComboBoxColumn field="City" headerText="City" dataSource={this.cityList} textField="name"/>
    <IgrTemplateColumn field="Address" headerText="Address"
                       cellUpdating={this.onAddressCellUpdating} />
    <IgrImageColumn field="Photo" headerText="Photo"
                    imageResourceType="LocalAsset" />
    <IgrNumericColumn field="Age" headerText="Age"  />
    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"  />
</IgrDataGrid>
```

```html
<igc-data-grid id="grid"
    width="100%"
    height="500px"
    auto-generate-columns="false">
    <igc-text-column field="FirstName"></igc-text-column>
    <igc-text-column field="LastName"></igc-text-column>
    <igc-combo-box-column id="City" field="City" text-field="name" header-text="City"></igc-text-column>
    <igc-template-column id="Address" field="Address"></igc-template-column>
    <igc-image-column field="Photo"></igc-text-column>
    <igc-numeric-column field="Age"></igc-numeric-column>
    <igc-date-time-column field="Birthday"></igc-date-time-column>
</igc-data-grid>
```

```ts
import { IgcTemplateColumnComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellInfo } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellUpdatingEventArgs } from 'igniteui-webcomponents-grids';

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;

let cityComboColumn = document.getElementById('city') as IgcComboBoxColumnComponent;

if(cityComboColumn)
    this.allCities = DataGridSharedData.getAllCities();
    cityComboColumn.dataSource = this.cityList;
    cityComboColumn.textField = "name";

let TemplateColumn = (document.getElementById("Address") as IgcTemplateColumnComponent);
TemplateColumn.cellUpdating = onCellUpdating;

onCellUpdating(s: IgcTemplateColumnComponent, e: IgcTemplateCellUpdatingEventArgs): void {
 // alert("onAddressCellUpdating");
 const content = e.content as HTMLDivElement;
 let span1: HTMLSpanElement | null = null;
 let span2: HTMLSpanElement | null = null;
 const info = e.cellInfo as IgcTemplateCellInfo ;
 const item = info.rowItem;

 if (content.childElementCount === 0) {

     span1 = document.createElement("span");
     span2 = document.createElement("span");

     content.style.verticalAlign = "top";
     content.style.marginTop = "15px";
     content.style.lineHeight = "normal";
     content.style.display = "inline-grid";
     content.style.fontFamily = "Verdana";
     content.style.fontSize = "13px";

     content.appendChild(span1);
     content.appendChild(span2);
 }
 else {
     span1 = content.children[0] as HTMLSpanElement;
     span2 = content.children[1] as HTMLSpanElement;
 }

 if (span1 && span2) {
       span1.textContent = item.Street;
       span2.textContent = item.City + ", " + item.Country;
  }
}
```

```ts
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrComboBoxColumn } from 'igniteui-react-grids';

public onAddressCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
    const content = e.content as HTMLDivElement;
    let span1: HTMLSpanElement | null = null;
    let span2: HTMLSpanElement | null = null;
    const info = e.cellInfo as IgrTemplateCellInfo;
    const item = info.rowItem;

    if (content.childElementCount === 0) {

        span1 = document.createElement("span");
        span2 = document.createElement("span");

        content.style.verticalAlign = "top";
        content.style.marginTop = "15px";
        content.style.lineHeight = "normal";
        content.style.display = "inline-grid";
        content.style.fontFamily = "Verdana";
        content.style.fontSize = "13px";

        content.appendChild(span1);
        content.appendChild(span2);
    }
    else {
        span1 = content.children[0] as HTMLSpanElement;
        span2 = content.children[1] as HTMLSpanElement;
    }

    if (span1 && span2) {
        span1.textContent = item.Street;
        span2.textContent = item.City + ", " + item.Country;
    }
}
```

The following is a sample data source to use with the above columns.

```ts
const maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Torrey", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
const femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
const lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];
const genders: string[] = ["male", "female"];
const cities: string[] = ["New York, New York", "Columbus, Ohio", "Los Angeles, California", "Orlando, Florida", "New Orleans, Louisiana", "Las Vegas, Nevada", "Atlanta, Georgia"];
const roadSuffixes: string[] = ["Road", "Street", "Court", "Way"];
const roadNames: string[] = ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Julia", "Kilo", "Lima", "Mike", "November"];

const people: any[] = [];

let maleCount: number = 0;
let femaleCount: number = 0;
for (let i = 0; i < 250; i++) {

    const age: number = Math.round(this.getRandomNumber(20, 40));
    const today: Date = new Date();
    const gender: string = this.getRandomItem(genders);

    let firstName: string;
    const lastName: string = this.getRandomItem(lastNames);

    const propertyNum: string = Math.round(this.getRandomNumber(1, 300)).toString();
    const cityState: string = this.getRandomItem(cities);
    const road: string = this.getRandomItem(roadNames) + " " + this.getRandomItem(roadSuffixes);

    let photoPath: string;

    if (gender === "male") {
        firstName = this.getRandomItem(maleNames);
        maleCount++;

        if(maleCount > 26){
             maleCount = 0;
        }

        if (maleCount < 10) {
            photoPath = '/assets/GUY0' + maleCount.toString() + '.png';
        }
        else {
            photoPath = '/assets/GUY' + maleCount.toString() + '.png';
        }
    }
    else {
        firstName = this.getRandomItem(femaleNames);
        femaleCount++;

        if(femaleCount > 24){
            femaleCount = 0;
        }

        if (femaleCount < 10) {
            photoPath = '/assets/GIRL0' + femaleCount.toString() + '.png';
        }
        else {
            photoPath = '/assets/GIRL' + femaleCount.toString() + '.png';
        }
    }

    const path: string = './assets/GIRL01.png';

    const birthday: Date = new Date(today.getFullYear() - age, Math.round(this.getRandomNumber(1, 12)), Math.round(this.getRandomNumber(1, 28)));

    people.push({
        Address: propertyNum + " " + road + ", " + cityState,
        Age: age,
        Birthday: birthday,
        City: cityState,
        FirstName: firstName,
        LastName: lastName,
        Photo: path,
        Street: propertyNum + " " + road + ","
    });
}

this.data = people;

public getRandomNumber(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

public getRandomItem(array: any[]): any {
    const index = Math.round(this.getRandomNumber(0, array.length - 1));
    return array[index];
}

```

```razor
<DataGrid Height="100%" Width="100%"
    DefaultColumnMinWidth="120"
    AutoGenerateColumns="false"
    DataSource="DataSource">
    <TextColumn Field="FirstName" HeaderText="First Name" />
    <TextColumn Field="LastName" HeaderText="Last Name" />
    <ComboBoxColumn Field="City" />
    <TemplateColumn Field="Address" HeaderText="Address" CellUpdatingScript="onUpdatingAddressColumn" />
    <ImageColumn Field="Photo" HeaderText="Photo" />
    <NumericColumn Field="Age" HeaderText="Age" />
    <DateTimeColumn Field="Birthday" HeaderText="Date of Birth" />
</DataGrid>

// In JS file:
function onUpdatingAddressColumn(grid, args) {
    let content = args.content;
    let info = args.cellInfo;
    let item = info.rowItem;
    let span1 = null;
    let span2 = null;

    if (content.childElementCount === 0) {
        content.style.fontFamily = "Verdana";
        content.style.fontSize = "13px";
        content.style.verticalAlign = "center";
        content.style.lineHeight = "normal";
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.height = "100%";
        content.style.width = "100%";
        content.style.color = "rgb(24, 29, 31)";
        // stacking above elements in the content of grid's cell
        span1 = document.createElement("span");
        span2 = document.createElement("span");
        content.appendChild(span1);
        content.appendChild(span2);
    }
    else {
        span1 = content.children[0];
        span2 = content.children[1];
    }

    if (span1 && span2) {
        // updating elements in the content of grid's cell
        span1.textContent = item.Street;
        span2.textContent = item.City + ", " + item.Country;
    }
}

igRegisterScript("onUpdatingAddressColumn", onUpdatingAddressColumn, false);
```
