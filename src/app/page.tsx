import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import {
  engineeringHighlights,
  faqItems,
  featureCards,
} from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Service Platform Showcase",
  description:
    "A public-safe full-stack portfolio project with a responsive frontend, typed request flows, and a simplified backend example.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio Project"
        title="A simplified services-platform demo built for recruiter review."
        description="This project focuses on readable frontend structure, typed forms, lightweight API routes, and a separate FastAPI backend example. It is intentionally simplified so it can be shared publicly without exposing real business logic."
      />

      <section className="section-shell section-space">
        <div className="grid gap-6 lg:grid-cols-2">
          {featureCards.map((item) => (
            <article key={item.title} className="panel rounded-[1.8rem] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="panel rounded-[2rem] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Engineering Notes
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {engineeringHighlights.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] bg-surface-soft p-5">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Common Questions
            </p>
            <div className="mt-5 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-[1.35rem] bg-surface-soft p-5">
                  <h2 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Explore
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              Review the code from the surface inward.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Start with the frontend routes, then review the request and contact
              flows, and finally scan the FastAPI example in the backend folder.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/features" className="button-secondary px-5 py-3 text-sm">
                Browse Features
              </Link>
              <Link href="/request" className="button-primary px-5 py-3 text-sm">
                Open Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
