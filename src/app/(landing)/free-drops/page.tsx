import { MadeWithFooter } from "@/components/shared/made-with-footer";
import { ResourceRowCard } from "@/components/shared/resource-row-card";
import { getDictionary } from "@/lib/i18n";

export default async function FreeDrops() {
  const dict = await getDictionary();
  const d = dict;

  const resources = [
    {
      id: "dashboard-flaws",
      title: "Dashboard Flaws",
      url: "https://youtu.be/Ksx9C2-3yMo",
      thumbnail: "/images/uploads/Thumb1.jpg",
      images: [
        "/images/uploads/Frame 1814106925.webp",
        "/images/uploads/Frame 1814106926.webp",
        "/images/uploads/Frame 1814106927.webp",
        "/images/uploads/Frame 1814106928.webp",
        "/images/uploads/Frame 1814106929.webp",
      ],
    },
    {
      id: "4-levels-of-saas",
      title: "4 Levels of SaaS",
      url: "https://youtu.be/eMMiLeo_UGI",
      thumbnail: "/images/uploads/Thumb2.jpg",
      images: [
        "/images/uploads/Frame 1814106904.webp",
        "/images/uploads/Frame 1814106905.webp",
        "/images/uploads/Frame 1814106908.webp",
        "/images/uploads/Screen 596.webp",
        "/images/uploads/Frame 1814106907.webp",
        "/images/uploads/Frame 1814106906.webp",
      ],
    },
    {
      id: "mobile-app-ui",
      title: "Mobile App UI",
      url: "https://youtu.be/Gfsd8NNuD9g",
      thumbnail: "/images/uploads/First App thumb1.jpg",
      images: [
        "/images/uploads/Screen 575.png",
        "/images/uploads/Screen 576.png",
        "/images/uploads/Screen 578.png",
        "/images/uploads/Screen 577.png",
        "/images/uploads/Screen 574.png",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-[64px]">
      <h1 className="text-[32px] font-[600] font-sans tracking-tight text-foreground text-center my-[64px] max-w-[600px] leading-tight px-[16px]">
        {d.freeDrops.title}
      </h1>

      <div className="flex flex-col gap-[64px] w-full max-w-[1200px] px-[24px]">
        {resources.map((res) => (
          <ResourceRowCard
            key={res.id}
            resource={res}
            previewText={d.freeDrops.preview}
            downloadText={d.freeDrops.download}
          />
        ))}
      </div>

      {/* Footer */}
      <MadeWithFooter
        madeWithText={d.submit.madeWith}
        andText={d.submit.and}
        className="justify-center gap-[2px] pt-[64px] pb-[32px] w-full mt-auto"
      />
    </div>
  );
}
