var gulp = require('gulp');
var yaml = require('gulp-yaml');
var del = require('del');
var flatten = require('gulp-flatten');
var replace = require('gulp-replace');
var es = require('event-stream');
var through = require('through2');
var path = require('path');
const { buildDocfx } = require('igniteui-docfx-template');

const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;
const fs = require('fs');

var fileRoot = 'c:/work/dev-tools/XPlatform/Main/'

var mt = null; // MarkdownTransformer
var ml = null; // MappingLoader
var rm = null; // RedirectManager
var transformer = null;
var loader = null;
var docsConfig = null;
var docsComponents = null;

let LANG = argv.lang === undefined ? "en" : argv.lang;
let PLAT = argv.plat === undefined ? "React": argv.plat;
let PLAT_API = undefined;
let ENV_TARGET = argv.env || "development";

let DOCFX_BASE = {
    en: `./dist/${PLAT}/en`,
    jp: `./dist/${PLAT}/jp`,
    kr: `./dist/${PLAT}/kr`
};

let DOCFX_PATH = `${DOCFX_BASE[LANG]}`;
let DOCFX_CONF = `${DOCFX_PATH}/docfx.json`;
let DOCFX_TEMPLATE_GLOBAL = path.join(__dirname, `./node_modules/igniteui-docfx-template/template/bundling.global.json`);
let DOCFX_SITE = `${DOCFX_PATH}/_site`;
let DOCFX_FORCE_OUTPUT = false; // this is true when building Angular CI (build-docfx-angular)

function log(msg) { console.log(">> " + msg); }

function ensureEnvironment() {
    if (mt == null) {
        mt = require('./src/ext/MarkdownTransformer');
        ml = require("./src/ext/MappingLoader");
        rm = require("./src/ext/RedirectManager");

        transformer = new mt.MarkdownTransformer();
        loader = new ml.MappingLoader();
        docsConfig = require("./docConfig.json");
        docsComponents = require("./docComponents.json");

        // var platformName = PLAT;
        // var platformData = docsConfig[platformName];
        // if (platformData !== undefined) {
        //     throw "docsConfig,json does not have platform: " + platformName;
        // }

        log("initialling environment...");
    }

    if (PLAT === 'Angular') {
        PLAT_API = ml.APIPlatform.Angular;
    } else if (PLAT === 'Blazor') {
        PLAT_API = ml.APIPlatform.Blazor;
    } else if (PLAT === 'React') {
        PLAT_API = ml.APIPlatform.React;
    } else if (PLAT === 'WebComponents') {
        PLAT_API = ml.APIPlatform.WebComponents;
    }

    DOCFX_BASE = {
        en: `./dist/${PLAT}/en`,
        jp: `./dist/${PLAT}/jp`,
        kr: `./dist/${PLAT}/kr`
    };

    DOCFX_PATH = `${DOCFX_BASE[LANG]}`;
    DOCFX_CONF = `${DOCFX_PATH}/docfx.json`;
    DOCFX_SITE = `${DOCFX_PATH}/_site`;
    DOCFX_ARTICLES = `${DOCFX_PATH}/components`;
}

function readMappings() {
    return es.map(function(file, cb) {
        //console.log("reading mapping: " + file.path);
        let mapping = JSON.parse(file.contents.toString());
        loader.import(mapping);

        cb(null, file);
    });
}

function transformFiles() {
    ensureEnvironment();

    log("transforming files: ");
    let mapStream = through.obj(function(file, encoding, cb) {

      var fileContent = file.contents.toString();
      var fileDir = path.dirname(file.path) + "\\";

      var typeName = path.basename(path.dirname(file.path))
      console.log("- transforming " + file.path);

      transformer.transformContent(typeName, fileContent, file.path,
      (err, results) => {
        if (err) {
            cb(err, null);
        }

        if (results) {
            for (let i = 1; i < results.length; i++) {
                let newFile = file.clone();

                newFile.contents = Buffer.from(results[i].content);
                if (results[i].componentOutput) {
                    newFile.path = newFile.path.replace("_shared", results[i].componentOutput);
                }
                this.push(newFile);
            }
            file.contents = Buffer.from(results[0].content);
            if (results[0].componentOutput) {
                file.path = file.path.replace("_shared", results[0].componentOutput);
            }
            cb(null, file);
        }
      });
    });
    return mapStream;
}

function transformStaticFiles(platformName) {
    ensureEnvironment();
    return es.map(function(file, cb) {

      var fileContent = file.contents.toString();
      // var typeName = path.basename(path.dirname(file.path))
      var replacements = docsConfig[platformName].replacements;
      //console.log(typeName);
      for (var i = 0; i < replacements.length; i++) {
          var variable = replacements[i];
          if (variable.name && variable.value) {
              fileContent = fileContent.replace(new RegExp(variable.name, "gm"), variable.value);
          }
      }
      file.contents = Buffer.from(fileContent);
      cb(null, file);
    });
  }

function updateSource() {
    del.sync("src/ext/**/*.*");

    return gulp.src([
        fileRoot + 'Source/APIRemarks/src/**/*.ts'
    ])
    .pipe(gulp.dest("src/ext"))
}

function cleanAngular(cb) {
    del.sync("dist/Angular/**/*.*");
    cb();
}
exports.cleanAngular = cleanAngular;

function cleanReact(cb) {
    del.sync("dist/React/**/*.*");
    cb();
}
exports.cleanReact = cleanReact;

function cleanWebComponents(cb) {
    del.sync("dist/WebComponents/**/*.*");
    cb();
}
exports.cleanWebComponents = cleanWebComponents;

function cleanBlazor(cb) {
    del.sync("dist/Blazor/**/*.*");
    cb();
}
exports.cleanBlazor = cleanBlazor;

// updates API mapping files in ./apiMap folder for Angular platform
function updateApiAngular() {
    return updateApiFor("Angular");
}
exports.updateApiAngular = updateApiAngular;

// updates API mapping files in ./apiMap folder for React platform
function updateApiReact() {
    return updateApiFor("React");
}
exports.updateApiReact = updateApiReact;

// updates API mapping files in ./apiMap folder for WebComponents platform
function updateApiWebComponents() {
    return updateApiFor("WebComponents");
}
exports.updateApiWebComponents = updateApiWebComponents;
exports.updateApiWC = updateApiWebComponents;

// updates API mapping files in ./apiMap folder for Blazor platform
function updateApiBlazor() {
    return updateApiFor("Blazor");
}
exports.updateApiBlazor = updateApiBlazor;

// updates API mapping files in ./apiMap folder for specified platform
function updateApiFor(platformName) {
    // cleanup previous API mapping files
    // del.sync("apiMap/" + platformName + "/*apiMap.json");

    return gulp.src([
        fileRoot + "Source/*.JS/**/bin/**/" + platformName + "/*apiMap.json",
        // excluding API mapping files for conflicting components with WebInputs
  '!' + fileRoot + "Source/*.JS/**/bin/**/" + platformName + "/Inputs*apiMap.json",
  '!' + fileRoot + "Source/*.JS/**/bin/**/" + platformName + "/Calendar*apiMap.json"
    ])
    .pipe(es.map(function(file, fileCallback) {
        var jsonContent = file.contents.toString();
        let jsonNodes = JSON.parse(jsonContent);
        // let fileContent = JSON.stringify(jsonNodes,  null, '  ');
        // let fileContent = JSON.stringify(jsonNodes).replace(/\[\,/g, '\[\,\n');
        let fileContent = JSON.stringify(jsonNodes);
        // changing JSON format to pretty-compact
        fileContent = fileContent.split('],"types":').join('],\n  "types":');
        fileContent = fileContent.split('{"originalName":').join('\n  { "originalName":');
        fileContent = fileContent.split('}],"members":[{').join('}],\n    "members":[{');
        // fileContent = fileContent.split('}],"members":[').join('}\n  ],\n  "members":[');
        // fileContent = fileContent.split('}],"members":[').join('}],\n  "members":[');
        fileContent = fileContent.split('{"isVirtual":true').join('\n    { "isVirtual":true');
        fileContent = fileContent.split('{"names":').join        ('\n    { "names":');
        fileContent = fileContent.split(',"names":').join        (',\n    "names":');
        // fileContent = fileContent.split('{"names":').join        ('\n    {                    "names":');
        // fileContent = fileContent.split('}],"originalBase').join('}\n  ],\n  "originalBase');
        // fileContent = fileContent.split(',"names":[').join(',\n  "names":[\n    ');

        var lines = fileContent.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].indexOf('"isVirtual":true,') >= 0) {
                lines[i] = lines[i].replace('"isVirtual":true,', '');
                lines[i] = lines[i].replace('"},', '", "isVirtual":true },');
            }
        }
        fileContent = lines.join('\n');
        fileContent = fileContent.split('"mappedType":"bool"').join('"mappedType":"bool"  ');
        fileContent = fileContent.split('"mappedType":"int"' ).join('"mappedType":"int"   ');
        // fileContent = fileContent.split(',').join(', ');
        // fileContent = fileContent.split(':').join(': ');

        file.contents = Buffer.from(fileContent);
        fileCallback(null, file);
    }))
    .pipe(flatten())
    .pipe(gulp.dest("apiMap/" + platformName));
}
// updates API mapping files in ./apiMap folder for all platforms
exports.updateApiMapping = updateApiMapping = gulp.series(
    updateApiAngular,
    updateApiBlazor,
    updateApiReact,
    updateApiWebComponents,
);

