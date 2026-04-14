import { createPageMetadata } from "@/lib/metadata";
import { engineeringHighlights, featureCards } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "Feature overview for the public-safe Service Platform Showcase project.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <section className="section-shell section-space">
      <div className="panel rounded-[2rem] p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Feature Overview
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
          What this project is meant to showcase.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          The goal is not to recreate a full production platform in public. The
          goal is to show the code structure, request flows, and engineering
          patterns that are most useful in a hiring review.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {featureCards.map((item) => (
          <article key={item.title} className="panel rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {engineeringHighlights.map((item) => (
          <article key={item.title} className="panel rounded-[1.8rem] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
