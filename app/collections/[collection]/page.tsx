import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArtworkGrid } from "@/components/gallery/ArtworkGrid";
import { Container } from "@/components/ui/Container";
import { getCollection, getCollections } from "@/lib/collections";

interface CollectionPageProps {
    params: Promise<{ collection: string }>;
}

export function generateStaticParams(): { collection: string }[] {
    return getCollections().map((collection) => ({
        collection: collection.slug,
    }));
}

export async function generateMetadata({
    params,
}: CollectionPageProps): Promise<Metadata> {
    const { collection: collectionSlug } = await params;
    const collection = getCollection(collectionSlug);
    if (!collection) return {};

    return {
        title: collection.title,
        description:
            collection.description ?? `Artworks from ${collection.title}.`,
        openGraph: {
            title: collection.title,
            images: [
                {
                    url: collection.cover.src,
                    width: collection.cover.width,
                    height: collection.cover.height,
                    alt: collection.cover.alt,
                },
            ],
        },
        twitter: { card: "summary_large_image" },
    };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
    const { collection: collectionSlug } = await params;
    const collection = getCollection(collectionSlug);
    if (!collection) notFound();

    return (
        <Container>
            <div className="py-12 sm:py-16">
                <h1 className="font-display text-4xl sm:text-5xl">
                    {collection.title}
                </h1>
                {collection.description && (
                    <p className="max-w-xl pt-6 text-ink-muted">
                        {collection.description}
                    </p>
                )}
                <div className="pt-12">
                    <ArtworkGrid
                        collection={collection}
                        artworks={collection.artworks}
                    />
                </div>
            </div>
        </Container>
    );
}
