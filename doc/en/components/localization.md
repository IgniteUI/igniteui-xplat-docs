---
title: Localization (i18n) | {ProductName} | Infragistics
_description: Use Infragistics' {Platform} Localization for components to easily translate and localize fully Infragistics' {Platform} components
_keywords: {ProductName}, Infragistics, Localization, Internationalization, i18n
mentionedTypes: ["Grid"]
---

# {Platform} Localization (i18n)

With our new localization we introduce more features with less requirements for both our localization strings and formatting for all available locales. The formatting is now based on the standards introduced by the `Intl` API.

Currently, {ProductName} ships with resource strings for the following languages: `Bulgarian`, `Czech`, `Danish`, `Dutch`, `English`, `French`, `German`, `Hungarian`, `Italian`, `Japanese`, `Korean`, `Norwegian`, `Polish`, `Portuguese`, `Romanian`, `Spanish`, `Swedish`, `Turkish`, `Traditional Chinese (zh-Hant)` and `Simplified Chinese (zh-Hans)`. These are available via the `igniteui-i18n-resources` package, except for English which comes as a default localization.

## {Platform} Localization Example

`sample="/{GridSample}/localization", height="605", alt="{Platform} {GridTitle} Localization Example"`

>Note: Hindi (HI) included in the sample is only for illustrational purposes and to emphasize on the possibility to pass a custom localization object. In this sample, it contains only several localized strings for the summary. More details at [Custom localized resource strings](#custom-localized-resource-strings) section below.

## Locale

By locale, we will refer to the general strings defining the different languages and regions on Earth. In our case they are based on the [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) tag definition and most of the basic ones are described in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) and for a list of languages you can also `refer to [ISO 639 language standard](https://www.loc.gov/standards/iso639-2/).

It affects both the formatting of the dates and numbers and the localized resource strings that our components use. The default locale for the {ProductName} is `en-US`.

There are several ways that you can set locale. Either globally or per component.

### Global API

<!-- WebComponents -->

You can set the locale that will be used globally using the `setCurrentI18n` method, that comes from the [`igniteui-webcomponents`](https://www.npmjs.com/package/igniteui-webcomponents) or [`igniteui-webcomponents-grids`](https://www.npmjs.com/package/igniteui-webcomponents-grids) package. All types and APIs can be imported from either package. It will affect both formatting and registered resource strings used in all of our components. For more on resource strings see [Localized resource strings](#localized-resource-strings)

<!-- end: WebComponents -->

<!-- React -->

You can set the locale that will be used globally using the `setCurrentI18n` method, that comes from the [`igniteui-react`](https://www.npmjs.com/package/igniteui-react)  or [`igniteui-react-grids`](http://npmjs.com/package/igniteui-react-grids) package. It will affect both formatting and registered resource strings used in all of our components. All types and APIs can be imported from either package. For more on resource strings see [Localized resource strings](#localized-resource-strings)

<!-- end: React -->

<!-- Blazor -->

You can set the locale that will be used globally using the `SetCurrentI18n` method, that comes from the `I18nManager`. It will affect both formatting and registered resource strings used in all of our components. For more on resource strings see [Localized resource strings](#localized-resource-strings). Like mentioned, first you will need to import the `IgniteUII18nManager`:

```razor
@inject IIgniteUII18nManager I18nManager;

I18nManager.SetCurrentI18nAsync("de");
```

<!-- end: Blazor -->

```ts
setCurrentI18n('de');
```

We support the full range of possible locales supported by `Intl`. If you provide a locale that is not valid or supported, it will use the default `en-US` locale for the time being, until you change it to a valid one.

In general you should register your resources under the languages, regions and scripts for the tags you plan to use, so that your components are localized as well. For more see [Regions and Scripts](#regions-and-scripts) section.

### `lang` attribute

With this approach we have the ability to set localization through the `lang` global attribute of the `HTML` tag. This attribute is being watched and if it is changed, all rendered components will update their resource strings to the currently set language. All rules regarding the tag used apply as described above.

> Note: This works only on root level and will not work for inner elements on the page.

<!-- WebComponents, Blazor -->

```html
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

