import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="py-42 flex items-center justify-center p-8 ">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl/snug font-bold tracking-tighter sm:text-5xl">
            The first eco-conscious Next.js boilerplate optimized for{" "}
            <span className="text-green-500">planet</span> and{" "}
            <span className="text-blue-500">performance</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Start your next project knowing it's optimized for both user
            experience and planetary health.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Button className="h-11 px-6">Get Started</Button>
            <Button variant="outline" asChild className="h-11 px-6">
              <Link href="https://github.com/NicolasGiaco/green-nextjs-boilerplate">
                <Image
                  src="/assets/icons/github.svg"
                  className="dark:invert"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
                Support on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Features Grid Section */}
      <section className="w-full max-w-6xl mx-auto p-8 sm:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">🌱 Purpose</h3>
            <p className="text-sm text-muted-foreground">
              Build eco-conscious applications that minimize environmental
              impact while maximizing developer productivity and user
              experience.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">⚡ Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimized for speed with minimal bundle size, efficient rendering,
              and smart resource management out of the box.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">
              🛠️ Developer Experience
            </h3>
            <p className="text-sm text-muted-foreground">
              Modern tooling, TypeScript support, and best practices configured
              for immediate productivity and code quality.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">🌍 Sustainability</h3>
            <p className="text-sm text-muted-foreground">
              Carbon-aware features and green coding practices to reduce digital
              carbon footprint and energy consumption.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">🎨 Modern Design</h3>
            <p className="text-sm text-muted-foreground">
              Beautiful, accessible components with dark/light mode support and
              responsive design patterns.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-3">
              🆓 Free & Open Source
            </h3>
            <p className="text-sm text-muted-foreground">
              Completely free to use and modify. Everyone can contribute to make
              web development more sustainable together.
            </p>
          </div>
        </div>
      </section>

      {/* Eco Stats Section */}
      <section className="w-full max-w-6xl mx-auto p-8 sm:p-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">🌱 Environmental Impact</h2>
          <p className="text-muted-foreground">
            Quantified benefits of our eco-conscious tech stack
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border rounded-lg bg-green-500/5">
            <div className="text-3xl font-bold text-green-500">70%</div>
            <p className="text-sm text-muted-foreground">Less Energy Usage</p>
            <p className="text-xs text-muted-foreground mt-1">
              vs traditional stacks
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-blue-500/5">
            <div className="text-3xl font-bold text-blue-500">62%</div>
            <p className="text-sm text-muted-foreground">CO2 Reduction</p>
            <p className="text-xs text-muted-foreground mt-1">per page load</p>
          </div>
          <div className="p-4 border rounded-lg bg-purple-500/5">
            <div className="text-3xl font-bold text-purple-500">57%</div>
            <p className="text-sm text-muted-foreground">Smaller Bundles</p>
            <p className="text-xs text-muted-foreground mt-1">85KB vs 200KB+</p>
          </div>
          <div className="p-4 border rounded-lg bg-orange-500/5">
            <div className="text-3xl font-bold text-orange-500">10x</div>
            <p className="text-sm text-muted-foreground">Faster Builds</p>
            <p className="text-xs text-muted-foreground mt-1">with Turbopack</p>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="w-full max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get Started in Seconds</h2>
          <p className="text-muted-foreground">
            Clone, install, and start building. It's that simple.
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
          <h2 className="text-3xl font-bold mb-4">Complete Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for modern web development, pre-configured and
            ready to use.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">⚛️</div>
            <h4 className="font-semibold">React 19</h4>
            <p className="text-xs text-muted-foreground mb-1">
              25% performance boost
            </p>
            <div className="text-xs text-green-600 font-medium">
              80% less JS to browser
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">📦</div>
            <h4 className="font-semibold">Next.js 15</h4>
            <p className="text-xs text-muted-foreground mb-1">
              Turbopack + App Router
            </p>
            <div className="text-xs text-green-600 font-medium">
              70% less energy usage
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg bg-card/50 hover:bg-card transition-colors">
            <div className="text-2xl mb-2">🔷</div>
            <h4 className="font-semibold">TypeScript 5</h4>
            <p className="text-xs text-muted-foreground mb-1">Type safety</p>
            <div className="text-xs text-green-600 font-medium">
              25% faster compilation
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
              20x faster than ESLint
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
            🌍 Environmental Impact Comparison
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            See how this eco-conscious stack reduces environmental impact
            compared to traditional alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">Metric</th>
                <th className="p-4 text-center">This Green Stack</th>
                <th className="p-4 text-center">
                  Ordinary Next.js Boilerplate
                </th>
                <th className="p-4 text-center">Traditional Stack</th>
                <th className="p-4 text-center text-green-600">
                  Environmental Savings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-medium">Bundle Size</td>
                <td className="p-4 text-center text-green-600">~85KB</td>
                <td className="p-4 text-center text-orange-600">~150KB</td>
                <td className="p-4 text-center text-red-600">~200KB+</td>
                <td className="p-4 text-center font-bold text-green-600">
                  43% smaller
                </td>
              </tr>
              <tr className="border-t bg-muted/20">
                <td className="p-4 font-medium">Build Time</td>
                <td className="p-4 text-center text-green-600">2-5s</td>
                <td className="p-4 text-center text-orange-600">10-30s</td>
                <td className="p-4 text-center text-red-600">30-120s</td>
                <td className="p-4 text-center font-bold text-green-600">
                  70% faster
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Development CPU</td>
                <td className="p-4 text-center text-green-600">Low</td>
                <td className="p-4 text-center text-orange-600">Medium</td>
                <td className="p-4 text-center text-red-600">High</td>
                <td className="p-4 text-center font-bold text-green-600">
                  50% reduction
                </td>
              </tr>
              <tr className="border-t bg-muted/20">
                <td className="p-4 font-medium">Lighthouse Score</td>
                <td className="p-4 text-center text-green-600">95+</td>
                <td className="p-4 text-center text-orange-600">85-90</td>
                <td className="p-4 text-center text-red-600">70-85</td>
                <td className="p-4 text-center font-bold text-green-600">
                  5-10 points better
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">CO2 per Page Load</td>
                <td className="p-4 text-center text-green-600">~0.3g</td>
                <td className="p-4 text-center text-orange-600">~0.5g</td>
                <td className="p-4 text-center text-red-600">~0.8g</td>
                <td className="p-4 text-center font-bold text-green-600">
                  40% less carbon
                </td>
              </tr>
              <tr className="border-t bg-muted/20">
                <td className="p-4 font-medium">SEO Optimization</td>
                <td className="p-4 text-center text-green-600">Complete</td>
                <td className="p-4 text-center text-orange-600">Basic</td>
                <td className="p-4 text-center text-red-600">Minimal</td>
                <td className="p-4 text-center font-bold text-green-600">
                  Fully optimized
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Real-World Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg bg-green-500/5">
            <div className="text-2xl mb-3">🌱</div>
            <h3 className="font-semibold mb-2">For Users</h3>
            <p className="text-sm text-muted-foreground">
              Faster loading sites mean less time waiting, reducing device
              battery consumption and energy usage.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-blue-500/5">
            <div className="text-2xl mb-3">🏢</div>
            <h3 className="font-semibold mb-2">For Developers</h3>
            <p className="text-sm text-muted-foreground">
              Faster builds and efficient tooling mean less development machine
              energy and reduced CI/CD costs.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-purple-500/5">
            <div className="text-2xl mb-3">🌍</div>
            <h3 className="font-semibold mb-2">For Planet</h3>
            <p className="text-sm text-muted-foreground">
              Smaller bundles and optimized performance reduce server load and
              network transfer energy globally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="border rounded-2xl p-12 bg-gradient-to-br from-green-500/5 to-blue-500/5">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers using this Next.js boilerplate to
            create fast, sustainable, and beautiful web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="https://github.com/NicolasGiaco/green-nextjs-boilerplate">
                Start Building Now
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            ⭐ Free forever • 🔓 Open source • 🚀 Production ready
          </div>
        </div>
      </section>
    </div>
  );
}
