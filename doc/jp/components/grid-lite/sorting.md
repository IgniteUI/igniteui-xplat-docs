---
title: {Platform} {GridLiteTitle} ソート | {ProductName} | MIT ライセンス
_description: {Platform} {GridLiteTitle} 向けに、ソート操作、ソート カスタマイズ、リモート ソートを備えた {GridLiteTitle} をお試しください。デモと例を参照して、次のアプリを構築してください。
_keywords: sorting, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, ソート, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# ソート操作
<!-- React, WebComponents -->
{GridLiteTitle} はデータ ソースに対してソート操作をサポートします。ソートは列単位で制御され、ソート可能な列とソート不可の列を設定できます。グリッド自体も特定のソート動作を制御します。デフォルトでは、`sort` プロパティで明示的に設定されない限り、列のソートは無効です。
<!-- end: React, WebComponents -->
<!-- Blazor -->
{GridLiteTitle} はデータ ソースに対してソート操作をサポートします。ソートは列単位で制御され、ソート可能な列とソート不可の列を設定できます。グリッド自体も特定のソート動作を制御します。デフォルトでは、`Sort` プロパティで明示的に設定されない限り、列のソートは無効です。
<!-- end: Blazor -->

```typescript
{
  key: 'price',
  sort: true
}
```

```razor
new IgbColumnConfiguration
{
    Key = "Price",
    Sort = true
}
```

<!-- React, WebComponents -->
`sort` プロパティは、単純なブール値、または追加の構成オプションを公開する `ColumnSortConfiguration` オブジェクトのいずれかになります。
<!-- end: React, WebComponents -->
<!-- Blazor -->
`Sort` プロパティは、単純なブール値、または追加の構成オプションを公開する `IgbColumnSortConfiguration` オブジェクトのいずれかになります。
<!-- end: Blazor -->

```typescript
{
  key: 'name',
  sort: {
    /**
     * string データ タイプの場合、この列のソート操作で大文字と小文字を区別するかどうかを制御します。
     * 既定では、string タイプのソート操作は大文字と小文字を区別しません。
     */
    caseSensitive: true,
    /**
     * この列のソート操作に使用されるカスタム比較関数を指定します。
     *
     * 次のサンプルでは、`name` の値をその長さに基づいて比較します。
     */
    comparer: (a, b) => a.length - b.length
  }
}
```

```razor
new IgbColumnConfiguration
{
    Key = "Name",
    Sort = new IgbColumnSortConfiguration
    {
        /**
        * string データ タイプの場合、この列のソート操作で大文字と小文字を区別するかどうかを制御します。
        * 既定では、string タイプのソート操作は大文字と小文字を区別しません。
        */
        CaseSensitive = true,
        /**
        * この列のソート操作に使用されるカスタム比較関数を指定します。
        *
        * 次のサンプルでは、`Name` の値をその長さに基づいて比較します。
        */
        Comparer = (a, b) => ((string)a).Length - ((string)b).Length
    }
}
```


`sample="/{GridLiteSample}/sort-config-sample", height="600", alt="{Platform} {GridLiteTitle} ソート構成"`

## 単一および複数列ソート
<!-- React, WebComponents -->
{GridLiteTitle} は単一および複数列ソートの両方をサポートします。複数列はデフォルトで有効で、グリッドの `sortConfiguration` プロパティを通じて設定可能です。
<!-- end: React, WebComponents -->

<!-- Blazor -->
{GridLiteTitle} は単一および複数列ソートの両方をサポートします。複数列はデフォルトで有効で、グリッドの `SortConfiguration` プロパティを通じて設定可能です。
<!-- end: Blazor -->

```typescript
grid.sortConfiguration = { multiple: false, triState: true };
```

```razor
grid.SortConfiguration = new IgbGridLiteSortConfiguration { Multiple = false, TriState = true };
```


>[!NOTE]
>単一/複数列ソートの動作は、ユーザーが {GridLiteTitle} を操作する方法を制御します。API で複数の式によるソートを実行しても、単一ソートが有効な場合でも動作します。

### 3 状態ソート
<!-- React, WebComponents -->
さらに、{GridLiteTitle} は 3 状態ソートをサポートし、デフォルトで有効です。グリッドの `sortConfiguration` プロパティの `triState` 設定に応じて、ユーザーは次の状態を循環します:
<!-- end: React, WebComponents -->
<!-- Blazor -->
さらに、{GridLiteTitle} は 3 状態ソートをサポートし、デフォルトで有効です。グリッドの `SortConfiguration` プロパティの `TriState` 設定に応じて、ユーザーは次の状態を循環します:
<!-- end: Blazor -->


- **3 状態有効**

  - ```typescript
    ascending -> descending -> none -> ascending
    ```

- **3 状態無効**

  - ```typescript
    ascending -> descending -> ascending
    ```

<!-- React, WebComponents -->
`none` はデータの初期状態で、グリッドによるソートが適用されていません。
<!-- end: React, WebComponents -->
<!-- Blazor -->
`None` はデータの初期状態で、グリッドによるソートが適用されていません。
<!-- end: Blazor -->

