import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { artistName } from "@/lib/site";

const links = [
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
];

export function Nav() {
    return (
        <header>
            <Container>
                <nav
                    aria-label="Main"
                    className="flex items-center justify-between py-6 sm:py-8"
                >
                    <Link
                        href="/"
                        className="font-display text-xl tracking-wide transition-colors duration-300 hover:text-accent"
                    >
                        {artistName}
                    </Link>
                    <ul className="flex items-center gap-6 sm:gap-10">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="inline-flex min-h-11 items-center text-sm tracking-wide text-ink-muted transition-colors duration-300 hover:text-ink"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
