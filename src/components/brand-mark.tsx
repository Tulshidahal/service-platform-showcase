import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandMarkProps = {
  href?: string;
  light?: boolean;
};

export function BrandMark({ href = "/", light = false }: BrandMarkProps) {
  const content = (
    <span
      className={`inline-flex flex-col rounded-[1.1rem] border px-4 py-2.5 ${
        light
          ? "border-white/12 bg-white/8 text-white"
          : "border-border bg-white/80 text-foreground shadow-[var(--shadow-soft)]"
      }`}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        Portfolio
      </span>
      <span className="text-lg font-semibold tracking-tight">
        {siteConfig.name}
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}
