import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Background and intent behind the public-safe Service Platform Showcase project.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built to show practical implementation, not just polished screenshots."
        description="This repo is a sanitized showcase based on a larger real-world project. The public version keeps the implementation patterns worth reviewing and removes anything private, sensitive, or too business-specific."
        primaryHref="/features"
        primaryLabel="View Feature Set"
      />

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Why this repo exists
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Recruiters and hiring managers usually need a code sample they can
              scan quickly. This version is designed for that. It keeps the
              frontend structure readable and adds a separate backend example so
              both sides are visible without mixing everything together.
            </p>
          </article>

          <article className="panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Code style target
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The code intentionally stays at a beginner-to-semi-mid level. It
              avoids unnecessary abstraction and favors straightforward patterns
              that are easy to explain in an interview.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
