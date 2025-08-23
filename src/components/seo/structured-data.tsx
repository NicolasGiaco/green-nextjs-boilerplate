export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Green Next.js Boilerplate",
    description:
      "The first eco-conscious Next.js boilerplate optimized for planet and performance. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.",
    url: "https://green-nextjs-boilerplate.vercel.app",
    author: {
      "@type": "Person",
      name: "NicolasGiaco",
      url: "https://github.com/NicolasGiaco",
    },
    publisher: {
      "@type": "Person",
      name: "NicolasGiaco",
      url: "https://github.com/NicolasGiaco",
    },
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    programmingLanguage: ["TypeScript", "JavaScript"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Next.js 15 with App Router",
      "React 19",
      "TypeScript support",
      "Tailwind CSS 4",
      "Dark/Light mode",
      "Internationalization",
      "SEO optimized",
      "Eco-conscious design",
    ],
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
    ],
    license: "https://opensource.org/licenses/MIT",
    codeRepository: "https://github.com/NicolasGiaco/green-nextjs-boilerplate",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
