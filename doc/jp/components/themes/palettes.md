---
title: $Platform$ スタイル設定およびテーマ | $Platform$ パレット | インフラジスティックス
_description:
_keywords: $ProductName$, Infragistics, Palettes, Styling, インフラジスティックス, パレット, スタイル設定
mentionedTypes: ["Palettes"]
_language: ja
---

# $ProductName$ のパレット

$ProductName$ は、アプリケーションで一貫した方法でカラーを更新できる CSS 変数を公開します。

## 概要

$ProductName$ のパレットは、`primary`、`secondary`、`gray`、`info`、`success`、`warn`、`error`、および `surface`の 8 つの基本色に対して 100 を超えるカラー バリエーションを提供します。

`primary`、`secondary`、および `gray` カラーは [2014 Material Design カラー パレット (英語)](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) に則っています。これらのカラーが以下のバリアントを含みます:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">すべて</th>
        <th colspan="4" style="text-align: center !important">グレーなし</th>
    </tr>
    <tr>
        <td>**50**</td>
        <td>**100**</td>
        <td>**200**</td>
        <td>**300**</td>
        <td>**400**</td>
        <td>**500**</td>
        <td>**600**</td>
        <td>**700**</td>
        <td>**800**</td>
        <td>**900**</td>
        <td>*A100*</td>
        <td>*A200*</td>
        <td>*A400*</td>
        <td>*A700*</td>
    </tr>
</table>

<div class="divider--half"></div>

上記の表に示すように、`gray` カラーには `A100`、`A200`、`A400`、および `A700` バリアントは含まれませんが、`primary` および `secondary` カラーには 14 カラー バリアントすべてが含まれます。2014 Material Design カラー パレットに含まれない `info`、`success`、`warn`、`error`、`surface` の 5つのカラーを追加しました。これらの色には、14 色すべてのバリエーションがあります。

上記のカラーに加えて、各カラー バリアントに **Level AAA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 準拠の `contrast` カラーも含まれています。つまり、対応する `contrast` カラー バリアントをベースカラー バリアントの前景カラーとして安全に使用できます。

> [!NOTE]
> コントラスト カラーはビルド時に生成されるため、CSS 変数をオーバーライドしても、対応するコントラスト カラーは更新されません。

以下は、Light Bootstrap パレットで宣言された `primary` カラーの抜粋です。

```css
:root {
  --igc-primary-h: 216deg;
  --igc-primary-s: 98%;
  --igc-primary-l: 52%;
  --igc-primary-a: 1;
  --igc-primary-50: hsla(
                      var(--igc-primary-h),
                      calc(var(--igc-primary-s) * 1.23),
                      calc(var(--igc-primary-l) * 1.78),
                      var(--igc-primary-a)
                    );
  --igc-primary-100: hsla(
                      var(--igc-primary-h),
                      calc(var(--igc-primary-s) / 1.25),
                      calc(var(--igc-primary-l) * 1.66),
                      var(--igc-primary-a)
                    );
  --igc-primary-200: hsla(
                      var(--igc-primary-h),
                      calc(var(--igc-primary-s) * .64),
                      calc(var(--igc-primary-l) * 1.43),
                      var(--igc-primary-a)
                    );
  // ...
  --igc-primary-50-contrast: black;
  --igc-primary-100-contrast: black;
  --igc-primary-200-contrast: black;
  // ...
}
```

すべてのカラー バリアントは、`--igc-primary-h`、`--igc-primary-s`、`--igc-primary-l`、および `--igc-primary-a` の 4 つのベース変数から派生しています。これらの変数はそれぞれ、1つの色の  [HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation) の各成分を保持します。HSLA は、`hue` (色相)、`saturation` (彩度)、`lightness` (明度)、および `alpha` (アルファ) を表します。これは、色を表すために使用される色空間の 1 つです。`primary`、`secondary`、その他のカラーのすべてのバリアントを実行時に変更できるため、この方法を使用することにしました。

## パレットの定義

