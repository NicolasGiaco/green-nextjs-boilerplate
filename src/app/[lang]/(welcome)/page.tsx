import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-16">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <section className="text-center">
          <h1 className="text-2xl/snug font-bold tracking-tighter sm:text-5xl">
            The first eco-conscious Next.js boilerplate optimized for{" "}
            <span className="text-green-500">planet</span> and{" "}
            <span className="text-blue-500">performance</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
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
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
