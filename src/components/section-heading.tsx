import { cx } from "@lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cx("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ketch-deep/50">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight text-ketch-deep sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-ketch-deep/70">{subtitle}</p> : null}
    </div>
  );
}
