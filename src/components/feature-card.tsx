import { cx } from "@lib/utils";

export type FeatureCardProps = {
  title: string;
  description: string;
  accent?: "sage" | "tan" | "peach";
};

const accentMap = {
  sage: "from-ketch-sage/15 to-transparent border-ketch-sage/30",
  tan: "from-ketch-tan/20 to-transparent border-ketch-tan/30",
  peach: "from-ketch-peach/25 to-transparent border-ketch-peach/30"
};

export function FeatureCard({ title, description, accent = "sage" }: FeatureCardProps) {
  return (
    <div
      className={cx(
        "gradient-border relative overflow-hidden rounded-3xl border bg-white/90 p-8 shadow-subtle",
        "before:rounded-3xl"
      )}
    >
      <div
        className={cx(
          "absolute inset-0 -z-10 bg-gradient-to-br",
          accentMap[accent as keyof typeof accentMap]
        )}
      />
      <h3 className="font-display text-2xl text-ketch-deep">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ketch-deep/70">{description}</p>
    </div>
  );
}
