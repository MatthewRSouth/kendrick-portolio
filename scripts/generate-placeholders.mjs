// One-off dev script: generates muted-tone placeholder JPEGs into
// public/artwork/ and public/artist/ so the gallery can be designed against
// honest, varied aspect ratios before real artwork exists.
//
// Uses the `sharp` already present in node_modules (bundled with Next.js) —
// intentionally not a declared dependency; the generated JPEGs are committed,
// so the app never depends on this script at build time.
//
// Run: node scripts/generate-placeholders.mjs
// It prints a blurDataURL per image to paste into content/collections.ts.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_ARTWORK = path.resolve("public/artwork");
const OUT_ARTIST = path.resolve("public/artist");

// Desaturated, gallery-quiet tones so placeholders read calm, not loud.
const tones = {
    clay: { r: 176, g: 138, b: 120 },
    sage: { r: 138, g: 148, b: 130 },
    warmGrey: { r: 156, g: 148, b: 138 },
    slate: { r: 116, g: 124, b: 134 },
    ochre: { r: 178, g: 152, b: 110 },
    dustRose: { r: 168, g: 134, b: 132 },
    moss: { r: 120, g: 128, b: 106 },
    ash: { r: 134, g: 130, b: 126 },
};

// filename, intrinsic size (varied aspect ratios: 4:5, 3:4, 1:1, 2:3, 3:2), tone
const manifest = [
    // Quiet Rooms
    { file: "morning-window.jpg", w: 1400, h: 1750, tone: tones.warmGrey },
    { file: "unmade-bed.jpg", w: 1800, h: 1200, tone: tones.clay },
    { file: "doorway.jpg", w: 1200, h: 1800, tone: tones.ash },
    { file: "kitchen-light.jpg", w: 1400, h: 1400, tone: tones.ochre },
    // Tender Weight
    { file: "held.jpg", w: 1500, h: 2000, tone: tones.dustRose },
    { file: "lean.jpg", w: 1400, h: 1750, tone: tones.sage },
    { file: "rest.jpg", w: 1800, h: 1200, tone: tones.slate },
    { file: "carry.jpg", w: 1200, h: 1800, tone: tones.clay },
    // Salt and Smoke
    { file: "ember.jpg", w: 1400, h: 1400, tone: tones.ochre },
    { file: "tideline.jpg", w: 1800, h: 1200, tone: tones.moss },
    { file: "ash-figure.jpg", w: 1400, h: 1750, tone: tones.ash },
];

function gradientSvg(w, h) {
    // Soft radial light so the placeholder has gentle tonal variation.
    return Buffer.from(
        `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="g" cx="38%" cy="32%" r="85%">
                    <stop offset="0%" stop-color="white" stop-opacity="0.28"/>
                    <stop offset="55%" stop-color="white" stop-opacity="0.06"/>
                    <stop offset="100%" stop-color="black" stop-opacity="0.18"/>
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
        </svg>`,
    );
}

async function generate(file, w, h, tone, outDir) {
    const full = await sharp({
        create: {
            width: w,
            height: h,
            channels: 3,
            background: tone,
        },
    })
        .composite([{ input: gradientSvg(w, h) }])
        .jpeg({ quality: 80 })
        .toBuffer();

    await sharp(full).toFile(path.join(outDir, file));

    const blur = await sharp(full).resize(12).jpeg({ quality: 50 }).toBuffer();
    return `data:image/jpeg;base64,${blur.toString("base64")}`;
}

await mkdir(OUT_ARTWORK, { recursive: true });
await mkdir(OUT_ARTIST, { recursive: true });

for (const { file, w, h, tone } of manifest) {
    const blurDataURL = await generate(file, w, h, tone, OUT_ARTWORK);
    console.log(`/artwork/${file} ${w}x${h}\n  ${blurDataURL}`);
}

const portraitBlur = await generate(
    "portrait.jpg",
    1200,
    1500,
    tones.warmGrey,
    OUT_ARTIST,
);
console.log(`/artist/portrait.jpg 1200x1500\n  ${portraitBlur}`);