function updateApiSection(cb) {
    ensureEnvironment();

    gulp.src([
    // 'doc/en/**/gantt-chart.md',
    // 'doc/en/**/area-chart.md',
    // 'doc/en/**/types/*.md',
    'doc/en/**/features/chart-*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        // let markdownContent = file.contents.toString();
        // read converted .yml to .json above and simplify TOC structure:
        // let newJson = transformer.simplifyJson(orgJson, 'Blazor');
        // fs.writeFileSync(tocOutputPath, newJson);
        var filePath = file.dirname + "\\" + file.basename
        console.log('updating API Section: ' + filePath);
        var fileContent = file.contents.toString();
        if (transformer) {
            // file.contents = Buffer.from(transformer.updateApiSection(fileContent));
            var newContent = transformer.updateApiSection(fileContent, filePath);
            fs.writeFileSync(filePath, newContent);
        }

        fileCallback(null, file);
    }))
    .on("end", () => {
        cb();
    })
    .on("error", (err) => {
        console.log("ERROR in updateApiSection()");
        cb(err);
    });
}
exports.updateApiSection = updateApiSection;

function verifyApiSections(cb) {
    // ensureEnvironment();

    gulp.src([
    'doc/en/**/gantt-chart.md',
    'doc/en/**/area-chart.md',
    'doc/en/**/types/*.md',
    'doc/en/**/features/chart-*.md',
    'doc/en/**/geo-*.md',
    'doc/en/**/excel-*.md',
    'doc/en/**/spreadsheet-*.md',
    'doc/en/**/*gauge.md',
    'doc/en/**/bullet-*.md',
    'doc/en/**/zoomslider-*.md',
    'doc/en/**/grids/*.md',
    'doc/en/**/editors/*.md',
    'doc/en/**/inputs/*.md',
    'doc/en/**/layouts/*.md',
    'doc/en/**/notifications/*.md',
    'doc/en/**/scheduling/*.md',
    'doc/en/**/themes/*.md',
    'doc/en/**/menus/*.md',
    // 'doc/en/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        var filePath = file.dirname + "\\" + file.basename
        var fileContent = file.contents.toString();
        var fileHasAPI = fileContent.indexOf("API References") > 0;
        if (!fileHasAPI) {
            let apiLinks = [];
            let words = fileContent.split(' ');
            for (const w of words) {
                if (!apiLinks.includes(w) && w !== "" && w.indexOf('`') === 0) {
                    apiLinks.push(w.replace(",","").replace(".","").replace(":",""));
                }
            }

            let lines = fileContent.split("\n");
            for (const line of lines) {
                if (line.indexOf('mentionedTypes:') >= 0) {
                    let items = line.replace("mentionedTypes:","").replace("[","").replace("]","").trim().split(",");
                    for (const item of items) {
                        if (!apiLinks.includes(item)) {
                             let link = item.replace('"',"").replace('"',"").replace("'","").replace("'","").trim()
                             apiLinks.push("`" + link + "`");
                        }
                    }
                    break;
                }
            }

            if (apiLinks.length > 0) {
                apiLinks.sort();
                console.log('missing API Section: ' + filePath + "\n## API References \n\n - " + apiLinks.join("\n - "));
            }

        }
        fileCallback(null, file);
    }))
    .on("end", () => {
        cb();
    })
    .on("error", (err) => {
        console.log("ERROR in verifyApiSections()");
        cb(err);
    });
}
exports.verifyApiSections = verifyApiSections;

// this array stores actual topic that are resolved from TOC and optional excludedTopics array
let includedTopics = [];
function buildTOC(cb) {

    let excludedTopics = [];
    excludedTopics.push('doc/**/obsolete*.md');
    // uncomment these lines to build docs without topics:
    // excludedTopics.push('doc/**/general*.md');
    // excludedTopics.push('doc/**/general-getting-started.md');
    // excludedTopics.push('doc/**/general-getting-started-*.md');
    // excludedTopics.push('doc/**/general-changelog-dv.md');
    // excludedTopics.push('doc/**/general-changelog*.md');
    // excludedTopics.push('doc/**/general-nuget-feed.md');
    // excludedTopics.push('doc/**/general-installing-blazor.md');
    // excludedTopics.push('doc/**/general-cli*.md');
    // excludedTopics.push('doc/**/grids/**/*.md');
    // excludedTopics.push('doc/**/grids/_shared/*.md');
    // excludedTopics.push('doc/**/grids/grid/*.md');
    // excludedTopics.push('doc/**/grids/grids-header.md');
    // excludedTopics.push('doc/**/grids/data-grid*.md');
    // excludedTopics.push('doc/**/grids/data-grid/*.md');
    // excludedTopics.push('doc/**/grids/combo/*.md');
    // excludedTopics.push('doc/**/grids/pivot-grid/*.md');
    // excludedTopics.push('doc/**/grids/tree-grid/*.md');
    // excludedTopics.push('doc/**/grids/hierarchical-grid/*.md');
    // excludedTopics.push('doc/**/grids/theming.md');
    // excludedTopics.push('doc/**/grids/tree.md');
    // excludedTopics.push('doc/**/grids/list.md');
    // excludedTopics.push('doc/**/charts/**/*.md');
    // excludedTopics.push('doc/**/charts/features/*.md');
    // excludedTopics.push('doc/**/charts/types/*.md');
    // excludedTopics.push('doc/**/charts/chart-features.md');
    // excludedTopics.push('doc/**/charts/chart-api.md');
    // excludedTopics.push('doc/**/charts/chart-overview.md');
    // excludedTopics.push('doc/**/editors/**/*.md');
    // excludedTopics.push('doc/**/inputs/**/*.md');
    // excludedTopics.push('doc/**/layouts/**/*.md');
    // excludedTopics.push('doc/**/layouts/avatar.md');
    // excludedTopics.push('doc/**/layouts/card.md');
    // excludedTopics.push('doc/**/layouts/dock-manager-*.md');
    // excludedTopics.push('doc/**/layouts/expansion-panel.md');
    // excludedTopics.push('doc/**/layouts/icon.md');
    // excludedTopics.push('doc/**/menus/**/*.md');
    // excludedTopics.push('doc/**/*map*.md');
    // excludedTopics.push('doc/**/bullet-graph.md');
    // excludedTopics.push('doc/**/linear-gauge.md');
    // excludedTopics.push('doc/**/radial-gauge.md');
    // excludedTopics.push('doc/**/*excel*.md');
    // excludedTopics.push('doc/**/spreadsheet*.md');
    // excludedTopics.push('doc/**/scheduling/*.md');
    // excludedTopics.push('doc/**/notifications/*.md');
    // excludedTopics.push('doc/**/themes/*.md');
    // excludedTopics.push('doc/**/zoomslider-overview.md');
    // uncomment these lines to skip JP and KR topics:
    // excludedTopics.push('doc/**/jp/**/*.md');
    // excludedTopics.push('doc/**/kr/**/*.md');

    log("excludedTopicPatterns: " + excludedTopics.length);

    let platformName = PLAT;
    if (platformName === "Angular") {
        // excluding grids and shared topics from angular builds
        excludedTopics.push('doc/**/grids/**/*.md');
        excludedTopics.push('doc/**/grids/_shared/*.md');
    }

    let excludedFiles = [];
    gulp.src(excludedTopics)
    .pipe(es.map(function(file, fileCallback) {
        var filePath = file.path.split('\\').join('/');
        var fileLocal = 'doc/' + filePath.split('/doc/')[1];
        // log(fileLocal);
        if (excludedFiles.indexOf(fileLocal) < 0) {
            excludedFiles.push(fileLocal);
        }
        fileCallback(null, file);
    }))
    .on("end", () => {
        log("excludedTopicFiles: " + excludedFiles.length);

        let platformName = PLAT;
        ensureEnvironment();

         // checking if we need to hide NEW and UPDATED labels in TOC for the first release of product, e.g. Blazor
        let isFirstRelease = docsConfig[platformName].isFirstRelease;
        // generating an array of topic and TOC.yml files from TOC.json files:
        let enTopics = generateTocFor(platformName, 'en', isFirstRelease, excludedFiles);
        let jpTopics = generateTocFor(platformName, 'jp', isFirstRelease, excludedFiles);
        let krTopics = generateTocFor(platformName, 'kr', isFirstRelease, excludedFiles);
        var tocTopics = [];
        tocTopics = tocTopics.concat(enTopics); // including EN topics
        tocTopics = tocTopics.concat(jpTopics); // including JP topics
        tocTopics = tocTopics.concat(krTopics); // including KR topics
        tocTopics.sort();

        log("tocTopics: " + tocTopics.length);
        // fs.writeFileSync("file-toc.txt", "file-toc \n" + tocTopics.join("\n"));
        // for (const topic of tocTopics) {
        //     log("" + topic);
        // }

        var sharedComponents = []; // "grid", "hierarchical-grid", "pivot-grid", "tree-grid"];
        for (let component of Object.values(docsComponents)) {
            if (component.output) {
                sharedComponents.push(component.output);
            }
        }

        includedTopics = [];
        // processing all markdown files to check if they are included in TOC and are not part of excluded files
        gulp.src(['doc/**/*.md'])
        .pipe(es.map(function(topicFile, topicCallback) {
            var filePath = topicFile.path.split('\\').join('/');
            var fileLocal = 'doc/' + filePath.split('/doc/')[1];

            var isFileExcluded = excludedFiles.indexOf(fileLocal) >= 0;
            var isFileShared = filePath.indexOf("/_shared/") > 0;
            // check if file is included in TOC
            var isFileIncludedInTOC = tocTopics.indexOf(fileLocal) >= 0;
            if (!isFileIncludedInTOC && isFileShared) {
                // check if resolved path of shared file is included in TOC
                for (const component of sharedComponents) {
                    var resolvedPath = fileLocal.replace("_shared", component);
                    var resolvedInTOC = tocTopics.indexOf(resolvedPath) >= 0;
                    if (resolvedInTOC) {
                        isFileIncludedInTOC = true; break;
                    }
                }
            }
            // skip topics that are explicitly excluded and include only topics that are in TOC
            if (!isFileExcluded && isFileIncludedInTOC) {
                 includedTopics.push(fileLocal);
            }
            topicCallback(null, topicFile);
        }))
        .on("end", () => {

            includedTopics.sort();
            log("includedTopics: " + includedTopics.length);
            // console.log(includedTopics);
            // fs.writeFileSync("file-included.txt", "file-included \n" + includedTopics.join("\n"));
            // for (const topic of includedTopics) {
            //     log("" + topic);
            // }
            cb();
        })
    });
}
exports.buildTOC = buildTOC;

