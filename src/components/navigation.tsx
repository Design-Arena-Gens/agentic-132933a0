"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cx } from "@lib/utils";
import { LogoMark } from "@components/logo";

type NavLink = { href: Route; label: string };

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/75 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-medium text-ketch-deep">
          <LogoMark className="h-10 w-10" />
          <span className="font-display text-2xl tracking-wide">Ketch Wellness</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cx(
                "text-sm font-medium uppercase tracking-[0.18em] transition-colors",
                pathname === link.href ? "text-ketch-sage" : "text-ketch-deep/70 hover:text-ketch-sage"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-ketch-sage px-5 py-2 text-sm font-semibold text-white shadow-subtle transition hover:bg-ketch-deep"
          >
            Reserve Soft Opening
          </Link>
        </nav>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ketch-deep/20 bg-white">
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 rounded bg-ketch-deep" />
              <span className="block h-0.5 w-6 rounded bg-ketch-deep" />
              <span className="block h-0.5 w-6 rounded bg-ketch-deep" />
            </div>
          </div>
        </button>
      </div>
      <div
        id="mobile-nav"
        className={cx(
          "md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-ketch-deep/10 bg-white/95 p-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cx(
                  "text-base font-semibold uppercase tracking-[0.2em]",
                  pathname === link.href ? "text-ketch-sage" : "text-ketch-deep/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-ketch-sage px-5 py-3 text-center text-sm font-semibold text-white shadow-subtle"
          >
            Reserve Soft Opening
          </Link>
        </div>
      </div>
    </header>
  );
}