<!-- end: WebComponents, Blazor -->

```tsx
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

```razor
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

### Per component

Each component will also have its own `locale` property, that you can specify and it will then not be affected by the global locale.

```html
<igc-grid locale="ja">
    <igc-column field="ProductName" header="Product Name" groupable="true"></igc-column>
    <igc-column field="QuantityPerUnit" header="Quantity Per Unit" groupable="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid data={data} locale="ja">
    <IgrColumn field="ProductName" header="Product Name" groupable={true}></IgrColumn>
    <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable={true}></IgrColumn>
</IgrGrid>
```

```razor
<IgbGrid Data="@data" Locale="ja">
    <IgbColumn Field="ProductName" Header="Product Name" Groupable="true"></IgbColumn>
    <IgbColumn Field="QuantityPerUnit" Header="Quantity Per Unit" Groupable="true"></IgbColumn>
</IgbGrid>
```

## Formatting

Locale, like mentioned previously, affects the formatting in all {ProductName} components that render dates, numbers and some strings related to them and is based on the `Intl` API. It is enabled by default.

### Date formats

Components like the Grid or DatePicker allow for specifying date format (for the grid per column). The lists bellow show the available options that you can set or build your own custom format.

Available predefined format options:

| Option | Equivalent to | Examples (given in en-US locale) |
| ------ | --------------| --------------------------------|
| 'short' | 'M/d/yy, h:mm a' | 6/15/15, 9:03 AM |
| 'medium' | 'MMM d, y, h:mm:ss a' | Jun 15, 2015, 9:03:01 AM |
| 'long' | 'MMMM d, y, h:mm:ss a z' | June 15, 2015 at 9:03:01 AM GMT+1 |
| 'full' | 'EEEE, MMMM d, y, h:mm:ss a zzzz' | Monday, June 15, 2015 at 9:03:01 AM GMT+01:00 |
| 'shortDate' | 'M/d/yy' | 6/15/15 |
| 'mediumDate' | 'MMM d, y' | Jun 15, 2015 |
| 'longDate' | 'MMMM d, y' | June 15, 2015 |
| 'fullDate' | 'EEEE, MMMM d, y' | Monday, June 15, 2015 |
| 'shortTime' | 'h:mm a' | 9:03 AM |
| 'mediumTime' | 'h:mm:ss a' | 9:03:01 AM |
| 'longTime' | 'h:mm:ss a z' | 9:03:01 AM GMT+1 |
| 'fullTime' | 'h:mm:ss a zzzz' | 9:03:01 AM GMT+01:00 |

Custom format options:

