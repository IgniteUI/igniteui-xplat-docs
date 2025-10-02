---
title: {Platform} Stepper Component - {ProductName}
_description: {Platform} Stepper component is used to visualize content as a process and to show its progress by dividing the content into logical steps. Try it for FREE.
_keywords: {Platform} Stepper, {ProductName}, Infragistics
mentionedTypes: ["Stepper"]
---

# {Platform} Stepper Overview
The {Platform} Stepper Component provides a wizard-like workflow and is used for showing progress through numbered steps. It enables developers to divide a lengthy content into a sequence of logical steps, helping end-users more easily navigate the entire process. The {Platform} Stepper is displayed as a vertical or a horizontal line. The {Platform} Stepper has multiple features like step validation, styling, orientation and keyboard navigation.

## {Platform} Stepper Example

The following {ProductName} Stepper Example below shows the component in action. It visualizes the process that an end-user must pass through to configure an order details, following several consecutive steps.

`sample="/layouts/stepper/linear", height="430", alt="{Platform} Linear Stepper Example"`

<div class="divider--half"></div>

## Getting Started with {Platform} Stepper

<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Stepper`, you need to register it as follows:

```ts
import { defineComponents, IgcStepperComponent } from 'igniteui-webcomponents';

defineComponents(IgcStepperComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Stepper` and its necessary CSS, like so:

```tsx
import { IgrStepper, IgrStep } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->
```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbStepperModule)
);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Stepper` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

Now you can start with a basic configuration of the {Platform} `Stepper` and its steps.

## How To Use {Platform} Stepper
The `Step` is the representation of every step that belongs to the `Stepper`. Steps provide `Step.Invalid`, `Step.Active`, `Step.Optional`, `Step.Disabled` and `Step.Complete` properties, which give you the ability to configure the step states according to your business requirement.

### Declaring {Platform} Stepper
Steps can be declared using one of the following approaches.
- Iterating through a data set

```html
<igc-stepper>
    ${stepsData.map((step) => html`
    <igc-step .disabled=${step.disabled}>
        <div slot="indicator">
            <igc-icon .iconName=${step.indicator}></igc-icon>
        </div>

        <p slot="title">${step.title}</p>
    </igc-step>
    `
</igc-stepper>
```

```razor
<IgbStepper>
    @foreach (var item in this.StepsData)
    {
        <IgbStep Disabled="@item.Disabled">
          <p slot="title">@item.Title</p>
        </IgbStep>
    }
</IgbStepper>
```

```tsx
<IgrStepper>
    {this.StepsData.map(item => 
        <IgrStep key={item.title} disabled={item.disabled}>
            <p slot="title">{item.title}</p>
        </IgrStep>
    }
</IgrStepper>
```

- Creating static steps

```html
<igc-stepper>
    <igc-step>
       <p slot="title">Step 1</p>
    </igc-step>
    <igc-step>
       <p slot="title">Step 2</p>
    </igc-step>
</igc-stepper>
```

```razor
<IgbStepper>
    <IgbStep>
       <p slot="title">Step 1</p>
    </IgbStep>
     <IgbStep>
       <p slot="title">Step 2</p>
    </IgbStep>
</IgbStepper>
```

```tsx
<IgrStepper>
    <IgrStep>
       <p slot="title">Step 1</p>
    </IgrStep>
     <IgrStep>
       <p slot="title">Step 2</p>
    </IgrStep>
</IgrStepper>
```
For each step the user has the ability to configure indicator, title and subtitle using the `Indicator`, `Title` and `Subtitle` slots as follows:

> [!Note]
> The `Default` `Step` slot renders the content of the step.

```html
<igc-stepper>
    <igc-step>
       <igc-icon slot="indicator" iconName="home"></igc-icon>
       <p slot="title">Home</p>
       <p slot="subtitle">Home Sub Title</p>
       <div>
          Step Content
       </div>
    </igc-step>
</igc-stepper>
```

```razor
<IgbStepper>
    <IgbStep>
       <IgbIcon slot="indicator" IconName="home" Collection="material" />
       <p slot="title">Home</p>
       <p slot="subtitle">Home Sub Title</p>
       <div>
          Step Content
          ...
       </div>
    </IgbStep>
</IgbStepper>
```

```tsx
<IgrStepper>
    <IgrStep>
        <IgrIcon slot="indicator" name="home" collection="material" />
        <p slot="title">Home</p>
        <p slot="subtitle">Home Sub Title</p>
        <div>
            Step Content
            ...
        </div>
    </IgrStep>
</IgrStepper>
```
<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 500px" src="../../images/stepper/stepper-step.png"/>

### Orientation in {Platform} Stepper
You can customize the stepper orientation through the exposed `Orientation` property. It could be set to **horizontal** *(default value)* or **vertical**.

**Horizontal Stepper Orientation**

*horizontal* is the default value for the `Stepper` orientation property.
When the {Platform} stepper is horizontally orientated you have the opportunity to determine whether the steps’ content would be displayed above or below the steps’ headers. This could be achieved by setting the `Stepper` `ContentTop` boolean property, which default value is *false*. In case it is enabled the steps’ content would be displayed above the steps’ headers.

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 800px"  src="../../images/stepper/stepper-contentTop.png"/>

**Vertical Stepper Orientation**

You can easily switch from the horizontal to vertical layout. In order to change the default orientation you should set the `Orientation` property to *vertical*.

The sample below demonstrates how stepper orientation and titles position could be changed runtime.

`sample="/layouts/stepper/orientation", height="528", alt="{Platform} Stepper Orientation Example"`



<div class="divider--half"></div>

### Step States
{Platform} `Stepper` supports five steps states and each of them apply different styles by default:
- **active** - Determines whether the step is the currently displayed. By design, if the user does not explicitly set some step’s active attribute to *true*, the initial active step would be the first non-disabled step.
- **disabled** - Determines whether the step is intractable. By default, the disabled attribute of a step is set to *false*.
- **invalid** - Determines whether the step is valid. Based on its value it is decided whether the user will have the ability to move forward in linear stepper mode. Its default value is *false*.
- **optional** - By default, the optional attribute of a step is set to *false*. If validity of a step in linear stepper is not required, then the optional attribute can be enabled in order to be able to move forward independently from the step validity.
- **complete** - By default, the complete attribute of a step returns *false*. The user, however, can override this default complete behavior by setting the complete attribute as needed. When step is marked as complete not only that the style of the step header is changed by default, but also the style of the progress line between the completed step and the next one.

### Linear {Platform} Stepper

The {Platform} `Stepper` gives you the opportunity to set its steps flow using the `Linear` property. By default, linear is set to *false* and the user is enabled to select any non-disabled step in the `Stepper`.


```html
<igc-stepper linear="true">
    <igc-step>
       <p slot="title">Step 1</p>
    </igc-step>
    <igc-step>
       <p slot="title">Step 2</p>
    </igc-step>
</igc-stepper>
```

```razor
<IgbStepper Linear="true">
    <IgbStep>
       <p slot="title">Step 1</p>
    </IgbStep>
     <IgbStep>
       <p slot="title">Step 2</p>
    </IgbStep>
</IgbStepper>
```

```tsx
<IgrStepper linear={true}>
    <IgrStep>
       <p slot="title">Step 1</p>
    </IgrStep>
     <IgrStep>
       <p slot="title">Step 2</p>
    </IgrStep>
</IgrStepper>
```

When the linear property is set to *true*, the stepper will require the current non-optional step to be valid before proceeding to the next one.

If the current non-optional step is not valid you cannot go forward to the next step until you validate the current one.

> [!Note]
> Optional steps validity is not taken into account in order to move forward.

### Step Interactions

`Stepper` provides the following API methods for step interactions:
- **navigateTo** – activates the step by given index.
- **next** - activates the next non-disabled step.
- **prev** – activates the previous non-disabled step.
- **reset** – resets the stepper to its initial state.

> [!Note]
> The reset method would reset the stepper to its initial state, i.e. activates the first step. It would not clear the step`s content. This should be done manually.

### Customizing the Steps

The {ProductName} Stepper gives you the ability to configure different options for titles, indicators and more.

This could be achieved through the `StepType` property of the `Stepper`. It takes the following values:
- Full *(default value)*
- Indicator
- Title

**Full**

If titles and subtitles are defined, with this setup both indicators and titles would be rendered.

The user would also have the ability to define the position of the title for the steps, so it could be placed before, after, above or below the step indicator.
The user can configure the title position using the `TitlePosition` property. It takes the following values:
- undefined *(default value)*
- end
- start
- bottom
- top

When the {Platform} `Stepper` is horizontally orientated and the title position **is not defined**, the titles would be displayed *below* the indicators.

When the orientation is set to vertical and the title position **is not defined**, the titles would be displayed *after* the indicators.

> [!Note]
> **titlePosition** property is applicable **only** when the stepper stepType property is set to *full*.

**Indicator**

If you want to display only indicators for the steps, set the stepType option to *indicator*.

The step indicator supports any content, however with the restriction that its size would be always **24 pixels**. Having this in mind, we recommend using `Icon` or `Avatar` as step indicators.

**Title**

If you want to display only titles for the steps, set the stepType option to *title*.

In this way if subtitles are defined, they will also be rendered below the step title.

> [!Note]
> This container could be re-templated as per your requirement without any size restrictions. For example, you could add an indicator with size greater than 24 pixels inside it.

The sample below demonstrates all exposed step types and how they could be changed:

`sample="/layouts/stepper/steptypes", height="300", alt="{Platform} Step Types Example"`

<div class="divider--half"></div>

### Stepper Animations

The {Platform} `Stepper` Animations provide the end-users with a beautiful experience interacting with the defined steps. The available animation options differ depending on the orientation of the stepper.

When the stepper is horizontally orientated, it is configured to use the `slide` animation by default. It also supports `fade` as an alternative. The animations are configured through the `HorizontalAnimation` input.

In a vertically orientated layout, the animation type could be defined using the `VerticalAnimation` property. By default, its value is set to `grow` and the user has the ability to set it to `fade` as well.

Setting `none` to both animation type inputs disables stepper animations.

The `Stepper` component also gives you the ability to configure the duration of the transition between the steps. This could be achieved through the `animationDuration` property, which takes a number as an argument and it is common to both orientations. The default value is set to 320ms.

`sample="/layouts/stepper/animations", height="600", alt="{Platform} Stepper Animations Example"`

<div class="divider--half"></div>

## Keyboard Navigation

The {ProductName} Stepper provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the steps.
The {Platform} `Stepper` navigation is compliant with [W3 accessability standards](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/) and convenient to use.

**Key Combinations**

 - <kbd>TAB</kbd> - moves the focus to the next tabbable element
 - <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - moves the focus to the previous tabbable element
 - <kbd>↓</kbd> - moves the focus to the header of the next accessible step when the stepper is **vertically orientated**
 - <kbd>↑</kbd> - moves the focus to the header of the previous accessible step when the stepper is **vertically orientated**
 - <kbd>←</kbd> - moves the focus to the header of the previous accessible step in both orientations
 - <kbd>→</kbd> - moves the focus to the header of the next accessible step in both orientations
 - <kbd>HOME</kbd> - moves the focus to the header of the FIRST enabled step in the stepper
 - <kbd>END</kbd> - moves the focus to the header of the LAST enabled step in the stepper
 - <kbd>ENTER</kbd> or <kbd>SPACE</kbd> - activates the currently focused step

## Styling {Platform} Stepper

You can change the appearance of the `Step`, by using some of the exposed CSS parts listed below:

| Part name | Description |
| ---------|------------ |
| `header-container` | Wrapper of the step's header and its separators. |
| `disabled` | Indicates a disabled state. Applies to header-container. |
| `complete-start` | Indicates a complete state of the current step. Applies to header-container. |
| `complete-end` | Indicates a complete state of the previous step. Applies to header-container. |
| `optional` | Indicates an optional state. Applies to header-container. |
| `invalid` | Indicates an invalid state. Applies to header-container. |
| `top` | Indicates that the title should be above the indicator. Applies to header-container. |
| `bottom` | Indicates that the title should be below the indicator. Applies to header-container. |
| `start` | Indicates that the title should be before the indicator. Applies to header-container. |
| `end` | Indicates that the title should be after the indicator. Applies to header-container. |
| `header` | Wrapper of the step's indicator and text. |
| `indicator` | The indicator of the step. |
| `text` | Wrapper of the step's title and subtitle. |
| `empty` | Indicates that no title and subtitle has been provided to the step. Applies to text. |
| `title` | The title of the step. |
| `subtitle` | The subtitle of the step. |
| `body` | Wrapper of the step's content. |
| `content` | The steps content. |

Using these CSS parts we can customize thе appearance of the `Stepper` component like this:

```css
igc-step::part(title) {
  color: var(--ig-primary-500);
}
igc-step[active]::part(indicator) {
  background-color: var(--ig-primary-500);
}
igc-step::part(indicator) {
  background-color: var(--ig-surface-500);
}
```

`sample="/layouts/stepper/styling", height="300", alt="{Platform} Stepper Styling Example"`

<div class="divider--half"></div>

## API References

- `Stepper`
- `Step`
- `Avatar`
- `Icon`
- [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
