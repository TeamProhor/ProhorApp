import { Play } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";

export default async function Resources({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
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
        {d.resources.title}
      </h1>

      <div className="flex flex-col gap-[64px] w-full max-w-[1200px] px-[24px]">
        {resources.map((res) => (
          <div key={res.id} className="flex flex-col w-full gap-[16px]">
            {/* Header / Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] w-full">
              <div className="flex flex-row items-center gap-[16px]">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 m-auto w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={24} weight="fill" color="currentColor" />
                  </div>
                  <Image
                    src={res.thumbnail}
                    alt={res.title}
                    width={120}
                    height={120}
                    className="w-[120px] h-auto rounded-[8px] object-cover"
                  />
                </a>
                <h2 className="text-[22px] font-[600] font-sans tracking-tight text-foreground">
                  {res.title}
                </h2>
              </div>

              <div className="flex flex-row items-center gap-[16px]">
                <Button
                  variant="ghost"
                  className="text-[14px] text-muted-foreground font-sans hover:text-foreground hover:bg-transparent transition-colors"
                >
                  {d.resources.preview}
                </Button>
                <Button className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground px-[16px] py-[8px] rounded-[12px] h-auto text-[14px] font-[400] font-sans">
                  {d.resources.download}
                </Button>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative w-full flex overflow-x-auto gap-[16px] pb-[16px] no-scrollbar snap-x snap-mandatory">
              {res.images.map((img, i) => (
                <div
                  key={img}
                  className="flex-shrink-0 w-[85vw] md:w-[400px] aspect-video bg-muted border-[0.5px] border-border rounded-[12px] overflow-hidden flex items-center justify-center snap-center"
                >
                  <Image
                    src={img}
                    alt={`${res.title} component ${i}`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-row items-center justify-center gap-[2px] pt-[64px] pb-[32px] w-full mt-auto">
        <h3 className="text-muted-foreground whitespace-nowrap text-[16px] font-[400] font-sans">
          {d.submit.madeWith}
        </h3>
        <Image
          src="/icons/heart.svg"
          alt="heart"
          width={24}
          height={24}
          className="shrink-0"
        />
        <h3 className="text-muted-foreground whitespace-nowrap text-[16px] font-[400] font-sans">
          {d.submit.and}
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
