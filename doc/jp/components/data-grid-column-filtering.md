---
title: $PlatformShort$ データ グリッド | フィルタリング | インフラジスティックス
_description: インフラジスティックスの $ProductName$ グリッド コンポーネントを使用して表現的なソート条件を実行し、データを簡単に返します。詳細については、$ProductName$ テーブルのサンプルを参照してください。
_keywords: $PlatformShort$ Table, Data Grid, column, filtering, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 列, フィルタリング, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $PlatformShort$ グリッド フィルターの概要

$PlatformShort$ Data Table / Data Grid には、フィルター処理される列のデータ型に基づいてソート条件を実行する機能を提供する列フィルター API が含まれています。

## サンプル

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/column-filtering"></sample-button>

<div class="divider--half"></div>

## コード スニペット

<!-- Angular, React, WebComponents -->
FilterExpression と FilterFactory をインポートして、フィルターのコレクションを作成できるようにします。
<!-- end: Angular, React, WebComponents -->

<!--WebComponents-->
```ts
import { FilterExpression } from 'igniteui-webcomponents-core';
import { FilterFactory } from 'igniteui-webcomponents-core';
```

<!--React-->
```ts
import { FilterExpression } from 'igniteui-react-core';
import { FilterFactory } from 'igniteui-react-core';
```

フィルターのコレクションに追加するための FilterExpression を作成します。

<!--React-->
```ts
public grid: IgrDataGrid;
public filterText: string = "New York";
public filterMode: string = "Contains";
public filterColumn: string = "City";
public filterFactory: FilterFactory;
// ...
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    this.applyFilter();
}

public onFilterTextChanged = (e: any) => {
    this.filterText = e.target.value;
    this.setState({filterText: e.target.value});
    this.applyFilter();
}

public onFilterModeChanged = (e: any) => {
    this.filterMode = e.target.value;
    this.setState({filterMode: e.target.value});
    this.applyFilter();
}

public onFilterColumnChanged = (e: any) => {
    this.filterColumn = e.target.value;
    this.setState({filterColumn: e.target.value});
    this.applyFilter();
}

public applyFilter()
{
    if (this.filterText === "") {
        return;
    }

    this.filterFactory = new FilterFactory();

    const expression = this.filterText.toUpperCase();
    const column = this.filterFactory.property(this.filterColumn).toUpper();

    let filter: FilterExpression;
    if (this.filterMode === "Contains")
    {
        filter = column.contains(expression)
    }
    else if (this.filterMode === "StartsWith")
    {
        filter = column.startsWith(expression);
    }
    else // if (this.filterMode === "EndsWith")
    {
        filter = column.endsWith(expression);
    }

    this.grid.filterExpressions.clear();
    this.grid.filterExpressions.add(filter);
}
```
<!--WebComponents-->
```ts
private grid: IgcDataGridComponent;
private filterText : string = "";
private filterMode : string = "Contains";
private filterColumn : string = "Name";
private filterFactory : FilterFactory;
// ...

 this.grid = document.getElementById("grid") as IgcDataGridComponent;

document.getElementById("filterColumnDropDown").addEventListener("change", this.onFilterColumnDropDownValueChanged);
document.getElementById("filterModeDropDown").addEventListener("change", this.onFilterModeDropDownValueChanged);
document.getElementById("filterTextBox").addEventListener("change", this.onFilterTextBoxTextChanged);

 public onFilterColumnDropDownValueChanged() {
        let dropDown = document.getElementById("filterColumnDropDown") as any;
        this.filterColumn = dropDown.value;
        this.applyFilter();
    }

    public onFilterModeDropDownValueChanged() {
        let dropDown = document.getElementById("filterModeDropDown") as any;
        this.filterMode = dropDown.value;
        this.applyFilter();
    }

    public onFilterTextBoxTextChanged() {
        let textBox = document.getElementById("filterTextBox") as any;
        this.filterText = textBox.value;
        this.applyFilter();
    }

    public applyFilter(){
        this.grid.filterExpressions.clear();
        if (this.filterText === "" || this.filterText === null) {
            return;
        }

        this.filterFactory = new FilterFactory();
        const expression = this.filterText.toUpperCase();
        const column = this.filterFactory.property(this.filterColumn).toUpper();

        let filter: FilterExpression;
        if (this.filterMode === "Contains")
        {
            filter = column.contains(expression)
        }
        else if (this.filterMode === "StartsWith")
        {
            filter = column.startsWith(expression);
        }
        else // if (this.filterMode === "EndsWith")
        {
            filter = column.endsWith(expression);
        }

        this.grid.filterExpressions.add(filter);
    }
```

```razor
<DataGrid Height="100%" Width="100%"
          @ref="DataGridRef"          
          DataSource="DataSource" />

@code {
    
    public DataGrid DataGridRef;

    public string FilterText = "";
    public string FilterMode = "Contains";
    public string FilterColumn = "Name";

    public FilterFactory FilterFactory = new FilterFactory();

    protected override void OnInitialized()
    {
        base.OnInitialized();
        DataGridModule.Register(IgniteUIBlazor);
        GridColumnOptionsModule.Register(IgniteUIBlazor);
        GridColumnFilterOptionsModule.Register(IgniteUIBlazor);        
    }

    public void OnFilterTextChanged(ChangeEventArgs e)
    {
        this.FilterText = e.Value.ToString();
        this.ApplyFilter();
    }

    public void OnFilterModeChanged(ChangeEventArgs e)
    {
        this.FilterMode = e.Value.ToString();
        this.ApplyFilter();
    }

    public void OnFilterColumnChanged(ChangeEventArgs e)
    {
        this.FilterColumn = e.Value.ToString();
        this.ApplyFilter();
    }

    public void ApplyFilter()
    {
        this.DataGridRef.FilterExpressions.Clear();

        if (this.FilterText == "")
        {
            return;
        }

        string expression = this.FilterText.ToUpper();

        FilterExpression column = this.FilterFactory.Property(this.FilterColumn).ToUpper();

        FilterExpression filter = new FilterExpression();

        switch (this.FilterMode)
        {
            case "Contains":
                {
                    filter = column.Contains(expression);
                    break;
                }
            case "StartsWith":
                {
                    filter = column.StartsWith(expression);
                    break;
                }
            case "EndsWith":
                {
                    filter = column.EndsWith(expression);
                    break;
                }
        }

        this.DataGridRef.FilterExpressions.Add(filter);

        StateHasChanged();
    }
}
```