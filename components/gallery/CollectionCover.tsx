"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { ArtworkImage } from "@/lib/types";

const ROTATE_MS = 5000;

interface CollectionCoverProps {
    images: ArtworkImage[];
    sizes: string;
    priority?: boolean;
}

/**
 * A collection's preview: slowly cross-fades through a few works in the series.
 * Falls back to a still first image when there is only one work, or when the
 * viewer prefers reduced motion. Images are letterboxed rather than cropped —
 * the frame is a fixed shape so the fade has nothing to jump against.
 */
export function CollectionCover({
    images,
    sizes,
    priority = false,
}: CollectionCoverProps) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;

        const id = window.setInterval(
            () => setActive((current) => (current + 1) % images.length),
            ROTATE_MS,
        );
        return () => window.clearInterval(id);
    }, [images.length]);

    if (images.length === 0) return null;

    return (
        <div className="relative aspect-4/5 w-full overflow-hidden">
            {images.map((image, index) => (
                <Image
                    key={image.src}
                    src={image.src}
                    alt={index === active ? image.alt : ""}
                    aria-hidden={index !== active}
                    fill
                    sizes={sizes}
                    placeholder={image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={image.blurDataURL}
                    priority={priority && index === 0}
                    className={`object-contain transition-opacity duration-1000 ease-out ${
                        index === active ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
}
