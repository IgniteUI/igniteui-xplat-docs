---
title: {Platform} コンボボックス コンポーネント - {ProductName}
_description: {Platform} Combo コンポーネントは、基本的な HTML 入力、選択、フィルタリング、およびカスタム ドロップダウン リストの機能を組み合わせた強力な入力を提供します。無料でお試しください。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} コンボボックス コンポーネント
mentionedTypes: ['Combo']
_language: ja
---

# {Platform} コンボボックスの概要

{Platform} コンボボックスは、ユーザーが提供されたリストでさまざまな定義済みオプションを簡単に選択、フィルタリング、およびグループ化できるようにする軽量のエディターです。このコンポーネントは、{Platform} コンボボックス キーボード ナビゲーションのオプション、項目、ヘッダー、およびフッターの表示方法をカスタマイズするためのテンプレートもサポートしています。

{ProductName} コンボボックス コンポーネントは、ユーザーが選択できるオプションのリストを提供します。仮想化された項目のリストにすべてのオプションが表示されます。つまり、コンボボックスは、1 つ以上のオプションを選択できる数千のレコードを同時に表示できます。さらに、このコンポーネントには、大文字と小文字を区別するフィルタリング、グループ化、複雑なデータ バインディングなどの機能があります。

## {Platform} コンボボックスの例

`sample="/inputs/combo/overview", height="400", alt="{Platform} Combo の例"`



<div class="divider--half"></div>

## Ignite UI {Palform} コンボボックス コンポーネントを使用した作業の開始

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`ComboBox` コンポーネントを使用する前に、追加のコンポーネントとともに登録する必要があります:

```ts
import { defineComponents, IgcComboComponent }
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent);
```
<!-- end: WebComponents -->

<!-- Blazor -->

`IgbCombo` コンポーネントの使用を開始するには、最初にそのモジュールを登録する必要があります。


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbComboModule));
```

スタイルを `Combo` コンポーネントに適用するには、追加の CSS ファイルをリンクする必要もあります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります。

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

>[!WARNING]
> `Combo` コンポーネントは標準の `<form>` 要素では機能しません。代わりに `Form` を使用してください。

次に、オプションのリストを構築するコンボ データ ソースに、オブジェクトの配列をバインドします。

```ts
interface City {
    id: string;
    name: string;
}

const cities: City[] = [
    { name: 'London', id: 'UK01' },
    { name: 'Sofia', id: 'BG01'},
    { name: 'New York', id: 'NY01'}
];

export class Sample {
    private combo: IgcComboComponent<City>;

