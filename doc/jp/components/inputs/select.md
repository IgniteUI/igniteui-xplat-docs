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

`sample="/inputs/select/overview", height="275", alt="{Platform} Select の例"`


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

> [!Note]
> ヘッダーとグループの選択コンポーネントは、使用しない限り必須ではないことに注意してください。

コンポーネントの使用を開始するには、選択する `SelectItem` のリストとともに `Select` を追加します。

<!-- WebComponents -->
```html
<igc-select>
    <igc-select-item value="orange">Orange</igc-select-item>
    <igc-select-item value="apple">Apple</igc-select-item>
    <igc-select-item value="banana">Banana</igc-select-item>
    <igc-select-item value="mango">Mango</igc-select-item>
</igc-select>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbSelect>
    <IgbSelectItem Value="orange">Orange</IgbSelectItem>
    <IgbSelectItem Value="apple">Apple</IgbSelectItem>
    <IgbSelectItem Value="banana">Banana</IgbSelectItem>
    <IgbSelectItem Value="mango">Mango</IgbSelectItem>
</IgbSelect>
```
<!-- end: Blazor -->

### Select (選択)

`Select` コンポーネントは `Form` コンポーネント内で使用できるため、登録する `Name` プロパティを公開します。また、`Label`、`Placeholder`、および `Size` プロパティもあります。`Outlined` プロパティは、Material テーマに関してのみ、スタイリング目的で使用されます。デフォルトのスロットを除いて、コンポーネントは、`header`、`footer`、`helper-text`、`prefix`、`suffix`、および `toggle-icon` を含む他のいくつかのスロットを提供します。

### Item (項目)

`SelectItem` コンポーネントを使用すると、ユーザーは `Select` コントロールで使用されるオプションのリストを宣言的に指定できます。各項目は、選択時に保持されるデータを表す `Value` プロパティを提供します。`SelectItem` には、項目のテキスト コンテンツを指定できるデフォルトのスロットがあります。このテキスト コンテンツは、`Value` プロパティが `SelectItem` に存在しない場合に値として使用されます。`prefix` スロットと `suffix` スロットを使用して、`SelectItem` コンテンツの前後に描画されるカスタム コンテンツを提供することもできます。`Selected` プロパティを設定することにより、選択した項目を事前定義できます。`Disabled` プロパティを使用して、一部またはすべての項目を無効にすることもできます。

`sample="/inputs/select/item", height="275", alt="{Platform} Select Item の例"`


### Header (ヘッダー)

`SelectHeader` を使用して、項目のグループのヘッダーを提供できます。

`sample="/inputs/select/header", height="275", alt="{Platform} Select Header の例"`


<!-- WebComponents -->
```html
<igc-select>
    <igc-select-header>Tasks</igc-select-header>
</igc-select>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbSelect>
    <IgbSelectHeader>Tasks</IgbSelectHeader>
</IgbSelect>
```
<!-- end: Blazor -->

### Group (グループ)

複数の `SelectItem` を `SelectGroup` コンポーネントの開く括弧と閉じる括弧の間に配置して、ユーザーがそれらを視覚的にグループ化できるようにすることができます。`SelectGroup` は、その `label` スロットを介してラベルを付け、その `Disabled` プロパティを介して無効にすることができます。

> [!Note]
> 選択グループが無効になっている場合、そのグループの個別の項目を有効にすることはできないことに注意してください。

`sample="/inputs/select/group", height="500", alt="{Platform} Select Group の例"`

<!-- WebComponents -->
```html
<igc-select>
    <igc-select-group>
        <span slot="label">Europe</span>

        <igc-select-item>
          <igc-icon @ref="IconRef" slot="prefix" name="place" collection="material"></igc-icon>
          Germany
          <span slot="suffix">DE</span>
        </igc-select-item>

        <igc-select-item>
          <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
          France
          <span slot="suffix">FR</span>
        </igc-select-item>

        <igc-select-item>
          <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
          Spain
          <span slot="suffix">ES</span>
        </igc-select-item>
    </igc-select-group>
</igc-select>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbSelect>
    <IgbSelectGroup>
        <span slot="label">Europe</span>

        <IgbSelectItem>
          <IgbIcon @ref="IconRef" slot="prefix" name="place" collection="material"></IgbIcon>
          Germany
          <span slot="suffix">DE</span>
        </IgbSelectItem>

        <IgbSelectItem>
          <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
          France
          <span slot="suffix">FR</span>
        </IgbSelectItem>

        <IgbSelectItem>
          <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
          Spain
          <span slot="suffix">ES</span>
        </IgbSelectItem>
    </IgbSelectGroup>
</IgbSelect>
```
<!-- end: Blazor -->

