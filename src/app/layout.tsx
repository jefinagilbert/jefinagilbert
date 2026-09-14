import type { Metadata } from "next";
import { siteConfig } from "@/config/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jefinagilbert",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jefin Agilbert",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Marlow Navigation",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Hindustan Institute of Technology and Science",
      },
      {
        "@type": "EducationalOrganization",
        name: "St. Xavier's College",
      }
    ],
    url: "https://jefinagilbert.github.io/jefinagilbert/",
    sameAs: [
      "https://github.com/jefinagilbert",
      "https://linkedin.com/in/jefin-agilbert-35948a20b"
    ],
    knowsAbout: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "React Native",
      "Microservices",
      "System Design",
      "Docker"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-900 text-gray-100 min-h-screen antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
