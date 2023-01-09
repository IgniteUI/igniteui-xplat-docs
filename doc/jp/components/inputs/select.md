---
title: {Platform} Select コンポーネント – {ProductName}
_description: {ProductName} Select コンポーネント
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Select components, {Platform} Select controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Select コンポーネント, {Platform} Select コントロール
mentionedTypes: ['Select']
_language: ja
---

# {Platform} Select (選択)

選択コンポーネントは、ドロップダウンに配置された項目のリストからの単一選択できます。このフォーム コントロールは、1 つまたは複数の文字の一致に基づく選択を含む、項目リストの迅速なナビゲーションを提供します。

## {Platform} 選択の例

<code-view style="height:220px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/select-overview" alt="{Platform} Select の例"
           github-src="inputs/select/overview">
</code-view>

<div class="divider--half"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`Select` コンポーネントを使用する前に、追加のコンポーネントとともに登録する必要があります:

```ts
import {
    defineComponents,
    IgcSelectComponent
}
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSelectComponent);
```

<!-- end: WebComponents -->

<!-- Blazor -->

`Select` コンポーネントを使用する前に、追加のコンポーネントとともに登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSelectModule));
```

スタイルを `Select` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

> [!NOTE]
> ヘッダーとグループの選択コンポーネントは、使用しない限り必須ではないことに注意してください。

コンポーネントの使用を開始するには、選択する `igc-select-item` のリストとともに `igc-select` を追加します。

```html
<igc-select>
    <igc-select-item value="orange">Orange</igc-select-item>
    <igc-select-item value="apple">Apple</igc-select-item>
    <igc-select-item value="banana">Banana</igc-select-item>
    <igc-select-item value="mango">Mango</igc-select-item>
</igc-select>
```

### Select (選択)

`igc-select` コンポーネントは `igc-form` 内で使用できるため、登録する `Name` プロパティを公開します。また、`Label`、`Placeholder`、および `Size` プロパティもあります。`Outlined` プロパティは、Material テーマに関してのみ、スタイリング目的で使用されます。デフォルトのスロットを除いて、コンポーネントは、`header`、`footer`、`helper-text`、`prefix`、`suffix`、および `toggle-icon` を含む他のいくつかのスロットを提供します。

### Item (項目)

`igc-select-item` コンポーネントを使用すると、ユーザーは `igc-select` コントロールで使用されるオプションのリストを宣言的に指定できます。各項目は、選択時に保持されるデータを表す `Value` プロパティを提供します。`SelectItem` には、項目のテキスト コンテンツを指定できるデフォルトのスロットがあります。このテキスト コンテンツは、`Value` プロパティが `igc-select-item` に存在しない場合に値として使用されます。`prefix` スロットと `suffix` スロットを使用して、`SelectItem` コンテンツの前後に描画されるカスタム コンテンツを提供することもできます。`Selected` プロパティを設定することにより、選択した項目を事前定義できます。`Disabled` プロパティを使用して、一部またはすべての項目を無効にすることもできます。

<code-view style="height: 220px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-item"
           alt="{Platform} Select Item の例"
           github-src="inputs/select/item">
</code-view>

### Header (ヘッダー)

`SelectHeader` を使用して、項目のグループのヘッダーを提供できます。

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-header"
           alt="{Platform} Select Header の例"
           github-src="inputs/select/header">
</code-view>

### Group (グループ)

複数の `igc-select-item` を `igc-select-group` コンポーネントの開く括弧と閉じる括弧の間に配置して、ユーザーがそれらを視覚的にグループ化できるようにすることができます。`igc-select-group` は、その `label` スロットを介してラベルを付け、その `Disabled` プロパティを介して無効にすることができます。

> [!NOTE] 選択グループが無効になっている場合、そのグループの個別の項目を有効にすることはできないことに注意してください。

<code-view style="height: 480px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-group"
           alt="{Platform} Select Group の例"
           github-src="inputs/select/group">
</code-view>

## 検証

さらに、`igc-select` は、`required`、`disabled`、`autofocus` など、ほとんどの `igc-input` プロパティをサポートします。コンポーネントは、その検証にバインドされたメソッドも公開します。

- reportValidity() - 有効性をチェックし、無効な場合はコンポーネントにフォーカスします。

## キーボード ナビゲーション

選択がフォーカスされ、オプションのリストが**表示されていない**場合:

- <kbd>ALT</kbd> + 上 / 下矢印 の組み合わせを使用するか、<kbd>Space</kbd> または <kbd>Enter</kbd> キーをクリックして、`igc-select` を開きます。
- <kbd>ALT</kbd> + 上矢印 / 下矢印 の組み合わせ、または <kbd>Enter</kbd>、<kbd>Space</kbd>、<kbd>Esc</kbd>、`Tab` キーのいずれかを使用して、`igc-select` を閉じます。
- <kbd>上 / 左矢印</kbd>キーを使用すると、リスト内の前の項目が選択されます。
- <kbd>下 / 右矢印</kbd>キーを使用すると、リスト内の次の項目が選択されます。
- <kbd>Home</kbd> キーまたは <kbd>End</kbd> キーを使用すると、リストの最初または最後の項目が選択されます。
- 文字を入力すると、項目のリストが照会され、現在のユーザー入力に最も近いものが選択されます。

選択がフォーカスされ、オプションのリストが**表示されている**場合:

- <kbd>Enter</kbd> キーまたは <kbd>Space</kbd> キーを使用すると、項目が選択され、リストが閉じます。
- <kbd>上 / 左矢印</kbd>キーを使用すると、リスト内の前の項目がアクティブになります。
- <kbd>下 / 右矢印</kbd>キーを使用すると、リスト内の次の項目がアクティブになります。
- <kbd>Home</kbd> キーまたは <kbd>End</kbd> キーを使用すると、リストの最初または最後の項目がアクティブになります。

> [!NOTE] `igc-select` コンポーネントは、項目の**単一**選択のみをサポートします。

<!-- WebComponents -->

## スタイル設定

以下に示す公開された CSS パーツを使用して、{ProductName} 選択コンポーネントとその項目の外観を変更できます。

### CSS パーツ

**Select コンポーネント**

部分名 | 説明
---------|------------
`input` | カプセル化された igc-input。
`label` | カプセル化されたテキスト ラベル。
`list` | オプションのリストを保持するラッパー。
`prefix`  | 入力の前にコンテンツを描画するプレフィックス ラッパー。
`suffix` | 入力後にコンテンツを描画するサフィックス ラッパー。
`toggle-icon` | サフィックス ラッパー内のコンテンツを描画するトグル アイコン ラッパー。
`helper-text` | 入力の下にコンテンツを描画するヘルパー テキスト ラッパー。

**Select Item コンポーネント**

部分名 | 説明
---------|------------
`content` | 項目のテキスト コンテンツを保持するメイン ラッパー。
`prefix`  | メイン ラッパーの前にコンテンツを描画するプレフィックス ラッパー。
`suffix` | メイン ラッパーの後にコンテンツを描画するサフィックス ラッパー。

**Select Group コンポーネント**

部分名 | 説明
---------|------------
`label` | 選択したグループ項目の上にコンテンツを描画するラベル ラッパー。

<code-view style="height: 380px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-styling"
           alt="{Platform} Select スタイル設定の例"
           github-src="inputs/select/styling">
</code-view>

<!-- end: WebComponents -->


## API リファレンス

* `Select`
* `SelectItem`
* `SelectHeader`
* `SelectGroup`


## その他のリソース

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})