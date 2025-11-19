---
title: {Platform} {ComponentTitle} Customize Icons- Infragistics
_description: Configure custom icons for {Platform} Grid.
_keywords: icons, custom icons, igniteui for {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: ["Infragistics.Controls.Grid"]
---

# {Platform} Grid Customize Icons

The {ProductName} `Grid` icons can be customized to use custom icons from a different collection set using the exposed API methods:

- `registerIconFromText`
- `registerIcon`
- `setIconRef`

Registering an icon caches it locally, so that it can reused between components, that reference that icon by name and collection name. Setting a reference changes which icon, from which collection, will be used when referencing that icon by name.

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

## {Platform} Customize Icons Example

The following sample demonstrates how to switch from the original material icons to custom font awesome svg icons and back to material.

`sample="/{GridSample}/change-icons-custom", height="600", alt="{Platform} {ComponentTitle} Customize Icons Example"`

## Internal Icons

The following lists all internal icons. Alias is the name of the icon by which it can be referenced. Target Icon is the internal icon name and Target Collection is the collection in which the icon is registered internally.

| Alias                            | Target Icon           | Target Collection |
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

Here's a breakdown of all icons as used by component:

#### Grid
| Icon                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **add**              | Used in excel-filter menu to add filter entry.                                 |
| **arrow_back**       | Used in various UI elements for moving a column backwards.                     |
| **arrow_drop_down**  | Used in various buttons to indicate togglable menus.                           |
| **arrow_forward**    | Used in various UI elements for moving a column forwards.                      |
| **cancel**           | Used in various UI elements for canceling operations.                          |
| **chevron_right**    | Used to indicate expandable menus, like in the excel style filtering.          |
| **close**            | Used to close an expanded menu.                                                |
| **confirm**          | Used to confirm an operation.                                                  |
| **drag_indicator**   | Used to show a handle to indicate an item can be dragged.                      |
| **error**            | Used in editable cells to indicate erroneous data input.                       |
| **expand_more**      | Used by the excel filtering menu to indicate the addition of more filters.     |
| **file_dowload**     | Used by the excel filter exporter.                                             |
| **filter_***         | Used for various filtering operands.                                           |
| **group_work**       | Used by the group-by drop area.                                                |
| **hide**             | Used by various UI elements for hiding columns.                                |
| **import_export**    | Used by the pivot data selector for moving.                                    |
| **input_clear**      | Used by input fields for clearing input data.                                  |
| **next**             | Used by the filtering row menu to navigate between chips.                      |
| **pin**              | Used by various UI elements for column pinning.                                |
| **prev**             | Used by the filtering row menu to navigate between chips.                      |
| **remove**           | Used by various UI elements as a removal indicator.                            |
| **refresh**          | Used by the filtering row menu to reload the filters.                          |
| **selected**         | Used by various UI elements to indicated active selection.                     |
| **show**             | Used by various UI elements for showing columns.                               |
| **sort_asc**         | Used by various UI elements to indicate sorting direction.                     |
| **sort_desc**        | Used by various UI elements to indicate sorting direction.                     |
| **functions**        | Used by the pivot grid and data selectors.                                     |
| **table_rows**       | Used by the pivot grid data selector.                                          |
| **tree_collapse**    | Used by tree-like structure to show less details.                              |
| **tree_expand**      | Used by tree-like structure to show more details.                              |
| **unpin**            | Used by various UI elements for column pinning.                                |
| **unfold_less**      | Used by the hierarchical grid to collapse all rows.                            |
| **unfold_more**      | Used by the hierarchical grid to expand all rows.                              |
| **view_column**      | Used by the pivot data selector.                                               |

#### Paginator
| Icon           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| **first_page** | Used by the button used for navigating to the first page.    |
| **last_page**  | Used by the button used for navigating to the last page.     |
| **prev**       | Used by the button used for navigating to the previous page. |
| **next**       | Used by the button used for navigating to the next page.     |

#### Action Strip

| Icon          | Description              |
| ------------- | ------------------------ |
| **add_child** | Used by the popup menu.  |
| **add_row**   | Used by the popup menu.  |
| **more_vert** | Used by the popup menu.  |

## API References
* `Grid`

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})