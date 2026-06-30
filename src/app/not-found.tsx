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
            Page not found
          </h1>
          <p className="text-pretty text-muted-foreground text-sm font-sans">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        <Button
          asChild
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/95 h-11 px-8 w-fit min-w-[180px] justify-center transition-all duration-200"
          size="lg"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
