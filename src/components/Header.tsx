import { IconLogo } from "@/components/ui/custom";
import { ROUTES } from "@/configs/routes.config";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentRoute = useMemo(() => {
    return ROUTES.find((route) =>
      matchPath({ path: route.path, end: true }, location.pathname),
    );
  }, [location.pathname]);

  const shouldShowHeader = currentRoute?.nav !== false;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  if (!shouldShowHeader) {
    return null;
  }

  return (
    <header className="sticky top-4 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 border-b lg:px-8">
        <IconLogo />

        <div>
          <Link
            to="/build-with-me"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white shadow-md shadow-black/10 backdrop-blur-md transition-[background-color,border-color,transform] duration-200 hover:border-white/35 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950 motion-safe:hover:-translate-y-0.5 sm:h-12 sm:px-6 sm:text-base"
          >
            Build with Me
            <ArrowRight aria-hidden="true" className="size-4 sm:size-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};
