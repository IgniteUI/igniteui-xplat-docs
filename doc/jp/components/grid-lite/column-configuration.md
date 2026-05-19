---
title: {Platform} {GridLiteTitle} 列の構成 | {ProductName} | MIT ライセンス
_description: Grid Lite 列の構成と列のプロパティ。オープン ソースの {Platform} {GridLiteTitle} をお試しください。軽量でありながら、必要な機能がすべて搭載されています。
_keywords: column configuration, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, 列の構成, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# 列の構成
<!-- React, WebComponents -->

列は、グリッド内の列子コンポーネントを使用して宣言的に定義されます。グリッド行内の関連データをマッピングしてレンダリングするためにも使用されます。`field` プロパティは、列識別子として機能するため、列に必須の唯一のプロパティです。

<!-- end: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite .data=${data}>
  <igc-grid-lite-column
    field="account"
    header="Account Number"
    ...
  ></igc-grid-lite-column>
  <!-- 追加の列が続きます -->
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <igc-grid-lite data={data}>
    <igc-grid-lite-column
      field="account"
      header="Account Number"
      ...
    ></igc-grid-lite-column>
    <!-- 追加の列が続きます -->
  </igc-grid-lite>
);
```

<!-- Blazor -->

列は、グリッド内の `<IgbGridLiteColumn>` 子要素を使用して宣言的に定義されます。`Field` プロパティは、列識別子として機能するため、列に必須の唯一のプロパティです。グリッド行内の関連データをマッピングしてレンダリングするためにも使用されます。

```razor
<IgbGridLite Data="@products">
    <IgbGridLiteColumn 
        Field="Name"
        Header="Product Name"
        DataType="GridLiteColumnDataType.String" />
    <!-- 追加の列が続きます -->
</IgbGridLite>
```

## データ ソースに基づく設定

グリッドは、`AutoGenerate` が true に設定されている場合、提供されたデータ ソースに基づいて列の構成を推測することをサポートします。データ内のレコードに基づいて、適切な `Field` および `DataType` プロパティを推測しようとします。

```razor
<IgbGridLite AutoGenerate=true Data="@products"/>
@code {
    private List<ProductInfo> products;

    protected override void OnInitialized()
    {
        products = new List<ProductInfo>
        {
            new ProductInfo { Id = "1", Name = "example", Price = 10 },
            ...
        };
    }

    public class ProductInfo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
    }
}
```

<!-- end: Blazor -->

<!-- React, WebComponents -->

## データ ソースに基づく設定

グリッドは、`autoGenerate` が true に設定されている場合、提供されたデータ ソースに基づいて列の構成を推測することをサポートします。データ内のレコードに基づいて、適切な `field` および `dataType` プロパティを推測しようとします。

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```
<!-- end: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite auto-generate .data=${data}></igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <igc-grid-lite data={data} auto-generate></igc-grid-lite>
);
```

前のスニペットでは、グリッドは次と同等の列を自動的に作成します:

<!-- WebComponents -->
```html
<igc-grid-lite .data=${data}>
  <igc-grid-lite-column field="entryId" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="source" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="ts" data-type="number"></igc-grid-lite-column>
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <igc-grid-lite data={data}>
    <igc-grid-lite-column field="entryId" data-type="string"></igc-grid-lite-column>
    <igc-grid-lite-column field="source" data-type="string"></igc-grid-lite-column>
    <igc-grid-lite-column field="ts" data-type="number"></igc-grid-lite-column>
  </igc-grid-lite>
);
```

```razor
<IgbGridLite Data="@products">
    <IgbGridLiteColumn Field="Id" DataType="GridLiteColumnDataType.String" />
    <IgbGridLiteColumn Field="Name" DataType="GridLiteColumnDataType.String" />
    <IgbGridLiteColumn Field="Price" DataType="GridLiteColumnDataType.Number" />
</IgbGridLite>
```

追加のカスタマイズを行わずに一部のデータをすばやくレンダリングする場合に便利です。


## 追加の列設定

列は、カスタマイズのためのいくつかのプロパティを公開します:

### 列の幅

デフォルトでは列幅は **minmax(136px, 1fr)** で、最小 136px、最大は {GridLiteTitle} の利用可能幅の 1 単位です。これにより、列は流動的でレスポンシブになり、グリッド幅の変更に対応します。

<!-- React, WebComponents -->
列の幅を変更するには、列の `width` プロパティを使用します。
<!-- end: React, WebComponents -->


<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" width="250px"></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <igc-grid-lite>
    <igc-grid-lite-column field="price" width="250px"></igc-grid-lite-column>
  </igc-grid-lite>
);
```

<!-- Blazor -->
列の幅を変更するには、`IgbGridLiteColumn` コンポーネントの `Width` パラメーターを使用します。

```razor
<IgbGridLiteColumn Field="Price" Width="250px" />
```

<!-- end: Blazor -->

このプロパティは<a href="https://developer.mozilla.org/ja-jp/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">有効な CSS 長さ単位</a>を受け入れます.

### 列の非表示
<!-- React, WebComponents -->
列の `hidden` プロパティを設定することで、列を非表示/表示できます。
<!-- end: React, WebComponents -->


<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" hidden></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <igc-grid-lite>
    <igc-grid-lite-column field="price" hidden></igc-grid-lite-column>
  </igc-grid-lite>
);
```

<!-- Blazor -->
`IgbGridLiteColumn` コンポーネントの `Hidden` パラメーターを設定することで、列を非表示/表示できます。

```razor
<IgbGridLiteColumn Field="Price" Hidden="true" />
```

<!-- end: Blazor -->

### 列のリサイズ

<!-- React, WebComponents -->
{GridLiteTitle} の各列は、列要素の `resizable` プロパティを設定することで、サイズ変更可能に構成できます。
<!-- end: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" resizable></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <igc-grid-lite>
    <igc-grid-lite-column field="price" resizable></igc-grid-lite-column>
  </igc-grid-lite>
);
```

<!-- Blazor -->
{GridLiteTitle} の各列は、`IgbGridLiteColumn` コンポーネントの `Resizable` パラメーターを設定することで、サイズ変更可能に構成できます。

```razor
<IgbGridLiteColumn Field="Price" Resizable="true" />
```

<!-- end: Blazor -->

列がサイズ変更可能に設定されている場合、列ヘッダー右端をドラッグして幅を増減できます。リサイズ領域をダブルクリックすると、自動調整がトリガーされ、セルやヘッダーの最大コンテンツに合わせて幅が設定されます。

>[!NOTE]
>「流動的」幅 (fr、%、など) の列は、グリッドのリサイズ時に予期せぬ動作をする場合があります。アプリケーションのシナリオによっては、ユーザーがレイアウトのズレを経験しないように、「固定」単位を使用する方がよい場合があります。

以下のサンプルでは、さまざまな列プロパティと、それがレンダリングされたグリッドにどのように反映されるかを試すことができます。

`sample="/{GridLiteSample}/column-config-dynamic", height="600", alt="{Platform} {GridLiteTitle} 列のダイナミック構成"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [データ バインディング](binding.md)
- [ソート](sorting.md)
- [フィルタリング](filtering.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})