import { SectionHeading } from "@components/section-heading";
import { CTABanner } from "@components/cta-banner";
import { programs } from "@content/programs";

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Programming"
        title="A curated schedule that respects your calendar"
        subtitle="25 expert-led hours each week—structured to uphold privacy, momentum, and luxurious recovery. Choose your cadence knowing every detail is refined."
        className="text-left md:text-center"
      />

      <div className="mt-16 space-y-12">
        {programs.map((program) => (
          <section key={program.name} className="rounded-3xl border border-ketch-deep/10 bg-white/90 p-10 shadow-subtle">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl space-y-4">
                <h2 className="font-display text-3xl text-ketch-deep">{program.name}</h2>
                <p className="text-sm text-ketch-deep/70">{program.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-ketch-deep/55">
                  {program.idealFor.map((item) => (
                    <li key={item} className="rounded-full border border-ketch-deep/15 px-4 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-3xl border border-ketch-sage/30 bg-ketch-sage/5 px-6 py-4 text-sm text-ketch-deep/75">
                <p className="font-semibold uppercase tracking-[0.3em] text-ketch-sage">{program.investment}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-ketch-deep/60">Capacity · {program.capacity}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {program.sessions.map((session) => (
                <article key={session.title} className="rounded-3xl border border-ketch-deep/10 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-xl text-ketch-deep">{session.title}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-ketch-sage">{session.schedule}</p>
                  <p className="mt-4 text-sm text-ketch-deep/70">{session.focus}</p>
                  <p className="mt-3 text-xs text-ketch-deep/55">{session.experience}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CTABanner
        title="Need a discreet time slot or on-site delivery?"
        description="Our concierge team accommodates private home sessions, executive office builds, and weekend intensives for board members, founders, and public figures."
        primaryLabel="Request Bespoke Programming"
        primaryHref="/booking"
        secondaryLabel="Meet Hannah"
        secondaryHref="/about"
      />
    </div>
  );
}