### ソート インジケーター

複数列ソートが有効な場合、列ヘッダーにはソートインジケーターが表示されます。これはソート操作が適用された順序を示す番号です。

<!-- React, WebComponents -->
次のサンプルは、グリッドの `sortConfiguration` の組み合わせと、その反映例を示します。
<!-- end: React, WebComponents -->
<!-- Blazor -->
次のサンプルは、グリッドの `SortConfiguration` の組み合わせと、その反映例を示します。
<!-- end: Blazor -->

`sample="/{GridLiteSample}/sort-config-grid", height="600", alt="{Platform} {GridLiteTitle} ソート構成グリッド"`

## ソート モデル

<!-- React, WebComponents -->
{GridLiteTitle} におけるソート操作の基本単位は `SortExpression` で、以下のプロパティを持ちます:
<!-- end: React, WebComponents -->
<!-- Blazor -->
{GridLiteTitle} におけるソート操作の基本単位は `SortExpression` で、以下のプロパティを持ちます:
<!-- end: Blazor -->


```typescript
type SortExpression<T> = {
  /**
   * ソート操作の対象列の `key`。
   */
  key: keyof T;
  /**
   * 操作のソート方向。
   */
  direction: 'ascending' | 'descending' | 'none';
  /**
   * 操作を大文字と小文字を区別するかどうかを指定します。デフォルトの string タイプに適用されます。
   * 明示的に渡されていない場合、該当する列のソート設定の値が使用されます。
   */
  caseSensitive?: boolean;
  /**
   * 操作に対してカスタム比較関数を指定します。
   * 該当する列のソート設定が適用可能な場合、その値が使用されます。
   */
  comparer?: SortComparer<T, T[keyof T]>;
};
```

```razor
public class IgbGridLiteSortExpression
{
    /// <summary>
    /// ターゲット列。
    /// </summary>
    [JsonPropertyName("key")]
    public string Key { get; set; }

    /// <summary>
    /// この操作のソート方向。
    /// </summary>
    [JsonPropertyName("direction")]
    public GridLiteSortingDirection Direction { get; set; }

    /// <summary>
    /// ソート操作で大文字と小文字を区別するかどうかを指定します。
    /// この値が指定されていない場合、列のソート構成に基づいて解決されます。
    /// </summary>
    [JsonPropertyName("caseSensitive")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? CaseSensitive { get; set; }

    /// <summary>
    /// 操作に対してカスタム比較関数。
    /// 注: これは Blazor では直接サポートされていないため、JavaScript 相互運用性が必要になります。
    /// </summary>
    [JsonIgnore]
    internal Func<object, object, int> Comparer { get; set; }
}
```

グリッドはこれらの式をソート API メソッドや設定で使用し、ユーザー操作時にイベントやソート状態を生成します。詳細は以下を参照してください。

## ソート API

<!-- React, WebComponents -->
{GridLiteTitle} は、ソート操作を API から適用するために 2 つの方法を提供します。`GridLite.sort()`/`GridLite.clearSort()` メソッドを使用するか、`GridLite.sortExpressions` プロパティを使用します。

`sort()` メソッドは、単一式または複数のソート式の配列を受け取り、それらに基づいてグリッド データをソートします。
<!-- end: React, WebComponents -->

<!-- Blazor -->
{GridLiteTitle} は、ソート操作を API から適用するために 2 つの方法を提供します。`GridLite.Sort()`/`GridLite.ClearSort()` メソッドを使用するか、`GridLite.SortExpressions` プロパティを使用します。

`Sort()` メソッドは、単一式または複数のソート式の配列を受け取り、それらに基づいてグリッド データをソートします。
<!-- end: Blazor -->

```typescript
// 単一
grid.sort({ key: 'price', direction: 'descending' });

// 複数
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```

```razor
// 単一
await grid.Sort(new IgbGridLiteSortExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending });

// 複数
await grid.Sort(new IgbGridLiteSortExpression[]
{
    new IgbGridLiteSortExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortExpression { Key = "Name", Direction = GridLiteSortingDirection.Descending }
});
```

<!-- React, WebComponents -->
`clearSort()` メソッドは、その名の通り、単一列またはグリッド全体のソート状態をクリアします。引数に応じて挙動が変わります。
<!-- end: React, WebComponents -->
<!-- Blazor -->
`ClearSort()` メソッドは、その名の通り、単一列またはグリッド全体のソート状態をクリアします。引数に応じて挙動が変わります。
<!-- end: Blazor -->

```typescript
// `price` 列のソート状態をクリアします。
grid.clearSort('price');

// グリッドのソート状態をクリアします。
grid.clearSort();
```

```razor
// `Price` 列のソート状態をクリアします。
await grid.ClearSort("Price");

// グリッドのソート状態をクリアします。
await grid.ClearSort();
```

### 初期のソート状態

<!-- React, WebComponents -->
`sortExpressions` プロパティは `sort()` メソッド呼び出しと同様の動作をします。これはグリッド内のソート状態を制御する宣言的な方法を公開していますが、最も便利なプロパティは、{GridLiteTitle} が最初にレンダリングされるときに初期ソート状態を設定できることです。
<!-- end: React, WebComponents -->

