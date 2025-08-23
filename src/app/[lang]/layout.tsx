import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/navbar/navbar";
import { StructuredData } from "@/components/seo/structured-data";
import { i18n, type Locale } from "@/config/i18n-config";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Green Next.js Boilerplate",
    template: "%s | Green Next.js Boilerplate",
  },
  description:
    "The first eco-conscious Next.js boilerplate optimized for planet and performance. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Green Technology",
    "Eco-friendly",
    "Performance",
    "Boilerplate",
    "Starter Template",
    "Carbon Footprint",
    "Sustainable Development",
  ],
  authors: [{ name: "NicolasGiaco", url: "https://github.com/NicolasGiaco" }],
  creator: "NicolasGiaco",
  publisher: "NicolasGiaco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://green-nextjs-boilerplate.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://green-nextjs-boilerplate.vercel.app",
    title: "Green Next.js Boilerplate",
    description:
      "The first eco-conscious Next.js boilerplate optimized for planet and performance.",
    siteName: "Green Next.js Boilerplate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Green Next.js Boilerplate - Eco-conscious development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Next.js Boilerplate",
    description:
      "The first eco-conscious Next.js boilerplate optimized for planet and performance.",
    images: ["/og-image.png"],
    creator: "@NicolasGiaco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const { children } = props;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
