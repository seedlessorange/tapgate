import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is TapGate for You?",
  description:
    "An honest look at who TapGate works for — and who it doesn't. Check whether your gate, your setup, and your needs are a good fit before you buy.",
};

/* ── Icon helpers ──────────────────────────────────────────────────────────── */

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AlertIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────────── */

const RIGHT_FOR_YOU = [
  {
    title: "You have an automated gate",
    description:
      "TapGate connects to the trigger terminals inside your electric gate operator — the same connection your remote uses. If you have a motor that opens and closes your gate, we can work with it.",
  },
  {
    title: "You want to share access with multiple people",
    description:
      "Family, tenants, cleaners, guests — send them a digital key by text message. Set it to permanent, time-limited, or single-use. Revoke any time.",
  },
  {
    title: "You've lost fobs or hate managing them",
    description:
      "No more ordering replacement remotes, no more spare keys under flower pots. Everyone already has a phone.",
  },
  {
    title: "You want one system for everyone",
    description:
      "Family, cleaners, guests, and deliveries — all managed from one app. Different access levels for different people, all in your control.",
  },
];

const NOT_RIGHT_FOR_YOU = [
  {
    title: "You have a manual gate without an electric operator",
    description:
      "TapGate connects to the wiring inside an electric gate motor. If your gate opens by hand and doesn't have a motor, we can't help — there's nothing to connect to.",
    note: null,
  },
  {
    title: "You're happy with your current remote and rarely share access",
    description:
      "If you live alone, your remote works fine, and you never need to let anyone else in — you probably don't need TapGate. We'd rather be honest about that.",
    note: null,
  },
  {
    title: "You need access control for 20+ users across multiple gates",
    description:
      "TapGate is built for homes and small setups. If you're managing a large building or campus, you need something more robust.",
    note: "Check our contact page for larger setups.",
    noteHref: "/contact",
  },
  {
    title: "You want cloud features but don't have WiFi near your gate",
    description:
      "The core Bluetooth connection works without WiFi — your gate will still open. But remote key management, push notifications, and activity logs need an internet connection at the gate.",
    note: "The offline version works great, but you'd miss notifications and remote management.",
    noteHref: null,
  },
];

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function IsTapGateForYouPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-4">Honest Assessment</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-5">
            Is TapGate for you?
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed">
            We&apos;d rather you know before you buy. Here&apos;s an honest look
            at when TapGate is the right choice — and when it isn&apos;t.
          </p>
        </div>
      </section>

      {/* ── 2. When TapGate IS right ─────────────── */}
      <section className="section">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="eyebrow mb-3">Great Fit</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            When TapGate is the right choice
          </h2>
          <p className="text-[var(--color-warmgray)] mb-10 max-w-2xl leading-relaxed">
            If any of these sound like you, TapGate was built for your
            situation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {RIGHT_FOR_YOU.map((item) => (
              <div
                key={item.title}
                className="card border-2 border-green-200 bg-green-50/60"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--color-warmgray)] leading-relaxed pl-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. When TapGate might NOT be right ───── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="eyebrow mb-3">Worth Knowing</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            When TapGate might not be the right choice
          </h2>
          <p className="text-[var(--color-warmgray)] mb-10 max-w-2xl leading-relaxed">
            We believe in being upfront. Here are the situations where TapGate
            isn&apos;t the best fit — or where you should know the trade-offs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {NOT_RIGHT_FOR_YOU.map((item) => (
              <div
                key={item.title}
                className="card border-2 border-amber-200 bg-amber-50/60"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--color-warmgray)] leading-relaxed pl-11">
                  {item.description}
                </p>
                {item.note && (
                  <p className="text-sm text-amber-700 mt-3 pl-11 font-medium">
                    {item.noteHref ? (
                      <Link
                        href={item.noteHref}
                        className="underline hover:no-underline"
                      >
                        {item.note}
                      </Link>
                    ) : (
                      item.note
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Still not sure? ───────────────────── */}
      <section className="section bg-[var(--color-teal-muted)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            Still not sure?
          </h2>
          <p className="text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed mb-8">
            Take our 30-second compatibility quiz to check if TapGate works with
            your gate — or get in touch and we&apos;ll help you figure it out.
            No pressure, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/compatibility" className="btn-primary">
              Take the compatibility quiz
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to a human &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