## 検証

さらに、`Select` は、`Required`、`Disabled`、`Autofocus` など、ほとんどの `Input` プロパティをサポートします。コンポーネントは、その検証にバインドされたメソッドも公開します。

- `reportValidity` - 有効性をチェックし、無効な場合はコンポーネントにフォーカスします。

## キーボード ナビゲーション

選択がフォーカスされ、オプションのリストが**表示されていない**場合:

- <kbd>ALT + 上矢印 / 下矢印</kbd> の組み合わせを使用するか、<kbd>Space</kbd> または <kbd>Enter</kbd> キーをクリックして、`Select` を開きます。
- <kbd>ALT + 上矢印 / 下矢印</kbd> の組み合わせ、または <kbd>Enter</kbd>、<kbd>Space</kbd>、<kbd>Esc</kbd>、`Tab` キーのいずれかを使用して、`Select` を閉じます。
- <kbd>上 / 左矢印</kbd> キーを使用すると、リスト内の前の項目が選択されます。
- <kbd>下 / 右矢印</kbd> キーを使用すると、リスト内の次の項目が選択されます。
- <kbd>Home</kbd> キーまたは <kbd>End</kbd> キーを使用すると、リストの最初または最後の項目が選択されます。
- 文字を入力すると、項目のリストが照会され、現在のユーザー入力に最も近いものが選択されます。

選択がフォーカスされ、オプションのリストが**表示されている**場合:

- <kbd>Enter</kbd> キーまたは <kbd>Space</kbd> キーを使用すると、項目が選択され、リストが閉じます。
- <kbd>上 / 左矢印</kbd>キーを使用すると、リスト内の前の項目がアクティブになります。
- <kbd>下 / 右矢印</kbd>キーを使用すると、リスト内の次の項目がアクティブになります。
- <kbd>Home</kbd> キーまたは <kbd>End</kbd> キーを使用すると、リストの最初または最後の項目がアクティブになります。

> [!Note]
> `Select` コンポーネントは、項目の**単一**選択のみをサポートします。

<!-- WebComponents -->

## スタイル設定

以下に示す公開された CSS パーツを使用して、{ProductName} `Select` コンポーネントとその項目の外観を変更できます。

### CSS パーツ

**Select コンポーネント**

| 部分名 | 説明 |
| ---------|------------ |
| `input` | カプセル化された igc-input。 |
| `label` | カプセル化されたテキスト ラベル。 |
| `list` | オプションのリストを保持するラッパー。 |
| `prefix`  | 入力の前にコンテンツを描画するプレフィックス ラッパー。 |
| `suffix` | 入力後にコンテンツを描画するサフィックス ラッパー。 |
| `toggle-icon` | サフィックス ラッパー内のコンテンツを描画するトグル アイコン ラッパー。 |
| `helper-text` | 入力の下にコンテンツを描画するヘルパー テキスト ラッパー。 |

**Select Item コンポーネント**

| 部分名 | 説明 |
| ---------|------------ |
| `content` | 項目のテキスト コンテンツを保持するメイン ラッパー。 |
| `prefix`  | メイン ラッパーの前にコンテンツを描画するプレフィックス ラッパー。 |
| `suffix` | メイン ラッパーの後にコンテンツを描画するサフィックス ラッパー。 |

**Select Group コンポーネント**

| 部分名 | 説明 |
| ---------|------------ |
| `Label` | 選択したグループ項目の上にコンテンツを描画するラベル ラッパー。 |

`sample="/inputs/select/styling", height="380", alt="{Platform} Select スタイル設定の例"`



<!-- end: WebComponents -->


## API リファレンス

* `Select`
* `SelectItem`
* `SelectHeader`
* `SelectGroup`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
