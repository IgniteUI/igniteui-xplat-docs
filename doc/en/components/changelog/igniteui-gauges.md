---
title: {Platform} Gauges | Changelog | Infragistics 
_description: Learn about new features and bug fixes for the {ProductName} Gauges components
_keywords: {Platform} Gauges, Infragistics, Radial Gauge, Linear Gauge, Bullet Graph, Changelog
mentionedTypes: ["XamRadialGauge", "XamLinearGauge", "XamBulletGraph"]
---

# Changelog for igniteui-{PlatformLower}-gaguges

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

## **{PackageVerChanges-25-1-OCT_2}**

### Enhancements

#### {IgPrefix}BulletGraph

- <label>PREVIEW</label> Added new `LabelsVisible` property

#### {IgPrefix}LinearGauge

- <label>PREVIEW</label> Added new `LabelsVisible` property

## **{PackageVerChanges-25-1-JUL1}**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|36448|{IgPrefix}RadialGauge|Radial label format properties do not work. (eg. Title, SubTitles)|

## **{PackageVerChanges-24-2-FEB}**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|34053|{IgPrefix}RadialGauge|The position of the scale label is shifted|

## **{PackageVerChanges-23-2-MAR}**

### {PackageGauges}

- `XamRadialGauge`
  - New title/subtitle properties. `TitleText`, `SubtitleText` will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and `TitleExtent`. Finally, the new `TitleDisplaysValue` will allow the value to correspond with the needle's position.
  - New `OpticalScalingEnabled` and `OpticalScalingSize` properties for the `XamRadialGauge`. This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature in this [topic](../radial-gauge.md#optical-scaling)
  - New highlight needle was added. `HighlightValue` and `HighlightValueDisplayMode` when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
  - New label for the highlight needle. `HighlightLabelText` and `HighlightLabelSnapsToNeedlePivot` and many other styling related properties for the HighlightLabel were added.
- `XamLinearGauge`
  - New highlight needle was added. `HighlightValue` and `HighlightValueDisplayMode` when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- `XamBulletGraph`
  - The Performance bar will now reflect a difference between the value and new `HighlightValue` when the `HighlightValueDisplayMode` is applied to the 'Overlay' setting. The highlight value will show a filtered/subset completed measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.
