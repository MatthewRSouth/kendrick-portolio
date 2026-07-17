import Link from "next/link";

import { CollectionCover } from "@/components/gallery/CollectionCover";
import { collectionPath } from "@/lib/collections";
import type { Collection } from "@/lib/types";

// How many works from a series cycle through its preview.
const PREVIEW_LIMIT = 4;

interface CollectionCardProps {
    collection: Collection;
    priority?: boolean;
}

export function CollectionCard({
    collection,
    priority = false,
}: CollectionCardProps) {
    const count = collection.artworks.length;
    const preview =
        count > 0
            ? collection.artworks.slice(0, PREVIEW_LIMIT).map((a) => a.image)
            : [collection.cover];

    return (
        <Link
            href={collectionPath(collection)}
            className="group block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            <div className="transition-opacity duration-500 group-hover:opacity-90">
                <CollectionCover
                    images={preview}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={priority}
                />
            </div>
            <div className="flex items-baseline justify-between pt-4">
                <h2 className="font-display text-2xl transition-colors duration-300 group-hover:text-accent">
                    {collection.title}
                </h2>
                <p className="text-sm text-ink-muted">
                    {count} {count === 1 ? "work" : "works"}
                </p>
            </div>
        </Link>
    );
}
