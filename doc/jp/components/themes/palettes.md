---
title: {Platform} スタイル設定およびテーマ | {Platform} パレット | インフラジスティックス
_description:
_keywords: {ProductName}, Infragistics, Palettes, Styling, インフラジスティックス, パレット, スタイル設定
_license: MIT
mentionedTypes: ["Palettes"]
_language: ja
---

# {ProductName} のパレット

{ProductName} は、アプリケーションで一貫した方法でカラーを更新できる CSS 変数を公開します。

## 概要

{ProductName} のパレットでは、8 つの基本色 (`primary`、`secondary`、`surface`、`gray`、`info`、`success`、`warn`、`error`) に対して、80 を超えるカラー バリエーションが CSS 変数として提供されます。

`primary`、`secondary`、および `gray` カラーは [2014 Material Design カラー パレット (英語)](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) に則っています。これらのカラーが以下のバリエーションを含みます:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">すべて</th>
        <th colspan="4" style="text-align: center !important"><b>プライマリとセカンダリのみ</b></th>
    </tr>
    <tr>
        <td>50</td>
        <td>100</td>
        <td>200</td>
        <td>300</td>
        <td>400</td>
        <td>500</td>
        <td>600</td>
        <td>700</td>
        <td>800</td>
        <td>900</td>
        <td><b>A100</b></td>
        <td><b>A200</b></td>
        <td><b>A400</b></td>
        <td><b>A700</b></td>
    </tr>
</table>

<div class="divider--half"></div>

上記の表に示すように、`gray` カラーには `A100`、`A200`、`A400`、および `A700` バリエーションは含まれませんが、`primary` および `secondary` カラーには 14 カラー バリエーションすべてが含まれます。2014 Material Design カラー パレットに含まれない `info`、`success`、`warn`、`error`、`surface` の 5つのカラーを追加しました。

上記のカラーに加えて、各カラー バリエーションに **Level AA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 準拠の `contrast` カラーも含まれています。つまり、対応する `contrast` カラー バリエーションをベースカラー バリエーションの前景カラーとして安全に使用できます。

> [!Note]
> コントラスト カラーはビルド時に生成されるため、CSS 変数をオーバーライドしても、対応するコントラスト カラーは更新されません。

以下は、Light Bootstrap パレットで宣言された `primary` カラーの抜粋です。

```css
:root {
  //...
  --ig-primary-500: #09f;
  --ig-primary-500-contrast: black;
  --ig-primary-600: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.89));
  --ig-primary-600-contrast: black;
  --ig-primary-700: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.81));
  //...
  --ig-secondary-400: hsl(from var(--ig-secondary-500) h calc(s * 0.875) calc(l * 1.08));
  --ig-secondary-400-contrast: black;
  --ig-secondary-500: #df1b74;
  --ig-secondary-500-contrast: white;
  --ig-secondary-600: hsl(from var(--ig-secondary-500) h calc(s * 1.26) calc(l * 0.89));
  --ig-secondary-600-contrast: white;
  //...
}
```

すべてのプライマリ カラー バリエーションは、1 つの基本変数カラー バリエーション `--ig-primary-500` から派生します。他のカラー変数 (`--ig-secondary-500`、`--ig-surface-500` など) にも同様のことが当てはまります。他のバリエーションは、メイン変数カラー バリエーション `500` を受け取り、割り当てられた変数バリエーション (`600`、`700` など) に応じて `saturation` と `lightness` を変更する相対カラー関数 `hsl()` によって生成されます。`primary`、`secondary`、`surface`、またはその他のカラーのすべてのバリエーションを実行時に変更できるため、この方法を使用することにしました。

> [!WARNING]
> コントラスト カラーは他の部分のように CSS 実行時に生成されないため、メイン カラー バリエーション (`500`) を変更しても、コントラスト カラーは更新されません。手動で変更する必要があります。この動作は今後のリリースで改善され、コントラスト カラーも CSS 実行時に計算されるようになります。

## パレットの定義

