import Image from "next/image";
import { SectionHeading } from "@components/section-heading";
import { CTABanner } from "@components/cta-banner";

const pillars = [
  {
    title: "Holistic Science",
    description:
      "We integrate dietetics, exercise science, and longevity research to orchestrate programs that uphold hormone harmony and bone strength."
  },
  {
    title: "Earthy Luxury",
    description:
      "Custom scent rituals, artisan-crafted equipment, and tactile finishes create an environment that calms while it energizes."
  },
  {
    title: "Discreet Community",
    description:
      "Membership is capped and invite-only during soft open, cultivating a circle of women invested in one another’s quiet wins."
  }
];

const timeline = [
  {
    year: "2014",
    title: "Clinical Beginnings",
    detail: "Hannah earns her MS in Dietetics and begins clinical practice focusing on metabolic recovery for women."
  },
  {
    year: "2019",
    title: "Tech Meets Nutrition",
    detail: "Partnered with a tech entrepreneur (you) to pair data analytics with nutrition protocols for luxury retreats."
  },
  {
    year: "2023",
    title: "Western Avenue Vision",
    detail: "Secured our spa-inspired space and began designing an environment that feels like a private residence."
  },
  {
    year: "2025",
    title: "Ketch Wellness Soft Opening",
    detail: "Launching October 15 with 45 founding memberships and a roadmap to $20K monthly recurring revenue."
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Founded by a dietetics expert and a technologist"
            subtitle="Hannah merges clinical mastery with a nurturing presence. You translate cutting-edge fitness tech into seamless experiences. Together, Ketch Wellness extends a hand to women ready for sophisticated, sustainable transformation."
            className="text-left"
          />
        </div>
        <div className="relative max-w-md justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-ketch-deep/10 shadow-2xl">
            <Image src="/images/about/hannah.svg" alt="Founder Hannah" fill className="object-cover" priority />
          </div>
          <div className="absolute -bottom-10 left-8 w-60 rounded-3xl border border-ketch-deep/10 bg-white/90 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.35em] text-ketch-sage">Credentials</p>
            <p className="mt-3 text-sm text-ketch-deep/70">MS, RDN · 12 years in clinical nutrition · Functional medicine certified</p>
          </div>
        </div>
      </div>

      <section className="mt-28 grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-3xl border border-ketch-deep/10 bg-white/92 p-8 shadow-subtle">
            <h3 className="font-display text-2xl text-ketch-deep">{pillar.title}</h3>
            <p className="mt-4 text-sm text-ketch-deep/70">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-28 rounded-3xl border border-ketch-deep/10 bg-white/92 p-10 shadow-subtle">
        <h2 className="font-display text-3xl text-ketch-deep">Path to $20K Monthly Revenue</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ketch-deep/65">Small Group Pods</p>
            <p className="mt-2 font-display text-2xl text-ketch-deep">22 members</p>
            <p className="text-sm text-ketch-deep/60">22 × $400 = $8,800</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ketch-deep/65">Studio Classes</p>
            <p className="mt-2 font-display text-2xl text-ketch-deep">35 passes</p>
            <p className="text-sm text-ketch-deep/60">Average $250 = $8,750</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ketch-deep/65">Private Transformations</p>
            <p className="mt-2 font-display text-2xl text-ketch-deep">6 packages</p>
            <p className="text-sm text-ketch-deep/60">6 × $650 = $3,900</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-ketch-deep/70">
          The blend keeps our space intimate while unlocking $21,450 in recurring monthly revenue—surpassing the initial goal and allowing reinvestment into member experience.
        </p>
      </section>

      <section className="mt-28 grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
        <div className="rounded-3xl border border-ketch-deep/10 bg-white/90 p-10 shadow-subtle">
          <h2 className="font-display text-3xl text-ketch-deep">Timeline</h2>
          <ol className="mt-6 space-y-6 border-l border-ketch-deep/15 pl-6 text-sm text-ketch-deep/70">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-ketch-sage" />
                <p className="text-xs uppercase tracking-[0.35em] text-ketch-deep/50">{item.year}</p>
                <p className="mt-1 font-semibold text-ketch-deep">{item.title}</p>
                <p className="mt-1">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative overflow-hidden rounded-[3rem] border border-ketch-deep/10 shadow-2xl">
          <Image src="/images/about/studio-lounge.svg" alt="Studio lounge" fill className="object-cover" />
        </div>
      </section>

      <CTABanner
        title="Tour the Western Avenue sanctuary"
        description="Walk the space, inhale the eucalyptus, and review your personalized plan with Hannah."
        primaryLabel="Schedule a Tour"
        primaryHref="/booking"
        secondaryLabel="Explore Classes"
        secondaryHref="/classes"
      />
    </div>
  );
}
