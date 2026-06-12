import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { collectionPath } from "@/lib/collections";
import type { Artwork, Collection } from "@/lib/types";

interface ArtworkDetailProps {
    collection: Collection;
    artwork: Artwork;
}

export function ArtworkDetail({ collection, artwork }: ArtworkDetailProps) {
    return (
        <article className="flex flex-col gap-10 py-12 sm:py-16 lg:grid lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div>
                <Image
                    src={artwork.image.src}
                    alt={artwork.image.alt}
                    width={artwork.image.width}
                    height={artwork.image.height}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    placeholder={artwork.image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={artwork.image.blurDataURL}
                    priority
                    className="h-auto w-full"
                />
            </div>
            <div className="flex flex-col gap-6 lg:py-2">
                <div>
                    <h1 className="font-display text-3xl sm:text-4xl">
                        {artwork.title}
                    </h1>
                    {artwork.year && (
                        <p className="pt-2 text-sm text-ink-muted">
                            {artwork.year}
                        </p>
                    )}
                </div>
                <p className="text-ink-muted">{artwork.description}</p>
                <Link
                    href={collectionPath(collection)}
                    className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm tracking-wide text-ink-muted transition-colors duration-300 hover:text-accent"
                >
                    <ArrowLeft
                        aria-hidden="true"
                        className="h-4 w-4"
                        strokeWidth={1.5}
                    />
                    Back to {collection.title}
                </Link>
            </div>
        </article>
    );
}
