import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@components/section-heading";
import { FeatureCard, type FeatureCardProps } from "@components/feature-card";
import { TestimonialCard } from "@components/testimonial-card";
import { CTABanner } from "@components/cta-banner";

const benefits: FeatureCardProps[] = [
  {
    title: "Precision Strength & Bone Density",
    description:
      "CAROL cardio intervals, tempo-controlled strength training, and weight-bearing Pilates designed to preserve femoral neck density and keep joints ageless.",
    accent: "sage"
  },
  {
    title: "Metabolic Nourishment",
    description:
      "Hannah’s dietetics expertise powers customized proteins, adaptogens, and micronutrient protocols that refine physique composition without extreme restriction.",
    accent: "tan"
  },
  {
    title: "Restorative Rituals",
    description:
      "Infrared sauna, LED collagen facials, and guided breathwork close each session to seal in glow, calm cortisol, and keep the nervous system on your side.",
    accent: "peach"
  }
];

const testimonials = [
  {
    name: "Lauren M.",
    role: "Philanthropist & Mom of Three",
    quote:
      "Ketch has been my private sanctuary. The post-baby waistline and nerve pain I battled for years melted away without the chaos of big-box gyms.",
    image: "/images/testimonials/lauren.svg"
  },
  {
    name: "Cassidy S.",
    role: "Cassidy School Board Member",
    quote:
      "The programming is scientific and feminine. I feel powerful, glamorous, and safe sharing results only with women on the same journey.",
    image: "/images/testimonials/cassidy.svg"
  },
  {
    name: "Yvette B.",
    role: "Founder, Le Petit Atelier",
    quote:
      "From curated playlists to the sage eucalyptus aroma, every detail whispers luxury. My bone scans improved within six months—without medication.",
    image: "/images/testimonials/yvette.svg"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white/70">
        <div className="absolute inset-0 -z-10">{}
          <Image
            src="/images/textures/linen.svg"
            alt="linen background"
            fill
            className="object-cover opacity-45"
            priority
          />
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-ketch-deep/50">
              Soft Opening · October 15, 2025
            </p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-ketch-deep sm:text-5xl">
              Discreet, data-driven transformation for women rewriting their next chapter.
            </h1>
            <p className="mt-6 text-base text-ketch-deep/70">
              Co-founders Hannah (MS, RDN) and her tech partner welcome you to Ketch Wellness—the
              Western Avenue hideaway where postpartum strength, metabolic clarity, and luminous
              presence become the new normal.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-ketch-sage px-6 py-3 text-sm font-semibold text-white shadow-subtle transition hover:bg-ketch-deep"
              >
                Secure Your Consultation
              </Link>
              <Link
                href="/classes"
                className="rounded-full border border-ketch-deep/30 px-6 py-3 text-sm font-semibold text-ketch-deep transition hover:border-ketch-deep/60"
              >
                Explore the Programming
              </Link>
            </div>
            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  label: "Capacity per pod",
                  value: "4",
                  caption: "for focused accountability"
                },
                {
                  label: "Clinical touchpoints",
                  value: "6",
                  caption: "biometric check-ins each quarter"
                },
                {
                  label: "Restorative minutes",
                  value: "20",
                  caption: "infrared + breathwork wind-down"
                }
              ].map((stat) => (
                <div key={stat.label} className="glass-panel rounded-3xl px-6 py-6 text-center">
                  <dd className="font-display text-3xl text-ketch-deep">{stat.value}</dd>
                  <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-ketch-deep/60">
                    {stat.label}
                  </dt>
                  <p className="mt-2 text-xs text-ketch-deep/50">{stat.caption}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-[3rem] border border-ketch-deep/10 shadow-2xl">
              <Image
                src="/images/hero/studio.svg"
                fill
                alt="Ketch Wellness studio"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-10 right-6 hidden max-w-[220px] rounded-3xl bg-white/90 p-6 shadow-lg sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ketch-sage">
                Western Ave Insider
              </p>
              <p className="mt-3 text-sm text-ketch-deep/70">
                "Feels like a private residence—but with the best equipment in the city." — Helena
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="The Ketch Difference"
          title="Science-backed elegance for strength, longevity, and glow"
          subtitle="Luxury amenities alone aren’t enough. We integrate clinical expertise, tech-enabled accountability, and a sanctuary-level experience tailored to affluent women balancing family, leadership, and self-restoration."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Membership Pathways"
          title="Deliberate formats for every chapter"
          subtitle="25 coaching hours each week curated personally by Hannah to honor your schedule, your privacy, and your physiology."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[{
            title: "Small Group Strength Pods",
            price: "$400/mo",
            description: "4-member cohorts meeting twice weekly for individualized strength and postural work, Dexa-informed programming, and curated supplementation."
          },
          {
            title: "Signature Studio Classes",
            price: "$200–300/mo",
            description: "Low-impact CAROL intervals, barre-based lengthening, and sculpt classes designed to tighten the midline without spiking cortisol."
          },
          {
            title: "Private Transformations",
            price: "$650 / 10 sessions",
            description: "One-on-one training, concierge lab interpretation, and home ritual design with Hannah for women seeking accelerated yet graceful change."
          }].map((membership) => (
            <div key={membership.title} className="gradient-border relative rounded-3xl border bg-white/90 p-8 shadow-subtle">
              <h3 className="font-display text-2xl text-ketch-deep">{membership.title}</h3>
              <p className="mt-4 text-sm text-ketch-deep/60">{membership.description}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ketch-sage">
                {membership.price}
              </p>
              <Link
                href="/booking"
                className="mt-8 inline-flex rounded-full border border-ketch-sage px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ketch-sage transition hover:bg-ketch-sage hover:text-white"
              >
                Reserve Placement
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Signature Experience"
          title="Inside the Ketch session"
          subtitle="Each 75-minute visit balances metabolic challenge with decadent recovery, ensuring founders, philanthropists, and executive mothers depart radiant."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Private arrival",
              description:
                "Reserved parking, herbal adaptogenic tonic, and aromatherapy locker prep matched to your nervous system profile."
            },
            {
              title: "Intelligent training",
              description:
                "Strength periodization anchored to Dexa and blood work with tempo cues delivered via wearable integration."
            },
            {
              title: "Restorative ritual",
              description:
                "Infrared sauna with LED facial dome, followed by guided fascia release and lymphatic drainage finishing sequence."
            },
            {
              title: "Concierge follow-up",
              description:
                "48-hour nourishment blueprint, supplementation adjustments, and private community thread check-in."
            }
          ].map((step) => (
            <div key={step.title} className="rounded-3xl border border-ketch-deep/10 bg-white/85 p-6 shadow-subtle">
              <h3 className="font-display text-xl text-ketch-deep">{step.title}</h3>
              <p className="mt-3 text-sm text-ketch-deep/65">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Voices from the Collective"
          title="Transformation that respects your privacy"
          subtitle="Women from Nichols Hills to Edmond trust Ketch when they want visible results with invisible effort."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Secure your place in the October soft opening cohort"
        description="Founding memberships are limited to 45 seats to preserve intimacy and results. Begin with a private consult to map your personalized roadmap and schedule."
        primaryLabel="Book a Consultation"
        primaryHref="/booking"
        secondaryLabel="View Class Menu"
        secondaryHref="/classes"
      />
    </>
  );
}
