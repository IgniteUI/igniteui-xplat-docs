---
title: {Platform} {GridLiteTitle} フィルタリング | {ProductName} | MIT ライセンス
_description: {GridLiteTitle} のフィルター操作、フィルターのカスタマイズ、およびリモート フィルタリング。オープン ソースの {Platform} {GridLiteTitle} を使用してアプリを作成できます。今すぐお試しください。
_keywords: filtering, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, フィルタリング, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# {Platform} {GridLiteTitle} フィルター操作

<!-- React, WebComponents -->
{GridLiteTitle} は、データ ソースでのフィルター操作をサポートします。データ フィルタリングは列ごとに制御されるため、フィルタリング可能な列とフィルタリング不可能な列を設定できます。デフォルトでは、列構成オブジェクトの `filter` プロパティで明示的に構成されない限り、列のフィルタリングは無効になっています。
<!-- end: React, WebComponents -->

<!-- Blazor -->
{GridLiteTitle} は、データ ソースでのフィルター操作をサポートします。データ フィルタリングは列ごとに制御されるため、フィルタリング可能な列とフィルタリング不可能な列を設定できます。デフォルトでは、列構成オブジェクトの `Filter` プロパティで明示的に構成されない限り、列のフィルタリングは無効になっています。
<!-- end: Blazor -->

```typescript
{
  key: 'price',
  filter: true
}
```

```razor
new IgbColumnConfiguration
{
    Key = "LastName",
    Filter = true
}
```

<!-- React, WebComponents -->
`filter` プロパティは、単純なブール値、または追加の構成オプションを公開する `ColumnFilterConfiguration` オブジェクトのいずれかになります。

<!-- end: React, WebComponents -->
<!-- Blazor -->
`Filter` プロパティは、単純なブール値、または追加の構成オプションを公開する `IgbColumnFilterConfiguration` オブジェクトのいずれかになります。

<!-- end: Blazor -->

```typescript
{
  key: 'price',
  filter: {
    /**
     * string データ タイプの場合、この列のフィルター操作で大文字と小文字を区別するかどうかを制御します。
     * 既定では、string タイプのフィルター操作は大文字と小文字を区別しません。
     */
    caseSensitive: true;
  }
}
```

```razor
new IgbColumnConfiguration
{
    Key = "FirstName",
    Filter = new IgbColumnFilterConfiguration
    {
        /**
        * string データ タイプの場合、この列のフィルター操作で大文字と小文字を区別するかどうかを制御します。
        * 既定では、string タイプのフィルター操作は大文字と小文字を区別しません。
        */
        CaseSensitive = true
    }
},
```

`sample="/{GridLiteSample}/filtering-config", height="600", alt="{Platform} {GridLiteTitle} フィルタリング構成"`

## フィルター モデル

<!-- React, WebComponents -->
グリッド内のフィルター操作の構成要素は、次の構造を持つ `FilterExpression` です。
<!-- end: React, WebComponents -->
<!-- Blazor -->
グリッド内のフィルター操作の構成要素は、次の構造を持つ `IgbGridLiteFilterExpression` です。
<!-- end: Blazor -->

```typescript
export interface FilterExpression<T, K extends Keys<T> = Keys<T>> {
  /**
   * フィルター操作の対象となる列です。
   */
  key: K;
  /**
   * データ レコードに対して実行されるフィルター関数です。
   */
  condition: FilterOperation<T[K]> | OperandKeys<T[K]>;

  /**
   * フィルター条件関数で使用されるフィルター値です。
   *
   * @remarks
   * フィルター条件関数で使用されるフィルター値です。
   */
  searchTerm?: T[K];
  /**
   * この式が他の式と関係してフィルター操作でどのように解決されるべきか
   * を指定します。
   */
  criteria?: FilterCriteria;
  /**
   * ソート操作で大文字と小文字を区別するかどうかを指定します。
   *
   * @remarks
   * 指定されていない場合、値は列のフィルター構成 (存在する場合) に基づいて解決されます。
   */
  caseSensitive?: boolean;
}
```

