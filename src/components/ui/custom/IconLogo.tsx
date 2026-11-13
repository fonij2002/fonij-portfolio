import { brandConfig } from "@/configs/brand.config";
import { cx } from "class-variance-authority";
import { Link } from "react-router-dom";

interface IconLogoProps {
  className?: string;
}

export const IconLogo = ({ className }: IconLogoProps) => {
  return (
    <Link
      to={brandConfig.homePath}
      className={cx(
        "flex items-center gap-3 text-lg font-semibold tracking-tight transition-colors hover:text-primary md:text-xl",
        className,
      )}
      aria-label={`Fonij2002 - Home`}
    >
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-lg sm:h-9 sm:w-9">
        <img
          src={brandConfig.logo.src}
          alt="Fonij2002 logo"
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  );
};
