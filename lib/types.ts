export interface ArtworkImage {
    src: string; // e.g. "/artwork/quiet-room.jpg"
    alt: string; // required, descriptive — never empty
    width: number; // intrinsic px, for next/image
    height: number;
    blurDataURL?: string; // base64 blur placeholder for next/image
}

export interface Artwork {
    id: string;
    slug: string; // URL-safe, unique within its collection
    title: string;
    intention: string; // the one-liner (shown on the grid card)
    description: string; // shown on the artwork's own page
    image: ArtworkImage;
    year?: number;
    // --- future (do not build this round) ---
    // forSale?: boolean;
    // priceJpy?: number;
}

export interface Collection {
    slug: string; // URL-safe series name
    title: string; // the series name the artist gives it
    description?: string; // optional short intro shown on the series page
    cover: ArtworkImage; // representative image for the /collections index
    artworks: Artwork[]; // ordered; series owns its artworks
}

export interface ArtistProfile {
    name: string;
    photo: ArtworkImage;
    bio: string[]; // 4–6 sentences as an array of paragraphs/sentences
    email: string;
    socials: { label: string; href: string }[];
}
