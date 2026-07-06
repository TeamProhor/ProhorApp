import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "প্রহর (Prohor) - Next.js Starter Kit with Supabase & Tailwind CSS",
  description:
    "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
  keywords: [
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "Starter Kit",
    "Bangla Developer Template",
    "Prohor",
    "প্রহর",
  ],
  authors: [{ name: "Prohor Team" }],
  openGraph: {
    title: "প্রহর (Prohor) - Next.js Starter Kit",
    description:
      "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
    type: "website",
    locale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "প্রহর (Prohor) - Next.js Starter Kit",
    description:
      "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
  },
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Prohor Next.js Starter Kit",
  operatingSystem: "All",
  applicationCategory: "DeveloperApplication",
  description:
    "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export const siteFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "প্রহর (Prohor) স্টার্টার কিট কী?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "প্রহর হলো একটি আধুনিক এবং দ্রুতগতির Next.js স্টার্টার কিট যা Supabase ডাটাবেজ, Tailwind CSS স্টাইলিং, Biome লিন্টিং এবং GSAP এনিমেশন ফ্রেমওয়ার্কের সাথে সম্পূর্ণরূপে সজ্জিত।",
      },
    },
    {
      "@type": "Question",
      name: "এটি দিয়ে কীভাবে কাজ শুরু করব?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "প্রজেক্টটি ক্লোন করে সরাসরি 'bun install' এবং 'bun run dev' কমান্ড চালুর মাধ্যমে ডেভেলপমেন্ট শুরু করা যাবে।",
      },
    },
  ],
};
