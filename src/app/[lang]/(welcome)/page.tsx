import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import type { Locale } from "@/config/i18n-config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <section className="py-42 flex items-center justify-center p-8 ">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl/snug font-bold tracking-tighter sm:text-5xl">
            {dict.welcome.hero.title}{" "}
            <span className="text-green-500">{dict.welcome.hero.titlePlanet}</span>{" "}
            {dict.welcome.hero.titleAnd}{" "}
            <span className="text-blue-500">{dict.welcome.hero.titlePerformance}</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            {dict.welcome.hero.subtitle}
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Button className="h-11 px-6">{dict.welcome.hero.getStarted}</Button>
            <Button variant="outline" asChild className="h-11 px-6">
              <Link href="https://github.com/NicolasGiaco/green-nextjs-boilerplate">
                <Image
                  src="/assets/icons/github.svg"
                  className="dark:invert"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
                {dict.welcome.hero.supportGithub}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Features Grid Section */}
      <section className="w-full max-w-6xl mx-auto p-8 sm:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">{dict.welcome.features.purpose.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.features.purpose.description}
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">{dict.welcome.features.performance.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.features.performance.description}
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">
              {dict.welcome.features.developerExperience.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.features.developerExperience.description}
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">{dict.welcome.features.sustainability.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.features.sustainability.description}
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">{dict.welcome.features.productionReady.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.features.productionReady.description}
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">
              {dict.welcome.features.openSource.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.features.openSource.description}
            </p>
          </div>
        </div>
      </section>

      {/* Eco Stats Section */}
      <section className="w-full max-w-6xl mx-auto p-8 sm:p-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{dict.welcome.ecoStats.title}</h2>
          <p className="text-muted-foreground">
            {dict.welcome.ecoStats.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border rounded-lg bg-green-500/5">
            <div className="text-3xl font-bold text-green-500">62%</div>
            <p className="text-sm text-muted-foreground">{dict.welcome.ecoStats.lessCO2}</p>
            <p className="text-xs text-muted-foreground mt-1">
              0.3g vs 0.8g per page load
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-blue-500/5">
            <div className="text-3xl font-bold text-blue-500">76%</div>
            <p className="text-sm text-muted-foreground">{dict.welcome.ecoStats.fasterStartup}</p>
            <p className="text-xs text-muted-foreground mt-1">
              with Turbopack Dev
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-purple-500/5">
            <div className="text-3xl font-bold text-purple-500">90%</div>
            <p className="text-sm text-muted-foreground">{dict.welcome.ecoStats.lessCSS}</p>
            <p className="text-xs text-muted-foreground mt-1">
              ~10KB vs 100KB+ production
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-orange-500/5">
            <div className="text-3xl font-bold text-orange-500">20x</div>
            <p className="text-sm text-muted-foreground">{dict.welcome.ecoStats.fasterLinting}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Biome vs ESLint
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="w-full max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">{dict.welcome.quickStart.title}</h2>
          <p className="text-muted-foreground">
            {dict.welcome.quickStart.subtitle}
          </p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <pre className="text-sm overflow-x-auto">
            <code className="text-muted-foreground">
              {`# Clone the repository
git clone https://github.com/NicolasGiaco/green-nextjs-boilerplate.git
cd green-nextjs-boilerplate

# Install dependencies
pnpm i

# Start development server
pnpm dev`}
            </code>
          </pre>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-6xl mx-auto p-8 sm:p-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{dict.welcome.techStack.title}</h2>
          <p className="text-muted-foreground text-lg">
            {dict.welcome.techStack.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">⚛️</div>
            <h4 className="font-semibold">React 19</h4>
            <p className="text-xs text-muted-foreground mb-1">
              Server Components
            </p>
            <div className="text-xs text-green-600 font-medium">
              75KB less client JS
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">📦</div>
            <h4 className="font-semibold">Next.js 15</h4>
            <p className="text-xs text-muted-foreground mb-1">
              Turbopack + App Router
            </p>
            <div className="text-xs text-green-600 font-medium">
              2-5x faster builds
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">🔷</div>
            <h4 className="font-semibold">TypeScript 5</h4>
            <p className="text-xs text-muted-foreground mb-1">Type safety</p>
            <div className="text-xs text-green-600 font-medium">
              Better DX & performance
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">🎨</div>
            <h4 className="font-semibold">Tailwind CSS 4</h4>
            <p className="text-xs text-muted-foreground mb-1">Modern styling</p>
            <div className="text-xs text-green-600 font-medium">
              90% smaller CSS
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">🧩</div>
            <h4 className="font-semibold">Shadcn/ui</h4>
            <p className="text-xs text-muted-foreground mb-1">
              Beautiful components
            </p>
            <div className="text-xs text-green-600 font-medium">
              Zero runtime cost
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold">Biome</h4>
            <p className="text-xs text-muted-foreground mb-1">Fast linting</p>
            <div className="text-xs text-green-600 font-medium">
              15-25x faster than ESLint
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">🌍</div>
            <h4 className="font-semibold">i18n</h4>
            <p className="text-xs text-muted-foreground mb-1">
              Internationalization
            </p>
            <div className="text-xs text-green-600 font-medium">
              Built-in optimization
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">🔍</div>
            <h4 className="font-semibold">SEO Ready</h4>
            <p className="text-xs text-muted-foreground mb-1">
              Search optimized
            </p>
            <div className="text-xs text-green-600 font-medium">
              95+ Lighthouse score
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Comparison Section */}
      <section className="w-full max-w-6xl mx-auto p-8 sm:p-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {dict.welcome.environmentalComparison.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {dict.welcome.environmentalComparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">{dict.welcome.environmentalComparison.tableHeaders.metric}</th>
                <th className="p-4 text-center">{dict.welcome.environmentalComparison.tableHeaders.greenStack}</th>
                <th className="p-4 text-center">{dict.welcome.environmentalComparison.tableHeaders.standardNextjs}</th>
                <th className="p-4 text-center">{dict.welcome.environmentalComparison.tableHeaders.traditionalStack}</th>
                <th className="p-4 text-center text-green-600">
                  {dict.welcome.environmentalComparison.tableHeaders.environmentalBenefit}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-medium">Bundle Size (Gzipped)</td>
                <td className="p-4 text-center text-green-600">~30-50KB</td>
                <td className="p-4 text-center text-orange-600">~100-150KB</td>
                <td className="p-4 text-center text-red-600">~200KB+</td>
                <td className="p-4 text-center font-bold text-green-600">
                  Up to 85% smaller
                </td>
              </tr>
              <tr className="border-t bg-muted/20">
                <td className="p-4 font-medium">Dev Server Startup</td>
                <td className="p-4 text-center text-green-600">76% faster</td>
                <td className="p-4 text-center text-orange-600">Baseline</td>
                <td className="p-4 text-center text-red-600">2-3x slower</td>
                <td className="p-4 text-center font-bold text-green-600">
                  Less CPU usage
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Build Times</td>
                <td className="p-4 text-center text-green-600">2-5x faster</td>
                <td className="p-4 text-center text-orange-600">Baseline</td>
                <td className="p-4 text-center text-red-600">30-120s</td>
                <td className="p-4 text-center font-bold text-green-600">
                  Lower CI/CD costs
                </td>
              </tr>
              <tr className="border-t bg-muted/20">
                <td className="p-4 font-medium">Lighthouse Score</td>
                <td className="p-4 text-center text-green-600">95-100</td>
                <td className="p-4 text-center text-orange-600">85-90</td>
                <td className="p-4 text-center text-red-600">70-85</td>
                <td className="p-4 text-center font-bold text-green-600">
                  Better performance
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">CO2 per Page Load*</td>
                <td className="p-4 text-center text-green-600">~0.3g</td>
                <td className="p-4 text-center text-orange-600">~0.5g</td>
                <td className="p-4 text-center text-red-600">~0.8g</td>
                <td className="p-4 text-center font-bold text-green-600">
                  62% less carbon
                </td>
              </tr>
              <tr className="border-t bg-muted/20">
                <td className="p-4 font-medium">CSS Size (Production)</td>
                <td className="p-4 text-center text-green-600">~10KB</td>
                <td className="p-4 text-center text-orange-600">~50KB</td>
                <td className="p-4 text-center text-red-600">~100KB+</td>
                <td className="p-4 text-center font-bold text-green-600">
                  90% reduction
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Linting Speed</td>
                <td className="p-4 text-center text-green-600">~400ms</td>
                <td className="p-4 text-center text-orange-600">~8s</td>
                <td className="p-4 text-center text-red-600">~10s+</td>
                <td className="p-4 text-center font-bold text-green-600">
                  20x faster (Biome)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          * CO2 estimates based on Sustainable Web Design Model v4.0 (Website
          Carbon Calculator)
        </p>

        {/* Real-World Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg bg-green-500/5">
            <div className="text-2xl mb-3">🌱</div>
            <h3 className="font-semibold mb-2">{dict.welcome.environmentalComparison.realWorldBenefits.forUsers.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.environmentalComparison.realWorldBenefits.forUsers.description}
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-blue-500/5">
            <div className="text-2xl mb-3">🏢</div>
            <h3 className="font-semibold mb-2">{dict.welcome.environmentalComparison.realWorldBenefits.forDevelopers.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.environmentalComparison.realWorldBenefits.forDevelopers.description}
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-purple-500/5">
            <div className="text-2xl mb-3">🌍</div>
            <h3 className="font-semibold mb-2">{dict.welcome.environmentalComparison.realWorldBenefits.forPlanet.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.environmentalComparison.realWorldBenefits.forPlanet.description}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {dict.welcome.dataSources.title}
          </h2>
          <p className="text-muted-foreground">
            {dict.welcome.dataSources.subtitle}
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{dict.welcome.dataSources.carbonEmissions.title}</h4>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.dataSources.carbonEmissions.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{dict.welcome.dataSources.performanceMetrics.title}</h4>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.dataSources.performanceMetrics.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{dict.welcome.dataSources.greenWebStandards.title}</h4>
            <p className="text-sm text-muted-foreground">
              {dict.welcome.dataSources.greenWebStandards.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="border rounded-2xl p-12 bg-gradient-to-br from-green-500/5 to-blue-500/5">
          <h2 className="text-3xl font-bold mb-4">
            {dict.welcome.cta.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {dict.welcome.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="https://github.com/NicolasGiaco/green-nextjs-boilerplate">
                {dict.welcome.cta.startBuilding}
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            ⭐ Free forever • 🔓 Open source • 🚀 Production ready • 🌍 Planet
            friendly
          </div>
        </div>
      </section>
    </div>
  );
}
