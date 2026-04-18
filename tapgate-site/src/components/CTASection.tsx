import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section bg-[var(--color-charcoal)] text-white text-center">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          Ready to ditch the remote?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/compatibility" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
            Check Compatibility
          </Link>
          <Link href="/pricing" className="btn-primary">
            Buy TapGate — €249
          </Link>
        </div>
      </div>
    </section>
  );
}
