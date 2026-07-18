import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { MadeWithFooter } from "@/components/shared/made-with-footer";
import { AppBadgeChip } from "@/components/shared/app-badge-chip";
import { DownloadMacButton } from "@/components/shared/download-mac-button";

export default async function Wins() {
  const dict = await getDictionary();
  const d = dict.wins;

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-[64px] pb-[48px] px-[16px] w-full max-w-[1400px]">
        {/* Chip */}
        <AppBadgeChip
          iconSrc="/images/stash/mini-icon.webp"
          iconAlt="stash icon"
          text={dict.sidebar.wins}
          className="mb-[8px]"
        />

        {/* Heading */}
        <h1
          className="text-center text-[40px] leading-[115%] font-[600] font-sans tracking-tight text-foreground mb-[12px]"
          dangerouslySetInnerHTML={{
            __html: d.heroTitle.replace(". ", ".<br/>"),
          }}
        />

        <h3
          className="text-center text-[16px] font-[400] font-sans text-foreground mb-[32px]"
          dangerouslySetInnerHTML={{
            __html: d.heroSubtitle.replace(". Search", ". Search<br/>"),
          }}
        />

        {/* Download Button */}
        <DownloadMacButton
          text={d.downloadMac}
          className="mb-[64px]"
        />

        {/* App Dock Outer (Mockup) */}
        <div className="relative w-full max-w-[800px] flex justify-center mb-[64px]">
          <div className="absolute top-[-30px] flex justify-center w-full">
            <span className="text-foreground text-[16px] font-[400] font-sans">
              {d.title}
            </span>
          </div>
          <div className="flex flex-row items-end gap-[16px] bg-background/80 backdrop-blur-md border border-border rounded-[24px] p-[16px] shadow-lg">
            <div className="w-[48px] h-[48px] bg-accent rounded-[12px]"></div>
            <div className="w-[48px] h-[48px] bg-accent rounded-[12px]"></div>
            <Image
              src="/images/stash/stash-icon.webp"
              alt="stash app"
              width={64}
              height={64}
              className="-mb-[8px] hover:-translate-y-2 transition-transform duration-300"
            />
            <div className="w-[48px] h-[48px] bg-accent rounded-[12px]"></div>
            <div className="w-[48px] h-[48px] bg-accent rounded-[12px]"></div>
          </div>
        </div>
      </div>

      {/* Feature Slider Section */}
      <div className="flex flex-row gap-[24px] px-[24px] w-full overflow-x-auto pb-[64px] no-scrollbar snap-x snap-mandatory">
        {/* Save */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] rounded-[24px] overflow-hidden bg-[#1A1A1A] snap-center">
          <div className="absolute z-10 p-[24px]">
            <h3 className="text-primary-foreground text-[16px] font-[600] font-sans tracking-tight">
              {d.step1Title}
            </h3>
            <h4 className="text-muted-foreground text-[14px] font-[400] font-sans">
              {d.step1Desc}
            </h4>
          </div>
          <video
            aria-label={d.step1Title}
            src="/images/stash/save.mp4"
            poster="/images/stash/save-thumbnail.jpg"
            className="w-full h-full object-cover object-top-right opacity-80"
            muted
            playsInline
            loop
            autoPlay
          />
        </div>

        {/* Search */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] rounded-[24px] overflow-hidden bg-[#1A1A1A] snap-center">
          <div className="absolute z-10 p-[24px]">
            <h3 className="text-primary-foreground text-[16px] font-[600] font-sans tracking-tight">
              {d.step2Title}
            </h3>
            <h4 className="text-muted-foreground text-[14px] font-[400] font-sans">
              {d.step2Desc}
            </h4>
          </div>
          <video
            aria-label={d.step2Title}
            src="/images/stash/search.mp4"
            poster="/images/stash/search-thumbnail.jpg"
            className="w-full h-full object-cover opacity-80"
            muted
            playsInline
            loop
            autoPlay
          />
        </div>

        {/* Find */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] rounded-[24px] overflow-hidden bg-[#1A1A1A] snap-center">
          <div className="absolute z-10 p-[24px]">
            <h3 className="text-primary-foreground text-[16px] font-[600] font-sans tracking-tight">
              {d.step3Title}
            </h3>
            <h4 className="text-muted-foreground text-[14px] font-[400] font-sans">
              {d.step3Desc}
            </h4>
          </div>
          <video
            aria-label={d.step3Title}
            src="/images/stash/find.mp4"
            poster="/images/stash/find-thumbnail.jpg"
            className="w-full h-full object-cover object-top-right opacity-80"
            muted
            playsInline
            loop
            autoPlay
          />
        </div>
      </div>

      {/* Grid Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full px-[24px] pb-[64px] max-w-[1200px]">
        <div className="col-span-1 md:col-span-2 bg-muted rounded-[24px] p-[32px] flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
          <div className="z-10 max-w-[400px]">
            <h1 className="text-[28px] font-[600] font-sans tracking-tight text-foreground mb-[12px]">
              {d.grid1Title}
            </h1>
            <h4 className="text-[14px] font-[400] font-sans text-foreground">
              {d.grid1Desc}
            </h4>
          </div>
          <Image
            src="/images/stash/search.webp"
            alt="Search by meaning"
            width={600}
            height={400}
            className="mt-[24px] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-[80%] md:w-[50%] h-auto"
            style={{ height: "auto" }}
          />
        </div>

        <div className="bg-muted rounded-[24px] p-[32px] flex flex-col items-center text-center">
          <h1 className="text-[28px] font-[600] font-sans tracking-tight text-foreground mb-[12px]">
            {d.grid2Title}
          </h1>
          <h4 className="text-[14px] font-[400] font-sans text-foreground mb-[24px]">
            {d.grid2Desc}
          </h4>
          <Image
            src="/images/stash/blazing-fast.webp"
            alt="Blazing fast"
            width={400}
            height={300}
            className="w-[80%] h-auto"
            style={{ height: "auto" }}
          />
        </div>

        <div className="bg-muted rounded-[24px] p-[32px] flex flex-col items-center text-center">
          <h1 className="text-[28px] font-[600] font-sans tracking-tight text-foreground mb-[12px]">
            {d.grid3Title}
          </h1>
          <h4 className="text-[14px] font-[400] font-sans text-foreground mb-[24px]">
            {d.grid3Desc}
          </h4>
          <Image
            src="/images/stash/privacy.webp"
            alt="Privacy"
            width={400}
            height={300}
            className="w-[80%] h-auto"
            style={{ height: "auto" }}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center py-[64px] px-[24px] text-center">
        <AppBadgeChip
          iconSrc="/images/stash/mini-icon.webp"
          iconAlt="stash icon"
          text={dict.sidebar.wins}
          className="mb-[16px]"
        />
        <h1 className="text-[32px] font-[600] font-sans tracking-tight text-foreground mb-[8px]">
          {d.ctaTitle}
        </h1>
        <h3 className="text-[16px] font-[400] font-sans text-foreground mb-[32px]">
          {d.ctaSubtitle}
        </h3>
        <DownloadMacButton
          text={d.downloadMac}
        />
      </div>

      {/* Footer / made with */}
      <MadeWithFooter
        madeWithText={dict.submit.madeWith}
        andText={dict.submit.and}
        className="gap-[12px] mt-auto lg:hidden pt-[48px]"
      />
    </div>
  );
}
