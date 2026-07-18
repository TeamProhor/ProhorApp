"use client";
import { MadeWithFooter } from "@/components/shared/made-with-footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import type { SubmitFormProps } from "@/types";

export default function SubmitForm({ d }: SubmitFormProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[64px]">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-[48px] flex-1 w-full max-w-[600px] px-[24px]">
        <h1
          className="text-center text-[32px] font-[600] font-sans tracking-tight text-foreground leading-tight"
          dangerouslySetInnerHTML={{
            __html: d.title.replace("to ", 'to<br class="hidden md:block" /> '),
          }}
        />

        <form className="w-full">
          <FieldGroup className="gap-[24px]">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-[16px] w-full">
              <Field>
                <FieldLabel
                  htmlFor="name"
                  className="text-foreground font-[400] text-[16px]"
                >
                  {d.name}
                </FieldLabel>
                <Input
                  id="name"
                  placeholder="Kole"
                  className="bg-background border-border rounded-[8px] focus-visible:ring-ring text-[16px] placeholder:text-muted-foreground"
                />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-foreground font-[400] text-[16px]"
                >
                  {d.email}
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="panic@thedis.co"
                  className="bg-background border-border rounded-[8px] focus-visible:ring-ring text-[16px] placeholder:text-muted-foreground"
                />
              </Field>
            </div>

            {/* Link Input */}
            <Field>
              <FieldLabel
                htmlFor="link"
                className="text-foreground font-[400] text-[16px]"
              >
                {d.link}
              </FieldLabel>
              <Input
                id="link"
                type="url"
                placeholder="https://yoursite.com"
                className="bg-background border-border rounded-[8px] focus-visible:ring-ring text-[16px] placeholder:text-muted-foreground"
              />
              <FieldDescription className="text-muted-foreground text-[14px]">
                {d.linkDesc}
              </FieldDescription>
            </Field>

            {/* Consent Checkbox */}
            <Field
              orientation="horizontal"
              className="items-start gap-[12px] mt-[8px]"
            >
              <Checkbox
                id="consent"
                defaultChecked
                className="mt-[2px] rounded-[4px] border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <FieldContent>
                <FieldLabel
                  htmlFor="consent"
                  className="text-[14px] font-[400] text-muted-foreground leading-tight cursor-pointer"
                  dangerouslySetInnerHTML={{
                    __html: d.consent.replace(
                      "be ",
                      'be<br class="hidden md:block" />',
                    ),
                  }}
                />
              </FieldContent>
            </Field>

            {/* Submit Button */}
            <div className="w-full mt-[16px]">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-[8px] py-[24px] text-[16px] font-[400]"
              >
                {d.submitBtn}
              </Button>
            </div>
          </FieldGroup>
        </form>
      </div>

      {/* Footer / made with */}
      <MadeWithFooter
        madeWithText={d.madeWith}
        andText={d.and}
        className="gap-[12px] mt-auto lg:hidden pt-[48px]"
      />
    </div>
  );
}
