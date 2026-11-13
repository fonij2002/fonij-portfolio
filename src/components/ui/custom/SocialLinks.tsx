import type { SocialLink } from "@/types/social";
import { useId, useState } from "react";

import { socialLinkConfig } from "@/configs/brand.config";
import "./social-links.css";

const descriptions: Record<string, string> = {
  GitHub: "Things I build",
  Telegram: "The real me",
  LinkedIn: "Me, almost professional",
  Instagram: "Might post someday",
  Youtube: "Videos someday, too",
  X: "Why am I here? :)",
};

function SocialLinkItem({ label, href, Icon }: SocialLink) {
  const descriptionId = useId();

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const description = descriptions[label] ?? label;
  const visible = (hovered || focused) && !dismissed;

  return (
    <li
      className="social-link-item relative flex flex-col items-center"
      onMouseEnter={() => {
        setHovered(true);
        setDismissed(false);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setDismissed(true);
        }
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in a new tab)`}
        aria-describedby={descriptionId}
        onFocus={() => {
          setFocused(true);
          setDismissed(false);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        className="group flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-neutral-400 shadow-sm backdrop-blur-md transition-[color,background-color,border-color,transform] duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950 motion-safe:hover:-translate-y-1 sm:size-14"
      >
        <Icon
          aria-hidden="true"
          className="size-5 transition-transform duration-200 motion-safe:group-hover:scale-110 sm:size-6"
        />
      </a>

      <span
        id={descriptionId}
        className="social-link-description"
        data-visible={visible}
      >
        <span className="social-link-description-content">{description}</span>
      </span>
    </li>
  );
}

export function SocialLinks() {
  return (
    <nav aria-label="Social links">
      <ul className="social-links-list">
        {socialLinkConfig.map((social) => (
          <SocialLinkItem key={social.label} {...social} />
        ))}
      </ul>
    </nav>
  );
}
