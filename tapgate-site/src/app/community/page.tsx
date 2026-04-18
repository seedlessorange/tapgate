import type { Metadata } from "next";
import CommunitySignup from "@/components/CommunitySignup";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the TapGate Community — free membership with extended warranty, early access, and engineer tips.",
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-3">TapGate Community</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] mb-6">
            Free to join. First to know.
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed">
            Join hundreds of TapGate owners and get early access to new products, an extended warranty, and insider tips from our engineering team.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Early access", desc: "Be the first to try new products and features before anyone else." },
              { title: "Extended warranty", desc: "Members get an extra year of hardware warranty — 3 years total." },
              { title: "Engineer tips", desc: "Installation tricks, maintenance advice, and gate hacks from our team." },
              { title: "Member discounts", desc: "Exclusive pricing on accessories and upgrades." },
            ].map((b) => (
              <div key={b.title} className="card border border-gray-100 text-center">
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{b.title}</h3>
                <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you won't get */}
      <section className="section bg-white">
        <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--color-charcoal)] mb-6">
            What you won&apos;t get
          </h2>
          <div className="space-y-3 text-[var(--color-warmgray)]">
            {[
              "No daily newsletters — we email a few times a year, tops.",
              "No spam — every email has a one-click unsubscribe.",
              "No data selling — we don\u2019t share your info with anyone. Ever.",
            ].map((t) => (
              <p key={t} className="flex items-center gap-3 justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <CommunitySignup />
    </>
  );
}
