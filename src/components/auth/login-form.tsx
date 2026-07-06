"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ProhorIcon } from "@/lib/icons";
import type { LoginFormProps } from "@/types";

export default function LoginForm(
  _props: Readonly<LoginFormProps>,
): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-background">
      <Card className="w-full max-w-sm rounded-xl px-6 py-10 border bg-card text-card-foreground">
        <CardContent>
          <div className="flex flex-col items-center gap-8">
            <ProhorIcon animate={true} className="size-12" />

            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-balance text-3xl font-normal tracking-tight font-serif text-foreground">
                আবার স্বাগতম
              </h1>
              <p className="text-pretty text-muted-foreground text-sm font-sans">
                এখানে নতুন?{" "}
                <Link
                  href="/#"
                  className="text-primary hover:underline font-medium"
                >
                  বিনামূল্যে সাইন আপ করুন
                </Link>
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <Input
                type="email"
                placeholder="name@company.com"
                className="w-full"
              />
              <div className="flex flex-col gap-2">
                <Button className="w-full" size="lg">
                  ম্যাজিক লিংক পাঠান
                </Button>
                <Button
                  variant="link"
                  className="w-full text-sm text-muted-foreground hover:text-foreground"
                >
                  পাসওয়ার্ড ব্যবহার করুন
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">অথবা</span>
                <Separator className="flex-1 bg-border" />
              </div>

              <Button variant="outline" className="w-full" size="lg">
                এসএসও (SSO) দিয়ে লগইন করুন
              </Button>
            </div>

            <p className="text-pretty text-center text-xs w-11/12 text-muted-foreground font-sans">
              চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের{" "}
              <Link href="/#" className="underline hover:text-foreground">
                সেবার শর্তাবলী
              </Link>{" "}
              এবং{" "}
              <Link href="/#" className="underline hover:text-foreground">
                গোপনীয়তা নীতি
              </Link>{" "}
              এর সাথে সম্মত হচ্ছেন।
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
