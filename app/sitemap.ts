import type { MetadataRoute } from "next";

import {
    artworkPath,
    collectionPath,
    getCollections,
} from "@/lib/collections";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = ["/", "/about", "/collections"].map(
        (route) => ({
            url: `${siteUrl}${route === "/" ? "" : route}`,
            lastModified: new Date(),
        }),
    );

    const collectionRoutes: MetadataRoute.Sitemap = getCollections().flatMap(
        (collection) => [
            {
                url: `${siteUrl}${collectionPath(collection)}`,
                lastModified: new Date(),
            },
            ...collection.artworks.map((artwork) => ({
                url: `${siteUrl}${artworkPath(collection, artwork)}`,
                lastModified: new Date(),
            })),
        ],
    );

    return [...staticRoutes, ...collectionRoutes];
}