// function buildPlatform(cb, platformName, apiPlatform) {
function buildPlatform(cb) {
    let platformName = PLAT;
    let apiPlatform = PLAT_API;
    log("=========================================================");
    log("building '" + PLAT + "' docs for '" + ENV_TARGET + "' environment and force docFX output is " + DOCFX_FORCE_OUTPUT );
    ensureEnvironment();

    log("building with " + includedTopics.length + " topics");
    // for (const topic of includedTopics) {
    //     log("act Topic " + topic);
    // }

    let apiSourcePath = './apiMap/' + platformName + '/**/*apiMap.json';
    log("building with API mapping: " + apiSourcePath);
    gulp.src([
        apiSourcePath
    ],)
    .pipe(flatten())
    .pipe(readMappings())
    .on("end", () => {
        transformer.configure(loader, apiPlatform, docsConfig[platformName], ENV_TARGET);

        // the includedTopics array is generated in buildTOC task
        let sources = includedTopics;

        // uncomment to force building specific set of topics
        // let sources = [
        //   'doc/en/components/grids/grid/overview.md',
        //   'doc/en/components/grids/_shared/editing.md',
        //   'doc/en/components/grids/data-grid.md',
        // //   'doc/en/**/*.md',
        // //   'doc/jp/**/*.md',
        // //   'doc/kr/**/*.md',
        // ];

        gulp.src(sources, { base: "./doc/" })
        .pipe(transformFiles())
        .pipe(gulp.dest("dist/" + platformName))
        .on("end", function() {
            gulp.src([
                'doc/**/images/**/*.*'
            ])
            .pipe(gulp.dest("dist/" + platformName))
            .on("end", function () {
                if (platformName == "Angular" && !DOCFX_FORCE_OUTPUT) {
                    log("Copying " + PLAT + " .md and /images... done. Docfx build not executed.");
                    log("=========================================================");
                    cb();
                } else {
                    gulp.src([
                        'docfx/**/*.*'
                    ])
                    .pipe(transformStaticFiles(platformName))
                    .pipe(gulp.dest("dist/" + platformName))
                    .on("end", function () {
                        log("building " + PLAT + " ... done ");
                        log("=========================================================");
                        cb();
                    });
                }
            });
        })
        .on("error", (err) => {
            console.log("ERROR building platform: " + platformName.toString());
            cb(err);
        });
    })
    .on("error", (err) => {
        console.log("ERROR building platform: " + platformName.toString());
        cb(err);
    });
}

function replaceEnvironmentVariables(cb) {
    const environment = ENV_TARGET ? ENV_TARGET.trim() : 'development';
    const config = require(`./docfx/${LANG}/environment.json`);
    return gulp.src(`${DOCFX_SITE}/**/*.html`)
        .pipe(replace(/(\{|\%7B)environment:([a-zA-Z]+)(\}|\%7D)/g, function (match, brace1, envVariable, brace2) {
            const value = config[environment][envVariable];
            return value || match;
        }))
        .pipe(gulp.dest(DOCFX_SITE));
}

let tocLanguage = 'en';
// let tocLanguage = 'jp';
// let tocLanguage = 'kr';

// converts "toc.yml" to "toc.json" file - this is only for testing
function generateTocJson(cb) {
    ensureEnvironment();

    let tocInputPath  = './docfx/' + tocLanguage + '/components/toc.yml';
    let tocOutputPath = './docfx/' + tocLanguage + '/components/toc.json';

    console.log("convertYmlToJson :");
    console.log("   " + tocInputPath + " to");
    console.log("   " + tocOutputPath);

    gulp.src(tocInputPath)
    .pipe(yaml({ schema: 'DEFAULT_FULL_SCHEMA',  space: 2 }))
    .pipe(es.map(function(file, fileCallback) {
        let orgJson = file.contents.toString();
        // read converted .yml to .json above and simplify TOC structure:
        let newJson = transformer.simplifyJson(orgJson, 'Blazor');
        fs.writeFileSync(tocOutputPath, newJson);
        fileCallback(null, file);
    }))
    // .pipe(gulp.dest('./test'))
    .on("end", () => {
        if (cb !== undefined){
            cb();
        }
    });
}
exports.generateTocJson = generateTocJson;

// converts "toc.json" to "toc.yml" file - this is called before building docs
function generateTocYML(cb) {

    console.log('generateTocYML PLAT=' + PLAT + ' LANG=' + LANG);
    // PLAT defaults to "React" if --plat argument is not specified
    // LANG defaults to "en"    if --lang argument is not specified
    generateTocFor(PLAT, LANG);
    // generateTocFor(PLAT, 'en');
    // generateTocFor(PLAT, 'jp');
    // generateTocFor(PLAT, 'kr');
    cb();
}
exports.generateTocYML = generateTocYML;

// generate "toc.yml" file from "toc.json" by filtering its nodes for specified platform name
// e.g.  generateTocFor('All', 'en');
// e.g.  generateTocFor('Angular', 'en');
// e.g.  generateTocFor('React', 'en');
// e.g.  generateTocFor('Blazor', 'en');
function generateTocFor(platform, language, isFirstRelease, excludedFiles) {
    ensureEnvironment();
    transformer.docsLanguage = language;
    let tocPath = './docfx/' + language + '/components/toc.json';
    let tocTopics = transformer.generateTOC(tocPath, platform, language, isFirstRelease, excludedFiles);
    for (let i = 0; i < tocTopics.length; i++) {
        tocTopics[i] = 'doc/' + language + '/components/' + tocTopics[i];
      //  console.log('>> generateTocFor "' + tocTopics[i] + '"');
    }
    // filter out duplicates toc nodes
    tocTopics = tocTopics.filter((c, index) => {
        return tocTopics.indexOf(c) === index;
    });

    tocTopics.sort();
    return tocTopics;
}

