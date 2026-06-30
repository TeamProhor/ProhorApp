"use client";

import { useReducer } from "react";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { GeneralTabProps } from "@/types";

interface GeneralState {
  fullName: string;
  displayName: string;
  workDesc: string;
  instructions: string;
  chatFont: string;
  voiceLang: string;
  voiceStyle: string;
  voiceSpeed: string;
}

type GeneralAction = {
  field: keyof GeneralState;
  value: string;
};

function generalReducer(
  state: GeneralState,
  action: GeneralAction,
): GeneralState {
  return { ...state, [action.field]: action.value };
}

const INITIAL_STATE: GeneralState = {
  fullName: "FrostFoe",
  displayName: "FrostFoe",
  workDesc: "developer",
  instructions: "",
  chatFont: "serif",
  voiceLang: "en",
  voiceStyle: "buttery",
  voiceSpeed: "normal",
};

export function GeneralTab(_props: Readonly<GeneralTabProps>) {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(generalReducer, INITIAL_STATE);

  function set(field: keyof GeneralState) {
    return (value: string) => dispatch({ field, value });
  }

  return (
    <div className="flex flex-col gap-8 py-2 font-sans text-sm max-w-2xl px-2 md:px-0">
      <section className="flex flex-col gap-4 border-b border-border/40 pb-6">
        <h3 className="text-base font-semibold text-foreground">
          {t("settings.general.profile")}
        </h3>
        <div className="flex flex-col gap-5">
          <Field
            orientation="horizontal"
            className="w-full flex items-center justify-between py-2.5 border-b border-border/10 flex-row gap-4"
          >
            <FieldLabel className="font-medium text-foreground">
              {t("settings.general.avatar")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center justify-end">
              <button
                type="button"
                className="rounded-full outline-none focus-visible:shadow-focus border-0 bg-transparent p-0 cursor-pointer"
              >
                <Avatar className="size-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
                    F
                  </AvatarFallback>
                </Avatar>
              </button>
            </FieldContent>
          </Field>

          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="fullname-input"
              className="font-medium text-foreground"
            >
              {t("settings.general.fullName")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Input
                id="fullname-input"
                value={state.fullName}
                onChange={(e) => set("fullName")(e.target.value)}
                className="w-full md:w-56 h-9"
              />
            </FieldContent>
          </Field>

          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="displayname-input"
              className="font-medium text-foreground"
            >
              {t("settings.general.callYou")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Input
                id="displayname-input"
                value={state.displayName}
                onChange={(e) => set("displayName")(e.target.value)}
                className="w-full md:w-56 h-9"
              />
            </FieldContent>
          </Field>

          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="work-select"
              className="font-medium text-foreground"
            >
              {t("settings.general.describeWork")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Select value={state.workDesc} onValueChange={set("workDesc")}>
                <SelectTrigger id="work-select" className="w-full md:w-56 h-9">
                  <SelectValue
                    placeholder={t("settings.general.workPlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border">
                  <SelectItem value="developer">
                    {t("settings.general.workDeveloper")}
                  </SelectItem>
                  <SelectItem value="designer">
                    {t("settings.general.workDesigner")}
                  </SelectItem>
                  <SelectItem value="manager">
                    {t("settings.general.workManager")}
                  </SelectItem>
                  <SelectItem value="other">
                    {t("settings.general.workOther")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>

          <Field className="flex flex-col gap-2 py-2">
            <FieldLabel
              htmlFor="instructions-area"
              className="font-medium text-foreground"
            >
              {t("settings.general.instructions")}
            </FieldLabel>
            <FieldDescription className="text-xs text-muted-foreground -mt-1">
              {t("settings.general.instructionsDesc")}
            </FieldDescription>
            <FieldContent>
              <Textarea
                id="instructions-area"
                rows={3}
                placeholder="e.g. ask clarifying questions before giving detailed answers, I primarily code in Python"
                value={state.instructions}
                onChange={(e) => set("instructions")(e.target.value)}
                className="w-full resize-none min-h-[5.5rem] mt-1"
              />
            </FieldContent>
          </Field>
        </div>
      </section>

      <section className="flex flex-col gap-4 border-b border-border/40 pb-6">
        <h3 className="text-base font-semibold text-foreground">
          {t("settings.general.preferences")}
        </h3>
        <div className="flex flex-col gap-5">
          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="font-select"
              className="font-medium text-foreground"
            >
              {t("settings.general.chatFont")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Select value={state.chatFont} onValueChange={set("chatFont")}>
                <SelectTrigger id="font-select" className="w-full md:w-56 h-9">
                  <SelectValue
                    placeholder={t("settings.general.fontPlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border">
                  <SelectItem value="serif">
                    {t("settings.general.fontSerif")}
                  </SelectItem>
                  <SelectItem value="sans">
                    {t("settings.general.fontSans")}
                  </SelectItem>
                  <SelectItem value="mono">
                    {t("settings.general.fontMono")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>
        </div>
      </section>

      <section className="flex flex-col gap-4 pb-6">
        <h3 className="text-base font-semibold text-foreground">
          {t("settings.general.voice")}
        </h3>
        <div className="flex flex-col gap-5">
          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="voicelang-select"
              className="font-medium text-foreground"
            >
              {t("settings.general.language")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Select value={state.voiceLang} onValueChange={set("voiceLang")}>
                <SelectTrigger
                  id="voicelang-select"
                  className="w-full md:w-56 h-9"
                >
                  <SelectValue
                    placeholder={t("settings.general.fontPlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border">
                  <SelectItem value="en">
                    {t("settings.general.voiceLangEn")}
                  </SelectItem>
                  <SelectItem value="bn">
                    {t("settings.general.voiceLangBn")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>

          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="voicestyle-select"
              className="font-medium text-foreground"
            >
              {t("settings.general.style")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Select
                value={state.voiceStyle}
                onValueChange={set("voiceStyle")}
              >
                <SelectTrigger
                  id="voicestyle-select"
                  className="w-full md:w-56 h-9"
                >
                  <SelectValue
                    placeholder={t("settings.general.voiceStylePlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border">
                  <SelectItem value="buttery">
                    {t("settings.general.voiceStyleButtery")}
                  </SelectItem>
                  <SelectItem value="warm">
                    {t("settings.general.voiceStyleWarm")}
                  </SelectItem>
                  <SelectItem value="neutral">
                    {t("settings.general.voiceStyleNeutral")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>

          <Field
            orientation="responsive"
            className="justify-between md:items-center py-2.5 border-b border-border/10 flex-col md:flex-row gap-2 md:gap-4"
          >
            <FieldLabel
              htmlFor="voicespeed-select"
              className="font-medium text-foreground"
            >
              {t("settings.general.speed")}
            </FieldLabel>
            <FieldContent className="flex shrink-0 items-center md:justify-end w-full md:w-auto">
              <Select
                value={state.voiceSpeed}
                onValueChange={set("voiceSpeed")}
              >
                <SelectTrigger
                  id="voicespeed-select"
                  className="w-full md:w-56 h-9"
                >
                  <SelectValue
                    placeholder={t("settings.general.voiceSpeedPlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border">
                  <SelectItem value="slow">
                    {t("settings.general.voiceSpeedSlow")}
                  </SelectItem>
                  <SelectItem value="normal">
                    {t("settings.general.voiceSpeedNormal")}
                  </SelectItem>
                  <SelectItem value="fast">
                    {t("settings.general.voiceSpeedFast")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>
        </div>
      </section>
    </div>
  );
}
