import { Lock, Send } from "@/components/icons";
import { getDictionary } from "@/lib/i18n";
import { MadeWithFooter } from "@/components/shared/made-with-footer";
import { Card, CardContent } from "@/components/ui/card";

export default async function DmcaPage() {
  const dict = await getDictionary();
  const d = dict.dmca;

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-[32px] pt-[32px]">
      <div className="flex flex-col w-full max-w-[480px] px-[16px] gap-[16px] items-center">
        <div className="flex flex-row items-center justify-center gap-[8px] w-full border-b border-border pb-[12px]">
          <Lock size={20} className="text-primary shrink-0" />
          <h1 className="text-[18px] font-bold tracking-tight text-foreground">
            {d.title}
          </h1>
        </div>

        <Card className="w-full rounded-[16px] border border-border bg-card p-[16px] flex flex-col gap-[16px]">
          <CardContent className="p-0 flex flex-col gap-[14px] text-[13px] font-sans text-muted-foreground leading-relaxed">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px] text-foreground font-semibold">
                <Lock size={14} className="text-primary shrink-0" />
                <span>{d.disclosureTitle}</span>
              </div>
              <p className="italic">{d.disclosureText}</p>
            </div>

            <div className="border-t border-border/50 pt-[12px] flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px] text-foreground font-semibold">
                <Send size={14} className="text-primary shrink-0" />
                <span>{d.whatWeDoTitle}</span>
              </div>
              <p>{d.whatWeDoText}</p>
            </div>

            <div className="border-t border-border/50 pt-[12px] flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px] text-foreground font-semibold">
                <Send size={14} className="text-primary shrink-0" />
                <span>{d.noticeTitle}</span>
              </div>
              <p>{d.noticeText}</p>
            </div>

            <div className="border-t border-border/50 pt-[12px] flex flex-col gap-[8px]">
              <div className="flex items-center gap-[6px] text-foreground font-semibold">
                <Lock size={14} className="text-primary shrink-0" />
                <span>{d.complianceTitle}</span>
              </div>
              <p>{d.complianceText}</p>
              <ul className="flex flex-col gap-[6px] pl-[4px]">
                {[
                  d.requirement1,
                  d.requirement2,
                  d.requirement3,
                  d.requirement4,
                  d.requirement5,
                  d.requirement6,
                ].map((req, idx) => (
                  <li key={idx} className="flex gap-[8px] items-start">
                    <span className="w-[4px] h-[4px] rounded-full bg-primary mt-[7px] shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border/50 pt-[12px] flex flex-col gap-[8px]">
              <div className="flex items-center gap-[6px] text-foreground font-semibold">
                <Send size={14} className="text-primary shrink-0" />
                <span>{d.contactTitle}</span>
              </div>
              <div className="flex flex-col gap-[4px] text-foreground font-medium pl-1">
                <p>
                  <span className="text-muted-foreground mr-[4px] font-normal">{d.emailLabel}</span>
                  <a
                    href="mailto:VAWZINEOFFICIEL@GMAIL.COM"
                    className="text-primary hover:underline"
                  >
                    VAWZINEOFFICIEL@GMAIL.COM
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground mr-[4px] font-normal">{d.adminLabel}</span>
                  <a
                    href="https://t.me/ILI_I003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @ILI_I003
                  </a>{" "}
                  <span className="text-xs text-muted-foreground font-normal">(ANONYMOUS)</span>
                </p>
              </div>
              <p className="text-[11px] italic text-muted-foreground pl-1">
                {d.responseTime}
              </p>
            </div>

            <div className="border-t border-border/50 pt-[12px] flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px] text-destructive font-semibold">
                <Lock size={14} className="text-destructive shrink-0" />
                <span>{d.disclaimerTitle}</span>
              </div>
              <p className="text-[12px] italic">{d.disclaimerText}</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-[11px] text-muted-foreground w-full">
          <p className="font-semibold">{d.allRightsReserved}</p>
        </div>
      </div>

      <MadeWithFooter
        madeWithText={dict.submit.madeWith}
        andText={dict.submit.and}
        className="gap-[12px] mt-auto lg:hidden pt-[32px] pb-[16px]"
      />
    </div>
  );
}