function copyWebConfig(cb) {
    log("copying ./web.config to ./docfx/en/web.config ...");
    log("copying ./web.config to ./docfx/jp/web.config ...");
    log("copying ./web.config to ./docfx/kr/web.config ...");
    gulp.src(['./web.config'])
    .pipe(gulp.dest("docfx/en"))
    .pipe(gulp.dest("docfx/jp"))
    .pipe(gulp.dest("docfx/kr"))
    .on("end", () => {
        // log("copying ./web.config to ./docfx/en/web.config ... done");
        // log("copying ./web.config to ./docfx/jp/web.config ... done");
        // log("copying ./web.config to ./docfx/kr/web.config ... done");
        if (cb) { cb() };
    })
}
exports.copyWebConfig = copyWebConfig

function updateSiteMap(cb) {
    if (cb) {
        ensureEnvironment();
    };
    var sitemapPath = DOCFX_SITE + "/sitemap.xml";
    log("updating " + sitemapPath);
    let oldContent = fs.readFileSync(sitemapPath).toString();
    let newContent = oldContent.split('.html').join('');
    fs.writeFileSync(sitemapPath, newContent);

    if (cb) { cb() };
}
exports.updateSiteMap = updateSiteMap

// generates JSON files with stats about samples used in xplatform docs that
// you can use to lookup samples used in each topic or find which topics uses samples
// these files are saved in output folder ./dist/[PLATFORM]/end/_site/stats.json
// as well as in the stats folder:
// ./stats/docsStats-Angular.json
// ./stats/docsStats-Blazor.json
// ./stats/docsStats-React.json
// ./stats/docsStats-WC.json
function buildStats(cb) {

    var config = docsConfig[PLAT];

    var docStats = {}
    docStats.note = "this auto-generated file provides stats about samples used in " + PLAT + " documentation";
    docStats.info = "you can lookup samples in 'samplesUsage' or lookup topics in 'topicsWithSamples' ";
    docStats.platform = PLAT;
    // docStats.samplesEnv = ENV_TARGET;
    // docStats.samplesBrowsers = config.samplesBrowsers;
    docStats.samplesCount = 0
    docStats.samplesHost = config.samplesBrowsers.staging + '/samples'; //[docStats.samplesEnv];
    docStats.samplesNote = "the 'samplesUsage' provides lookup of samples usage in topics"
    docStats.samplesUsage = {}

    docStats.topicsCount = 0
    if (PLAT === "Angular") {
        docStats.topicsHost = 'https://staging.infragistics.com/products/ignite-ui-angular/angular/components';
    } else if (PLAT === "Blazor") {
        docStats.topicsHost = 'https://staging.infragistics.com/products/ignite-ui-blazor/blazor/components';
    } else if (PLAT === "React") {
        docStats.topicsHost = 'https://staging.infragistics.com/products/ignite-ui-react/react/components';
    } else if (PLAT === "WebComponents") {
        docStats.topicsHost = 'https://staging.infragistics.com/products/ignite-ui-web-components/web-components/components';
    }
    docStats.topicsNote = "the 'topicsWithSamples' provides lookup of topics that used at least 1 sample"
    docStats.topicsWithSamples = {}

    if (!fs.existsSync(DOCFX_SITE)) {
         fs.mkdirSync(DOCFX_SITE);
    }

    gulp.src([
        DOCFX_PATH + '/components/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        docStats.topicsCount++;

        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename.replace('.md', '');
        // console.log("stats " + filePath);
        var topic = '/' + filePath.split('\\components\\')[1];
        if (topic.indexOf('\\') > 0) {
            topic = topic.split('\\').join('/');
        }
        topic =  docStats.topicsHost  + topic;

        var fileLines = fileContent.split("\n");
        var lineIndex = 0;
        for (const line of fileLines) {
            if (line.indexOf('iframe-src="') >= 0) {
                var link = line.replace('iframe-src="', '');
                link = link.trim();
                link = link.replace('"', '');
                link = link.replace('`', '');
                link = link.replace('{environment:dvDemosBaseUrl}', '');
                link = link.replace('{environment:demosBaseUrl}', '');
                link = link.replace(config.samplesBrowsers.development, '');
                link = link.replace(config.samplesBrowsers.staging, '');
                link = link.replace(config.samplesBrowsers.production, '');

                link = docStats.samplesHost + '/samples' + link;

                // if (docStats.samplesHost) {
                //     link = link.replace(docStats.samplesHost, '');
                // }

                // creating lookup of samples
                if (docStats.samplesUsage[link] === undefined) {
                    docStats.samplesUsage[link] = [];
                    docStats.samplesCount++;
                }
                if (docStats.samplesUsage[link].indexOf(topic) < 0) {
                    docStats.samplesUsage[link].push(topic);
                }

                // creating lookup of topics with samples
                if (docStats.topicsWithSamples[topic] === undefined) {
                    docStats.topicsWithSamples[topic] = [];
                }
                if (docStats.topicsWithSamples[topic].indexOf(link) < 0) {
                    docStats.topicsWithSamples[topic].push(link);
                }

            }
            lineIndex++;
        }
        fileCallback(null, file);
    }))
    .on("end", () => {
        if (docStats.samplesCount > 0) {
            // sort usage of sample links alphabetically
            var sampleMappings = {};
            var sampleLinks = Object.keys(docStats.samplesUsage);
            sampleLinks.sort();
            for (const link of sampleLinks) {
                var topicsArray = docStats.samplesUsage[link];
                topicsArray.sort();
                // compact json - temporary replacing [] with <> in short arrays
                // if (topicsArray.length === 1) {
                //     topicsArray = '<' + topicsArray[0] + '>'
                // }
                sampleMappings[link] = topicsArray; //docStats.samplesUsage[link]; //.join(',');
            }
            docStats.samplesUsage = sampleMappings;

            // sorting usage of topics links alphabetically
            var topicMappings = {};
            var topicNames = Object.keys(docStats.topicsWithSamples);
            topicNames.sort();
            for (const topic of topicNames) {
                var samplesArray = docStats.topicsWithSamples[topic];
                samplesArray.sort();
                // compact json - temporary replacing [] with <> in short arrays
                // if (samplesArray.length === 1) {
                //     samplesArray = '<' + samplesArray[0] + '>'
                // }
                topicMappings[topic] = samplesArray;
            }
            docStats.topicsWithSamples = topicMappings;

            var statsPlatform = docStats.platform.replace('WebComponents','WC');
            var statsPath = DOCFX_SITE + "/stats.json";
            var statsData = JSON.stringify(docStats,  null, '  ');
            // compact json - replacing <> with [] in short arrays
            statsData = statsData.replace(/\"\</g,'[ "');
            statsData = statsData.replace(/\>\"/g,'" ]');

            console.log('extracted stats for docs and samples to: ' + statsPath);
            fs.writeFileSync(statsPath, statsData);
            if (LANG === 'en') {
                fs.writeFileSync('./stats/docStats-' + statsPlatform + '.json', statsData);
            }
        }
        if (cb) cb();
    })
}
exports.buildStats = buildStats

var verifyFiles = gulp.series(verifyMarkdown);

function buildCore(cb) {
    // clean output files
    log("cleaning ...");
    del.sync("dist/" + PLAT + "/**/*.*");
    del.sync("dist/" + PLAT + "/**");
    ensureEnvironment();

    copyWebConfig();
    buildPlatform(cb);
}

exports.buildCoreAndTOC = buildCoreAndTOC = gulp.series(buildTOC, buildCore, buildStats)

