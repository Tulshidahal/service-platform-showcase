import { RequestForm } from "@/components/forms/request-form";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Request Demo",
  description:
    "Example request intake form with shared validation and API submission.",
  path: "/request",
});

export default function RequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Request Demo"
        title="A simple request intake flow with typed validation."
        description="This page is here to demonstrate how the frontend form, validation layer, and API route fit together in a public-safe portfolio project."
        primaryHref="#request-form"
        primaryLabel="Jump to Form"
      />

      <section id="request-form" className="section-shell pb-14 md:pb-20">
        <RequestForm />
      </section>
    </>
  );
}
