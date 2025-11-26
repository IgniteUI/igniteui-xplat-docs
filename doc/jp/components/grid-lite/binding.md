---
title: {Platform} {GridLiteTitle} データ バインディング - {ProductName} | MIT ライセンス
_description: {GridLiteTitle} のデータ バインディング。オープンソースの {Platform} {GridLiteTitle} を使用してアプリを作成できます。軽量でありながら、必要な機能がすべて揃っています。今すぐお試しください。
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

```typescript
grid.data = [...{
  /** レコードが続きます */
}];

// 新しいデータを反映するように列の構成を更新します。
grid.columns = [...];
```

```typescript
grid.data = [...{
  /** レコードが続きます */
}];

// 新しいデータを反映するように列の構成を更新します。
grid.columns = [...];
```

```razor
@code {
    grid.Data = new List<T>
    {
        // レコードが続きます
    };

    // 新しいデータを反映するように列の構成を更新します。
    grid.Columns = new List<IgbColumnConfiguration>
    {
        // 列定義
    };
}
```
<!-- React, WebComponents -->
グリッドで `autoGenerate` が有効になっている場合、古い列設定をリセットした場合にのみ、新しい列設定を「推測します」。
<!-- end: React, WebComponents -->

<!-- Blazor -->
グリッドで `AutoGenerate` が有効になっている場合、古い列設定をリセットした場合にのみ、新しい列設定を「推測します」。
<!-- end: Blazor -->

```typescript
grid.autoGenerate = true;

/** 列定義 */
grid.columns = [];

/** 新しいバインディング後、グリッドはバインドされたデータから列コレクションを推論します。 */
grid.data = [];
```

```razor
@code {
    grid.AutoGenerate = true;

    // 列定義
    grid.Columns = new List<IgbColumnConfiguration>();

    // 新しいバインディング後、グリッドはバインドされたデータから列コレクションを推論します。
    grid.Data = new List<T>();
}
```
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

* `{ComponentName}`
* `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [ソート](sorting.md)
- [フィルタリング](filtering.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})
