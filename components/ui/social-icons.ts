import { AtSign, Camera, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// This lucide-react version ships no brand icons, so socials get the nearest
// neutral glyph; unknown platforms fall back to a globe.
const socialIcons: Record<string, LucideIcon> = {
    Instagram: Camera,
    X: AtSign,
    Twitter: AtSign,
};

export function socialIcon(label: string): LucideIcon {
    return socialIcons[label] ?? Globe;
}
