import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Known Limitations",
  description:
    "What TapGate doesn't do (yet). Honest details about compatibility limits, feature gaps, and what we're working on next.",
};

const limitations = [
  {
    title: "Automated gates only",
    desc: "TapGate doesn\u2019t work with manual gates \u2014 there needs to be an electric motor. We connect to the trigger terminals inside the operator, so without a motor, there\u2019s nothing for us to talk to.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001.08 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z" />
      </svg>
    ),
  },
  {
    title: "No notifications without Cloud",
    desc: "The offline version (\u20AC249) doesn\u2019t send you notifications when someone enters. Add TapGate Cloud (\u20AC5/month) if you want push alerts and activity logs.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Older gate operators may not be compatible",
    desc: "If your gate operator is older than about 20 years, compatibility gets tricky. Contact us before buying if your gate was installed before 2005.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "No intercom or door phone support",
    desc: "We don\u2019t currently support intercoms or door phones. If you need video calling at the gate, look at specialist intercom products for now.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    title: "iOS 14+ or Android 9+ required",
    desc: "The TapGate app requires iOS 14 or later, or Android 9 or later. Older phones won\u2019t work. Most phones from 2018 onward are fine.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Shared keys require the app",
    desc: "Recipients need to install the TapGate app to open the gate. They can\u2019t open via an SMS link alone \u2014 the link takes them to the app download. No app, no access.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "One gate per device",
    desc: "TapGate works with one gate per unit. If you have two gates (e.g. driveway + garden), you\u2019ll need two TapGate units. Contact us for multi-gate pricing.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Bluetooth range: 30 m line-of-sight",
    desc: "Bluetooth range is up to 30 m in the open. Walls, metal structures, and thick stone reduce this significantly. For most driveways this is plenty, but measure if you\u2019re unsure.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0114.08 0" />
        <path d="M1.42 9a16 16 0 0121.16 0" />
        <path d="M8.53 16.11a6 6 0 016.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
];

const roadmap = [
  {
    title: "Intercom support",
    desc: "Video and audio intercom integration so you can see and talk to visitors from the app.",
  },
  {
    title: "Multi-gate mode",
    desc: "Control two or more gates from a single TapGate unit and one app screen.",
  },
  {
    title: "SMS-only guest access",
    desc: "Let guests open the gate with a one-time SMS code \u2014 no app install needed.",
  },
];

export default function LimitationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-4">Known Limitations</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-5">
            What TapGate doesn&rsquo;t do (yet)
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed">
            We&rsquo;d rather you know upfront.
          </p>
        </div>
      </section>

      {/* Limitations grid */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {limitations.map((item) => (
              <div key={item.title} className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working on it */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
              Working on it
            </h2>
            <p className="text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed">
              These are the limitations we&rsquo;re actively working to remove. No firm dates yet, but they&rsquo;re on the list.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {roadmap.map((item) => (
              <div key={item.title} className="card border-2 border-dashed border-[var(--color-teal-light)] text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-teal-muted)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            Questions? Ask before you buy.
          </h2>
          <p className="text-[var(--color-warmgray)] mb-8 leading-relaxed">
            Not sure if TapGate fits your setup? Get in touch or run the compatibility quiz &mdash; it takes 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/compatibility" className="btn-secondary">
              Take the Compatibility Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
