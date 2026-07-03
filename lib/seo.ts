type MetadataInput = {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string[];
};

const SITE_URL = "https://nikolay-davydov.vercel.app";

export function buildMetadata({
  title = "Portfolio",
  description = "Portfolio built with Next.js and TypeScript",
  url,
  keywords,
}: MetadataInput = {}) {
  const siteUrl = url ?? SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: [{ name: "Nikolay Davydov" }],
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: title,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
