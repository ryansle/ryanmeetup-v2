import type { Metadata } from "next";

type MetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  metadataBase?: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  keywords?: string[];
  siteName?: string;
};

const buildPageMetadata = (options: MetadataOptions): Metadata => {
  const {
    title,
    description,
    canonical,
    metadataBase,
    image,
    keywords,
    siteName,
  } = options;

  return {
    metadataBase: metadataBase ? new URL(metadataBase) : undefined,
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title,
      description,
      siteName: siteName ?? "Ryan Meetup",
      images: [image],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
};

export { buildPageMetadata };
