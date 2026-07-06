"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ProhorIcon } from "@/lib/icons";
import type { LoginFormProps } from "@/types";

export default function LoginForm({
  dict,
}: Readonly<LoginFormProps>): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-background">
      <Card className="w-full max-w-sm rounded-xl px-6 py-10 border bg-card text-card-foreground">
        <CardContent>
          <div className="flex flex-col items-center gap-8">
            <ProhorIcon animate={true} className="size-12" />

            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-balance text-3xl font-normal tracking-tight font-serif text-foreground">
                {dict.login.title}
              </h1>
              <p className="text-pretty text-muted-foreground text-sm font-sans">
                {dict.login.newHere}{" "}
                <Link
                  href="/#"
                  className="text-primary hover:underline font-medium"
                >
                  {dict.login.signUpFree}
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
                  {dict.login.sendMagicLink}
                </Button>
                <Button
                  variant="link"
                  className="w-full text-sm text-muted-foreground hover:text-foreground"
                >
                  {dict.login.usePassword}
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">
                  {dict.login.or}
                </span>
                <Separator className="flex-1 bg-border" />
              </div>

              <Button variant="outline" className="w-full" size="lg">
                {dict.login.sso}
              </Button>
            </div>

            <p className="text-pretty text-center text-xs w-11/12 text-muted-foreground font-sans">
              {dict.login.termsText1}{" "}
              <Link href="/#" className="underline hover:text-foreground">
                {dict.login.termsLink}
              </Link>{" "}
              {dict.login.and}{" "}
              <Link href="/#" className="underline hover:text-foreground">
                {dict.login.privacyLink}
              </Link>
              {dict.login.termsText2}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
