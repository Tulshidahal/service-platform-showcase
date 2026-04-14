import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Basic terms page included as part of the portfolio demo.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <section className="section-shell section-space">
      <div className="panel rounded-[2rem] p-6 md:p-8">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          This is a simplified placeholder terms page included to round out the
          public demo. It exists to show common page structure and routing rather
          than production legal language.
        </p>
      </div>
    </section>
  );
}