// functions for building each platform:
function buildAngularDocFX(cb) { PLAT = "Angular"; DOCFX_FORCE_OUTPUT = true;  buildCoreAndTOC(cb); }
function buildAngular(cb)      { PLAT = "Angular"; DOCFX_FORCE_OUTPUT = false; buildCoreAndTOC(cb); }
function buildBlazor(cb)    { PLAT = "Blazor"; buildCoreAndTOC(cb); }
function buildReact(cb)     { PLAT = "React"; buildCoreAndTOC(cb); }
function buildWC(cb)        { PLAT = "WebComponents"; buildCoreAndTOC(cb); }
// function for building output of a platform specified in arguments, e.g. --plat=React
function buildWithArgs(cb)  { buildCoreAndTOC(cb); }
// exporting build functions for each platform:
exports['buildOutputAngular'] = gulp.series(verifyFiles, buildAngular)
exports['buildOutputBlazor'] = gulp.series(verifyFiles, buildBlazor)
exports['buildOutputReact'] = gulp.series(verifyFiles, buildReact)
exports['buildOutputWC'] = gulp.series(verifyFiles, buildWC)
exports['buildWithArgs'] = gulp.series(verifyFiles, buildWithArgs)
// function for building all platforms:
exports.buildAll = buildAll = gulp.series(buildAngular, buildReact, buildWC, buildBlazor);

function serveCore(cb) {
    browserSync.init({
        server: {
            baseDir: `${DOCFX_SITE}`
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                margin: '0px',
                padding: '5px',
                position: 'fixed',
                fontSize: '10px',
                zIndex: '9999',
                borderRadius: '5px 0px 0px',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                backgroundColor: 'rgba(60, 197, 31, 0.498039)'
            }
        }
    });


    var files = [`./doc/${LANG}/**/*.md`, `./docfx/${LANG}/**/*.md`, `./doc/${LANG}/components/**`, `${DOCFX_TEMPLATE_GLOBAL}`];

    if (PLAT === 'Angular') {
        gulp.watch(files, buildDocfx_Angular);
    } else if (PLAT === 'Blazor') {
        gulp.watch(files, buildDocfx_Blazor);
    } else if (PLAT === 'React') {
        gulp.watch(files, buildDocfx_React);
    } else if (PLAT === 'WebComponents') {
        gulp.watch(files, buildDocfx_WC);
    } else {
        gulp.watch(files, buildDocfx_All);
    }

    cb();
}

function watchCore(cb) {
    browserSync.reload();
    done();
}

function platformify(json, platformName) {
    return json.replace(
        new RegExp("ignite\\-ui\\-angular", "gm"),
        "ignite-ui-" + platformName.toLowerCase()
    ).replace(
        new RegExp("angular\\-", "gm"),
        platformName.toLowerCase() + "-"
    );
}

function buildSite(cb) {
    log("buildSite LANG=" + LANG + " CONF=" + DOCFX_CONF);

    return buildDocfx({
        siteDir: DOCFX_SITE,
        projectDir: DOCFX_PATH,
        environment: ENV_TARGET ? ENV_TARGET.trim() : null
    });
}

exports.buildSite = buildSite;
exports['build-site'] = buildSite;

// functions for building Docfx for each platform:
var buildDocfx_All      = gulp.series(verifyFiles, buildAll, buildSite, replaceEnvironmentVariables, updateSiteMap, buildStats);
var buildDocfx_Angular  = gulp.series(verifyFiles, buildAngularDocFX, buildSite, replaceEnvironmentVariables, updateSiteMap, buildStats);
var buildDocfx_Blazor   = gulp.series(verifyFiles, buildBlazor, buildSite, replaceEnvironmentVariables,  updateSiteMap, buildStats);
var buildDocfx_React    = gulp.series(verifyFiles, buildReact, buildSite, replaceEnvironmentVariables,  updateSiteMap, buildStats);
var buildDocfx_WC       = gulp.series(verifyFiles, buildWC, buildSite, replaceEnvironmentVariables, updateSiteMap, buildStats);
// function for building Docfx for a platform specified in arguments, e.g. --plat=React
var buildDocfx_WithArgs = gulp.series(buildWithArgs, buildSite, replaceEnvironmentVariables, updateSiteMap);
var buildDocfx_WithArgs = gulp.series(buildWithArgs, buildSite, replaceEnvironmentVariables, updateSiteMap, buildStats);
// exporting functions for building Docfx for each platform:
exports['buildDocfx_All']      = buildDocfx_All;
exports['buildDocfx_Angular']  = buildDocfx_Angular;
exports['buildDocfx_Blazor']   = buildDocfx_Blazor;
exports['buildDocfx_React']    = buildDocfx_React;
exports['buildDocfx_WC']       = buildDocfx_WC;
exports['buildDocfx_WithArgs'] = buildDocfx_WithArgs;

// exporting functions for starting website for each platform:
exports['startDefault'] = startDefault = gulp.series(buildDocfx_All, serveCore);
exports['startAngular'] = startAngular = gulp.series(buildDocfx_Angular, serveCore);
exports['startBlazor']  = startBlazor  = gulp.series(buildDocfx_Blazor, serveCore);
exports['startReact']   = startReact   = gulp.series(buildDocfx_React, serveCore);
exports['startWC']      = startWC      = gulp.series(buildDocfx_WC, serveCore);
exports.watch = watch = gulp.series(buildDocfx_All, watchCore);

function logArgs(cb) {
    console.log('logArgs PLAT=' + PLAT + ' LANG=' + LANG);
    ensureEnvironment();
    let platformName = PLAT; //"Angular";

    let isFirstRelease = docsConfig[platformName].isFirstRelease;
    log("isFirstRelease " + isFirstRelease + " ... ");

    cb();
}
exports.logArgs = logArgs

function generateRedirects(cb) {
    ensureEnvironment();

    let rulesWithProduct = rm.generateRules(true);
    let rulesWithoutProduct = rm.generateRules(false);

    console.log(">>");
    console.log(">> loading ./templates/web.config file... ");
    let localWebTemplate = fs.readFileSync('./templates/web.config').toString();

    console.log(">> saving  ./web.config file... ");
    let localWebConfig = localWebTemplate.replace('<!-- {AutoInsertRules} -->', rulesWithoutProduct);
    fs.writeFileSync('./web.config', localWebConfig);

    console.log(">>");
    console.log(">> loading ./templates/web.UrlRewriting.config file... ");
    let globalWebTemplate = fs.readFileSync('./templates/web.UrlRewriting.config').toString();

    console.log(">> saving  ./web.UrlRewriting.config file... ");
    let globalWebConfig = globalWebTemplate.replace('<!-- {AutoInsertRules} -->', rulesWithProduct);
    fs.writeFileSync('./web.UrlRewriting.config', globalWebConfig);

    console.log(">>");
    console.log(">> Now, do the following steps:");
    console.log(">> - copy Angular and XPLAT rules from ./web.config file to: https://github.com/IgniteUI/igniteui-docfx/blob/vNext/en/web.config");
    console.log(">> - copy all rules from  ./web.UrlRewriting.config file to: https://infragistics.visualstudio.com/DefaultCollection/IS/_git/Web?path=%2FUmbraco%2FU7.3%2FInfragistics.Web.Umbraco.Extensions%2Fconfig%2FUrlRewriting.config");
    cb();
}
exports.generateRedirects = generateRedirects


// copy output of igniteui-docfx-template to igniteui-xplat-docs
function copyTemplateLocal(cb) {
    gulp.src(['../igniteui-docfx-template/dist/**']).pipe(
    gulp.dest("./node_modules/igniteui-docfx-template"))
    .on("end", () => {
        if (cb) { cb(); }
    });
}
exports.copyTemplateLocal = copyTemplateLocal;

function copyTemplateBackup(cb) {
    gulp.src(['../_BK/igniteui-docfx-template/**']).pipe(
    gulp.dest("./node_modules/igniteui-docfx-template"))
    .on("end", () => {
        if (cb) { cb(); }
    });
}
exports.copyTemplateBackup = copyTemplateBackup;

function verifyMarkdown(cb) {
    ensureEnvironment();
    if (transformer === null || transformer === undefined) {
        if (cb) cb("transformer failed to load"); return;
    }
    console.log('verifying markdown files:');

    var filesCount = 0;
    var errorsCount = 0;
    gulp.src([
    'doc/en/**/*.md',
    'doc/jp/**/*.md',
    'doc/kr/**/*.md',
    //'doc/kr/**/chart-legends.md',
    // 'doc/en/**/charts/**/*.md',
    // 'doc/en/**/zoomslider*.md',
    // 'doc/en/**/point-chart.md',
    // 'doc/jp/components/grids/_shared/cell-editing.md',
    '!doc/**/obsolete/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        var fileContent = file.contents.toString();
        var filePath = file.dirname + path.sep + file.basename
        // filePath = '.\\doc\\' + filePath.split('doc\\')[1];
        // console.log('verifying: ' + filePath);
        filesCount++;
        var result = transformer.verifyMarkdown(fileContent, filePath);
        if (result.isValid) {
            // console.log('verified:  ' + filePath);
            // fileContent = result.fileContent;
            //file.contents = Buffer.from(fileContent);
            // auto-update topics with corrections if any
            fs.writeFileSync(filePath, result.fileContent);
        } else {
            errorsCount++;
        }
        fileCallback(null, file);
    }))
    .on("end", () => {
        if (errorsCount > 0) {
            var msg = "Correct above " + errorsCount + " errors in markdown files!";
            if (cb) cb(new Error(msg)); else console.log(msg);
            // if (cb) cb(msg); else console.log(msg);
        } else {
            var msg = 'verifying .md files ... done - checked ' + filesCount + " files";
            console.log(msg);
            if (cb) cb();
        }
    })
    .on("error", (err) => {
        console.log("Error in verifyMarkdown()");
        if (cb) cb(err);
    });
}
exports.verifyMarkdown = verifyMarkdown;


