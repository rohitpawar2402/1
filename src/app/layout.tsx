import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COSMIC — Build Beyond Limits",
  description:
    "The next-generation platform for teams who demand performance, elegance, and developer experience without compromise. Start your free trial today.",
  keywords: [
    "SaaS platform",
    "developer tools",
    "web performance",
    "AI powered",
    "team collaboration",
    "premium design",
  ],
  authors: [{ name: "COSMIC Team" }],
  openGraph: {
    title: "COSMIC — Build Beyond Limits",
    description:
      "A cinematic digital experience where design meets engineering. Crafted for visionaries.",
    type: "website",
    url: "https://cosmic.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "COSMIC — Build Beyond Limits",
    description: "The next-generation platform for teams who demand the extraordinary.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#020208",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

