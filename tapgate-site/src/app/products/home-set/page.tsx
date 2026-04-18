import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "TapGate Home Set",
  description:
    "The TapGate Home Set bundles the Gateway, 2 Fobs, and a Keypad for €349. Everything your household needs to open the gate — phone, fob, or code.",
};

const productFAQ = [
  {
    q: "What is included in the Home Set?",
    a: "The TapGate Home Set includes 1 TapGate Gateway (the smart controller), 2 TapGate Fobs (phone-free NFC keyrings), and 1 TapGate Keypad (4-digit code entry panel). Plus all cables, mounting screws, and the install guide.",
  },
  {
    q: "Can I add more Fobs or Keypads later?",
    a: "Yes. Additional Fobs and Keypads are available separately in our shop. They pair instantly with your existing Gateway.",
  },
  {
    q: "How does the Keypad work?",
    a: "The TapGate Keypad is a weatherproof panel you mount near your gate. Enter a 4-digit code and the gate opens. You can set multiple codes and revoke any of them from the app.",
  },
  {
    q: "Does the Home Set require a subscription?",
    a: "No. The Home Set is a one-time purchase. TapGate Cloud (€5/month) is an optional add-on for remote management, logs, and notifications. TapGate works perfectly without it.",
  },
  {
    q: "What if I already bought the Gateway?",
    a: "Contact us. We offer an upgrade kit with 2 Fobs and a Keypad for existing Gateway owners at a special price.",
  },
];

const comparisonRows = [
  { feature: "TapGate smart controller", gateway: true, homeSet: true },
  { feature: "iOS & Android app (free)", gateway: true, homeSet: true },
  { feature: "Apple Watch support", gateway: true, homeSet: true },
  { feature: "20 digital keys", gateway: true, homeSet: true },
  { feature: "Bluetooth 5.0 (30 m range)", gateway: true, homeSet: true },
  { feature: "Works offline", gateway: true, homeSet: true },
  { feature: "2-year warranty", gateway: true, homeSet: true },
  { feature: "2 x TapGate Fob (phone-free)", gateway: false, homeSet: true },
  { feature: "1 x TapGate Keypad (code entry)", gateway: false, homeSet: true },
  { feature: "Priority support", gateway: false, homeSet: true },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Phone",
    desc: "Tap your phone or Apple Watch to open the gate instantly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
    title: "Fob",
    desc: "Clip a Fob to your keyring. Tap it against the reader. No phone needed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01" />
      </svg>
    ),
    title: "Keypad",
    desc: "Enter a 4-digit code. Great for kids, elderly family, or visitors.",
  },
];

