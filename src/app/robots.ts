import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "https://prohorcloud.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "Anthropic-ai",
          "Claude-Web",
        ],
        allow: ["/", "/docs/"],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
  };
}
