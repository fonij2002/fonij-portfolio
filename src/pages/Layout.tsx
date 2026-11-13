import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={cn("min-h-screen flex flex-col antialiased")}>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