function fixMarkdownTables(cb) {

    console.log('fixMarkdownTables .md files ...');

    var filesCount = 0;
    var errorsCount = 0;
    gulp.src([
    // 'doc/en/**/*.md',
    // 'doc/jp/**/*.md',
    'doc/kr/**/*.md',
    '!doc/**/obsolete/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename
        filePath = '.\\doc\\' + filePath.split('doc\\')[1];
        console.log('  verifying: ' + filePath);

        var lines = fileContent.split("\n");
        for (let i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line.indexOf("title:") < 0 &&
                line.indexOf("> NOTE") < 0 &&
                line.indexOf("if") !== 0 &&
                line.indexOf("} else") !== 0 &&
                line.indexOf("columnArgs") < 0 &&
                line.indexOf("const ") !== 0 &&
                line.indexOf("return ") !== 0 &&
                line.indexOf("public ") !== 0 &&
                line.indexOf("private ") !== 0 &&
                line.indexOf("`IncludedProperties` | `ExcludedProperties`") < 0 &&
                line.indexOf("let ") !== 0 &&
                line.indexOf("(") !== 0 &&
                line.indexOf("{") !== 0 &&
                line.indexOf("<") !== 0 &&
                line.indexOf("*") !== 0 &&
                line.indexOf("|") !== 0 &&
                line.indexOf("||") < 0 &&
                line.indexOf("|") > 0) {
                lines[i] = "| " + line + " |";
                console.log(line);
            }
        }
        // fileContent = lines.join("\n");
        // fs.writeFileSync(filePath, fileContent);
        filesCount++;


        fileCallback(null, file);
    }))
    .on("end", () => {
        if (errorsCount > 0) {
            var msg = "Correct above " + errorsCount + " errors in markdown files!";
            if (cb) cb(new Error(msg)); else console.log(msg);
            // if (cb) cb(msg); else console.log(msg);
        } else {
            var msg = 'verifying .md files ... done - checked ' + filesCount + " files";
            console.log(msg);
            if (cb) cb();
        }
        // if (cb) cb();
    })
    .on("error", (err) => {
        console.log("Error in fixMarkdownTables()");
        if (cb) cb(err);
    });
}
exports.fixMarkdownTables = fixMarkdownTables;


function getSampleAltText(str) {
    str = str.replace("Sample}", "Title}");
    str = str.split('-').join(" ");
    str = str.split('/>').join("");
    str = str.split('>').join("");
    str = str.split('<').join("");
    str = str.split('"').join("");
    str = str.split('  ').join(" ");
    str = str.replace('Angular', "");
    str = str.trim();
    if (str.indexOf("{Platform}") !== 0) {
        str = "{Platform} " + str;
    }
    return str;
}

function getSampleSections(fileLines, filePath) {
    var sampleSections = [];

    var sampleCount = 0;
    var sample = undefined;
    for (let i = 0; i < fileLines.length; i++) {
        var line = fileLines[i];
        if (line.indexOf("<code-view") >= 0) {
            sampleCount++;
            sample = {};

            sample.file = filePath + ":" + i;

            sample.lineStart = i;
            sample.lineEnd = -1;
            sample.lines = [];
            sample.lines.push(line);
            sample.height = line.replace("<code-view", "").replace('style="height:', "");
            sample.height = sample.height.split('"').join("");
            sample.height = sample.height.split(':').join("");
            sample.height = sample.height.split(' ').join("");
            sample.height = sample.height.split(';').join("");
            sample.height = sample.height.split('px').join("");
            sample.height = sample.height.replace('<!--', "");
            sample.height = sample.height.trim();
        }
        else if (line.indexOf("</code-view>") >= 0) {
            if (sample === undefined ) {
                throw new Error("Missing '</code-view>' in " + filePath + ":L" + i);
            }
            sample.lineEnd = i;
            sample.lines.push(line);

            if (sample.alt === undefined && sample.path) {
                var parts = sample.path.split("/");
                if (parts.length === 4) {
                    sample.alt = "{Platform} " + parts[2] + " " +  parts[3];
                } else if (parts.length === 3) {
                    sample.alt = "{Platform} " + parts[1] + " " +  parts[2];
                } else if (parts.length === 2) {
                    sample.alt = "{Platform} " + parts[1];
                } else {
                    sample.alt = "{Platform} " + sample.path;
                }
                sample.alt = getSampleAltText(sample.alt);
            }

            // sample.code = '` "sample": "' + sample.path + '", "height": ' + sample.height + ', "alt": "' + sample.alt + '" ```'
            sample.code = '`sample="' + sample.path + '", height="' + sample.height + '", alt="' + sample.alt + '"`'

            sampleSections.push(sample);
            sample = undefined;
        }
        else if (sample) {
            sample.lines.push(line);
            if (line.indexOf("iframe-src=") >= 0) {
                var components = ['data-chart', 'pie-chart', 'doughnut-chart', 'financial-chart',
                    'category-chart', 'sparkline', 'tree-map', 'zoomslider', 'date-picker', 'multi-column-combobox',
                    'excel-library', 'spreadsheet', 'bullet-graph', 'linear-gauge',
                    'tree-map', 'radial-gauge', 'data-grid', 'grid', 'list', 'combo', 'pivot-grid', 'tree-grid', 'tree', 'geo-map',
                    'badge','button','checkbox','chip', 'circular-progress-indicator',
                    'date-time-input','dropdown','form','icon-button','input',
                    'linear-progress-indicator','mask-input',
                    'radio','rating','ripple','select','slider','switches',
                    'accordion','avatar','card','dock-manager','expansion-panel','icon',
                    'stepper','tabs','nav-bar','nav-drawer','dialog','snackbar','toast','calendar',
                    ,'{ComponentSample}',
                ];

                sample.path = line.replace("iframe-src=", "");

                // console.log(sample.path);

                var altLocation = sample.path.indexOf(' alt=')
                if (altLocation > 0) {
                    sample.path = sample.path.substring(0, altLocation)
                }

                sample.path = sample.path.replace('>', "");
                sample.path = sample.path.replace('{environment:dvDemosBaseUrl}', "");
                sample.path = sample.path.replace('{environment:demosBaseUrl}', "");
                sample.path = sample.path.replace('Sample}-', "Sample}/");
                sample.path = sample.path.split('"').join("");
                sample.path = sample.path.split(' ').join("");
                sample.path = sample.path.trim();

                for (const name of components) {
                    if (sample.path.indexOf('/'+name+'-') > 0) {
                        sample.path = sample.path.replace('/'+name+'-', '/'+name+'/');
                        break;
                    }
                }

                var sampleRouteParts = sample.path.split('/');
                var samplePathWithVars = sample.path.indexOf("Sample}") >= 0;
                if (samplePathWithVars) {
                    if (sampleRouteParts.length !== 3 && sampleRouteParts.length !== 4) {
                        throw new Error("Invalid sample path: " + sample.path + " L3=" + sampleRouteParts.length + " " + sample.file);
                    }
                } else if (sampleRouteParts.length !== 4) {
                    throw new Error("Invalid sample path: " + sample.path + " L4=" + sampleRouteParts.length + " " + sample.file);
                }
            }

            if (line.indexOf("alt=") >= 0) {
                var altLocation = line.indexOf(' alt=')
                if (altLocation > 0) {
                    sample.alt = line.substring(altLocation).replace("alt=", "")
                } else {
                    sample.alt = line.replace("alt=", "");
                }
                sample.alt = getSampleAltText(sample.alt);
            }
        }

    }

    if (sampleSections.length !== sampleCount) {
        throw new Error("Failed to get all sample sections in " + filePath);
    }
    return sampleSections;
}

