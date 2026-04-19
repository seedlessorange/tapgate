import Link from "next/link";

interface PricingCardProps {
  name: string;
  /** Last word (or any portion) of `name` to render in Fraunces italic. */
  accent?: string;
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
  accent,
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
      className={`group relative rounded-2xl p-8 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${
        featured
          ? "bg-white border-[1.5px] border-[var(--color-teal)] shadow-[0_18px_48px_-12px_rgba(14,109,107,0.3),0_2px_6px_rgba(14,109,107,0.12)] md:-mt-6"
          : "bg-white border border-[var(--color-hairline)] shadow-[0_1px_2px_rgba(15,26,26,0.04),0_6px_16px_rgba(15,26,26,0.04)]"
      }`}
    >
      {featured && (
        <div
          aria-hidden
          className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(14,109,107,0.35) 0%, transparent 60%)",
          }}
        />
      )}

      {badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full ${
            featured
              ? "bg-[var(--color-teal)] text-white shadow-[0_4px_12px_rgba(14,109,107,0.35)]"
              : "bg-[var(--color-charcoal)] text-white"
          }`}
        >
          {badge}
        </span>
      )}

      <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-3">
        {accent ? (
          <>
            {name.replace(accent, "").trim()}{" "}
            <em className="font-serif-italic text-[var(--color-teal)]">
              {accent}
            </em>
          </>
        ) : (
          name
        )}
      </h3>

      <div className="mb-3 flex items-baseline gap-1">
        <span className="font-serif-italic text-5xl text-[var(--color-charcoal)]">
          {price}
        </span>
        {period && (
          <span className="text-[var(--color-warmgray)] font-mono text-sm">
            {period}
          </span>
        )}
      </div>

      <p className="text-sm text-[var(--color-warmgray)] mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-sm text-[var(--color-charcoal)]"
          >
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
              style={{ background: "var(--color-teal-muted)" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 text-[var(--color-teal)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={
          featured ? "btn-primary text-center w-full" : "btn-secondary text-center w-full"
        }
      >
        {cta}
      </Link>
    </div>
  );
}