| Date field | Value | Description | Example |
|-|-|-|-|
| Weekday | c, cc, ccc, E, EE, EEE | Short version of the weekday | Tue |
| | cccc, EEEE | Long version of the weekday | Tuesday |
| | ccccc, EEEEE | Narrow version of the weekday | T |
| Day| d | Numeric display (single digit when possible) | 1, 10 |
| | dd | 2-digit always (zero padded) | 01, 10 |
| Month | M, L | Numeric display (single digit when possible) | 8, 12 |
| | MM, LL | 2-digit always (zero padded) | 08, 12 |
| | MMM, LLL | Short month name | Oct |
| | MMMM, LLLL | Long month name | October |
| | MMMMM, LLLLL | Narrow month name | O |
| Year | y, yyy, yyyy | Numeric display | 1, 24, 632, 2025 |
| | yy | 2-digit display (zero padded when possible) | 01, 24, 32, 25 |
| ISO 8601 year  | Y, YYY, YYYY | Numeric display | 1, 24, 632, 2025 |
| | YY | 2-digit display (zero padded when possible) | 01, 24, 32, 25 |
| Era | G, GG, GGG | Short display | AD, BC |
| | GGGG | Long display |  Anno Domini, Before Christ|
| | GGGGG | Narrow display | A, B |
| Minute | m | Numeric (single digit when possible) | 1, 5, 22 |
| | mm | 2-digit display (zero padded)| 01, 05, 22 |
| Hour 1-12 | h | Numeric (single digit when possible) | 8, 12 |
| | hh | 2-digit (zero padded) | 08, 13 |
| Hour 0-23 | H | Numeric (single digit when possible) | 8, 21 |
| | HH | 2-digit  (zero padded)| 08, 21 |
| Hour 0-11 | K | Numeric (single digit when possible) | 0, 11 |
| | KK | 2-digit (zero padded) | 00, 11 |
| Second | s | Numeric (single digit when possible) | 0...59 |
| | ss | 2-digit (zero padded) | 00...59 |
| Fractional seconds | S | Numeric for 1 digit | 0...9 |
| | SS | Numeric for 2 digits | 00...99 |
| | SSS | Numeric for 3 digits | 000...999 |
| Period of time - abbreviated | a, t | Lower case always | am, pm |
| | aa, aaa, tt, ttt | Upper case always | AM, PM |
| | aaaa, tttt | Case based on locale | am, pm, AM, PM |
| | aaaaa, ttttt | Narrow lower case always | a, p |
| Period of time - extended | b, bb, bbb, B, BB, BBB | Short display. Based on `Intl` locale | en-GB: at night |
| | bbbb, BBBB | Long display. Based on `Intl` locale| en-GB: at night |
| | bbbbb, BBBBB | Narrow display. Based on `Intl` locale | en-GB: at night |
| Timezone | z, zz, zzz, Z, ZZ, ZZZ, O, OO, OOO | Short display | GMT+4 |
| | zzzz, ZZZZ, OOOO | Long display | GMT+0430 |

## Localized resource strings

All components in {ProductName} render in English by default and they can be rendered in any of the listed languages at the top as well. There are three ways you can achieve that globally and one way per component. For any language that is not currently available, custom translation can be provided for each resource string that is available through our API.

The translations for the component strings are stored in resource strings and they will need to be registered in our localization system so that the component can use them.

<!-- WebComponents, React -->