パレットにあるカラー バリエーションを変更したい場合は、その `500` カラー バリエーションをオーバーライドできます。たとえば、プライマリ カラーを変更するのは簡単です。

```css
:root {
  --ig-primary-500: #09f;
}
```

これにより、他のすべてのプライマリ バリエーションが自動的に更新されます。

各カラーのカラー バリエーションは単色です。これは、すべてのカラー バリエーションが相対カラー関数 `hsl()` を使用して生成されるためです。

```css
:root {
  --ig-primary-600: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.89));
}
```

## スコープ

パレットでカラーをオーバーライドする方法は比較的簡単です。_global_ パレットを更新するには、アプリケーションの `styles.css` ファイルの `:root` セレクターにカラー バリエーションをスコープします。

たとえば、企業のプライマリ カラーが `#9f349c` で、そのプライマリ カラー バリエーションを作成するとします。必要なのは、`--ig-primary-500` 変数を、RGB、HEX などの任意のカラー値タイプの目的のカラーに置き換えることだけです。

```css
:root {
  --ig-primary-500: #9f349c;
}
```

これにより、各基本カラー バリエーションが自動的に変更されます。

単一のグローバル パレット以外に、他の CSS セレクターにスコープされる複数のパレットを作成することもできます。たとえば、青と赤のパレットをクラス セレクターにスコープできます。

```css
/* styles.css */

.blue-theme {
  --ig-primary-500: #0008ff;
}

.red-theme {
  --ig-primary-500: #ff0400;
}
```

class 属性の値を `blue-theme` から `red-theme` に変更することで、アプリケーションのカラーを簡単に変更できます。

## ダークとライト

{ProductName} のパレットは、テーマを明るくするか暗くするかを示します。最も影響を受ける 2 つのカラーは、`gray` と `surface` です。すべてのテーマの `gray` カラー バリエーションは、`#fff` などの非常に明るい色合いか、あるいは `#222` などの非常に暗い色合いに基づきます。ライト テーマには暗い色合いの `gray` に基づいたグレー カラーのバリエーションがあり、ダーク テーマはその反対で、すべての `gray` カラー バリエーションは白い色合いです。これらの `gray` カラーは、他のカラー (通常は `surface` カラー) に対して表示されます。テーマを適切に表示するために、`surface` のカラーは常にグレースケールの `gray` の反対の明度に設定します。

ライト テーマとダーク テーマの両方について、`gray` と `surface` のカラー バリエーションの完全なリストを以下に示します。

**Bootstrap Light:**
```css
:root {
  //...
  /* surface is set to light color*/
  --ig-surface-500: white;
  //...
  /* grays are based on dark gray to contrast the surface color */
  --ig-gray-500: hsl(0, 0%, 62%);
  //...
}
```

**Bootstrap Dark:**
```css
:root {
  //...
  /* surface is set to dark color*/
  --ig-surface-500: #222;
  //...
  /* grays are based on light gray to contrast the surface color */
  --ig-gray-500: hsl(0, 0%, 74%);
  //...
}
```

`gray` と `surface` カラー バリエーションはほとんどのコンポーネントで使用されており、外観全体に大きな影響を与えるため、その変更には注意が必要です。

## その他のカラー

ここまでで、`primary`、`secondary`、`gray`、`surface` のカラー バリエーションと、それらをオーバーライドする方法を説明しました。さらに 4 つのカラーがあります - `info`、`success`、`warn`、`error`。通常、異なる状態のカラーを設定するために使用されます。たとえば、`igc-input-group` コンポーネントは、入力検証状態でこれらのカラーを使用します。これらは他のカラー バリエーションと同様に変更できます。`500` バリエーションを設定するだけで、他のすべてのバリエーションが生成されます。

```css
:root {
  --ig-info-500: #1377d5;
  --ig-success-500: #4eb862;
  --ig-warn-500: #faa419;
  --ig-error-500: #ff134a;
}
```

## API リファレンス

- `Palettes`