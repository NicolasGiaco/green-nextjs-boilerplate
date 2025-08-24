"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n, type Locale } from "@/config/i18n-config";

const localeNames = {
  en: "English",
  fr: "Français",
} as const;

const localeFlags = {
  en: "🇺🇸",
  fr: "🇫🇷",
} as const;

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  
  const currentLocale = params?.lang as Locale || i18n.defaultLocale;

  const createLocalizedPath = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    
    const segments = pathname.split('/').filter(Boolean);
    
    if (i18n.locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    
    return `/${segments.join('/')}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={createLocalizedPath(locale)}
              className={`flex items-center gap-2 ${
                currentLocale === locale ? "bg-accent" : ""
              }`}
            >
              <span className="text-base">{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}