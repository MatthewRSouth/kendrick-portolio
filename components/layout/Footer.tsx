import { Mail } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { IconLink } from "@/components/ui/IconLink";
import { socialIcon } from "@/components/ui/social-icons";
import { artist } from "@/content/artist";

export function Footer() {
    return (
        <footer className="mt-20 border-t border-line sm:mt-28">
            <Container>
                <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
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
                    <p className="text-sm text-ink-muted">
                        © {new Date().getFullYear()} {artist.name}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
