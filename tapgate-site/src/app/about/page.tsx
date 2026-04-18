import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "TapGate is built by ISN Security Networks — a family business with 25 years in access control. Learn our story.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] mb-6 max-w-3xl">
            25 years of access control. One family business.
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-2xl leading-relaxed">
            TapGate didn&apos;t come from a startup accelerator. It came from a family that&apos;s been wiring gates, barriers, and access systems since 2000.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-5 md:px-8 space-y-6 text-[var(--color-charcoal)] leading-relaxed">
          <p>
            ISN Security Networks started as a small installer in 2000. One family, a van full of cables, and a commitment to making buildings safer and more convenient. Over the next two decades, we wired access systems for apartment blocks, office parks, and gated communities across Europe.
          </p>
          <p>
            Along the way, we noticed something: homeowners were the most underserved. They had the same gate hardware as the big buildings, but none of the smart management tools. They got a remote control and a phone number to call when it broke. That was it.
          </p>
          <p>
            TapGate is the fix. A small device that connects to any gate operator&apos;s trigger terminals — two wires — and turns your phone into your remote. We built it for the homeowners we&apos;d been working with for years. Real people, real gates, real problems.
          </p>
          <p>
            We&apos;re still family-run. Still engineering-led. Still based in Europe. And we still pick up the phone when you call.
          </p>
        </div>
      </section>

      {/* Founder video placeholder */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-[var(--color-warmgray)]">
            [Founder video — 60-90 sec intro]
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">Our timeline</h2>
          <div className="space-y-8 border-l-2 border-[var(--color-teal-muted)] pl-8">
            {[
              { year: "2000", text: "ISN Security Networks founded. First access control installations across France." },
              { year: "2005", text: "Expanded into multi-site property management systems." },
              { year: "2010", text: "1,000th installation milestone. Started R&D on Bluetooth access." },
              { year: "2018", text: "First internal prototype of what would become TapGate." },
              { year: "2023", text: "TapGate beta testing with 50 homeowners in southern France." },
              { year: "2025", text: "TapGate launches direct-to-consumer across the EU." },
              { year: "2026", text: "Home Set bundle and accessory ecosystem announced." },
            ].map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-[var(--color-teal)]" />
                <p className="text-sm font-semibold text-[var(--color-teal)] mb-1">{t.year}</p>
                <p className="text-[var(--color-warmgray)]">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Europe */}
      <section className="section bg-[var(--color-teal-muted)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">Why Europe, why now</h2>
          <p className="text-[var(--color-warmgray)] leading-relaxed max-w-xl mx-auto">
            Privacy-first engineering. European data stays in Europe. Local support, local shipping, local engineering. And an enormous installed base of automated gates waiting for a smarter remote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-charcoal)] text-white text-center">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Ready to meet TapGate?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/compatibility" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
              Check Compatibility
            </Link>
            <Link href="/pricing" className="btn-primary">
              Buy TapGate — €249
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
