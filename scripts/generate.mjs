/**
 * Platform-specific markdown generator.
 *
 * Covers:
 *   1. Variable substitution          {Platform}, {PackageCore}, etc.
 *   2. Platform block filtering        <!-- Angular -->...<!-- end: Angular -->
 *   3. Component block filtering       <!-- ComponentStart: Grid -->...<!-- ComponentEnd: Grid -->
 *   4. Code block removal              by exclusive language tag AND by content detection
 *   5. Shared file expansion           _shared/*.md → grid/, tree-grid/, …
 *   6. Sample viewer transformation    `sample="..."` → <code-view> HTML
 *   7. CodeSandbox / StackBlitz buttons (per platform config)
 *   8. TOC generation                  filter toc.json by platform → dist toc.json
 *   9. Multi-language support          --lang=en|jp|kr
 *
 * Usage:
 *   node scripts/generate.mjs --platform=React
 *   node scripts/generate.mjs --platform=Angular --lang=jp
 *   node scripts/generate.mjs --platform=WebComponents --lang=kr
 */

import {
    readFileSync, writeFileSync, mkdirSync,
    existsSync, readdirSync, statSync, rmSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// CLI arguments
// ---------------------------------------------------------------------------

const args        = process.argv.slice(2);
const get         = (prefix) => args.find(a => a.startsWith(prefix))?.split('=')[1];

const PLATFORM = get('--platform=') ?? process.env.PLATFORM ?? 'React';
const LANG     = get('--lang=')     ?? process.env.LANG_CODE ?? 'en';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.join(__dirname, '..');

// Source MD files:  src/content/{lang}/components/
const SRC_COMPONENTS = path.join(ROOT, 'src', 'content', LANG, 'components');

// Source toc.json:  src/content/{lang}/toc.json
const SRC_TOC = path.join(ROOT, 'src', 'content', LANG, 'toc.json');

const OUT_DIR = path.join(ROOT, 'generated', PLATFORM, LANG, 'components');

const DOC_CONFIG     = path.join(ROOT, 'docConfig.json');
const DOC_COMPONENTS = path.join(ROOT, 'docComponents.json');

// ---------------------------------------------------------------------------
// Load config files
// ---------------------------------------------------------------------------

const docConfig = JSON.parse(readFileSync(DOC_CONFIG, 'utf8'));
const docComponents = JSON.parse(readFileSync(DOC_COMPONENTS, 'utf8'));

const platformConfig = docConfig[PLATFORM];
if (!platformConfig) {
    const valid = Object.keys(docConfig).filter(k => k !== 'NOTE').join(', ');
    console.error(`Unknown platform "${PLATFORM}". Valid: ${valid}`);
    process.exit(1);
}

// Sort longer names first to avoid partial-match problems
// e.g. {PlatformLower} must match before {Platform}
const replacements = platformConfig.replacements
    .filter(r => r.name && r.value !== undefined)
    .sort((a, b) => b.name.length - a.name.length);

const replacementMap = Object.fromEntries(replacements.map(r => [r.name, r.value]));

// ---------------------------------------------------------------------------
// Component variable mapping
//
// For a shared file expanded for "Grid":
//   {ComponentTitle}      → value of {GridTitle}       → "Grid"
//   {ComponentName}       → value of {GridName}        → "IgrGrid"
//   {ComponentApiMembers} → value of {GridApiMembers}
// ---------------------------------------------------------------------------

function buildComponentReplacements(componentKey) {
    const prefix = `{${componentKey}`;
    return Object.entries(replacementMap)
        .filter(([name]) => name.startsWith(prefix))
        .map(([name, value]) => ({
            name:  `{Component${name.slice(prefix.length)}`,   // e.g. {ComponentTitle}
            value,
        }))
        .sort((a, b) => b.name.length - a.name.length);
}

// ---------------------------------------------------------------------------
// Frontmatter parser
// ---------------------------------------------------------------------------

function parseFrontmatter(content) {
    const match = content.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/);
    if (!match) return { data: {} };
    const fm = match[1];

    const lineMatch = fm.match(/^sharedComponents:[ \t]*(.*)/m);
    if (!lineMatch) return { data: {} };

    const rest = lineMatch[1].trim();
    let sharedComponents;

    if (rest.startsWith('[')) {
        // Flow sequence: ["Grid", "TreeGrid", "HierarchicalGrid"]
        sharedComponents = [...rest.matchAll(/"([^"]+)"|'([^']+)'|([A-Za-z][\w]*)/g)]
            .map(m => m[1] ?? m[2] ?? m[3])
            .filter(Boolean);
    } else {
        const blockMatch = fm.match(/^sharedComponents:\s*\r?\n((?:[ \t]*-[ \t]+\S.*\r?\n?)*)/m);
        if (!blockMatch) return { data: {} };
        sharedComponents = [...blockMatch[1].matchAll(/^[ \t]*-[ \t]+(.+?)[ \t]*$/mg)]
            .map(m => m[1]);
    }

    return { data: { sharedComponents } };
}