```razor
public class IgbGridLiteFilterExpression
{
    /// <summary>
    /// フィルター操作の対象となる列です。
    /// </summary>
    [JsonPropertyName("key")]
    public string Key { get; set; }

    /// <summary>
    /// 適用するフィルター条件です。条件名 (string) または FilterOperation を指定できます。 // TODO
    /// </summary>
    [JsonPropertyName("condition")]
    public object Condition { get; set; }

    /// <summary>
    /// フィルター条件関数で使用されるフィルター値です。
    /// 単項条件の場合はオプションです。
    /// </summary>
    [JsonPropertyName("searchTerm")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object SearchTerm { get; set; }

    /// <summary>
    /// この式がフィルター操作でどのように解決されるべきかを指定します。
    /// 'and' - レコードはすべての条件を満たす必要があります。
    /// 'or' - レコードは少なくとも 1 つの条件を満たす必要があります。
    /// </summary>
    [JsonPropertyName("criteria")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string Criteria { get; set; } // "and" または "or"

    /// <summary>
    /// フィルター操作が大文字小文字を区別するかどうかを指定します。
    /// 指定されていない場合、値は列のフィルター構成に基づいて解決されます。
    /// </summary>
    [JsonPropertyName("caseSensitive")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? CaseSensitive { get; set; }
}
```

## フィルター API

<!-- React, WebComponents -->
{GridLiteTitle} は、API からフィルター操作を適用する 2 つの方法を提供します。`GridLite.filter()`/`GridLite.clearFilter()`メソッドまたは `Grid.Lite.filterExpressions` プロパティのいずれかを使用します。

`filter()` メソッドは、単一の式またはフィルター式の配列を受け入れ、それらの式に基づいてグリッド データをフィルターします。
<!-- end: React, WebComponents -->
<!-- Blazor -->
{GridLiteTitle} は、API からフィルター操作を適用する 2 つの方法を提供します。`GridLite.Filter()`/`GridLite.ClearFilter())`メソッドまたは `Grid.Lite.FilterExpressions` プロパティのいずれかを使用します。

`Filter()` メソッドは、単一の式またはフィルター式の配列を受け入れ、それらの式に基づいてグリッド データをフィルターします。
<!-- end: Blazor -->

```typescript
// Single
grid.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
grid.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith' searchTerm: 'g', criteria: 'or' },
]);
```

```razor
// Single
await grid.Filter(new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "contains", SearchTerm = "George" });

// Multiple
await grid.Filter(new IgbGridLiteFilterExpression[]
{
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "a" },
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "g", Criteria = "or" }
});
```
<!-- React, WebComponents -->
`clearFilter()` メソッドは、その名前が示すように、渡された引数に応じて、単一の列またはグリッド コンポーネント全体のフィルター状態をクリアします。
<!-- end: React, WebComponents -->
<!-- Blazor -->
`ClearFilter()` メソッドは、その名前が示すように、渡された引数に応じて、単一の列またはグリッド コンポーネント全体のフィルター状態をクリアします。
<!-- end: Blazor -->

```typescript
// `age` 列のフィルター状態をクリアします。
grid.clearFilter('age');

// グリッドのフィルター状態をクリアします。
grid.clearFilter();
```

```razor
// `Age` 列のフィルター状態をクリアします。
grid.ClearFilter("Age");

// グリッドのフィルター状態をクリアします。
grid.ClearFilter();
```

## 初期のフィルター状態

<!-- Blazor -->
`FilterExpressions` プロパティの動作は、`Filter()` メソッド呼び出しと非常に似ています。これはグリッド内のフィルター状態を制御する宣言的な方法を公開していますが、最も便利なプロパティは、{GridLiteTitle} コンポーネントが最初にレンダリングされるときに初期フィルター状態を設定できることです。

例:

```razor
private IgbGridLiteFilterExpression[] filterState = new[]
{
    new IgbGridLiteFilterExpression { Key = "Age", Condition = "greaterThan", SearchTerm = 21 },
    // 単項条件のため `SearchTerm` は不要です。
    new IgbGridLiteFilterExpression { Key = "Active", Condition = "true" }
};

<IgbGridLite FilterExpressions="filterState" />
```
<!-- end: Blazor -->

<!-- React, WebComponents -->
`filterExpressions` プロパティの動作は、`filter()` メソッド呼び出しと非常に似ています。これはグリッド内のフィルター状態を制御する宣言的な方法を公開していますが、最も便利なプロパティは、{GridLiteTitle} コンポーネントが最初にレンダリングされるときに初期フィルター状態を設定できることです。


たとえば、Lit ベースのサンプルを次に示します。

