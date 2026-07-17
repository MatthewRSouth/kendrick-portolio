import type { Metadata } from "next";

import { CollectionCard } from "@/components/gallery/CollectionCard";
import { Container } from "@/components/ui/Container";
import { getCollections } from "@/lib/collections";
import { artistName } from "@/lib/site";

export const metadata: Metadata = {
    title: "Collections",
    description: `The collected series of work by ${artistName}.`,
};

export default function CollectionsPage() {
    const collections = getCollections();

    return (
        <Container>
            <div className="py-12 sm:py-16">
                <h1 className="font-display text-4xl sm:text-5xl">
                    Collections
                </h1>
                {collections.length === 0 ? (
                    <p className="py-16 text-ink-muted">
                        New work is on its way. Please check back soon.
                    </p>
                ) : (
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-14 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
                        {collections.map((collection, index) => (
                            <li key={collection.slug}>
                                <CollectionCard
                                    collection={collection}
                                    priority={index === 0}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Container>
    );
}
