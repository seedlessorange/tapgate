import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TapGate for Small Buildings",
  description:
    "Manage shared gate access for 2 to 10 units from your phone. Add residents instantly, revoke move-outs in one tap, and see who came and went. No gate codes to change.",
};

export default function SmallBuildingsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative flex items-center bg-[var(--color-offwhite)] overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
          <p className="eyebrow mb-4">For Small Buildings</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-6 max-w-3xl">
            Managing a shared gate shouldn&apos;t feel like a second job.
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-2xl mb-8 leading-relaxed">
            Every move-in means programming a new remote. Every move-out means
            hoping they returned it. TapGate replaces all of that with digital
            keys you control from your phone &mdash; for 2 units or 10.
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
          <p className="eyebrow mb-3">The multi-unit headaches</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Shared gates create shared problems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                ),
                title: "Move-in, move-out chaos",
                desc: "A new tenant moves in and needs a remote. You order one, wait for delivery, programme it, hand it over. Two months later they leave and the remote goes with them.",
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
                title: "Shared access, zero visibility",
                desc: "Six households share one gate. Everyone has a code or a remote. Nobody knows who opened it at 3 a.m. on a Tuesday. If something happens, there&apos;s no record.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                title: "Gate codes everyone knows",
                desc: "The code was set four years ago. Every tenant since has had it. Former residents, their friends, a delivery driver from 2022 &mdash; they can all still get in.",
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
            One device, every unit covered
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "A digital key per resident",
                desc: "New tenant? Open the app, enter their phone number, send. They download TapGate and their phone opens the gate. Takes about two minutes, not two weeks.",
              },
              {
                step: "2",
                title: "Instant revocation on move-out",
                desc: "Tenant leaves? Tap one button and their key is dead. No remote to chase down, no code to change for everyone else. Just done.",
              },
              {
                step: "3",
                title: "Activity history you can check",
                desc: "With TapGate Cloud, see a timestamped log of every gate opening. Know who came, who went, and when. Useful if there&apos;s ever a question about access.",
              },
              {
                step: "4",
                title: "No gate codes to rotate",
                desc: "Every resident has their own individual key. When one person leaves, only their access changes. Nobody else has to update anything.",
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
            &ldquo;I manage six apartments behind a shared gate. Before
            TapGate I had a spreadsheet tracking who had which remote and
            whether they&apos;d returned it. Now I add or remove access
            from my phone in seconds. Last month a tenant moved out on
            Friday and the new one moved in on Monday &mdash; I didn&apos;t
            even need to be there.&rdquo;
          </blockquote>
          <p className="font-semibold text-[var(--color-charcoal)]">
            Marc R.
          </p>
          <p className="text-sm text-[var(--color-warmgray)]">
            Property owner managing 6 units, Montpellier, France
          </p>
          <p className="text-[10px] text-[var(--color-warmgray)] mt-3 uppercase tracking-wider">
            [Placeholder testimonial]
          </p>
        </div>
      </section>

      {/* ── Features relevant to small buildings */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Why building owners choose it</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Features that simplify multi-unit management
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Up to 20 digital keys",
                desc: "Enough for every resident, plus a few for maintenance, the postman, or the property manager. Each key is individually named.",
              },
              {
                title: "Per-key revocation",
                desc: "Remove one resident&apos;s access without affecting anyone else. No re-programming, no new codes to distribute.",
              },
              {
                title: "Activity logs (Cloud)",
                desc: "A timestamped record of every gate opening. See which key was used and when. Exportable if you ever need documentation.",
              },
              {
                title: "No WiFi dependency",
                desc: "TapGate runs on Bluetooth. Even if the building&apos;s internet goes down, every resident can still open the gate with their phone.",
              },
              {
                title: "One-time hardware cost",
                desc: "The TapGate unit is €249 once. Cloud is optional at €5/month. No per-user fees, no per-unit licensing.",
              },
              {
                title: "Compatible with existing gates",
                desc: "CAME, FAAC, Nice, BFT, Sommer, Hörmann, and most other EU operators. If the gate has a trigger terminal, TapGate plugs in.",
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
            One gate, many residents, zero hassle.
          </h2>
          <p className="text-[var(--color-warmgray)] mb-8 leading-relaxed">
            TapGate installs in about 10 minutes. From then on, adding or
            removing a resident takes seconds, not days.
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
