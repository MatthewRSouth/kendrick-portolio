import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArtworkDetail } from "@/components/gallery/ArtworkDetail";
import { Container } from "@/components/ui/Container";
import { getArtwork, getCollections } from "@/lib/collections";

interface ArtworkPageProps {
    params: Promise<{ collection: string; slug: string }>;
}

export function generateStaticParams(): { collection: string; slug: string }[] {
    return getCollections().flatMap((collection) =>
        collection.artworks.map((artwork) => ({
            collection: collection.slug,
            slug: artwork.slug,
        })),
    );
}

export async function generateMetadata({
    params,
}: ArtworkPageProps): Promise<Metadata> {
    const { collection: collectionSlug, slug } = await params;
    const match = getArtwork(collectionSlug, slug);
    if (!match) return {};

    const { collection, artwork } = match;
    return {
        title: `${artwork.title} — ${collection.title}`,
        description: artwork.intention,
        openGraph: {
            title: artwork.title,
            description: artwork.intention,
            images: [
                {
                    url: artwork.image.src,
                    width: artwork.image.width,
                    height: artwork.image.height,
                    alt: artwork.image.alt,
                },
            ],
        },
        twitter: { card: "summary_large_image" },
    };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
    const { collection: collectionSlug, slug } = await params;
    const match = getArtwork(collectionSlug, slug);
    if (!match) notFound();

    return (
        <Container>
            <ArtworkDetail
                collection={match.collection}
                artwork={match.artwork}
            />
        </Container>
    );
}
