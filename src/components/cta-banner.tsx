import Link from "next/link";
import type { Route } from "next";
import type { UrlObject } from "url";

type LinkHref = Route | UrlObject;

type CTABannerProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: LinkHref;
  secondaryLabel?: string;
  secondaryHref?: LinkHref;
};

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTABannerProps) {
  return (
    <section className="mx-auto mt-24 max-w-5xl rounded-3xl bg-ketch-deep px-8 py-12 text-white shadow-glow">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <h3 className="font-display text-3xl leading-tight">{title}</h3>
          <p className="text-base text-white/80">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={primaryHref}
            className="rounded-full bg-ketch-peach px-6 py-3 text-sm font-semibold text-ketch-deep shadow-subtle transition hover:bg-white"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
