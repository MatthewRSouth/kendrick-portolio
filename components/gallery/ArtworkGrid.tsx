import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import type { Artwork, Collection } from "@/lib/types";

interface ArtworkGridProps {
    collection: Collection;
    artworks: Artwork[];
}

export function ArtworkGrid({ collection, artworks }: ArtworkGridProps) {
    if (artworks.length === 0) {
        return (
            <p className="py-16 text-ink-muted">
                No artworks in this series yet.
            </p>
        );
    }
    return (
        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <ArtworkCard collection={collection} artwork={artwork} />
                </li>
            ))}
        </ul>
    );
}
