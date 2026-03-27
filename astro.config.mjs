// @ts-check
import path from 'node:path';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createDocsSite } from 'docs-template/integration';

// ---------------------------------------------------------------------------
// Platform selection
//
// Priority (highest → lowest):
//   1. PLATFORM env var    (e.g. PLATFORM=Angular npm run dev)
//   2. .platform.json      (written by scripts/generate.mjs)
//   3. Default → 'React'
// ---------------------------------------------------------------------------

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @param {string} envKey @param {string} jsonKey @param {string} fallback @returns {string} */
function resolveSetting(envKey, jsonKey, fallback) {
    if (process.env[envKey]) return process.env[envKey];
    try {
        const file = path.join(__dirname, '.platform.json');
        if (existsSync(file)) {
            const cfg = JSON.parse(readFileSync(file, 'utf8'));
            if (cfg[jsonKey]) return cfg[jsonKey];
        }
    } catch { /* ignore */ }
    return fallback;
}

const platform = resolveSetting('PLATFORM', 'platform', 'React');
const lang     = resolveSetting('LANG_CODE', 'lang',     'en');

// ---------------------------------------------------------------------------
// Per-platform site metadata
// ---------------------------------------------------------------------------

const PLATFORM_META = {
    Angular: {
        title: 'Ignite UI for Angular',
        description: 'Reference docs for Ignite UI for Angular.',
    },
    React: {
        title: 'Ignite UI for React',
        description: 'Reference docs for Ignite UI for React.',
    },
    WebComponents: {
        title: 'Ignite UI for Web Components',
        description: 'Reference docs for Ignite UI for Web Components.',
    },
    Blazor: {
        title: 'Ignite UI for Blazor',
        description: 'Reference docs for Ignite UI for Blazor.',
    },
};

const meta = PLATFORM_META[/** @type {keyof typeof PLATFORM_META} */ (platform)] ?? PLATFORM_META.React;

const PLATFORM_KEY = {
    Angular: 'angular',
    React: 'react',
    WebComponents: 'web-components',
    Blazor: 'blazor',
};

// Generated markdown lives in dist/{platform}/{lang}/ (produced by scripts/generate.mjs)
const XPLAT_ROOT = path.join(__dirname, 'dist', platform, lang);

console.log(`[astro.config] Platform: ${platform}  lang: ${lang}  →  ${XPLAT_ROOT}`);

// https://astro.build/config
export default createDocsSite({
    site: 'https://my-org.github.io/xplat-docs',
    title: meta.title,
    description: meta.description,
    platform: /** @type {any} */ (PLATFORM_KEY[/** @type {keyof typeof PLATFORM_KEY} */ (platform)] ?? null),
    navLang: 'en',
    source: {
        tocPath: path.join(XPLAT_ROOT, 'components', 'toc.json'),
        docsDir: path.join(XPLAT_ROOT, 'components'),
        imagesDir: path.join(XPLAT_ROOT, 'images'),
    },
    starlight: {
        logo: { src: './public/favicon.svg' },
    },
    // Serve images statically from public/ — no Astro image optimization needed
    image: { service: { entrypoint: 'astro/assets/services/noop' } },
    markdown: { remarkPlugins: [] },
});