<!-- Blazor -->
`SortExpressions` プロパティは `Sort()` メソッド呼び出しと同様の動作をします。これはグリッド内のソート状態を制御する宣言的な方法を公開していますが、最も便利なプロパティは、{GridLiteTitle} が最初にレンダリングされるときに初期ソート状態を設定できることです。
<!-- end: Blazor -->

<!-- React, WebComponents -->
たとえば、Lit ベースのサンプルを次に示します。

```typescript
{
  sortState: SortExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortExpressions=${sortState}></igc-grid-lite>`
  }
}
```
<!-- end: React, WebComponents -->

<!-- Blazor -->
例:

```razor
private IgbGridLiteSortExpression[] sortState = new[]
{
    new IgbGridLiteSortExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortExpression { Key = "Name", Direction = GridLiteSortingDirection.Ascending, CaseSensitive = true }
};

<IgbGridLite SortExpressions="sortState" />
```
<!-- end: Blazor -->

これを使用すると、コンポーネントの現在のソート状態を取得し、アプリケーション内の別の状態に応じて追加の処理を実行できます。

```typescript
const state = grid.sortExpressions;
// 現在のソート状態を保存します
saveUserSortState(state);
```

```razor
var state = grid.SortExpressions;
// 現在のソート状態を保存します
SaveUserSortState(state);
```

## イベント

<!-- React, WebComponents -->
UI を通じてソート操作が実行されると、コンポーネントはカスタム `sorting` イベントを発行します。`detail` プロパティには {GridLiteTitle} が適用するソート式が含まれます。イベントはキャンセル可能で、キャンセルすると現在のソート操作が停止します。

グリッドが新しいソート状態を適用した後、`sorted` イベントが発行されます。最後のソート操作で使用された式を含み、キャンセルはできません。

```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortExpression<T>>) => { ... });
```
<!-- End: React, WebComponents -->

<!-- Blazor -->
UI を介してソート操作が実行されると、コンポーネントは `Sorting` および `Sorted` イベントを発生させます。`Sorting` イベントはキャンセル可能で、キャンセルすると現在のソート操作が停止します。

グリッドが新しいソート状態を適用した後、`Sorted` イベントが発生します。最後のソート操作で使用された式を含み、キャンセルはできません。

```razor
<IgbGridLite Sorting="OnSorting" Sorted="OnSorted" />

@code {
    private void OnSorting(IgbGridLiteSortingEventArgs args)
    {
        // sorting イベントの処理
    }

    private void OnSorted(IgbGridLiteSortedEventArgs args)
    {
        // sorted イベントの処理
    }
}
```
<!-- end: Blazor -->

次のサンプルでは、**Name** と **Rating** 列のソートを試みると操作がキャンセルされます。下記のイベント ログで動作を確認してください。

`sample="/{GridLiteSample}/sort-config-events", height="600", alt="{Platform} {GridLiteTitle} ソート構成イベント"`
<!-- React, WebComponents -->
## リモート ソート操作

ソートをリモートで実行する必要がある場合、または現在の状態/データをどこかのサーバーに保存する必要がある場合、{GridLiteTitle} は、この動作を実装およびカスタマイズできるフックを公開します。

<!-- React, WebComponents -->
`dataPipelineConfiguration` プロパティを使用すると、ソート操作が実行されるたびに呼び出されるカスタム フックを提供できます。コールバックには `DataPipelineParams` オブジェクトが渡されます。

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * グリッドの現在のデータ状態。
   */
  data: T[];
  /**
   * グリッド コンポーネント。
   */
  grid: IgcGridLite<T>;
  /**
   * 実行されるデータ操作のタイプ。
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```
<!-- End: React, WebComponents -->

<!-- Blazor -->
`DataPipelineConfiguration` プロパティを使用すると、ソート操作が実行されるたびに呼び出されるカスタム フックを提供できます。コールバックには `DataPipelineParams` オブジェクトが渡されます。

```razor
public class DataPipelineParams
{
    /// <summary>
    /// グリッドの現在のデータ状態。
    /// </summary>
    [JsonPropertyName("data")]
    public object[] Data { get; set; }

    /// <summary>
    /// 実行されるデータ操作のタイプ。
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; set; } // "sort" または "filter"
}
```

```razor
grid.DataPipelineConfiguration = new DataPipelineParams
{
    Sort = async (params) => 
    {
        // カスタム ソート ロジック
        return await Task.FromResult(params.Data);
    }
};
```
<!-- end: Blazor -->

カスタム コールバックは、解決されるまでグリッドが待機するため、非同期にすることができます。

次の例では、コンポーネントのソート状態に基づいて生成された REST エンドポイントを反映して、リモート ソート操作をモックします。

`sample="/{GridLiteSample}/sort-config-pipeline", height="600", alt="{Platform} {GridLiteTitle} ソート構成パイプライン"`

<!-- end: React, WebComponents -->

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [フィルタリング](filtering.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})
