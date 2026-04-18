import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TapGate for Homeowners",
  description:
    "Stop fumbling for your gate remote. TapGate lets you open your gate with your phone, share digital keys with family and service people, and revoke access instantly. No WiFi needed.",
};

export default function HomeownersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative flex items-center bg-[var(--color-offwhite)] overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
          <p className="eyebrow mb-4">For Homeowners</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-6 max-w-3xl">
            Your driveway gate should be as easy as your front door.
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-2xl mb-8 leading-relaxed">
            No more digging through your bag for a remote that&apos;s somewhere
            between the glove box and last Tuesday. TapGate turns your phone
            into a gate opener that works every time you pull up.
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
          <p className="eyebrow mb-3">Sound familiar?</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Three things every gate owner deals with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                ),
                title: "The remote hunt",
                desc: "You&apos;re idling at the gate, one hand rummaging through the centre console. It was right here a minute ago. Your passenger starts looking in the door pocket. The car behind you honks.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                title: "Lost fobs, dead batteries",
                desc: "Every household accumulates a drawer of spare remotes that may or may not work. Nobody remembers which battery size they take. One of them has been &ldquo;somewhere in the house&rdquo; since March.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: "Coordinating with people",
                desc: "The cleaner comes on Tuesdays. The gardener is every other Thursday. Your parents visit unannounced. Everyone needs access, and there&apos;s no good way to give it.",
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
            Four changes that make gate life simpler
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Tap your phone to open",
                desc: "Drive up, tap the button in the app. The gate starts moving before you finish braking. Works from up to 30 metres via Bluetooth.",
              },
              {
                step: "2",
                title: "Share keys with anyone",
                desc: "Send a digital key to the cleaner, the gardener, or your parents. They install the free app, and their phone becomes a gate opener. No spare remotes needed.",
              },
              {
                step: "3",
                title: "Revoke access instantly",
                desc: "The cleaner stopped coming? Tap one button and their key is gone. No need to reprogram anything, collect fobs, or change gate codes.",
              },
              {
                step: "4",
                title: "No WiFi, no subscription",
                desc: "TapGate works over Bluetooth. Your internet could go down for a month and you&apos;d never notice. The base unit is a one-time purchase.",
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
            &ldquo;I was sceptical it could really install in ten minutes. It
            took me eight. Now the whole family uses their phones, and I gave
            the cleaner her own key from the app. Haven&apos;t touched the old
            remotes since.&rdquo;
          </blockquote>
          <p className="font-semibold text-[var(--color-charcoal)]">
            Sophie D.
          </p>
          <p className="text-sm text-[var(--color-warmgray)]">
            Homeowner near Toulouse, France
          </p>
          <p className="text-[10px] text-[var(--color-warmgray)] mt-3 uppercase tracking-wider">
            [Placeholder testimonial]
          </p>
        </div>
      </section>

      {/* ── Features relevant to homeowners ──── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Why homeowners love it</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Built around how families actually live
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Apple Watch support",
                desc: "Tap your wrist when your hands are full of grocery bags. Works the same as the phone app.",
              },
              {
                title: "Works with any automated gate",
                desc: "CAME, FAAC, Nice, BFT, Sommer, Hörmann, and most other EU brands. Sliding or swing.",
              },
              {
                title: "Up to 20 digital keys",
                desc: "Enough for every family member, the regular service people, and a few spares.",
              },
              {
                title: "No drilling, no electrician",
                desc: "Two wires into the same terminals your old remote uses. If you can plug in a lamp, you can install TapGate.",
              },
              {
                title: "Optional cloud dashboard",
                desc: "Want to see who opened the gate while you were away? Add TapGate Cloud for €5/month. Skip it and everything still works perfectly.",
              },
              {
                title: "2-year warranty",
                desc: "Hardware built by a family that&apos;s been doing access control for 25 years. If something breaks, we replace it.",
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
            Stop hunting for your remote.
          </h2>
          <p className="text-[var(--color-warmgray)] mb-8 leading-relaxed">
            TapGate installs in about 10 minutes. Your phone becomes the only
            gate opener you need.
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
