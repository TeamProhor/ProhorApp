"use client";

import { ProhorIcon, Send } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { LoginFormProps } from "@/types";

export default function LoginForm({ dict }: LoginFormProps) {
  const l = dict.login;

  return (
    <div className="flex min-h-full items-center justify-center py-[64px] md:py-[96px] px-[24px]">
      <Card className="w-full max-w-sm rounded-4xl px-6 py-10 pt-14 shadow-2xs">
        <CardContent>
          <div className="flex flex-col items-center gap-8">
            <ProhorIcon className="size-12" />

            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-balance font-semibold text-3xl text-foreground">
                {l.title}
              </h1>
              <p className="text-pretty text-muted-foreground text-sm">
                {l.newHere}{" "}
                <a className="text-foreground hover:underline" href="/">
                  {l.signUpFree}
                </a>
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <Input
                className="w-full rounded-xl"
                placeholder="Your email"
                type="email"
              />
              <div className="flex flex-col gap-2">
                <Button
                  className="w-full rounded-xl flex items-center justify-center gap-2"
                  size="lg"
                >
                  <Send className="size-4" />
                  {l.sendMagicLink}
                </Button>
                <Button
                  className="w-full text-muted-foreground text-sm"
                  variant="link"
                >
                  {l.usePassword}
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1" />
                <span className="text-muted-foreground text-sm">{l.or}</span>
                <Separator className="flex-1" />
              </div>

              <Button className="w-full rounded-xl" size="lg" variant="outline">
                {l.sso}
              </Button>
            </div>

            <p className="w-11/12 text-pretty text-center text-muted-foreground text-xs">
              {l.termsText1}{" "}
              <a className="underline hover:text-foreground" href="/">
                {l.termsLink}
              </a>{" "}
              {l.and}{" "}
              <a className="underline hover:text-foreground" href="/">
                {l.privacyLink}
              </a>
              {l.termsText2}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