    constructor() {
        this.combo = document.getElementById('basic-combo') as IgcComboComponent<City>;
        this.combo.data = cities;
    }
}
```

```html
<igc-combo id="basic-combo" display-key="name" value-key="id"></igc-combo>
```

```razor
<IgbCombo Id="basic-combo" DisplayKey="name" ValueKey="id" Data="Cities" />
```

### データ値と表示プロパティ

コンボは複雑なデータ (オブジェクト) の配列にバインドされているため、選択した項目を処理するために使用するプロパティを指定する必要があります。コンポーネントは以下のプロパティを公開します:

 - `DisplayKey` - オプション、**オブジェクト配列の場合は必須** - データ ソースのどのフィールドを表示値として使用するかを決定します。`DisplayKey` に値が指定されていない場合、コンボは指定された `ValueKey` (存在する場合) を使用します。
 - `ValueKey` - オプション、**オブジェクト配列の場合に推奨** - データ ソースのどのフィールドを使用して選択を行うかを決定します。`ValueKey` を省略した場合、選択 API はオブジェクト参照を使用して項目を選択します。

この例では、コンボに各都市の `name` 名前を表示し、`id` フィールドを使用して項目を選択するようにします。したがって、これらのプロパティをコンボの `DisplayKey` と `ValueKey` にそれぞれ提供します。

> [!Note]
> データ ソースがプリミティブ型 (`strings`、`numbers`など) で構成されている場合は、`ValueKey` と `DisplayKey` を**指定しないでください**。

### 選択 API

コンボ コンポーネントは、現在選択されている項目を変更できる API を公開します。

ユーザーの操作によってオプションのリストから項目を選択する以外に、プログラムで項目を選択することもできます。これは、`select` および `deselect` メソッドを介して行われます。項目の配列をこれらのメソッドに渡すことができます。メソッドが引数なしで呼び出された場合、呼び出されたメソッドに応じて、すべての項目が選択 / 選択解除されます。コンボ コンポーネントに `ValueKey` を指定した場合は、選択 / 選択解除する項目の値キーを渡す必要があります。

#### 一部の項目を選択 / 選択解除:
```ts
// Select/deselect items by their IDs as valueKey is set to 'id'
combo.select(['BG01', 'BG02', 'BG03', 'BG04']);
combo.deselect(['BG01', 'BG02', 'BG03', 'BG04']);
```

#### すべての項目を選択 / 選択解除:
```ts
// Select/deselect all items
combo.select();
combo.deselect();
```

`ValueKey` プロパティを省略した場合は、オブジェクト参照として選択 / 選択解除する項目を列挙する必要があります。

```ts
// Select/deselect values by object references when no valueKey is provided
combo.select([cities[1], cities[5]]);
combo.deselect([cities[1], cities[5]]);
```

`sample="/inputs/combo/selection", height="400", alt="{Platform} Combo 選択の例"`



### 検証

{ProductName} Combo コンポーネントは、`Required`、`Disabled`、`Autofocus`、`Invalid` など、ほとんどの入力プロパティをサポートしています。このコンポーネントは、その検証にバインドされた 2 つのメソッドも公開しています。

- reportValidity() - 有効性をチェックし、コンポーネントが検証の制約を満たしている場合は true を返します。
- checkValidity() - ネイティブ入力 API に準拠するための reportValidity のラッパー。

## キーボード ナビゲーション

コンボ コンポーネントがフォーカスされていて、オプションのリストが**表示されていない**場合:

- <kbd>下矢印/Alt + 下矢印</kbd> キーを使用してオプションのリストを開きます。

コンボ コンポーネントがフォーカスされ、オプションのリストが表示されている場合:

- <kbd>下矢印</kbd> キーを使用すると、リスト内の次の項目がアクティブになります。
- <kbd>上矢印</kbd> キーを使用すると、リスト内の前の項目がアクティブになります。最初の項目がすでにアクティブな場合、入力にフォーカスします。
- <kbd>Home</kbd> または <kbd>End</kbd> キーを使用すると、リストの最初または最後の項目がアクティブになります。
- <kbd>Space</kbd> キーを使用すると、アクティブな項目が選択されます。
- <kbd>Enter</kbd> キーを使用すると、アクティブな項目が選択され、オプションのリストが閉じます。
- <kbd>Esc</kbd> または <kbd>Tab/Shift + Tab</kbd> キーを使用すると、オプションのリストが閉じます。

## コンボのスタイル設定

{ProductName} `Combo` コンポーネントとその項目の外観は、以下に示す公開 CSS パーツを使用して変更できます。

### CSS パーツ

| パーツ名            | 説明                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `label`              | カプセル化されたテキスト ラベル。                                                    |
| `input`              | メイン入力フィールド。                                                           |
| `native-input`       | メイン入力フィールドのネイティブ入力。                                       |
| `prefix`             | プレフィックス ラッパー。                                                             |
| `suffix`             | サフィックス ラッパー。                                                             |
| `toggle-icon`        | トグル アイコン ラッパー。                                                       |
| `clear-icon`         | クリア アイコン ラッパー。                                                         |
| `case-icon`          | フィルター入力のサフィックス内のコンテンツを描画するケース アイコン ラッパー。 |
| `helper-text`        | ヘルパー テキスト ラッパー。                                                       |
| `search-input`       | 検索入力フィールド。                                                         |
| `list-wrapper`       | オプション ラッパーのリスト。                                                    |
| `list`               | オプションボックスのリスト。                                                       |
| `item`               | オプションのリスト内の各項目を表します。                                   |
| `group-header`       | オプションのリストの各ヘッダーを表します。                                  |
| `active`             | 項目がアクティブな場合に、項目パーツ リストに追加されます。                        |
| `selected`           | 項目が選択されている場合に、項目パーツ リストに追加されます。                     |
| `checkbox`           | 各リスト項目の各チェックボックスを表します。                                    |
| `checkbox-indicator` | 各リスト項目のチェックボックス インジケーターを表します。                            |
| `checked`            | チェックボックスがチェックされている場合に、チェックボックス パーツ リストに追加されます。                      |
| `header`             | ヘッダー コンテンツを保持するコンテナー。                                       |
| `footer`             | フッター コンテンツを保持するコンテナー。                                      |
| `empty`              | 空のコンテンツを保持するコンテナ。                                       |

`sample="/inputs/combo/styling", height="400", alt="{Platform} Combo スタイル設定の例"`



## API リファレンス

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