// replacing <code-view/> with incline code in markdown files
// which will be converted to <code-view/> when transforming markdown files
// this way, defining a sample requires only 3 simple settings instead of 5 complex settings:
// `sample="/charts/data-chart/overview", height=600, alt="{Platform} Chart Overview" `
function simplifySamples(cb) {

    console.log('simplifySamples .md files ...');

    var filesCount = 0;
    var errorsCount = 0;
    gulp.src([
    // 'doc/en/**/charts/chart-overview.md',
    // 'doc/en/**/notifications/**/*.md',
    // 'doc/en/**/layouts/**/*.md',
    // 'doc/en/**/scheduling/calendar.md',
    // 'doc/**/inputs/**/*.md',
    // 'doc/en/**/grids/**/*.md',
    // 'doc/en/**/charts/**/*.md',
    // 'doc/en/**/charts/types/treemap-chart.md',
    // 'doc/**/grids/grids.md',
    // 'doc/en/**/general*.md',
    'doc/en/**/*.md',
    'doc/jp/**/*.md',
    'doc/kr/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename
        filePath = '.\\doc\\' + filePath.split('doc\\')[1];
        // console.log('simplifySamples: ' + filePath);

        var fileLines = fileContent.split("\r\n");
        var samples = getSampleSections(fileLines, filePath);
        // console.log(samples);

        if (samples.length > 0) {
            //samples.sort((a,b) => a.path - b.path);
            for (const sample of samples) {

                if (sample.path.indexOf('=') > 0) {
                    // console.log(" " + sample.path + " \t\t\t" + sample.file)
                }
                // console.log(" " + sample.path + " ")
                console.log(padRight(sample.height, 4) + " " + padLeft(sample.path, 60) + "\t\t" + sample.alt)
                // console.log(" " + sample.height + " " + sample.path + " " + sample.alt)
                // console.log(sample.lines[0] + " " + sample.height + " " + sample.path + " ")

                // setting new code-viewer, e.g. `sample="/charts/data-chart/overview", height=600, alt="{Platform} Chart Overview" `
                fileLines[sample.lineStart] = sample.code;

                for (let i = sample.lineStart + 1; i <= sample.lineEnd; i++) {
                    fileLines[i] = ""; // removing previous code-viewer
                }
            }
            fileContent = fileLines.join("\r\n");
            // fileLines = fileContent.split("\r\n\r\n\r\n");
            // fileContent = fileLines.join("\r\n");
            fileLines = fileContent.split("\r\n\r\n\r\n\r\n");
            fileContent = fileLines.join("\r\n");
            fs.writeFileSync(filePath, fileContent);
        }

        filesCount++;
        fileCallback(null, file);
    }))
    .on("end", () => {
        if (errorsCount > 0) {
            var msg = "Correct above " + errorsCount + " errors in markdown files!";
            if (cb) cb(new Error(msg)); else console.log(msg);
            // if (cb) cb(msg); else console.log(msg);
        } else {
            var msg = 'simplifySamples .md files ... done - checked ' + filesCount + " files";
            console.log(msg);
            if (cb) cb();
        }
    })
    .on("error", (err) => {
        console.log("Error in simplifySamples()");
        if (cb) cb(err);
    });
}
exports.simplifySamples = simplifySamples;

function padLeft(num, width) {
    let str = num.toString();
    return str.length >= width ? str : str + (new Array(width - str.length + 1).join(' '));
}

function padRight(num, width) {
    let str = num.toString();
    return str.length >= width ? str : new Array(width - str.length + 1).join(' ') + str;
}

function logSampleLinks(cb, platform, server) {

    console.log('logSampleLinks .md files ...');
    var sampleLinks = [];
    var sampleHost = ""

    if (server === undefined) server = argv.server !== undefined ? argv.server : "local";
    if (server === "staging") {
        sampleHost = "https://staging.infragistics.com";
    } else if (server === "production" || server === "prod") {
        sampleHost = "https://infragistics.com";
    } else {
        sampleHost = "https://localhost:4200";
    }
    // var sampleHost = "https://localhost:4200/webcomponents-demos/samples";
    // var sampleHost = "https://staging.infragistics.com/webcomponents-demos/samples";
    if (platform === undefined) platform = argv.plat !== undefined ? argv.plat : "WC";

    if (platform === "WC" || platform === "WebComponents") {
        platform = "WebComponents"
        sampleHost += "/webcomponents-demos/samples";
    } else if (platform === "Blazor") {
        sampleHost += "/blazor-client/samples";
    } else if (platform === "Angular") {
        sampleHost += "/angular-demos-dv/samples";
    } else if (platform === "React") {
        sampleHost += "/react-demos/samples";
    }

    var components = [
        "grids/grid",
        "grids/tree-grid",
    //  "grids/pivot-grid",
    //  "grids/hierarchical-grid"
    ];

    gulp.src([
    // 'doc/en/**/charts/chart-overview.md',
    // 'doc/en/**/notifications/**/*.md',
    // 'doc/en/**/layouts/**/*.md',
    // 'doc/en/**/scheduling/calendar.md',
    // 'doc/**/inputs/**/*.md',
    // 'doc/en/**/grids/**/*.md',
     'doc/en/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename
        filePath = '.\\doc\\' + filePath.split('doc\\')[1];
        // console.log('logSampleLinks: ' + filePath);

        var fileLines = fileContent.split("\r\n");
        for (const line of fileLines) {
            if (line.indexOf("sample=") >= 0) {
                var parts = line.split(',');
                var link = parts[0].replace('sample="', '');
                link = link.replace('"', '');
                link = link.replace('`', '');
                link = link.replace('`', '');
                link = link.replace('{PivotGridSample}', 'grids/tree-grid');
                link = link.replace('{TreeGridSample}', 'grids/tree-grid');
                link = link.replace('{GridSample}', 'grids/grid');
                link = sampleHost + link;

                if (link.indexOf("{ComponentSample}") >= 0) {
                    for (const c of components) {
                        var compLink = link.replace('{ComponentSample}', c);
                        if (sampleLinks.indexOf(compLink) < 0) {
                            sampleLinks.push(compLink);
                        }
                    }
                } else if (sampleLinks.indexOf(link) < 0) {
                    sampleLinks.push(link);
                }
            }
        }
        fileCallback(null, file);
    }))
    .on("end", () => {
        sampleLinks.sort();
        for (const link of sampleLinks) {
            console.log(link);
        }
        if (cb) cb();
    })
}

exports.logSampleLinks = logSampleLinks;
// use these gulp commands to log xplat samples as links to samples hosted staging:
// gulp logSampleLinks --sever=staging --plat=Blazor
// gulp logSampleLinks --sever=staging --plat=Angular
// gulp logSampleLinks --sever=staging --plat=React
// gulp logSampleLinks --sever=staging --plat=WC
// or these gulp commands to log xplat samples as links to samples hosted locally:
// gulp logSampleLinksAngular
// gulp logSampleLinksBlazor
// gulp logSampleLinksReact
// gulp logSampleLinksWC
exports.logSampleLinksAngular = function log(cb) { logSampleLinks(cb, "Angular"); }
exports.logSampleLinksBlazor = function log(cb) { logSampleLinks(cb, "Blazor"); }
exports.logSampleLinksReact = function log(cb) { logSampleLinks(cb, "React"); }
exports.logSampleLinksWC = function log(cb) { logSampleLinks(cb, "WC"); };

