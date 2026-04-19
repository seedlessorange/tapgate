import Reveal from "./Reveal";

const benefits = [
  {
    n: "01",
    title: "Retrofit",
    body: "Keep the gate you already own. Two wires. About ten minutes. No drilling, no electrician.",
  },
  {
    n: "02",
    title: "Instant",
    body: "Tap the phone in your pocket. The gate is already moving. Under one second, every time.",
  },
  {
    n: "03",
    title: "Shareable",
    body: "Hand out digital keys by text — permanent, time-limited, or single-use. Revoke in a tap.",
  },
];

export default function BenefitTriplet() {
  return (
    <section className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Soft brand glow top-left */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212,232,231,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-24">
            <div>
              <p className="eyebrow mb-4">Why TapGate</p>
              <h2 className="h2-section max-w-2xl">
                Simple. Fast. <em>Shareable.</em>
              </h2>
            </div>
            <p className="text-[var(--color-warmgray)] max-w-sm leading-relaxed text-sm md:text-base">
              Three ideas to anchor what TapGate does — before the details. The rest of the page is proof.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:gap-0">
          {benefits.map((b, i) => (
            <Reveal key={b.n} delay={i * 120}>
              <div
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[minmax(0,240px)_minmax(0,1fr)_auto] items-baseline gap-x-8 md:gap-x-16 gap-y-3 py-10 md:py-14 border-t border-[var(--color-hairline)] transition-colors duration-300 hover:border-[var(--color-teal)]/40"
              >
                <span className="display-number col-start-1 row-span-2 md:row-span-1 leading-none">
                  {b.n}
                </span>
                <h3 className="col-start-2 text-3xl md:text-5xl text-[var(--color-charcoal)] font-serif-italic leading-none">
                  {b.title}.
                </h3>
                <p className="col-span-full md:col-start-2 text-[var(--color-warmgray)] max-w-xl text-base md:text-lg leading-relaxed">
                  {b.body}
                </p>
                <span
                  aria-hidden
                  className="hidden md:inline-flex col-start-3 row-span-1 items-center font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-warmgray-light)] self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  ↗ explore
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