// ---------------------------------------------------------------------------
// 1. Variable substitution
// ---------------------------------------------------------------------------

function applyReplacements(content, extraReplacements = []) {
    const all = [...extraReplacements, ...replacements]
        .sort((a, b) => b.name.length - a.name.length);
    for (const { name, value } of all) {
        content = content.replaceAll(name, value);
    }
    return content;
}

// ---------------------------------------------------------------------------
// 2. Platform block filtering
// ---------------------------------------------------------------------------

function filterPlatformBlocks(content) {
    return content.replace(
        /<!-- ([\w ,]+?) -->([\s\S]*?)<!-- end: \1 -->/g,
        (_m, platforms, body) =>
            platforms.split(',').map(p => p.trim()).includes(PLATFORM) ? body : '',
    );
}

// ---------------------------------------------------------------------------
// 3. Component block filtering
// ---------------------------------------------------------------------------

function filterComponentBlocks(content, componentKey) {
    return content.replace(
        /<!-- ComponentStart: ([\w, ]+?) -->([\s\S]*?)<!-- ComponentEnd: \1 -->/g,
        (_m, components, body) =>
            components.split(',').map(c => c.trim()).includes(componentKey) ? body : '',
    );
}

function stripComponentTags(content) {
    return content
        .replace(/<!-- ComponentStart: [\w, ]+ -->/g, '')
        .replace(/<!-- ComponentEnd: [\w, ]+ -->/g, '');
}

// ---------------------------------------------------------------------------
// 4. Code block filtering  (language tag + content detection)
// ---------------------------------------------------------------------------

// Languages that belong exclusively to one platform
const EXCLUSIVE_LANG = {
    razor:  'Blazor',
    cshtml: 'Blazor',
    tsx:    'React',
    jsx:    'React',
};

// Content patterns for generic languages (ts / html)
const CONTENT_PATTERNS = {
    Angular:       [/igx-\w+/,   /\bIgx[A-Z]/],
    React:         [/\bIgr[A-Z]/],
    WebComponents: [/igc-\w+/,   /\bIgc[A-Z]/],
    Blazor:        [/\bIgb[A-Z]/],
};

function detectPlatformFromContent(lang, code) {
    const l = lang.toLowerCase();
    if (!['ts', 'typescript', 'html'].includes(l)) return null;
    for (const [platform, patterns] of Object.entries(CONTENT_PATTERNS)) {
        if (patterns.some(p => p.test(code))) return platform;
    }
    return null;
}

function filterCodeBlocks(content) {
    return content.replace(/```(\w+)([\s\S]*?)```/g, (match, lang, body) => {
        // Exclusive language check
        const owner = EXCLUSIVE_LANG[lang.toLowerCase()];
        if (owner && owner !== PLATFORM) return '';

        // Content-based detection for ts / html
        const detected = detectPlatformFromContent(lang, body);
        if (detected && detected !== PLATFORM) return '';

        return match;
    });
}

// ---------------------------------------------------------------------------
// 5. (Shared file expansion handled in processDir)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 6 & 7. Sample viewer + edit buttons
// ---------------------------------------------------------------------------

function parseSampleAttrs(str) {
    const attrs = {};
    const re = /([\w-]+)="([^"]*)"/g;
    let m;
    while ((m = re.exec(str)) !== null) attrs[m[1]] = m[2];
    return attrs;
}

