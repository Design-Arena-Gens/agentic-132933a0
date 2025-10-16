import { SectionHeading } from "@components/section-heading";
import { BookingForm } from "@components/booking-form";

const assurances = [
  {
    title: "Discretion First",
    detail: "Arrival windows are staggered, and no metrics are shared without explicit consent."
  },
  {
    title: "Clinical Precision",
    detail: "Consults include Dexa review, lab analysis, and coordination with your medical team."
  },
  {
    title: "Concierge Care",
    detail: "Need home equipment installation or chef coordination? Our team handles the details."
  }
];

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Reserve Your Consultation"
        title="Let’s curate your Ketch transformation"
        subtitle="Complete the form below to begin. Our concierge team replies within one business day with private availability and onboarding next steps."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div className="rounded-3xl border border-ketch-deep/10 bg-white/90 p-10 shadow-subtle">
          <h2 className="font-display text-2xl text-ketch-deep">Consultation Details</h2>
          <ul className="mt-6 space-y-4 text-sm text-ketch-deep/70">
            <li>
              <strong className="text-ketch-deep">Duration:</strong> 45-minute private session with Hannah.
            </li>
            <li>
              <strong className="text-ketch-deep">Location:</strong> 6145 Western Avenue, Oklahoma City. Valet and private entrance provided.
            </li>
            <li>
              <strong className="text-ketch-deep">Investment:</strong> $125 consultation fee applied toward your first month.
            </li>
            <li>
              <strong className="text-ketch-deep">Bring:</strong> Recent lab work (optional), schedule considerations, and any therapies you currently use.
            </li>
          </ul>

          <div className="mt-10 grid gap-4 rounded-2xl border border-ketch-sage/20 bg-ketch-sage/10 p-6">
            {assurances.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-ketch-sage">{item.title}</p>
                <p className="text-xs text-ketch-deep/65">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-2 text-xs uppercase tracking-[0.3em] text-ketch-deep/60">
            <p>Soft Open Availability · Oct 15 – Dec 15, 2025</p>
            <p>Tuesday–Friday · 7:00a–1:00p · 3:30p–6:30p</p>
          </div>
        </div>

        <div className="rounded-3xl border border-ketch-deep/10 bg-white/95 p-10 shadow-glow">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
