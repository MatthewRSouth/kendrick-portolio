import Image from "next/image";
import Link from "next/link";

import { artworkPath } from "@/lib/collections";
import type { Artwork, Collection } from "@/lib/types";

interface ArtworkCardProps {
    collection: Collection;
    artwork: Artwork;
}

export function ArtworkCard({ collection, artwork }: ArtworkCardProps) {
    return (
        <Link
            href={artworkPath(collection, artwork)}
            className="group block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            <Image
                src={artwork.image.src}
                alt={artwork.image.alt}
                width={artwork.image.width}
                height={artwork.image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder={artwork.image.blurDataURL ? "blur" : "empty"}
                blurDataURL={artwork.image.blurDataURL}
                className="h-auto w-full transition-opacity duration-500 group-hover:opacity-90"
            />
            <div className="flex flex-col gap-1 pt-4">
                <h3 className="font-display text-xl transition-colors duration-300 group-hover:text-accent">
                    {artwork.title}
                </h3>
                <p className="text-sm text-ink-muted">{artwork.intention}</p>
            </div>
        </Link>
    );
}
