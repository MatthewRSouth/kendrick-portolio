import type { LucideIcon } from "lucide-react";

interface IconLinkProps {
    href: string;
    label: string;
    icon: LucideIcon;
}

export function IconLink({ href, label, icon: Icon }: IconLinkProps) {
    const isExternal = href.startsWith("http");
    return (
        <a
            href={href}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            className="inline-flex min-h-11 items-center gap-2.5 text-ink-muted transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.5} />
            <span className="text-sm tracking-wide">{label}</span>
        </a>
    );
}
