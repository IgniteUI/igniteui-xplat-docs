---
title: {Platform} {ComponentTitle} での編集と検証 - インフラジスティックス
_description: グリッドでユーザーの入力を検証し、{Platform} {ComponentTitle} の使用中に有効かどうかを通知します。デモと例をお試しください。
_keywords: {Platform} validation, {ProductName}, infragistics, {Platform} 検証, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
_language: ja
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} 編集と検証

`{ComponentName}` は、セル / 行の編集時にユーザー入力の検証メカニズムが組み込まれた編集機能を提供します。これはフォームの検証機能を拡張し、既知の機能と簡単に統合できるようにします。エディターの状態が変更されると、視覚的なインジケーターが編集されたセルに適用されます。

## 構成

### テンプレート駆動で構成する

{Platform} Forms 検証ディレクティブは、`Column` で直接動作するよう拡張されています。同じ検証が `Column` で宣言的に設定される属性として利用できます。以下の検証は追加設定なしでサポートされます。

- Required
- Min
- Max
- Email
- MinLength
- MaxLength
- Pattern

列入力が設定され、値がメールとして書式設定されることを検証するには、関連するディレクティブを使用できます。

```html
<igx-column [field]="email" [header]="User E-mail" required email></igx-column>
```

```html
<igc-column field="email" header="User E-mail" required="true" email="true"></igx-column>
```

以下のサンプルは、`{ComponentName}` に組み込み済みの `Required`、`Email` および `Min` 検証ディレクティブを使用する方法を示しています。

<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service"
           github-src="{ComponentSample}/data-validator-service"
           alt="{Platform} {ComponentTitle} 検証の基本例">
</code-view>

<!-- Angular -->

### リアクティブ フォームで構成する

`formGroupCreated` イベントを介して行/セルで編集を開始するときに検証に使用する `FormGroup` を公開します。関連するフィールドに独自の検証を追加して変更できます。

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

