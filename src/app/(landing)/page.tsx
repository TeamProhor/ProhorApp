import type { ReactElement } from "react";
import Link from "next/link";
import { ThemeToggler } from "@/components/theme-toggler";
import { ProhorIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";

export default function Home(): ReactElement {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-6">
      <div className="absolute top-6 right-6">
        <ThemeToggler variant="circle" />
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <ProhorIcon animate={true} className="size-32" />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-normal tracking-tight font-serif text-foreground">
            প্রহর নেক্সট.জেএস স্টার্টার কিট
          </h1>
          <p className="text-muted-foreground text-sm font-sans">
            একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য ডেভেলপার স্টার্টার কিট
          </p>
        </div>
        <Button asChild size="lg" className="mt-2">
          <Link href="/login">লগইন করুন</Link>
        </Button>
      </div>
    </main>
  );
}
