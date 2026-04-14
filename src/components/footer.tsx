import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0f262b] text-white">
      <div className="section-shell py-12 md:py-14">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/6 p-6 md:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/62">
                Portfolio Demo
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                A simplified frontend and backend showcase.
              </h2>
              <p className="mt-3 text-base leading-7 text-white/75">
                This repo is designed for public review. It focuses on readable
                code, practical structure, and a realistic full-stack shape
                without exposing sensitive business logic.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/features" className="button-secondary px-5 py-3 text-sm">
                View Features
              </Link>
              <Link href="/request" className="button-primary px-5 py-3 text-sm">
                Open Request Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <BrandMark href={undefined} light />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              Built to show a practical Next.js frontend, typed request handling,
              and a separate FastAPI backend example in one recruiter-friendly repo.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              Contact
            </h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-white/80">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phoneDisplay}</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              Navigation
            </h2>
            <div className="mt-4 grid gap-2 text-sm leading-7 text-white/80">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
