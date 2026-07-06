import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { ProhorIcon } from "@/lib/icons";

export default function NotFound(): ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <ProhorIcon animate={true} className="size-24" />

        <div className="flex flex-col gap-2">
          <h1 className="text-balance text-4xl font-normal tracking-tight font-serif text-foreground">
            ৪০৪ - পাতাটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className="text-pretty text-muted-foreground text-sm font-sans max-w-md">
            দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা স্থানান্তরিত করা হয়েছে অথবা মুছে ফেলা হয়েছে।
          </p>
        </div>

        <Button asChild size="lg" className="mt-2">
          <Link href="/">হোমপেজে ফিরে যান</Link>
        </Button>
      </div>
    </main>
  );
}
