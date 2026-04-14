"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border/80 bg-surface/90 backdrop-blur-xl lg:sticky lg:top-0 lg:z-50">
      <div className="section-shell">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-4 py-3">
          <BrandMark />

          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-brand-soft text-brand"
                      : "text-foreground hover:bg-surface-soft hover:text-brand"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="button-secondary px-4 py-2.5 text-sm md:hidden"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-border py-4 md:hidden">
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-[1rem] border border-border bg-surface-soft px-4 py-3 text-sm font-semibold text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
