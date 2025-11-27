---
title: {Platform} {GridLiteTitle} セル テンプレート | {ProductName} | MIT ライセンス
_description: カスタム Grid Lite セル レンダラーを構成およびカスタマイズします。オープンソースの {Platform} {GridLiteTitle} を使用してアプリを作成できます。今すぐお試しください。
_keywords: cell template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, セル テンプレート, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# 列セル テンプレート

デフォルトでは、グリッドは列のキーを使用してセル内の値を文字列としてレンダリングします。基本的なシナリオではこれで問題ありませんが、レンダリング結果をカスタマイズしたい場合や、最終出力が異なるデータ フィールドの組み合わせである場合は、セル テンプレート レンダラーを使用します。

列の `cellTemplate` プロパティを設定することで、これを実現できます。

<!-- React, WebComponents -->

```typescript
{
  cellTemplate?: (params: GridLiteCellContext<T, K>) => TemplateResult;
}
```

<!-- End: React, WebComponents -->

## フォーマッタ関数として使用する

簡単なシナリオでは、必要に応じてフォーマット済みの値を返すだけで済みます。以下は数値をロケール通貨形式で表示する例です。

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

{
  ...
  /** 値 `value = 123456.789` に対してカスタム通貨形式を返します。 */
  cellTemplate: (params) => asCurrency(params.value) // => "€123,456.79"
  ...
}
```

<!-- End: React, WebComponents -->

データ ソース内の異なるフィールドの値を組み合わせることも可能です。
<!-- TODO: 
Refer to the API documentation for `GridLiteCellContext` for more information. -->

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

{
  ...
  /** 価格が 99.99 の品目 10 個の注文に対してカスタム通貨形式を返します。 */
  cellTemplate: ({value, row}) => asCurrency(value * row.data.count) // => "€999.90"
  ...
}
```
<!-- End: React, WebComponents -->

## カスタム DOM テンプレート

`cellTemplate` プロパティを値フォーマッタとして使用する以外に、独自の DOM テンプレートを作成することもできます。これはセルコンテナー内にレンダリングされます。

<a href="https://lit.dev/" target="_blank">Lit</a> の機能と<a href="https://lit.dev/docs/templates/expressions/" target="_blank">タグ付きテンプレート構文</a>を再利用して宣言的な DOM フラグメントを作成しています。

標準の DOM 要素だけでなく、他のライブラリの Web コンポーネントもテンプレート化できます。

<!-- React, WebComponents -->

```typescript
// Lit パッケージから `html` タグ関数をインポートします。
import { html } from "lit";

{
  key: 'rating',
  // グリッド内の `rating` 値を表すために別の Web コンポーネントを使用します。
  cellTemplate: ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`
  ...
}
```

<!-- End: React, WebComponents -->

>[!NOTE]
>テンプレートが複雑であればあるほど、パフォーマンス コストが増加します。パフォーマンスが重要な場合は複雑な DOM 構造を避けてください。

## セル コンテキスト オブジェクト

カスタム セル レンダラーには `GridLiteCellContext` オブジェクトがパラメータｖとして渡され、以下のプロパティを持ちます。

<!-- React, WebComponents -->
```typescript
/**
 * 行セル テンプレート コールバックのコンテキスト オブジェクトです。
 */
export interface GridLiteCellContext<
  T extends object,
  K extends Keys<T> = Keys<T>
> {
  /**
   * テンプレートのセル要素の親要素です。
   */
  parent: GridLiteCell<T>;
  /**
   * セルを含む行要素です。
   */
  row: GridLiteRow<T>;
  /**
   * この列の現在の構成です。
   */
  column: ColumnConfiguration<T, K>;
  /**
   * このセルに対するデータ ソースの値です。
   */
  value: PropertyType<T, K>;
}
```
<!-- End: React, WebComponents -->

`sample="/{GridLiteSample}/column-config-basic", height="600", alt="{Platform} {GridLiteTitle} 列の基本構成"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [ソート](sorting.md)
- [フィルタリング](filtering.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})