var docsInfo = {};
function extractSampleLinks(cb, platform, server, outputType) {

    if (server === undefined) server = argv.server !== undefined ? argv.server : "staging";
    if (platform === undefined) platform = argv.plat !== undefined ? argv.plat : "WC";
    if (outputType === undefined) outputType = argv.output !== undefined ? argv.output : undefined;

    docsInfo.platform = "";
    docsInfo.samplesServer = server;
    docsInfo.samplesBrowser = "";
    docsInfo.samplesHost = ""
    docsInfo.samplesCount = 0
    docsInfo.samples = {}
    docsInfo.topicsCount = 0
    docsInfo.topics = {}

    const target = platform.toLowerCase();
    if (target === "wc") { // || target === "webcomponents") {
        docsInfo.platform = "WebComponents";
        docsInfo.samplesHost = "http://localhost:4200";
        docsInfo.samplesBrowser = "/webcomponents-demos/samples";
    } else if (target === "blazor") {
        docsInfo.platform = "Blazor";
        docsInfo.samplesHost = "https://localhost:44317";
        docsInfo.samplesBrowser = "/blazor-client/samples";
    } else if (target === "angular") {
        docsInfo.platform = "Angular";
        docsInfo.samplesHost = "http://localhost:4200";
        docsInfo.samplesBrowser = "/angular-demos-dv/samples";
    } else if (target === "react") {
        docsInfo.platform = "React";
        docsInfo.samplesHost = "http://localhost:4200";
        docsInfo.samplesBrowser = "/react-demos/samples";
    } else {
        docsInfo.platform = "UNKNOWN";
        docsInfo.samplesHost = "UNKNOWN";
        docsInfo.samplesBrowser = "UNKNOWN";
        console.log("UNKNOWN platform: " + target);
        // cb();
        throw new Error("The '" + target + "' platform is not supported")
    }
    var sourceDir = 'dist/' + docsInfo.platform + '/en';

    if (!fs.existsSync(sourceDir)) {
        console.log("--------------------------------------------------------------------");
        console.log("ERROR: Cannot find directory: " + sourceDir);
        console.log("HINT:  You must run this command first: npm run build" + platform);
        console.log("--------------------------------------------------------------------");
        cb();
    }

    var sourceFiles = 'dist/' + docsInfo.platform + '/en/**/*.md';
    console.log('extracting sample links from ./dist/**/en/*.md files ' + sourceFiles + ' files ...');

    gulp.src([
    //  'dist/' + platform + '/en/components/**/charts/chart-overview.md',
    //  'dist/' + platform + '/en/**/notifications/**/*.md',
    // 'dist/' + platform + '/en/**/grids/grids.md',
    'dist/' + docsInfo.platform + '/en/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        docsInfo.topicsCount++;

        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename
        filePath = '.\\dist\\' + filePath.split('dist\\')[1];
        // filePath =  filePath.split('\\en\\')[1];
        var topic = filePath.split('\\').join('/');
        //console.log('extractSampleLinks: ' + filePath);

        var fileLines = fileContent.split("\n");

        var lineIndex = 0;
        for (const line of fileLines) {
            if (line.indexOf('iframe-src="') >= 0) {
                var link = line.replace('iframe-src="', '');
                link = link.trim();
                link = link.replace('"', '');
                link = link.replace('`', '');
                link = link.replace('/blazor-client', '');
                link = link.replace('{environment:dvDemosBaseUrl}/', 'http://localhost:4200/');
                link = link.replace(docsInfo.samplesHost, docsInfo.samplesHost + docsInfo.samplesBrowser);

                if (server === "staging") {
                    link = link.replace(docsInfo.samplesHost, "http://staging.infragistics.com");
                } else if (server === "production" || server === "prod") {
                    link = link.replace(docsInfo.samplesHost, "http://infragistics.com");
                }

                link = link.replace('http://', 'https://');

                docsInfo.samples[link] = topic + ":" + lineIndex;

                // if (docsInfo.samples[link] === undefined) {
                //     docsInfo.samples[link] = [];
                // }
                // if (docsInfo.samples[link].indexOf(topic) < 0) {
                //     docsInfo.samples[link].push(topic);
                // }
                // throw new Error("stop");

                if (docsInfo.topics[topic] === undefined) {
                    docsInfo.topics[topic] = [];
                }
                if (docsInfo.topics[topic].indexOf(link) < 0) {
                    docsInfo.topics[topic].push(link);
                }

                docsInfo.samplesCount++;
            }
            lineIndex++;
        }
        fileCallback(null, file);
    }))
    .on("end", () => {

        var platform = docsInfo.platform.replace("WebComponents", "wc").toLowerCase() ;
        var outputPath = "./samples-" + docsInfo.samplesServer + "-" + platform + ".json";
        var outputData = {};
        if (outputType === "samples") {
            var links = [];
            for (const link of Object.keys(docsInfo.samples) ) {
                links.push(link);
            }
            links.sort();
            outputData = links;
            console.log(docsInfo.samples);
        } else if (outputType === "topics") {
            outputData = docsInfo.topics;
            console.log(outputData);
        } else { // default to saving samples and topics
            outputData = docsInfo;
            var links = []; // logging sample links
            for (const link of Object.keys(docsInfo.samples) ) {
                links.push(link);
            }
            links.sort();
            // console.log(links);
        }

        if (docsInfo.samplesCount > 0) {
            var outputJSON = JSON.stringify(outputData,  null, '  ');
            fs.writeFileSync(outputPath, outputJSON);
            console.log('extracted ' + docsInfo.samplesCount + ' sample links to: ' + outputPath);
        }

        if (cb) cb();
    })
}
exports.extractSampleLinks = extractSampleLinks;

// use these gulp commands to extract links to samples hosted on staging:
// gulp extractSampleLinks --server="staging" --plat=Angular
// gulp extractSampleLinks --server="staging" --plat=Blazor
// gulp extractSampleLinks --server="staging" --plat=React
// gulp extractSampleLinks --server="staging" --plat=WC
// or use these gulp commands to extract links to samples hosted locally:
// gulp extractSampleLinksAngular
// gulp extractSampleLinksBlazor
// gulp extractSampleLinksReact
// gulp extractSampleLinksWC
exports.extractSampleLinksAngular = extractSampleLinksAngular = function extractSamples(cb) { extractSampleLinks(cb, "Angular", "staging") }
exports.extractSampleLinksBlazor = extractSampleLinksBlazor = function extractSamples(cb) { extractSampleLinks(cb, "Blazor", "staging"); }
exports.extractSampleLinksReact = extractSampleLinksReact = function extractSamples(cb) { extractSampleLinks(cb, "React", "staging"); }
exports.extractSampleLinksWC = extractSampleLinksWC = function extractSamples(cb) { extractSampleLinks(cb, "WC", "staging"); };

exports.extractSampleLinksAll = gulp.series(
    extractSampleLinksAngular,
    extractSampleLinksBlazor,
    extractSampleLinksReact,
    extractSampleLinksWC,
);

// script for comparing output of builds
function compareOutputs(cb) {

    // note replace 'React-OLD' and 'React-NEW' with names of two folders that you want to compare
    let source = {
        folder: '\\dist\\React-OLD\\\en\\components\\',
        paths: [], files: {}
    };
    let target = {
        folder: '\\dist\\React-NEW\\\en\\components\\',
        paths: [], files: {}
    };
    source.pattern = '.' + source.folder.split('\\').join('/');
    target.pattern = '.' + target.folder.split('\\').join('/');

    gulp.src([
        // source.pattern + '**/menus/**/*.md',
        // target.pattern + '**/menus/**/*.md',
        source.pattern + '**/*.md',
        target.pattern + '**/*.md',
        source.pattern + '**/*.html',
        target.pattern + '**/*.html',
    ])
    .pipe(es.map(function(file, fileCallback) {

        var filePath = (file.dirname + "\\" + file.basename);
        var fileName = filePath.split('\\en\\components')[1];

        if (filePath.includes(source.folder))
        {
            source.paths.push(filePath);
            source.files[fileName] = { path: filePath, content: file.contents.toString().split('\n')};
        }
        else if (filePath.includes(target.folder))
        {
            target.paths.push(filePath);
            target.files[fileName] = { path: filePath, content: file.contents.toString().split('\n') };
        }

        // console.log(filePath);
        fileCallback(null, file);
    }))
    .on("end", () => {

        // console.log(source.paths);
        // console.log(target.paths);

        var sourceNames = Object.keys(source.files);
        var targetNames = Object.keys(target.files);

        if (sourceNames.length !== targetNames.length) {
            console.alert('WARNING source folder has : ' + sourceNames.length+ ' files but target has ' + targetNames.length + 'files')
        }

        for (const fileName of sourceNames) {
            var sourceFile = source.files[fileName];
            var targetFile = target.files[fileName];
            if (sourceFile === undefined) {
                console.log('source is missing: ' + sourceFile.path);
            }
            else if (targetFile === undefined) {
                console.log('target is missing: ' + targetFile.path);
            }
            else {
                let sourceLines = sourceFile.content;
                let targetLines = sourceFile.content;

                if (sourceLines.length !== targetLines.length) {
                    console.alert('WARNING ' + fileName + ' not match file lines: ' + sourceLines.length + ' vs ' + targetLines.length);
                } else {
                    for (let i = 0; i < sourceLines.length; i++) {
                        if (sourceLines[i] !== targetLines[i]) {
                            console.alert('WARNING ' + fileName + ' not match on lines: ')
                            console.alert(sourceFile.path + ':' + i);
                            console.alert(targetFile.path + ':' + i);
                            break;
                        }
                    }
                }
            }
        }

        if (cb) cb();
    })
}
exports.compareOutputs = compareOutputs
