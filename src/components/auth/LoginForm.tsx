"use client";

import Link from "next/link";
import { useState } from "react";
import { ProhorIcon, Send } from "@/components/icons";
import { MadeWithFooter } from "@/components/shared/made-with-footer";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { LoginFormProps } from "@/types";

export default function LoginForm({ dict }: LoginFormProps) {
  const l = dict.login;
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[64px]">
      <div className="flex flex-col items-center justify-center gap-[48px] flex-1 w-full max-w-[400px] px-[24px]">
        <div className="flex flex-col items-center gap-8 w-full">
          <ProhorIcon className="size-12" />

          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-balance font-semibold text-3xl text-foreground">
              {l.title}
            </h1>
            <p className="text-pretty text-muted-foreground text-sm">
              {l.newHere}{" "}
              <Link className="text-foreground hover:underline" href="/">
                {l.signUpFree}
              </Link>
            </p>
          </div>

          {isSuccess ? (
            <div className="w-full flex flex-col gap-4 text-center">
              <p className="text-foreground text-sm font-medium">
                Check your inbox for a login link!
              </p>
              <Button
                className="w-full rounded-xl"
                variant="outline"
                onClick={() => {
                  setIsSuccess(false);
                  setEmail("");
                }}
              >
                Go back
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <Field>
                <Input
                  required
                  className="w-full rounded-xl bg-background"
                  placeholder="Your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </Field>
              <div className="flex flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full rounded-xl flex items-center justify-center gap-2"
                  size="lg"
                  disabled={isLoading}
                >
                  <Send className="size-4" />
                  {isLoading ? "Sending..." : l.sendMagicLink}
                </Button>
                <Button
                  type="button"
                  className="w-full text-muted-foreground text-sm"
                  variant="link"
                  disabled={isLoading}
                >
                  {l.usePassword}
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1" />
                <span className="text-muted-foreground text-sm">{l.or}</span>
                <Separator className="flex-1" />
              </div>

              <Button
                type="button"
                className="w-full rounded-xl"
                size="lg"
                variant="outline"
                disabled={isLoading}
              >
                {l.sso}
              </Button>
            </form>
          )}

          <p className="w-11/12 text-pretty text-center text-muted-foreground text-xs">
            {l.termsText1}{" "}
            <Link className="underline hover:text-foreground" href="/">
              {l.termsLink}
            </Link>{" "}
            {l.and}{" "}
            <Link className="underline hover:text-foreground" href="/">
              {l.privacyLink}
            </Link>
            {l.termsText2}
          </p>
        </div>
      </div>

      <MadeWithFooter
        madeWithText={dict.submit.madeWith}
        andText={dict.submit.and}
        className="gap-[12px] mt-auto lg:hidden pt-[48px] pb-[32px]"
      />
    </div>
  );
}
