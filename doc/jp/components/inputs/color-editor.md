---
title: {Platform} Color Editor | カラー エディター | インフラジスティックス
_description: Color Editor コンポーネントは、アプリケーションの任意のコンポーネントまたは側面の色を変更するための、簡単に構成可能なオプションを提供します。
_keywords: {Platform} Color Editor, {ProductName}, {Platform} カラー エディター, インフラジスティックス
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} Color Editor (カラー エディター) の概要 <label>PREVIEW</label>

{ProductName} Color Editor は軽量のカラー ピッカー コンポーネントです。Color Editor は、ブラッシ アイコンをクリックすると開きます。RGBA 値と 16 進値の両方を、下部にある目的の色から取得できます。これらの値は、3 つのスライダーが変更されると更新されます。中央のボックスは、彩度と明度を調整するために設計されており、隣接する 2つ のスライダーで rgb 値と輝度値を調整できます。RGB は (1～255) の範囲で登録されます。明度は (0～1) の範囲で登録されます。

## {Platform} Color Editor の例

`sample="/inputs/color-editor/overview", height="320", alt="{Platform} Color Editor の例"`

<div class="divider--half"></div>

## 依存関係

<!-- Angular, WebComponents, React -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageCore}
npm install {PackageInputs}
```

`ColorEditor` を使用する前に、次のモジュールを登録する必要があります:

```ts
import { IgcColorEditorModule } from "igniteui-angular-inputs";

@NgModule({
    imports: [
        IgcColorEditorModule
    ]
})
export class AppModule {}
```

```ts
import { IgcColorEditorModule, IgcColorEditorComponent } from 'igniteui-webcomponents-inputs';

ModuleManager.register(
    IgcColorEditorModule
);
```

```tsx
import { IgrColorEditor, IgrColorEditorModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrColorEditorModule.register();
```

<!-- end:Angular, WebComponents, React -->

<!-- Blazor -->

ます、**IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

Dashboard Tile コンポーネントを使用する場合、以下のモジュールが必要です:

```razor
// in Program.cs file
builder.Services.AddIgniteUIBlazor(
    typeof(IgbColorEditorModule)
);
```

<!-- end: Blazor -->

## 使用方法

`ColorEditor` の使用を開始する最も簡単な方法は次のとおりです:

<!-- Angular -->
```html
<igx-color-editor
    name="colorEditor"
    #colorEditor>
    </igx-color-editor>
</div>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-color-editor
    name="colorEditor"
    id="colorEditor">
</igc-color-editor>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<IgrColorEditor
    ref={this.colorEditorRef}>
</IgrColorEditor>
```
<!-- end:React -->

<!-- Blazor -->
```razor
<IgbColorEditor>
</IgbColorEditor>
```
<!-- end:Blazor -->

## イベントにバインド

Color Editor コンポーネントは、次のイベントを発生させます:

- valueChanged
- valueChanging

<!-- Angular -->
```ts
@ViewChild("colorEditor", { static: true } )
private colorEditor: IgxColorEditorComponent
public ngAfterViewInit(): void 
{	
    this.colorEditor.valueChanged.subscribe(this.onValueChanged);
}

public onValueChanged = (e: any) => {
    console.log("test");
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```ts
this.OnValueChanged = this.OnValueChanged.bind(this);
this.colorEditor = document.getElementById('colorEditor') as IgcColorEditorComponent;
this.colorEditor.valueChanged = this.OnValueChanged;
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbColorEditor ValueChanged="@OnValueChanged" />

@code {
    public void OnValueChanged(IgbColorEditorPanelSelectedValueChangedEventArgs e)
    {

    }
}
```
<!-- end:Blazor -->

<!-- React -->
```tsx
<IgrColorEditor valueChanged={this.onValueChanged} />

public onValueChanged(calendar: IgrColorEditor, e: IgrColorEditorPanelSelectedValueChangedEventArgs) {

}
```
<!-- end: React -->

<div class="divider--half"></div>

## API リファレンス

 - `ColorEditor`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})