export default function HomeSetPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative bg-[var(--color-offwhite)] pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[var(--color-teal)] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Most Popular
            </span>
            <p className="eyebrow mb-2">TapGate Home Set</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-6">
              Three ways to open. Zero excuses.
            </h1>
            <p className="text-lg text-[var(--color-warmgray)] max-w-lg mb-4 leading-relaxed">
              The Gateway, 2 Fobs, and a Keypad. Phone, keyring, or code &mdash; everyone in your household gets in their own way.
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-light text-[var(--color-charcoal)]">&euro;349</span>
              <span className="text-sm text-[var(--color-warmgray)]">One-time payment &middot; Save &euro;50 vs. buying separately</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="btn-primary">Buy Home Set</Link>
              <Link href="/compatibility" className="btn-secondary">
                Check compatibility &rarr;
              </Link>
            </div>
          </div>
          <div className="bg-[var(--color-teal-muted)] rounded-2xl aspect-square max-h-[480px] flex items-center justify-center text-[var(--color-warmgray)] text-sm">
            [Home Set product image placeholder]
          </div>
        </div>
      </section>

      {/* ── What&apos;s in the box ────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">What&apos;s in the box</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Three ways to open your gate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-teal-muted)] flex items-center justify-center text-[var(--color-teal)] mx-auto mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">{f.title}</h3>
                <p className="text-[var(--color-warmgray)] leading-relaxed">{f.desc}</p>
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
              Same 10-minute install. More ways in.
            </h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed mb-6">
              Install the Gateway just like the standalone version &mdash; two wires, one screwdriver. The Fobs pair instantly via the app. Mount the Keypad near your gate with the included screws.
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
            Phone, Fob, or Keypad &mdash; every method triggers the gate in under one second.
          </p>
        </div>
      </section>

      {/* ── Comparison table ──────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="eyebrow mb-3">Compare</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Gateway vs. Home Set
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-[var(--color-charcoal)]">Feature</th>
                  <th className="py-3 px-4 text-sm font-semibold text-[var(--color-charcoal)] text-center">
                    Gateway
                    <span className="block text-xs font-normal text-[var(--color-warmgray)]">&euro;249</span>
                  </th>
                  <th className="py-3 pl-4 text-sm font-semibold text-[var(--color-teal)] text-center">
                    Home Set
                    <span className="block text-xs font-normal text-[var(--color-warmgray)]">&euro;349</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-sm text-[var(--color-charcoal)]">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {row.gateway ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="text-gray-300">&mdash;</span>
                      )}
                    </td>
                    <td className="py-3 pl-4 text-center">
                      {row.homeSet ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="text-gray-300">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary">Buy Home Set — &euro;349</Link>
            <Link href="/products/tapgate-gateway" className="btn-secondary">
              See Gateway — &euro;249
            </Link>
          </div>
        </div>
      </section>

      {/* ── All-in-one features grid ──────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Everything included</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            All-in-one, out of the box
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Bluetooth 5.0", desc: "30-metre range. No WiFi or internet needed." },
              { title: "Works Offline", desc: "No cloud dependency. Your gate opens no matter what." },
              { title: "iOS & Android", desc: "Free app on both platforms. Always updated." },
              { title: "Apple Watch", desc: "Tap your wrist. Gate opens. No phone required." },
              { title: "20 Digital Keys", desc: "Share with family, guests, or service people." },
              { title: "2-Year Warranty", desc: "Hardware guaranteed. Free EU shipping. 30-day returns." },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">{f.title}</h3>
                  <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's in the box ─────────────────── */}
      <section className="section bg-[var(--color-teal-muted)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <p className="eyebrow mb-3">What&apos;s in the box</p>
              <ul className="space-y-3">
                {[
                  "TapGate Gateway module",
                  "2\u00d7 TapGate Fob (NFC keyring)",
                  "1\u00d7 TapGate Keypad (weatherproof, battery-powered)",
                  "Pre-connected wires with labelled terminals",
                  "Mounting hardware for Gateway and Keypad",
                  "Quick-start guide + QR for app download",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--color-charcoal)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[var(--color-teal)] mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">What you&apos;ll need</p>
              <ul className="space-y-3">
                {[
                  "A Phillips-head screwdriver",
                  "Your gate operator model name",
                  "10\u201315 minutes",
                  "Your smartphone (iOS 14+ or Android 9+)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--color-charcoal)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[var(--color-teal)] mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">You won&apos;t need</p>
              <ul className="space-y-3">
                {[
                  "An electrician",
                  "WiFi at the gate",
                  "Drilling",
                  "To remove your existing remote",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--color-warmgray)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews placeholder ───────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-6">
            What owners are saying
          </h2>
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-[var(--color-warmgray)] mb-2">Reviews are coming soon.</p>
            <p className="text-sm text-[var(--color-warmgray)]">
              We&apos;re collecting genuine reviews from real TapGate owners. No fake reviews, no incentivised ratings. Check back soon, or{" "}
              <Link href="/community" className="text-[var(--color-teal)] underline">join the community</Link> to be notified.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gateway downsell ──────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-3">
                Only need your phone?
              </h2>
              <p className="text-[var(--color-warmgray)] leading-relaxed">
                The Gateway gives you phone and Apple Watch access for &euro;249. No Fobs, no Keypad, same instant Bluetooth control.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="mb-4">
                <span className="text-4xl font-light text-[var(--color-charcoal)]">&euro;249</span>
              </div>
              <Link href="/products/tapgate-gateway" className="btn-secondary">
                See Gateway &rarr;
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
            The whole household, covered.
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Phone, Fob, or code &mdash; everyone gets in. One payment, free EU shipping, 30-day returns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">
              Buy Home Set — &euro;349
            </Link>
            <Link href="/compatibility" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
              Check Compatibility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
