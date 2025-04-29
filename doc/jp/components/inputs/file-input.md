---
title: {Platform} File Input | データ可視化ツール | インフラジスティックス
_description: Infragistics の {Platform} File Input は、ユーザーがファイルを選択・アップロードできるコンポーネントです。{ProductName} でアプリケーションを改善しましょう!
_keywords: {Platform} File input, {ProductName}, Infragistics, {Platform} ファイル入力, インフラジスティックス
mentionedTypes: ["Input", "Icon", "Button"]
_language: ja
---
# {Platform} File Input (ファイル入力) の概要

{ProductName} File Input コンポーネントは、ユーザーがファイルを選択・アップロードできるインタラクティブな方法を提供します。ファイルの選択、選択したファイル名の表示、複数のファイルのアップロードのサポートなど、ファイル固有の機能を追加することで、基本の `Input` 機能を拡張します。

## {Platform} File Input の例

<div class="divider--half"></div>

`sample="/inputs/file-input/overview", height="120", alt="{Platform} File Input Overview Example"`

## 使用方法

File Input コンポーネントを使用すると、ユーザーはデバイスからファイルを選択し、Web アプリケーションにアップロードできます。選択されたファイルの名前が表示され、「Browse」 ボタンと 「No file chosen」 というテキストのカスタマイズ オプションが提供されます。このコンポーネントには、ニーズに合わせて動作をさらに構成するために使用できるプロパティ、メソッド、スロットも用意されています。

### 作業の開始

<!-- WebComponents -->

File Input コンポーネントの使用を開始するには、最初に次のコマンドを実行して Ignite UI for Web Components をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

その後、次のように File Input をインポートする必要があります。

```ts
import { defineComponents, IgcFileInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcFileInputComponent);
```

<!-- end: WebComponents -->

これで、{Platform} File Input の基本構成から始めることができます。

```html
<igc-file-input label="File Input" required=true></igc-file-input>
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

## 構成

### プロパティ

File Input コンポーネントには、特定の要件に基づいて動作を構成できるさまざまなプロパティが用意されています。これらのプロパティを使用すると、入力の機能、外観、検証を制御できます。

* `value` - ファイル入力フィールドの現在の値を設定します。
* `disabled` - ファイル入力を無効にして、ユーザーによる操作を防止します。
* `required` - 入力を必須としてマークします。ファイルが選択されない限り、フォームの送信はブロックされます。
* `invalid` - 入力値が無効であることを示し、視覚的なエラー状態をトリガーするために使用されます。
* `multiple` - 複数のファイルを選択できます。
* `accept` - 選択できるファイル タイプを定義します。このプロパティの値は、ファイル形式のコンマ区切りのリストである必要があります (例: .jpg, .png, .gif)。
* `autofocus` - ページが読み込まれると、ファイル入力フィールドに自動的にフォーカスを当てます。
* `label` - ファイル入力要素に関連付けられたラベル テキストを設定します。
* `placeholder` - ファイルが選択されていない場合に表示されるプレースホルダー テキストを提供します。

```html
<igc-file-input 
  label="Files Input" 
  accept=".jpg, .png, .gif"
  placeholder="Files missing"
  required
  multiple>
</igc-file-input>
```

### メソッド 

構成可能なプロパティに加えて、File Input コンポーネントは、`Input` コンポーネントから使用できる 4 つの便利なメソッドも継承します。 

* `focus()` - ファイル入力要素にフォーカスを設定します。
* `blur()` - ファイル入力要素からフォーカスを削除します。
* `reportValidity()` - 入力の有効性をチェックし、入力が無効な場合は検証メッセージを表示します。
* `setCustomValidity()` - カスタム検証メッセージを設定します。提供されたメッセージが空でない場合、入力は無効 (invalid) としてマークされます。

### スロット

File Input コンポーネントは、外観と動作をカスタマイズするために使用できるいくつかのスロットも公開します。

* `prefix` と `suffix` - メイン入力エリアの前後にコンテンツを挿入できます。 
* `helper-text` - 入力の下にヒントまたは説明メッセージを表示します。書式設定のヒントやフィールドの要件など、追加のガイダンスを提供するのに役立ちます。
* `file-selector-text` - ファイル選択ボタンに表示されるテキストをカスタマイズできます。
* `file-missing-text` - ファイルが選択されていない場合に入力フィールドに表示されるテキストを設定します。
* `value-missing` - 必須フィールドの検証に失敗した場合 (ファイルが必要なが提供されていない場合) にカスタム コンテンツをレンダリングします。
* `invalid` – 入力が無効な状態の場合にカスタム コンテンツをレンダリングできます。
* `custom-error` - `setCustomValidity()` メソッドを使用してカスタム検証メッセージが設定されている場合にコンテンツを表示します。

`sample="/inputs/file-input/prefix-suffix", height="120", alt="{Platform} File Input スロットの例"`

## 統合

File Input コンポーネントは、HTML フォーム要素とシームレスに統合されます。上記のメソッドとプロパティを使用すると、標準の HTML フォーム内での動作と検証を効果的に管理できます。

`sample="/inputs/file-input/form", height="190", alt="{Platform} File Input フォームの例"`

## 制限

File Input コンポーネントには現在次の制限があります。
- 「Browse」 ボタンと 「No file chosen」 メッセージのデフォルトの文字列は、自動的にローカライズされません。これらの文字列はすべてのロケールで同じままですが、適切なスロットまたはプレースホルダー バインディングを使用して手動でカスタマイズできます。
- ファイルは、`value` プロパティを通じて手動で設定することはできません。ファイルの選択はファイル ピッカー経由でのみ行うことができます。ただし、空の文字列 `''` を渡してフィールドをリセットすることはできます。

## アクセシビリティと ARIA サポート

File Input コンポーネントはフォーカス可能かつインタラクティブであり、キーボードとスクリーン リーダーの完全なアクセシビリティを保証します。コンポーネントには `label` 属性を使用してラベルを付けることができます。この属性はネイティブの `<label>` 要素を活用して、意味的に正しくアクセス可能なラベルを提供します。

アクセシビリティのベスト プラクティスをサポートするために、コンポーネントは関連する ARIA 属性も適用します。

* `aria-invalid` - 入力が無効な状態の場合、「true」 に設定します。
* `aria-describedby` - 存在する場合はヘルパー テキスト要素に自動的にリンクされ、支援技術が追加情報をアナウンスできるようになります。

## スタイル設定

`File Input` コンポーネントは、スタイル設定に使用できる CSS パーツを公開します。次の表に、公開されているすべての CSS パーツを示します。

|名前|説明|
|--|--|
| `container` | すべての主要な入力要素を保持するメイン ラッパー。 |
| `input` | ネイティブ入力要素。 |
| `label` | ネイティブ ラベル要素。 |
| `file-names` | ファイル名ラッパー。 |
| `file-selector-button` | 参照ボタン。 |
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |
| `helper-text` | ヘルパー テキスト ラッパー。 |


```scss
igc-file-input::part(file-names) {
  background-color: var(--ig-primary-50);
  color: var(--ig-gray-400);
}

igc-file-input::part(suffix) {
  color: var(--ig-primary-700-contrast);
  background-color: var(--ig-primary-700);
}

igc-file-input::part(label) {
  color: var(--ig-gray-600);
}
```

`sample="/inputs/file-input/styling", height="120", alt="{Platform} File Input のスタイル設定"`

<div class="divider"></div>


## API リファレンス

 - `Icon`
 - `Input`
 - `Button`
 - [スタイル設定およびテーマ](../themes/overview.md)

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})