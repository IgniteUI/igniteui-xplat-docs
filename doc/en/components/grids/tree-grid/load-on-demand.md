---
title: {Platform} Tree Grid | Fastest {Platform} Tree Table | Infragistics
_description: The {ProductName} Tree Grid provides the necessary tools to load child data on demand when a parent row is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: {Platform} tree grid, igniteui for {Platform}, infragistics
mentionedTypes: ['TreeGrid']
namespace: Infragistics.Controls
---

# Tree Grid Load On Demand

The Ignite UI for {Platform} Tree Grid can be rendered in such way that it requires the minimal amount of data to get from the server so the user could see it as quickly as possible. Then, only after the user expands a row, the children for that particular parent row will be loaded. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

## {Platform} Tree Grid Load On Demand Example

`sample="/{TreeGridSample}/load-on-demand", height="700", alt="{Platform} Tree Grid Load On Demand Example"`

### Usage

The Load on Demand feature is compatible with both types of Tree Grid data sources - primary and foreign keys or child collection. You only need to load the root level data in the Tree Grid and specify the necessary keys for one of the data source types. In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property `LoadChildrenOnDemand`.

<!-- Angular -->

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren">
</igx-tree-grid>
```

<!-- end: Angular -->

<!-- WebComponents -->

```html
<igc-tree-grid id="treeGrid"></igc-tree-grid>
```

```ts
constructor() {
    var treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.employeesFlatData;
    treeGrid.loadChildrenOnDemand = (parentID: any, done: (children: any[]) => void) => {
    this.getData(parentID, (children) => done(children));
    };
}
```

The LoadChildrenOnDemand callback provides two parameters:

- parentID - the ID of the parent row that is being expanded.
- done - callback that should be called with the children when they are retrieved from the server. 

```typescript
public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    this.getData(parentID, (children) => done(children));
}
```

<!-- end: WebComponents -->

After the user clicks the expand icon, it is replaced by a loading indicator. When the done callback is called, the loading indicator disappears and the children are loaded. The Tree Grid adds the children to the underlying data source and populates the necessary keys automatically. 

If you have a way to provide an information whether a row has children prior to its expanding, you could use the HasChildrenKey input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

<!-- Angular -->

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren" hasChildrenKey="hasEmployees">
        ...
</igx-tree-grid>
```

<!-- end: Angular -->

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" has-children-key="hasEmployees"></igc-tree-grid>
```

Note that setting the HasChildrenKey property is not required. In case you don't provide it, expansion indicators will be displayed for each row. After expanding a row that has no children, you still need to call the done callback with undefined or empty array. In this case after the loading indicator disappears, the expansion indicator never shows up.


<!-- WebComponents -->
If you want to provide your own custom loading indicator, you can use the RowLoadingIndicatorTemplate option to set a custom template.The following code snippet demonstrates how set to it:

```ts
constructor() {
    var treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.employeesFlatData;
    treeGrid.rowLoadingIndicatorTemplate = this.rowLoadingTemplate;
    treeGrid.loadChildrenOnDemand = (parentID: any, done: (children: any[]) => void) => {
               this.getData(parentID, (children) => done(children));
    };

}
public rowLoadingTemplate() {
    return html`<igc-icon name="loop" collection="material"></igc-icon>`;
}
```

<!-- end: WebComponents -->

<!-- Angular -->
If you want to provide your own custom loading indicator, you may create an ng-template and mark it with the RowLoadingIndicator directive. The following code snippet demonstrates how to define such custom template:

```html
<igx-tree-grid>
    <ng-template igxRowLoadingIndicator>
        <igx-icon fontSet="material">loop</igx-icon>
    </ng-template>
</igx-tree-grid>
```

<!-- end: Angular -->

## API References

* `TreeGrid`

## Additional Resources

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})