import { Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { IconLink } from "@/components/ui/IconLink";
import { socialIcon } from "@/components/ui/social-icons";
import { artist } from "@/content/artist";

export const metadata: Metadata = {
    title: "About",
    description: `About ${artist.name} — biography and contact.`,
};

export default function AboutPage() {
    return (
        <Container>
            <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 md:gap-16 lg:gap-24">
                <div>
                    {artist.photo.src ? (
                        <Image
                            src={artist.photo.src}
                            alt={artist.photo.alt}
                            width={artist.photo.width}
                            height={artist.photo.height}
                            sizes="(min-width: 768px) 45vw, 100vw"
                            placeholder={
                                artist.photo.blurDataURL ? "blur" : "empty"
                            }
                            blurDataURL={artist.photo.blurDataURL}
                            priority
                            className="h-auto w-full"
                        />
                    ) : (
                        <div
                            aria-hidden="true"
                            className="aspect-4/5 w-full bg-line"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8 md:py-2">
                    <h1 className="font-display text-4xl sm:text-5xl">
                        {artist.name}
                    </h1>
                    <div className="flex flex-col gap-4 text-ink-muted">
                        {artist.bio.map((sentence, index) => (
                            <p key={index}>{sentence}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1 border-t border-line pt-8">
                        <h2 className="mb-2 text-sm uppercase tracking-widest text-ink-muted">
                            Contact
                        </h2>
                        <IconLink
                            href={`mailto:${artist.email}`}
                            label={artist.email}
                            icon={Mail}
                        />
                        {artist.socials.map((social) => (
                            <IconLink
                                key={social.href}
                                href={social.href}
                                label={social.label}
                                icon={socialIcon(social.label)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
