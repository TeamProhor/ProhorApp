import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-6 py-12 text-center">
      <div className="flex flex-col items-center gap-8 max-w-md">
        <Logo className="size-16 text-primary" />

        <div className="flex flex-col gap-3">
          <h1 className="text-balance text-4xl font-normal tracking-tight font-serif text-foreground">
            পৃষ্ঠাটি পাওয়া যায়নি
          </h1>
          <p className="text-pretty text-muted-foreground text-sm font-sans">
            আপনি যে পৃষ্ঠাটি খুঁজছেন তা হয়তো সরানো হয়েছে বা এটি এখন আর উপলব্ধ নেই।
          </p>
        </div>

        <Button
          asChild
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/95"
          size="lg"
        >
          <Link href="/">হোমে ফিরে যান</Link>
        </Button>
      </div>
    </div>
  );
}
