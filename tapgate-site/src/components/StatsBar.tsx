const stats = [
  { label: "Range", value: "30", unit: "M" },
  { label: "Response", value: "<1", unit: "SEC" },
  { label: "Install", value: "10", unit: "MIN" },
  { label: "Keys", value: "20", unit: "INCLUDED" },
];

export default function StatsBar() {
  return (
    <section className="bg-[var(--color-charcoal)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">
                {s.label}
              </p>
              <p className="text-3xl md:text-4xl font-light text-white">
                {s.value}
                <sub className="text-sm text-[var(--color-teal)] ml-1 uppercase tracking-wider">
                  {s.unit}
                </sub>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center max-w-xl mx-auto leading-relaxed">
          Range measured line-of-sight on Bluetooth 5.0; real-world varies with walls and metal. Response time measured from tap to relay trigger on iPhone 15 and Pixel 8 at 3&nbsp;m.
        </p>
      </div>
    </section>
  );
}
