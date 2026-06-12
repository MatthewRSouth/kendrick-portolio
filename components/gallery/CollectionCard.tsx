import Image from "next/image";
import Link from "next/link";

import { collectionPath } from "@/lib/collections";
import type { Collection } from "@/lib/types";

interface CollectionCardProps {
    collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
    const count = collection.artworks.length;
    return (
        <Link
            href={collectionPath(collection)}
            className="group block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            <div className="overflow-hidden">
                <Image
                    src={collection.cover.src}
                    alt={collection.cover.alt}
                    width={collection.cover.width}
                    height={collection.cover.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder={collection.cover.blurDataURL ? "blur" : "empty"}
                    blurDataURL={collection.cover.blurDataURL}
                    className="h-auto w-full transition-opacity duration-500 group-hover:opacity-90"
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
