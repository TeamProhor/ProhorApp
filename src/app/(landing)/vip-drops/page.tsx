import { getDictionary } from "@/lib/i18n";
import { MadeWithFooter } from "@/components/shared/made-with-footer";
import { ResourceRowCard } from "@/components/shared/resource-row-card";

export default async function VipDrops() {
  const dict = await getDictionary();
  const d = dict;

  const resources = [
    {
      id: "premium-dashboard",
      title: "Premium Admin Dashboard Layout",
      url: "https://t.me/ILI_I003",
      thumbnail: "/images/uploads/Thumb1.jpg",
      images: [
        "/images/uploads/Frame 1814106925.webp",
        "/images/uploads/Frame 1814106926.webp",
        "/images/uploads/Frame 1814106927.webp",
      ],
    },
    {
      id: "saas-landing-vip",
      title: "High-Converting SaaS Landing System",
      url: "https://t.me/ILI_I003",
      thumbnail: "/images/uploads/Thumb2.jpg",
      images: [
        "/images/uploads/Frame 1814106904.webp",
        "/images/uploads/Frame 1814106905.webp",
        "/images/uploads/Frame 1814106908.webp",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-[64px]">
      <h1 className="text-[32px] font-[600] font-sans tracking-tight text-foreground text-center my-[64px] max-w-[600px] leading-tight px-[16px]">
        {d.vipDrops.title}
      </h1>

      <div className="flex flex-col gap-[64px] w-full max-w-[1200px] px-[24px]">
        {resources.map((res) => (
          <ResourceRowCard
            key={res.id}
            resource={res}
            previewText={d.vipDrops.preview}
            downloadText={d.vipDrops.download}
          />
        ))}
      </div>

      <MadeWithFooter
        madeWithText={d.submit.madeWith}
        andText={d.submit.and}
        className="gap-[12px] mt-auto lg:hidden pt-[48px] pb-[32px]"
      />
    </div>
  );
}
