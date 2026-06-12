import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
    return (
        <Container>
            <div className="flex flex-col items-start gap-6 py-24 sm:py-36">
                <h1 className="font-display text-3xl sm:text-4xl">
                    This page doesn&apos;t exist.
                </h1>
                <p className="max-w-md text-ink-muted">
                    The piece you&apos;re looking for may have moved, or the
                    link may be incomplete.
                </p>
                <Link
                    href="/collections"
                    className="inline-flex min-h-11 items-center text-sm tracking-wide underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                >
                    View the collections
                </Link>
            </div>
        </Container>
    );
}
