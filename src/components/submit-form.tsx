"use client";

import Image from "next/image";
import { useState } from "react";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import type { SubmitFormProps } from "@/types";

export default function SubmitForm({ d }: SubmitFormProps) {
  const [linkType, setLinkType] = useState<"figma" | "web">("web");

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
                  className="bg-white border-border rounded-[8px] focus-visible:ring-ring text-[16px] placeholder:text-muted-foreground"
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
                  className="bg-white border-border rounded-[8px] focus-visible:ring-ring text-[16px] placeholder:text-muted-foreground"
                />
              </Field>
            </div>

            {/* Toggle & Link */}
            <Field>
              <ToggleGroup
                type="single"
                value={linkType}
                onValueChange={(val) => {
                  if (val) setLinkType(val as "figma" | "web");
                }}
                className="w-full bg-muted rounded-[8px] p-[4px] gap-[4px] justify-start"
              >
                <ToggleGroupItem
                  value="figma"
                  className="flex-1 rounded-[6px] data-[state=on]:bg-accent data-[state=on]:text-foreground text-muted-foreground font-[400]"
                >
                  {d.figmaLink}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="web"
                  className="flex-1 rounded-[6px] data-[state=on]:bg-accent data-[state=on]:text-foreground text-muted-foreground font-[400]"
                >
                  {d.webLink}
                </ToggleGroupItem>
              </ToggleGroup>

              <Input
                id="link"
                type="url"
                placeholder="https://yoursite.com"
                className="bg-white border-border rounded-[8px] focus-visible:ring-ring text-[16px] placeholder:text-muted-foreground mt-[8px]"
              />
              <FieldDescription className="text-muted-foreground text-[14px]">
                {linkType === "figma" ? d.figmaDesc : d.webDesc}
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

      {/* Footer */}
      <div className="flex flex-row items-center justify-center gap-[2px] pb-[32px] w-full mt-auto">
        <h3 className="text-muted-foreground whitespace-nowrap text-[16px] font-[400] font-sans">
          {d.madeWith}
        </h3>
        <Image
          src="/icons/heart.svg"
          alt="heart"
          width={24}
          height={24}
          className="shrink-0"
        />
        <h3 className="text-muted-foreground whitespace-nowrap text-[16px] font-[400] font-sans">
          {d.and}
        </h3>
        <Image
          src="/icons/coffee.svg"
          alt="coffee"
          width={24}
          height={24}
          className="shrink-0"
        />
        <h3 className="text-muted-foreground whitespace-nowrap text-[16px] font-[400] font-sans">
          —
        </h3>
        <h4 className="text-muted-foreground whitespace-nowrap text-[14px] font-[400] font-sans">
          2026
        </h4>
      </div>
    </div>
  );
}
