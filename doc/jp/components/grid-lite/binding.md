---
title: {Platform} {GridLiteTitle} データ バインディング - {ProductName} | MIT ライセンス
_description: {GridLiteTitle} のデータ バインディング。オープン ソースの {Platform} {GridLiteTitle} を使用してアプリを作成できます。軽量でありながら、必要な機能がすべて揃っています。今すぐお試しください。
_keywords: data binding, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, データ バインディング, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# {Platform} {GridLiteTitle} データ バインディング

<!-- React, WebComponents -->
{GridLiteTitle} は、データ ソースとしてプレーン オブジェクトの配列を受け入れます。各グリッド行は配列内のデータ レコードをレンダリングしたもので、行のセルは列の設定に基づいて制御されます。
<!-- end: React, WebComponents -->

<!-- Blazor -->
{GridLiteTitle} はデータ ソースとして `List<T>` を受け入れます。ここで、`T` はモデルを表します。各グリッド行は配列内のデータ レコードをレンダリングしたもので、行のセルは列の設定に基づいて制御されます。
<!-- end: Blazor -->

データの変換 (ソートやフィルターなど) を適用する場合、グリッドは元のデータ参照を変更しません。つまり、データ変換は元のソースには反映されません。グリッドはデータ配列内のオブジェクトの変更を追跡しないため、データ オブジェクトを直接変更しても反映されません。

## 実行時にデータ ソースを変更する

コンポーネントは実行時にデータ ソースの変更をサポートします。新しいソースが前のものと異なる「形状」を持つ場合、列の設定も更新する必要があります。

<!-- WebComponents -->
```typescript
grid.data = [...{
  /** レコードが続きます*/
}];
```

```html
<igc-grid-lite>
    <!-- 新しいデータを表すために、必要に応じて列の構成を更新し、列を追加または削除します。 -->
    <igc-grid-lite-column field="id"></igc-grid-lite-column>
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
this.gridRef.current.data = [...{
  /** レコードが続きます*/
}];

return (
    <igc-grid-lite data={data}>
        {/* 新しいデータを表すために、必要に応じて列の構成を更新し、列を追加または削除します。 */}
        <igc-grid-lite-column field="id"></igc-grid-lite-column>
    </igc-grid-lite>
);
```

```razor
<IgbGridLite Data="data">
    <!-- 新しいデータを表すために、必要に応じて列の構成を更新し、列を追加または削除します。 -->
    <IgbGridLiteColumn Field="Id" />
</IgbGridLite>

@code {
    this.data = new List<T>
    {
        // レコードが続きます
    };
}
```

<!-- React, WebComponents -->
グリッドで `autoGenerate` が有効になっている場合、データが変更されると新しい列の構成が自動的に「推測されます」。
<!-- end: React, WebComponents -->

<!-- Blazor -->
グリッドで `AutoGenerate` が有効になっている場合、データが変更されると新しい列の構成が自動的に「推測されます」。
<!-- end: Blazor -->

<!-- React, WebComponents -->
```typescript
grid.autoGenerate = true;

/** 新しいバインディング後、グリッドはバインドされたデータから列コレクションを推論します。 */
grid.data = [];
```
<!-- end: React, WebComponents -->

<!-- Blazor -->
```razor
<IgbGridLite Data="data" AutoGenerate="true" />

@code {
    // 新しいバインディング後、グリッドはバインドされたデータから列コレクションを推論します。
    this.data = new List<T>();
}
```
<!-- end: Blazor -->
<!-- React, WebComponents -->
>[!NOTE]
>{GridLiteTitle} のソート/フィルター状態は、この方法でデータ ソースを変更しても保持されます。
通常は `clearSort()` または `clearFilter()` を呼び出してリセットすることをお勧めします。
<!-- end: React, WebComponents -->

<!-- Blazor -->
>[!NOTE]
>{GridLiteTitle} のソート/フィルター状態は、この方法でデータ ソースを変更しても保持されます。
通常は `ClearSort()` または `ClearFilter()` を呼び出してリセットすることをお勧めします。
<!-- end: Blazor -->

以下のサンプルでは、グリッドに列の自動生成が有効になっています。データ切り替えボタンをクリックすると、列コレクションがリセットされ、新しいデータ ソースがグリッドにバインドされます。


`sample="/{GridLiteSample}/data-binding", height="600", alt="{Platform} {GridLiteTitle} データ バインディング"`

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
