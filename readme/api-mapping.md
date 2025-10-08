## API Mapping Files


Follow this section to update API mapping files in the `apiMap` folder:

- clone [dev-tools](https://infragistics.visualstudio.com/NetAdvantage/_git/dev-tools?path=%2F&version=GBmain&_a=contents) repo to **C:\WORK** folder

- checkout `main` branch in the dev-tools repo

- open and build Translator solution: <br>
**C:\WORK\dev-tools\XPlatform\Main\Source\Translator\Translator_NoRoslyn.sln**

- open and build jQuery solution in `Debug` mode: <br>
**C:\WORK\dev-tools\XPlatform\Main\Source\jQuery\Infragistics.jQuery.sln**

- checkout [igniteui-xplat-docs](https://github.com/IgniteUI/igniteui-xplat-docs) repo

- create a new branch from `vnext` branch

- open this repository in VS Code

- in VS terminal, run this command to copy API Mapping files to the **apiMap** folder

```
gulp updateApiMapping
```

- commit changes made in the `apiMap` folder

- create a pull request and target `vnext` branch on [github](https://github.com/IgniteUI/igniteui-xplat-docs)