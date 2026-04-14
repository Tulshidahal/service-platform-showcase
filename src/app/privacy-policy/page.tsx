import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Basic privacy page included as part of the portfolio demo.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-shell section-space">
      <div className="panel rounded-[2rem] p-6 md:p-8">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          This is a simplified placeholder privacy page included to show how legal
          and informational pages can be structured in a small portfolio project.
          It is not intended to serve as production legal advice.
        </p>
      </div>
    </section>
  );
}
