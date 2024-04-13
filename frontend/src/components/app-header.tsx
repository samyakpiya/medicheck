"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const routes = [
  {
    label: "New",
    path: "/app/new",
  },
  {
    label: "Old",
    path: "/app/old",
  },
];

function AppHeader() {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo className="h-10 w-auto" />
      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  `text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition`,
                  {
                    "bg-black/10 text-white": route.path === activePathname,
                  }
                )}
                href={route.path}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
