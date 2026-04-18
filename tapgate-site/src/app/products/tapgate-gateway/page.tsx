import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "TapGate Gateway",
  description:
    "The TapGate Gateway turns your phone into a gate remote. Retrofits any automated gate in about 10 minutes. Bluetooth, no WiFi needed. From €249.",
};

const productFAQ = [
  {
    q: "Does the Gateway work without an internet connection?",
    a: "Yes. TapGate Gateway uses Bluetooth, not WiFi. It works completely offline. Your gate opens even if your internet is down. If you want remote management from anywhere, you can optionally add TapGate Cloud (€5/month).",
  },
  {
    q: "How many keys can I share?",
    a: "Up to 20 digital keys per Gateway. Each key can be permanent, time-limited, or single-use. You manage them from the free TapGate app. Need more? TapGate Cloud lifts the limit.",
  },
  {
    q: "What gates are compatible?",
    a: "TapGate works with any automated gate that has a dry-contact trigger input. That covers CAME, FAAC, Nice, BFT, Sommer, Hörmann, and most residential operators. Use our compatibility checker or send us a photo of your gate box.",
  },
  {
    q: "Do I need an electrician to install it?",
    a: "No. If you can use a screwdriver, you can install TapGate. Open your gate operator, find the two trigger terminals, connect TapGate's wires. Most people finish in under 10 minutes.",
  },
  {
    q: "What happens if my phone battery dies?",
    a: "Your existing remote, keypad, or intercom still works — TapGate adds a new way to open your gate, it doesn't replace the old ones. For a phone-free backup, consider upgrading to the Home Set which includes 2 TapGate Fobs.",
  },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5z" />
        <path d="M12 11l4 4m-4-4l-4 4" />
        <circle cx="12" cy="18" r="3" />
      </svg>
    ),
    title: "Bluetooth 5.0",
    desc: "30-metre range. No WiFi or internet needed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-3.24M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
      </svg>
    ),
    title: "Works Offline",
    desc: "No cloud dependency. Gate opens rain or shine, internet or not.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "iOS & Android",
    desc: "Free app on both platforms. Always updated, always free.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Apple Watch",
    desc: "Tap your wrist, gate opens. No phone needed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "20 Digital Keys",
    desc: "Share with family, guests, or service people. Revoke any time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "2-Year Warranty",
    desc: "Hardware guaranteed. Free EU shipping. 30-day returns.",
  },
];

export default function TapGateGatewayPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative bg-[var(--color-offwhite)] pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">TapGate Gateway</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-6">
              One device. Your phone opens the gate.
            </h1>
            <p className="text-lg text-[var(--color-warmgray)] max-w-lg mb-4 leading-relaxed">
              Retrofits any automated gate in about 10 minutes. Bluetooth, no WiFi. Share up to 20 keys.
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-light text-[var(--color-charcoal)]">&euro;249</span>
              <span className="text-sm text-[var(--color-warmgray)]">One-time payment. No subscription.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="btn-primary">Buy TapGate Gateway</Link>
              <Link href="/compatibility" className="btn-secondary">
                Check compatibility &rarr;
              </Link>
            </div>
          </div>
          <div className="bg-[var(--color-teal-muted)] rounded-2xl aspect-square max-h-[480px] flex items-center justify-center text-[var(--color-warmgray)] text-sm">
            [Product image placeholder]
          </div>
        </div>
      </section>

      {/* ── Benefit cards ─────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Retrofit in minutes",
                desc: "TapGate connects to your existing gate motor. No drilling, no new wiring, no electrician. Open the box, connect two wires, done.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
              },
              {
                title: "Instant open",
                desc: "Tap your phone, watch your gate move. Bluetooth means no cloud round-trip, no latency. Under 1 second, every time.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
              },
              {
                title: "Shareable keys",
                desc: "Send a digital key by text. Choose permanent, time-limited, or single-use. Revoke it with one tap when you need to.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                ),
              },
            ].map((b) => (
              <div key={b.title} className="card border border-gray-100 text-center">
                <div className="flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">{b.title}</h3>
                <p className="text-[var(--color-warmgray)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Install callout ───────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[var(--color-teal-muted)] rounded-2xl aspect-video flex items-center justify-center text-[var(--color-warmgray)] text-sm">
            [Installation video / visual placeholder]
          </div>
          <div>
            <p className="eyebrow mb-3">Installation</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
              10 minutes. A screwdriver. That&apos;s it.
            </h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed mb-6">
              Pop open your gate operator, find the trigger terminals, connect TapGate&apos;s two wires. No drilling, no electrician, no rewiring. Works with CAME, FAAC, Nice, BFT, Sommer, Hörmann, and most others.
            </p>
            <Link href="/support" className="btn-secondary text-sm">
              View install guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Speed callout ─────────────────────── */}
      <section className="section bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-4 !text-[var(--color-teal-light)]">Response Time</p>
          <div className="mb-6">
            <span className="text-7xl md:text-9xl font-extralight tracking-tight">&lt;1</span>
            <span className="text-2xl md:text-3xl font-light ml-2">second</span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
            From tap to gate movement. Bluetooth means no cloud round-trip, no buffering, no &ldquo;please wait.&rdquo; Just open.
          </p>
        </div>
      </section>

      {/* ── All-in-one features grid ──────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Everything included</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            All-in-one, out of the box
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card border border-gray-100 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] flex items-center justify-center text-[var(--color-teal)]">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">{f.title}</h3>
                  <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bundle upsell ─────────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="bg-[var(--color-teal-muted)] rounded-2xl p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="inline-block bg-[var(--color-teal)] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-3">
                Want the full setup? Get the Home Set.
              </h2>
              <p className="text-[var(--color-warmgray)] leading-relaxed mb-4">
                Everything in the Gateway, plus 2 TapGate Fobs for phone-free backup and a TapGate Keypad for code entry. Perfect for the whole household.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "TapGate Gateway included",
                  "2 x TapGate Fob (phone-free backup)",
                  "1 x TapGate Keypad (code entry)",
                  "Priority support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-charcoal)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="mb-4">
                <span className="text-4xl font-light text-[var(--color-charcoal)]">&euro;349</span>
                <p className="text-sm text-[var(--color-warmgray)] mt-1">Save &euro;50 vs. buying separately</p>
              </div>
              <Link href="/products/home-set" className="btn-primary">
                Buy Home Set &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <FAQ items={productFAQ} />

      {/* ── Final CTA ─────────────────────────── */}
      <section className="section bg-[var(--color-charcoal)] text-white text-center">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Ready to ditch the remote?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            One payment, yours forever. Free EU shipping. 30-day returns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">
              Buy TapGate Gateway — &euro;249
            </Link>
            <Link href="/products/home-set" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
              See Home Set — &euro;349
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
