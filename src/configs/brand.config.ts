import logoImage from "@/assets/images/logo-light.png";
import type { SocialLink } from "@/types/social";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const brandConfig = {
  nameKey: "brand_name",
  homePath: "/",
  logo: {
    src: logoImage,
    altKey: "brand_name",
  },
} as const;

export const socialLinkConfig: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Fonij2002",
    Icon: FaGithub,
  },
  {
    label: "Telegram",
    href: "https://t.me/fonij2002",
    Icon: FaTelegram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/foroozan-iraji",
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fonij2002",
    Icon: FaInstagram,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@Fonij2002",
    Icon: FaYoutube,
  },
  {
    label: "X",
    href: "https://x.com/fonij2002",
    Icon: FaXTwitter,
  },
].filter((social) => Boolean(social.href));
