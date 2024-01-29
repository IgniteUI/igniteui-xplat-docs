---
title: {Platform} MaskInput | インフラジスティックス
_description: インフラジスティックスの {Platform} MaskInput により、ユーザーは入力を制御し、構成可能なマスク ルールに基づいて表示される値を書式設定できます。
_keywords: {Platform} input, {ProductName}, Infragistics, {Platform} 入力, インフラジスティックス
mentionedTypes: ['MaskInput']
_language: ja
---

## {Platform} Mask Input (マスク入力) の概要

{ProductName} マスク入力は、構成可能なルールに基づいて、開発者がユーザー入力を制御し、表示される値を書式設定できるようにする入力フィールドです。入力オプションも構成できます。

### {Platform} マスク入力の例

`sample="/inputs/mask-input/overview", height="150", alt="{Platform} マスク入力の概要の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`MaskInput` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcMaskInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcMaskInputComponent);
```

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Mask Input` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:
```tsx
import { IgrMaskInput, IgrMaskInputModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrMaskInputModule.register();
```
<!-- end: React -->

```tsx
<IgrMaskInput mask="00000">
    <span slot="prefix">
        <IgrIcon ref={this.iconLocationRef} name="location" collection="material"></IgrIcon>
    </span>
    <span slot="helper-text">ZIP Code</span>
</IgrMaskInput>
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

### マスクのルール
次の表は、サポートされている組み込みのマスク ルールを示しています:

| マスク文字 | 説明 |
| :--- | :--- |
| 0 | 数字文字 [0-9]。エントリは必須です。 |
| 9 | 数字文字 [0-9]。エントリはオプションです。 |
| # | 数字文字 [0-9]、正符号 (+) 、または負符号 (-) が必須。エントリは必須です。 |
| L | 通常の文字。エントリは必須です。 |
| ? | 通常の文字。エントリはオプションです。 |
| A | 英数字 (文字または数字) 文字。エントリは必須です。 |
| a | 英数字 (文字または数字) 文字。エントリはオプションです。|
| & | 任意のキーボード文字。エントリは必須です。 |
| C | 任意のキーボード文字。エントリはオプションです。 |
| \ | マスク フラグをエスケープし、リテラルに変換します。|

これらのフラグは、コンポーネントの検証にも参加します。つまり、必要な位置のすべてではなく一部が満たされている場合、入力は無効になります (位置が満たされていない / 空の値は、依然として `required` の責任です)。これは、スタンドアロンの入力とフォームに含まれる場合の両方に適用されます。

### マスクの適用

マスクの適用は非常に簡単です。必要なことは、入力の `mask` プロパティに事前に決定されたパターンを提供することだけです。

以下の例では、内線番号付きの電話番号にマスクを適用します。

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999">
    <igc-icon name="phone" slot="prefix"></igc-icon>
    <span slot="helper-text">Phone number</span>
</igc-mask-input>
```

```tsx
<IgrMaskInput mask="(####) 00-00-00 Ext. 9999">
    <span slot="prefix">
        <IgrIcon ref={this.iconPhoneRef} name="phone" collection="material"></IgrIcon>
    </span>
    <span slot="helper-text">Phone number</span>
</IgrMaskInput>
```

その後、ブラウザーに次のように表示されます:

`sample="/inputs/mask-input/applying-mask", height="150", alt="{Platform} マスク入力マスクの適用の例"`



### プロンプト文字

開発者は、マスクの塗りつぶされていない部分に使用されるプロンプト シンボルをカスタマイズできます。これを行うには、`prompt` プロパティに任意の文字を指定するだけです:

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999" prompt="-"></igc-mask-input>
```

```tsx
<IgrMaskInput mask="(####) 00-00-00 Ext. 9999" prompt="-"></IgrMaskInput>
```

デフォルトでは、`prompt` 文字はアンダースコアです。

### プレースホルダー

開発者は、ネイティブ入力プレースホルダー属性の目的を果たす `placeholder` プロパティを利用することもできます。プレースホルダーに値が指定されていない場合は、マスクの値がそのまま使用されます。

```html
<igc-mask-input id="mask-input" mask="00/00/0000" placeholder="dd/MM/yyyy"></igc-mask-input>
```

```tsx
<IgrMaskInput mask="00/00/0000" placeholder="dd/MM/yyyy"></IgrMaskInput>
```

### 値モード

IgcMaskInput は、特定のマスクが適用されたときにフォームにバインドする入力値 (書式設定付きまたは生) を構成するために `raw` および `withFormatting` オプションを選択できる `valueMode` プロパティを公開します。デフォルトでは、`valueMode` は *raw* に設定されています。以下の例をご覧ください:

`sample="/inputs/mask-input/value-modes", height="150", alt="{Platform} マスク入力値モードの例"`



## スタイル設定

`MaskInput` コンポーネントは `Input` コンポーネントから派生するため、使用可能なすべての CSS パーツを公開します。参考のために[入力スタイル設定](input.md#スタイル設定)を参照してください。

## 仮定と制限

- マスクされた入力は、常に**テキスト**型の入力であるため、_type_ 属性を公開しません。
- 元に戻す / やり直しの動作は現在サポートされていません。


## API リファレンス

* `Input`
* `MaskInput`
* `Icon`
* `Radio`
* `RadioGroup`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})