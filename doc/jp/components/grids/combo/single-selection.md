---
title: {Platform} ComboBox コンポーネント - {ProductName}
_description: {Platform} Combo コンポーネントは、基本的な HTML 入力、選択、フィルタリング、およびカスタム ドロップダウン リストの機能を組み合わせた強力な入力を提供します。無料でお試しください。
_keywords: {ProductName}, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, {Platform}, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} ComboBox コンポーネント
mentionedTypes: ['Combo', 'Single Selection Combo', 'ComboItem', 'ComboHeader', 'ComboList']
_language: ja
---

# {Platform} 単一選択 ComboBox

{Platform} `ComboBox` は、単一選択モードと、メインの入力プロンプトを介した項目リストのクイック フィルタリングをサポートしています。ユーザーは、数文字タイプすることで、オプションのリストに探している項目を表示できます。Enter キーを押すと、最初に強調表示された一致が選択されます。

## {Platform} 単一 Selectoin の例

単一選択とクイック フィルタリングを有効にするには、`ComboBox` コンポーネントで `SingleSelect` プロパティを設定します。ユーザー エクスペリエンスとキーボード ナビゲーションはほとんど変わりませんが、オプション リストの上にある特別なフィルター ボックスに検索クエリを入力する代わりに、メインの入力ボックスが使用されます。

```html
<igc-combo single-select></igc-combo>
```

`sample="/grids/combo/simplified", height="320", alt="{Platform} Single Selection Combo Example"`

<div class="divider--half"></div>

## 選択 API

`SingleSelect` プロパティが適用された ComboBox の選択 API はほとんど同じままですが、このプロパティが設定されていない ComboBox と比べて重要な違いがいくつかあります。

主な違いは、一度に 1 つの項目しか選択できないことです。たとえば、コンボ コンポーネントに `ValueKey` を指定した場合、複数の項目を `Select`/`Deselect` メソッドに渡しても効果はありません。これは、以前に選択した項目が、新しい選択を行うと自動的に選択解除されることも意味します。

単一の選択コンボでプログラムによって項目を選択 / 選択解除する方法は次のとおりです。

#### 項目の選択:

```ts
// select the item matching the 'BG01' value of the value key field.
combo.select('BG01');
```

新たに選択せずに項目の選択を解除するには、`deselect` メソッドを呼び出します。

#### 項目の選択解除:

```ts
// deselect the item matching the 'BG01' value of the value key field.
combo.deselect('BG01');
```

## 無効な機能

当然のことながら、一部の構成オプションは単一選択 ComboBox では効果がありません。

### プレースホルダー

`PlaceholderSearch` プロパティに値を割り当てても結果は得られません。これは、通常、オプションのリストの上に配置されるフィルター入力が単一の選択 ComboBox に存在しないためです。

### オプション リストのオートフォーカス

単一選択 ComboBox に `AutofocusList` オプションを設定しても効果はありません。

## キーボード ナビゲーション

キーボード ナビゲーションは、非単一選択 ComboBox と同じように動作しますが、メイン入力がフィルタリング プロンプトの役割を果たし、フィルタリング / 検索入力に適用されるすべてのキーボード アクションがメイン入力プロンプトに移動される点が異なります。

## その他の機能

他のすべての機能は、非単一選択 ComboBox コンポーネントと同じように動作します。

## API リファレンス

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