独自の検証関数を作成するか、[組み込みの {Platform} 検証関数](https://{Platform}.io/guide/form-validation#built-in-validator-functions)を使用できます。

<!-- end: Angular -->

## 検証サービス API

グリッドは、`Validation` プロパティを介して検証サービスを公開します。

このサービスには以下のパブリック API があります。

- `Valid` - グリッドの検証状態が有効であるかどうかを返します。
- `GetInvalid` - 無効な状態のレコードを返します。
- `Clear` - レコードの状態を ID でクリアします。ID が提供されない場合はすべてのレコードの状態をクリアします。
- `MarkAsTouched` - 関連するレコード / フィールドをタッチ済みとしてマークします。

無効な状態は、検証ルールに従って検証エラーが修正されるか、クリアされるまで保持されます。

## 検証トリガー

検証は以下のシナリオでトリガーされます。

- グリッドの `ValidationTrigger` に基づくセルエディターでの編集中。エディター入力中の変更時 (`Change`)、またはエディターがフォーカスを失うか (`Blur`) 閉じた場合。
- `UpdateRow`、`UpdateCell` などの API を使用してセル / 行を更新する場合 。
- トランザクション サービスの一括編集および `Undo`/`Redo` API を使用する場合。

> 注: ユーザー入力または編集 API で編集されていないレコードに対しては、検証はトリガーされません。セルの視覚的なインジケーターは、ユーザー操作または検証サービスの `MarkAsTouched` API を介して入力がタッチ済みと見なされる場合のみ表示されます。

<!-- Angular -->

## {Platform} {ComponentTitle} 検証のカスタマイズ オプション

### カスタム検証を設定する

テンプレート内の `Column` で使用する独自の検証ディレクティブを定義することができます。

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

定義して App モジュールに追加した以降、宣言的にグリッドの指定の列に設定できます。

```html
<igx-column phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b"></igx-column>
```

### デフォルトのエラー テンプレートを変更する

セルが無効な状態になったときにエラー ツールチップに表示されるカスタム エラー テンプレートを定義できます。これは、カスタム エラー メッセージを追加したり、メッセージの外観やコンテンツを変更したりする場合に便利です。

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

### 無効な状態での編集モードの終了を防止する

場合によっては、データ中の無効な値を送信しないようにしたいことがあります。その場合は、`CellEdit` または `RowEdit` イベントを使用し、新しい値が無効な場合にイベントをキャンセルできます。

いずれのイベントも引数には `Valid` プロパティがあり、これによってキャンセルできます。

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

### 例

以下の例は、上記のカスタマイズ オプションを示しています。

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-extended"
           github-src="{ComponentSample}/data-validator-service-extended"
           alt="{Platform} {ComponentTitle} カスタム検証の例">
</code-view>

### クロス フィールド検証

場合によっては、1 つのフィールドの検証がレコード内の別のフィールドの値に依存することがあります。

その場合、カスタム検証を使用して共有 `FormGroup` を介してレコード内の値を比較できます。

<!-- ComponentStart: Grid -->

以下のサンプルは、同じレコードの異なるフィールド間のクロスフィールド検証を示しています。レコードのアクティブな日付と作成日付とを現在の日付と比較した有効性、および各従業員の商談成立/失効を確認します。すべてのエラーは別のピン固定列に収集され、レコードが無効であることを示し、関連するエラーを表示します。

次のコード行は、比較を含み、それらに関連する関連エラーを設定するクロス フィールド検証関数を示しています。

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

クロス フィールド検証は、編集モードに入ったときに各行の新しい `FormGroup` を返す `FormGroupCreated` イベントから、その行の `FormGroup` に追加することができます。

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

異なるエラーはテンプレート セルに表示され、すべてのエラーは一つのツールチップに結合されます。行の有効状態に応じて、異なるアイコンが表示されます。

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

各列にはテンプレート化されたフォーム検証があり、カスタム `RowValidator` によって行ごとのエラーを確認するため、エラー メッセージ は各セルのエラーを収集する `StateMessage` 関数で収集されます。

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

以下のサンプルは、クロス フィールド検証の動作を示しています。

<code-view style="height:560px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-cross-field"
           github-src="{ComponentSample}/data-validator-service-cross-field"
           alt="{Platform} {ComponentTitle} クロス フィールド検証の例">
</code-view>


<!-- ComponentEnd:Grid -->

<!-- ComponentStart:HierarchicalGrid -->

クロス フィールド検証は、`FormGroupCreated` イベントで formGroup に追加できます。その中で複数のフィールドの有効状態を比較できます。

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

複数フィールド エラーは別の固定列に表示できます。

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

エラーと詳細メッセージは、行とセルの有効性に基づいて決定できます。

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

以下のサンプルは、ルート データと子データの両方について、`{ComponentName}` でのクロス フィールド検証を示しています。

<code-view style="height:530px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-cross-field"
           github-src="{ComponentSample}/data-validator-service-cross-field"
           alt="{Platform} {ComponentTitle} クロス フィールド検証の例">
</code-view>

<!-- ComponentEnd:HierarchicalGrid -->

<!-- ComponentStart:TreeGrid -->

以下のサンプルは、同じレコードの異なるフィールド間のクロスフィールド検証を示しています。ある人に指定された City が現在設定されている Country にあるかどうか、およびその逆を確認します。また、ある人が雇用されたときにその人が 18 歳かどうかも確認します。

次のコード行はクロス フィールド検証関数を示しています。この関数は上記の比較を含み、関連するエラーを設定します。

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

クロス フィールド検証は、編集モードに入ったときに各行の新しい `FormGroup` を返す `FormGroupCreated` イベントから、その行の `FormGroup` に追加することができます。

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

異なるエラーはテンプレート セルに表示され、すべてのエラーは一つのツールチップに結合されます。行の有効状態に応じて、異なるアイコンが表示されます。

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

各列にはテンプレート化されたフォーム検証があり、カスタム `RowValidator` によって行ごとのエラーを確認するため、エラー メッセージ は各セルのエラーを収集する `StateMessage` 関数で収集されます。

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

以下のサンプルは、クロス フィールド検証の動作を示しています。

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validator-service-cross-field"
           github-src="{ComponentSample}/data-validator-service-cross-field"
           alt="{Platform} {ComponentTitle} クロス フィールド検証の例">
</code-view>

<!-- ComponentEnd:TreeGrid -->

## スタイル設定

[{ProductName} テーマ ライブラリ](../themes/index.md)を使用して、編集時のデフォルトの検証スタイルを変更できます。

以下の例では、検証メッセージの公開されたテンプレートを使用します。ツールチップをポップアウトし、および、検証のデフォルトの外観を変更するためにエラー時の色をオーバーライドします。
また、無効な行をより明確にするために背景のスタイルを設定します。

### テーマのインポート

スタイルを設定し、css 変数にアクセスする最も簡単な方法は、`app` のグローバル スタイル ファイル (通常 は `styles.scss` です) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、{ProductName} Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

### スタイルを含める
エラーの色を変更するには、css 変数 `--igx-error-500` を使用します。
```scss
--igx-error-500: 34, 80%, 63%;
```

### カスタム テンプレート
デフォルトのエラー テンプレートを変更することで、カスタム クラスとスタイルを設定できます。
```html
<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
    <div class="validator-container">
        <ng-container *ngTemplateOutlet="defaultErr">
        </ng-container>
    </div>
</ng-template>
```

### 無効な行とセルのスタイル

行とセルは、開発者が行またはセルが無効かどうか、およびアクティブなエラーの種類を知るための API を提供します。
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


### デモ

<code-view style="height:560px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-validation-style"
           github-src="{ComponentSample}/data-validation-style">
</code-view>

<!-- end: Angular -->

## API リファレンス

* `BaseTransactionService`
* `{ComponentName}`
* `Column`


## その他のリソース

<!-- Angular -->

* [igxGrid で CRUD 操作を構築する](../general/how-to/how-to-perform-crud.md)

* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} 行の編集](row-editing.md)
* [{ComponentTitle} 行の追加](row-adding.md)
* [{ComponentTitle} トランザクション](batch-editing.md)

<!-- end: Angular -->

<!-- Blazor -->


* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} 行の編集](row-editing.md)
* [{ComponentTitle} 行の追加](row-adding.md)
* [{ComponentTitle} トランザクション](batch-editing.md)

<!-- end: Blazor -->

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
