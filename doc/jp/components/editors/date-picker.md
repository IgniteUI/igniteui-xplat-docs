---
title: $PlatformShort$ 日付選択 | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$日付選択コンポーネントは、ユーザーの日付選択を支援します。Ignite UI for $PlatformShort$ でグラフと視覚化を改善します!
_keywords: $PlatformShort$ date picker, drop down, $ProductName$, Infragistics, 日付選択, ドロップダウン, インフラジスティックス
mentionedTypes: ['DatePicker']
_language: ja
---
# $PlatformShort$ 日付選択の概要

日付選択コンポーネントは、ドロップダウン カレンダー UI を使用して日、月、年を直感的に選択できます。これは、アプリケーション ユーザーが特定の日付を選択する必要があり、複数のエディターを組み合わせて日付範囲 UI を作成する場合に便利です。

## $PlatformShort$ 日付選択の例


<code-view style="height: 300px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/editors/date-picker-overview" 
           alt="$PlatformShort$ 日付選択の例" 
           github-src="editors/date-picker/overview">
</code-view>

<!-- React, WebComponents -->
## 依存関係
日付選択コンポーネントをインストールするときに core と input のパッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageInputs}
</pre>
<!-- end: React, WebComponents -->

## モジュールの要件

日付選択コンポーネントを使用するには、以下のモジュールを登録する必要があります。

```razor
DatePickerModule.Register(IgniteUIBlazor);
```

```ts
import { IgrDatePickerModule } from 'igniteui-react-inputs';

IgrDatePickerModule.register();
```

```ts
import { IgcDatePickerModule } from 'igniteui-webcomponents-inputs';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcDatePickerModule);
```

<div class="divider--half"></div>

## 使用方法

$PlatformShort$ 日付選択エディター コンポーネントは、デフォルトでは、テキスト領域、カレンダー ドロップダウン ボタン、およびクリア ボタンの 3 つの構成されます。これらの領域について以下に説明します。

- テキスト領域: エディターの `Value` プロパティに保存されている選択した日付を表示します。

- カレンダー: カレンダー ボタンをクリックすると、日付選択のカレンダー ドロップダウンが開きます。カレンダーが開き、現在選択されている `Value` の月が表示されます。`Value` が指定されていない場合、カレンダーは現在の日付に対応する月を表示します。上部の月をクリックすると、月のリストが表示され、年も同様です。月と年の可視化の左右にある矢印ボタンは、表示されている月を時系列で増減します。カレンダー ボタンの色を変更するには、コントロールの `IconColor` プロパティを設定します。

- クリア ボタン: クリア ボタンはカレンダー ボタンのすぐ左にあり、X で表示されます。クリックすると、日付選択の `Value` をクリアします。クリア ボタンの表示/非表示は、日付選択の `ShowClearButton` プロパティを設定して切り替えることができます。

ユーザーは、コントロールのさまざまなテキスト プロパティを使用して日付選択のフォントをカスタマイズできます。使用できるプロパティは `TextColor`、`TextFontFamily`、`TextFontSize`、`TextFontStyle`、および `TextFontWeight` です。

### Setting Initial Value

以下のコードは、`DatePicker` コンポーネントの値を追加および設定する方法を示します。

```tsx
public render(): JSX.Element {
    return (                 
        <IgrDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />            
    );
}

public onDatePickerRef(datePicker: IgrDatePicker){
    datePicker.value = new Date(Date.now());
}
```

<!-- WebComponents -->
```html
<igc-date-picker id="datePicker" height="50px" width="220px">
</igc-date-picker>
```

```ts
constructor() {
    let datePicker = document.getElementById("datePicker") as IgcDatePickerComponent;
    this.datePicker.value = new Date(Date.now());        
}
```
<!-- end:WebComponents -->

```razor                
<DatePicker Height="50px" Width="220px" Value="@SelectedDate" />

@code {    
    public DateTime SelectedDate { get; set; }

    protected override void OnInitialized()
    {
        DatePickerModule.Register(IgniteUIBlazor);
        this.SelectedDate = DateTime.Today;   
    }
}
```

### カスタマイズ

以下のコードは、アイコンの色を設定し、クリア ボタンを非表示にして、`DatePicker` コンポーネントをカスタマイズする方法を示します。

```tsx
public render(): JSX.Element {
    return (                 
        <IgrDatePicker height="50px" width="220px" showClearButton={false} iconColor="red" />
    );
}
```

<!-- WebComponents -->
```html
  <igc-date-picker id="datePicker" height="50px" width="220px"
        show-clear-button="false"
        icon-color="red">
  </igc-date-picker>
```

<!-- end:WebComponents -->

```razor                
<DatePicker Height="50px" Width="220px" IconColor="Red" ShowClearButton="false" />

@code {    
    
    protected override void OnInitialized()
    {
        DatePickerModule.Register(IgniteUIBlazor);        
    }
}
```
