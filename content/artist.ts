import type { ArtistProfile } from "@/lib/types";

// [PLACEHOLDER CONTENT] Bio sentences, email, and social URLs are placeholders
// for the artist to replace. Do not publish before swapping these.

export const artist: ArtistProfile = {
    name: "Kendrick", // [PLACEHOLDER] display name
    photo: {
        src: "/artist/portrait.jpg",
        alt: "Portrait of the artist (placeholder image)",
        width: 1200,
        height: 1500,
        blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAF/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECAxESISL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A00loBJLJKzgE7vQCf//Z",
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
