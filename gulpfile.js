var gulp = require('gulp');
var yaml = require('gulp-yaml');
var del = require('del');
var flatten = require('gulp-flatten');
var es = require('event-stream');
var through = require('through2');
var path = require('path');
const { buildDocfx } = require('igniteui-docfx-template');

const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;
const fs = require('fs');

var fileRoot = 'c:/work/NetAdvantage/DEV/XPlatform/2022.2/'

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
let ENV_TARGET = process.env === undefined ? "development" :
                 process.env.NODE_ENV === undefined ? "development" :
                 process.env.NODE_ENV.trim(); // staging/production

let DOCFX_BASE = {
    en: `./dist/${PLAT}/en`,
    jp: `./dist/${PLAT}/jp`,
    kr: `./dist/${PLAT}/kr`
};

let DOCFX_PATH = `${DOCFX_BASE[LANG]}`;
let DOCFX_CONF = `${DOCFX_PATH}/docfx.json`;
let DOCFX_TEMPLATE_GLOBAL = path.join(__dirname, `./node_modules/igniteui-docfx-template/template/bundling.global.json`);
let DOCFX_SITE = `${DOCFX_PATH}/_site`;
let DOCFX_ARTICLES = `${DOCFX_PATH}/components`;

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
      var fileName = file.path.replace(fileDir, "");

      var typeName = path.basename(path.dirname(file.path))
      // console.log("- " + file.path);

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
        var fileHasAPI = fileContent.indexOf(" API Members") > 0;
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
                console.log('missing API Section: ' + filePath + "\n ## API Members \n\n - " + apiLinks.join("\n - "));
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
    // excludedTopics.push('doc/**/general-getting-started.md');
    // excludedTopics.push('doc/**/general-getting-started-*.md');
    // excludedTopics.push('doc/**/general-changelog-dv.md');
    // excludedTopics.push('doc/**/general-nuget-feed.md');
    // excludedTopics.push('doc/**/general-installing-blazor.md');
    // excludedTopics.push('doc/**/grids/grids.md');
    // excludedTopics.push('doc/**/grids/grid/*.md');
    // excludedTopics.push('doc/**/grids/pivot-grid/*.md');
    // excludedTopics.push('doc/**/grids/tree-grid/*.md');
    // excludedTopics.push('doc/**/grids/hierarchical-grid/*.md');
    // excludedTopics.push('doc/**/grids/data-grid*.md');
    // excludedTopics.push('doc/**/grids/tree.md');
    // excludedTopics.push('doc/**/grids/list.md');
    // excludedTopics.push('doc/**/charts/**/*.md');
    // excludedTopics.push('doc/**/editors/**/*.md');
    // excludedTopics.push('doc/**/inputs/**/*.md');
    // excludedTopics.push('doc/**/layouts/**/*.md');
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
    // uncomment these lines to skip JP and KR topics:
    // excludedTopics.push('doc/**/jp/**/*.md');
    // excludedTopics.push('doc/**/kr/**/*.md');

    let excludedFiles = [];
    gulp.src(excludedTopics)
    .pipe(es.map(function(file, fileCallback) {
        var filePath = file.path.split('\\').join('/');
        var fileLocal = 'doc/' + filePath.split('/doc/')[1];
        // log(fileLocal);
        excludedFiles.push(fileLocal);
        fileCallback(null, file);
    }))
    .on("end", () => {
        log("excludedTopics " + excludedFiles.length + " ... done ");

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
        // for (const topic of tocTopics) {
        //     log("topics included in toc: " + topic);
        // }

        includedTopics = ['doc/**/*.md'];
        gulp.src(['doc/**/*.md'])
        .pipe(es.map(function(topicFile, topicCallback) {
            var filePath = topicFile.path.split('\\').join('/');
            var fileLocal = 'doc/' + filePath.split('/doc/')[1];
            var includedInTOC = false;
            for (const topic of tocTopics) {
                if (filePath.indexOf(topic) >= 0) {
                    includedInTOC = true;
                }
            }
            // excluding topics that are not in TOC but always including shared topics
            if (!includedInTOC && filePath.indexOf("/_shared/") < 0) {
                includedTopics.push('!' + fileLocal);
            }

            topicCallback(null, topicFile);
        }))
        .on("end", () => {
            // for (const topic of includedTopics) {
            //     log("actual topic: " + topic);
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
    log("building '" + PLAT + "' docs for '" + ENV_TARGET + "' environment");
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

        if (platformName === "Angular") {
            // excluding grids and shared topics from angular builds
            sources.push('!doc/**/grids/**/*.md');
            sources.push('!doc/**/grids/_shared/*.md');
        }

        gulp.src(sources, { base: "./doc/" })
        .pipe(transformFiles())
        .pipe(gulp.dest("dist/" + platformName))
        .on("end", function() {
            gulp.src([
                'doc/**/images/**/*.*'
            ])
            .pipe(gulp.dest("dist/" + platformName))
            .on("end", function () {
                if (platformName == "Angular") {
                    log("building " + PLAT + " ... done ");
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
    tocTopics.sort();
    for (let i = 0; i < tocTopics.length; i++) {
        tocTopics[i] = 'doc/' + language + '/components/' + tocTopics[i];
      //  console.log('>> generateTocFor "' + tocTopics[i] + '"');
    }
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

exports.buildCoreAndTOC = buildCoreAndTOC = gulp.series(buildTOC, buildCore)

// functions for building each platform:
function buildAngular(cb)   { PLAT = "Angular"; buildCoreAndTOC(cb); }
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
        environment: process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null
      });
}

exports.buildSite = buildSite;
exports['build-site'] = buildSite;

// functions for building Docfx for each platform:
var buildDocfx_All      = gulp.series(verifyFiles, buildAll, buildSite, updateSiteMap);
var buildDocfx_Angular  = gulp.series(verifyFiles, buildAngular, buildSite, updateSiteMap);
var buildDocfx_Blazor   = gulp.series(verifyFiles, buildBlazor, buildSite, updateSiteMap);
var buildDocfx_React    = gulp.series(verifyFiles, buildReact, buildSite, updateSiteMap);
var buildDocfx_WC       = gulp.series(verifyFiles, buildWC, buildSite, updateSiteMap);
// function for building Docfx for a platform specified in arguments, e.g. --plat=React
var buildDocfx_WithArgs = gulp.series(buildWithArgs, buildSite, updateSiteMap);
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
    console.log(">> - copy all rules from ./web.UrlRewriting.config file to: https://infragistics.visualstudio.com/DefaultCollection/IS/_git/Web?path=%2FUmbraco%2FU7.3%2FInfragistics.Web.Umbraco.Extensions%2Fconfig%2FUrlRewriting.config");
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
    console.log('verifying .md files ...');

    var filesCount = 0;
    var errorsCount = 0;
    gulp.src([
    'doc/en/**/*.md',
    'doc/jp/**/*.md',
    'doc/kr/**/*.md',
    //'doc/kr/**/chart-legends.md',
    // 'doc/en/**/zoomslider*.md',
    '!doc/**/obsolete/**/*.md',
    ])
    .pipe(es.map(function(file, fileCallback) {
        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename
        // filePath = '.\\doc\\' + filePath.split('doc\\')[1];
        // console.log('verifying: ' + filePath);
        filesCount++;
        var result = transformer.verifyMetadata(fileContent, filePath);
        if (result.isValid) {
            // console.log('verified:  ' + filePath);
            // fileContent = result.fileContent;
            //file.contents = Buffer.from(fileContent);
            // auto-update topics with corrections if any
            //fs.writeFileSync(filePath, fileContent);
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