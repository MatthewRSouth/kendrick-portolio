// Single source of truth for site identity and absolute-URL building.
// Set NEXT_PUBLIC_SITE_URL at deploy time; localhost keeps OG/sitemap URLs
// resolvable during development.
export const siteUrl: string =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const artistName = "Kendrick"; // [PLACEHOLDER] the artist's display name

export const siteName = `${artistName} — Artist`;

export const siteDescription =
    "[PLACEHOLDER] A portfolio of paintings and drawings exploring vulnerability, expressiveness, and sensuality through the human figure.";
