import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaHref,
  featured = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        featured
          ? "bg-white border-2 border-[var(--color-teal)] shadow-lg"
          : "bg-white border border-gray-200"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-teal)] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{name}</h3>
      <div className="mb-2">
        <span className="text-4xl font-light text-[var(--color-charcoal)]">{price}</span>
        {period && <span className="text-[var(--color-warmgray)] ml-1">{period}</span>}
      </div>
      <p className="text-sm text-[var(--color-warmgray)] mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-charcoal)]">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={featured ? "btn-primary text-center" : "btn-secondary text-center"}
      >
        {cta}
      </Link>
    </div>
  );
}
