import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { Container } from "@/components/ui/Container";
import { getCollections } from "@/lib/collections";
import { artistName } from "@/lib/site";

export default function HomePage() {
    // A small curated selection: the first work of each series.
    const featured = getCollections()
        .filter((collection) => collection.artworks.length > 0)
        .slice(0, 3)
        .map((collection) => ({
            collection,
            artwork: collection.artworks[0],
        }));

    return (
        <Container>
            <section className="flex flex-col items-start gap-8 py-20 sm:py-28 lg:py-36">
                <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
                    {artistName}
                </h1>
                <p className="max-w-lg text-lg text-ink-muted">
                    [PLACEHOLDER] One or two sentences in the artist&apos;s own
                    voice — what the work is about and why he makes it.
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
            </section>
            {featured.length > 0 && (
                <section className="pb-12 sm:pb-16">
                    <h2 className="text-sm uppercase tracking-widest text-ink-muted">
                        Selected work
                    </h2>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-14 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
                        {featured.map(({ collection, artwork }) => (
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
