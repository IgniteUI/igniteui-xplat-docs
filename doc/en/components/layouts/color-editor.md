---
title: {Platform} Color Editor | Color Editor | Infragistics
_description: Color Editor component provides an easily configurable option to change colors for any desirable component or aspect of your application.
_keywords: {Platform} Color Editor, {ProductName}, Infragistics
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
---

# {Platform} Color Editor Overview (preview)
The {ProductName} Color Editor is a lightweight color picker component. The Color Editor can pop open by clicking the eyedrop icon. Both the rgba and hex values can be obtained from the desired color along the bottom. These values will update when the three sliders are modified. The center box is designed for adjusting the saturation and brightness along with two adjacent sliders for adjusting the rgb and luminance values. Rgb registers between (1-255). The lightness registers between(0-1).

## {Platform} Color Editor Example

`sample="/layouts/color-editor/overview", height="320", alt="{Platform} Color Editor Example"`

<div class="divider--half"></div>

## Dependencies

<!-- Angular, WebComponents, React -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageCore}
npm install {PackageInputs}
```

Before using the `ColorEditor`, you need to register the following modules as follows:

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

First, add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

The following modules are required when using the Dashboard Tile component:

```razor
// in Program.cs file
builder.Services.AddIgniteUIBlazor(
    typeof(IgbColorEditorModule)
);
```

<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

## Usage

The simplest way to start using the `ColorEditor` is as follows:

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

## Binding to events

The Color Editor component raises the following events:

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

## API References

 - `ColorEditor`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})