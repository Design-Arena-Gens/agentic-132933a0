import Link from "next/link";
import type { Route } from "next";
import { LogoMark } from "@components/logo";

type FooterLink =
  | { label: string; href: Route; external?: false }
  | { label: string; href: string; external: true };

const footerLinks: Array<{ title: string; items: FooterLink[] }> = [
  {
    title: "Club",
    items: [
      { label: "Home", href: "/" },
      { label: "Classes", href: "/classes" },
      { label: "Booking", href: "/booking" },
      { label: "About", href: "/about" }
    ]
  },
  {
    title: "Visit",
    items: [
      {
        label: "6145 Western Avenue",
        href: "https://maps.app.goo.gl/",
        external: true
      },
      { label: "Oklahoma City, OK 73118", href: "https://maps.app.goo.gl/", external: true },
      { label: "(405) 555-1520", href: "tel:+14055551520", external: true }
    ]
  },
  {
    title: "Connect",
    items: [
      { label: "Instagram", href: "https://instagram.com/ketchwellness", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/ketchwellness", external: true },
      { label: "hello@ketchwellness.com", href: "mailto:hello@ketchwellness.com", external: true }
    ]
  }
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ketch-deep/10 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <div>
              <p className="font-display text-2xl tracking-wide text-ketch-deep">Ketch Wellness</p>
              <p className="text-sm uppercase tracking-[0.3em] text-ketch-deep/70">Holistic Strength Club</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm text-ketch-deep/70">
            A sanctum for women rewriting their next chapter—where intelligent training, nourishment,
            and restorative rituals meet understated luxury.
          </p>
        </div>
        <div className="md:col-span-7 grid gap-8 sm:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-ketch-deep/60">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ketch-deep/70">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-ketch-sage"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="transition hover:text-ketch-sage">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ketch-deep/10 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-ketch-deep/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Ketch Wellness. All rights reserved.</p>
          <p>Soft Opening · October 15, 2025 · Western Avenue, OKC</p>
        </div>
      </div>
    </footer>
  );
}
