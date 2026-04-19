import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative section bg-[var(--color-charcoal)] text-white overflow-hidden">
      {/* Teal glow wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 120%, rgba(14,109,107,0.4) 0%, transparent 70%)",
        }}
      />
      {/* Faint monospace tag top-left */}
      <div
        aria-hidden
        className="absolute top-8 left-5 md:left-8 font-mono text-[10px] uppercase tracking-[0.28em] text-white/50"
      >
        TapGate · v1
      </div>
      <div
        aria-hidden
        className="absolute top-8 right-5 md:right-8 font-mono text-[10px] uppercase tracking-[0.28em] text-white/50"
      >
        No sub · No fobs
      </div>

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        <p className="eyebrow mb-6" style={{ color: "var(--color-teal-light)" }}>
          Ready when you are
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-10">
          Ditch the <em className="font-serif-italic text-[var(--color-teal-light)]">remote.</em>
          <br />
          Keep the gate.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="btn-primary text-base px-8 py-4"
          >
            Buy TapGate — €249
          </Link>
          <Link
            href="/compatibility"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium border-b border-white/30 hover:border-white pb-1 transition-colors"
          >
            Check if it fits your gate
            <span aria-hidden>→</span>
          </Link>
        </div>

        <p className="mt-10 text-xs text-white/40 font-mono uppercase tracking-[0.22em]">
          Free EU shipping · 30-day returns · 2-year warranty
        </p>
      </div>
    </section>
  );
}
