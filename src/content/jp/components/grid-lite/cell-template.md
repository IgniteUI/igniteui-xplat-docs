---
title: {Platform} {GridLiteTitle} セル テンプレート | {ProductName} | MIT ライセンス
_description: カスタム Grid Lite セル レンダラーを構成およびカスタマイズします。オープン ソースの {Platform} {GridLiteTitle} を使用してアプリを作成できます。今すぐお試しください。
_keywords: cell template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, セル テンプレート, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# 列セル テンプレート

デフォルトでは、グリッドは列のフィールドを使用してセル内の値を文字列としてレンダリングします。これは基本的なシナリオでは問題ありませんが、レンダリングされる出力をカスタマイズしたい場合や、最終的な出力が異なるデータ フィールドの組み合わせである場合は、セル テンプレートをカスタマイズできます。

列の `cellTemplate` プロパティを設定することで、これを実現できます。

<!-- React, WebComponents -->

```typescript
// 列要素への参照を取得します
const column = document.querySelector('igc-grid-lite-column[field="price"]');

// cellTemplate プロパティを設定します
column.cellTemplate = (params: IgcCellContext<T, K>) => { return html`<!-- template content -->`};
```

<!-- End: React, WebComponents -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Price"></IgbGridLiteColumn>
```

<!-- End: Blazor -->

## フォーマッタ関数として使用する

簡単なシナリオでは、必要に応じてフォーマット済みの値を返すだけで済みます。以下は数値をロケール通貨形式で表示する例です。

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

// 列要素への参照を取得します
const column = document.querySelector('igc-grid-lite-column');

// 値 `value = 123456.789` に対してカスタム通貨形式を返します。
column.cellTemplate = (params) => asCurrency(params.value); // => "€123,456.79"
```

<!-- End: React, WebComponents -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Price"></IgbGridLiteColumn>
```

<!-- End: Blazor -->

データ ソース内の異なるフィールドの値を組み合わせることも可能です。
<!-- TODO:
詳細については、`GridLiteCellContext` の API ドキュメントを参照してください。 -->

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

// 列要素への参照を取得します
const column = document.querySelector('igc-grid-lite-column');

// 価格が 99.99 の品目 10 個の注文に対してカスタム通貨形式を返します
column.cellTemplate = ({value, row}) => asCurrency(value * row.data.count); // => "€999.90"
```
<!-- End: React, WebComponents -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Price"></IgbGridLiteColumn>
```
<!-- End: Blazor -->

## カスタム DOM テンプレート

`cellTemplate` プロパティを値フォーマッタとして使用する以外に、独自の DOM テンプレートを作成することもできます。これはセルコンテナー内にレンダリングされます。

<a href="https://lit.dev/" target="_blank">Lit</a> の機能と<a href="https://lit.dev/docs/templates/expressions/" target="_blank">タグ付きテンプレート構文</a>を再利用して宣言的な DOM フラグメントを作成しています。

標準の DOM 要素だけでなく、他のライブラリの Web コンポーネントもテンプレート化できます。

<!-- React, WebComponents -->

```typescript
// Lit パッケージから `html` タグ関数をインポートします。
import { html } from "lit";

// 列要素への参照を取得します
const column = document.querySelector('igc-grid-lite-column[field="rating"]');

// グリッド内の `rating` 値を表すために別の Web コンポーネントを使用します
column.cellTemplate = ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`;
```

<!-- End: React, WebComponents -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Rating"></IgbGridLiteColumn>
```

<!-- End: Blazor -->

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
