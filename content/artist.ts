import type { ArtistProfile } from "@/lib/types";

// [PLACEHOLDER CONTENT] Bio sentences, email, and social URLs are placeholders
// for the artist to replace. Do not publish before swapping these.

export const artist: ArtistProfile = {
    name: "Kendrick", // [PLACEHOLDER] display name
    photo: {
        src: "/artist/kendrick.jpg",
        alt: "Kendrick seated on a bed in an open striped shirt and jeans, looking away toward a window in a bright, quiet room.",
        width: 1450,
        height: 964,
        blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDESETBP/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAMAwEAAhEDEQA/AKGRMAaNwWQBd4o/TFF1vpGLF65ETMFf/9k=",
    },
    bio: [
        "[PLACEHOLDER] First sentence of the artist's bio — who he is and where he works.",
        "[PLACEHOLDER] Second sentence — what the work is about, in his own words.",
        "[PLACEHOLDER] Third sentence — the materials or process he returns to.",
        "[PLACEHOLDER] Fourth sentence — what he hopes a viewer carries away.",
        "[PLACEHOLDER] Fifth sentence — a closing note, exhibition, or current focus.",
    ],
    email: "hello@example.com", // [PLACEHOLDER]
    socials: [
        { label: "Instagram", href: "https://instagram.com/placeholder" },
        { label: "X", href: "https://x.com/placeholder" },
    ],
};
