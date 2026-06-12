import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { Container } from "@/components/ui/Container";
import { artworkPath, getCollections } from "@/lib/collections";
import { artistName } from "@/lib/site";

export default function HomePage() {
    // A small curated selection: the first work of each series. The first
    // becomes the hero piece; the rest fill the "Selected work" row.
    const featured = getCollections()
        .filter((collection) => collection.artworks.length > 0)
        .slice(0, 3)
        .map((collection) => ({
            collection,
            artwork: collection.artworks[0],
        }));

    const hero = featured[0];
    const selected = featured.slice(1);

    return (
        <Container>
            <section className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
                <div className="flex flex-col items-start gap-8">
                    <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
                        {artistName}
                    </h1>
                    <p className="max-w-lg text-lg text-ink-muted">
                        [PLACEHOLDER] One or two sentences in the artist&apos;s
                        own voice — what the work is about and why he makes it.
                    </p>
                    <div className="flex flex-wrap items-center gap-8 pt-2">
                        <Link
                            href="/collections"
                            className="inline-flex min-h-11 items-center gap-2 tracking-wide underline decoration-line underline-offset-8 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                        >
                            View the collections
                            <ArrowRight
                                aria-hidden="true"
                                className="h-4 w-4"
                                strokeWidth={1.5}
                            />
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex min-h-11 items-center text-sm tracking-wide text-ink-muted transition-colors duration-300 hover:text-ink"
                        >
                            About the artist
                        </Link>
                    </div>
                </div>
                {hero && (
                    <Link
                        href={artworkPath(hero.collection, hero.artwork)}
                        className="group block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        <Image
                            src={hero.artwork.image.src}
                            alt={hero.artwork.image.alt}
                            width={hero.artwork.image.width}
                            height={hero.artwork.image.height}
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            placeholder={
                                hero.artwork.image.blurDataURL
                                    ? "blur"
                                    : "empty"
                            }
                            blurDataURL={hero.artwork.image.blurDataURL}
                            priority
                            className="h-auto w-full transition-opacity duration-500 group-hover:opacity-90"
                        />
                        <p className="pt-3 text-sm text-ink-muted transition-colors duration-300 group-hover:text-accent">
                            {hero.artwork.title}
                            {hero.artwork.year && `, ${hero.artwork.year}`}
                        </p>
                    </Link>
                )}
            </section>
            {selected.length > 0 && (
                <section className="pb-12 sm:pb-16">
                    <h2 className="text-sm uppercase tracking-widest text-ink-muted">
                        Selected work
                    </h2>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-14 pt-8 sm:grid-cols-2 lg:gap-x-10">
                        {selected.map(({ collection, artwork }) => (
                            <li key={artwork.id}>
                                <ArtworkCard
                                    collection={collection}
                                    artwork={artwork}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </Container>
    );
}