```typescript
{
  filterState: FilterExpression<User>[] = [
    { key: 'age', condition: 'greaterThan', searchTerm: 21 },
    /** 単項条件のため `searchTerm` は不要です。 */
    { key: 'active', condition: 'true' },
  ];

  render() {
    return html`<igc-grid-lite .filterExpressions=${filterState}></igc-grid-lite>`
  }
}
```

<!-- End: React, WebComponents -->

これを使用すると、コンポーネントの現在のフィルター状態を取得し、アプリケーション内の別の状態に応じて追加の処理を実行できます。

```typescript
const state = grid.filterExpressions;
// 現在のフィルター状態を保存します。
saveUserFilterState(state);
```

```razor
var state = grid.FilterExpressions;
// 現在のフィルター状態を保存します。
SaveUserFilterState(state);
```

## イベント
<!-- React, WebComponents -->
UI を通じてフィルター操作が実行されると、コンポーネントはカスタム `filtering` イベントを発行します。`detail` プロパティは、{GridLiteTitle} によって適用されるソート式です。イベントはキャンセル可能であり、キャンセルされると現在のフィルター操作が防止されます。

グリッドが新しいフィルター状態を適用すると、`filtered` イベントが発生します。対象列のフィルター状態を含み、このイベントはキャンセルできません。
<!-- end: React, WebComponents -->

<!-- Blazor -->
UI を介してソート操作が実行されると、コンポーネントは `Filtering` および `Filtered` イベントを発生させます。`Filtering` イベントはキャンセル可能であり、キャンセルされると現在のフィルター操作が防止されます。

グリッドが新しいソート状態を適用した後、`Filtered` イベントが発生します。対象列のフィルター状態を含み、このイベントはキャンセルできません。

<!-- end: Blazor -->

```typescript
grid.addEventListener('filtering', (event: CustomEvent<GridLiteFilteringEvent<T>>) => { ... });
grid.addEventListener('filtered', (event: CustomEvent<GridLiteFilteredEvent<T>>) => { ... });
```

```razor
<IgbGridLite Filtering="OnFiltering" Filtered="OnFiltered" />

@code {
    private void OnFiltering(IgbGridLiteFilteringEventArgs args)
    {
        // filtering イベントの処理
    }

    private void OnFiltered(IgbGridLiteFilteredEventArgs args)
    {
        // filtered イベントの処理
    }
}
```

`sample="/{GridLiteSample}/filtering-config-events", height="600", alt="{Platform} {GridLiteTitle} フィルタリング構成イベント"`

<!-- React, WebComponents -->
## リモート フィルター操作

フィルタリングをリモートで実行する必要がある場合、または現在の状態/データをどこかのサーバーに保存する必要がある場合、{GridLiteTitle} は、この動作を実装およびカスタマイズできるフックを公開します。
<!-- React, WebComponents -->
`dataPipelineConfiguration` プロパティを使用すると、フィルター操作が実行されるたびに呼び出されるカスタム フックを提供できます。コールバックには `DataPipelineParams` オブジェクトが渡されます。

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * グリッドの現在のデータ状態。
   */
  data: T[];
  /**
   * グリッド コンポーネント。
   */
  grid: GridLite<T>;
  /**
   * 実行されるデータ操作のタイプ。
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { filter: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```
<!-- End: React, WebComponents -->

<!-- Blazor -->
`DataPipelineConfiguration` プロパティを使用すると、フィルター操作が実行されるたびに呼び出されるカスタム フックを提供できます。コールバックには `DataPipelineParams` オブジェクトが渡されます。

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
grid.DataPipelineConfiguration = new DataPipelineConfiguration
{
    Filter = async (params) => 
    {
        // カスタム フォルター ロジック
        return await Task.FromResult(params.Data);
    }
};
```
<!-- end: Blazor -->


カスタム コールバックは、解決されるまでグリッドが待機するため、非同期にすることができます。

次の例では、コンポーネントのフィルター状態に基づいて生成された REST エンドポイントを反映して、リモート フィルター操作をモックします。

`sample="/{GridLiteSample}/filtering-config-remote", height="600", alt="{Platform} {GridLiteTitle} フィルタリング リモート構成"`

<!-- end: React, WebComponents -->

<!-- TODO ## API References
## API References

- `{ComponentName}`
- `Column`
-->

## その他のリソース

- [列の構成](column-configuration.md)
- [ソート](sorting.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})
