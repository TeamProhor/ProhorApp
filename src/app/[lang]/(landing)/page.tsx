import Link from "next/link";
import type { ReactElement } from "react";
import { LanguageToggler } from "@/components/language-toggler";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";
import { ProhorIcon } from "@/lib/icons";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <header className="w-full p-6 flex justify-between items-center z-10 absolute top-0 left-0">
        <nav aria-label="Main Navigation">
          <ul className="flex gap-6 text-sm font-medium text-muted-foreground">
            <li>
              <Link href={`/${resolvedParams.lang}`}>{dict.page.nav.home}</Link>
            </li>
            <li>
              <Link href={`/${resolvedParams.lang}/features`}>
                {dict.page.nav.features}
              </Link>
            </li>
            <li>
              <Link href={`/${resolvedParams.lang}/pricing`}>
                {dict.page.nav.pricing}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggler />
          <ThemeToggler variant="circle" />
        </div>
      </header>

      <section className="flex-grow flex flex-col items-center justify-center px-6 mt-20 pt-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <ProhorIcon animate={true} className="size-32" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-normal tracking-tight font-serif text-foreground">
              {dict.page.hero.title}
            </h1>
            <p className="text-muted-foreground text-sm font-sans max-w-lg mx-auto">
              {dict.page.hero.subtitle}
            </p>
          </div>
          <Button asChild size="lg" className="mt-2">
            <Link href={`/${resolvedParams.lang}/login`}>
              {dict.page.hero.login}
            </Link>
          </Button>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-border">
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-serif text-foreground">
            {dict.page.stats.speed.value}
          </span>
          <span className="text-sm text-muted-foreground">
            {dict.page.stats.speed.label}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-serif text-foreground">
            {dict.page.stats.lighthouse.value}
          </span>
          <span className="text-sm text-muted-foreground">
            {dict.page.stats.lighthouse.label}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={dict.page.stats.stack.citationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-serif text-foreground hover:underline decoration-muted-foreground underline-offset-4"
          >
            {dict.page.stats.stack.value}
          </Link>
          <span className="text-sm text-muted-foreground">
            {dict.page.stats.stack.label}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={dict.page.stats.db.citationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-serif text-foreground hover:underline decoration-muted-foreground underline-offset-4"
          >
            {dict.page.stats.db.value}
          </Link>
          <span className="text-sm text-muted-foreground">
            {dict.page.stats.db.label}
          </span>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-serif mb-6 text-foreground">
          {dict.page.faq.title}
        </h2>
        <div className="flex flex-col gap-6">
          {dict.jsonLd.faq.map((item) => (
            <article key={item.question}>
              <h3 className="text-lg font-medium">{item.question}</h3>
              <p className="text-muted-foreground mt-2">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
