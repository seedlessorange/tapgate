import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TapGate for Rental Hosts",
  description:
    "Give guests a time-limited gate key by text message. No lockboxes, no codes to forget, no check-in friction. TapGate auto-expires access when they check out.",
};

export default function RentalsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative flex items-center bg-[var(--color-offwhite)] overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
          <p className="eyebrow mb-4">For Rental Hosts</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-6 max-w-3xl">
            Guest check-in should not start with &ldquo;the gate code is
            4-7-2-9.&rdquo;
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-2xl mb-8 leading-relaxed">
            Your guests just flew in from Hamburg. They&apos;re tired, it&apos;s
            dark, and they&apos;re squinting at a keypad trying to remember the
            code you texted three days ago. TapGate gives them a digital key
            that works on their phone and expires when they leave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/pricing" className="btn-primary">
              Buy TapGate &mdash; &euro;249
            </Link>
            <Link href="/compatibility" className="btn-secondary">
              Check if it fits your gate &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pain Points ───────────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">The hosting headaches</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Three things that make gate access harder than it should be
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Codes guests forget",
                desc: "You text the gate code in advance. They screenshot it, but can&apos;t find the screenshot. They try 4729. Then 4279. Then they call you at 11 p.m.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "Check-in friction",
                desc: "You want a smooth first impression. Instead, guests spend ten minutes at the gate. They message you &ldquo;we&apos;re here but we can&apos;t get in.&rdquo; Your five-star review starts to wobble.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                title: "Key handoff logistics",
                desc: "Lockboxes get jammed. Spare remotes go missing. Hiding a key under the third flowerpot on the left works until it doesn&apos;t. And you can&apos;t change a physical key between guests.",
              },
            ].map((p) => (
              <div key={p.title} className="card border border-gray-100">
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ─────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">How TapGate fixes it</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Seamless guest access, zero key handoffs
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Send a key by text message",
                desc: "Before your guest arrives, punch in their phone number, choose start and end dates, and hit send. They get a link to download the free TapGate app and their key is waiting inside.",
              },
              {
                step: "2",
                title: "Keys auto-expire at checkout",
                desc: "Set the key to expire on checkout day at noon. When the time comes, the key stops working. No follow-up, no remote to collect, nothing to reset.",
              },
              {
                step: "3",
                title: "No lockboxes, no codes",
                desc: "Your guest taps their phone to open the gate. That&apos;s it. No code to remember, no lockbox to fiddle with, no spare remote to misplace.",
              },
              {
                step: "4",
                title: "Activity logs tell you who arrived when",
                desc: "With TapGate Cloud (optional, €5/month), see exactly when guests opened the gate. Useful when the cleaner says they came but you&apos;re not sure they did.",
              },
            ].map((s) => (
              <div key={s.step} className="card border border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[var(--color-teal)] text-white flex items-center justify-center mb-4 font-semibold text-sm">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto mb-6 text-[var(--color-teal-muted)]" fill="currentColor">
            <path d="M11.3 2.5C6 5.1 3 9.7 3 15v6h8v-6H7c0-4.2 2-7.2 6-9l-1.7-3.5zm13 0C19 5.1 16 9.7 16 15v6h8v-6h-4c0-4.2 2-7.2 6-9l-1.7-3.5z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-light text-[var(--color-charcoal)] leading-relaxed mb-6">
            &ldquo;Last summer I had back-to-back bookings for ten weeks.
            Not once did I need to meet a guest at the gate or explain a
            code over the phone. I just texted them a key the day before
            check-in. Several guests mentioned how smooth the arrival was
            in their reviews.&rdquo;
          </blockquote>
          <p className="font-semibold text-[var(--color-charcoal)]">
            Laurent M.
          </p>
          <p className="text-sm text-[var(--color-warmgray)]">
            Airbnb host near Aix-en-Provence, France
          </p>
          <p className="text-[10px] text-[var(--color-warmgray)] mt-3 uppercase tracking-wider">
            [Placeholder testimonial]
          </p>
        </div>
      </section>

      {/* ── Features relevant to rental hosts ── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Why hosts love it</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Features that make hosting easier
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Time-limited keys",
                desc: "Set a start time, an end time, or both. Keys can last a weekend, a week, or a season. You decide.",
              },
              {
                title: "Single-use keys for deliveries",
                desc: "Expecting a grocery drop-off before your guest arrives? Send a key that works exactly once.",
              },
              {
                title: "Instant revocation",
                desc: "Guest overstays? Key still active by mistake? One tap in the app and it&apos;s gone.",
              },
              {
                title: "Works without WiFi",
                desc: "Rural property with flaky internet? TapGate runs on Bluetooth. Your gate opens even when your router doesn&apos;t.",
              },
              {
                title: "Activity logs (Cloud)",
                desc: "See a timestamped history of every gate opening. Handy for coordinating with cleaning and maintenance crews.",
              },
              {
                title: "No monthly fee required",
                desc: "The base TapGate unit works without a subscription. Cloud is optional at €5/month for hosts who want remote visibility.",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--color-warmgray)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="section bg-[var(--color-charcoal)] text-white text-center">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            Better arrivals start at the gate.
          </h2>
          <p className="text-[var(--color-warmgray)] mb-8 leading-relaxed">
            Give your guests the kind of smooth check-in that earns five-star
            reviews. TapGate installs in about 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">
              Buy TapGate &mdash; &euro;249
            </Link>
            <Link
              href="/compatibility"
              className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]"
            >
              Check Compatibility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
