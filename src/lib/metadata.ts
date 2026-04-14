import type { Metadata } from "next";

function getBaseUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  robots,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    robots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Service platform showcase",
        },
      ],
    },
    twitter: {
      title,
      description,
      images: ["/twitter-image"],
    },
    metadataBase: getBaseUrl(),
  };
}
