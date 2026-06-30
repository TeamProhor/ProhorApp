import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { LoginFormProps } from "@/types";

export default function LoginForm(_props: Readonly<LoginFormProps>) {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-background">
      <Card className="w-full max-w-sm rounded-xl px-6 py-10 pt-14 border border-border bg-card text-card-foreground">
        <CardContent>
          <div className="flex flex-col items-center gap-8">
            <Logo className="size-12" />

            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-balance text-3xl font-normal tracking-tight font-serif text-foreground">
                আবারো স্বাগতম!
              </h1>
              <p className="text-pretty text-muted-foreground text-sm font-sans">
                এখানে প্রথমবার?{" "}
                <a
                  href="/#"
                  className="text-primary hover:underline font-medium"
                >
                  বিনামূল্যে সাইন আপ করুন
                </a>
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <Input
                type="email"
                placeholder="আপনার ইমেইল"
                className="w-full"
              />
              <div className="flex flex-col gap-2">
                <Button
                  className="w-full text-primary-foreground bg-primary hover:bg-primary/95"
                  size="lg"
                >
                  আমাকে ম্যাজিক লিঙ্ক পাঠান
                </Button>
                <Button
                  variant="link"
                  className="w-full text-sm text-muted-foreground hover:text-foreground"
                >
                  পাসওয়ার্ড ব্যবহার করে সাইন ইন করুন
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">অথবা</span>
                <Separator className="flex-1 bg-border" />
              </div>

              <Button
                variant="outline"
                className="w-full border-border hover:bg-muted"
                size="lg"
              >
                সিঙ্গেল সাইন-অন (SSO)
              </Button>
            </div>

            <p className="text-pretty text-center text-xs w-11/12 text-muted-foreground font-sans">
              আপনি স্বীকার করছেন যে আপনি আমাদের{" "}
              <a href="/#" className="underline hover:text-foreground">
                সেবাশর্তাবলী
              </a>{" "}
              এবং{" "}
              <a href="/#" className="underline hover:text-foreground">
                গোপনীয়তা नीति
              </a>{" "}
              পড়েছেন এবং সম্মত হয়েছেন।
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
