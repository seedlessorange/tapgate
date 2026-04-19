const items = [
  { label: "No WiFi", glyph: "⛌" },
  { label: "No subscription", glyph: "∅" },
  { label: "No fobs", glyph: "⌖" },
  { label: "No codes", glyph: "✦" },
  { label: "Works offline", glyph: "◉" },
  { label: "Under one second", glyph: "⤭" },
  { label: "Shareable by text", glyph: "⇄" },
  { label: "10-minute install", glyph: "◷" },
];

export default function Marquee() {
  return (
    <div
      className="relative bg-[var(--color-charcoal)] text-white py-5 overflow-hidden border-y border-white/5 off-screen-skip"
      aria-hidden
    >
      <div className="marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-track">
            {items.map((item, i) => (
              <div
                key={`${copy}-${i}`}
                className="flex items-center gap-3 shrink-0"
              >
                <span className="text-[var(--color-teal-light)] text-lg leading-none">
                  {item.glyph}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