function transformSampleViewers(content) {
    // Match: `sample="/path", height="N", alt="...", img-src="..."`
    return content.replace(/`(sample="[^`]+)`/g, (_match, inner) => {
        const attrs  = parseSampleAttrs(inner);
        const sample = (attrs.sample || '').replace(/^\//, ''); // strip leading /
        const height = (attrs.height || '400').replace('px', '');
        const alt    = attrs.alt || '';

        let html =
            `<code-view style="height: ${height}px" alt="${alt}"\n` +
            `           data-demos-base-url="{environment:dvDemosBaseUrl}"\n` +
            `                    iframe-src="{environment:dvDemosBaseUrl}/${sample}"\n` +
            `                                             github-src="${sample}">\n` +
            `</code-view>`;

        // --- CodeSandbox / StackBlitz buttons ---
        const showSandbox    = platformConfig.codeSandboxButtonInject    === true;
        const showStackblitz = platformConfig.samplesDisplayStackblitz   === true;

        if (showSandbox || showStackblitz) {
            const tree = (platformConfig.samplesGithubTree || '').replace(/^github\//, '');
            const file = platformConfig.samplesGithubFile || 'index.html';

            let buttons = '';

            if (showSandbox) {
                const url = `https://codesandbox.io/s/${tree}${sample}` +
                            `?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/${file}`;
                buttons +=
                    `<a target="_blank" href="${url}" rel="noopener noreferrer">\n` +
                    `  <img height="40px" style="border-radius:0rem;max-width:100%;" ` +
                    `alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>\n` +
                    `</a>\n`;
            }

            if (showStackblitz) {
                const encodedFile = file.replace('/', '%2F');
                const url = `https://stackblitz.com/${tree}${sample}?file=src/${encodedFile}`;
                buttons +=
                    `<a target="_blank" href="${url}" rel="noopener noreferrer">\n` +
                    `  <img height="40px" style="border-radius:0rem;max-width:100%;" ` +
                    `alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>\n` +
                    `</a>\n`;
            }

            html += '\n\n' + buttons;
        }

        return html;
    });
}

// ---------------------------------------------------------------------------
// 8. TOC generation
// ---------------------------------------------------------------------------

function filterTocNodes(nodes) {
    if (!Array.isArray(nodes)) return [];
    return nodes
        .filter(node => !Array.isArray(node.exclude) || !node.exclude.includes(PLATFORM))
        .map(node => {
            // Apply variable substitution to name
            const { exclude, ...rest } = node;
            rest.name = applyReplacements(rest.name || '');
            if (rest.items) rest.items = filterTocNodes(rest.items);
            return rest;
        });
}

function generateToc() {
    if (!existsSync(SRC_TOC)) {
        console.warn(`[generate] toc.json source not found: ${SRC_TOC} — writing empty stub`);
        writeFileSync(path.join(OUT_DIR, 'toc.json'), JSON.stringify({ items: [] }, null, 2), 'utf8');
        return;
    }
    const raw      = readFileSync(SRC_TOC, 'utf8');
    const nodes    = JSON.parse(raw);
    const filtered = filterTocNodes(nodes);
    writeFileSync(path.join(OUT_DIR, 'toc.json'), JSON.stringify(filtered, null, 2), 'utf8');
    console.log(`[generate] toc.json  : generated (${filtered.length} top-level items)`);
}

// ---------------------------------------------------------------------------
// Full transform pipelines
// ---------------------------------------------------------------------------