To achieve that, you first need to install the [`igniteui-i18n-resources`](https://www.npmjs.com/package/igniteui-i18n-resources) package, which contains the localized resource strings for all languages:

```
npm install igniteui-i18n-resources --save-dev
```

After that you will need to register each language you would like to have available to them. Lets say German and Japanese:

```ts
import { ResourceStringsDE, ResourceStringsJA } from 'igniteui-i18n-resources';

registerI18n(ResourceStringsDE, 'de');
registerI18n(ResourceStringsJA, 'ja');
```

<!-- end: WebComponents, React -->

<!-- Blazor -->

To achieve that, you first need to install the [`IgnieteUI.Blazor.I18n.Resources`] NuGet package, which contains the localized resource strings for all languages:

```
nuget install IgnieteUI.Blazor.I18n.Resources
```

```razor
I18nManager.RegisterI18nAsync(new IgbResourceStringsBG(), "bg");
```

<!-- end: Blazor -->

You will also need to provide to which locale they will apply to. If not a valid tag is provided, it will set the resources for the default 'en-US' locale.

### Regions and scripts

We take into account the `language + region` or `language + script` from the locale you used to register your resources, since these are the most commonly used. They are separated by `-` and region/script are usually defined on a second or third position. For example, `en-US` and `en-GB` or `en-Latn`.

If you do not use region or script, the resources you register will apply to all locales that use the `en` language, for example. That is unless you define resources for the regions and scripts as well. Then only for those you have not defined, will return the resources for `en` in this case.

The script for us has higher priority than the region when registering resources. We recommend in general to use either region or script, without mixing them and using both at the same time. That way it is easier to manage and know which one you have available and should be used, based on the locale you set.

Anyway, if you happen to use them both, lets take for example the `en` language with `GB` region and `Latn` script. If you define resources for both region and script like `en-GB` and `en-Latn`, and later on you set your locale, having both region and script to `en-Latn-GB`, we will take the resources from the script one first. If it is not available, then we will return the available region, unless you explicitly set your locale to `en-Latn`, of course. If you have for none of them registered resources, we will take the default for `en` if available.

<!-- Angular -->

## Customize a component

If you would like to have specific component in your app use either the already registered resources globally but with different localization.

### Locale

If you would like to set different from the global localization locale for a component, you can do that by setting the `locale` property. This will affect the language of the resource strings used as well as the formatting, since they are tied together.

With this approach you should already have the available resource strings globally registered:

```ts
import { ResourceStringsJA } from 'igniteui-i18n-resources';

registerI18n(ResourceStringsJA, 'ja');
```

By setting the `locale` property of the component, this will override the global locale currently in use:

```html
<igc-grid locale="ja">
    <igc-column field="ProductName" header="Product Name" groupable="true"></igc-column>
    <igc-column field="QuantityPerUnit" header="Quantity Per Unit" groupable="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid data={data} locale="ja">
    <IgrColumn field="ProductName" header="Product Name" groupable={true}></IgrColumn>
    <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable={true}></IgrColumn>
</IgrGrid>
```

```razor
<IgbGrid Data="@data" Locale="ja">
    <IgbColumn Field="ProductName" Header="Product Name" Groupable="true"></IgrColumn>
    <IgbColumn Field="QuantityPerUnit" Header="Quantity Per Unit" Groupable="true"></IgrColumn>
</IgbGrid>
```

#### Language only

If you would like to change only the language of the component, without changing the locale, you can even set the resource strings of each component using the `resourceStrings` property, which will override the globally used ones:

```html
<igc-grid>
    <igc-column field="ProductName" header="Product Name" groupable="true"></igc-column>
    <igc-column field="QuantityPerUnit" header="Quantity Per Unit" groupable="true"></igc-column>
</igc-grid>
```

```tsx
<IgrGrid data={data} resourceStrings={resourcesDE}>
    <IgrColumn field="ProductName" header="Product Name" groupable={true}></IgrColumn>
    <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable={true}></IgrColumn>
</IgrGrid>
```

You will need to make sure you use the correct resource string type for the component you would like to override it with. Each component has its own set of resource strings. In this case for the grid in German:

```ts
import { GridResourceStringsDE } from 'igniteui-i18n-resources';

// Inside App Component:
public resourcesDE = GridResourceStringsDE;
```
<!-- end: Angular -->

## Custom localized resource strings

If you would like to localize your app, but we do not provide resource strings for the language you use and would like to provide your own translation, you can always provide custom resource string.

>Note: Feel free to contribute to the [`igniteui-i18n-resources`](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources) GitHub repo with more languages.

<!-- WebComponents -->
You can use the provided `IResourceStrings` type for all components to get typings for the resource stings used:

```ts
import { IResourceStrings } from 'igniteui-webcomponents';

export const customResourcesForAll: IResourceStrings = {
    //...
};
registerI18n(customResourcesForAll, 'custom');
```
<!-- end: WebComponents -->

<!-- React -->
You can use the provided `IResourceStrings` type for all components to get typings for the resource stings used:

```tsx
import { IResourceStrings } from 'igniteui-react';

export const customResourcesForAll: IResourceStrings = {
    //...
};
registerI18n(customResourcesForAll, 'custom');
```
<!-- end: React -->

<!-- Blazor -->
You can use the provided `IgbResourceStrings` class for all components to get typings for the resource stings used:

```razor
IgbResourceStrings customResourcesAll = new IgbResourceStrings()
{
    //...
};

I18nManager.RegisterI18nAsync(customResourcesAll, "de");
```
<!-- end: Blazor -->

Or for a specific component separately, in this case the grids:

<!-- WebComponents -->
```ts
import { IGridResourceStrings } from 'igniteui-webcomponents';

export const customGridResources: IGridResourceStrings = {
    grid_summary_count: 'गणना',
    grid_summary_min: 'न्यून',
    grid_summary_max: 'अधिक',
    grid_summary_sum: 'योग',
    grid_summary_average: 'औसत'
};

```
<!-- end: WebComponents -->

<!-- React -->
```tsx
import { IGridResourceStrings } from 'igniteui-react';

export const customGridResources: IGridResourceStrings = {
    grid_summary_count: 'गणना',
    grid_summary_min: 'न्यून',
    grid_summary_max: 'अधिक',
    grid_summary_sum: 'योग',
    grid_summary_average: 'औसत'
};

```
<!-- end: React -->

<!-- Blazor -->
```razor
IgbGridResourceStrings gridRes = new IgbGridResourceStrings()
{
    GridSummaryCount: 'गणना',
    GridSummaryMin: 'न्यून',
    GridSummaryMax: 'अधिक',
    GridSummarySum: 'योग',
    GridSummaryAverage: 'औसत'
};
```
<!-- end: Blazor -->

<!-- WebComponents -->
You can even mix however you want the already existing resource strings with the ones you want to customize, even for the default English language:

```ts
import { IResourceStrings, CalendarResourceStringsEN, DatePickerResourceStringsEN } from 'igniteui-webcomponents';

export const customResources: IResourceStrings = Object.assign(
    {},
    CalendarResourceStringsEN,
    DatePickerResourceStringsEN,
    {
        grid_summary_count: 'Custom count',
        grid_summary_min: 'Minium',
        grid_summary_max: 'Maximum',
        grid_summary_sum: 'Custom summary'
    }
);
registerI18n(customResources, 'en');

```
<!-- end: WebComponents -->

<!-- React -->
You can even mix however you want the already existing resource strings with the ones you want to customize, even for the default English language:

```tsx
import { IResourceStrings, CalendarResourceStringsEN, DatePickerResourceStringsEN } from 'igniteui-react';

export const customResources: IResourceStrings = Object.assign(
    {},
    CalendarResourceStringsEN,
    DatePickerResourceStringsEN,
    {
        grid_summary_count: 'Custom count',
        grid_summary_min: 'Minium',
        grid_summary_max: 'Maximum',
        grid_summary_sum: 'Custom summary'
    }
);
registerI18n(customResources, 'en');

```
<!-- end: React -->

>Note: The last examples set only specific resource strings. This means that the rest will default to English, if they are not available for the components in use to get.

## Available resource strings

- [ResourceStringsBG](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/BG/resources.ts)
- [ResourceStringsCS](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/CS/resources.ts)
- [ResourceStringsDA](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/DA/resources.ts)
- [ResourceStringsDE](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/DE/resources.ts)
- [ResourceStringsES](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ES/resources.ts)
- [ResourceStringsFR](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/FR/resources.ts)
- [ResourceStringsHU](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/HU/resources.ts)
- [ResourceStringsIT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/IT/resources.ts)
- [ResourceStringsJA](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/JA/resources.ts)
- [ResourceStringsKO](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/KO/resources.ts)
- [ResourceStringsNB](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/NB/resources.ts)
- [ResourceStringsNL](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/NL/resources.ts)
- [ResourceStringsPL](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/PL/resources.ts)
- [ResourceStringsPT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/PT/resources.ts)
- [ResourceStringsRO](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/RO/resources.ts)
- [ResourceStringsSV](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/SV/resources.ts)
- [ResourceStringsTR](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/TR/resources.ts)
- [ResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ZH-HANS/resources.ts)
- [ResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ZH-HANT/resources.ts)
