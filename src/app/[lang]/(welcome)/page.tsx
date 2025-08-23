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
    </div>
  );
}
