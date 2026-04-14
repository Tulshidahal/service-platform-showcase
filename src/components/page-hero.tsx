import Link from "next/link";
import { siteConfig, trustHighlights } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = siteConfig.primaryPath,
  primaryLabel = "Open Request Demo",
}: PageHeroProps) {
  return (
    <section className="section-shell py-8 md:py-12">
      <div className="panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-6 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              {description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryHref} className="button-primary px-6 py-3 text-base">
                {primaryLabel}
              </Link>
              <Link href="/features" className="button-secondary px-6 py-3 text-base">
                See Features
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {trustHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface-soft px-3.5 py-2 text-sm font-semibold text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.8rem] bg-gradient-to-br from-brand-dark via-brand to-[#6cae3b] p-5 text-white shadow-[var(--shadow-lift)]">
            <div className="rounded-[1.45rem] border border-white/18 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/76">
                Summary
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  {
                    label: "Frontend",
                    value: "Next.js, React, TypeScript",
                  },
                  {
                    label: "Backend",
                    value: "FastAPI, SQLAlchemy, PostgreSQL",
                  },
                  {
                    label: "Goal",
                    value: "Public-safe full-stack showcase",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.2rem] border border-white/18 bg-white/10 p-4"
                  >
                    <p className="text-sm font-semibold text-white/78">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
