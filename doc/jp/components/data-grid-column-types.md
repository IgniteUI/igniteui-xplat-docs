---
title: $PlatformShort$ データ グリッド | 列タイプ | インフラジスティックス
_description: インフラジスティックスの $ProductName$ データ テーブルとグリッドは、画像、テキスト、数値、日付列、テンプレート列などのコンテンツを表示する 4 つの列タイプをサポートします。$ProductName$ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ Table, Data Grid, column types, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 列タイプ, インフラジスティックス
mentionedTypes: ['CellInfo', 'TemplateCellInfo', 'Column', 'XamDataGrid']
_language: ja
---

# $PlatformShort$ 列タイプ

$ProductName$ Data Table / Data Grid は、データを $PlatformShort$ データ グリッドに表示する方法を 5 つの列タイプとテンプレート列タイプから選択できます。サポートされている列タイプは、Text 列、Numeric 列、DateTime 列、Image 列、ComboBox および Template です。

各列は、`Field` プロパティを、グリッドにバインドされた基になる データソースの項目の対応するプロパティの名前に設定することによって $PlatformShort$ データ グリッドにバインドします。

## $PlatformShort$ 列タイプの例


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-types" 
           alt="$PlatformShort$ 列タイプの例" 
           github-src="grids/data-grid/column-types">
</code-view>

<div class="divider--half"></div>

## テキスト列

$PlatformShort$ データ グリッド は、関連付けられたセルに書式設定されたテキストを表示するために使用されます。これは、string 型のデータを表示するために使用されるデフォルトの列型です。

## 数値列

`NumericColumn` は、関連付けられたセルに書式設定された数値を表示するために使用され、セル内の小数点以下の桁数の制御と小数桁の表示を可能にします。

## DateTime 列

`DateTimeColumn` は、関連付けられたセルに Date オブジェクトを表示するために使用され、Date オブジェクトを適切に表示する方法をコントロールで制御できます。

## 画像列

`ImageColumn` はセル内に画像を表示するために使用され、その `ImageStretchOption` オプションを使用してセルの画像ストレッチカスタマイズのためのオプションを公開します。

`ImageResourceType` オプションを設定して、イメージのリソースの種類を選択することもできます。

## コンボボックス列

`ComboBoxColumn` は、エンドユーザーが単一の項目を選択できるドロップダウン リストを表示するために使用されます。

データ バインディングは、列の `DataSource` プロパティで複合オブジェクトの配列を使用して実現できます。

`TextField` プロパティはユーザーが選択を行うときに表示する値を決定します。

`ValueField` プロパティは選択された基本データ項目のバインド値を決定します。オブジェクトのリストに複数のプロパティがある場合に必要です。

## テンプレート列

`TemplateColumn` はセルテンプレートと共に使用されます。カスタム テンプレートを列のセルに適用することができます。これは、テンプレート列の `CellUpdating` イベントを処理することによって行われます。

`CellUpdating` イベントの引数は、イベントを発生させる `TemplateColumn` と `TemplateCellUpdatingEventArgs` パラメーターを公開します。このイベント引数パラメーターは、列の関連付けられたセル内に配置される HTMLDivElement を返す `Content` プロパティを公開します。その後、この div に新しい要素を追加することができます。

`TemplateCellUpdatingEventArgs` は、`TemplateCellInfo` オブジェクトを取得するために使用できる `CellInfo` プロパティも公開しています。このオブジェクトは、インデックス、基になるデータ項目、セルの外観など、セルと行に関する情報を公開します。

## スパークライン列

Sparkline コンポーネントを `TemplateColumn` に埋め込み、より複雑なデータ構造を表示できます。
この方法の詳細については、[列スパークライン](data-grid-type-sparkline-table.md) トピックを参照してください。

## コード スニペット

以下は、このトピックで説明されている各列の実装を示します。

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

以下は、上記の列で使用するサンプルデータソースです。

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
