Based on the code excerpts, here's how the public API extraction and apiMap.json generation works:

## Overview

The system generates `apiMap.json` files that map C# types and members to their platform-specific names (Angular, React, WebComponents, etc.) for documentation linking purposes.

## Process Flow

### 1. **API Generation During Build**

When building platform-specific wrappers (Angular, React, etc.), the translators generate apiMap files:

**Example from AngularWrapperGenerator.cs:**
```cs
var outputText = Mapper.Serialize();
var apiFile = Path.Combine(
    OutputPath,
    "Angular",
    translatingAssembly.Name + ".apiMap.json");
File.WriteAllText(apiFile, outputText);
```

### 2. **API Mapping Collection**

The `APIMapper` class tracks type and member mappings:

```cs
public void MapType(ITypeSymbol type, APIPlatform platform, string platformName)
public void MapTypeFile(ITypeSymbol type, APIPlatform platform, string fileName)
public void MapTypeModule(ITypeSymbol type, APIPlatform platform, string module)
```

### 3. **Gathering API Maps**

The build process collects all generated apiMap.json files:

**From gulpfile.js:**
```js
function gatherAPIAngular() {
    return gulp.src([
        fileRoot + 'Source/*.JS/**/bin/**/Angular/*apiMap.json'
    ])
    .pipe(flatten())
    .pipe(readMappings())
    .pipe(gulp.dest("apiMap/Angular"));
}
```

This searches all JavaScript build outputs for `*apiMap.json` files in the Angular folder and consolidates them into the APIRemarks project's `apiMap` directory.

### 4. **Documentation Transformation**

The `MarkdownTransformer` uses these mappings to transform code references in documentation:

```ts
function transformCodeRefs(options: any) {
    // Resolves member names to platform-specific names
    let resolvedName = mappings.getPlatformMemberName(
        <string>options.typeName,
        <APIPlatform>options.platform,
        <string>memberName);
    
    // Creates links to API documentation
    let link = getApiLink(apiDocRoot, apiTypeName!, null, options);
}
```

### 5. **Building Platform Documentation**

**From gulpfile.js:**
```js
function buildPlatform(cb, platformName, apiPlatform) {
    gulp.src(['./apiMap/' + platformName + '/**/*apiMap.json'])
    .pipe(flatten())
    .pipe(readMappings())
    .on("end", () => {
        transformer.configure(loader, apiPlatform, docs[platformName]);
        gulp.src(['Remarks/**/*.md'])
        .pipe(transformFiles())
        .pipe(gulp.dest("dist/" + platformName))
    });
}
```

## Key Components

1. **Wrapper Generators** (AngularWrapperGenerator.cs, ReactWrapperGenerator.cs, etc.) - Generate platform-specific wrappers and create apiMap files
2. **APIMapper** (APIMapper.cs) - Tracks mappings between original types and platform names
3. **APIRemarks Project** - Consolidates apiMap files and transforms documentation markdown
4. **MappingLoader** - Loads and queries the consolidated mappings for documentation links

The apiMap.json files contain mappings like:
- Original C# type/member names
- Platform-specific names (e.g., `IgxDataChart` for Angular)
- File paths and module names
- Package names

This allows documentation to automatically link `XamDataChart` references to the correct platform-specific API documentation for Angular (`IgxDataChart`), React (`IgrDataChart`), or WebComponents (`IgcDataChart`).