パレットにあるカラーのバリアントを変更したい場合は、スタイルシートで HSLA 値をオーバーライドできます。たとえば、プライマリ カラーを変更するのは簡単です。

```css
/* The HSLA representation of orange (#ffa500) */
/* hsla(38.8, 100%, 50%, 1); */
:root {
  --igc-primary-h: 38.8deg;
  --igc-primary-s: 100%;
  --igc-primary-l: 50%;
  --igc-primary-a: 1;
}
```

これにより、他のすべてのプライマリ バリアントが自動的に更新されます。

各カラーのカラー バリアントは単色です。これは、すべてのカラー バリアントが HSLA 変数から生成されるためです。任意のカラー スキームを使用してのみ個々のカラーをオーバーライドできます。

```css
/* The HSLA representation of darkorange (#ff6e00) */
:root {
  --igc-primary-600: 25.9deg, 100%, 50%, 1;
}
```

これを行う場合は注意してください。

```css
:root {
  /* The HSLA representation of orange (#ffa500) */
  --igc-primary-500: 38.8deg, 100%, 50%, 1;

  /* The HSLA representation of blue (#0080ff) */
  --igc-primary-600: 210deg, 100%, 50%, 1;
}
```

一部のコンポーネント テーマが複数のカラー バリアントを使用するため、予期しない結果になる場合があります。単色パレットを中心にすべてのコンポーネント テーマをデザインしました。

## スコープ

パレットでカラーをオーバーライドする方法は比較的簡単です。_global_ パレットを更新するには、アプリケーションの `styles.css` ファイルの `:root` セレクターにカラー バリアントをスコープします。

たとえば、企業のプライマリ カラーが `#9f349c` で、そのプライマリ カラー バリアントを作成するとします。1 つのオプションは、[マテリアル カラー ツール (英語)](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) を使用してすべてのカラー バリアントを生成することです。以下はツールで生成されたカラーを宣言する方法です。

```css
:root {
  --igc-primary-50: 305deg, 35%, 93%, 1;
  --igc-primary-100: 304deg, 37%, 82%, 1;
  --igc-primary-200: 303deg, 38%, 70%, 1;
  --igc-primary-300: 303deg, 38%, 58%, 1;
  --igc-primary-400: 303deg, 38%, 50%, 1;
  --igc-primary-500: 302deg, 51%, 41%, 1;
  --igc-primary-600: 298deg, 51%, 39%, 1;
  --igc-primary-700: 293deg, 55%, 36%, 1;
  --igc-primary-800: 289deg, 56%, 33%, 1;
  --igc-primary-900: 279deg, 60%, 28%, 1;
}
```

マテリアル カラー ツールは、各カラー バリアントのコントラストカラーを提供しません。特定のカラーを他のカラーと組み合わせて使用した場合に十分なコントラストがあるかどうかを判断するのに役立つツールが多数あります。各カラー バリアントのコントラストカラーを決定する際に、Chrome の組み込みのコントラスト チェッカーを使用できます。

単一のグローバル パレット以外に、他の CSS セレクターにスコープされる複数のパレットを作成することもできます。たとえば、青と赤のパレットをクラス セレクターにスコープできます。

```css
/* cornflowerblue hsl(218.5, 79.2%, 66.1%) */
.blue-theme {
  --igc-primary-h: 218.5deg;
  --igc-primary-s: 79.2%;
  --igc-primary-l: 66.1%;
  --igc-primary-a: 1;
}

/* brick red hsl(351.7, 57%, 52.5%) */
.red-theme {
  --igc-primary-h: 351.7deg;
  --igc-primary-s: 57%;
  --igc-primary-l: 52.5%;
  --igc-primary-a: 1;
}
```

class 属性の値を `blue-theme` から `red-theme` に変更することで、アプリケーションのカラーを簡単に変更できます。

## ダークとライト

