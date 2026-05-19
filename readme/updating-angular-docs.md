
## Updating Angular Docs

The [Angular igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) repo is automatically updated with changes made in markdown (.md) files in the xplat-docs repo. However, changes make to table of content, are not and they must to be manually propagated by following these instructions:

- clone or get latest on the [Angular igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) repo

- open [igniteui-xplat-docs](https://github.com/IgniteUI/igniteui-xplat-docs) repo in VS Code

- open terminal window

- run this command to generate output files for angular docs:
```
yarn run build-docfx-angular
```

- compare and propagate changes from the xplat-docs TOC file: 
```
C:\WORK\igniteui-xplat-docs\dist\Angular\en\components\toc.yml 
``` 

- to the angular TOC file:
``` 
C:\WORK\igniteui-docfx\en\components\toc.yml
``` 

- create a pull request for the [Angular igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) repo