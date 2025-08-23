"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";
import { Leaf } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-12 ">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              <Leaf className="h-5 w-5 text-green-500 inline-block mr-2" />
              Green Next.js Boilerplate
            </span>
          </Link>
          {/* <nav className="flex items-center gap-6 text-sm">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/green"
            >
              Green
            </Link>
          </nav> */}
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex md:hidden">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="font-bold">Green Next.js</span>
              </Link>
            </nav>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="https://github.com/NicolasGiaco/green-nextjs-boilerplate">
              <Image
                width={24}
                height={24}
                className="dark:invert"
                src="/assets/icons/github.svg"
                alt="GitHub"
              />
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