$ProductName$ のパレットは、テーマを明るくするか暗くするかを示します。最も影響を受ける 2 つのカラーは、`gray` と `surface` です。すべてのテーマの `gray` カラー バリアントは、`#fff` などの非常に明るい色合いか、あるいは `#222` などの非常に暗い色合いに基づきます。ライト テーマには暗い色合いの `gray` に基づいたグレー カラーのバリアントがあり、ダーク テーマはその反対で、すべての `gray` カラーのバリアントは白い色合いです。これらの `gray` カラーは、他のカラー (通常は `surface` カラー) に対して表示されます。テーマを適切に表示するために、`surface` のカラーは常にグレースケールの `gray` の反対の明度に設定します。

ライト テーマとダーク テーマの両方について、 `gray` と `surface` のカラー バリエーションの完全なリストを以下に示します。

*Bootstrap Light:*
```css
:root {
  /* surface is set to a shade of white */
  --igc-surface-500: 210deg, 17%, 98%, 1;

  /* gray variants */
  --igc-gray-h: 210deg;
  --igc-gray-s: 11%;
  --igc-gray-l: 71%;
  --igc-gray-a: 1;

  --igc-gray-50: var(--igc-gray-h), var(--igc-gray-s), 98%;
  --igc-gray-100: var(--igc-gray-h), var(--igc-gray-s), 96%;
  --igc-gray-200: var(--igc-gray-h), var(--igc-gray-s), 93%;
  --igc-gray-300: var(--igc-gray-h), var(--igc-gray-s), 88%;
  --igc-gray-400: var(--igc-gray-h), var(--igc-gray-s), 74%;
  --igc-gray-500: var(--igc-gray-h), var(--igc-gray-s), 62%;
  --igc-gray-600: var(--igc-gray-h), var(--igc-gray-s), 54%;
  --igc-gray-700: var(--igc-gray-h), var(--igc-gray-s), 38%;
  --igc-gray-800: var(--igc-gray-h), var(--igc-gray-s), 26%;
  --igc-gray-900: var(--igc-gray-h), var(--igc-gray-s), 13%;
}
```

*Bootstrap Dark:*
```css
:root {
  /* surface is set to a dark shade of gray */
  --igc-surface-500: 210deg, 11%, 15%, 1;

  /* gray variants */
  --igc-gray-h: 210deg;
  --igc-gray-s: 11%;
  --igc-gray-l: 71%;
  --igc-gray-a: 1;

  --igc-gray-50: var(--igc-gray-h), var(--igc-gray-s), 13%;
  --igc-gray-100: var(--igc-gray-h), var(--igc-gray-s), 26%;
  --igc-gray-200: var(--igc-gray-h), var(--igc-gray-s), 38%;
  --igc-gray-300: var(--igc-gray-h), var(--igc-gray-s), 54%;
  --igc-gray-400: var(--igc-gray-h), var(--igc-gray-s), 62%;
  --igc-gray-500: var(--igc-gray-h), var(--igc-gray-s), 74%;
  --igc-gray-600: var(--igc-gray-h), var(--igc-gray-s), 88%;
  --igc-gray-700: var(--igc-gray-h), var(--igc-gray-s), 93%;
  --igc-gray-800: var(--igc-gray-h), var(--igc-gray-s), 96%;
  --igc-gray-900: var(--igc-gray-h), var(--igc-gray-s), 98%;
}
```

`gray` と `surface` カラー バリアントはほとんどのコンポーネントで使用されており、外観全体に大きな影響を与えるため、その変更には注意が必要です。

## その他のカラー

ここまでで、`primary`、`secondary`、`gray`、`surface` のカラー バリアントと、それらをオーバーライドする方法を説明しました。さらに 4 つのカラーがあります - `info`、`success`、`warn`、`error`。通常、異なる状態のカラーを設定するために使用されます。たとえば、`igc-input-group` コンポーネントは、入力検証状態でこれらのカラーを使用します。

```css
:root {
  --igc-info-500: 190deg, 90%, 50%, 1;
  --igc-success-500: 152deg, 69%, 31%, 1;
  --igc-warn-500: 45deg, 100%, 51%, 1;
  --igc-error-500: 354deg, 70%, 54%, 1;
}
```

## API メンバー

 - `Palettes`