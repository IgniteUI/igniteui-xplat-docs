var gulp = require('gulp');
var yaml = require('gulp-yaml');
var del = require('del');
var flatten = require('gulp-flatten');
var es = require('event-stream');
var path = require('path');
const { buildDocfx } = require('igniteui-docfx-template');

const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;
const fs = require('fs');

var fileRoot = 'c:/work/NetAdvantage/DEV/XPlatform/2020.1/'

var mt = null;
var ml = null;
var transformer = null;
var loader = null;
var docs = null;

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

        transformer = new mt.MarkdownTransformer();
        loader = new ml.MappingLoader();
        docs = require("./docConfig.json");

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
    let mapStream = es.map(function(file, cb) {

      var fileContent = file.contents.toString();
      var typeName = path.basename(path.dirname(file.path))

      console.log("- " + file.path);
      //var typeName = "CategoryChart";

      transformer.transformContent(typeName, fileContent,
      (err, results) => {
        if (err) {
            cb(err, null);
        }
        //console.log("HERE!!!");
        file.contents = Buffer.from(results);

        cb(null, file);
      });
    });
    return mapStream;
}

function transformStaticFiles(platformName) {
    ensureEnvironment();
    return es.map(function(file, cb) {

      var fileContent = file.contents.toString();
      var typeName = path.basename(path.dirname(file.path))

      var replacements = docs[platformName].replacements;
      //console.log(typeName);
      //var typeName = "CategoryChart";
      for (var i = 0; i < replacements.length; i++) {
          fileContent = fileContent.replace(new RegExp(replacements[i].name, "gm"), replacements[i].value);
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

// updates API mapping files in ./apiMap folder for Blazor platform
function updateApiBlazor() {
    return updateApiFor("Blazor");
}
exports.updateApiBlazor = updateApiBlazor;

// updates API mapping files in ./apiMap folder for specified platform
function updateApiFor(platformName) {
    return gulp.src([
        fileRoot + "Source/*.JS/**/bin/**/" + platformName + "/*apiMap.json"
    ])
    .pipe(flatten())
    .pipe(gulp.dest("apiMap/" + platformName));
}
// updates API mapping files in ./apiMap folder for all platforms
exports.updateApi = updateApi = gulp.series(
    updateApiAngular,
    updateApiBlazor,
    updateApiReact,
    updateApiWebComponents,
);

// function buildPlatform(cb, platformName, apiPlatform) {
function buildPlatform(cb) {
    let platformName = PLAT;
    let apiPlatform = PLAT_API;
    log("=========================================================");
    log("building " + PLAT + " docs for " + ENV_TARGET + " environment");
    ensureEnvironment();

    // checking if we need to hide NEW and UPDATED labels in TOC for the first release of product, e.g. Blazor
    let isFirstRelease = docs[platformName].isFirstRelease;
    // gendering TOC.yml files from TOC.json files:
    generateTocFor(platformName, 'en', isFirstRelease);
    generateTocFor(platformName, 'jp', isFirstRelease);
    generateTocFor(platformName, 'kr', isFirstRelease);

    let apiSourcePath = './apiMap/' + platformName + '/**/*apiMap.json';
    log("API source mapping: " + apiSourcePath);
    gulp.src([
        apiSourcePath
    ])
    .pipe(flatten())
    .pipe(readMappings())
    .on("end", () => {
        transformer.configure(loader, apiPlatform, docs[platformName], ENV_TARGET);

        let sources = ['doc/**/*.md'];

        if (platformName == "Angular") {
            // excluding topics for controls that are not in Angular product, e.g. Data-grid
            sources.push('!doc/**/dock-manager*.md');
            sources.push('!doc/**/data-grid*.md');
            sources.push('!doc/**/date-picker.md');
            sources.push('!doc/**/multi-column-combobox.md');
        } else if (platformName == "Blazor") {
            // excluding topics for controls that are not in Blazor product or API is broken for these components/features
            // sources.push('!doc/**/dock-manager*.md');
            sources.push('!doc/**/spreadsheet*.md');
            // sources.push('!doc/**/excel*.md');
            // sources.push('!doc/**/treemap*.md');
            sources.push('!doc/**/general-cli*.md');
            sources.push('!doc/**/general-breaking-changes*.md');
            // sources.push('!doc/**/data-chart-type-stacked*.md');
            // sources.push('!doc/**/data-chart-type-scatter-polygon-series.md');
            // sources.push('!doc/**/data-chart-type-scatter-polyline-series.md');
            // sources.push('!doc/**/zoomslider*.md');
        }
        // uncomment to test faster build
        // sources.push('!doc/**/data-grid*.md');
        // sources.push('!doc/**/data-chart*.md');
        // sources.push('!doc/**/financial-chart*.md');
        // sources.push('!doc/**/category-chart*.md');
        // sources.push('!doc/**/doughnut-chart.md');
        // sources.push('!doc/**/pie-chart.md');
        // sources.push('!doc/**/general*.md');
        // sources.push('!doc/**/*map*.md');
        // sources.push('!doc/**/*gauge*.md');
        // sources.push('!doc/**/*excel*.md');
        // sources.push('!doc/**/spreadsheet*.md');
        // sources.push('!doc/**/dock-manager*.md');
        // sources.push('!doc/**/*graph.md');
        // sources.push('!doc/**/treemap*.md');
        // sources.push('!doc/**/zoomslider*.md');
        // sources.push('!doc/**/charts/types/sparkline-chart');
        // sources.push('!doc/**/*chart*.md');

        gulp.src(sources)
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

    // PLAT defaults to "React" if --plat argument is not specified
    generateTocFor(PLAT, 'en');
    // generateTocFor(PLAT, 'jp');
    // generateTocFor(PLAT, 'kr');
    cb();
}
exports.generateTocYML = generateTocYML;

// generate "toc.yml" file from "toc.json" by filtering its nodes for specified platform
// e.g.  generateTocFor('All', 'en');
// e.g.  generateTocFor('Angular', 'en');
function generateTocFor(platformName, language, isFirstRelease) {
    ensureEnvironment();
    let jsonPath = './docfx/' + language + '/components/toc.json';
    transformer.generateTOC(jsonPath, platformName, isFirstRelease);
}

function buildCore(cb) {
    // clean output files
    log("cleaning ...");
    del.sync("dist/" + PLAT + "/**/*.*");
    del.sync("dist/" + PLAT + "/**");
    ensureEnvironment();

    buildPlatform(cb);
}
// functions for building each platform:
function buildAngular(cb)   { PLAT = "Angular"; buildCore(cb); }
function buildBlazor(cb)    { PLAT = "Blazor"; buildCore(cb); }
function buildReact(cb)     { PLAT = "React"; buildCore(cb); }
function buildWC(cb)        { PLAT = "WebComponents"; buildCore(cb); }
// function for building output of a platform specified in arguments, e.g. --plat=React
function buildWithArgs(cb)  { buildCore(cb); }
// exporting build functions for each platform:
exports['buildOutputAngular'] = buildAngular
exports['buildOutputBlazor'] = buildBlazor
exports['buildOutputReact'] = buildReact
exports['buildOutputWC'] = buildWC
exports['buildWithArgs'] = buildWithArgs
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
var buildDocfx_All      = gulp.series(buildAll, buildSite);
var buildDocfx_Angular  = gulp.series(buildAngular, buildSite);
var buildDocfx_Blazor   = gulp.series(buildBlazor, buildSite);
var buildDocfx_React    = gulp.series(buildReact, buildSite);
var buildDocfx_WC       = gulp.series(buildWC, buildSite);
// function for building Docfx for a platform specified in arguments, e.g. --plat=React
var buildDocfx_WithArgs = gulp.series(buildWithArgs, buildSite);
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
    let platformName = "Angular";

    log("docs " + JSON.stringify(docs[platformName], null, '  ') + " ... ");
    let isFirstRelease = docs[platformName].isFirstRelease;
    log("isFirstRelease " + isFirstRelease + " ... ");

    cb();
}
exports.logArgs = logArgs