function normalise(content) {
    return content.replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

/**
 * Convert relative image paths (../images/, ../../images/, etc.)
 * to absolute /images/ so Astro can resolve them from public/.
 */
function normalizeImagePaths(content) {
    return content.replace(/(?:\.\.\/)+images\//g, '/images/');
}

function transformRegularFile(content) {
    content = filterPlatformBlocks(content);
    content = stripComponentTags(content);
    content = filterCodeBlocks(content);
    content = transformSampleViewers(content);
    content = applyReplacements(content);
    content = normalizeImagePaths(content);
    return normalise(content);
}

function transformSharedFile(content, componentKey) {
    const compRepl = buildComponentReplacements(componentKey);
    content = filterPlatformBlocks(content);
    content = filterComponentBlocks(content, componentKey);
    content = filterCodeBlocks(content);
    content = transformSampleViewers(content);
    content = applyReplacements(content, compRepl);
    content = normalizeImagePaths(content);
    return normalise(content);
}

// ---------------------------------------------------------------------------
// 9. Directory walker  (handles shared file expansion)
// ---------------------------------------------------------------------------

function processDir(srcDir, outDir) {
    mkdirSync(outDir, { recursive: true });

    for (const entry of readdirSync(srcDir)) {
        const srcPath = path.join(srcDir, entry);
        const stat    = statSync(srcPath);

        if (stat.isDirectory()) {
            if (entry !== '_shared') processDir(srcPath, path.join(outDir, entry));
        } else if (/\.(md|mdx)$/.test(entry)) {
            const raw = readFileSync(srcPath, 'utf8');
            writeFileSync(path.join(outDir, entry), transformRegularFile(raw), 'utf8');
        } else if (entry.endsWith('.json') && entry !== 'toc.json') {
            const raw = readFileSync(srcPath, 'utf8');
            writeFileSync(path.join(outDir, entry), applyReplacements(raw), 'utf8');
        }
    }

    // Expand _shared/*.md into one file per declared component
    const sharedDir = path.join(srcDir, '_shared');
    if (!existsSync(sharedDir)) return;

    for (const entry of readdirSync(sharedDir)) {
        if (!/\.(md|mdx)$/.test(entry)) continue;

        const srcPath = path.join(sharedDir, entry);
        const raw     = readFileSync(srcPath, 'utf8');
        const { data: fm } = parseFrontmatter(raw);
        const shared  = Array.isArray(fm.sharedComponents) ? fm.sharedComponents : [];

        if (shared.length === 0) {
            // No sharedComponents — treat as a regular file in the current dir
            writeFileSync(path.join(outDir, entry), transformRegularFile(raw), 'utf8');
            continue;
        }

        for (const compName of shared) {
            const compDef = docComponents[compName];
            if (!compDef) {
                console.warn(`  [warn] Unknown component "${compName}" in ${srcPath}`);
                continue;
            }
            const compOutDir = path.join(outDir, compDef.output);
            mkdirSync(compOutDir, { recursive: true });
            writeFileSync(
                path.join(compOutDir, entry),
                transformSharedFile(raw, compName),
                'utf8',
            );
        }
    }
}

// ---------------------------------------------------------------------------
// 9b. environment.json generation
// ---------------------------------------------------------------------------

/**
 * Write dist/{Platform}/{lang}/environment.json so that remark-docfx can
 * resolve {environment:dvDemosBaseUrl} (and friends) at build time.
 *
 * Structure mirrors the igniteui-docfx environment.json format:
 *   { "development": { "dvDemosBaseUrl": "..." }, "staging": { ... }, "production": { ... } }
 */
function generateEnvironmentJson() {
    const sb = platformConfig.samplesBrowsers;
    if (!sb) {
        console.warn('[generate] No samplesBrowsers in platformConfig — skipping environment.json');
        return;
    }

    // Build one entry per environment key (development / staging / production).
    const envJson = {};
    for (const [envKey, url] of Object.entries(sb)) {
        envJson[envKey] = {
            dvDemosBaseUrl:        url,
            demosBaseUrl:          url,   // alias used in some older samples
            infragisticsBaseUrl:   'https://www.infragistics.com',
            dvApiBaseUrl:          'https://www.infragistics.com',
        };
    }

    // Write one level above the components/ output dir: generated/{Platform}/{lang}/environment.json
    const outPath = path.join(path.dirname(OUT_DIR), 'environment.json');
    writeFileSync(outPath, JSON.stringify(envJson, null, 2), 'utf8');
    console.log(`[generate] environment.json: ${outPath}`);
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

console.log(`[generate] Platform : ${PLATFORM}`);
console.log(`[generate] Language : ${LANG}`);
console.log(`[generate] Source   : ${SRC_COMPONENTS}`);
console.log(`[generate] Output   : ${OUT_DIR}`);

if (!existsSync(SRC_COMPONENTS)) {
    console.error(`Source directory not found: ${SRC_COMPONENTS}`);
    console.error(`For lang="${LANG}", add translated files to src/content/${LANG}/components/`);
    process.exit(1);
}

// Clean the output root (generated/{PLATFORM}/{LANG}/)
const OUT_ROOT = path.dirname(OUT_DIR); // generated/{PLATFORM}/{LANG}/
if (existsSync(OUT_ROOT)) {
    rmSync(OUT_ROOT, { recursive: true, force: true });
    console.log(`[generate] Cleaned output: ${OUT_ROOT}`);
}
mkdirSync(OUT_DIR, { recursive: true });
processDir(SRC_COMPONENTS, OUT_DIR);
generateToc();
generateEnvironmentJson();

// Write .platform.json so astro.config.mjs picks up the right platform
writeFileSync(
    path.join(ROOT, '.platform.json'),
    JSON.stringify({ platform: PLATFORM, lang: LANG }, null, 2),
    'utf8',
);

// Clear Astro's content cache so the next dev/build picks up the correct
// platform + language content rather than serving stale cached entries.
const astroCacheDir = path.join(ROOT, '.astro');
if (existsSync(astroCacheDir)) {
    rmSync(astroCacheDir, { recursive: true, force: true });
    console.log('[generate] Cleared .astro cache.');
}

console.log('[generate] Done.');
