import { collections } from "@/content/collections";
import type { Artwork, Collection } from "@/lib/types";

export function getCollections(): Collection[] {
    return collections;
}

export function getCollection(slug: string): Collection | undefined {
    return collections.find((collection) => collection.slug === slug);
}

export function getArtwork(
    collectionSlug: string,
    artworkSlug: string,
): { collection: Collection; artwork: Artwork } | undefined {
    const collection = getCollection(collectionSlug);
    if (!collection) return undefined;
    const artwork = collection.artworks.find(
        (artwork) => artwork.slug === artworkSlug,
    );
    if (!artwork) return undefined;
    return { collection, artwork };
}

export function collectionPath(collection: Collection): string {
    return `/collections/${collection.slug}`;
}

export function artworkPath(collection: Collection, artwork: Artwork): string {
    return `/collections/${collection.slug}/${artwork.slug}`;
}
