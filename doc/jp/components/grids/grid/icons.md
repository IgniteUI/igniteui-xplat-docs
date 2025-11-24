---
title: {Platform} {ComponentTitle} アイコンのカスタマイズ - インフラジスティックス
_description: {Platform} Grid のカスタム アイコンを構成します。
_keywords: icons, custom icons, igniteui for {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, アイコン, カスタム アイコン, インフラジスティックス
_license: MIT
mentionedTypes: ["Infragistics.Controls.Grid"]
_language: ja
---

# {Platform} Grid アイコンのカスタマイズ

{ProductName} `Grid` アイコンは、公開されている API メソッドを使用して、別のコレクション セットのカスタム アイコンを使用するようにカスタマイズできます。

- `registerIconFromText`
- `registerIcon`
- `setIconRef`

アイコンを登録すると、アイコンがローカルにキャッシュされるため、名前とコレクション名でそのアイコンを参照するコンポーネント間で再利用できます。参照を設定すると、名前でアイコンを参照するときに、どのコレクションのどのアイコンが使用されるかが変更されます。

<!-- WebComponents -->

```ts
// Add a new 'material' icon called 'filter_list' from string
registerIconFromText("filter_list", '<svg>...</svg>', "material");

// Add a new 'material' icon called 'my-filter_list' from svg url
registerIcon("filter_list", "url" , "material")

// Sets the icon reference to the new registered icon.
setIconRef('filter_list', 'default', {
            name: 'filter_list',
            collection: 'material',
});

```

<!-- end: WebComponents -->

<!-- React -->

```ts
// Add a new 'material' icon called 'filter_list' from string
registerIconFromText("filter_list", '<svg>...</svg>', "material");

// Add a new 'material' icon called 'my-filter_list' from svg url
registerIcon("filter_list", "url" , "material")

// Sets the icon reference to the new registered icon.
setIconRef('filter_list', 'default', {
            name: 'filter_list',
            collection: 'material',
});
```
<!-- end: React -->

<!-- Blazor -->

```razor
@code {
    private IgbIcon icon;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (this.icon != null && firstRender)
        {
            this.icon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                // Add a new 'material' icon called 'filter_list' from string
                this.icon.RegisterIconFromText("filter_list", '<svg>...</svg>', "material");

                // Add a new 'material' icon called 'filter_list' from svg url
                this.icon.RegisterIcon("filter_list", "url" , "material")

                // Sets the icon reference to the new registered icon.
                this.icon.SetIconRef("filter_list", "default", new IgbIconMeta()
                {
                    Name = "filter_list",
                    Collection = "material",
                });
            }));
        }
    }
}

```

<!-- end: Blazor -->

## {Platform} アイコンのカスタマイズの例

以下のサンプルは、元の Material アイコンからカスタム Font Awesome SVG アイコンに切り替えて、再び Material に戻す方法を示しています。

`sample="/{GridSample}/change-icons-custom", height="600", alt="{Platform} {ComponentTitle} アイコンのカスタマイズの例"`

## 内部アイコン

以下にすべての内部アイコンをリストします。エイリアスは、アイコンを参照できる名前です。ターゲット アイコンは内部アイコン名であり、ターゲット コレクションはアイコンが内部的に登録されているコレクションです。

| エイリアス                            | ターゲット アイコン           | ターゲット コレクション |
|----------------------------------|-----------------------|---------------|
| **add**                          | add                   | material      |
| **add_child**                    | add-child             | imx-icons     |
| **add_row**                      | add-row               | imx-icons     |
| **arrow_back**                   | arrow_back            | material      |
| **arrow_drop_down**              | arrow_drop_up         | material      |
| **arrow_forward**                | arrow_forward         | material      |
| **arrow_next**                   | chevron_right         | material      |
| **arrow_prev**                   | chevron_left          | material      |
| **case_sensitive**               | case-sensitive        | imx-icons     |
| **carousel_next**                | arrow_forward         | material      |
| **carousel_prev**                | arrow_back            | material      |
| **chevron_left**                 | chevron_left          | material      |
| **chevron_right**                | chevron_right         | material      |
| **clock**                        | access_time           | material      |
| **close**                        | close                 | material      |
| **collapse**                     | expand_less           | material      |
| **confirm**                      | check                 | material      |
| **date_range**                   | date_range            | material      |
| **delete**                       | delete                | material      |
| **drag_indicator**               | drag_indicator        | material      |
| **edit**                         | edit                  | material      |
| **error**                        | error                 | material      |
| **expand**                       | expand_more           | material      |
| **expand_more**                  | expand_more           | material      |
| **file_download**                | file_download         | material      |
| **filter_all**                   | select-all            | imx-icons     |
| **filter_before**                | is-before             | imx-icons     |
| **filter_contains**              | contains              | imx-icons     |
| **filter_does_not_contain**      | does-not-contain      | imx-icons     |
| **filter_empty**                 | is-empty              | imx-icons     |
| **filter_equal**                 | equals                | imx-icons     |
| **filter_false**                 | is-false              | imx-icons     |
| **filter_greater_than**          | greater-than          | imx-icons     |
| **filter_greater_than_or_equal** | greater-than-or-equal | imx-icons     |
| **filter_in**                    | is-in                 | imx-icons     |
| **filter_last_month**            | last-month            | imx-icons     |
| **filter_last_year**             | last-year             | imx-icons     |
| **filter_less_than**             | less-than             | imx-icons     |
| **filter_less_than_or_equal**    | less-than-or-equal    | imx-icons     |
| **filter_next_month**            | next-month            | imx-icons     |
| **filter_next_year**             | next-year             | imx-icons     |
| **filter_not_empty**             | not-empty             | imx-icons     |
| **filter_not_equal**             | not-equal             | imx-icons     |
| **filter_not_null**              | is-not-null           | imx-icons     |
| **filter_null**                  | is-null               | imx-icons     |
| **filter_starts_with**           | starts-with           | imx-icons     |
| **filter_this_month**            | this-month            | imx-icons     |
| **filter_this_year**             | this-year             | imx-icons     |
| **filter_today**                 | today                 | imx-icons     |
| **filter_true**                  | is-true               | imx-icons     |
| **filter_yesterday**             | yesterday             | imx-icons     |
| **first_page**                   | first_page            | material      |
| **group_work**                   | group_work            | material      |
| **hide**                         | visibility_off        | material      |
| **import_export**                | import_export         | material      |
| **input_collapse**               | arrow_drop_up         | material      |
| **input_clear**                  | clear                 | material      |
| **input_expand**                 | arrow_drop_down       | material      |
| **jump_down**                    | jump-down             | imx-icons     |
| **jump_up**                      | jump-up               | imx-icons     |
| **last_page**                    | last_page             | material      |
| **more_vert**                    | more_vert             | material      |
| **next**                         | navigate_next         | material      |
| **pin**                          | pin-left              | imx-icons     |
| **prev**                         | navigate_before       | material      |
| **refresh**                      | refresh               | material      |
| **remove**                       | cancel                | material      |
| **search**                       | search                | material      |
| **selected**                     | done                  | material      |
| **show**                         | visibility            | material      |
| **sort_asc**                     | arrow_upward          | material      |
| **sort_desc**                    | arrow_downward        | material      |
| **functions**                    | functions             | material      |
| **table_rows**                   | table_rows            | material      |
| **today**                        | calendar_today        | material      |
| **tree_collapse**                | expand_more           | material      |
| **tree_expand**                  | chevron_right         | material      |
| **unfold_less**                  | unfold_less           | material      |
| **unfold_more**                  | unfold_more           | material      |
| **unpin**                        | unpin-left            | imx-icons     |
| **view_column**                  | view_column           | material      |

コンポーネントで使用されるすべてのアイコンの内訳は以下のとおりです。

#### Grid (グリッド)
| アイコン                 | 説明                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **add**              | フィルター エントリを追加するために Excel フィルター メニューで使用されます。                                 |
| **arrow_back**       | 列を後方に移動するためにさまざまな UI 要素で使用されます。                     |
| **arrow_drop_down**  | トグル可能なメニューを示すためにさまざまなボタンで使用されます。                           |
| **arrow_forward**    | 列を前方に移動するためにさまざまな UI 要素で使用されます。                      |
| **cancel**           | 操作をキャンセルするためにさまざまな UI 要素で使用されます。                          |
| **chevron_right**    | Excel スタイルのフィルタリングのように、展開可能なメニューを示すために使用されます。          |
| **close**            | 展開されたメニューを閉じるときに使用します。                                                |
| **confirm**          | 操作を確認するときに使用されます。                                                  |
| **drag_indicator**   | 項目をドラッグできることを示すハンドルを表示するために使用されます。                      |
| **error**            | 編集可能なセルで、誤ったデータ入力を示すために使用されます。                       |
| **expand_more**      | Excel フィルタリング メニューで使用され、フィルターの追加を示します。     |
| **file_dowload**     | Excel フィルター エクスポーターによって使用されます。                                             |
| **filter_**         | さまざまなフィルタリング オペランドに使用されます。                                           |
| **group_work**       | グループ化ドロップ領域で使用されます。                                                |
| **hide**             | さまざまな UI 要素によって列を非表示にするために使用されます。                                |
| **import_export**    | ピボット データ セレクターが移動する際に使用されます。                                    |
| **input_clear**      | 入力フィールドで入力データをクリアするために使用されます。                                  |
| **next**             | フィルタリング行メニューでチップ間を移動するために使用されます。                      |
| **pin**              | 列のピン固定のためにさまざまな UI 要素によって使用されます。                                |
| **prev**             | フィルタリング行メニューでチップ間を移動するために使用されます。                      |
| **remove**           | さまざまな UI 要素によって削除インジケーターとして使用されます。                            |
| **refresh**          | フィルター行メニューでフィルターを再読み込みするために使用されます。                          |
| **selected**         | アクティブな選択を示すためにさまざまな UI 要素によって使用されます。                     |
| **show**             | 列を表示するためにさまざまな UI 要素によって使用されます。                               |
| **sort_asc**         | ソート方向を示すためにさまざまな UI 要素によって使用されます。                     |
| **sort_desc**        | ソート方向を示すためにさまざまな UI 要素によって使用されます。                     |
| **functions**        | ピボット グリッドとデータ セレクターによって使用されます。                                     |
| **table_rows**       | ピボット グリッド データ セレクターによって使用されます。                                          |
| **tree_collapse**    | ツリーのような構造で、表示する情報を少なくするために使用されます。                              |
| **tree_expand**      | ツリーのような構造で、詳細を表示するために使用します。                              |
| **unpin**            | 列のピン固定のためにさまざまな UI 要素によって使用されます。                                |
| **unfold_less**      | 階層グリッドですべての行を縮小するために使用されます。                            |
| **unfold_more**      | 階層グリッドですべての行を展開するために使用されます。                              |
| **view_column**      | ピボット データ セレクターによって使用されます。                                               |

#### Paginator (ページネーター)
| アイコン           | 説明                                                  |
| -------------- | ------------------------------------------------------------ |
| **first_page** | 最初のページに移動するためのボタンで使用されます。    |
| **last_page**  | 最後のページに移動するためのボタンで使用されます。     |
| **prev**       | 前のページに移動するためのボタンで使用されます。 |
| **next**       | 次のページに移動するためのボタンで使用されます。     |

#### Action Strip (アクション ストリップ)

| アイコン          | 説明              |
| ------------- | ------------------------ |
| **add_child** | ポップアップ メニューで使用されます。  |
| **add_row**   | ポップアップ メニューで使用されます。  |
| **more_vert** | ポップアップ メニューで使用されます。  |

## API リファレンス
- `Grid`

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})