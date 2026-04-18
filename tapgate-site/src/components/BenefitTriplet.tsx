const benefits = [
  {
    title: "Retrofit.",
    body: "Keep your existing gate. Two wires and you're done.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Instant.",
    body: "Tap, and the gate's already moving. Under one second.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Shareable.",
    body: "Text a digital key to anyone. No fobs, no codes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
];

export default function BenefitTriplet() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow mb-3">Why TapGate</p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-12">
          Simple. Fast. Shareable.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card flex flex-col gap-4 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">{b.title}</h3>
              <p className="text-[var(--color-warmgray)] leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
